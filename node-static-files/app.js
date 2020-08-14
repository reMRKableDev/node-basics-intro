/**
 * @const express                           Imports express dependency
 * @requires module:express
 */
const express = require("express");

/**
 * @const homeRouter                        Declares route for home
 * @requires module:home.routes.js
 *
 * @const contactRouter                     Declares route for contact
 * @requires module:contact.routes.js
 */
const homeRouter = require("./routes/home.routes");
const contactRouter = require("./routes/contact.routes");

/**
 * @const app                               Express app
 */
const app = express();

/**
 * @method app.use(*)                       Mounts specified middleware function(s) at the specified path
 */
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/", homeRouter);
app.use("/contact", contactRouter);

/**
 * @module app
 */
module.exports = app;
