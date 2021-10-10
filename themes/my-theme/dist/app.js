/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/ViewportHeightDetector.js":
/*!******************************************!*\
  !*** ./src/js/ViewportHeightDetector.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ViewportHeightDetector)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, \"get\"); return _classApplyDescriptorGet(receiver, descriptor); }\n\nfunction _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }\n\nfunction _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, \"set\"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }\n\nfunction _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError(\"attempted to \" + action + \" private field on non-instance\"); } return privateMap.get(receiver); }\n\nfunction _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError(\"attempted to set read only private field\"); } descriptor.value = value; } }\n\nvar _viewportHeight = /*#__PURE__*/new WeakMap();\n\nvar ViewportHeightDetector = /*#__PURE__*/function () {\n  function ViewportHeightDetector(viewportHeight) {\n    _classCallCheck(this, ViewportHeightDetector);\n\n    _viewportHeight.set(this, {\n      writable: true,\n      value: void 0\n    });\n\n    _classPrivateFieldSet(this, _viewportHeight, viewportHeight);\n  }\n\n  _createClass(ViewportHeightDetector, [{\n    key: \"setViewportHeight\",\n    value: function setViewportHeight(viewportHeight) {\n      _classPrivateFieldSet(this, _viewportHeight, viewportHeight);\n    }\n  }, {\n    key: \"getViewportHeight\",\n    value: function getViewportHeight() {\n      return _classPrivateFieldGet(this, _viewportHeight);\n    }\n  }]);\n\n  return ViewportHeightDetector;\n}();\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvVmlld3BvcnRIZWlnaHREZXRlY3Rvci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQXFCQTtBQUdwQixrQ0FBWUMsY0FBWixFQUE0QjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUMzQixpREFBdUJBLGNBQXZCO0FBQ0E7Ozs7V0FFRCwyQkFBa0JBLGNBQWxCLEVBQWtDO0FBQ2pDLG1EQUF1QkEsY0FBdkI7QUFDQTs7O1dBRUQsNkJBQW9CO0FBQ25CLG1DQUFPLElBQVA7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL215LXRoZW1lLy4vc3JjL2pzL1ZpZXdwb3J0SGVpZ2h0RGV0ZWN0b3IuanM/ZmY2MiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBWaWV3cG9ydEhlaWdodERldGVjdG9yIHtcblx0I3ZpZXdwb3J0SGVpZ2h0O1xuXG5cdGNvbnN0cnVjdG9yKHZpZXdwb3J0SGVpZ2h0KSB7XG5cdFx0dGhpcy4jdmlld3BvcnRIZWlnaHQgPSB2aWV3cG9ydEhlaWdodDtcblx0fVxuXG5cdHNldFZpZXdwb3J0SGVpZ2h0KHZpZXdwb3J0SGVpZ2h0KSB7XG5cdFx0dGhpcy4jdmlld3BvcnRIZWlnaHQgPSB2aWV3cG9ydEhlaWdodDtcblx0fVxuXG5cdGdldFZpZXdwb3J0SGVpZ2h0KCkge1xuXHRcdHJldHVybiB0aGlzLiN2aWV3cG9ydEhlaWdodDtcblx0fVxufVxuIl0sIm5hbWVzIjpbIlZpZXdwb3J0SGVpZ2h0RGV0ZWN0b3IiLCJ2aWV3cG9ydEhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/ViewportHeightDetector.js\n");

/***/ }),

/***/ "./src/js/ViewportWidthDetector.js":
/*!*****************************************!*\
  !*** ./src/js/ViewportWidthDetector.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ViewportWidthDetector)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, \"get\"); return _classApplyDescriptorGet(receiver, descriptor); }\n\nfunction _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }\n\nfunction _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, \"set\"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }\n\nfunction _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError(\"attempted to \" + action + \" private field on non-instance\"); } return privateMap.get(receiver); }\n\nfunction _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError(\"attempted to set read only private field\"); } descriptor.value = value; } }\n\nvar _viewportWidth = /*#__PURE__*/new WeakMap();\n\nvar ViewportWidthDetector = /*#__PURE__*/function () {\n  function ViewportWidthDetector(viewportWidth) {\n    _classCallCheck(this, ViewportWidthDetector);\n\n    _viewportWidth.set(this, {\n      writable: true,\n      value: void 0\n    });\n\n    _classPrivateFieldSet(this, _viewportWidth, viewportWidth);\n  }\n\n  _createClass(ViewportWidthDetector, [{\n    key: \"setViewportWidth\",\n    value: function setViewportWidth(viewportWidth) {\n      _classPrivateFieldSet(this, _viewportWidth, viewportWidth);\n    }\n  }, {\n    key: \"getViewportWidth\",\n    value: function getViewportWidth() {\n      return _classPrivateFieldGet(this, _viewportWidth);\n    }\n  }]);\n\n  return ViewportWidthDetector;\n}();\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvVmlld3BvcnRXaWR0aERldGVjdG9yLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFBcUJBO0FBR3BCLGlDQUFZQyxhQUFaLEVBQTJCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQzFCLGdEQUFzQkEsYUFBdEI7QUFDQTs7OztXQUVELDBCQUFpQkEsYUFBakIsRUFBZ0M7QUFDL0Isa0RBQXNCQSxhQUF0QjtBQUNBOzs7V0FFRCw0QkFBbUI7QUFDbEIsbUNBQU8sSUFBUDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktdGhlbWUvLi9zcmMvanMvVmlld3BvcnRXaWR0aERldGVjdG9yLmpzP2ExMWEiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlld3BvcnRXaWR0aERldGVjdG9yIHtcblx0I3ZpZXdwb3J0V2lkdGg7XG5cblx0Y29uc3RydWN0b3Iodmlld3BvcnRXaWR0aCkge1xuXHRcdHRoaXMuI3ZpZXdwb3J0V2lkdGggPSB2aWV3cG9ydFdpZHRoO1xuXHR9XG5cblx0c2V0Vmlld3BvcnRXaWR0aCh2aWV3cG9ydFdpZHRoKSB7XG5cdFx0dGhpcy4jdmlld3BvcnRXaWR0aCA9IHZpZXdwb3J0V2lkdGg7XG5cdH1cblxuXHRnZXRWaWV3cG9ydFdpZHRoKCkge1xuXHRcdHJldHVybiB0aGlzLiN2aWV3cG9ydFdpZHRoO1xuXHR9XG59XG4iXSwibmFtZXMiOlsiVmlld3BvcnRXaWR0aERldGVjdG9yIiwidmlld3BvcnRXaWR0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/ViewportWidthDetector.js\n");

/***/ }),

/***/ "./src/js/VueNav.js":
/*!**************************!*\
  !*** ./src/js/VueNav.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ViewportWidthDetector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ViewportWidthDetector */ \"./src/js/ViewportWidthDetector.js\");\n/* harmony import */ var _navIntersectionObserver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navIntersectionObserver */ \"./src/js/navIntersectionObserver.js\");\n\n\nvar viewportWidthDetector = new _ViewportWidthDetector__WEBPACK_IMPORTED_MODULE_0__.default(window.innerWidth);\nvar VueNav = new Vue({\n  el: \"#my-vue-nav\",\n  data: function data() {\n    return {\n      isNavMenuActive: false,\n      isAtTopOfPage: true,\n      windowWidth: null\n    };\n  },\n  watch: {\n    windowWidth: function windowWidth() {\n      var logo = document.querySelector(\".my-nav__logo\");\n\n      if (this.windowWidth >= 768 && this.isAtTopOfPage) {\n        this.isNavMenuActive = false;\n        logo.setAttribute(\"src\", \"_resources/themes/my-theme/images/pet-logo_white.png\");\n        logo.style.height = \"100px\";\n      } else if (this.windowWidth <= 768 && this.isAtTopOfPage) {\n        logo.setAttribute(\"src\", \"_resources/themes/my-theme/images/pet-logo_white.png\");\n        logo.style.height = \"100px\";\n      } else {\n        logo.setAttribute(\"src\", \"_resources/themes/my-theme/images/pet-logo_black.png\");\n        logo.style.height = \"70px\";\n      }\n    },\n    isAtTopOfPage: function isAtTopOfPage() {\n      var logo = document.querySelector(\".my-nav__logo\");\n\n      if (this.windowWidth >= 768) {\n        this.isAtTopOfPage ? (logo.setAttribute(\"src\", \"_resources/themes/my-theme/images/pet-logo_white.png\"), logo.style.height = \"100px\") : (logo.setAttribute(\"src\", \"_resources/themes/my-theme/images/pet-logo_black.png\"), logo.style.height = \"70px\");\n      } else {\n        logo.setAttribute(\"src\", \"_resources/themes/my-theme/images/pet-logo_white.png\");\n        logo.style.height = \"100px\";\n      }\n    }\n  },\n  computed: {\n    scrolledNavMenuItemStyles: function scrolledNavMenuItemStyles() {\n      if (this.windowWidth >= 768) {\n        return \"\\n\\t\\t\\t\\t\\tcolor: \".concat(this.isAtTopOfPage && this.windowWidth >= 768 ? \"white\" : \"white\", \";\\n\\t\\t\\t\\t\");\n      }\n    },\n    scrolledNavStyles: function scrolledNavStyles() {\n      if (this.windowWidth >= 768) {\n        return \"\\n\\t\\t\\t\\t\\tbackground-color: \".concat(this.isAtTopOfPage ? \"transparent\" : \"white\", \";\\n\\t\\t\\t\\t\\theight: \").concat(this.isAtTopOfPage ? \"6.3rem\" : \"calc(6.3rem / 1.7)\", \";\\n\\t\\t\\t\\t\\tbox-shadow: \").concat(this.isAtTopOfPage ? \"none\" : \"rgba(0, 0, 0, 0.14) 0px 3px 8px;\", \";\\n\\t\\t\\t\\t\");\n      }\n    },\n    activeNavMenuStyles: function activeNavMenuStyles() {\n      return \"\\n\\t\\t\\t\\tmax-height: \".concat(this.isNavMenuActive && this.windowWidth <= 768 ? \"300px\" : \"0px\", \";\\n\\t\\t\\t\");\n    },\n    activeHamburgerIconStyles: function activeHamburgerIconStyles() {\n      return \"\\n\\t\\t\\t\\topacity: \".concat(this.isNavMenuActive && this.windowWidth <= 768 ? \"0\" : \"1\", \";\\n\\t\\t\\t\\ttransform: \").concat(this.isNavMenuActive && this.windowWidth <= 768 ? \"rotate(90deg)\" : \"rotate(0deg)\", \";\\n\\t\\t\\t\");\n    },\n    activeTimesIconStyles: function activeTimesIconStyles() {\n      return \"\\n\\t\\t\\t\\topacity: \".concat(this.isNavMenuActive && this.windowWidth <= 768 ? \"1\" : \"0\", \";\\n\\t\\t\\t\\ttransform: \").concat(this.isNavMenuActive && this.windowWidth <= 768 ? \"rotate(90deg)\" : \"rotate(0deg)\", \";\\n\\t\\t\\t\");\n    }\n  },\n  methods: {\n    handleWindowResize: function handleWindowResize() {\n      viewportWidthDetector.setViewportWidth(window.innerWidth);\n      this.windowWidth = viewportWidthDetector.getViewportWidth();\n    },\n    handleHamburgerClick: function handleHamburgerClick() {\n      this.isNavMenuActive = !this.isNavMenuActive;\n    }\n  },\n  created: function created() {\n    var _this = this;\n\n    //Handle Viewport Width\n    viewportWidthDetector.setViewportWidth(window.innerWidth);\n    this.windowWidth = viewportWidthDetector.getViewportWidth();\n    window.addEventListener(\"resize\", this.handleWindowResize); //Handle Viewport Height\n\n    var heroSlogan = document.querySelector(\".hero__slogan\");\n    var options = {\n      rootMargin: \"-135px\"\n    };\n    (0,_navIntersectionObserver__WEBPACK_IMPORTED_MODULE_1__.default)().create(heroSlogan, function (entry) {\n      entry.isIntersecting ? _this.isAtTopOfPage = true : _this.isAtTopOfPage = false;\n    }, options);\n  },\n  beforeDestroy: function beforeDestroy() {\n    window.removeEventListener(\"resize\", this.handleWindowResize);\n  }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VueNav);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDLEtBQUtMLGtCQUF2QyxFQVBTLENBU1Q7O0FBRUEsUUFBTU0sVUFBVSxHQUFHbEIsUUFBUSxDQUFDQyxhQUFULENBQXVCLGVBQXZCLENBQW5CO0FBRUEsUUFBTWtCLE9BQU8sR0FBRztBQUNmQyxNQUFBQSxVQUFVLEVBQUU7QUFERyxLQUFoQjtBQUlBakMsSUFBQUEsaUVBQXVCLEdBQUdrQyxNQUExQixDQUNDSCxVQURELEVBRUMsVUFBQUksS0FBSyxFQUFJO0FBQ1JBLE1BQUFBLEtBQUssQ0FBQ0MsY0FBTixHQUF3QixLQUFJLENBQUMzQixhQUFMLEdBQXFCLElBQTdDLEdBQXNELEtBQUksQ0FBQ0EsYUFBTCxHQUFxQixLQUEzRTtBQUNBLEtBSkYsRUFLQ3VCLE9BTEQ7QUFPQSxHQW5IcUI7QUFvSHRCSyxFQUFBQSxhQXBIc0IsMkJBb0hOO0FBQ2ZuQyxJQUFBQSxNQUFNLENBQUNvQyxtQkFBUCxDQUEyQixRQUEzQixFQUFxQyxLQUFLYixrQkFBMUM7QUFDQTtBQXRIcUIsQ0FBUixDQUFmO0FBeUhBLGlFQUFlckIsTUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL215LXRoZW1lLy4vc3JjL2pzL1Z1ZU5hdi5qcz9kN2Q5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBWaWV3cG9ydFdpZHRoRGV0ZWN0b3IgZnJvbSBcIi4vVmlld3BvcnRXaWR0aERldGVjdG9yXCI7XG5pbXBvcnQgbmF2SW50ZXJzZWN0aW9uT2JzZXJ2ZXIgZnJvbSBcIi4vbmF2SW50ZXJzZWN0aW9uT2JzZXJ2ZXJcIjtcblxuY29uc3Qgdmlld3BvcnRXaWR0aERldGVjdG9yID0gbmV3IFZpZXdwb3J0V2lkdGhEZXRlY3Rvcih3aW5kb3cuaW5uZXJXaWR0aCk7XG5cbmNvbnN0IFZ1ZU5hdiA9IG5ldyBWdWUoe1xuXHRlbDogXCIjbXktdnVlLW5hdlwiLFxuXHRkYXRhKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRpc05hdk1lbnVBY3RpdmU6IGZhbHNlLFxuXHRcdFx0aXNBdFRvcE9mUGFnZTogdHJ1ZSxcblx0XHRcdHdpbmRvd1dpZHRoOiBudWxsLFxuXHRcdH07XG5cdH0sXG5cdHdhdGNoOiB7XG5cdFx0d2luZG93V2lkdGg6IGZ1bmN0aW9uICgpIHtcblx0XHRcdGNvbnN0IGxvZ28gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm15LW5hdl9fbG9nb1wiKTtcblxuXHRcdFx0aWYgKHRoaXMud2luZG93V2lkdGggPj0gNzY4ICYmIHRoaXMuaXNBdFRvcE9mUGFnZSkge1xuXHRcdFx0XHR0aGlzLmlzTmF2TWVudUFjdGl2ZSA9IGZhbHNlO1xuXHRcdFx0XHRsb2dvLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcIl9yZXNvdXJjZXMvdGhlbWVzL215LXRoZW1lL2ltYWdlcy9wZXQtbG9nb193aGl0ZS5wbmdcIik7XG5cdFx0XHRcdGxvZ28uc3R5bGUuaGVpZ2h0ID0gXCIxMDBweFwiO1xuXHRcdFx0fSBlbHNlIGlmICh0aGlzLndpbmRvd1dpZHRoIDw9IDc2OCAmJiB0aGlzLmlzQXRUb3BPZlBhZ2UpIHtcblx0XHRcdFx0bG9nby5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCJfcmVzb3VyY2VzL3RoZW1lcy9teS10aGVtZS9pbWFnZXMvcGV0LWxvZ29fd2hpdGUucG5nXCIpO1xuXHRcdFx0XHRsb2dvLnN0eWxlLmhlaWdodCA9IFwiMTAwcHhcIjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGxvZ28uc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiX3Jlc291cmNlcy90aGVtZXMvbXktdGhlbWUvaW1hZ2VzL3BldC1sb2dvX2JsYWNrLnBuZ1wiKTtcblx0XHRcdFx0bG9nby5zdHlsZS5oZWlnaHQgPSBcIjcwcHhcIjtcblx0XHRcdH1cblx0XHR9LFxuXHRcdGlzQXRUb3BPZlBhZ2U6IGZ1bmN0aW9uICgpIHtcblx0XHRcdGNvbnN0IGxvZ28gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm15LW5hdl9fbG9nb1wiKTtcblxuXHRcdFx0aWYgKHRoaXMud2luZG93V2lkdGggPj0gNzY4KSB7XG5cdFx0XHRcdHRoaXMuaXNBdFRvcE9mUGFnZVxuXHRcdFx0XHRcdD8gKGxvZ28uc2V0QXR0cmlidXRlKFxuXHRcdFx0XHRcdFx0XHRcInNyY1wiLFxuXHRcdFx0XHRcdFx0XHRcIl9yZXNvdXJjZXMvdGhlbWVzL215LXRoZW1lL2ltYWdlcy9wZXQtbG9nb193aGl0ZS5wbmdcIlxuXHRcdFx0XHRcdCAgKSxcblx0XHRcdFx0XHQgIChsb2dvLnN0eWxlLmhlaWdodCA9IFwiMTAwcHhcIikpXG5cdFx0XHRcdFx0OiAobG9nby5zZXRBdHRyaWJ1dGUoXG5cdFx0XHRcdFx0XHRcdFwic3JjXCIsXG5cdFx0XHRcdFx0XHRcdFwiX3Jlc291cmNlcy90aGVtZXMvbXktdGhlbWUvaW1hZ2VzL3BldC1sb2dvX2JsYWNrLnBuZ1wiXG5cdFx0XHRcdFx0ICApLFxuXHRcdFx0XHRcdCAgKGxvZ28uc3R5bGUuaGVpZ2h0ID0gXCI3MHB4XCIpKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGxvZ28uc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiX3Jlc291cmNlcy90aGVtZXMvbXktdGhlbWUvaW1hZ2VzL3BldC1sb2dvX3doaXRlLnBuZ1wiKTtcblx0XHRcdFx0bG9nby5zdHlsZS5oZWlnaHQgPSBcIjEwMHB4XCI7XG5cdFx0XHR9XG5cdFx0fSxcblx0fSxcblx0Y29tcHV0ZWQ6IHtcblx0XHRzY3JvbGxlZE5hdk1lbnVJdGVtU3R5bGVzKCkge1xuXHRcdFx0aWYgKHRoaXMud2luZG93V2lkdGggPj0gNzY4KSB7XG5cdFx0XHRcdHJldHVybiBgXG5cdFx0XHRcdFx0Y29sb3I6ICR7dGhpcy5pc0F0VG9wT2ZQYWdlICYmIHRoaXMud2luZG93V2lkdGggPj0gNzY4ID8gXCJ3aGl0ZVwiIDogXCJ3aGl0ZVwifTtcblx0XHRcdFx0YDtcblx0XHRcdH1cblx0XHR9LFxuXHRcdHNjcm9sbGVkTmF2U3R5bGVzKCkge1xuXHRcdFx0aWYgKHRoaXMud2luZG93V2lkdGggPj0gNzY4KSB7XG5cdFx0XHRcdHJldHVybiBgXG5cdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogJHt0aGlzLmlzQXRUb3BPZlBhZ2UgPyBcInRyYW5zcGFyZW50XCIgOiBcIndoaXRlXCJ9O1xuXHRcdFx0XHRcdGhlaWdodDogJHt0aGlzLmlzQXRUb3BPZlBhZ2UgPyBcIjYuM3JlbVwiIDogXCJjYWxjKDYuM3JlbSAvIDEuNylcIn07XG5cdFx0XHRcdFx0Ym94LXNoYWRvdzogJHt0aGlzLmlzQXRUb3BPZlBhZ2UgPyBcIm5vbmVcIiA6IFwicmdiYSgwLCAwLCAwLCAwLjE0KSAwcHggM3B4IDhweDtcIn07XG5cdFx0XHRcdGA7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRhY3RpdmVOYXZNZW51U3R5bGVzKCkge1xuXHRcdFx0cmV0dXJuIGBcblx0XHRcdFx0bWF4LWhlaWdodDogJHt0aGlzLmlzTmF2TWVudUFjdGl2ZSAmJiB0aGlzLndpbmRvd1dpZHRoIDw9IDc2OCA/IFwiMzAwcHhcIiA6IFwiMHB4XCJ9O1xuXHRcdFx0YDtcblx0XHR9LFxuXHRcdGFjdGl2ZUhhbWJ1cmdlckljb25TdHlsZXMoKSB7XG5cdFx0XHRyZXR1cm4gYFxuXHRcdFx0XHRvcGFjaXR5OiAke3RoaXMuaXNOYXZNZW51QWN0aXZlICYmIHRoaXMud2luZG93V2lkdGggPD0gNzY4ID8gXCIwXCIgOiBcIjFcIn07XG5cdFx0XHRcdHRyYW5zZm9ybTogJHt0aGlzLmlzTmF2TWVudUFjdGl2ZSAmJiB0aGlzLndpbmRvd1dpZHRoIDw9IDc2OCA/IFwicm90YXRlKDkwZGVnKVwiIDogXCJyb3RhdGUoMGRlZylcIn07XG5cdFx0XHRgO1xuXHRcdH0sXG5cdFx0YWN0aXZlVGltZXNJY29uU3R5bGVzKCkge1xuXHRcdFx0cmV0dXJuIGBcblx0XHRcdFx0b3BhY2l0eTogJHt0aGlzLmlzTmF2TWVudUFjdGl2ZSAmJiB0aGlzLndpbmRvd1dpZHRoIDw9IDc2OCA/IFwiMVwiIDogXCIwXCJ9O1xuXHRcdFx0XHR0cmFuc2Zvcm06ICR7dGhpcy5pc05hdk1lbnVBY3RpdmUgJiYgdGhpcy53aW5kb3dXaWR0aCA8PSA3NjggPyBcInJvdGF0ZSg5MGRlZylcIiA6IFwicm90YXRlKDBkZWcpXCJ9O1xuXHRcdFx0YDtcblx0XHR9LFxuXHR9LFxuXHRtZXRob2RzOiB7XG5cdFx0aGFuZGxlV2luZG93UmVzaXplKCkge1xuXHRcdFx0dmlld3BvcnRXaWR0aERldGVjdG9yLnNldFZpZXdwb3J0V2lkdGgod2luZG93LmlubmVyV2lkdGgpO1xuXG5cdFx0XHR0aGlzLndpbmRvd1dpZHRoID0gdmlld3BvcnRXaWR0aERldGVjdG9yLmdldFZpZXdwb3J0V2lkdGgoKTtcblx0XHR9LFxuXHRcdGhhbmRsZUhhbWJ1cmdlckNsaWNrKCkge1xuXHRcdFx0dGhpcy5pc05hdk1lbnVBY3RpdmUgPSAhdGhpcy5pc05hdk1lbnVBY3RpdmU7XG5cdFx0fSxcblx0fSxcblx0Y3JlYXRlZCgpIHtcblx0XHQvL0hhbmRsZSBWaWV3cG9ydCBXaWR0aFxuXG5cdFx0dmlld3BvcnRXaWR0aERldGVjdG9yLnNldFZpZXdwb3J0V2lkdGgod2luZG93LmlubmVyV2lkdGgpO1xuXG5cdFx0dGhpcy53aW5kb3dXaWR0aCA9IHZpZXdwb3J0V2lkdGhEZXRlY3Rvci5nZXRWaWV3cG9ydFdpZHRoKCk7XG5cblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLmhhbmRsZVdpbmRvd1Jlc2l6ZSk7XG5cblx0XHQvL0hhbmRsZSBWaWV3cG9ydCBIZWlnaHRcblxuXHRcdGNvbnN0IGhlcm9TbG9nYW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlcm9fX3Nsb2dhblwiKTtcblxuXHRcdGNvbnN0IG9wdGlvbnMgPSB7XG5cdFx0XHRyb290TWFyZ2luOiBcIi0xMzVweFwiLFxuXHRcdH07XG5cblx0XHRuYXZJbnRlcnNlY3Rpb25PYnNlcnZlcigpLmNyZWF0ZShcblx0XHRcdGhlcm9TbG9nYW4sXG5cdFx0XHRlbnRyeSA9PiB7XG5cdFx0XHRcdGVudHJ5LmlzSW50ZXJzZWN0aW5nID8gKHRoaXMuaXNBdFRvcE9mUGFnZSA9IHRydWUpIDogKHRoaXMuaXNBdFRvcE9mUGFnZSA9IGZhbHNlKTtcblx0XHRcdH0sXG5cdFx0XHRvcHRpb25zXG5cdFx0KTtcblx0fSxcblx0YmVmb3JlRGVzdHJveSgpIHtcblx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLmhhbmRsZVdpbmRvd1Jlc2l6ZSk7XG5cdH0sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgVnVlTmF2O1xuIl0sIm5hbWVzIjpbIlZpZXdwb3J0V2lkdGhEZXRlY3RvciIsIm5hdkludGVyc2VjdGlvbk9ic2VydmVyIiwidmlld3BvcnRXaWR0aERldGVjdG9yIiwid2luZG93IiwiaW5uZXJXaWR0aCIsIlZ1ZU5hdiIsIlZ1ZSIsImVsIiwiZGF0YSIsImlzTmF2TWVudUFjdGl2ZSIsImlzQXRUb3BPZlBhZ2UiLCJ3aW5kb3dXaWR0aCIsIndhdGNoIiwibG9nbyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNldEF0dHJpYnV0ZSIsInN0eWxlIiwiaGVpZ2h0IiwiY29tcHV0ZWQiLCJzY3JvbGxlZE5hdk1lbnVJdGVtU3R5bGVzIiwic2Nyb2xsZWROYXZTdHlsZXMiLCJhY3RpdmVOYXZNZW51U3R5bGVzIiwiYWN0aXZlSGFtYnVyZ2VySWNvblN0eWxlcyIsImFjdGl2ZVRpbWVzSWNvblN0eWxlcyIsIm1ldGhvZHMiLCJoYW5kbGVXaW5kb3dSZXNpemUiLCJzZXRWaWV3cG9ydFdpZHRoIiwiZ2V0Vmlld3BvcnRXaWR0aCIsImhhbmRsZUhhbWJ1cmdlckNsaWNrIiwiY3JlYXRlZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJoZXJvU2xvZ2FuIiwib3B0aW9ucyIsInJvb3RNYXJnaW4iLCJjcmVhdGUiLCJlbnRyeSIsImlzSW50ZXJzZWN0aW5nIiwiYmVmb3JlRGVzdHJveSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/VueNav.js\n");

/***/ }),

