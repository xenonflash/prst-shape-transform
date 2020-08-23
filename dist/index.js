(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["prst-shape-transform"] = factory();
	else
		root["prst-shape-transform"] = factory();
})(window, function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./tmp/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/stable/object/define-property */ \"./node_modules/core-js-pure/stable/object/define-property.js\");\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/es/object/define-property.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js-pure/es/object/define-property.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es.object.define-property */ \"./node_modules/core-js-pure/modules/es.object.define-property.js\");\n\nvar path = __webpack_require__(/*! ../../internals/path */ \"./node_modules/core-js-pure/internals/path.js\");\n\nvar Object = path.Object;\n\nvar defineProperty = module.exports = function defineProperty(it, key, desc) {\n  return Object.defineProperty(it, key, desc);\n};\n\nif (Object.defineProperty.sham) defineProperty.sham = true;\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/es/object/define-property.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/a-function.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/a-function.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (it) {\n  if (typeof it != 'function') {\n    throw TypeError(String(it) + ' is not a function');\n  }\n\n  return it;\n};\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/internals/a-function.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/an-object.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/an-object.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js-pure/internals/is-object.js\");\n\nmodule.exports = function (it) {\n  if (!isObject(it)) {\n    throw TypeError(String(it) + ' is not an object');\n  }\n\n  return it;\n};\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/internals/an-object.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/classof-raw.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/classof-raw.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var toString = {}.toString;\n\nmodule.exports = function (it) {\n  return toString.call(it).slice(8, -1);\n};\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/internals/classof-raw.js?");

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

/***/ "./node_modules/core-js-pure/internals/global.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js-pure/internals/global.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {\n  return it && it.Math == Math && it;\n}; // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028\n\n\nmodule.exports = // eslint-disable-next-line no-undef\ncheck(typeof globalThis == 'object' && globalThis) || check(typeof window == 'object' && window) || check(typeof self == 'object' && self) || check(typeof global == 'object' && global) || // eslint-disable-next-line no-new-func\nFunction('return this')();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/internals/global.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/has.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js-pure/internals/has.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var hasOwnProperty = {}.hasOwnProperty;\n\nmodule.exports = function (it, key) {\n  return hasOwnProperty.call(it, key);\n};\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/internals/has.js?");

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

/***/ "./node_modules/core-js-pure/internals/is-forced.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/is-forced.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js-pure/internals/fails.js\");\n\nvar replacement = /#|\\.prototype\\./;\n\nvar isForced = function (feature, detection) {\n  var value = data[normalize(feature)];\n  return value == POLYFILL ? true : value == NATIVE ? false : typeof detection == 'function' ? fails(detection) : !!detection;\n};\n\nvar normalize = isForced.normalize = function (string) {\n  return String(string).replace(replacement, '.').toLowerCase();\n};\n\nvar data = isForced.data = {};\nvar NATIVE = isForced.NATIVE = 'N';\nvar POLYFILL = isForced.POLYFILL = 'P';\nmodule.exports = isForced;\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/internals/is-forced.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/is-object.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/is-object.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (it) {\n  return typeof it === 'object' ? it !== null : typeof it === 'function';\n};\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/internals/is-object.js?");

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

/***/ "./node_modules/core-js-pure/internals/object-property-is-enumerable.js":
/*!******************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-property-is-enumerable.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar nativePropertyIsEnumerable = {}.propertyIsEnumerable;\nvar getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor; // Nashorn ~ JDK8 bug\n\nvar NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({\n  1: 2\n}, 1); // `Object.prototype.propertyIsEnumerable` method implementation\n// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable\n\nexports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {\n  var descriptor = getOwnPropertyDescriptor(this, V);\n  return !!descriptor && descriptor.enumerable;\n} : nativePropertyIsEnumerable;\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/internals/object-property-is-enumerable.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/path.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js-pure/internals/path.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {};\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/internals/path.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/require-object-coercible.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/require-object-coercible.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// `RequireObjectCoercible` abstract operation\n// https://tc39.github.io/ecma262/#sec-requireobjectcoercible\nmodule.exports = function (it) {\n  if (it == undefined) throw TypeError(\"Can't call method on \" + it);\n  return it;\n};\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/internals/require-object-coercible.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/to-indexed-object.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/to-indexed-object.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// toObject with fallback for non-array-like ES3 strings\nvar IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ \"./node_modules/core-js-pure/internals/indexed-object.js\");\n\nvar requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"./node_modules/core-js-pure/internals/require-object-coercible.js\");\n\nmodule.exports = function (it) {\n  return IndexedObject(requireObjectCoercible(it));\n};\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/internals/to-indexed-object.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/to-primitive.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/to-primitive.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js-pure/internals/is-object.js\"); // `ToPrimitive` abstract operation\n// https://tc39.github.io/ecma262/#sec-toprimitive\n// instead of the ES6 spec version, we didn't implement @@toPrimitive case\n// and the second argument - flag - preferred type is a string\n\n\nmodule.exports = function (input, PREFERRED_STRING) {\n  if (!isObject(input)) return input;\n  var fn, val;\n  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;\n  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;\n  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;\n  throw TypeError(\"Can't convert object to primitive value\");\n};\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/internals/to-primitive.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.object.define-property.js":
/*!************************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.object.define-property.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js-pure/internals/export.js\");\n\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js-pure/internals/descriptors.js\");\n\nvar objectDefinePropertyModile = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js-pure/internals/object-define-property.js\"); // `Object.defineProperty` method\n// https://tc39.github.io/ecma262/#sec-object.defineproperty\n\n\n$({\n  target: 'Object',\n  stat: true,\n  forced: !DESCRIPTORS,\n  sham: !DESCRIPTORS\n}, {\n  defineProperty: objectDefinePropertyModile.f\n});\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/modules/es.object.define-property.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/stable/object/define-property.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js-pure/stable/object/define-property.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parent = __webpack_require__(/*! ../../es/object/define-property */ \"./node_modules/core-js-pure/es/object/define-property.js\");\n\nmodule.exports = parent;\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/core-js-pure/stable/object/define-property.js?");

/***/ }),

/***/ "./node_modules/transformation-matrix/src/applyToPoint.js":
/*!****************************************************************!*\
  !*** ./node_modules/transformation-matrix/src/applyToPoint.js ***!
  \****************************************************************/
/*! exports provided: applyToPoint, applyToPoints */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"applyToPoint\", function() { return applyToPoint; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"applyToPoints\", function() { return applyToPoints; });\n/**\n * Calculate a point transformed with an affine matrix\n * @param matrix {Matrix} Affine Matrix\n * @param  point {Point} Point\n * @returns {Point} Point\n */\nfunction applyToPoint(matrix, point) {\n  return Array.isArray(point) ? [matrix.a * point[0] + matrix.c * point[1] + matrix.e, matrix.b * point[0] + matrix.d * point[1] + matrix.f] : {\n    x: matrix.a * point.x + matrix.c * point.y + matrix.e,\n    y: matrix.b * point.x + matrix.d * point.y + matrix.f\n  };\n}\n/**\n * Calculate an array of points transformed with an affine matrix\n * @param matrix {Matrix} Affine Matrix\n * @param points {Point[]} Array of point\n * @returns {Point[]} Array of point\n */\n\nfunction applyToPoints(matrix, points) {\n  return points.map(point => applyToPoint(matrix, point));\n}\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/transformation-matrix/src/applyToPoint.js?");

/***/ }),

/***/ "./node_modules/transformation-matrix/src/fromDefinition.js":
/*!******************************************************************!*\
  !*** ./node_modules/transformation-matrix/src/fromDefinition.js ***!
  \******************************************************************/
/*! exports provided: fromDefinition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fromDefinition\", function() { return fromDefinition; });\n/* harmony import */ var _fromObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fromObject */ \"./node_modules/transformation-matrix/src/fromObject.js\");\n/* harmony import */ var _translate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./translate */ \"./node_modules/transformation-matrix/src/translate.js\");\n/* harmony import */ var _scale__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scale */ \"./node_modules/transformation-matrix/src/scale.js\");\n/* harmony import */ var _rotate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rotate */ \"./node_modules/transformation-matrix/src/rotate.js\");\n/* harmony import */ var _skew__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./skew */ \"./node_modules/transformation-matrix/src/skew.js\");\n/* harmony import */ var _shear__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shear */ \"./node_modules/transformation-matrix/src/shear.js\");\n\n\n\n\n\n\n/**\n * Converts array of matrix descriptor to array of matrix\n * @param definitionOrArrayOfDefinition {Object[]} Array of object describing the matrix\n * @returns {Matrix[]} Array of matrix\n *\n * @example\n * > fromDefinition([\n *  { type: 'matrix', a:1, b:2, c:3, d:4, e:5, f:6 },\n *  { type: 'translate', tx: 10, ty: 20 },\n *  { type: 'scale', sx: 2, sy: 4 },\n *  { type: 'rotate', angle: 90, cx: 50, cy: 25 },\n *  { type: 'skewX', angle: 45 },\n *  { type: 'skewY',  angle: 45 },\n *  { type: 'shear', shx: 10, shy: 20}\n * ])\n *\n * [\n *  { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 },\n *  { a: 1, c: 0, e: 10, b: 0, d: 1, f: 20 },\n *  { a: 2, c: 0, e: 0, b: 0, d: 4, f: 0 },\n *  { a: 6.123, c: -1, e: 0, b: 1, d: 6.123, f: 0 },\n *  { a: 1, c: 0.99.., e: 0, b: 0, d: 1, f: 0 },\n *  { a: 1, c: 0, e: 0, b: 0.99, d: 1, f: 0 },\n *  { a: 1, c: 10, e: 0, b: 20, d: 1, f: 0 }\n * ]\n **/\n\nfunction fromDefinition(definitionOrArrayOfDefinition) {\n  return Array.isArray(definitionOrArrayOfDefinition) ? definitionOrArrayOfDefinition.map(mapper) : mapper(definitionOrArrayOfDefinition);\n\n  function mapper(descriptor) {\n    switch (descriptor.type) {\n      case 'matrix':\n        if ('a' in descriptor && 'b' in descriptor && 'c' in descriptor && 'd' in descriptor && 'e' in descriptor && 'f' in descriptor) {\n          return Object(_fromObject__WEBPACK_IMPORTED_MODULE_0__[\"fromObject\"])(descriptor);\n        } else {\n          throw new Error('MISSING_MANDATORY_PARAM');\n        }\n\n      case 'translate':\n        if (!('tx' in descriptor)) throw new Error('MISSING_MANDATORY_PARAM');\n        if ('ty' in descriptor) return Object(_translate__WEBPACK_IMPORTED_MODULE_1__[\"translate\"])(descriptor.tx, descriptor.ty);\n        return Object(_translate__WEBPACK_IMPORTED_MODULE_1__[\"translate\"])(descriptor.tx);\n\n      case 'scale':\n        if (!('sx' in descriptor)) throw new Error('MISSING_MANDATORY_PARAM');\n        if ('sy' in descriptor) return Object(_scale__WEBPACK_IMPORTED_MODULE_2__[\"scale\"])(descriptor.sx, descriptor.sy);\n        return Object(_scale__WEBPACK_IMPORTED_MODULE_2__[\"scale\"])(descriptor.sx);\n\n      case 'rotate':\n        if (!('angle' in descriptor)) throw new Error('MISSING_MANDATORY_PARAM');\n\n        if ('cx' in descriptor && 'cy' in descriptor) {\n          return Object(_rotate__WEBPACK_IMPORTED_MODULE_3__[\"rotateDEG\"])(descriptor.angle, descriptor.cx, descriptor.cy);\n        }\n\n        return Object(_rotate__WEBPACK_IMPORTED_MODULE_3__[\"rotateDEG\"])(descriptor.angle);\n\n      case 'skewX':\n        if (!('angle' in descriptor)) throw new Error('MISSING_MANDATORY_PARAM');\n        return Object(_skew__WEBPACK_IMPORTED_MODULE_4__[\"skewDEG\"])(descriptor.angle, 0);\n\n      case 'skewY':\n        if (!('angle' in descriptor)) throw new Error('MISSING_MANDATORY_PARAM');\n        return Object(_skew__WEBPACK_IMPORTED_MODULE_4__[\"skewDEG\"])(0, descriptor.angle);\n\n      case 'shear':\n        if (!('shx' in descriptor && 'shy' in descriptor)) throw new Error('MISSING_MANDATORY_PARAM');\n        return Object(_shear__WEBPACK_IMPORTED_MODULE_5__[\"shear\"])(descriptor.shx, descriptor.shy);\n\n      default:\n        throw new Error('UNSUPPORTED_DESCRIPTOR');\n    }\n  }\n}\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/transformation-matrix/src/fromDefinition.js?");

