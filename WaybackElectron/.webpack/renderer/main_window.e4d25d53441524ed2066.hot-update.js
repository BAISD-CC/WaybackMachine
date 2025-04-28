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

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\nfunction GameModal({ game, onClose }) {\n    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)(\"div\", { className: \"duration-200 z-50 fixed left-0 top-0 opacity-100 flex items-center bg-black bg-opacity-25 justify-center w-screen h-screen\", onClick: onClose, children: (0, jsx_runtime_1.jsxs)(\"div\", { className: \"z-50 w-full h-full bg-zinc-800 rounded-lg scale-90\", onClick: (e) => e.stopPropagation(), children: [(0, jsx_runtime_1.jsx)(\"button\", { onClick: onClose, className: \"text-white p-4\", children: \"Close\" }), (0, jsx_runtime_1.jsx)(\"div\", { className: \"text-white p-8\", children: (game === null || game === void 0 ? void 0 : game.name) || \"No game data\" })] }) }) }));\n}\nexports[\"default\"] = GameModal;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9HYW1lTW9kYWwudHN4IiwibWFwcGluZ3MiOiI7OztBQUVBLFNBQXdCLFNBQVMsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQStDO0lBQzdGLE9BQU8sQ0FDSiwyREFDRyxnQ0FDRyxTQUFTLEVBQUMsNEhBQTRILEVBQ3RJLE9BQU8sRUFBRSxPQUFPLFlBRWhCLGlDQUNHLFNBQVMsRUFBQyxvREFBb0QsRUFDOUQsT0FBTyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsZUFBZSxFQUFFLGFBRW5DLG1DQUFRLE9BQU8sRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFDLGdCQUFnQixzQkFBZSxFQUNuRSxnQ0FBSyxTQUFTLEVBQUMsZ0JBQWdCLFlBQzNCLEtBQUksYUFBSixJQUFJLHVCQUFKLElBQUksQ0FBRSxJQUFJLEtBQUksY0FBYyxHQUMxQixJQUNILEdBQ0gsR0FDTixDQUNMO0FBQ0osQ0FBQztBQW5CRCwrQkFtQkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lbGVjdHJvbi1yZWFjdC10eXBlc2NyaXB0LXRhaWx3aW5kLXN0YXJ0ZXIvLi9zcmMvY29tcG9uZW50cy9HYW1lTW9kYWwudHN4PzJmMzMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2FtZSB9IGZyb20gXCIuLi9wYWdlcy9QdWJsaWNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2FtZU1vZGFsKHsgZ2FtZSwgb25DbG9zZSB9OiB7IGdhbWU/OiBHYW1lIHwgbnVsbCwgb25DbG9zZTogKCkgPT4gdm9pZCB9KSB7XG4gICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImR1cmF0aW9uLTIwMCB6LTUwIGZpeGVkIGxlZnQtMCB0b3AtMCBvcGFjaXR5LTEwMCBmbGV4IGl0ZW1zLWNlbnRlciBiZy1ibGFjayBiZy1vcGFjaXR5LTI1IGp1c3RpZnktY2VudGVyIHctc2NyZWVuIGgtc2NyZWVuXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2xvc2V9XG4gICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ6LTUwIHctZnVsbCBoLWZ1bGwgYmctemluYy04MDAgcm91bmRlZC1sZyBzY2FsZS05MFwiXG4gICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gZS5zdG9wUHJvcGFnYXRpb24oKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17b25DbG9zZX0gY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBwLTRcIj5DbG9zZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHAtOFwiPlxuICAgICAgICAgICAgICAgICAge2dhbWU/Lm5hbWUgfHwgXCJObyBnYW1lIGRhdGFcIn1cbiAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICA8L2Rpdj5cbiAgICAgIDwvPlxuICAgKVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/GameModal.tsx\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("d838c6fbda7d4e8330b7")
/******/ })();
/******/ 
/******/ }
);