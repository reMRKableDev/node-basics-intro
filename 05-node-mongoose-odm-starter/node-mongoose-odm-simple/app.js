const mongoose = require("mongoose");
const catsData = require("./cats.json");
const { Cat } = require("./models/Cat.model");

// Create a connection between my node app and mongo
mongoose
  .connect("mongodb://localhost/mongoose-intro", {
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

/* CREATE */
// single Object
const catObj = {
  name: "Johnny",
  breed: "Bengal",
  age: 6,
  color: "Orange/Black",
  hasLegs: true,
};

const kitty = new Cat(catObj);
// .save() --> can be run on an instance of the Cat model
const saveInstanceOfCatModel = () => {
  kitty
    .save()
    .then((results) => console.log(`Saved new cat: ${results}`))
    .catch((saveErr) => console.error(`Save failed: ${saveErr}`));
};

// .create single object --> run this on the Cat model itself
Cat.create(catObj)
  .then((results) => console.log(`Saved new cat: ${results}`))
  .catch((saveErr) => console.error(`Save failed: ${saveErr}`));

// Create multiple values
Cat.insertMany(catsData)
  .then((results) => console.log(`Saved new cats: ${results}`))
  .catch((saveErr) => console.error(`Save failed: ${saveErr}`));

/* READ */
Cat.find({})
  .then((results) => console.log(`Found cats: ${results}`))
  .catch((saveErr) => console.error(`Save failed: ${saveErr}`));

/* UPDATE */
Cat.updateOne({ name: "Garfield" }, { breed: "Ankara" })
  .then(() => console.log(`Cat is updated`))
  .catch((saveErr) => console.error(`Save failed: ${saveErr}`));

/* DELETE */
Cat.deleteOne({ name: "Garfield" })
  .then(() => console.log(`Cat is deleted`))
  .catch((saveErr) => console.error(`Save failed: ${saveErr}`));

// Disconnection
process.on("SIGINT", () => {
  mongoose.connection.close(() => {
    console.log(`Mongo connection disconnected`);
    process.exit(0);
  });
});
