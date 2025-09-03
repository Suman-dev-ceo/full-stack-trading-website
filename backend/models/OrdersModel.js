const { model } = require("mongoose");
const { OrdersSchema } = require("../schemas/OrdersSchema");

const Order = model("Order", OrdersSchema);

module.exports = { Order };
