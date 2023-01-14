import { invalidId, notFound } from '../utils/VehicleErrors';
import Motorcycle from '../Domains/Motorcycle';
import MotorcycleODM from '../Models/MotorcycleModel';
import IMotorcycle from '../Interfaces/IMotorcycle';

const validMongoId = /^[a-f\d]{24}$/i;

class MotorcycleService {
  motorcycleODM: MotorcycleODM;

  constructor() {
    this.motorcycleODM = new MotorcycleODM();
  }

  private createMotorcycleDomain(motorcycle: IMotorcycle | null): Motorcycle | null {
    if (motorcycle) return new Motorcycle(motorcycle);
    return null;
  }

  public async create(motorcycle: IMotorcycle) {
    return this.createMotorcycleDomain((motorcycle.status)
      ? await this.motorcycleODM.create(motorcycle)
      : await this.motorcycleODM.create({ ...motorcycle, status: false }));
  }

  public async findAll() {
    const motorcycleList = await this.motorcycleODM.findAll();
    return motorcycleList?.map((motorcycle) => this.createMotorcycleDomain(motorcycle));
  }

  public async findById(id: string) {
    if (!validMongoId.test(id)) return invalidId;

    const motorcycleById = await this.motorcycleODM.findById(id);
    if (!motorcycleById) return notFound('Motorcycle');

    return { status: 200, message: this.createMotorcycleDomain(motorcycleById) };
  }

  public async update(id: string, motorcycle: IMotorcycle) {
    if (!validMongoId.test(id)) return invalidId;

    const motorcycleById = await this.motorcycleODM.findById(id);
    if (!motorcycleById) return notFound('Motorcycle');

    await this.motorcycleODM.update(id, motorcycle);
    const updatedMotorcycle = { id, ...motorcycle };

    return { status: 200, message: updatedMotorcycle };
  }

  public async delete(id: string) {
    if (!validMongoId.test(id)) return invalidId;
    
    const motorcycleById = await this.motorcycleODM.findById(id);
    if (!motorcycleById) return notFound('Motorcycle');

    await this.motorcycleODM.delete(id);

    return { status: 204, message: undefined };
  }
}

export default MotorcycleService;