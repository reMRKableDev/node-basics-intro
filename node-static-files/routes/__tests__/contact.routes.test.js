const contactRouter = require("../contact.routes");

const {
  readContactHtml,
  createName,
} = require("../../controllers/contact.controllers");

const {
  validateTruthiness,
  validateControllerUsed,
  validateMatchingStringValues,
} = require("../../utils/testValidators");

describe("Contact Routes Test Suite", () => {
  test("should validate the GET route", () => {
    const { route } = contactRouter.stack[0];
    const { methods, path, stack } = route;
    const { handle } = stack[0];

    validateTruthiness(methods.get);
    validateMatchingStringValues(path, "/");
    validateControllerUsed(handle, readContactHtml);
  });

  test("should validate the POST route", () => {
    const { route } = contactRouter.stack[1];
    const { methods, path, stack } = route;
    const { handle } = stack[0];

    validateTruthiness(methods.post);
    validateMatchingStringValues(path, "/");
    validateControllerUsed(handle, createName);
  });
});
