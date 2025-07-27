const http = require("node:http");
// user is requesting some url like url,data,homepage that things handled inside function and fun takes 2 parameter req,res
const server = http.createServer(function(req,res){
    if(req.url === "/getSecretData"){
        res.end("There is no secret data");
    }
    res.end("Hello World");
});
// server can handle multiple req at a time
server.listen(7777);