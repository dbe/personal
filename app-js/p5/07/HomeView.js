import HashMapRenderer from './HashMapRenderer';

class HomeView {
  constructor(game, width, height) {
    this.game = game;
    this.width = width;
    this.height = height;
  }

  draw() {
    this.drawStats();
    this.drawOutpost();
  }

  drawStats() {
    HashMapRenderer.draw("Outpost", this.game.outpost, 20, 20);
  }

  drawOutpost() {
    fill(255);
    ellipse(this.width / 2, this.height / 2, this.game.outpost.shields, this.game.outpost.shields);
  }

}

export default HomeView;
