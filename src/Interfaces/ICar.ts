import IVehicle from './IVehicle';

export default interface ICar extends IVehicle {
  doorsQty: number,
  seatsQty: number,
}

export interface ICarODM {
  register(car: ICar): Promise<ICar>
  read(): Promise<ICar[] | null>
  readById(id: string): Promise<ICar | null>
  update(id: string, car: ICar): Promise<ICar | null>
}