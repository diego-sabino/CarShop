import IVehicle from '../Interfaces/IVehicle';

export default abstract class Vehicle {
  protected id?: string;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status?: boolean;
  protected buyValue: number;

  constructor({
    id,
    model,
    year,
    color,
    status,
    buyValue,
  } : IVehicle) {
    this.id = id;
    this.model = model;
    this.year = year;
    this.color = color;
    this.status = status;
    this.buyValue = buyValue;
  }

  public getId(): string | undefined {
    return this.id;
  }

  public getModel(): string {
    return this.model;
  }

  public getYear(): number {
    return this.year;
  }

  public getColor(): string {
    return this.color;
  }

  public getStatus(): boolean | undefined {
    return this.status;
  }

  public getBuyValue(): number {
    return this.buyValue;
  }

  public setId(id: string): void {
    this.id = id;
  }

  public setModel(model: string): void {
    this.model = model;
  }
  
  public setYear(year: number): void {
    this.year = year;
  } 

  public setColor(color: string): void {
    this.color = color;
  }

  public setStatus(status: boolean): void {
    this.status = status;
  }

  public setBuyValue(buyValue: number): void {
    this.buyValue = buyValue;
  }
}