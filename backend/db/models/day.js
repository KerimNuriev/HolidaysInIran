const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Day extends Model {
    static associate({ Tour }) {
      this.belongsTo(Tour, { foreignKey: 'tourId' });
    }
  }
  Day.init({
    tourId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Tours',
        key: 'id',
      },
      onDelete: 'CASCADE',
    },
    number_day: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    title_city: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    image: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    shortDescription: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    description: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
  }, {
    sequelize,
    modelName: 'Day',
  });
  return Day;
};
