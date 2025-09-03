const { model } = require("mongoose");
const { PositionsSchema } = require("../schemas/PositionsSchema");

const Position = model("Position", PositionsSchema);

module.exports = { Position };
