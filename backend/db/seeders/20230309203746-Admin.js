const bcrypt = require('bcrypt');

const { Admin } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await Admin.bulkCreate([
      {
        userName: 'Adminka',
        password: await bcrypt.hash('123', 10),
      },
    ]);
  },

  async down(queryInterface) {
    await Admin.destroy({ truncate: { cascade: true } });
  },
};
