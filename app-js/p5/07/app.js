import Menu from './Menu';

const menu = new Menu([
  'Home',
  'Inventory',
  'Craft'
]);

window.setup = function() {
  createCanvas(windowWidth, windowHeight);
}

window.draw = function() {
  clear();
  menu.draw();
}

window.mouseClicked = function() {
  menu.onClick();
}
