
const fs=require("fs");

const readablestream=fs.createReadStream("files/input.txt", "utf-8");

const writeablestream=fs.createWriteStream("files/output.txt");

readablestream.pipe(writeablestream);

// it bridges the data from readable stream to writable stream
