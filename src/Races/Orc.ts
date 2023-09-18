import Race from './Race';

class Orc extends Race {
  private static _instancesCount = 0;

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static override createdRacesInstances():number {
    return Orc._instancesCount;
  }

  constructor(
    name:string, 
    dexterity:number, 
    private _maxLifePoints:number = 74,
  ) {
    super(name, dexterity);
    this._maxLifePoints = _maxLifePoints;
    Orc._instancesCount += 1;
  }
}

export default Orc;