
const fs=require("fs");

// const writeStream=fs.createWriteStream("files/output.txt");

// writeStream.write("Hello, Gana kuthe aahes ");

// writeStream.write("Patkan ghare ye");

// writeStream.end();

const stream=fs.createWriteStream("files/output.txt");

stream.write("Rambhau.. Rambhau.. Rambhau..\n");

stream.on("finish", ()=>{
    console.log("Files writing completed");
});
