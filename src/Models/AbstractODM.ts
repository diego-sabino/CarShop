import { model, Model, models, Schema, UpdateQuery } from 'mongoose';

export default abstract class AbstractODM<T> {
  protected schema: Schema;
  protected model: Model<T>;
  protected modelName: string;

  constructor(schema: Schema, modelName: string) {
    this.schema = schema;
    this.modelName = modelName;
    this.model = models[this.modelName] || model(this.modelName, this.schema);
  }

  public async create(vehicle: T): Promise<T> {
    return this.model.create({ ...vehicle });
  }
    
  public async findAll() {
    return this.model.find({});
  }
    
  public async findById(id: string) {
    return this.model.findById(id);
  }
    
  public async update(id: string, vehicle: Partial<T>) {
    return this.model.findByIdAndUpdate(id, vehicle as UpdateQuery<T>, { new: true });
  }
  public async delete(id: string) {
    return this.model.findByIdAndDelete(id);
  }
}