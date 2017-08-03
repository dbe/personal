import CollidableSphere from './CollidableSphere';
import DrawableSphere from './DrawableSphere';

class Guy extends DrawableSphere(CollidableSphere(Object)) {
  constructor(p, speed = 5, radius = 10, range = 100) {
    super(...arguments);

    this.p = p;
    this.speed = speed;
    this.radius = radius;
    this.range = range;
  }

  move() {
    var desiredVelocity = createVector(0, 0);

    if(keyIsDown(65)) {
      desiredVelocity.x--;
    }
    if(keyIsDown(68)) {
      desiredVelocity.x++;
    }
    if(keyIsDown(87)) {
      desiredVelocity.y--;
    }
    if(keyIsDown(83)) {
      desiredVelocity.y++;
    }

    this.p.add(desiredVelocity.setMag(this.speed));
  }

  draw() {
    // line(this.p.x, this.p.y, mouseX, mouseY);
    let mouse = createVector(mouseX, mouseY);
    let range = mouse.sub(this.p).setMag(this.range);

    line(this.p.x, this.p.y, this.p.x + range.x, this.p.y + range.y);
    super.draw();
  }

}

export default Guy;
