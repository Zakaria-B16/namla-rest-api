const express = require("express");
const cors = require("cors");
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const orderRouter = require("./routes/orders");
const supplierRouter = require("./routes/suppliers");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

// Get environment variables
dotenv.config();

// Initialize DB
require("./initDB")();

// Define Swagger option
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Library API",
      version: "1.0.0",
      description: "A simple Express Library API",
    },
    servers: [
      {
        url: `http://localhost:4000`,
      },
    ],
  },
  apis: ["./routes/*.js"],
};

// Set Swagger option
const specs = swaggerJsDoc(options);

// Start Swagger
const app = express();

// Middlwares
app.use(cors()); // Cors middlware
app.use(express.json()); // Body parser middleware

// Link to Swagger
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));

// Link routes
app.use("/orders", orderRouter);
app.use("/suppliers", supplierRouter);

const PORT = process.env.PORT || 8080;

// Start the app
app.listen(PORT, () => {
  console.log(`Server is started on port ${PORT}`);
});
