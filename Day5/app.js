const fs=require("fs");

fs.readFile("data/msg.txt", "utf-8", (err, data) => {
    if(err){
        console.log(err);
        return;
    }
    console.log(data);
});


fs.writeFile("data/msg.txt", "Levietating", (err) =>{
    if(err){
    console.log(err);
    return;
    }

    // it replace the existing data
    
})
console.log("File written successfully");


fs.appendFile("data/msg.txt", "\n Ambuse", (err) =>{
    if(err){
        console.log(err);
        return;
    }
    console.log("File appended successfully");
});

fs.rename("data/msg.txt", "data/notes.txt", (err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("File renamed");
});


// fs.unlink("data/notes.txt", (err)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log("File deleted");
// });

fs.mkdir("data/pinhole", (err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("Folder created");
})

fs.readdir(".", (err, files)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(files);
});


