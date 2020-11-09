const mongoose = require("mongoose");

const User = require("../models/User.model");

require("../configs/db.config");

// User.collection.drop();

const fakeUsers = [
  {
    username: "amartin07",
  },
  {
    username: "luca85",
  },
  {
    username: "madmax",
  },
];

User.create(fakeUsers)
  .then((dbUsers) => {
    console.log(`Created ${dbUsers.length} users`);
    mongoose.connection.close();
  })
  .catch((err) =>
    console.log(`An error occurred while creating fake users in the DB: ${err}`)
  );
