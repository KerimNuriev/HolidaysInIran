/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'City', [{ 'key model' }], {});
  },
  async down(queryInterface) {
    await queryInterface.bulkDelete('Cities', null, {});
  },
};
