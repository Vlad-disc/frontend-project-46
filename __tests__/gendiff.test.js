import { describe, expect, test } from '@jest/globals';
import genDiff from '../src/index.js';
import fs from 'fs';
import absolutePath from '../src/utils.js';


describe('check output', () => {
  const testFormats = [
    ['file1.json', 'file2.json', 'testFormatStylish.txt'],
    ['file1.yaml', 'file2.yaml', 'testFormatStylish.txt', 'stylish'],
    ['file1.json', 'file2.yaml', 'testFormatPlain.txt', 'plain'],
    ['file1.yaml', 'file2.json', 'testFormatJson.txt', 'json'],
  ];

  test.each(testFormats)(
    'correct tests',
    async (file1, file2, expectedFile, format = 'stylish') => {
      const result = await genDiff(absolutePath(file1), absolutePath(file2), format);
      const expected = await fs.readFileSync(absolutePath(expectedFile), 'utf-8');
      expect(result.trim()).toBe(expected.trim());
    },
  );
});
