import { Schema, Types, model } from "mongoose";

const scheme = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  todos:({type:T})
});
module.exports = model("User", schema);
