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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Menu__ = __webpack_require__(17);


const menu = new __WEBPACK_IMPORTED_MODULE_0__Menu__["a" /* default */]([
  'Home',
  'Inventory',
  'Craft'
]);

window.setup = function() {
  createCanvas(windowWidth, windowHeight);
}

window.draw = function() {
  clear();
  menu.draw();
}

window.mouseClicked = function() {
  menu.onClick();
}


/***/ }),

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const WIDTH = 300;

class MenuItem {
  constructor(text, i) {
    this.text = text;

    this.left = 0;
    this.right = WIDTH;
    this.top = i * 100;
    this.bottom = this.top + 100;
  }

  draw() {
    line(0, this.bottom, 300, this.bottom);

    textStyle(NORMAL);

    if(this.isHovered()) {
      textStyle(BOLD);
    }

    text(this.text, 100, this.top + 50);
  }

  isHovered() {
    return mouseX >= this.left &&
       mouseX <= this.right &&
       mouseY >= this.top &&
       mouseY <= this.bottom;
  }

  onClick() {
    if(this.isHovered()) {
      alert("Clicked: " + this.text);
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
  constructor(items) {
    this.menuItems = items.map((item, i) => new __WEBPACK_IMPORTED_MODULE_0__MenuItem__["a" /* default */](item, i));
  }

  draw() {
    line(300, 0, 300, windowHeight);
    this.menuItems.forEach(item => item.draw());
  }

  onClick() {
    this.menuItems.forEach(item => item.onClick());
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Menu);


/***/ })

/******/ });