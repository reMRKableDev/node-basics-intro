const http = require("http");

const app = http.createServer((request, response) => {
  if (request.url === "/") {
    response.writeHead(200);
    response.end("World");
  }

  if (request.url === "/about") {
    response.writeHead(200);
    response.write("Goodbye World");
    response.end();
  }

  if (request.url === "/error") {
    response.writeHead(200);
    response.write(JSON.stringify({ error: "server error" }));
    response.end();
  }
});

/**
 * @module app                              The exported application with server instructions
 */
module.exports = app;
