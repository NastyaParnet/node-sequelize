const { Sequelize } = require("sequelize");

const db = new Sequelize("newdb", "root", "usbw", {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = db;
