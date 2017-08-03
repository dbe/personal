const CollidableSphere = (superclass) => {
  return class extends superclass {
    isCollision(collidable) {
      return this.p.dist(collidable.p) < this.radius + collidable.radius;
    }
  }
}

export default CollidableSphere;
