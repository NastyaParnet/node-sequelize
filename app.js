const express = require("express");
const db = require("./config/db.js");
const productRoutes = require("./routes/productsRouter.js");
const cors = require("cors");
 
const app = express();

const func = async () => {
  try {
    await db.authenticate();
    console.log('Database connected...');
  } catch (error) {
    console.error('Connection error:', error);
  }
   
  app.use(cors());
  app.use(express.json());
  app.use('/products', productRoutes);
}

func();

module.exports = app;