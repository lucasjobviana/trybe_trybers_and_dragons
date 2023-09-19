import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

class PVE extends Battle {
  override fight(): number {
    let turn = true; let count = 0;

    this._oponents.forEach((oponent, index) => {
     
      while (oponent.lifePoints > 0 && this._player.lifePoints > 0 ) { 

        if (turn) {
          this._player.attack(oponent);
        } else {
          oponent.attack(this._player);
        }
       
        turn = !turn; count += 1; 
      }
    });

    return super.fight();
  } 

  constructor(private _player:Fighter, private _oponents: SimpleFighter[]) {
    super(_player);
    this._oponents = _oponents;
  }
}

export default PVE;