import { Schema, Types, model } from "mongoose";

const scheme = new Schema({
  email: {
    Type: String,
    required: true,
    unique: true,
  },
  password:{Type:String,re}
});
module.exports = model("User", schema);
