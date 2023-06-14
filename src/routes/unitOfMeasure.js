import express from "express";
const unitOfMeasureRouter = express.Router();

unitOfMeasureRouter.get("/", (req, res) => {
  res.send("Unit of Measure page");
});

export default unitOfMeasureRouter;