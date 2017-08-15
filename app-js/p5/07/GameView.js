import HomeView from './HomeView';
import Menu from './Menu';

const VIEW_RENDERERS = {
  'Home': HomeView,
  'Inventory': HomeView,
  'Craft': HomeView
}

class GameView {
  constructor(game) {
    this.game = game;
    this.menu = new Menu([
      'Home',
      'Inventory',
      'Craft'
    ], this.selectView.bind(this));

    this.selectView('Home');
  }

  draw() {
    this.menu.draw(this.currentView);
    translate(this.menu.width, 0);

    this.viewRenderer.draw();
  }

  //TODO: This isn't the best idea to be storing views as strings
  selectView(view) {
    this.currentView = view;
    this.viewRenderer = new VIEW_RENDERERS[this.currentView](this.game, width - this.menu.width, height);
  }

  onClick() {
    this.menu.onClick();
  }
}

export default GameView;
