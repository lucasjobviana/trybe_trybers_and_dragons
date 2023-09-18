import Race from './Race';

class Dwarf extends Race {
  private static _instancesCount = 0;

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static override createdRacesInstances():number {
    return Dwarf._instancesCount;
  }

  constructor(
    name:string, 
    dexterity:number, 
    private _maxLifePoints:number = 80,
  ) {
    super(name, dexterity);
    this._maxLifePoints = _maxLifePoints;
    Dwarf._instancesCount += 1;
  }
}

export default Dwarf;