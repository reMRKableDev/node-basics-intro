const circleCalculations = require("./circleCalculations"); // {PI, calculateArea, calculateCircumference}

const radius = circleCalculations.PI;
const areaResults = circleCalculations.calculateArea(radius);
const circumferenceResults = circleCalculations.calculateCircumference(radius);

console.log(`A circle with the radius of ${radius} has
  area: ${areaResults};
  circumference: ${circumferenceResults}`);
