import MenuItem from './MenuItem';

class Menu {
  constructor(items, selectView) {
    this.width = 300;
    this.menuItems = items.map((item, i) => new MenuItem(item, i, this.width));
    this.selectView = selectView;
  }

  draw() {
    line(this.width, 0, this.width, windowHeight);
    this.menuItems.forEach(item => item.draw());
  }

  onClick() {
    this.menuItems.forEach(item => item.onClick(this.selectView));
  }
}

export default Menu;
