import { Schema, Types, model } from "mongoose";

const scheme = new Schema({
    email:{Type:String,required:true,}
})
module.exports = model("User",schema)
