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

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\nconst react_dom_1 = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\nfunction GameModal({ game, onClose }) {\n    return (0, react_dom_1.createPortal)((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)(\"div\", { className: \"duration-200 z-50 opacity-100 flex items-center bg-black bg-opacity-25 justify-center w-screen h-screen\", onClick: onClose, children: (0, jsx_runtime_1.jsxs)(\"div\", { className: \"z-50 w-full h-full bg-zinc-800 rounded-lg scale-90\", onClick: (e) => e.stopPropagation(), children: [(0, jsx_runtime_1.jsx)(\"button\", { onClick: onClose, className: \"text-white p-4\", children: \"Close\" }), (0, jsx_runtime_1.jsx)(\"div\", { className: \"text-white p-8\", children: (game === null || game === void 0 ? void 0 : game.name) || \"No game data\" })] }) }) }), document.body);\n}\nexports[\"default\"] = GameModal;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9HYW1lTW9kYWwudHN4IiwibWFwcGluZ3MiOiI7OztBQUNBLDhGQUF5QztBQUV6QyxTQUF3QixTQUFTLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUErQztJQUU3RixPQUFPLDRCQUFZLEVBRWhCLDJEQUVHLGdDQUFLLFNBQVMsRUFBQyx5R0FBeUcsRUFBQyxPQUFPLEVBQUUsT0FBTyxZQUV0SSxpQ0FBSyxTQUFTLEVBQUMsb0RBQW9ELEVBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsZUFBZSxFQUFFLGFBRXBHLG1DQUFRLE9BQU8sRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFDLGdCQUFnQixzQkFBZSxFQUVuRSxnQ0FBSyxTQUFTLEVBQUMsZ0JBQWdCLFlBRTNCLEtBQUksYUFBSixJQUFJLHVCQUFKLElBQUksQ0FBRSxJQUFJLEtBQUksY0FBYyxHQUUxQixJQUVILEdBRUgsR0FFTixFQUNILFFBQVEsQ0FBQyxJQUFJLENBRWY7QUFFSixDQUFDO0FBM0JELCtCQTJCQyIsInNvdXJjZXMiOlsid2VicGFjazovL2VsZWN0cm9uLXJlYWN0LXR5cGVzY3JpcHQtdGFpbHdpbmQtc3RhcnRlci8uL3NyYy9jb21wb25lbnRzL0dhbWVNb2RhbC50c3g/MmYzMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHYW1lIH0gZnJvbSBcIi4uL3BhZ2VzL1B1YmxpY1wiO1xuaW1wb3J0IHsgY3JlYXRlUG9ydGFsIH0gZnJvbSBcInJlYWN0LWRvbVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHYW1lTW9kYWwoeyBnYW1lLCBvbkNsb3NlIH06IHsgZ2FtZT86IEdhbWUgfCBudWxsLCBvbkNsb3NlOiAoKSA9PiB2b2lkIH0pIHtcblxuICAgcmV0dXJuIGNyZWF0ZVBvcnRhbChcblxuICAgICAgPD5cblxuICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkdXJhdGlvbi0yMDAgei01MCBvcGFjaXR5LTEwMCBmbGV4IGl0ZW1zLWNlbnRlciBiZy1ibGFjayBiZy1vcGFjaXR5LTI1IGp1c3RpZnktY2VudGVyIHctc2NyZWVuIGgtc2NyZWVuXCIgb25DbGljaz17b25DbG9zZX0+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiei01MCB3LWZ1bGwgaC1mdWxsIGJnLXppbmMtODAwIHJvdW5kZWQtbGcgc2NhbGUtOTBcIiBvbkNsaWNrPXsoZSkgPT4gZS5zdG9wUHJvcGFnYXRpb24oKX0+XG5cbiAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17b25DbG9zZX0gY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBwLTRcIj5DbG9zZTwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtd2hpdGUgcC04XCI+XG5cbiAgICAgICAgICAgICAgICAgIHtnYW1lPy5uYW1lIHx8IFwiTm8gZ2FtZSBkYXRhXCJ9XG5cbiAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgPC9kaXY+XG5cbiAgICAgIDwvPixcbiAgICAgIGRvY3VtZW50LmJvZHlcblxuICAgKVxuXG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/GameModal.tsx\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("45250bec4d5045c3dbf9")
/******/ })();
/******/ 
/******/ }
);