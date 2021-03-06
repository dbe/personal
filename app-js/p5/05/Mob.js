class Mob {
  constructor(speed = 1, radius = 50) {
    this.p = createVector(200 + random(displayWidth - 200), 200 + random(displayHeight - 200));
    this.speed = speed;
    this.radius = radius;
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
