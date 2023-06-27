import { Router, Request, Response } from "express";
import {
  UnitOfMeasure,
  UnitOfMeasureCreationAttributes,
} from "../model/unitOfMeasureModel";
const unitOfMeasureRouter = Router();

unitOfMeasureRouter.get("/", async (req: Request, res: Response) => {
  try {
    const units = await UnitOfMeasure.findAll();
    setTimeout(() => {
      res.json(units);
    }, 3500);
  } catch (error) {
    setTimeout(() => {
      res.status(500).json({ error: "Server Error" });
    }, 3500);
  }
});

unitOfMeasureRouter.get("/:unitId", async (req: Request, res: Response) => {
  const unitId = req.params.unitId;
  try {
    const unit = await UnitOfMeasure.findByPk(unitId);
    if (unit) {
      setTimeout(() => {
        res.json(unit);
      }, 3500);
    } else {
      setTimeout(() => {
        res.status(404).json({ error: "Unit of measure not found" });
      }, 3500);
    }
  } catch (error) {
    setTimeout(() => {
      res.status(500).json({ error: "Server Error" });
    }, 3500);
  }
});

unitOfMeasureRouter.post("/", async (req: Request, res: Response) => {
  const {
    unitName,
    baseUnit,
    conversionFactor,
  }: UnitOfMeasureCreationAttributes = req.body;
  if (
    typeof unitName !== "string" ||
    typeof baseUnit !== "string" ||
    typeof conversionFactor !== "number"
  ) {
    setTimeout(() => {
      return res.status(400).json({ error: "Invalid data types" });
    }, 3500);
  }
  try {
    const newUnit = await UnitOfMeasure.create({
      unitName,
      baseUnit,
      conversionFactor,
    });
    setTimeout(() => {
      res.status(201).json({ message: "unit added successfully", newUnit });
    }, 3500);
  } catch (error) {
    setTimeout(() => {
      res.status(500).json({ error: "Server Error" });
    }, 3500);
  }
});

unitOfMeasureRouter.put("/:unitId", async (req: Request, res: Response) => {
  const unitId = req.params.unitId;
  const {
    unitName,
    baseUnit,
    conversionFactor,
  }: UnitOfMeasureCreationAttributes = req.body;
  if (
    typeof unitName !== "string" ||
    typeof baseUnit !== "string" ||
    typeof conversionFactor !== "number"
  ) {
    setTimeout(() => {
      return res.status(400).json({ error: "Invalid data types" });
    }, 3500);
  }
  try {
    const unit = await UnitOfMeasure.findByPk(unitId);
    if (unit) {
      unit.unitName = unitName;
      unit.baseUnit = baseUnit;
      unit.conversionFactor = conversionFactor;
      await unit.save();
      setTimeout(() => {
        res.json({ message: "unit updated successfully", unit });
      }, 3500);
    } else {
      setTimeout(() => {
        res.status(404).json({ error: "Unit of measure not found" });
      }, 3500);
    }
  } catch (error) {
    setTimeout(() => {
      res.status(500).json({ error: "Server Error" });
    }, 3500);
  }
});

unitOfMeasureRouter.delete("/:unitId", async (req: Request, res: Response) => {
  const unitId = req.params.unitId;

  try {
    const unit = await UnitOfMeasure.findByPk(unitId);
    if (unit) {
      await unit.destroy();
      setTimeout(() => {
        res.json({ message: "Unit of measure deleted successfully" });
      }, 3500);
    } else {
      setTimeout(() => {
        res.status(404).json({ error: "Unit of measure not found" });
      }, 3500);
    }
  } catch (error) {
    setTimeout(() => {
      res.status(500).json({ error: "Server Error" });
    }, 3500);
  }
});

export default unitOfMeasureRouter;
