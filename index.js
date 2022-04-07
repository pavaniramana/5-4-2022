const http = require("http");
http.createServer(function(request, response){
    // response.write("HelloWorld");
    let student = {name:"pavani",age:24}
    response.write(JSON.stringify(student))
    // response.write("<h1>Pavani, Your a good girl </h1>")
    response.end();
}).listen(3000),(()=>{
    console.log("hello");
})
