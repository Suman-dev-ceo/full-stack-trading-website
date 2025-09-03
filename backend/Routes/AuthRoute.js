const { Signup, Login } = require("../Controllers/AuthController");
const router = require("express").Router();
const { userVerification } = require("../Middlewares/AuthMiddleware");

router.post("/signup", Signup);
router.post("/login", Login);
router.get("/verify", userVerification);
router.post("/logout", (req, res) => {
  res.clearCookie("token", {
    path: "/",
    sameSite: process.env.NODE_ENV === "production" ? "None" : "Lax",
    secure: process.env.NODE_ENV === "production",
  });
  return res.json({ success: true });
});

module.exports = router;
