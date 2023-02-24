const mongoose = require("mongoose");
const catsData = require("./cats.json");
const { Schema, model } = mongoose;

/* DATA MODELING */
// Schema
const catSchema = new Schema(
  {
    name: { type: String, required: true },
    breed: { type: String },
    age: { type: Number },
    color: { type: String },
    hasLegs: { type: Number },
  },
  { timestamps: true }
);

// Model
const Cat = model("Cats", catSchema);

// Mongoose db connection
mongoose
  .connect("mongodb://localhost/test-database", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then((db) =>
    console.log(`Successful db connection: ${db.connections[0].name}`)
  )
  .catch((connectErr) =>
    console.error(`Error while connecting to db: ${connectErr}`)
  );

// object
const catObj = {
  name: "Bella",
  breed: "Bengal",
  age: 6,
  color: "Orange/Black",
  hasLegs: true,
};

/* CREATE */
const saveSingleCatObjectUsingInstanceOfModel = () => {
  const kitty = new Cat(catObj);

  kitty
    .save()
    .then((results) => console.log(`Saved new cat: ${results}`))
    .catch((saveErr) => console.error(`Save failed: ${saveErr}`));
};

// saveSingleCatObjectUsingInstanceOfModel();

const createSingleCatObjectUsingModel = () =>
  Cat.create(catObj)
    .then((results) => console.log(`Saved new cat: ${results}`))
    .catch((saveErr) => console.error(`Save failed: ${saveErr}`));

// createSingleCatObjectUsingModel()

const createMultipleCatObjects = () =>
  Cat.insertMany(catsData)
    .then((results) => console.log(`Saved new cats: ${results}`))
    .catch((saveErr) => console.error(`Save failed: ${saveErr}`));

createMultipleCatObjects();

/* READ */
const findAllSavedCatData = () =>
  Cat.find({})
    .then((results) => console.log(`Found cats: ${results}`))
    .catch((saveErr) => console.error(`Save failed: ${saveErr}`));

// findAllSavedCatData();

/* UPDATE */
const updateOneSavedCatData = () =>
  Cat.updateOne({ name: "Sashimi" }, { breed: "Ankara" })
    .then(() => console.log(`Cat is updated`))
    .catch((saveErr) => console.error(`Save failed: ${saveErr}`));

// updateOneSavedCatData();

/* DELETE */
const deleteOneSavedCatData = () =>
  Cat.deleteOne({ name: "Sashimi" })
    .then(() => console.log(`Cat is deleted`))
    .catch((saveErr) => console.error(`Save failed: ${saveErr}`));

// deleteOneSavedCatData()

process.on("SIGINT", () => {
  mongoose.connection.close(() => {
    console.log(`Mongo connection disconnected`);
    process.exit(0);
  });
});
