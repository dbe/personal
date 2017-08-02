import Mob from './Mob';

class Zergling extends Mob {
  constructor() {
    super(3, 20);
  }

  draw() {
    rect(this.p.x, this.p.y, 10, 10);
  }
}

export default Zergling;
