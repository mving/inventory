require('dotenv').config();
const { Sequelize } = require('sequelize');

const DB_URL = process.env.DB_URL || 'postgres://postgres:postgres@127.0.0.1:5432/postgres';
const sequelize = new Sequelize(DB_URL, { logging: false });

module.exports = { sequelize };
