import fs from 'fs/promises';
import path from 'path';
const list = async () => {

  const folderPath = 'G:\\NudeJs\\mitso-nodejs-basic\\src\\fs\\files';

  try {
    // Проверка папки
    await fs.access(folderPath, fs.constants.F_OK);

    // Поиск содержания
    const fileNames = await fs.readdir(folderPath);

    console.log('File names in "files" folder:', fileNames);
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.error('FS operation failed: Folder does not exist');
    } else {
      console.error('FS operation failed:', error.message);
    }
  }

};

await list();