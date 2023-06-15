import { Router, Request, Response } from "express";
import { ProductCategory } from "../model/ProductCategoryModel";
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
    const categoryId = req.params.productId;
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
  const { categoryName } = req.body;
  try {
    const newCategory = await ProductCategory.create({ categoryName });
    res.status(201).json(newCategory).send("created successfully");
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
});

//Update a specific product based on product id
productCategoriesRouter.put(
  "/:categoryId",
  async (req: Request, res: Response) => {
    const categoryId = req.params.categoryId;
    const { categoryName } = req.body;
    try {
      const category = await ProductCategory.findByPk(categoryId);
      if (category) {
        category.categoryName = categoryName;
        await category.save();
        res.json(category);
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
