const { City } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await City.bulkCreate([
      {
        cityName: 'Kashahn/Yazd',
        image: '/image/kashan.png',
        descriptionRu:
          'Одна из 21 области Иранской провинции Исфахан. Административный центр — город Kashahn.',
        descriptionEn:
          'One of the 21 provinces of the Iranian province of Isfahan. The administrative center is the city of Kashahn.',
      },
      {
        cityName: 'Yazd/Maybod',
        image: '/image/maybod.png',
        descriptionRu:
          'Город в центральном районе округа Maybod, провинция Yazd.',
        descriptionEn:
          'A city in the central district of Maybod district, Yazd province.',
      },
      {
        cityName: 'Yazd/Taft',
        image: '/image/taft.png',
        descriptionRu:
          'Город в центральном районе округа Taft, провинция Yazd.',
        descriptionEn:
          'City in the Central District of Taft County, Yazd Province.',
      },
      {
        cityName: 'Shiraz',
        image: '/image/shiraz.png',
        descriptionRu:
          'Город на юге Ирана, административный центр провинции Фарс',
        descriptionEn: 'A city in southern Iran, the capital of Fars Province',
      },
      {
        cityName: 'Isfahan',
        image: '/image/isfahan.png',
        descriptionRu:
          'Является крупным городом в Центральном районе провинции Исфахан в Иране',
        descriptionEn:
          'Is a major city in the Central District of Isfahan Province in Iran',
      },
      {
        cityName: 'Tehran',
        image: '/image/tehran.png',
        descriptionRu:
          'Столица и крупнейший город Ирана и крупнейший город в провинции Тегеран',
        descriptionEn:
          'The capital and largest city of Iran and the largest city in the province of Tehran',
      },
    ]);
  },

  async down(queryInterface) {
    await City.destroy({ truncate: { cascade: true } });
  },
};
