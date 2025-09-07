const jwt = require("jsonwebtoken");
const User = require("../models/UserModel");

const SECRET = process.env.JWT_SECRET || process.env.TOKEN_KEY;

function getTokenFromReq(req) {
  const h = req.headers.authorization || "";
  if (h.startsWith("Bearer ")) return h.slice(7);
  return req.cookies?.token; // fallback to cookie if present
}

module.exports.userVerification = async (req, res) => {
  try {
    const token = getTokenFromReq(req);
    if (!token) return res.json({ status: false });

    const payload = jwt.verify(token, SECRET);
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