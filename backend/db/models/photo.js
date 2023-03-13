'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Photo extends Model {
    static associate() {}
  }
  Photo.init(
    {
      photo: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'Photo',
    }
  );
  return Photo;
};
