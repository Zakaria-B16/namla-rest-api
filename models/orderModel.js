const mongoose = require("mongoose");

// Set order schema
const orderSchema = mongoose.Schema({
  address: String,
  costumer: String,
  seller: String,
  products: [String],
});

const orderModel = mongoose.model("OrderModel", orderSchema);

module.exports = orderModel;
