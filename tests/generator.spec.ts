import pluginGenerator from "../src/generator";

jest.setTimeout(100000); // 100 seconds

describe('Plugin Generator', () => {
  it('can generate plugin for puppeteer', async () => {
    const result = await pluginGenerator.generatePlugin('puppeteer', 'Generate a plugin for puppeteer that can open a browser and take screenshots using the Puppeteer library');
    console.log(JSON.stringify(result, null, 2));
  });

  // it('can generate plugin for facebook', async () => {
  //   const result = await pluginGenerator.generatePlugin('facebook', 'Generate a plugin for facebook that can create, read, update and delete posts using the Facebook API');
  //   console.log(JSON.stringify(result, null, 2));
  // });

  // it('can download and unzip Aeos Plugin Template', async () => {
  //   await pluginGenerator.downloadAndExtractRepo('bretthodgkins', 'aeos-plugin-template', 'test-two');
  // });
});
