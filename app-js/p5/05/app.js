import Mob from './Mob';

var guy;
var mobs = [];

window.setup = function() {
  createCanvas(windowWidth, windowHeight);
  ellipseMode(RADIUS);

  guy = new Guy();

  for(var i = 0; i < 100; i++) {
    mobs.push(new Mob());
  }
}

window.draw = function() {
  clear();
  guy.move();
  guy.draw();

  mobs.forEach(function(mob) {
    mob.move(guy);
    mob.draw();
  });
}

window.mouseClicked = function() {
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
