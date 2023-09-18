abstract class Race {
  static createdRacesInstances():number {
    throw new Error('Not implemented');
  }

  abstract get maxLifePoints():number;

  public get name():string {
    return this._name;
  }

  public get dexterity():number {
    return this._dexterity;
  }

  constructor(readonly _name:string, readonly _dexterity:number) {
    [this._name, this._dexterity] = [_name, _dexterity];
  }
}

export default Race;