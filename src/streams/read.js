import fs from 'fs';

const readAndPrintFile = async () => {
    const filePath = 'G:\\NudeJs\\mitso-nodejs-basic\\src\\streams\\files\\fileToRead.txt';
    const fileStream = fs.createReadStream(filePath);

    return new Promise((resolve, reject) => {
        fileStream.on('data', (chunk) => {
            process.stdout.write(chunk);
        });

        fileStream.on('end', () => {
            resolve();
        });

        fileStream.on('error', (error) => {
            reject(error);
        });
    });
};

(async () => {
    try {
        await readAndPrintFile();
    } catch (error) {
        console.error('An error occurred:', error);
    }
})();
