(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["prst-shape-transform"] = factory();
	else
		root["prst-shape-transform"] = factory();
})(global, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime-corejs3/core-js-stable/array/from.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js-stable/array/from.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/stable/array/from */ \"./node_modules/core-js-pure/stable/array/from.js\");\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/@babel/runtime-corejs3/core-js-stable/array/from.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/core-js-stable/array/is-array.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js-stable/array/is-array.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/stable/array/is-array */ \"./node_modules/core-js-pure/stable/array/is-array.js\");\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/@babel/runtime-corejs3/core-js-stable/array/is-array.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/find.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js-stable/instance/find.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/stable/instance/find */ \"./node_modules/core-js-pure/stable/instance/find.js\");\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/@babel/runtime-corejs3/core-js-stable/instance/find.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/for-each.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js-stable/instance/for-each.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/stable/instance/for-each */ \"./node_modules/core-js-pure/stable/instance/for-each.js\");\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/@babel/runtime-corejs3/core-js-stable/instance/for-each.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/stable/instance/map */ \"./node_modules/core-js-pure/stable/instance/map.js\");\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/reduce.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js-stable/instance/reduce.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/stable/instance/reduce */ \"./node_modules/core-js-pure/stable/instance/reduce.js\");\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/@babel/runtime-corejs3/core-js-stable/instance/reduce.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/slice.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js-stable/instance/slice.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/stable/instance/slice */ \"./node_modules/core-js-pure/stable/instance/slice.js\");\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/@babel/runtime-corejs3/core-js-stable/instance/slice.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/core-js-stable/json/stringify.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js-stable/json/stringify.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/stable/json/stringify */ \"./node_modules/core-js-pure/stable/json/stringify.js\");\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/@babel/runtime-corejs3/core-js-stable/json/stringify.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/core-js-stable/symbol.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js-stable/symbol.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/stable/symbol */ \"./node_modules/core-js-pure/stable/symbol/index.js\");\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/@babel/runtime-corejs3/core-js-stable/symbol.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/core-js/array/from.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js/array/from.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/features/array/from */ \"./node_modules/core-js-pure/features/array/from.js\");\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/@babel/runtime-corejs3/core-js/array/from.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/core-js/array/is-array.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js/array/is-array.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/features/array/is-array */ \"./node_modules/core-js-pure/features/array/is-array.js\");\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/@babel/runtime-corejs3/core-js/array/is-array.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/core-js/get-iterator-method.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js/get-iterator-method.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/features/get-iterator-method */ \"./node_modules/core-js-pure/features/get-iterator-method.js\");\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/@babel/runtime-corejs3/core-js/get-iterator-method.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/core-js/get-iterator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js/get-iterator.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/features/get-iterator */ \"./node_modules/core-js-pure/features/get-iterator.js\");\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/@babel/runtime-corejs3/core-js/get-iterator.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/core-js/instance/slice.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js/instance/slice.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/features/instance/slice */ \"./node_modules/core-js-pure/features/instance/slice.js\");\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/@babel/runtime-corejs3/core-js/instance/slice.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/core-js/is-iterable.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js/is-iterable.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/features/is-iterable */ \"./node_modules/core-js-pure/features/is-iterable.js\");\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/@babel/runtime-corejs3/core-js/is-iterable.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/features/symbol */ \"./node_modules/core-js-pure/features/symbol/index.js\");\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/@babel/runtime-corejs3/core-js/symbol.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/helpers/arrayLikeToArray.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/helpers/arrayLikeToArray.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _arrayLikeToArray(arr, len) {\n  if (len == null || len > arr.length) len = arr.length;\n\n  for (var i = 0, arr2 = new Array(len); i < len; i++) {\n    arr2[i] = arr[i];\n  }\n\n  return arr2;\n}\n\nmodule.exports = _arrayLikeToArray;\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/@babel/runtime-corejs3/helpers/arrayLikeToArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/helpers/arrayWithHoles.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/helpers/arrayWithHoles.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _Array$isArray = __webpack_require__(/*! ../core-js/array/is-array */ \"./node_modules/@babel/runtime-corejs3/core-js/array/is-array.js\");\n\nfunction _arrayWithHoles(arr) {\n  if (_Array$isArray(arr)) return arr;\n}\n\nmodule.exports = _arrayWithHoles;\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/@babel/runtime-corejs3/helpers/arrayWithHoles.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/helpers/iterableToArrayLimit.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/helpers/iterableToArrayLimit.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _getIterator = __webpack_require__(/*! ../core-js/get-iterator */ \"./node_modules/@babel/runtime-corejs3/core-js/get-iterator.js\");\n\nvar _isIterable = __webpack_require__(/*! ../core-js/is-iterable */ \"./node_modules/@babel/runtime-corejs3/core-js/is-iterable.js\");\n\nvar _Symbol = __webpack_require__(/*! ../core-js/symbol */ \"./node_modules/@babel/runtime-corejs3/core-js/symbol.js\");\n\nfunction _iterableToArrayLimit(arr, i) {\n  if (typeof _Symbol === \"undefined\" || !_isIterable(Object(arr))) return;\n  var _arr = [];\n  var _n = true;\n  var _d = false;\n  var _e = undefined;\n\n  try {\n    for (var _i = _getIterator(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {\n      _arr.push(_s.value);\n\n      if (i && _arr.length === i) break;\n    }\n  } catch (err) {\n    _d = true;\n    _e = err;\n  } finally {\n    try {\n      if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n    } finally {\n      if (_d) throw _e;\n    }\n  }\n\n  return _arr;\n}\n\nmodule.exports = _iterableToArrayLimit;\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/@babel/runtime-corejs3/helpers/iterableToArrayLimit.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/helpers/nonIterableRest.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/helpers/nonIterableRest.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _nonIterableRest() {\n  throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\n\nmodule.exports = _nonIterableRest;\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/@babel/runtime-corejs3/helpers/nonIterableRest.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/helpers/slicedToArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/helpers/slicedToArray.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ \"./node_modules/@babel/runtime-corejs3/helpers/arrayWithHoles.js\");\n\nvar iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ \"./node_modules/@babel/runtime-corejs3/helpers/iterableToArrayLimit.js\");\n\nvar unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ \"./node_modules/@babel/runtime-corejs3/helpers/unsupportedIterableToArray.js\");\n\nvar nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ \"./node_modules/@babel/runtime-corejs3/helpers/nonIterableRest.js\");\n\nfunction _slicedToArray(arr, i) {\n  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();\n}\n\nmodule.exports = _slicedToArray;\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/@babel/runtime-corejs3/helpers/slicedToArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/helpers/unsupportedIterableToArray.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/helpers/unsupportedIterableToArray.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _Array$from = __webpack_require__(/*! ../core-js/array/from */ \"./node_modules/@babel/runtime-corejs3/core-js/array/from.js\");\n\nvar _sliceInstanceProperty = __webpack_require__(/*! ../core-js/instance/slice */ \"./node_modules/@babel/runtime-corejs3/core-js/instance/slice.js\");\n\nvar arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ \"./node_modules/@babel/runtime-corejs3/helpers/arrayLikeToArray.js\");\n\nfunction _unsupportedIterableToArray(o, minLen) {\n  var _context;\n\n  if (!o) return;\n  if (typeof o === \"string\") return arrayLikeToArray(o, minLen);\n\n  var n = _sliceInstanceProperty(_context = Object.prototype.toString.call(o)).call(_context, 8, -1);\n\n  if (n === \"Object\" && o.constructor) n = o.constructor.name;\n  if (n === \"Map\" || n === \"Set\") return _Array$from(o);\n  if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);\n}\n\nmodule.exports = _unsupportedIterableToArray;\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/@babel/runtime-corejs3/helpers/unsupportedIterableToArray.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/es/array/from.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js-pure/es/array/from.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es.string.iterator */ \"./node_modules/core-js-pure/modules/es.string.iterator.js\");\n\n__webpack_require__(/*! ../../modules/es.array.from */ \"./node_modules/core-js-pure/modules/es.array.from.js\");\n\nvar path = __webpack_require__(/*! ../../internals/path */ \"./node_modules/core-js-pure/internals/path.js\");\n\nmodule.exports = path.Array.from;\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/es/array/from.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/es/array/is-array.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js-pure/es/array/is-array.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es.array.is-array */ \"./node_modules/core-js-pure/modules/es.array.is-array.js\");\n\nvar path = __webpack_require__(/*! ../../internals/path */ \"./node_modules/core-js-pure/internals/path.js\");\n\nmodule.exports = path.Array.isArray;\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/es/array/is-array.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/es/array/virtual/find.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js-pure/es/array/virtual/find.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../../modules/es.array.find */ \"./node_modules/core-js-pure/modules/es.array.find.js\");\n\nvar entryVirtual = __webpack_require__(/*! ../../../internals/entry-virtual */ \"./node_modules/core-js-pure/internals/entry-virtual.js\");\n\nmodule.exports = entryVirtual('Array').find;\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/es/array/virtual/find.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/es/array/virtual/for-each.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js-pure/es/array/virtual/for-each.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../../modules/es.array.for-each */ \"./node_modules/core-js-pure/modules/es.array.for-each.js\");\n\nvar entryVirtual = __webpack_require__(/*! ../../../internals/entry-virtual */ \"./node_modules/core-js-pure/internals/entry-virtual.js\");\n\nmodule.exports = entryVirtual('Array').forEach;\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/es/array/virtual/for-each.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/es/array/virtual/map.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js-pure/es/array/virtual/map.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../../modules/es.array.map */ \"./node_modules/core-js-pure/modules/es.array.map.js\");\n\nvar entryVirtual = __webpack_require__(/*! ../../../internals/entry-virtual */ \"./node_modules/core-js-pure/internals/entry-virtual.js\");\n\nmodule.exports = entryVirtual('Array').map;\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/es/array/virtual/map.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/es/array/virtual/reduce.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js-pure/es/array/virtual/reduce.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../../modules/es.array.reduce */ \"./node_modules/core-js-pure/modules/es.array.reduce.js\");\n\nvar entryVirtual = __webpack_require__(/*! ../../../internals/entry-virtual */ \"./node_modules/core-js-pure/internals/entry-virtual.js\");\n\nmodule.exports = entryVirtual('Array').reduce;\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/es/array/virtual/reduce.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/es/array/virtual/slice.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js-pure/es/array/virtual/slice.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../../modules/es.array.slice */ \"./node_modules/core-js-pure/modules/es.array.slice.js\");\n\nvar entryVirtual = __webpack_require__(/*! ../../../internals/entry-virtual */ \"./node_modules/core-js-pure/internals/entry-virtual.js\");\n\nmodule.exports = entryVirtual('Array').slice;\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/es/array/virtual/slice.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/es/instance/find.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js-pure/es/instance/find.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var find = __webpack_require__(/*! ../array/virtual/find */ \"./node_modules/core-js-pure/es/array/virtual/find.js\");\n\nvar ArrayPrototype = Array.prototype;\n\nmodule.exports = function (it) {\n  var own = it.find;\n  return it === ArrayPrototype || it instanceof Array && own === ArrayPrototype.find ? find : own;\n};\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/es/instance/find.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/es/instance/map.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js-pure/es/instance/map.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = __webpack_require__(/*! ../array/virtual/map */ \"./node_modules/core-js-pure/es/array/virtual/map.js\");\n\nvar ArrayPrototype = Array.prototype;\n\nmodule.exports = function (it) {\n  var own = it.map;\n  return it === ArrayPrototype || it instanceof Array && own === ArrayPrototype.map ? map : own;\n};\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/es/instance/map.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/es/instance/reduce.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js-pure/es/instance/reduce.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var reduce = __webpack_require__(/*! ../array/virtual/reduce */ \"./node_modules/core-js-pure/es/array/virtual/reduce.js\");\n\nvar ArrayPrototype = Array.prototype;\n\nmodule.exports = function (it) {\n  var own = it.reduce;\n  return it === ArrayPrototype || it instanceof Array && own === ArrayPrototype.reduce ? reduce : own;\n};\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/es/instance/reduce.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/es/instance/slice.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js-pure/es/instance/slice.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var slice = __webpack_require__(/*! ../array/virtual/slice */ \"./node_modules/core-js-pure/es/array/virtual/slice.js\");\n\nvar ArrayPrototype = Array.prototype;\n\nmodule.exports = function (it) {\n  var own = it.slice;\n  return it === ArrayPrototype || it instanceof Array && own === ArrayPrototype.slice ? slice : own;\n};\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/es/instance/slice.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/es/json/stringify.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js-pure/es/json/stringify.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es.json.stringify */ \"./node_modules/core-js-pure/modules/es.json.stringify.js\");\n\nvar core = __webpack_require__(/*! ../../internals/path */ \"./node_modules/core-js-pure/internals/path.js\");\n\nif (!core.JSON) core.JSON = {\n  stringify: JSON.stringify\n}; // eslint-disable-next-line no-unused-vars\n\nmodule.exports = function stringify(it, replacer, space) {\n  return core.JSON.stringify.apply(null, arguments);\n};\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/es/json/stringify.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/es/symbol/index.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js-pure/es/symbol/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es.array.concat */ \"./node_modules/core-js-pure/modules/es.array.concat.js\");\n\n__webpack_require__(/*! ../../modules/es.object.to-string */ \"./node_modules/core-js-pure/modules/es.object.to-string.js\");\n\n__webpack_require__(/*! ../../modules/es.symbol */ \"./node_modules/core-js-pure/modules/es.symbol.js\");\n\n__webpack_require__(/*! ../../modules/es.symbol.async-iterator */ \"./node_modules/core-js-pure/modules/es.symbol.async-iterator.js\");\n\n__webpack_require__(/*! ../../modules/es.symbol.description */ \"./node_modules/core-js-pure/modules/es.symbol.description.js\");\n\n__webpack_require__(/*! ../../modules/es.symbol.has-instance */ \"./node_modules/core-js-pure/modules/es.symbol.has-instance.js\");\n\n__webpack_require__(/*! ../../modules/es.symbol.is-concat-spreadable */ \"./node_modules/core-js-pure/modules/es.symbol.is-concat-spreadable.js\");\n\n__webpack_require__(/*! ../../modules/es.symbol.iterator */ \"./node_modules/core-js-pure/modules/es.symbol.iterator.js\");\n\n__webpack_require__(/*! ../../modules/es.symbol.match */ \"./node_modules/core-js-pure/modules/es.symbol.match.js\");\n\n__webpack_require__(/*! ../../modules/es.symbol.match-all */ \"./node_modules/core-js-pure/modules/es.symbol.match-all.js\");\n\n__webpack_require__(/*! ../../modules/es.symbol.replace */ \"./node_modules/core-js-pure/modules/es.symbol.replace.js\");\n\n__webpack_require__(/*! ../../modules/es.symbol.search */ \"./node_modules/core-js-pure/modules/es.symbol.search.js\");\n\n__webpack_require__(/*! ../../modules/es.symbol.species */ \"./node_modules/core-js-pure/modules/es.symbol.species.js\");\n\n__webpack_require__(/*! ../../modules/es.symbol.split */ \"./node_modules/core-js-pure/modules/es.symbol.split.js\");\n\n__webpack_require__(/*! ../../modules/es.symbol.to-primitive */ \"./node_modules/core-js-pure/modules/es.symbol.to-primitive.js\");\n\n__webpack_require__(/*! ../../modules/es.symbol.to-string-tag */ \"./node_modules/core-js-pure/modules/es.symbol.to-string-tag.js\");\n\n__webpack_require__(/*! ../../modules/es.symbol.unscopables */ \"./node_modules/core-js-pure/modules/es.symbol.unscopables.js\");\n\n__webpack_require__(/*! ../../modules/es.math.to-string-tag */ \"./node_modules/core-js-pure/modules/es.math.to-string-tag.js\");\n\n__webpack_require__(/*! ../../modules/es.json.to-string-tag */ \"./node_modules/core-js-pure/modules/es.json.to-string-tag.js\");\n\nvar path = __webpack_require__(/*! ../../internals/path */ \"./node_modules/core-js-pure/internals/path.js\");\n\nmodule.exports = path.Symbol;\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/es/symbol/index.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/features/array/from.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js-pure/features/array/from.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parent = __webpack_require__(/*! ../../es/array/from */ \"./node_modules/core-js-pure/es/array/from.js\");\n\nmodule.exports = parent;\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/features/array/from.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/features/array/is-array.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js-pure/features/array/is-array.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parent = __webpack_require__(/*! ../../es/array/is-array */ \"./node_modules/core-js-pure/es/array/is-array.js\");\n\nmodule.exports = parent;\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/features/array/is-array.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/features/get-iterator-method.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js-pure/features/get-iterator-method.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../modules/web.dom-collections.iterator */ \"./node_modules/core-js-pure/modules/web.dom-collections.iterator.js\");\n\n__webpack_require__(/*! ../modules/es.string.iterator */ \"./node_modules/core-js-pure/modules/es.string.iterator.js\");\n\nvar getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ \"./node_modules/core-js-pure/internals/get-iterator-method.js\");\n\nmodule.exports = getIteratorMethod;\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/features/get-iterator-method.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/features/get-iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js-pure/features/get-iterator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../modules/web.dom-collections.iterator */ \"./node_modules/core-js-pure/modules/web.dom-collections.iterator.js\");\n\n__webpack_require__(/*! ../modules/es.string.iterator */ \"./node_modules/core-js-pure/modules/es.string.iterator.js\");\n\nvar getIterator = __webpack_require__(/*! ../internals/get-iterator */ \"./node_modules/core-js-pure/internals/get-iterator.js\");\n\nmodule.exports = getIterator;\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/features/get-iterator.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/features/instance/slice.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js-pure/features/instance/slice.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parent = __webpack_require__(/*! ../../es/instance/slice */ \"./node_modules/core-js-pure/es/instance/slice.js\");\n\nmodule.exports = parent;\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/features/instance/slice.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/features/is-iterable.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js-pure/features/is-iterable.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../modules/web.dom-collections.iterator */ \"./node_modules/core-js-pure/modules/web.dom-collections.iterator.js\");\n\n__webpack_require__(/*! ../modules/es.string.iterator */ \"./node_modules/core-js-pure/modules/es.string.iterator.js\");\n\nvar isIterable = __webpack_require__(/*! ../internals/is-iterable */ \"./node_modules/core-js-pure/internals/is-iterable.js\");\n\nmodule.exports = isIterable;\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/features/is-iterable.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/features/symbol/index.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js-pure/features/symbol/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parent = __webpack_require__(/*! ../../es/symbol */ \"./node_modules/core-js-pure/es/symbol/index.js\");\n\n__webpack_require__(/*! ../../modules/esnext.symbol.async-dispose */ \"./node_modules/core-js-pure/modules/esnext.symbol.async-dispose.js\");\n\n__webpack_require__(/*! ../../modules/esnext.symbol.dispose */ \"./node_modules/core-js-pure/modules/esnext.symbol.dispose.js\");\n\n__webpack_require__(/*! ../../modules/esnext.symbol.observable */ \"./node_modules/core-js-pure/modules/esnext.symbol.observable.js\");\n\n__webpack_require__(/*! ../../modules/esnext.symbol.pattern-match */ \"./node_modules/core-js-pure/modules/esnext.symbol.pattern-match.js\"); // TODO: Remove from `core-js@4`\n\n\n__webpack_require__(/*! ../../modules/esnext.symbol.replace-all */ \"./node_modules/core-js-pure/modules/esnext.symbol.replace-all.js\");\n\nmodule.exports = parent;\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/features/symbol/index.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/a-function.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/a-function.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (it) {\n  if (typeof it != 'function') {\n    throw TypeError(String(it) + ' is not a function');\n  }\n\n  return it;\n};\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/internals/a-function.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/a-possible-prototype.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/a-possible-prototype.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js-pure/internals/is-object.js\");\n\nmodule.exports = function (it) {\n  if (!isObject(it) && it !== null) {\n    throw TypeError(\"Can't set \" + String(it) + ' as a prototype');\n  }\n\n  return it;\n};\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/internals/a-possible-prototype.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/add-to-unscopables.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/add-to-unscopables.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function () {\n  /* empty */\n};\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/internals/add-to-unscopables.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/an-object.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/an-object.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js-pure/internals/is-object.js\");\n\nmodule.exports = function (it) {\n  if (!isObject(it)) {\n    throw TypeError(String(it) + ' is not an object');\n  }\n\n  return it;\n};\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/internals/an-object.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/array-for-each.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/array-for-each.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar $forEach = __webpack_require__(/*! ../internals/array-iteration */ \"./node_modules/core-js-pure/internals/array-iteration.js\").forEach;\n\nvar arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ \"./node_modules/core-js-pure/internals/array-method-is-strict.js\");\n\nvar arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ \"./node_modules/core-js-pure/internals/array-method-uses-to-length.js\");\n\nvar STRICT_METHOD = arrayMethodIsStrict('forEach');\nvar USES_TO_LENGTH = arrayMethodUsesToLength('forEach'); // `Array.prototype.forEach` method implementation\n// https://tc39.github.io/ecma262/#sec-array.prototype.foreach\n\nmodule.exports = !STRICT_METHOD || !USES_TO_LENGTH ? function forEach(callbackfn\n/* , thisArg */\n) {\n  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);\n} : [].forEach;\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/internals/array-for-each.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/array-from.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/array-from.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar bind = __webpack_require__(/*! ../internals/function-bind-context */ \"./node_modules/core-js-pure/internals/function-bind-context.js\");\n\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"./node_modules/core-js-pure/internals/to-object.js\");\n\nvar callWithSafeIterationClosing = __webpack_require__(/*! ../internals/call-with-safe-iteration-closing */ \"./node_modules/core-js-pure/internals/call-with-safe-iteration-closing.js\");\n\nvar isArrayIteratorMethod = __webpack_require__(/*! ../internals/is-array-iterator-method */ \"./node_modules/core-js-pure/internals/is-array-iterator-method.js\");\n\nvar toLength = __webpack_require__(/*! ../internals/to-length */ \"./node_modules/core-js-pure/internals/to-length.js\");\n\nvar createProperty = __webpack_require__(/*! ../internals/create-property */ \"./node_modules/core-js-pure/internals/create-property.js\");\n\nvar getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ \"./node_modules/core-js-pure/internals/get-iterator-method.js\"); // `Array.from` method implementation\n// https://tc39.github.io/ecma262/#sec-array.from\n\n\nmodule.exports = function from(arrayLike\n/* , mapfn = undefined, thisArg = undefined */\n) {\n  var O = toObject(arrayLike);\n  var C = typeof this == 'function' ? this : Array;\n  var argumentsLength = arguments.length;\n  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;\n  var mapping = mapfn !== undefined;\n  var iteratorMethod = getIteratorMethod(O);\n  var index = 0;\n  var length, result, step, iterator, next, value;\n  if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined, 2); // if the target is not iterable or it's an array with the default iterator - use a simple case\n\n  if (iteratorMethod != undefined && !(C == Array && isArrayIteratorMethod(iteratorMethod))) {\n    iterator = iteratorMethod.call(O);\n    next = iterator.next;\n    result = new C();\n\n    for (; !(step = next.call(iterator)).done; index++) {\n      value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;\n      createProperty(result, index, value);\n    }\n  } else {\n    length = toLength(O.length);\n    result = new C(length);\n\n    for (; length > index; index++) {\n      value = mapping ? mapfn(O[index], index) : O[index];\n      createProperty(result, index, value);\n    }\n  }\n\n  result.length = index;\n  return result;\n};\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/internals/array-from.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/array-includes.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/array-includes.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/core-js-pure/internals/to-indexed-object.js\");\n\nvar toLength = __webpack_require__(/*! ../internals/to-length */ \"./node_modules/core-js-pure/internals/to-length.js\");\n\nvar toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ \"./node_modules/core-js-pure/internals/to-absolute-index.js\"); // `Array.prototype.{ indexOf, includes }` methods implementation\n\n\nvar createMethod = function (IS_INCLUDES) {\n  return function ($this, el, fromIndex) {\n    var O = toIndexedObject($this);\n    var length = toLength(O.length);\n    var index = toAbsoluteIndex(fromIndex, length);\n    var value; // Array#includes uses SameValueZero equality algorithm\n    // eslint-disable-next-line no-self-compare\n\n    if (IS_INCLUDES && el != el) while (length > index) {\n      value = O[index++]; // eslint-disable-next-line no-self-compare\n\n      if (value != value) return true; // Array#indexOf ignores holes, Array#includes - not\n    } else for (; length > index; index++) {\n      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;\n    }\n    return !IS_INCLUDES && -1;\n  };\n};\n\nmodule.exports = {\n  // `Array.prototype.includes` method\n  // https://tc39.github.io/ecma262/#sec-array.prototype.includes\n  includes: createMethod(true),\n  // `Array.prototype.indexOf` method\n  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof\n  indexOf: createMethod(false)\n};\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/internals/array-includes.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/array-iteration.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/array-iteration.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var bind = __webpack_require__(/*! ../internals/function-bind-context */ \"./node_modules/core-js-pure/internals/function-bind-context.js\");\n\nvar IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ \"./node_modules/core-js-pure/internals/indexed-object.js\");\n\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"./node_modules/core-js-pure/internals/to-object.js\");\n\nvar toLength = __webpack_require__(/*! ../internals/to-length */ \"./node_modules/core-js-pure/internals/to-length.js\");\n\nvar arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ \"./node_modules/core-js-pure/internals/array-species-create.js\");\n\nvar push = [].push; // `Array.prototype.{ forEach, map, filter, some, every, find, findIndex }` methods implementation\n\nvar createMethod = function (TYPE) {\n  var IS_MAP = TYPE == 1;\n  var IS_FILTER = TYPE == 2;\n  var IS_SOME = TYPE == 3;\n  var IS_EVERY = TYPE == 4;\n  var IS_FIND_INDEX = TYPE == 6;\n  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;\n  return function ($this, callbackfn, that, specificCreate) {\n    var O = toObject($this);\n    var self = IndexedObject(O);\n    var boundFunction = bind(callbackfn, that, 3);\n    var length = toLength(self.length);\n    var index = 0;\n    var create = specificCreate || arraySpeciesCreate;\n    var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;\n    var value, result;\n\n    for (; length > index; index++) if (NO_HOLES || index in self) {\n      value = self[index];\n      result = boundFunction(value, index, O);\n\n      if (TYPE) {\n        if (IS_MAP) target[index] = result; // map\n        else if (result) switch (TYPE) {\n            case 3:\n              return true;\n            // some\n\n            case 5:\n              return value;\n            // find\n\n            case 6:\n              return index;\n            // findIndex\n\n            case 2:\n              push.call(target, value);\n            // filter\n          } else if (IS_EVERY) return false; // every\n      }\n    }\n\n    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;\n  };\n};\n\nmodule.exports = {\n  // `Array.prototype.forEach` method\n  // https://tc39.github.io/ecma262/#sec-array.prototype.foreach\n  forEach: createMethod(0),\n  // `Array.prototype.map` method\n  // https://tc39.github.io/ecma262/#sec-array.prototype.map\n  map: createMethod(1),\n  // `Array.prototype.filter` method\n  // https://tc39.github.io/ecma262/#sec-array.prototype.filter\n  filter: createMethod(2),\n  // `Array.prototype.some` method\n  // https://tc39.github.io/ecma262/#sec-array.prototype.some\n  some: createMethod(3),\n  // `Array.prototype.every` method\n  // https://tc39.github.io/ecma262/#sec-array.prototype.every\n  every: createMethod(4),\n  // `Array.prototype.find` method\n  // https://tc39.github.io/ecma262/#sec-array.prototype.find\n  find: createMethod(5),\n  // `Array.prototype.findIndex` method\n  // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex\n  findIndex: createMethod(6)\n};\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/internals/array-iteration.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/array-method-has-species-support.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/array-method-has-species-support.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js-pure/internals/fails.js\");\n\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js-pure/internals/well-known-symbol.js\");\n\nvar V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ \"./node_modules/core-js-pure/internals/engine-v8-version.js\");\n\nvar SPECIES = wellKnownSymbol('species');\n\nmodule.exports = function (METHOD_NAME) {\n  // We can't use this feature detection in V8 since it causes\n  // deoptimization and serious performance degradation\n  // https://github.com/zloirock/core-js/issues/677\n  return V8_VERSION >= 51 || !fails(function () {\n    var array = [];\n    var constructor = array.constructor = {};\n\n    constructor[SPECIES] = function () {\n      return {\n        foo: 1\n      };\n    };\n\n    return array[METHOD_NAME](Boolean).foo !== 1;\n  });\n};\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/internals/array-method-has-species-support.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/array-method-is-strict.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/array-method-is-strict.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js-pure/internals/fails.js\");\n\nmodule.exports = function (METHOD_NAME, argument) {\n  var method = [][METHOD_NAME];\n  return !!method && fails(function () {\n    // eslint-disable-next-line no-useless-call,no-throw-literal\n    method.call(null, argument || function () {\n      throw 1;\n    }, 1);\n  });\n};\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/internals/array-method-is-strict.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/array-method-uses-to-length.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/array-method-uses-to-length.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js-pure/internals/descriptors.js\");\n\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js-pure/internals/fails.js\");\n\nvar has = __webpack_require__(/*! ../internals/has */ \"./node_modules/core-js-pure/internals/has.js\");\n\nvar defineProperty = Object.defineProperty;\nvar cache = {};\n\nvar thrower = function (it) {\n  throw it;\n};\n\nmodule.exports = function (METHOD_NAME, options) {\n  if (has(cache, METHOD_NAME)) return cache[METHOD_NAME];\n  if (!options) options = {};\n  var method = [][METHOD_NAME];\n  var ACCESSORS = has(options, 'ACCESSORS') ? options.ACCESSORS : false;\n  var argument0 = has(options, 0) ? options[0] : thrower;\n  var argument1 = has(options, 1) ? options[1] : undefined;\n  return cache[METHOD_NAME] = !!method && !fails(function () {\n    if (ACCESSORS && !DESCRIPTORS) return true;\n    var O = {\n      length: -1\n    };\n    if (ACCESSORS) defineProperty(O, 1, {\n      enumerable: true,\n      get: thrower\n    });else O[1] = 1;\n    method.call(O, argument0, argument1);\n  });\n};\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/internals/array-method-uses-to-length.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/array-reduce.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/array-reduce.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var aFunction = __webpack_require__(/*! ../internals/a-function */ \"./node_modules/core-js-pure/internals/a-function.js\");\n\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"./node_modules/core-js-pure/internals/to-object.js\");\n\nvar IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ \"./node_modules/core-js-pure/internals/indexed-object.js\");\n\nvar toLength = __webpack_require__(/*! ../internals/to-length */ \"./node_modules/core-js-pure/internals/to-length.js\"); // `Array.prototype.{ reduce, reduceRight }` methods implementation\n\n\nvar createMethod = function (IS_RIGHT) {\n  return function (that, callbackfn, argumentsLength, memo) {\n    aFunction(callbackfn);\n    var O = toObject(that);\n    var self = IndexedObject(O);\n    var length = toLength(O.length);\n    var index = IS_RIGHT ? length - 1 : 0;\n    var i = IS_RIGHT ? -1 : 1;\n    if (argumentsLength < 2) while (true) {\n      if (index in self) {\n        memo = self[index];\n        index += i;\n        break;\n      }\n\n      index += i;\n\n      if (IS_RIGHT ? index < 0 : length <= index) {\n        throw TypeError('Reduce of empty array with no initial value');\n      }\n    }\n\n    for (; IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {\n      memo = callbackfn(memo, self[index], index, O);\n    }\n\n    return memo;\n  };\n};\n\nmodule.exports = {\n  // `Array.prototype.reduce` method\n  // https://tc39.github.io/ecma262/#sec-array.prototype.reduce\n  left: createMethod(false),\n  // `Array.prototype.reduceRight` method\n  // https://tc39.github.io/ecma262/#sec-array.prototype.reduceright\n  right: createMethod(true)\n};\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/internals/array-reduce.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/array-species-create.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/array-species-create.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js-pure/internals/is-object.js\");\n\nvar isArray = __webpack_require__(/*! ../internals/is-array */ \"./node_modules/core-js-pure/internals/is-array.js\");\n\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js-pure/internals/well-known-symbol.js\");\n\nvar SPECIES = wellKnownSymbol('species'); // `ArraySpeciesCreate` abstract operation\n// https://tc39.github.io/ecma262/#sec-arrayspeciescreate\n\nmodule.exports = function (originalArray, length) {\n  var C;\n\n  if (isArray(originalArray)) {\n    C = originalArray.constructor; // cross-realm fallback\n\n    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;else if (isObject(C)) {\n      C = C[SPECIES];\n      if (C === null) C = undefined;\n    }\n  }\n\n  return new (C === undefined ? Array : C)(length === 0 ? 0 : length);\n};\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/internals/array-species-create.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/call-with-safe-iteration-closing.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/call-with-safe-iteration-closing.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js-pure/internals/an-object.js\"); // call something on iterator step with safe closing on error\n\n\nmodule.exports = function (iterator, fn, value, ENTRIES) {\n  try {\n    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value); // 7.4.6 IteratorClose(iterator, completion)\n  } catch (error) {\n    var returnMethod = iterator['return'];\n    if (returnMethod !== undefined) anObject(returnMethod.call(iterator));\n    throw error;\n  }\n};\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/internals/call-with-safe-iteration-closing.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/check-correctness-of-iteration.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/check-correctness-of-iteration.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js-pure/internals/well-known-symbol.js\");\n\nvar ITERATOR = wellKnownSymbol('iterator');\nvar SAFE_CLOSING = false;\n\ntry {\n  var called = 0;\n  var iteratorWithReturn = {\n    next: function () {\n      return {\n        done: !!called++\n      };\n    },\n    'return': function () {\n      SAFE_CLOSING = true;\n    }\n  };\n\n  iteratorWithReturn[ITERATOR] = function () {\n    return this;\n  }; // eslint-disable-next-line no-throw-literal\n\n\n  Array.from(iteratorWithReturn, function () {\n    throw 2;\n  });\n} catch (error) {\n  /* empty */\n}\n\nmodule.exports = function (exec, SKIP_CLOSING) {\n  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;\n  var ITERATION_SUPPORT = false;\n\n  try {\n    var object = {};\n\n    object[ITERATOR] = function () {\n      return {\n        next: function () {\n          return {\n            done: ITERATION_SUPPORT = true\n          };\n        }\n      };\n    };\n\n    exec(object);\n  } catch (error) {\n    /* empty */\n  }\n\n  return ITERATION_SUPPORT;\n};\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/internals/check-correctness-of-iteration.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/classof-raw.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/classof-raw.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var toString = {}.toString;\n\nmodule.exports = function (it) {\n  return toString.call(it).slice(8, -1);\n};\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/internals/classof-raw.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/classof.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/classof.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ \"./node_modules/core-js-pure/internals/to-string-tag-support.js\");\n\nvar classofRaw = __webpack_require__(/*! ../internals/classof-raw */ \"./node_modules/core-js-pure/internals/classof-raw.js\");\n\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js-pure/internals/well-known-symbol.js\");\n\nvar TO_STRING_TAG = wellKnownSymbol('toStringTag'); // ES3 wrong here\n\nvar CORRECT_ARGUMENTS = classofRaw(function () {\n  return arguments;\n}()) == 'Arguments'; // fallback for IE11 Script Access Denied error\n\nvar tryGet = function (it, key) {\n  try {\n    return it[key];\n  } catch (error) {\n    /* empty */\n  }\n}; // getting tag from ES6+ `Object.prototype.toString`\n\n\nmodule.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {\n  var O, tag, result;\n  return it === undefined ? 'Undefined' : it === null ? 'Null' // @@toStringTag case\n  : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag // builtinTag case\n  : CORRECT_ARGUMENTS ? classofRaw(O) // ES3 arguments fallback\n  : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;\n};\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/internals/classof.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/correct-prototype-getter.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/correct-prototype-getter.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js-pure/internals/fails.js\");\n\nmodule.exports = !fails(function () {\n  function F() {\n    /* empty */\n  }\n\n  F.prototype.constructor = null;\n  return Object.getPrototypeOf(new F()) !== F.prototype;\n});\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/internals/correct-prototype-getter.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/create-iterator-constructor.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/create-iterator-constructor.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar IteratorPrototype = __webpack_require__(/*! ../internals/iterators-core */ \"./node_modules/core-js-pure/internals/iterators-core.js\").IteratorPrototype;\n\nvar create = __webpack_require__(/*! ../internals/object-create */ \"./node_modules/core-js-pure/internals/object-create.js\");\n\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ \"./node_modules/core-js-pure/internals/create-property-descriptor.js\");\n\nvar setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ \"./node_modules/core-js-pure/internals/set-to-string-tag.js\");\n\nvar Iterators = __webpack_require__(/*! ../internals/iterators */ \"./node_modules/core-js-pure/internals/iterators.js\");\n\nvar returnThis = function () {\n  return this;\n};\n\nmodule.exports = function (IteratorConstructor, NAME, next) {\n  var TO_STRING_TAG = NAME + ' Iterator';\n  IteratorConstructor.prototype = create(IteratorPrototype, {\n    next: createPropertyDescriptor(1, next)\n  });\n  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);\n  Iterators[TO_STRING_TAG] = returnThis;\n  return IteratorConstructor;\n};\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/internals/create-iterator-constructor.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/create-non-enumerable-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/create-non-enumerable-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js-pure/internals/descriptors.js\");\n\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js-pure/internals/object-define-property.js\");\n\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ \"./node_modules/core-js-pure/internals/create-property-descriptor.js\");\n\nmodule.exports = DESCRIPTORS ? function (object, key, value) {\n  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));\n} : function (object, key, value) {\n  object[key] = value;\n  return object;\n};\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/internals/create-non-enumerable-property.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/create-property-descriptor.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/create-property-descriptor.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (bitmap, value) {\n  return {\n    enumerable: !(bitmap & 1),\n    configurable: !(bitmap & 2),\n    writable: !(bitmap & 4),\n    value: value\n  };\n};\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/internals/create-property-descriptor.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/create-property.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/create-property.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ \"./node_modules/core-js-pure/internals/to-primitive.js\");\n\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js-pure/internals/object-define-property.js\");\n\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ \"./node_modules/core-js-pure/internals/create-property-descriptor.js\");\n\nmodule.exports = function (object, key, value) {\n  var propertyKey = toPrimitive(key);\n  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));else object[propertyKey] = value;\n};\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/internals/create-property.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/define-iterator.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/define-iterator.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js-pure/internals/export.js\");\n\nvar createIteratorConstructor = __webpack_require__(/*! ../internals/create-iterator-constructor */ \"./node_modules/core-js-pure/internals/create-iterator-constructor.js\");\n\nvar getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ \"./node_modules/core-js-pure/internals/object-get-prototype-of.js\");\n\nvar setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ \"./node_modules/core-js-pure/internals/object-set-prototype-of.js\");\n\nvar setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ \"./node_modules/core-js-pure/internals/set-to-string-tag.js\");\n\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/core-js-pure/internals/create-non-enumerable-property.js\");\n\nvar redefine = __webpack_require__(/*! ../internals/redefine */ \"./node_modules/core-js-pure/internals/redefine.js\");\n\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js-pure/internals/well-known-symbol.js\");\n\nvar IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"./node_modules/core-js-pure/internals/is-pure.js\");\n\nvar Iterators = __webpack_require__(/*! ../internals/iterators */ \"./node_modules/core-js-pure/internals/iterators.js\");\n\nvar IteratorsCore = __webpack_require__(/*! ../internals/iterators-core */ \"./node_modules/core-js-pure/internals/iterators-core.js\");\n\nvar IteratorPrototype = IteratorsCore.IteratorPrototype;\nvar BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;\nvar ITERATOR = wellKnownSymbol('iterator');\nvar KEYS = 'keys';\nvar VALUES = 'values';\nvar ENTRIES = 'entries';\n\nvar returnThis = function () {\n  return this;\n};\n\nmodule.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {\n  createIteratorConstructor(IteratorConstructor, NAME, next);\n\n  var getIterationMethod = function (KIND) {\n    if (KIND === DEFAULT && defaultIterator) return defaultIterator;\n    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];\n\n    switch (KIND) {\n      case KEYS:\n        return function keys() {\n          return new IteratorConstructor(this, KIND);\n        };\n\n      case VALUES:\n        return function values() {\n          return new IteratorConstructor(this, KIND);\n        };\n\n      case ENTRIES:\n        return function entries() {\n          return new IteratorConstructor(this, KIND);\n        };\n    }\n\n    return function () {\n      return new IteratorConstructor(this);\n    };\n  };\n\n  var TO_STRING_TAG = NAME + ' Iterator';\n  var INCORRECT_VALUES_NAME = false;\n  var IterablePrototype = Iterable.prototype;\n  var nativeIterator = IterablePrototype[ITERATOR] || IterablePrototype['@@iterator'] || DEFAULT && IterablePrototype[DEFAULT];\n  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);\n  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;\n  var CurrentIteratorPrototype, methods, KEY; // fix native\n\n  if (anyNativeIterator) {\n    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));\n\n    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {\n      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {\n        if (setPrototypeOf) {\n          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);\n        } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {\n          createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);\n        }\n      } // Set @@toStringTag to native iterators\n\n\n      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);\n      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;\n    }\n  } // fix Array#{values, @@iterator}.name in V8 / FF\n\n\n  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {\n    INCORRECT_VALUES_NAME = true;\n\n    defaultIterator = function values() {\n      return nativeIterator.call(this);\n    };\n  } // define iterator\n\n\n  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {\n    createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);\n  }\n\n  Iterators[NAME] = defaultIterator; // export additional methods\n\n  if (DEFAULT) {\n    methods = {\n      values: getIterationMethod(VALUES),\n      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),\n      entries: getIterationMethod(ENTRIES)\n    };\n    if (FORCED) for (KEY in methods) {\n      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {\n        redefine(IterablePrototype, KEY, methods[KEY]);\n      }\n    } else $({\n      target: NAME,\n      proto: true,\n      forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME\n    }, methods);\n  }\n\n  return methods;\n};\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/internals/define-iterator.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/define-well-known-symbol.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/define-well-known-symbol.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var path = __webpack_require__(/*! ../internals/path */ \"./node_modules/core-js-pure/internals/path.js\");\n\nvar has = __webpack_require__(/*! ../internals/has */ \"./node_modules/core-js-pure/internals/has.js\");\n\nvar wrappedWellKnownSymbolModule = __webpack_require__(/*! ../internals/well-known-symbol-wrapped */ \"./node_modules/core-js-pure/internals/well-known-symbol-wrapped.js\");\n\nvar defineProperty = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js-pure/internals/object-define-property.js\").f;\n\nmodule.exports = function (NAME) {\n  var Symbol = path.Symbol || (path.Symbol = {});\n  if (!has(Symbol, NAME)) defineProperty(Symbol, NAME, {\n    value: wrappedWellKnownSymbolModule.f(NAME)\n  });\n};\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/internals/define-well-known-symbol.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/descriptors.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/descriptors.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js-pure/internals/fails.js\"); // Thank's IE8 for his funny defineProperty\n\n\nmodule.exports = !fails(function () {\n  return Object.defineProperty({}, 1, {\n    get: function () {\n      return 7;\n    }\n  })[1] != 7;\n});\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/internals/descriptors.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/document-create-element.js":
/*!************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/document-create-element.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js-pure/internals/global.js\");\n\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js-pure/internals/is-object.js\");\n\nvar document = global.document; // typeof document.createElement is 'object' in old IE\n\nvar EXISTS = isObject(document) && isObject(document.createElement);\n\nmodule.exports = function (it) {\n  return EXISTS ? document.createElement(it) : {};\n};\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/internals/document-create-element.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/dom-iterables.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/dom-iterables.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// iterable DOM collections\n// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods\nmodule.exports = {\n  CSSRuleList: 0,\n  CSSStyleDeclaration: 0,\n  CSSValueList: 0,\n  ClientRectList: 0,\n  DOMRectList: 0,\n  DOMStringList: 0,\n  DOMTokenList: 1,\n  DataTransferItemList: 0,\n  FileList: 0,\n  HTMLAllCollection: 0,\n  HTMLCollection: 0,\n  HTMLFormElement: 0,\n  HTMLSelectElement: 0,\n  MediaList: 0,\n  MimeTypeArray: 0,\n  NamedNodeMap: 0,\n  NodeList: 1,\n  PaintRequestList: 0,\n  Plugin: 0,\n  PluginArray: 0,\n  SVGLengthList: 0,\n  SVGNumberList: 0,\n  SVGPathSegList: 0,\n  SVGPointList: 0,\n  SVGStringList: 0,\n  SVGTransformList: 0,\n  SourceBufferList: 0,\n  StyleSheetList: 0,\n  TextTrackCueList: 0,\n  TextTrackList: 0,\n  TouchList: 0\n};\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/internals/dom-iterables.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/engine-user-agent.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/engine-user-agent.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"./node_modules/core-js-pure/internals/get-built-in.js\");\n\nmodule.exports = getBuiltIn('navigator', 'userAgent') || '';\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/internals/engine-user-agent.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/engine-v8-version.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/engine-v8-version.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js-pure/internals/global.js\");\n\nvar userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ \"./node_modules/core-js-pure/internals/engine-user-agent.js\");\n\nvar process = global.process;\nvar versions = process && process.versions;\nvar v8 = versions && versions.v8;\nvar match, version;\n\nif (v8) {\n  match = v8.split('.');\n  version = match[0] + match[1];\n} else if (userAgent) {\n  match = userAgent.match(/Edge\\/(\\d+)/);\n\n  if (!match || match[1] >= 74) {\n    match = userAgent.match(/Chrome\\/(\\d+)/);\n    if (match) version = match[1];\n  }\n}\n\nmodule.exports = version && +version;\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/internals/engine-v8-version.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/entry-virtual.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/entry-virtual.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var path = __webpack_require__(/*! ../internals/path */ \"./node_modules/core-js-pure/internals/path.js\");\n\nmodule.exports = function (CONSTRUCTOR) {\n  return path[CONSTRUCTOR + 'Prototype'];\n};\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/internals/entry-virtual.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/enum-bug-keys.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/enum-bug-keys.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// IE8- don't enum bug keys\nmodule.exports = ['constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf'];\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/internals/enum-bug-keys.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/export.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js-pure/internals/export.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js-pure/internals/global.js\");\n\nvar getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ \"./node_modules/core-js-pure/internals/object-get-own-property-descriptor.js\").f;\n\nvar isForced = __webpack_require__(/*! ../internals/is-forced */ \"./node_modules/core-js-pure/internals/is-forced.js\");\n\nvar path = __webpack_require__(/*! ../internals/path */ \"./node_modules/core-js-pure/internals/path.js\");\n\nvar bind = __webpack_require__(/*! ../internals/function-bind-context */ \"./node_modules/core-js-pure/internals/function-bind-context.js\");\n\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/core-js-pure/internals/create-non-enumerable-property.js\");\n\nvar has = __webpack_require__(/*! ../internals/has */ \"./node_modules/core-js-pure/internals/has.js\");\n\nvar wrapConstructor = function (NativeConstructor) {\n  var Wrapper = function (a, b, c) {\n    if (this instanceof NativeConstructor) {\n      switch (arguments.length) {\n        case 0:\n          return new NativeConstructor();\n\n        case 1:\n          return new NativeConstructor(a);\n\n        case 2:\n          return new NativeConstructor(a, b);\n      }\n\n      return new NativeConstructor(a, b, c);\n    }\n\n    return NativeConstructor.apply(this, arguments);\n  };\n\n  Wrapper.prototype = NativeConstructor.prototype;\n  return Wrapper;\n};\n/*\n  options.target      - name of the target object\n  options.global      - target is the global object\n  options.stat        - export as static methods of target\n  options.proto       - export as prototype methods of target\n  options.real        - real prototype method for the `pure` version\n  options.forced      - export even if the native feature is available\n  options.bind        - bind methods to the target, required for the `pure` version\n  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version\n  options.unsafe      - use the simple assignment of property instead of delete + defineProperty\n  options.sham        - add a flag to not completely full polyfills\n  options.enumerable  - export as enumerable property\n  options.noTargetGet - prevent calling a getter on target\n*/\n\n\nmodule.exports = function (options, source) {\n  var TARGET = options.target;\n  var GLOBAL = options.global;\n  var STATIC = options.stat;\n  var PROTO = options.proto;\n  var nativeSource = GLOBAL ? global : STATIC ? global[TARGET] : (global[TARGET] || {}).prototype;\n  var target = GLOBAL ? path : path[TARGET] || (path[TARGET] = {});\n  var targetPrototype = target.prototype;\n  var FORCED, USE_NATIVE, VIRTUAL_PROTOTYPE;\n  var key, sourceProperty, targetProperty, nativeProperty, resultProperty, descriptor;\n\n  for (key in source) {\n    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced); // contains in native\n\n    USE_NATIVE = !FORCED && nativeSource && has(nativeSource, key);\n    targetProperty = target[key];\n    if (USE_NATIVE) if (options.noTargetGet) {\n      descriptor = getOwnPropertyDescriptor(nativeSource, key);\n      nativeProperty = descriptor && descriptor.value;\n    } else nativeProperty = nativeSource[key]; // export native or implementation\n\n    sourceProperty = USE_NATIVE && nativeProperty ? nativeProperty : source[key];\n    if (USE_NATIVE && typeof targetProperty === typeof sourceProperty) continue; // bind timers to global for call from export context\n\n    if (options.bind && USE_NATIVE) resultProperty = bind(sourceProperty, global); // wrap global constructors for prevent changs in this version\n    else if (options.wrap && USE_NATIVE) resultProperty = wrapConstructor(sourceProperty); // make static versions for prototype methods\n      else if (PROTO && typeof sourceProperty == 'function') resultProperty = bind(Function.call, sourceProperty); // default case\n        else resultProperty = sourceProperty; // add a flag to not completely full polyfills\n\n    if (options.sham || sourceProperty && sourceProperty.sham || targetProperty && targetProperty.sham) {\n      createNonEnumerableProperty(resultProperty, 'sham', true);\n    }\n\n    target[key] = resultProperty;\n\n    if (PROTO) {\n      VIRTUAL_PROTOTYPE = TARGET + 'Prototype';\n\n      if (!has(path, VIRTUAL_PROTOTYPE)) {\n        createNonEnumerableProperty(path, VIRTUAL_PROTOTYPE, {});\n      } // export virtual prototype methods\n\n\n      path[VIRTUAL_PROTOTYPE][key] = sourceProperty; // export real prototype methods\n\n      if (options.real && targetPrototype && !targetPrototype[key]) {\n        createNonEnumerableProperty(targetPrototype, key, sourceProperty);\n      }\n    }\n  }\n};\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/internals/export.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/fails.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js-pure/internals/fails.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (exec) {\n  try {\n    return !!exec();\n  } catch (error) {\n    return true;\n  }\n};\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/internals/fails.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/function-bind-context.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/function-bind-context.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var aFunction = __webpack_require__(/*! ../internals/a-function */ \"./node_modules/core-js-pure/internals/a-function.js\"); // optional / simple context binding\n\n\nmodule.exports = function (fn, that, length) {\n  aFunction(fn);\n  if (that === undefined) return fn;\n\n  switch (length) {\n    case 0:\n      return function () {\n        return fn.call(that);\n      };\n\n    case 1:\n      return function (a) {\n        return fn.call(that, a);\n      };\n\n    case 2:\n      return function (a, b) {\n        return fn.call(that, a, b);\n      };\n\n    case 3:\n      return function (a, b, c) {\n        return fn.call(that, a, b, c);\n      };\n  }\n\n  return function ()\n  /* ...args */\n  {\n    return fn.apply(that, arguments);\n  };\n};\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/internals/function-bind-context.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/get-built-in.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/get-built-in.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var path = __webpack_require__(/*! ../internals/path */ \"./node_modules/core-js-pure/internals/path.js\");\n\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js-pure/internals/global.js\");\n\nvar aFunction = function (variable) {\n  return typeof variable == 'function' ? variable : undefined;\n};\n\nmodule.exports = function (namespace, method) {\n  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace]) : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];\n};\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/internals/get-built-in.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/get-iterator-method.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/get-iterator-method.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var classof = __webpack_require__(/*! ../internals/classof */ \"./node_modules/core-js-pure/internals/classof.js\");\n\nvar Iterators = __webpack_require__(/*! ../internals/iterators */ \"./node_modules/core-js-pure/internals/iterators.js\");\n\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js-pure/internals/well-known-symbol.js\");\n\nvar ITERATOR = wellKnownSymbol('iterator');\n\nmodule.exports = function (it) {\n  if (it != undefined) return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];\n};\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/internals/get-iterator-method.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/get-iterator.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/get-iterator.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js-pure/internals/an-object.js\");\n\nvar getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ \"./node_modules/core-js-pure/internals/get-iterator-method.js\");\n\nmodule.exports = function (it) {\n  var iteratorMethod = getIteratorMethod(it);\n\n  if (typeof iteratorMethod != 'function') {\n    throw TypeError(String(it) + ' is not iterable');\n  }\n\n  return anObject(iteratorMethod.call(it));\n};\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/internals/get-iterator.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/global.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js-pure/internals/global.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var check = function (it) {\n  return it && it.Math == Math && it;\n}; // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028\n\n\nmodule.exports = // eslint-disable-next-line no-undef\ncheck(typeof globalThis == 'object' && globalThis) || check(typeof window == 'object' && window) || check(typeof self == 'object' && self) || check(typeof global == 'object' && global) || // eslint-disable-next-line no-new-func\nFunction('return this')();\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/internals/global.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/has.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js-pure/internals/has.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var hasOwnProperty = {}.hasOwnProperty;\n\nmodule.exports = function (it, key) {\n  return hasOwnProperty.call(it, key);\n};\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/internals/has.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/hidden-keys.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/hidden-keys.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {};\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/internals/hidden-keys.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/html.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js-pure/internals/html.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"./node_modules/core-js-pure/internals/get-built-in.js\");\n\nmodule.exports = getBuiltIn('document', 'documentElement');\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/internals/html.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/ie8-dom-define.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/ie8-dom-define.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js-pure/internals/descriptors.js\");\n\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js-pure/internals/fails.js\");\n\nvar createElement = __webpack_require__(/*! ../internals/document-create-element */ \"./node_modules/core-js-pure/internals/document-create-element.js\"); // Thank's IE8 for his funny defineProperty\n\n\nmodule.exports = !DESCRIPTORS && !fails(function () {\n  return Object.defineProperty(createElement('div'), 'a', {\n    get: function () {\n      return 7;\n    }\n  }).a != 7;\n});\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/internals/ie8-dom-define.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/indexed-object.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/indexed-object.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js-pure/internals/fails.js\");\n\nvar classof = __webpack_require__(/*! ../internals/classof-raw */ \"./node_modules/core-js-pure/internals/classof-raw.js\");\n\nvar split = ''.split; // fallback for non-array-like ES3 and non-enumerable old V8 strings\n\nmodule.exports = fails(function () {\n  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346\n  // eslint-disable-next-line no-prototype-builtins\n  return !Object('z').propertyIsEnumerable(0);\n}) ? function (it) {\n  return classof(it) == 'String' ? split.call(it, '') : Object(it);\n} : Object;\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/internals/indexed-object.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/inspect-source.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/inspect-source.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var store = __webpack_require__(/*! ../internals/shared-store */ \"./node_modules/core-js-pure/internals/shared-store.js\");\n\nvar functionToString = Function.toString; // this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper\n\nif (typeof store.inspectSource != 'function') {\n  store.inspectSource = function (it) {\n    return functionToString.call(it);\n  };\n}\n\nmodule.exports = store.inspectSource;\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/internals/inspect-source.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/internal-state.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/internal-state.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var NATIVE_WEAK_MAP = __webpack_require__(/*! ../internals/native-weak-map */ \"./node_modules/core-js-pure/internals/native-weak-map.js\");\n\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js-pure/internals/global.js\");\n\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js-pure/internals/is-object.js\");\n\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/core-js-pure/internals/create-non-enumerable-property.js\");\n\nvar objectHas = __webpack_require__(/*! ../internals/has */ \"./node_modules/core-js-pure/internals/has.js\");\n\nvar sharedKey = __webpack_require__(/*! ../internals/shared-key */ \"./node_modules/core-js-pure/internals/shared-key.js\");\n\nvar hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ \"./node_modules/core-js-pure/internals/hidden-keys.js\");\n\nvar WeakMap = global.WeakMap;\nvar set, get, has;\n\nvar enforce = function (it) {\n  return has(it) ? get(it) : set(it, {});\n};\n\nvar getterFor = function (TYPE) {\n  return function (it) {\n    var state;\n\n    if (!isObject(it) || (state = get(it)).type !== TYPE) {\n      throw TypeError('Incompatible receiver, ' + TYPE + ' required');\n    }\n\n    return state;\n  };\n};\n\nif (NATIVE_WEAK_MAP) {\n  var store = new WeakMap();\n  var wmget = store.get;\n  var wmhas = store.has;\n  var wmset = store.set;\n\n  set = function (it, metadata) {\n    wmset.call(store, it, metadata);\n    return metadata;\n  };\n\n  get = function (it) {\n    return wmget.call(store, it) || {};\n  };\n\n  has = function (it) {\n    return wmhas.call(store, it);\n  };\n} else {\n  var STATE = sharedKey('state');\n  hiddenKeys[STATE] = true;\n\n  set = function (it, metadata) {\n    createNonEnumerableProperty(it, STATE, metadata);\n    return metadata;\n  };\n\n  get = function (it) {\n    return objectHas(it, STATE) ? it[STATE] : {};\n  };\n\n  has = function (it) {\n    return objectHas(it, STATE);\n  };\n}\n\nmodule.exports = {\n  set: set,\n  get: get,\n  has: has,\n  enforce: enforce,\n  getterFor: getterFor\n};\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/internals/internal-state.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/is-array-iterator-method.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/is-array-iterator-method.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js-pure/internals/well-known-symbol.js\");\n\nvar Iterators = __webpack_require__(/*! ../internals/iterators */ \"./node_modules/core-js-pure/internals/iterators.js\");\n\nvar ITERATOR = wellKnownSymbol('iterator');\nvar ArrayPrototype = Array.prototype; // check on default Array iterator\n\nmodule.exports = function (it) {\n  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);\n};\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/internals/is-array-iterator-method.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/is-array.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/is-array.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var classof = __webpack_require__(/*! ../internals/classof-raw */ \"./node_modules/core-js-pure/internals/classof-raw.js\"); // `IsArray` abstract operation\n// https://tc39.github.io/ecma262/#sec-isarray\n\n\nmodule.exports = Array.isArray || function isArray(arg) {\n  return classof(arg) == 'Array';\n};\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/internals/is-array.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/is-forced.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/is-forced.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js-pure/internals/fails.js\");\n\nvar replacement = /#|\\.prototype\\./;\n\nvar isForced = function (feature, detection) {\n  var value = data[normalize(feature)];\n  return value == POLYFILL ? true : value == NATIVE ? false : typeof detection == 'function' ? fails(detection) : !!detection;\n};\n\nvar normalize = isForced.normalize = function (string) {\n  return String(string).replace(replacement, '.').toLowerCase();\n};\n\nvar data = isForced.data = {};\nvar NATIVE = isForced.NATIVE = 'N';\nvar POLYFILL = isForced.POLYFILL = 'P';\nmodule.exports = isForced;\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/internals/is-forced.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/is-iterable.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/is-iterable.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var classof = __webpack_require__(/*! ../internals/classof */ \"./node_modules/core-js-pure/internals/classof.js\");\n\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js-pure/internals/well-known-symbol.js\");\n\nvar Iterators = __webpack_require__(/*! ../internals/iterators */ \"./node_modules/core-js-pure/internals/iterators.js\");\n\nvar ITERATOR = wellKnownSymbol('iterator');\n\nmodule.exports = function (it) {\n  var O = Object(it);\n  return O[ITERATOR] !== undefined || '@@iterator' in O // eslint-disable-next-line no-prototype-builtins\n  || Iterators.hasOwnProperty(classof(O));\n};\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/internals/is-iterable.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/is-object.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/is-object.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (it) {\n  return typeof it === 'object' ? it !== null : typeof it === 'function';\n};\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/internals/is-object.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/is-pure.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/is-pure.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = true;\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/internals/is-pure.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/iterators-core.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/iterators-core.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ \"./node_modules/core-js-pure/internals/object-get-prototype-of.js\");\n\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/core-js-pure/internals/create-non-enumerable-property.js\");\n\nvar has = __webpack_require__(/*! ../internals/has */ \"./node_modules/core-js-pure/internals/has.js\");\n\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js-pure/internals/well-known-symbol.js\");\n\nvar IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"./node_modules/core-js-pure/internals/is-pure.js\");\n\nvar ITERATOR = wellKnownSymbol('iterator');\nvar BUGGY_SAFARI_ITERATORS = false;\n\nvar returnThis = function () {\n  return this;\n}; // `%IteratorPrototype%` object\n// https://tc39.github.io/ecma262/#sec-%iteratorprototype%-object\n\n\nvar IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;\n\nif ([].keys) {\n  arrayIterator = [].keys(); // Safari 8 has buggy iterators w/o `next`\n\n  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;else {\n    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));\n    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;\n  }\n}\n\nif (IteratorPrototype == undefined) IteratorPrototype = {}; // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()\n\nif (!IS_PURE && !has(IteratorPrototype, ITERATOR)) {\n  createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);\n}\n\nmodule.exports = {\n  IteratorPrototype: IteratorPrototype,\n  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS\n};\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/internals/iterators-core.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/iterators.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/iterators.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {};\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/internals/iterators.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/native-symbol.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/native-symbol.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js-pure/internals/fails.js\");\n\nmodule.exports = !!Object.getOwnPropertySymbols && !fails(function () {\n  // Chrome 38 Symbol has incorrect toString conversion\n  // eslint-disable-next-line no-undef\n  return !String(Symbol());\n});\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/internals/native-symbol.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/native-weak-map.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/native-weak-map.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js-pure/internals/global.js\");\n\nvar inspectSource = __webpack_require__(/*! ../internals/inspect-source */ \"./node_modules/core-js-pure/internals/inspect-source.js\");\n\nvar WeakMap = global.WeakMap;\nmodule.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/internals/native-weak-map.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/object-create.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-create.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js-pure/internals/an-object.js\");\n\nvar defineProperties = __webpack_require__(/*! ../internals/object-define-properties */ \"./node_modules/core-js-pure/internals/object-define-properties.js\");\n\nvar enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ \"./node_modules/core-js-pure/internals/enum-bug-keys.js\");\n\nvar hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ \"./node_modules/core-js-pure/internals/hidden-keys.js\");\n\nvar html = __webpack_require__(/*! ../internals/html */ \"./node_modules/core-js-pure/internals/html.js\");\n\nvar documentCreateElement = __webpack_require__(/*! ../internals/document-create-element */ \"./node_modules/core-js-pure/internals/document-create-element.js\");\n\nvar sharedKey = __webpack_require__(/*! ../internals/shared-key */ \"./node_modules/core-js-pure/internals/shared-key.js\");\n\nvar GT = '>';\nvar LT = '<';\nvar PROTOTYPE = 'prototype';\nvar SCRIPT = 'script';\nvar IE_PROTO = sharedKey('IE_PROTO');\n\nvar EmptyConstructor = function () {\n  /* empty */\n};\n\nvar scriptTag = function (content) {\n  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;\n}; // Create object with fake `null` prototype: use ActiveX Object with cleared prototype\n\n\nvar NullProtoObjectViaActiveX = function (activeXDocument) {\n  activeXDocument.write(scriptTag(''));\n  activeXDocument.close();\n  var temp = activeXDocument.parentWindow.Object;\n  activeXDocument = null; // avoid memory leak\n\n  return temp;\n}; // Create object with fake `null` prototype: use iframe Object with cleared prototype\n\n\nvar NullProtoObjectViaIFrame = function () {\n  // Thrash, waste and sodomy: IE GC bug\n  var iframe = documentCreateElement('iframe');\n  var JS = 'java' + SCRIPT + ':';\n  var iframeDocument;\n  iframe.style.display = 'none';\n  html.appendChild(iframe); // https://github.com/zloirock/core-js/issues/475\n\n  iframe.src = String(JS);\n  iframeDocument = iframe.contentWindow.document;\n  iframeDocument.open();\n  iframeDocument.write(scriptTag('document.F=Object'));\n  iframeDocument.close();\n  return iframeDocument.F;\n}; // Check for document.domain and active x support\n// No need to use active x approach when document.domain is not set\n// see https://github.com/es-shims/es5-shim/issues/150\n// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346\n// avoid IE GC bug\n\n\nvar activeXDocument;\n\nvar NullProtoObject = function () {\n  try {\n    /* global ActiveXObject */\n    activeXDocument = document.domain && new ActiveXObject('htmlfile');\n  } catch (error) {\n    /* ignore */\n  }\n\n  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();\n  var length = enumBugKeys.length;\n\n  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];\n\n  return NullProtoObject();\n};\n\nhiddenKeys[IE_PROTO] = true; // `Object.create` method\n// https://tc39.github.io/ecma262/#sec-object.create\n\nmodule.exports = Object.create || function create(O, Properties) {\n  var result;\n\n  if (O !== null) {\n    EmptyConstructor[PROTOTYPE] = anObject(O);\n    result = new EmptyConstructor();\n    EmptyConstructor[PROTOTYPE] = null; // add \"__proto__\" for Object.getPrototypeOf polyfill\n\n    result[IE_PROTO] = O;\n  } else result = NullProtoObject();\n\n  return Properties === undefined ? result : defineProperties(result, Properties);\n};\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/internals/object-create.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/object-define-properties.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-define-properties.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js-pure/internals/descriptors.js\");\n\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js-pure/internals/object-define-property.js\");\n\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js-pure/internals/an-object.js\");\n\nvar objectKeys = __webpack_require__(/*! ../internals/object-keys */ \"./node_modules/core-js-pure/internals/object-keys.js\"); // `Object.defineProperties` method\n// https://tc39.github.io/ecma262/#sec-object.defineproperties\n\n\nmodule.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {\n  anObject(O);\n  var keys = objectKeys(Properties);\n  var length = keys.length;\n  var index = 0;\n  var key;\n\n  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);\n\n  return O;\n};\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/internals/object-define-properties.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/object-define-property.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-define-property.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js-pure/internals/descriptors.js\");\n\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ \"./node_modules/core-js-pure/internals/ie8-dom-define.js\");\n\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js-pure/internals/an-object.js\");\n\nvar toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ \"./node_modules/core-js-pure/internals/to-primitive.js\");\n\nvar nativeDefineProperty = Object.defineProperty; // `Object.defineProperty` method\n// https://tc39.github.io/ecma262/#sec-object.defineproperty\n\nexports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {\n  anObject(O);\n  P = toPrimitive(P, true);\n  anObject(Attributes);\n  if (IE8_DOM_DEFINE) try {\n    return nativeDefineProperty(O, P, Attributes);\n  } catch (error) {\n    /* empty */\n  }\n  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');\n  if ('value' in Attributes) O[P] = Attributes.value;\n  return O;\n};\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/internals/object-define-property.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/object-get-own-property-descriptor.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-get-own-property-descriptor.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js-pure/internals/descriptors.js\");\n\nvar propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ \"./node_modules/core-js-pure/internals/object-property-is-enumerable.js\");\n\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ \"./node_modules/core-js-pure/internals/create-property-descriptor.js\");\n\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/core-js-pure/internals/to-indexed-object.js\");\n\nvar toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ \"./node_modules/core-js-pure/internals/to-primitive.js\");\n\nvar has = __webpack_require__(/*! ../internals/has */ \"./node_modules/core-js-pure/internals/has.js\");\n\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ \"./node_modules/core-js-pure/internals/ie8-dom-define.js\");\n\nvar nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor; // `Object.getOwnPropertyDescriptor` method\n// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor\n\nexports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {\n  O = toIndexedObject(O);\n  P = toPrimitive(P, true);\n  if (IE8_DOM_DEFINE) try {\n    return nativeGetOwnPropertyDescriptor(O, P);\n  } catch (error) {\n    /* empty */\n  }\n  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);\n};\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/internals/object-get-own-property-descriptor.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/object-get-own-property-names-external.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-get-own-property-names-external.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/core-js-pure/internals/to-indexed-object.js\");\n\nvar nativeGetOwnPropertyNames = __webpack_require__(/*! ../internals/object-get-own-property-names */ \"./node_modules/core-js-pure/internals/object-get-own-property-names.js\").f;\n\nvar toString = {}.toString;\nvar windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];\n\nvar getWindowNames = function (it) {\n  try {\n    return nativeGetOwnPropertyNames(it);\n  } catch (error) {\n    return windowNames.slice();\n  }\n}; // fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window\n\n\nmodule.exports.f = function getOwnPropertyNames(it) {\n  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : nativeGetOwnPropertyNames(toIndexedObject(it));\n};\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/internals/object-get-own-property-names-external.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/object-get-own-property-names.js":
/*!******************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-get-own-property-names.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ \"./node_modules/core-js-pure/internals/object-keys-internal.js\");\n\nvar enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ \"./node_modules/core-js-pure/internals/enum-bug-keys.js\");\n\nvar hiddenKeys = enumBugKeys.concat('length', 'prototype'); // `Object.getOwnPropertyNames` method\n// https://tc39.github.io/ecma262/#sec-object.getownpropertynames\n\nexports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {\n  return internalObjectKeys(O, hiddenKeys);\n};\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/internals/object-get-own-property-names.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/object-get-own-property-symbols.js":
/*!********************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-get-own-property-symbols.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("exports.f = Object.getOwnPropertySymbols;\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/internals/object-get-own-property-symbols.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/object-get-prototype-of.js":
/*!************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-get-prototype-of.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var has = __webpack_require__(/*! ../internals/has */ \"./node_modules/core-js-pure/internals/has.js\");\n\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"./node_modules/core-js-pure/internals/to-object.js\");\n\nvar sharedKey = __webpack_require__(/*! ../internals/shared-key */ \"./node_modules/core-js-pure/internals/shared-key.js\");\n\nvar CORRECT_PROTOTYPE_GETTER = __webpack_require__(/*! ../internals/correct-prototype-getter */ \"./node_modules/core-js-pure/internals/correct-prototype-getter.js\");\n\nvar IE_PROTO = sharedKey('IE_PROTO');\nvar ObjectPrototype = Object.prototype; // `Object.getPrototypeOf` method\n// https://tc39.github.io/ecma262/#sec-object.getprototypeof\n\nmodule.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {\n  O = toObject(O);\n  if (has(O, IE_PROTO)) return O[IE_PROTO];\n\n  if (typeof O.constructor == 'function' && O instanceof O.constructor) {\n    return O.constructor.prototype;\n  }\n\n  return O instanceof Object ? ObjectPrototype : null;\n};\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/internals/object-get-prototype-of.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/object-keys-internal.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-keys-internal.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var has = __webpack_require__(/*! ../internals/has */ \"./node_modules/core-js-pure/internals/has.js\");\n\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/core-js-pure/internals/to-indexed-object.js\");\n\nvar indexOf = __webpack_require__(/*! ../internals/array-includes */ \"./node_modules/core-js-pure/internals/array-includes.js\").indexOf;\n\nvar hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ \"./node_modules/core-js-pure/internals/hidden-keys.js\");\n\nmodule.exports = function (object, names) {\n  var O = toIndexedObject(object);\n  var i = 0;\n  var result = [];\n  var key;\n\n  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key); // Don't enum bug & hidden keys\n\n\n  while (names.length > i) if (has(O, key = names[i++])) {\n    ~indexOf(result, key) || result.push(key);\n  }\n\n  return result;\n};\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/internals/object-keys-internal.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/object-keys.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-keys.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ \"./node_modules/core-js-pure/internals/object-keys-internal.js\");\n\nvar enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ \"./node_modules/core-js-pure/internals/enum-bug-keys.js\"); // `Object.keys` method\n// https://tc39.github.io/ecma262/#sec-object.keys\n\n\nmodule.exports = Object.keys || function keys(O) {\n  return internalObjectKeys(O, enumBugKeys);\n};\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/internals/object-keys.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/object-property-is-enumerable.js":
/*!******************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-property-is-enumerable.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar nativePropertyIsEnumerable = {}.propertyIsEnumerable;\nvar getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor; // Nashorn ~ JDK8 bug\n\nvar NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({\n  1: 2\n}, 1); // `Object.prototype.propertyIsEnumerable` method implementation\n// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable\n\nexports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {\n  var descriptor = getOwnPropertyDescriptor(this, V);\n  return !!descriptor && descriptor.enumerable;\n} : nativePropertyIsEnumerable;\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/internals/object-property-is-enumerable.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/object-set-prototype-of.js":
/*!************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-set-prototype-of.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js-pure/internals/an-object.js\");\n\nvar aPossiblePrototype = __webpack_require__(/*! ../internals/a-possible-prototype */ \"./node_modules/core-js-pure/internals/a-possible-prototype.js\"); // `Object.setPrototypeOf` method\n// https://tc39.github.io/ecma262/#sec-object.setprototypeof\n// Works with __proto__ only. Old v8 can't work with null proto objects.\n\n/* eslint-disable no-proto */\n\n\nmodule.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {\n  var CORRECT_SETTER = false;\n  var test = {};\n  var setter;\n\n  try {\n    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;\n    setter.call(test, []);\n    CORRECT_SETTER = test instanceof Array;\n  } catch (error) {\n    /* empty */\n  }\n\n  return function setPrototypeOf(O, proto) {\n    anObject(O);\n    aPossiblePrototype(proto);\n    if (CORRECT_SETTER) setter.call(O, proto);else O.__proto__ = proto;\n    return O;\n  };\n}() : undefined);\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/internals/object-set-prototype-of.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/object-to-string.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-to-string.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ \"./node_modules/core-js-pure/internals/to-string-tag-support.js\");\n\nvar classof = __webpack_require__(/*! ../internals/classof */ \"./node_modules/core-js-pure/internals/classof.js\"); // `Object.prototype.toString` method implementation\n// https://tc39.github.io/ecma262/#sec-object.prototype.tostring\n\n\nmodule.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {\n  return '[object ' + classof(this) + ']';\n};\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/internals/object-to-string.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/path.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js-pure/internals/path.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {};\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/internals/path.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/redefine.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/redefine.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/core-js-pure/internals/create-non-enumerable-property.js\");\n\nmodule.exports = function (target, key, value, options) {\n  if (options && options.enumerable) target[key] = value;else createNonEnumerableProperty(target, key, value);\n};\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/internals/redefine.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/require-object-coercible.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/require-object-coercible.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// `RequireObjectCoercible` abstract operation\n// https://tc39.github.io/ecma262/#sec-requireobjectcoercible\nmodule.exports = function (it) {\n  if (it == undefined) throw TypeError(\"Can't call method on \" + it);\n  return it;\n};\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/internals/require-object-coercible.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/set-global.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/set-global.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js-pure/internals/global.js\");\n\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/core-js-pure/internals/create-non-enumerable-property.js\");\n\nmodule.exports = function (key, value) {\n  try {\n    createNonEnumerableProperty(global, key, value);\n  } catch (error) {\n    global[key] = value;\n  }\n\n  return value;\n};\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/internals/set-global.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/set-to-string-tag.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/set-to-string-tag.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ \"./node_modules/core-js-pure/internals/to-string-tag-support.js\");\n\nvar defineProperty = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js-pure/internals/object-define-property.js\").f;\n\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/core-js-pure/internals/create-non-enumerable-property.js\");\n\nvar has = __webpack_require__(/*! ../internals/has */ \"./node_modules/core-js-pure/internals/has.js\");\n\nvar toString = __webpack_require__(/*! ../internals/object-to-string */ \"./node_modules/core-js-pure/internals/object-to-string.js\");\n\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js-pure/internals/well-known-symbol.js\");\n\nvar TO_STRING_TAG = wellKnownSymbol('toStringTag');\n\nmodule.exports = function (it, TAG, STATIC, SET_METHOD) {\n  if (it) {\n    var target = STATIC ? it : it.prototype;\n\n    if (!has(target, TO_STRING_TAG)) {\n      defineProperty(target, TO_STRING_TAG, {\n        configurable: true,\n        value: TAG\n      });\n    }\n\n    if (SET_METHOD && !TO_STRING_TAG_SUPPORT) {\n      createNonEnumerableProperty(target, 'toString', toString);\n    }\n  }\n};\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/internals/set-to-string-tag.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/shared-key.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/shared-key.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var shared = __webpack_require__(/*! ../internals/shared */ \"./node_modules/core-js-pure/internals/shared.js\");\n\nvar uid = __webpack_require__(/*! ../internals/uid */ \"./node_modules/core-js-pure/internals/uid.js\");\n\nvar keys = shared('keys');\n\nmodule.exports = function (key) {\n  return keys[key] || (keys[key] = uid(key));\n};\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/internals/shared-key.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/shared-store.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/shared-store.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js-pure/internals/global.js\");\n\nvar setGlobal = __webpack_require__(/*! ../internals/set-global */ \"./node_modules/core-js-pure/internals/set-global.js\");\n\nvar SHARED = '__core-js_shared__';\nvar store = global[SHARED] || setGlobal(SHARED, {});\nmodule.exports = store;\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/internals/shared-store.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/shared.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js-pure/internals/shared.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"./node_modules/core-js-pure/internals/is-pure.js\");\n\nvar store = __webpack_require__(/*! ../internals/shared-store */ \"./node_modules/core-js-pure/internals/shared-store.js\");\n\n(module.exports = function (key, value) {\n  return store[key] || (store[key] = value !== undefined ? value : {});\n})('versions', []).push({\n  version: '3.6.4',\n  mode: IS_PURE ? 'pure' : 'global',\n  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'\n});\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/internals/shared.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/string-multibyte.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/string-multibyte.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var toInteger = __webpack_require__(/*! ../internals/to-integer */ \"./node_modules/core-js-pure/internals/to-integer.js\");\n\nvar requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"./node_modules/core-js-pure/internals/require-object-coercible.js\"); // `String.prototype.{ codePointAt, at }` methods implementation\n\n\nvar createMethod = function (CONVERT_TO_STRING) {\n  return function ($this, pos) {\n    var S = String(requireObjectCoercible($this));\n    var position = toInteger(pos);\n    var size = S.length;\n    var first, second;\n    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;\n    first = S.charCodeAt(position);\n    return first < 0xD800 || first > 0xDBFF || position + 1 === size || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF ? CONVERT_TO_STRING ? S.charAt(position) : first : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;\n  };\n};\n\nmodule.exports = {\n  // `String.prototype.codePointAt` method\n  // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat\n  codeAt: createMethod(false),\n  // `String.prototype.at` method\n  // https://github.com/mathiasbynens/String.prototype.at\n  charAt: createMethod(true)\n};\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/internals/string-multibyte.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/to-absolute-index.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/to-absolute-index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var toInteger = __webpack_require__(/*! ../internals/to-integer */ \"./node_modules/core-js-pure/internals/to-integer.js\");\n\nvar max = Math.max;\nvar min = Math.min; // Helper for a popular repeating case of the spec:\n// Let integer be ? ToInteger(index).\n// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).\n\nmodule.exports = function (index, length) {\n  var integer = toInteger(index);\n  return integer < 0 ? max(integer + length, 0) : min(integer, length);\n};\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/internals/to-absolute-index.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/to-indexed-object.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/to-indexed-object.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// toObject with fallback for non-array-like ES3 strings\nvar IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ \"./node_modules/core-js-pure/internals/indexed-object.js\");\n\nvar requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"./node_modules/core-js-pure/internals/require-object-coercible.js\");\n\nmodule.exports = function (it) {\n  return IndexedObject(requireObjectCoercible(it));\n};\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/internals/to-indexed-object.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/to-integer.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/to-integer.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var ceil = Math.ceil;\nvar floor = Math.floor; // `ToInteger` abstract operation\n// https://tc39.github.io/ecma262/#sec-tointeger\n\nmodule.exports = function (argument) {\n  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);\n};\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/internals/to-integer.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/to-length.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/to-length.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var toInteger = __webpack_require__(/*! ../internals/to-integer */ \"./node_modules/core-js-pure/internals/to-integer.js\");\n\nvar min = Math.min; // `ToLength` abstract operation\n// https://tc39.github.io/ecma262/#sec-tolength\n\nmodule.exports = function (argument) {\n  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991\n};\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/internals/to-length.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/to-object.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/to-object.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"./node_modules/core-js-pure/internals/require-object-coercible.js\"); // `ToObject` abstract operation\n// https://tc39.github.io/ecma262/#sec-toobject\n\n\nmodule.exports = function (argument) {\n  return Object(requireObjectCoercible(argument));\n};\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/internals/to-object.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/to-primitive.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/to-primitive.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js-pure/internals/is-object.js\"); // `ToPrimitive` abstract operation\n// https://tc39.github.io/ecma262/#sec-toprimitive\n// instead of the ES6 spec version, we didn't implement @@toPrimitive case\n// and the second argument - flag - preferred type is a string\n\n\nmodule.exports = function (input, PREFERRED_STRING) {\n  if (!isObject(input)) return input;\n  var fn, val;\n  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;\n  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;\n  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;\n  throw TypeError(\"Can't convert object to primitive value\");\n};\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/internals/to-primitive.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/to-string-tag-support.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/to-string-tag-support.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js-pure/internals/well-known-symbol.js\");\n\nvar TO_STRING_TAG = wellKnownSymbol('toStringTag');\nvar test = {};\ntest[TO_STRING_TAG] = 'z';\nmodule.exports = String(test) === '[object z]';\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/internals/to-string-tag-support.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/uid.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js-pure/internals/uid.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var id = 0;\nvar postfix = Math.random();\n\nmodule.exports = function (key) {\n  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);\n};\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/internals/uid.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/use-symbol-as-uid.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/use-symbol-as-uid.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ \"./node_modules/core-js-pure/internals/native-symbol.js\");\n\nmodule.exports = NATIVE_SYMBOL // eslint-disable-next-line no-undef\n&& !Symbol.sham // eslint-disable-next-line no-undef\n&& typeof Symbol.iterator == 'symbol';\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/internals/use-symbol-as-uid.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/well-known-symbol-wrapped.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/well-known-symbol-wrapped.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js-pure/internals/well-known-symbol.js\");\n\nexports.f = wellKnownSymbol;\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/internals/well-known-symbol-wrapped.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/well-known-symbol.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/well-known-symbol.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js-pure/internals/global.js\");\n\nvar shared = __webpack_require__(/*! ../internals/shared */ \"./node_modules/core-js-pure/internals/shared.js\");\n\nvar has = __webpack_require__(/*! ../internals/has */ \"./node_modules/core-js-pure/internals/has.js\");\n\nvar uid = __webpack_require__(/*! ../internals/uid */ \"./node_modules/core-js-pure/internals/uid.js\");\n\nvar NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ \"./node_modules/core-js-pure/internals/native-symbol.js\");\n\nvar USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ \"./node_modules/core-js-pure/internals/use-symbol-as-uid.js\");\n\nvar WellKnownSymbolsStore = shared('wks');\nvar Symbol = global.Symbol;\nvar createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;\n\nmodule.exports = function (name) {\n  if (!has(WellKnownSymbolsStore, name)) {\n    if (NATIVE_SYMBOL && has(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);\n  }\n\n  return WellKnownSymbolsStore[name];\n};\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/internals/well-known-symbol.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.array.concat.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.array.concat.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js-pure/internals/export.js\");\n\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js-pure/internals/fails.js\");\n\nvar isArray = __webpack_require__(/*! ../internals/is-array */ \"./node_modules/core-js-pure/internals/is-array.js\");\n\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js-pure/internals/is-object.js\");\n\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"./node_modules/core-js-pure/internals/to-object.js\");\n\nvar toLength = __webpack_require__(/*! ../internals/to-length */ \"./node_modules/core-js-pure/internals/to-length.js\");\n\nvar createProperty = __webpack_require__(/*! ../internals/create-property */ \"./node_modules/core-js-pure/internals/create-property.js\");\n\nvar arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ \"./node_modules/core-js-pure/internals/array-species-create.js\");\n\nvar arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ \"./node_modules/core-js-pure/internals/array-method-has-species-support.js\");\n\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js-pure/internals/well-known-symbol.js\");\n\nvar V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ \"./node_modules/core-js-pure/internals/engine-v8-version.js\");\n\nvar IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');\nvar MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;\nvar MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded'; // We can't use this feature detection in V8 since it causes\n// deoptimization and serious performance degradation\n// https://github.com/zloirock/core-js/issues/679\n\nvar IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {\n  var array = [];\n  array[IS_CONCAT_SPREADABLE] = false;\n  return array.concat()[0] !== array;\n});\nvar SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');\n\nvar isConcatSpreadable = function (O) {\n  if (!isObject(O)) return false;\n  var spreadable = O[IS_CONCAT_SPREADABLE];\n  return spreadable !== undefined ? !!spreadable : isArray(O);\n};\n\nvar FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT; // `Array.prototype.concat` method\n// https://tc39.github.io/ecma262/#sec-array.prototype.concat\n// with adding support of @@isConcatSpreadable and @@species\n\n$({\n  target: 'Array',\n  proto: true,\n  forced: FORCED\n}, {\n  concat: function concat(arg) {\n    // eslint-disable-line no-unused-vars\n    var O = toObject(this);\n    var A = arraySpeciesCreate(O, 0);\n    var n = 0;\n    var i, k, length, len, E;\n\n    for (i = -1, length = arguments.length; i < length; i++) {\n      E = i === -1 ? O : arguments[i];\n\n      if (isConcatSpreadable(E)) {\n        len = toLength(E.length);\n        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);\n\n        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);\n      } else {\n        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);\n        createProperty(A, n++, E);\n      }\n    }\n\n    A.length = n;\n    return A;\n  }\n});\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/modules/es.array.concat.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.array.find.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.array.find.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js-pure/internals/export.js\");\n\nvar $find = __webpack_require__(/*! ../internals/array-iteration */ \"./node_modules/core-js-pure/internals/array-iteration.js\").find;\n\nvar addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ \"./node_modules/core-js-pure/internals/add-to-unscopables.js\");\n\nvar arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ \"./node_modules/core-js-pure/internals/array-method-uses-to-length.js\");\n\nvar FIND = 'find';\nvar SKIPS_HOLES = true;\nvar USES_TO_LENGTH = arrayMethodUsesToLength(FIND); // Shouldn't skip holes\n\nif (FIND in []) Array(1)[FIND](function () {\n  SKIPS_HOLES = false;\n}); // `Array.prototype.find` method\n// https://tc39.github.io/ecma262/#sec-array.prototype.find\n\n$({\n  target: 'Array',\n  proto: true,\n  forced: SKIPS_HOLES || !USES_TO_LENGTH\n}, {\n  find: function find(callbackfn\n  /* , that = undefined */\n  ) {\n    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);\n  }\n}); // https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables\n\naddToUnscopables(FIND);\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/modules/es.array.find.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.array.for-each.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.array.for-each.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js-pure/internals/export.js\");\n\nvar forEach = __webpack_require__(/*! ../internals/array-for-each */ \"./node_modules/core-js-pure/internals/array-for-each.js\"); // `Array.prototype.forEach` method\n// https://tc39.github.io/ecma262/#sec-array.prototype.foreach\n\n\n$({\n  target: 'Array',\n  proto: true,\n  forced: [].forEach != forEach\n}, {\n  forEach: forEach\n});\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/modules/es.array.for-each.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.array.from.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.array.from.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js-pure/internals/export.js\");\n\nvar from = __webpack_require__(/*! ../internals/array-from */ \"./node_modules/core-js-pure/internals/array-from.js\");\n\nvar checkCorrectnessOfIteration = __webpack_require__(/*! ../internals/check-correctness-of-iteration */ \"./node_modules/core-js-pure/internals/check-correctness-of-iteration.js\");\n\nvar INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {\n  Array.from(iterable);\n}); // `Array.from` method\n// https://tc39.github.io/ecma262/#sec-array.from\n\n$({\n  target: 'Array',\n  stat: true,\n  forced: INCORRECT_ITERATION\n}, {\n  from: from\n});\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/modules/es.array.from.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.array.is-array.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.array.is-array.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js-pure/internals/export.js\");\n\nvar isArray = __webpack_require__(/*! ../internals/is-array */ \"./node_modules/core-js-pure/internals/is-array.js\"); // `Array.isArray` method\n// https://tc39.github.io/ecma262/#sec-array.isarray\n\n\n$({\n  target: 'Array',\n  stat: true\n}, {\n  isArray: isArray\n});\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/modules/es.array.is-array.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.array.iterator.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.array.iterator.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/core-js-pure/internals/to-indexed-object.js\");\n\nvar addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ \"./node_modules/core-js-pure/internals/add-to-unscopables.js\");\n\nvar Iterators = __webpack_require__(/*! ../internals/iterators */ \"./node_modules/core-js-pure/internals/iterators.js\");\n\nvar InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ \"./node_modules/core-js-pure/internals/internal-state.js\");\n\nvar defineIterator = __webpack_require__(/*! ../internals/define-iterator */ \"./node_modules/core-js-pure/internals/define-iterator.js\");\n\nvar ARRAY_ITERATOR = 'Array Iterator';\nvar setInternalState = InternalStateModule.set;\nvar getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR); // `Array.prototype.entries` method\n// https://tc39.github.io/ecma262/#sec-array.prototype.entries\n// `Array.prototype.keys` method\n// https://tc39.github.io/ecma262/#sec-array.prototype.keys\n// `Array.prototype.values` method\n// https://tc39.github.io/ecma262/#sec-array.prototype.values\n// `Array.prototype[@@iterator]` method\n// https://tc39.github.io/ecma262/#sec-array.prototype-@@iterator\n// `CreateArrayIterator` internal method\n// https://tc39.github.io/ecma262/#sec-createarrayiterator\n\nmodule.exports = defineIterator(Array, 'Array', function (iterated, kind) {\n  setInternalState(this, {\n    type: ARRAY_ITERATOR,\n    target: toIndexedObject(iterated),\n    // target\n    index: 0,\n    // next index\n    kind: kind // kind\n\n  }); // `%ArrayIteratorPrototype%.next` method\n  // https://tc39.github.io/ecma262/#sec-%arrayiteratorprototype%.next\n}, function () {\n  var state = getInternalState(this);\n  var target = state.target;\n  var kind = state.kind;\n  var index = state.index++;\n\n  if (!target || index >= target.length) {\n    state.target = undefined;\n    return {\n      value: undefined,\n      done: true\n    };\n  }\n\n  if (kind == 'keys') return {\n    value: index,\n    done: false\n  };\n  if (kind == 'values') return {\n    value: target[index],\n    done: false\n  };\n  return {\n    value: [index, target[index]],\n    done: false\n  };\n}, 'values'); // argumentsList[@@iterator] is %ArrayProto_values%\n// https://tc39.github.io/ecma262/#sec-createunmappedargumentsobject\n// https://tc39.github.io/ecma262/#sec-createmappedargumentsobject\n\nIterators.Arguments = Iterators.Array; // https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables\n\naddToUnscopables('keys');\naddToUnscopables('values');\naddToUnscopables('entries');\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/modules/es.array.iterator.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.array.map.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.array.map.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js-pure/internals/export.js\");\n\nvar $map = __webpack_require__(/*! ../internals/array-iteration */ \"./node_modules/core-js-pure/internals/array-iteration.js\").map;\n\nvar arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ \"./node_modules/core-js-pure/internals/array-method-has-species-support.js\");\n\nvar arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ \"./node_modules/core-js-pure/internals/array-method-uses-to-length.js\");\n\nvar HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map'); // FF49- issue\n\nvar USES_TO_LENGTH = arrayMethodUsesToLength('map'); // `Array.prototype.map` method\n// https://tc39.github.io/ecma262/#sec-array.prototype.map\n// with adding support of @@species\n\n$({\n  target: 'Array',\n  proto: true,\n  forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH\n}, {\n  map: function map(callbackfn\n  /* , thisArg */\n  ) {\n    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);\n  }\n});\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/modules/es.array.map.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.array.reduce.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.array.reduce.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js-pure/internals/export.js\");\n\nvar $reduce = __webpack_require__(/*! ../internals/array-reduce */ \"./node_modules/core-js-pure/internals/array-reduce.js\").left;\n\nvar arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ \"./node_modules/core-js-pure/internals/array-method-is-strict.js\");\n\nvar arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ \"./node_modules/core-js-pure/internals/array-method-uses-to-length.js\");\n\nvar STRICT_METHOD = arrayMethodIsStrict('reduce');\nvar USES_TO_LENGTH = arrayMethodUsesToLength('reduce', {\n  1: 0\n}); // `Array.prototype.reduce` method\n// https://tc39.github.io/ecma262/#sec-array.prototype.reduce\n\n$({\n  target: 'Array',\n  proto: true,\n  forced: !STRICT_METHOD || !USES_TO_LENGTH\n}, {\n  reduce: function reduce(callbackfn\n  /* , initialValue */\n  ) {\n    return $reduce(this, callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);\n  }\n});\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/modules/es.array.reduce.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.array.slice.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.array.slice.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js-pure/internals/export.js\");\n\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js-pure/internals/is-object.js\");\n\nvar isArray = __webpack_require__(/*! ../internals/is-array */ \"./node_modules/core-js-pure/internals/is-array.js\");\n\nvar toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ \"./node_modules/core-js-pure/internals/to-absolute-index.js\");\n\nvar toLength = __webpack_require__(/*! ../internals/to-length */ \"./node_modules/core-js-pure/internals/to-length.js\");\n\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/core-js-pure/internals/to-indexed-object.js\");\n\nvar createProperty = __webpack_require__(/*! ../internals/create-property */ \"./node_modules/core-js-pure/internals/create-property.js\");\n\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js-pure/internals/well-known-symbol.js\");\n\nvar arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ \"./node_modules/core-js-pure/internals/array-method-has-species-support.js\");\n\nvar arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ \"./node_modules/core-js-pure/internals/array-method-uses-to-length.js\");\n\nvar HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice');\nvar USES_TO_LENGTH = arrayMethodUsesToLength('slice', {\n  ACCESSORS: true,\n  0: 0,\n  1: 2\n});\nvar SPECIES = wellKnownSymbol('species');\nvar nativeSlice = [].slice;\nvar max = Math.max; // `Array.prototype.slice` method\n// https://tc39.github.io/ecma262/#sec-array.prototype.slice\n// fallback for not array-like ES3 strings and DOM objects\n\n$({\n  target: 'Array',\n  proto: true,\n  forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH\n}, {\n  slice: function slice(start, end) {\n    var O = toIndexedObject(this);\n    var length = toLength(O.length);\n    var k = toAbsoluteIndex(start, length);\n    var fin = toAbsoluteIndex(end === undefined ? length : end, length); // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible\n\n    var Constructor, result, n;\n\n    if (isArray(O)) {\n      Constructor = O.constructor; // cross-realm fallback\n\n      if (typeof Constructor == 'function' && (Constructor === Array || isArray(Constructor.prototype))) {\n        Constructor = undefined;\n      } else if (isObject(Constructor)) {\n        Constructor = Constructor[SPECIES];\n        if (Constructor === null) Constructor = undefined;\n      }\n\n      if (Constructor === Array || Constructor === undefined) {\n        return nativeSlice.call(O, k, fin);\n      }\n    }\n\n    result = new (Constructor === undefined ? Array : Constructor)(max(fin - k, 0));\n\n    for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);\n\n    result.length = n;\n    return result;\n  }\n});\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/modules/es.array.slice.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.json.stringify.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.json.stringify.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js-pure/internals/export.js\");\n\nvar getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"./node_modules/core-js-pure/internals/get-built-in.js\");\n\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js-pure/internals/fails.js\");\n\nvar $stringify = getBuiltIn('JSON', 'stringify');\nvar re = /[\\uD800-\\uDFFF]/g;\nvar low = /^[\\uD800-\\uDBFF]$/;\nvar hi = /^[\\uDC00-\\uDFFF]$/;\n\nvar fix = function (match, offset, string) {\n  var prev = string.charAt(offset - 1);\n  var next = string.charAt(offset + 1);\n\n  if (low.test(match) && !hi.test(next) || hi.test(match) && !low.test(prev)) {\n    return '\\\\u' + match.charCodeAt(0).toString(16);\n  }\n\n  return match;\n};\n\nvar FORCED = fails(function () {\n  return $stringify('\\uDF06\\uD834') !== '\"\\\\udf06\\\\ud834\"' || $stringify('\\uDEAD') !== '\"\\\\udead\"';\n});\n\nif ($stringify) {\n  // https://github.com/tc39/proposal-well-formed-stringify\n  $({\n    target: 'JSON',\n    stat: true,\n    forced: FORCED\n  }, {\n    // eslint-disable-next-line no-unused-vars\n    stringify: function stringify(it, replacer, space) {\n      var result = $stringify.apply(null, arguments);\n      return typeof result == 'string' ? result.replace(re, fix) : result;\n    }\n  });\n}\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/modules/es.json.stringify.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.json.to-string-tag.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.json.to-string-tag.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js-pure/internals/global.js\");\n\nvar setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ \"./node_modules/core-js-pure/internals/set-to-string-tag.js\"); // JSON[@@toStringTag] property\n// https://tc39.github.io/ecma262/#sec-json-@@tostringtag\n\n\nsetToStringTag(global.JSON, 'JSON', true);\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/modules/es.json.to-string-tag.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.math.to-string-tag.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.math.to-string-tag.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ \"./node_modules/core-js-pure/internals/set-to-string-tag.js\"); // Math[@@toStringTag] property\n// https://tc39.github.io/ecma262/#sec-math-@@tostringtag\n\n\nsetToStringTag(Math, 'Math', true);\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/modules/es.math.to-string-tag.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.object.to-string.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.object.to-string.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// empty\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/modules/es.object.to-string.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.string.iterator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.string.iterator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar charAt = __webpack_require__(/*! ../internals/string-multibyte */ \"./node_modules/core-js-pure/internals/string-multibyte.js\").charAt;\n\nvar InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ \"./node_modules/core-js-pure/internals/internal-state.js\");\n\nvar defineIterator = __webpack_require__(/*! ../internals/define-iterator */ \"./node_modules/core-js-pure/internals/define-iterator.js\");\n\nvar STRING_ITERATOR = 'String Iterator';\nvar setInternalState = InternalStateModule.set;\nvar getInternalState = InternalStateModule.getterFor(STRING_ITERATOR); // `String.prototype[@@iterator]` method\n// https://tc39.github.io/ecma262/#sec-string.prototype-@@iterator\n\ndefineIterator(String, 'String', function (iterated) {\n  setInternalState(this, {\n    type: STRING_ITERATOR,\n    string: String(iterated),\n    index: 0\n  }); // `%StringIteratorPrototype%.next` method\n  // https://tc39.github.io/ecma262/#sec-%stringiteratorprototype%.next\n}, function next() {\n  var state = getInternalState(this);\n  var string = state.string;\n  var index = state.index;\n  var point;\n  if (index >= string.length) return {\n    value: undefined,\n    done: true\n  };\n  point = charAt(string, index);\n  state.index += point.length;\n  return {\n    value: point,\n    done: false\n  };\n});\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/modules/es.string.iterator.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.symbol.async-iterator.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.symbol.async-iterator.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ \"./node_modules/core-js-pure/internals/define-well-known-symbol.js\"); // `Symbol.asyncIterator` well-known symbol\n// https://tc39.github.io/ecma262/#sec-symbol.asynciterator\n\n\ndefineWellKnownSymbol('asyncIterator');\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/modules/es.symbol.async-iterator.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.symbol.description.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.symbol.description.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// empty\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/modules/es.symbol.description.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.symbol.has-instance.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.symbol.has-instance.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ \"./node_modules/core-js-pure/internals/define-well-known-symbol.js\"); // `Symbol.hasInstance` well-known symbol\n// https://tc39.github.io/ecma262/#sec-symbol.hasinstance\n\n\ndefineWellKnownSymbol('hasInstance');\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/modules/es.symbol.has-instance.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.symbol.is-concat-spreadable.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.symbol.is-concat-spreadable.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ \"./node_modules/core-js-pure/internals/define-well-known-symbol.js\"); // `Symbol.isConcatSpreadable` well-known symbol\n// https://tc39.github.io/ecma262/#sec-symbol.isconcatspreadable\n\n\ndefineWellKnownSymbol('isConcatSpreadable');\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/modules/es.symbol.is-concat-spreadable.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.symbol.iterator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.symbol.iterator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ \"./node_modules/core-js-pure/internals/define-well-known-symbol.js\"); // `Symbol.iterator` well-known symbol\n// https://tc39.github.io/ecma262/#sec-symbol.iterator\n\n\ndefineWellKnownSymbol('iterator');\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/modules/es.symbol.iterator.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.symbol.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.symbol.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js-pure/internals/export.js\");\n\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js-pure/internals/global.js\");\n\nvar getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"./node_modules/core-js-pure/internals/get-built-in.js\");\n\nvar IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"./node_modules/core-js-pure/internals/is-pure.js\");\n\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js-pure/internals/descriptors.js\");\n\nvar NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ \"./node_modules/core-js-pure/internals/native-symbol.js\");\n\nvar USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ \"./node_modules/core-js-pure/internals/use-symbol-as-uid.js\");\n\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js-pure/internals/fails.js\");\n\nvar has = __webpack_require__(/*! ../internals/has */ \"./node_modules/core-js-pure/internals/has.js\");\n\nvar isArray = __webpack_require__(/*! ../internals/is-array */ \"./node_modules/core-js-pure/internals/is-array.js\");\n\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js-pure/internals/is-object.js\");\n\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js-pure/internals/an-object.js\");\n\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"./node_modules/core-js-pure/internals/to-object.js\");\n\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/core-js-pure/internals/to-indexed-object.js\");\n\nvar toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ \"./node_modules/core-js-pure/internals/to-primitive.js\");\n\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ \"./node_modules/core-js-pure/internals/create-property-descriptor.js\");\n\nvar nativeObjectCreate = __webpack_require__(/*! ../internals/object-create */ \"./node_modules/core-js-pure/internals/object-create.js\");\n\nvar objectKeys = __webpack_require__(/*! ../internals/object-keys */ \"./node_modules/core-js-pure/internals/object-keys.js\");\n\nvar getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ \"./node_modules/core-js-pure/internals/object-get-own-property-names.js\");\n\nvar getOwnPropertyNamesExternal = __webpack_require__(/*! ../internals/object-get-own-property-names-external */ \"./node_modules/core-js-pure/internals/object-get-own-property-names-external.js\");\n\nvar getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ \"./node_modules/core-js-pure/internals/object-get-own-property-symbols.js\");\n\nvar getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ \"./node_modules/core-js-pure/internals/object-get-own-property-descriptor.js\");\n\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js-pure/internals/object-define-property.js\");\n\nvar propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ \"./node_modules/core-js-pure/internals/object-property-is-enumerable.js\");\n\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/core-js-pure/internals/create-non-enumerable-property.js\");\n\nvar redefine = __webpack_require__(/*! ../internals/redefine */ \"./node_modules/core-js-pure/internals/redefine.js\");\n\nvar shared = __webpack_require__(/*! ../internals/shared */ \"./node_modules/core-js-pure/internals/shared.js\");\n\nvar sharedKey = __webpack_require__(/*! ../internals/shared-key */ \"./node_modules/core-js-pure/internals/shared-key.js\");\n\nvar hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ \"./node_modules/core-js-pure/internals/hidden-keys.js\");\n\nvar uid = __webpack_require__(/*! ../internals/uid */ \"./node_modules/core-js-pure/internals/uid.js\");\n\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js-pure/internals/well-known-symbol.js\");\n\nvar wrappedWellKnownSymbolModule = __webpack_require__(/*! ../internals/well-known-symbol-wrapped */ \"./node_modules/core-js-pure/internals/well-known-symbol-wrapped.js\");\n\nvar defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ \"./node_modules/core-js-pure/internals/define-well-known-symbol.js\");\n\nvar setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ \"./node_modules/core-js-pure/internals/set-to-string-tag.js\");\n\nvar InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ \"./node_modules/core-js-pure/internals/internal-state.js\");\n\nvar $forEach = __webpack_require__(/*! ../internals/array-iteration */ \"./node_modules/core-js-pure/internals/array-iteration.js\").forEach;\n\nvar HIDDEN = sharedKey('hidden');\nvar SYMBOL = 'Symbol';\nvar PROTOTYPE = 'prototype';\nvar TO_PRIMITIVE = wellKnownSymbol('toPrimitive');\nvar setInternalState = InternalStateModule.set;\nvar getInternalState = InternalStateModule.getterFor(SYMBOL);\nvar ObjectPrototype = Object[PROTOTYPE];\nvar $Symbol = global.Symbol;\nvar $stringify = getBuiltIn('JSON', 'stringify');\nvar nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;\nvar nativeDefineProperty = definePropertyModule.f;\nvar nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;\nvar nativePropertyIsEnumerable = propertyIsEnumerableModule.f;\nvar AllSymbols = shared('symbols');\nvar ObjectPrototypeSymbols = shared('op-symbols');\nvar StringToSymbolRegistry = shared('string-to-symbol-registry');\nvar SymbolToStringRegistry = shared('symbol-to-string-registry');\nvar WellKnownSymbolsStore = shared('wks');\nvar QObject = global.QObject; // Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173\n\nvar USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild; // fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687\n\nvar setSymbolDescriptor = DESCRIPTORS && fails(function () {\n  return nativeObjectCreate(nativeDefineProperty({}, 'a', {\n    get: function () {\n      return nativeDefineProperty(this, 'a', {\n        value: 7\n      }).a;\n    }\n  })).a != 7;\n}) ? function (O, P, Attributes) {\n  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);\n  if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];\n  nativeDefineProperty(O, P, Attributes);\n\n  if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {\n    nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);\n  }\n} : nativeDefineProperty;\n\nvar wrap = function (tag, description) {\n  var symbol = AllSymbols[tag] = nativeObjectCreate($Symbol[PROTOTYPE]);\n  setInternalState(symbol, {\n    type: SYMBOL,\n    tag: tag,\n    description: description\n  });\n  if (!DESCRIPTORS) symbol.description = description;\n  return symbol;\n};\n\nvar isSymbol = USE_SYMBOL_AS_UID ? function (it) {\n  return typeof it == 'symbol';\n} : function (it) {\n  return Object(it) instanceof $Symbol;\n};\n\nvar $defineProperty = function defineProperty(O, P, Attributes) {\n  if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);\n  anObject(O);\n  var key = toPrimitive(P, true);\n  anObject(Attributes);\n\n  if (has(AllSymbols, key)) {\n    if (!Attributes.enumerable) {\n      if (!has(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));\n      O[HIDDEN][key] = true;\n    } else {\n      if (has(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;\n      Attributes = nativeObjectCreate(Attributes, {\n        enumerable: createPropertyDescriptor(0, false)\n      });\n    }\n\n    return setSymbolDescriptor(O, key, Attributes);\n  }\n\n  return nativeDefineProperty(O, key, Attributes);\n};\n\nvar $defineProperties = function defineProperties(O, Properties) {\n  anObject(O);\n  var properties = toIndexedObject(Properties);\n  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));\n  $forEach(keys, function (key) {\n    if (!DESCRIPTORS || $propertyIsEnumerable.call(properties, key)) $defineProperty(O, key, properties[key]);\n  });\n  return O;\n};\n\nvar $create = function create(O, Properties) {\n  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);\n};\n\nvar $propertyIsEnumerable = function propertyIsEnumerable(V) {\n  var P = toPrimitive(V, true);\n  var enumerable = nativePropertyIsEnumerable.call(this, P);\n  if (this === ObjectPrototype && has(AllSymbols, P) && !has(ObjectPrototypeSymbols, P)) return false;\n  return enumerable || !has(this, P) || !has(AllSymbols, P) || has(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;\n};\n\nvar $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {\n  var it = toIndexedObject(O);\n  var key = toPrimitive(P, true);\n  if (it === ObjectPrototype && has(AllSymbols, key) && !has(ObjectPrototypeSymbols, key)) return;\n  var descriptor = nativeGetOwnPropertyDescriptor(it, key);\n\n  if (descriptor && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) {\n    descriptor.enumerable = true;\n  }\n\n  return descriptor;\n};\n\nvar $getOwnPropertyNames = function getOwnPropertyNames(O) {\n  var names = nativeGetOwnPropertyNames(toIndexedObject(O));\n  var result = [];\n  $forEach(names, function (key) {\n    if (!has(AllSymbols, key) && !has(hiddenKeys, key)) result.push(key);\n  });\n  return result;\n};\n\nvar $getOwnPropertySymbols = function getOwnPropertySymbols(O) {\n  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;\n  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));\n  var result = [];\n  $forEach(names, function (key) {\n    if (has(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || has(ObjectPrototype, key))) {\n      result.push(AllSymbols[key]);\n    }\n  });\n  return result;\n}; // `Symbol` constructor\n// https://tc39.github.io/ecma262/#sec-symbol-constructor\n\n\nif (!NATIVE_SYMBOL) {\n  $Symbol = function Symbol() {\n    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor');\n    var description = !arguments.length || arguments[0] === undefined ? undefined : String(arguments[0]);\n    var tag = uid(description);\n\n    var setter = function (value) {\n      if (this === ObjectPrototype) setter.call(ObjectPrototypeSymbols, value);\n      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;\n      setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));\n    };\n\n    if (DESCRIPTORS && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, {\n      configurable: true,\n      set: setter\n    });\n    return wrap(tag, description);\n  };\n\n  redefine($Symbol[PROTOTYPE], 'toString', function toString() {\n    return getInternalState(this).tag;\n  });\n  redefine($Symbol, 'withoutSetter', function (description) {\n    return wrap(uid(description), description);\n  });\n  propertyIsEnumerableModule.f = $propertyIsEnumerable;\n  definePropertyModule.f = $defineProperty;\n  getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;\n  getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;\n  getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;\n\n  wrappedWellKnownSymbolModule.f = function (name) {\n    return wrap(wellKnownSymbol(name), name);\n  };\n\n  if (DESCRIPTORS) {\n    // https://github.com/tc39/proposal-Symbol-description\n    nativeDefineProperty($Symbol[PROTOTYPE], 'description', {\n      configurable: true,\n      get: function description() {\n        return getInternalState(this).description;\n      }\n    });\n\n    if (!IS_PURE) {\n      redefine(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, {\n        unsafe: true\n      });\n    }\n  }\n}\n\n$({\n  global: true,\n  wrap: true,\n  forced: !NATIVE_SYMBOL,\n  sham: !NATIVE_SYMBOL\n}, {\n  Symbol: $Symbol\n});\n$forEach(objectKeys(WellKnownSymbolsStore), function (name) {\n  defineWellKnownSymbol(name);\n});\n$({\n  target: SYMBOL,\n  stat: true,\n  forced: !NATIVE_SYMBOL\n}, {\n  // `Symbol.for` method\n  // https://tc39.github.io/ecma262/#sec-symbol.for\n  'for': function (key) {\n    var string = String(key);\n    if (has(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];\n    var symbol = $Symbol(string);\n    StringToSymbolRegistry[string] = symbol;\n    SymbolToStringRegistry[symbol] = string;\n    return symbol;\n  },\n  // `Symbol.keyFor` method\n  // https://tc39.github.io/ecma262/#sec-symbol.keyfor\n  keyFor: function keyFor(sym) {\n    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol');\n    if (has(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];\n  },\n  useSetter: function () {\n    USE_SETTER = true;\n  },\n  useSimple: function () {\n    USE_SETTER = false;\n  }\n});\n$({\n  target: 'Object',\n  stat: true,\n  forced: !NATIVE_SYMBOL,\n  sham: !DESCRIPTORS\n}, {\n  // `Object.create` method\n  // https://tc39.github.io/ecma262/#sec-object.create\n  create: $create,\n  // `Object.defineProperty` method\n  // https://tc39.github.io/ecma262/#sec-object.defineproperty\n  defineProperty: $defineProperty,\n  // `Object.defineProperties` method\n  // https://tc39.github.io/ecma262/#sec-object.defineproperties\n  defineProperties: $defineProperties,\n  // `Object.getOwnPropertyDescriptor` method\n  // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors\n  getOwnPropertyDescriptor: $getOwnPropertyDescriptor\n});\n$({\n  target: 'Object',\n  stat: true,\n  forced: !NATIVE_SYMBOL\n}, {\n  // `Object.getOwnPropertyNames` method\n  // https://tc39.github.io/ecma262/#sec-object.getownpropertynames\n  getOwnPropertyNames: $getOwnPropertyNames,\n  // `Object.getOwnPropertySymbols` method\n  // https://tc39.github.io/ecma262/#sec-object.getownpropertysymbols\n  getOwnPropertySymbols: $getOwnPropertySymbols\n}); // Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives\n// https://bugs.chromium.org/p/v8/issues/detail?id=3443\n\n$({\n  target: 'Object',\n  stat: true,\n  forced: fails(function () {\n    getOwnPropertySymbolsModule.f(1);\n  })\n}, {\n  getOwnPropertySymbols: function getOwnPropertySymbols(it) {\n    return getOwnPropertySymbolsModule.f(toObject(it));\n  }\n}); // `JSON.stringify` method behavior with symbols\n// https://tc39.github.io/ecma262/#sec-json.stringify\n\nif ($stringify) {\n  var FORCED_JSON_STRINGIFY = !NATIVE_SYMBOL || fails(function () {\n    var symbol = $Symbol(); // MS Edge converts symbol values to JSON as {}\n\n    return $stringify([symbol]) != '[null]' // WebKit converts symbol values to JSON as null\n    || $stringify({\n      a: symbol\n    }) != '{}' // V8 throws on boxed symbols\n    || $stringify(Object(symbol)) != '{}';\n  });\n  $({\n    target: 'JSON',\n    stat: true,\n    forced: FORCED_JSON_STRINGIFY\n  }, {\n    // eslint-disable-next-line no-unused-vars\n    stringify: function stringify(it, replacer, space) {\n      var args = [it];\n      var index = 1;\n      var $replacer;\n\n      while (arguments.length > index) args.push(arguments[index++]);\n\n      $replacer = replacer;\n      if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined\n\n      if (!isArray(replacer)) replacer = function (key, value) {\n        if (typeof $replacer == 'function') value = $replacer.call(this, key, value);\n        if (!isSymbol(value)) return value;\n      };\n      args[1] = replacer;\n      return $stringify.apply(null, args);\n    }\n  });\n} // `Symbol.prototype[@@toPrimitive]` method\n// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@toprimitive\n\n\nif (!$Symbol[PROTOTYPE][TO_PRIMITIVE]) {\n  createNonEnumerableProperty($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);\n} // `Symbol.prototype[@@toStringTag]` property\n// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@tostringtag\n\n\nsetToStringTag($Symbol, SYMBOL);\nhiddenKeys[HIDDEN] = true;\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/modules/es.symbol.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.symbol.match-all.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.symbol.match-all.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ \"./node_modules/core-js-pure/internals/define-well-known-symbol.js\"); // `Symbol.matchAll` well-known symbol\n\n\ndefineWellKnownSymbol('matchAll');\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/modules/es.symbol.match-all.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.symbol.match.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.symbol.match.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ \"./node_modules/core-js-pure/internals/define-well-known-symbol.js\"); // `Symbol.match` well-known symbol\n// https://tc39.github.io/ecma262/#sec-symbol.match\n\n\ndefineWellKnownSymbol('match');\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/modules/es.symbol.match.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.symbol.replace.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.symbol.replace.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ \"./node_modules/core-js-pure/internals/define-well-known-symbol.js\"); // `Symbol.replace` well-known symbol\n// https://tc39.github.io/ecma262/#sec-symbol.replace\n\n\ndefineWellKnownSymbol('replace');\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/modules/es.symbol.replace.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.symbol.search.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.symbol.search.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ \"./node_modules/core-js-pure/internals/define-well-known-symbol.js\"); // `Symbol.search` well-known symbol\n// https://tc39.github.io/ecma262/#sec-symbol.search\n\n\ndefineWellKnownSymbol('search');\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/modules/es.symbol.search.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.symbol.species.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.symbol.species.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ \"./node_modules/core-js-pure/internals/define-well-known-symbol.js\"); // `Symbol.species` well-known symbol\n// https://tc39.github.io/ecma262/#sec-symbol.species\n\n\ndefineWellKnownSymbol('species');\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/modules/es.symbol.species.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.symbol.split.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.symbol.split.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ \"./node_modules/core-js-pure/internals/define-well-known-symbol.js\"); // `Symbol.split` well-known symbol\n// https://tc39.github.io/ecma262/#sec-symbol.split\n\n\ndefineWellKnownSymbol('split');\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/modules/es.symbol.split.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.symbol.to-primitive.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.symbol.to-primitive.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ \"./node_modules/core-js-pure/internals/define-well-known-symbol.js\"); // `Symbol.toPrimitive` well-known symbol\n// https://tc39.github.io/ecma262/#sec-symbol.toprimitive\n\n\ndefineWellKnownSymbol('toPrimitive');\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/modules/es.symbol.to-primitive.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.symbol.to-string-tag.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.symbol.to-string-tag.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ \"./node_modules/core-js-pure/internals/define-well-known-symbol.js\"); // `Symbol.toStringTag` well-known symbol\n// https://tc39.github.io/ecma262/#sec-symbol.tostringtag\n\n\ndefineWellKnownSymbol('toStringTag');\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/modules/es.symbol.to-string-tag.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.symbol.unscopables.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.symbol.unscopables.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ \"./node_modules/core-js-pure/internals/define-well-known-symbol.js\"); // `Symbol.unscopables` well-known symbol\n// https://tc39.github.io/ecma262/#sec-symbol.unscopables\n\n\ndefineWellKnownSymbol('unscopables');\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/modules/es.symbol.unscopables.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/esnext.symbol.async-dispose.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/esnext.symbol.async-dispose.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ \"./node_modules/core-js-pure/internals/define-well-known-symbol.js\"); // `Symbol.asyncDispose` well-known symbol\n// https://github.com/tc39/proposal-using-statement\n\n\ndefineWellKnownSymbol('asyncDispose');\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/modules/esnext.symbol.async-dispose.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/esnext.symbol.dispose.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/esnext.symbol.dispose.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ \"./node_modules/core-js-pure/internals/define-well-known-symbol.js\"); // `Symbol.dispose` well-known symbol\n// https://github.com/tc39/proposal-using-statement\n\n\ndefineWellKnownSymbol('dispose');\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/modules/esnext.symbol.dispose.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/esnext.symbol.observable.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/esnext.symbol.observable.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ \"./node_modules/core-js-pure/internals/define-well-known-symbol.js\"); // `Symbol.observable` well-known symbol\n// https://github.com/tc39/proposal-observable\n\n\ndefineWellKnownSymbol('observable');\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/modules/esnext.symbol.observable.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/esnext.symbol.pattern-match.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/esnext.symbol.pattern-match.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ \"./node_modules/core-js-pure/internals/define-well-known-symbol.js\"); // `Symbol.patternMatch` well-known symbol\n// https://github.com/tc39/proposal-pattern-matching\n\n\ndefineWellKnownSymbol('patternMatch');\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/modules/esnext.symbol.pattern-match.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/esnext.symbol.replace-all.js":
/*!************************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/esnext.symbol.replace-all.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// TODO: remove from `core-js@4`\nvar defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ \"./node_modules/core-js-pure/internals/define-well-known-symbol.js\");\n\ndefineWellKnownSymbol('replaceAll');\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/modules/esnext.symbol.replace-all.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/web.dom-collections.iterator.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/web.dom-collections.iterator.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./es.array.iterator */ \"./node_modules/core-js-pure/modules/es.array.iterator.js\");\n\nvar DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ \"./node_modules/core-js-pure/internals/dom-iterables.js\");\n\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js-pure/internals/global.js\");\n\nvar classof = __webpack_require__(/*! ../internals/classof */ \"./node_modules/core-js-pure/internals/classof.js\");\n\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/core-js-pure/internals/create-non-enumerable-property.js\");\n\nvar Iterators = __webpack_require__(/*! ../internals/iterators */ \"./node_modules/core-js-pure/internals/iterators.js\");\n\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js-pure/internals/well-known-symbol.js\");\n\nvar TO_STRING_TAG = wellKnownSymbol('toStringTag');\n\nfor (var COLLECTION_NAME in DOMIterables) {\n  var Collection = global[COLLECTION_NAME];\n  var CollectionPrototype = Collection && Collection.prototype;\n\n  if (CollectionPrototype && classof(CollectionPrototype) !== TO_STRING_TAG) {\n    createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);\n  }\n\n  Iterators[COLLECTION_NAME] = Iterators.Array;\n}\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/modules/web.dom-collections.iterator.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/stable/array/from.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js-pure/stable/array/from.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parent = __webpack_require__(/*! ../../es/array/from */ \"./node_modules/core-js-pure/es/array/from.js\");\n\nmodule.exports = parent;\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/stable/array/from.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/stable/array/is-array.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js-pure/stable/array/is-array.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parent = __webpack_require__(/*! ../../es/array/is-array */ \"./node_modules/core-js-pure/es/array/is-array.js\");\n\nmodule.exports = parent;\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/stable/array/is-array.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/stable/array/virtual/for-each.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js-pure/stable/array/virtual/for-each.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parent = __webpack_require__(/*! ../../../es/array/virtual/for-each */ \"./node_modules/core-js-pure/es/array/virtual/for-each.js\");\n\nmodule.exports = parent;\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/stable/array/virtual/for-each.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/stable/instance/find.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js-pure/stable/instance/find.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parent = __webpack_require__(/*! ../../es/instance/find */ \"./node_modules/core-js-pure/es/instance/find.js\");\n\nmodule.exports = parent;\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/stable/instance/find.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/stable/instance/for-each.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js-pure/stable/instance/for-each.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/web.dom-collections.iterator */ \"./node_modules/core-js-pure/modules/web.dom-collections.iterator.js\");\n\nvar forEach = __webpack_require__(/*! ../array/virtual/for-each */ \"./node_modules/core-js-pure/stable/array/virtual/for-each.js\");\n\nvar classof = __webpack_require__(/*! ../../internals/classof */ \"./node_modules/core-js-pure/internals/classof.js\");\n\nvar ArrayPrototype = Array.prototype;\nvar DOMIterables = {\n  DOMTokenList: true,\n  NodeList: true\n};\n\nmodule.exports = function (it) {\n  var own = it.forEach;\n  return it === ArrayPrototype || it instanceof Array && own === ArrayPrototype.forEach // eslint-disable-next-line no-prototype-builtins\n  || DOMIterables.hasOwnProperty(classof(it)) ? forEach : own;\n};\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/stable/instance/for-each.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/stable/instance/map.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js-pure/stable/instance/map.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parent = __webpack_require__(/*! ../../es/instance/map */ \"./node_modules/core-js-pure/es/instance/map.js\");\n\nmodule.exports = parent;\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/stable/instance/map.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/stable/instance/reduce.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js-pure/stable/instance/reduce.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parent = __webpack_require__(/*! ../../es/instance/reduce */ \"./node_modules/core-js-pure/es/instance/reduce.js\");\n\nmodule.exports = parent;\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/stable/instance/reduce.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/stable/instance/slice.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js-pure/stable/instance/slice.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parent = __webpack_require__(/*! ../../es/instance/slice */ \"./node_modules/core-js-pure/es/instance/slice.js\");\n\nmodule.exports = parent;\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/stable/instance/slice.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/stable/json/stringify.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js-pure/stable/json/stringify.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parent = __webpack_require__(/*! ../../es/json/stringify */ \"./node_modules/core-js-pure/es/json/stringify.js\");\n\nmodule.exports = parent;\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/stable/json/stringify.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/stable/symbol/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js-pure/stable/symbol/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parent = __webpack_require__(/*! ../../es/symbol */ \"./node_modules/core-js-pure/es/symbol/index.js\");\n\nmodule.exports = parent;\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/stable/symbol/index.js?");

