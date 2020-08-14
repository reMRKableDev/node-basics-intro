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
