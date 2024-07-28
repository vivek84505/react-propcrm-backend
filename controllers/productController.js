// controllers/productController.js
const productModel = require("../models/productModel");
const { handleError } = require("../helpers/helper");

const getAllProducts = async (req, res) => {
  try {
    const products = await productModel.getAllProducts();
    res.json(products);
  } catch (err) {
    handleError(res, err);
  }
};

const getProductById = async (req, res) => {
  try {
    const product = await productModel.getProductById(req.params.id);
    res.json(product);
  } catch (err) {
    handleError(res, err);
  }
};

const createProduct = async (req, res) => {
  try {
    const productId = await productModel.createProduct(req.body);
    res.status(201).json({ id: productId });
  } catch (err) {
    handleError(res, err);
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
};
