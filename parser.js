import fs from 'fs';
import path from 'path';



const parseFile = (filepath) => {
    const ext = path.extname(filepath);
  
    const data = fs.readFileSync(filepath);

    if (ext === '.json') {
        return JSON.parse(data);
    }
};

export default parseFile;