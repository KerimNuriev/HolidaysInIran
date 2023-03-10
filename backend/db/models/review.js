const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    static associate() {}
  }
  Review.init({
    userName: {
      type: DataTypes.TEXT,
    },
    reviewtext: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    rating: {
      type: DataTypes.INTEGER,
    },
  }, {
    sequelize,
    modelName: 'Review',
  });
  return Review;
};