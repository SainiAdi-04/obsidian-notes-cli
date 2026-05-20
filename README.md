# Notes CLI

A terminal-first CLI tool that converts source code into concise revision notes for Obsidian using AI coding agents like OpenCode, Claude Code, and Codex.

Currently optimized for Rust learning workflows.

---

# Features

- Generate concise markdown revision notes from Rust files
- Save notes directly into an Obsidian vault
- Global CLI command
- Interactive setup via `notes init`
- Config-based architecture
- Provider-ready architecture
- Prompt-based note generation
- Revision-oriented note structure
- Lightweight and terminal-first

---

# Motivation

While learning systems programming languages like Rust, useful understanding often gets lost inside:
- experiments
- compiler errors
- temporary snippets
- debugging sessions
- random examples

This tool turns those learnings into structured, searchable Obsidian notes automatically.

---

# Workflow

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
notes-cli/
├── prompts/
│   └── rust.txt
├── src/
│   ├── commands/
│   ├── config/
│   ├── providers/
│   └── index.ts
├── dist/
├── package.json
└── tsconfig.json
```

---

# Installation

## Clone the repository

```bash
git clone <repo-url>
cd notes-cli
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

This creates a global CLI command:

```bash
notes
```

---

# Initial Setup

Run:

```bash
notes init
```

You will be prompted for:
- Obsidian vault path
- AI provider

Configuration is stored globally at:

```text
~/.config/notes-cli/config.json
```

Example:

```json
{
  "vaultPath": "/home/user/Documents/Obsidian",
  "provider": "opencode"
}
```

---

# Usage

## Generate notes from a Rust file

```bash
notes ownership.rs
```

---

# Example

## Input

```rust
fn main() {
    let s1 = String::from("hello");
    let s2 = s1;
}
```

---

## Generated Note

```md
# Ownership

## Core Idea
Each value in Rust has a single owner.

## Common Mistake
Using moved values after assignment.
```

---

# Current Tech Stack

- TypeScript
- Node.js
- fs-extra
- prompts
- OpenCode
- Obsidian Markdown

---

# Current Status

MVP completed:
- Global CLI setup
- Interactive initialization
- Config management
- Prompt loading
- OpenCode integration
- Markdown generation
- Obsidian integration

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

# Philosophy

The project is intentionally:
- terminal-first
- lightweight
- markdown-native
- workflow-oriented
- minimal in abstraction

No dashboards, databases, or unnecessary UI layers.

---
