import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../../database';

interface ProductCategoryAttributes {
  categoryId: number;
  categoryName: string;
}

export interface ProductCategoryCreationAttributes extends Optional<ProductCategoryAttributes, 'categoryId'> {}

class ProductCategory extends Model<ProductCategoryAttributes, ProductCategoryCreationAttributes>
  implements ProductCategoryAttributes {
  public categoryId!: number;
  public categoryName!: string;
}

ProductCategory.init(
  {
    categoryId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    categoryName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'ProductCategory',
  }
);

export { ProductCategory };
