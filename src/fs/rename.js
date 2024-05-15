import fs from 'fs/promises';
import path from 'path';

async function moveAndRenameFile() {
    const sourceFolder = 'G:\\NudeJs\\mitso-nodejs-basic\\src\\fs\\files_copy'; // Путь к исходной папке
    const destinationFolder = 'G:\\NudeJs\\mitso-nodejs-basic\\src\\fs\\files_rename'; // Путь к целевой папке
    const oldFilename = 'wrongFilename.txt';
    const newFilename = 'properFilename.md';
  
    const sourceFilePath = path.join(sourceFolder, oldFilename);
    const destinationFilePath = path.join(destinationFolder, newFilename);
  
    try {
      // Проверяем, существуют ли файлы
      await fs.access(sourceFilePath);
      await fs.access(destinationFilePath);
  
      console.error('FS operation failed: File already exists');
    } catch (error) {
      if (error.code === 'ENOENT') {
        try {
          // Перемещаем и переименовываем файл
          await fs.rename(sourceFilePath, destinationFilePath);
          console.log('File moved and renamed successfully');
        } catch (err) {
          console.error('FS operation failed:', err.message);
        }
      } else {
        console.error('FS operation failed:', error.message);
      }
    }
  }
  
  // Вызываем функцию для выполнения операции
  moveAndRenameFile();
  