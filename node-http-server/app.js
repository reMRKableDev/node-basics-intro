/**
 * @const http                              Import http dependency
 * @requires module:http
 */

const http = require("http");

/**
 * @const app                               Application container that holds server instructions
 * @method http.createServer                Returns a new instance of TPC/IPC server object
 * 
 * @function requestListener                Handles the requests and response from and to the user
 * @param {request} IncomingMessage         Represents the request to the server         
 * @param {response} ServerResponse         Represents a writable stream back to the client
 * 
 * @method request.url                      Represents URL endpoint for the request
 * @method response.writeHead               Sends status and response headers to the client
 * @method response.write()                 Sends text, or a text stream, to the client
 * @method response.end()                   Signals that the server should consider the response finished
 */

const app = http.createServer((request, response) => {
  if (request.url === "/") {
    response.writeHead(200);
    response.end("World");
  }
  if (request.url === "/goodbye") {
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
