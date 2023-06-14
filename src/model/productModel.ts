import { DataTypes } from "sequelize";
import sequelize from "../../database";
import { ProductCategory } from "./ProductCategoryModel";
import { UnitOfMeasure } from "./unitOfMeasureModel";

export const Product = sequelize.define("Product", {
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
      key: "categoryId",
    },
  },
  unitId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: UnitOfMeasure,
      key: "unitId",
    },
  },
});

Product.belongsTo(ProductCategory, { foreignKey: "categoryId" });
Product.belongsTo(UnitOfMeasure, { foreignKey: "unitId" });

