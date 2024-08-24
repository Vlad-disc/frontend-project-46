import { describe, expect } from '@jest/globals';
import readFile from '../src/reader.js';
import genDiff from '../src/index.js';

describe('check output', () => {
  const testFormats = [
    ['file1.json', 'file2.json', 'testFormatStylish.txt'],
    ['file1.yaml', 'file2.yaml', 'testFormatStylish.txt', 'stylish'],
    ['file1.json', 'file2.yaml', 'testFormatPlain.txt', 'plain'],
    ['file1.yaml', 'file2.json', 'testFormatJson.txt', 'json'],
  ];

  test.each(testFormats)(
    'should generate correct output for format %s',
    async (file1, file2, expectedFile, format = 'stylish') => {
      const result = await genDiff(file1, file2, format);
      const expected = await readFile(expectedFile);
      expect(result.trim()).toBe(expected.trim());
    },
  );
});