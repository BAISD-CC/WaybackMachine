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

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\nfunction GameModal({ game, onClose }) {\n    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)(\"div\", { className: \"duration-200 z-50 fixed left-0 top-0 opacity-100 flex items-center bg-black bg-opacity-25 justify-center w-screen h-screen\", onClick: onClose, children: (0, jsx_runtime_1.jsxs)(\"div\", { className: \"z-50 w-full h-full bg-zinc-800 rounded-lg scale-90\", onClick: (e) => e.stopPropagation(), children: [(0, jsx_runtime_1.jsx)(\"button\", { onClick: onClose, className: \"text-white p-4\", children: \"Close\" }), (0, jsx_runtime_1.jsx)(\"div\", { className: \"text-white p-8\", children: (game === null || game === void 0 ? void 0 : game.name) || \"No game data\" })] }) }) }));\n}\nexports[\"default\"] = GameModal;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9HYW1lTW9kYWwudHN4IiwibWFwcGluZ3MiOiI7OztBQUVBLFNBQXdCLFNBQVMsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQStDO0lBQzdGLE9BQU8sQ0FFSiwyREFFRyxnQ0FBSyxTQUFTLEVBQUMsNEhBQTRILEVBQUMsT0FBTyxFQUFFLE9BQU8sWUFFekosaUNBQUssU0FBUyxFQUFDLG9EQUFvRCxFQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLGVBQWUsRUFBRSxhQUVwRyxtQ0FBUSxPQUFPLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBQyxnQkFBZ0Isc0JBQWUsRUFFbkUsZ0NBQUssU0FBUyxFQUFDLGdCQUFnQixZQUUzQixLQUFJLGFBQUosSUFBSSx1QkFBSixJQUFJLENBQUUsSUFBSSxLQUFJLGNBQWMsR0FFMUIsSUFFSCxHQUVILEdBRU4sQ0FFTDtBQUVKLENBQUM7QUF6QkQsK0JBeUJDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWxlY3Ryb24tcmVhY3QtdHlwZXNjcmlwdC10YWlsd2luZC1zdGFydGVyLy4vc3JjL2NvbXBvbmVudHMvR2FtZU1vZGFsLnRzeD8yZjMzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdhbWUgfSBmcm9tIFwiLi4vcGFnZXMvUHVibGljXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdhbWVNb2RhbCh7IGdhbWUsIG9uQ2xvc2UgfTogeyBnYW1lPzogR2FtZSB8IG51bGwsIG9uQ2xvc2U6ICgpID0+IHZvaWQgfSkge1xuICAgcmV0dXJuIChcblxuICAgICAgPD5cblxuICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkdXJhdGlvbi0yMDAgei01MCBmaXhlZCBsZWZ0LTAgdG9wLTAgb3BhY2l0eS0xMDAgZmxleCBpdGVtcy1jZW50ZXIgYmctYmxhY2sgYmctb3BhY2l0eS0yNSBqdXN0aWZ5LWNlbnRlciB3LXNjcmVlbiBoLXNjcmVlblwiIG9uQ2xpY2s9e29uQ2xvc2V9PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInotNTAgdy1mdWxsIGgtZnVsbCBiZy16aW5jLTgwMCByb3VuZGVkLWxnIHNjYWxlLTkwXCIgb25DbGljaz17KGUpID0+IGUuc3RvcFByb3BhZ2F0aW9uKCl9PlxuXG4gICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uQ2xvc2V9IGNsYXNzTmFtZT1cInRleHQtd2hpdGUgcC00XCI+Q2xvc2U8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHAtOFwiPlxuXG4gICAgICAgICAgICAgICAgICB7Z2FtZT8ubmFtZSB8fCBcIk5vIGdhbWUgZGF0YVwifVxuXG4gICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgIDwvZGl2PlxuXG4gICAgICA8Lz5cblxuICAgKVxuXG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/GameModal.tsx\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("e08ace3fcb6dfb095184")
/******/ })();
/******/ 
/******/ }
);