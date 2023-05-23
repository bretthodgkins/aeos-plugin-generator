import pluginGenerator from "../src/generator";

describe('Plugin Generator', () => {
  it('can generate plugin from prompt', async () => {
    const result = await pluginGenerator.generatePlugin('test-one', 'Generate a plugin for puppeteer that can open a browser and take screenshots')
    console.log(JSON.stringify(result, null, 2));
  });

  it('can download and unzip Aeos Plugin Template', async () => {
    await pluginGenerator.downloadAndExtractRepo('bretthodgkins', 'aeos-plugin-template', 'test-two');
  });
});
