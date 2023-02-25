const mongoose = require("mongoose");
const catsData = require("./cats.json");
const { Schema, model } = mongoose;

/* DATA MODELING */
/**
 * @name Cat
 * @type {Object}
 * @property {String} name - required
 * @property {String} breed
 * @property {Number} age
 * @property {String} color
 * @property {Boolean} hasLegs
 */

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

/**
 * @name Cat
 * @type {Object}
 */
const Cat = model("Cats", catSchema);

/* ************************************************ */
/* ************************************************ */
/* ************************************************ */

/* DATABASE CONNECTION */
/**
 * @name connectDB
 * @type {Function}
 * @returns {Promise}
 * @description Connects to the db
 * @see https://mongoosejs.com/docs/connections.html
 * @see https://mongoosejs.com/docs/api.html#mongoose_Mongoose-connect
 */
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

/* ************************************************ */
/* ************************************************ */
/* ************************************************ */

/**
 * @name catObj
 * @type {Object}
 * @property {String} name - required
 * @property {String} breed
 * @property {Number} age
 * @property {String} color
 * @property {Boolean} hasLegs
 */
const catObj = {
  name: "Bella",
  breed: "Bengal",
  age: 6,
  color: "Orange/Black",
  hasLegs: true,
};

/* CRUD OPERATIONS */
/**
 * @name saveSingleCatObjectUsingInstanceOfModel
 * @type {Function}
 * @returns {Promise} - resolves to a saved cat object
 *
 * @description Saves a single cat object using an instance of the model - CREATE
 *
 * @see https://mongoosejs.com/docs/api.html#document_Document-save
 */
const saveSingleCatObjectUsingInstanceOfModel = () => {
  const kitty = new Cat(catObj);

  kitty
    .save()
    .then((results) => console.log(`Saved new cat: ${results}`))
    .catch((saveErr) => console.error(`Save failed: ${saveErr}`));
};

saveSingleCatObjectUsingInstanceOfModel();

/* ************************************************ */
/* ************************************************ */
/* ************************************************ */

/**
 * @name createSingleCatObjectUsingModel
 * @type {Function}
 * @returns {Promise} - resolves to a saved cat object
 *
 * @description Saves a single cat object using the model - CREATE
 *
 * @see https://mongoosejs.com/docs/api.html#model_Model.create
 */
const createSingleCatObjectUsingModel = () =>
  Cat.create(catObj)
    .then((results) => console.log(`Saved new cat: ${results}`))
    .catch((saveErr) => console.error(`Save failed: ${saveErr}`));

createSingleCatObjectUsingModel();

/* ************************************************ */
/* ************************************************ */
/* ************************************************ */

/**
 * @name createMultipleCatObjects
 * @type {Function}
 * @returns {Promise} - resolves to an array of saved cat objects
 *
 * @description Saves multiple cat objects using the model - CREATE
 *
 * @see https://mongoosejs.com/docs/api.html#model_Model.insertMany
 */
const createMultipleCatObjects = () =>
  Cat.insertMany(catsData)
    .then((results) => console.log(`Saved new cats: ${results}`))
    .catch((saveErr) => console.error(`Save failed: ${saveErr}`));

createMultipleCatObjects();

/* ************************************************ */
/* ************************************************ */
/* ************************************************ */

/**
 * @name findAllSavedCatData
 * @type {Function}
 * @returns {Promise} - resolves to an array of saved cat objects
 *
 * @description Finds all saved cat data - READ
 *
 * @see https://mongoosejs.com/docs/api.html#model_Model.find
 */
const findAllSavedCatData = () =>
  Cat.find({})
    .then((results) => console.log(`Found cats: ${results}`))
    .catch((saveErr) => console.error(`Save failed: ${saveErr}`));

findAllSavedCatData();

/* ************************************************ */
/* ************************************************ */
/* ************************************************ */

/**
 * @name updateOneSavedCatData
 * @type {Function}
 * @returns {Promise} - resolves to an array of saved cat objects
 *
 * @description Updates one saved cat data - UPDATE
 *
 * @see https://mongoosejs.com/docs/api.html#model_Model.updateOne
 */
const updateOneSavedCatData = () =>
  Cat.updateOne({ name: "Sashimi" }, { breed: "Ankara" })
    .then(() => console.log(`Cat is updated`))
    .catch((saveErr) => console.error(`Save failed: ${saveErr}`));

updateOneSavedCatData();

/* ************************************************ */
/* ************************************************ */
/* ************************************************ */

/**
 * @name deleteOneSavedCatData
 * @type {Function}
 * @returns {Promise} - resolves to an array of saved cat objects
 *
 * @description Deletes one saved cat data - DELETE
 *
 * @see https://mongoosejs.com/docs/api.html#model_Model.deleteOne
 */
const deleteOneSavedCatData = () =>
  Cat.deleteOne({ name: "Sashimi" })
    .then(() => console.log(`Cat is deleted`))
    .catch((saveErr) => console.error(`Save failed: ${saveErr}`));

deleteOneSavedCatData();

/* ************************************************ */
/* ************************************************ */
/* ************************************************ */

process.on("SIGINT", () => {
  mongoose.connection.close(() => {
    console.log(`Mongo connection disconnected`);
    process.exit(0);
  });
});
