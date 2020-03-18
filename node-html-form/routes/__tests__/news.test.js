const request = require("supertest");
const app = require("../../src/app");

describe("newsRouter tests", () => {
  test("root GET route to return with status OK", async () => {
    const response = await request(app).get("/newsletter");

    expect(response.statusCode).toBe(200);
  });

  test("root GET route to return some HTML", async () => {
    const response = await request(app).get("/newsletter");

    expect(response).not.toBeNull();
    expect(response.text).toMatch(/form/i);
  });

  test("root POST route to return with status OK", async () => {
    const testEmail = "test@test.com";
    const response = await request(app)
      .post("/newsletter")
      .send({ email: testEmail });

    expect(response.statusCode).toBe(200);
  });
});