/***/ "./src/js/VueParallaxComponent.js":
/*!****************************************!*\
  !*** ./src/js/VueParallaxComponent.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _intersectionObserver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./intersectionObserver */ \"./src/js/intersectionObserver.js\");\n/* harmony import */ var _ViewportHeightDetector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ViewportHeightDetector */ \"./src/js/ViewportHeightDetector.js\");\n\n\nvar parallaxHeightDetector = new _ViewportHeightDetector__WEBPACK_IMPORTED_MODULE_1__.default();\nvar VueParallaxComponent = new Vue({\n  el: \"#vue-parallax-component\",\n  data: function data() {\n    return {\n      parallaxComponentHeight: 0\n    };\n  },\n  methods: {\n    handleScroll: function handleScroll() {\n      var parallaxComponent = document.querySelector(\".parallax-component\");\n      var parallaxComponentBackground = document.querySelector(\".parallax-component__background\");\n      parallaxHeightDetector.setViewportHeight(parallaxComponent.getBoundingClientRect().y);\n      this.parallaxComponentHeight = parallaxHeightDetector.getViewportHeight();\n      parallaxComponentBackground.style.transform = \"translateY(\".concat((this.parallaxComponentHeight - parallaxComponent.offsetHeight * 2) / 5, \"px)\");\n    }\n  },\n  mounted: function mounted() {\n    var _this = this;\n\n    var parallaxComponent = document.querySelector(\".parallax-component\");\n    var options = {\n      rootMargin: \"70px\"\n    };\n    (0,_intersectionObserver__WEBPACK_IMPORTED_MODULE_0__.default)().create(parallaxComponent, function (entry) {\n      entry.isIntersecting ? window.addEventListener(\"scroll\", _this.handleScroll) : window.removeEventListener(\"scroll\", _this.handleScroll);\n    }, options);\n  },\n  beforeDestroy: function beforeDestroy() {\n    window.removeEventListener(\"scroll\", this.handleScroll);\n  }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VueParallaxComponent);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvVnVlUGFyYWxsYXhDb21wb25lbnQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUVBLElBQU1FLHNCQUFzQixHQUFHLElBQUlELDREQUFKLEVBQS9CO0FBRUEsSUFBTUUsb0JBQW9CLEdBQUcsSUFBSUMsR0FBSixDQUFRO0FBQ3BDQyxFQUFBQSxFQUFFLEVBQUUseUJBRGdDO0FBRXBDQyxFQUFBQSxJQUZvQyxrQkFFN0I7QUFDTixXQUFPO0FBQ05DLE1BQUFBLHVCQUF1QixFQUFFO0FBRG5CLEtBQVA7QUFHQSxHQU5tQztBQVFwQ0MsRUFBQUEsT0FBTyxFQUFFO0FBQ1JDLElBQUFBLFlBRFEsMEJBQ087QUFDZCxVQUFNQyxpQkFBaUIsR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLHFCQUF2QixDQUExQjtBQUNBLFVBQU1DLDJCQUEyQixHQUFHRixRQUFRLENBQUNDLGFBQVQsQ0FDbkMsaUNBRG1DLENBQXBDO0FBSUFWLE1BQUFBLHNCQUFzQixDQUFDWSxpQkFBdkIsQ0FBeUNKLGlCQUFpQixDQUFDSyxxQkFBbEIsR0FBMENDLENBQW5GO0FBRUEsV0FBS1QsdUJBQUwsR0FBK0JMLHNCQUFzQixDQUFDZSxpQkFBdkIsRUFBL0I7QUFFQUosTUFBQUEsMkJBQTJCLENBQUNLLEtBQTVCLENBQWtDQyxTQUFsQyx3QkFDQyxDQUFDLEtBQUtaLHVCQUFMLEdBQStCRyxpQkFBaUIsQ0FBQ1UsWUFBbEIsR0FBaUMsQ0FBakUsSUFBc0UsQ0FEdkU7QUFHQTtBQWRPLEdBUjJCO0FBd0JwQ0MsRUFBQUEsT0F4Qm9DLHFCQXdCMUI7QUFBQTs7QUFDVCxRQUFNWCxpQkFBaUIsR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLHFCQUF2QixDQUExQjtBQUVBLFFBQU1VLE9BQU8sR0FBRztBQUNmQyxNQUFBQSxVQUFVLEVBQUU7QUFERyxLQUFoQjtBQUlBdkIsSUFBQUEsOERBQW9CLEdBQUd3QixNQUF2QixDQUNDZCxpQkFERCxFQUVDLFVBQUFlLEtBQUssRUFBSTtBQUNSQSxNQUFBQSxLQUFLLENBQUNDLGNBQU4sR0FDR0MsTUFBTSxDQUFDQyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQyxLQUFJLENBQUNuQixZQUF2QyxDQURILEdBRUdrQixNQUFNLENBQUNFLG1CQUFQLENBQTJCLFFBQTNCLEVBQXFDLEtBQUksQ0FBQ3BCLFlBQTFDLENBRkg7QUFHQSxLQU5GLEVBT0NhLE9BUEQ7QUFTQSxHQXhDbUM7QUF5Q3BDUSxFQUFBQSxhQXpDb0MsMkJBeUNwQjtBQUNmSCxJQUFBQSxNQUFNLENBQUNFLG1CQUFQLENBQTJCLFFBQTNCLEVBQXFDLEtBQUtwQixZQUExQztBQUNBO0FBM0NtQyxDQUFSLENBQTdCO0FBOENBLGlFQUFlTixvQkFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL215LXRoZW1lLy4vc3JjL2pzL1Z1ZVBhcmFsbGF4Q29tcG9uZW50LmpzPzAwZmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGludGVyc2VjdGlvbk9ic2VydmVyIGZyb20gXCIuL2ludGVyc2VjdGlvbk9ic2VydmVyXCI7XG5pbXBvcnQgVmlld3BvcnRIZWlnaHREZXRlY3RvciBmcm9tIFwiLi9WaWV3cG9ydEhlaWdodERldGVjdG9yXCI7XG5cbmNvbnN0IHBhcmFsbGF4SGVpZ2h0RGV0ZWN0b3IgPSBuZXcgVmlld3BvcnRIZWlnaHREZXRlY3RvcigpO1xuXG5jb25zdCBWdWVQYXJhbGxheENvbXBvbmVudCA9IG5ldyBWdWUoe1xuXHRlbDogXCIjdnVlLXBhcmFsbGF4LWNvbXBvbmVudFwiLFxuXHRkYXRhKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRwYXJhbGxheENvbXBvbmVudEhlaWdodDogMCxcblx0XHR9O1xuXHR9LFxuXG5cdG1ldGhvZHM6IHtcblx0XHRoYW5kbGVTY3JvbGwoKSB7XG5cdFx0XHRjb25zdCBwYXJhbGxheENvbXBvbmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGFyYWxsYXgtY29tcG9uZW50XCIpO1xuXHRcdFx0Y29uc3QgcGFyYWxsYXhDb21wb25lbnRCYWNrZ3JvdW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihcblx0XHRcdFx0XCIucGFyYWxsYXgtY29tcG9uZW50X19iYWNrZ3JvdW5kXCJcblx0XHRcdCk7XG5cblx0XHRcdHBhcmFsbGF4SGVpZ2h0RGV0ZWN0b3Iuc2V0Vmlld3BvcnRIZWlnaHQocGFyYWxsYXhDb21wb25lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkueSk7XG5cblx0XHRcdHRoaXMucGFyYWxsYXhDb21wb25lbnRIZWlnaHQgPSBwYXJhbGxheEhlaWdodERldGVjdG9yLmdldFZpZXdwb3J0SGVpZ2h0KCk7XG5cblx0XHRcdHBhcmFsbGF4Q29tcG9uZW50QmFja2dyb3VuZC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWSgke1xuXHRcdFx0XHQodGhpcy5wYXJhbGxheENvbXBvbmVudEhlaWdodCAtIHBhcmFsbGF4Q29tcG9uZW50Lm9mZnNldEhlaWdodCAqIDIpIC8gNVxuXHRcdFx0fXB4KWA7XG5cdFx0fSxcblx0fSxcblx0bW91bnRlZCgpIHtcblx0XHRjb25zdCBwYXJhbGxheENvbXBvbmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGFyYWxsYXgtY29tcG9uZW50XCIpO1xuXG5cdFx0Y29uc3Qgb3B0aW9ucyA9IHtcblx0XHRcdHJvb3RNYXJnaW46IFwiNzBweFwiLFxuXHRcdH07XG5cblx0XHRpbnRlcnNlY3Rpb25PYnNlcnZlcigpLmNyZWF0ZShcblx0XHRcdHBhcmFsbGF4Q29tcG9uZW50LFxuXHRcdFx0ZW50cnkgPT4ge1xuXHRcdFx0XHRlbnRyeS5pc0ludGVyc2VjdGluZ1xuXHRcdFx0XHRcdD8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgdGhpcy5oYW5kbGVTY3JvbGwpXG5cdFx0XHRcdFx0OiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCB0aGlzLmhhbmRsZVNjcm9sbCk7XG5cdFx0XHR9LFxuXHRcdFx0b3B0aW9uc1xuXHRcdCk7XG5cdH0sXG5cdGJlZm9yZURlc3Ryb3koKSB7XG5cdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgdGhpcy5oYW5kbGVTY3JvbGwpO1xuXHR9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IFZ1ZVBhcmFsbGF4Q29tcG9uZW50O1xuIl0sIm5hbWVzIjpbImludGVyc2VjdGlvbk9ic2VydmVyIiwiVmlld3BvcnRIZWlnaHREZXRlY3RvciIsInBhcmFsbGF4SGVpZ2h0RGV0ZWN0b3IiLCJWdWVQYXJhbGxheENvbXBvbmVudCIsIlZ1ZSIsImVsIiwiZGF0YSIsInBhcmFsbGF4Q29tcG9uZW50SGVpZ2h0IiwibWV0aG9kcyIsImhhbmRsZVNjcm9sbCIsInBhcmFsbGF4Q29tcG9uZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicGFyYWxsYXhDb21wb25lbnRCYWNrZ3JvdW5kIiwic2V0Vmlld3BvcnRIZWlnaHQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ5IiwiZ2V0Vmlld3BvcnRIZWlnaHQiLCJzdHlsZSIsInRyYW5zZm9ybSIsIm9mZnNldEhlaWdodCIsIm1vdW50ZWQiLCJvcHRpb25zIiwicm9vdE1hcmdpbiIsImNyZWF0ZSIsImVudHJ5IiwiaXNJbnRlcnNlY3RpbmciLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImJlZm9yZURlc3Ryb3kiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/VueParallaxComponent.js\n");

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _VueNav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VueNav */ \"./src/js/VueNav.js\");\n/* harmony import */ var _VueParallaxComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VueParallaxComponent */ \"./src/js/VueParallaxComponent.js\");\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7OztBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktdGhlbWUvLi9zcmMvanMvYXBwLmpzPzkwZTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF9WdWVOYXYgZnJvbSBcIi4vVnVlTmF2XCI7XG5pbXBvcnQgX1Z1ZVBhcmFsbGF4Q29tcG9uZW50IGZyb20gXCIuL1Z1ZVBhcmFsbGF4Q29tcG9uZW50XCI7XG4iXSwibmFtZXMiOlsiX1Z1ZU5hdiIsIl9WdWVQYXJhbGxheENvbXBvbmVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/app.js\n");

