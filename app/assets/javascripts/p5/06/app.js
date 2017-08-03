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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Guy__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Buff__ = __webpack_require__(12);



var guy;

window.setup = function() {
  createCanvas(windowWidth, windowHeight);
  ellipseMode(RADIUS);

  guy = new __WEBPACK_IMPORTED_MODULE_0__Guy__["a" /* default */](createVector(100, 100));
}

window.mouseClicked = function() {
  guy.applyBuff(new __WEBPACK_IMPORTED_MODULE_1__Buff__["a" /* default */]('speed', 20, 50));
}

window.draw = function() {
  guy.update();
  guy.draw();
}


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Buffable__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__CollidableSphere__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__DrawableSphere__ = __webpack_require__(11);




class Guy extends Object(__WEBPACK_IMPORTED_MODULE_0__Buffable__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_2__DrawableSphere__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_1__CollidableSphere__["a" /* default */])(Object))) {
  constructor(p, speed = 5, radius = 10, range = 100) {
    super(...arguments);

    this.p = p;
    this.speed = speed;
    this.radius = radius;
    this.range = range;
  }

  update() {
    super.update();

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

  draw() {
    let mouse = createVector(mouseX, mouseY);
    let range = mouse.sub(this.p).setMag(this.range);

    line(this.p.x, this.p.y, this.p.x + range.x, this.p.y + range.y);
    super.draw();
  }

}

/* harmony default export */ __webpack_exports__["a"] = (Guy);


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const CollidableSphere = (superclass) => {
  return class extends superclass {
    isCollision(collidable) {
      return this.p.dist(collidable.p) < Math.min(this.radius, collidable.radius);
    }
  }
}

/* harmony default export */ __webpack_exports__["a"] = (CollidableSphere);


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const DrawableSphere = (superclass) => {
  return class extends superclass {
    draw() {
      ellipse(this.p.x, this.p.y, this.radius, this.radius);
    }
  }
}

/* harmony default export */ __webpack_exports__["a"] = (DrawableSphere);


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Buff {
  constructor(attr, amount, duration) {
    this.attr = attr;
    this.amount = amount;
    this.durationRemaining = duration;
  }

  on(buffable) {
    buffable[this.attr] += this.amount;
  }

  off(buffable) {
    buffable[this.attr] -= this.amount;
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Buff);


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const Buffable = (superclass) => {
  return class extends superclass {
    constructor() {
      super(...arguments);

      this.buffs = [];
    }

    applyBuff(buff) {
      this.buffs.push(buff);
      buff.on(this);
    }

    update() {
      this.buffs = this.buffs.filter(buff => {
        buff.durationRemaining--;

        //Should just be === 0, but just protecting against weird cases I cant think of.
        if(buff.durationRemaining <= 0) {
          this._removeBuff(buff);
          return false;
        }

        return true;
      });
    }

    _removeBuff(buff) {
      buff.off(this);
    }
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Buffable);


/***/ })
/******/ ]);