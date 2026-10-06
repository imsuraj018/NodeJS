

// A stream allow us to process data piece instead of loading everything into memory once.

// there are four types of streams in node.js

// readable, writeable, duplex, transform



// ###### READABLE STREAMS ######

// Multer middleware is used to handle multipart/form-data, which is primarily used for uploading files.
// It makes the uploaded files available in the req.file or req.files object, depending on whether you're uploading a single file or multiple files.


const multer=require('multer');
const path=require('path');
const express=require('express');
const app=express();

const upload=multer({dest: 'uploads/'});
const fs=require('fs');



const port=3001;

app.use(express.static("public"));

app.get("/", (req, res)=>{
    res.send("Gana, Streaming chalu aahe");
});


app.post("/upload", upload.single("myfile"), (req, res) =>{
    console.log(req.file);
    res.send('File uploaded successfully');
});

app.post("/upload-multiple", upload.array("documents", 5), (req, res) =>{
    console.log(req.files);
    res.send("Files uploaded successfully");
});


app.get("/download", (req, res)=>{
    const filePath="files/index.pdf";
    res.download(filePath);
});

app.get("/download-stream", (req, res) =>{
    const filePath="files/index.pdf";
    const readablestream=fs.createReadStream(filePath);
    readablestream.pipe(res);
});
app.listen(port, () =>{
    console.log(`Server is running on port ${port}`);
});