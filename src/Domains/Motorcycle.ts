import IMotorcycle from '../Interfaces/IMotorcycle';
import Vehicle from './Vehicle';

export default class Motorcycle extends Vehicle {
  private category: string;
  private engineCapacity: number;

  constructor({
    id,
    model,
    year,
    color,
    buyValue,
    status,
    category,
    engineCapacity,
  }: IMotorcycle) {
    super({ id, model, year, color, status, buyValue });
    this.category = category;
    this.engineCapacity = engineCapacity;
  }

  public getCategory(): string {
    return this.category;
  }

  public getEngineCapacity(): number {
    return this.engineCapacity;
  }

  public setCategory(category: string): void {
    this.category = category;
  }

  public setEngineCapacity(engineCapacity: number): void {
    this.engineCapacity = engineCapacity;
  }

  public toJSON(): IMotorcycle {
    return {
      id: this.getId(),
      model: this.getModel(),
      year: this.getYear(),
      color: this.getColor(),
      status: this.getStatus(),
      buyValue: this.getBuyValue(),
      category: this.getCategory(),
      engineCapacity: this.getEngineCapacity(),
    };
  }
}