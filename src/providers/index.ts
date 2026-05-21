import { generateWithOpenCode } from "./opencode"
import { generateWithClaude } from "./claudecode"

type ProviderFn = (prompt: string) => string

const providers: Record<string, ProviderFn> = {
  opencode: generateWithOpenCode,
  claudecode: generateWithClaude,
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
