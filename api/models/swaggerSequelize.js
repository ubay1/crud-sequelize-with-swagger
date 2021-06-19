'use strict';

const Sequelize = require('sequelize');
const swaggerSequelize = require('swagger-sequelize');
const fs        = require('fs');
const jsyaml    = require('js-yaml');
const path      = require("path");

const sequelizeOptions = {
  username: "postgres",
  password: "buaran123",
  database: "kantorku",
  host: "127.0.0.1",
  dialect: "postgres",
  dialectOptions: { 
    useUTC: false,
    timezone: "+7"
  },
  timezone: "+7"
};

const sequelize = new Sequelize(
  /*database*/ null,
  /*username*/ null, 
  /*password*/ null, 
  /*options */ sequelizeOptions
);

swaggerSequelize.setDialect(sequelize.options.dialect);

// Read Swagger-API-Spec as YAML and convert it to an object:
const swaggerSpec = jsyaml.safeLoad(fs.readFileSync(path.join(__dirname, '../swagger/swagger.yaml'), 'utf8'));
// const swaggerSpec = fs.readFileSync(path.join(__dirname, '../swagger/swaggerss.json'))

module.exports = {
  sequelize,
  swaggerSequelize,
  swaggerSpec
};