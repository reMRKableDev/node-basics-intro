require("dotenv").config();

/**
 * @name app
 * @type {Object}
 *
 * @description The express app object is exported from the app.js file
 */
const app = require("./app");

/**
 * @name PORT
 * @type {Number}
 *
 * @description The port on which the server will run on. The port is set in the .env file
 */
const { PORT } = process.env;

/**
 * @name app.listen
 * @type {Function}
 * @param {Number} port - The port on which the server will run on
 * @param {Function} callback - The callback function to be executed when the server is running
 */
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
