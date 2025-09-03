const { userSchema } = require("../schemas/UserSchema");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
userSchema.pre("save", async function (next) {
  // Only hash if password is new/modified
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

module.exports = mongoose.model("User", userSchema);
