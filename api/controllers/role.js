// const models = require('../models');
// const { validationResult } = require('express-validator');
// const bcrypt = require('bcrypt');
// const salt = bcrypt.genSaltSync(10);
// const jwt = require('jsonwebtoken');
// const dotenv = require("dotenv"); 
// const path = require("path") 
// const fs = require('fs-extra')
// // get config vars
// dotenv.config();
// const moment = require('moment')
// const hashids = require('../helper/hash')

// For sequelize and swagger-sequelize:
const swaggerSequelize = require("../models/swaggerSequelize");

// Setup Sequelize-ORM for "Document" based on Swagger API specification:
var RoleModel =  swaggerSequelize.sequelize.define('role', swaggerSequelize.swaggerSequelize.generate(swaggerSequelize.swaggerSpec.definitions.Role));

// Setup/sync database table:
// force: false => If table already exists, don't touch or update it.
// force: true  => Delete table if it exists. Then create a new table.
RoleModel.sync({force: false})
.then(() => { console.log("==>> RoleModel synched ====================================="); });

module.exports.createRole = (req, res) => {
  const reqBody = req.body;
  RoleModel.create(reqBody).then((data) => {;
    res.status(201).json({
      message: 'data role berhasil dibuat',
      data: data
    });
  });
}

module.exports.readAll = (req, res) => {
  RoleModel.findAll().then((data) => {;
    res.status(200).json(data);
  });
}

module.exports.readById = (req, res) => {
  const reqId = req.swagger.params.id.value; // get id from parameter
  RoleModel.findByPk(reqId).then( (data) => {
    if(data == null) {
      res.status(404).json({
        message: `data tidak ditemukan`
      });
    } else {
      res.json(data);
    }
  });
}

module.exports.updateById = (req, res) => {
  const reqId = req.swagger.params.id.value;
  const reqBody = req.body;

  console.log(reqBody)

  RoleModel.findByPk(reqId).then((foundRole) => {
    if(foundRole==null) {
      res.status(404).json({message:"The requested document with id "+reqId+" could not be found. You may try another id."});
    } else {
      foundRole.update(reqBody).then((updatedRole) => {
        // Status Code 200
        res.json({
          message: 'data berhasil diubah',
          data: updatedRole
        });
      });
    }
  });
}

module.exports.deleteById = (req, res) => {
  const reqId = req.swagger.params.id.value;
  console.log("Requested id:", reqId);

  RoleModel.destroy({where: { id: reqId } })
  .then( (destoryedCount) => {
    if(destoryedCount == 0) {
      res.status(404).json({
        message: `data tidak ditemukan`
      });
    } else {
      // Successfully deleted ...
      res.json({
        message: "data berhasil dihapus",
      });
    }
  });
}