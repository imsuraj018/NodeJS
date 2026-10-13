
const express=require("express");
const helmet=require("helmet");

app.use(helmet());
app.use(express.urlencoded({extended:false}));

app.get("/", (req, res)=>{
    res.send(`
        <h1> NODEJS XSS Security</h1>
        <p><a href="/unsafe?name=Ravi">Unsafe Example</a></p>
        <p><a href="/safe?name=RAVI">Safe Example</a></p>`);

});

app.get()


function escapeHtml(value){
    return String(value).replace(/[&<>"']/g,(char)=>({
        "&": "&amp",
        "<": "&lt",
        ">": "&gt",
        '"': "&quot",
        "'": "&#39;"
    })[char]);
}

app.get("/safe", (req, res) =>{
    const name=escapeHtml(req.query.name || "Student");
    res.send(`<h2> Welcome, ${name}</h2>
        <p>Safe HTML rendering example</p>
        <a href="/">Home</a>`);
});

app.listen(3001, () =>{
    console.log("XSS running at port 3001");
});