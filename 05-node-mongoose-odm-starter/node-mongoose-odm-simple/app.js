const mongoose = require("mongoose");
const { Schema, model } = mongoose;

// Model Schema
const shoeSchema = new Schema(
  {
    name: String,
    brand: String,
    size: Number,
    color: String,
    isAvailable: Boolean,
  },
  { timestamps: true }
);

const Shoe = model("Shoes", shoeSchema);

// Mongoose connection
mongoose
  .connect("mongodb://localhost/mongoose-intro", {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then((db) =>
    console.log(
      `Successfully connected to Mongo! Database name: ${db.connections[0].name}`
    )
  )
  .catch((error) =>
    console.error(`Error occurred while connecting to Mongo: ${error}`)
  );

const airMax = {
  name: "Air Max 97",
  brand: "Nike",
  size: 44,
  color: "Wolf Grey/Black/White/Red",
  isAvailable: true,
};

/* CREATE */

// .save() --> ran on instance method of a model.
const nikeShoe = new Shoe(airMax);
/* nikeShoe
  .save()
  .then((shoeSavedInDb) => console.log(`New shoe saved: ${shoeSavedInDb}`))
  .catch((saveError) => console.error(`Error while saving: ${saveError}`)); */

// .create() --> ran on the model itself, common way.
Shoe.create(airMax)
  .then((shoeSavedInDb) => console.log(`New shoe saved: ${shoeSavedInDb}`))
  .catch((createError) => console.error(`Error while saving: ${createError}`));

/* READ */

/* UPDATE */

/* DELETE */

// Mongoose disconnection
process.on("SIGINT", () => {
  mongoose.connection.close(() => {
    console.log("Mongo connection disconnected through app termination!");
    process.exit(0);
  });
});
