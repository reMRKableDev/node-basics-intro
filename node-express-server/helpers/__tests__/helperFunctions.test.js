const { isPostValid } = require("../helperFunctions");

describe("isPostValid tests", () => {
  test("validity of user input", () => {
    const validTestUserInput = { title: "Test", content: "Content" };

    expect(isPostValid(validTestUserInput)).toBe(true);
  });

  test("faulty user input", () => {
    const invalidTestUserInputTitle = { title: "Test" };
    const invalidTestUserInputContent = { content: "Content" };
    const invalidTestUserInputString = "Testing Content";

    expect(isPostValid(invalidTestUserInputTitle)).toBe(false);
    expect(isPostValid(invalidTestUserInputContent)).toBe(false);
    expect(isPostValid(invalidTestUserInputString)).toBe(false);
  });

  test("incomplete user input", () => {
    const incompleteTestUserInputTitle = { title: "", content: "Content" };
    const incompleteTestUserInputContent = { title: "Test", content: "" };

    expect(isPostValid(incompleteTestUserInputTitle)).toBe(false);
    expect(isPostValid(incompleteTestUserInputContent)).toBe(false);
  });
});
