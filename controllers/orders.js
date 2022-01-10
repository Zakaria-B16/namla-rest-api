const orderModel = require("../models/orderModel");

// Get all orders in DB
const getOrders = async (req, res) => {
  try {
    const orders = await orderModel.find();

    console.log(orders);
    res.status(200).json(orders);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Get an order by it own ID
const getOrder = async (req, res) => {
  const { id } = req.params;

  try {
    const order = await orderModel.findById(id);

    res.status(200).json(order);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Add an order to the DB
const createOrder = async (req, res) => {
  const { address, costumer, seller, products } = req.body;

  const newOrder = new orderModel({ address, costumer, seller, products });

  try {
    await newOrder.save();

    res.status(201).json(newOrder);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

module.exports = { getOrder, getOrders, createOrder };
