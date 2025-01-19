import bcrypt from "bcryptjs";
import generateToken from "../utils/token.js";

export const signup = async (req, res) => {
  try {
    const { username, fullname, password, confirmpassword, gender } = req.body;

    if (!username || !fullname || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    if (password !== confirmpassword) {
      return res.status(400).json({ error: "Password do not match" });
    }

    if (password.length < 6) {
      return res
        .status(400)
        .json({ error: "Password must be atleast 6 characters" });
    }
    const hashpassword = await bcrypt.hash(password, 10);
    const userExists = await User.findOne({ username });
    if (userExists) {
      return res.status(400).json({ error: "User already exists" });
    }

    const newUser = new User({
      username,
      fullname,
      password: hashpassword,
      gender,
    });

    if (newUser) {
        generateToken({res, userId: newUser._id});
      await user.save();
      res.status(201).json({ message: "User registered successfully" });
    }
  } catch (error) {
    console.log("signup auth controller error", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
