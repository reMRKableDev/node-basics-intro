exports.isPostValid = (userInput) => {
  if (typeof userInput !== "object") return false;
  if (typeof userInput.title == "undefined" || !userInput.title) return false;
  if (typeof userInput.content == "undefined" || !userInput.content)
    return false;

  return true;
};
