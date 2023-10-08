/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/Game.js":
/*!************************!*\
  !*** ./src/js/Game.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Game; }
/* harmony export */ });
class Game {
  constructor(element) {
    this.element = element;
    this.hitPoints = document.querySelector('.hit-points');
    this.missPoints = document.querySelector('.miss-points');
    this.board = document.querySelector('.container');
    this.boardItems = Array.from(this.board.querySelectorAll('.item'));
    this.start = this.start.bind(this);
    this.onClick = this.onClick.bind(this);
    this.intervalId = null;
    this.toggle = false;
  }
  start() {
    this.board.addEventListener('click', this.onClick);
    this.intervalId = setInterval(this.run.bind(this), 1000);
  }
  run() {
    if (this.toggle) this.miss();
    this.toggle = true;
    this.element.move(this.boardItems);
  }
  onClick(e) {
    e.preventDefault();
    if (e.target.closest('.goblin') !== null) {
      this.hit();
      this.toggle = false;
    }
  }
  hit() {
    this.hitPoints.textContent = +this.hitPoints.textContent + 1;
  }
  miss() {
    this.missPoints.textContent = +this.missPoints.textContent + 1;
    if (+this.missPoints.textContent === 5) this.gameOver();
  }
  gameOver() {
    clearInterval(this.intervalId);
    alert(`Конец игры! \n Удачных попаданий ${this.hitPoints.textContent}`);
    this.hitPoints.textContent = 0;
    this.missPoints.textContent = 0;
    this.toggle = false;
    this.start();
  }
}

/***/ }),

/***/ "./src/js/Goblin.js":
/*!**************************!*\
  !*** ./src/js/Goblin.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Goblin; }
/* harmony export */ });
class Goblin {
  constructor(img) {
    this.element = img;
  }
  set element(value) {
    this._element = document.createElement('img');
    this._element.src = value;
    this._element.classList.add('goblin');
  }
  get element() {
    return this._element;
  }
  move(box) {
    const lastIndex = box.findIndex(el => el.querySelector('.goblin'));
    const index = Math.round(Math.random() * (box.length - 1));
    if (index === lastIndex) {
      this.move(box);
      return;
    }
    box[index].append(this.element);
  }
}

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _img_goblin_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/goblin.png */ "./src/img/goblin.png");
/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Game */ "./src/js/Game.js");
/* harmony import */ var _Goblin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Goblin */ "./src/js/Goblin.js");



const goblin = new _Goblin__WEBPACK_IMPORTED_MODULE_2__["default"](_img_goblin_png__WEBPACK_IMPORTED_MODULE_0__);
const game = new _Game__WEBPACK_IMPORTED_MODULE_1__["default"](goblin);
const button = document.querySelector('.button-start');
button.onclick = function () {
  button.onclick = null;
  button.classList.add('hiden');
  this.start();
}.bind(game);

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// Module
var code = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n    <title>Document</title>\n</head>\n<body>\n  <div class=\"score-bar\">\n    <div class=\"hit\">Колличество попаданий: <span class=\"hit-points\">0</span></div>\n    <div class=\"miss\">Колличество промахов: <span class=\"miss-points\">0</span> (максимум 5)</div>\n    <button class=\"button-start\">СТАРТ</button>\n  </div>  \n  <div class=\"container\">\n    <div class=\"item\"></div>\n    <div class=\"item\"></div>\n    <div class=\"item\"></div>\n    <div class=\"item\"></div>\n    <div class=\"item\"></div>\n    <div class=\"item\"></div>\n    <div class=\"item\"></div>\n    <div class=\"item\"></div>\n    <div class=\"item\"></div>\n    <div class=\"item\"></div>\n    <div class=\"item\"></div>\n    <div class=\"item\"></div>\n    <div class=\"item\"></div>\n    <div class=\"item\"></div>\n    <div class=\"item\"></div>\n    <div class=\"item\"></div>\n  </div>\n</body>\n</html>\n";
// Exports
/* harmony default export */ __webpack_exports__["default"] = (code);

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/img/goblin.png":
/*!****************************!*\
  !*** ./src/img/goblin.png ***!
  \****************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/goblin.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/app */ "./src/js/app.js");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.html */ "./src/index.html");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/style.css */ "./src/css/style.css");



}();
/******/ })()
;
//# sourceMappingURL=main.js.map