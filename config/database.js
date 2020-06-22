
require("dotenv").config();

const {
  DB_HOST,
  DB_DIALECT,
  DB_USER,
  DB_PORT,
  DB_PASS,
  DB_DATABASE } = process.env
//
module.exports = {
    host: DB_HOST,
    dialect: DB_DIALECT,
    username: DB_USER,
    port: DB_PORT,
    password: DB_PASS,
    database: DB_DATABASE,
  };
  