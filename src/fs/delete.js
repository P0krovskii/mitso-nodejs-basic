import fs from 'fs/promises';
import path from 'path';

const remove = async () => {
const folderPath = 'G:\\NudeJs\\mitso-nodejs-basic\\src\\fs\\files';
const filename = 'fileToRemove.txt';
const filePath = path.join(folderPath, filename);

try {
  // Проверка
  await fs.access(filePath, fs.constants.F_OK);

  // Удаление 
  await fs.unlink(filePath);
  console.log('File deleted successfully');
} catch (error) {
  if (error.code === 'ENOENT') {
    console.error('FS operation failed: File does not exist');
  } else {
    console.error('FS operation failed:', error.message);
  }
}

};

await remove();