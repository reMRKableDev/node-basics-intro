const PI = 3.14;
const calculateArea = (incomingRadius) => incomingRadius ** 2 * PI;
const calculateCircumference = (incomingRadius) => 2 * incomingRadius * PI;

module.exports = {
  PI, // PI: PI,
  calculateArea, // calculateArea : calculateArea
  calculateCircumference, // calculateCircumference: calculateCircumference
};

/* exports.PI = PI
exports.calculateArea = calculateArea
exports.calculateCircumference = calculateCircumference */

/* exports.PI = 3.14
exports.calculateCircumference = (incomingRadius) => 2 * incomingRadius * PI;
exports.calculateArea = (incomingRadius) => incomingRadius ** 2 * PI; */
