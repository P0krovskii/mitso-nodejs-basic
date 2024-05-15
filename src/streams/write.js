import fs from 'fs';
const filePath = 'G:\\NudeJs\\mitso-nodejs-basic\\src\\streams\\files\\fileToWrite.txt';

const write = async () => {
    const writeStream = fs.createWriteStream(filePath);

    writeStream.on('error', (err) => {
        console.error('Ошибка записи:', err);
        process.exit(1);
    });

    await new Promise((resolve) => {
        writeStream.once('open', resolve);
    });

    process.stdin.on('data', (data) => {
        if (data.toString().trim() === 'exit') {
            console.log('Процесс записи завершается по запросу пользователя.');
            writeStream.end();
            process.exit(0);
        }
    });

    process.stdin.pipe(writeStream);

    await new Promise((resolve) => {
        writeStream.on('finish', resolve);
    });

    console.log('Данные успешно записаны в файл', filePath);
    writeStream.end();

    process.exit(0);
};

await write();