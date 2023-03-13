'use strict';
const { Photo } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await Photo.bulkCreate([
      {
        id: 1,
        photo: '/image/photo1.jpeg',
      },
      {
        id: 2,
        photo: '/image/photo2.jpeg',
      },
      {
        id: 3,
        photo: '/image/photo3.jpeg',
      },
      {
        id: 4,
        photo: '/image/photo4.jpeg',
      },
      {
        id: 5,
        photo: '/image/photo5.jpeg',
      },
      {
        id: 6,
        photo: '/image/photo6.jpg',
      },
      {
        id: 7,
        photo: '/image/photo7.jpg',
      },
      {
        id: 8,
        photo: '/image/photo8.jpg',
      },
      {
        id: 9,
        photo: '/image/photo9.jpg',
      },
      {
        id: 10,
        photo: '/image/photo10.jpg',
      },
      {
        id: 11,
        photo: '/image/photo11.jpg',
      },
      {
        id: 12,
        photo: '/image/photo12.jpg',
      },
    ]);
  },

  async down(queryInterface) {
    await Photo.destroy({ truncate: { cascade: true } });
  },
};
