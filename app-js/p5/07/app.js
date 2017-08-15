import Game from './Game';

const game = new Game();

window.setup = function() {
  createCanvas(windowWidth, windowHeight);
}

window.draw = function() {
  clear();
  game.draw();
}

window.mouseClicked = function() {
  game.onClick();
}
