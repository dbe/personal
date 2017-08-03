import Guy from './Guy';

var guy;

window.setup = function() {
  createCanvas(windowWidth, windowHeight);
  ellipseMode(RADIUS);

  guy = new Guy(createVector(100, 100));
}

window.draw = function() {
  guy.draw();
}
