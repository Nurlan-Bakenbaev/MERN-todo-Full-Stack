const { Router } = require("express");
const router = Router();
const Todo = require("../models/Todo");

router.post("/add", async (req, res) => {
  try {
    const { text, userId, completed, important } = req.body;

    const todo = new Todo({
      text,
      owner: userId,
      completed,
      important,
    });

    await todo.save();
    res.json(todo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
});

router.get("/", async (req, res) => {
  try {
    const { userId } = req.query;
    const todo = await Todo.find({ owner: userId });
    res.json(todo);
  } catch (error) {
    console.log(error);
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const todo = await Todo.findByIdAndDelete(_id:req.para)
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
