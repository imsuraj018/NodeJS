const express=require("express");
const app=express();

const port=3001;

app.get("/",(req, res) =>{
    res.send("Welcome to Express JS");
})


app.get("/contact", (req, res) =>{
    res.send("Contact Page");
})

app.get("/about", (req, res) =>{
    res.send("About page");
})

app.get("/api/student", (req, res) =>{
    res.json({
        id:1,
        name:"Rambhau",
        course:"Polytech"
    });
})
app.listen(port,() =>{
    console.log(`server running at http://localhost:${port}`);
});