/***/ }),

/***/ "./node_modules/lodash/_DataView.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_DataView.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var getNative = __webpack_require__(/*! ./_getNative */ \"./node_modules/lodash/_getNative.js\"),\n    root = __webpack_require__(/*! ./_root */ \"./node_modules/lodash/_root.js\");\n/* Built-in method references that are verified to be native. */\n\n\nvar DataView = getNative(root, 'DataView');\nmodule.exports = DataView;\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/lodash/_DataView.js?");

/***/ }),

/***/ "./node_modules/lodash/_Hash.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_Hash.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var hashClear = __webpack_require__(/*! ./_hashClear */ \"./node_modules/lodash/_hashClear.js\"),\n    hashDelete = __webpack_require__(/*! ./_hashDelete */ \"./node_modules/lodash/_hashDelete.js\"),\n    hashGet = __webpack_require__(/*! ./_hashGet */ \"./node_modules/lodash/_hashGet.js\"),\n    hashHas = __webpack_require__(/*! ./_hashHas */ \"./node_modules/lodash/_hashHas.js\"),\n    hashSet = __webpack_require__(/*! ./_hashSet */ \"./node_modules/lodash/_hashSet.js\");\n/**\n * Creates a hash object.\n *\n * @private\n * @constructor\n * @param {Array} [entries] The key-value pairs to cache.\n */\n\n\nfunction Hash(entries) {\n  var index = -1,\n      length = entries == null ? 0 : entries.length;\n  this.clear();\n\n  while (++index < length) {\n    var entry = entries[index];\n    this.set(entry[0], entry[1]);\n  }\n} // Add methods to `Hash`.\n\n\nHash.prototype.clear = hashClear;\nHash.prototype['delete'] = hashDelete;\nHash.prototype.get = hashGet;\nHash.prototype.has = hashHas;\nHash.prototype.set = hashSet;\nmodule.exports = Hash;\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/lodash/_Hash.js?");

