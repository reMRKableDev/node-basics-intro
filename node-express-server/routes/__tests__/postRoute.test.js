const request = require("supertest");
const app = require("../../src/app");

describe("postRouter tests", () => {
  const testPosts = [
    { id: 1, title: "first title", content: "first content" },
    { id: 2, title: "second title", content: "second content" },
    { id: 3, title: "third title", content: "third content" },
  ];

  test("GET endpoint returns status OK", async () => {
    const response = await request(app).get("/posts");
    const { statusCode } = response;

    expect(statusCode).toBe(200);
  });

  test("GET endpoint returns valid data", async () => {
    const response = await request(app).get("/posts");
    const { body } = response;

    expect(body).toHaveLength(3);
    expect(body).toEqual(expect.arrayContaining(testPosts));
  });

  test("GET endpoint with valid query params", async () => {
    const response = await request(app).get("/posts/1");
    const { statusCode, body } = response;

    expect(statusCode).toBe(200);
    expect(body).toEqual(testPosts[0]);
  });

  test("GET endpoint with invalid query params", async () => {
    const response = await request(app).get("/posts/10");
    const { statusCode, body } = response;

    expect(statusCode).toBe(400);
    expect(body).toHaveProperty("error");
  });

  test("POST endpoint for new user", async () => {
    const testPost = {
      id: 4,
      title: "fourth title",
      content: "fourth content",
    };

    const response = await request(app).post("/posts/new").send(testPost);
    const { statusCode, body } = response;
    testPosts.push(testPost);

    expect(statusCode).toBe(201);
    expect(body).toEqual(expect.arrayContaining(testPosts));
  });

  test("POST endpoint for invalid new user", async () => {
    const response = await request(app).post("/posts/new").send({});
    const { statusCode, body } = response;

    expect(statusCode).toBe(400);
    expect(body).toHaveProperty("error");
  });
});
