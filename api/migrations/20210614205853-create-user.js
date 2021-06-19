'use strict';
const withDateNoTz = require('sequelize-date-no-tz-postgres');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const DataTypes = withDateNoTz(Sequelize);

    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      roleId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'roles',
          key: 'id',
          // as : 'jobId'
        },
      },
      name: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.STRING(1)
      },
      phone: {
        type: Sequelize.STRING(13)
      },
      phone_verif: {
        type: Sequelize.BOOLEAN,
        allowNull: true
      },
      email: {
        type: Sequelize.STRING
      },
      email_verif: {
        type: Sequelize.BOOLEAN,
        allowNull: true
      },
      email_verification_token: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      password: {
        type: Sequelize.TEXT
      },
      no_ktp: {
        type: Sequelize.STRING(20)
      },
      no_rekening: {
        type: Sequelize.STRING(25)
      },
      no_bpjs: {
        type: Sequelize.STRING(25),
        allowNull: true
      },
      photo: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE_NO_TZ
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE_NO_TZ
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};