/***/ }),

/***/ "./node_modules/lodash/_ListCache.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_ListCache.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var listCacheClear = __webpack_require__(/*! ./_listCacheClear */ \"./node_modules/lodash/_listCacheClear.js\"),\n    listCacheDelete = __webpack_require__(/*! ./_listCacheDelete */ \"./node_modules/lodash/_listCacheDelete.js\"),\n    listCacheGet = __webpack_require__(/*! ./_listCacheGet */ \"./node_modules/lodash/_listCacheGet.js\"),\n    listCacheHas = __webpack_require__(/*! ./_listCacheHas */ \"./node_modules/lodash/_listCacheHas.js\"),\n    listCacheSet = __webpack_require__(/*! ./_listCacheSet */ \"./node_modules/lodash/_listCacheSet.js\");\n/**\n * Creates an list cache object.\n *\n * @private\n * @constructor\n * @param {Array} [entries] The key-value pairs to cache.\n */\n\n\nfunction ListCache(entries) {\n  var index = -1,\n      length = entries == null ? 0 : entries.length;\n  this.clear();\n\n  while (++index < length) {\n    var entry = entries[index];\n    this.set(entry[0], entry[1]);\n  }\n} // Add methods to `ListCache`.\n\n\nListCache.prototype.clear = listCacheClear;\nListCache.prototype['delete'] = listCacheDelete;\nListCache.prototype.get = listCacheGet;\nListCache.prototype.has = listCacheHas;\nListCache.prototype.set = listCacheSet;\nmodule.exports = ListCache;\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/lodash/_ListCache.js?");

