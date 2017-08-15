import Game from './Game';
import GameView from './GameView';

let game;
let gameView;

window.setup = function() {
  createCanvas(windowWidth, windowHeight);
  game = new Game();
  gameView = new GameView(game);
}

window.draw = function() {
  clear();

  game.update();
  gameView.draw();
}

window.mouseClicked = function() {
  gameView.onClick();
}
