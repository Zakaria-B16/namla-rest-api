const supplierModel = require("../models/supplierModel");

// Get all suppliers from DB
const getSuppliers = async (req, res) => {
  try {
    const suppliers = await supplierModel.find();

    console.log(suppliers);
    res.status(200).json(suppliers);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Get a supplier by own ID
const getSupplier = async (req, res) => {
  const { id } = req.params;

  try {
    const supplier = await supplierModel.findById(id);

    res.status(200).json(supplier);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Add a supplier to the DB
const createSupplier = async (req, res) => {
  const { address, name, products } = req.body;

  const newSupplier = new supplierModel({ address, name, products });

  try {
    await newSupplier.save();

    res.status(200).json(newSupplier);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

module.exports = { getSupplier, getSuppliers, createSupplier };
