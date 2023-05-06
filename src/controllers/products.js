const { Router } = require("express");
const { Product } = require("../models/Product.js");

const productRouter = Router();

productRouter.get("/products", async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
