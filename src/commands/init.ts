import prompts from "prompts";
import { saveConfig } from "../config/manager";

export async function initCommand() {
    const response = await prompts([
        {
            type:"text",
            name:"vaultPath",
            message:"Obsidian Vault Path:"
        },
        {
            type:"select",
            name:"provider",
            message:"Providers",
            choices:[
                {
                    title:"Claude Code",
                    value:"claudecode"
                },
                {
                    title:"Codex",
                    value:"codex"
                },
                {
                    title:"OpenCode",
                    value:"opencode"
                }
            ]
        }
    ])

    saveConfig(response);
    console.log("Setup Complete")
}