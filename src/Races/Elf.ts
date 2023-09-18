import Race from './Race';

class Elf extends Race {
  private static _instancesCount = 0;

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static override createdRacesInstances():number {
    return Elf._instancesCount;
  }

  constructor(
    name:string, 
    dexterity:number, 
    private _maxLifePoints:number = 99,
  ) {
    super(name, dexterity);
    this._maxLifePoints = _maxLifePoints;
    Elf._instancesCount += 1;
  }
}

export default Elf;