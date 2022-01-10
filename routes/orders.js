const express = require("express");
const router = express.Router();

const { getOrder, getOrders, createOrder } = require("../controllers/orders");

/**
 * @swagger
 * components:
 *   schemas:
 *     Order:
 *       type: object
 *       required:
 *         - address
 *         - costumer
 *         - seller
 *       properties:
 *         _id:
 *           type: string
 *           description: The auto-generated id of the order
 *         address:
 *           type: string
 *           description: The order adress
 *         costumer:
 *           type: string
 *           description: The order costumer
 *         seller:
 *           type: string
 *           description: The order seller
 *         products:
 *           type: [string]
 *           description: The order products
 *       example:
 *         id: d5fE_asz
 *         address: Seddouk, Bejaia
 *         costumer: John Doe
 *         seller: Jack Duff
 *         products: [iPhone 13 pro max]
 */

/**
 * @swagger
 * tags:
 *   name: Orders
 *   description: The orders managing API
 */

/**
 * @swagger
 * /orders:
 *   get:
 *     summary: Returns the list of all the orders
 *     tags: [Orders]
 *     responses:
 *       200:
 *         description: The list of the orders
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Order'
 */

router.get("/", getOrders);

/**
 * @swagger
 * /orders/{id}:
 *   get:
 *     summary: Get the order by id
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The order id
 *     responses:
 *       200:
 *         description: The order description by id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Order'
 *       409:
 *         description: The Order was not found
 */

router.get("/:id", getOrder);

/**
 * @swagger
 * /orders:
 *   post:
 *     summary: Add an order to the orders list
 *     tags: [Orders]
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Order'
 *     responses:
 *       200:
 *         description: The order is added
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Order'
 *       500:
 *         description: Some server error
 */

router.post("/", createOrder);

module.exports = router;
