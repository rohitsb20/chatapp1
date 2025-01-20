import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../utils/token.js";

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
    const BoyprofilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const GirlprofilePic = `https://avatar.iran.liara.run/public/girld?username=${username}`;
    const userExists = await User.findOne({ username });
    if (userExists) {
      return res.status(400).json({ error: "User already exists" });
    }

    const newUser = new User({
      username,
      fullname,
      password: hashpassword,
      gender,
      profilePicture : gender === "male" ? BoyprofilePic : GirlprofilePic,
    });

    if (newUser) {
 generateTokenAndSetCookie(newUser._id, res);
      await newUser.save();
      res.status(201).json({ message: "User registered successfully" });
    }
  } catch (error) {
    console.log("signup auth controller error", error);
    res.status(500).json({ error: "Internal server error" });
  }
};





export const login = async (req, res) => {
  try {
        const { username, password } = req.body;
        if (!username || !password) {
          return res.status(400).json({ error: "All fields are required" });
        }
        const user = await User.findOne({username});
        if (!user) {
          return res.status(400).json({ error: "User not Found" });
        }
        if (user) {
         const isPasswordCorrect = await bcrypt.compare(password, user.password);
          if (!isPasswordCorrect) {
            res.status(400).json({ error: "Invalid credentials" });
          }
        generateTokenAndSetCookie(user._id, res);
 res.status(200).json({ message: "Logged in successfully" });
        }

  } catch (error) {
     console.log("Login auth controller error", error);
    res.status(500).json({ error: "Internal server error" });
  }
}




export const logout = async (req, res) => {
  try {
    res.clearCookie("access_token");

    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
     console.log("Logout auth controller error", error);
     res.status(500).json({ error: "Internal server error" });
  }
}