/***/ }),

/***/ "./node_modules/transformation-matrix/src/fromObject.js":
/*!**************************************************************!*\
  !*** ./node_modules/transformation-matrix/src/fromObject.js ***!
  \**************************************************************/
/*! exports provided: fromObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fromObject\", function() { return fromObject; });\n/**\n * Extract an affine matrix from an object that contains a,b,c,d,e,f keys\n * Any value could be a float or a string that contains a float\n * @param object {Object} Object that contains a,b,c,d,e,f keys\n * @return {Matrix} Affine Matrix\n */\nfunction fromObject(object) {\n  return {\n    a: parseFloat(object.a),\n    b: parseFloat(object.b),\n    c: parseFloat(object.c),\n    d: parseFloat(object.d),\n    e: parseFloat(object.e),\n    f: parseFloat(object.f)\n  };\n}\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/transformation-matrix/src/fromObject.js?");

/***/ }),

/***/ "./node_modules/transformation-matrix/src/fromString.js":
/*!**************************************************************!*\
  !*** ./node_modules/transformation-matrix/src/fromString.js ***!
  \**************************************************************/
/*! exports provided: fromString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fromString\", function() { return fromString; });\n/**\n * @ignore\n * @type {RegExp}\n */\nconst matrixRegex = /^matrix\\(\\s*([0-9_+-.e]+)\\s*,\\s*([0-9_+-.e]+)\\s*,\\s*([0-9_+-.e]+)\\s*,\\s*([0-9_+-.e]+)\\s*,\\s*([0-9_+-.e]+)\\s*,\\s*([0-9_+-.e]+)\\s*\\)$/i;\n/**\n * Parse a string formatted as matrix(a,b,c,d,e,f)\n * @param string {string} String with an affine matrix\n * @returns {Matrix} Affine Matrix\n *\n * @example\n * > fromString('matrix(1,2,3,4,5,6)')\n * {a: 1, b: 2, c: 3, d: 4, c: 5, e: 6}\n */\n\nfunction fromString(string) {\n  const parsed = string.match(matrixRegex);\n  if (parsed === null || parsed.length < 7) throw new Error(`'${string}' is not a matrix`);\n  return {\n    a: parseFloat(parsed[1]),\n    b: parseFloat(parsed[2]),\n    c: parseFloat(parsed[3]),\n    d: parseFloat(parsed[4]),\n    e: parseFloat(parsed[5]),\n    f: parseFloat(parsed[6])\n  };\n}\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/transformation-matrix/src/fromString.js?");

/***/ }),

/***/ "./node_modules/transformation-matrix/src/fromTransformAttribute.autogenerated.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/transformation-matrix/src/fromTransformAttribute.autogenerated.js ***!
  \****************************************************************************************/
