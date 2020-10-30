const request = require("supertest");
const app = require("../app");
const { locals } = app;

describe("app.js Test Suite", () => {
  test("should check validity of app.js", () => {
    expect(app).toBeTruthy();
  });

  test("should validate existence of locals object in app", () => {
    expect(locals).not.toBeNull();
    expect(typeof locals).toBe("object");
  });
});
