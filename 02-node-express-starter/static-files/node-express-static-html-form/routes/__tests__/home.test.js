/**
 * @fileoverview Test suite for home.routes
 * @requires supertest - The supertest module is used to test HTTP endpoints
 * @requires app - The app object that is exported from the app.js file
 */

const request = require("supertest");
const app = require("../../src/app");

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
 */

describe("Home route unit test suite", () => {
  test("should validate that root endpoint responds with status OK", async () => {
    const response = await request(app).get("/");
    const { status } = response;

    expect(status).toBe(200);
  });

  test("should validate that text found at root endpoint matches Newsletter", async () => {
    const response = await request(app).get("/");
    const { text } = response;

    expect(text).not.toBeNull();
    expect(text).toMatch(/Newsletter/i);
  });
});
