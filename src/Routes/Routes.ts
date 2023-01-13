import { Router } from 'express';
import CarController from '../Controllers/CarController';

const routes = Router();

routes.post(
  '/cars',
  (req, res, next) => new CarController(req, res, next).createOne(),
);

routes.get(
  '/cars/:id',
  (req, res, next) => new CarController(req, res, next).findOne(),
);

routes.get(
  '/cars',
  (req, res, next) => new CarController(req, res, next).find(),
);

routes.put(
  '/cars/:id',
  (req, res, next) => new CarController(req, res, next).updateOne(),
);

export default routes;