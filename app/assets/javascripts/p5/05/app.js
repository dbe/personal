'use strict';

var _Mob = require('./Mob');

var _Mob2 = _interopRequireDefault(_Mob);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var guy;
var mobs = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  ellipseMode(RADIUS);

  guy = new Guy();

  for (var i = 0; i < 100; i++) {
    mobs.push(new _Mob2.default());
  }
}

function draw() {
  clear();
  guy.move();
  guy.draw();

  mobs.forEach(function (mob) {
    mob.move(guy);
    mob.draw();
  });
}

function mouseClicked() {
  var newMobs = [];

  mobs.forEach(function (mob, i) {
    if (!mob.isCollision(createVector(mouseX, mouseY))) {
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

  this.move = function () {
    var desiredVelocity = createVector(0, 0);

    if (keyIsDown(65)) {
      desiredVelocity.x--;
    }
    if (keyIsDown(68)) {
      desiredVelocity.x++;
    }
    if (keyIsDown(87)) {
      desiredVelocity.y--;
    }
    if (keyIsDown(83)) {
      desiredVelocity.y++;
    }

    this.p.add(desiredVelocity.setMag(this.speed));
  };

  this.draw = function () {
    ellipse(this.p.x, this.p.y, 20, 20);
    line(this.p.x, this.p.y, mouseX, mouseY);
  };
}