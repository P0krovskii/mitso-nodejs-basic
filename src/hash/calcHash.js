import fs from 'fs/promises';
import path from 'path';

async function calcHash() {
    const sourceFolder = 'G:\\NudeJs\\mitso-nodejs-basic\\src\\fs\\files';
    const oldFilename = 'fileToCalculateHashFor.txt';

    const sourceFilePath = path.join(sourceFolder, oldFilename);

    try {
        await fs.access(sourceFilePath);
        console.error('Not file in folder');
    } catch (error) {
        if (error.code === 'ENOENT') {
            try {
                const bufferText = Buffer.from(oldFilename, 'utf8');
                console.log(bufferText.toString('hex'));
            } catch {
                
            }
        }
    }

}

calcHash();

