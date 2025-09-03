const { model } = require("mongoose");
const { HoldingsSchema } = require("../schemas/HoldingsSchema");

const Holding = model("Holding", HoldingsSchema);

module.exports = { Holding };
