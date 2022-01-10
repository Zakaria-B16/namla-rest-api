const express = require("express");
const router = express.Router();

const {
  getSupplier,
  getSuppliers,
  createSupplier,
} = require("../controllers/suppliers");

/**
 * @swagger
 * components:
 *   schemas:
 *     Supplier:
 *       type: object
 *       required:
 *         - address
 *         - products
 *         - name
 *       properties:
 *         _id:
 *           type: string
 *           description: The auto-generated id of the supplier
 *         address:
 *           type: string
 *           description: The supplier adress
 *         products:
 *           type: array
 *           description: array of products
 *         name:
 *           type: string
 *           description: The supplier name
 *       example:
 *         id: d5fE_asz
 *         address: Seddouk, Bejaia
 *         name: John Doe
 *         products: [Nike zoom, Adidas run]
 */

/**
 * @swagger
 * tags:
 *   name: Suppliers
 *   description: The suppliers managing API
 */

/**
 * @swagger
 * /suppliers:
 *   get:
 *     summary: Returns the list of all the suppliers
 *     tags: [Suppliers]
 *     responses:
 *       200:
 *         description: The list of the suppliers
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Supplier'
 */

router.get("/", getSuppliers);

/**
 * @swagger
 * /suppliers/{id}:
 *   get:
 *     summary: Get the supplier by id
 *     tags: [Suppliers]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The supplier id
 *     responses:
 *       200:
 *         description: The supplier description by id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Supplier'
 *       404:
 *         description: The Supplier was not found
 */

router.get("/:id", getSupplier);

/**
 * @swagger
 * /suppliers:
 *   post:
 *     summary: Add an order to the suppliers list
 *     tags: [Suppliers]
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Supplier'
 *     responses:
 *       200:
 *         description: The supplier is added
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Supplier'
 *       409:
 *         description: Some server error
 */

router.post("/", createSupplier);

module.exports = router;
