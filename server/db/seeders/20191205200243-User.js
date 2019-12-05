'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users',[
      {
        email: 'foo@bar.com',
        passwordDigest: 'foobar',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'test@test.com',
        passwordDigest: 'foobar',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
