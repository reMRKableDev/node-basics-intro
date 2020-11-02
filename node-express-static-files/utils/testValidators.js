exports.validateTruthiness = (received) => {
  expect(received).not.toBeNull();
  expect(received).toBeTruthy();
};

exports.validateDataTypeOfObject = (received) => {
  expect(typeof received).not.toBe("string");
  expect(typeof received).toBe("object");
};

exports.validateObjectToHaveProperty = (received, key, value) => {
  expect(received).not.toHaveProperty("dummy");
  expect(received).toHaveProperty(key, value);
};

exports.validateMatchingStringValues = (received1, received2) => {
  expect(received1).not.toMatch("dummy");
  expect(received1).toMatch(received2);
};

exports.validateControllerUsed = (received, controller) => {
  expect(received).not.toBe(() => "dummy");
  expect(received).toBe(controller);
};
