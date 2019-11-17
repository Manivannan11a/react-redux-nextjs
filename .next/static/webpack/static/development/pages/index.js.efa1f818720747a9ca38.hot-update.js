webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/index.js");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Link */ "./node_modules/@material-ui/core/esm/Link/index.js");
/* harmony import */ var _component_Index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../component/Index */ "./component/Index.js");
/* harmony import */ var _lib_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/redux */ "./lib/redux.js");
/* harmony import */ var _lib_action_AppAction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/action/AppAction */ "./lib/action/AppAction.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../i18n */ "./i18n.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
var _jsxFileName = "/Users/manivannan/Documents/sample-app/reactjs/evex/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;













function Copyright() {
  return __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    variant: "body2",
    color: "textSecondary",
    align: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, 'Copyright © ', __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_4__["default"], {
    color: "inherit",
    href: "https://material-ui.com/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Your Website"), ' ', new Date().getFullYear(), '.');
}

var Index = function Index(props) {
  console.log(props, "props");
  var t = props.t,
      getConfig = props.getConfig;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    getConfig();
  }, []);
  return __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_1__["default"], {
    maxWidth: "sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3__["default"], {
    my: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    variant: "h4",
    component: "h1",
    gutterBottom: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx("button", {
    type: "button",
    onClick: function onClick() {
      return _i18n__WEBPACK_IMPORTED_MODULE_8__["i18n"].changeLanguage(_i18n__WEBPACK_IMPORTED_MODULE_8__["i18n"].language === 'en' ? 'de' : 'en');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, t('change-locale')), t('title'), " - ", "http://www.mocky.io/v2/"), __jsx(_component_Index__WEBPACK_IMPORTED_MODULE_5__["default"], {
    t: t,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), __jsx(Copyright, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  })));
};

Index.getInitialProps = function (_ref) {
  var reduxStore = _ref.reduxStore;
  var dispatch = reduxStore.dispatch;
  dispatch(Object(_lib_action_AppAction__WEBPACK_IMPORTED_MODULE_7__["getConfig"])());
  return {
    namespacesRequired: ['common']
  };
};

Index.propTypes = {
  t: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func.isRequired
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getConfig: Object(redux__WEBPACK_IMPORTED_MODULE_11__["bindActionCreators"])(_lib_action_AppAction__WEBPACK_IMPORTED_MODULE_7__["getConfig"], dispatch)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_8__["withTranslation"])('common')(Object(_lib_redux__WEBPACK_IMPORTED_MODULE_6__["withRedux"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["connect"])(null, mapDispatchToProps)(Index))));

/***/ })

})
//# sourceMappingURL=index.js.efa1f818720747a9ca38.hot-update.js.map