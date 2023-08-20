import { readReadmeFile } from './readmeReader';

async function main() {
  try {
    const readmeContent = await readReadmeFile('contents/readme.md');
    console.log(readmeContent);
  } catch (error: any) {
    console.error(error.message);
  }
}

main();
