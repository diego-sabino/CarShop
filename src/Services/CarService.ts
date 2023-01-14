import Car from '../Domains/Car';
import CarODM from '../Models/CarModel';
import ICar from '../Interfaces/ICar';

class CarService {
  carODM: CarODM;

  constructor() {
    this.carODM = new CarODM();
  }

  private createCarDomain(car: ICar | null): Car | null {
    if (car) return new Car(car);
    return null;
  }

  public async create(car: ICar) {
    if (car.status) {
      return this.createCarDomain(await this.carODM.create(car));
    }
    return this.createCarDomain(await this.carODM.create({ ...car, status: false }));
  }

  public async findAll() {
    const carList = await this.carODM.findAll();
    return carList?.map((car) => this.createCarDomain(car));
  }

  public async findById(id: string) {
    const validMongoId = /^[a-f\d]{24}$/i;
    if (!validMongoId.test(id)) return false;

    const carById = await this.carODM.findById(id);
    if (!carById) return null;

    return this.createCarDomain(carById);
  }

  public async update(id: string, car: ICar) {
    const validMongoId = /^[a-f\d]{24}$/i;
    if (!validMongoId.test(id)) return false;

    const carById = await this.carODM.findById(id);
    if (!carById) return null;

    await this.carODM.update(id, car);
    
    return { id, ...car };
  }
}

export default CarService;