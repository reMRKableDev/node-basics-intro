/**
 * @module routes/contact.routes
 * @description The routes for the contact page.
 * @requires express
 */

const express = require("express");

/**
 * @name readContactHtml
 * @type {Function}
 * @description The callback function to be executed when the router handles the GET request
 *
 * @name createName
 * @type {Function}
 * @description The callback function to be executed when the router handles the POST request
 */
const {
  readContactHtml,
  createName,
} = require("../controllers/contact.controllers");

/**
 * @name router
 * @type {Object}
 * @description The express router
 *
 * @see https://expressjs.com/en/4x/api.html#router
 */
const router = express.Router();

/**
 * @name router.get
 * @type {Function}
 * @param {String} path - The path on which the router handles the GET request
 * @param {Function} callback - The callback function to be executed when the router handles the GET request
 *
 * @description The router handles the GET request to the path and any sub-paths
 *
 * @see https://expressjs.com/en/4x/api.html#router.get
 */
router.get("/", readContactHtml);

/**
 * @name router.post
 * @type {Function}
 * @param {String} path - The path on which the router handles the POST request
 * @param {Function} callback - The callback function to be executed when the router handles the POST request
 *
 * @description The router handles the POST request to the path and any sub-paths
 *
 * @see https://expressjs.com/en/4x/api.html#router.post
 */
router.post("/", createName);

module.exports = router;
