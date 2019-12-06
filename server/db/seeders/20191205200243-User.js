'use strict';

const bcrypt = require('bcrypt');
const bcryptSaltRounds = parseInt(process.env.BCRYPT_SALT_ROUNDS);
// Create passwordDigest that will play nice with the auth system
const foobarDigest = bcrypt.hashSync('foobar', bcryptSaltRounds);

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users',[
      {
        email: 'foo@bar.com',
        passwordDigest: foobarDigest,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'test@test.com',
        passwordDigest: foobarDigest,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
