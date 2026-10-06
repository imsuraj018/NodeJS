const fs=require('fs');

const readablestream=fs.createReadStream("files/input.txt", "utf-8", { highWaterMark: 10 }); 
// encoding is used to read the data in the form of string instead of buffer

readablestream.on("data", (chunkdata)=>{
    console.log("Received chunks: ");
    console.log(chunkdata);
}
);

readablestream.on("end", ()=>{
    console.log("End of the data in the file");
});

readablestream.on("error", (err)=>{
    console.log(err);
});