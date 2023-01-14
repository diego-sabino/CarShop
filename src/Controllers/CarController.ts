import { NextFunction, Request, Response } from 'express';
import CarService from '../Services/CarService';

export default class CarController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: CarService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new CarService();
  }
  
  public async find() {
    try {
      const cars = await this.service.read();
      return this.res.status(200).json(cars);
    } catch (error) {
      this.next(error);
    }
  }

  public async findOne() {
    try {
      const { id } = this.req.params;
      const carById = await this.service.readById(id);

      if (carById === false) return this.res.status(422).json({ message: 'Invalid mongo id' });
      if (carById === null) return this.res.status(404).json({ message: 'Car not found' });

      return this.res.status(200).json(carById);
    } catch (error) {
      this.next(error);
    }
  }

  public async createOne() {
    try {
      const newCar = await this.service.register(this.req.body);
      return this.res.status(201).json(newCar);
    } catch (error) {
      this.next(error);
    }
  }

  public async updateOne() {
    try {
      const { id } = this.req.params;
      const updatedCar = await this.service.update(id, this.req.body);

      if (updatedCar === null) return this.res.status(404).json({ message: 'Car not found' });
      if (updatedCar === false) return this.res.status(422).json({ message: 'Invalid mongo id' });

      return this.res.status(200).json(updatedCar);
    } catch (error) {
      this.next(error);
    }
  }
}
