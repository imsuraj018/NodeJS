

const express=require('express');

const app=express();
const logger=require("./middleWare/logger");
const reqTime=require("./middleWare/reqtime");
const checkAuth=require("./middleWare/auth")



app.use(logger);
app.use(reqTime);


app.get("/", (req, res)=>{
    res.send(`Home Page. Request time: ${req.reqtime}`);
});

app.get("/about", (req, res)=>{
    res.send("About Page");
});

app.get("/dashboard", checkAuth, (req, res) =>{
    res.send("Dashboard");
});


app.listen(3001, ()=>{
    console.log("Server running at port no 3001");
});


// flow is like => req -> logger middleware -> next() -> route -> res


/*app.get("/student", (req, res) =>{
    res.send(`<html>
        <body>
        <h1>Student</h1>
        <ul>
        <li>Rambhau</li>
        <li>Gana</li>
        <li>Tantya</li>
        </ul>
        </body>
        <html>`)
})
*/


// View Engines

// --> allows to create html template containing dynamic data

//EJS : Embedded JavaScript Template
