import { Router, Request, Response } from 'express';
import { UnitOfMeasure } from '../model/unitOfMeasureModel';
const unitOfMeasureRouter = Router();

unitOfMeasureRouter.get('/', async (req: Request, res: Response) => {
  try {
    const units = await UnitOfMeasure.findAll();
    res.json(units);
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
});

unitOfMeasureRouter.get('/:unitId', async (req: Request, res: Response) => {
  const unitId = req.params.unitId;
  try {
    const unit = await UnitOfMeasure.findByPk(unitId);
    if (unit) {
      res.json(unit);
    } else {
      res.status(404).json({ error: 'Unit of measure not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
});

unitOfMeasureRouter.post('/', async (req: Request, res: Response) => {
  const { unitName, baseUnit, conversionFactor } = req.body;

  try {
    const newUnit = await UnitOfMeasure.create({ unitName, baseUnit, conversionFactor });
    res.status(201).json(newUnit);
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
});

unitOfMeasureRouter.put('/:unitId', async (req: Request, res: Response) => {
  const unitId = req.params.unitId;
  const { unitName, baseUnit, conversionFactor } = req.body;

  try {
    const unit = await UnitOfMeasure.findByPk(unitId);
    if (unit) {
      unit.unitName = unitName;
      unit.baseUnit = baseUnit;
      unit.conversionFactor = conversionFactor;
      await unit.save();
      res.json(unit);
    } else {
      res.status(404).json({ error: 'Unit of measure not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
});

unitOfMeasureRouter.delete('/:unitId', async (req: Request, res: Response) => {
  const unitId = req.params.unitId;

  try {
    const unit = await UnitOfMeasure.findByPk(unitId);
    if (unit) {
      await unit.destroy();
      res.json({ message: 'Unit of measure deleted successfully' });
    } else {
      res.status(404).json({ error: 'Unit of measure not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
});

export default unitOfMeasureRouter;