/***/ }),

/***/ "./node_modules/lodash/_Map.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/_Map.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var getNative = __webpack_require__(/*! ./_getNative */ \"./node_modules/lodash/_getNative.js\"),\n    root = __webpack_require__(/*! ./_root */ \"./node_modules/lodash/_root.js\");\n/* Built-in method references that are verified to be native. */\n\n\nvar Map = getNative(root, 'Map');\nmodule.exports = Map;\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/lodash/_Map.js?");

/***/ }),

/***/ "./node_modules/lodash/_MapCache.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_MapCache.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var mapCacheClear = __webpack_require__(/*! ./_mapCacheClear */ \"./node_modules/lodash/_mapCacheClear.js\"),\n    mapCacheDelete = __webpack_require__(/*! ./_mapCacheDelete */ \"./node_modules/lodash/_mapCacheDelete.js\"),\n    mapCacheGet = __webpack_require__(/*! ./_mapCacheGet */ \"./node_modules/lodash/_mapCacheGet.js\"),\n    mapCacheHas = __webpack_require__(/*! ./_mapCacheHas */ \"./node_modules/lodash/_mapCacheHas.js\"),\n    mapCacheSet = __webpack_require__(/*! ./_mapCacheSet */ \"./node_modules/lodash/_mapCacheSet.js\");\n/**\n * Creates a map cache object to store key-value pairs.\n *\n * @private\n * @constructor\n * @param {Array} [entries] The key-value pairs to cache.\n */\n\n\nfunction MapCache(entries) {\n  var index = -1,\n      length = entries == null ? 0 : entries.length;\n  this.clear();\n\n  while (++index < length) {\n    var entry = entries[index];\n    this.set(entry[0], entry[1]);\n  }\n} // Add methods to `MapCache`.\n\n\nMapCache.prototype.clear = mapCacheClear;\nMapCache.prototype['delete'] = mapCacheDelete;\nMapCache.prototype.get = mapCacheGet;\nMapCache.prototype.has = mapCacheHas;\nMapCache.prototype.set = mapCacheSet;\nmodule.exports = MapCache;\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/lodash/_MapCache.js?");

/***/ }),

/***/ "./node_modules/lodash/_Promise.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_Promise.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var getNative = __webpack_require__(/*! ./_getNative */ \"./node_modules/lodash/_getNative.js\"),\n    root = __webpack_require__(/*! ./_root */ \"./node_modules/lodash/_root.js\");\n/* Built-in method references that are verified to be native. */\n\n\nvar Promise = getNative(root, 'Promise');\nmodule.exports = Promise;\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/lodash/_Promise.js?");

/***/ }),

/***/ "./node_modules/lodash/_Set.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/_Set.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var getNative = __webpack_require__(/*! ./_getNative */ \"./node_modules/lodash/_getNative.js\"),\n    root = __webpack_require__(/*! ./_root */ \"./node_modules/lodash/_root.js\");\n/* Built-in method references that are verified to be native. */\n\n\nvar Set = getNative(root, 'Set');\nmodule.exports = Set;\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/lodash/_Set.js?");

/***/ }),

/***/ "./node_modules/lodash/_Symbol.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var root = __webpack_require__(/*! ./_root */ \"./node_modules/lodash/_root.js\");\n/** Built-in value references. */\n\n\nvar Symbol = root.Symbol;\nmodule.exports = Symbol;\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/lodash/_Symbol.js?");

/***/ }),

/***/ "./node_modules/lodash/_WeakMap.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_WeakMap.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var getNative = __webpack_require__(/*! ./_getNative */ \"./node_modules/lodash/_getNative.js\"),\n    root = __webpack_require__(/*! ./_root */ \"./node_modules/lodash/_root.js\");\n/* Built-in method references that are verified to be native. */\n\n\nvar WeakMap = getNative(root, 'WeakMap');\nmodule.exports = WeakMap;\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/lodash/_WeakMap.js?");

/***/ }),

/***/ "./node_modules/lodash/_arrayMap.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_arrayMap.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * A specialized version of `_.map` for arrays without support for iteratee\n * shorthands.\n *\n * @private\n * @param {Array} [array] The array to iterate over.\n * @param {Function} iteratee The function invoked per iteration.\n * @returns {Array} Returns the new mapped array.\n */\nfunction arrayMap(array, iteratee) {\n  var index = -1,\n      length = array == null ? 0 : array.length,\n      result = Array(length);\n\n  while (++index < length) {\n    result[index] = iteratee(array[index], index, array);\n  }\n\n  return result;\n}\n\nmodule.exports = arrayMap;\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/lodash/_arrayMap.js?");

/***/ }),

/***/ "./node_modules/lodash/_assocIndexOf.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_assocIndexOf.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var eq = __webpack_require__(/*! ./eq */ \"./node_modules/lodash/eq.js\");\n/**\n * Gets the index at which the `key` is found in `array` of key-value pairs.\n *\n * @private\n * @param {Array} array The array to inspect.\n * @param {*} key The key to search for.\n * @returns {number} Returns the index of the matched value, else `-1`.\n */\n\n\nfunction assocIndexOf(array, key) {\n  var length = array.length;\n\n  while (length--) {\n    if (eq(array[length][0], key)) {\n      return length;\n    }\n  }\n\n  return -1;\n}\n\nmodule.exports = assocIndexOf;\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/lodash/_assocIndexOf.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseGet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var castPath = __webpack_require__(/*! ./_castPath */ \"./node_modules/lodash/_castPath.js\"),\n    toKey = __webpack_require__(/*! ./_toKey */ \"./node_modules/lodash/_toKey.js\");\n/**\n * The base implementation of `_.get` without support for default values.\n *\n * @private\n * @param {Object} object The object to query.\n * @param {Array|string} path The path of the property to get.\n * @returns {*} Returns the resolved value.\n */\n\n\nfunction baseGet(object, path) {\n  path = castPath(path, object);\n  var index = 0,\n      length = path.length;\n\n  while (object != null && index < length) {\n    object = object[toKey(path[index++])];\n  }\n\n  return index && index == length ? object : undefined;\n}\n\nmodule.exports = baseGet;\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/lodash/_baseGet.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Symbol = __webpack_require__(/*! ./_Symbol */ \"./node_modules/lodash/_Symbol.js\"),\n    getRawTag = __webpack_require__(/*! ./_getRawTag */ \"./node_modules/lodash/_getRawTag.js\"),\n    objectToString = __webpack_require__(/*! ./_objectToString */ \"./node_modules/lodash/_objectToString.js\");\n/** `Object#toString` result references. */\n\n\nvar nullTag = '[object Null]',\n    undefinedTag = '[object Undefined]';\n/** Built-in value references. */\n\nvar symToStringTag = Symbol ? Symbol.toStringTag : undefined;\n/**\n * The base implementation of `getTag` without fallbacks for buggy environments.\n *\n * @private\n * @param {*} value The value to query.\n * @returns {string} Returns the `toStringTag`.\n */\n\nfunction baseGetTag(value) {\n  if (value == null) {\n    return value === undefined ? undefinedTag : nullTag;\n  }\n\n  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);\n}\n\nmodule.exports = baseGetTag;\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/lodash/_baseGetTag.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseIsArguments.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseIsArguments.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ \"./node_modules/lodash/_baseGetTag.js\"),\n    isObjectLike = __webpack_require__(/*! ./isObjectLike */ \"./node_modules/lodash/isObjectLike.js\");\n/** `Object#toString` result references. */\n\n\nvar argsTag = '[object Arguments]';\n/**\n * The base implementation of `_.isArguments`.\n *\n * @private\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is an `arguments` object,\n */\n\nfunction baseIsArguments(value) {\n  return isObjectLike(value) && baseGetTag(value) == argsTag;\n}\n\nmodule.exports = baseIsArguments;\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/lodash/_baseIsArguments.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseIsNative.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseIsNative.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isFunction = __webpack_require__(/*! ./isFunction */ \"./node_modules/lodash/isFunction.js\"),\n    isMasked = __webpack_require__(/*! ./_isMasked */ \"./node_modules/lodash/_isMasked.js\"),\n    isObject = __webpack_require__(/*! ./isObject */ \"./node_modules/lodash/isObject.js\"),\n    toSource = __webpack_require__(/*! ./_toSource */ \"./node_modules/lodash/_toSource.js\");\n/**\n * Used to match `RegExp`\n * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).\n */\n\n\nvar reRegExpChar = /[\\\\^$.*+?()[\\]{}|]/g;\n/** Used to detect host constructors (Safari). */\n\nvar reIsHostCtor = /^\\[object .+?Constructor\\]$/;\n/** Used for built-in method references. */\n\nvar funcProto = Function.prototype,\n    objectProto = Object.prototype;\n/** Used to resolve the decompiled source of functions. */\n\nvar funcToString = funcProto.toString;\n/** Used to check objects for own properties. */\n\nvar hasOwnProperty = objectProto.hasOwnProperty;\n/** Used to detect if a method is native. */\n\nvar reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\\\$&').replace(/hasOwnProperty|(function).*?(?=\\\\\\()| for .+?(?=\\\\\\])/g, '$1.*?') + '$');\n/**\n * The base implementation of `_.isNative` without bad shim checks.\n *\n * @private\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a native function,\n *  else `false`.\n */\n\nfunction baseIsNative(value) {\n  if (!isObject(value) || isMasked(value)) {\n    return false;\n  }\n\n  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;\n  return pattern.test(toSource(value));\n}\n\nmodule.exports = baseIsNative;\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/lodash/_baseIsNative.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseIsTypedArray.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_baseIsTypedArray.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ \"./node_modules/lodash/_baseGetTag.js\"),\n    isLength = __webpack_require__(/*! ./isLength */ \"./node_modules/lodash/isLength.js\"),\n    isObjectLike = __webpack_require__(/*! ./isObjectLike */ \"./node_modules/lodash/isObjectLike.js\");\n/** `Object#toString` result references. */\n\n\nvar argsTag = '[object Arguments]',\n    arrayTag = '[object Array]',\n    boolTag = '[object Boolean]',\n    dateTag = '[object Date]',\n    errorTag = '[object Error]',\n    funcTag = '[object Function]',\n    mapTag = '[object Map]',\n    numberTag = '[object Number]',\n    objectTag = '[object Object]',\n    regexpTag = '[object RegExp]',\n    setTag = '[object Set]',\n    stringTag = '[object String]',\n    weakMapTag = '[object WeakMap]';\nvar arrayBufferTag = '[object ArrayBuffer]',\n    dataViewTag = '[object DataView]',\n    float32Tag = '[object Float32Array]',\n    float64Tag = '[object Float64Array]',\n    int8Tag = '[object Int8Array]',\n    int16Tag = '[object Int16Array]',\n    int32Tag = '[object Int32Array]',\n    uint8Tag = '[object Uint8Array]',\n    uint8ClampedTag = '[object Uint8ClampedArray]',\n    uint16Tag = '[object Uint16Array]',\n    uint32Tag = '[object Uint32Array]';\n/** Used to identify `toStringTag` values of typed arrays. */\n\nvar typedArrayTags = {};\ntypedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;\ntypedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;\n/**\n * The base implementation of `_.isTypedArray` without Node.js optimizations.\n *\n * @private\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.\n */\n\nfunction baseIsTypedArray(value) {\n  return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];\n}\n\nmodule.exports = baseIsTypedArray;\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/lodash/_baseIsTypedArray.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseKeys.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseKeys.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isPrototype = __webpack_require__(/*! ./_isPrototype */ \"./node_modules/lodash/_isPrototype.js\"),\n    nativeKeys = __webpack_require__(/*! ./_nativeKeys */ \"./node_modules/lodash/_nativeKeys.js\");\n/** Used for built-in method references. */\n\n\nvar objectProto = Object.prototype;\n/** Used to check objects for own properties. */\n\nvar hasOwnProperty = objectProto.hasOwnProperty;\n/**\n * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.\n *\n * @private\n * @param {Object} object The object to query.\n * @returns {Array} Returns the array of property names.\n */\n\nfunction baseKeys(object) {\n  if (!isPrototype(object)) {\n    return nativeKeys(object);\n  }\n\n  var result = [];\n\n  for (var key in Object(object)) {\n    if (hasOwnProperty.call(object, key) && key != 'constructor') {\n      result.push(key);\n    }\n  }\n\n  return result;\n}\n\nmodule.exports = baseKeys;\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/lodash/_baseKeys.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseToString.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseToString.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Symbol = __webpack_require__(/*! ./_Symbol */ \"./node_modules/lodash/_Symbol.js\"),\n    arrayMap = __webpack_require__(/*! ./_arrayMap */ \"./node_modules/lodash/_arrayMap.js\"),\n    isArray = __webpack_require__(/*! ./isArray */ \"./node_modules/lodash/isArray.js\"),\n    isSymbol = __webpack_require__(/*! ./isSymbol */ \"./node_modules/lodash/isSymbol.js\");\n/** Used as references for various `Number` constants. */\n\n\nvar INFINITY = 1 / 0;\n/** Used to convert symbols to primitives and strings. */\n\nvar symbolProto = Symbol ? Symbol.prototype : undefined,\n    symbolToString = symbolProto ? symbolProto.toString : undefined;\n/**\n * The base implementation of `_.toString` which doesn't convert nullish\n * values to empty strings.\n *\n * @private\n * @param {*} value The value to process.\n * @returns {string} Returns the string.\n */\n\nfunction baseToString(value) {\n  // Exit early for strings to avoid a performance hit in some environments.\n  if (typeof value == 'string') {\n    return value;\n  }\n\n  if (isArray(value)) {\n    // Recursively convert values (susceptible to call stack limits).\n    return arrayMap(value, baseToString) + '';\n  }\n\n  if (isSymbol(value)) {\n    return symbolToString ? symbolToString.call(value) : '';\n  }\n\n  var result = value + '';\n  return result == '0' && 1 / value == -INFINITY ? '-0' : result;\n}\n\nmodule.exports = baseToString;\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/lodash/_baseToString.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseUnary.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseUnary.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * The base implementation of `_.unary` without support for storing metadata.\n *\n * @private\n * @param {Function} func The function to cap arguments for.\n * @returns {Function} Returns the new capped function.\n */\nfunction baseUnary(func) {\n  return function (value) {\n    return func(value);\n  };\n}\n\nmodule.exports = baseUnary;\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/lodash/_baseUnary.js?");

