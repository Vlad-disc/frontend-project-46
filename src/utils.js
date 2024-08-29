import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const absolutePath = (filename) => path.resolve(__dirname, '..', '__fixtures__', filename);

export default absolutePath