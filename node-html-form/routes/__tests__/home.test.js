const request = require("supertest");
const app = require("../../app");

describe("homeRouter tests", () => {
  test("root endpoint should respond with status OK", async () => {
    const response = await request(app).get("/");

    expect(response.status).toBe(200);
  });

  test("root endpoint returns some HTML", async () => {
    const response = await request(app).get("/");

    expect(response).not.toBeNull();
    expect(response.text).toMatch(/Newsletter/i);
  });
});
