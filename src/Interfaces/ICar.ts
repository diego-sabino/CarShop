export default interface ICar {
  id?: string;
  model: string;
  year: number;
  color: string;
  status?: boolean;
  buyValue: number;
  doorsQty: number;
  seatsQty: number;
}

export interface ICarODM {
  register(car: ICar): Promise<ICar>
}