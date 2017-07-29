new p5(p => {

  p.setup = function() {
    p.createCanvas(1200, 600);
  }

  p.draw = function() {
    p.ellipse(p.random(1200), p.random(600), 80, 80);
  }
});
