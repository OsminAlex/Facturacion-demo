const { Sequelize } = require("sequelize");

const database = new Sequelize(
  "facturacion", //database
  "root", //usuario
  "Educa2023*", //password
  {
    host: "localhost", //nombre del servidor
    dialect: "mysql", //gestor
    port: 3306, //puerto
  }
);

module.exports = {
  database,
};
