/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Mob__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Zergling__ = __webpack_require__(6);



var guy;
var mobs = [];
var gameOver = false;

window.setup = function() {
  createCanvas(windowWidth, windowHeight);
  ellipseMode(RADIUS);

  guy = new Guy();

  for(var i = 0; i < 100; i++) {
    mobs.push(new __WEBPACK_IMPORTED_MODULE_1__Zergling__["a" /* default */]());
  }
}

window.draw = function() {
  //TODO: Make this game over logic better
  if(isGameOver()) {
    background('red');
  } else  {
    clear();
    guy.move();
    guy.draw();

    mobs.forEach(function(mob) {
      mob.move(guy);
      mob.draw();
    });
  }
}

window.mouseClicked = function() {
  var newMobs = [];

  mobs.forEach(function(mob, i) {
    if(!mob.isCollision(createVector(mouseX, mouseY))) {
      newMobs.push(mob);
    }
  });

  mobs = newMobs;
}

function destroyMob(i) {
  mobs.splice(i, 1);
}

function isGameOver() {
  return mobs.some(function(mob) {
    return mob.isCollision(guy.p);
  });
}

function Guy() {
  this.p = createVector(100, 580);
  this.speed = 5;

  this.move = function() {
    var desiredVelocity = createVector(0, 0);

    if(keyIsDown(65)) {
      desiredVelocity.x--;
    }
    if(keyIsDown(68)) {
      desiredVelocity.x++;
    }
    if(keyIsDown(87)) {
      desiredVelocity.y--;
    }
    if(keyIsDown(83)) {
      desiredVelocity.y++;
    }

    this.p.add(desiredVelocity.setMag(this.speed));
  }

  this.draw = function() {
    ellipse(this.p.x, this.p.y, 20, 20);
    line(this.p.x, this.p.y, mouseX, mouseY);
  }
}


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Mob {
  constructor(speed = 1, radius = 50) {
    this.p = createVector(random(displayWidth), random(displayHeight));
    this.speed = speed;
    this.radius = radius;
  }

  move(target) {
    var desired = p5.Vector.sub(target.p, this.p);
    this.p.add(desired.setMag(this.speed));
  }

  draw() {
    ellipse(this.p.x, this.p.y, this.radius, this.radius);
  }

  isCollision(p) {
    return this.p.dist(p) <= this.radius;
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Mob);


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Mob__ = __webpack_require__(5);


class Zergling extends __WEBPACK_IMPORTED_MODULE_0__Mob__["a" /* default */] {
  constructor() {
    super(3, 20);
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Zergling);


/***/ })
/******/ ]);