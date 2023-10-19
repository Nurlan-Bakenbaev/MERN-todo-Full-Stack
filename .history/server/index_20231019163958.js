const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 4000;
const authRouter = require("./routes/auth.route");
const todoRouter = require("./routes/todo.route");

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    optionsSuccessStatus: 204,
  })
);
app.use("/api/auth", authRouter);
app.use("/api/todo", todoRouter);

async function start() {
  try {
    await mongoose.connect(
       );
    console.log("mongo DB is working");
    app.listen(PORT, () => {
      console.log(`Server on ${PORT}`);
    });
  } catch (error) {
    console.error(error);
  }
}
start();
