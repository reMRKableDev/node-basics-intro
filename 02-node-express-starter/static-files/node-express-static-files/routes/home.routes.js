/**
 * @module routes/home.routes
 * @description The routes for the home page.
 * @requires express
 */

const express = require("express");

/**
 * @name readIndexHtml
 * @type {Function}
 * @description The callback function to be executed when the router handles the GET request
 */
const { readIndexHtml } = require("../controllers/home.controllers");

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
router.get("/", readIndexHtml);

module.exports = router;
