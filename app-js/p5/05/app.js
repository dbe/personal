import Guy from './Guy';
import Mob from './Mob';
import Zergling from './Zergling';

var guy;
var mobs = [];

window.setup = function() {
  createCanvas(windowWidth, windowHeight);
  ellipseMode(RADIUS);

  guy = new Guy();

  for(var i = 0; i < 30; i++) {
    mobs.push(new Zergling());
  }

  for(var i = 0; i < 60; i++) {
    mobs.push(new Mob());
  }
}

window.draw = function() {
  //TODO: Make this game over logic better
  if(isGameOver()) {
    background('red');
  } else  {
    clear();
    guy.move();
    guy.draw();

    mobs.forEach(function(mob) {
      mob.move(guy);
      mob.draw();
    });
  }
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

function isGameOver() {
  return mobs.some(function(mob) {
    return mob.isCollision(guy.p);
  });
}
