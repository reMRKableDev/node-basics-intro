/**
 * @const express                               Imports express dependency
 * @requires module:express
 */
const express = require("express");

/**
 * @const {Object} contact.controllers.js       Controllers
 * @function readContactHtml
 * @function createName
 */
const {
  readContactHtml,
  createName,
} = require("../controllers/contact.controllers");

/**
 * @method express.Router                       Creates a new router object
 * @const router
 */
const router = express.Router();

/**
 * @method router.get                           Implements GET method
 * @param {string} path                         The endpoint/url for which requests & responses are sent
 * @param {function} readContactHtml            Renders the static contact.html asset
 */
router.get("/", readContactHtml);

/**
 * @method router.get                           Implements GET method
 * @param {string} path                         The endpoint/url for which requests & responses are sent
 * @param {function} readContactHtml            Renders the static contact.html asset
 */

router.post("/", createName);

module.exports = router;
