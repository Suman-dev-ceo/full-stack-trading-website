const User = require("../models/UserModel");
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcrypt");

const isProd = process.env.NODE_ENV === "production";

function setAuthCookie(res, token) {
  res.cookie("token", token, {
    httpOnly: true,
    sameSite: isProd ? "None" : "Lax",
    secure: isProd, // must be true on Render/HTTPS
    path: "/",
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  });
}

module.exports.Signup = async (req, res) => {
  try {
    const { email, password, username, createdAt } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(200)
        .json({ success: false, message: "User already exists" });
    }

    const user = await User.create({ email, password, username, createdAt });

    const token = createSecretToken(user._id);
    setAuthCookie(res, token);

    return res.status(201).json({
      success: true,
      message: "Signup successful",
      token,
      user: { id: user._id, email: user.email, username: user.username },
    });
  } catch (err) {
    console.error(err);
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
    setAuthCookie(res, token);

    return res.json({
      success: true,
      message: "Login successful",
      token,
      user: { id: user._id, email: user.email, username: user.username },
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};