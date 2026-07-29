import { createHash } from "node:crypto";
import {
  mkdirSync,
  readFileSync,
  readdirSync,
  statSync,
  writeFileSync,
} from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const workspaceRoot = path.resolve(scriptDirectory, "..");
const sourceDirectoryName =
  "Beautice - Clinic & Beauty Consultation Website Design (Community)";
const sourceDirectory = path.join(workspaceRoot, sourceDirectoryName);
const outputPath = path.join(
  workspaceRoot,
  "reference",
  "manifests",
  "assets.generated.json",
);

function readPngDimensions(buffer) {
  const signature = "89504e470d0a1a0a";
  if (buffer.length < 24 || buffer.subarray(0, 8).toString("hex") !== signature) {
    return null;
  }

  return {
    width: buffer.readUInt32BE(16),
    height: buffer.readUInt32BE(20),
  };
}

function readSvgDimensions(buffer) {
  const source = buffer.toString("utf8");
  const width = source.match(/\bwidth=["']([\d.]+)(?:px)?["']/i);
  const height = source.match(/\bheight=["']([\d.]+)(?:px)?["']/i);
  const viewBox = source.match(
    /\bviewBox=["'][\d.-]+\s+[\d.-]+\s+([\d.]+)\s+([\d.]+)["']/i,
  );

  if (width && height) {
    return { width: Number(width[1]), height: Number(height[1]) };
  }

  if (viewBox) {
    return { width: Number(viewBox[1]), height: Number(viewBox[2]) };
  }

  return null;
}

function categorize(fileName) {
  const name = fileName.toLowerCase();

  if (
    name === "home 1.png" ||
    name === "home 2.png" ||
    name.startsWith("beautice - clinic")
  ) {
    return "reference";
  }
  if (name.includes("logo")) return "brand";
  if (name.startsWith("unsplash_")) return "photo";
  if (
    /(background|\bbg\b|bubble|wave line|ellipse|bottom bg|footer bg)/i.test(
      fileName,
    )
  ) {
    return "background";
  }
  if (/(illustration|animation|contact animations|frame|group)/i.test(fileName)) {
    return "illustration";
  }
  if (/(facebook|instagram|linkedin|twitter|youtube)/i.test(fileName)) {
    return "social";
  }
  if (/(play|polygon|totop|rectangle)/i.test(fileName)) return "control";
  if (/^logo\d/i.test(fileName)) return "partner";
  return "icon-or-misc";
}

const files = readdirSync(sourceDirectory, { withFileTypes: true })
  .filter((entry) => entry.isFile())
  .map((entry) => entry.name)
  .sort((left, right) => left.localeCompare(right, "en"));

const records = files.map((fileName) => {
  const absolutePath = path.join(sourceDirectory, fileName);
  const buffer = readFileSync(absolutePath);
  const extension = path.extname(fileName).toLowerCase();
  const dimensions =
    extension === ".png"
      ? readPngDimensions(buffer)
      : extension === ".svg"
        ? readSvgDimensions(buffer)
        : null;

  return {
    file: fileName,
    category: categorize(fileName),
    extension,
    bytes: statSync(absolutePath).size,
    width: dimensions?.width ?? null,
    height: dimensions?.height ?? null,
    sha256: createHash("sha256").update(buffer).digest("hex"),
  };
});

const categoryCounts = records.reduce((counts, record) => {
  counts[record.category] = (counts[record.category] ?? 0) + 1;
  return counts;
}, {});

const hashGroups = Object.groupBy(records, (record) => record.sha256);
const duplicateGroups = Object.values(hashGroups)
  .filter((group) => group.length > 1)
  .map((group) => group.map((record) => record.file));

const manifest = {
  schemaVersion: 1,
  generatedAt: new Date().toISOString(),
  sourceDirectory: sourceDirectoryName,
  totalFiles: records.length,
  categoryCounts,
  duplicateGroups,
  files: records,
};

mkdirSync(path.dirname(outputPath), { recursive: true });
writeFileSync(outputPath, `${JSON.stringify(manifest, null, 2)}\n`, "utf8");

console.log(
  `Indexed ${manifest.totalFiles} source assets in ${path.relative(workspaceRoot, outputPath)}.`,
);
