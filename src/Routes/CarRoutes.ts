import { Router } from 'express';
import CarController from '../Controllers/CarController';

const CarRoutes = Router();

CarRoutes.post(
  '/cars',
  (req, res, next) => new CarController(req, res, next).createOne(),
);

CarRoutes.get(
  '/cars/:id',
  (req, res, next) => new CarController(req, res, next).findOne(),
);

CarRoutes.get(
  '/cars',
  (req, res, next) => new CarController(req, res, next).find(),
);

CarRoutes.put(
  '/cars/:id',
  (req, res, next) => new CarController(req, res, next).updateOne(),
);

export default CarRoutes;