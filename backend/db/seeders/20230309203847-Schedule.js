/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Schedule', [{ 'key model'}], {});
  },
  async down(queryInterface) {
    await queryInterface.bulkDelete('Schedules', null, {});
  },
};
