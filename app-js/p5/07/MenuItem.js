class MenuItem {
  constructor(text, i, width) {
    this.text = text;

    this.left = 0;
    this.right = width;
    this.top = i * 100;
    this.bottom = this.top + 100;
  }

  draw(isSelected) {
    fill(0);
    line(0, this.bottom, this.right, this.bottom);

    if(this.isHovered()) {
      textStyle(BOLD);
    }

    textSize(15);
    text(this.text, 100, this.top + 50);
    textStyle(NORMAL);

    if(isSelected) {
      fill(0, 0, 0, 50);

      rectMode(CORNERS);
      rect(this.left, this.top, this.right, this.bottom);
    }
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
