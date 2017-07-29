var guy;
var mobs = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  ellipseMode(RADIUS);

  guy = new Guy();

  for(var i = 0; i < 100; i++) {
    mobs.push(new Mob());
  }
}

function draw() {
  clear();
  guy.move();
  guy.draw();

  mobs.forEach(function(mob) {
    mob.move(guy);
    mob.draw();
  });
}

function mouseClicked() {
  var newMobs = [];

  mobs.forEach(function(mob, i) {
    if(!mob.isCollision(createVector(mouseX, mouseY))) {
      newMobs.push(mob);
    }
  });

  mobs = newMobs;
}

function destroyMob(i) {
  mobs.splice(i, 1);
}

function Guy() {
  this.p = createVector(100, 580);
  this.speed = 5;

  this.move = function() {
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

  this.draw = function() {
    ellipse(this.p.x, this.p.y, 20, 20);
    line(this.p.x, this.p.y, mouseX, mouseY);
  }
}

function Mob() {
  this.p = createVector(random(displayWidth), random(displayHeight));
  this.speed = 1;
  this.radius = 50;

  this.move = function(target) {
    var desired = p5.Vector.sub(target.p, this.p);
    this.p.add(desired.setMag(this.speed));
  }

  this.draw = function() {
    ellipse(this.p.x, this.p.y, this.radius, this.radius);
  }

  this.isCollision = function(p) {
    console.log("Dist: ", this.p.dist(p))
    return this.p.dist(p) <= this.radius;
  }
}
