"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/tsparticles-shape-square";
exports.ids = ["vendor-chunks/tsparticles-shape-square"];
exports.modules = {

/***/ "(ssr)/./node_modules/tsparticles-shape-square/esm/SquareDrawer.js":
/*!*******************************************************************!*\
  !*** ./node_modules/tsparticles-shape-square/esm/SquareDrawer.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SquareDrawer: () => (/* binding */ SquareDrawer)\n/* harmony export */ });\nconst fixFactor = Math.sqrt(2);\nclass SquareDrawer {\n    draw(context, particle, radius) {\n        const fixedRadius = radius / fixFactor, fixedDiameter = fixedRadius * 2;\n        context.rect(-fixedRadius, -fixedRadius, fixedDiameter, fixedDiameter);\n    }\n    getSidesCount() {\n        return 4;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtc2hhcGUtc3F1YXJlL2VzbS9TcXVhcmVEcmF3ZXIuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU1BLFlBQVlDLEtBQUtDLElBQUksQ0FBQztBQUNyQixNQUFNQztJQUNUQyxLQUFLQyxPQUFPLEVBQUVDLFFBQVEsRUFBRUMsTUFBTSxFQUFFO1FBQzVCLE1BQU1DLGNBQWNELFNBQVNQLFdBQVdTLGdCQUFnQkQsY0FBYztRQUN0RUgsUUFBUUssSUFBSSxDQUFDLENBQUNGLGFBQWEsQ0FBQ0EsYUFBYUMsZUFBZUE7SUFDNUQ7SUFDQUUsZ0JBQWdCO1FBQ1osT0FBTztJQUNYO0FBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbnN0cnVjdG9yLXBvcnRmb2xpby8uL25vZGVfbW9kdWxlcy90c3BhcnRpY2xlcy1zaGFwZS1zcXVhcmUvZXNtL1NxdWFyZURyYXdlci5qcz9hNjczIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGZpeEZhY3RvciA9IE1hdGguc3FydCgyKTtcbmV4cG9ydCBjbGFzcyBTcXVhcmVEcmF3ZXIge1xuICAgIGRyYXcoY29udGV4dCwgcGFydGljbGUsIHJhZGl1cykge1xuICAgICAgICBjb25zdCBmaXhlZFJhZGl1cyA9IHJhZGl1cyAvIGZpeEZhY3RvciwgZml4ZWREaWFtZXRlciA9IGZpeGVkUmFkaXVzICogMjtcbiAgICAgICAgY29udGV4dC5yZWN0KC1maXhlZFJhZGl1cywgLWZpeGVkUmFkaXVzLCBmaXhlZERpYW1ldGVyLCBmaXhlZERpYW1ldGVyKTtcbiAgICB9XG4gICAgZ2V0U2lkZXNDb3VudCgpIHtcbiAgICAgICAgcmV0dXJuIDQ7XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbImZpeEZhY3RvciIsIk1hdGgiLCJzcXJ0IiwiU3F1YXJlRHJhd2VyIiwiZHJhdyIsImNvbnRleHQiLCJwYXJ0aWNsZSIsInJhZGl1cyIsImZpeGVkUmFkaXVzIiwiZml4ZWREaWFtZXRlciIsInJlY3QiLCJnZXRTaWRlc0NvdW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-shape-square/esm/SquareDrawer.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/tsparticles-shape-square/esm/index.js":
/*!************************************************************!*\
  !*** ./node_modules/tsparticles-shape-square/esm/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadSquareShape: () => (/* binding */ loadSquareShape)\n/* harmony export */ });\n/* harmony import */ var _SquareDrawer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SquareDrawer */ \"(ssr)/./node_modules/tsparticles-shape-square/esm/SquareDrawer.js\");\n\nasync function loadSquareShape(engine, refresh = true) {\n    await engine.addShape([\n        \"edge\",\n        \"square\"\n    ], new _SquareDrawer__WEBPACK_IMPORTED_MODULE_0__.SquareDrawer(), refresh);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtc2hhcGUtc3F1YXJlL2VzbS9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUE4QztBQUN2QyxlQUFlQyxnQkFBZ0JDLE1BQU0sRUFBRUMsVUFBVSxJQUFJO0lBQ3hELE1BQU1ELE9BQU9FLFFBQVEsQ0FBQztRQUFDO1FBQVE7S0FBUyxFQUFFLElBQUlKLHVEQUFZQSxJQUFJRztBQUNsRSIsInNvdXJjZXMiOlsid2VicGFjazovL2luc3RydWN0b3ItcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3RzcGFydGljbGVzLXNoYXBlLXNxdWFyZS9lc20vaW5kZXguanM/YzcwMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTcXVhcmVEcmF3ZXIgfSBmcm9tIFwiLi9TcXVhcmVEcmF3ZXJcIjtcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkU3F1YXJlU2hhcGUoZW5naW5lLCByZWZyZXNoID0gdHJ1ZSkge1xuICAgIGF3YWl0IGVuZ2luZS5hZGRTaGFwZShbXCJlZGdlXCIsIFwic3F1YXJlXCJdLCBuZXcgU3F1YXJlRHJhd2VyKCksIHJlZnJlc2gpO1xufVxuIl0sIm5hbWVzIjpbIlNxdWFyZURyYXdlciIsImxvYWRTcXVhcmVTaGFwZSIsImVuZ2luZSIsInJlZnJlc2giLCJhZGRTaGFwZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-shape-square/esm/index.js\n");

/***/ })

};
;