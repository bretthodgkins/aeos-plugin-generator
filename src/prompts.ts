import { ChatCompletionRequestMessage } from "openai";

export const PLUGIN_INDEX_PROMPT_MESSAGES = [
  {
    role: 'system',
    content:
` // The following is an example of a plugin index.ts file. It contains a list of commands that Aeos will use to respond to user prompts.

import { 
  Command,
  CommandResult,
  CommandType,
  AeosPlugin,
  logger,
  store,
} from '@bhodgk/aeos'


export class ExamplePluginTemplate implements AeosPlugin {
  name = 'Example Plugin Template';
  description = 'Example Plugin Template for Aeos';
  version = '1.0.0';

  getCommands(): Command[] {
    return [
      {
        "format": "example:hello world to \${name}",
        "type": CommandType.Function,
        "function": async (args: Record<string, string>) => await this.exampleCommand(args),
        "requiresExactMatch": false, // if true, the prompt must exactly match the format
        "examples": [ // if an exact match is not required, this is an optional list of examples fed to OpenAI on how this command could be called
          {
            prompt: "Say hi to Amy from the Example Plugin I just installed", // if the user prompts something like this
            output: [ \`example:hello world to "Amy"\` ], // it should return this sequence of commands
          },
          {
            prompt: "Run the hello world example command",
            output: [ \`example:hello world to "Human"\` ], // this can also be used to provide examples of how to populate arguments if not specified
          },
        ]
      },
    ];
  }

  getIsEnabled(): boolean {
    return true;
  }

  async exampleCommand(args: Record<string, string>): Promise<CommandResult> {
    if (!args.name) {
      return {
        success: false,
        message: 'Missing name',
      }
    }

    store.addKeyValueToStore('enableLogToConsole', 'true'); // for testing purposes, this will enable logging to the console
    logger.log(\`Hello \${args.name}!\`);

    return {
      success: true,
    };
  }

};

export default new ExamplePluginTemplate();
`
  },
] as ChatCompletionRequestMessage[];