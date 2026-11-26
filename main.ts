// Write the selected one-line entry to the make.fun output directory.
const { mkdirSync, writeFileSync } = require("node:fs");
const { join } = require("node:path");

const text = "I declined a meeting; they scheduled a follow-up to discuss it. I accepted.";

if ([...text].length < 1 || [...text].length > 200 || text.trim().length === 0) {
  throw new Error("Entry must contain 1-200 non-whitespace characters.");
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), text, { encoding: "utf8" });
