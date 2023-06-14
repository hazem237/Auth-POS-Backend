import { DataTypes } from "sequelize";
import sequelize from "../../database";

export const ProductCategory = sequelize.define("ProductCategory", {
  categoryId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  categoryName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
