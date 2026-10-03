

const fs=require("fs");

// // fs.writeFileSync("msg.txt", "Hello");

// // console.log("File created");


// console.log("1");
// const data=fs.readFileSync("msg.txt", "utf-8",(err, data)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
// });
// console.log(data);
// console.log("2");
// console.log("Program fininshed");


// console.log("start");

// const data=fs.readFileSync("msg.txt", "utf-8");
// console.log(data);
// console.log("end");


console.log("start");
fs.readFile("msg.txt", "utf-8",(err, data)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(data);
});
console.log("end");

fs.writeFile("student.txt", "Name:Rambhau", (err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("File created");

    fs.readFile("student.txt", "utf-8", (err, data)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log("file content: ");
        console.log(data);
    });
});

