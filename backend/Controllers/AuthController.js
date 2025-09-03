const User = require("../models/UserModel");
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcrypt");

module.exports.Signup = async (req, res) => {
  try {
    const { email, password, username, createdAt } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(200)
        .json({ success: false, message: "User already exists" });
    }

    const user = await User.create({
      email,
      password,
      username,
      createdAt,
    });

    const token = createSecretToken(user._id);

    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "lax",
      secure: false, // true on HTTPS in prod
      path: "/",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.status(201).json({
      success: true,
      message: "Signup successful",
      user: { id: user._id, email: user.email, username: user.username },
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};

module.exports.Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select(
      "_id email username password"
    );
    if (!user) {
      return res
        .status(200)
        .json({ success: false, message: "Invalid credentials" });
    }

    const ok = await bcrypt.compare(password, user.password);
    if (!ok) {
      return res
        .status(200)
        .json({ success: false, message: "Invalid credentials" });
    }

    const token = createSecretToken(user._id);

    // IMPORTANT: match the same cookie settings you use in Signup
    res.cookie("token", token, {
      httpOnly: true, // use true for security (same as we recommended for signup)
      sameSite: "lax",
      secure: false, // set true when you switch to HTTPS in prod
      path: "/",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    return res.json({
      success: true,
      message: "Login successful",
      user: { id: user._id, email: user.email, username: user.username },
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};
