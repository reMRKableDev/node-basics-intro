const request = require("supertest");
const app = require("../app");

describe("app.js Test Suite", () => {
  test("should check validity of app.js", () => {
    expect(app).toBeTruthy();
  });

  test("should return 'World'", (done) => {
    request(app)
      .get("/")
      .expect(200)
      .then((response) => {
        const { text } = response;

        expect(text).not.toMatch("Hello");
        expect(text).toMatch("World");
      });

    done();
  });

  // TODO: Fix functioning tests for the other routes
});
