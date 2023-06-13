const express = require('express');
const app = express();
const port = 5050;
const productsRouter = require('./routes/products');
const productCategoriesRouter = require('./routes/productCategories');
const unitOfMeasureRouter = require('./routes/unitOfMeasure');

app.use('/products', productsRouter);
app.use('/product-categories', productCategoriesRouter);
app.use('/unit-of-measure', unitOfMeasureRouter);

// Start the server
app.listen(port, () => {
  console.log('Server is running on port 5050');
});
