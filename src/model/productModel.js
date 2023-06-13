const { DataTypes } = require("sequelize");
const sequelize = require("../../database");
const ProductCategory = require('./ProductCategoryModel');
const UnitOfMeasure = require('./unitOfMeasureModel');

const Product = sequelize.define("Product", {
  productId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  code: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  image: {
    type: DataTypes.STRING,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  categoryId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: ProductCategory,
      key: 'categoryId'
    }
  },
  unitId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: UnitOfMeasure,
      key: 'unitId'
    }
  },
});

Product.belongsTo(ProductCategory, { foreignKey: 'categoryId' });
Product.belongsTo(UnitOfMeasure, { foreignKey: 'unitId' });

module.exports = Product;
