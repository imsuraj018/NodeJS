
const express=require('express');

const app=express();

const students=[
    {
        id:1,
        name:"Rambhau",
        dept:"CSE"
    },
    {
        id:2,
        name:"Gana",
        dept:"CSE"
    }
]
app.set("view engine", "ejs");


app.get("/", (req, res) =>{
    res.render("home", {
        name:"Rambhau"
    });
});

app.get("/students", (req, res) => {
    res.render("students", {students:students});
})

app.listen(3001, () =>{
    console.log("Server running on port 3001");
});
