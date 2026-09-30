

// function that runs between receiving http req and sending the response

const express=require('express');
const app=express();
app.use((req, res, next) =>{
    console.log("Middleware executed");
    next();
});

app.get("/", (req, res) =>{
    res.send("homePage");
});

app.listen(3001);
