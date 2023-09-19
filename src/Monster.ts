import { SimpleFighter } from './Fighter';

class Monster implements SimpleFighter {
  protected _lifePoints: number;
  private _strength: number;

  public get lifePoints():number {
    return this._lifePoints;
  }

  public get strength():number {
    return this._strength;
  }

  attack(fighter: SimpleFighter): void {
    fighter.receiveDamage(this._strength);
  }
 
  receiveDamage(attackPoints: number): number {
    const damage = this._lifePoints - attackPoints;

    if (damage <= 0) {
      this._lifePoints = -1; 
    } else {
      this._lifePoints -= damage;
    }

    return this._lifePoints;
  }

  constructor() {
    this._lifePoints = 3;
    this._strength = 4;
  }
}

export default Monster;