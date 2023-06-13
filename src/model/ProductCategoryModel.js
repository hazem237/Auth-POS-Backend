const { DataTypes } = require('sequelize');
const sequelize = require('../../database');

const ProductCategory = sequelize.define('ProductCategory', {
  categoryId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  categoryName: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = ProductCategory;
