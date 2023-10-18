const mongoose = require("mongoose");
const { Schema, Types } = mongoose;

const schema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  todos: { type: Types.ObjectId, ref: "Todo" },
});
module.exports = mongoose.model("User", schema);
