import { EnergyType } from '../Energy';

abstract class Archetype {
  private readonly _special:number;
  private readonly _cost:number;

  static createdArchetypeInstances():number {
    throw new Error('Not implemented');
  }

  public get name():string {
    return this._name;
  }

  public get special():number {
    return this._special;
  }

  public get cost():number {
    return this._cost;
  }

  abstract get energyType():EnergyType;

  constructor(
    private _name:string, 
  ) {
    [this._name, this._special, this._cost] = [_name, 0, 0];
  }
}

export default Archetype;