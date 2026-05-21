import { execSync } from "child_process";

export function generateWithClaude(
  prompt: string
): string {

  return execSync(
    "claude-code",
    {
      input: prompt,
      encoding: "utf-8",
      stdio: "pipe"
    }
  );
}
