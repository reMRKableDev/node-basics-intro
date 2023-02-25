/**
 * @name app
 * @type {Object}
 * @description The express app object is exported from the app.js file in the src folder
 * @requires src/app
 */
const app = require("./src/app");

/**
 * @name port
 * @type {Number}
 * @description The port on which the server will run on
 */
const port = 3000;

/**
 * @name app.listen
 * @type {Function}
 * @param {Number} port - The port on which the server will run on
 * @param {Function} callback - The callback function to be executed when the server is running
 * @description The server will run on the port and execute the callback function when the server is running
 * @see https://expressjs.com/en/4x/api.html#app.listen
 */
app.listen(port, () => console.log(`Got eyes and ears on port: ${port}`));
