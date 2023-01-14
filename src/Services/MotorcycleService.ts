import Motorcycle from '../Domains/Motorcycle';
import MotorcycleODM from '../Models/MotorcycleModel';
import IMotorcycle from '../Interfaces/IMotorcycle';

class MotorcycleService {
  motorcycleODM: MotorcycleODM;

  constructor() {
    this.motorcycleODM = new MotorcycleODM();
  }
  private createMotorcycleDomain(motorcycle: IMotorcycle | null): Motorcycle | null {
    if (motorcycle) return new Motorcycle(motorcycle);
    return null;
  }

  public async register(motorcycle: IMotorcycle) {
    if (motorcycle.status) {
      return this.createMotorcycleDomain(await this.motorcycleODM.create(motorcycle));
    }
    return this.createMotorcycleDomain(await this.motorcycleODM
      .create({ ...motorcycle, status: false }));
  }

  public async read() {
    const motorcycleList = await this.motorcycleODM.findAll();
    return motorcycleList?.map((motorcycle) => this.createMotorcycleDomain(motorcycle));
  }

  public async readById(id: string) {
    const validMongoId = /^[a-f\d]{24}$/i;
    if (!validMongoId.test(id)) return false;

    const motorcycleById = await this.motorcycleODM.findById(id);
    if (!motorcycleById) return null;

    return this.createMotorcycleDomain(motorcycleById);
  }

  public async update(id: string, motorcycle: IMotorcycle) {
    const validMongoId = /^[a-f\d]{24}$/i;
    if (!validMongoId.test(id)) return false;

    const motorcycleById = await this.motorcycleODM.findById(id);
    if (!motorcycleById) return null;

    await this.motorcycleODM.update(id, motorcycle);
    
    return { id, ...motorcycle };
  }
}

export default MotorcycleService;