/*! exports provided: SyntaxError, parse, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SyntaxError\", function() { return peg$SyntaxError; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parse\", function() { return peg$parse; });\n// Generated by PEG.js v0.11.0-master.30f3260, https://pegjs.org/\nfunction peg$subclass(child, parent) {\n  function C() {\n    this.constructor = child;\n  }\n\n  C.prototype = parent.prototype;\n  child.prototype = new C();\n}\n\nfunction peg$SyntaxError(message, expected, found, location) {\n  this.message = message;\n  this.expected = expected;\n  this.found = found;\n  this.location = location;\n  this.name = \"SyntaxError\"; // istanbul ignore next\n\n  if (typeof Error.captureStackTrace === \"function\") {\n    Error.captureStackTrace(this, peg$SyntaxError);\n  }\n}\n\npeg$subclass(peg$SyntaxError, Error);\n\npeg$SyntaxError.buildMessage = function (expected, found) {\n  var DESCRIBE_EXPECTATION_FNS = {\n    literal: function (expectation) {\n      return \"\\\"\" + literalEscape(expectation.text) + \"\\\"\";\n    },\n    class: function (expectation) {\n      var escapedParts = expectation.parts.map(function (part) {\n        return Array.isArray(part) ? classEscape(part[0]) + \"-\" + classEscape(part[1]) : classEscape(part);\n      });\n      return \"[\" + (expectation.inverted ? \"^\" : \"\") + escapedParts + \"]\";\n    },\n    any: function () {\n      return \"any character\";\n    },\n    end: function () {\n      return \"end of input\";\n    },\n    other: function (expectation) {\n      return expectation.description;\n    },\n    not: function (expectation) {\n      return \"not \" + describeExpectation(expectation.expected);\n    }\n  };\n\n  function hex(ch) {\n    return ch.charCodeAt(0).toString(16).toUpperCase();\n  }\n\n  function literalEscape(s) {\n    return s.replace(/\\\\/g, \"\\\\\\\\\").replace(/\"/g, \"\\\\\\\"\").replace(/\\0/g, \"\\\\0\").replace(/\\t/g, \"\\\\t\").replace(/\\n/g, \"\\\\n\").replace(/\\r/g, \"\\\\r\").replace(/[\\x00-\\x0F]/g, function (ch) {\n      return \"\\\\x0\" + hex(ch);\n    }).replace(/[\\x10-\\x1F\\x7F-\\x9F]/g, function (ch) {\n      return \"\\\\x\" + hex(ch);\n    });\n  }\n\n  function classEscape(s) {\n    return s.replace(/\\\\/g, \"\\\\\\\\\").replace(/\\]/g, \"\\\\]\").replace(/\\^/g, \"\\\\^\").replace(/-/g, \"\\\\-\").replace(/\\0/g, \"\\\\0\").replace(/\\t/g, \"\\\\t\").replace(/\\n/g, \"\\\\n\").replace(/\\r/g, \"\\\\r\").replace(/[\\x00-\\x0F]/g, function (ch) {\n      return \"\\\\x0\" + hex(ch);\n    }).replace(/[\\x10-\\x1F\\x7F-\\x9F]/g, function (ch) {\n      return \"\\\\x\" + hex(ch);\n    });\n  }\n\n  function describeExpectation(expectation) {\n    return DESCRIBE_EXPECTATION_FNS[expectation.type](expectation);\n  }\n\n  function describeExpected(expected) {\n    var descriptions = expected.map(describeExpectation);\n    var i, j;\n    descriptions.sort();\n\n    if (descriptions.length > 0) {\n      for (i = 1, j = 1; i < descriptions.length; i++) {\n        if (descriptions[i - 1] !== descriptions[i]) {\n          descriptions[j] = descriptions[i];\n          j++;\n        }\n      }\n\n      descriptions.length = j;\n    }\n\n    switch (descriptions.length) {\n      case 1:\n        return descriptions[0];\n\n      case 2:\n        return descriptions[0] + \" or \" + descriptions[1];\n\n      default:\n        return descriptions.slice(0, -1).join(\", \") + \", or \" + descriptions[descriptions.length - 1];\n    }\n  }\n\n  function describeFound(found) {\n    return found ? \"\\\"\" + literalEscape(found) + \"\\\"\" : \"end of input\";\n  }\n\n  return \"Expected \" + describeExpected(expected) + \" but \" + describeFound(found) + \" found.\";\n};\n\nfunction peg$parse(input, options) {\n  options = options !== undefined ? options : {};\n  var peg$FAILED = {};\n  var peg$startRuleFunctions = {\n    transformList: peg$parsetransformList\n  };\n  var peg$startRuleFunction = peg$parsetransformList;\n  var peg$c0 = \"matrix\";\n  var peg$c1 = \"(\";\n  var peg$c2 = \")\";\n  var peg$c3 = \"translate\";\n  var peg$c4 = \"scale\";\n  var peg$c5 = \"rotate\";\n  var peg$c6 = \"skewX\";\n  var peg$c7 = \"skewY\";\n  var peg$c8 = \",\";\n  var peg$c9 = \".\";\n  var peg$r0 = /^[eE]/;\n  var peg$r1 = /^[+\\-]/;\n  var peg$r2 = /^[0-9]/;\n  var peg$r3 = /^[ \\t\\r\\n]/;\n  var peg$e0 = peg$literalExpectation(\"matrix\", false);\n  var peg$e1 = peg$literalExpectation(\"(\", false);\n  var peg$e2 = peg$literalExpectation(\")\", false);\n  var peg$e3 = peg$literalExpectation(\"translate\", false);\n  var peg$e4 = peg$literalExpectation(\"scale\", false);\n  var peg$e5 = peg$literalExpectation(\"rotate\", false);\n  var peg$e6 = peg$literalExpectation(\"skewX\", false);\n  var peg$e7 = peg$literalExpectation(\"skewY\", false);\n  var peg$e8 = peg$literalExpectation(\",\", false);\n  var peg$e9 = peg$otherExpectation(\"fractionalConstant\");\n  var peg$e10 = peg$classExpectation([\"e\", \"E\"], false, false);\n  var peg$e11 = peg$classExpectation([\"+\", \"-\"], false, false);\n  var peg$e12 = peg$classExpectation([[\"0\", \"9\"]], false, false);\n  var peg$e13 = peg$classExpectation([\" \", \"\\t\", \"\\r\", \"\\n\"], false, false);\n\n  var peg$f0 = function (ts) {\n    return ts;\n  };\n\n  var peg$f1 = function (t, ts) {\n    return t.concat(ts);\n  };\n\n  var peg$f2 = function (a, b, c, d, e, f) {\n    return [{\n      type: 'matrix',\n      a: a,\n      b: b,\n      c: c,\n      d: d,\n      e: e,\n      f: f\n    }];\n  };\n\n  var peg$f3 = function (tx, ty) {\n    var t = {\n      type: 'translate',\n      tx: tx\n    };\n    if (ty) t.ty = ty;\n    return [t];\n  };\n\n  var peg$f4 = function (sx, sy) {\n    var s = {\n      type: 'scale',\n      sx: sx\n    };\n    if (sy) s.sy = sy;\n    return [s];\n  };\n\n  var peg$f5 = function (angle, c) {\n    var r = {\n      type: 'rotate',\n      angle: angle\n    };\n\n    if (c) {\n      r.cx = c[0];\n      r.cy = c[1];\n    }\n\n    return [r];\n  };\n\n  var peg$f6 = function (angle) {\n    return [{\n      type: 'skewX',\n      angle: angle\n    }];\n  };\n\n  var peg$f7 = function (angle) {\n    return [{\n      type: 'skewY',\n      angle: angle\n    }];\n  };\n\n  var peg$f8 = function (f) {\n    return parseFloat(f.join(\"\"));\n  };\n\n  var peg$f9 = function (i) {\n    return parseInt(i.join(\"\"));\n  };\n\n  var peg$f10 = function (n) {\n    return n;\n  };\n\n  var peg$f11 = function (n1, n2) {\n    return [n1, n2];\n  };\n\n  var peg$f12 = function (ds) {\n    return ds.join(\"\");\n  };\n\n  var peg$f13 = function (d1, d2) {\n    return [d1 ? d1.join(\"\") : null, \".\", d2.join(\"\")].join(\"\");\n  };\n\n  var peg$f14 = function (d) {\n    return d.join(\"\");\n  };\n\n  var peg$currPos = 0;\n  var peg$savedPos = 0;\n  var peg$posDetailsCache = [{\n    line: 1,\n    column: 1\n  }];\n  var peg$expected = [];\n  var peg$silentFails = 0;\n  var peg$result;\n\n  if (\"startRule\" in options) {\n    if (!(options.startRule in peg$startRuleFunctions)) {\n      throw new Error(\"Can't start parsing from rule \\\"\" + options.startRule + \"\\\".\");\n    }\n\n    peg$startRuleFunction = peg$startRuleFunctions[options.startRule];\n  }\n\n  function text() {\n    return input.substring(peg$savedPos, peg$currPos);\n  }\n\n  function offset() {\n    return peg$savedPos;\n  }\n\n  function range() {\n    return [peg$savedPos, peg$currPos];\n  }\n\n  function location() {\n    return peg$computeLocation(peg$savedPos, peg$currPos);\n  }\n\n  function expected(description, location) {\n    location = location !== undefined ? location : peg$computeLocation(peg$savedPos, peg$currPos);\n    throw peg$buildStructuredError([peg$otherExpectation(description)], input.substring(peg$savedPos, peg$currPos), location);\n  }\n\n  function error(message, location) {\n    location = location !== undefined ? location : peg$computeLocation(peg$savedPos, peg$currPos);\n    throw peg$buildSimpleError(message, location);\n  }\n\n  function peg$literalExpectation(text, ignoreCase) {\n    return {\n      type: \"literal\",\n      text: text,\n      ignoreCase: ignoreCase\n    };\n  }\n\n  function peg$classExpectation(parts, inverted, ignoreCase) {\n    return {\n      type: \"class\",\n      parts: parts,\n      inverted: inverted,\n      ignoreCase: ignoreCase\n    };\n  }\n\n  function peg$anyExpectation() {\n    return {\n      type: \"any\"\n    };\n  }\n\n  function peg$endExpectation() {\n    return {\n      type: \"end\"\n    };\n  }\n\n  function peg$otherExpectation(description) {\n    return {\n      type: \"other\",\n      description: description\n    };\n  }\n\n  function peg$computePosDetails(pos) {\n    var details = peg$posDetailsCache[pos];\n    var p;\n\n    if (details) {\n      return details;\n    } else {\n      p = pos - 1;\n\n      while (!peg$posDetailsCache[p]) {\n        p--;\n      }\n\n      details = peg$posDetailsCache[p];\n      details = {\n        line: details.line,\n        column: details.column\n      };\n\n      while (p < pos) {\n        if (input.charCodeAt(p) === 10) {\n          details.line++;\n          details.column = 1;\n        } else {\n          details.column++;\n        }\n\n        p++;\n      }\n\n      peg$posDetailsCache[pos] = details;\n      return details;\n    }\n  }\n\n  var peg$VALIDFILENAME = typeof options.filename === \"string\" && options.filename.length > 0;\n\n  function peg$computeLocation(startPos, endPos) {\n    var loc = {};\n    if (peg$VALIDFILENAME) loc.filename = options.filename;\n    var startPosDetails = peg$computePosDetails(startPos);\n    loc.start = {\n      offset: startPos,\n      line: startPosDetails.line,\n      column: startPosDetails.column\n    };\n    var endPosDetails = peg$computePosDetails(endPos);\n    loc.end = {\n      offset: endPos,\n      line: endPosDetails.line,\n      column: endPosDetails.column\n    };\n    return loc;\n  }\n\n  function peg$begin() {\n    peg$expected.push({\n      pos: peg$currPos,\n      variants: []\n    });\n  }\n\n  function peg$expect(expected) {\n    var top = peg$expected[peg$expected.length - 1];\n\n    if (peg$currPos < top.pos) {\n      return;\n    }\n\n    if (peg$currPos > top.pos) {\n      top.pos = peg$currPos;\n      top.variants = [];\n    }\n\n    top.variants.push(expected);\n  }\n\n  function peg$end(invert) {\n    var expected = peg$expected.pop();\n    var top = peg$expected[peg$expected.length - 1];\n    var variants = expected.variants;\n\n    if (top.pos !== expected.pos) {\n      return;\n    }\n\n    if (invert) {\n      variants = variants.map(function (e) {\n        return e.type === \"not\" ? e.expected : {\n          type: \"not\",\n          expected: e\n        };\n      });\n    }\n\n    Array.prototype.push.apply(top.variants, variants);\n  }\n\n  function peg$buildSimpleError(message, location) {\n    return new peg$SyntaxError(message, null, null, location);\n  }\n\n  function peg$buildStructuredError(expected, found, location) {\n    return new peg$SyntaxError(peg$SyntaxError.buildMessage(expected, found), expected, found, location);\n  }\n\n  function peg$buildError() {\n    var expected = peg$expected[0];\n    var failPos = expected.pos;\n    return peg$buildStructuredError(expected.variants, failPos < input.length ? input.charAt(failPos) : null, failPos < input.length ? peg$computeLocation(failPos, failPos + 1) : peg$computeLocation(failPos, failPos));\n  }\n\n  function peg$parsetransformList() {\n    var s0, s1, s2, s3, s4;\n\n    var rule$expects = function (expected) {\n      if (peg$silentFails === 0) peg$expect(expected);\n    };\n\n    s0 = peg$currPos;\n    s1 = [];\n    s2 = peg$parsewsp();\n\n    while (s2 !== peg$FAILED) {\n      s1.push(s2);\n      s2 = peg$parsewsp();\n    }\n\n    s2 = peg$parsetransforms();\n\n    if (s2 === peg$FAILED) {\n      s2 = null;\n    }\n\n    s3 = [];\n    s4 = peg$parsewsp();\n\n    while (s4 !== peg$FAILED) {\n      s3.push(s4);\n      s4 = peg$parsewsp();\n    }\n\n    peg$savedPos = s0;\n    s0 = peg$f0(s2);\n    return s0;\n  }\n\n  function peg$parsetransforms() {\n    var s0, s1, s2, s3;\n\n    var rule$expects = function (expected) {\n      if (peg$silentFails === 0) peg$expect(expected);\n    };\n\n    s0 = peg$currPos;\n    s1 = peg$parsetransform();\n\n    if (s1 !== peg$FAILED) {\n      s2 = [];\n      s3 = peg$parsecommaWsp();\n\n      if (s3 !== peg$FAILED) {\n        while (s3 !== peg$FAILED) {\n          s2.push(s3);\n          s3 = peg$parsecommaWsp();\n        }\n      } else {\n        s2 = peg$FAILED;\n      }\n\n      if (s2 !== peg$FAILED) {\n        s3 = peg$parsetransforms();\n\n        if (s3 !== peg$FAILED) {\n          peg$savedPos = s0;\n          s0 = peg$f1(s1, s3);\n        } else {\n          peg$currPos = s0;\n          s0 = peg$FAILED;\n        }\n      } else {\n        peg$currPos = s0;\n        s0 = peg$FAILED;\n      }\n    } else {\n      peg$currPos = s0;\n      s0 = peg$FAILED;\n    }\n\n    if (s0 === peg$FAILED) {\n      s0 = peg$parsetransform();\n    }\n\n    return s0;\n  }\n\n  function peg$parsetransform() {\n    var s0;\n\n    var rule$expects = function (expected) {\n      if (peg$silentFails === 0) peg$expect(expected);\n    };\n\n    s0 = peg$parsematrix();\n\n    if (s0 === peg$FAILED) {\n      s0 = peg$parsetranslate();\n\n      if (s0 === peg$FAILED) {\n        s0 = peg$parsescale();\n\n        if (s0 === peg$FAILED) {\n          s0 = peg$parserotate();\n\n          if (s0 === peg$FAILED) {\n            s0 = peg$parseskewX();\n\n            if (s0 === peg$FAILED) {\n              s0 = peg$parseskewY();\n            }\n          }\n        }\n      }\n    }\n\n    return s0;\n  }\n\n  function peg$parsematrix() {\n    var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13, s14, s15, s16, s17;\n\n    var rule$expects = function (expected) {\n      if (peg$silentFails === 0) peg$expect(expected);\n    };\n\n    s0 = peg$currPos;\n    rule$expects(peg$e0);\n\n    if (input.substr(peg$currPos, 6) === peg$c0) {\n      s1 = peg$c0;\n      peg$currPos += 6;\n    } else {\n      s1 = peg$FAILED;\n    }\n\n    if (s1 !== peg$FAILED) {\n      s2 = [];\n      s3 = peg$parsewsp();\n\n      while (s3 !== peg$FAILED) {\n        s2.push(s3);\n        s3 = peg$parsewsp();\n      }\n\n      rule$expects(peg$e1);\n\n      if (input.charCodeAt(peg$currPos) === 40) {\n        s3 = peg$c1;\n        peg$currPos++;\n      } else {\n        s3 = peg$FAILED;\n      }\n\n      if (s3 !== peg$FAILED) {\n        s4 = [];\n        s5 = peg$parsewsp();\n\n        while (s5 !== peg$FAILED) {\n          s4.push(s5);\n          s5 = peg$parsewsp();\n        }\n\n        s5 = peg$parsenumber();\n\n        if (s5 !== peg$FAILED) {\n          s6 = peg$parsecommaWsp();\n\n          if (s6 !== peg$FAILED) {\n            s7 = peg$parsenumber();\n\n            if (s7 !== peg$FAILED) {\n              s8 = peg$parsecommaWsp();\n\n              if (s8 !== peg$FAILED) {\n                s9 = peg$parsenumber();\n\n                if (s9 !== peg$FAILED) {\n                  s10 = peg$parsecommaWsp();\n\n                  if (s10 !== peg$FAILED) {\n                    s11 = peg$parsenumber();\n\n                    if (s11 !== peg$FAILED) {\n                      s12 = peg$parsecommaWsp();\n\n                      if (s12 !== peg$FAILED) {\n                        s13 = peg$parsenumber();\n\n                        if (s13 !== peg$FAILED) {\n                          s14 = peg$parsecommaWsp();\n\n                          if (s14 !== peg$FAILED) {\n                            s15 = peg$parsenumber();\n\n                            if (s15 !== peg$FAILED) {\n                              s16 = [];\n                              s17 = peg$parsewsp();\n\n                              while (s17 !== peg$FAILED) {\n                                s16.push(s17);\n                                s17 = peg$parsewsp();\n                              }\n\n                              rule$expects(peg$e2);\n\n                              if (input.charCodeAt(peg$currPos) === 41) {\n                                s17 = peg$c2;\n                                peg$currPos++;\n                              } else {\n                                s17 = peg$FAILED;\n                              }\n\n                              if (s17 !== peg$FAILED) {\n                                peg$savedPos = s0;\n                                s0 = peg$f2(s5, s7, s9, s11, s13, s15);\n                              } else {\n                                peg$currPos = s0;\n                                s0 = peg$FAILED;\n                              }\n                            } else {\n                              peg$currPos = s0;\n                              s0 = peg$FAILED;\n                            }\n                          } else {\n                            peg$currPos = s0;\n                            s0 = peg$FAILED;\n                          }\n                        } else {\n                          peg$currPos = s0;\n                          s0 = peg$FAILED;\n                        }\n                      } else {\n                        peg$currPos = s0;\n                        s0 = peg$FAILED;\n                      }\n                    } else {\n                      peg$currPos = s0;\n                      s0 = peg$FAILED;\n                    }\n                  } else {\n                    peg$currPos = s0;\n                    s0 = peg$FAILED;\n                  }\n                } else {\n                  peg$currPos = s0;\n                  s0 = peg$FAILED;\n                }\n              } else {\n                peg$currPos = s0;\n                s0 = peg$FAILED;\n              }\n            } else {\n              peg$currPos = s0;\n              s0 = peg$FAILED;\n            }\n          } else {\n            peg$currPos = s0;\n            s0 = peg$FAILED;\n          }\n        } else {\n          peg$currPos = s0;\n          s0 = peg$FAILED;\n        }\n      } else {\n        peg$currPos = s0;\n        s0 = peg$FAILED;\n      }\n    } else {\n      peg$currPos = s0;\n      s0 = peg$FAILED;\n    }\n\n    return s0;\n  }\n\n  function peg$parsetranslate() {\n    var s0, s1, s2, s3, s4, s5, s6, s7, s8;\n\n    var rule$expects = function (expected) {\n      if (peg$silentFails === 0) peg$expect(expected);\n    };\n\n    s0 = peg$currPos;\n    rule$expects(peg$e3);\n\n    if (input.substr(peg$currPos, 9) === peg$c3) {\n      s1 = peg$c3;\n      peg$currPos += 9;\n    } else {\n      s1 = peg$FAILED;\n    }\n\n    if (s1 !== peg$FAILED) {\n      s2 = [];\n      s3 = peg$parsewsp();\n\n      while (s3 !== peg$FAILED) {\n        s2.push(s3);\n        s3 = peg$parsewsp();\n      }\n\n      rule$expects(peg$e1);\n\n      if (input.charCodeAt(peg$currPos) === 40) {\n        s3 = peg$c1;\n        peg$currPos++;\n      } else {\n        s3 = peg$FAILED;\n      }\n\n      if (s3 !== peg$FAILED) {\n        s4 = [];\n        s5 = peg$parsewsp();\n\n        while (s5 !== peg$FAILED) {\n          s4.push(s5);\n          s5 = peg$parsewsp();\n        }\n\n        s5 = peg$parsenumber();\n\n        if (s5 !== peg$FAILED) {\n          s6 = peg$parsecommaWspNumber();\n\n          if (s6 === peg$FAILED) {\n            s6 = null;\n          }\n\n          s7 = [];\n          s8 = peg$parsewsp();\n\n          while (s8 !== peg$FAILED) {\n            s7.push(s8);\n            s8 = peg$parsewsp();\n          }\n\n          rule$expects(peg$e2);\n\n          if (input.charCodeAt(peg$currPos) === 41) {\n            s8 = peg$c2;\n            peg$currPos++;\n          } else {\n            s8 = peg$FAILED;\n          }\n\n          if (s8 !== peg$FAILED) {\n            peg$savedPos = s0;\n            s0 = peg$f3(s5, s6);\n          } else {\n            peg$currPos = s0;\n            s0 = peg$FAILED;\n          }\n        } else {\n          peg$currPos = s0;\n          s0 = peg$FAILED;\n        }\n      } else {\n        peg$currPos = s0;\n        s0 = peg$FAILED;\n      }\n    } else {\n      peg$currPos = s0;\n      s0 = peg$FAILED;\n    }\n\n    return s0;\n  }\n\n  function peg$parsescale() {\n    var s0, s1, s2, s3, s4, s5, s6, s7, s8;\n\n    var rule$expects = function (expected) {\n      if (peg$silentFails === 0) peg$expect(expected);\n    };\n\n    s0 = peg$currPos;\n    rule$expects(peg$e4);\n\n    if (input.substr(peg$currPos, 5) === peg$c4) {\n      s1 = peg$c4;\n      peg$currPos += 5;\n    } else {\n      s1 = peg$FAILED;\n    }\n\n    if (s1 !== peg$FAILED) {\n      s2 = [];\n      s3 = peg$parsewsp();\n\n      while (s3 !== peg$FAILED) {\n        s2.push(s3);\n        s3 = peg$parsewsp();\n      }\n\n      rule$expects(peg$e1);\n\n      if (input.charCodeAt(peg$currPos) === 40) {\n        s3 = peg$c1;\n        peg$currPos++;\n      } else {\n        s3 = peg$FAILED;\n      }\n\n      if (s3 !== peg$FAILED) {\n        s4 = [];\n        s5 = peg$parsewsp();\n\n        while (s5 !== peg$FAILED) {\n          s4.push(s5);\n          s5 = peg$parsewsp();\n        }\n\n        s5 = peg$parsenumber();\n\n        if (s5 !== peg$FAILED) {\n          s6 = peg$parsecommaWspNumber();\n\n          if (s6 === peg$FAILED) {\n            s6 = null;\n          }\n\n          s7 = [];\n          s8 = peg$parsewsp();\n\n          while (s8 !== peg$FAILED) {\n            s7.push(s8);\n            s8 = peg$parsewsp();\n          }\n\n          rule$expects(peg$e2);\n\n          if (input.charCodeAt(peg$currPos) === 41) {\n            s8 = peg$c2;\n            peg$currPos++;\n          } else {\n            s8 = peg$FAILED;\n          }\n\n          if (s8 !== peg$FAILED) {\n            peg$savedPos = s0;\n            s0 = peg$f4(s5, s6);\n          } else {\n            peg$currPos = s0;\n            s0 = peg$FAILED;\n          }\n        } else {\n          peg$currPos = s0;\n          s0 = peg$FAILED;\n        }\n      } else {\n        peg$currPos = s0;\n        s0 = peg$FAILED;\n      }\n    } else {\n      peg$currPos = s0;\n      s0 = peg$FAILED;\n    }\n\n    return s0;\n  }\n\n  function peg$parserotate() {\n    var s0, s1, s2, s3, s4, s5, s6, s7, s8;\n\n    var rule$expects = function (expected) {\n      if (peg$silentFails === 0) peg$expect(expected);\n    };\n\n    s0 = peg$currPos;\n    rule$expects(peg$e5);\n\n    if (input.substr(peg$currPos, 6) === peg$c5) {\n      s1 = peg$c5;\n      peg$currPos += 6;\n    } else {\n      s1 = peg$FAILED;\n    }\n\n    if (s1 !== peg$FAILED) {\n      s2 = [];\n      s3 = peg$parsewsp();\n\n      while (s3 !== peg$FAILED) {\n        s2.push(s3);\n        s3 = peg$parsewsp();\n      }\n\n      rule$expects(peg$e1);\n\n      if (input.charCodeAt(peg$currPos) === 40) {\n        s3 = peg$c1;\n        peg$currPos++;\n      } else {\n        s3 = peg$FAILED;\n      }\n\n      if (s3 !== peg$FAILED) {\n        s4 = [];\n        s5 = peg$parsewsp();\n\n        while (s5 !== peg$FAILED) {\n          s4.push(s5);\n          s5 = peg$parsewsp();\n        }\n\n        s5 = peg$parsenumber();\n\n        if (s5 !== peg$FAILED) {\n          s6 = peg$parsecommaWspTwoNumbers();\n\n          if (s6 === peg$FAILED) {\n            s6 = null;\n          }\n\n          s7 = [];\n          s8 = peg$parsewsp();\n\n          while (s8 !== peg$FAILED) {\n            s7.push(s8);\n            s8 = peg$parsewsp();\n          }\n\n          rule$expects(peg$e2);\n\n          if (input.charCodeAt(peg$currPos) === 41) {\n            s8 = peg$c2;\n            peg$currPos++;\n          } else {\n            s8 = peg$FAILED;\n          }\n\n          if (s8 !== peg$FAILED) {\n            peg$savedPos = s0;\n            s0 = peg$f5(s5, s6);\n          } else {\n            peg$currPos = s0;\n            s0 = peg$FAILED;\n          }\n        } else {\n          peg$currPos = s0;\n          s0 = peg$FAILED;\n        }\n      } else {\n        peg$currPos = s0;\n        s0 = peg$FAILED;\n      }\n    } else {\n      peg$currPos = s0;\n      s0 = peg$FAILED;\n    }\n\n    return s0;\n  }\n\n  function peg$parseskewX() {\n    var s0, s1, s2, s3, s4, s5, s6, s7;\n\n    var rule$expects = function (expected) {\n      if (peg$silentFails === 0) peg$expect(expected);\n    };\n\n    s0 = peg$currPos;\n    rule$expects(peg$e6);\n\n    if (input.substr(peg$currPos, 5) === peg$c6) {\n      s1 = peg$c6;\n      peg$currPos += 5;\n    } else {\n      s1 = peg$FAILED;\n    }\n\n    if (s1 !== peg$FAILED) {\n      s2 = [];\n      s3 = peg$parsewsp();\n\n      while (s3 !== peg$FAILED) {\n        s2.push(s3);\n        s3 = peg$parsewsp();\n      }\n\n      rule$expects(peg$e1);\n\n      if (input.charCodeAt(peg$currPos) === 40) {\n        s3 = peg$c1;\n        peg$currPos++;\n      } else {\n        s3 = peg$FAILED;\n      }\n\n      if (s3 !== peg$FAILED) {\n        s4 = [];\n        s5 = peg$parsewsp();\n\n        while (s5 !== peg$FAILED) {\n          s4.push(s5);\n          s5 = peg$parsewsp();\n        }\n\n        s5 = peg$parsenumber();\n\n        if (s5 !== peg$FAILED) {\n          s6 = [];\n          s7 = peg$parsewsp();\n\n          while (s7 !== peg$FAILED) {\n            s6.push(s7);\n            s7 = peg$parsewsp();\n          }\n\n          rule$expects(peg$e2);\n\n          if (input.charCodeAt(peg$currPos) === 41) {\n            s7 = peg$c2;\n            peg$currPos++;\n          } else {\n            s7 = peg$FAILED;\n          }\n\n          if (s7 !== peg$FAILED) {\n            peg$savedPos = s0;\n            s0 = peg$f6(s5);\n          } else {\n            peg$currPos = s0;\n            s0 = peg$FAILED;\n          }\n        } else {\n          peg$currPos = s0;\n          s0 = peg$FAILED;\n        }\n      } else {\n        peg$currPos = s0;\n        s0 = peg$FAILED;\n      }\n    } else {\n      peg$currPos = s0;\n      s0 = peg$FAILED;\n    }\n\n    return s0;\n  }\n\n  function peg$parseskewY() {\n    var s0, s1, s2, s3, s4, s5, s6, s7;\n\n    var rule$expects = function (expected) {\n      if (peg$silentFails === 0) peg$expect(expected);\n    };\n\n    s0 = peg$currPos;\n    rule$expects(peg$e7);\n\n    if (input.substr(peg$currPos, 5) === peg$c7) {\n      s1 = peg$c7;\n      peg$currPos += 5;\n    } else {\n      s1 = peg$FAILED;\n    }\n\n    if (s1 !== peg$FAILED) {\n      s2 = [];\n      s3 = peg$parsewsp();\n\n      while (s3 !== peg$FAILED) {\n        s2.push(s3);\n        s3 = peg$parsewsp();\n      }\n\n      rule$expects(peg$e1);\n\n      if (input.charCodeAt(peg$currPos) === 40) {\n        s3 = peg$c1;\n        peg$currPos++;\n      } else {\n        s3 = peg$FAILED;\n      }\n\n      if (s3 !== peg$FAILED) {\n        s4 = [];\n        s5 = peg$parsewsp();\n\n        while (s5 !== peg$FAILED) {\n          s4.push(s5);\n          s5 = peg$parsewsp();\n        }\n\n        s5 = peg$parsenumber();\n\n        if (s5 !== peg$FAILED) {\n          s6 = [];\n          s7 = peg$parsewsp();\n\n          while (s7 !== peg$FAILED) {\n            s6.push(s7);\n            s7 = peg$parsewsp();\n          }\n\n          rule$expects(peg$e2);\n\n          if (input.charCodeAt(peg$currPos) === 41) {\n            s7 = peg$c2;\n            peg$currPos++;\n          } else {\n            s7 = peg$FAILED;\n          }\n\n          if (s7 !== peg$FAILED) {\n            peg$savedPos = s0;\n            s0 = peg$f7(s5);\n          } else {\n            peg$currPos = s0;\n            s0 = peg$FAILED;\n          }\n        } else {\n          peg$currPos = s0;\n          s0 = peg$FAILED;\n        }\n      } else {\n        peg$currPos = s0;\n        s0 = peg$FAILED;\n      }\n    } else {\n      peg$currPos = s0;\n      s0 = peg$FAILED;\n    }\n\n    return s0;\n  }\n\n  function peg$parsenumber() {\n    var s0, s1, s2, s3;\n\n    var rule$expects = function (expected) {\n      if (peg$silentFails === 0) peg$expect(expected);\n    };\n\n    s0 = peg$currPos;\n    s1 = peg$currPos;\n    s2 = peg$parsesign();\n\n    if (s2 === peg$FAILED) {\n      s2 = null;\n    }\n\n    s3 = peg$parsefloatingPointConstant();\n\n    if (s3 !== peg$FAILED) {\n      s2 = [s2, s3];\n      s1 = s2;\n    } else {\n      peg$currPos = s1;\n      s1 = peg$FAILED;\n    }\n\n    if (s1 !== peg$FAILED) {\n      peg$savedPos = s0;\n      s1 = peg$f8(s1);\n    }\n\n    s0 = s1;\n\n    if (s0 === peg$FAILED) {\n      s0 = peg$currPos;\n      s1 = peg$currPos;\n      s2 = peg$parsesign();\n\n      if (s2 === peg$FAILED) {\n        s2 = null;\n      }\n\n      s3 = peg$parseintegerConstant();\n\n      if (s3 !== peg$FAILED) {\n        s2 = [s2, s3];\n        s1 = s2;\n      } else {\n        peg$currPos = s1;\n        s1 = peg$FAILED;\n      }\n\n      if (s1 !== peg$FAILED) {\n        peg$savedPos = s0;\n        s1 = peg$f9(s1);\n      }\n\n      s0 = s1;\n    }\n\n    return s0;\n  }\n\n  function peg$parsecommaWspNumber() {\n    var s0, s1, s2;\n\n    var rule$expects = function (expected) {\n      if (peg$silentFails === 0) peg$expect(expected);\n    };\n\n    s0 = peg$currPos;\n    s1 = peg$parsecommaWsp();\n\n    if (s1 !== peg$FAILED) {\n      s2 = peg$parsenumber();\n\n      if (s2 !== peg$FAILED) {\n        peg$savedPos = s0;\n        s0 = peg$f10(s2);\n      } else {\n        peg$currPos = s0;\n        s0 = peg$FAILED;\n      }\n    } else {\n      peg$currPos = s0;\n      s0 = peg$FAILED;\n    }\n\n    return s0;\n  }\n\n  function peg$parsecommaWspTwoNumbers() {\n    var s0, s1, s2, s3, s4;\n\n    var rule$expects = function (expected) {\n      if (peg$silentFails === 0) peg$expect(expected);\n    };\n\n    s0 = peg$currPos;\n    s1 = peg$parsecommaWsp();\n\n    if (s1 !== peg$FAILED) {\n      s2 = peg$parsenumber();\n\n      if (s2 !== peg$FAILED) {\n        s3 = peg$parsecommaWsp();\n\n        if (s3 !== peg$FAILED) {\n          s4 = peg$parsenumber();\n\n          if (s4 !== peg$FAILED) {\n            peg$savedPos = s0;\n            s0 = peg$f11(s2, s4);\n          } else {\n            peg$currPos = s0;\n            s0 = peg$FAILED;\n          }\n        } else {\n          peg$currPos = s0;\n          s0 = peg$FAILED;\n        }\n      } else {\n        peg$currPos = s0;\n        s0 = peg$FAILED;\n      }\n    } else {\n      peg$currPos = s0;\n      s0 = peg$FAILED;\n    }\n\n    return s0;\n  }\n\n  function peg$parsecommaWsp() {\n    var s0, s1, s2, s3, s4;\n\n    var rule$expects = function (expected) {\n      if (peg$silentFails === 0) peg$expect(expected);\n    };\n\n    s0 = peg$currPos;\n    s1 = [];\n    s2 = peg$parsewsp();\n\n    if (s2 !== peg$FAILED) {\n      while (s2 !== peg$FAILED) {\n        s1.push(s2);\n        s2 = peg$parsewsp();\n      }\n    } else {\n      s1 = peg$FAILED;\n    }\n\n    if (s1 !== peg$FAILED) {\n      s2 = peg$parsecomma();\n\n      if (s2 === peg$FAILED) {\n        s2 = null;\n      }\n\n      s3 = [];\n      s4 = peg$parsewsp();\n\n      while (s4 !== peg$FAILED) {\n        s3.push(s4);\n        s4 = peg$parsewsp();\n      }\n\n      s1 = [s1, s2, s3];\n      s0 = s1;\n    } else {\n      peg$currPos = s0;\n      s0 = peg$FAILED;\n    }\n\n    if (s0 === peg$FAILED) {\n      s0 = peg$currPos;\n      s1 = peg$parsecomma();\n\n      if (s1 !== peg$FAILED) {\n        s2 = [];\n        s3 = peg$parsewsp();\n\n        while (s3 !== peg$FAILED) {\n          s2.push(s3);\n          s3 = peg$parsewsp();\n        }\n\n        s1 = [s1, s2];\n        s0 = s1;\n      } else {\n        peg$currPos = s0;\n        s0 = peg$FAILED;\n      }\n    }\n\n    return s0;\n  }\n\n  function peg$parsecomma() {\n    var s0;\n\n    var rule$expects = function (expected) {\n      if (peg$silentFails === 0) peg$expect(expected);\n    };\n\n    rule$expects(peg$e8);\n\n    if (input.charCodeAt(peg$currPos) === 44) {\n      s0 = peg$c8;\n      peg$currPos++;\n    } else {\n      s0 = peg$FAILED;\n    }\n\n    return s0;\n  }\n\n  function peg$parseintegerConstant() {\n    var s0, s1;\n\n    var rule$expects = function (expected) {\n      if (peg$silentFails === 0) peg$expect(expected);\n    };\n\n    s0 = peg$currPos;\n    s1 = peg$parsedigitSequence();\n\n    if (s1 !== peg$FAILED) {\n      peg$savedPos = s0;\n      s1 = peg$f12(s1);\n    }\n\n    s0 = s1;\n    return s0;\n  }\n\n  function peg$parsefloatingPointConstant() {\n    var s0, s1, s2;\n\n    var rule$expects = function (expected) {\n      if (peg$silentFails === 0) peg$expect(expected);\n    };\n\n    s0 = peg$currPos;\n    s1 = peg$parsefractionalConstant();\n\n    if (s1 !== peg$FAILED) {\n      s2 = peg$parseexponent();\n\n      if (s2 === peg$FAILED) {\n        s2 = null;\n      }\n\n      s1 = [s1, s2];\n      s0 = s1;\n    } else {\n      peg$currPos = s0;\n      s0 = peg$FAILED;\n    }\n\n    if (s0 === peg$FAILED) {\n      s0 = peg$currPos;\n      s1 = peg$parsedigitSequence();\n\n      if (s1 !== peg$FAILED) {\n        s2 = peg$parseexponent();\n\n        if (s2 !== peg$FAILED) {\n          s1 = [s1, s2];\n          s0 = s1;\n        } else {\n          peg$currPos = s0;\n          s0 = peg$FAILED;\n        }\n      } else {\n        peg$currPos = s0;\n        s0 = peg$FAILED;\n      }\n    }\n\n    return s0;\n  }\n\n  function peg$parsefractionalConstant() {\n    var s0, s1, s2, s3;\n\n    var rule$expects = function (expected) {\n      if (peg$silentFails === 0) peg$expect(expected);\n    };\n\n    rule$expects(peg$e9);\n    peg$silentFails++;\n    s0 = peg$currPos;\n    s1 = peg$parsedigitSequence();\n\n    if (s1 === peg$FAILED) {\n      s1 = null;\n    }\n\n    if (input.charCodeAt(peg$currPos) === 46) {\n      s2 = peg$c9;\n      peg$currPos++;\n    } else {\n      s2 = peg$FAILED;\n    }\n\n    if (s2 !== peg$FAILED) {\n      s3 = peg$parsedigitSequence();\n\n      if (s3 !== peg$FAILED) {\n        peg$savedPos = s0;\n        s0 = peg$f13(s1, s3);\n      } else {\n        peg$currPos = s0;\n        s0 = peg$FAILED;\n      }\n    } else {\n      peg$currPos = s0;\n      s0 = peg$FAILED;\n    }\n\n    if (s0 === peg$FAILED) {\n      s0 = peg$currPos;\n      s1 = peg$parsedigitSequence();\n\n      if (s1 !== peg$FAILED) {\n        if (input.charCodeAt(peg$currPos) === 46) {\n          s2 = peg$c9;\n          peg$currPos++;\n        } else {\n          s2 = peg$FAILED;\n        }\n\n        if (s2 !== peg$FAILED) {\n          peg$savedPos = s0;\n          s0 = peg$f14(s1);\n        } else {\n          peg$currPos = s0;\n          s0 = peg$FAILED;\n        }\n      } else {\n        peg$currPos = s0;\n        s0 = peg$FAILED;\n      }\n    }\n\n    peg$silentFails--;\n    return s0;\n  }\n\n  function peg$parseexponent() {\n    var s0, s1, s2, s3;\n\n    var rule$expects = function (expected) {\n      if (peg$silentFails === 0) peg$expect(expected);\n    };\n\n    s0 = peg$currPos;\n    rule$expects(peg$e10);\n\n    if (peg$r0.test(input.charAt(peg$currPos))) {\n      s1 = input.charAt(peg$currPos);\n      peg$currPos++;\n    } else {\n      s1 = peg$FAILED;\n    }\n\n    if (s1 !== peg$FAILED) {\n      s2 = peg$parsesign();\n\n      if (s2 === peg$FAILED) {\n        s2 = null;\n      }\n\n      s3 = peg$parsedigitSequence();\n\n      if (s3 !== peg$FAILED) {\n        s1 = [s1, s2, s3];\n        s0 = s1;\n      } else {\n        peg$currPos = s0;\n        s0 = peg$FAILED;\n      }\n    } else {\n      peg$currPos = s0;\n      s0 = peg$FAILED;\n    }\n\n    return s0;\n  }\n\n  function peg$parsesign() {\n    var s0;\n\n    var rule$expects = function (expected) {\n      if (peg$silentFails === 0) peg$expect(expected);\n    };\n\n    rule$expects(peg$e11);\n\n    if (peg$r1.test(input.charAt(peg$currPos))) {\n      s0 = input.charAt(peg$currPos);\n      peg$currPos++;\n    } else {\n      s0 = peg$FAILED;\n    }\n\n    return s0;\n  }\n\n  function peg$parsedigitSequence() {\n    var s0, s1;\n\n    var rule$expects = function (expected) {\n      if (peg$silentFails === 0) peg$expect(expected);\n    };\n\n    s0 = [];\n    s1 = peg$parsedigit();\n\n    if (s1 !== peg$FAILED) {\n      while (s1 !== peg$FAILED) {\n        s0.push(s1);\n        s1 = peg$parsedigit();\n      }\n    } else {\n      s0 = peg$FAILED;\n    }\n\n    return s0;\n  }\n\n  function peg$parsedigit() {\n    var s0;\n\n    var rule$expects = function (expected) {\n      if (peg$silentFails === 0) peg$expect(expected);\n    };\n\n    rule$expects(peg$e12);\n\n    if (peg$r2.test(input.charAt(peg$currPos))) {\n      s0 = input.charAt(peg$currPos);\n      peg$currPos++;\n    } else {\n      s0 = peg$FAILED;\n    }\n\n    return s0;\n  }\n\n  function peg$parsewsp() {\n    var s0;\n\n    var rule$expects = function (expected) {\n      if (peg$silentFails === 0) peg$expect(expected);\n    };\n\n    rule$expects(peg$e13);\n\n    if (peg$r3.test(input.charAt(peg$currPos))) {\n      s0 = input.charAt(peg$currPos);\n      peg$currPos++;\n    } else {\n      s0 = peg$FAILED;\n    }\n\n    return s0;\n  }\n\n  peg$begin();\n  peg$result = peg$startRuleFunction();\n\n  if (peg$result !== peg$FAILED && peg$currPos === input.length) {\n    return peg$result;\n  } else {\n    if (peg$result !== peg$FAILED && peg$currPos < input.length) {\n      peg$expect(peg$endExpectation());\n    }\n\n    throw peg$buildError();\n  }\n}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  SyntaxError: peg$SyntaxError,\n  parse: peg$parse\n});\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/transformation-matrix/src/fromTransformAttribute.autogenerated.js?");

/***/ }),