/***/ }),

/***/ "./src/js/intersectionObserver.js":
/*!****************************************!*\
  !*** ./src/js/intersectionObserver.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar intersectionObserver = function intersectionObserver() {\n  return {\n    create: function create(target, cb) {\n      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n      if (!target) return null;\n      var io = new IntersectionObserver(function (entries, observer) {\n        entries.forEach(function (entry) {\n          cb(entry);\n        });\n      }, options);\n      io.observe(target);\n    }\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (intersectionObserver);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvaW50ZXJzZWN0aW9uT2JzZXJ2ZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLElBQU1BLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUI7QUFBQSxTQUFPO0FBQ25DQyxJQUFBQSxNQURtQyxrQkFDNUJDLE1BRDRCLEVBQ3BCQyxFQURvQixFQUNGO0FBQUEsVUFBZEMsT0FBYyx1RUFBSixFQUFJO0FBQ2hDLFVBQUksQ0FBQ0YsTUFBTCxFQUFhLE9BQU8sSUFBUDtBQUViLFVBQU1HLEVBQUUsR0FBRyxJQUFJQyxvQkFBSixDQUF5QixVQUFDQyxPQUFELEVBQVVDLFFBQVYsRUFBdUI7QUFDMURELFFBQUFBLE9BQU8sQ0FBQ0UsT0FBUixDQUFnQixVQUFBQyxLQUFLLEVBQUk7QUFDeEJQLFVBQUFBLEVBQUUsQ0FBQ08sS0FBRCxDQUFGO0FBQ0EsU0FGRDtBQUdBLE9BSlUsRUFJUk4sT0FKUSxDQUFYO0FBTUFDLE1BQUFBLEVBQUUsQ0FBQ00sT0FBSCxDQUFXVCxNQUFYO0FBQ0E7QUFYa0MsR0FBUDtBQUFBLENBQTdCOztBQWNBLGlFQUFlRixvQkFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL215LXRoZW1lLy4vc3JjL2pzL2ludGVyc2VjdGlvbk9ic2VydmVyLmpzPzdiNTkiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgaW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPSAoKSA9PiAoe1xuXHRjcmVhdGUodGFyZ2V0LCBjYiwgb3B0aW9ucyA9IHt9KSB7XG5cdFx0aWYgKCF0YXJnZXQpIHJldHVybiBudWxsO1xuXG5cdFx0Y29uc3QgaW8gPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMsIG9ic2VydmVyKSA9PiB7XG5cdFx0XHRlbnRyaWVzLmZvckVhY2goZW50cnkgPT4ge1xuXHRcdFx0XHRjYihlbnRyeSk7XG5cdFx0XHR9KTtcblx0XHR9LCBvcHRpb25zKTtcblxuXHRcdGlvLm9ic2VydmUodGFyZ2V0KTtcblx0fSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBpbnRlcnNlY3Rpb25PYnNlcnZlcjtcbiJdLCJuYW1lcyI6WyJpbnRlcnNlY3Rpb25PYnNlcnZlciIsImNyZWF0ZSIsInRhcmdldCIsImNiIiwib3B0aW9ucyIsImlvIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJlbnRyaWVzIiwib2JzZXJ2ZXIiLCJmb3JFYWNoIiwiZW50cnkiLCJvYnNlcnZlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/intersectionObserver.js\n");

/***/ }),

