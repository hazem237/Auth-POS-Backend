import express from "express";
const productsRouter = express.Router();

productsRouter.get('/', (req, res) => {
  res.send('Products page');
});


export default productsRouter;