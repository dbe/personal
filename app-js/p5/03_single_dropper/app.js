new p5(p => {
  var WIDTH = 1200;
  var HEIGHT = 600;
  var GRAVITY = 2;

  var pos, v;

  p.setup = function() {
    p.createCanvas(WIDTH, HEIGHT);
    pos = {x: p.random(WIDTH), y: p.random(HEIGHT)};
    v = {x: p.random(10), y: p.random(10) };
  }

  p.draw = function() {
    checkBounds();
    applyFriction();

    p.ellipse(pos.x, pos.y, 80, 80);

    applyGravity();
    applyVelocity();
  }

  function checkBounds() {
    if(pos.y >= HEIGHT - 40) {
      pos.y = HEIGHT - 40;
      v.y *= -0.9;
    }

    if(pos.x <= 40) {
      pos.x = 40;
      v.x *= -1;
    } else if(pos.x >= WIDTH - 40) {
      pos.x = WIDTH - 40;
      v.x *= -1;
    }
  }

  function applyFriction() {
    if(pos.y == HEIGHT - 40) {
      v.x *= 0.97;
    }
  }

  function applyVelocity() {
    pos.y += v.y;
    pos.x += v.x;
  }

  function applyGravity() {
    v.y += GRAVITY;
  }
});
