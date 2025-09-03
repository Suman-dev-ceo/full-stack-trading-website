const jwt = require("jsonwebtoken");
const User = require("../models/UserModel");

module.exports.userVerification = async (req, res) => {
  try {
    const token = req.cookies?.token;
    if (!token) {
      return res.json({ status: false });
    }

    const secret = process.env.TOKEN_KEY || process.env.JWT_SECRET;
    if (!secret) {
      console.error("AuthMiddleware: Missing TOKEN_KEY or JWT_SECRET env");
      return res
        .status(500)
        .json({ status: false, error: "Server config error" });
    }

    const payload = jwt.verify(token, secret); // { id: ... }

    if (!payload?.id) {
      return res.json({ status: false });
    }

    const user = await User.findById(payload.id).select("_id username email");
    if (!user) {
      return res.json({ status: false });
    }

    return res.json({
      status: true,
      user: { id: user._id, username: user.username, email: user.email },
    });
  } catch (err) {
    console.error("userVerification error:", err.message);
    return res.json({ status: false });
  }
};
