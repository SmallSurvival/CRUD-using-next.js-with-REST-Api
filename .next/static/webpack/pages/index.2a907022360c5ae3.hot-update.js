"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/loader.js":
/*!******************************!*\
  !*** ./components/loader.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SimpleBackdrop; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material_Backdrop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Backdrop */ \"./node_modules/@mui/material/Backdrop/index.js\");\n/* harmony import */ var _mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/CircularProgress */ \"./node_modules/@mui/material/CircularProgress/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction SimpleBackdrop(param) {\n    var open = param.open, setOpen = param.setOpen;\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        console.log(open);\n    }, [\n        open\n    ]);\n    var handleClose = function() {\n        setOpen(false);\n    };\n    var handleToggle = function() {\n        setOpen(!open);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Backdrop__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            sx: {\n                color: \"#fff\",\n                zIndex: function(theme) {\n                    return theme.zIndex.drawer + 1;\n                }\n            },\n            open: open,\n            onClick: handleClose,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                color: \"inherit\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Next.js\\\\todoapp\\\\components\\\\loader.js\",\n                lineNumber: 27,\n                columnNumber: 11\n            }, this)\n        }, void 0, false, {\n            fileName: \"D:\\\\Next.js\\\\todoapp\\\\components\\\\loader.js\",\n            lineNumber: 22,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Next.js\\\\todoapp\\\\components\\\\loader.js\",\n        lineNumber: 21,\n        columnNumber: 7\n    }, this);\n};\n_s(SimpleBackdrop, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = SimpleBackdrop;\nvar _c;\n$RefreshReg$(_c, \"SimpleBackdrop\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xvYWRlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBOEM7QUFDZ0I7QUFDWDtBQUNUOztBQUUzQixTQUFTTSxjQUFjLENBQUMsS0FBYyxFQUFFO1FBQWZDLElBQUksR0FBTCxLQUFjLENBQWJBLElBQUksRUFBQ0MsT0FBTyxHQUFiLEtBQWMsQ0FBUkEsT0FBTzs7SUFFaERKLGdEQUFTLENBQUMsV0FBTTtRQUNaSyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsSUFBSSxDQUFDLENBQUM7S0FFbkIsRUFBRTtRQUFDQSxJQUFJO0tBQUMsQ0FBQztJQUNaLElBQU1JLFdBQVcsR0FBRyxXQUFNO1FBQ3hCSCxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDaEI7SUFDRCxJQUFNSSxZQUFZLEdBQUcsV0FBTTtRQUN6QkosT0FBTyxDQUFDLENBQUNELElBQUksQ0FBQyxDQUFDO0tBRWhCO0lBRUQscUJBQ0UsOERBQUNNLEtBQUc7a0JBQ0YsNEVBQUNiLDhEQUFRO1lBQ1BjLEVBQUUsRUFBRTtnQkFBRUMsS0FBSyxFQUFFLE1BQU07Z0JBQUVDLE1BQU0sRUFBRSxTQUFDQyxLQUFLOzJCQUFLQSxLQUFLLENBQUNELE1BQU0sQ0FBQ0UsTUFBTSxHQUFHLENBQUM7aUJBQUE7YUFBRTtZQUNqRVgsSUFBSSxFQUFFQSxJQUFJO1lBQ1ZZLE9BQU8sRUFBRVIsV0FBVztzQkFFcEIsNEVBQUNWLHNFQUFnQjtnQkFBQ2MsS0FBSyxFQUFDLFNBQVM7Ozs7O29CQUFHOzs7OztnQkFDM0I7Ozs7O1lBRVAsQ0FDTjtDQUNIO0dBMUJxQlQsY0FBYztBQUFkQSxLQUFBQSxjQUFjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbG9hZGVyLmpzPzc3M2MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhY2tkcm9wIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQmFja2Ryb3AnO1xyXG5pbXBvcnQgQ2lyY3VsYXJQcm9ncmVzcyBmcm9tICdAbXVpL21hdGVyaWFsL0NpcmN1bGFyUHJvZ3Jlc3MnO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbXVpL21hdGVyaWFsL0J1dHRvbic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaW1wbGVCYWNrZHJvcCh7b3BlbixzZXRPcGVufSkge1xyXG4gIFxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhvcGVuKTtcclxuICAgICAgICBcclxuICAgICAgfSwgW29wZW5dKVxyXG4gICAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICAgIHNldE9wZW4oZmFsc2UpO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGhhbmRsZVRvZ2dsZSA9ICgpID0+IHtcclxuICAgICAgc2V0T3Blbighb3Blbik7XHJcbiAgICAgIFxyXG4gICAgfTtcclxuICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPEJhY2tkcm9wXHJcbiAgICAgICAgICBzeD17eyBjb2xvcjogJyNmZmYnLCB6SW5kZXg6ICh0aGVtZSkgPT4gdGhlbWUuekluZGV4LmRyYXdlciArIDEgfX1cclxuICAgICAgICAgIG9wZW49e29wZW59XHJcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbG9zZX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8Q2lyY3VsYXJQcm9ncmVzcyBjb2xvcj1cImluaGVyaXRcIiAvPlxyXG4gICAgICAgIDwvQmFja2Ryb3A+XHJcbiAgICAgICAgXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9Il0sIm5hbWVzIjpbIkJhY2tkcm9wIiwiQ2lyY3VsYXJQcm9ncmVzcyIsIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJCdXR0b24iLCJTaW1wbGVCYWNrZHJvcCIsIm9wZW4iLCJzZXRPcGVuIiwiY29uc29sZSIsImxvZyIsImhhbmRsZUNsb3NlIiwiaGFuZGxlVG9nZ2xlIiwiZGl2Iiwic3giLCJjb2xvciIsInpJbmRleCIsInRoZW1lIiwiZHJhd2VyIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/loader.js\n");

/***/ })

});