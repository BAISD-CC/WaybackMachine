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

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\nconst react_dom_1 = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n__webpack_require__(/*! ../animations.css */ \"./src/animations.css\");\nfunction GameModal({ game, onClose }) {\n    return (0, react_dom_1.createPortal)((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)(\"div\", { className: \"animations-scaleup-center duration-200 z-50 fixed top-0 left-0 opacity-100 flex items-center bg-black bg-opacity-25 justify-center w-screen h-screen\", onClick: onClose, children: (0, jsx_runtime_1.jsxs)(\"div\", { className: \"z-50 w-full h-full bg-zinc-800 rounded-lg scale-90\", onClick: (e) => e.stopPropagation(), children: [(0, jsx_runtime_1.jsx)(\"button\", { onClick: onClose, className: \"text-white p-4\", children: \"Close\" }), (0, jsx_runtime_1.jsx)(\"div\", { className: \"text-white p-8\", children: (game === null || game === void 0 ? void 0 : game.name) || \"No game data\" })] }) }) }), document.getElementById(\"wayback-root\"));\n}\nexports[\"default\"] = GameModal;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9HYW1lTW9kYWwudHN4IiwibWFwcGluZ3MiOiI7OztBQUNBLDhGQUF5QztBQUV6QyxxRUFBMEI7QUFFMUIsU0FBd0IsU0FBUyxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBK0M7SUFFN0YsT0FBTyw0QkFBWSxFQUVoQiwyREFFRyxnQ0FBSyxTQUFTLEVBQUMsc0pBQXNKLEVBQUMsT0FBTyxFQUFFLE9BQU8sWUFFbkwsaUNBQUssU0FBUyxFQUFDLG9EQUFvRCxFQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLGVBQWUsRUFBRSxhQUVwRyxtQ0FBUSxPQUFPLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBQyxnQkFBZ0Isc0JBQWUsRUFFbkUsZ0NBQUssU0FBUyxFQUFDLGdCQUFnQixZQUUzQixLQUFJLGFBQUosSUFBSSx1QkFBSixJQUFJLENBQUUsSUFBSSxLQUFJLGNBQWMsR0FFMUIsSUFFSCxHQUVILEdBRU4sRUFDSCxRQUFRLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxDQUV6QztBQUVKLENBQUM7QUEzQkQsK0JBMkJDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWxlY3Ryb24tcmVhY3QtdHlwZXNjcmlwdC10YWlsd2luZC1zdGFydGVyLy4vc3JjL2NvbXBvbmVudHMvR2FtZU1vZGFsLnRzeD8yZjMzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdhbWUgfSBmcm9tIFwiLi4vcGFnZXMvUHVibGljXCI7XG5pbXBvcnQgeyBjcmVhdGVQb3J0YWwgfSBmcm9tIFwicmVhY3QtZG9tXCI7XG5cbmltcG9ydCAnLi4vYW5pbWF0aW9ucy5jc3MnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdhbWVNb2RhbCh7IGdhbWUsIG9uQ2xvc2UgfTogeyBnYW1lPzogR2FtZSB8IG51bGwsIG9uQ2xvc2U6ICgpID0+IHZvaWQgfSkge1xuXG4gICByZXR1cm4gY3JlYXRlUG9ydGFsKFxuXG4gICAgICA8PlxuXG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFuaW1hdGlvbnMtc2NhbGV1cC1jZW50ZXIgZHVyYXRpb24tMjAwIHotNTAgZml4ZWQgdG9wLTAgbGVmdC0wIG9wYWNpdHktMTAwIGZsZXggaXRlbXMtY2VudGVyIGJnLWJsYWNrIGJnLW9wYWNpdHktMjUganVzdGlmeS1jZW50ZXIgdy1zY3JlZW4gaC1zY3JlZW5cIiBvbkNsaWNrPXtvbkNsb3NlfT5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ6LTUwIHctZnVsbCBoLWZ1bGwgYmctemluYy04MDAgcm91bmRlZC1sZyBzY2FsZS05MFwiIG9uQ2xpY2s9eyhlKSA9PiBlLnN0b3BQcm9wYWdhdGlvbigpfT5cblxuICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvbkNsb3NlfSBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHAtNFwiPkNsb3NlPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBwLThcIj5cblxuICAgICAgICAgICAgICAgICAge2dhbWU/Lm5hbWUgfHwgXCJObyBnYW1lIGRhdGFcIn1cblxuICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICA8L2Rpdj5cblxuICAgICAgPC8+LFxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3YXliYWNrLXJvb3RcIilcblxuICAgKVxuXG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/GameModal.tsx\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("962529e3dc1403ab3140")
/******/ })();
/******/ 
/******/ }
);