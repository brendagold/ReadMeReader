import * as fs from 'fs/promises';
import markdownToTxt from 'markdown-to-txt';

// This function checks if it is a markdown file

function isMarkdown(input: string): boolean {
  // Basic check for common Markdown features
  const markdownPattern = /^(#|##|###|####|#####|######|\*|-|>|`|!\[|\[).*$/m;
  
  return markdownPattern.test(input);
}



export async function readReadmeFile(content: string) {
  try {
    if(!isMarkdown(content)) {
const data = await fs.readFile(content, 'utf-8');
    let markedText = markdownToTxt(data);
    return markedText;
    } else {
      throw new Error('This is not a Markdown file')
    }
    
  } catch (error: any) {
    throw new Error('Error reading readme.md file: ' + error.message);
  }
}

