"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateelectron_react_typescript_tailwind_starter"]("main_window",{

/***/ "./src/components/GameModal.tsx":
/*!**************************************!*\
  !*** ./src/components/GameModal.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\nconst react_1 = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nfunction GameModal({ game }) {\n    const [isShown, setIsShown] = (0, react_1.useState)(false);\n    const divClassState = isShown\n        ? \"duration-200 z-50 fixed left-0 opacity-100 flex items-center bg-black bg-opacity-25 justify-center w-screen h-screen\"\n        : \"duration-200 z-50 fixed left-0 opacity-0 pointer-events-none flex items-center bg-black bg-opacity-25 justify-center w-screen h-screen\";\n    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(\"div\", { className: divClassState, children: (0, jsx_runtime_1.jsx)(\"div\", { className: \"z-50 w-full h-full bg-zinc-800 rounded-lg scale-90\", children: \"test or sum\" }) }), setIsShown(true)] }));\n}\nexports[\"default\"] = GameModal;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9HYW1lTW9kYWwudHN4IiwibWFwcGluZ3MiOiI7OztBQUFBLGtGQUFpQztBQUdqQyxTQUF3QixTQUFTLENBQUMsRUFBRSxJQUFJLEVBQW1CO0lBRXZELE1BQU0sQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLEdBQUcsb0JBQVEsRUFBQyxLQUFLLENBQUMsQ0FBQztJQUU5QyxNQUFNLGFBQWEsR0FBRyxPQUFPO1FBQ3pCLENBQUMsQ0FBQyxzSEFBc0g7UUFDeEgsQ0FBQyxDQUFDLHdJQUF3STtJQUU5SSxPQUFPLENBQUMsNkRBRUosZ0NBQUssU0FBUyxFQUFFLGFBQWEsWUFFekIsZ0NBQUssU0FBUyxFQUFDLG9EQUFvRCw0QkFFN0QsR0FFSixFQUVMLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFFbEIsQ0FBQztBQUVSLENBQUM7QUF0QkQsK0JBc0JDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWxlY3Ryb24tcmVhY3QtdHlwZXNjcmlwdC10YWlsd2luZC1zdGFydGVyLy4vc3JjL2NvbXBvbmVudHMvR2FtZU1vZGFsLnRzeD8yZjMzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBHYW1lIH0gZnJvbSBcIi4uL3BhZ2VzL1B1YmxpY1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHYW1lTW9kYWwoeyBnYW1lIH06IHsgZ2FtZT86IEdhbWUgfSkge1xuXG4gICAgY29uc3QgW2lzU2hvd24sIHNldElzU2hvd25dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgY29uc3QgZGl2Q2xhc3NTdGF0ZSA9IGlzU2hvd25cbiAgICAgICAgPyBcImR1cmF0aW9uLTIwMCB6LTUwIGZpeGVkIGxlZnQtMCBvcGFjaXR5LTEwMCBmbGV4IGl0ZW1zLWNlbnRlciBiZy1ibGFjayBiZy1vcGFjaXR5LTI1IGp1c3RpZnktY2VudGVyIHctc2NyZWVuIGgtc2NyZWVuXCJcbiAgICAgICAgOiBcImR1cmF0aW9uLTIwMCB6LTUwIGZpeGVkIGxlZnQtMCBvcGFjaXR5LTAgcG9pbnRlci1ldmVudHMtbm9uZSBmbGV4IGl0ZW1zLWNlbnRlciBiZy1ibGFjayBiZy1vcGFjaXR5LTI1IGp1c3RpZnktY2VudGVyIHctc2NyZWVuIGgtc2NyZWVuXCJcblxuICAgIHJldHVybiAoPD5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17ZGl2Q2xhc3NTdGF0ZX0+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiei01MCB3LWZ1bGwgaC1mdWxsIGJnLXppbmMtODAwIHJvdW5kZWQtbGcgc2NhbGUtOTBcIj5cbiAgICAgICAgICAgICAgICB0ZXN0IG9yIHN1bVxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAge3NldElzU2hvd24odHJ1ZSl9XG5cbiAgICA8Lz4pXG5cbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/GameModal.tsx\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("9184cb87880f0aa811ab")
/******/ })();
/******/ 
/******/ }
);