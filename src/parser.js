import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

const parseFile = (filepath) => {
  const ext = path.extname(filepath);
  const content = fs.readFileSync(filepath, 'utf-8');

  if (ext === '.json') {
    return JSON.parse(content);
  } if (ext === '.yaml' || ext === '.yml') {
    return yaml.load(content);
  }
};

export default parseFile;
