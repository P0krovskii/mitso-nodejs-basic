import fs from 'fs';
import zlib from 'zlib';

const compress = async () => {
    const filePath = 'G:\\NudeJs\\mitso-nodejs-basic\\src\\zip\\files\\fileToCompress.txt';
    const readStream = fs.createReadStream(filePath);
    const writeStream = fs.createWriteStream('archive.gz');
    const gzip = zlib.createGzip();

    readStream.pipe(gzip).pipe(writeStream);

    await new Promise((resolve, reject) => {
        writeStream.on('finish', resolve);
        writeStream.on('error', reject);
    });

    await fs.promises.unlink(filePath);
};

await compress();