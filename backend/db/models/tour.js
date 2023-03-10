const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Tour extends Model {
    static associate({ Day, Schedule }) {
      this.hasMany(Day, { foreignKey: 'tourId' });
      this.hasMany(Schedule, { foreignKey: 'tourId' });
    }
  }
  Tour.init({
    title: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    price_1: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    price_2: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    days: {
      allowNull: false,
      type: DataTypes.INTEGER,
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
    modelName: 'Tour',
  });
  return Tour;
};
