import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../../database';
import { ProductCategory } from './ProductCategoryModel';
import { UnitOfMeasure } from './unitOfMeasureModel';

interface ProductAttributes {
  productId: number;
  name: string;
  code: string;
  image?: string;
  price: number;
  categoryId: number;
  unitId: number;
}

interface ProductCreationAttributes extends Optional<ProductAttributes, 'productId'> {}

class Product extends Model<ProductAttributes, ProductCreationAttributes> implements ProductAttributes {
  public productId!: number;
  public name!: string;
  public code!: string;
  public image?: string;
  public price!: number;
  public categoryId!: number;
  public unitId!: number;
}

Product.init(
  {
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
        key: 'categoryId',
      },
    },
    unitId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: UnitOfMeasure,
        key: 'unitId',
      },
    },
  },
  {
    sequelize,
    modelName: 'Product',
  }
);

Product.belongsTo(ProductCategory, { foreignKey: 'categoryId' });
Product.belongsTo(UnitOfMeasure, { foreignKey: 'unitId' });

export { Product };
