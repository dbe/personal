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
/******/ ({

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Game__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__GameView__ = __webpack_require__(19);



const game = new __WEBPACK_IMPORTED_MODULE_0__Game__["a" /* default */]();
const gameView = new __WEBPACK_IMPORTED_MODULE_1__GameView__["a" /* default */](game);

window.setup = function() {
  createCanvas(windowWidth, windowHeight);
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

/***/ 16:
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

/***/ 17:
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

/***/ 18:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Menu__ = __webpack_require__(17);


class Game {
  constructor() {
    this.outpost = {
      shields: 100,
      maxShields: 200,
      recharge: 1,
      thorns: 1
    };

    this.mine = {

    };

    this.drone = {

    };
  }

  update() {
    this.updateOutpost();
  }

  updateOutpost() {
    this.outpost.shields = Math.min(this.outpost.maxShields, this.outpost.shields + this.outpost.recharge);
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Game);


/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Menu__ = __webpack_require__(17);


class GameView {
  constructor(game) {
    this.game = game;

    this.currentView = 'Home';
    this.menu = new __WEBPACK_IMPORTED_MODULE_0__Menu__["a" /* default */]([
      'Home',
      'Inventory',
      'Craft'
    ], this.selectView.bind(this));
  }

  draw() {
    this.menu.draw(this.currentView);
    translate(this.menu.width, 0);

    this.drawHeader();
    this.drawOutpost();
  }

  //TODO: Most likely factor this out
  drawHeader() {
    fill(0);
    textSize(30);
    text(this.currentView, (width - this.menu.width) / 2, 30);
  }

  drawOutpost() {
    fill(255);
    ellipse(300, 300, this.game.outpost.shields, this.game.outpost.shields);
  }

  //TODO: This isn't the best idea to be storing views as strings
  selectView(view) {
    this.currentView = view;
  }

  onClick() {
    this.menu.onClick();
  }
}

/* harmony default export */ __webpack_exports__["a"] = (GameView);


/***/ })

/******/ });