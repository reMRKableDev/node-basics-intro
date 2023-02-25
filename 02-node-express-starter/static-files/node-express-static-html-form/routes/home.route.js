/**
 * @module routes/home.routes
 * @description The routes for the home page.
 * @requires express.Router - The express router object
 */
const { Router } = require("express");
const router = Router();

/**
 * @name newsletter
 * @type {String}
 * @description The newsletter signup form
 */
const newsletter =
  '<h1>Newsletter Signup</h1> <a href="/newsletter">Newsletter</a>';

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
router.get("/", (_req, res) => res.status(200).send(newsletter));

module.exports = router;
