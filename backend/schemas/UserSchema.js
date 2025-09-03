const { Schema } = require("mongoose");

const userSchema = new Schema({
  email: {
    type: String,
    required: [true, "Your email address is required"],
    unique: true,
    lowercase: true,
  },
  username: {
    type: String,
    required: [true, "Your username is required"],
  },
  password: {
    type: String,
    required: [true, "Your password is required"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
module.exports = { userSchema };
