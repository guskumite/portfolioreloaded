"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(routes)/contact/page",{

/***/ "(app-pages-browser)/./src/components/Contact/Contact.tsx":
/*!********************************************!*\
  !*** ./src/components/Contact/Contact.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Mailer: function() { return /* binding */ Mailer; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ Mailer auto */ \nvar _s = $RefreshSig$();\n\nfunction Mailer() {\n    _s();\n    const [selectedLang, setSelectedLang] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [selectedDark, setSelectedDark] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    let toggleLCycle = [\n        {\n            init: false\n        }\n    ];\n    const frmlbl1 = [\n        \"Contactame\",\n        \"Contact Me\"\n    ];\n    const frmlbl2 = [\n        \"Nombre\",\n        \"Name\"\n    ];\n    const frmlbl3 = [\n        \"Correo electr\\xf3nico\",\n        \"Email\"\n    ];\n    const frmlbl4 = [\n        \"Mensaje\",\n        \"Message\"\n    ];\n    const rowparam = 4;\n    const sendparam = [\n        \"Enviar\",\n        \"Send\"\n    ];\n    const toggleLanguage = ()=>{\n        setSelectedLang(selectedLang === 0 ? 1 : 0);\n    };\n    const toggleDarkMode = ()=>{\n        setSelectedDark(selectedDark === 0 ? 1 : 0);\n    };\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        const name = e.target.Name.value;\n        const email = e.target.Email.value;\n        const message = e.target.Message.value;\n        const URLWSP = \"https://api.whatsapp.com/send?phone=573102612868&text=\";\n        const envio = URLWSP + \"Name: \" + name + \" Email: \" + email + \" Message: \" + message;\n        window.open(envio, \"_blank\");\n        return 0;\n    };\n    //    useEffect(() => {\n    //        const mainElement = document.getElementById(\"\");\n    //        if (mainElement) {\n    //          setEleventh(selectedDark === 1 ? \"#FFFFFF\" : \"#000000\");\n    //          setEleventhA(\n    //            selectedDark === 1\n    //              ? \"text-black bg-white absolute top-[25vh] left-[32vw] w-[60%] text-sm\"\n    //              : \"text-white bg-black absolute top-[25vh] left-[32vw] w-[60%] text-sm\"\n    //          );\n    //          mainElement.style.backgroundColor = eleventh;\n    //          mainElement.className = eleventhA;\n    //          if (!toggleLCycle[0].init) {\n    //            toggled?.click();\n    //            setSkl1(skills1);\n    //            setSkl2(skills2);\n    //            setSkl3(skills3);\n    //            setSkl4(skills4);\n    //            setTgl1(\n    //              \"absolute left-[10vw] bottom-[10vh] transition-all duration-300 text-white hover:text-secondary\"\n    //            );\n    //            setTgl2(\n    //              \"absolute left-[19vw] bottom-[10vh] transition-all duration-300 text-white hover:text-secondary\"\n    //            );\n    //            toggleLCycle[0].init = true;\n    //          }\n    //        }\n    //      }, [eleventh, eleventhA, selectedDark, toggled, skl1, skl2, skl3, skl4]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: handleSubmit,\n            className: \"h-[25%] mt-4 absolute top-[9rem] pt-8 border-zinc-500 w-full md:w-3/4\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"ml-[39%] font-bold text-lg mb-2\",\n                    children: frmlbl1[selectedLang]\n                }, void 0, false, {\n                    fileName: \"C:\\\\Academlo\\\\portafolio\\\\portfolio\\\\src\\\\components\\\\Contact\\\\Contact.tsx\",\n                    lineNumber: 73,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-[48%] ml-32 border-2 border-zinc-500 border-solid\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: \"ml-[2%] w-[89%] mt-[1%] mb-[1%] bg-[lightblue] border-solid custom-placeholder text-md   md:text-sm hover:bg-blue-300\",\n                            autoComplete: \"off\",\n                            required: true,\n                            placeholder: \"\",\n                            id: \"Name\",\n                            type: \"text\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Academlo\\\\portafolio\\\\portfolio\\\\src\\\\components\\\\Contact\\\\Contact.tsx\",\n                            lineNumber: 77,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: \"ml-[2%] w-[89%] mt-[1%] mb-[1%] bg-[lightblue] border-solid custom-placeholder text-md   md:text-sm hover:bg-blue-300\",\n                            autoComplete: \"off\",\n                            required: true,\n                            placeholder: \"\",\n                            id: \"Email\",\n                            type: \"text\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Academlo\\\\portafolio\\\\portfolio\\\\src\\\\components\\\\Contact\\\\Contact.tsx\",\n                            lineNumber: 86,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                            className: \"ml-[2%] w-[89%] mt-[1%] mb-[1%] h-[7rem] bg-[lightblue] border-solid custom-placeholder   text-md md:text-sm hover:bg-blue-300\",\n                            rows: 4,\n                            autoComplete: \"off\",\n                            required: true,\n                            placeholder: \"\",\n                            id: \"Message\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Academlo\\\\portafolio\\\\portfolio\\\\src\\\\components\\\\Contact\\\\Contact.tsx\",\n                            lineNumber: 95,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"ml-[25%] mt-4 mb-4 bg-cyan-600 w-[5rem] text-black text-lg   border-solid border-gray-400 md:ml-[10%]   md:w-3/4 md:text-sm hover:bg-blue-300\",\n                            children: \"Enviar\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Academlo\\\\portafolio\\\\portfolio\\\\src\\\\components\\\\Contact\\\\Contact.tsx\",\n                            lineNumber: 104,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Academlo\\\\portafolio\\\\portfolio\\\\src\\\\components\\\\Contact\\\\Contact.tsx\",\n                    lineNumber: 76,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Academlo\\\\portafolio\\\\portfolio\\\\src\\\\components\\\\Contact\\\\Contact.tsx\",\n            lineNumber: 69,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Academlo\\\\portafolio\\\\portfolio\\\\src\\\\components\\\\Contact\\\\Contact.tsx\",\n        lineNumber: 68,\n        columnNumber: 5\n    }, this);\n}\n_s(Mailer, \"07tGFJuc1C/LNUC9A+GYBWDw0d4=\");\n_c = Mailer;\nvar _c;\n$RefreshReg$(_c, \"Mailer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0NvbnRhY3QvQ29udGFjdC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQzRDO0FBSXJDLFNBQVNDOztJQUNkLE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdILCtDQUFRQSxDQUFDO0lBQ2pELE1BQU0sQ0FBQ0ksY0FBY0MsZ0JBQWdCLEdBQUdMLCtDQUFRQSxDQUFDO0lBRWpELElBQUlNLGVBQWU7UUFBQztZQUFFQyxNQUFNO1FBQU07S0FBRTtJQUNwQyxNQUFNQyxVQUFVO1FBQUM7UUFBYztLQUFhO0lBQzVDLE1BQU1DLFVBQVU7UUFBQztRQUFVO0tBQU87SUFDbEMsTUFBTUMsVUFBVTtRQUFDO1FBQXNCO0tBQVE7SUFDL0MsTUFBTUMsVUFBVTtRQUFDO1FBQVc7S0FBVTtJQUN0QyxNQUFNQyxXQUFXO0lBQ2pCLE1BQU1DLFlBQVk7UUFBQztRQUFVO0tBQU87SUFFcEMsTUFBTUMsaUJBQWlCO1FBQ3JCWCxnQkFBZ0JELGlCQUFpQixJQUFJLElBQUk7SUFDM0M7SUFFQSxNQUFNYSxpQkFBaUI7UUFDckJWLGdCQUFnQkQsaUJBQWlCLElBQUksSUFBSTtJQUMzQztJQUVBLE1BQU1ZLGVBQWUsQ0FBQ0M7UUFDcEJBLEVBQUVDLGNBQWM7UUFDaEIsTUFBTUMsT0FBT0YsRUFBRUcsTUFBTSxDQUFDQyxJQUFJLENBQUNDLEtBQUs7UUFDaEMsTUFBTUMsUUFBUU4sRUFBRUcsTUFBTSxDQUFDSSxLQUFLLENBQUNGLEtBQUs7UUFDbEMsTUFBTUcsVUFBVVIsRUFBRUcsTUFBTSxDQUFDTSxPQUFPLENBQUNKLEtBQUs7UUFFdEMsTUFBTUssU0FBUztRQUNmLE1BQU1DLFFBQ0pELFNBQVMsV0FBV1IsT0FBTyxhQUFhSSxRQUFRLGVBQWVFO1FBQ2pFSSxPQUFPQyxJQUFJLENBQUNGLE9BQU87UUFDbkIsT0FBTztJQUNUO0lBRUEsdUJBQXVCO0lBQ3ZCLDBEQUEwRDtJQUMxRCw0QkFBNEI7SUFDNUIsb0VBQW9FO0lBQ3BFLHlCQUF5QjtJQUN6QixnQ0FBZ0M7SUFDaEMsdUZBQXVGO0lBQ3ZGLHVGQUF1RjtJQUN2RixjQUFjO0lBQ2QseURBQXlEO0lBQ3pELDhDQUE4QztJQUM5Qyx3Q0FBd0M7SUFDeEMsK0JBQStCO0lBQy9CLCtCQUErQjtJQUMvQiwrQkFBK0I7SUFDL0IsK0JBQStCO0lBQy9CLCtCQUErQjtJQUMvQixzQkFBc0I7SUFDdEIsZ0hBQWdIO0lBQ2hILGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsZ0hBQWdIO0lBQ2hILGdCQUFnQjtJQUNoQiwwQ0FBMEM7SUFDMUMsYUFBYTtJQUNiLFdBQVc7SUFDWCxpRkFBaUY7SUFFakYscUJBQ0UsOERBQUNHO2tCQUNDLDRFQUFDQztZQUNDQyxVQUFVakI7WUFDVmtCLFdBQVk7OzhCQUVaLDhEQUFDQztvQkFBR0QsV0FBWTs4QkFDYjFCLE9BQU8sQ0FBQ04sYUFBYTs7Ozs7OzhCQUV4Qiw4REFBQzZCO29CQUFJRyxXQUFVOztzQ0FDYiw4REFBQ0U7NEJBQ0NGLFdBQVU7NEJBRVZHLGNBQWE7NEJBQ2JDLFVBQVU7NEJBQ1ZDLGFBQVk7NEJBQ1pDLElBQUc7NEJBQ0hDLE1BQUs7Ozs7OztzQ0FFUCw4REFBQ0w7NEJBQ0NGLFdBQVU7NEJBRVZHLGNBQWE7NEJBQ2JDLFVBQVU7NEJBQ1ZDLGFBQVk7NEJBQ1pDLElBQUc7NEJBQ0hDLE1BQUs7Ozs7OztzQ0FFUCw4REFBQ0M7NEJBQ0NSLFdBQVU7NEJBRVZTLE1BQU07NEJBQ05OLGNBQWE7NEJBQ2JDLFVBQVU7NEJBQ1ZDLGFBQVk7NEJBQ1pDLElBQUc7Ozs7OztzQ0FFTCw4REFBQ0k7NEJBQ0NWLFdBQVU7c0NBR1g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT1g7R0E3R2dCakM7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ29udGFjdC9Db250YWN0LnRzeD85ZjQzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHRvZ2dsZURhcmtTZXJ2aWNlIH0gZnJvbSBcIkAvdXRpbHMvZGFya1V0aWxzXCI7XHJcbmltcG9ydCB7IFJpRmxhZ0xpbmUsIFJpTW9vbkZpbGwgfSBmcm9tIFwicmVhY3QtaWNvbnMvcmlcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBNYWlsZXIoKSB7XHJcbiAgY29uc3QgW3NlbGVjdGVkTGFuZywgc2V0U2VsZWN0ZWRMYW5nXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtzZWxlY3RlZERhcmssIHNldFNlbGVjdGVkRGFya10gPSB1c2VTdGF0ZSgxKTtcclxuXHJcbiAgbGV0IHRvZ2dsZUxDeWNsZSA9IFt7IGluaXQ6IGZhbHNlIH1dO1xyXG4gIGNvbnN0IGZybWxibDEgPSBbXCJDb250YWN0YW1lXCIsIFwiQ29udGFjdCBNZVwiXTtcclxuICBjb25zdCBmcm1sYmwyID0gW1wiTm9tYnJlXCIsIFwiTmFtZVwiXTtcclxuICBjb25zdCBmcm1sYmwzID0gW1wiQ29ycmVvIGVsZWN0csOzbmljb1wiLCBcIkVtYWlsXCJdO1xyXG4gIGNvbnN0IGZybWxibDQgPSBbXCJNZW5zYWplXCIsIFwiTWVzc2FnZVwiXTtcclxuICBjb25zdCByb3dwYXJhbSA9IDQ7XHJcbiAgY29uc3Qgc2VuZHBhcmFtID0gW1wiRW52aWFyXCIsIFwiU2VuZFwiXTtcclxuXHJcbiAgY29uc3QgdG9nZ2xlTGFuZ3VhZ2UgPSAoKSA9PiB7XHJcbiAgICBzZXRTZWxlY3RlZExhbmcoc2VsZWN0ZWRMYW5nID09PSAwID8gMSA6IDApO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHRvZ2dsZURhcmtNb2RlID0gKCkgPT4ge1xyXG4gICAgc2V0U2VsZWN0ZWREYXJrKHNlbGVjdGVkRGFyayA9PT0gMCA/IDEgOiAwKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZTogYW55KSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBuYW1lID0gZS50YXJnZXQuTmFtZS52YWx1ZTtcclxuICAgIGNvbnN0IGVtYWlsID0gZS50YXJnZXQuRW1haWwudmFsdWU7XHJcbiAgICBjb25zdCBtZXNzYWdlID0gZS50YXJnZXQuTWVzc2FnZS52YWx1ZTtcclxuXHJcbiAgICBjb25zdCBVUkxXU1AgPSBcImh0dHBzOi8vYXBpLndoYXRzYXBwLmNvbS9zZW5kP3Bob25lPTU3MzEwMjYxMjg2OCZ0ZXh0PVwiO1xyXG4gICAgY29uc3QgZW52aW8gPVxyXG4gICAgICBVUkxXU1AgKyBcIk5hbWU6IFwiICsgbmFtZSArIFwiIEVtYWlsOiBcIiArIGVtYWlsICsgXCIgTWVzc2FnZTogXCIgKyBtZXNzYWdlO1xyXG4gICAgd2luZG93Lm9wZW4oZW52aW8sIFwiX2JsYW5rXCIpO1xyXG4gICAgcmV0dXJuIDA7XHJcbiAgfTtcclxuXHJcbiAgLy8gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAvLyAgICAgICAgY29uc3QgbWFpbkVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIlwiKTtcclxuICAvLyAgICAgICAgaWYgKG1haW5FbGVtZW50KSB7XHJcbiAgLy8gICAgICAgICAgc2V0RWxldmVudGgoc2VsZWN0ZWREYXJrID09PSAxID8gXCIjRkZGRkZGXCIgOiBcIiMwMDAwMDBcIik7XHJcbiAgLy8gICAgICAgICAgc2V0RWxldmVudGhBKFxyXG4gIC8vICAgICAgICAgICAgc2VsZWN0ZWREYXJrID09PSAxXHJcbiAgLy8gICAgICAgICAgICAgID8gXCJ0ZXh0LWJsYWNrIGJnLXdoaXRlIGFic29sdXRlIHRvcC1bMjV2aF0gbGVmdC1bMzJ2d10gdy1bNjAlXSB0ZXh0LXNtXCJcclxuICAvLyAgICAgICAgICAgICAgOiBcInRleHQtd2hpdGUgYmctYmxhY2sgYWJzb2x1dGUgdG9wLVsyNXZoXSBsZWZ0LVszMnZ3XSB3LVs2MCVdIHRleHQtc21cIlxyXG4gIC8vICAgICAgICAgICk7XHJcbiAgLy8gICAgICAgICAgbWFpbkVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gZWxldmVudGg7XHJcbiAgLy8gICAgICAgICAgbWFpbkVsZW1lbnQuY2xhc3NOYW1lID0gZWxldmVudGhBO1xyXG4gIC8vICAgICAgICAgIGlmICghdG9nZ2xlTEN5Y2xlWzBdLmluaXQpIHtcclxuICAvLyAgICAgICAgICAgIHRvZ2dsZWQ/LmNsaWNrKCk7XHJcbiAgLy8gICAgICAgICAgICBzZXRTa2wxKHNraWxsczEpO1xyXG4gIC8vICAgICAgICAgICAgc2V0U2tsMihza2lsbHMyKTtcclxuICAvLyAgICAgICAgICAgIHNldFNrbDMoc2tpbGxzMyk7XHJcbiAgLy8gICAgICAgICAgICBzZXRTa2w0KHNraWxsczQpO1xyXG4gIC8vICAgICAgICAgICAgc2V0VGdsMShcclxuICAvLyAgICAgICAgICAgICAgXCJhYnNvbHV0ZSBsZWZ0LVsxMHZ3XSBib3R0b20tWzEwdmhdIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCB0ZXh0LXdoaXRlIGhvdmVyOnRleHQtc2Vjb25kYXJ5XCJcclxuICAvLyAgICAgICAgICAgICk7XHJcbiAgLy8gICAgICAgICAgICBzZXRUZ2wyKFxyXG4gIC8vICAgICAgICAgICAgICBcImFic29sdXRlIGxlZnQtWzE5dnddIGJvdHRvbS1bMTB2aF0gdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIHRleHQtd2hpdGUgaG92ZXI6dGV4dC1zZWNvbmRhcnlcIlxyXG4gIC8vICAgICAgICAgICAgKTtcclxuICAvLyAgICAgICAgICAgIHRvZ2dsZUxDeWNsZVswXS5pbml0ID0gdHJ1ZTtcclxuICAvLyAgICAgICAgICB9XHJcbiAgLy8gICAgICAgIH1cclxuICAvLyAgICAgIH0sIFtlbGV2ZW50aCwgZWxldmVudGhBLCBzZWxlY3RlZERhcmssIHRvZ2dsZWQsIHNrbDEsIHNrbDIsIHNrbDMsIHNrbDRdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxmb3JtXHJcbiAgICAgICAgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH1cclxuICAgICAgICBjbGFzc05hbWU9e2BoLVsyNSVdIG10LTQgYWJzb2x1dGUgdG9wLVs5cmVtXSBwdC04IGJvcmRlci16aW5jLTUwMCB3LWZ1bGwgbWQ6dy0zLzRgfVxyXG4gICAgICA+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT17YG1sLVszOSVdIGZvbnQtYm9sZCB0ZXh0LWxnIG1iLTJgfT5cclxuICAgICAgICAgIHtmcm1sYmwxW3NlbGVjdGVkTGFuZ119XHJcbiAgICAgICAgPC9oMj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctWzQ4JV0gbWwtMzIgYm9yZGVyLTIgYm9yZGVyLXppbmMtNTAwIGJvcmRlci1zb2xpZFwiPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1sLVsyJV0gdy1bODklXSBtdC1bMSVdIG1iLVsxJV0gYmctW2xpZ2h0Ymx1ZV0gYm9yZGVyLXNvbGlkIGN1c3RvbS1wbGFjZWhvbGRlciB0ZXh0LW1kXHJcbiAgICAgICAgICAgICAgIG1kOnRleHQtc20gaG92ZXI6YmctYmx1ZS0zMDBcIlxyXG4gICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxyXG4gICAgICAgICAgICByZXF1aXJlZD17dHJ1ZX1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJcIlxyXG4gICAgICAgICAgICBpZD1cIk5hbWVcIlxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1sLVsyJV0gdy1bODklXSBtdC1bMSVdIG1iLVsxJV0gYmctW2xpZ2h0Ymx1ZV0gYm9yZGVyLXNvbGlkIGN1c3RvbS1wbGFjZWhvbGRlciB0ZXh0LW1kXHJcbiAgICAgICAgICAgICAgIG1kOnRleHQtc20gaG92ZXI6YmctYmx1ZS0zMDBcIlxyXG4gICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxyXG4gICAgICAgICAgICByZXF1aXJlZD17dHJ1ZX1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJcIlxyXG4gICAgICAgICAgICBpZD1cIkVtYWlsXCJcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtbC1bMiVdIHctWzg5JV0gbXQtWzElXSBtYi1bMSVdIGgtWzdyZW1dIGJnLVtsaWdodGJsdWVdIGJvcmRlci1zb2xpZCBjdXN0b20tcGxhY2Vob2xkZXJcclxuICAgICAgICAgICAgICAgdGV4dC1tZCBtZDp0ZXh0LXNtIGhvdmVyOmJnLWJsdWUtMzAwXCJcclxuICAgICAgICAgICAgcm93cz17NH1cclxuICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcclxuICAgICAgICAgICAgcmVxdWlyZWQ9e3RydWV9XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiXCJcclxuICAgICAgICAgICAgaWQ9XCJNZXNzYWdlXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1sLVsyNSVdIG10LTQgbWItNCBiZy1jeWFuLTYwMCB3LVs1cmVtXSB0ZXh0LWJsYWNrIHRleHQtbGdcclxuICAgICAgICAgICAgICAgYm9yZGVyLXNvbGlkIGJvcmRlci1ncmF5LTQwMCBtZDptbC1bMTAlXVxyXG4gICAgICAgICAgICAgICAgIG1kOnctMy80IG1kOnRleHQtc20gaG92ZXI6YmctYmx1ZS0zMDBcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBFbnZpYXJcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIk1haWxlciIsInNlbGVjdGVkTGFuZyIsInNldFNlbGVjdGVkTGFuZyIsInNlbGVjdGVkRGFyayIsInNldFNlbGVjdGVkRGFyayIsInRvZ2dsZUxDeWNsZSIsImluaXQiLCJmcm1sYmwxIiwiZnJtbGJsMiIsImZybWxibDMiLCJmcm1sYmw0Iiwicm93cGFyYW0iLCJzZW5kcGFyYW0iLCJ0b2dnbGVMYW5ndWFnZSIsInRvZ2dsZURhcmtNb2RlIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwibmFtZSIsInRhcmdldCIsIk5hbWUiLCJ2YWx1ZSIsImVtYWlsIiwiRW1haWwiLCJtZXNzYWdlIiwiTWVzc2FnZSIsIlVSTFdTUCIsImVudmlvIiwid2luZG93Iiwib3BlbiIsImRpdiIsImZvcm0iLCJvblN1Ym1pdCIsImNsYXNzTmFtZSIsImgyIiwiaW5wdXQiLCJhdXRvQ29tcGxldGUiLCJyZXF1aXJlZCIsInBsYWNlaG9sZGVyIiwiaWQiLCJ0eXBlIiwidGV4dGFyZWEiLCJyb3dzIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Contact/Contact.tsx\n"));

/***/ })

});