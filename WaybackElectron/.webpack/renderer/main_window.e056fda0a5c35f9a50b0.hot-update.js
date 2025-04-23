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

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n// GameModal.tsx\nconst react_1 = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nconst GameModal = (0, react_1.forwardRef)((props, ref) => {\n    const [isShown, setIsShown] = (0, react_1.useState)(false);\n    (0, react_1.useImperativeHandle)(ref, () => ({\n        open: () => setIsShown(true),\n        close: () => setIsShown(false),\n    }));\n    const divClassState = isShown\n        ? \"duration-200 z-50 fixed left-0 opacity-100 flex items-center bg-black bg-opacity-25 justify-center w-screen h-screen\"\n        : \"duration-200 z-50 fixed left-0 opacity-0 pointer-events-none flex items-center bg-black bg-opacity-25 justify-center w-screen h-screen\";\n    return ((0, jsx_runtime_1.jsx)(\"div\", { className: divClassState, onClick: () => setIsShown(false), children: (0, jsx_runtime_1.jsx)(\"div\", { className: \"z-50 w-full h-full bg-zinc-800 rounded-lg scale-90\", onClick: (e) => e.stopPropagation(), children: props.game.name }) }));\n});\nexports[\"default\"] = GameModal;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9HYW1lTW9kYWwudHN4IiwibWFwcGluZ3MiOiI7OztBQUFBLGdCQUFnQjtBQUNoQixrRkFBa0U7QUFRbEUsTUFBTSxTQUFTLEdBQUcsc0JBQVUsRUFBa0MsQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLEVBQUU7SUFDekUsTUFBTSxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsR0FBRyxvQkFBUSxFQUFDLEtBQUssQ0FBQyxDQUFDO0lBRTlDLCtCQUFtQixFQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQzVCLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDO1FBQzVCLEtBQUssRUFBRSxHQUFHLEVBQUUsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDO0tBQ2pDLENBQUMsQ0FBQyxDQUFDO0lBRUosTUFBTSxhQUFhLEdBQUcsT0FBTztRQUN6QixDQUFDLENBQUMsc0hBQXNIO1FBQ3hILENBQUMsQ0FBQyx3SUFBd0ksQ0FBQztJQUUvSSxPQUFPLENBQ0gsZ0NBQUssU0FBUyxFQUFFLGFBQWEsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxZQUMzRCxnQ0FDSSxTQUFTLEVBQUMsb0RBQW9ELEVBQzlELE9BQU8sRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLGVBQWUsRUFBRSxZQUVsQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksR0FDZCxHQUNKLENBQ1QsQ0FBQztBQUNOLENBQUMsQ0FBQyxDQUFDO0FBRUgscUJBQWUsU0FBUyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWxlY3Ryb24tcmVhY3QtdHlwZXNjcmlwdC10YWlsd2luZC1zdGFydGVyLy4vc3JjL2NvbXBvbmVudHMvR2FtZU1vZGFsLnRzeD8yZjMzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEdhbWVNb2RhbC50c3hcbmltcG9ydCB7IHVzZVN0YXRlLCBmb3J3YXJkUmVmLCB1c2VJbXBlcmF0aXZlSGFuZGxlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBHYW1lIH0gZnJvbSBcIi4uL3BhZ2VzL1B1YmxpY1wiO1xuXG5leHBvcnQgdHlwZSBHYW1lTW9kYWxIYW5kbGUgPSB7XG4gICAgb3BlbjogKCkgPT4gdm9pZDtcbiAgICBjbG9zZTogKCkgPT4gdm9pZDtcbn07XG5cbmNvbnN0IEdhbWVNb2RhbCA9IGZvcndhcmRSZWY8R2FtZU1vZGFsSGFuZGxlLCB7IGdhbWU6IEdhbWUgfT4oKHByb3BzLCByZWYpID0+IHtcbiAgICBjb25zdCBbaXNTaG93biwgc2V0SXNTaG93bl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICB1c2VJbXBlcmF0aXZlSGFuZGxlKHJlZiwgKCkgPT4gKHtcbiAgICAgICAgb3BlbjogKCkgPT4gc2V0SXNTaG93bih0cnVlKSxcbiAgICAgICAgY2xvc2U6ICgpID0+IHNldElzU2hvd24oZmFsc2UpLFxuICAgIH0pKTtcblxuICAgIGNvbnN0IGRpdkNsYXNzU3RhdGUgPSBpc1Nob3duXG4gICAgICAgID8gXCJkdXJhdGlvbi0yMDAgei01MCBmaXhlZCBsZWZ0LTAgb3BhY2l0eS0xMDAgZmxleCBpdGVtcy1jZW50ZXIgYmctYmxhY2sgYmctb3BhY2l0eS0yNSBqdXN0aWZ5LWNlbnRlciB3LXNjcmVlbiBoLXNjcmVlblwiXG4gICAgICAgIDogXCJkdXJhdGlvbi0yMDAgei01MCBmaXhlZCBsZWZ0LTAgb3BhY2l0eS0wIHBvaW50ZXItZXZlbnRzLW5vbmUgZmxleCBpdGVtcy1jZW50ZXIgYmctYmxhY2sgYmctb3BhY2l0eS0yNSBqdXN0aWZ5LWNlbnRlciB3LXNjcmVlbiBoLXNjcmVlblwiO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2RpdkNsYXNzU3RhdGV9IG9uQ2xpY2s9eygpID0+IHNldElzU2hvd24oZmFsc2UpfT5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ6LTUwIHctZnVsbCBoLWZ1bGwgYmctemluYy04MDAgcm91bmRlZC1sZyBzY2FsZS05MFwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGUuc3RvcFByb3BhZ2F0aW9uKCl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3Byb3BzLmdhbWUubmFtZX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVNb2RhbDtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/GameModal.tsx\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("b8d09b52b8020a650794")
/******/ })();
/******/ 
/******/ }
);