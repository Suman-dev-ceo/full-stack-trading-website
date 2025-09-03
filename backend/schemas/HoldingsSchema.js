const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HoldingsSchema = new Schema({
  name: String,
  qty: Number,
  avg: Number,
  price: Number,
  net: {
    type: String,
    default: "+2.5%",
  },
  day: {
    type: String,
    default: "+0.2%",
  },
});

module.exports = { HoldingsSchema };
