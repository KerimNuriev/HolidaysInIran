/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Day', [{ 'key model' }], {});
  },
  async down(queryInterface) {
    await queryInterface.bulkDelete('Days', null, {});
  },
};
