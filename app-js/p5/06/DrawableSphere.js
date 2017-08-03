const DrawableSphere = (superclass) => {
  return class extends superclass {
    draw() {
      ellipse(this.p.x, this.p.y, this.radius, this.radius);
    }
  }
}

export default DrawableSphere;
