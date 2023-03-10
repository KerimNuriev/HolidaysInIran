const { City } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await City.bulkCreate([
      {
        cityName: 'Kashahn/Yazd',
        image: '/image/Кашан.jpg',
        description: 'Одна из 21 области Иранской провинции Исфахан. Административный центр — город Kashahn.',

      },
      {
        cityName: 'Yazd/Maybod',
        image: '/image/Мейбод.jpg',
        description: 'Город в центральном районе округа Maybod, провинция Yazd.',

      },
      {
        cityName: 'Yazd/Taft',
        image: '/image/Тафт.jpg',
        description: 'Город в центральном районе округа Taft, провинция Yazd.',

      },
      {
        cityName: 'Shiraz',
        image: '/image/Шираз.jpg',
        description: 'Город на юге Ирана, административный центр провинции Фарс',

      },
      {
        cityName: 'Isfahan',
        image: '/image/Исфахан.jpg',
        description: 'Является крупным городом в Центральном районе провинции Исфахан в Иране',

      },
      {
        cityName: 'Tehran',
        image: '/image/Тегеран.jpg',
        description: 'Столица и крупнейший город Ирана и крупнейший город в провинции Тегеран',

      },
    ]);
  },

  async down(queryInterface) {
    await City.destroy({ truncate: { cascade: true } });
  },
};
