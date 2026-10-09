
const fs=require('fs');


// try{
//     const data=fs.readFileSync("data.txt", "utf-8");
//     console.log(data);
// }catch(error){
//     console.log("File not found");

//     console.log(error.message);
// }

// try{
//     const result=10/0;  // gives infinity in the error in js
//     console.log(result);
// }catch(error){
//     console.log("Error", error.message);
// }

// try{
//     JSON.parse("hello");
// }catch(error){
//     console.log("Invalid JSON");
//     console.log(error.message);
// }


// const age=15;
// if(age < 18){
//     throw new Error("Not elibile for voting");
// }

// error.message tell what exactly happens
// stack tells where it happens

try{
fs.readFile("student.txt", "utf-8", (error, data) =>{
   
    console.log(data);
});}

catch(error){
console.log(error);
}