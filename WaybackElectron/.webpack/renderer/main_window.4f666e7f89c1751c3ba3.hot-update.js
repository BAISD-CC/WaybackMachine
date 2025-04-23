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

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\nconst react_1 = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nfunction GameModal({ game }) {\n    const [isShown, setIsShown] = (0, react_1.useState)(false);\n    const divClassState = isShown\n        ? \"duration-200 z-50 fixed left-0 opacity-100 flex items-center bg-black bg-opacity-25 justify-center w-screen h-screen\"\n        : \"duration-200 z-50 fixed left-0 opacity-0 pointer-events-none flex items-center bg-black bg-opacity-25 justify-center w-screen h-screen\";\n    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)(\"div\", { className: divClassState, children: (0, jsx_runtime_1.jsx)(\"div\", { className: \"z-50 w-full h-full bg-zinc-800 rounded-lg scale-90\", children: \"test or sum\" }) }) }));\n}\nexports[\"default\"] = GameModal;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9HYW1lTW9kYWwudHN4IiwibWFwcGluZ3MiOiI7OztBQUFBLGtGQUFpQztBQUdqQyxTQUF3QixTQUFTLENBQUMsRUFBRSxJQUFJLEVBQTBCO0lBRTlELE1BQU0sQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLEdBQUcsb0JBQVEsRUFBQyxLQUFLLENBQUMsQ0FBQztJQUU5QyxNQUFNLGFBQWEsR0FBRyxPQUFPO1FBQ3pCLENBQUMsQ0FBQyxzSEFBc0g7UUFDeEgsQ0FBQyxDQUFDLHdJQUF3STtJQUU5SSxPQUFPLENBQUMsMkRBRUosZ0NBQUssU0FBUyxFQUFFLGFBQWEsWUFFekIsZ0NBQUssU0FBUyxFQUFDLG9EQUFvRCw0QkFFN0QsR0FFSixHQUdQLENBQUM7QUFFUixDQUFDO0FBckJELCtCQXFCQyIsInNvdXJjZXMiOlsid2VicGFjazovL2VsZWN0cm9uLXJlYWN0LXR5cGVzY3JpcHQtdGFpbHdpbmQtc3RhcnRlci8uL3NyYy9jb21wb25lbnRzL0dhbWVNb2RhbC50c3g/MmYzMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgR2FtZSB9IGZyb20gXCIuLi9wYWdlcy9QdWJsaWNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2FtZU1vZGFsKHsgZ2FtZSB9OiB7IGdhbWU/OiBHYW1lIHwgbnVsbCB9KSB7XG5cbiAgICBjb25zdCBbaXNTaG93biwgc2V0SXNTaG93bl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICBjb25zdCBkaXZDbGFzc1N0YXRlID0gaXNTaG93blxuICAgICAgICA/IFwiZHVyYXRpb24tMjAwIHotNTAgZml4ZWQgbGVmdC0wIG9wYWNpdHktMTAwIGZsZXggaXRlbXMtY2VudGVyIGJnLWJsYWNrIGJnLW9wYWNpdHktMjUganVzdGlmeS1jZW50ZXIgdy1zY3JlZW4gaC1zY3JlZW5cIlxuICAgICAgICA6IFwiZHVyYXRpb24tMjAwIHotNTAgZml4ZWQgbGVmdC0wIG9wYWNpdHktMCBwb2ludGVyLWV2ZW50cy1ub25lIGZsZXggaXRlbXMtY2VudGVyIGJnLWJsYWNrIGJnLW9wYWNpdHktMjUganVzdGlmeS1jZW50ZXIgdy1zY3JlZW4gaC1zY3JlZW5cIlxuXG4gICAgcmV0dXJuICg8PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtkaXZDbGFzc1N0YXRlfT5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ6LTUwIHctZnVsbCBoLWZ1bGwgYmctemluYy04MDAgcm91bmRlZC1sZyBzY2FsZS05MFwiPlxuICAgICAgICAgICAgICAgIHRlc3Qgb3Igc3VtXG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L2Rpdj5cblxuXG4gICAgPC8+KVxuXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/GameModal.tsx\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("2a19a9f38d59bf0792de")
/******/ })();
/******/ 
/******/ }
);