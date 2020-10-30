const request = require("supertest");
const app = require("../../src/app");

describe("homeRouter tests", () => {
  test("GET endpoint returns status OK", async () => {
    const response = await request(app).get("/");

    expect(response.statusCode).toBe(200);
    expect(response.text).toMatch(/blog app/i);
  });

  test("GET endpoint returns valid data", async () => {
    const response = await request(app).get("/");

    expect(response.text).toMatch(/blog app/i);
  });
});
