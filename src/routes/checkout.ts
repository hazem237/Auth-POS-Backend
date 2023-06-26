import { Router, Request, Response } from "express";
const checkoutRouter = Router();

checkoutRouter.post(
  "/",
  async (req: Request, res: Response) => {
    try {
      const { products, tax, discount } = req.body;

      if (
        !Array.isArray(products) ||
        typeof tax !== "number" ||
        typeof discount !== "number"
      ) {
        return res.status(400).json({ error: "Invalid data types" });
      }

      let totalPrice = 0;
      for (const product of products) {
        if (
          typeof product.name !== "string" ||
          typeof product.code !== "string" ||
          typeof product.quantity !== "number" ||
          typeof product.price !== "number"
        ) {
          return res.status(400).json({ error: "Invalid product data types" });
        }
        totalPrice += product.quantity * product.price;
      }

      const discountedPrice = totalPrice - totalPrice * discount;
      const totalPriceWithTax = discountedPrice + discountedPrice * tax;

      res.status(200).json({ totalPrice: totalPriceWithTax });
      console.log("Checkout completed successfully");
    } catch (error) {
      res.status(500).json({ error: "Server Error" });
    }
  }
);

export default checkoutRouter;
