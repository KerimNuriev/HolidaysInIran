/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Days', {
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
      number_day: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      title_city: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      image: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      shortDescription: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      description: {
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
    await queryInterface.dropTable('Days');
  },
};
