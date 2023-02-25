/**
 * @module controllers/contact.controllers
 * @description The controllers for the contact routes.
 * @requires path
 */

const path = require("path");

/**
 * @name readContactHtml
 * @type {Function}
 * @param {*} _req - The request object
 * @param {*} res - The response object
 *
 * @returns {Object} res - The response object with the contact.html file.
 * The contact.html file is sent to the client. The file is sent in the response body of the GET request.
 */
exports.readContactHtml = (_req, res) =>
  res.status(200).sendFile(path.join(__dirname, "../public/contact.html"));

/**
 * @name createName
 * @type {Function}
 *
 * @param {*} req - The request object
 * @param {*} res - The response object
 * @returns {Object} res - The response object with the request body.
 * The request body is the data sent by the client. The data is sent in the request body of the POST request.
 */
exports.createName = (req, res) => res.status(200).json(req.body);
