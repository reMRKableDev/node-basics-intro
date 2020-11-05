const mongoose = require("mongoose");
const { Schema, model } = mongoose;

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

exports.Cat = model("Cats", catSchema);
