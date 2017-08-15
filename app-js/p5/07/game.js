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

    };

    this.drone = {

    };
  }

  update() {
    this.updateOutpost();
  }

  updateOutpost() {
    this.outpost.shields = Math.min(this.outpost.maxShields, this.outpost.shields + this.outpost.recharge);
  }
}

export default Game;
