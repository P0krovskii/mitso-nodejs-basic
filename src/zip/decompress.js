import fs from 'fs';
import zlib from 'zlib';

const decompress = async () => {
    const inputPath = 'G:\\NudeJs\\mitso-nodejs-basic\\src\\zip\\files\\archive.gz';
    const outputPath = 'G:\\NudeJs\\mitso-nodejs-basic\\src\\zip\\files\\fileToCompress.txt';

    const readStream = fs.createReadStream(inputPath);
    const writeStream = fs.createWriteStream(outputPath);
    const gunzip = zlib.createGunzip();

    readStream.pipe(gunzip).pipe(writeStream);

    return new Promise((resolve, reject) => {
        writeStream.on('finish', resolve);
        writeStream.on('error', reject);
    });
};

await decompress();