#!/usr/bin/env node

import fs from "fs-extra";
import path from "path";
import { execSync } from "child_process";
import dotenv from "dotenv";

dotenv.config({
  path: path.join(__dirname, "..", ".env")
});

const inputPath = process.argv[2];

if(!inputPath){
    console.log("Usage: notes <rust file>");
    process.exit(1);
};

const absolutePath = path.resolve(inputPath)

if(!fs.existsSync(absolutePath)){
    console.log("File not found.");
    process.exit(1);
}

const code = fs.readFileSync(absolutePath, "utf-8");

const promptPath = path.join(
  __dirname,
   "..",
  "prompts",
  "rust.txt"
);

const prompt = fs.readFileSync(promptPath, "utf-8");

const fullPrompt = `${prompt}
Rust code:
\`\`\`rust
${code}
\`\`\`
`;


console.log("Generating notes...");

// const result = execSync("opencode run", {
//     input: fullPrompt,
//     encoding: "utf-8",
// });

const result = `
---
tags:
  - rust
created: 2026-05-17
---

# Ownership

## Core Idea
Each value has a single owner.

## Syntax
- '&' creates a reference
- ownership moves on assignment

## Example

\`\`\`rust
let s1 = String::from("hello");
let s2 = s1;
\`\`\`

## Common Mistake
Using moved values.

## Mental Model
Ownership prevents memory bugs.
`;



const vault = process.env.OBSIDIAN_VAULT!;
if (!vault) {
  console.log("OBSIDIAN_VAULT missing in .env");
  process.exit(1);
}
const outputDir = path.join(vault, "Rust");

fs.ensureDirSync(outputDir);

const fileName = path.basename(inputPath, ".rs");
const outputPath = path.join(outputDir,`${fileName}.md`);

fs.writeFileSync(outputPath, result);

console.log(`Notes generated at: ${outputPath}`);
