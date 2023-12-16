const mysql = require("mysql2");
const Sequelize = require("sequelize");

console.log("DB NAME >>>", process.env.DB_NAME);
console.log("DB NAME >>>", process.env.DB_USERNAME);
console.log(process.env.DB_PASSWORD);

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    dialect: "mysql",
    host: process.env.DB_HOST,
  }
);

module.exports = sequelize;
