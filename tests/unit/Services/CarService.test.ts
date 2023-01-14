import Sinon from 'sinon';
import { expect } from 'chai';
import { Model } from 'mongoose';
import { carWithId, carsWithId } from '../../mocks/CarMocks';
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
});