require("dotenv").config();

/**
 * @const app                   Import module with server instructions
 * @requires module:app
 *
 * @const PORT                  Container for the port value for the server
 *
 */
const app = require("./app");
const { PORT } = process.env;

/**
 * @method app.listen           Create a listener on the specified port
 *
 * @param port                  Specifies the port we want to listen to
 * @param callbackFunction      Specifies a function to be executed when the listener is added
 *
 */
app.listen(port, () => console.log(`Server is running on port ${port}`));
