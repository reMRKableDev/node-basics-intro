const isPostValid = userInput => {
  if (typeof userInput !== "object") return false;
  if (typeof userInput.title == "undefined") return false;
  if (typeof userInput.content == "undefined") return false;

  return true;
};

module.exports = { isPostValid };
