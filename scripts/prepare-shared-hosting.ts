import { cp, copyFile, mkdir } from "node:fs/promises";
import { resolve } from "node:path";

const projectRoot = process.cwd();
const publicOutput = resolve(projectRoot, ".output/public");
const staticOutput = resolve(projectRoot, "dist/client");
const hostingFiles = resolve(projectRoot, "deploy/shared-hosting");

await mkdir(publicOutput, { recursive: true });
await cp(staticOutput, publicOutput, { recursive: true, force: true });

for (const file of [".htaccess", "contact.php", "README.md"]) {
  await copyFile(resolve(hostingFiles, file), resolve(publicOutput, file));
}

console.info(`Shared-hosting files are ready in ${publicOutput}`);