/***/ "./node_modules/transformation-matrix/src/fromTransformAttribute.js":
/*!**************************************************************************!*\
  !*** ./node_modules/transformation-matrix/src/fromTransformAttribute.js ***!
  \**************************************************************************/
/*! exports provided: fromTransformAttribute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fromTransformAttribute\", function() { return fromTransformAttribute; });\n/* harmony import */ var _fromTransformAttribute_autogenerated__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fromTransformAttribute.autogenerated */ \"./node_modules/transformation-matrix/src/fromTransformAttribute.autogenerated.js\");\n\n/**\n * Parser for SVG Trasform Attribute http://www.w3.org/TR/SVG/coords.html#TransformAttribute <br/>\n * Warning: This should be considered BETA until it is released a stable version of pegjs.\n * @param transformString {string} Transform string as defined by w3 Consortium\n * @returns {MatrixDescriptor[]} Array of MatrixDescriptor\n *\n * @example\n * > fromTransformAttribute('translate(-10,-10) scale(2,2) translate(10,10)')\n * [\n *  { type: 'translate', tx: -10, ty: -10},\n *  { type: 'scale', sx: 2, sy: 2 },\n *  { type: 'translate', tx: 10, ty: 10}\n * ]\n *\n * > compose(fromDefinition(fromTransformAttribute('translate(-10, -10) scale(10, 10)')))\n * { a: 10, c: 0, e: -10, b: 0, d: 10, f: -10 }\n */\n\nfunction fromTransformAttribute(transformString) {\n  return Object(_fromTransformAttribute_autogenerated__WEBPACK_IMPORTED_MODULE_0__[\"parse\"])(transformString);\n}\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/transformation-matrix/src/fromTransformAttribute.js?");

