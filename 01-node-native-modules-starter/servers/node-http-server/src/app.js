const http = require("http");

const app = http.createServer((request, response) => {
  console.log('request url', request.url);
  if (request.url === "/") {
    response.writeHead(200); // confirming that the incoming request was successful
    response.write("Hello World!"); // sending back as a response
    response.end(); // ends the response
  } else if (request.url === "/goodbye") {
    response.writeHead(200);
    response.end("Goodbye World!");
  } else if (request.url === "/nice") {
    response.writeHead(200);
    response.end("Nicely done!");
  } else {
    response.writeHead(404);
    response.write(JSON.stringify({ error: "404 page not found" }));
    response.end();
  }
});

module.exports = app;
