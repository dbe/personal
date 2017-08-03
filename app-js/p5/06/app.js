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

window.draw = function() {
  clear();

  shrines = shrines.filter(shrine => {
    if(guy.isCollision(shrine)) {
      guy.applyBuff(shrine.buff);
      return false;
    }

    shrine.draw();
    return true;
  });

  guy.update();
  guy.draw();
}

function initShrines(count=10) {
  for(let i = 0; i < count; i++) {
    let speedBuff = new Buff('speed', 5, 100);
    let p = createVector(random(windowWidth), random(windowHeight));

    shrines.push(new BuffShrine(p, speedBuff));
  }
}
