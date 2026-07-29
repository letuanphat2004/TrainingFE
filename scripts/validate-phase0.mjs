import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { routes } from "../packages/design-contract/src/routes.js";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const workspaceRoot = path.resolve(scriptDirectory, "..");
const errors = [];

const requiredFiles = [
  "package.json",
  "package-lock.json",
  "README.md",
  "PROJECT_PLAN.md",
  "AGENTS.md",
  "packages/design-contract/package.json",
  "packages/design-contract/src/tokens.js",
  "packages/design-contract/src/content.js",
  "packages/design-contract/src/assets.js",
  "packages/design-contract/src/routes.js",
  "packages/design-contract/src/reference-screens.json",
  "reference/manifests/assets.generated.json",
  "docs/01-file-structure.md",
  "docs/02-design-inventory.md",
  "docs/07-visual-checklist.md",
];

for (const relativePath of requiredFiles) {
  if (!existsSync(path.join(workspaceRoot, relativePath))) {
    errors.push(`Missing required Phase 0 file: ${relativePath}`);
  }
}

const screenManifestPath = path.join(
  workspaceRoot,
  "packages/design-contract/src/reference-screens.json",
);
const screens = JSON.parse(readFileSync(screenManifestPath, "utf8"));

if (routes.length !== 8) {
  errors.push(`Expected 8 routes, received ${routes.length}.`);
}

if (screens.length !== 8) {
  errors.push(`Expected 8 reference screens, received ${screens.length}.`);
}

const routePaths = new Set(routes.map((route) => route.path));
const screenRoutes = new Set(screens.map((screen) => screen.route));

if (routePaths.size !== 8) errors.push("Route paths are not unique.");
if (screenRoutes.size !== 8) errors.push("Reference screen routes are not unique.");

for (const route of routes) {
  if (!screenRoutes.has(route.path)) {
    errors.push(`No reference screen mapped to route ${route.path}.`);
  }
}

function readPngDimensions(absolutePath) {
  const buffer = readFileSync(absolutePath);
  const signature = "89504e470d0a1a0a";
  if (buffer.length < 24 || buffer.subarray(0, 8).toString("hex") !== signature) {
    return null;
  }
  return {
    width: buffer.readUInt32BE(16),
    height: buffer.readUInt32BE(20),
  };
}

for (const screen of screens) {
  const absolutePath = path.join(workspaceRoot, screen.file);
  if (!existsSync(absolutePath)) {
    errors.push(`Missing extracted reference screen: ${screen.file}`);
    continue;
  }

  const dimensions = readPngDimensions(absolutePath);
  if (
    dimensions?.width !== screen.width ||
    dimensions?.height !== screen.height
  ) {
    errors.push(
      `Unexpected dimensions for ${screen.file}: ` +
        `${dimensions?.width ?? "?"}x${dimensions?.height ?? "?"}.`,
    );
  }
}

const assetManifestPath = path.join(
  workspaceRoot,
  "reference/manifests/assets.generated.json",
);
if (existsSync(assetManifestPath)) {
  const assetManifest = JSON.parse(readFileSync(assetManifestPath, "utf8"));
  if (assetManifest.totalFiles < 90) {
    errors.push(
      `Asset inventory looks incomplete: ${assetManifest.totalFiles} files.`,
    );
  }
}

if (errors.length > 0) {
  console.error("Phase 0 validation failed:");
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  console.log(
    "Phase 0 validation passed: 8 routes, 8 desktop references and a complete design contract.",
  );
}
