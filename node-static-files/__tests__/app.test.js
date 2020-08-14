const request = require("supertest");
const app = require("../app");

const {
  validateTruthiness,
  validateDataTypeOfObject,
  validateObjectToHaveProperty,
} = require("../utils/testValidators");

describe("app.js Test Suite", () => {
  test("should check validity of app.js", () => {
    validateTruthiness(app);
  });

  describe("Tests for '/' endpoint", () => {
    test("should validate response headers", (done) => {
      request(app)
        .get("/")
        .expect(200)
        .then((response) => {
          const { headers } = response;

          validateTruthiness(headers);
          validateDataTypeOfObject(headers);
          validateObjectToHaveProperty(headers, "x-powered-by", "Express");
          validateObjectToHaveProperty(
            headers,
            "content-type",
            "text/html; charset=UTF-8"
          );
        });
      done();
    });

    test("should validate response value", (done) => {
      request(app)
        .get("/")
        .expect(200)
        .then((response) => {
          const { text } = response;

          expect(text).not.toBeNull();
          expect(text).toBeTruthy();
        });
      done();
    });
  });

  describe("Tests for '/contact' endpoint", () => {
    test("should validate response headers", (done) => {
      request(app)
        .get("/contact")
        .expect(200)
        .then((response) => {
          const { headers } = response;

          validateTruthiness(headers);
          validateDataTypeOfObject(headers);
          validateObjectToHaveProperty(headers, "x-powered-by", "Express");
          validateObjectToHaveProperty(
            headers,
            "content-type",
            "text/html; charset=UTF-8"
          );
        });
      done();
    });

    test("should validate response value", (done) => {
      request(app)
        .get("/contact")
        .expect(200)
        .then((response) => {
          const { text } = response;

          validateTruthiness(text);
        });
      done();
    });

    test("should validate response value for POST", (done) => {
      const expectedInput = { name: "Malcolm" };

      request(app)
        .post("/contact")
        .send("name=Malcolm")
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(200, expectedInput, done);
    });
  });
});
