#!/usr/bin/env node

import fs from "fs-extra";
import path from "path";

import { initCommand } from "./commands/init";
import { loadConfig } from "./config/manager";
import { generateWithOpenCode } from "./providers/opencode";

async function main() {
  const arg = process.argv[2];

  if (!arg) {
    console.log("Usage:");
    console.log("  notes init");
    console.log("  notes <rust-file>");
    process.exit(1);
  }

  if (arg === "init") {
    await initCommand();
    process.exit(0);
  }


  const inputPath = arg;

  const absolutePath = path.resolve(inputPath);

  if (!fs.existsSync(absolutePath)) {
    console.log("File not found.");
    process.exit(1);
  }

  const stats = fs.statSync(absolutePath);

  if (!stats.isFile()) {
    console.log(
      "Currently only single Rust files are supported."
    );

    process.exit(1);
  }

  if (!absolutePath.endsWith(".rs")) {
    console.log(
      "Only Rust (.rs) files are supported currently."
    );

    process.exit(1);
  }


  const config = loadConfig();

  const vaultPath = config.vaultPath;

  if (!fs.existsSync(vaultPath)) {
    console.log(
      "Configured Obsidian vault does not exist."
    );

    process.exit(1);
  }


  const code = fs.readFileSync(
    absolutePath,
    "utf-8"
  );

  const promptPath = path.join(
    __dirname,
    "..",
    "prompts",
    "rust.txt"
  );

  if (!fs.existsSync(promptPath)) {
    console.log("Prompt file missing.");
    process.exit(1);
  }

  const prompt = fs.readFileSync(
    promptPath,
    "utf-8"
  );


  const fullPrompt = `
${prompt}

Rust code:

\`\`\`rust
${code}
\`\`\`
`;


  console.log("Generating notes...");

  let result = "";

  try {
    result = generateWithOpenCode(fullPrompt);
  } catch (error) {
    console.log(
      "Failed to generate notes using OpenCode."
    );

    console.error(error);

    process.exit(1);
  }


  const outputDir = path.join(
    vaultPath,
    "Rust"
  );

  fs.ensureDirSync(outputDir);

  const fileName = path.basename(
    inputPath,
    ".rs"
  );

  const outputPath = path.join(
    outputDir,
    `${fileName}.md`
  );

  fs.writeFileSync(outputPath, result);

  console.log(
    `✓ ${fileName}.md`
  );
}

main();