const PI = 3.14;
const calculateArea = (incomingRadius) => incomingRadius ** 2 * PI;
const calculateCircumference = (incomingRadius) => 2 * incomingRadius * PI;

module.exports = {
  PI,
  calculateArea,
  calculateCircumference,
};

// exports.PI = PI
// exports.calculateArea = calculateArea
// exports.calculateCircumference = calculateCircumference

// exports. PI = 3.14
// exports calculateCircumference = (incomingRadius) => 2 * incomingRadius * PI;
// exports calculateArea = (incomingRadius) => incomingRadius ** 2 * PI;
