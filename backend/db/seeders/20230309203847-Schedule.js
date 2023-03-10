const { Schedule } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await Schedule.bulkCreate([
      {
        tourId: 1,
        startDay: new Date(2023, 2, 17),
        endDay: new Date(2023, 2, 25),
        hasFree: 'места есть',

      },
      {
        tourId: 2,
        startDay: new Date(2023, 2, 17),
        endDay: new Date(2023, 2, 27),
        hasFree: 'мест нет',

      },
    ]);
  },

  async down(queryInterface) {
    await Schedule.destroy({ truncate: { cascade: true } });
  },
};
