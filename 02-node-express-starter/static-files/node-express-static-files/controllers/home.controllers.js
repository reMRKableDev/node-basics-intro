/**
 * @module controllers/home.controllers
 * @description The controllers for the home routes.
 */

/**
 * @name readIndexHtml
 * @type {Function}
 * @description The callback function to be executed when the router handles the GET request
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @returns {Object} res - The response object with the index.html file.
 */
exports.readIndexHtml = (_req, res) => res.status(200).sendFile("index.html");
