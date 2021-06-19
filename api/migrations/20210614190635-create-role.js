'use strict';
const withDateNoTz = require('sequelize-date-no-tz-postgres');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const DataTypes = withDateNoTz(Sequelize);

    await queryInterface.createTable('roles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      role_name: {
        type: Sequelize.STRING(30)
      },
      text_role_name: {
        type: Sequelize.STRING(30)
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE_NO_TZ
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE_NO_TZ
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('roles');
  }
};