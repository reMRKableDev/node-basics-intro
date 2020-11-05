const { myPosts } = require("../postData");

describe("Test suite for postData.js", () => {
  test("should validate the object", () => {
    expect(myPosts).toBeTruthy();
    expect(typeof myPosts).not.toBe("string");
    expect(typeof myPosts).toBe("object");
  });

  test("should validate that object has valid keys", () => {
    myPosts.forEach((post) => {
      expect(post).not.toHaveProperty("chicken");
      expect(post).toHaveProperty("id");
      expect(post).toHaveProperty("title");
      expect(post).toHaveProperty("content");
    });
  });
});