/***/ "./src/js/navIntersectionObserver.js":
/*!*******************************************!*\
  !*** ./src/js/navIntersectionObserver.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar navIntersectionObserver = function navIntersectionObserver() {\n  return {\n    create: function create(target, cb) {\n      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n      if (!target) return null;\n      var io = new IntersectionObserver(function (entries, observer) {\n        entries.forEach(function (entry) {\n          if (entry.target.className === \"hero__slogan\") {\n            cb(entry);\n          }\n        });\n      }, options);\n      io.observe(target);\n    }\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (navIntersectionObserver);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvbmF2SW50ZXJzZWN0aW9uT2JzZXJ2ZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLElBQU1BLHVCQUF1QixHQUFHLFNBQTFCQSx1QkFBMEI7QUFBQSxTQUFPO0FBQ3RDQyxJQUFBQSxNQURzQyxrQkFDL0JDLE1BRCtCLEVBQ3ZCQyxFQUR1QixFQUNMO0FBQUEsVUFBZEMsT0FBYyx1RUFBSixFQUFJO0FBQ2hDLFVBQUksQ0FBQ0YsTUFBTCxFQUFhLE9BQU8sSUFBUDtBQUViLFVBQU1HLEVBQUUsR0FBRyxJQUFJQyxvQkFBSixDQUF5QixVQUFDQyxPQUFELEVBQVVDLFFBQVYsRUFBdUI7QUFDMURELFFBQUFBLE9BQU8sQ0FBQ0UsT0FBUixDQUFnQixVQUFBQyxLQUFLLEVBQUk7QUFDeEIsY0FBSUEsS0FBSyxDQUFDUixNQUFOLENBQWFTLFNBQWIsS0FBMkIsY0FBL0IsRUFBK0M7QUFDOUNSLFlBQUFBLEVBQUUsQ0FBQ08sS0FBRCxDQUFGO0FBQ0E7QUFDRCxTQUpEO0FBS0EsT0FOVSxFQU1STixPQU5RLENBQVg7QUFRQUMsTUFBQUEsRUFBRSxDQUFDTyxPQUFILENBQVdWLE1BQVg7QUFDQTtBQWJxQyxHQUFQO0FBQUEsQ0FBaEM7O0FBZ0JBLGlFQUFlRix1QkFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL215LXRoZW1lLy4vc3JjL2pzL25hdkludGVyc2VjdGlvbk9ic2VydmVyLmpzP2FmYjAiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbmF2SW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPSAoKSA9PiAoe1xuXHRjcmVhdGUodGFyZ2V0LCBjYiwgb3B0aW9ucyA9IHt9KSB7XG5cdFx0aWYgKCF0YXJnZXQpIHJldHVybiBudWxsO1xuXG5cdFx0Y29uc3QgaW8gPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMsIG9ic2VydmVyKSA9PiB7XG5cdFx0XHRlbnRyaWVzLmZvckVhY2goZW50cnkgPT4ge1xuXHRcdFx0XHRpZiAoZW50cnkudGFyZ2V0LmNsYXNzTmFtZSA9PT0gXCJoZXJvX19zbG9nYW5cIikge1xuXHRcdFx0XHRcdGNiKGVudHJ5KTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fSwgb3B0aW9ucyk7XG5cblx0XHRpby5vYnNlcnZlKHRhcmdldCk7XG5cdH0sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgbmF2SW50ZXJzZWN0aW9uT2JzZXJ2ZXI7XG4iXSwibmFtZXMiOlsibmF2SW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJjcmVhdGUiLCJ0YXJnZXQiLCJjYiIsIm9wdGlvbnMiLCJpbyIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZW50cmllcyIsIm9ic2VydmVyIiwiZm9yRWFjaCIsImVudHJ5IiwiY2xhc3NOYW1lIiwib2JzZXJ2ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/navIntersectionObserver.js\n");

/***/ }),

/***/ "./src/scss/app.scss":
/*!***************************!*\
  !*** ./src/scss/app.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2Nzcy9hcHAuc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS10aGVtZS8uL3NyYy9zY3NzL2FwcC5zY3NzP2ViZDkiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scss/app.scss\n");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/dist/app": 0,
/******/ 			"dist/app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkmy_theme"] = self["webpackChunkmy_theme"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["dist/app"], () => (__webpack_require__("./src/js/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["dist/app"], () => (__webpack_require__("./src/scss/app.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;