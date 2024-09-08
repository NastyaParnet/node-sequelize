const { Sequelize } = require("sequelize");
const db = require("../config/db");
 
const { DataTypes } = Sequelize;
 
const Product = db.define('product',{
  id:{
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  price:{
    type: DataTypes.DECIMAL(2),
  },
  description:{
    type: DataTypes.STRING
  },
  createdAt:{
    type: DataTypes.DATE
  },
  updatedAt:{
    type: DataTypes.DATE
  }
},{
  freezeTableName: true
});
 
module.exports = Product;