/***/ }),

/***/ "./node_modules/lodash/_castPath.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_castPath.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isArray = __webpack_require__(/*! ./isArray */ \"./node_modules/lodash/isArray.js\"),\n    isKey = __webpack_require__(/*! ./_isKey */ \"./node_modules/lodash/_isKey.js\"),\n    stringToPath = __webpack_require__(/*! ./_stringToPath */ \"./node_modules/lodash/_stringToPath.js\"),\n    toString = __webpack_require__(/*! ./toString */ \"./node_modules/lodash/toString.js\");\n/**\n * Casts `value` to a path array if it's not one.\n *\n * @private\n * @param {*} value The value to inspect.\n * @param {Object} [object] The object to query keys on.\n * @returns {Array} Returns the cast property path array.\n */\n\n\nfunction castPath(value, object) {\n  if (isArray(value)) {\n    return value;\n  }\n\n  return isKey(value, object) ? [value] : stringToPath(toString(value));\n}\n\nmodule.exports = castPath;\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/lodash/_castPath.js?");

/***/ }),

/***/ "./node_modules/lodash/_coreJsData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_coreJsData.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var root = __webpack_require__(/*! ./_root */ \"./node_modules/lodash/_root.js\");\n/** Used to detect overreaching core-js shims. */\n\n\nvar coreJsData = root['__core-js_shared__'];\nmodule.exports = coreJsData;\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/lodash/_coreJsData.js?");

/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/** Detect free variable `global` from Node.js. */\nvar freeGlobal = typeof global == 'object' && global && global.Object === Object && global;\nmodule.exports = freeGlobal;\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/lodash/_freeGlobal.js?");

/***/ }),

/***/ "./node_modules/lodash/_getMapData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getMapData.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isKeyable = __webpack_require__(/*! ./_isKeyable */ \"./node_modules/lodash/_isKeyable.js\");\n/**\n * Gets the data for `map`.\n *\n * @private\n * @param {Object} map The map to query.\n * @param {string} key The reference key.\n * @returns {*} Returns the map data.\n */\n\n\nfunction getMapData(map, key) {\n  var data = map.__data__;\n  return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;\n}\n\nmodule.exports = getMapData;\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/lodash/_getMapData.js?");

/***/ }),

/***/ "./node_modules/lodash/_getNative.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getNative.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseIsNative = __webpack_require__(/*! ./_baseIsNative */ \"./node_modules/lodash/_baseIsNative.js\"),\n    getValue = __webpack_require__(/*! ./_getValue */ \"./node_modules/lodash/_getValue.js\");\n/**\n * Gets the native function at `key` of `object`.\n *\n * @private\n * @param {Object} object The object to query.\n * @param {string} key The key of the method to get.\n * @returns {*} Returns the function if it's native, else `undefined`.\n */\n\n\nfunction getNative(object, key) {\n  var value = getValue(object, key);\n  return baseIsNative(value) ? value : undefined;\n}\n\nmodule.exports = getNative;\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/lodash/_getNative.js?");

/***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Symbol = __webpack_require__(/*! ./_Symbol */ \"./node_modules/lodash/_Symbol.js\");\n/** Used for built-in method references. */\n\n\nvar objectProto = Object.prototype;\n/** Used to check objects for own properties. */\n\nvar hasOwnProperty = objectProto.hasOwnProperty;\n/**\n * Used to resolve the\n * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)\n * of values.\n */\n\nvar nativeObjectToString = objectProto.toString;\n/** Built-in value references. */\n\nvar symToStringTag = Symbol ? Symbol.toStringTag : undefined;\n/**\n * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.\n *\n * @private\n * @param {*} value The value to query.\n * @returns {string} Returns the raw `toStringTag`.\n */\n\nfunction getRawTag(value) {\n  var isOwn = hasOwnProperty.call(value, symToStringTag),\n      tag = value[symToStringTag];\n\n  try {\n    value[symToStringTag] = undefined;\n    var unmasked = true;\n  } catch (e) {}\n\n  var result = nativeObjectToString.call(value);\n\n  if (unmasked) {\n    if (isOwn) {\n      value[symToStringTag] = tag;\n    } else {\n      delete value[symToStringTag];\n    }\n  }\n\n  return result;\n}\n\nmodule.exports = getRawTag;\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/lodash/_getRawTag.js?");

/***/ }),

/***/ "./node_modules/lodash/_getTag.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_getTag.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var DataView = __webpack_require__(/*! ./_DataView */ \"./node_modules/lodash/_DataView.js\"),\n    Map = __webpack_require__(/*! ./_Map */ \"./node_modules/lodash/_Map.js\"),\n    Promise = __webpack_require__(/*! ./_Promise */ \"./node_modules/lodash/_Promise.js\"),\n    Set = __webpack_require__(/*! ./_Set */ \"./node_modules/lodash/_Set.js\"),\n    WeakMap = __webpack_require__(/*! ./_WeakMap */ \"./node_modules/lodash/_WeakMap.js\"),\n    baseGetTag = __webpack_require__(/*! ./_baseGetTag */ \"./node_modules/lodash/_baseGetTag.js\"),\n    toSource = __webpack_require__(/*! ./_toSource */ \"./node_modules/lodash/_toSource.js\");\n/** `Object#toString` result references. */\n\n\nvar mapTag = '[object Map]',\n    objectTag = '[object Object]',\n    promiseTag = '[object Promise]',\n    setTag = '[object Set]',\n    weakMapTag = '[object WeakMap]';\nvar dataViewTag = '[object DataView]';\n/** Used to detect maps, sets, and weakmaps. */\n\nvar dataViewCtorString = toSource(DataView),\n    mapCtorString = toSource(Map),\n    promiseCtorString = toSource(Promise),\n    setCtorString = toSource(Set),\n    weakMapCtorString = toSource(WeakMap);\n/**\n * Gets the `toStringTag` of `value`.\n *\n * @private\n * @param {*} value The value to query.\n * @returns {string} Returns the `toStringTag`.\n */\n\nvar getTag = baseGetTag; // Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.\n\nif (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map()) != mapTag || Promise && getTag(Promise.resolve()) != promiseTag || Set && getTag(new Set()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {\n  getTag = function (value) {\n    var result = baseGetTag(value),\n        Ctor = result == objectTag ? value.constructor : undefined,\n        ctorString = Ctor ? toSource(Ctor) : '';\n\n    if (ctorString) {\n      switch (ctorString) {\n        case dataViewCtorString:\n          return dataViewTag;\n\n        case mapCtorString:\n          return mapTag;\n\n        case promiseCtorString:\n          return promiseTag;\n\n        case setCtorString:\n          return setTag;\n\n        case weakMapCtorString:\n          return weakMapTag;\n      }\n    }\n\n    return result;\n  };\n}\n\nmodule.exports = getTag;\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/lodash/_getTag.js?");

/***/ }),

/***/ "./node_modules/lodash/_getValue.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_getValue.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Gets the value at `key` of `object`.\n *\n * @private\n * @param {Object} [object] The object to query.\n * @param {string} key The key of the property to get.\n * @returns {*} Returns the property value.\n */\nfunction getValue(object, key) {\n  return object == null ? undefined : object[key];\n}\n\nmodule.exports = getValue;\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/lodash/_getValue.js?");

/***/ }),

/***/ "./node_modules/lodash/_hashClear.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_hashClear.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ \"./node_modules/lodash/_nativeCreate.js\");\n/**\n * Removes all key-value entries from the hash.\n *\n * @private\n * @name clear\n * @memberOf Hash\n */\n\n\nfunction hashClear() {\n  this.__data__ = nativeCreate ? nativeCreate(null) : {};\n  this.size = 0;\n}\n\nmodule.exports = hashClear;\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/lodash/_hashClear.js?");

/***/ }),

/***/ "./node_modules/lodash/_hashDelete.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_hashDelete.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Removes `key` and its value from the hash.\n *\n * @private\n * @name delete\n * @memberOf Hash\n * @param {Object} hash The hash to modify.\n * @param {string} key The key of the value to remove.\n * @returns {boolean} Returns `true` if the entry was removed, else `false`.\n */\nfunction hashDelete(key) {\n  var result = this.has(key) && delete this.__data__[key];\n  this.size -= result ? 1 : 0;\n  return result;\n}\n\nmodule.exports = hashDelete;\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/lodash/_hashDelete.js?");

/***/ }),

/***/ "./node_modules/lodash/_hashGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashGet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ \"./node_modules/lodash/_nativeCreate.js\");\n/** Used to stand-in for `undefined` hash values. */\n\n\nvar HASH_UNDEFINED = '__lodash_hash_undefined__';\n/** Used for built-in method references. */\n\nvar objectProto = Object.prototype;\n/** Used to check objects for own properties. */\n\nvar hasOwnProperty = objectProto.hasOwnProperty;\n/**\n * Gets the hash value for `key`.\n *\n * @private\n * @name get\n * @memberOf Hash\n * @param {string} key The key of the value to get.\n * @returns {*} Returns the entry value.\n */\n\nfunction hashGet(key) {\n  var data = this.__data__;\n\n  if (nativeCreate) {\n    var result = data[key];\n    return result === HASH_UNDEFINED ? undefined : result;\n  }\n\n  return hasOwnProperty.call(data, key) ? data[key] : undefined;\n}\n\nmodule.exports = hashGet;\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/lodash/_hashGet.js?");

/***/ }),

/***/ "./node_modules/lodash/_hashHas.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashHas.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ \"./node_modules/lodash/_nativeCreate.js\");\n/** Used for built-in method references. */\n\n\nvar objectProto = Object.prototype;\n/** Used to check objects for own properties. */\n\nvar hasOwnProperty = objectProto.hasOwnProperty;\n/**\n * Checks if a hash value for `key` exists.\n *\n * @private\n * @name has\n * @memberOf Hash\n * @param {string} key The key of the entry to check.\n * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.\n */\n\nfunction hashHas(key) {\n  var data = this.__data__;\n  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);\n}\n\nmodule.exports = hashHas;\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/lodash/_hashHas.js?");

/***/ }),

/***/ "./node_modules/lodash/_hashSet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashSet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ \"./node_modules/lodash/_nativeCreate.js\");\n/** Used to stand-in for `undefined` hash values. */\n\n\nvar HASH_UNDEFINED = '__lodash_hash_undefined__';\n/**\n * Sets the hash `key` to `value`.\n *\n * @private\n * @name set\n * @memberOf Hash\n * @param {string} key The key of the value to set.\n * @param {*} value The value to set.\n * @returns {Object} Returns the hash instance.\n */\n\nfunction hashSet(key, value) {\n  var data = this.__data__;\n  this.size += this.has(key) ? 0 : 1;\n  data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;\n  return this;\n}\n\nmodule.exports = hashSet;\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/lodash/_hashSet.js?");

/***/ }),

/***/ "./node_modules/lodash/_isKey.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_isKey.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isArray = __webpack_require__(/*! ./isArray */ \"./node_modules/lodash/isArray.js\"),\n    isSymbol = __webpack_require__(/*! ./isSymbol */ \"./node_modules/lodash/isSymbol.js\");\n/** Used to match property names within property paths. */\n\n\nvar reIsDeepProp = /\\.|\\[(?:[^[\\]]*|([\"'])(?:(?!\\1)[^\\\\]|\\\\.)*?\\1)\\]/,\n    reIsPlainProp = /^\\w*$/;\n/**\n * Checks if `value` is a property name and not a property path.\n *\n * @private\n * @param {*} value The value to check.\n * @param {Object} [object] The object to query keys on.\n * @returns {boolean} Returns `true` if `value` is a property name, else `false`.\n */\n\nfunction isKey(value, object) {\n  if (isArray(value)) {\n    return false;\n  }\n\n  var type = typeof value;\n\n  if (type == 'number' || type == 'symbol' || type == 'boolean' || value == null || isSymbol(value)) {\n    return true;\n  }\n\n  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);\n}\n\nmodule.exports = isKey;\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/lodash/_isKey.js?");

/***/ }),

/***/ "./node_modules/lodash/_isKeyable.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_isKeyable.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Checks if `value` is suitable for use as unique object key.\n *\n * @private\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is suitable, else `false`.\n */\nfunction isKeyable(value) {\n  var type = typeof value;\n  return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;\n}\n\nmodule.exports = isKeyable;\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/lodash/_isKeyable.js?");

/***/ }),

/***/ "./node_modules/lodash/_isMasked.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_isMasked.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var coreJsData = __webpack_require__(/*! ./_coreJsData */ \"./node_modules/lodash/_coreJsData.js\");\n/** Used to detect methods masquerading as native. */\n\n\nvar maskSrcKey = function () {\n  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');\n  return uid ? 'Symbol(src)_1.' + uid : '';\n}();\n/**\n * Checks if `func` has its source masked.\n *\n * @private\n * @param {Function} func The function to check.\n * @returns {boolean} Returns `true` if `func` is masked, else `false`.\n */\n\n\nfunction isMasked(func) {\n  return !!maskSrcKey && maskSrcKey in func;\n}\n\nmodule.exports = isMasked;\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/lodash/_isMasked.js?");

/***/ }),

/***/ "./node_modules/lodash/_isPrototype.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_isPrototype.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n/**\n * Checks if `value` is likely a prototype object.\n *\n * @private\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.\n */\n\nfunction isPrototype(value) {\n  var Ctor = value && value.constructor,\n      proto = typeof Ctor == 'function' && Ctor.prototype || objectProto;\n  return value === proto;\n}\n\nmodule.exports = isPrototype;\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/lodash/_isPrototype.js?");

/***/ }),

/***/ "./node_modules/lodash/_listCacheClear.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_listCacheClear.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Removes all key-value entries from the list cache.\n *\n * @private\n * @name clear\n * @memberOf ListCache\n */\nfunction listCacheClear() {\n  this.__data__ = [];\n  this.size = 0;\n}\n\nmodule.exports = listCacheClear;\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/lodash/_listCacheClear.js?");

/***/ }),

/***/ "./node_modules/lodash/_listCacheDelete.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_listCacheDelete.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ \"./node_modules/lodash/_assocIndexOf.js\");\n/** Used for built-in method references. */\n\n\nvar arrayProto = Array.prototype;\n/** Built-in value references. */\n\nvar splice = arrayProto.splice;\n/**\n * Removes `key` and its value from the list cache.\n *\n * @private\n * @name delete\n * @memberOf ListCache\n * @param {string} key The key of the value to remove.\n * @returns {boolean} Returns `true` if the entry was removed, else `false`.\n */\n\nfunction listCacheDelete(key) {\n  var data = this.__data__,\n      index = assocIndexOf(data, key);\n\n  if (index < 0) {\n    return false;\n  }\n\n  var lastIndex = data.length - 1;\n\n  if (index == lastIndex) {\n    data.pop();\n  } else {\n    splice.call(data, index, 1);\n  }\n\n  --this.size;\n  return true;\n}\n\nmodule.exports = listCacheDelete;\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/lodash/_listCacheDelete.js?");

/***/ }),

/***/ "./node_modules/lodash/_listCacheGet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheGet.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ \"./node_modules/lodash/_assocIndexOf.js\");\n/**\n * Gets the list cache value for `key`.\n *\n * @private\n * @name get\n * @memberOf ListCache\n * @param {string} key The key of the value to get.\n * @returns {*} Returns the entry value.\n */\n\n\nfunction listCacheGet(key) {\n  var data = this.__data__,\n      index = assocIndexOf(data, key);\n  return index < 0 ? undefined : data[index][1];\n}\n\nmodule.exports = listCacheGet;\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/lodash/_listCacheGet.js?");

/***/ }),

/***/ "./node_modules/lodash/_listCacheHas.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheHas.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ \"./node_modules/lodash/_assocIndexOf.js\");\n/**\n * Checks if a list cache value for `key` exists.\n *\n * @private\n * @name has\n * @memberOf ListCache\n * @param {string} key The key of the entry to check.\n * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.\n */\n\n\nfunction listCacheHas(key) {\n  return assocIndexOf(this.__data__, key) > -1;\n}\n\nmodule.exports = listCacheHas;\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/lodash/_listCacheHas.js?");

/***/ }),

/***/ "./node_modules/lodash/_listCacheSet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheSet.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ \"./node_modules/lodash/_assocIndexOf.js\");\n/**\n * Sets the list cache `key` to `value`.\n *\n * @private\n * @name set\n * @memberOf ListCache\n * @param {string} key The key of the value to set.\n * @param {*} value The value to set.\n * @returns {Object} Returns the list cache instance.\n */\n\n\nfunction listCacheSet(key, value) {\n  var data = this.__data__,\n      index = assocIndexOf(data, key);\n\n  if (index < 0) {\n    ++this.size;\n    data.push([key, value]);\n  } else {\n    data[index][1] = value;\n  }\n\n  return this;\n}\n\nmodule.exports = listCacheSet;\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/lodash/_listCacheSet.js?");

/***/ }),

/***/ "./node_modules/lodash/_mapCacheClear.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_mapCacheClear.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Hash = __webpack_require__(/*! ./_Hash */ \"./node_modules/lodash/_Hash.js\"),\n    ListCache = __webpack_require__(/*! ./_ListCache */ \"./node_modules/lodash/_ListCache.js\"),\n    Map = __webpack_require__(/*! ./_Map */ \"./node_modules/lodash/_Map.js\");\n/**\n * Removes all key-value entries from the map.\n *\n * @private\n * @name clear\n * @memberOf MapCache\n */\n\n\nfunction mapCacheClear() {\n  this.size = 0;\n  this.__data__ = {\n    'hash': new Hash(),\n    'map': new (Map || ListCache)(),\n    'string': new Hash()\n  };\n}\n\nmodule.exports = mapCacheClear;\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/lodash/_mapCacheClear.js?");

/***/ }),

/***/ "./node_modules/lodash/_mapCacheDelete.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_mapCacheDelete.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var getMapData = __webpack_require__(/*! ./_getMapData */ \"./node_modules/lodash/_getMapData.js\");\n/**\n * Removes `key` and its value from the map.\n *\n * @private\n * @name delete\n * @memberOf MapCache\n * @param {string} key The key of the value to remove.\n * @returns {boolean} Returns `true` if the entry was removed, else `false`.\n */\n\n\nfunction mapCacheDelete(key) {\n  var result = getMapData(this, key)['delete'](key);\n  this.size -= result ? 1 : 0;\n  return result;\n}\n\nmodule.exports = mapCacheDelete;\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/lodash/_mapCacheDelete.js?");

/***/ }),

/***/ "./node_modules/lodash/_mapCacheGet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheGet.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var getMapData = __webpack_require__(/*! ./_getMapData */ \"./node_modules/lodash/_getMapData.js\");\n/**\n * Gets the map value for `key`.\n *\n * @private\n * @name get\n * @memberOf MapCache\n * @param {string} key The key of the value to get.\n * @returns {*} Returns the entry value.\n */\n\n\nfunction mapCacheGet(key) {\n  return getMapData(this, key).get(key);\n}\n\nmodule.exports = mapCacheGet;\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/lodash/_mapCacheGet.js?");

/***/ }),

/***/ "./node_modules/lodash/_mapCacheHas.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheHas.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var getMapData = __webpack_require__(/*! ./_getMapData */ \"./node_modules/lodash/_getMapData.js\");\n/**\n * Checks if a map value for `key` exists.\n *\n * @private\n * @name has\n * @memberOf MapCache\n * @param {string} key The key of the entry to check.\n * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.\n */\n\n\nfunction mapCacheHas(key) {\n  return getMapData(this, key).has(key);\n}\n\nmodule.exports = mapCacheHas;\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/lodash/_mapCacheHas.js?");

/***/ }),

/***/ "./node_modules/lodash/_mapCacheSet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheSet.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var getMapData = __webpack_require__(/*! ./_getMapData */ \"./node_modules/lodash/_getMapData.js\");\n/**\n * Sets the map `key` to `value`.\n *\n * @private\n * @name set\n * @memberOf MapCache\n * @param {string} key The key of the value to set.\n * @param {*} value The value to set.\n * @returns {Object} Returns the map cache instance.\n */\n\n\nfunction mapCacheSet(key, value) {\n  var data = getMapData(this, key),\n      size = data.size;\n  data.set(key, value);\n  this.size += data.size == size ? 0 : 1;\n  return this;\n}\n\nmodule.exports = mapCacheSet;\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/lodash/_mapCacheSet.js?");

/***/ }),

/***/ "./node_modules/lodash/_memoizeCapped.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_memoizeCapped.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var memoize = __webpack_require__(/*! ./memoize */ \"./node_modules/lodash/memoize.js\");\n/** Used as the maximum memoize cache size. */\n\n\nvar MAX_MEMOIZE_SIZE = 500;\n/**\n * A specialized version of `_.memoize` which clears the memoized function's\n * cache when it exceeds `MAX_MEMOIZE_SIZE`.\n *\n * @private\n * @param {Function} func The function to have its output memoized.\n * @returns {Function} Returns the new memoized function.\n */\n\nfunction memoizeCapped(func) {\n  var result = memoize(func, function (key) {\n    if (cache.size === MAX_MEMOIZE_SIZE) {\n      cache.clear();\n    }\n\n    return key;\n  });\n  var cache = result.cache;\n  return result;\n}\n\nmodule.exports = memoizeCapped;\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/lodash/_memoizeCapped.js?");

/***/ }),

/***/ "./node_modules/lodash/_nativeCreate.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_nativeCreate.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var getNative = __webpack_require__(/*! ./_getNative */ \"./node_modules/lodash/_getNative.js\");\n/* Built-in method references that are verified to be native. */\n\n\nvar nativeCreate = getNative(Object, 'create');\nmodule.exports = nativeCreate;\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/lodash/_nativeCreate.js?");

/***/ }),

/***/ "./node_modules/lodash/_nativeKeys.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_nativeKeys.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var overArg = __webpack_require__(/*! ./_overArg */ \"./node_modules/lodash/_overArg.js\");\n/* Built-in method references for those with the same name as other `lodash` methods. */\n\n\nvar nativeKeys = overArg(Object.keys, Object);\nmodule.exports = nativeKeys;\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/lodash/_nativeKeys.js?");

/***/ }),

/***/ "./node_modules/lodash/_nodeUtil.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_nodeUtil.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ \"./node_modules/lodash/_freeGlobal.js\");\n/** Detect free variable `exports`. */\n\n\nvar freeExports =  true && exports && !exports.nodeType && exports;\n/** Detect free variable `module`. */\n\nvar freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;\n/** Detect the popular CommonJS extension `module.exports`. */\n\nvar moduleExports = freeModule && freeModule.exports === freeExports;\n/** Detect free variable `process` from Node.js. */\n\nvar freeProcess = moduleExports && freeGlobal.process;\n/** Used to access faster Node.js helpers. */\n\nvar nodeUtil = function () {\n  try {\n    // Use `util.types` for Node.js 10+.\n    var types = freeModule && freeModule.require && freeModule.require('util').types;\n\n    if (types) {\n      return types;\n    } // Legacy `process.binding('util')` for Node.js < 10.\n\n\n    return freeProcess && freeProcess.binding && freeProcess.binding('util');\n  } catch (e) {}\n}();\n\nmodule.exports = nodeUtil;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/lodash/_nodeUtil.js?");

/***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n/**\n * Used to resolve the\n * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)\n * of values.\n */\n\nvar nativeObjectToString = objectProto.toString;\n/**\n * Converts `value` to a string using `Object.prototype.toString`.\n *\n * @private\n * @param {*} value The value to convert.\n * @returns {string} Returns the converted string.\n */\n\nfunction objectToString(value) {\n  return nativeObjectToString.call(value);\n}\n\nmodule.exports = objectToString;\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/lodash/_objectToString.js?");

/***/ }),

/***/ "./node_modules/lodash/_overArg.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_overArg.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Creates a unary function that invokes `func` with its argument transformed.\n *\n * @private\n * @param {Function} func The function to wrap.\n * @param {Function} transform The argument transform.\n * @returns {Function} Returns the new function.\n */\nfunction overArg(func, transform) {\n  return function (arg) {\n    return func(transform(arg));\n  };\n}\n\nmodule.exports = overArg;\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/lodash/_overArg.js?");

/***/ }),

/***/ "./node_modules/lodash/_root.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ \"./node_modules/lodash/_freeGlobal.js\");\n/** Detect free variable `self`. */\n\n\nvar freeSelf = typeof self == 'object' && self && self.Object === Object && self;\n/** Used as a reference to the global object. */\n\nvar root = freeGlobal || freeSelf || Function('return this')();\nmodule.exports = root;\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/lodash/_root.js?");

/***/ }),

/***/ "./node_modules/lodash/_stringToPath.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_stringToPath.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var memoizeCapped = __webpack_require__(/*! ./_memoizeCapped */ \"./node_modules/lodash/_memoizeCapped.js\");\n/** Used to match property names within property paths. */\n\n\nvar rePropName = /[^.[\\]]+|\\[(?:(-?\\d+(?:\\.\\d+)?)|([\"'])((?:(?!\\2)[^\\\\]|\\\\.)*?)\\2)\\]|(?=(?:\\.|\\[\\])(?:\\.|\\[\\]|$))/g;\n/** Used to match backslashes in property paths. */\n\nvar reEscapeChar = /\\\\(\\\\)?/g;\n/**\n * Converts `string` to a property path array.\n *\n * @private\n * @param {string} string The string to convert.\n * @returns {Array} Returns the property path array.\n */\n\nvar stringToPath = memoizeCapped(function (string) {\n  var result = [];\n\n  if (string.charCodeAt(0) === 46\n  /* . */\n  ) {\n      result.push('');\n    }\n\n  string.replace(rePropName, function (match, number, quote, subString) {\n    result.push(quote ? subString.replace(reEscapeChar, '$1') : number || match);\n  });\n  return result;\n});\nmodule.exports = stringToPath;\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/lodash/_stringToPath.js?");

/***/ }),

/***/ "./node_modules/lodash/_toKey.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_toKey.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isSymbol = __webpack_require__(/*! ./isSymbol */ \"./node_modules/lodash/isSymbol.js\");\n/** Used as references for various `Number` constants. */\n\n\nvar INFINITY = 1 / 0;\n/**\n * Converts `value` to a string key if it's not a string or symbol.\n *\n * @private\n * @param {*} value The value to inspect.\n * @returns {string|symbol} Returns the key.\n */\n\nfunction toKey(value) {\n  if (typeof value == 'string' || isSymbol(value)) {\n    return value;\n  }\n\n  var result = value + '';\n  return result == '0' && 1 / value == -INFINITY ? '-0' : result;\n}\n\nmodule.exports = toKey;\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/lodash/_toKey.js?");

/***/ }),

/***/ "./node_modules/lodash/_toSource.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_toSource.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/** Used for built-in method references. */\nvar funcProto = Function.prototype;\n/** Used to resolve the decompiled source of functions. */\n\nvar funcToString = funcProto.toString;\n/**\n * Converts `func` to its source code.\n *\n * @private\n * @param {Function} func The function to convert.\n * @returns {string} Returns the source code.\n */\n\nfunction toSource(func) {\n  if (func != null) {\n    try {\n      return funcToString.call(func);\n    } catch (e) {}\n\n    try {\n      return func + '';\n    } catch (e) {}\n  }\n\n  return '';\n}\n\nmodule.exports = toSource;\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/lodash/_toSource.js?");

/***/ }),

/***/ "./node_modules/lodash/eq.js":
/*!***********************************!*\
  !*** ./node_modules/lodash/eq.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Performs a\n * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)\n * comparison between two values to determine if they are equivalent.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to compare.\n * @param {*} other The other value to compare.\n * @returns {boolean} Returns `true` if the values are equivalent, else `false`.\n * @example\n *\n * var object = { 'a': 1 };\n * var other = { 'a': 1 };\n *\n * _.eq(object, object);\n * // => true\n *\n * _.eq(object, other);\n * // => false\n *\n * _.eq('a', 'a');\n * // => true\n *\n * _.eq('a', Object('a'));\n * // => false\n *\n * _.eq(NaN, NaN);\n * // => true\n */\nfunction eq(value, other) {\n  return value === other || value !== value && other !== other;\n}\n\nmodule.exports = eq;\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/lodash/eq.js?");

/***/ }),

/***/ "./node_modules/lodash/get.js":
/*!************************************!*\
  !*** ./node_modules/lodash/get.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseGet = __webpack_require__(/*! ./_baseGet */ \"./node_modules/lodash/_baseGet.js\");\n/**\n * Gets the value at `path` of `object`. If the resolved value is\n * `undefined`, the `defaultValue` is returned in its place.\n *\n * @static\n * @memberOf _\n * @since 3.7.0\n * @category Object\n * @param {Object} object The object to query.\n * @param {Array|string} path The path of the property to get.\n * @param {*} [defaultValue] The value returned for `undefined` resolved values.\n * @returns {*} Returns the resolved value.\n * @example\n *\n * var object = { 'a': [{ 'b': { 'c': 3 } }] };\n *\n * _.get(object, 'a[0].b.c');\n * // => 3\n *\n * _.get(object, ['a', '0', 'b', 'c']);\n * // => 3\n *\n * _.get(object, 'a.b.c', 'default');\n * // => 'default'\n */\n\n\nfunction get(object, path, defaultValue) {\n  var result = object == null ? undefined : baseGet(object, path);\n  return result === undefined ? defaultValue : result;\n}\n\nmodule.exports = get;\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/lodash/get.js?");

/***/ }),

/***/ "./node_modules/lodash/isArguments.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArguments.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseIsArguments = __webpack_require__(/*! ./_baseIsArguments */ \"./node_modules/lodash/_baseIsArguments.js\"),\n    isObjectLike = __webpack_require__(/*! ./isObjectLike */ \"./node_modules/lodash/isObjectLike.js\");\n/** Used for built-in method references. */\n\n\nvar objectProto = Object.prototype;\n/** Used to check objects for own properties. */\n\nvar hasOwnProperty = objectProto.hasOwnProperty;\n/** Built-in value references. */\n\nvar propertyIsEnumerable = objectProto.propertyIsEnumerable;\n/**\n * Checks if `value` is likely an `arguments` object.\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is an `arguments` object,\n *  else `false`.\n * @example\n *\n * _.isArguments(function() { return arguments; }());\n * // => true\n *\n * _.isArguments([1, 2, 3]);\n * // => false\n */\n\nvar isArguments = baseIsArguments(function () {\n  return arguments;\n}()) ? baseIsArguments : function (value) {\n  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');\n};\nmodule.exports = isArguments;\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/lodash/isArguments.js?");

/***/ }),

/***/ "./node_modules/lodash/isArray.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/isArray.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Checks if `value` is classified as an `Array` object.\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is an array, else `false`.\n * @example\n *\n * _.isArray([1, 2, 3]);\n * // => true\n *\n * _.isArray(document.body.children);\n * // => false\n *\n * _.isArray('abc');\n * // => false\n *\n * _.isArray(_.noop);\n * // => false\n */\nvar isArray = Array.isArray;\nmodule.exports = isArray;\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/lodash/isArray.js?");

/***/ }),

/***/ "./node_modules/lodash/isArrayLike.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArrayLike.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isFunction = __webpack_require__(/*! ./isFunction */ \"./node_modules/lodash/isFunction.js\"),\n    isLength = __webpack_require__(/*! ./isLength */ \"./node_modules/lodash/isLength.js\");\n/**\n * Checks if `value` is array-like. A value is considered array-like if it's\n * not a function and has a `value.length` that's an integer greater than or\n * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is array-like, else `false`.\n * @example\n *\n * _.isArrayLike([1, 2, 3]);\n * // => true\n *\n * _.isArrayLike(document.body.children);\n * // => true\n *\n * _.isArrayLike('abc');\n * // => true\n *\n * _.isArrayLike(_.noop);\n * // => false\n */\n\n\nfunction isArrayLike(value) {\n  return value != null && isLength(value.length) && !isFunction(value);\n}\n\nmodule.exports = isArrayLike;\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/lodash/isArrayLike.js?");

/***/ }),

/***/ "./node_modules/lodash/isBuffer.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isBuffer.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(/*! ./_root */ \"./node_modules/lodash/_root.js\"),\n    stubFalse = __webpack_require__(/*! ./stubFalse */ \"./node_modules/lodash/stubFalse.js\");\n/** Detect free variable `exports`. */\n\n\nvar freeExports =  true && exports && !exports.nodeType && exports;\n/** Detect free variable `module`. */\n\nvar freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;\n/** Detect the popular CommonJS extension `module.exports`. */\n\nvar moduleExports = freeModule && freeModule.exports === freeExports;\n/** Built-in value references. */\n\nvar Buffer = moduleExports ? root.Buffer : undefined;\n/* Built-in method references for those with the same name as other `lodash` methods. */\n\nvar nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;\n/**\n * Checks if `value` is a buffer.\n *\n * @static\n * @memberOf _\n * @since 4.3.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.\n * @example\n *\n * _.isBuffer(new Buffer(2));\n * // => true\n *\n * _.isBuffer(new Uint8Array(2));\n * // => false\n */\n\nvar isBuffer = nativeIsBuffer || stubFalse;\nmodule.exports = isBuffer;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/lodash/isBuffer.js?");

