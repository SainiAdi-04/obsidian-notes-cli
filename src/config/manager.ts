import fs from "fs-extra"
import { CONFIG_DIR, CONFIG_PATH } from "./constants"

import { NotesConfig } from "./types"

export function saveConfig(config: NotesConfig){
    fs.ensureDirSync(CONFIG_DIR);

    fs.writeJSONSync(CONFIG_PATH, config, {spaces:2})
};

export function loadConfig():NotesConfig {
    if(!fs.existsSync(CONFIG_PATH)){
        throw new Error("Configuration not initialised. Run `notes init`.")
    }
    return fs.readJSONSync(CONFIG_PATH);
}