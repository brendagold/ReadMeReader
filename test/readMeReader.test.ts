import * as fs from 'fs/promises';
import { readReadmeFile } from '../src/readmeReader';

test('Read non-existent file', async () => {
  // Assuming this file doesn't exist
  await expect(readReadmeFile('contents/non-existent.md')).rejects.toThrow(
    'Error reading readme.md file:'
  );
});

test('Read readme.md file', async () => {
    const readmeContent = await readReadmeFile('contents/readMeTest.md');
    expect(readmeContent).toBe('Description');
});

test('Read empty file', async () => {
  // Create an empty file for testing
  await fs.writeFile('contents/empty.md', '');

  const readmeContent = await readReadmeFile('contents/empty.md');
  expect(readmeContent).toBe('');
});

test('Handle file read error', async () => {
  // Force a read error by specifying an invalid file path
  await expect(readReadmeFile('invalid-path')).rejects.toThrow(
    'Error reading readme.md file:'
  );
});


