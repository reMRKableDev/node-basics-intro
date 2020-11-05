const { Cat } = require("../models/Cat.model");
const catsData = require("../cats.json");

const catObj = {
  name: "Johnny",
  breed: "Bengal",
  age: 6,
  color: "Orange/Black",
  hasLegs: true,
};

exports.saveSingleCatObjectUsingInstanceOfModel = () => {
  const kitty = new Cat(catObj);

  kitty
    .save()
    .then((results) => console.log(`Saved new cat: ${results}`))
    .catch((saveErr) => console.error(`Save failed: ${saveErr}`));
};

exports.createSingleCatObjectUsingModel = () =>
  Cat.create(catObj)
    .then((results) => console.log(`Saved new cat: ${results}`))
    .catch((saveErr) => console.error(`Save failed: ${saveErr}`));

exports.createMultipleCatObjects = () =>
  Cat.insertMany(catsData)
    .then((results) => console.log(`Saved new cats: ${results}`))
    .catch((saveErr) => console.error(`Save failed: ${saveErr}`));
