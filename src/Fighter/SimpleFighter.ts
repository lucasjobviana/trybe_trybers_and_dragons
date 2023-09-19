interface SimpleFighter{
  lifePoints: number,
  strength: number,

  attack(fighter: SimpleFighter):void,
  receiveDamage(attackPoints:number):number;
}

export default SimpleFighter;
