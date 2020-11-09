const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const bookSchema = new Schema(
  {
    title: { type: String, unique: true },
    description: String,
    author: String,
    rating: Number,
  },
  {
    timestamps: true,
  }
);

module.exports = model("Book", bookSchema);