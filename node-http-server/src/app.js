const http = require("http");

const app = http.createServer((request, response) => {
  if (request.url === "/") {
    response.writeHead(200);
    response.write("Hello World!");
    response.end();
  }

  if (request.url === "/goodbye") {
    response.writeHead(200);
    response.write("Goodbye World!", { "Content-Type": "text-html" });
    response.end();
  }

  if (request.url === "/nice") {
    response.writeHead(200);
    response.end("Nicely done!");
  }

  if (request.url === "/error") {
    response.writeHead(200);
    response.write(JSON.stringify({ error: "server error" }));
    response.end();
  }
});

module.exports = app;
