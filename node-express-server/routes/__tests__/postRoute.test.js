const request = require("supertest");
const app = require("../../src/app");

const getPostsRequest = () => request(app).get("/posts");
const getPostFromQueryParam = (param) => request(app).get(`/posts/${param}`);
const postNewPostRequest = (obj) => request(app).post("/posts/new").send(obj);

const testPosts = [
  { id: 1, title: "first title", content: "first content" },
  { id: 2, title: "second title", content: "second content" },
  { id: 3, title: "third title", content: "third content" },
];
const dummyData = { data: "dummyData" };

describe("Test suite for '/posts' endpoint", () => {
  test("should validate GET for '/posts' endpoint returns status code 200", async () => {
    const response = await getPostsRequest();
    const { statusCode } = response;

    expect(statusCode).not.toBe(404);
    expect(statusCode).toBe(200);
  });

  test("should validate GET for '/posts' endpoint returns valid data", async () => {
    const response = await getPostsRequest();
    const { body } = response;

    expect(body).not.toHaveLength(100000);
    expect(body).toHaveLength(3);

    expect(body).not.toEqual(expect.arrayContaining([dummyData]));
    expect(body).toEqual(expect.arrayContaining(testPosts));
  });

  test("should validate GET for '/posts/:id' endpoint returns valid query params", async () => {
    const response = await getPostFromQueryParam("1");
    const { statusCode, body } = response;

    expect(statusCode).not.toBe(404);
    expect(statusCode).toBe(200);

    expect(body).not.toEqual(testPosts[2]);
    expect(body).toEqual(testPosts[0]);
  });

  test("should validate GET for '/posts/:id' endpoint returns error on invalid query params", async () => {
    const response = await getPostFromQueryParam("10");
    const { statusCode, body } = response;

    expect(statusCode).not.toBe(304);
    expect(statusCode).toBe(400);

    expect(body).not.toBeNull();
    expect(body).toHaveProperty("error");
  });

  test("should validate POST for '/posts/new' endpoint returns post list with new post", async () => {
    const testPost = {
      id: 4,
      title: "fourth title",
      content: "fourth content",
    };

    const response = await postNewPostRequest(testPost);
    const { statusCode, body } = response;

    expect(statusCode).not.toBe(200);
    expect(statusCode).toBe(201);

    expect(body).not.toContainEqual(expect.objectContaining(dummyData));
    expect(body).toContainEqual(expect.objectContaining(testPost));
  });

  test("should validate POST for '/posts/new' endpoint returns error for invalid post", async () => {
    const response = await postNewPostRequest({});
    const { statusCode, body } = response;

    expect(statusCode).not.toBe(300);
    expect(statusCode).toBe(400);

    expect(body).not.toBeNull();
    expect(body).toHaveProperty("error");
  });
});
