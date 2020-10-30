const request = require("supertest");
const app = require("../../app");

describe("postRouter tests", () => {
  const testPosts = [
    { id: 1, title: "first title", content: "first content" },
    { id: 2, title: "second title", content: "second content" },
    { id: 3, title: "third title", content: "third content" }
  ];

  test("GET endpoint returns status OK", async () => {
    const response = await request(app).get("/posts");

    expect(response.statusCode).toBe(200);
  });

  test("GET endpoint returns valid data", async () => {
    const response = await request(app).get("/posts");

    expect(response.body).toHaveLength(3);
    expect(response.body).toEqual(expect.arrayContaining(testPosts));
  });

  test("GET endpoint with valid query params", async () => {
    const response = await request(app).get("/posts/1");

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(testPosts[0]);
  });

  test("GET endpoint with invalid query params", async () => {
    const response = await request(app).get("/posts/10");

    expect(response.statusCode).toBe(400);
    expect(response.body).toHaveProperty("error");
  });

  test("POST endpoint for new user", async () => {
    const testPost = {
      id: 4,
      title: "fourth title",
      content: "fourth content"
    };

    const response = await request(app)
      .post("/posts/new")
      .send(testPost);

    testPosts.push(testPost);

    expect(response.statusCode).toBe(201);
    expect(response.body).toEqual(expect.arrayContaining(testPosts));
  });

  test("POST endpoint for invalid new user", async () => {
    const response = await request(app)
      .post("/posts/new")
      .send({});

    expect(response.statusCode).toBe(400);
    expect(response.body).toHaveProperty("error");
  });
});
