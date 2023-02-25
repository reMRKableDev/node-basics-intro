/**
 * @fileoverview Test suite for app.js
 * @requires app.locals - The locals object that is exported from the app.js file
 */
const app = require("../app");
const { locals } = app;

/**
 * @name describe
 * @type {Function}
 * @description The describe function is used to group tests together
 * @param {String} description - The description of the test suite
 * @param {Function} callback - The callback function that contains the tests
 * @see https://jestjs.io/docs/en/api#describename-fn
 *
 * @name test
 * @type {Function}
 * @description The test function is used to create a test
 * @param {String} description - The description of the test
 * @param {Function} callback - The callback function that contains the test
 * @see https://jestjs.io/docs/en/api#testname-fn-timeout
 *
 * @name expect
 * @type {Function}
 * @description The expect function is used to create an expectation for a test
 * @param {Object} received - The object to be validated
 * @see https://jestjs.io/docs/en/expect#expectvalue
 */

describe("app.js Test Suite", () => {
  test("should check validity of app.js", () => {
    expect(app).toBeTruthy();
  });

  test("should validate existence of locals object in app.js", () => {
    expect(locals).not.toBeNull();
    expect(typeof locals).toBe("object");
    expect(typeof locals).not.toBe("function");
  });
});
