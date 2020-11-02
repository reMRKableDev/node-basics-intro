const request = require("supertest");
const app = require("../app");

describe("app.js Test Suite", () => {
  test("should check validity of app.js", () => {
    expect(app).toBeTruthy();
  });

  test("should return 'Hello World'", (done) => {
    request(app)
      .get("/")
      .expect(200)
      .then((response) => {
        const { text } = response;

        expect(text).not.toMatch("Dummy");
        expect(text).toMatch("Hello World");
      });

    done();
  });
});
