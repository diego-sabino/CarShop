import Sinon from 'sinon';
import { expect } from 'chai';
import { Model } from 'mongoose';
import { carWithId, carsWithId, car } from '../../mocks/CarMocks';
import CarService from '../../../src/Services/CarService';

describe('Cars services', function () {
  const carService = new CarService();

  after(function () {
    Sinon.restore();
  });

  it('Find By Id', async function () {
    Sinon.stub(Model, 'findById').resolves(carWithId);
    expect(await carService.findById(carWithId.id)).to.be.deep.equal(carWithId);
  });

  it('Find All', async function () {
    Sinon.stub(Model, 'find').resolves(carsWithId);
    expect(await carService.findAll()).to.be.deep.equal(carsWithId);
  });
  
  it('Create', async function () {
    Sinon.stub(Model, 'create').resolves(carWithId);
    expect(await carService.create(car)).to.be.deep.equal(carWithId);
  });

  it('Update', async function () {
    Sinon.stub(Model, 'findByIdAndUpdate').resolves(car);
    expect(await carService.update(carWithId.id, car)).to.be.deep.equal(carWithId);
  });
});