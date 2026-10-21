import { copyFile, mkdir } from "node:fs/promises";
import { resolve } from "node:path";

const projectRoot = process.cwd();
const publicOutput = resolve(projectRoot, ".output/public");
const hostingFiles = resolve(projectRoot, "deploy/shared-hosting");

await mkdir(publicOutput, { recursive: true });

for (const file of [".htaccess", "contact.php", "README.md"]) {
  await copyFile(resolve(hostingFiles, file), resolve(publicOutput, file));
}

console.info(`Shared-hosting files are ready in ${publicOutput}`);