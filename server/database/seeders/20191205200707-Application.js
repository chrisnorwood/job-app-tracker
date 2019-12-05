'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Applications',[
      {
        company: 'Fake Company',
        location: 'San Diego',
        url: 'http://fakeurl.com',
        source: 'HackerNews',
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        company: 'Apple',
        location: 'Los Angeles',
        url: 'http://google.com',
        source: 'ZipRecruiter',
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        company: 'Amazon',
        location: 'San Fransisco',
        url: 'http://fakeurl.com',
        source: 'Glassdoor',
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Applications', null, {});
  }
};
