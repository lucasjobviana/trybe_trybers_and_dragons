import Fighter from '../Fighter';
import Battle from './Battle';

class PVP extends Battle {
  override fight(): number {
    let turn = true;

    while (this._enemy.lifePoints > 0 && this._player.lifePoints > 0) { 
      if (turn) {
        this._player.attack(this._enemy);
      } else {
        this._enemy.attack(this._player);
      }
      turn = !turn;
    }
    return super.fight();
  } 

  constructor(private _player:Fighter, private _enemy:Fighter) {
    super(_player);
    this._enemy = _enemy;
  }
}

export default PVP;