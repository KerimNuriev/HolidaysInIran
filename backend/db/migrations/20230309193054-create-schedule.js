/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Schedules', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      tourId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Tours',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      startDay: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      endDay: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      hasFree: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('Schedules');
  },
};
