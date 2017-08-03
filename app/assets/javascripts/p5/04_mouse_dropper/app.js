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
/******/ ({

/***/ 4:
/***/ (function(module, exports) {

new p5(p => {
  var WIDTH = 1200;
  var HEIGHT = 600;
  var GRAVITY = 2;

  var droppers = [];

  p.setup = function() {
    p.createCanvas(WIDTH, HEIGHT);
  }

  p.draw = function() {
    droppers.forEach(function(dropper) {
      dropper.draw();
    });
  }

  p.mousePressed = function() {
    droppers.push(new Dropper());
  }

  function Dropper() {
    var that = this;

    that.p = {x: p.random(WIDTH), y: p.random(HEIGHT)};
    that.v = {x: p.random(100), y: p.random(10) };

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

      p.ellipse(that.p.x, that.p.y, 80, 80);

      applyGravity();
      applyVelocity();
    }
  }
});


/***/ })

/******/ });