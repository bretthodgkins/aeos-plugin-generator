# Aeos in Notion

**"Aeos in Notion"** lets you and your team use Notion as a command center to conduct an army of AI agents to automate complex tasks using natural language.

<br>

## What is Aeos?

[Aeos](https://github.com/bretthodgkins/aeos) is an open-source AI automation platform that harnesses the power of Large Language Models (LLMs) to build and run complex automations.

It's designed to be highly extendible, allowing users to create their own automations, and provide examples of them being called using natural language.

It also supports a robust plugin system which adds capabilities such as computer vision, OCR, image recognition, browser automation, GUI automation, as well as, integrations with many popular applications including Google Sheets, Google Drive, Notion, Slack, Hubspot, AWS and many more.

<br>

## Key Features:

* Highly extendible AI agent for complex task automation using natural language
* Advanced capabilities like computer vision, OCR, image recognition, manipulating spreadsheets, parsing large documents via plugins
* Integration with popular applictions via plugins
* Flow controls such as conditions, loops, nested commands, exception handling, etc.
* Desktop support for Mac OSX, Windows, Linux (via Aeos Desktop)
* Schedule and monitor an army of agents via Notion (via Aeos In Notion)
* Command-line interface for headless support (via Aeos CLI)

<br>

## Official Plugins:

* Browser Automation
  * Chromium
* Desktop Automation
  * Mouse movement - Move, click, drag
  * Keyboard input - Press (and hold), type
  * Copy & paste - Access your system clipboard
  * Window info - Retrieve info about open windows
* Google Drive
* Notion
* PDF
* XLSX

<br>

## Installation

This repo provides a command-line tool which polls Notion and runs an Aeos agent.

You'll need a Notion account, and will need to create the following two database:
* Aeos Tasks: This should be a Board View with the statuses 'Not started', 'Queued', 'Running', 'Issue' and 'Done'
* Aeos Commands: This is a Table that will list all available commands with documentation

The command-line tool itself, can be easily installed globally with npm:

```bash
npm install -g @bhodgk/aeos-in-notion
```

Alternatively, you may prefer to use Aeos Desktop (supports Mac OS, Windows and Linux) or [Aeos CLI](https://github.com/bretthodgkins/aeos).

<br>

## Usage

Before you run, you'll need to provide some API keys for OpenAI and Notion.

These can be provided using the following env vars:
* OPENAI_ORG_ID: An OpenAI Organisation token
* OPENAI_API_KEY: An OpenAI API key
* NOTION_API_KEY: A Notion API key
* AEOS_IN_NOTION_COMMANDS_DB: A Notion database ID to populate available commands
* AEOS_IN_NOTION_TASKS_DB: A Notion database ID that will serve as the control center
* AEOS_IN_NOTION_NAME: An optional custom name for the agent to assign tasks to specific instances

To run aeos-in-notion you can simply run:

```bash
# Start application
aeos-in-notion

# Start application with specific arguments
aeos-in-notion --commandsDB="xxxx" --tasksDB="xxxx" --name="xxxx"
```

The above commands are basic ways to use Aeos. For more advanced usage, please refer to the full documentation.

<br>

## Running Multiple Instances with PM2

To manage multiple instances of Aeos at once, you can use PM2, a production process manager for Node.js applications. PM2 makes it easier to manage and keep your application online.

1. First, make sure you have PM2 installed. If not, you can install it globally with npm:

```bash
npm install -g pm2
```

2. You can then start multiple instances of your Aeos agents by providing different names for each one using the --name argument:

```bash
pm2 start aeos-in-notion --name "aeos1" -- --commandsDB="xxxx" --tasksDB="xxxx"
pm2 start aeos-in-notion --name "aeos2" -- --commandsDB="xxxx" --tasksDB="xxxx"
```

Check out the [PM2 website](https://pm2.keymetrics.io/) for more info.

<br>

## Contributing

Contributions to the Aeos project are welcome! Whether it's reporting bugs, discussing improvements and new ideas, or direct contributions via pull requests, we appreciate your help.

See the [CONTRIBUTING.md](CONTRIBUTING.md) file for more details.

<br>

## License

Aeos and Aeos-in-Notion are both open-source software provided under the [MIT License](LICENSE).