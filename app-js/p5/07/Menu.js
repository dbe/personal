import MenuItem from './MenuItem';

class Menu {
  constructor(items) {
    this.menuItems = items.map((item, i) => new MenuItem(item, i));
  }

  draw() {
    line(300, 0, 300, windowHeight);
    this.menuItems.forEach(item => item.draw());
  }

  onClick() {
    this.menuItems.forEach(item => item.onClick());
  }
}

export default Menu;
