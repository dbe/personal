import Guy from './Guy';
import Buff from './Buff';

var guy;

window.setup = function() {
  createCanvas(windowWidth, windowHeight);
  ellipseMode(RADIUS);

  guy = new Guy(createVector(100, 100));
}

window.mouseClicked = function() {
  guy.applyBuff(new Buff('speed', 20, 50));
}

window.draw = function() {
  guy.update();
  guy.draw();
}
