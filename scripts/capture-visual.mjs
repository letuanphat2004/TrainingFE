import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import pixelmatch from "pixelmatch";
import { chromium } from "playwright-core";
import { PNG } from "pngjs";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const workspaceRoot = path.resolve(scriptDirectory, "..");
const baseUrl = process.env.BEAUTICE_BASE_URL ?? "http://127.0.0.1:5173";
const chromePath =
  process.env.CHROME_PATH ??
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const minimumSimilarity = 0.75;

const screens = JSON.parse(
  readFileSync(
    path.join(
      workspaceRoot,
      "packages",
      "design-contract",
      "src",
      "reference-screens.json",
    ),
    "utf8",
  ),
);

const actualDirectory = path.join(
  workspaceRoot,
  "tests",
  "visual",
  "actual",
  "01-react-css",
);
const diffDirectory = path.join(
  workspaceRoot,
  "tests",
  "visual",
  "diff",
  "01-react-css",
);
const reportPath = path.join(
  workspaceRoot,
  "tests",
  "visual",
  "visual-report.json",
);

mkdirSync(actualDirectory, { recursive: true });
mkdirSync(diffDirectory, { recursive: true });

function whiteCanvas(width, height) {
  const png = new PNG({ width, height });
  png.data.fill(255);
  return png;
}

function comparePng(referencePath, actualPath, diffPath) {
  const reference = PNG.sync.read(readFileSync(referencePath));
  const actual = PNG.sync.read(readFileSync(actualPath));
  const width = Math.max(reference.width, actual.width);
  const height = Math.max(reference.height, actual.height);
  const referenceCanvas = whiteCanvas(width, height);
  const actualCanvas = whiteCanvas(width, height);
  const diff = whiteCanvas(width, height);

  PNG.bitblt(
    reference,
    referenceCanvas,
    0,
    0,
    reference.width,
    reference.height,
    0,
    0,
  );
  PNG.bitblt(actual, actualCanvas, 0, 0, actual.width, actual.height, 0, 0);

  const differentPixels = pixelmatch(
    referenceCanvas.data,
    actualCanvas.data,
    diff.data,
    width,
    height,
    {
      threshold: 0.12,
      includeAA: false,
      alpha: 0.65,
      diffColor: [255, 0, 96],
    },
  );

  writeFileSync(diffPath, PNG.sync.write(diff));

  return {
    reference: { width: reference.width, height: reference.height },
    actual: { width: actual.width, height: actual.height },
    heightDelta: actual.height - reference.height,
    differentPixels,
    totalPixels: width * height,
    similarity: Number((1 - differentPixels / (width * height)).toFixed(4)),
  };
}

const browser = await chromium.launch({
  executablePath: chromePath,
  headless: true,
  args: ["--font-render-hinting=none"],
});

const context = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 1,
});

const report = {
  generatedAt: new Date().toISOString(),
  baseUrl,
  viewport: { width: 1440, height: 900, deviceScaleFactor: 1 },
  routes: [],
};

try {
  for (const screen of screens) {
    const page = await context.newPage();
    const consoleErrors = [];
    page.on("console", (message) => {
      if (message.type() === "error") consoleErrors.push(message.text());
    });
    page.on("pageerror", (error) => consoleErrors.push(error.message));

    const response = await page.goto(`${baseUrl}${screen.route}`, {
      waitUntil: "networkidle",
    });
    await page.evaluate(() => document.fonts.ready);

    const metrics = await page.evaluate(() => ({
      title: document.title,
      heading: document.querySelector("h1, h2")?.textContent?.trim() ?? "",
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
      scrollHeight: document.documentElement.scrollHeight,
      sections: Array.from(
        document.querySelectorAll("main > section, main > footer, main > .contact-map"),
      ).map((element) => ({
        className: element.className,
        top: Math.round(element.getBoundingClientRect().top + window.scrollY),
        height: Math.round(element.getBoundingClientRect().height),
      })),
    }));

    const actualPath = path.join(actualDirectory, `${screen.id}.png`);
    const diffPath = path.join(diffDirectory, `${screen.id}.png`);
    await page.screenshot({ path: actualPath, fullPage: true });

    const comparison = comparePng(
      path.join(workspaceRoot, screen.file),
      actualPath,
      diffPath,
    );

    report.routes.push({
      id: screen.id,
      route: screen.route,
      status: response?.status() ?? null,
      consoleErrors,
      horizontalOverflow: metrics.scrollWidth - metrics.clientWidth,
      documentHeight: metrics.scrollHeight,
      heading: metrics.heading,
      sections: metrics.sections,
      ...comparison,
    });

    console.log(
      `${screen.route.padEnd(12)} actual=${comparison.actual.height} ` +
        `reference=${comparison.reference.height} ` +
        `delta=${comparison.heightDelta} similarity=${comparison.similarity}`,
    );
    await page.close();
  }
} finally {
  await context.close();
  await browser.close();
}

writeFileSync(reportPath, `${JSON.stringify(report, null, 2)}\n`, "utf8");

const failures = report.routes.filter(
  (route) =>
    route.status !== 200 ||
    route.consoleErrors.length > 0 ||
    route.horizontalOverflow > 0 ||
    route.heightDelta !== 0 ||
    route.actual.width !== route.reference.width ||
    route.similarity < minimumSimilarity,
);

if (failures.length > 0) {
  console.error(
    `Visual smoke checks failed for: ${failures.map((route) => route.route).join(", ")}`,
  );
  process.exitCode = 1;
} else {
  console.log(
    `All 8 routes passed HTTP, console, overflow, dimensions and similarity >= ${minimumSimilarity}.`,
  );
}
