const { Schedule } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await Schedule.bulkCreate([
      {
        tourId: 1,
        startDay: new Date(2023, 2, 17),
        endDay: new Date(2023, 2, 24),
        hasFree: 'мест нет',

      },
      {
        tourId: 1,
        startDay: new Date(2023, 3, 1),
        endDay: new Date(2023, 3, 8),
        hasFree: 'мест нет',

      },
      {
        tourId: 1,
        startDay: new Date(2023, 3, 12),
        endDay: new Date(2023, 3, 19),
        hasFree: 'места есть',

      },
      {
        tourId: 1,
        startDay: new Date(2023, 4, 2),
        endDay: new Date(2023, 4, 9),
        hasFree: 'места есть',

      },
      {
        tourId: 2,
        startDay: new Date(2023, 2, 18),
        endDay: new Date(2023, 2, 25),
        hasFree: 'мест нет',

      },
      {
        tourId: 2,
        startDay: new Date(2023, 3, 17),
        endDay: new Date(2023, 3, 27),
        hasFree: 'мест нет',

      },
      {
        tourId: 2,
        startDay: new Date(2023, 3, 22),
        endDay: new Date(2023, 3, 30),
        hasFree: 'мест нет',

      },
      {
        tourId: 2,
        startDay: new Date(2023, 4, 17),
        endDay: new Date(2023, 4, 27),
        hasFree: 'места есть',

      },
    ]);
  },

  async down(queryInterface) {
    await Schedule.destroy({ truncate: { cascade: true } });
  },
};
