const { Review } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await Review.bulkCreate([
      {
        userName: 'Salam',
        reviewtext: 'Lalalala',
        rating: 0,

      },
    ]);
  },

  async down(queryInterface) {
    await Review.destroy({ truncate: { cascade: true } });
  },
};
