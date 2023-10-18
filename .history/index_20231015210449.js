import express from "express";
import mongoose from "mongoose";


const app = express();
const PORT = 4000;
app.use(express.json());
app.use("/api/auth", router);

async function start() {
  try {
    await mongoose.connect(
      "mongodb+srv://nurlan:04121991@database.l7faqwy.mongodb.net/todoapp?retryWrites=true&w=majority"
    );

    app.listen(PORT, () => {
      console.log(`Server on ${PORT}`);
    });
  } catch (error) {
    console.error(error);
  }
}
start();
