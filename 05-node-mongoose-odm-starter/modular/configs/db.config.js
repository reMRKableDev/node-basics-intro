const mongoose = require("mongoose");

exports.connectDB = () =>
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

exports.disconnectDB = () =>
  process.on("SIGINT", () => {
    mongoose.connection.close(() => {
      console.log(`Mongo connection disconnected`);
      process.exit(0);
    });
  });
