import { Router } from "express";
const router = Router();
import User from "../models/User";
router.post("/registration", async (req, res) => {
  try {
    const { email, password } = req.body;
    const isUsed = await User.findOne({ email });
    if(isUsed)
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
