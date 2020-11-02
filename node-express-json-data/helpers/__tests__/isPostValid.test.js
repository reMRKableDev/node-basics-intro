const { isPostValid } = require("../isPostValid.helper");

describe("Test suite for isPostValid.helper.js", () => {
  test("should validate correct user input to be true", () => {
    const validTestUserInput = { title: "Test", content: "Content" };

    expect(isPostValid(validTestUserInput)).toBe(true);
  });

  test("should validate faulty user input to be false", () => {
    const invalidTestUserInputTitle = { title: "Test" };
    const invalidTestUserInputContent = { content: "Content" };
    const invalidTestUserInputString = "Testing Content";

    expect(isPostValid(invalidTestUserInputTitle)).toBe(false);
    expect(isPostValid(invalidTestUserInputContent)).toBe(false);
    expect(isPostValid(invalidTestUserInputString)).toBe(false);
  });

  test("should validate incomplete user input to be false", () => {
    const incompleteTestUserInputTitle = { title: "", content: "Content" };
    const incompleteTestUserInputContent = { title: "Test", content: "" };

    expect(isPostValid(incompleteTestUserInputTitle)).toBe(false);
    expect(isPostValid(incompleteTestUserInputContent)).toBe(false);
  });
});
