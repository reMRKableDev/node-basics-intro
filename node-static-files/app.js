// Import necessary packages and set up global variables
const express = require("express");
const path = require("path");
const app = express();

// Routes import
const homeRouter = require("./routes/homeRouter");
const contactRouter = require("./routes/contactRouter");

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
// Use routes
app.use("/", homeRouter);
app.use("/contact", contactRouter);

/**
 * @module app                              The exported application with server instructions
 */
module.exports = app;
