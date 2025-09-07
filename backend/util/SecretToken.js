require("dotenv").config();
const jwt = require("jsonwebtoken");

const SECRET = process.env.JWT_SECRET || process.env.TOKEN_KEY;
if (!SECRET) {
  throw new Error("JWT secret missing: set JWT_SECRET or TOKEN_KEY");
}

module.exports.createSecretToken = (id) => {
  return jwt.sign({ id }, SECRET, { expiresIn: 3 * 24 * 60 * 60 });
};
