import Car from '../Domains/Car';
import ICar, { ICarODM } from '../Interfaces/ICar';

class CarService {
  constructor(private carODM: ICarODM) {}

  private createCarDomain(car: ICar | null): Car | null {
    if (car) {
      return new Car(car);
    }
    return null;
  }

  public async register(car: ICar) {
    if (car.status) {
      return this.createCarDomain(await this.carODM.register(car));
    }
    return this.createCarDomain(await this.carODM.register({ ...car, status: false }));
  }
}

export default CarService;