import express from "express";
const productCategoriesRouter = express.Router();

productCategoriesRouter.get("/", (req, res) => {
  res.send("Product Categories page");
});

export default productCategoriesRouter;