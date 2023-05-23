import { 
  AeosPlugin,
  Command,
  CommandResult,
  CommandType,
  store,
  logger,
} from '@bhodgk/aeos'

import pluginGenerator from './generator';

export class PluginGeneratorPlugin implements AeosPlugin {
  name = 'Plugin Generator';
  description = 'Generate a plugin for Aeos using a single prompt';
  version = '0.0.1';

  private commands: Command[];
  private isEnabled = false;

  constructor() {
    this.commands = [
      {
        "format": "plugin-generator:generate plugin ${name} with prompt ${prompt}",
        "type": CommandType.Function,
        "function": async (args: Record<string, string>) => await this.generatePlugin(args),
        "requiresExactMatch": false,
        "examples": [
          {
            prompt: "create facebook plugin",
            output: [ `plugin-generator:generate plugin "aeos-facebook" with prompt "Create a plugin with all the most common Facebook APIs"` ],
          },
          {
            prompt: "can you build a plugin that automates the browser",
            output: [ `plugin-generator:generate plugin "aeos-puppeteer" with prompt "Create a puppeteer plugin that provides commands for the most common features of the Puppeteer library"` ],
          },
        ],
      },
    ];

    this.isEnabled = true;
  }

  getCommands(): Command[] {
    return this.commands;
  }

  getIsEnabled(): boolean {
    return this.isEnabled;
  }

  // plugin-generator:generate plugin called ${name} with description ${description} and prompt ${prompt}
  async generatePlugin(args: Record<string, string>): Promise<CommandResult> {
    if (!args.name) {
      return {
        success: false,
        message: 'Name not provided',
      }
    }

    try {
      await pluginGenerator.generatePlugin(args.name, args.prompt);
    } catch (err : any) {
      logger.log(err);
      return {
        success: false,
        message: 'Error occurred while generating plugin',
      };
    }

    return {
      success: true,
    }
  }
}

export default new PluginGeneratorPlugin();