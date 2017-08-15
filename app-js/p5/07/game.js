import Component from './Component';
import Menu from './Menu';

class Game {
  constructor() {
    this.outpost = {
      shields: 100,
      maxShields: 200,
      recharge: 1,
      thorns: 1
    };

    this.mine = {
      toughness: 10,
      quality: 3
    };

    this.drone = {
      power: 5
    };

    this.inventory = [];
  }

  update() {
    this.updateOutpost();
    this.mineGoods();
  }

  updateOutpost() {
    this.outpost.shields = Math.min(this.outpost.maxShields, this.outpost.shields + this.outpost.recharge);
  }

  mineGoods() {
    if(random(1) < (this.drone.power / this.mine.toughness) * .05) {
      let item = Component.roll(this.mine.quality);
      console.log(`Mined: ${item.toString()}`);
    }
  }
}

export default Game;