/***/ }),

/***/ "./node_modules/lodash/isEmpty.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/isEmpty.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseKeys = __webpack_require__(/*! ./_baseKeys */ \"./node_modules/lodash/_baseKeys.js\"),\n    getTag = __webpack_require__(/*! ./_getTag */ \"./node_modules/lodash/_getTag.js\"),\n    isArguments = __webpack_require__(/*! ./isArguments */ \"./node_modules/lodash/isArguments.js\"),\n    isArray = __webpack_require__(/*! ./isArray */ \"./node_modules/lodash/isArray.js\"),\n    isArrayLike = __webpack_require__(/*! ./isArrayLike */ \"./node_modules/lodash/isArrayLike.js\"),\n    isBuffer = __webpack_require__(/*! ./isBuffer */ \"./node_modules/lodash/isBuffer.js\"),\n    isPrototype = __webpack_require__(/*! ./_isPrototype */ \"./node_modules/lodash/_isPrototype.js\"),\n    isTypedArray = __webpack_require__(/*! ./isTypedArray */ \"./node_modules/lodash/isTypedArray.js\");\n/** `Object#toString` result references. */\n\n\nvar mapTag = '[object Map]',\n    setTag = '[object Set]';\n/** Used for built-in method references. */\n\nvar objectProto = Object.prototype;\n/** Used to check objects for own properties. */\n\nvar hasOwnProperty = objectProto.hasOwnProperty;\n/**\n * Checks if `value` is an empty object, collection, map, or set.\n *\n * Objects are considered empty if they have no own enumerable string keyed\n * properties.\n *\n * Array-like values such as `arguments` objects, arrays, buffers, strings, or\n * jQuery-like collections are considered empty if they have a `length` of `0`.\n * Similarly, maps and sets are considered empty if they have a `size` of `0`.\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is empty, else `false`.\n * @example\n *\n * _.isEmpty(null);\n * // => true\n *\n * _.isEmpty(true);\n * // => true\n *\n * _.isEmpty(1);\n * // => true\n *\n * _.isEmpty([1, 2, 3]);\n * // => false\n *\n * _.isEmpty({ 'a': 1 });\n * // => false\n */\n\nfunction isEmpty(value) {\n  if (value == null) {\n    return true;\n  }\n\n  if (isArrayLike(value) && (isArray(value) || typeof value == 'string' || typeof value.splice == 'function' || isBuffer(value) || isTypedArray(value) || isArguments(value))) {\n    return !value.length;\n  }\n\n  var tag = getTag(value);\n\n  if (tag == mapTag || tag == setTag) {\n    return !value.size;\n  }\n\n  if (isPrototype(value)) {\n    return !baseKeys(value).length;\n  }\n\n  for (var key in value) {\n    if (hasOwnProperty.call(value, key)) {\n      return false;\n    }\n  }\n\n  return true;\n}\n\nmodule.exports = isEmpty;\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/lodash/isEmpty.js?");

/***/ }),

/***/ "./node_modules/lodash/isFunction.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/isFunction.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ \"./node_modules/lodash/_baseGetTag.js\"),\n    isObject = __webpack_require__(/*! ./isObject */ \"./node_modules/lodash/isObject.js\");\n/** `Object#toString` result references. */\n\n\nvar asyncTag = '[object AsyncFunction]',\n    funcTag = '[object Function]',\n    genTag = '[object GeneratorFunction]',\n    proxyTag = '[object Proxy]';\n/**\n * Checks if `value` is classified as a `Function` object.\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a function, else `false`.\n * @example\n *\n * _.isFunction(_);\n * // => true\n *\n * _.isFunction(/abc/);\n * // => false\n */\n\nfunction isFunction(value) {\n  if (!isObject(value)) {\n    return false;\n  } // The use of `Object#toString` avoids issues with the `typeof` operator\n  // in Safari 9 which returns 'object' for typed arrays and other constructors.\n\n\n  var tag = baseGetTag(value);\n  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;\n}\n\nmodule.exports = isFunction;\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/lodash/isFunction.js?");

/***/ }),

/***/ "./node_modules/lodash/isLength.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isLength.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/** Used as references for various `Number` constants. */\nvar MAX_SAFE_INTEGER = 9007199254740991;\n/**\n * Checks if `value` is a valid array-like length.\n *\n * **Note:** This method is loosely based on\n * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.\n * @example\n *\n * _.isLength(3);\n * // => true\n *\n * _.isLength(Number.MIN_VALUE);\n * // => false\n *\n * _.isLength(Infinity);\n * // => false\n *\n * _.isLength('3');\n * // => false\n */\n\nfunction isLength(value) {\n  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;\n}\n\nmodule.exports = isLength;\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/lodash/isLength.js?");

/***/ }),

/***/ "./node_modules/lodash/isObject.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isObject.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Checks if `value` is the\n * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)\n * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is an object, else `false`.\n * @example\n *\n * _.isObject({});\n * // => true\n *\n * _.isObject([1, 2, 3]);\n * // => true\n *\n * _.isObject(_.noop);\n * // => true\n *\n * _.isObject(null);\n * // => false\n */\nfunction isObject(value) {\n  var type = typeof value;\n  return value != null && (type == 'object' || type == 'function');\n}\n\nmodule.exports = isObject;\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/lodash/isObject.js?");

/***/ }),

/***/ "./node_modules/lodash/isObjectLike.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Checks if `value` is object-like. A value is object-like if it's not `null`\n * and has a `typeof` result of \"object\".\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is object-like, else `false`.\n * @example\n *\n * _.isObjectLike({});\n * // => true\n *\n * _.isObjectLike([1, 2, 3]);\n * // => true\n *\n * _.isObjectLike(_.noop);\n * // => false\n *\n * _.isObjectLike(null);\n * // => false\n */\nfunction isObjectLike(value) {\n  return value != null && typeof value == 'object';\n}\n\nmodule.exports = isObjectLike;\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/lodash/isObjectLike.js?");

/***/ }),

/***/ "./node_modules/lodash/isSymbol.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isSymbol.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ \"./node_modules/lodash/_baseGetTag.js\"),\n    isObjectLike = __webpack_require__(/*! ./isObjectLike */ \"./node_modules/lodash/isObjectLike.js\");\n/** `Object#toString` result references. */\n\n\nvar symbolTag = '[object Symbol]';\n/**\n * Checks if `value` is classified as a `Symbol` primitive or object.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.\n * @example\n *\n * _.isSymbol(Symbol.iterator);\n * // => true\n *\n * _.isSymbol('abc');\n * // => false\n */\n\nfunction isSymbol(value) {\n  return typeof value == 'symbol' || isObjectLike(value) && baseGetTag(value) == symbolTag;\n}\n\nmodule.exports = isSymbol;\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/lodash/isSymbol.js?");

/***/ }),

/***/ "./node_modules/lodash/isTypedArray.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isTypedArray.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseIsTypedArray = __webpack_require__(/*! ./_baseIsTypedArray */ \"./node_modules/lodash/_baseIsTypedArray.js\"),\n    baseUnary = __webpack_require__(/*! ./_baseUnary */ \"./node_modules/lodash/_baseUnary.js\"),\n    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ \"./node_modules/lodash/_nodeUtil.js\");\n/* Node.js helper references. */\n\n\nvar nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;\n/**\n * Checks if `value` is classified as a typed array.\n *\n * @static\n * @memberOf _\n * @since 3.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.\n * @example\n *\n * _.isTypedArray(new Uint8Array);\n * // => true\n *\n * _.isTypedArray([]);\n * // => false\n */\n\nvar isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;\nmodule.exports = isTypedArray;\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/lodash/isTypedArray.js?");

/***/ }),

/***/ "./node_modules/lodash/memoize.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/memoize.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var MapCache = __webpack_require__(/*! ./_MapCache */ \"./node_modules/lodash/_MapCache.js\");\n/** Error message constants. */\n\n\nvar FUNC_ERROR_TEXT = 'Expected a function';\n/**\n * Creates a function that memoizes the result of `func`. If `resolver` is\n * provided, it determines the cache key for storing the result based on the\n * arguments provided to the memoized function. By default, the first argument\n * provided to the memoized function is used as the map cache key. The `func`\n * is invoked with the `this` binding of the memoized function.\n *\n * **Note:** The cache is exposed as the `cache` property on the memoized\n * function. Its creation may be customized by replacing the `_.memoize.Cache`\n * constructor with one whose instances implement the\n * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)\n * method interface of `clear`, `delete`, `get`, `has`, and `set`.\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Function\n * @param {Function} func The function to have its output memoized.\n * @param {Function} [resolver] The function to resolve the cache key.\n * @returns {Function} Returns the new memoized function.\n * @example\n *\n * var object = { 'a': 1, 'b': 2 };\n * var other = { 'c': 3, 'd': 4 };\n *\n * var values = _.memoize(_.values);\n * values(object);\n * // => [1, 2]\n *\n * values(other);\n * // => [3, 4]\n *\n * object.a = 2;\n * values(object);\n * // => [1, 2]\n *\n * // Modify the result cache.\n * values.cache.set(object, ['a', 'b']);\n * values(object);\n * // => ['a', 'b']\n *\n * // Replace `_.memoize.Cache`.\n * _.memoize.Cache = WeakMap;\n */\n\nfunction memoize(func, resolver) {\n  if (typeof func != 'function' || resolver != null && typeof resolver != 'function') {\n    throw new TypeError(FUNC_ERROR_TEXT);\n  }\n\n  var memoized = function () {\n    var args = arguments,\n        key = resolver ? resolver.apply(this, args) : args[0],\n        cache = memoized.cache;\n\n    if (cache.has(key)) {\n      return cache.get(key);\n    }\n\n    var result = func.apply(this, args);\n    memoized.cache = cache.set(key, result) || cache;\n    return result;\n  };\n\n  memoized.cache = new (memoize.Cache || MapCache)();\n  return memoized;\n} // Expose `MapCache`.\n\n\nmemoize.Cache = MapCache;\nmodule.exports = memoize;\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/lodash/memoize.js?");

/***/ }),

/***/ "./node_modules/lodash/stubFalse.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/stubFalse.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * This method returns `false`.\n *\n * @static\n * @memberOf _\n * @since 4.13.0\n * @category Util\n * @returns {boolean} Returns `false`.\n * @example\n *\n * _.times(2, _.stubFalse);\n * // => [false, false]\n */\nfunction stubFalse() {\n  return false;\n}\n\nmodule.exports = stubFalse;\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/lodash/stubFalse.js?");

/***/ }),

/***/ "./node_modules/lodash/toString.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toString.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseToString = __webpack_require__(/*! ./_baseToString */ \"./node_modules/lodash/_baseToString.js\");\n/**\n * Converts `value` to a string. An empty string is returned for `null`\n * and `undefined` values. The sign of `-0` is preserved.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to convert.\n * @returns {string} Returns the converted string.\n * @example\n *\n * _.toString(null);\n * // => ''\n *\n * _.toString(-0);\n * // => '-0'\n *\n * _.toString([1, 2, 3]);\n * // => '1,2,3'\n */\n\n\nfunction toString(value) {\n  return value == null ? '' : baseToString(value);\n}\n\nmodule.exports = toString;\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/lodash/toString.js?");

/***/ }),

