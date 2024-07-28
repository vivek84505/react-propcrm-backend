// app.js
const express = require("express");
const productRoutes = require("./routes/productRoutes");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use("/products", productRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
