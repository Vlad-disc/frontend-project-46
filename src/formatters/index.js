import getFormatJson from './formatJson.js';
import getFromatPlain from './formatPlain.js';
import getFormatStylish from './formatStylish.js';

const getFormat = (tree, format) => {
  switch (format) {
    case 'json':
      return getFormatJson(tree);
    case 'plain':
      return getFromatPlain(tree);
    case 'stylish':
      return getFormatStylish(tree);
    default:
      throw new Error(`Error: "${format}" - this format is not supported`);
  }
};

export default getFormat;