/***/ "./node_modules/sax/lib/sax.js":
/*!*************************************!*\
  !*** ./node_modules/sax/lib/sax.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval(";\n\n(function (sax) {\n  // wrapper for non-node envs\n  sax.parser = function (strict, opt) {\n    return new SAXParser(strict, opt);\n  };\n\n  sax.SAXParser = SAXParser;\n  sax.SAXStream = SAXStream;\n  sax.createStream = createStream; // When we pass the MAX_BUFFER_LENGTH position, start checking for buffer overruns.\n  // When we check, schedule the next check for MAX_BUFFER_LENGTH - (max(buffer lengths)),\n  // since that's the earliest that a buffer overrun could occur.  This way, checks are\n  // as rare as required, but as often as necessary to ensure never crossing this bound.\n  // Furthermore, buffers are only tested at most once per write(), so passing a very\n  // large string into write() might have undesirable effects, but this is manageable by\n  // the caller, so it is assumed to be safe.  Thus, a call to write() may, in the extreme\n  // edge case, result in creating at most one complete copy of the string passed in.\n  // Set to Infinity to have unlimited buffers.\n\n  sax.MAX_BUFFER_LENGTH = 64 * 1024;\n  var buffers = ['comment', 'sgmlDecl', 'textNode', 'tagName', 'doctype', 'procInstName', 'procInstBody', 'entity', 'attribName', 'attribValue', 'cdata', 'script'];\n  sax.EVENTS = ['text', 'processinginstruction', 'sgmldeclaration', 'doctype', 'comment', 'opentagstart', 'attribute', 'opentag', 'closetag', 'opencdata', 'cdata', 'closecdata', 'error', 'end', 'ready', 'script', 'opennamespace', 'closenamespace'];\n\n  function SAXParser(strict, opt) {\n    if (!(this instanceof SAXParser)) {\n      return new SAXParser(strict, opt);\n    }\n\n    var parser = this;\n    clearBuffers(parser);\n    parser.q = parser.c = '';\n    parser.bufferCheckPosition = sax.MAX_BUFFER_LENGTH;\n    parser.opt = opt || {};\n    parser.opt.lowercase = parser.opt.lowercase || parser.opt.lowercasetags;\n    parser.looseCase = parser.opt.lowercase ? 'toLowerCase' : 'toUpperCase';\n    parser.tags = [];\n    parser.closed = parser.closedRoot = parser.sawRoot = false;\n    parser.tag = parser.error = null;\n    parser.strict = !!strict;\n    parser.noscript = !!(strict || parser.opt.noscript);\n    parser.state = S.BEGIN;\n    parser.strictEntities = parser.opt.strictEntities;\n    parser.ENTITIES = parser.strictEntities ? Object.create(sax.XML_ENTITIES) : Object.create(sax.ENTITIES);\n    parser.attribList = []; // namespaces form a prototype chain.\n    // it always points at the current tag,\n    // which protos to its parent tag.\n\n    if (parser.opt.xmlns) {\n      parser.ns = Object.create(rootNS);\n    } // mostly just for error reporting\n\n\n    parser.trackPosition = parser.opt.position !== false;\n\n    if (parser.trackPosition) {\n      parser.position = parser.line = parser.column = 0;\n    }\n\n    emit(parser, 'onready');\n  }\n\n  if (!Object.create) {\n    Object.create = function (o) {\n      function F() {}\n\n      F.prototype = o;\n      var newf = new F();\n      return newf;\n    };\n  }\n\n  if (!Object.keys) {\n    Object.keys = function (o) {\n      var a = [];\n\n      for (var i in o) if (o.hasOwnProperty(i)) a.push(i);\n\n      return a;\n    };\n  }\n\n  function checkBufferLength(parser) {\n    var maxAllowed = Math.max(sax.MAX_BUFFER_LENGTH, 10);\n    var maxActual = 0;\n\n    for (var i = 0, l = buffers.length; i < l; i++) {\n      var len = parser[buffers[i]].length;\n\n      if (len > maxAllowed) {\n        // Text/cdata nodes can get big, and since they're buffered,\n        // we can get here under normal conditions.\n        // Avoid issues by emitting the text node now,\n        // so at least it won't get any bigger.\n        switch (buffers[i]) {\n          case 'textNode':\n            closeText(parser);\n            break;\n\n          case 'cdata':\n            emitNode(parser, 'oncdata', parser.cdata);\n            parser.cdata = '';\n            break;\n\n          case 'script':\n            emitNode(parser, 'onscript', parser.script);\n            parser.script = '';\n            break;\n\n          default:\n            error(parser, 'Max buffer length exceeded: ' + buffers[i]);\n        }\n      }\n\n      maxActual = Math.max(maxActual, len);\n    } // schedule the next check for the earliest possible buffer overrun.\n\n\n    var m = sax.MAX_BUFFER_LENGTH - maxActual;\n    parser.bufferCheckPosition = m + parser.position;\n  }\n\n  function clearBuffers(parser) {\n    for (var i = 0, l = buffers.length; i < l; i++) {\n      parser[buffers[i]] = '';\n    }\n  }\n\n  function flushBuffers(parser) {\n    closeText(parser);\n\n    if (parser.cdata !== '') {\n      emitNode(parser, 'oncdata', parser.cdata);\n      parser.cdata = '';\n    }\n\n    if (parser.script !== '') {\n      emitNode(parser, 'onscript', parser.script);\n      parser.script = '';\n    }\n  }\n\n  SAXParser.prototype = {\n    end: function () {\n      end(this);\n    },\n    write: write,\n    resume: function () {\n      this.error = null;\n      return this;\n    },\n    close: function () {\n      return this.write(null);\n    },\n    flush: function () {\n      flushBuffers(this);\n    }\n  };\n  var Stream;\n\n  try {\n    Stream = __webpack_require__(/*! stream */ \"stream\").Stream;\n  } catch (ex) {\n    Stream = function () {};\n  }\n\n  var streamWraps = sax.EVENTS.filter(function (ev) {\n    return ev !== 'error' && ev !== 'end';\n  });\n\n  function createStream(strict, opt) {\n    return new SAXStream(strict, opt);\n  }\n\n  function SAXStream(strict, opt) {\n    if (!(this instanceof SAXStream)) {\n      return new SAXStream(strict, opt);\n    }\n\n    Stream.apply(this);\n    this._parser = new SAXParser(strict, opt);\n    this.writable = true;\n    this.readable = true;\n    var me = this;\n\n    this._parser.onend = function () {\n      me.emit('end');\n    };\n\n    this._parser.onerror = function (er) {\n      me.emit('error', er); // if didn't throw, then means error was handled.\n      // go ahead and clear error, so we can write again.\n\n      me._parser.error = null;\n    };\n\n    this._decoder = null;\n    streamWraps.forEach(function (ev) {\n      Object.defineProperty(me, 'on' + ev, {\n        get: function () {\n          return me._parser['on' + ev];\n        },\n        set: function (h) {\n          if (!h) {\n            me.removeAllListeners(ev);\n            me._parser['on' + ev] = h;\n            return h;\n          }\n\n          me.on(ev, h);\n        },\n        enumerable: true,\n        configurable: false\n      });\n    });\n  }\n\n  SAXStream.prototype = Object.create(Stream.prototype, {\n    constructor: {\n      value: SAXStream\n    }\n  });\n\n  SAXStream.prototype.write = function (data) {\n    if (typeof Buffer === 'function' && typeof Buffer.isBuffer === 'function' && Buffer.isBuffer(data)) {\n      if (!this._decoder) {\n        var SD = __webpack_require__(/*! string_decoder */ \"string_decoder\").StringDecoder;\n\n        this._decoder = new SD('utf8');\n      }\n\n      data = this._decoder.write(data);\n    }\n\n    this._parser.write(data.toString());\n\n    this.emit('data', data);\n    return true;\n  };\n\n  SAXStream.prototype.end = function (chunk) {\n    if (chunk && chunk.length) {\n      this.write(chunk);\n    }\n\n    this._parser.end();\n\n    return true;\n  };\n\n  SAXStream.prototype.on = function (ev, handler) {\n    var me = this;\n\n    if (!me._parser['on' + ev] && streamWraps.indexOf(ev) !== -1) {\n      me._parser['on' + ev] = function () {\n        var args = arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments);\n        args.splice(0, 0, ev);\n        me.emit.apply(me, args);\n      };\n    }\n\n    return Stream.prototype.on.call(me, ev, handler);\n  }; // this really needs to be replaced with character classes.\n  // XML allows all manner of ridiculous numbers and digits.\n\n\n  var CDATA = '[CDATA[';\n  var DOCTYPE = 'DOCTYPE';\n  var XML_NAMESPACE = 'http://www.w3.org/XML/1998/namespace';\n  var XMLNS_NAMESPACE = 'http://www.w3.org/2000/xmlns/';\n  var rootNS = {\n    xml: XML_NAMESPACE,\n    xmlns: XMLNS_NAMESPACE\n  }; // http://www.w3.org/TR/REC-xml/#NT-NameStartChar\n  // This implementation works on strings, a single character at a time\n  // as such, it cannot ever support astral-plane characters (10000-EFFFF)\n  // without a significant breaking change to either this  parser, or the\n  // JavaScript language.  Implementation of an emoji-capable xml parser\n  // is left as an exercise for the reader.\n\n  var nameStart = /[:_A-Za-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD]/;\n  var nameBody = /[:_A-Za-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\u00B7\\u0300-\\u036F\\u203F-\\u2040.\\d-]/;\n  var entityStart = /[#:_A-Za-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD]/;\n  var entityBody = /[#:_A-Za-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\u00B7\\u0300-\\u036F\\u203F-\\u2040.\\d-]/;\n\n  function isWhitespace(c) {\n    return c === ' ' || c === '\\n' || c === '\\r' || c === '\\t';\n  }\n\n  function isQuote(c) {\n    return c === '\"' || c === '\\'';\n  }\n\n  function isAttribEnd(c) {\n    return c === '>' || isWhitespace(c);\n  }\n\n  function isMatch(regex, c) {\n    return regex.test(c);\n  }\n\n  function notMatch(regex, c) {\n    return !isMatch(regex, c);\n  }\n\n  var S = 0;\n  sax.STATE = {\n    BEGIN: S++,\n    // leading byte order mark or whitespace\n    BEGIN_WHITESPACE: S++,\n    // leading whitespace\n    TEXT: S++,\n    // general stuff\n    TEXT_ENTITY: S++,\n    // &amp and such.\n    OPEN_WAKA: S++,\n    // <\n    SGML_DECL: S++,\n    // <!BLARG\n    SGML_DECL_QUOTED: S++,\n    // <!BLARG foo \"bar\n    DOCTYPE: S++,\n    // <!DOCTYPE\n    DOCTYPE_QUOTED: S++,\n    // <!DOCTYPE \"//blah\n    DOCTYPE_DTD: S++,\n    // <!DOCTYPE \"//blah\" [ ...\n    DOCTYPE_DTD_QUOTED: S++,\n    // <!DOCTYPE \"//blah\" [ \"foo\n    COMMENT_STARTING: S++,\n    // <!-\n    COMMENT: S++,\n    // <!--\n    COMMENT_ENDING: S++,\n    // <!-- blah -\n    COMMENT_ENDED: S++,\n    // <!-- blah --\n    CDATA: S++,\n    // <![CDATA[ something\n    CDATA_ENDING: S++,\n    // ]\n    CDATA_ENDING_2: S++,\n    // ]]\n    PROC_INST: S++,\n    // <?hi\n    PROC_INST_BODY: S++,\n    // <?hi there\n    PROC_INST_ENDING: S++,\n    // <?hi \"there\" ?\n    OPEN_TAG: S++,\n    // <strong\n    OPEN_TAG_SLASH: S++,\n    // <strong /\n    ATTRIB: S++,\n    // <a\n    ATTRIB_NAME: S++,\n    // <a foo\n    ATTRIB_NAME_SAW_WHITE: S++,\n    // <a foo _\n    ATTRIB_VALUE: S++,\n    // <a foo=\n    ATTRIB_VALUE_QUOTED: S++,\n    // <a foo=\"bar\n    ATTRIB_VALUE_CLOSED: S++,\n    // <a foo=\"bar\"\n    ATTRIB_VALUE_UNQUOTED: S++,\n    // <a foo=bar\n    ATTRIB_VALUE_ENTITY_Q: S++,\n    // <foo bar=\"&quot;\"\n    ATTRIB_VALUE_ENTITY_U: S++,\n    // <foo bar=&quot\n    CLOSE_TAG: S++,\n    // </a\n    CLOSE_TAG_SAW_WHITE: S++,\n    // </a   >\n    SCRIPT: S++,\n    // <script> ...\n    SCRIPT_ENDING: S++ // <script> ... <\n\n  };\n  sax.XML_ENTITIES = {\n    'amp': '&',\n    'gt': '>',\n    'lt': '<',\n    'quot': '\"',\n    'apos': \"'\"\n  };\n  sax.ENTITIES = {\n    'amp': '&',\n    'gt': '>',\n    'lt': '<',\n    'quot': '\"',\n    'apos': \"'\",\n    'AElig': 198,\n    'Aacute': 193,\n    'Acirc': 194,\n    'Agrave': 192,\n    'Aring': 197,\n    'Atilde': 195,\n    'Auml': 196,\n    'Ccedil': 199,\n    'ETH': 208,\n    'Eacute': 201,\n    'Ecirc': 202,\n    'Egrave': 200,\n    'Euml': 203,\n    'Iacute': 205,\n    'Icirc': 206,\n    'Igrave': 204,\n    'Iuml': 207,\n    'Ntilde': 209,\n    'Oacute': 211,\n    'Ocirc': 212,\n    'Ograve': 210,\n    'Oslash': 216,\n    'Otilde': 213,\n    'Ouml': 214,\n    'THORN': 222,\n    'Uacute': 218,\n    'Ucirc': 219,\n    'Ugrave': 217,\n    'Uuml': 220,\n    'Yacute': 221,\n    'aacute': 225,\n    'acirc': 226,\n    'aelig': 230,\n    'agrave': 224,\n    'aring': 229,\n    'atilde': 227,\n    'auml': 228,\n    'ccedil': 231,\n    'eacute': 233,\n    'ecirc': 234,\n    'egrave': 232,\n    'eth': 240,\n    'euml': 235,\n    'iacute': 237,\n    'icirc': 238,\n    'igrave': 236,\n    'iuml': 239,\n    'ntilde': 241,\n    'oacute': 243,\n    'ocirc': 244,\n    'ograve': 242,\n    'oslash': 248,\n    'otilde': 245,\n    'ouml': 246,\n    'szlig': 223,\n    'thorn': 254,\n    'uacute': 250,\n    'ucirc': 251,\n    'ugrave': 249,\n    'uuml': 252,\n    'yacute': 253,\n    'yuml': 255,\n    'copy': 169,\n    'reg': 174,\n    'nbsp': 160,\n    'iexcl': 161,\n    'cent': 162,\n    'pound': 163,\n    'curren': 164,\n    'yen': 165,\n    'brvbar': 166,\n    'sect': 167,\n    'uml': 168,\n    'ordf': 170,\n    'laquo': 171,\n    'not': 172,\n    'shy': 173,\n    'macr': 175,\n    'deg': 176,\n    'plusmn': 177,\n    'sup1': 185,\n    'sup2': 178,\n    'sup3': 179,\n    'acute': 180,\n    'micro': 181,\n    'para': 182,\n    'middot': 183,\n    'cedil': 184,\n    'ordm': 186,\n    'raquo': 187,\n    'frac14': 188,\n    'frac12': 189,\n    'frac34': 190,\n    'iquest': 191,\n    'times': 215,\n    'divide': 247,\n    'OElig': 338,\n    'oelig': 339,\n    'Scaron': 352,\n    'scaron': 353,\n    'Yuml': 376,\n    'fnof': 402,\n    'circ': 710,\n    'tilde': 732,\n    'Alpha': 913,\n    'Beta': 914,\n    'Gamma': 915,\n    'Delta': 916,\n    'Epsilon': 917,\n    'Zeta': 918,\n    'Eta': 919,\n    'Theta': 920,\n    'Iota': 921,\n    'Kappa': 922,\n    'Lambda': 923,\n    'Mu': 924,\n    'Nu': 925,\n    'Xi': 926,\n    'Omicron': 927,\n    'Pi': 928,\n    'Rho': 929,\n    'Sigma': 931,\n    'Tau': 932,\n    'Upsilon': 933,\n    'Phi': 934,\n    'Chi': 935,\n    'Psi': 936,\n    'Omega': 937,\n    'alpha': 945,\n    'beta': 946,\n    'gamma': 947,\n    'delta': 948,\n    'epsilon': 949,\n    'zeta': 950,\n    'eta': 951,\n    'theta': 952,\n    'iota': 953,\n    'kappa': 954,\n    'lambda': 955,\n    'mu': 956,\n    'nu': 957,\n    'xi': 958,\n    'omicron': 959,\n    'pi': 960,\n    'rho': 961,\n    'sigmaf': 962,\n    'sigma': 963,\n    'tau': 964,\n    'upsilon': 965,\n    'phi': 966,\n    'chi': 967,\n    'psi': 968,\n    'omega': 969,\n    'thetasym': 977,\n    'upsih': 978,\n    'piv': 982,\n    'ensp': 8194,\n    'emsp': 8195,\n    'thinsp': 8201,\n    'zwnj': 8204,\n    'zwj': 8205,\n    'lrm': 8206,\n    'rlm': 8207,\n    'ndash': 8211,\n    'mdash': 8212,\n    'lsquo': 8216,\n    'rsquo': 8217,\n    'sbquo': 8218,\n    'ldquo': 8220,\n    'rdquo': 8221,\n    'bdquo': 8222,\n    'dagger': 8224,\n    'Dagger': 8225,\n    'bull': 8226,\n    'hellip': 8230,\n    'permil': 8240,\n    'prime': 8242,\n    'Prime': 8243,\n    'lsaquo': 8249,\n    'rsaquo': 8250,\n    'oline': 8254,\n    'frasl': 8260,\n    'euro': 8364,\n    'image': 8465,\n    'weierp': 8472,\n    'real': 8476,\n    'trade': 8482,\n    'alefsym': 8501,\n    'larr': 8592,\n    'uarr': 8593,\n    'rarr': 8594,\n    'darr': 8595,\n    'harr': 8596,\n    'crarr': 8629,\n    'lArr': 8656,\n    'uArr': 8657,\n    'rArr': 8658,\n    'dArr': 8659,\n    'hArr': 8660,\n    'forall': 8704,\n    'part': 8706,\n    'exist': 8707,\n    'empty': 8709,\n    'nabla': 8711,\n    'isin': 8712,\n    'notin': 8713,\n    'ni': 8715,\n    'prod': 8719,\n    'sum': 8721,\n    'minus': 8722,\n    'lowast': 8727,\n    'radic': 8730,\n    'prop': 8733,\n    'infin': 8734,\n    'ang': 8736,\n    'and': 8743,\n    'or': 8744,\n    'cap': 8745,\n    'cup': 8746,\n    'int': 8747,\n    'there4': 8756,\n    'sim': 8764,\n    'cong': 8773,\n    'asymp': 8776,\n    'ne': 8800,\n    'equiv': 8801,\n    'le': 8804,\n    'ge': 8805,\n    'sub': 8834,\n    'sup': 8835,\n    'nsub': 8836,\n    'sube': 8838,\n    'supe': 8839,\n    'oplus': 8853,\n    'otimes': 8855,\n    'perp': 8869,\n    'sdot': 8901,\n    'lceil': 8968,\n    'rceil': 8969,\n    'lfloor': 8970,\n    'rfloor': 8971,\n    'lang': 9001,\n    'rang': 9002,\n    'loz': 9674,\n    'spades': 9824,\n    'clubs': 9827,\n    'hearts': 9829,\n    'diams': 9830\n  };\n  Object.keys(sax.ENTITIES).forEach(function (key) {\n    var e = sax.ENTITIES[key];\n    var s = typeof e === 'number' ? String.fromCharCode(e) : e;\n    sax.ENTITIES[key] = s;\n  });\n\n  for (var s in sax.STATE) {\n    sax.STATE[sax.STATE[s]] = s;\n  } // shorthand\n\n\n  S = sax.STATE;\n\n  function emit(parser, event, data) {\n    parser[event] && parser[event](data);\n  }\n\n  function emitNode(parser, nodeType, data) {\n    if (parser.textNode) closeText(parser);\n    emit(parser, nodeType, data);\n  }\n\n  function closeText(parser) {\n    parser.textNode = textopts(parser.opt, parser.textNode);\n    if (parser.textNode) emit(parser, 'ontext', parser.textNode);\n    parser.textNode = '';\n  }\n\n  function textopts(opt, text) {\n    if (opt.trim) text = text.trim();\n    if (opt.normalize) text = text.replace(/\\s+/g, ' ');\n    return text;\n  }\n\n  function error(parser, er) {\n    closeText(parser);\n\n    if (parser.trackPosition) {\n      er += '\\nLine: ' + parser.line + '\\nColumn: ' + parser.column + '\\nChar: ' + parser.c;\n    }\n\n    er = new Error(er);\n    parser.error = er;\n    emit(parser, 'onerror', er);\n    return parser;\n  }\n\n  function end(parser) {\n    if (parser.sawRoot && !parser.closedRoot) strictFail(parser, 'Unclosed root tag');\n\n    if (parser.state !== S.BEGIN && parser.state !== S.BEGIN_WHITESPACE && parser.state !== S.TEXT) {\n      error(parser, 'Unexpected end');\n    }\n\n    closeText(parser);\n    parser.c = '';\n    parser.closed = true;\n    emit(parser, 'onend');\n    SAXParser.call(parser, parser.strict, parser.opt);\n    return parser;\n  }\n\n  function strictFail(parser, message) {\n    if (typeof parser !== 'object' || !(parser instanceof SAXParser)) {\n      throw new Error('bad call to strictFail');\n    }\n\n    if (parser.strict) {\n      error(parser, message);\n    }\n  }\n\n  function newTag(parser) {\n    if (!parser.strict) parser.tagName = parser.tagName[parser.looseCase]();\n    var parent = parser.tags[parser.tags.length - 1] || parser;\n    var tag = parser.tag = {\n      name: parser.tagName,\n      attributes: {}\n    }; // will be overridden if tag contails an xmlns=\"foo\" or xmlns:foo=\"bar\"\n\n    if (parser.opt.xmlns) {\n      tag.ns = parent.ns;\n    }\n\n    parser.attribList.length = 0;\n    emitNode(parser, 'onopentagstart', tag);\n  }\n\n  function qname(name, attribute) {\n    var i = name.indexOf(':');\n    var qualName = i < 0 ? ['', name] : name.split(':');\n    var prefix = qualName[0];\n    var local = qualName[1]; // <x \"xmlns\"=\"http://foo\">\n\n    if (attribute && name === 'xmlns') {\n      prefix = 'xmlns';\n      local = '';\n    }\n\n    return {\n      prefix: prefix,\n      local: local\n    };\n  }\n\n  function attrib(parser) {\n    if (!parser.strict) {\n      parser.attribName = parser.attribName[parser.looseCase]();\n    }\n\n    if (parser.attribList.indexOf(parser.attribName) !== -1 || parser.tag.attributes.hasOwnProperty(parser.attribName)) {\n      parser.attribName = parser.attribValue = '';\n      return;\n    }\n\n    if (parser.opt.xmlns) {\n      var qn = qname(parser.attribName, true);\n      var prefix = qn.prefix;\n      var local = qn.local;\n\n      if (prefix === 'xmlns') {\n        // namespace binding attribute. push the binding into scope\n        if (local === 'xml' && parser.attribValue !== XML_NAMESPACE) {\n          strictFail(parser, 'xml: prefix must be bound to ' + XML_NAMESPACE + '\\n' + 'Actual: ' + parser.attribValue);\n        } else if (local === 'xmlns' && parser.attribValue !== XMLNS_NAMESPACE) {\n          strictFail(parser, 'xmlns: prefix must be bound to ' + XMLNS_NAMESPACE + '\\n' + 'Actual: ' + parser.attribValue);\n        } else {\n          var tag = parser.tag;\n          var parent = parser.tags[parser.tags.length - 1] || parser;\n\n          if (tag.ns === parent.ns) {\n            tag.ns = Object.create(parent.ns);\n          }\n\n          tag.ns[local] = parser.attribValue;\n        }\n      } // defer onattribute events until all attributes have been seen\n      // so any new bindings can take effect. preserve attribute order\n      // so deferred events can be emitted in document order\n\n\n      parser.attribList.push([parser.attribName, parser.attribValue]);\n    } else {\n      // in non-xmlns mode, we can emit the event right away\n      parser.tag.attributes[parser.attribName] = parser.attribValue;\n      emitNode(parser, 'onattribute', {\n        name: parser.attribName,\n        value: parser.attribValue\n      });\n    }\n\n    parser.attribName = parser.attribValue = '';\n  }\n\n  function openTag(parser, selfClosing) {\n    if (parser.opt.xmlns) {\n      // emit namespace binding events\n      var tag = parser.tag; // add namespace info to tag\n\n      var qn = qname(parser.tagName);\n      tag.prefix = qn.prefix;\n      tag.local = qn.local;\n      tag.uri = tag.ns[qn.prefix] || '';\n\n      if (tag.prefix && !tag.uri) {\n        strictFail(parser, 'Unbound namespace prefix: ' + JSON.stringify(parser.tagName));\n        tag.uri = qn.prefix;\n      }\n\n      var parent = parser.tags[parser.tags.length - 1] || parser;\n\n      if (tag.ns && parent.ns !== tag.ns) {\n        Object.keys(tag.ns).forEach(function (p) {\n          emitNode(parser, 'onopennamespace', {\n            prefix: p,\n            uri: tag.ns[p]\n          });\n        });\n      } // handle deferred onattribute events\n      // Note: do not apply default ns to attributes:\n      //   http://www.w3.org/TR/REC-xml-names/#defaulting\n\n\n      for (var i = 0, l = parser.attribList.length; i < l; i++) {\n        var nv = parser.attribList[i];\n        var name = nv[0];\n        var value = nv[1];\n        var qualName = qname(name, true);\n        var prefix = qualName.prefix;\n        var local = qualName.local;\n        var uri = prefix === '' ? '' : tag.ns[prefix] || '';\n        var a = {\n          name: name,\n          value: value,\n          prefix: prefix,\n          local: local,\n          uri: uri\n        }; // if there's any attributes with an undefined namespace,\n        // then fail on them now.\n\n        if (prefix && prefix !== 'xmlns' && !uri) {\n          strictFail(parser, 'Unbound namespace prefix: ' + JSON.stringify(prefix));\n          a.uri = prefix;\n        }\n\n        parser.tag.attributes[name] = a;\n        emitNode(parser, 'onattribute', a);\n      }\n\n      parser.attribList.length = 0;\n    }\n\n    parser.tag.isSelfClosing = !!selfClosing; // process the tag\n\n    parser.sawRoot = true;\n    parser.tags.push(parser.tag);\n    emitNode(parser, 'onopentag', parser.tag);\n\n    if (!selfClosing) {\n      // special case for <script> in non-strict mode.\n      if (!parser.noscript && parser.tagName.toLowerCase() === 'script') {\n        parser.state = S.SCRIPT;\n      } else {\n        parser.state = S.TEXT;\n      }\n\n      parser.tag = null;\n      parser.tagName = '';\n    }\n\n    parser.attribName = parser.attribValue = '';\n    parser.attribList.length = 0;\n  }\n\n  function closeTag(parser) {\n    if (!parser.tagName) {\n      strictFail(parser, 'Weird empty close tag.');\n      parser.textNode += '</>';\n      parser.state = S.TEXT;\n      return;\n    }\n\n    if (parser.script) {\n      if (parser.tagName !== 'script') {\n        parser.script += '</' + parser.tagName + '>';\n        parser.tagName = '';\n        parser.state = S.SCRIPT;\n        return;\n      }\n\n      emitNode(parser, 'onscript', parser.script);\n      parser.script = '';\n    } // first make sure that the closing tag actually exists.\n    // <a><b></c></b></a> will close everything, otherwise.\n\n\n    var t = parser.tags.length;\n    var tagName = parser.tagName;\n\n    if (!parser.strict) {\n      tagName = tagName[parser.looseCase]();\n    }\n\n    var closeTo = tagName;\n\n    while (t--) {\n      var close = parser.tags[t];\n\n      if (close.name !== closeTo) {\n        // fail the first time in strict mode\n        strictFail(parser, 'Unexpected close tag');\n      } else {\n        break;\n      }\n    } // didn't find it.  we already failed for strict, so just abort.\n\n\n    if (t < 0) {\n      strictFail(parser, 'Unmatched closing tag: ' + parser.tagName);\n      parser.textNode += '</' + parser.tagName + '>';\n      parser.state = S.TEXT;\n      return;\n    }\n\n    parser.tagName = tagName;\n    var s = parser.tags.length;\n\n    while (s-- > t) {\n      var tag = parser.tag = parser.tags.pop();\n      parser.tagName = parser.tag.name;\n      emitNode(parser, 'onclosetag', parser.tagName);\n      var x = {};\n\n      for (var i in tag.ns) {\n        x[i] = tag.ns[i];\n      }\n\n      var parent = parser.tags[parser.tags.length - 1] || parser;\n\n      if (parser.opt.xmlns && tag.ns !== parent.ns) {\n        // remove namespace bindings introduced by tag\n        Object.keys(tag.ns).forEach(function (p) {\n          var n = tag.ns[p];\n          emitNode(parser, 'onclosenamespace', {\n            prefix: p,\n            uri: n\n          });\n        });\n      }\n    }\n\n    if (t === 0) parser.closedRoot = true;\n    parser.tagName = parser.attribValue = parser.attribName = '';\n    parser.attribList.length = 0;\n    parser.state = S.TEXT;\n  }\n\n  function parseEntity(parser) {\n    var entity = parser.entity;\n    var entityLC = entity.toLowerCase();\n    var num;\n    var numStr = '';\n\n    if (parser.ENTITIES[entity]) {\n      return parser.ENTITIES[entity];\n    }\n\n    if (parser.ENTITIES[entityLC]) {\n      return parser.ENTITIES[entityLC];\n    }\n\n    entity = entityLC;\n\n    if (entity.charAt(0) === '#') {\n      if (entity.charAt(1) === 'x') {\n        entity = entity.slice(2);\n        num = parseInt(entity, 16);\n        numStr = num.toString(16);\n      } else {\n        entity = entity.slice(1);\n        num = parseInt(entity, 10);\n        numStr = num.toString(10);\n      }\n    }\n\n    entity = entity.replace(/^0+/, '');\n\n    if (isNaN(num) || numStr.toLowerCase() !== entity) {\n      strictFail(parser, 'Invalid character entity');\n      return '&' + parser.entity + ';';\n    }\n\n    return String.fromCodePoint(num);\n  }\n\n  function beginWhiteSpace(parser, c) {\n    if (c === '<') {\n      parser.state = S.OPEN_WAKA;\n      parser.startTagPosition = parser.position;\n    } else if (!isWhitespace(c)) {\n      // have to process this as a text node.\n      // weird, but happens.\n      strictFail(parser, 'Non-whitespace before first tag.');\n      parser.textNode = c;\n      parser.state = S.TEXT;\n    }\n  }\n\n  function charAt(chunk, i) {\n    var result = '';\n\n    if (i < chunk.length) {\n      result = chunk.charAt(i);\n    }\n\n    return result;\n  }\n\n  function write(chunk) {\n    var parser = this;\n\n    if (this.error) {\n      throw this.error;\n    }\n\n    if (parser.closed) {\n      return error(parser, 'Cannot write after close. Assign an onready handler.');\n    }\n\n    if (chunk === null) {\n      return end(parser);\n    }\n\n    if (typeof chunk === 'object') {\n      chunk = chunk.toString();\n    }\n\n    var i = 0;\n    var c = '';\n\n    while (true) {\n      c = charAt(chunk, i++);\n      parser.c = c;\n\n      if (!c) {\n        break;\n      }\n\n      if (parser.trackPosition) {\n        parser.position++;\n\n        if (c === '\\n') {\n          parser.line++;\n          parser.column = 0;\n        } else {\n          parser.column++;\n        }\n      }\n\n      switch (parser.state) {\n        case S.BEGIN:\n          parser.state = S.BEGIN_WHITESPACE;\n\n          if (c === '\\uFEFF') {\n            continue;\n          }\n\n          beginWhiteSpace(parser, c);\n          continue;\n\n        case S.BEGIN_WHITESPACE:\n          beginWhiteSpace(parser, c);\n          continue;\n\n        case S.TEXT:\n          if (parser.sawRoot && !parser.closedRoot) {\n            var starti = i - 1;\n\n            while (c && c !== '<' && c !== '&') {\n              c = charAt(chunk, i++);\n\n              if (c && parser.trackPosition) {\n                parser.position++;\n\n                if (c === '\\n') {\n                  parser.line++;\n                  parser.column = 0;\n                } else {\n                  parser.column++;\n                }\n              }\n            }\n\n            parser.textNode += chunk.substring(starti, i - 1);\n          }\n\n          if (c === '<' && !(parser.sawRoot && parser.closedRoot && !parser.strict)) {\n            parser.state = S.OPEN_WAKA;\n            parser.startTagPosition = parser.position;\n          } else {\n            if (!isWhitespace(c) && (!parser.sawRoot || parser.closedRoot)) {\n              strictFail(parser, 'Text data outside of root node.');\n            }\n\n            if (c === '&') {\n              parser.state = S.TEXT_ENTITY;\n            } else {\n              parser.textNode += c;\n            }\n          }\n\n          continue;\n\n        case S.SCRIPT:\n          // only non-strict\n          if (c === '<') {\n            parser.state = S.SCRIPT_ENDING;\n          } else {\n            parser.script += c;\n          }\n\n          continue;\n\n        case S.SCRIPT_ENDING:\n          if (c === '/') {\n            parser.state = S.CLOSE_TAG;\n          } else {\n            parser.script += '<' + c;\n            parser.state = S.SCRIPT;\n          }\n\n          continue;\n\n        case S.OPEN_WAKA:\n          // either a /, ?, !, or text is coming next.\n          if (c === '!') {\n            parser.state = S.SGML_DECL;\n            parser.sgmlDecl = '';\n          } else if (isWhitespace(c)) {// wait for it...\n          } else if (isMatch(nameStart, c)) {\n            parser.state = S.OPEN_TAG;\n            parser.tagName = c;\n          } else if (c === '/') {\n            parser.state = S.CLOSE_TAG;\n            parser.tagName = '';\n          } else if (c === '?') {\n            parser.state = S.PROC_INST;\n            parser.procInstName = parser.procInstBody = '';\n          } else {\n            strictFail(parser, 'Unencoded <'); // if there was some whitespace, then add that in.\n\n            if (parser.startTagPosition + 1 < parser.position) {\n              var pad = parser.position - parser.startTagPosition;\n              c = new Array(pad).join(' ') + c;\n            }\n\n            parser.textNode += '<' + c;\n            parser.state = S.TEXT;\n          }\n\n          continue;\n\n        case S.SGML_DECL:\n          if ((parser.sgmlDecl + c).toUpperCase() === CDATA) {\n            emitNode(parser, 'onopencdata');\n            parser.state = S.CDATA;\n            parser.sgmlDecl = '';\n            parser.cdata = '';\n          } else if (parser.sgmlDecl + c === '--') {\n            parser.state = S.COMMENT;\n            parser.comment = '';\n            parser.sgmlDecl = '';\n          } else if ((parser.sgmlDecl + c).toUpperCase() === DOCTYPE) {\n            parser.state = S.DOCTYPE;\n\n            if (parser.doctype || parser.sawRoot) {\n              strictFail(parser, 'Inappropriately located doctype declaration');\n            }\n\n            parser.doctype = '';\n            parser.sgmlDecl = '';\n          } else if (c === '>') {\n            emitNode(parser, 'onsgmldeclaration', parser.sgmlDecl);\n            parser.sgmlDecl = '';\n            parser.state = S.TEXT;\n          } else if (isQuote(c)) {\n            parser.state = S.SGML_DECL_QUOTED;\n            parser.sgmlDecl += c;\n          } else {\n            parser.sgmlDecl += c;\n          }\n\n          continue;\n\n        case S.SGML_DECL_QUOTED:\n          if (c === parser.q) {\n            parser.state = S.SGML_DECL;\n            parser.q = '';\n          }\n\n          parser.sgmlDecl += c;\n          continue;\n\n        case S.DOCTYPE:\n          if (c === '>') {\n            parser.state = S.TEXT;\n            emitNode(parser, 'ondoctype', parser.doctype);\n            parser.doctype = true; // just remember that we saw it.\n          } else {\n            parser.doctype += c;\n\n            if (c === '[') {\n              parser.state = S.DOCTYPE_DTD;\n            } else if (isQuote(c)) {\n              parser.state = S.DOCTYPE_QUOTED;\n              parser.q = c;\n            }\n          }\n\n          continue;\n\n        case S.DOCTYPE_QUOTED:\n          parser.doctype += c;\n\n          if (c === parser.q) {\n            parser.q = '';\n            parser.state = S.DOCTYPE;\n          }\n\n          continue;\n\n        case S.DOCTYPE_DTD:\n          parser.doctype += c;\n\n          if (c === ']') {\n            parser.state = S.DOCTYPE;\n          } else if (isQuote(c)) {\n            parser.state = S.DOCTYPE_DTD_QUOTED;\n            parser.q = c;\n          }\n\n          continue;\n\n        case S.DOCTYPE_DTD_QUOTED:\n          parser.doctype += c;\n\n          if (c === parser.q) {\n            parser.state = S.DOCTYPE_DTD;\n            parser.q = '';\n          }\n\n          continue;\n\n        case S.COMMENT:\n          if (c === '-') {\n            parser.state = S.COMMENT_ENDING;\n          } else {\n            parser.comment += c;\n          }\n\n          continue;\n\n        case S.COMMENT_ENDING:\n          if (c === '-') {\n            parser.state = S.COMMENT_ENDED;\n            parser.comment = textopts(parser.opt, parser.comment);\n\n            if (parser.comment) {\n              emitNode(parser, 'oncomment', parser.comment);\n            }\n\n            parser.comment = '';\n          } else {\n            parser.comment += '-' + c;\n            parser.state = S.COMMENT;\n          }\n\n          continue;\n\n        case S.COMMENT_ENDED:\n          if (c !== '>') {\n            strictFail(parser, 'Malformed comment'); // allow <!-- blah -- bloo --> in non-strict mode,\n            // which is a comment of \" blah -- bloo \"\n\n            parser.comment += '--' + c;\n            parser.state = S.COMMENT;\n          } else {\n            parser.state = S.TEXT;\n          }\n\n          continue;\n\n        case S.CDATA:\n          if (c === ']') {\n            parser.state = S.CDATA_ENDING;\n          } else {\n            parser.cdata += c;\n          }\n\n          continue;\n\n        case S.CDATA_ENDING:\n          if (c === ']') {\n            parser.state = S.CDATA_ENDING_2;\n          } else {\n            parser.cdata += ']' + c;\n            parser.state = S.CDATA;\n          }\n\n          continue;\n\n        case S.CDATA_ENDING_2:\n          if (c === '>') {\n            if (parser.cdata) {\n              emitNode(parser, 'oncdata', parser.cdata);\n            }\n\n            emitNode(parser, 'onclosecdata');\n            parser.cdata = '';\n            parser.state = S.TEXT;\n          } else if (c === ']') {\n            parser.cdata += ']';\n          } else {\n            parser.cdata += ']]' + c;\n            parser.state = S.CDATA;\n          }\n\n          continue;\n\n        case S.PROC_INST:\n          if (c === '?') {\n            parser.state = S.PROC_INST_ENDING;\n          } else if (isWhitespace(c)) {\n            parser.state = S.PROC_INST_BODY;\n          } else {\n            parser.procInstName += c;\n          }\n\n          continue;\n\n        case S.PROC_INST_BODY:\n          if (!parser.procInstBody && isWhitespace(c)) {\n            continue;\n          } else if (c === '?') {\n            parser.state = S.PROC_INST_ENDING;\n          } else {\n            parser.procInstBody += c;\n          }\n\n          continue;\n\n        case S.PROC_INST_ENDING:\n          if (c === '>') {\n            emitNode(parser, 'onprocessinginstruction', {\n              name: parser.procInstName,\n              body: parser.procInstBody\n            });\n            parser.procInstName = parser.procInstBody = '';\n            parser.state = S.TEXT;\n          } else {\n            parser.procInstBody += '?' + c;\n            parser.state = S.PROC_INST_BODY;\n          }\n\n          continue;\n\n        case S.OPEN_TAG:\n          if (isMatch(nameBody, c)) {\n            parser.tagName += c;\n          } else {\n            newTag(parser);\n\n            if (c === '>') {\n              openTag(parser);\n            } else if (c === '/') {\n              parser.state = S.OPEN_TAG_SLASH;\n            } else {\n              if (!isWhitespace(c)) {\n                strictFail(parser, 'Invalid character in tag name');\n              }\n\n              parser.state = S.ATTRIB;\n            }\n          }\n\n          continue;\n\n        case S.OPEN_TAG_SLASH:\n          if (c === '>') {\n            openTag(parser, true);\n            closeTag(parser);\n          } else {\n            strictFail(parser, 'Forward-slash in opening tag not followed by >');\n            parser.state = S.ATTRIB;\n          }\n\n          continue;\n\n        case S.ATTRIB:\n          // haven't read the attribute name yet.\n          if (isWhitespace(c)) {\n            continue;\n          } else if (c === '>') {\n            openTag(parser);\n          } else if (c === '/') {\n            parser.state = S.OPEN_TAG_SLASH;\n          } else if (isMatch(nameStart, c)) {\n            parser.attribName = c;\n            parser.attribValue = '';\n            parser.state = S.ATTRIB_NAME;\n          } else {\n            strictFail(parser, 'Invalid attribute name');\n          }\n\n          continue;\n\n        case S.ATTRIB_NAME:\n          if (c === '=') {\n            parser.state = S.ATTRIB_VALUE;\n          } else if (c === '>') {\n            strictFail(parser, 'Attribute without value');\n            parser.attribValue = parser.attribName;\n            attrib(parser);\n            openTag(parser);\n          } else if (isWhitespace(c)) {\n            parser.state = S.ATTRIB_NAME_SAW_WHITE;\n          } else if (isMatch(nameBody, c)) {\n            parser.attribName += c;\n          } else {\n            strictFail(parser, 'Invalid attribute name');\n          }\n\n          continue;\n\n        case S.ATTRIB_NAME_SAW_WHITE:\n          if (c === '=') {\n            parser.state = S.ATTRIB_VALUE;\n          } else if (isWhitespace(c)) {\n            continue;\n          } else {\n            strictFail(parser, 'Attribute without value');\n            parser.tag.attributes[parser.attribName] = '';\n            parser.attribValue = '';\n            emitNode(parser, 'onattribute', {\n              name: parser.attribName,\n              value: ''\n            });\n            parser.attribName = '';\n\n            if (c === '>') {\n              openTag(parser);\n            } else if (isMatch(nameStart, c)) {\n              parser.attribName = c;\n              parser.state = S.ATTRIB_NAME;\n            } else {\n              strictFail(parser, 'Invalid attribute name');\n              parser.state = S.ATTRIB;\n            }\n          }\n\n          continue;\n\n        case S.ATTRIB_VALUE:\n          if (isWhitespace(c)) {\n            continue;\n          } else if (isQuote(c)) {\n            parser.q = c;\n            parser.state = S.ATTRIB_VALUE_QUOTED;\n          } else {\n            strictFail(parser, 'Unquoted attribute value');\n            parser.state = S.ATTRIB_VALUE_UNQUOTED;\n            parser.attribValue = c;\n          }\n\n          continue;\n\n        case S.ATTRIB_VALUE_QUOTED:\n          if (c !== parser.q) {\n            if (c === '&') {\n              parser.state = S.ATTRIB_VALUE_ENTITY_Q;\n            } else {\n              parser.attribValue += c;\n            }\n\n            continue;\n          }\n\n          attrib(parser);\n          parser.q = '';\n          parser.state = S.ATTRIB_VALUE_CLOSED;\n          continue;\n\n        case S.ATTRIB_VALUE_CLOSED:\n          if (isWhitespace(c)) {\n            parser.state = S.ATTRIB;\n          } else if (c === '>') {\n            openTag(parser);\n          } else if (c === '/') {\n            parser.state = S.OPEN_TAG_SLASH;\n          } else if (isMatch(nameStart, c)) {\n            strictFail(parser, 'No whitespace between attributes');\n            parser.attribName = c;\n            parser.attribValue = '';\n            parser.state = S.ATTRIB_NAME;\n          } else {\n            strictFail(parser, 'Invalid attribute name');\n          }\n\n          continue;\n\n        case S.ATTRIB_VALUE_UNQUOTED:\n          if (!isAttribEnd(c)) {\n            if (c === '&') {\n              parser.state = S.ATTRIB_VALUE_ENTITY_U;\n            } else {\n              parser.attribValue += c;\n            }\n\n            continue;\n          }\n\n          attrib(parser);\n\n          if (c === '>') {\n            openTag(parser);\n          } else {\n            parser.state = S.ATTRIB;\n          }\n\n          continue;\n\n        case S.CLOSE_TAG:\n          if (!parser.tagName) {\n            if (isWhitespace(c)) {\n              continue;\n            } else if (notMatch(nameStart, c)) {\n              if (parser.script) {\n                parser.script += '</' + c;\n                parser.state = S.SCRIPT;\n              } else {\n                strictFail(parser, 'Invalid tagname in closing tag.');\n              }\n            } else {\n              parser.tagName = c;\n            }\n          } else if (c === '>') {\n            closeTag(parser);\n          } else if (isMatch(nameBody, c)) {\n            parser.tagName += c;\n          } else if (parser.script) {\n            parser.script += '</' + parser.tagName;\n            parser.tagName = '';\n            parser.state = S.SCRIPT;\n          } else {\n            if (!isWhitespace(c)) {\n              strictFail(parser, 'Invalid tagname in closing tag');\n            }\n\n            parser.state = S.CLOSE_TAG_SAW_WHITE;\n          }\n\n          continue;\n\n        case S.CLOSE_TAG_SAW_WHITE:\n          if (isWhitespace(c)) {\n            continue;\n          }\n\n          if (c === '>') {\n            closeTag(parser);\n          } else {\n            strictFail(parser, 'Invalid characters in closing tag');\n          }\n\n          continue;\n\n        case S.TEXT_ENTITY:\n        case S.ATTRIB_VALUE_ENTITY_Q:\n        case S.ATTRIB_VALUE_ENTITY_U:\n          var returnState;\n          var buffer;\n\n          switch (parser.state) {\n            case S.TEXT_ENTITY:\n              returnState = S.TEXT;\n              buffer = 'textNode';\n              break;\n\n            case S.ATTRIB_VALUE_ENTITY_Q:\n              returnState = S.ATTRIB_VALUE_QUOTED;\n              buffer = 'attribValue';\n              break;\n\n            case S.ATTRIB_VALUE_ENTITY_U:\n              returnState = S.ATTRIB_VALUE_UNQUOTED;\n              buffer = 'attribValue';\n              break;\n          }\n\n          if (c === ';') {\n            parser[buffer] += parseEntity(parser);\n            parser.entity = '';\n            parser.state = returnState;\n          } else if (isMatch(parser.entity.length ? entityBody : entityStart, c)) {\n            parser.entity += c;\n          } else {\n            strictFail(parser, 'Invalid character in entity name');\n            parser[buffer] += '&' + parser.entity + c;\n            parser.entity = '';\n            parser.state = returnState;\n          }\n\n          continue;\n\n        default:\n          throw new Error(parser, 'Unknown state: ' + parser.state);\n      }\n    } // while\n\n\n    if (parser.position >= parser.bufferCheckPosition) {\n      checkBufferLength(parser);\n    }\n\n    return parser;\n  }\n  /*! http://mths.be/fromcodepoint v0.1.0 by @mathias */\n\n  /* istanbul ignore next */\n\n\n  if (!String.fromCodePoint) {\n    (function () {\n      var stringFromCharCode = String.fromCharCode;\n      var floor = Math.floor;\n\n      var fromCodePoint = function () {\n        var MAX_SIZE = 0x4000;\n        var codeUnits = [];\n        var highSurrogate;\n        var lowSurrogate;\n        var index = -1;\n        var length = arguments.length;\n\n        if (!length) {\n          return '';\n        }\n\n        var result = '';\n\n        while (++index < length) {\n          var codePoint = Number(arguments[index]);\n\n          if (!isFinite(codePoint) || // `NaN`, `+Infinity`, or `-Infinity`\n          codePoint < 0 || // not a valid Unicode code point\n          codePoint > 0x10FFFF || // not a valid Unicode code point\n          floor(codePoint) !== codePoint // not an integer\n          ) {\n              throw RangeError('Invalid code point: ' + codePoint);\n            }\n\n          if (codePoint <= 0xFFFF) {\n            // BMP code point\n            codeUnits.push(codePoint);\n          } else {\n            // Astral code point; split in surrogate halves\n            // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae\n            codePoint -= 0x10000;\n            highSurrogate = (codePoint >> 10) + 0xD800;\n            lowSurrogate = codePoint % 0x400 + 0xDC00;\n            codeUnits.push(highSurrogate, lowSurrogate);\n          }\n\n          if (index + 1 === length || codeUnits.length > MAX_SIZE) {\n            result += stringFromCharCode.apply(null, codeUnits);\n            codeUnits.length = 0;\n          }\n        }\n\n        return result;\n      };\n      /* istanbul ignore next */\n\n\n      if (Object.defineProperty) {\n        Object.defineProperty(String, 'fromCodePoint', {\n          value: fromCodePoint,\n          configurable: true,\n          writable: true\n        });\n      } else {\n        String.fromCodePoint = fromCodePoint;\n      }\n    })();\n  }\n})( false ? undefined : exports);\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/sax/lib/sax.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (module) {\n  if (!module.webpackPolyfill) {\n    module.deprecate = function () {};\n\n    module.paths = []; // module.parent = undefined by default\n\n    if (!module.children) module.children = [];\n    Object.defineProperty(module, \"loaded\", {\n      enumerable: true,\n      get: function () {\n        return module.l;\n      }\n    });\n    Object.defineProperty(module, \"id\", {\n      enumerable: true,\n      get: function () {\n        return module.i;\n      }\n    });\n    module.webpackPolyfill = 1;\n  }\n\n  return module;\n};\n\n//# sourceURL=webpack://prst-shape-transform/(webpack)/buildin/module.js?");

/***/ }),

/***/ "./node_modules/xml-js/lib/array-helper.js":
/*!*************************************************!*\
  !*** ./node_modules/xml-js/lib/array-helper.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\n  isArray: function (value) {\n    if (Array.isArray) {\n      return Array.isArray(value);\n    } // fallback for older browsers like  IE 8\n\n\n    return Object.prototype.toString.call(value) === '[object Array]';\n  }\n};\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/xml-js/lib/array-helper.js?");

/***/ }),

/***/ "./node_modules/xml-js/lib/index.js":
/*!******************************************!*\
  !*** ./node_modules/xml-js/lib/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*jslint node:true */\nvar xml2js = __webpack_require__(/*! ./xml2js */ \"./node_modules/xml-js/lib/xml2js.js\");\n\nvar xml2json = __webpack_require__(/*! ./xml2json */ \"./node_modules/xml-js/lib/xml2json.js\");\n\nvar js2xml = __webpack_require__(/*! ./js2xml */ \"./node_modules/xml-js/lib/js2xml.js\");\n\nvar json2xml = __webpack_require__(/*! ./json2xml */ \"./node_modules/xml-js/lib/json2xml.js\");\n\nmodule.exports = {\n  xml2js: xml2js,\n  xml2json: xml2json,\n  js2xml: js2xml,\n  json2xml: json2xml\n};\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/xml-js/lib/index.js?");

/***/ }),

