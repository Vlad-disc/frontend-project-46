import getFormatJson from './formatJson.js';
import getFromatPlain from './formatPlain.js';
import getFormatStylish from './formatStylish.js';

const getFormat = (SyntaxTree, format) => {
  switch (format) {
    case 'json':
      return getFormatJson(SyntaxTree);
    case 'plain':
      return getFromatPlain(SyntaxTree);
    case 'stylish':
      return getFormatStylish(SyntaxTree);
    default:
      throw new Error(`Error: "${format}" - this format is not supported`);
  }
};

export default getFormat;
