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
        expect(response.text).not.toMatch("Hello");
        expect(response.text).toMatch("World");
      });

    done();
  });

  test("should return 'Goodbye World'", (done) => {
    request(app)
      .get("/goodbye")
      .expect(200)
      .then((response) => {
        expect(response.text).not.toMatch("Hello");
        expect(response.text).toMatch("Goodbye World");
      });

    done();
  });

  test("should return json with server error", (done) => {
    const expectedJsonValue = JSON.stringify({ error: "server error" });

    request(app)
      .get("/error")
      .expect(200)
      .then((response) => {
        expect(response.text).not.toMatch("Hello");
        expect(response.text).toMatch(expectedJsonValue);
      });

    done();
  });
});
