import { generateWithOpenCode } from "./opencode"
import { generateWithClaude } from "./claudecode"
import { generateWithCodex } from "./codex"

type ProviderFn = (prompt: string) => string

const providers: Record<string, ProviderFn> = {
  opencode: generateWithOpenCode,
  claudecode: generateWithClaude,
  codex: generateWithCodex,
}

export function generate(provider: string, prompt: string): string {
  const fn = providers[provider]
  if (!fn) {
    throw new Error(
      `Unknown provider "${provider}". Available: ${Object.keys(providers).join(", ")}`
    )
  }
  return fn(prompt)
}
