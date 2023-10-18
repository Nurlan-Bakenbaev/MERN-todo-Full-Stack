import { Router, response } from "express";
const router = Router();
import User from "../models/User";
router.post("/registration", async (req, res) => {
  try {
    const { email, password } = req.body;
    const isUsed = await User.findOne({ email });
    if (isUsed) {
      return res.status(300).json({
        message: "This email is unavailable",
      });
    }
    const user = new User({
      email,
      password,
    });
    await user.save;
    res.status(201).json({message:"User has been created"})
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
