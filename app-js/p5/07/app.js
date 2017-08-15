import Game from './Game';
import GameView from './GameView';

const game = new Game();
const gameView = new GameView(game);

window.setup = function() {
  createCanvas(windowWidth, windowHeight);
}

window.draw = function() {
  clear();

  game.update();
  gameView.draw();
}

window.mouseClicked = function() {
  gameView.onClick();
}
