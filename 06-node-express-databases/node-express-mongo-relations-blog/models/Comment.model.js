const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const commentSchema = new Schema(
  {
    author: { type: Schema.Types.ObjectId, ref: "User" },
    content: String,
  },
  {
    timestamps: true,
  }
);

module.exports = model("Comment", commentSchema);
