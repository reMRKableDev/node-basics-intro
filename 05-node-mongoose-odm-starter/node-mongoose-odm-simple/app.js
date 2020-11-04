const mongoose = require("mongoose");

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
  .catch((error) => console.error(`Error when connecting to Mongo: ${error}`));
