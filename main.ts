// news-image-20261122 — deliver the finished broadsheet to the grader.
// The 1024x1024 front page (entry.png) was composed in-session; this program
// just places it where the scorer looks: /output/entry.png.
import { copyFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const repoDir = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "out";

mkdirSync(outDir, { recursive: true });
const dest = join(outDir, "entry.png");
copyFileSync(join(repoDir, "entry.png"), dest);

console.log(`news-image-20261122: front page copied to ${dest}`);
