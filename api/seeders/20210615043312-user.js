'use strict';
const moment = require('moment');
const encrypt = require('../helper/bcrypt')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [{
      roleId: 5,
      name: 'mutiara fatichah',
      gender: 'P',
      phone: '089653674186',
      phone_verif: false,
      email: 'mutiarafatichah22@gmail.com',
      // disable biar gakditampilin
      email_verif: false,
      email_verification_token: '',
      password: encrypt.bcrypt.hashSync('buaran123', encrypt.saltBcrypt),
      photo: '12345',
      no_ktp: '12345',
      no_rekening: '12345',
      no_bpjs: '12345',
      createdAt: moment().format('YYYY-MM-DD HH:mm:ss'),
      updatedAt: moment().format('YYYY-MM-DD HH:mm:ss'),
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};
