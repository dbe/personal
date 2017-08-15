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
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
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
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Game__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__GameView__ = __webpack_require__(19);



let game;
let gameView;

window.setup = function() {
  createCanvas(windowWidth, windowHeight);
  game = new __WEBPACK_IMPORTED_MODULE_0__Game__["a" /* default */]();
  gameView = new __WEBPACK_IMPORTED_MODULE_1__GameView__["a" /* default */](game);
}

window.draw = function() {
  clear();

  game.update();
  gameView.draw();
}

window.mouseClicked = function() {
  gameView.onClick();
}


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class MenuItem {
  constructor(text, i, width) {
    this.text = text;

    this.left = 0;
    this.right = width;
    this.top = i * 100;
    this.bottom = this.top + 100;
  }

  draw(isSelected) {
    fill(0);
    line(0, this.bottom, this.right, this.bottom);

    if(this.isHovered()) {
      textStyle(BOLD);
    }

    textSize(15);
    text(this.text, 100, this.top + 50);
    textStyle(NORMAL);

    if(isSelected) {
      fill(0, 0, 0, 50);

      rectMode(CORNERS);
      rect(this.left, this.top, this.right, this.bottom);
    }
  }

  isHovered() {
    return mouseX >= this.left &&
       mouseX <= this.right &&
       mouseY >= this.top &&
       mouseY <= this.bottom;
  }

  onClick(selectView) {
    if(this.isHovered()) {
      selectView(this.text);
    }
  }
}

/* harmony default export */ __webpack_exports__["a"] = (MenuItem);


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__MenuItem__ = __webpack_require__(16);


class Menu {
  constructor(items, selectView) {
    this.width = 300;
    this.menuItems = items.map((item, i) => new __WEBPACK_IMPORTED_MODULE_0__MenuItem__["a" /* default */](item, i, this.width));
    this.selectView = selectView;
  }

  draw(selectedView) {
    line(this.width, 0, this.width, windowHeight);
    this.menuItems.forEach(item => item.draw(item.text === selectedView));
  }

  onClick() {
    this.menuItems.forEach(item => item.onClick(this.selectView));
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Menu);


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Component__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Menu__ = __webpack_require__(17);



class Game {
  constructor() {
    this.outpost = {
      shields: 100,
      maxShields: 200,
      recharge: 1,
      thorns: 1
    };

    this.mine = {
      toughness: 10,
      quality: 3
    };

    this.drone = {
      power: 5
    };

    this.inventory = [];
  }

  update() {
    this.updateOutpost();
    this.mineGoods();
  }

  updateOutpost() {
    this.outpost.shields = Math.min(this.outpost.maxShields, this.outpost.shields + this.outpost.recharge);
  }

  mineGoods() {
    if(random(1) < (this.drone.power / this.mine.toughness) * .05) {
      let item = __WEBPACK_IMPORTED_MODULE_0__Component__["a" /* default */].roll(this.mine.quality);
      console.log(`Mined: ${item.toString()}`);
    }
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Game);


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__HomeView__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Menu__ = __webpack_require__(17);



const VIEW_RENDERERS = {
  'Home': __WEBPACK_IMPORTED_MODULE_0__HomeView__["a" /* default */],
  'Inventory': __WEBPACK_IMPORTED_MODULE_0__HomeView__["a" /* default */],
  'Craft': __WEBPACK_IMPORTED_MODULE_0__HomeView__["a" /* default */]
}

class GameView {
  constructor(game) {
    this.game = game;
    this.menu = new __WEBPACK_IMPORTED_MODULE_1__Menu__["a" /* default */]([
      'Home',
      'Inventory',
      'Craft'
    ], this.selectView.bind(this));

    this.selectView('Home');
  }

  draw() {
    this.menu.draw(this.currentView);
    translate(this.menu.width, 0);

    this.viewRenderer.draw();
  }

  //TODO: This isn't the best idea to be storing views as strings
  selectView(view) {
    this.currentView = view;
    this.viewRenderer = new VIEW_RENDERERS[this.currentView](this.game, width - this.menu.width, height);
  }

  onClick() {
    this.menu.onClick();
  }
}

/* harmony default export */ __webpack_exports__["a"] = (GameView);


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__HashMapRenderer__ = __webpack_require__(21);


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
    __WEBPACK_IMPORTED_MODULE_0__HashMapRenderer__["a" /* default */].draw("Outpost", this.game.outpost, 20, 20);
  }

  drawOutpost() {
    fill(255);
    ellipse(this.width / 2, this.height / 2, this.game.outpost.shields, this.game.outpost.shields);
  }

}

/* harmony default export */ __webpack_exports__["a"] = (HomeView);


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class HashMapRenderer {
  static draw(title, map, x, y) {
    fill(0);

    textStyle(BOLD);
    text(title, x, y);
    textStyle(NORMAL);

    Object.keys(map).forEach((k, i) => {
      text(`${k}: ${map[k]}`, x, y + 20 * (i + 1))
    });
  }
}

/* harmony default export */ __webpack_exports__["a"] = (HashMapRenderer);


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const ITEM_PROTOTYPES = [
  {
    power: 3,
    battery: -5
  },
  {
    battery: 5
  },
  {
    shields: 50,
    battery: -10
  }
];

class Component {
  constructor(attributes) {
    this.attributes = attributes;
  }

  toString() {
    return Object.keys(this.attributes).map(k => {
      return `${k}: ${this.attributes[k]}`;
    }).join("\n");
  }

  //Rolls a new component of given quality
  static roll(quality) {
    let prototypes = this.rollPrototypes();
    prototypes = prototypes.map(pt => this.applyQualityAndBlur(pt, quality));
    let combined = this.combinePrototypes(prototypes);

    return new Component(combined);
  }

  static combinePrototypes(prototypes) {
    let combined = {};

    prototypes.forEach(pt => {
      Object.keys(pt).forEach(k => {
        let value = combined[k] || 0;
        combined[k] = value + pt[k];
      });
    });

    return combined;
  }

  //Multiplies prototype by quality factor
  //Also applies a gaussian blur such that doubling, or halving the value occurs 3 stds outside the mean
  static applyQualityAndBlur(pt, quality) {
    let blurred = {};

    Object.keys(pt).forEach(k => {
      let value = pt[k];
      blurred[k] = Math.round(quality * randomGaussian(value, value / 3));
    });

    return blurred;
  }

  static getRandomPrototype() {
    return ITEM_PROTOTYPES[Math.floor(random(ITEM_PROTOTYPES.length))]
  }

  static rollPrototypes() {
    let prototypes = [];

    for(let i = 0; i < this.rollNumPrototypes(); i++) {
      prototypes.push(this.getRandomPrototype());
    }

    return prototypes;
  }

  //Calculates how many of the above prototypes get combined into the component
  //Minimum of 1, but has a gaussian distribution of accumulating more
  static rollNumPrototypes() {
    return Math.max(1, Math.floor(randomGaussian(1)));
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Component);


/***/ })
/******/ ]);