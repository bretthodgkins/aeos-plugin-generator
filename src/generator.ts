import fs from 'fs';
import path from 'path';

import axios from 'axios';
import extract from 'extract-zip';

import { ChatCompletionRequestMessage } from "openai";
import { 
  CommandResult,
  chatCompletion,
  logger,
} from '@bhodgk/aeos'

export class PluginGenerator {
  async generatePlugin(name: string, prompt: string): Promise<boolean> {
    const fullPath = path.resolve(name);
    if (fs.existsSync(fullPath)) {
      logger.log(`Directory ${fullPath} already exists`);
      return false;
    }

    await this.downloadAndExtractRepo('bretthodgkins', 'aeos-plugin-template', name);

    return true;
  }

  async downloadAndExtractRepo(user: string, repo: string, newRepoName: string, branch: string = 'main') {
    const url = `https://github.com/${user}/${repo}/archive/refs/heads/${branch}.zip`;
    const outputPath = path.resolve(process.cwd(), `${repo}.zip`);
    const extractPath = path.resolve(process.cwd(), `${repo}-${branch}`);
  
    // Download the file
    const response = await axios.get(url, {
      responseType: 'stream',
    });
  
    const writer = fs.createWriteStream(outputPath);
  
    response.data.pipe(writer);
  
    // Extract the zip
    await this.extractZipFile(outputPath, process.cwd());

    // After extraction, rename the folder
    fs.renameSync(extractPath, path.resolve(process.cwd(), newRepoName));
  }
  
  async extractZipFile(filePath: string, outputPath: string) {
    try {
      await extract(filePath, { dir: outputPath });
      fs.unlinkSync(filePath);
    } catch (err) {
      // Handle any errors
      console.error('Error occurred while extracting zip file', err);
      throw err;
    }
  }

}

export default new PluginGenerator();