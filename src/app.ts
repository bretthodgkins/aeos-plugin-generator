#!/usr/bin/env node
require('dotenv').config()

import { Command } from 'commander';

import pluginGenerator from './generator';

let main = async () => {
  const program = new Command();

  program
    .version('0.0.1')
    .requiredOption('-n, --name <name>', 'name of the new plugin, and the folder it will be created in')
    .requiredOption('-p, --prompt <prompt>', 'a prompt to instruct what the plugin should do')
    .parse(process.argv);

  const options = program.opts();
  await pluginGenerator.generatePlugin(options.name, options.prompt);
}

main();