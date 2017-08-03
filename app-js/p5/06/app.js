import Buff from './Buff';
import BuffShrine from './BuffShrine';
import Guy from './Guy';

var guy;
var shrines = [];

window.setup = function() {
  createCanvas(windowWidth, windowHeight);
  ellipseMode(RADIUS);

  guy = new Guy(createVector(100, 100));
  initShrines();
}

window.mouseClicked = function() {
  guy.applyBuff(new Buff('speed', 20, 50));
}

window.draw = function() {
  shrines = shrines.filter(shrine => {
    if(guy.isCollision(shrine)) {
      console.log("Hit shrine");
    }

    shrine.draw();
    return true;
  });

  guy.update();
  guy.draw();
}

function initShrines(count=10) {
  for(let i = 0; i < count; i++) {
    shrines.push(new BuffShrine(createVector(random(windowWidth), random(windowHeight))));
  }
}
