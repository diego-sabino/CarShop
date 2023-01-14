import { notFound, invalidId } from '../utils/VehicleErrors';
import Car from '../Domains/Car';
import CarODM from '../Models/CarModel';
import ICar from '../Interfaces/ICar';

const validMongoId = /^[a-f\d]{24}$/i;

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
    return this.createCarDomain((car.status)
      ? await this.carODM.create(car)
      : await this.carODM.create({ ...car, status: false }));
  }

  public async findAll() {
    const carList = await this.carODM.findAll();
    return carList?.map((car) => this.createCarDomain(car));
  }

  public async findById(id: string) {
    if (!validMongoId.test(id)) return invalidId;

    const carById = await this.carODM.findById(id);
    if (!carById) return notFound('Car');

    return { status: 200, message: this.createCarDomain(carById) };
  }

  public async update(id: string, car: ICar) {
    if (!validMongoId.test(id)) return invalidId;

    const carById = await this.carODM.findById(id);
    if (!carById) return notFound('Car');

    await this.carODM.update(id, car);
    const updatedCar = { id, ...car };

    return { status: 200, message: updatedCar };
  }

  public async delete(id: string) {
    if (!validMongoId.test(id)) return invalidId;
    
    const carById = await this.carODM.findById(id);
    if (!carById) return notFound('Car');

    await this.carODM.delete(id);

    return { status: 204, message: undefined };
  }
}

export default CarService;