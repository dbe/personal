class Guy {
  constructor() {
    this.p = createVector(100, 100);
    this.speed = 5;
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
    ellipse(this.p.x, this.p.y, 20, 20);
    line(this.p.x, this.p.y, mouseX, mouseY);
  }
}

export default Guy;
