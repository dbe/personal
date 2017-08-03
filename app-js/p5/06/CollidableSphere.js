const CollidableSphere = (superclass) => {
  return class extends superclass {
    isCollision(collidable) {
      return this.p.dist(collidable.p) < Math.min(this.radius, collidable.radius);
    }
  }
}

export default CollidableSphere;
