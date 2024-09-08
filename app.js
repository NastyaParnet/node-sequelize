const express = require("express");
const db = require("./config/db.js");
const productRoutes = require("./routes/productsRouter.js");
const cors = require("cors");
 
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/v1/products', productRoutes);

const func = async () => {
  try {
    await db.authenticate();
    console.log('Database connected...');
  } catch (error) {
    console.error('Connection error:', error);
  }
}

func();

module.exports = app;