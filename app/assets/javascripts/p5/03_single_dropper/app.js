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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ 2:
/***/ (function(module, exports) {

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


/***/ })

/******/ });