import Sinon from 'sinon';
import { expect } from 'chai';
import { Model } from 'mongoose';
import { motorWithId, motorsWithId } from '../../mocks/MotorcycleMocks';
import MotorcycleService from '../../../src/Services/MotorcycleService';

describe('Motorcycle services', function () {
  const motorcycleService = new MotorcycleService();
  
  after(function () {
    Sinon.restore();
  });

  it('Find By Id', async function () {
    Sinon.stub(Model, 'findById').resolves(motorWithId);
    expect(await motorcycleService.findById(motorWithId.id)).to.be.deep.equal(motorWithId);
  });

  it('Find All', async function () {
    Sinon.stub(Model, 'find').resolves(motorsWithId);
    expect(await motorcycleService.findAll()).to.be.deep.equal(motorsWithId);
  });
});