import pluginGenerator from "../src/generator";

describe('Plugin Generator', () => {
  it('can download and unzip Aeos Plugin Template', async () => {
    const result = await pluginGenerator.generatePlugin('puppeteer', 'Generate a plugin for puppeteer that can open a browser and take screenshots')
    console.log(JSON.stringify(result, null, 2));
  });
});
