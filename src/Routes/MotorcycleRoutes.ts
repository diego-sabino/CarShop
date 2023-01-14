import { Router } from 'express';
import MotorcycleController from '../Controllers/MotorcycleController';

const Motorcycle = Router();

Motorcycle.post(
  '/motorcycles',
  (req, res, next) => new MotorcycleController(req, res, next).createOne(),
);

Motorcycle.get(
  '/motorcycles/:id',
  (req, res, next) => new MotorcycleController(req, res, next).findOne(),
);

Motorcycle.get(
  '/motorcycles',
  (req, res, next) => new MotorcycleController(req, res, next).find(),
);

Motorcycle.put(
  '/motorcycles/:id',
  (req, res, next) => new MotorcycleController(req, res, next).updateOne(),
);

export default Motorcycle;