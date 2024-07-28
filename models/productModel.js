// models/productModel.js
const pool = require("../config/db");

const getAllProducts = async () => {
  const [rows] = await pool.query("SELECT * FROM products");
  return rows;
};

const getProductById = async (id) => {
  const [rows] = await pool.query("SELECT * FROM products WHERE id = ?", [id]);
  return rows[0];
};

const createProduct = async (product) => {
  const result = await pool.query("INSERT INTO products SET ?", product);
  return result[0].insertId;
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
};
