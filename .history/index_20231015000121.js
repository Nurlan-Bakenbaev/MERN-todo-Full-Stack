import express from "express";
import mongoose from "mongoose";
import nodemon from "nodemon";

const app = express();
const PORT = 5000;

async () => {
  try {
    await mongoose
      .connect("mongodb+srv://Nurlan:<password>@database.l7faqwy.mongodb.net/?retryWrites=true&w=majority")
      .then(() => console.log("MONGO is CONNECTED"))
      .catch((err) => console.log(err));
  } catch (error) {}
};
