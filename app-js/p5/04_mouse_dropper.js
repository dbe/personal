'use strict';

var WIDTH = 1200;
var HEIGHT = 600;
var GRAVITY = 2;

var droppers = [];

function setup() {
  createCanvas(WIDTH, HEIGHT);
}

function draw() {
  droppers.forEach(function(dropper) {
    dropper.draw();
  });
}

function mousePressed() {
  droppers.push(new Dropper());
}

function Dropper() {
  var that = this;

  that.p = {x: random(WIDTH), y: random(HEIGHT)};
  that.v = {x: random(100), y: random(10) };

  that.checkBounds = function() {
    if(that.p.y >= HEIGHT - 40) {
      that.p.y = HEIGHT - 40;
      that.v.y *= -0.9;
    }

    if(that.p.x <= 40) {
      that.p.x = 40;
      that.v.x *= -1;
    } else if(that.p.x >= WIDTH - 40) {
      that.p.x = WIDTH - 40;
      that.v.x *= -1;
    }
  }

  function applyFriction() {
    if(that.p.y == HEIGHT - 40) {
      that.v.x *= 0.99;
    }
  }

  function applyVelocity() {
    that.p.y += that.v.y;
    that.p.x += that.v.x;
  }

  function applyGravity() {
    that.v.y += GRAVITY;
  }

  that.draw = function() {
    that.checkBounds();
    applyFriction();

    ellipse(that.p.x, that.p.y, 80, 80);

    applyGravity();
    applyVelocity();
  }
}
