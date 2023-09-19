import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter, { SimpleFighter } from './Fighter';
import Race, { Elf } from './Races'; 
import randomIntBetween from './tools/randomIntBetween';

class Character implements Fighter {
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _energy: Energy ;
  private _maxLifePoints: number;
  private _race:Race; 
  private _archetype:Archetype; 
  private _dexterity:number;

  get race():Race {
    return this._race;
  }

  get archetype():Archetype {
    return this._archetype;
  }

  get dexterity():number {
    return this._dexterity;
  }

  get strength():number {
    return this._strength;
  }

  get defense():number {
    return this._defense;
  }

  get energy():Energy {
    return { ...this._energy };
  }

  get lifePoints():number {
    return this._lifePoints;
  }

  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }

  special(enemy: Fighter): void {
    enemy.receiveDamage(this._strength + 4);
  }

  secureLifePointsUpdate(increment:number):number {
    if (this._race.maxLifePoints > (this._maxLifePoints + increment)) { 
      return this._maxLifePoints + increment; 
    }
    return this._race.maxLifePoints;
  }

  levelUp(): void {
    this._maxLifePoints = this.secureLifePointsUpdate(3);
    this._strength += randomIntBetween(1, 10);
    this._defense += randomIntBetween(1, 10);
    this._dexterity += randomIntBetween(1, 10);
    this._lifePoints = this._maxLifePoints;
    this._energy.amount = 10;
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this._defense;
    if (this.lifePoints - damage <= 0) {
      this._lifePoints = -1;
    } else {
      this._lifePoints -= damage;
    }
    
    return this.lifePoints;
  }

  constructor(private _name:string) {
    this._name = _name;
    this._strength = randomIntBetween(1, 10);
    this._defense = randomIntBetween(1, 10);
    this._dexterity = randomIntBetween(1, 10);
    this._race = new Elf(_name, this._dexterity, 0);
    this._archetype = new Mage(_name);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._energy = { type_: this._archetype.energyType,
      amount: 
      randomIntBetween(1, 10) };
  }
}

export default Character;