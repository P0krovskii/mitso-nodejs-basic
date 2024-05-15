import { createServer as createServerHttp } from 'http';
import { release, version } from 'os';
import path from 'path';
import aJSON from 'G:\\NudeJs\\mitso-nodejs-basic\\src\\fs\\files\\a.json' assert { type: "json" };
import bJSON from 'G:\\NudeJs\\mitso-nodejs-basic\\src\\fs\\files\\b.json' assert { type: "json" };
import './files/c.js';

const random = Math.random();

let unknownObject;

if (random > 0.5) {
    unknownObject = aJSON;
} else {
    unknownObject = bJSON;
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${import.meta.url}`);
console.log(`Path to current directory is ${path.dirname(import.meta.url)}`);

const myServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

const PORT = 3020;

console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});

export { myServer, unknownObject };

