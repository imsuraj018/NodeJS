// const fs=require('fs');


// fs.readFile("student.txt", "utf-8", (error, data) =>{
//    if(error){
//     console.log(error.message);
//     return;
//    }
//    console.log(data);
// });


const fs=require("fs/promises");

async function readStudents(){
    try{
    const data=await fs.readFile("student.txt", "utf-8");
    console.log(data);
}catch(error){
    console.log("Failed to read file");
    console.log(error.message);
}}
readStudents();