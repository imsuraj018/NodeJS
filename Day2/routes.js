
const http=require("http");

const server=http.createServer((req, res) => {
    if(req.method==="GET" && req.url==="/"){
        res.end("Home Page");
    }else if(req.method==="GET" && req.url==="/about"){
        res.end("About Page");
    }

    else if(req.method==="GET" && req.url==="/contact"){
        res.end("contact page");
    }else{
        res.statusCode=404;
        res.end("Page not found");
    }
});

server.listen(3001, () => {
    console.log("Server running of port 3001");
});