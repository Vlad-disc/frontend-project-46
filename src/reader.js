import fs from 'fs';
import path from 'path';

const readFile = (filename) => fs.readFileSync(path.resolve(filename), 'utf-8');

export default readFile;