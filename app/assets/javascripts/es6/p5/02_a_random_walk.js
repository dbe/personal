"use strict";

var WIDTH = 1200;
var HEIGHT = 600;

var x, y;

function setup() {
  createCanvas(WIDTH, HEIGHT);
  x = random(WIDTH);
  y = random(HEIGHT);
}

function draw() {
  ellipse(x, y, 80, 80);
  mutateXY();
}

function mutateXY() {
  x += random(-10, 10);
  y += random(-5, 5);
}