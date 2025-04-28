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

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\nconst react_dom_1 = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\nfunction GameModal({ game, onClose }) {\n    return (0, react_dom_1.createPortal)((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)(\"div\", { className: \"duration-200 z-50 fixed top-0 left-0 opacity-100 flex items-center bg-black bg-opacity-25 justify-center w-screen h-screen\", onClick: onClose, children: (0, jsx_runtime_1.jsxs)(\"div\", { className: \"z-50 w-full h-full bg-zinc-800 rounded-lg scale-90\", onClick: (e) => e.stopPropagation(), children: [(0, jsx_runtime_1.jsx)(\"button\", { onClick: onClose, className: \"text-white p-4\", children: \"Close\" }), (0, jsx_runtime_1.jsx)(\"div\", { className: \"text-white p-8\", children: (game === null || game === void 0 ? void 0 : game.name) || \"No game data\" })] }) }) }), document.getElementById(\"wayback-root\"));\n}\nexports[\"default\"] = GameModal;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9HYW1lTW9kYWwudHN4IiwibWFwcGluZ3MiOiI7OztBQUNBLDhGQUF5QztBQUV6QyxTQUF3QixTQUFTLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUErQztJQUU3RixPQUFPLDRCQUFZLEVBRWhCLDJEQUVHLGdDQUFLLFNBQVMsRUFBQyw0SEFBNEgsRUFBQyxPQUFPLEVBQUUsT0FBTyxZQUV6SixpQ0FBSyxTQUFTLEVBQUMsb0RBQW9ELEVBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsZUFBZSxFQUFFLGFBRXBHLG1DQUFRLE9BQU8sRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFDLGdCQUFnQixzQkFBZSxFQUVuRSxnQ0FBSyxTQUFTLEVBQUMsZ0JBQWdCLFlBRTNCLEtBQUksYUFBSixJQUFJLHVCQUFKLElBQUksQ0FBRSxJQUFJLEtBQUksY0FBYyxHQUUxQixJQUVILEdBRUgsR0FFTixFQUNILFFBQVEsQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLENBRXpDO0FBRUosQ0FBQztBQTNCRCwrQkEyQkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lbGVjdHJvbi1yZWFjdC10eXBlc2NyaXB0LXRhaWx3aW5kLXN0YXJ0ZXIvLi9zcmMvY29tcG9uZW50cy9HYW1lTW9kYWwudHN4PzJmMzMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2FtZSB9IGZyb20gXCIuLi9wYWdlcy9QdWJsaWNcIjtcbmltcG9ydCB7IGNyZWF0ZVBvcnRhbCB9IGZyb20gXCJyZWFjdC1kb21cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2FtZU1vZGFsKHsgZ2FtZSwgb25DbG9zZSB9OiB7IGdhbWU/OiBHYW1lIHwgbnVsbCwgb25DbG9zZTogKCkgPT4gdm9pZCB9KSB7XG5cbiAgIHJldHVybiBjcmVhdGVQb3J0YWwoXG5cbiAgICAgIDw+XG5cbiAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHVyYXRpb24tMjAwIHotNTAgZml4ZWQgdG9wLTAgbGVmdC0wIG9wYWNpdHktMTAwIGZsZXggaXRlbXMtY2VudGVyIGJnLWJsYWNrIGJnLW9wYWNpdHktMjUganVzdGlmeS1jZW50ZXIgdy1zY3JlZW4gaC1zY3JlZW5cIiBvbkNsaWNrPXtvbkNsb3NlfT5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ6LTUwIHctZnVsbCBoLWZ1bGwgYmctemluYy04MDAgcm91bmRlZC1sZyBzY2FsZS05MFwiIG9uQ2xpY2s9eyhlKSA9PiBlLnN0b3BQcm9wYWdhdGlvbigpfT5cblxuICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvbkNsb3NlfSBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHAtNFwiPkNsb3NlPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBwLThcIj5cblxuICAgICAgICAgICAgICAgICAge2dhbWU/Lm5hbWUgfHwgXCJObyBnYW1lIGRhdGFcIn1cblxuICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICA8L2Rpdj5cblxuICAgICAgPC8+LFxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3YXliYWNrLXJvb3RcIilcblxuICAgKVxuXG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/GameModal.tsx\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("dc365299e6757d793bbf")
/******/ })();
/******/ 
/******/ }
);