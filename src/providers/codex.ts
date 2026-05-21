import { execSync } from "child_process";

export function generateWithCodex(
  prompt: string
): string {

  return execSync(
    "codex",
    {
      input: prompt,
      encoding: "utf-8",
      stdio: "pipe"
    }
  );
}
