import Buff from './Buff';
import CollidableSphere from './CollidableSphere';
import DrawableSphere from './DrawableSphere';

class BuffShrine extends CollidableSphere(DrawableSphere(Object)) {
  constructor(p, buff) {
    super(...arguments);

    this.p = p;
    this.buff = buff;
    this.radius = 30;
  }
}

export default BuffShrine;
