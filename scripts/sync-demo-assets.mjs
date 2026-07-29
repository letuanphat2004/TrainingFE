import {
  copyFileSync,
  existsSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  rmSync,
} from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const workspaceRoot = path.resolve(scriptDirectory, "..");
const sourceDirectory = path.join(
  workspaceRoot,
  "Beautice - Clinic & Beauty Consultation Website Design (Community)",
);
const targetDirectory = path.join(
  workspaceRoot,
  "apps",
  "01-react-css",
  "public",
  "assets",
);

const resolvedTarget = path.resolve(targetDirectory);
const expectedRoot = path.resolve(workspaceRoot, "apps", "01-react-css", "public");
if (!resolvedTarget.startsWith(expectedRoot)) {
  throw new Error(`Refusing to write outside ${expectedRoot}`);
}

if (existsSync(targetDirectory)) {
  rmSync(targetDirectory, { recursive: true, force: true });
}
mkdirSync(targetDirectory, { recursive: true });

const excluded = new Set([
  "Beautice - Clinic & Beauty Consultation Website Design (Community).png",
  "Home 1.png",
  "Home 2.png",
]);

let copied = 0;
for (const fileName of readdirSync(sourceDirectory)) {
  if (excluded.has(fileName)) continue;
  const sourcePath = path.join(sourceDirectory, fileName);
  const manifest = JSON.parse(
    readFileSync(
      path.join(workspaceRoot, "reference", "manifests", "assets.generated.json"),
      "utf8",
    ),
  );
  if (!manifest.files.some((asset) => asset.file === fileName)) continue;
  copyFileSync(sourcePath, path.join(targetDirectory, fileName));
  copied += 1;
}

console.log(`Copied ${copied} implementation assets to Demo 01.`);
