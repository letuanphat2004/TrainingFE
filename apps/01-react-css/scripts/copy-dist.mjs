import { cpSync, mkdirSync, rmSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDir = dirname(fileURLToPath(import.meta.url));
const appDir = resolve(scriptDir, '..');
const sourceDir = resolve(appDir, 'dist');
const targetDir = resolve(appDir, '..', '..', 'dist');

mkdirSync(targetDir, { recursive: true });
rmSync(targetDir, { recursive: true, force: true });
cpSync(sourceDir, targetDir, { recursive: true });
console.log(`Copied build output from ${sourceDir} to ${targetDir}`);
