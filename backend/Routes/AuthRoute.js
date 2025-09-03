const { Signup, Login } = require("../Controllers/AuthController");
const { userVerification } = require("../Middlewares/AuthMiddleware");
const router = require("express").Router();

// Auth endpoints
router.post("/signup", Signup);
router.post("/login", Login);
router.get("/verify", userVerification);
router.post("/logout", (req, res) => {
  const isProd = process.env.NODE_ENV === "production";
  res.clearCookie("token", {
    path: "/",
    sameSite: isProd ? "None" : "Lax",
    secure: isProd,
  });
  return res.json({ success: true });
});

module.exports = router;
