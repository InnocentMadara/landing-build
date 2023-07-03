/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_burger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/burger.js */ \"./src/js/burger.js\");\n/* harmony import */ var _js_textarea_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/textarea.js */ \"./src/js/textarea.js\");\n\r\n\r\n\r\nwindow.addEventListener('DOMContentLoaded', function (e) {\r\n  (0,_js_burger_js__WEBPACK_IMPORTED_MODULE_0__.burgerButtonAddListener)()\r\n  ;(0,_js_textarea_js__WEBPACK_IMPORTED_MODULE_1__.textareaAutoHeight)();\r\n});\n\n//# sourceURL=webpack://template/./src/index.js?");

/***/ }),

/***/ "./src/js/burger.js":
/*!**************************!*\
  !*** ./src/js/burger.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   burgerButtonAddListener: () => (/* binding */ burgerButtonAddListener)\n/* harmony export */ });\nfunction burgerButtonAddListener () {\r\n  document.querySelector('.header__burger-button').addEventListener(\"click\", (e)=>{\r\n    const navigation = document.querySelector('.header__navigation');\r\n    const button = document.querySelector('.header__burger-button');\r\n    navigation.toggleAttribute(\"active\");\r\n    button.toggleAttribute(\"active\");\r\n  })\r\n}\n\n//# sourceURL=webpack://template/./src/js/burger.js?");

/***/ }),

/***/ "./src/js/textarea.js":
/*!****************************!*\
  !*** ./src/js/textarea.js ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   textareaAutoHeight: () => (/* binding */ textareaAutoHeight)\n/* harmony export */ });\nfunction textareaHandler (e) {\r\n  e.target.style.minHeight = \"8px\";\r\n  e.target.style.minHeight = (e.target.scrollHeight) + 3 + \"px\";\r\n} \r\n\r\nfunction textareaAutoHeight () {\r\n  const textareas = Array.from(document.querySelectorAll('textarea'));\r\n\r\n  textareas.forEach(textarea=>{\r\n    textarea.addEventListener(\"input\", (e)=>{textareaHandler(e)})\r\n    textarea.style.minHeight = \"8px\";\r\n    textarea.style.minHeight = (e.target.scrollHeight) + \"px\";\r\n  })\r\n}\n\n//# sourceURL=webpack://template/./src/js/textarea.js?");

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
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;