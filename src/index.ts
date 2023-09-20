import Battle, { PVE, PVP } from './Battle';
import Character from './Character';
import Dragon from './Dragon';
import Monster from './Monster';
import randomIntBetween from './tools/randomIntBetween';

const player1 = new Character('Adam');
const player2 = new Character('Axel');
const player3 = new Character('Blaze');
const monster1 = new Monster();
const monster2 = new Dragon();
const pvp = new PVP(player2, player3);
const pve = new PVE(player1, [monster1, monster2]);
const runBattles = (battles:Battle[]) => {
  battles.forEach((battle) => battle.fight());
  return 1;
};

for (let i = 0; i < randomIntBetween(1, 4); i += 1) { player1.levelUp(); }

export {
  player1,
  player2,
  player3,
  monster1,
  monster2,
  pvp,
  pve,
  runBattles,
};
