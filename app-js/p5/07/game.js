import Menu from './Menu';

class Game {
  constructor() {
    this.currentView = 'Home';

    this.menu = new Menu([
      'Home',
      'Inventory',
      'Craft'
    ], this.selectView.bind(this));
  }

  draw() {
    this.menu.draw();
    translate(this.menu.width, 0);
    
    this.drawHeader();
  }

  //TODO: Most likely factor this out
  drawHeader() {
    let oldSize = textSize();
    textSize(30);

    text(this.currentView, (width - this.menu.width) / 2, 30);

    textSize(oldSize);
  }

  onClick() {
    this.menu.onClick();
  }

  //TODO: This isn't the best idea to be storing views as strings
  selectView(view) {
    this.currentView = view;
  }
}

export default Game;
