/**
 * @module routes/news.routes
 * @description The routes for the home page.
 * @requires express.Router - The express router object
 */
const { Router } = require("express");
const router = Router();

/**
 * @name formElement
 * @type {String}
 * @description The newsletter signup form
 */
const formElement =
  '<form action="/newsletter" method="post"> <input type="email" name="email"> <input type="submit"> </form>';

/**
 * @name router.get
 * @type {Function}
 * @param {String} path - The path on which the router handles the GET request
 * @param {Function} callback - The callback function to be executed when the router handles the GET request
 *
 * @description The router handles the GET request to the path and any sub-paths
 * @see https://expressjs.com/en/4x/api.html#router.get
 */
router.get("/", (_req, res) => res.status(200).send(formElement));

/**
 * @name router.post
 * @type {Function}
 * @param {String} path - The path on which the router handles the POST request
 * @param {Function} callback - The callback function to be executed when the router handles the POST request
 * @param {Object} req - The request object
 *  @has {Object} req.body - The body of the request object containing the email address
 * @param {Object} res - The response object
 * @returns {Object} res - The response object with the email address.
 *
 * @description The router handles the POST request to the path and any sub-paths
 * @see https://expressjs.com/en/4x/api.html#router.post
 */
router.post("/", (req, res) => {
  const { email } = req.body;

  res.status(200).json({ status: 200, email });
});

module.exports = router;
