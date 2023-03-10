const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Schedule extends Model {
    static associate({ Tour }) {
      this.belongsTo(Tour, { foreignKey: 'tourId' });
    }
  }
  Schedule.init({
    tourId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Tours',
        key: 'id',
      },
      onDelete: 'CASCADE',
    },
    startDay: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    endDay: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    hasFree: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
  }, {
    sequelize,
    modelName: 'Schedule',
  });
  return Schedule;
};
