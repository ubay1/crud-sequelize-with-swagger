'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  // class user extends Model {};

  const user = sequelize.define('user', {
    name: DataTypes.STRING,
    gender: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    // disable biar gakditampilin
    email_verif: DataTypes.BOOLEAN,
    email_verification_token: DataTypes.TEXT,
    password: DataTypes.TEXT,
    photo: DataTypes.TEXT,
    no_ktp: DataTypes.TEXT,
    no_rekening: DataTypes.TEXT,
    no_bpjs: DataTypes.TEXT,
  }, );

  /** Relasi table
   *  one to one, one to many, many to many
   */
  user.associate = function (models) {
    user.belongsTo(models.role, {foreignKey: 'roleId'})
  };

  return user;
};