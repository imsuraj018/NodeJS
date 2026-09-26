
const { create } = require("domain");
const http=require("http");

const server=http.createServer((req, res) => {
    res.end("Hello from Node JS");
});

server.listen(3001, () =>{
    console.log("Server running on prot number 3001");
})

// req --> request(client -> server connection)
// res --> response(server -> client)

