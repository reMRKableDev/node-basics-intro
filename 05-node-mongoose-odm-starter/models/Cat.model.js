const mongoose = require("mongoose");
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
exports.Cat = model("Cats", catSchema);