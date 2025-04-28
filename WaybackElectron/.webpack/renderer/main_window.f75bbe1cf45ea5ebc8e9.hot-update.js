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

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\nconst react_dom_1 = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n__webpack_require__(/*! ../animations.css */ \"./src/animations.css\");\nfunction GameModal({ game, onClose }) {\n    return (0, react_dom_1.createPortal)((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)(\"div\", { className: \" duration-200 z-50 fixed top-0 left-0 opacity-100 flex items-center bg-black bg-opacity-50 justify-center w-screen h-screen\", onClick: onClose, children: (0, jsx_runtime_1.jsxs)(\"div\", { className: \"animations-scale-up-center flex justify-center z-50 w-full h-full bg-zinc-800 rounded-lg scale-90 p-10\", onClick: (e) => e.stopPropagation(), children: [(0, jsx_runtime_1.jsx)(\"div\", { className: \"bg-white w-full h-64\" }), (0, jsx_runtime_1.jsx)(\"div\", { className: \"bg-white w-full h-full\" })] }) }) }), document.getElementById(\"wayback-root\"));\n}\nexports[\"default\"] = GameModal;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9HYW1lTW9kYWwudHN4IiwibWFwcGluZ3MiOiI7OztBQUNBLDhGQUF5QztBQUV6QyxxRUFBMEI7QUFFMUIsU0FBd0IsU0FBUyxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBK0M7SUFFN0YsT0FBTyw0QkFBWSxFQUVoQiwyREFFRyxnQ0FBSyxTQUFTLEVBQUMsNkhBQTZILEVBQUMsT0FBTyxFQUFFLE9BQU8sWUFFMUosaUNBQUssU0FBUyxFQUFDLHdHQUF3RyxFQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLGVBQWUsRUFBRSxhQUd4SixnQ0FBSyxTQUFTLEVBQUMsc0JBQXNCLEdBQU8sRUFHNUMsZ0NBQUssU0FBUyxFQUFDLHdCQUF3QixHQUFPLElBRTNDLEdBRUgsR0FFTixFQUNILFFBQVEsQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLENBRXpDO0FBRUosQ0FBQztBQXpCRCwrQkF5QkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lbGVjdHJvbi1yZWFjdC10eXBlc2NyaXB0LXRhaWx3aW5kLXN0YXJ0ZXIvLi9zcmMvY29tcG9uZW50cy9HYW1lTW9kYWwudHN4PzJmMzMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2FtZSB9IGZyb20gXCIuLi9wYWdlcy9QdWJsaWNcIjtcbmltcG9ydCB7IGNyZWF0ZVBvcnRhbCB9IGZyb20gXCJyZWFjdC1kb21cIjtcblxuaW1wb3J0ICcuLi9hbmltYXRpb25zLmNzcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2FtZU1vZGFsKHsgZ2FtZSwgb25DbG9zZSB9OiB7IGdhbWU/OiBHYW1lIHwgbnVsbCwgb25DbG9zZTogKCkgPT4gdm9pZCB9KSB7XG5cbiAgIHJldHVybiBjcmVhdGVQb3J0YWwoXG5cbiAgICAgIDw+XG5cbiAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGR1cmF0aW9uLTIwMCB6LTUwIGZpeGVkIHRvcC0wIGxlZnQtMCBvcGFjaXR5LTEwMCBmbGV4IGl0ZW1zLWNlbnRlciBiZy1ibGFjayBiZy1vcGFjaXR5LTUwIGp1c3RpZnktY2VudGVyIHctc2NyZWVuIGgtc2NyZWVuXCIgb25DbGljaz17b25DbG9zZX0+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW5pbWF0aW9ucy1zY2FsZS11cC1jZW50ZXIgZmxleCBqdXN0aWZ5LWNlbnRlciB6LTUwIHctZnVsbCBoLWZ1bGwgYmctemluYy04MDAgcm91bmRlZC1sZyBzY2FsZS05MCBwLTEwXCIgb25DbGljaz17KGUpID0+IGUuc3RvcFByb3BhZ2F0aW9uKCl9PlxuXG4gICAgICAgICAgICAgICB7LyogVG9wICovfVxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSB3LWZ1bGwgaC02NFwiPjwvZGl2PlxuXG4gICAgICAgICAgICAgICB7LyogQm90dG9tICovfVxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSB3LWZ1bGwgaC1mdWxsXCI+PC9kaXY+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICA8L2Rpdj5cblxuICAgICAgPC8+LFxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3YXliYWNrLXJvb3RcIilcblxuICAgKVxuXG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/GameModal.tsx\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("7e3d03832f8c046d4b98")
/******/ })();
/******/ 
/******/ }
);