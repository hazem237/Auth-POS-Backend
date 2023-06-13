const { DataTypes } = require('sequelize');
const sequelize = require('../../database');

const UnitOfMeasure = sequelize.define('UnitOfMeasure', {
  unitId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  unitName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  baseUnit: {
    type: DataTypes.STRING,
    allowNull: false
  },
  conversionFactor: {
    type: DataTypes.FLOAT,
    allowNull: false
  }
});

module.exports = UnitOfMeasure;
