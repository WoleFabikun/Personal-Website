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

/***/ "./components/Navigation.js":
/*!**********************************!*\
  !*** ./components/Navigation.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _radix_ui_react_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @radix-ui/react-icons */ \"./node_modules/@radix-ui/react-icons/dist/react-icons.esm.js\");\n/* harmony import */ var _ThemeToggle_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ThemeToggle.js */ \"./components/ThemeToggle.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst NavItem = (props)=>{\n// ... (your existing NavItem component)\n};\n_c = NavItem;\nconst Hamburger = (param)=>{\n    let { open , toggle  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"md:hidden cursor-pointer\",\n        onClick: toggle,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_react_icons__WEBPACK_IMPORTED_MODULE_5__.HamburgerMenuIcon, {}, void 0, false, {\n            fileName: \"/Users/wolefabikun/Library/Mobile Documents/com~apple~CloudDocs/Python/Personal-Website/components/Navigation.js\",\n            lineNumber: 15,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/wolefabikun/Library/Mobile Documents/com~apple~CloudDocs/Python/Personal-Website/components/Navigation.js\",\n        lineNumber: 14,\n        columnNumber: 9\n    }, undefined);\n};\n_c1 = Hamburger;\nconst Navigation = ()=>{\n    _s();\n    const [isMenuOpen, setIsMenuOpen] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);\n    const toggleMenu = ()=>{\n        setIsMenuOpen(!isMenuOpen);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"flex flex-row justify-between w-screen px-5 py-5 mx-auto font-sans text-lg font-normal leading-normal text-left break-words align-middle sm:mx-0 max-w-prose sm:max-w-none text-slategrey-50 subpixel-antialiase dark:text-slate-100 text-slate-600\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"flex flex-row justify-center gap-2 flex-nowrap\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavItem, {\n                    title: \"Home\",\n                    link: \"/\"\n                }, void 0, false, {\n                    fileName: \"/Users/wolefabikun/Library/Mobile Documents/com~apple~CloudDocs/Python/Personal-Website/components/Navigation.js\",\n                    lineNumber: 30,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/wolefabikun/Library/Mobile Documents/com~apple~CloudDocs/Python/Personal-Website/components/Navigation.js\",\n                lineNumber: 29,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Hamburger, {\n                open: isMenuOpen,\n                toggle: toggleMenu\n            }, void 0, false, {\n                fileName: \"/Users/wolefabikun/Library/Mobile Documents/com~apple~CloudDocs/Python/Personal-Website/components/Navigation.js\",\n                lineNumber: 34,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"flex flex-row justify-center gap-7 flex-nowrap \".concat(isMenuOpen ? \"hidden\" : \"hidden\", \" sm:hidden\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        className: \"flex flex-row justify-center gap-5 flex-nowrap\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavItem, {\n                                title: \"Projects\",\n                                link: \"/projects\"\n                            }, void 0, false, {\n                                fileName: \"/Users/wolefabikun/Library/Mobile Documents/com~apple~CloudDocs/Python/Personal-Website/components/Navigation.js\",\n                                lineNumber: 39,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavItem, {\n                                title: \"Resume\",\n                                link: \"/assets/text/Fabikun_Oluwole_2024.pdf\"\n                            }, void 0, false, {\n                                fileName: \"/Users/wolefabikun/Library/Mobile Documents/com~apple~CloudDocs/Python/Personal-Website/components/Navigation.js\",\n                                lineNumber: 40,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavItem, {\n                                title: \"Blogs\",\n                                link: \"/posts\"\n                            }, void 0, false, {\n                                fileName: \"/Users/wolefabikun/Library/Mobile Documents/com~apple~CloudDocs/Python/Personal-Website/components/Navigation.js\",\n                                lineNumber: 41,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavItem, {\n                                title: \"Barbershop\",\n                                link: \"https://www.instagram.com/wolescuts/\"\n                            }, void 0, false, {\n                                fileName: \"/Users/wolefabikun/Library/Mobile Documents/com~apple~CloudDocs/Python/Personal-Website/components/Navigation.js\",\n                                lineNumber: 42,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavItem, {\n                                title: \"Fashion\",\n                                link: \"/fashion\"\n                            }, void 0, false, {\n                                fileName: \"/Users/wolefabikun/Library/Mobile Documents/com~apple~CloudDocs/Python/Personal-Website/components/Navigation.js\",\n                                lineNumber: 43,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavItem, {\n                                title: \"Contact\",\n                                link: \"/contact\"\n                            }, void 0, false, {\n                                fileName: \"/Users/wolefabikun/Library/Mobile Documents/com~apple~CloudDocs/Python/Personal-Website/components/Navigation.js\",\n                                lineNumber: 44,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/wolefabikun/Library/Mobile Documents/com~apple~CloudDocs/Python/Personal-Website/components/Navigation.js\",\n                        lineNumber: 37,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        className: \"flex flex-row justify-center gap-10 flex-nowrap\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ThemeToggle_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/wolefabikun/Library/Mobile Documents/com~apple~CloudDocs/Python/Personal-Website/components/Navigation.js\",\n                            lineNumber: 47,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/wolefabikun/Library/Mobile Documents/com~apple~CloudDocs/Python/Personal-Website/components/Navigation.js\",\n                        lineNumber: 46,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/wolefabikun/Library/Mobile Documents/com~apple~CloudDocs/Python/Personal-Website/components/Navigation.js\",\n                lineNumber: 36,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/wolefabikun/Library/Mobile Documents/com~apple~CloudDocs/Python/Personal-Website/components/Navigation.js\",\n        lineNumber: 28,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Navigation, \"vK10R+uCyHfZ4DZVnxbYkMWJB8g=\");\n_c2 = Navigation;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navigation);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"NavItem\");\n$RefreshReg$(_c1, \"Hamburger\");\n$RefreshReg$(_c2, \"Navigation\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdmlnYXRpb24uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFBMEI7QUFDYztBQUNYO0FBQzZCO0FBRWY7QUFFM0MsTUFBTUssVUFBVSxDQUFDQyxRQUFVO0FBQ3ZCLHdDQUF3QztBQUM1QztLQUZNRDtBQUlOLE1BQU1FLFlBQVksU0FBc0I7UUFBckIsRUFBRUMsS0FBSSxFQUFFQyxPQUFNLEVBQUU7SUFDL0IscUJBQ0ksOERBQUNDO1FBQUlDLFdBQVU7UUFBMkJDLFNBQVNIO2tCQUMvQyw0RUFBQ04sb0VBQWlCQTs7Ozs7Ozs7OztBQUc5QjtNQU5NSTtBQVFOLE1BQU1NLGFBQWEsSUFBTTs7SUFDckIsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdmLHFEQUFjLENBQUMsS0FBSztJQUV4RCxNQUFNaUIsYUFBYSxJQUFNO1FBQ3JCRixjQUFjLENBQUNEO0lBQ25CO0lBRUEscUJBQ0ksOERBQUNJO1FBQUlQLFdBQVU7OzBCQUNYLDhEQUFDUTtnQkFBUVIsV0FBVTswQkFDZiw0RUFBQ047b0JBQVFlLE9BQU87b0JBQVFDLE1BQU07Ozs7Ozs7Ozs7OzBCQUlsQyw4REFBQ2Q7Z0JBQVVDLE1BQU1NO2dCQUFZTCxRQUFRUTs7Ozs7OzBCQUVyQyw4REFBQ0U7Z0JBQVFSLFdBQVcsa0RBQW1GLE9BQWpDRyxhQUFhLFdBQVcsUUFBUSxFQUFDOztrQ0FDbkcsOERBQUNLO3dCQUFRUixXQUFVOzswQ0FFZiw4REFBQ047Z0NBQVFlLE9BQU87Z0NBQVlDLE1BQU07Ozs7OzswQ0FDbEMsOERBQUNoQjtnQ0FBUWUsT0FBTztnQ0FBVUMsTUFBTTs7Ozs7OzBDQUNoQyw4REFBQ2hCO2dDQUFRZSxPQUFPO2dDQUFTQyxNQUFNOzs7Ozs7MENBQy9CLDhEQUFDaEI7Z0NBQVFlLE9BQU87Z0NBQWNDLE1BQU07Ozs7OzswQ0FDcEMsOERBQUNoQjtnQ0FBUWUsT0FBTztnQ0FBV0MsTUFBTTs7Ozs7OzBDQUNqQyw4REFBQ2hCO2dDQUFRZSxPQUFPO2dDQUFXQyxNQUFNOzs7Ozs7Ozs7Ozs7a0NBRXJDLDhEQUFDRjt3QkFBUVIsV0FBVTtrQ0FDZiw0RUFBQ1AsdURBQVdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2hDO0dBaENNUztNQUFBQTtBQWtDTiwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL05hdmlnYXRpb24uanM/YjA1YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IEhhbWJ1cmdlck1lbnVJY29uIH0gZnJvbSAnQHJhZGl4LXVpL3JlYWN0LWljb25zJztcblxuaW1wb3J0IFRoZW1lVG9nZ2xlIGZyb20gJy4vVGhlbWVUb2dnbGUuanMnO1xuXG5jb25zdCBOYXZJdGVtID0gKHByb3BzKSA9PiB7XG4gICAgLy8gLi4uICh5b3VyIGV4aXN0aW5nIE5hdkl0ZW0gY29tcG9uZW50KVxufVxuXG5jb25zdCBIYW1idXJnZXIgPSAoeyBvcGVuLCB0b2dnbGUgfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6aGlkZGVuIGN1cnNvci1wb2ludGVyXCIgb25DbGljaz17dG9nZ2xlfT5cbiAgICAgICAgICAgIDxIYW1idXJnZXJNZW51SWNvbiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5jb25zdCBOYXZpZ2F0aW9uID0gKCkgPT4ge1xuICAgIGNvbnN0IFtpc01lbnVPcGVuLCBzZXRJc01lbnVPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGNvbnN0IHRvZ2dsZU1lbnUgPSAoKSA9PiB7XG4gICAgICAgIHNldElzTWVudU9wZW4oIWlzTWVudU9wZW4pO1xuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuIHctc2NyZWVuIHB4LTUgcHktNSBteC1hdXRvIGZvbnQtc2FucyB0ZXh0LWxnIGZvbnQtbm9ybWFsIGxlYWRpbmctbm9ybWFsIHRleHQtbGVmdCBicmVhay13b3JkcyBhbGlnbi1taWRkbGUgc206bXgtMCBtYXgtdy1wcm9zZSBzbTptYXgtdy1ub25lIHRleHQtc2xhdGVncmV5LTUwIHN1YnBpeGVsLWFudGlhbGlhc2UgZGFyazp0ZXh0LXNsYXRlLTEwMCB0ZXh0LXNsYXRlLTYwMFwiPlxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNlbnRlciBnYXAtMiBmbGV4LW5vd3JhcFwiPlxuICAgICAgICAgICAgICAgIDxOYXZJdGVtIHRpdGxlPXsnSG9tZSd9IGxpbms9eycvJ30gLz5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgICAgICAgey8qIEhhbWJ1cmdlciBNZW51IEljb24gKi99XG4gICAgICAgICAgICA8SGFtYnVyZ2VyIG9wZW49e2lzTWVudU9wZW59IHRvZ2dsZT17dG9nZ2xlTWVudX0gLz5cblxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtgZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNlbnRlciBnYXAtNyBmbGV4LW5vd3JhcCAke2lzTWVudU9wZW4gPyAnaGlkZGVuJyA6ICdoaWRkZW4nfSBzbTpoaWRkZW5gfT5cbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGp1c3RpZnktY2VudGVyIGdhcC01IGZsZXgtbm93cmFwXCI+XG4gICAgICAgICAgICAgICAgICAgIHsvKiA8TmF2SXRlbSB0aXRsZT17J1VzZXMnfSBsaW5rPXsnL3VzZXMnfSAvPiAqL31cbiAgICAgICAgICAgICAgICAgICAgPE5hdkl0ZW0gdGl0bGU9eydQcm9qZWN0cyd9IGxpbms9eycvcHJvamVjdHMnfSAvPlxuICAgICAgICAgICAgICAgICAgICA8TmF2SXRlbSB0aXRsZT17J1Jlc3VtZSd9IGxpbms9eycvYXNzZXRzL3RleHQvRmFiaWt1bl9PbHV3b2xlXzIwMjQucGRmJ30gLz5cbiAgICAgICAgICAgICAgICAgICAgPE5hdkl0ZW0gdGl0bGU9eydCbG9ncyd9IGxpbms9eycvcG9zdHMnfSAvPlxuICAgICAgICAgICAgICAgICAgICA8TmF2SXRlbSB0aXRsZT17J0JhcmJlcnNob3AnfSBsaW5rPXsnaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS93b2xlc2N1dHMvJ30gLz5cbiAgICAgICAgICAgICAgICAgICAgPE5hdkl0ZW0gdGl0bGU9eydGYXNoaW9uJ30gbGluaz17Jy9mYXNoaW9uJ30gLz5cbiAgICAgICAgICAgICAgICAgICAgPE5hdkl0ZW0gdGl0bGU9eydDb250YWN0J30gbGluaz17Jy9jb250YWN0J30gLz5cbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNlbnRlciBnYXAtMTAgZmxleC1ub3dyYXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPFRoZW1lVG9nZ2xlIC8+XG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8L25hdj5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZpZ2F0aW9uO1xuXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VSb3V0ZXIiLCJMaW5rIiwiSGFtYnVyZ2VyTWVudUljb24iLCJUaGVtZVRvZ2dsZSIsIk5hdkl0ZW0iLCJwcm9wcyIsIkhhbWJ1cmdlciIsIm9wZW4iLCJ0b2dnbGUiLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiTmF2aWdhdGlvbiIsImlzTWVudU9wZW4iLCJzZXRJc01lbnVPcGVuIiwidXNlU3RhdGUiLCJ0b2dnbGVNZW51IiwibmF2Iiwic2VjdGlvbiIsInRpdGxlIiwibGluayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Navigation.js\n"));

/***/ })

});