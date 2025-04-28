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

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\nconst react_dom_1 = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n__webpack_require__(/*! ../animations.css */ \"./src/animations.css\");\nfunction GameModal({ game, onClose }) {\n    return (0, react_dom_1.createPortal)((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)(\"div\", { className: \" duration-200 z-50 fixed top-0 left-0 opacity-100 flex items-center bg-black bg-opacity-50 justify-center w-screen h-screen\", onClick: onClose, children: (0, jsx_runtime_1.jsx)(\"div\", { className: \"animations-scale-up-center flex items-center z-50 w-full h-full bg-zinc-800 rounded-lg scale-90 p-10\", onClick: (e) => e.stopPropagation(), children: (0, jsx_runtime_1.jsx)(\"div\", { className: \"bg-white w-full h-full\" }) }) }) }), document.getElementById(\"wayback-root\"));\n}\nexports[\"default\"] = GameModal;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9HYW1lTW9kYWwudHN4IiwibWFwcGluZ3MiOiI7OztBQUNBLDhGQUF5QztBQUV6QyxxRUFBMEI7QUFFMUIsU0FBd0IsU0FBUyxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBK0M7SUFFN0YsT0FBTyw0QkFBWSxFQUVoQiwyREFFRyxnQ0FBSyxTQUFTLEVBQUMsNkhBQTZILEVBQUMsT0FBTyxFQUFFLE9BQU8sWUFFMUosZ0NBQUssU0FBUyxFQUFDLHNHQUFzRyxFQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLGVBQWUsRUFBRSxZQUV0SixnQ0FBSyxTQUFTLEVBQUMsd0JBQXdCLEdBQU8sR0FFM0MsR0FFSCxHQUVOLEVBQ0gsUUFBUSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsQ0FFekM7QUFFSixDQUFDO0FBckJELCtCQXFCQyIsInNvdXJjZXMiOlsid2VicGFjazovL2VsZWN0cm9uLXJlYWN0LXR5cGVzY3JpcHQtdGFpbHdpbmQtc3RhcnRlci8uL3NyYy9jb21wb25lbnRzL0dhbWVNb2RhbC50c3g/MmYzMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHYW1lIH0gZnJvbSBcIi4uL3BhZ2VzL1B1YmxpY1wiO1xuaW1wb3J0IHsgY3JlYXRlUG9ydGFsIH0gZnJvbSBcInJlYWN0LWRvbVwiO1xuXG5pbXBvcnQgJy4uL2FuaW1hdGlvbnMuY3NzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHYW1lTW9kYWwoeyBnYW1lLCBvbkNsb3NlIH06IHsgZ2FtZT86IEdhbWUgfCBudWxsLCBvbkNsb3NlOiAoKSA9PiB2b2lkIH0pIHtcblxuICAgcmV0dXJuIGNyZWF0ZVBvcnRhbChcblxuICAgICAgPD5cblxuICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgZHVyYXRpb24tMjAwIHotNTAgZml4ZWQgdG9wLTAgbGVmdC0wIG9wYWNpdHktMTAwIGZsZXggaXRlbXMtY2VudGVyIGJnLWJsYWNrIGJnLW9wYWNpdHktNTAganVzdGlmeS1jZW50ZXIgdy1zY3JlZW4gaC1zY3JlZW5cIiBvbkNsaWNrPXtvbkNsb3NlfT5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbmltYXRpb25zLXNjYWxlLXVwLWNlbnRlciBmbGV4IGl0ZW1zLWNlbnRlciB6LTUwIHctZnVsbCBoLWZ1bGwgYmctemluYy04MDAgcm91bmRlZC1sZyBzY2FsZS05MCBwLTEwXCIgb25DbGljaz17KGUpID0+IGUuc3RvcFByb3BhZ2F0aW9uKCl9PlxuXG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHctZnVsbCBoLWZ1bGxcIj48L2Rpdj5cblxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgIDwvZGl2PlxuXG4gICAgICA8Lz4sXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndheWJhY2stcm9vdFwiKVxuXG4gICApXG5cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/GameModal.tsx\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("17e680f83ce937b80890")
/******/ })();
/******/ 
/******/ }
);