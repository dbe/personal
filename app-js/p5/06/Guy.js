import CollidableSphere from './CollidableSphere';
import DrawableSphere from './DrawableSphere';

class Guy {
  constructor(p, speed = 5, radius = 10) {
    this.p = p;
    this.speed = speed;
    this.radius = radius;
  }
}

export default DrawableSphere(CollidableSphere(Guy));