/***/ }),

/***/ "./node_modules/transformation-matrix/src/fromTriangles.js":
/*!*****************************************************************!*\
  !*** ./node_modules/transformation-matrix/src/fromTriangles.js ***!
  \*****************************************************************/
/*! exports provided: fromTriangles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fromTriangles\", function() { return fromTriangles; });\n/* harmony import */ var _inverse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inverse */ \"./node_modules/transformation-matrix/src/inverse.js\");\n/* harmony import */ var _transform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transform */ \"./node_modules/transformation-matrix/src/transform.js\");\n/* harmony import */ var _smoothMatrix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./smoothMatrix */ \"./node_modules/transformation-matrix/src/smoothMatrix.js\");\n\n\n\n/**\n * Returns a matrix that transforms a triangle t1 into another triangle t2, or throws an exception if it is impossible.\n * @param t1 {Point[]} Array of points containing the three points for the first triangle\n * @param t2 {Point[]} Array of points containing the three points for the second triangle\n * @returns {Matrix} Matrix which transforms t1 to t2\n * @throws Exception if the matrix becomes not invertible\n */\n\nfunction fromTriangles(t1, t2) {\n  // point p = first point of the triangle\n  const px1 = t1[0].x != null ? t1[0].x : t1[0][0];\n  const py1 = t1[0].y != null ? t1[0].y : t1[0][1];\n  const px2 = t2[0].x != null ? t2[0].x : t2[0][0];\n  const py2 = t2[0].y != null ? t2[0].y : t2[0][1]; // point q = second point of the triangle\n\n  const qx1 = t1[1].x != null ? t1[1].x : t1[1][0];\n  const qy1 = t1[1].y != null ? t1[1].y : t1[1][1];\n  const qx2 = t2[1].x != null ? t2[1].x : t2[1][0];\n  const qy2 = t2[1].y != null ? t2[1].y : t2[1][1]; // point r = third point of the triangle\n\n  const rx1 = t1[2].x != null ? t1[2].x : t1[2][0];\n  const ry1 = t1[2].y != null ? t1[2].y : t1[2][1];\n  const rx2 = t2[2].x != null ? t2[2].x : t2[2][0];\n  const ry2 = t2[2].y != null ? t2[2].y : t2[2][1];\n  const r1 = {\n    a: px1 - rx1,\n    b: py1 - ry1,\n    c: qx1 - rx1,\n    d: qy1 - ry1,\n    e: rx1,\n    f: ry1\n  };\n  const r2 = {\n    a: px2 - rx2,\n    b: py2 - ry2,\n    c: qx2 - rx2,\n    d: qy2 - ry2,\n    e: rx2,\n    f: ry2\n  };\n  const inverseR1 = Object(_inverse__WEBPACK_IMPORTED_MODULE_0__[\"inverse\"])(r1);\n  const affineMatrix = Object(_transform__WEBPACK_IMPORTED_MODULE_1__[\"transform\"])([r2, inverseR1]); // round the matrix elements to smooth the finite inversion\n\n  return Object(_smoothMatrix__WEBPACK_IMPORTED_MODULE_2__[\"smoothMatrix\"])(affineMatrix);\n}\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/transformation-matrix/src/fromTriangles.js?");

