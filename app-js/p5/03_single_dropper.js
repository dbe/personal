'use strict';

var WIDTH = 1200;
var HEIGHT = 600;
var GRAVITY = 2;

var p, v;

function setup() {
  createCanvas(WIDTH, HEIGHT);
  p = {x: random(WIDTH), y: random(HEIGHT)};
  v = {x: random(10), y: random(10) };
}

function draw() {
  checkBounds();
  applyFriction();

  ellipse(p.x, p.y, 80, 80);

  applyGravity();
  applyVelocity();
}

function checkBounds() {
  if(p.y >= HEIGHT - 40) {
    p.y = HEIGHT - 40;
    v.y *= -0.9;
  }

  if(p.x <= 40) {
    p.x = 40;
    v.x *= -1;
  } else if(p.x >= WIDTH - 40) {
    p.x = WIDTH - 40;
    v.x *= -1;
  }
}

function applyFriction() {
  if(p.y == HEIGHT - 40) {
    v.x *= 0.97;
  }
}

function applyVelocity() {
  p.y += v.y;
  p.x += v.x;
}

function applyGravity() {
  v.y += GRAVITY;
}
