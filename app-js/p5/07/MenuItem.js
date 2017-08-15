class MenuItem {
  constructor(text, i, width) {
    this.text = text;

    this.left = 0;
    this.right = width;
    this.top = i * 100;
    this.bottom = this.top + 100;
  }

  draw() {
    line(0, this.bottom, 300, this.bottom);

    if(this.isHovered()) {
      textStyle(BOLD);
    }

    text(this.text, 100, this.top + 50);
    textStyle(NORMAL);
  }

  isHovered() {
    return mouseX >= this.left &&
       mouseX <= this.right &&
       mouseY >= this.top &&
       mouseY <= this.bottom;
  }

  onClick(selectView) {
    if(this.isHovered()) {
      selectView(this.text);
    }
  }
}

export default MenuItem;
