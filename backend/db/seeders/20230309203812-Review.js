/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Review', [{ 'key model'}], {});
  },
  async down(queryInterface) {
    await queryInterface.bulkDelete('Reviews', null, {});
  },
};