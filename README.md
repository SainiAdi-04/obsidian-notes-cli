# Obsidian Script

A terminal-first CLI tool that converts source code into concise revision notes for Obsidian using AI agents like OpenCode, Codex, or Copilot.

Currently optimized for Rust learning workflows.

---

# Features

- Generate concise markdown notes from Rust files
- Save notes directly into an Obsidian vault
- Global CLI command
- TypeScript-based architecture
- AI-provider agnostic design
- Prompt-based note generation
- Revision-oriented note structure

---

# Motivation

While learning Rust, a lot of useful understanding gets lost inside:
- experiments
- compiler errors
- temporary code snippets
- random examples

This tool turns those learnings into structured Obsidian notes automatically.

Example workflow:

```text
Rust File
   ↓
AI Analysis
   ↓
Markdown Notes
   ↓
Obsidian Vault
```

---

# Project Structure

```text
obsidian-script/
├── prompts/
│   └── rust.txt
├── src/
│   └── index.ts
├── dist/
├── .env
├── package.json
└── tsconfig.json
```

---

# Installation

## Clone the repository

```bash
git clone <repo-url>
cd obsidian-script
```

---

## Install dependencies

```bash
npm install
```

---

## Build the project

```bash
npm run build
```

---

## Install globally

```bash
npm link
```

This creates a global command:

```bash
notes
```

---

# Environment Variables

Create a `.env` file in the project root:

```env
OBSIDIAN_VAULT=/path/to/your/obsidian/vault
```

Example:

```env
OBSIDIAN_VAULT=/home/aditya/Documents/Obsidian
```

---

# Usage

## Generate notes from a Rust file

```bash
notes ownership.rs
```

---

## Example

Input:

```rust
fn main() {
    let s1 = String::from("hello");
    let s2 = s1;
}
```

Generated note:

```md
# Ownership

## Core Idea
Each value has a single owner.

## Common Mistake
Using moved values after assignment.
```

---

# Current Tech Stack

- TypeScript
- Node.js
- fs-extra
- dotenv
- OpenCode / Codex (planned integration)
- Obsidian Markdown

---

# Current Status

MVP working:
- CLI setup
- File parsing
- Prompt loading
- Markdown generation
- Obsidian output

Planned:
- Folder support
- Recursive scanning
- Daily learning logs
- Flashcard generation
- Compiler error summarization
- Auto-linking concepts
- Watch mode

---

# Development

Run locally:

```bash
npx tsx src/index.ts <file>
```

Example:

```bash
npx tsx src/index.ts examples/ownership.rs
```

---

# Build

```bash
npm run build
```

---

# Notes

The project is intentionally:
- terminal-first
- lightweight
- markdown-native
- workflow-oriented

No databases, dashboards, or heavy abstractions.

---

