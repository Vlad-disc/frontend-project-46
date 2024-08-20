import path from 'path';
import buildDiff from './buildDiff.js';
import getFormat from './formatters/index.js';
import readFile from './reader.js';
import parse from './parsers.js';

const dataFromFile = (filepath) => {
  const ext = path.extname(filepath).slice(1);
  const reader = readFile(filepath);
  return parse(reader, ext);
};

const genDiff = (file1, file2, format = 'stylish') => {
  const data1 = dataFromFile(file1);
  const data2 = dataFromFile(file2);
  const getTree = buildDiff(data1, data2);
  return getFormat(getTree, format);
};

export default genDiff;
