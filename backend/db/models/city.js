const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class City extends Model {
    static associate() {}
  }
  City.init(
    {
      cityNameRu: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      cityNameEn: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      image: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      descriptionRu: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      descriptionEn: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: 'City',
    }
  );
  return City;
};
