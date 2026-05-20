import { execSync } from "child_process";

export function generateWithOpenCode(
  prompt: string
): string {

  return execSync(
    "opencode run",
    {
      input: prompt,
      encoding: "utf-8"
    }
  );
}