/***/ }),

/***/ "./node_modules/transformation-matrix/src/identity.js":
/*!************************************************************!*\
  !*** ./node_modules/transformation-matrix/src/identity.js ***!
  \************************************************************/
/*! exports provided: identity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"identity\", function() { return identity; });\n/**\n * Identity matrix\n * @returns {Matrix} Affine Matrix\n */\nfunction identity() {\n  return {\n    a: 1,\n    c: 0,\n    e: 0,\n    b: 0,\n    d: 1,\n    f: 0\n  };\n}\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/transformation-matrix/src/identity.js?");

/***/ }),

/***/ "./node_modules/transformation-matrix/src/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/transformation-matrix/src/index.js ***!
  \*********************************************************/
/*! exports provided: applyToPoint, applyToPoints, fromObject, fromString, identity, inverse, isAffineMatrix, rotate, rotateDEG, scale, shear, skew, skewDEG, toCSS, toSVG, toString, transform, compose, translate, fromTriangles, smoothMatrix, fromDefinition, fromTransformAttribute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _applyToPoint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./applyToPoint */ \"./node_modules/transformation-matrix/src/applyToPoint.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"applyToPoint\", function() { return _applyToPoint__WEBPACK_IMPORTED_MODULE_0__[\"applyToPoint\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"applyToPoints\", function() { return _applyToPoint__WEBPACK_IMPORTED_MODULE_0__[\"applyToPoints\"]; });\n\n/* harmony import */ var _fromObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fromObject */ \"./node_modules/transformation-matrix/src/fromObject.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"fromObject\", function() { return _fromObject__WEBPACK_IMPORTED_MODULE_1__[\"fromObject\"]; });\n\n/* harmony import */ var _fromString__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fromString */ \"./node_modules/transformation-matrix/src/fromString.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"fromString\", function() { return _fromString__WEBPACK_IMPORTED_MODULE_2__[\"fromString\"]; });\n\n/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./identity */ \"./node_modules/transformation-matrix/src/identity.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"identity\", function() { return _identity__WEBPACK_IMPORTED_MODULE_3__[\"identity\"]; });\n\n/* harmony import */ var _inverse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./inverse */ \"./node_modules/transformation-matrix/src/inverse.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"inverse\", function() { return _inverse__WEBPACK_IMPORTED_MODULE_4__[\"inverse\"]; });\n\n/* harmony import */ var _isAffineMatrix__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./isAffineMatrix */ \"./node_modules/transformation-matrix/src/isAffineMatrix.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isAffineMatrix\", function() { return _isAffineMatrix__WEBPACK_IMPORTED_MODULE_5__[\"isAffineMatrix\"]; });\n\n/* harmony import */ var _rotate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rotate */ \"./node_modules/transformation-matrix/src/rotate.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"rotate\", function() { return _rotate__WEBPACK_IMPORTED_MODULE_6__[\"rotate\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"rotateDEG\", function() { return _rotate__WEBPACK_IMPORTED_MODULE_6__[\"rotateDEG\"]; });\n\n/* harmony import */ var _scale__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./scale */ \"./node_modules/transformation-matrix/src/scale.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"scale\", function() { return _scale__WEBPACK_IMPORTED_MODULE_7__[\"scale\"]; });\n\n/* harmony import */ var _shear__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shear */ \"./node_modules/transformation-matrix/src/shear.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"shear\", function() { return _shear__WEBPACK_IMPORTED_MODULE_8__[\"shear\"]; });\n\n/* harmony import */ var _skew__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./skew */ \"./node_modules/transformation-matrix/src/skew.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"skew\", function() { return _skew__WEBPACK_IMPORTED_MODULE_9__[\"skew\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"skewDEG\", function() { return _skew__WEBPACK_IMPORTED_MODULE_9__[\"skewDEG\"]; });\n\n/* harmony import */ var _toString__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./toString */ \"./node_modules/transformation-matrix/src/toString.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"toCSS\", function() { return _toString__WEBPACK_IMPORTED_MODULE_10__[\"toCSS\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"toSVG\", function() { return _toString__WEBPACK_IMPORTED_MODULE_10__[\"toSVG\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"toString\", function() { return _toString__WEBPACK_IMPORTED_MODULE_10__[\"toString\"]; });\n\n/* harmony import */ var _transform__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./transform */ \"./node_modules/transformation-matrix/src/transform.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"transform\", function() { return _transform__WEBPACK_IMPORTED_MODULE_11__[\"transform\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"compose\", function() { return _transform__WEBPACK_IMPORTED_MODULE_11__[\"compose\"]; });\n\n/* harmony import */ var _translate__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./translate */ \"./node_modules/transformation-matrix/src/translate.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"translate\", function() { return _translate__WEBPACK_IMPORTED_MODULE_12__[\"translate\"]; });\n\n/* harmony import */ var _fromTriangles__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./fromTriangles */ \"./node_modules/transformation-matrix/src/fromTriangles.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"fromTriangles\", function() { return _fromTriangles__WEBPACK_IMPORTED_MODULE_13__[\"fromTriangles\"]; });\n\n/* harmony import */ var _smoothMatrix__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./smoothMatrix */ \"./node_modules/transformation-matrix/src/smoothMatrix.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"smoothMatrix\", function() { return _smoothMatrix__WEBPACK_IMPORTED_MODULE_14__[\"smoothMatrix\"]; });\n\n/* harmony import */ var _fromDefinition__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./fromDefinition */ \"./node_modules/transformation-matrix/src/fromDefinition.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"fromDefinition\", function() { return _fromDefinition__WEBPACK_IMPORTED_MODULE_15__[\"fromDefinition\"]; });\n\n/* harmony import */ var _fromTransformAttribute__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./fromTransformAttribute */ \"./node_modules/transformation-matrix/src/fromTransformAttribute.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"fromTransformAttribute\", function() { return _fromTransformAttribute__WEBPACK_IMPORTED_MODULE_16__[\"fromTransformAttribute\"]; });\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/transformation-matrix/src/index.js?");

