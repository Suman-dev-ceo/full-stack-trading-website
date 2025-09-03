const User = require("../models/UserModel");
require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.userVerification = async (req, res) => {
  try {
    const token = req.cookies?.token;
    if (!token) {
      return res.json({ status: false });
    }

    const payload = jwt.verify(token, process.env.TOKEN_KEY);

    const user = await User.findById(payload.id).select("_id username email");
    if (!user) {
      return res.json({ status: false });
    }

    return res.json({ status: true, user });
  } catch (err) {
    return res.json({ status: false });
  }
};
