const { DataTypes, Sequelize, DECIMAL, Model } = require("sequelize");
const { database } = require("./conection");

const Product = Sequelize.define("Product", {
  productID: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  productName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT(10, 2),
    allowNull: false,
  },
});

module.exports = {
  Product,
};
