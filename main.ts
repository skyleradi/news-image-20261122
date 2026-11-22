// news-image-20261122 — deliver the finished broadsheet to the grader.
// The 1024x1024 front page (entry.png) was composed in-session; this program
// just places it where the scorer looks: /output/entry.png.
import { copyFileSync, mkdirSync, statSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const repoDir = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "out";

// sanity guard: the deliverable must exist and stay under the 1 MiB gate
const src = join(repoDir, "entry.png");
const size = statSync(src).size;
if (size > 1048576) {
  throw new Error(`entry.png is ${size} bytes, over the 1 MiB gate`);
}

mkdirSync(outDir, { recursive: true });
const dest = join(outDir, "entry.png");
copyFileSync(src, dest);

console.log(`news-image-20261122: front page copied to ${dest}`);
