import Race from './Race';

class Halfling extends Race {
  private static _instancesCount = 0;

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static override createdRacesInstances():number {
    return Halfling._instancesCount;
  }

  constructor(
    name:string, 
    dexterity:number, 
    private _maxLifePoints:number = 60,
  ) {
    super(name, dexterity);
    this._maxLifePoints = _maxLifePoints;
    Halfling._instancesCount += 1;
  }
}

export default Halfling;