/***/ "./node_modules/xml-js/lib/js2xml.js":
/*!*******************************************!*\
  !*** ./node_modules/xml-js/lib/js2xml.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var helper = __webpack_require__(/*! ./options-helper */ \"./node_modules/xml-js/lib/options-helper.js\");\n\nvar isArray = __webpack_require__(/*! ./array-helper */ \"./node_modules/xml-js/lib/array-helper.js\").isArray;\n\nvar currentElement, currentElementName;\n\nfunction validateOptions(userOptions) {\n  var options = helper.copyOptions(userOptions);\n  helper.ensureFlagExists('ignoreDeclaration', options);\n  helper.ensureFlagExists('ignoreInstruction', options);\n  helper.ensureFlagExists('ignoreAttributes', options);\n  helper.ensureFlagExists('ignoreText', options);\n  helper.ensureFlagExists('ignoreComment', options);\n  helper.ensureFlagExists('ignoreCdata', options);\n  helper.ensureFlagExists('ignoreDoctype', options);\n  helper.ensureFlagExists('compact', options);\n  helper.ensureFlagExists('indentText', options);\n  helper.ensureFlagExists('indentCdata', options);\n  helper.ensureFlagExists('indentAttributes', options);\n  helper.ensureFlagExists('indentInstruction', options);\n  helper.ensureFlagExists('fullTagEmptyElement', options);\n  helper.ensureFlagExists('noQuotesForNativeAttributes', options);\n  helper.ensureSpacesExists(options);\n\n  if (typeof options.spaces === 'number') {\n    options.spaces = Array(options.spaces + 1).join(' ');\n  }\n\n  helper.ensureKeyExists('declaration', options);\n  helper.ensureKeyExists('instruction', options);\n  helper.ensureKeyExists('attributes', options);\n  helper.ensureKeyExists('text', options);\n  helper.ensureKeyExists('comment', options);\n  helper.ensureKeyExists('cdata', options);\n  helper.ensureKeyExists('doctype', options);\n  helper.ensureKeyExists('type', options);\n  helper.ensureKeyExists('name', options);\n  helper.ensureKeyExists('elements', options);\n  helper.checkFnExists('doctype', options);\n  helper.checkFnExists('instruction', options);\n  helper.checkFnExists('cdata', options);\n  helper.checkFnExists('comment', options);\n  helper.checkFnExists('text', options);\n  helper.checkFnExists('instructionName', options);\n  helper.checkFnExists('elementName', options);\n  helper.checkFnExists('attributeName', options);\n  helper.checkFnExists('attributeValue', options);\n  helper.checkFnExists('attributes', options);\n  helper.checkFnExists('fullTagEmptyElement', options);\n  return options;\n}\n\nfunction writeIndentation(options, depth, firstLine) {\n  return (!firstLine && options.spaces ? '\\n' : '') + Array(depth + 1).join(options.spaces);\n}\n\nfunction writeAttributes(attributes, options, depth) {\n  if (options.ignoreAttributes) {\n    return '';\n  }\n\n  if ('attributesFn' in options) {\n    attributes = options.attributesFn(attributes, currentElementName, currentElement);\n  }\n\n  var key,\n      attr,\n      attrName,\n      quote,\n      result = [];\n\n  for (key in attributes) {\n    if (attributes.hasOwnProperty(key) && attributes[key] !== null && attributes[key] !== undefined) {\n      quote = options.noQuotesForNativeAttributes && typeof attributes[key] !== 'string' ? '' : '\"';\n      attr = '' + attributes[key]; // ensure number and boolean are converted to String\n\n      attr = attr.replace(/\"/g, '&quot;');\n      attrName = 'attributeNameFn' in options ? options.attributeNameFn(key, attr, currentElementName, currentElement) : key;\n      result.push(options.spaces && options.indentAttributes ? writeIndentation(options, depth + 1, false) : ' ');\n      result.push(attrName + '=' + quote + ('attributeValueFn' in options ? options.attributeValueFn(attr, key, currentElementName, currentElement) : attr) + quote);\n    }\n  }\n\n  if (attributes && Object.keys(attributes).length && options.spaces && options.indentAttributes) {\n    result.push(writeIndentation(options, depth, false));\n  }\n\n  return result.join('');\n}\n\nfunction writeDeclaration(declaration, options, depth) {\n  currentElement = declaration;\n  currentElementName = 'xml';\n  return options.ignoreDeclaration ? '' : '<?' + 'xml' + writeAttributes(declaration[options.attributesKey], options, depth) + '?>';\n}\n\nfunction writeInstruction(instruction, options, depth) {\n  if (options.ignoreInstruction) {\n    return '';\n  }\n\n  var key;\n\n  for (key in instruction) {\n    if (instruction.hasOwnProperty(key)) {\n      break;\n    }\n  }\n\n  var instructionName = 'instructionNameFn' in options ? options.instructionNameFn(key, instruction[key], currentElementName, currentElement) : key;\n\n  if (typeof instruction[key] === 'object') {\n    currentElement = instruction;\n    currentElementName = instructionName;\n    return '<?' + instructionName + writeAttributes(instruction[key][options.attributesKey], options, depth) + '?>';\n  } else {\n    var instructionValue = instruction[key] ? instruction[key] : '';\n    if ('instructionFn' in options) instructionValue = options.instructionFn(instructionValue, key, currentElementName, currentElement);\n    return '<?' + instructionName + (instructionValue ? ' ' + instructionValue : '') + '?>';\n  }\n}\n\nfunction writeComment(comment, options) {\n  return options.ignoreComment ? '' : '<!--' + ('commentFn' in options ? options.commentFn(comment, currentElementName, currentElement) : comment) + '-->';\n}\n\nfunction writeCdata(cdata, options) {\n  return options.ignoreCdata ? '' : '<![CDATA[' + ('cdataFn' in options ? options.cdataFn(cdata, currentElementName, currentElement) : cdata.replace(']]>', ']]]]><![CDATA[>')) + ']]>';\n}\n\nfunction writeDoctype(doctype, options) {\n  return options.ignoreDoctype ? '' : '<!DOCTYPE ' + ('doctypeFn' in options ? options.doctypeFn(doctype, currentElementName, currentElement) : doctype) + '>';\n}\n\nfunction writeText(text, options) {\n  if (options.ignoreText) return '';\n  text = '' + text; // ensure Number and Boolean are converted to String\n\n  text = text.replace(/&amp;/g, '&'); // desanitize to avoid double sanitization\n\n  text = text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');\n  return 'textFn' in options ? options.textFn(text, currentElementName, currentElement) : text;\n}\n\nfunction hasContent(element, options) {\n  var i;\n\n  if (element.elements && element.elements.length) {\n    for (i = 0; i < element.elements.length; ++i) {\n      switch (element.elements[i][options.typeKey]) {\n        case 'text':\n          if (options.indentText) {\n            return true;\n          }\n\n          break;\n        // skip to next key\n\n        case 'cdata':\n          if (options.indentCdata) {\n            return true;\n          }\n\n          break;\n        // skip to next key\n\n        case 'instruction':\n          if (options.indentInstruction) {\n            return true;\n          }\n\n          break;\n        // skip to next key\n\n        case 'doctype':\n        case 'comment':\n        case 'element':\n          return true;\n\n        default:\n          return true;\n      }\n    }\n  }\n\n  return false;\n}\n\nfunction writeElement(element, options, depth) {\n  currentElement = element;\n  currentElementName = element.name;\n  var xml = [],\n      elementName = 'elementNameFn' in options ? options.elementNameFn(element.name, element) : element.name;\n  xml.push('<' + elementName);\n\n  if (element[options.attributesKey]) {\n    xml.push(writeAttributes(element[options.attributesKey], options, depth));\n  }\n\n  var withClosingTag = element[options.elementsKey] && element[options.elementsKey].length || element[options.attributesKey] && element[options.attributesKey]['xml:space'] === 'preserve';\n\n  if (!withClosingTag) {\n    if ('fullTagEmptyElementFn' in options) {\n      withClosingTag = options.fullTagEmptyElementFn(element.name, element);\n    } else {\n      withClosingTag = options.fullTagEmptyElement;\n    }\n  }\n\n  if (withClosingTag) {\n    xml.push('>');\n\n    if (element[options.elementsKey] && element[options.elementsKey].length) {\n      xml.push(writeElements(element[options.elementsKey], options, depth + 1));\n      currentElement = element;\n      currentElementName = element.name;\n    }\n\n    xml.push(options.spaces && hasContent(element, options) ? '\\n' + Array(depth + 1).join(options.spaces) : '');\n    xml.push('</' + elementName + '>');\n  } else {\n    xml.push('/>');\n  }\n\n  return xml.join('');\n}\n\nfunction writeElements(elements, options, depth, firstLine) {\n  return elements.reduce(function (xml, element) {\n    var indent = writeIndentation(options, depth, firstLine && !xml);\n\n    switch (element.type) {\n      case 'element':\n        return xml + indent + writeElement(element, options, depth);\n\n      case 'comment':\n        return xml + indent + writeComment(element[options.commentKey], options);\n\n      case 'doctype':\n        return xml + indent + writeDoctype(element[options.doctypeKey], options);\n\n      case 'cdata':\n        return xml + (options.indentCdata ? indent : '') + writeCdata(element[options.cdataKey], options);\n\n      case 'text':\n        return xml + (options.indentText ? indent : '') + writeText(element[options.textKey], options);\n\n      case 'instruction':\n        var instruction = {};\n        instruction[element[options.nameKey]] = element[options.attributesKey] ? element : element[options.instructionKey];\n        return xml + (options.indentInstruction ? indent : '') + writeInstruction(instruction, options, depth);\n    }\n  }, '');\n}\n\nfunction hasContentCompact(element, options, anyContent) {\n  var key;\n\n  for (key in element) {\n    if (element.hasOwnProperty(key)) {\n      switch (key) {\n        case options.parentKey:\n        case options.attributesKey:\n          break;\n        // skip to next key\n\n        case options.textKey:\n          if (options.indentText || anyContent) {\n            return true;\n          }\n\n          break;\n        // skip to next key\n\n        case options.cdataKey:\n          if (options.indentCdata || anyContent) {\n            return true;\n          }\n\n          break;\n        // skip to next key\n\n        case options.instructionKey:\n          if (options.indentInstruction || anyContent) {\n            return true;\n          }\n\n          break;\n        // skip to next key\n\n        case options.doctypeKey:\n        case options.commentKey:\n          return true;\n\n        default:\n          return true;\n      }\n    }\n  }\n\n  return false;\n}\n\nfunction writeElementCompact(element, name, options, depth, indent) {\n  currentElement = element;\n  currentElementName = name;\n  var elementName = 'elementNameFn' in options ? options.elementNameFn(name, element) : name;\n\n  if (typeof element === 'undefined' || element === null || element === '') {\n    return 'fullTagEmptyElementFn' in options && options.fullTagEmptyElementFn(name, element) || options.fullTagEmptyElement ? '<' + elementName + '></' + elementName + '>' : '<' + elementName + '/>';\n  }\n\n  var xml = [];\n\n  if (name) {\n    xml.push('<' + elementName);\n\n    if (typeof element !== 'object') {\n      xml.push('>' + writeText(element, options) + '</' + elementName + '>');\n      return xml.join('');\n    }\n\n    if (element[options.attributesKey]) {\n      xml.push(writeAttributes(element[options.attributesKey], options, depth));\n    }\n\n    var withClosingTag = hasContentCompact(element, options, true) || element[options.attributesKey] && element[options.attributesKey]['xml:space'] === 'preserve';\n\n    if (!withClosingTag) {\n      if ('fullTagEmptyElementFn' in options) {\n        withClosingTag = options.fullTagEmptyElementFn(name, element);\n      } else {\n        withClosingTag = options.fullTagEmptyElement;\n      }\n    }\n\n    if (withClosingTag) {\n      xml.push('>');\n    } else {\n      xml.push('/>');\n      return xml.join('');\n    }\n  }\n\n  xml.push(writeElementsCompact(element, options, depth + 1, false));\n  currentElement = element;\n  currentElementName = name;\n\n  if (name) {\n    xml.push((indent ? writeIndentation(options, depth, false) : '') + '</' + elementName + '>');\n  }\n\n  return xml.join('');\n}\n\nfunction writeElementsCompact(element, options, depth, firstLine) {\n  var i,\n      key,\n      nodes,\n      xml = [];\n\n  for (key in element) {\n    if (element.hasOwnProperty(key)) {\n      nodes = isArray(element[key]) ? element[key] : [element[key]];\n\n      for (i = 0; i < nodes.length; ++i) {\n        switch (key) {\n          case options.declarationKey:\n            xml.push(writeDeclaration(nodes[i], options, depth));\n            break;\n\n          case options.instructionKey:\n            xml.push((options.indentInstruction ? writeIndentation(options, depth, firstLine) : '') + writeInstruction(nodes[i], options, depth));\n            break;\n\n          case options.attributesKey:\n          case options.parentKey:\n            break;\n          // skip\n\n          case options.textKey:\n            xml.push((options.indentText ? writeIndentation(options, depth, firstLine) : '') + writeText(nodes[i], options));\n            break;\n\n          case options.cdataKey:\n            xml.push((options.indentCdata ? writeIndentation(options, depth, firstLine) : '') + writeCdata(nodes[i], options));\n            break;\n\n          case options.doctypeKey:\n            xml.push(writeIndentation(options, depth, firstLine) + writeDoctype(nodes[i], options));\n            break;\n\n          case options.commentKey:\n            xml.push(writeIndentation(options, depth, firstLine) + writeComment(nodes[i], options));\n            break;\n\n          default:\n            xml.push(writeIndentation(options, depth, firstLine) + writeElementCompact(nodes[i], key, options, depth, hasContentCompact(nodes[i], options)));\n        }\n\n        firstLine = firstLine && !xml.length;\n      }\n    }\n  }\n\n  return xml.join('');\n}\n\nmodule.exports = function (js, options) {\n  options = validateOptions(options);\n  var xml = [];\n  currentElement = js;\n  currentElementName = '_root_';\n\n  if (options.compact) {\n    xml.push(writeElementsCompact(js, options, 0, true));\n  } else {\n    if (js[options.declarationKey]) {\n      xml.push(writeDeclaration(js[options.declarationKey], options, 0));\n    }\n\n    if (js[options.elementsKey] && js[options.elementsKey].length) {\n      xml.push(writeElements(js[options.elementsKey], options, 0, !xml.length));\n    }\n  }\n\n  return xml.join('');\n};\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/xml-js/lib/js2xml.js?");

/***/ }),

/***/ "./node_modules/xml-js/lib/json2xml.js":
/*!*********************************************!*\
  !*** ./node_modules/xml-js/lib/json2xml.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var js2xml = __webpack_require__(/*! ./js2xml.js */ \"./node_modules/xml-js/lib/js2xml.js\");\n\nmodule.exports = function (json, options) {\n  if (json instanceof Buffer) {\n    json = json.toString();\n  }\n\n  var js = null;\n\n  if (typeof json === 'string') {\n    try {\n      js = JSON.parse(json);\n    } catch (e) {\n      throw new Error('The JSON structure is invalid');\n    }\n  } else {\n    js = json;\n  }\n\n  return js2xml(js, options);\n};\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/xml-js/lib/json2xml.js?");

/***/ }),

/***/ "./node_modules/xml-js/lib/options-helper.js":
/*!***************************************************!*\
  !*** ./node_modules/xml-js/lib/options-helper.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isArray = __webpack_require__(/*! ./array-helper */ \"./node_modules/xml-js/lib/array-helper.js\").isArray;\n\nmodule.exports = {\n  copyOptions: function (options) {\n    var key,\n        copy = {};\n\n    for (key in options) {\n      if (options.hasOwnProperty(key)) {\n        copy[key] = options[key];\n      }\n    }\n\n    return copy;\n  },\n  ensureFlagExists: function (item, options) {\n    if (!(item in options) || typeof options[item] !== 'boolean') {\n      options[item] = false;\n    }\n  },\n  ensureSpacesExists: function (options) {\n    if (!('spaces' in options) || typeof options.spaces !== 'number' && typeof options.spaces !== 'string') {\n      options.spaces = 0;\n    }\n  },\n  ensureAlwaysArrayExists: function (options) {\n    if (!('alwaysArray' in options) || typeof options.alwaysArray !== 'boolean' && !isArray(options.alwaysArray)) {\n      options.alwaysArray = false;\n    }\n  },\n  ensureKeyExists: function (key, options) {\n    if (!(key + 'Key' in options) || typeof options[key + 'Key'] !== 'string') {\n      options[key + 'Key'] = options.compact ? '_' + key : key;\n    }\n  },\n  checkFnExists: function (key, options) {\n    return key + 'Fn' in options;\n  }\n};\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/xml-js/lib/options-helper.js?");

/***/ }),

/***/ "./node_modules/xml-js/lib/xml2js.js":
/*!*******************************************!*\
  !*** ./node_modules/xml-js/lib/xml2js.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var sax = __webpack_require__(/*! sax */ \"./node_modules/sax/lib/sax.js\");\n\nvar expat\n/*= require('node-expat');*/\n= {\n  on: function () {},\n  parse: function () {}\n};\n\nvar helper = __webpack_require__(/*! ./options-helper */ \"./node_modules/xml-js/lib/options-helper.js\");\n\nvar isArray = __webpack_require__(/*! ./array-helper */ \"./node_modules/xml-js/lib/array-helper.js\").isArray;\n\nvar options;\nvar pureJsParser = true;\nvar currentElement;\n\nfunction validateOptions(userOptions) {\n  options = helper.copyOptions(userOptions);\n  helper.ensureFlagExists('ignoreDeclaration', options);\n  helper.ensureFlagExists('ignoreInstruction', options);\n  helper.ensureFlagExists('ignoreAttributes', options);\n  helper.ensureFlagExists('ignoreText', options);\n  helper.ensureFlagExists('ignoreComment', options);\n  helper.ensureFlagExists('ignoreCdata', options);\n  helper.ensureFlagExists('ignoreDoctype', options);\n  helper.ensureFlagExists('compact', options);\n  helper.ensureFlagExists('alwaysChildren', options);\n  helper.ensureFlagExists('addParent', options);\n  helper.ensureFlagExists('trim', options);\n  helper.ensureFlagExists('nativeType', options);\n  helper.ensureFlagExists('nativeTypeAttributes', options);\n  helper.ensureFlagExists('sanitize', options);\n  helper.ensureFlagExists('instructionHasAttributes', options);\n  helper.ensureFlagExists('captureSpacesBetweenElements', options);\n  helper.ensureAlwaysArrayExists(options);\n  helper.ensureKeyExists('declaration', options);\n  helper.ensureKeyExists('instruction', options);\n  helper.ensureKeyExists('attributes', options);\n  helper.ensureKeyExists('text', options);\n  helper.ensureKeyExists('comment', options);\n  helper.ensureKeyExists('cdata', options);\n  helper.ensureKeyExists('doctype', options);\n  helper.ensureKeyExists('type', options);\n  helper.ensureKeyExists('name', options);\n  helper.ensureKeyExists('elements', options);\n  helper.ensureKeyExists('parent', options);\n  helper.checkFnExists('doctype', options);\n  helper.checkFnExists('instruction', options);\n  helper.checkFnExists('cdata', options);\n  helper.checkFnExists('comment', options);\n  helper.checkFnExists('text', options);\n  helper.checkFnExists('instructionName', options);\n  helper.checkFnExists('elementName', options);\n  helper.checkFnExists('attributeName', options);\n  helper.checkFnExists('attributeValue', options);\n  helper.checkFnExists('attributes', options);\n  return options;\n}\n\nfunction nativeType(value) {\n  var nValue = Number(value);\n\n  if (!isNaN(nValue)) {\n    return nValue;\n  }\n\n  var bValue = value.toLowerCase();\n\n  if (bValue === 'true') {\n    return true;\n  } else if (bValue === 'false') {\n    return false;\n  }\n\n  return value;\n}\n\nfunction addField(type, value) {\n  var key;\n\n  if (options.compact) {\n    if (!currentElement[options[type + 'Key']] && (isArray(options.alwaysArray) ? options.alwaysArray.indexOf(options[type + 'Key']) !== -1 : options.alwaysArray)) {\n      currentElement[options[type + 'Key']] = [];\n    }\n\n    if (currentElement[options[type + 'Key']] && !isArray(currentElement[options[type + 'Key']])) {\n      currentElement[options[type + 'Key']] = [currentElement[options[type + 'Key']]];\n    }\n\n    if (type + 'Fn' in options && typeof value === 'string') {\n      value = options[type + 'Fn'](value, currentElement);\n    }\n\n    if (type === 'instruction' && ('instructionFn' in options || 'instructionNameFn' in options)) {\n      for (key in value) {\n        if (value.hasOwnProperty(key)) {\n          if ('instructionFn' in options) {\n            value[key] = options.instructionFn(value[key], key, currentElement);\n          } else {\n            var temp = value[key];\n            delete value[key];\n            value[options.instructionNameFn(key, temp, currentElement)] = temp;\n          }\n        }\n      }\n    }\n\n    if (isArray(currentElement[options[type + 'Key']])) {\n      currentElement[options[type + 'Key']].push(value);\n    } else {\n      currentElement[options[type + 'Key']] = value;\n    }\n  } else {\n    if (!currentElement[options.elementsKey]) {\n      currentElement[options.elementsKey] = [];\n    }\n\n    var element = {};\n    element[options.typeKey] = type;\n\n    if (type === 'instruction') {\n      for (key in value) {\n        if (value.hasOwnProperty(key)) {\n          break;\n        }\n      }\n\n      element[options.nameKey] = 'instructionNameFn' in options ? options.instructionNameFn(key, value, currentElement) : key;\n\n      if (options.instructionHasAttributes) {\n        element[options.attributesKey] = value[key][options.attributesKey];\n\n        if ('instructionFn' in options) {\n          element[options.attributesKey] = options.instructionFn(element[options.attributesKey], key, currentElement);\n        }\n      } else {\n        if ('instructionFn' in options) {\n          value[key] = options.instructionFn(value[key], key, currentElement);\n        }\n\n        element[options.instructionKey] = value[key];\n      }\n    } else {\n      if (type + 'Fn' in options) {\n        value = options[type + 'Fn'](value, currentElement);\n      }\n\n      element[options[type + 'Key']] = value;\n    }\n\n    if (options.addParent) {\n      element[options.parentKey] = currentElement;\n    }\n\n    currentElement[options.elementsKey].push(element);\n  }\n}\n\nfunction manipulateAttributes(attributes) {\n  if ('attributesFn' in options && attributes) {\n    attributes = options.attributesFn(attributes, currentElement);\n  }\n\n  if ((options.trim || 'attributeValueFn' in options || 'attributeNameFn' in options || options.nativeTypeAttributes) && attributes) {\n    var key;\n\n    for (key in attributes) {\n      if (attributes.hasOwnProperty(key)) {\n        if (options.trim) attributes[key] = attributes[key].trim();\n\n        if (options.nativeTypeAttributes) {\n          attributes[key] = nativeType(attributes[key]);\n        }\n\n        if ('attributeValueFn' in options) attributes[key] = options.attributeValueFn(attributes[key], key, currentElement);\n\n        if ('attributeNameFn' in options) {\n          var temp = attributes[key];\n          delete attributes[key];\n          attributes[options.attributeNameFn(key, attributes[key], currentElement)] = temp;\n        }\n      }\n    }\n  }\n\n  return attributes;\n}\n\nfunction onInstruction(instruction) {\n  var attributes = {};\n\n  if (instruction.body && (instruction.name.toLowerCase() === 'xml' || options.instructionHasAttributes)) {\n    var attrsRegExp = /([\\w:-]+)\\s*=\\s*(?:\"([^\"]*)\"|'([^']*)'|(\\w+))\\s*/g;\n    var match;\n\n    while ((match = attrsRegExp.exec(instruction.body)) !== null) {\n      attributes[match[1]] = match[2] || match[3] || match[4];\n    }\n\n    attributes = manipulateAttributes(attributes);\n  }\n\n  if (instruction.name.toLowerCase() === 'xml') {\n    if (options.ignoreDeclaration) {\n      return;\n    }\n\n    currentElement[options.declarationKey] = {};\n\n    if (Object.keys(attributes).length) {\n      currentElement[options.declarationKey][options.attributesKey] = attributes;\n    }\n\n    if (options.addParent) {\n      currentElement[options.declarationKey][options.parentKey] = currentElement;\n    }\n  } else {\n    if (options.ignoreInstruction) {\n      return;\n    }\n\n    if (options.trim) {\n      instruction.body = instruction.body.trim();\n    }\n\n    var value = {};\n\n    if (options.instructionHasAttributes && Object.keys(attributes).length) {\n      value[instruction.name] = {};\n      value[instruction.name][options.attributesKey] = attributes;\n    } else {\n      value[instruction.name] = instruction.body;\n    }\n\n    addField('instruction', value);\n  }\n}\n\nfunction onStartElement(name, attributes) {\n  var element;\n\n  if (typeof name === 'object') {\n    attributes = name.attributes;\n    name = name.name;\n  }\n\n  attributes = manipulateAttributes(attributes);\n\n  if ('elementNameFn' in options) {\n    name = options.elementNameFn(name, currentElement);\n  }\n\n  if (options.compact) {\n    element = {};\n\n    if (!options.ignoreAttributes && attributes && Object.keys(attributes).length) {\n      element[options.attributesKey] = {};\n      var key;\n\n      for (key in attributes) {\n        if (attributes.hasOwnProperty(key)) {\n          element[options.attributesKey][key] = attributes[key];\n        }\n      }\n    }\n\n    if (!(name in currentElement) && (isArray(options.alwaysArray) ? options.alwaysArray.indexOf(name) !== -1 : options.alwaysArray)) {\n      currentElement[name] = [];\n    }\n\n    if (currentElement[name] && !isArray(currentElement[name])) {\n      currentElement[name] = [currentElement[name]];\n    }\n\n    if (isArray(currentElement[name])) {\n      currentElement[name].push(element);\n    } else {\n      currentElement[name] = element;\n    }\n  } else {\n    if (!currentElement[options.elementsKey]) {\n      currentElement[options.elementsKey] = [];\n    }\n\n    element = {};\n    element[options.typeKey] = 'element';\n    element[options.nameKey] = name;\n\n    if (!options.ignoreAttributes && attributes && Object.keys(attributes).length) {\n      element[options.attributesKey] = attributes;\n    }\n\n    if (options.alwaysChildren) {\n      element[options.elementsKey] = [];\n    }\n\n    currentElement[options.elementsKey].push(element);\n  }\n\n  element[options.parentKey] = currentElement; // will be deleted in onEndElement() if !options.addParent\n\n  currentElement = element;\n}\n\nfunction onText(text) {\n  if (options.ignoreText) {\n    return;\n  }\n\n  if (!text.trim() && !options.captureSpacesBetweenElements) {\n    return;\n  }\n\n  if (options.trim) {\n    text = text.trim();\n  }\n\n  if (options.nativeType) {\n    text = nativeType(text);\n  }\n\n  if (options.sanitize) {\n    text = text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');\n  }\n\n  addField('text', text);\n}\n\nfunction onComment(comment) {\n  if (options.ignoreComment) {\n    return;\n  }\n\n  if (options.trim) {\n    comment = comment.trim();\n  }\n\n  addField('comment', comment);\n}\n\nfunction onEndElement(name) {\n  var parentElement = currentElement[options.parentKey];\n\n  if (!options.addParent) {\n    delete currentElement[options.parentKey];\n  }\n\n  currentElement = parentElement;\n}\n\nfunction onCdata(cdata) {\n  if (options.ignoreCdata) {\n    return;\n  }\n\n  if (options.trim) {\n    cdata = cdata.trim();\n  }\n\n  addField('cdata', cdata);\n}\n\nfunction onDoctype(doctype) {\n  if (options.ignoreDoctype) {\n    return;\n  }\n\n  doctype = doctype.replace(/^ /, '');\n\n  if (options.trim) {\n    doctype = doctype.trim();\n  }\n\n  addField('doctype', doctype);\n}\n\nfunction onError(error) {\n  error.note = error; //console.error(error);\n}\n\nmodule.exports = function (xml, userOptions) {\n  var parser = pureJsParser ? sax.parser(true, {}) : parser = new expat.Parser('UTF-8');\n  var result = {};\n  currentElement = result;\n  options = validateOptions(userOptions);\n\n  if (pureJsParser) {\n    parser.opt = {\n      strictEntities: true\n    };\n    parser.onopentag = onStartElement;\n    parser.ontext = onText;\n    parser.oncomment = onComment;\n    parser.onclosetag = onEndElement;\n    parser.onerror = onError;\n    parser.oncdata = onCdata;\n    parser.ondoctype = onDoctype;\n    parser.onprocessinginstruction = onInstruction;\n  } else {\n    parser.on('startElement', onStartElement);\n    parser.on('text', onText);\n    parser.on('comment', onComment);\n    parser.on('endElement', onEndElement);\n    parser.on('error', onError); //parser.on('startCdata', onStartCdata);\n    //parser.on('endCdata', onEndCdata);\n    //parser.on('entityDecl', onEntityDecl);\n  }\n\n  if (pureJsParser) {\n    parser.write(xml).close();\n  } else {\n    if (!parser.parse(xml)) {\n      throw new Error('XML parsing error: ' + parser.getError());\n    }\n  }\n\n  if (result[options.elementsKey]) {\n    var temp = result[options.elementsKey];\n    delete result[options.elementsKey];\n    result[options.elementsKey] = temp;\n    delete result.text;\n  }\n\n  return result;\n};\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/xml-js/lib/xml2js.js?");

/***/ }),

/***/ "./node_modules/xml-js/lib/xml2json.js":
/*!*********************************************!*\
  !*** ./node_modules/xml-js/lib/xml2json.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var helper = __webpack_require__(/*! ./options-helper */ \"./node_modules/xml-js/lib/options-helper.js\");\n\nvar xml2js = __webpack_require__(/*! ./xml2js */ \"./node_modules/xml-js/lib/xml2js.js\");\n\nfunction validateOptions(userOptions) {\n  var options = helper.copyOptions(userOptions);\n  helper.ensureSpacesExists(options);\n  return options;\n}\n\nmodule.exports = function (xml, userOptions) {\n  var options, js, json, parentKey;\n  options = validateOptions(userOptions);\n  js = xml2js(xml, options);\n  parentKey = 'compact' in options && options.compact ? '_parent' : 'parent'; // parentKey = ptions.compact ? '_parent' : 'parent'; // consider this\n\n  if ('addParent' in options && options.addParent) {\n    json = JSON.stringify(js, function (k, v) {\n      return k === parentKey ? '_' : v;\n    }, options.spaces);\n  } else {\n    json = JSON.stringify(js, null, options.spaces);\n  }\n\n  return json.replace(/\\u2028/g, '\\\\u2028').replace(/\\u2029/g, '\\\\u2029');\n};\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/xml-js/lib/xml2json.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_reduce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/reduce */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/instance/reduce.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_reduce__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_reduce__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js/get-iterator */ \"./node_modules/@babel/runtime-corejs3/core-js/get-iterator.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_get_iterator_method__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js/get-iterator-method */ \"./node_modules/@babel/runtime-corejs3/core-js/get-iterator-method.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_get_iterator_method__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_get_iterator_method__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_symbol__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/symbol */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/symbol.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_symbol__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_symbol__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_array_from__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/array/from */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/array/from.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_array_from__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_array_from__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/slice */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/instance/slice.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_array_is_array__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/array/is-array */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/array/is-array.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_array_is_array__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_array_is_array__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/slicedToArray */ \"./node_modules/@babel/runtime-corejs3/helpers/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/for-each */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/instance/for-each.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/instance/find.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/json/stringify */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/json/stringify.js\");\n/* harmony import */ var _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_11__);\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof _babel_runtime_corejs3_core_js_stable_symbol__WEBPACK_IMPORTED_MODULE_3___default.a === \"undefined\" || _babel_runtime_corejs3_core_js_get_iterator_method__WEBPACK_IMPORTED_MODULE_2___default()(o) == null) { if (_babel_runtime_corejs3_core_js_stable_array_is_array__WEBPACK_IMPORTED_MODULE_6___default()(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = _babel_runtime_corejs3_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_1___default()(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { var _context2; if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_5___default()(_context2 = Object.prototype.toString.call(o)).call(_context2, 8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return _babel_runtime_corejs3_core_js_stable_array_from__WEBPACK_IMPORTED_MODULE_4___default()(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\n\nconst fs = __webpack_require__(/*! fs */ \"fs\");\n\nconst rs = __webpack_require__(/*! path */ \"path\").resolve;\n\nconst _get = __webpack_require__(/*! lodash/get */ \"./node_modules/lodash/get.js\");\n\nconst _isEmpty = __webpack_require__(/*! lodash/isEmpty */ \"./node_modules/lodash/isEmpty.js\");\n\nvar convert = __webpack_require__(/*! xml-js */ \"./node_modules/xml-js/lib/index.js\");\n\nconst xml = fs.readFileSync(rs('src/round-rect.xml')); // const xml = fs.readFileSync(rs('src/presetShapeDefinitions.xml'))\n\nvar options = {\n  ignoreComment: true,\n  // alwaysChildren: true,\n  compact: false,\n  attributesKey: 'attrs',\n  elementsKey: 'children'\n};\nvar result = convert.xml2js(xml, options); // or convert.xml2json(xml, options)\n\nfs.writeFileSync('./result.json', _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_11___default()(result));\nconst shapeDefs = result.children[0].children;\n\nvar _iterator = _createForOfIteratorHelper(shapeDefs),\n    _step;\n\ntry {\n  for (_iterator.s(); !(_step = _iterator.n()).done;) {\n    var _context3;\n\n    let shapeDef = _step.value;\n    let res = `function ${shapeDef.name}(w, h, l, r, t, b,`; // 解析一条\n\n    const _shapeDef$children$re = _babel_runtime_corejs3_core_js_stable_instance_reduce__WEBPACK_IMPORTED_MODULE_0___default()(_context3 = shapeDef.children).call(_context3, (accum, item) => {\n      accum[item.name] = item;\n      return accum;\n    }, {}),\n          avLst = _shapeDef$children$re.avLst,\n          gdLst = _shapeDef$children$re.gdLst,\n          ahLst = _shapeDef$children$re.ahLst,\n          cxnLst = _shapeDef$children$re.cxnLst,\n          rect = _shapeDef$children$re.rect,\n          pathLst = _shapeDef$children$re.pathLst;\n\n    const params = parseAhList(ahLst);\n    res += params;\n    res += ') {\\n';\n    const defaultParams = parseAvList(avLst);\n    res += defaultParams;\n    res += '\\n';\n    const logic = parseGuides(gdLst);\n    res += logic;\n    const svgGen = parsePath(pathLst);\n    res += `\\nreturn \\`${svgGen}\\`\\n`;\n    res += '}';\n    console.log(res);\n  }\n  /**\n   * 返回 参数列表\n   */\n\n} catch (err) {\n  _iterator.e(err);\n} finally {\n  _iterator.f();\n}\n\nfunction parseAhList(ahList) {\n  const res = [];\n\n  var _iterator2 = _createForOfIteratorHelper(ahList.children),\n      _step2;\n\n  try {\n    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n      let ah = _step2.value;\n\n      switch (ah.name) {\n        case 'ahXY':\n          ah.attrs.gdRefX && res.push(ah.attrs.gdRefX);\n          ah.attrs.gdRefY && res.push(ah.attrs.gdRefY);\n          break;\n\n        case 'ahPolar':\n          ah.attrs.gdRefAng && res.push(ah.attrs.gdRefAng);\n          ah.attrs.gdRefR && res.push(ah.attrs.gdRefR);\n          break;\n      }\n    }\n  } catch (err) {\n    _iterator2.e(err);\n  } finally {\n    _iterator2.f();\n  }\n\n  return res.join(',');\n}\n\nfunction parseGuides(gdList) {\n  let gds = _get(gdList, 'children');\n\n  if (_isEmpty(gds)) return '// no guides';\n  let res = `\n    var cos = Math.cos.bind(Math)\n    var sin = Math.sin.bind(Math)\n    var abs = Math.abs.bind(Math)\n    var atan = Math.atan.bind(Math)\n    var atan2 = Math.atan2.bind(Math)\n    var max = Math.max.bind(Math)\n    var min = Math.min.bind(Math)\n    var sqrt = Math.sqrt.bind(Math)\n    var ss = w < h ? w : h\n\n    `;\n\n  const expressions = _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_10___default()(gds).call(gds, gd => {\n    const _gd$attrs = gd.attrs,\n          name = _gd$attrs.name,\n          fmla = _gd$attrs.fmla;\n    let exp = `var ${name} = ${parseFmla(fmla)}`;\n    return exp;\n  });\n\n  return res + expressions.join('\\n');\n}\n\nfunction parsePath(pathList) {\n  var _context;\n\n  const paths = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_9___default()(_context = pathList.children).call(_context, p => p.name === 'path').children;\n\n  if (!paths) return '// no path';\n  let res = \"\";\n\n  _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_8___default()(paths).call(paths, path => {\n    switch (path.name) {\n      case 'moveTo':\n        {\n          const _path$children$0$attr = path.children[0].attrs,\n                x = _path$children$0$attr.x,\n                y = _path$children$0$attr.y;\n          res += `M\\$\\{${x}\\},\\$\\{${y}\\}`;\n          break;\n        }\n\n      case 'lnTo':\n        {\n          const _path$children$0$attr2 = path.children[0].attrs,\n                x = _path$children$0$attr2.x,\n                y = _path$children$0$attr2.y;\n          res += `L\\$\\{${x}\\},\\$\\{${y}\\}`;\n          break;\n        }\n\n      case 'arcTo':\n        {\n          const _path$attrs = path.attrs,\n                wR = _path$attrs.wR,\n                hR = _path$attrs.hR,\n                stAng = _path$attrs.stAng,\n                swAng = _path$attrs.swAng; // TODO 转换\n          // res += `A${},${y},${},${},${},${}`\n\n          break;\n        }\n\n      case 'close':\n        {\n          res += 'Z';\n          break;\n        }\n\n      default:\n        console.log('not supported', path);\n        break;\n    }\n  });\n\n  return res;\n}\n\nfunction parseAvList(avList) {\n  let res = '';\n\n  var _iterator3 = _createForOfIteratorHelper(avList.children),\n      _step3;\n\n  try {\n    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {\n      let defParam = _step3.value;\n      res += `${defParam.attrs.name} = ${defParam.attrs.name} || ${parseFmla(defParam.attrs.fmla)}\\n`;\n    }\n  } catch (err) {\n    _iterator3.e(err);\n  } finally {\n    _iterator3.f();\n  }\n\n  return res;\n} // 解析一条 公式\n\n\nfunction parseFmla(fmlaStr) {\n  const _fmlaStr$split = fmlaStr.split(' '),\n        _fmlaStr$split2 = _babel_runtime_corejs3_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_7___default()(_fmlaStr$split, 4),\n        op = _fmlaStr$split2[0],\n        x = _fmlaStr$split2[1],\n        y = _fmlaStr$split2[2],\n        z = _fmlaStr$split2[3];\n\n  switch (op) {\n    case 'pin':\n      return `${y} < ${x} ? ${x} : (${y} > ${z} ? ${z} : ${y})`;\n\n    case '*/':\n    case '+-':\n      return `${x} ${op[0]} ${y} ${op[1]} ${z}`;\n\n    case '?:':\n      return `${x} > 0 ? ${y} : ${z}`;\n\n    case 'abs':\n      return `abs(${x})`;\n\n    case 'at2':\n      return `atan2(${x}, ${y})`;\n    //TODO 可能有问题\n\n    case 'cat2':\n      return `${x} * (cos(atan(${z} / ${y}))`;\n\n    case 'cos':\n      return `max(${x}, ${y})`;\n\n    case 'cos':\n      return `min(${x}, ${y})`;\n\n    case 'mod':\n      return `sqrt(${x} * ${x} + ${y} * ${y} + ${z} * ${z})`;\n\n    case 'sat2':\n      return `${x} * sin(atan(${z} / ${y}))`;\n\n    case 'sin':\n      return `${x} * sin(${y})`;\n\n    case 'sqrt':\n      return `sqrt(${x})`;\n\n    case 'tan':\n      return `${x} * tan(${y})`;\n\n    case 'val':\n      return x;\n\n    default:\n      console.log('not supported op', op, x, y, z);\n      return '';\n  }\n}\n\nfunction arrailize(obj) {\n  if (obj === undefined || obj === null) return [];\n  if (!_babel_runtime_corejs3_core_js_stable_array_is_array__WEBPACK_IMPORTED_MODULE_6___default()(obj)) return [obj];\n  return obj;\n}\n\n//# sourceURL=webpack://prst-shape-transform/./src/index.js?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack://prst-shape-transform/external_%22fs%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack://prst-shape-transform/external_%22path%22?");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"stream\");\n\n//# sourceURL=webpack://prst-shape-transform/external_%22stream%22?");

/***/ }),

/***/ "string_decoder":
/*!*********************************!*\
  !*** external "string_decoder" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"string_decoder\");\n\n//# sourceURL=webpack://prst-shape-transform/external_%22string_decoder%22?");

/***/ })

/******/ });
});