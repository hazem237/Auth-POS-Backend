import { Router, Request, Response } from "express";
import { Product, ProductCreationAttributes } from "../model/productModel";
import { authenticateToken } from "../auth/auth";

const productsRouter = Router();

//Retrive all products
productsRouter.get(
  "/",
  authenticateToken,
  async (req: Request, res: Response) => {
    try {
      const products = await Product.findAll();
      res.json(products);
      console.log("Products have been Retrived");
    } catch (error) {
      res.status(500).json({ error: "Server Error" });
    }
  }
);

//Bring a specific product based on product id
productsRouter.get(
  "/:productId",
  authenticateToken,
  async (req: Request, res: Response) => {
    const productId = req.params.productId;
    try {
      const product = await Product.findByPk(productId);
      if (product) {
        res.json(product);
        console.log("Single product have been Retrived");
      } else {
        res.status(404).json({ error: "Product not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Server Error" });
    }
  }
);

//Post a new product
productsRouter.post(
  "/",
  authenticateToken,
  async (req: Request, res: Response) => {
    const {
      name,
      code,
      image,
      price,
      categoryId,
      unitId,
    }: ProductCreationAttributes = req.body;
    if (
      typeof name !== "string" ||
      typeof code !== "string" ||
      (image !== undefined && typeof image !== "string") ||
      typeof price !== "number" ||
      typeof categoryId !== "number" ||
      typeof unitId !== "number"
    ) {
      return res.status(400).json({ error: "Invalid data types" });
    }
    try {
      const product = await Product.create({
        name,
        code,
        image,
        price,
        categoryId,
        unitId,
      });
      res.status(201).json(product);
      console.log("The product has been added successfully");
    } catch (error) {
      res.status(500).json({ error: "Server Error" });
    }
  }
);

//Update a specific product based on product id
productsRouter.put(
  "/:productId",
  authenticateToken,
  async (req: Request, res: Response) => {
    const productId = req.params.productId;
    const {
      name,
      code,
      image,
      price,
      categoryId,
      unitId,
    }: ProductCreationAttributes = req.body;
    if (
      typeof name !== "string" ||
      typeof code !== "string" ||
      (image !== undefined && typeof image !== "string") ||
      typeof price !== "number" ||
      typeof categoryId !== "number" ||
      typeof unitId !== "number"
    ) {
      return res.status(400).json({ error: "Invalid data types" });
    }
    try {
      const product = await Product.findByPk(productId);
      if (product) {
        await product.update({ name, code, image, price, categoryId, unitId });
        res.json(product);
        console.log("The product has been updated successfully");
      } else {
        res.status(404).json({ error: "Product not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Server Error" });
    }
  }
);

//Delete a specific product based on product id
productsRouter.delete(
  "/:productId",
  authenticateToken,
  async (req: Request, res: Response) => {
    const productId = req.params.productId;
    try {
      const product = await Product.findByPk(productId);
      if (product) {
        await product.destroy();
        res.json({ message: "Product deleted successfully" });
      } else {
        res.status(404).json({ error: "Product not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Server Error" });
    }
  }
);

export default productsRouter;
