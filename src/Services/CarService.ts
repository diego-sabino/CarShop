import Car from '../Domains/Car';
import ICar, { ICarODM } from '../Interfaces/ICar';

class CarService {
  constructor(private carODM: ICarODM) {}

  private createCarDomain(car: ICar | null): Car | null {
    if (car) return new Car(car);
    return null;
  }

  public async register(car: ICar) {
    if (car.status) {
      return this.createCarDomain(await this.carODM.register(car));
    }
    return this.createCarDomain(await this.carODM.register({ ...car, status: false }));
  }

  public async read() {
    const carList = await this.carODM.read();
    return carList?.map((car) => this.createCarDomain(car));
  }

  public async readById(id: string) {
    const validMongoId = /^[a-f\d]{24}$/i;
    if (!validMongoId.test(id)) return false;

    const carById = await this.carODM.readById(id);
    if (!carById) return null;
    
    return this.createCarDomain(carById);
  }
}

export default CarService;