/***/ }),

/***/ "./node_modules/transformation-matrix/src/inverse.js":
/*!***********************************************************!*\
  !*** ./node_modules/transformation-matrix/src/inverse.js ***!
  \***********************************************************/
/*! exports provided: inverse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"inverse\", function() { return inverse; });\n/**\n * Calculate a matrix that is the inverse of the provided matrix\n * @param matrix {Matrix} Affine Matrix\n * @returns {Matrix} Inverted Affine Matrix\n */\nfunction inverse(matrix) {\n  // http://www.wolframalpha.com/input/?i=Inverse+%5B%7B%7Ba,c,e%7D,%7Bb,d,f%7D,%7B0,0,1%7D%7D%5D\n  const {\n    a,\n    b,\n    c,\n    d,\n    e,\n    f\n  } = matrix;\n  const denom = a * d - b * c;\n  return {\n    a: d / denom,\n    b: b / -denom,\n    c: c / -denom,\n    d: a / denom,\n    e: (d * e - c * f) / -denom,\n    f: (b * e - a * f) / denom\n  };\n}\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/transformation-matrix/src/inverse.js?");

/***/ }),

/***/ "./node_modules/transformation-matrix/src/isAffineMatrix.js":
/*!******************************************************************!*\
  !*** ./node_modules/transformation-matrix/src/isAffineMatrix.js ***!
  \******************************************************************/
/*! exports provided: isAffineMatrix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isAffineMatrix\", function() { return isAffineMatrix; });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./node_modules/transformation-matrix/src/utils.js\");\n\n/**\n * Check if the object contain an affine matrix\n * @param object {Object} Generic Plain Object\n * @return {boolean} True if is an object and contains an affine matrix\n */\n\nfunction isAffineMatrix(object) {\n  return Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"isObject\"])(object) && 'a' in object && Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"isNumeric\"])(object.a) && 'b' in object && Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"isNumeric\"])(object.b) && 'c' in object && Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"isNumeric\"])(object.c) && 'd' in object && Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"isNumeric\"])(object.d) && 'e' in object && Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"isNumeric\"])(object.e) && 'f' in object && Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"isNumeric\"])(object.f);\n}\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/transformation-matrix/src/isAffineMatrix.js?");

/***/ }),

/***/ "./node_modules/transformation-matrix/src/rotate.js":
/*!**********************************************************!*\
  !*** ./node_modules/transformation-matrix/src/rotate.js ***!
  \**********************************************************/
/*! exports provided: rotate, rotateDEG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"rotate\", function() { return rotate; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"rotateDEG\", function() { return rotateDEG; });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./node_modules/transformation-matrix/src/utils.js\");\n/* harmony import */ var _translate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./translate */ \"./node_modules/transformation-matrix/src/translate.js\");\n/* harmony import */ var _transform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transform */ \"./node_modules/transformation-matrix/src/transform.js\");\n\n\n\nconst {\n  cos,\n  sin,\n  PI\n} = Math;\n/**\n * Calculate a rotation matrix\n * @param angle {number} Angle in radians\n * @param [cx] {number} If (cx,cy) are supplied the rotate is about this point\n * @param [cy] {number} If (cx,cy) are supplied the rotate is about this point\n * @returns {Matrix} Affine Matrix\n */\n\nfunction rotate(angle, cx, cy) {\n  const cosAngle = cos(angle);\n  const sinAngle = sin(angle);\n  const rotationMatrix = {\n    a: cosAngle,\n    c: -sinAngle,\n    e: 0,\n    b: sinAngle,\n    d: cosAngle,\n    f: 0\n  };\n\n  if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"isUndefined\"])(cx) || Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"isUndefined\"])(cy)) {\n    return rotationMatrix;\n  }\n\n  return Object(_transform__WEBPACK_IMPORTED_MODULE_2__[\"transform\"])([Object(_translate__WEBPACK_IMPORTED_MODULE_1__[\"translate\"])(cx, cy), rotationMatrix, Object(_translate__WEBPACK_IMPORTED_MODULE_1__[\"translate\"])(-cx, -cy)]);\n}\n/**\n * Calculate a rotation matrix with a DEG angle\n * @param angle {number} Angle in degree\n * @param [cx] {number} If (cx,cy) are supplied the rotate is about this point\n * @param [cy] {number} If (cx,cy) are supplied the rotate is about this point\n * @returns {Matrix} Affine Matrix\n */\n\nfunction rotateDEG(angle, cx = undefined, cy = undefined) {\n  return rotate(angle * PI / 180, cx, cy);\n}\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/transformation-matrix/src/rotate.js?");

/***/ }),

/***/ "./node_modules/transformation-matrix/src/scale.js":
/*!*********************************************************!*\
  !*** ./node_modules/transformation-matrix/src/scale.js ***!
  \*********************************************************/
/*! exports provided: scale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"scale\", function() { return scale; });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./node_modules/transformation-matrix/src/utils.js\");\n/* harmony import */ var _translate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./translate */ \"./node_modules/transformation-matrix/src/translate.js\");\n/* harmony import */ var _transform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transform */ \"./node_modules/transformation-matrix/src/transform.js\");\n\n\n\n/**\n * Calculate a scaling matrix\n * @param sx {number} Scaling on axis x\n * @param [sy = sx] {number} Scaling on axis y (default sx)\n * @param [cx] {number} If (cx,cy) are supplied the scaling is about this point\n * @param [cy] {number} If (cx,cy) are supplied the scaling is about this point\n * @returns {Matrix} Affine Matrix\n */\n\nfunction scale(sx, sy = undefined, cx = undefined, cy = undefined) {\n  if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"isUndefined\"])(sy)) sy = sx;\n  const scaleMatrix = {\n    a: sx,\n    c: 0,\n    e: 0,\n    b: 0,\n    d: sy,\n    f: 0\n  };\n\n  if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"isUndefined\"])(cx) || Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"isUndefined\"])(cy)) {\n    return scaleMatrix;\n  }\n\n  return Object(_transform__WEBPACK_IMPORTED_MODULE_2__[\"transform\"])([Object(_translate__WEBPACK_IMPORTED_MODULE_1__[\"translate\"])(cx, cy), scaleMatrix, Object(_translate__WEBPACK_IMPORTED_MODULE_1__[\"translate\"])(-cx, -cy)]);\n}\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/transformation-matrix/src/scale.js?");

/***/ }),

/***/ "./node_modules/transformation-matrix/src/shear.js":
/*!*********************************************************!*\
  !*** ./node_modules/transformation-matrix/src/shear.js ***!
  \*********************************************************/
/*! exports provided: shear */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"shear\", function() { return shear; });\n/**\n * Calculate a shear matrix\n * @param shx {number} Shear on axis x\n * @param shy {number} Shear on axis y\n * @returns {Matrix} Affine Matrix\n */\nfunction shear(shx, shy) {\n  return {\n    a: 1,\n    c: shx,\n    e: 0,\n    b: shy,\n    d: 1,\n    f: 0\n  };\n}\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/transformation-matrix/src/shear.js?");

/***/ }),

/***/ "./node_modules/transformation-matrix/src/skew.js":
/*!********************************************************!*\
  !*** ./node_modules/transformation-matrix/src/skew.js ***!
  \********************************************************/
/*! exports provided: skew, skewDEG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"skew\", function() { return skew; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"skewDEG\", function() { return skewDEG; });\n// https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/skew\nconst {\n  tan\n} = Math;\n/**\n * Calculate a skew matrix\n * @param ax {number} Skew on axis x\n * @param ay {number} Skew on axis y\n * @returns {Matrix} Affine Matrix\n */\n\nfunction skew(ax, ay) {\n  return {\n    a: 1,\n    c: tan(ax),\n    e: 0,\n    b: tan(ay),\n    d: 1,\n    f: 0\n  };\n}\n/**\n * Calculate a skew matrix using DEG angles\n * @param ax {number} Skew on axis x\n * @param ay {number} Skew on axis y\n * @returns {Matrix} Affine Matrix\n */\n\nfunction skewDEG(ax, ay) {\n  return skew(ax * Math.PI / 180, ay * Math.PI / 180);\n}\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/transformation-matrix/src/skew.js?");

/***/ }),

/***/ "./node_modules/transformation-matrix/src/smoothMatrix.js":
/*!****************************************************************!*\
  !*** ./node_modules/transformation-matrix/src/smoothMatrix.js ***!
  \****************************************************************/
/*! exports provided: smoothMatrix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"smoothMatrix\", function() { return smoothMatrix; });\n/**\n * Rounds all elements of the given matrix using the given precision\n * @param matrix {Matrix} An affine matrix to round\n * @param [precision] {number} A precision to use for Math.round. Defaults to 10000000000 (meaning which rounds to the 10th digit after the comma).\n * @returns {Matrix} The rounded Affine Matrix\n */\nfunction smoothMatrix(matrix, precision = 10000000000) {\n  return {\n    a: Math.round(matrix.a * precision) / precision,\n    b: Math.round(matrix.b * precision) / precision,\n    c: Math.round(matrix.c * precision) / precision,\n    d: Math.round(matrix.d * precision) / precision,\n    e: Math.round(matrix.e * precision) / precision,\n    f: Math.round(matrix.f * precision) / precision\n  };\n}\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/transformation-matrix/src/smoothMatrix.js?");

