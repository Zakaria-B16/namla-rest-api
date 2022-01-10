const mongoose = require("mongoose");

// Set supplier Schema
const supplierSchema = mongoose.Schema({
  address: String,
  name: String,
  products: [String],
});

const supplierModel = mongoose.model("SupplierModel", supplierSchema);

module.exports = supplierModel;
