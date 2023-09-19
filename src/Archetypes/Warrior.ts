import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  private _energyType: EnergyType;
  private static _instancesCount = 0;

  static override createdArchetypeInstances() {
    return Warrior._instancesCount;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  constructor(name:string) {
    super(name);
    [this._energyType] = ['stamina'];
    Warrior._instancesCount += 1;
  }
}

export default Warrior;