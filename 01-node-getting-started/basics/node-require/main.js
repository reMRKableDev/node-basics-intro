const circleCalculations = require("./circleCalculations");

const radius = 3;
const areaResults = circleCalculations.calculateArea(radius);
const circumferenceResults = circleCalculations.calculateCircumference(radius);

console.log(`A circle with the radius of ${radius} has
  area: ${areaResults};
  circumference: ${circumferenceResults}`);
