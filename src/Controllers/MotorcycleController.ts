import { NextFunction, Request, Response } from 'express';
import MotorcycleService from '../Services/MotorcycleService';

export default class MotorcycleController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: MotorcycleService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new MotorcycleService();
  }
  
  public async find() {
    try {
      const Motorcycles = await this.service.findAll();
      return this.res.status(200).json(Motorcycles);
    } catch (error) {
      this.next(error);
    }
  }

  public async findOne() {
    try {
      const { id } = this.req.params;
      const { status, message } = await this.service.findById(id);

      return this.res.status(status).json((status === 200) ? message : { message });
    } catch (error) {
      this.next(error);
    }
  }

  public async createOne() {
    try {
      const newMotorcycle = await this.service.create(this.req.body);
      return this.res.status(201).json(newMotorcycle);
    } catch (error) {
      this.next(error);
    }
  }

  public async updateOne() {
    try {
      const { id } = this.req.params;
      const { status, message } = await this.service.update(id, this.req.body);

      return this.res.status(status).json((status === 200) ? message : { message });
    } catch (error) {
      this.next(error);
    }
  }

  public async deleteOne() {
    try {
      const { id } = this.req.params;
      const { status, message } = await this.service.delete(id);

      return this.res.status(status).json({ message });
    } catch (error) {
      this.next(error);
    }
  }
}
