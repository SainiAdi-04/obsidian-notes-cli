export type CliArgs =
  | { command: "init" }
  | { command: "generate"; filePath: string }

export function parseArgs(argv: string[]): CliArgs {
  const arg = argv[2]

  if (!arg) {
    console.log("Usage:");
    console.log("  notes init");
    console.log("  notes <rust-file>");
    process.exit(1);
  }

  if (arg === "init") return { command: "init" };

  return { command: "generate", filePath: arg };
}
