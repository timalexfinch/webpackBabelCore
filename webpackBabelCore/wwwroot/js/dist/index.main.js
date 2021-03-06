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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./wwwroot/js/src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./wwwroot/js/src/index.js":
/*!*********************************!*\
  !*** ./wwwroot/js/src/index.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _operations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./operations */ \"./wwwroot/js/src/operations.js\");\n //alert(\"3 plus 5 = \" + mathAPI.add(3, 5));\n\ndocument.querySelector(\"#btnAdd\").addEventListener(\"click\", function () {\n  document.querySelector(\"#es6MathsContainer\").innerHTML = \"3 plus 5 = \".concat(_operations__WEBPACK_IMPORTED_MODULE_0__[\"default\"].add(3, 5));\n});\ndocument.querySelector(\"#btnSubtract\").addEventListener(\"click\", function () {\n  document.querySelector(\"#es6MathsContainer\").innerHTML = \"3 minus 5 = \".concat(_operations__WEBPACK_IMPORTED_MODULE_0__[\"default\"].subtract(3, 5));\n});\ndocument.querySelector(\"#btnMultiply\").addEventListener(\"click\", function () {\n  document.querySelector(\"#es6MathsContainer\").innerHTML = \"3 times 5 =  \".concat(_operations__WEBPACK_IMPORTED_MODULE_0__[\"default\"].multiply(3, 5));\n});\ndocument.querySelector(\"#btnDivide\").addEventListener(\"click\", function () {\n  document.querySelector(\"#es6MathsContainer\").innerHTML = \"3 divided by 5 = \".concat(_operations__WEBPACK_IMPORTED_MODULE_0__[\"default\"].divide(3, 5));\n});\n\n//# sourceURL=webpack:///./wwwroot/js/src/index.js?");

/***/ }),

/***/ "./wwwroot/js/src/operations.js":
/*!**************************************!*\
  !*** ./wwwroot/js/src/operations.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar add = function add(x, y) {\n  return x + y;\n};\n\nvar subtract = function subtract(x, y) {\n  return x - y;\n};\n\nvar multiply = function multiply(x, y) {\n  return x * y;\n};\n\nvar divide = function divide(x, y) {\n  return x / y;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  add: add,\n  subtract: subtract,\n  multiply: multiply,\n  divide: divide\n}); // Alternative syntax below:\n//const add = (x, y) => {\n//    return x + y;\n//};\n//const subtract = (x, y) => {\n//    return x - y;\n//};\n//const multiply = (x, y) => {\n//    return x * y;\n//};\n//const divide = (x, y) => {\n//    return x / y;\n//};\n\n//# sourceURL=webpack:///./wwwroot/js/src/operations.js?");

/***/ })

/******/ });