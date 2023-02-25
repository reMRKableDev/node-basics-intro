const contactRouter = require("../contact.routes");

const {
  readContactHtml,
  createName,
} = require("../../controllers/contact.controllers");

const {
  validateTruthiness,
  validateControllerUsed,
  validateMatchingStringValues,
} = require("../../utils/testValidators");

/**
 * @name describe
 * @type {Function}
 * @param {String} description - The description of the test suite
 * @param {Function} callback - The callback function to be executed when the test suite is run
 *
 * @description The test suite
 *
 * @see https://jestjs.io/docs/en/api#describename-fn
 *
 * @name test
 * @type {Function}
 * @param {String} description - The description of the test
 * @param {Function} callback - The callback function to be executed when the test is run
 *
 * @description The test
 *
 * @see https://jestjs.io/docs/en/api#testname-fn-timeout
 */

describe("Contact Routes Test Suite", () => {
  test("should validate the GET route", () => {
    const { route } = contactRouter.stack[0];
    const { methods, path, stack } = route;
    const { handle } = stack[0];

    validateTruthiness(methods.get);
    validateMatchingStringValues(path, "/");
    validateControllerUsed(handle, readContactHtml);
  });

  test("should validate the POST route", () => {
    const { route } = contactRouter.stack[1];
    const { methods, path, stack } = route;
    const { handle } = stack[0];

    validateTruthiness(methods.post);
    validateMatchingStringValues(path, "/");
    validateControllerUsed(handle, createName);
  });
});
