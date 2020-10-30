const request = require("supertest");
const app = require("../../src/app");

describe("Home route unit test suite", () => {
  test("should validate that root endpoint responds with status OK", async () => {
    const response = await request(app).get("/");
    const { status } = response;

    expect(status).toBe(200);
  });

  test("should validate that text found at root endpoint matches Newsletter", async () => {
    const response = await request(app).get("/");
    const { text } = response;

    expect(response).not.toBeNull();
    expect(text).toMatch(/Newsletter/i);
  });
});
