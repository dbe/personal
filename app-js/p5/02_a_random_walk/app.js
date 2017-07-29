new p5(p => {
  var WIDTH = 1200;
  var HEIGHT = 600;

  var x, y;

  p.setup = function() {
    p.createCanvas(WIDTH, HEIGHT);
    x = p.random(WIDTH);
    y = p.random(HEIGHT);
  }

  p.draw = function() {
    p.ellipse(x, y, 80, 80);
    mutateXY()
  }

  function mutateXY() {
    x += p.random(-10, 10);
    y += p.random(-5, 5);
  }
})
