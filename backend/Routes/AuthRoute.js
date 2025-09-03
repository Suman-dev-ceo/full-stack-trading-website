const { Signup, Login } = require("../Controllers/AuthController");
const router = require("express").Router();
const { userVerification } = require("../Middlewares/AuthMiddleware");
router.post("/signup", Signup);
router.post("/login", Login);
router.get("/auth/verify", userVerification);
router.post("/auth/logout", (req, res) => {
  res.clearCookie("token", { path: "/" });
  return res.json({ success: true });
});

module.exports = router;
