/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Tour', [{ 'key model'}], {});
  },
  async down(queryInterface) {
    await queryInterface.bulkDelete('Tours', null, {});
  },
};