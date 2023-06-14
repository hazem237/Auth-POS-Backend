import express from "express";
import productsRouter from "./routes/products.js";
import productCategoriesRouter from "./routes/productCategories.js";
import unitOfMeasureRouter from "./routes/unitOfMeasure.js";
const app = express();
const port = 5050;

app.use("/products", productsRouter);
app.use("/product-categories", productCategoriesRouter);
app.use("/unit-of-measure", unitOfMeasureRouter);

// Start the server
app.listen(port, () => {
  console.log("Server is running on port 5050");
});
