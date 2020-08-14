/**
 * @const express                           Imports express dependency
 * @requires module:express
 */
const express = require("express");

/**
 * @const {Object} home.controllers.js      Controllers
 * @function readIndexHtml
 */
const { readIndexHtml } = require("../controllers/home.controllers");

/**
 * @method express.Router                   Creates a new router object
 * @const router
 */
const router = express.Router();

/**
 * @method router.get                       Implements GET method
 * @param {string} path                     The endpoint/url for which requests & responses are sent
 * @param {function} readIndexHtml          Renders the static index.html
 */
router.get("/", readIndexHtml);

/**
 * @module router                           The exported router with all HTTP methods logic and implementations
 */
module.exports = router;
