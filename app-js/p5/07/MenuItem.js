const WIDTH = 300;

class MenuItem {
  constructor(text, i) {
    this.text = text;

    this.left = 0;
    this.right = WIDTH;
    this.top = i * 100;
    this.bottom = this.top + 100;
  }

  draw() {
    line(0, this.bottom, 300, this.bottom);

    textStyle(NORMAL);

    if(this.isHovered()) {
      textStyle(BOLD);
    }

    text(this.text, 100, this.top + 50);
  }

  isHovered() {
    return mouseX >= this.left &&
       mouseX <= this.right &&
       mouseY >= this.top &&
       mouseY <= this.bottom;
  }

  onClick() {
    if(this.isHovered()) {
      alert("Clicked: " + this.text);
    }
  }
}

export default MenuItem;
