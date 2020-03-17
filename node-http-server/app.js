const http = require("http"); // Makes it possible to use http module
const port = 3000; // This will be the port my server will listen to

// Creating server
const server = http.createServer((request, response) => {
  // Endpoint for '/'
  console.log(request.url);
  if (request.url === "/") {
    response.writeHead(200);
    response.end("World");
  }
  // Endpoint for '/goodbye'
  if (request.url === "/goodbye") {
    response.writeHead(200);
    response.write("Goodbye World");
    response.end();
  }
  
  // Endpoint for '/error' returns as JSON
  if (request.url === "/error") {
    response.writeHead(200);
    response.write(JSON.stringify({ error: "server error" }));
    response.end();
  }
});

// Start the server
server.listen(port);
console.log(`Server is running on port ${port}`);
