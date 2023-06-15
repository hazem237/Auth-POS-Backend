import { Router, Request, Response } from "express";
import {
  ProductCategory,
  ProductCategoryCreationAttributes,
} from "../model/ProductCategoryModel";
const productCategoriesRouter = Router();

//Retrive all categories
productCategoriesRouter.get("/", async (req: Request, res: Response) => {
  try {
    const categories = await ProductCategory.findAll();
    res.json(categories);
    console.log("categories have been Retrived");
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
});

//Bring a specific category based on category id
productCategoriesRouter.get(
  "/:categoryId",
  async (req: Request, res: Response) => {
    const categoryId = req.params.categoryId;
    try {
      const category = await ProductCategory.findByPk(categoryId);
      if (category) {
        res.json(category);
        console.log("Single category have been Retrived");
      } else {
        res.status(404).json({ error: "category not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Server Error" });
    }
  }
);

//Post a new category
productCategoriesRouter.post("/", async (req: Request, res: Response) => {
  const { categoryName }: ProductCategoryCreationAttributes = req.body;
  if (typeof categoryName !== "string") {
    return res.status(400).json({ error: "Invalid data types" });
  }
  try {
    const newCategory = await ProductCategory.create({ categoryName })
      .then(() => {
        res
          .status(201)
          .json({ message: "Category added successfully", newCategory });
      })
      .catch((err) => console.log(err));
  } catch (error) {
    res.status(500).json({ error: "Server Error" }).end();
  }
});

//Update a specific product based on product id
productCategoriesRouter.put(
  "/:categoryId",
  async (req: Request, res: Response) => {
    const categoryId = req.params.categoryId;
    const { categoryName }: ProductCategoryCreationAttributes = req.body;
    if (typeof categoryName !== "string") {
      return res.status(400).json({ error: "Invalid data types" });
    }
    try {
      const category = await ProductCategory.findByPk(categoryId);
      if (category) {
        category.categoryName = categoryName;
        await category.save();
        res.json({ message: "Category Updated successfully", category });
      } else {
        res.status(404).json({ error: "Category not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Server Error" });
    }
  }
);

//Delete a specific product based on product id
productCategoriesRouter.delete(
  "/:categoryId",
  async (req: Request, res: Response) => {
    const categoryId = req.params.categoryId;

    try {
      const category = await ProductCategory.findByPk(categoryId);
      if (category) {
        await category.destroy();
        res.json({ message: "Category deleted successfully" });
      } else {
        res.status(404).json({ error: "Category not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Server Error" });
    }
  }
);

export default productCategoriesRouter;
