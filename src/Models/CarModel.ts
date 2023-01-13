import { models, Schema, Model, model } from 'mongoose';
import ICar, { ICarODM } from '../Interfaces/ICar';

export default class CarModel implements ICarODM {
  private schema: Schema;
  private _model: Model<ICar>;

  constructor() {
    this.schema = new Schema<ICar>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: false },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    });
    this._model = models.Car || model('Car', this.schema);
  }

  public async register(car: ICar): Promise<ICar> {
    return this._model.create({ ...car });
  }

  public async read(): Promise<ICar[]> {
    return this._model.find();
  }

  public async readById(id: string): Promise<ICar | null> {
    return this._model.findById(id);
  }
}
