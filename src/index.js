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

const genDiff = (filpath1, filepath2, format = 'stylish') => {
  const data1 = dataFromFile(filpath1);
  const data2 = dataFromFile(filepath2);
  const getTree = buildDiff(data1, data2);
  return getFormat(getTree, format);
};

export default genDiff;
