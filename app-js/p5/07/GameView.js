import Menu from './Menu';

class GameView {
  constructor(game) {
    this.game = game;

    this.currentView = 'Home';
    this.menu = new Menu([
      'Home',
      'Inventory',
      'Craft'
    ], this.selectView.bind(this));
  }

  draw() {
    this.menu.draw(this.currentView);
    translate(this.menu.width, 0);

    this.drawHeader();
    this.drawOutpost();
  }

  //TODO: Most likely factor this out
  drawHeader() {
    fill(0);
    textSize(30);
    text(this.currentView, (width - this.menu.width) / 2, 30);
  }

  drawOutpost() {
    fill(255);
    ellipse(300, 300, this.game.outpost.shields, this.game.outpost.shields);
  }

  //TODO: This isn't the best idea to be storing views as strings
  selectView(view) {
    this.currentView = view;
  }

  onClick() {
    this.menu.onClick();
  }
}

export default GameView;
