const express = require("express");
const port = 5000;

/**
 * @name app
 * @type {Object}
 *
 * @description Express application
 *
 * @see https://expressjs.com/en/4x/api.html#app
 */
const app = express();

/**
 * @name sendFileHelper
 * @type {Function}
 * @param {*} res - Express response object
 * @param {*} fileName - Name of file to send
 *
 * @description Helper function to send a file
 *
 * @see https://expressjs.com/en/4x/api.html#res.sendFile
 */
const sendFileHelper = (res, fileName) => res.sendFile(__dirname + fileName);

/**
 * @name app.use
 * @type {Function}
 * @description Middleware function to serve static files
 *
 * @see https://expressjs.com/en/4x/api.html#app.use
 */
app.use(express.static("public"));

/**
 * @name app.get
 * @type {Function}
 * @param {String} path - Path to handle
 * @param {Function} callback - Callback function to handle request
 *      @param {Object} req - Express request object
 *      @param {Object} res - Express response object
 *
 * @description Middleware function to handle GET requests
 *
 * @see https://expressjs.com/en/4x/api.html#app.get
 */
app.get("/home", (_req, res) => sendFileHelper(res, "/views/index.html"));
app.get("/cat", (_req, res) => sendFileHelper(res, "/views/cat-page.html"));

/**
 * @name app.listen
 * @type {Function}
 * @param {Number} port - Port to listen on
 * @param {Function} callback - Callback function to handle request
 *
 * @description Middleware function to listen on a port
 *
 * @see https://expressjs.com/en/4x/api.html#app.listen
 */
app.listen(port, console.log(`The application is running on port ${port}`));
