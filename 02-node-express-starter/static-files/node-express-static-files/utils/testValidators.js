/**
 * @fileoverview This file contains the test validators for the static files
 *
 * @see https://jestjs.io/docs/en/expect#tobe
 * @see https://jestjs.io/docs/en/expect#tobetruthy
 * @see https://jestjs.io/docs/en/expect#tobenull
 * @see https://jestjs.io/docs/en/expect#tobevalue
 * @see https://jestjs.io/docs/en/expect#tomatchregexp--string
 * @see https://jestjs.io/docs/en/expect#tohavepropertykeypath-value
 *
 */

/**
 * @name validateTruthiness
 * @type {Function}
 * @param {Object} received - The object to be validated
 * @description Validates that the received object is not null and is truthy
 */
exports.validateTruthiness = (received) => {
  expect(received).not.toBeNull();
  expect(received).toBeTruthy();
};

/**
 * @name validateDataTypeOfObject
 * @type {Function}
 * @param {Object} received - The object to be validated
 * @description Validates that the received object is not a string and is an object
 */
exports.validateDataTypeOfObject = (received) => {
  expect(typeof received).not.toBe("string");
  expect(typeof received).toBe("object");
};

/**
 * @name validateObjectToHaveProperty
 * @type {Function}
 * @param {Object} received - The object to be validated
 * @param {String} key - The key of the property to be validated
 * @param {String} value - The value of the property to be validated
 * @description Validates that the received object does not have a property with the key "dummy" and has a property with the key and value provided
 */
exports.validateObjectToHaveProperty = (received, key, value) => {
  expect(received).not.toHaveProperty("dummy");
  expect(received).toHaveProperty(key, value);
};

/**
 * @name validateMatchingStringValues
 * @type {Function}
 * @param {String} received1 - The string to be validated
 * @param {String} received2 - The string to be validated
 * @description Validates that the received string does not match "dummy" and matches the string provided
 */
exports.validateMatchingStringValues = (received1, received2) => {
  expect(received1).not.toMatch("dummy");
  expect(received1).toMatch(received2);
};

/**
 * @name validateControllerUsed
 * @type {Function}
 * @param {Function} received - The function to be validated
 * @param {Function} controller - The function to be validated
 * @description Validates that the received function does not match a dummy function and matches the function provided
 */
exports.validateControllerUsed = (received, controller) => {
  expect(received).not.toBe(() => "dummy");
  expect(received).toBe(controller);
};
