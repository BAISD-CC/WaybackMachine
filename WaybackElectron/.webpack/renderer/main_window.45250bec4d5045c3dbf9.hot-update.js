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

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\nconst react_dom_1 = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\nfunction GameModal({ game, onClose }) {\n    return (0, react_dom_1.createPortal)((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)(\"div\", { className: \"duration-200 z-50 fixed top-0 left-0 opacity-100 flex items-center bg-black bg-opacity-25 justify-center w-screen h-screen\", onClick: onClose, children: (0, jsx_runtime_1.jsxs)(\"div\", { className: \"z-50 w-full h-full bg-zinc-800 rounded-lg scale-90\", onClick: (e) => e.stopPropagation(), children: [(0, jsx_runtime_1.jsx)(\"button\", { onClick: onClose, className: \"text-white p-4\", children: \"Close\" }), (0, jsx_runtime_1.jsx)(\"div\", { className: \"text-white p-8\", children: (game === null || game === void 0 ? void 0 : game.name) || \"No game data\" })] }) }) }), document.body);\n}\nexports[\"default\"] = GameModal;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9HYW1lTW9kYWwudHN4IiwibWFwcGluZ3MiOiI7OztBQUNBLDhGQUF5QztBQUV6QyxTQUF3QixTQUFTLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUErQztJQUU3RixPQUFPLDRCQUFZLEVBRWhCLDJEQUVHLGdDQUFLLFNBQVMsRUFBQyw0SEFBNEgsRUFBQyxPQUFPLEVBQUUsT0FBTyxZQUV6SixpQ0FBSyxTQUFTLEVBQUMsb0RBQW9ELEVBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsZUFBZSxFQUFFLGFBRXBHLG1DQUFRLE9BQU8sRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFDLGdCQUFnQixzQkFBZSxFQUVuRSxnQ0FBSyxTQUFTLEVBQUMsZ0JBQWdCLFlBRTNCLEtBQUksYUFBSixJQUFJLHVCQUFKLElBQUksQ0FBRSxJQUFJLEtBQUksY0FBYyxHQUUxQixJQUVILEdBRUgsR0FFTixFQUNILFFBQVEsQ0FBQyxJQUFJLENBRWY7QUFFSixDQUFDO0FBM0JELCtCQTJCQyIsInNvdXJjZXMiOlsid2VicGFjazovL2VsZWN0cm9uLXJlYWN0LXR5cGVzY3JpcHQtdGFpbHdpbmQtc3RhcnRlci8uL3NyYy9jb21wb25lbnRzL0dhbWVNb2RhbC50c3g/MmYzMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHYW1lIH0gZnJvbSBcIi4uL3BhZ2VzL1B1YmxpY1wiO1xuaW1wb3J0IHsgY3JlYXRlUG9ydGFsIH0gZnJvbSBcInJlYWN0LWRvbVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHYW1lTW9kYWwoeyBnYW1lLCBvbkNsb3NlIH06IHsgZ2FtZT86IEdhbWUgfCBudWxsLCBvbkNsb3NlOiAoKSA9PiB2b2lkIH0pIHtcblxuICAgcmV0dXJuIGNyZWF0ZVBvcnRhbChcblxuICAgICAgPD5cblxuICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkdXJhdGlvbi0yMDAgei01MCBmaXhlZCB0b3AtMCBsZWZ0LTAgb3BhY2l0eS0xMDAgZmxleCBpdGVtcy1jZW50ZXIgYmctYmxhY2sgYmctb3BhY2l0eS0yNSBqdXN0aWZ5LWNlbnRlciB3LXNjcmVlbiBoLXNjcmVlblwiIG9uQ2xpY2s9e29uQ2xvc2V9PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInotNTAgdy1mdWxsIGgtZnVsbCBiZy16aW5jLTgwMCByb3VuZGVkLWxnIHNjYWxlLTkwXCIgb25DbGljaz17KGUpID0+IGUuc3RvcFByb3BhZ2F0aW9uKCl9PlxuXG4gICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uQ2xvc2V9IGNsYXNzTmFtZT1cInRleHQtd2hpdGUgcC00XCI+Q2xvc2U8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHAtOFwiPlxuXG4gICAgICAgICAgICAgICAgICB7Z2FtZT8ubmFtZSB8fCBcIk5vIGdhbWUgZGF0YVwifVxuXG4gICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgIDwvZGl2PlxuXG4gICAgICA8Lz4sXG4gICAgICBkb2N1bWVudC5ib2R5XG5cbiAgIClcblxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/GameModal.tsx\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("627d14c7b66955623201")
/******/ })();
/******/ 
/******/ }
);