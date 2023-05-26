const http = require("http");
const { isFunction } = require("util");
const PORT=8000;
const html=require("fs").readFileSync("./index.html");

// Let's create a server.

const server= http.createServer((req,res)=>{
    //proceudre of access.
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write(html);
    res.end();

    if(req.method=="GET"){

    }
    
    if(req.method=="POST"){
        
    }
});



server.listen(PORT,()=>{
console.log("server running!");
});
