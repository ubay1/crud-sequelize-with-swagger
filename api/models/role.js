'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  // class roles extends Model {};
  const role = sequelize.define('role', {
    role_name: DataTypes.STRING,
    text_role_name: DataTypes.STRING,
  }, );

  /** Relasi table
   *  one to one, one to many, many to many
   */
  role.associate = function (models) {
    role.hasOne(models.user)
  };
  return role;
};