import express from "express";
import productsRouter from "./routes/products.js";
import productCategoriesRouter from "./routes/productCategories.js";
import unitOfMeasureRouter from "./routes/unitOfMeasure.js";
import sequelize from "../database.js";
import { seedDatabase } from "../seed.js";
import authRouter from "./routes/authRoutes.js";
import userRouter from "./routes/users.js";
import { User } from "./model/userModel.js";
const app = express();
const port = 5050;
app.use(express.json());

sequelize.sync().then(() => seedDatabase());
app.use("/", authRouter);
app.use("/products", productsRouter);
app.use("/product-categories", productCategoriesRouter);
app.use("/unit-of-measure", unitOfMeasureRouter);
//for development purpose
app.use("/users", userRouter);

// Start the server
app.listen(port, () => {
  console.log("Server is running on port 5050");
});
