import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright-core";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const workspaceRoot = path.resolve(scriptDirectory, "..");
const baseUrl = process.env.BEAUTICE_BASE_URL ?? "http://127.0.0.1:5173";
const chromePath =
  process.env.CHROME_PATH ??
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";

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

const viewports = [
  { id: "mobile", width: 375, height: 812 },
  { id: "tablet", width: 768, height: 1024 },
  { id: "laptop", width: 1024, height: 768 },
  { id: "desktop", width: 1440, height: 900 },
  { id: "wide", width: 1920, height: 1080 },
];

const browser = await chromium.launch({
  executablePath: chromePath,
  headless: true,
  args: ["--font-render-hinting=none"],
});

const report = {
  generatedAt: new Date().toISOString(),
  baseUrl,
  matrix: [],
  interactions: [],
};
const failures = [];

function watchErrors(page) {
  const errors = [];
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text());
  });
  page.on("pageerror", (error) => errors.push(error.message));
  return errors;
}

try {
  for (const viewport of viewports) {
    const context = await browser.newContext({
      viewport: { width: viewport.width, height: viewport.height },
      deviceScaleFactor: 1,
    });

    for (const screen of screens) {
      const page = await context.newPage();
      const consoleErrors = watchErrors(page);
      const response = await page.goto(`${baseUrl}${screen.route}`, {
        waitUntil: "networkidle",
      });
      await page.evaluate(() => document.fonts.ready);

      const checks = await page.evaluate(() => {
        const root = document.documentElement;
        const images = Array.from(document.images);
        const controls = Array.from(
          document.querySelectorAll("input, textarea"),
        );
        return {
          horizontalOverflow: Math.max(0, root.scrollWidth - root.clientWidth),
          missingImageAlt: images.filter((image) => !image.hasAttribute("alt"))
            .length,
          brokenImages: images.filter(
            (image) => !image.complete || image.naturalWidth === 0,
          ).length,
          unlabeledControls: controls.filter((control) => {
            const id = control.getAttribute("id");
            return !control.closest("label") && !(id && document.querySelector(`label[for="${id}"]`));
          }).length,
          hasMainHeading: Boolean(document.querySelector("h1, h2")),
        };
      });

      const result = {
        viewport: viewport.id,
        width: viewport.width,
        height: viewport.height,
        route: screen.route,
        status: response?.status() ?? null,
        consoleErrors,
        ...checks,
      };
      report.matrix.push(result);

      if (
        result.status !== 200 ||
        result.consoleErrors.length > 0 ||
        result.horizontalOverflow > 0 ||
        result.missingImageAlt > 0 ||
        result.brokenImages > 0 ||
        result.unlabeledControls > 0 ||
        !result.hasMainHeading
      ) {
        failures.push(
          `${viewport.id} ${screen.route}: ${JSON.stringify(result)}`,
        );
      }
      await page.close();
    }

    await context.close();
  }

  const context = await browser.newContext({
    viewport: { width: 375, height: 812 },
    deviceScaleFactor: 1,
  });
  const page = await context.newPage();
  const interactionErrors = watchErrors(page);

  await page.goto(`${baseUrl}/`, { waitUntil: "networkidle" });
  await page.locator(".menu-toggle").click();
  const menuOpened =
    (await page.locator(".menu-toggle").getAttribute("aria-expanded")) ===
      "true" && (await page.locator(".site-header").evaluate((node) => node.classList.contains("is-menu-open")));
  await page.locator(".site-nav a[href='/about']").click();
  await page.waitForURL(`${baseUrl}/about`);
  report.interactions.push({
    name: "mobile navigation",
    passed: menuOpened && new URL(page.url()).pathname === "/about",
  });

  await page.goto(`${baseUrl}/contact`, { waitUntil: "networkidle" });
  await page.locator("input[name='firstName']").fill("Beautice");
  await page.locator("input[name='lastName']").fill("Visitor");
  await page.locator("input[name='email']").fill("visitor@example.com");
  await page.locator("textarea[name='message']").fill("Test inquiry");
  await page.locator(".contact-form button[type='submit']").click();
  const formMessage = await page.locator(".form-status").textContent();
  report.interactions.push({
    name: "contact form",
    passed: formMessage?.includes("Thank you") ?? false,
  });

  await page.goto(`${baseUrl}/services`, { waitUntil: "networkidle" });
  const secondAccordion = page.locator(".accordion__item").nth(1);
  await secondAccordion.locator("button").click();
  report.interactions.push({
    name: "services accordion",
    passed:
      (await secondAccordion.locator("button").getAttribute("aria-expanded")) ===
      "true",
  });

  await page.goto(`${baseUrl}/`, { waitUntil: "networkidle" });
  const videoButton = page.locator("[data-video-trigger]").first();
  await videoButton.click();
  report.interactions.push({
    name: "video control",
    passed: (await videoButton.getAttribute("aria-pressed")) === "true",
  });

  await page.goto(`${baseUrl}/team`, { waitUntil: "networkidle" });
  const testimonialText = page.locator(".testimonial-slider article p");
  const before = await testimonialText.textContent();
  await page.locator("[data-direction='1']").click();
  const after = await testimonialText.textContent();
  report.interactions.push({
    name: "testimonial slider",
    passed: Boolean(before && after && before !== after),
  });

  await page.goto(`${baseUrl}/contact`, { waitUntil: "networkidle" });
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.locator(".back-to-top").click();
  await page.waitForFunction(() => window.scrollY === 0);
  report.interactions.push({
    name: "back to top",
    passed: (await page.evaluate(() => window.scrollY)) === 0,
  });

  if (interactionErrors.length > 0) {
    failures.push(`interaction console errors: ${interactionErrors.join(" | ")}`);
  }
  for (const interaction of report.interactions) {
    if (!interaction.passed) failures.push(`interaction failed: ${interaction.name}`);
  }

  await page.close();
  await context.close();
} finally {
  await browser.close();
}

const reportDirectory = path.join(workspaceRoot, "tests", "smoke");
mkdirSync(reportDirectory, { recursive: true });
writeFileSync(
  path.join(reportDirectory, "01-react-css.json"),
  `${JSON.stringify(report, null, 2)}\n`,
);

if (failures.length > 0) {
  console.error(failures.join("\n"));
  process.exitCode = 1;
} else {
  console.log(
    `Passed ${report.matrix.length} responsive route checks and ${report.interactions.length} interaction checks.`,
  );
}
