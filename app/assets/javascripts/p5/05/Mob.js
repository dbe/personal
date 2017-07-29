"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Mob = function () {
  function Mob() {
    _classCallCheck(this, Mob);

    this.p = createVector(random(displayWidth), random(displayHeight));
    this.speed = 1;
    this.radius = 50;
  }

  _createClass(Mob, [{
    key: "move",
    value: function move(target) {
      var desired = p5.Vector.sub(target.p, this.p);
      this.p.add(desired.setMag(this.speed));
    }
  }, {
    key: "draw",
    value: function draw() {
      ellipse(this.p.x, this.p.y, this.radius, this.radius);
    }
  }, {
    key: "isCollision",
    value: function isCollision(p) {
      return this.p.dist(p) <= this.radius;
    }
  }]);

  return Mob;
}();

exports.default = Mob;