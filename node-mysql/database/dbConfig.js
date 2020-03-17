require("dotenv").config(); // allows to read values from .env file

const mysql = require("mysql");
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

connection.connect(error => {
  if (error) {
    console.error(
      "Issues when creating connection with database: " + error.stack
    );
    return;
  }
  console.log("Connected to database on id: " + connection.threadId);
});

module.exports = connection;
