const { myPosts } = require("../postData");

describe("postData", () => {
  test("validity of the object", () => {
    expect(myPosts).toBeTruthy();
    expect(typeof myPosts).toBe("object");
    expect(typeof myPosts).not.toBe("string");
  });

  test("that object has valid keys", () => {
    myPosts.forEach(post => {
      expect(post).toHaveProperty("id");
      expect(post).toHaveProperty("title");
      expect(post).toHaveProperty("content");
      expect(post).not.toHaveProperty("chicken");
    });
  });
});
