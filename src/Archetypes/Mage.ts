import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  private _energyType: EnergyType;
  private static _instancesCount = 0;

  static override createdArchetypeInstances() {
    return Mage._instancesCount;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  constructor(name:string) {
    super(name);
    [this._energyType] = ['mana'];
    Mage._instancesCount += 1;
  }
}

export default Mage;