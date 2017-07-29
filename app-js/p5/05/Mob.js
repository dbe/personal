class Mob {
  constructor() {
    this.p = createVector(random(displayWidth), random(displayHeight));
    this.speed = 1;
    this.radius = 50;
  }

  move(target) {
    var desired = p5.Vector.sub(target.p, this.p);
    this.p.add(desired.setMag(this.speed));
  }

  draw() {
    ellipse(this.p.x, this.p.y, this.radius, this.radius);
  }

  isCollision(p) {
    return this.p.dist(p) <= this.radius;
  }
}

export default Mob;
