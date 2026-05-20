import path from "node:path";
import os from "os";

export const CONFIG_DIR = path.join(
    os.homedir(),
    ".config",
    "notes-cli"
)

export const CONFIG_PATH = path.join(
  CONFIG_DIR,
  "config.json"
);