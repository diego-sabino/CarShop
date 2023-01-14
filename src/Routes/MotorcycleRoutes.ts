import { Router } from 'express';
import MotorcycleController from '../Controllers/MotorcycleController';

const Motorcycle = Router();
const motorcyclesId = '/motorcycles/:id' as const;

Motorcycle.post(
  '/motorcycles',
  (req, res, next) => new MotorcycleController(req, res, next).createOne(),
);

Motorcycle.get(
  motorcyclesId,
  (req, res, next) => new MotorcycleController(req, res, next).findOne(),
);

Motorcycle.get(
  '/motorcycles',
  (req, res, next) => new MotorcycleController(req, res, next).find(),
);

Motorcycle.put(
  motorcyclesId,
  (req, res, next) => new MotorcycleController(req, res, next).updateOne(),
);

Motorcycle.delete(
  motorcyclesId,
  (req, res, next) => new MotorcycleController(req, res, next).deleteOne(),
);

export default Motorcycle;