const request = require("supertest");
const app = require("../../src/app");

const getIndexRequest = () => request(app).get("/");

describe("Test suite for home.route.js", () => {
  test("should validate GET for '/' returns status code 200", async () => {
    const response = await getIndexRequest();
    const { statusCode } = response;

    expect(statusCode).not.toBe(404);
    expect(statusCode).toBe(200);
  });

  test("should validate GET for '/' returns valid data", async () => {
    const response = await getIndexRequest();
    const { text } = response;

    expect(text).not.toMatch(/lorem ipsum/i);
    expect(text).toMatch(/blog app/i);
  });
});
