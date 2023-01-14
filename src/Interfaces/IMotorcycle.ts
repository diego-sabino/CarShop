import IVehicle from './IVehicle';

export default interface IMotorcycle extends IVehicle {
  category: 'Street' | 'Custom' | 'Trail';
  engineCapacity: number;
}

export interface IMotorODM {
  register(car: IMotorcycle): Promise<IMotorcycle>
  read(): Promise<IMotorcycle[] | null>
  readById(id: string): Promise<IMotorcycle | null>
  update(id: string, car: IMotorcycle): Promise<IMotorcycle | null>
}