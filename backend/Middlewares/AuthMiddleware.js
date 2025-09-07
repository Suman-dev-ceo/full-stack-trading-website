const jwt = require("jsonwebtoken");
const User = require("../models/UserModel");

const SECRET = process.env.JWT_SECRET || process.env.TOKEN_KEY;

module.exports.userVerification = async (req, res) => {
  try {
    const token = req.cookies?.token;
    if (!token) return res.json({ status: false });

    const payload = jwt.verify(token, SECRET); // unified secret

    if (!payload?.id) return res.json({ status: false });

    const user = await User.findById(payload.id).select("_id username email");
    if (!user) return res.json({ status: false });

    return res.json({
      status: true,
      user: { id: user._id, username: user.username, email: user.email },
    });
  } catch (err) {
    console.error("userVerification error:", err.message);
    return res.json({ status: false });
  }
};