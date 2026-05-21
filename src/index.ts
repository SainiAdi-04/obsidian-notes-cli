#!/usr/bin/env node

import { parseArgs } from "./cli/parse"
import { initCommand } from "./commands/init"
import { generateCommand } from "./commands/generate"

async function main() {
  const args = parseArgs(process.argv)

  if (args.command === "init") {
    await initCommand()
    process.exit(0)
  }

  await generateCommand(args.filePath)
}

main()
