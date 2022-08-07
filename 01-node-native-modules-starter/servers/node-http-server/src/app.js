const http = require("http");

const app = http.createServer((request, response) => {
  if (request.url === "/") {
    response.writeHead(200);
    response.write("Hello World!");
    response.end();
  } else if (request.url === "/goodbye") {
    response.writeHead(200);
    response.write("Goodbye World!");
    response.end();
  } else if (request.url === "/nice") {
    response.writeHead(200);
    response.end("Nicely done!");
  } else {
    response.writeHead(404);
    response.write(JSON.stringify({ error: "server error" }));
    response.end();
  }
});

module.exports = app;