/***/ }),

/***/ "./node_modules/transformation-matrix/src/toString.js":
/*!************************************************************!*\
  !*** ./node_modules/transformation-matrix/src/toString.js ***!
  \************************************************************/
/*! exports provided: toCSS, toSVG, toString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toCSS\", function() { return toCSS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toSVG\", function() { return toSVG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toString\", function() { return toString; });\n/**\n * Serialize an affine matrix to a string that can be used with CSS or SVG\n * @param matrix {Matrix} Affine Matrix\n * @returns {string} String that contains an affine matrix formatted as matrix(a,b,c,d,e,f)\n */\nfunction toCSS(matrix) {\n  return toString(matrix);\n}\n/**\n * Serialize an affine matrix to a string that can be used with CSS or SVG\n * @param matrix {Matrix} Affine Matrix\n * @returns {string} String that contains an affine matrix formatted as matrix(a,b,c,d,e,f)\n */\n\nfunction toSVG(matrix) {\n  return toString(matrix);\n}\n/**\n * Serialize an affine matrix to a string that can be used with CSS or SVG\n * @param matrix {Matrix} Affine Matrix\n * @returns {string} String that contains an affine matrix formatted as matrix(a,b,c,d,e,f)\n */\n\nfunction toString(matrix) {\n  return `matrix(${matrix.a},${matrix.b},${matrix.c},${matrix.d},${matrix.e},${matrix.f})`;\n}\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/transformation-matrix/src/toString.js?");

/***/ }),

/***/ "./node_modules/transformation-matrix/src/transform.js":
/*!*************************************************************!*\
  !*** ./node_modules/transformation-matrix/src/transform.js ***!
  \*************************************************************/
/*! exports provided: transform, compose */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"transform\", function() { return transform; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"compose\", function() { return compose; });\n/**\n * Merge multiple matrices into one\n * @param matrices {...Matrix | Matrix[]} Matrices listed as separate parameters or in an array\n * @returns {Matrix} Affine Matrix\n */\nfunction transform(...matrices) {\n  matrices = Array.isArray(matrices[0]) ? matrices[0] : matrices;\n\n  const multiply = (m1, m2) => {\n    return {\n      a: m1.a * m2.a + m1.c * m2.b,\n      c: m1.a * m2.c + m1.c * m2.d,\n      e: m1.a * m2.e + m1.c * m2.f + m1.e,\n      b: m1.b * m2.a + m1.d * m2.b,\n      d: m1.b * m2.c + m1.d * m2.d,\n      f: m1.b * m2.e + m1.d * m2.f + m1.f\n    };\n  };\n\n  switch (matrices.length) {\n    case 0:\n      throw new Error('no matrices provided');\n\n    case 1:\n      return matrices[0];\n\n    case 2:\n      return multiply(matrices[0], matrices[1]);\n\n    default:\n      {\n        const [m1, m2, ...rest] = matrices;\n        const m = multiply(m1, m2);\n        return transform(m, ...rest);\n      }\n  }\n}\n/**\n * Merge multiple matrices into one\n * @param matrices {...Matrix | Matrix[]} Matrices listed as separate parameters or in an array\n * @returns {Matrix} Affine Matrix\n */\n\nfunction compose(...matrices) {\n  return transform(...matrices);\n}\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/transformation-matrix/src/transform.js?");

/***/ }),

/***/ "./node_modules/transformation-matrix/src/translate.js":
/*!*************************************************************!*\
  !*** ./node_modules/transformation-matrix/src/translate.js ***!
  \*************************************************************/
/*! exports provided: translate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"translate\", function() { return translate; });\n/**\n * Calculate a translate matrix\n * @param tx {number} Translation on axis x\n * @param [ty = 0] {number} Translation on axis y\n * @returns {Matrix} Affine Matrix\n */\nfunction translate(tx, ty = 0) {\n  return {\n    a: 1,\n    c: 0,\n    e: tx,\n    b: 0,\n    d: 1,\n    f: ty\n  };\n}\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/transformation-matrix/src/translate.js?");

/***/ }),

/***/ "./node_modules/transformation-matrix/src/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/transformation-matrix/src/utils.js ***!
  \*********************************************************/
/*! exports provided: isUndefined, isNumeric, isObject, matchesShape */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isUndefined\", function() { return isUndefined; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isNumeric\", function() { return isNumeric; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isObject\", function() { return isObject; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"matchesShape\", function() { return matchesShape; });\nfunction isUndefined(val) {\n  return typeof val === 'undefined';\n}\nfunction isNumeric(n) {\n  return typeof n === 'number' && !Number.isNaN(n) && Number.isFinite(n);\n}\nfunction isObject(obj) {\n  return typeof obj === 'object' && obj !== null && !Array.isArray(obj);\n}\nfunction matchesShape(obj, keys) {\n  return keys.every(key => key in obj);\n}\n\n//# sourceURL=webpack://prst-shape-transform/./node_modules/transformation-matrix/src/utils.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g; // This works in non-strict mode\n\ng = function () {\n  return this;\n}();\n\ntry {\n  // This works if eval is allowed (see CSP)\n  g = g || new Function(\"return this\")();\n} catch (e) {\n  // This works if the window reference is available\n  if (typeof window === \"object\") g = window;\n} // g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\n\nmodule.exports = g;\n\n//# sourceURL=webpack://prst-shape-transform/(webpack)/buildin/global.js?");

/***/ }),

/***/ "./tmp/arcToPathA.js":
/*!***************************!*\
  !*** ./tmp/arcToPathA.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/define-property */ \"./node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js\");\n\n_Object$defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = arcToPathA;\n\nvar _transformationMatrix = __webpack_require__(/*! transformation-matrix */ \"./node_modules/transformation-matrix/src/index.js\");\n/**\n * 将 office 的arc 转换为 A指令， 依赖前一个指令来计算圆弧起点位置\n */\n\n\nfunction arcToPathA(wR, hR, startAng, endAng, preX, preY) {\n  // TODO 根据 startAng 和 swingAng 计算 圆弧参数\n  // 1. 计算 椭圆线段 开始的 x1 y1 和结束的 x2 y2\n  let _genArcPoint = genArcPoint(wR, hR, startAng, endAng),\n      start = _genArcPoint.start,\n      end = _genArcPoint.end; // 2. 计算 x1 y1 处切线角度\n  // 3. 根据切线角度对椭圆以椭圆中心为原点进行 旋转变换(根据选取的线段角度判断 旋转方向)\n  // 4. 根据旋转后的 x1 和 y1，对椭圆进行平移变换，使 x1 y1 和 起点重合（起点为上一个指令的结束点 或者 0 0 ， 如果上一个指令是圆弧？？？）\n\n\n  const matrix = (0, _transformationMatrix.translate)(preX - start.x, preY - start.y);\n  end = (0, _transformationMatrix.applyToPoint)(matrix, end);\n  start = (0, _transformationMatrix.applyToPoint)(matrix, start); // 5. 得到平移变换后 x2 y2 的坐标，赋值给endX， endY\n\n  console.log(start, end);\n  return `A${wR},${hR},0,0,1,${end.x.toFixed(2)},${end.y.toFixed(2)}`;\n}\n\nfunction genArcPoint(wr, hr, stAng, swAng) {\n  const r = deg => Math.PI * (deg / 60000 / 180); // const res = []\n  // if (stAng > swAng) swAng += 360\n  // while (stAng < swAng) {\n  //     res.push({\n  //         x: wr * Math.cos(r(stAng)),\n  //         y: hr * Math.sin(r(stAng))\n  //     })\n  //     if (swAng - stAng < 2) {\n  //         stAng = swAng\n  //     } else {\n  //         stAng += 1\n  //     }\n  // }\n  // return res\n\n\n  return {\n    start: {\n      x: wr * Math.cos(r(stAng)),\n      y: hr * Math.sin(r(stAng))\n    },\n    end: {\n      x: wr * Math.cos(r(stAng + swAng)),\n      y: hr * Math.sin(r(stAng + swAng))\n    }\n  };\n}\n\n//# sourceURL=webpack://prst-shape-transform/./tmp/arcToPathA.js?");

/***/ }),

/***/ "./tmp/index.js":
/*!**********************!*\
  !*** ./tmp/index.js ***!
  \**********************/
/*! exports provided: roundRect, triangle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"roundRect\", function() { return roundRect; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"triangle\", function() { return triangle; });\n/* harmony import */ var _arcToPathA__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arcToPathA */ \"./tmp/arcToPathA.js\");\n/* harmony import */ var _arcToPathA__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_arcToPathA__WEBPACK_IMPORTED_MODULE_0__);\n\nconst cos = Math.cos.bind(Math);\nconst sin = Math.sin.bind(Math);\nconst abs = Math.abs.bind(Math);\nconst atan = Math.atan.bind(Math);\nconst atan2 = Math.atan2.bind(Math);\nconst max = Math.max.bind(Math);\nconst min = Math.min.bind(Math);\nconst sqrt = Math.sqrt.bind(Math);\nconst pi = Math.PI;\nfunction roundRect(w, h, adj) {\n  adj = adj || 16667;\n  const l = 0;\n  const t = 0;\n  const r = w;\n  const b = h;\n  const wd2 = w / 2; //猜的\n\n  const hd2 = h / 2; //猜的\n\n  const ss = w < h ? w : h;\n  const a = adj < 0 ? 0 : adj > 50000 ? 50000 : adj;\n  const x1 = ss * a / 100000;\n  const x2 = r + 0 - x1;\n  const y2 = b + 0 - x1;\n  const il = x1 * 29289 / 100000;\n  const ir = r + 0 - il;\n  const ib = b + 0 - il;\n  return [`M${l},${x1}${_arcToPathA__WEBPACK_IMPORTED_MODULE_0___default()(x1, x1, 10800000, 5400000, l, x1)}L${x2},${t}${_arcToPathA__WEBPACK_IMPORTED_MODULE_0___default()(x1, x1, 16200000, 5400000, x2, t)}L${r},${y2}${_arcToPathA__WEBPACK_IMPORTED_MODULE_0___default()(x1, x1, 0, 5400000, r, y2)}L${x1},${b}${_arcToPathA__WEBPACK_IMPORTED_MODULE_0___default()(x1, x1, 5400000, 5400000, x1, b)}Z`];\n}\nfunction triangle(w, h, adj) {\n  adj = adj || 50000;\n  const l = 0;\n  const t = 0;\n  const r = w;\n  const b = h;\n  const wd2 = w / 2; //猜的\n\n  const hd2 = h / 2; //猜的\n\n  const ss = w < h ? w : h;\n  const a = adj < 0 ? 0 : adj > 100000 ? 100000 : adj;\n  const x1 = w * a / 200000;\n  const x2 = w * a / 100000;\n  const x3 = x1 + wd2 - 0;\n  return [`M${l},${b}L${x2},${t}L${r},${b}Z`];\n}\n\n//# sourceURL=webpack://prst-shape-transform/./tmp/index.js?");

/***/ })

/******/ });
});