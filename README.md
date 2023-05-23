# Aeos Plugin Generator

**Aeos Plugin Generator** lets you generate a new plugin for Aeos using a single prompt.

This repo contains a command-line interface to download the [Aeos Plugin Template](https://github.com/bretthodgkins/aeos-plugin-template), and automatically modify the code based on a provided description.

It also provides an Aeos Plugin to enable plugins to be generated directly within Aeos.

<br>

## What is Aeos?

[Aeos](https://github.com/bretthodgkins/aeos) is an open-source AI automation platform that harnesses the power of Large Language Models (LLMs) to build and run complex automations.

It's designed to be highly extendible, allowing users to create their own automations, and provide examples of them being called using natural language.

It also supports a robust plugin system which adds capabilities such as computer vision, OCR, image recognition, browser automation, GUI automation, as well as, integrations with many popular applications including Google Sheets, Google Drive, Notion, Slack, Hubspot, AWS and many more.

<br>

## Installation

This repo provides a CLI, as well as, a plugin which can be installed in Aeos.

The CLI can be installed globally with npm:

```bash
npm install -g @bhodgk/aeos-plugin-generator
```

<br>

Alternatively, the plugin can be installed in Aeos using:

```bash
aeos install @bhodgk/aeos-plugin-generator
```

<br>

## Usage

Before you run, you'll need to provide API keys for OpenAI.

These can be provided using the following env vars:
* OPENAI_ORG_ID: An OpenAI Organisation token
* OPENAI_API_KEY: An OpenAI API key

To run aeos-plugin-generator via CLI you can simply run:

```bash
aeos-plugin-generator --name="facebook" --prompt="Create a plugin with all the most common Facebook APIs"
```

<br>

## Contributing

Contributions to the Aeos project are welcome! Whether it's reporting bugs, discussing improvements and new ideas, or direct contributions via pull requests, we appreciate your help.

See the [CONTRIBUTING.md](CONTRIBUTING.md) file for more details.

<br>

## License

Aeos and Aeos Plugin Generator are both open-source software provided under the [MIT License](LICENSE).