import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  private _energyType: EnergyType;
  private static _instancesCount = 0;

  static override createdArchetypeInstances() {
    return Necromancer._instancesCount;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  constructor(name:string) {
    super(name);
    [this._energyType] = ['mana'];
    Necromancer._instancesCount += 1;
  }
}

export default Necromancer;