/**
 * @fileoverview Test suite for news.routes
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

describe("newsRouter tests", () => {
  const getNewsletterRequest = request(app).get("/newsletter");

  test("should validate GET route for newsletter endpoint to return with status OK", async () => {
    const response = await getNewsletterRequest;
    const { statusCode } = response;

    expect(statusCode).toBe(200);
  });

  test("should validate GET route for newsletter endpoint to return some HTML", async () => {
    const response = await getNewsletterRequest;
    const { text } = response;

    expect(text).not.toBeNull();
    expect(text).toMatch(/form/i);
  });

  test("should validate POST route for newsletter endpoint to return with status OK", async () => {
    const testEmail = "test@test.com";
    const response = await request(app)
      .post("/newsletter")
      .send({ email: testEmail });

    const { statusCode } = response;

    expect(statusCode).toBe(200);
  });
});
