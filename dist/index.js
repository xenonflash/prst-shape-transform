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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /Users/yankechao/myproject/prst-shape-transform/src/index.js: 'return' outside of function (15:0)\\n\\n\\u001b[0m \\u001b[90m 13 | \\u001b[39m\\u001b[36mvar\\u001b[39m result \\u001b[33m=\\u001b[39m convert\\u001b[33m.\\u001b[39mxml2js(xml\\u001b[33m,\\u001b[39m options)\\u001b[33m;\\u001b[39m \\u001b[90m// or convert.xml2json(xml, options)\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 14 | \\u001b[39mfs\\u001b[33m.\\u001b[39mwriteFileSync(\\u001b[32m'./result.json'\\u001b[39m\\u001b[33m,\\u001b[39m \\u001b[33mJSON\\u001b[39m\\u001b[33m.\\u001b[39mstringify(result))\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 15 | \\u001b[39m\\u001b[36mreturn\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m    | \\u001b[39m\\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 16 | \\u001b[39m\\u001b[36mconst\\u001b[39m shapeDefs \\u001b[33m=\\u001b[39m result\\u001b[33m.\\u001b[39mpresetShapeDefinitons\\u001b[0m\\n\\u001b[0m \\u001b[90m 17 | \\u001b[39m\\u001b[36mfor\\u001b[39m (let key \\u001b[36min\\u001b[39m shapeDefs) {\\u001b[0m\\n\\u001b[0m \\u001b[90m 18 | \\u001b[39m    let res \\u001b[33m=\\u001b[39m \\u001b[32m`function ${key}(w, h, l, r, t, b`\\u001b[39m\\u001b[0m\\n    at Parser._raise (/Users/yankechao/myproject/prst-shape-transform/node_modules/@babel/parser/lib/index.js:764:17)\\n    at Parser.raiseWithData (/Users/yankechao/myproject/prst-shape-transform/node_modules/@babel/parser/lib/index.js:757:17)\\n    at Parser.raise (/Users/yankechao/myproject/prst-shape-transform/node_modules/@babel/parser/lib/index.js:751:17)\\n    at Parser.parseReturnStatement (/Users/yankechao/myproject/prst-shape-transform/node_modules/@babel/parser/lib/index.js:11692:12)\\n    at Parser.parseStatementContent (/Users/yankechao/myproject/prst-shape-transform/node_modules/@babel/parser/lib/index.js:11379:21)\\n    at Parser.parseStatement (/Users/yankechao/myproject/prst-shape-transform/node_modules/@babel/parser/lib/index.js:11331:17)\\n    at Parser.parseBlockOrModuleBlockBody (/Users/yankechao/myproject/prst-shape-transform/node_modules/@babel/parser/lib/index.js:11913:25)\\n    at Parser.parseBlockBody (/Users/yankechao/myproject/prst-shape-transform/node_modules/@babel/parser/lib/index.js:11899:10)\\n    at Parser.parseTopLevel (/Users/yankechao/myproject/prst-shape-transform/node_modules/@babel/parser/lib/index.js:11262:10)\\n    at Parser.parse (/Users/yankechao/myproject/prst-shape-transform/node_modules/@babel/parser/lib/index.js:12967:10)\\n    at parse (/Users/yankechao/myproject/prst-shape-transform/node_modules/@babel/parser/lib/index.js:13020:38)\\n    at parser (/Users/yankechao/myproject/prst-shape-transform/node_modules/@babel/core/lib/parser/index.js:54:34)\\n    at parser.next (<anonymous>)\\n    at normalizeFile (/Users/yankechao/myproject/prst-shape-transform/node_modules/@babel/core/lib/transformation/normalize-file.js:99:38)\\n    at normalizeFile.next (<anonymous>)\\n    at run (/Users/yankechao/myproject/prst-shape-transform/node_modules/@babel/core/lib/transformation/index.js:31:50)\\n    at run.next (<anonymous>)\\n    at Function.transform (/Users/yankechao/myproject/prst-shape-transform/node_modules/@babel/core/lib/transform.js:27:41)\\n    at transform.next (<anonymous>)\\n    at step (/Users/yankechao/myproject/prst-shape-transform/node_modules/gensync/index.js:254:32)\\n    at gen.next (/Users/yankechao/myproject/prst-shape-transform/node_modules/gensync/index.js:266:13)\\n    at async.call.value (/Users/yankechao/myproject/prst-shape-transform/node_modules/gensync/index.js:216:11)\\n    at errback.call (/Users/yankechao/myproject/prst-shape-transform/node_modules/gensync/index.js:184:28)\\n    at runGenerator.errback (/Users/yankechao/myproject/prst-shape-transform/node_modules/@babel/core/lib/gensync-utils/async.js:72:7)\\n    at val (/Users/yankechao/myproject/prst-shape-transform/node_modules/gensync/index.js:108:33)\\n    at step (/Users/yankechao/myproject/prst-shape-transform/node_modules/gensync/index.js:280:14)\\n    at gen.next (/Users/yankechao/myproject/prst-shape-transform/node_modules/gensync/index.js:266:13)\\n    at async.call.value (/Users/yankechao/myproject/prst-shape-transform/node_modules/gensync/index.js:216:11)\\n    at <anonymous>\");\n\n//# sourceURL=webpack://prst-shape-transform/./src/index.js?");

/***/ })

/******/ });
});