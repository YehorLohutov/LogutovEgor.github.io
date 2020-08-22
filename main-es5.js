function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./not-found/not-found.component */
    "./src/app/not-found/not-found.component.ts");
    /* harmony import */


    var _section_section_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./section/section.component */
    "./src/app/section/section.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _edit_footer_edit_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./edit-footer/edit-footer.component */
    "./src/app/edit-footer/edit-footer.component.ts");
    /* harmony import */


    var _guards_edit_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./guards/edit.guard */
    "./src/app/guards/edit.guard.ts");
    /* harmony import */


    var _author_author_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./author/author.component */
    "./src/app/author/author.component.ts");
    /* harmony import */


    var _edit_author_edit_author_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./edit-author/edit-author.component */
    "./src/app/edit-author/edit-author.component.ts");
    /* harmony import */


    var _biography_biography_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./biography/biography.component */
    "./src/app/biography/biography.component.ts");
    /* harmony import */


    var _edit_biography_edit_biography_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./edit-biography/edit-biography.component */
    "./src/app/edit-biography/edit-biography.component.ts");
    /* harmony import */


    var _library_library_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./library/library.component */
    "./src/app/library/library.component.ts");
    /* harmony import */


    var _edit_library_edit_library_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./edit-library/edit-library.component */
    "./src/app/edit-library/edit-library.component.ts");
    /* harmony import */


    var _indicators_indicators_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./indicators/indicators.component */
    "./src/app/indicators/indicators.component.ts");
    /* harmony import */


    var _edit_indicators_edit_indicators_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./edit-indicators/edit-indicators.component */
    "./src/app/edit-indicators/edit-indicators.component.ts");
    /* harmony import */


    var _photos_photos_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./photos/photos.component */
    "./src/app/photos/photos.component.ts");
    /* harmony import */


    var _video_video_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./video/video.component */
    "./src/app/video/video.component.ts");

    var routes = [{
      path: '',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }, {
      path: 'login',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]
    }, {
      path: 'home',
      redirectTo: '/'
    }, {
      path: 'section',
      component: _section_section_component__WEBPACK_IMPORTED_MODULE_4__["SectionComponent"]
    }, {
      path: 'author',
      component: _author_author_component__WEBPACK_IMPORTED_MODULE_8__["AuthorComponent"]
    }, {
      path: 'biography',
      component: _biography_biography_component__WEBPACK_IMPORTED_MODULE_10__["BiographyComponent"]
    }, {
      path: 'video',
      component: _video_video_component__WEBPACK_IMPORTED_MODULE_17__["VideoComponent"]
    }, {
      path: 'library',
      component: _library_library_component__WEBPACK_IMPORTED_MODULE_12__["LibraryComponent"]
    }, {
      path: 'indicators',
      component: _indicators_indicators_component__WEBPACK_IMPORTED_MODULE_14__["IndicatorsComponent"]
    }, {
      path: 'photos',
      component: _photos_photos_component__WEBPACK_IMPORTED_MODULE_16__["PhotosComponent"]
    }, {
      path: 'edit-footer',
      component: _edit_footer_edit_footer_component__WEBPACK_IMPORTED_MODULE_6__["EditFooterComponent"],
      canActivate: [_guards_edit_guard__WEBPACK_IMPORTED_MODULE_7__["EditGuard"]]
    }, {
      path: 'edit-author',
      component: _edit_author_edit_author_component__WEBPACK_IMPORTED_MODULE_9__["EditAuthorComponent"],
      canActivate: [_guards_edit_guard__WEBPACK_IMPORTED_MODULE_7__["EditGuard"]]
    }, {
      path: 'edit-biography',
      component: _edit_biography_edit_biography_component__WEBPACK_IMPORTED_MODULE_11__["EditBiographyComponent"],
      canActivate: [_guards_edit_guard__WEBPACK_IMPORTED_MODULE_7__["EditGuard"]]
    }, {
      path: 'edit-library',
      component: _edit_library_edit_library_component__WEBPACK_IMPORTED_MODULE_13__["EditLibraryComponent"],
      canActivate: [_guards_edit_guard__WEBPACK_IMPORTED_MODULE_7__["EditGuard"]]
    }, {
      path: 'edit-indicators',
      component: _edit_indicators_edit_indicators_component__WEBPACK_IMPORTED_MODULE_15__["EditIndicatorsComponent"],
      canActivate: [_guards_edit_guard__WEBPACK_IMPORTED_MODULE_7__["EditGuard"]]
    }, {
      path: '**',
      component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 4,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]],
      styles: ["*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: \"Comfortaa\", cursive;\n}\n\n.container[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  max-width: 1200px;\n  height: 100%;\n}\n\nbody[_ngcontent-%COMP%] {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.header[_ngcontent-%COMP%] {\n  background: linear-gradient(158.11deg, #014B80 34.34%, #4892FF 103.15%);\n  padding: 15px 0;\n}\n\n.header__logolink[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\n.header__content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.header__logo[_ngcontent-%COMP%] {\n  width: 107px;\n  height: 70px;\n}\n\n.header__text[_ngcontent-%COMP%] {\n  font-family: Comfortaa;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 16px;\n  line-height: 18px;\n  color: #FFFFFF;\n  padding-left: 28px;\n}\n\n.main[_ngcontent-%COMP%] {\n  padding: 64px 0;\n}\n\n.main__projectname[_ngcontent-%COMP%] {\n  width: 1096px;\n  font-family: Comfortaa;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 36px;\n  line-height: 40px;\n  text-align: center;\n  color: #575965;\n  margin: 0 auto;\n}\n\n.main__content[_ngcontent-%COMP%] {\n  padding-top: 64px;\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n}\n\n.main__slider[_ngcontent-%COMP%] {\n  width: 421px;\n  height: 650px;\n}\n\n.main__sliderimg[_ngcontent-%COMP%] {\n  overflow: hidden;\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.main__section[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background: #F4F4F4;\n  box-shadow: 0px 2px 4px #CFD8DC;\n  margin-bottom: 25px;\n  padding: 80px 155px;\n  font-family: Comfortaa;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 36px;\n  line-height: 40px;\n  text-align: center;\n  color: #575965;\n}\n\n.main__section[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n\n.main__sectionlink[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #575965;\n}\n\n.footer[_ngcontent-%COMP%] {\n  background: #F4F4F4;\n  padding-top: 36px;\n}\n\n.footer__blocks[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.footer__contacts[_ngcontent-%COMP%] {\n  font-family: Comfortaa;\n  font-style: normal;\n  font-size: 18px;\n  line-height: 20px;\n  color: #575965;\n}\n\n.footer__bold[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.footer__information[_ngcontent-%COMP%] {\n  padding-bottom: 14px;\n}\n\n.footer__information[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:last-child {\n  padding-bottom: 0;\n}\n\n.footer__socials[_ngcontent-%COMP%] {\n  font-family: Comfortaa;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 18px;\n  line-height: 20px;\n  color: #575965;\n  padding-bottom: 14px;\n}\n\n.footer__link[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #3B5998;\n  font-size: 22px;\n}\n\n.footer__librarylink[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #575965;\n}\n\n.footer__location[_ngcontent-%COMP%] {\n  font-family: Comfortaa;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 18px;\n  line-height: 20px;\n  color: #575965;\n}\n\n.line[_ngcontent-%COMP%] {\n  display: block;\n  height: 1px;\n  width: 100%;\n  background: rgba(87, 89, 101, 0.35);\n  margin-top: 28px;\n  margin-bottom: 18px;\n}\n\n.copyright[_ngcontent-%COMP%] {\n  font-family: Comfortaa;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 18px;\n  line-height: 20px;\n  color: #575965;\n  margin: 0 auto;\n  text-align: center;\n  padding-bottom: 18px;\n}\n\n@media screen and (max-width: 1250px) {\n  .main__projectname[_ngcontent-%COMP%] {\n    font-size: 35px;\n    width: 1046px;\n  }\n\n  .container[_ngcontent-%COMP%] {\n    max-width: 1000px;\n  }\n\n  .main__slider[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n  }\n\n  .main__section[_ngcontent-%COMP%] {\n    font-size: 30px;\n  }\n}\n\n@media screen and (max-width: 1105px) {\n  .main__projectname[_ngcontent-%COMP%] {\n    font-size: 28px;\n    width: 850px;\n  }\n}\n\n@media screen and (max-width: 1105px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 800px;\n  }\n\n  .header__text[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n\n  .main__section[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n\n  .main__slider[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .main__infosection[_ngcontent-%COMP%] {\n    margin: 0 auto;\n  }\n}\n\n@media screen and (max-width: 908px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 750px;\n  }\n\n  .header__text[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n\n  .main__projectname[_ngcontent-%COMP%] {\n    font-size: 18px;\n    width: 556px;\n    margin: 0 auto;\n  }\n}\n\n@media screen and (max-width: 780px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 680px;\n  }\n}\n\n@media screen and (max-width: 695px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 600px;\n  }\n}\n\n@media screen and (max-width: 640px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 550px;\n  }\n}\n\n@media screen and (max-width: 585px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 500px;\n  }\n\n  .main__projectname[_ngcontent-%COMP%] {\n    font-size: 16px;\n    width: 484px;\n    margin: 0 auto;\n  }\n\n  .footer__information[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n\n  .footer__socials[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n\n  .footer__link[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n\n  .footer__location[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXEdpdEh1YlxcbGlicmFyeS9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUNBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtBQ0NGOztBREVBO0VBQ0UsdUVBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FEQ0U7RUFDRSxxQkFBQTtBQ0NKOztBREVFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FDQUo7O0FER0U7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQ0RKOztBRElFO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDRko7O0FET0E7RUFDRSxlQUFBO0FDSkY7O0FETUU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQ0pKOztBRE9FO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSx1QkFBQTtBQ0xKOztBRFFFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QUNOSjs7QURTRTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FDUEo7O0FEV0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsK0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDVEo7O0FEV0k7RUFDRSxnQkFBQTtBQ1ROOztBRGFFO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0FDWEo7O0FEZUE7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0FDWkY7O0FEY0U7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQ1pKOztBRGVFO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNiSjs7QURnQkU7RUFDRSxpQkFBQTtBQ2RKOztBRGlCRTtFQUNFLG9CQUFBO0FDZko7O0FEaUJJO0VBQ0UsaUJBQUE7QUNmTjs7QURtQkU7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7QUNqQko7O0FEb0JFO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ2xCSjs7QURxQkU7RUFDRSxxQkFBQTtFQUNBLGNBQUE7QUNuQko7O0FEc0JFO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ3BCSjs7QUR5QkE7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxtQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUN0QkY7O0FEeUJBO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FDdEJGOztBRHlCQTtFQUNFO0lBQ0UsZUFBQTtJQUNBLGFBQUE7RUN0QkY7O0VEeUJBO0lBQ0UsaUJBQUE7RUN0QkY7O0VEeUJBO0lBQ0UsV0FBQTtJQUNBLFlBQUE7RUN0QkY7O0VEeUJBO0lBQ0UsZUFBQTtFQ3RCRjtBQUNGOztBRDBCQTtFQUNFO0lBQ0UsZUFBQTtJQUNBLFlBQUE7RUN4QkY7QUFDRjs7QUQyQkE7RUFDRTtJQUNFLGdCQUFBO0VDekJGOztFRDRCQTtJQUNFLGVBQUE7RUN6QkY7O0VENEJBO0lBQ0UsZUFBQTtFQ3pCRjs7RUQ0QkE7SUFDRSxhQUFBO0VDekJGOztFRDRCQTtJQUNFLGNBQUE7RUN6QkY7QUFDRjs7QUQ0QkE7RUFDRTtJQUNFLGdCQUFBO0VDMUJGOztFRDZCQTtJQUNFLGVBQUE7RUMxQkY7O0VENkJBO0lBQ0UsZUFBQTtJQUNBLFlBQUE7SUFDQSxjQUFBO0VDMUJGO0FBQ0Y7O0FEOEJBO0VBQ0U7SUFDRSxnQkFBQTtFQzVCRjtBQUNGOztBRCtCQTtFQUNFO0lBQ0UsZ0JBQUE7RUM3QkY7QUFDRjs7QURnQ0E7RUFFRTtJQUNFLGdCQUFBO0VDL0JGO0FBQ0Y7O0FEbUNBO0VBQ0U7SUFDRSxnQkFBQTtFQ2pDRjs7RURvQ0E7SUFDRSxlQUFBO0lBQ0EsWUFBQTtJQUNBLGNBQUE7RUNqQ0Y7O0VEb0NBO0lBQ0UsZUFBQTtFQ2pDRjs7RURvQ0E7SUFDRSxlQUFBO0VDakNGOztFRG9DQTtJQUNFLGVBQUE7RUNqQ0Y7O0VEb0NBO0lBQ0UsZUFBQTtFQ2pDRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGZvbnQtZmFtaWx5OiAnQ29tZm9ydGFhJywgY3Vyc2l2ZTtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5ib2R5e1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLmhlYWRlcntcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTU4LjExZGVnLCAjMDE0QjgwIDM0LjM0JSwgIzQ4OTJGRiAxMDMuMTUlKTtcclxuICBwYWRkaW5nOiAxNXB4IDA7XHJcblxyXG4gICZfX2xvZ29saW5re1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxuXHJcbiAgJl9fY29udGVudHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgJl9fbG9nb3tcclxuICAgIHdpZHRoOiAxMDdweDtcclxuICAgIGhlaWdodDogNzBweDtcclxuICB9XHJcblxyXG4gICZfX3RleHR7XHJcbiAgICBmb250LWZhbWlseTogQ29tZm9ydGFhO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyOHB4O1xyXG4gIH1cclxufVxyXG5cclxuXHJcbi5tYWlue1xyXG4gIHBhZGRpbmc6IDY0cHggMDtcclxuXHJcbiAgJl9fcHJvamVjdG5hbWV7XHJcbiAgICB3aWR0aDogMTA5NnB4O1xyXG4gICAgZm9udC1mYW1pbHk6IENvbWZvcnRhYTtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzU3NTk2NTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gIH1cclxuXHJcbiAgJl9fY29udGVudHtcclxuICAgIHBhZGRpbmctdG9wOiA2NHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIH1cclxuXHJcbiAgJl9fc2xpZGVye1xyXG4gICAgd2lkdGg6IDQyMXB4O1xyXG4gICAgaGVpZ2h0OiA2NTBweDtcclxuICB9XHJcblxyXG4gICZfX3NsaWRlcmltZ3tcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIH1cclxuXHJcblxyXG4gICZfX3NlY3Rpb257XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6ICNGNEY0RjQ7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDRweCAjQ0ZEOERDO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICAgIHBhZGRpbmc6IDgwcHggMTU1cHg7XHJcbiAgICBmb250LWZhbWlseTogQ29tZm9ydGFhO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMzZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICM1NzU5NjU7XHJcblxyXG4gICAgOmxhc3QtY2hpbGR7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmX19zZWN0aW9ubGlua3tcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiAjNTc1OTY1O1xyXG4gIH1cclxufVxyXG5cclxuLmZvb3RlcntcclxuICBiYWNrZ3JvdW5kOiAjRjRGNEY0O1xyXG4gIHBhZGRpbmctdG9wOiAzNnB4O1xyXG5cclxuICAmX19ibG9ja3N7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gICZfX2NvbnRhY3Rze1xyXG4gICAgZm9udC1mYW1pbHk6IENvbWZvcnRhYTtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgY29sb3I6ICM1NzU5NjU7XHJcbiAgfVxyXG5cclxuICAmX19ib2xke1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG5cclxuICAmX19pbmZvcm1hdGlvbntcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNHB4O1xyXG5cclxuICAgIDpsYXN0LWNoaWxke1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICZfX3NvY2lhbHN7XHJcbiAgICBmb250LWZhbWlseTogQ29tZm9ydGFhO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgIGNvbG9yOiAjNTc1OTY1O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE0cHg7XHJcbiAgfVxyXG5cclxuICAmX19saW5re1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6ICMzQjU5OTg7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgfVxyXG5cclxuICAmX19saWJyYXJ5bGlua3tcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiAjNTc1OTY1O1xyXG4gIH1cclxuXHJcbiAgJl9fbG9jYXRpb257XHJcbiAgICBmb250LWZhbWlseTogQ29tZm9ydGFhO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgIGNvbG9yOiAjNTc1OTY1O1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbi5saW5le1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGhlaWdodDogMXB4O1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgYmFja2dyb3VuZDogcmdiYSg4NywgODksIDEwMSwgMC4zNSk7XHJcbiAgbWFyZ2luLXRvcDogMjhweDtcclxuICBtYXJnaW4tYm90dG9tOiAxOHB4O1xyXG59XHJcblxyXG4uY29weXJpZ2h0e1xyXG4gIGZvbnQtZmFtaWx5OiBDb21mb3J0YWE7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBsaW5lLWhlaWdodDogMjBweDtcclxuICBjb2xvcjogIzU3NTk2NTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZy1ib3R0b206IDE4cHg7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTI1MHB4KXtcclxuICAubWFpbl9fcHJvamVjdG5hbWV7XHJcbiAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICB3aWR0aDogMTA0NnB4O1xyXG4gIH1cclxuXHJcbiAgLmNvbnRhaW5lcntcclxuICAgIG1heC13aWR0aDogMTAwMHB4O1xyXG4gIH1cclxuXHJcbiAgLm1haW5fX3NsaWRlcntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLm1haW5fX3NlY3Rpb257XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMTA1cHgpe1xyXG4gIC5tYWluX19wcm9qZWN0bmFtZXtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIHdpZHRoOiA4NTBweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTEwNXB4KXtcclxuICAuY29udGFpbmVye1xyXG4gICAgbWF4LXdpZHRoOiA4MDBweDtcclxuICB9XHJcblxyXG4gIC5oZWFkZXJfX3RleHR7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG5cclxuICAubWFpbl9fc2VjdGlvbntcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICB9XHJcblxyXG4gIC5tYWluX19zbGlkZXJ7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLm1haW5fX2luZm9zZWN0aW9ue1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjkwOHB4KXtcclxuICAuY29udGFpbmVye1xyXG4gICAgbWF4LXdpZHRoOiA3NTBweDtcclxuICB9XHJcblxyXG4gIC5oZWFkZXJfX3RleHR7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgfVxyXG5cclxuICAubWFpbl9fcHJvamVjdG5hbWV7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB3aWR0aDogNTU2cHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICB9XHJcblxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc4MHB4KXtcclxuICAuY29udGFpbmVye1xyXG4gICAgbWF4LXdpZHRoOiA2ODBweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6Njk1cHgpe1xyXG4gIC5jb250YWluZXJ7XHJcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo2NDBweCkge1xyXG5cclxuICAuY29udGFpbmVye1xyXG4gICAgbWF4LXdpZHRoOiA1NTBweDtcclxuICB9XHJcblxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjU4NXB4KSB7XHJcbiAgLmNvbnRhaW5lcntcclxuICAgIG1heC13aWR0aDogNTAwcHg7XHJcbiAgfVxyXG5cclxuICAubWFpbl9fcHJvamVjdG5hbWV7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB3aWR0aDogNDg0cHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICB9XHJcblxyXG4gIC5mb290ZXJfX2luZm9ybWF0aW9ue1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxuXHJcbiAgLmZvb3Rlcl9fc29jaWFsc3tcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcblxyXG4gIC5mb290ZXJfX2xpbmt7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgfVxyXG5cclxuICAuZm9vdGVyX19sb2NhdGlvbntcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcblxyXG59XHJcbiIsIioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZvbnQtZmFtaWx5OiBcIkNvbWZvcnRhYVwiLCBjdXJzaXZlO1xufVxuXG4uY29udGFpbmVyIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1heC13aWR0aDogMTIwMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmJvZHkge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTU4LjExZGVnLCAjMDE0QjgwIDM0LjM0JSwgIzQ4OTJGRiAxMDMuMTUlKTtcbiAgcGFkZGluZzogMTVweCAwO1xufVxuLmhlYWRlcl9fbG9nb2xpbmsge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uaGVhZGVyX19jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5oZWFkZXJfX2xvZ28ge1xuICB3aWR0aDogMTA3cHg7XG4gIGhlaWdodDogNzBweDtcbn1cbi5oZWFkZXJfX3RleHQge1xuICBmb250LWZhbWlseTogQ29tZm9ydGFhO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgcGFkZGluZy1sZWZ0OiAyOHB4O1xufVxuXG4ubWFpbiB7XG4gIHBhZGRpbmc6IDY0cHggMDtcbn1cbi5tYWluX19wcm9qZWN0bmFtZSB7XG4gIHdpZHRoOiAxMDk2cHg7XG4gIGZvbnQtZmFtaWx5OiBDb21mb3J0YWE7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICM1NzU5NjU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLm1haW5fX2NvbnRlbnQge1xuICBwYWRkaW5nLXRvcDogNjRweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cbi5tYWluX19zbGlkZXIge1xuICB3aWR0aDogNDIxcHg7XG4gIGhlaWdodDogNjUwcHg7XG59XG4ubWFpbl9fc2xpZGVyaW1nIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG4ubWFpbl9fc2VjdGlvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICNGNEY0RjQ7XG4gIGJveC1zaGFkb3c6IDBweCAycHggNHB4ICNDRkQ4REM7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gIHBhZGRpbmc6IDgwcHggMTU1cHg7XG4gIGZvbnQtZmFtaWx5OiBDb21mb3J0YWE7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAzNnB4O1xuICBsaW5lLWhlaWdodDogNDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzU3NTk2NTtcbn1cbi5tYWluX19zZWN0aW9uIDpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi5tYWluX19zZWN0aW9ubGluayB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICM1NzU5NjU7XG59XG5cbi5mb290ZXIge1xuICBiYWNrZ3JvdW5kOiAjRjRGNEY0O1xuICBwYWRkaW5nLXRvcDogMzZweDtcbn1cbi5mb290ZXJfX2Jsb2NrcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5mb290ZXJfX2NvbnRhY3RzIHtcbiAgZm9udC1mYW1pbHk6IENvbWZvcnRhYTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBjb2xvcjogIzU3NTk2NTtcbn1cbi5mb290ZXJfX2JvbGQge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5mb290ZXJfX2luZm9ybWF0aW9uIHtcbiAgcGFkZGluZy1ib3R0b206IDE0cHg7XG59XG4uZm9vdGVyX19pbmZvcm1hdGlvbiA6bGFzdC1jaGlsZCB7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xufVxuLmZvb3Rlcl9fc29jaWFscyB7XG4gIGZvbnQtZmFtaWx5OiBDb21mb3J0YWE7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGNvbG9yOiAjNTc1OTY1O1xuICBwYWRkaW5nLWJvdHRvbTogMTRweDtcbn1cbi5mb290ZXJfX2xpbmsge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjM0I1OTk4O1xuICBmb250LXNpemU6IDIycHg7XG59XG4uZm9vdGVyX19saWJyYXJ5bGluayB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICM1NzU5NjU7XG59XG4uZm9vdGVyX19sb2NhdGlvbiB7XG4gIGZvbnQtZmFtaWx5OiBDb21mb3J0YWE7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGNvbG9yOiAjNTc1OTY1O1xufVxuXG4ubGluZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDFweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHJnYmEoODcsIDg5LCAxMDEsIDAuMzUpO1xuICBtYXJnaW4tdG9wOiAyOHB4O1xuICBtYXJnaW4tYm90dG9tOiAxOHB4O1xufVxuXG4uY29weXJpZ2h0IHtcbiAgZm9udC1mYW1pbHk6IENvbWZvcnRhYTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgY29sb3I6ICM1NzU5NjU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctYm90dG9tOiAxOHB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjUwcHgpIHtcbiAgLm1haW5fX3Byb2plY3RuYW1lIHtcbiAgICBmb250LXNpemU6IDM1cHg7XG4gICAgd2lkdGg6IDEwNDZweDtcbiAgfVxuXG4gIC5jb250YWluZXIge1xuICAgIG1heC13aWR0aDogMTAwMHB4O1xuICB9XG5cbiAgLm1haW5fX3NsaWRlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG5cbiAgLm1haW5fX3NlY3Rpb24ge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTEwNXB4KSB7XG4gIC5tYWluX19wcm9qZWN0bmFtZSB7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICAgIHdpZHRoOiA4NTBweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTEwNXB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIG1heC13aWR0aDogODAwcHg7XG4gIH1cblxuICAuaGVhZGVyX190ZXh0IHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cblxuICAubWFpbl9fc2VjdGlvbiB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG5cbiAgLm1haW5fX3NsaWRlciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5tYWluX19pbmZvc2VjdGlvbiB7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwOHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIG1heC13aWR0aDogNzUwcHg7XG4gIH1cblxuICAuaGVhZGVyX190ZXh0IHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cblxuICAubWFpbl9fcHJvamVjdG5hbWUge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB3aWR0aDogNTU2cHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc4MHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIG1heC13aWR0aDogNjgwcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY5NXB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIG1heC13aWR0aDogNjAwcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0MHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIG1heC13aWR0aDogNTUwcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU4NXB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIG1heC13aWR0aDogNTAwcHg7XG4gIH1cblxuICAubWFpbl9fcHJvamVjdG5hbWUge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB3aWR0aDogNDg0cHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cblxuICAuZm9vdGVyX19pbmZvcm1hdGlvbiB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG5cbiAgLmZvb3Rlcl9fc29jaWFscyB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG5cbiAgLmZvb3Rlcl9fbGluayB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG5cbiAgLmZvb3Rlcl9fbG9jYXRpb24ge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_fire__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/fire */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/fire/storage */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");
    /* harmony import */


    var _section_section_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./section/section.component */
    "./src/app/section/section.component.ts");
    /* harmony import */


    var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./not-found/not-found.component */
    "./src/app/not-found/not-found.component.ts");
    /* harmony import */


    var _section_author_section_author_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./section-author/section-author.component */
    "./src/app/section-author/section-author.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
    /* harmony import */


    var _edit_footer_edit_footer_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./edit-footer/edit-footer.component */
    "./src/app/edit-footer/edit-footer.component.ts");
    /* harmony import */


    var _author_author_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./author/author.component */
    "./src/app/author/author.component.ts");
    /* harmony import */


    var _edit_author_edit_author_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./edit-author/edit-author.component */
    "./src/app/edit-author/edit-author.component.ts");
    /* harmony import */


    var _biography_biography_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./biography/biography.component */
    "./src/app/biography/biography.component.ts");
    /* harmony import */


    var _edit_biography_edit_biography_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./edit-biography/edit-biography.component */
    "./src/app/edit-biography/edit-biography.component.ts");
    /* harmony import */


    var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @ckeditor/ckeditor5-angular */
    "./node_modules/@ckeditor/ckeditor5-angular/__ivy_ngcc__/fesm2015/ckeditor-ckeditor5-angular.js");
    /* harmony import */


    var _library_library_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./library/library.component */
    "./src/app/library/library.component.ts");
    /* harmony import */


    var _video_video_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./video/video.component */
    "./src/app/video/video.component.ts");
    /* harmony import */


    var _video_list_item_video_list_item_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./video-list-item/video-list-item.component */
    "./src/app/video-list-item/video-list-item.component.ts");
    /* harmony import */


    var _library_file_library_file_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./library-file/library-file.component */
    "./src/app/library-file/library-file.component.ts");
    /* harmony import */


    var _edit_library_edit_library_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./edit-library/edit-library.component */
    "./src/app/edit-library/edit-library.component.ts");
    /* harmony import */


    var _indicators_indicators_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./indicators/indicators.component */
    "./src/app/indicators/indicators.component.ts");
    /* harmony import */


    var _edit_indicators_edit_indicators_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./edit-indicators/edit-indicators.component */
    "./src/app/edit-indicators/edit-indicators.component.ts");
    /* harmony import */


    var _photos_photos_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./photos/photos.component */
    "./src/app/photos/photos.component.ts");
    /* harmony import */


    var _photo_file_photo_file_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./photo-file/photo-file.component */
    "./src/app/photo-file/photo-file.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__["AngularFireStorage"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestore"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_16__["AngularFireAuth"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_4__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].firebaseConfig), _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__["AngularFireStorageModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestoreModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"], _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_22__["CKEditorModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"], _section_section_component__WEBPACK_IMPORTED_MODULE_11__["SectionComponent"], _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_12__["NotFoundComponent"], _section_author_section_author_component__WEBPACK_IMPORTED_MODULE_13__["SectionAuthorComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"], _edit_footer_edit_footer_component__WEBPACK_IMPORTED_MODULE_17__["EditFooterComponent"], _author_author_component__WEBPACK_IMPORTED_MODULE_18__["AuthorComponent"], _edit_author_edit_author_component__WEBPACK_IMPORTED_MODULE_19__["EditAuthorComponent"], _biography_biography_component__WEBPACK_IMPORTED_MODULE_20__["BiographyComponent"], _edit_biography_edit_biography_component__WEBPACK_IMPORTED_MODULE_21__["EditBiographyComponent"], _library_library_component__WEBPACK_IMPORTED_MODULE_23__["LibraryComponent"], _library_file_library_file_component__WEBPACK_IMPORTED_MODULE_26__["LibraryFileComponent"], _edit_library_edit_library_component__WEBPACK_IMPORTED_MODULE_27__["EditLibraryComponent"], _indicators_indicators_component__WEBPACK_IMPORTED_MODULE_28__["IndicatorsComponent"], _edit_indicators_edit_indicators_component__WEBPACK_IMPORTED_MODULE_29__["EditIndicatorsComponent"], _photos_photos_component__WEBPACK_IMPORTED_MODULE_30__["PhotosComponent"], _photo_file_photo_file_component__WEBPACK_IMPORTED_MODULE_31__["PhotoFileComponent"], _video_video_component__WEBPACK_IMPORTED_MODULE_24__["VideoComponent"], _video_list_item_video_list_item_component__WEBPACK_IMPORTED_MODULE_25__["VideoListItemComponent"], _library_file_library_file_component__WEBPACK_IMPORTED_MODULE_26__["LibraryFileComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_4__["AngularFireModule"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__["AngularFireStorageModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestoreModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"], _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_22__["CKEditorModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"], _section_section_component__WEBPACK_IMPORTED_MODULE_11__["SectionComponent"], _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_12__["NotFoundComponent"], _section_author_section_author_component__WEBPACK_IMPORTED_MODULE_13__["SectionAuthorComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"], _edit_footer_edit_footer_component__WEBPACK_IMPORTED_MODULE_17__["EditFooterComponent"], _author_author_component__WEBPACK_IMPORTED_MODULE_18__["AuthorComponent"], _edit_author_edit_author_component__WEBPACK_IMPORTED_MODULE_19__["EditAuthorComponent"], _biography_biography_component__WEBPACK_IMPORTED_MODULE_20__["BiographyComponent"], _edit_biography_edit_biography_component__WEBPACK_IMPORTED_MODULE_21__["EditBiographyComponent"], _library_library_component__WEBPACK_IMPORTED_MODULE_23__["LibraryComponent"], _library_file_library_file_component__WEBPACK_IMPORTED_MODULE_26__["LibraryFileComponent"], _edit_library_edit_library_component__WEBPACK_IMPORTED_MODULE_27__["EditLibraryComponent"], _indicators_indicators_component__WEBPACK_IMPORTED_MODULE_28__["IndicatorsComponent"], _edit_indicators_edit_indicators_component__WEBPACK_IMPORTED_MODULE_29__["EditIndicatorsComponent"], _photos_photos_component__WEBPACK_IMPORTED_MODULE_30__["PhotosComponent"], _photo_file_photo_file_component__WEBPACK_IMPORTED_MODULE_31__["PhotoFileComponent"], _video_video_component__WEBPACK_IMPORTED_MODULE_24__["VideoComponent"], _video_list_item_video_list_item_component__WEBPACK_IMPORTED_MODULE_25__["VideoListItemComponent"], _library_file_library_file_component__WEBPACK_IMPORTED_MODULE_26__["LibraryFileComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_4__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].firebaseConfig), _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__["AngularFireStorageModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestoreModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"], _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_22__["CKEditorModule"]],
          providers: [_angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__["AngularFireStorage"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestore"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_16__["AngularFireAuth"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/author/author.component.ts":
  /*!********************************************!*\
    !*** ./src/app/author/author.component.ts ***!
    \********************************************/

  /*! exports provided: AuthorComponent */

  /***/
  function srcAppAuthorAuthorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthorComponent", function () {
      return AuthorComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_data_getter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/data-getter.service */
    "./src/app/services/data-getter.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0() {
      return ["/edit-author"];
    };

    function AuthorComponent_a_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0))("queryParams", ctx_r0.author);
      }
    }

    var _c1 = function _c1() {
      return ["/edit-biography"];
    };

    function AuthorComponent_a_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c1))("queryParams", ctx_r1.author);
      }
    }

    function AuthorComponent_a_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c2 = function _c2() {
      return ["/edit-indicators"];
    };

    function AuthorComponent_a_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c2))("queryParams", ctx_r3.author);
      }
    }

    var _c3 = function _c3() {
      return ["/edit-library"];
    };

    function AuthorComponent_a_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c3))("queryParams", ctx_r4.author);
      }
    }

    function AuthorComponent_a_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AuthorComponent_a_33_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c4 = function _c4() {
      return ["/video"];
    };

    function AuthorComponent_a_37_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c4))("queryParams", ctx_r7.author);
      }
    }

    function AuthorComponent_a_40_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c5 = function _c5() {
      return ["/biography"];
    };

    var _c6 = function _c6() {
      return ["/indicators"];
    };

    var _c7 = function _c7() {
      return ["/library"];
    };

    var _c8 = function _c8() {
      return ["/photos"];
    };

    var AuthorComponent = /*#__PURE__*/function () {
      function AuthorComponent(activatedRoute, dataGetterService, router) {
        _classCallCheck(this, AuthorComponent);

        this.activatedRoute = activatedRoute;
        this.dataGetterService = dataGetterService;
        this.router = router;
      }

      _createClass(AuthorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.activatedRoute.queryParams.subscribe(function (author) {
            _this.author = author;

            _this.dataGetterService.GetImgURL(_this.author.imgURI).subscribe(function (url) {
              return _this.authorImgURL = url;
            });
          });
        }
      }, {
        key: "backToSection",
        value: function backToSection() {
          var _this2 = this;

          this.dataGetterService.GetSection(this.author.sectionId).subscribe(function (section) {
            _this2.router.navigate(['/section'], {
              queryParams: section
            });
          });
        }
      }]);

      return AuthorComponent;
    }();

    AuthorComponent.ɵfac = function AuthorComponent_Factory(t) {
      return new (t || AuthorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_getter_service__WEBPACK_IMPORTED_MODULE_2__["DataGetterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    AuthorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AuthorComponent,
      selectors: [["app-author"]],
      decls: 41,
      vars: 28,
      consts: [[1, "main"], [1, "container"], [1, "main__personinfo"], [1, "main__shortinfo", 2, "background", "url(../../assets/img/infoback.jpg)"], [1, "fas", "fa-arrow-circle-left", "main__arrow", 3, "click"], ["alt", "Kremin", 1, "main__personimg", 3, "src"], [1, "main__personname", 3, "innerHTML"], [1, "main__personstatus", 3, "innerHTML"], [1, "main__title"], [1, "main__personinfo", 3, "innerHTML"], ["href", "", "class", "menu literaturemenu", 3, "routerLink", "queryParams", 4, "ngIf"], [1, "main__categories"], [1, "main__row"], [1, "main__block", 3, "routerLink", "queryParams"], ["href", "", "class", "menu", 3, "routerLink", "queryParams", 4, "ngIf"], [1, "main__block", "last"], ["href", "", "class", "menu", 4, "ngIf"], [1, "main__block", "last", 3, "routerLink", "queryParams"], [1, "main__block"], ["href", "", 1, "menu", "literaturemenu", 3, "routerLink", "queryParams"], [1, "fas", "fa-cog", "rotate"], ["href", "", 1, "menu", 3, "routerLink", "queryParams"], ["href", "", 1, "menu"]],
      template: function AuthorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthorComponent_Template_i_click_4_listener() {
            return ctx.backToSection();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u041A\u043E\u0440\u043E\u0442\u043A\u0430 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044F");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AuthorComponent_a_11_Template, 2, 3, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " \u0411\u0456\u043E\u0433\u0440\u0430\u0444\u0456\u044F ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AuthorComponent_a_16_Template, 2, 3, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " \u0421\u043F\u043E\u0433\u0430\u0434\u0438 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, AuthorComponent_a_19_Template, 2, 0, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " \u041F\u043E\u043A\u0430\u0436\u0447\u0438\u043A\u0438 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, AuthorComponent_a_23_Template, 2, 3, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " \u0411\u0456\u0431\u043B\u0456\u043E\u0442\u0435\u043A\u0430 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, AuthorComponent_a_26_Template, 2, 3, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " \u0420\u0435\u0446\u0435\u043D\u0437\u0456\u0457 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, AuthorComponent_a_30_Template, 2, 0, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " \u0424\u043E\u0442\u043E ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, AuthorComponent_a_33_Template, 2, 0, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " \u0412\u0456\u0434\u0435\u043E ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, AuthorComponent_a_37_Template, 2, 3, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " \u041C\u0435\u0440\u0435\u0436\u0456 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, AuthorComponent_a_40_Template, 2, 0, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.authorImgURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.author.name, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.author.status, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.author.shortInfo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataGetterService.userAuthenticated());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](23, _c5))("queryParams", ctx.author);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataGetterService.userAuthenticated());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataGetterService.userAuthenticated());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](24, _c6))("queryParams", ctx.author);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataGetterService.userAuthenticated());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](25, _c7))("queryParams", ctx.author);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataGetterService.userAuthenticated());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataGetterService.userAuthenticated());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](26, _c8))("queryParams", ctx.author);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataGetterService.userAuthenticated());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](27, _c4))("queryParams", ctx.author);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataGetterService.userAuthenticated());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataGetterService.userAuthenticated());
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: ["*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: \"Comfortaa\", cursive;\n}\n\n.container[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  max-width: 1200px;\n  height: 100%;\n}\n\n.header[_ngcontent-%COMP%] {\n  background: linear-gradient(158.11deg, #014B80 34.34%, #4892FF 103.15%);\n  padding: 15px 0;\n}\n\n.header__logolink[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\n.header__content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.header__logo[_ngcontent-%COMP%] {\n  width: 107px;\n  height: 70px;\n}\n\n.header__text[_ngcontent-%COMP%] {\n  font-family: Comfortaa;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 16px;\n  line-height: 18px;\n  color: #FFFFFF;\n  padding-left: 28px;\n}\n\n.main[_ngcontent-%COMP%] {\n  padding: 64px 0;\n}\n\n.main__personinfo[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n.main__shortinfo[_ngcontent-%COMP%] {\n  width: 576px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 32px;\n  position: relative;\n}\n\n.main__personimg[_ngcontent-%COMP%] {\n  width: 300px;\n  height: 300px;\n  border-radius: 100%;\n  overflow: hidden;\n  margin-bottom: 24px;\n}\n\n.main__personname[_ngcontent-%COMP%] {\n  font-family: HelveticaNeueCyr;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 24px;\n  line-height: 24px;\n  color: #FFFFFF;\n  padding-bottom: 8px;\n}\n\n.main__personstatus[_ngcontent-%COMP%] {\n  font-family: HelveticaNeueCyr;\n  font-style: normal;\n  font-weight: 300;\n  font-size: 16px;\n  line-height: 16px;\n  color: #FFFFFF;\n}\n\n.main__title[_ngcontent-%COMP%] {\n  font-family: HelveticaNeueCyr;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 36px;\n  line-height: 42px;\n  color: #FFFFFF;\n  padding: 24px 0;\n}\n\n.main__personinfo[_ngcontent-%COMP%] {\n  font-family: HelveticaNeueCyr;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 18px;\n  line-height: 21px;\n  text-align: justify;\n  color: #FFFFFF;\n}\n\n.main__row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n\n.main__block[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  width: 290px;\n  height: 180px;\n  background: #F4F4F4;\n  box-shadow: 0px 2px 4px #CFD8DC;\n  border-radius: 0px;\n  font-family: HelveticaNeueCyr;\n  font-style: normal;\n  font-weight: 300;\n  font-size: 36px;\n  line-height: 36px;\n  color: #575965;\n  margin-right: 20px;\n  justify-content: center;\n  align-items: center;\n}\n\n.main__categories[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.main__arrow[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 20px;\n  top: 20px;\n  font-size: 32px;\n}\n\n.last[_ngcontent-%COMP%] {\n  margin-right: 0;\n}\n\n.footer[_ngcontent-%COMP%] {\n  background: #F4F4F4;\n  padding-top: 36px;\n}\n\n.footer__blocks[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.footer__contacts[_ngcontent-%COMP%] {\n  font-family: Comfortaa;\n  font-style: normal;\n  font-size: 18px;\n  line-height: 20px;\n  color: #575965;\n}\n\n.footer__bold[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.footer__information[_ngcontent-%COMP%] {\n  padding-bottom: 14px;\n}\n\n.footer__information[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:last-child {\n  padding-bottom: 0;\n}\n\n.footer__socials[_ngcontent-%COMP%] {\n  font-family: Comfortaa;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 18px;\n  line-height: 20px;\n  color: #575965;\n  padding-bottom: 14px;\n}\n\n.footer__link[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #3B5998;\n  font-size: 22px;\n}\n\n.footer__librarylink[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #575965;\n}\n\n.footer__location[_ngcontent-%COMP%] {\n  font-family: Comfortaa;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 18px;\n  line-height: 20px;\n  color: #575965;\n}\n\n.line[_ngcontent-%COMP%] {\n  display: block;\n  height: 1px;\n  width: 100%;\n  background: rgba(87, 89, 101, 0.35);\n  margin-top: 28px;\n  margin-bottom: 18px;\n}\n\n.copyright[_ngcontent-%COMP%] {\n  font-family: Comfortaa;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 18px;\n  line-height: 20px;\n  color: #575965;\n  margin: 0 auto;\n  text-align: center;\n  padding-bottom: 18px;\n}\n\n.menu[_ngcontent-%COMP%] {\n  position: absolute;\n  display: inline-block;\n  list-style: none;\n  right: 0;\n  top: 0;\n  color: #575965;\n  padding: 16px;\n  text-decoration: none;\n  font-size: 22px;\n}\n\n.menu[_ngcontent-%COMP%]   .rotate[_ngcontent-%COMP%] {\n  transition: 0.7s;\n}\n\n.menu[_ngcontent-%COMP%]   .rotate[_ngcontent-%COMP%]:hover {\n  transform: rotate(90deg) translateZ(0);\n  transition: 0.7s;\n}\n\n.literaturemenu[_ngcontent-%COMP%] {\n  color: #F4F4F4;\n}\n\n@media screen and (max-width: 1250px) {\n  .main__projectname[_ngcontent-%COMP%] {\n    font-size: 35px;\n    width: 1046px;\n  }\n\n  .container[_ngcontent-%COMP%] {\n    max-width: 1000px;\n  }\n\n  .main__personimg[_ngcontent-%COMP%] {\n    width: 250px;\n    height: 250px;\n  }\n\n  .main__title[_ngcontent-%COMP%] {\n    font-size: 28px;\n  }\n\n  .main__personinfo[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n\n  .main__shortinfo[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n}\n\n@media screen and (max-width: 1105px) {\n  .main__projectname[_ngcontent-%COMP%] {\n    font-size: 28px;\n    width: 850px;\n  }\n\n  .container[_ngcontent-%COMP%] {\n    max-width: 800px;\n  }\n\n  .header__text[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n\n  .main__personinfo[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-between;\n  }\n\n  .main__shortinfo[_ngcontent-%COMP%] {\n    padding: 32px;\n    margin-bottom: 24px;\n  }\n\n  .main__row[_ngcontent-%COMP%] {\n    margin-bottom: 24px;\n  }\n\n  .main__personimg[_ngcontent-%COMP%] {\n    width: 300px;\n    height: 300px;\n  }\n}\n\n@media screen and (max-width: 908px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 750px;\n  }\n\n  .header__text[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n\n  .main__projectname[_ngcontent-%COMP%] {\n    font-size: 18px;\n    width: 556px;\n    margin: 0 auto;\n  }\n}\n\n@media screen and (max-width: 780px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 680px;\n  }\n\n  .footer[_ngcontent-%COMP%] {\n    position: relative;\n  }\n}\n\n@media screen and (max-width: 695px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 600px;\n  }\n}\n\n@media screen and (max-width: 640px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 550px;\n  }\n}\n\n@media screen and (max-width: 585px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 500px;\n  }\n\n  .main__personimg[_ngcontent-%COMP%] {\n    width: 200px;\n    height: 200px;\n  }\n\n  .main__title[_ngcontent-%COMP%] {\n    font-size: 32px;\n  }\n\n  .main__shortinfo[_ngcontent-%COMP%] {\n    padding: 14px;\n  }\n\n  .main__row[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n\n  .main__block[_ngcontent-%COMP%] {\n    margin-bottom: 24px;\n  }\n\n  .footer__information[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n\n  .footer__socials[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n\n  .footer__link[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n\n  .footer__location[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aG9yL0M6XFxHaXRIdWJcXGxpYnJhcnkvc3JjXFxhcHBcXGF1dGhvclxcYXV0aG9yLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hdXRob3IvYXV0aG9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtFQUNBLGlDQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSx1RUFBQTtFQUNBLGVBQUE7QUNDRjs7QURDRTtFQUNFLHFCQUFBO0FDQ0o7O0FERUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUNBSjs7QURHRTtFQUNFLFlBQUE7RUFDQSxZQUFBO0FDREo7O0FESUU7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNGSjs7QURNQTtFQUNFLGVBQUE7QUNIRjs7QURLRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtBQ0hKOztBRE1FO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDSko7O0FET0U7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0xKOztBRFFFO0VBQ0UsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FDTko7O0FEU0U7RUFDRSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDUEo7O0FEVUU7RUFDRSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ1JKOztBRFdFO0VBQ0UsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDVEo7O0FEWUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUNWSjs7QURhRTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ1hKOztBRGNFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7QUNaSjs7QURlRTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FDYko7O0FEaUJBO0VBQ0UsZUFBQTtBQ2RGOztBRGlCQTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7QUNkRjs7QURnQkU7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQ2RKOztBRGlCRTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDZko7O0FEa0JFO0VBQ0UsaUJBQUE7QUNoQko7O0FEbUJFO0VBQ0Usb0JBQUE7QUNqQko7O0FEbUJJO0VBQ0UsaUJBQUE7QUNqQk47O0FEcUJFO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FDbkJKOztBRHNCRTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNwQko7O0FEdUJFO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0FDckJKOztBRHdCRTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUN0Qko7O0FEMkJBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsbUNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDeEJGOztBRDJCQTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQ3hCRjs7QUQyQkE7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FDeEJGOztBRDBCRTtFQUNFLGdCQUFBO0FDeEJKOztBRHlCSTtFQUNFLHNDQUFBO0VBQ0EsZ0JBQUE7QUN2Qk47O0FENEJBO0VBQ0UsY0FBQTtBQ3pCRjs7QUQ2QkE7RUFDRTtJQUNFLGVBQUE7SUFDQSxhQUFBO0VDMUJGOztFRDZCQTtJQUNFLGlCQUFBO0VDMUJGOztFRDZCQTtJQUNFLFlBQUE7SUFDQSxhQUFBO0VDMUJGOztFRDZCQTtJQUNFLGVBQUE7RUMxQkY7O0VENkJBO0lBQ0UsZUFBQTtFQzFCRjs7RUQ2QkE7SUFDRSxhQUFBO0VDMUJGO0FBQ0Y7O0FEK0JBO0VBQ0U7SUFDRSxlQUFBO0lBQ0EsWUFBQTtFQzdCRjs7RUQrQkE7SUFDRSxnQkFBQTtFQzVCRjs7RUQrQkE7SUFDRSxlQUFBO0VDNUJGOztFRCtCQTtJQUNFLGFBQUE7SUFDQSxzQkFBQTtJQUNBLG1CQUFBO0lBQ0EsOEJBQUE7RUM1QkY7O0VEK0JBO0lBQ0UsYUFBQTtJQUNBLG1CQUFBO0VDNUJGOztFRCtCQTtJQUNFLG1CQUFBO0VDNUJGOztFRCtCQTtJQUNFLFlBQUE7SUFDQSxhQUFBO0VDNUJGO0FBQ0Y7O0FEZ0NBO0VBQ0U7SUFDRSxnQkFBQTtFQzlCRjs7RURpQ0E7SUFDRSxlQUFBO0VDOUJGOztFRGlDQTtJQUNFLGVBQUE7SUFDQSxZQUFBO0lBQ0EsY0FBQTtFQzlCRjtBQUNGOztBRGlDQTtFQUNFO0lBQ0UsZ0JBQUE7RUMvQkY7O0VEa0NBO0lBQ0Usa0JBQUE7RUMvQkY7QUFDRjs7QURrQ0E7RUFDRTtJQUNFLGdCQUFBO0VDaENGO0FBQ0Y7O0FEbUNBO0VBRUU7SUFDRSxnQkFBQTtFQ2xDRjtBQUNGOztBRHNDQTtFQUNFO0lBQ0UsZ0JBQUE7RUNwQ0Y7O0VEdUNBO0lBQ0UsWUFBQTtJQUNBLGFBQUE7RUNwQ0Y7O0VEdUNBO0lBQ0UsZUFBQTtFQ3BDRjs7RUR1Q0E7SUFDRSxhQUFBO0VDcENGOztFRHVDQTtJQUNFLHNCQUFBO0VDcENGOztFRHVDQTtJQUNFLG1CQUFBO0VDcENGOztFRHVDQTtJQUNFLGVBQUE7RUNwQ0Y7O0VEdUNBO0lBQ0UsZUFBQTtFQ3BDRjs7RUR1Q0E7SUFDRSxlQUFBO0VDcENGOztFRHVDQTtJQUNFLGVBQUE7RUNwQ0Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2F1dGhvci9hdXRob3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqe1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgZm9udC1mYW1pbHk6ICdDb21mb3J0YWEnLCBjdXJzaXZlO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBtYXgtd2lkdGg6IDEyMDBweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5oZWFkZXJ7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE1OC4xMWRlZywgIzAxNEI4MCAzNC4zNCUsICM0ODkyRkYgMTAzLjE1JSk7XHJcbiAgcGFkZGluZzogMTVweCAwO1xyXG5cclxuICAmX19sb2dvbGlua3tcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcblxyXG4gICZfX2NvbnRlbnR7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gICZfX2xvZ297XHJcbiAgICB3aWR0aDogMTA3cHg7XHJcbiAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgfVxyXG5cclxuICAmX190ZXh0e1xyXG4gICAgZm9udC1mYW1pbHk6IENvbWZvcnRhYTtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIHBhZGRpbmctbGVmdDogMjhweDtcclxuICB9XHJcbn1cclxuXHJcbi5tYWlue1xyXG4gIHBhZGRpbmc6IDY0cHggMDtcclxuXHJcbiAgJl9fcGVyc29uaW5mb3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgfVxyXG5cclxuICAmX19zaG9ydGluZm97XHJcbiAgICB3aWR0aDogNTc2cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAzMnB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuXHJcbiAgJl9fcGVyc29uaW1ne1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjRweDtcclxuICB9XHJcblxyXG4gICZfX3BlcnNvbm5hbWV7XHJcbiAgICBmb250LWZhbWlseTogSGVsdmV0aWNhTmV1ZUN5cjtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XHJcbiAgfVxyXG5cclxuICAmX19wZXJzb25zdGF0dXN7XHJcbiAgICBmb250LWZhbWlseTogSGVsdmV0aWNhTmV1ZUN5cjtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTZweDtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gIH1cclxuXHJcbiAgJl9fdGl0bGV7XHJcbiAgICBmb250LWZhbWlseTogSGVsdmV0aWNhTmV1ZUN5cjtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDQycHg7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIHBhZGRpbmc6IDI0cHggMDtcclxuICB9XHJcblxyXG4gICZfX3BlcnNvbmluZm97XHJcbiAgICBmb250LWZhbWlseTogSGVsdmV0aWNhTmV1ZUN5cjtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjFweDtcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuICB9XHJcblxyXG4gICZfX3Jvd3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIH1cclxuXHJcbiAgJl9fYmxvY2t7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDI5MHB4O1xyXG4gICAgaGVpZ2h0OiAxODBweDtcclxuICAgIGJhY2tncm91bmQ6ICNGNEY0RjQ7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDRweCAjQ0ZEOERDO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IEhlbHZldGljYU5ldWVDeXI7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDM2cHg7XHJcbiAgICBjb2xvcjogIzU3NTk2NTtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gICZfX2NhdGVnb3JpZXN7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB9XHJcblxyXG4gICZfX2Fycm93e1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMjBweDtcclxuICAgIHRvcDogMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICB9XHJcbn1cclxuXHJcbi5sYXN0e1xyXG4gIG1hcmdpbi1yaWdodDogMDtcclxufVxyXG5cclxuLmZvb3RlcntcclxuICBiYWNrZ3JvdW5kOiAjRjRGNEY0O1xyXG4gIHBhZGRpbmctdG9wOiAzNnB4O1xyXG5cclxuICAmX19ibG9ja3N7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gICZfX2NvbnRhY3Rze1xyXG4gICAgZm9udC1mYW1pbHk6IENvbWZvcnRhYTtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgY29sb3I6ICM1NzU5NjU7XHJcbiAgfVxyXG5cclxuICAmX19ib2xke1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG5cclxuICAmX19pbmZvcm1hdGlvbntcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNHB4O1xyXG5cclxuICAgIDpsYXN0LWNoaWxke1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICZfX3NvY2lhbHN7XHJcbiAgICBmb250LWZhbWlseTogQ29tZm9ydGFhO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgIGNvbG9yOiAjNTc1OTY1O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE0cHg7XHJcbiAgfVxyXG5cclxuICAmX19saW5re1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6ICMzQjU5OTg7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgfVxyXG5cclxuICAmX19saWJyYXJ5bGlua3tcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiAjNTc1OTY1O1xyXG4gIH1cclxuXHJcbiAgJl9fbG9jYXRpb257XHJcbiAgICBmb250LWZhbWlseTogQ29tZm9ydGFhO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgIGNvbG9yOiAjNTc1OTY1O1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbi5saW5le1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGhlaWdodDogMXB4O1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgYmFja2dyb3VuZDogcmdiYSg4NywgODksIDEwMSwgMC4zNSk7XHJcbiAgbWFyZ2luLXRvcDogMjhweDtcclxuICBtYXJnaW4tYm90dG9tOiAxOHB4O1xyXG59XHJcblxyXG4uY29weXJpZ2h0e1xyXG4gIGZvbnQtZmFtaWx5OiBDb21mb3J0YWE7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBsaW5lLWhlaWdodDogMjBweDtcclxuICBjb2xvcjogIzU3NTk2NTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZy1ib3R0b206IDE4cHg7XHJcbn1cclxuXHJcbi5tZW51e1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICByaWdodDogMDtcclxuICB0b3A6IDA7XHJcbiAgY29sb3I6ICM1NzU5NjU7XHJcbiAgcGFkZGluZzogMTZweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG5cclxuICAucm90YXRle1xyXG4gICAgdHJhbnNpdGlvbjogMC43cztcclxuICAgICY6aG92ZXIge1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZykgdHJhbnNsYXRlWigwKTtcclxuICAgICAgdHJhbnNpdGlvbjogMC43cztcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5saXRlcmF0dXJlbWVudXtcclxuICBjb2xvcjogI0Y0RjRGNDtcclxufVxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTI1MHB4KXtcclxuICAubWFpbl9fcHJvamVjdG5hbWV7XHJcbiAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICB3aWR0aDogMTA0NnB4O1xyXG4gIH1cclxuXHJcbiAgLmNvbnRhaW5lcntcclxuICAgIG1heC13aWR0aDogMTAwMHB4O1xyXG4gIH1cclxuXHJcbiAgLm1haW5fX3BlcnNvbmltZ3tcclxuICAgIHdpZHRoOiAyNTBweDtcclxuICAgIGhlaWdodDogMjUwcHg7XHJcbiAgfVxyXG5cclxuICAubWFpbl9fdGl0bGV7XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgfVxyXG5cclxuICAubWFpbl9fcGVyc29uaW5mb3tcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcblxyXG4gIC5tYWluX19zaG9ydGluZm97XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gIH1cclxuXHJcbn1cclxuXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjExMDVweCl7XHJcbiAgLm1haW5fX3Byb2plY3RuYW1le1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgd2lkdGg6IDg1MHB4O1xyXG4gIH1cclxuICAuY29udGFpbmVye1xyXG4gICAgbWF4LXdpZHRoOiA4MDBweDtcclxuICB9XHJcblxyXG4gIC5oZWFkZXJfX3RleHR7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG5cclxuICAubWFpbl9fcGVyc29uaW5mb3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB9XHJcblxyXG4gIC5tYWluX19zaG9ydGluZm97XHJcbiAgICBwYWRkaW5nOiAzMnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjRweDtcclxuICB9XHJcblxyXG4gIC5tYWluX19yb3d7XHJcbiAgICBtYXJnaW4tYm90dG9tOjI0cHggO1xyXG4gIH1cclxuXHJcbiAgLm1haW5fX3BlcnNvbmltZ3tcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo5MDhweCl7XHJcbiAgLmNvbnRhaW5lcntcclxuICAgIG1heC13aWR0aDogNzUwcHg7XHJcbiAgfVxyXG5cclxuICAuaGVhZGVyX190ZXh0e1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxuXHJcbiAgLm1haW5fX3Byb2plY3RuYW1le1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgd2lkdGg6IDU1NnB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc4MHB4KXtcclxuICAuY29udGFpbmVye1xyXG4gICAgbWF4LXdpZHRoOiA2ODBweDtcclxuICB9XHJcblxyXG4gIC5mb290ZXJ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjY5NXB4KXtcclxuICAuY29udGFpbmVye1xyXG4gICAgbWF4LXdpZHRoOiA2MDBweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjQwcHgpIHtcclxuXHJcbiAgLmNvbnRhaW5lcntcclxuICAgIG1heC13aWR0aDogNTUwcHg7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo1ODVweCkge1xyXG4gIC5jb250YWluZXJ7XHJcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gIH1cclxuXHJcbiAgLm1haW5fX3BlcnNvbmltZ3tcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgfVxyXG5cclxuICAubWFpbl9fdGl0bGV7XHJcbiAgICBmb250LXNpemU6IDMycHg7XHJcbiAgfVxyXG5cclxuICAubWFpbl9fc2hvcnRpbmZve1xyXG4gICAgcGFkZGluZzogMTRweDtcclxuICB9XHJcblxyXG4gIC5tYWluX19yb3d7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxuXHJcbiAgLm1haW5fX2Jsb2Nre1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjRweDtcclxuICB9XHJcblxyXG4gIC5mb290ZXJfX2luZm9ybWF0aW9ue1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxuXHJcbiAgLmZvb3Rlcl9fc29jaWFsc3tcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcblxyXG4gIC5mb290ZXJfX2xpbmt7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgfVxyXG5cclxuICAuZm9vdGVyX19sb2NhdGlvbntcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcblxyXG59XHJcbiIsIioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZvbnQtZmFtaWx5OiBcIkNvbWZvcnRhYVwiLCBjdXJzaXZlO1xufVxuXG4uY29udGFpbmVyIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1heC13aWR0aDogMTIwMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTU4LjExZGVnLCAjMDE0QjgwIDM0LjM0JSwgIzQ4OTJGRiAxMDMuMTUlKTtcbiAgcGFkZGluZzogMTVweCAwO1xufVxuLmhlYWRlcl9fbG9nb2xpbmsge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uaGVhZGVyX19jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5oZWFkZXJfX2xvZ28ge1xuICB3aWR0aDogMTA3cHg7XG4gIGhlaWdodDogNzBweDtcbn1cbi5oZWFkZXJfX3RleHQge1xuICBmb250LWZhbWlseTogQ29tZm9ydGFhO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgcGFkZGluZy1sZWZ0OiAyOHB4O1xufVxuXG4ubWFpbiB7XG4gIHBhZGRpbmc6IDY0cHggMDtcbn1cbi5tYWluX19wZXJzb25pbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLm1haW5fX3Nob3J0aW5mbyB7XG4gIHdpZHRoOiA1NzZweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMzJweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLm1haW5fX3BlcnNvbmltZyB7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbn1cbi5tYWluX19wZXJzb25uYW1lIHtcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYU5ldWVDeXI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBwYWRkaW5nLWJvdHRvbTogOHB4O1xufVxuLm1haW5fX3BlcnNvbnN0YXR1cyB7XG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2FOZXVlQ3lyO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIGNvbG9yOiAjRkZGRkZGO1xufVxuLm1haW5fX3RpdGxlIHtcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYU5ldWVDeXI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgbGluZS1oZWlnaHQ6IDQycHg7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBwYWRkaW5nOiAyNHB4IDA7XG59XG4ubWFpbl9fcGVyc29uaW5mbyB7XG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2FOZXVlQ3lyO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDIxcHg7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIGNvbG9yOiAjRkZGRkZGO1xufVxuLm1haW5fX3JvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG4ubWFpbl9fYmxvY2sge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAyOTBweDtcbiAgaGVpZ2h0OiAxODBweDtcbiAgYmFja2dyb3VuZDogI0Y0RjRGNDtcbiAgYm94LXNoYWRvdzogMHB4IDJweCA0cHggI0NGRDhEQztcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xuICBmb250LWZhbWlseTogSGVsdmV0aWNhTmV1ZUN5cjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXNpemU6IDM2cHg7XG4gIGxpbmUtaGVpZ2h0OiAzNnB4O1xuICBjb2xvcjogIzU3NTk2NTtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5tYWluX19jYXRlZ29yaWVzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLm1haW5fX2Fycm93IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAyMHB4O1xuICB0b3A6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMzJweDtcbn1cblxuLmxhc3Qge1xuICBtYXJnaW4tcmlnaHQ6IDA7XG59XG5cbi5mb290ZXIge1xuICBiYWNrZ3JvdW5kOiAjRjRGNEY0O1xuICBwYWRkaW5nLXRvcDogMzZweDtcbn1cbi5mb290ZXJfX2Jsb2NrcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5mb290ZXJfX2NvbnRhY3RzIHtcbiAgZm9udC1mYW1pbHk6IENvbWZvcnRhYTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBjb2xvcjogIzU3NTk2NTtcbn1cbi5mb290ZXJfX2JvbGQge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5mb290ZXJfX2luZm9ybWF0aW9uIHtcbiAgcGFkZGluZy1ib3R0b206IDE0cHg7XG59XG4uZm9vdGVyX19pbmZvcm1hdGlvbiA6bGFzdC1jaGlsZCB7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xufVxuLmZvb3Rlcl9fc29jaWFscyB7XG4gIGZvbnQtZmFtaWx5OiBDb21mb3J0YWE7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGNvbG9yOiAjNTc1OTY1O1xuICBwYWRkaW5nLWJvdHRvbTogMTRweDtcbn1cbi5mb290ZXJfX2xpbmsge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjM0I1OTk4O1xuICBmb250LXNpemU6IDIycHg7XG59XG4uZm9vdGVyX19saWJyYXJ5bGluayB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICM1NzU5NjU7XG59XG4uZm9vdGVyX19sb2NhdGlvbiB7XG4gIGZvbnQtZmFtaWx5OiBDb21mb3J0YWE7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGNvbG9yOiAjNTc1OTY1O1xufVxuXG4ubGluZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDFweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHJnYmEoODcsIDg5LCAxMDEsIDAuMzUpO1xuICBtYXJnaW4tdG9wOiAyOHB4O1xuICBtYXJnaW4tYm90dG9tOiAxOHB4O1xufVxuXG4uY29weXJpZ2h0IHtcbiAgZm9udC1mYW1pbHk6IENvbWZvcnRhYTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgY29sb3I6ICM1NzU5NjU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctYm90dG9tOiAxOHB4O1xufVxuXG4ubWVudSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBjb2xvcjogIzU3NTk2NTtcbiAgcGFkZGluZzogMTZweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXNpemU6IDIycHg7XG59XG4ubWVudSAucm90YXRlIHtcbiAgdHJhbnNpdGlvbjogMC43cztcbn1cbi5tZW51IC5yb3RhdGU6aG92ZXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZykgdHJhbnNsYXRlWigwKTtcbiAgdHJhbnNpdGlvbjogMC43cztcbn1cblxuLmxpdGVyYXR1cmVtZW51IHtcbiAgY29sb3I6ICNGNEY0RjQ7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyNTBweCkge1xuICAubWFpbl9fcHJvamVjdG5hbWUge1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICB3aWR0aDogMTA0NnB4O1xuICB9XG5cbiAgLmNvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiAxMDAwcHg7XG4gIH1cblxuICAubWFpbl9fcGVyc29uaW1nIHtcbiAgICB3aWR0aDogMjUwcHg7XG4gICAgaGVpZ2h0OiAyNTBweDtcbiAgfVxuXG4gIC5tYWluX190aXRsZSB7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICB9XG5cbiAgLm1haW5fX3BlcnNvbmluZm8ge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxuXG4gIC5tYWluX19zaG9ydGluZm8ge1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExMDVweCkge1xuICAubWFpbl9fcHJvamVjdG5hbWUge1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICB3aWR0aDogODUwcHg7XG4gIH1cblxuICAuY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xuICB9XG5cbiAgLmhlYWRlcl9fdGV4dCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG5cbiAgLm1haW5fX3BlcnNvbmluZm8ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgfVxuXG4gIC5tYWluX19zaG9ydGluZm8ge1xuICAgIHBhZGRpbmc6IDMycHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgfVxuXG4gIC5tYWluX19yb3cge1xuICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gIH1cblxuICAubWFpbl9fcGVyc29uaW1nIHtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgaGVpZ2h0OiAzMDBweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTA4cHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiA3NTBweDtcbiAgfVxuXG4gIC5oZWFkZXJfX3RleHQge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxuXG4gIC5tYWluX19wcm9qZWN0bmFtZSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIHdpZHRoOiA1NTZweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzgwcHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiA2ODBweDtcbiAgfVxuXG4gIC5mb290ZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjk1cHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjQwcHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiA1NTBweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTg1cHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgfVxuXG4gIC5tYWluX19wZXJzb25pbWcge1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICB9XG5cbiAgLm1haW5fX3RpdGxlIHtcbiAgICBmb250LXNpemU6IDMycHg7XG4gIH1cblxuICAubWFpbl9fc2hvcnRpbmZvIHtcbiAgICBwYWRkaW5nOiAxNHB4O1xuICB9XG5cbiAgLm1haW5fX3JvdyB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuXG4gIC5tYWluX19ibG9jayB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgfVxuXG4gIC5mb290ZXJfX2luZm9ybWF0aW9uIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cblxuICAuZm9vdGVyX19zb2NpYWxzIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cblxuICAuZm9vdGVyX19saW5rIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cblxuICAuZm9vdGVyX19sb2NhdGlvbiB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-author',
          templateUrl: './author.component.html',
          styleUrls: ['./author.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: _services_data_getter_service__WEBPACK_IMPORTED_MODULE_2__["DataGetterService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/biography/biography.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/biography/biography.component.ts ***!
    \**************************************************/

  /*! exports provided: BiographyComponent */

  /***/
  function srcAppBiographyBiographyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BiographyComponent", function () {
      return BiographyComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_data_getter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/data-getter.service */
    "./src/app/services/data-getter.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0() {
      return ["/edit-biography"];
    };

    function BiographyComponent_a_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0))("queryParams", ctx_r0.author);
      }
    }

    var BiographyComponent = /*#__PURE__*/function () {
      function BiographyComponent(activatedRoute, dataGetterService, router) {
        _classCallCheck(this, BiographyComponent);

        this.activatedRoute = activatedRoute;
        this.dataGetterService = dataGetterService;
        this.router = router;
      }

      _createClass(BiographyComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.activatedRoute.queryParams.subscribe(function (author) {
            _this3.author = author;
          });
        }
      }, {
        key: "backToAuthor",
        value: function backToAuthor() {
          this.router.navigate(['/author'], {
            queryParams: this.author
          });
        }
      }]);

      return BiographyComponent;
    }();

    BiographyComponent.ɵfac = function BiographyComponent_Factory(t) {
      return new (t || BiographyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_getter_service__WEBPACK_IMPORTED_MODULE_2__["DataGetterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    BiographyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BiographyComponent,
      selectors: [["app-biography"]],
      decls: 31,
      vars: 2,
      consts: [[1, "main"], [1, "container"], [1, "main__title"], [1, "main__textcontent"], [1, "main__titlename"], [1, "fas", "fa-arrow-circle-left", "main__arrow", 3, "click"], ["href", "", "class", "menu literaturemenu", 3, "routerLink", "queryParams", 4, "ngIf"], [1, "main__biography", 3, "innerHTML"], [1, "main__allsections"], ["href", "", 1, "main__sectionlink"], ["href", "", 1, "menu", "literaturemenu", 3, "routerLink", "queryParams"], [1, "fas", "fa-cog", "rotate"]],
      template: function BiographyComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BiographyComponent_Template_i_click_5_listener() {
            return ctx.backToAuthor();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " \u0411\u0456\u043E\u0433\u0440\u0430\u0444\u0456\u044F ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, BiographyComponent_a_7_Template, 2, 3, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u0421\u043F\u043E\u0433\u0430\u0434\u0438");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u041F\u043E\u043A\u0430\u0436\u0447\u0438\u043A\u0438");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u0411\u0456\u0431\u043B\u0456\u043E\u0442\u0435\u043A\u0430");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\u0420\u0435\u0446\u0435\u043D\u0437\u0456\u0457");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\u0424\u043E\u0442\u043E");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\u0412\u0456\u0434\u0435\u043E");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\u041C\u0435\u0440\u0435\u0436\u0456");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataGetterService.userAuthenticated());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.author.biography, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: ["*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: \"Comfortaa\", cursive;\n}\n\n.container[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  max-width: 1200px;\n  height: 100%;\n}\n\n.header[_ngcontent-%COMP%] {\n  background: linear-gradient(158.11deg, #014B80 34.34%, #4892FF 103.15%);\n  padding: 15px 0;\n}\n\n.header__logolink[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\n.header__content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.header__logo[_ngcontent-%COMP%] {\n  width: 107px;\n  height: 70px;\n}\n\n.header__text[_ngcontent-%COMP%] {\n  font-family: Comfortaa;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 16px;\n  line-height: 18px;\n  color: #FFFFFF;\n  padding-left: 28px;\n}\n\n.main[_ngcontent-%COMP%] {\n  padding: 64px 0;\n}\n\n.main__title[_ngcontent-%COMP%] {\n  background-image: url('literature.jpg');\n}\n\n.main__arrow[_ngcontent-%COMP%] {\n  font-size: 64px;\n  color: #FFFFFF;\n  margin: 0 auto;\n}\n\n.main__textcontent[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  margin-bottom: 24px;\n}\n\n.main__titlename[_ngcontent-%COMP%] {\n  padding: 44px 0;\n  font-family: HelveticaNeueCyr;\n  font-style: normal;\n  font-weight: 300;\n  font-size: 64px;\n  line-height: 63px;\n  color: #FFFFFF;\n  margin: 0 auto;\n}\n\n.main__biography[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 24px;\n  font-family: HelveticaNeueCyr;\n  font-style: normal;\n  font-weight: 300;\n  font-size: 18px;\n  line-height: 28px;\n  text-align: justify;\n  text-indent: 25px;\n  font-feature-settings: \"cpsp\" on;\n  color: #575965;\n  background: #F4F4F4;\n  box-shadow: 0px 2px 4px #CFD8DC;\n  margin-bottom: 64px;\n}\n\n.main__allsections[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 24px;\n  color: #575965;\n}\n\n.main__sectionlink[_ngcontent-%COMP%] {\n  color: #575965;\n  text-decoration: none;\n}\n\n.footer[_ngcontent-%COMP%] {\n  background: #F4F4F4;\n  padding-top: 36px;\n}\n\n.footer__blocks[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.footer__contacts[_ngcontent-%COMP%] {\n  font-family: Comfortaa;\n  font-style: normal;\n  font-size: 18px;\n  line-height: 20px;\n  color: #575965;\n}\n\n.footer__bold[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.footer__information[_ngcontent-%COMP%] {\n  padding-bottom: 14px;\n}\n\n.footer__information[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:last-child {\n  padding-bottom: 0;\n}\n\n.footer__socials[_ngcontent-%COMP%] {\n  font-family: Comfortaa;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 18px;\n  line-height: 20px;\n  color: #575965;\n  padding-bottom: 14px;\n}\n\n.footer__link[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #3B5998;\n  font-size: 22px;\n}\n\n.footer__librarylink[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #575965;\n}\n\n.footer__location[_ngcontent-%COMP%] {\n  font-family: Comfortaa;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 18px;\n  line-height: 20px;\n  color: #575965;\n}\n\n.line[_ngcontent-%COMP%] {\n  display: block;\n  height: 1px;\n  width: 100%;\n  background: rgba(87, 89, 101, 0.35);\n  margin-top: 28px;\n  margin-bottom: 18px;\n}\n\n.copyright[_ngcontent-%COMP%] {\n  font-family: Comfortaa;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 18px;\n  line-height: 20px;\n  color: #575965;\n  margin: 0 auto;\n  text-align: center;\n  padding-bottom: 18px;\n}\n\n.menu[_ngcontent-%COMP%] {\n  position: absolute;\n  display: inline-block;\n  list-style: none;\n  right: 0;\n  top: 0;\n  color: #575965;\n  padding: 16px;\n  text-decoration: none;\n  font-size: 22px;\n}\n\n.menu[_ngcontent-%COMP%]   .rotate[_ngcontent-%COMP%] {\n  transition: 0.7s;\n}\n\n.menu[_ngcontent-%COMP%]   .rotate[_ngcontent-%COMP%]:hover {\n  transform: rotate(90deg) translateZ(0);\n  transition: 0.7s;\n}\n\n.literaturemenu[_ngcontent-%COMP%] {\n  color: #F4F4F4;\n}\n\n@media screen and (max-width: 1250px) {\n  .main__projectname[_ngcontent-%COMP%] {\n    font-size: 35px;\n    width: 1046px;\n  }\n\n  .container[_ngcontent-%COMP%] {\n    max-width: 1000px;\n  }\n}\n\n@media screen and (max-width: 1105px) {\n  .main__projectname[_ngcontent-%COMP%] {\n    font-size: 28px;\n    width: 850px;\n  }\n\n  .container[_ngcontent-%COMP%] {\n    max-width: 800px;\n  }\n\n  .header__text[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n\n@media screen and (max-width: 908px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 750px;\n  }\n\n  .header__text[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n\n  .main__projectname[_ngcontent-%COMP%] {\n    font-size: 18px;\n    width: 556px;\n    margin: 0 auto;\n  }\n}\n\n@media screen and (max-width: 780px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 680px;\n  }\n\n  .main__persons[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n  }\n  .main__character[_ngcontent-%COMP%] {\n    margin-bottom: 24px;\n  }\n\n  .footer[_ngcontent-%COMP%] {\n    position: relative;\n  }\n}\n\n@media screen and (max-width: 695px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 600px;\n  }\n}\n\n@media screen and (max-width: 640px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 550px;\n  }\n}\n\n@media screen and (max-width: 585px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 500px;\n  }\n\n  .main__projectname[_ngcontent-%COMP%] {\n    font-size: 16px;\n    width: 484px;\n    margin: 0 auto;\n  }\n\n  .footer__information[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n\n  .footer__socials[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n\n  .footer__link[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n\n  .footer__location[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmlvZ3JhcGh5L0M6XFxHaXRIdWJcXGxpYnJhcnkvc3JjXFxhcHBcXGJpb2dyYXBoeVxcYmlvZ3JhcGh5LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9iaW9ncmFwaHkvYmlvZ3JhcGh5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtFQUNBLGlDQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSx1RUFBQTtFQUNBLGVBQUE7QUNDRjs7QURDRTtFQUNFLHFCQUFBO0FDQ0o7O0FERUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUNBSjs7QURHRTtFQUNFLFlBQUE7RUFDQSxZQUFBO0FDREo7O0FESUU7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNGSjs7QURNQTtFQUNFLGVBQUE7QUNIRjs7QURLRTtFQUNDLHVDQUFBO0FDSEg7O0FETUU7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUNKSjs7QURPRTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNMSjs7QURRRTtFQUNFLGVBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQ05KOztBRFNFO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdDQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsK0JBQUE7RUFDQSxtQkFBQTtBQ1BKOztBRFVFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNSSjs7QURXRTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtBQ1RKOztBRGNBO0VBQ0UsbUJBQUE7RUFDQSxpQkFBQTtBQ1hGOztBRGFFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUNYSjs7QURjRTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDWko7O0FEZUU7RUFDRSxpQkFBQTtBQ2JKOztBRGdCRTtFQUNFLG9CQUFBO0FDZEo7O0FEZ0JJO0VBQ0UsaUJBQUE7QUNkTjs7QURrQkU7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7QUNoQko7O0FEbUJFO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ2pCSjs7QURvQkU7RUFDRSxxQkFBQTtFQUNBLGNBQUE7QUNsQko7O0FEcUJFO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ25CSjs7QUR3QkE7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxtQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNyQkY7O0FEd0JBO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FDckJGOztBRHdCQTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUNyQkY7O0FEdUJFO0VBQ0UsZ0JBQUE7QUNyQko7O0FEc0JJO0VBQ0Usc0NBQUE7RUFDQSxnQkFBQTtBQ3BCTjs7QUR5QkE7RUFDRSxjQUFBO0FDdEJGOztBRHlCQTtFQUNFO0lBQ0UsZUFBQTtJQUNBLGFBQUE7RUN0QkY7O0VEeUJBO0lBQ0UsaUJBQUE7RUN0QkY7QUFDRjs7QUQ0QkE7RUFDRTtJQUNFLGVBQUE7SUFDQSxZQUFBO0VDMUJGOztFRDRCQTtJQUNFLGdCQUFBO0VDekJGOztFRDRCQTtJQUNFLGVBQUE7RUN6QkY7QUFDRjs7QUQ2QkE7RUFDRTtJQUNFLGdCQUFBO0VDM0JGOztFRDhCQTtJQUNFLGVBQUE7RUMzQkY7O0VEOEJBO0lBQ0UsZUFBQTtJQUNBLFlBQUE7SUFDQSxjQUFBO0VDM0JGO0FBQ0Y7O0FEK0JBO0VBQ0U7SUFDRSxnQkFBQTtFQzdCRjs7RURnQ0U7SUFDRSxzQkFBQTtJQUNBLG1CQUFBO0VDN0JKO0VEZ0NFO0lBQ0UsbUJBQUE7RUM5Qko7O0VEa0NBO0lBQ0Usa0JBQUE7RUMvQkY7QUFDRjs7QURrQ0E7RUFDRTtJQUNFLGdCQUFBO0VDaENGO0FBQ0Y7O0FEcUNBO0VBRUU7SUFDRSxnQkFBQTtFQ3BDRjtBQUNGOztBRHdDQTtFQUNFO0lBQ0UsZ0JBQUE7RUN0Q0Y7O0VEeUNBO0lBQ0UsZUFBQTtJQUNBLFlBQUE7SUFDQSxjQUFBO0VDdENGOztFRHlDQTtJQUNFLGVBQUE7RUN0Q0Y7O0VEeUNBO0lBQ0UsZUFBQTtFQ3RDRjs7RUR5Q0E7SUFDRSxlQUFBO0VDdENGOztFRHlDQTtJQUNFLGVBQUE7RUN0Q0Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2Jpb2dyYXBoeS9iaW9ncmFwaHkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqe1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgZm9udC1mYW1pbHk6ICdDb21mb3J0YWEnLCBjdXJzaXZlO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBtYXgtd2lkdGg6IDEyMDBweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5oZWFkZXJ7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE1OC4xMWRlZywgIzAxNEI4MCAzNC4zNCUsICM0ODkyRkYgMTAzLjE1JSk7XHJcbiAgcGFkZGluZzogMTVweCAwO1xyXG5cclxuICAmX19sb2dvbGlua3tcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcblxyXG4gICZfX2NvbnRlbnR7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gICZfX2xvZ297XHJcbiAgICB3aWR0aDogMTA3cHg7XHJcbiAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgfVxyXG5cclxuICAmX190ZXh0e1xyXG4gICAgZm9udC1mYW1pbHk6IENvbWZvcnRhYTtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIHBhZGRpbmctbGVmdDogMjhweDtcclxuICB9XHJcbn1cclxuXHJcbi5tYWlue1xyXG4gIHBhZGRpbmc6IDY0cHggMDtcclxuXHJcbiAgJl9fdGl0bGV7XHJcbiAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvaW1nL2xpdGVyYXR1cmUuanBnKTtcclxuICB9XHJcblxyXG4gICZfX2Fycm93e1xyXG4gICAgZm9udC1zaXplOiA2NHB4O1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICB9XHJcblxyXG4gICZfX3RleHRjb250ZW50e1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG4gIH1cclxuXHJcbiAgJl9fdGl0bGVuYW1le1xyXG4gICAgcGFkZGluZzogNDRweCAwO1xyXG4gICAgZm9udC1mYW1pbHk6IEhlbHZldGljYU5ldWVDeXI7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgZm9udC1zaXplOiA2NHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDYzcHg7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gIH1cclxuXHJcbiAgJl9fYmlvZ3JhcGh5e1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogMjRweDtcclxuICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2FOZXVlQ3lyO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgIHRleHQtaW5kZW50OiAyNXB4O1xyXG4gICAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiAnY3BzcCcgb247XHJcbiAgICBjb2xvcjogIzU3NTk2NTtcclxuICAgIGJhY2tncm91bmQ6ICNGNEY0RjQ7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDRweCAjQ0ZEOERDO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNjRweDtcclxuICB9XHJcblxyXG4gICZfX2FsbHNlY3Rpb25ze1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGNvbG9yOiAjNTc1OTY1O1xyXG4gIH1cclxuXHJcbiAgJl9fc2VjdGlvbmxpbmt7XHJcbiAgICBjb2xvcjogIzU3NTk2NTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcblxyXG59XHJcblxyXG4uZm9vdGVye1xyXG4gIGJhY2tncm91bmQ6ICNGNEY0RjQ7XHJcbiAgcGFkZGluZy10b3A6IDM2cHg7XHJcblxyXG4gICZfX2Jsb2Nrc3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgJl9fY29udGFjdHN7XHJcbiAgICBmb250LWZhbWlseTogQ29tZm9ydGFhO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICBjb2xvcjogIzU3NTk2NTtcclxuICB9XHJcblxyXG4gICZfX2JvbGR7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcblxyXG4gICZfX2luZm9ybWF0aW9ue1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE0cHg7XHJcblxyXG4gICAgOmxhc3QtY2hpbGR7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJl9fc29jaWFsc3tcclxuICAgIGZvbnQtZmFtaWx5OiBDb21mb3J0YWE7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgY29sb3I6ICM1NzU5NjU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTRweDtcclxuICB9XHJcblxyXG4gICZfX2xpbmt7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogIzNCNTk5ODtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICB9XHJcblxyXG4gICZfX2xpYnJhcnlsaW5re1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6ICM1NzU5NjU7XHJcbiAgfVxyXG5cclxuICAmX19sb2NhdGlvbntcclxuICAgIGZvbnQtZmFtaWx5OiBDb21mb3J0YWE7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgY29sb3I6ICM1NzU5NjU7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLmxpbmV7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgaGVpZ2h0OiAxcHg7XHJcbiAgd2lkdGg6MTAwJTtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDg3LCA4OSwgMTAxLCAwLjM1KTtcclxuICBtYXJnaW4tdG9wOiAyOHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDE4cHg7XHJcbn1cclxuXHJcbi5jb3B5cmlnaHR7XHJcbiAgZm9udC1mYW1pbHk6IENvbWZvcnRhYTtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gIGNvbG9yOiAjNTc1OTY1O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nLWJvdHRvbTogMThweDtcclxufVxyXG5cclxuLm1lbnV7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHRvcDogMDtcclxuICBjb2xvcjogIzU3NTk2NTtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBmb250LXNpemU6IDIycHg7XHJcblxyXG4gIC5yb3RhdGV7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjdzO1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKSB0cmFuc2xhdGVaKDApO1xyXG4gICAgICB0cmFuc2l0aW9uOiAwLjdzO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmxpdGVyYXR1cmVtZW51e1xyXG4gIGNvbG9yOiAjRjRGNEY0O1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEyNTBweCl7XHJcbiAgLm1haW5fX3Byb2plY3RuYW1le1xyXG4gICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgd2lkdGg6IDEwNDZweDtcclxuICB9XHJcblxyXG4gIC5jb250YWluZXJ7XHJcbiAgICBtYXgtd2lkdGg6IDEwMDBweDtcclxuICB9XHJcblxyXG5cclxufVxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTEwNXB4KXtcclxuICAubWFpbl9fcHJvamVjdG5hbWV7XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICB3aWR0aDogODUwcHg7XHJcbiAgfVxyXG4gIC5jb250YWluZXJ7XHJcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xyXG4gIH1cclxuXHJcbiAgLmhlYWRlcl9fdGV4dHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcblxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjkwOHB4KXtcclxuICAuY29udGFpbmVye1xyXG4gICAgbWF4LXdpZHRoOiA3NTBweDtcclxuICB9XHJcblxyXG4gIC5oZWFkZXJfX3RleHR7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgfVxyXG5cclxuICAubWFpbl9fcHJvamVjdG5hbWV7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB3aWR0aDogNTU2cHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICB9XHJcblxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc4MHB4KXtcclxuICAuY29udGFpbmVye1xyXG4gICAgbWF4LXdpZHRoOiA2ODBweDtcclxuICB9XHJcbiAgLm1haW57XHJcbiAgICAmX19wZXJzb25ze1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgICZfX2NoYXJhY3RlcntcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5mb290ZXJ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjY5NXB4KXtcclxuICAuY29udGFpbmVye1xyXG4gICAgbWF4LXdpZHRoOiA2MDBweDtcclxuICB9XHJcblxyXG5cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo2NDBweCkge1xyXG5cclxuICAuY29udGFpbmVye1xyXG4gICAgbWF4LXdpZHRoOiA1NTBweDtcclxuICB9XHJcblxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjU4NXB4KSB7XHJcbiAgLmNvbnRhaW5lcntcclxuICAgIG1heC13aWR0aDogNTAwcHg7XHJcbiAgfVxyXG5cclxuICAubWFpbl9fcHJvamVjdG5hbWV7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB3aWR0aDogNDg0cHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICB9XHJcblxyXG4gIC5mb290ZXJfX2luZm9ybWF0aW9ue1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxuXHJcbiAgLmZvb3Rlcl9fc29jaWFsc3tcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcblxyXG4gIC5mb290ZXJfX2xpbmt7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgfVxyXG5cclxuICAuZm9vdGVyX19sb2NhdGlvbntcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcblxyXG59XHJcbiIsIioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZvbnQtZmFtaWx5OiBcIkNvbWZvcnRhYVwiLCBjdXJzaXZlO1xufVxuXG4uY29udGFpbmVyIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1heC13aWR0aDogMTIwMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTU4LjExZGVnLCAjMDE0QjgwIDM0LjM0JSwgIzQ4OTJGRiAxMDMuMTUlKTtcbiAgcGFkZGluZzogMTVweCAwO1xufVxuLmhlYWRlcl9fbG9nb2xpbmsge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uaGVhZGVyX19jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5oZWFkZXJfX2xvZ28ge1xuICB3aWR0aDogMTA3cHg7XG4gIGhlaWdodDogNzBweDtcbn1cbi5oZWFkZXJfX3RleHQge1xuICBmb250LWZhbWlseTogQ29tZm9ydGFhO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgcGFkZGluZy1sZWZ0OiAyOHB4O1xufVxuXG4ubWFpbiB7XG4gIHBhZGRpbmc6IDY0cHggMDtcbn1cbi5tYWluX190aXRsZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvaW1nL2xpdGVyYXR1cmUuanBnKTtcbn1cbi5tYWluX19hcnJvdyB7XG4gIGZvbnQtc2l6ZTogNjRweDtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLm1haW5fX3RleHRjb250ZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xufVxuLm1haW5fX3RpdGxlbmFtZSB7XG4gIHBhZGRpbmc6IDQ0cHggMDtcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYU5ldWVDeXI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zaXplOiA2NHB4O1xuICBsaW5lLWhlaWdodDogNjNweDtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLm1haW5fX2Jpb2dyYXBoeSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMjRweDtcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYU5ldWVDeXI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMjhweDtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgdGV4dC1pbmRlbnQ6IDI1cHg7XG4gIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogXCJjcHNwXCIgb247XG4gIGNvbG9yOiAjNTc1OTY1O1xuICBiYWNrZ3JvdW5kOiAjRjRGNEY0O1xuICBib3gtc2hhZG93OiAwcHggMnB4IDRweCAjQ0ZEOERDO1xuICBtYXJnaW4tYm90dG9tOiA2NHB4O1xufVxuLm1haW5fX2FsbHNlY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiAjNTc1OTY1O1xufVxuLm1haW5fX3NlY3Rpb25saW5rIHtcbiAgY29sb3I6ICM1NzU5NjU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmZvb3RlciB7XG4gIGJhY2tncm91bmQ6ICNGNEY0RjQ7XG4gIHBhZGRpbmctdG9wOiAzNnB4O1xufVxuLmZvb3Rlcl9fYmxvY2tzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmZvb3Rlcl9fY29udGFjdHMge1xuICBmb250LWZhbWlseTogQ29tZm9ydGFhO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGNvbG9yOiAjNTc1OTY1O1xufVxuLmZvb3Rlcl9fYm9sZCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmZvb3Rlcl9faW5mb3JtYXRpb24ge1xuICBwYWRkaW5nLWJvdHRvbTogMTRweDtcbn1cbi5mb290ZXJfX2luZm9ybWF0aW9uIDpsYXN0LWNoaWxkIHtcbiAgcGFkZGluZy1ib3R0b206IDA7XG59XG4uZm9vdGVyX19zb2NpYWxzIHtcbiAgZm9udC1mYW1pbHk6IENvbWZvcnRhYTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgY29sb3I6ICM1NzU5NjU7XG4gIHBhZGRpbmctYm90dG9tOiAxNHB4O1xufVxuLmZvb3Rlcl9fbGluayB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICMzQjU5OTg7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn1cbi5mb290ZXJfX2xpYnJhcnlsaW5rIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzU3NTk2NTtcbn1cbi5mb290ZXJfX2xvY2F0aW9uIHtcbiAgZm9udC1mYW1pbHk6IENvbWZvcnRhYTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgY29sb3I6ICM1NzU5NjU7XG59XG5cbi5saW5lIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMXB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogcmdiYSg4NywgODksIDEwMSwgMC4zNSk7XG4gIG1hcmdpbi10b3A6IDI4cHg7XG4gIG1hcmdpbi1ib3R0b206IDE4cHg7XG59XG5cbi5jb3B5cmlnaHQge1xuICBmb250LWZhbWlseTogQ29tZm9ydGFhO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBjb2xvcjogIzU3NTk2NTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy1ib3R0b206IDE4cHg7XG59XG5cbi5tZW51IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIGNvbG9yOiAjNTc1OTY1O1xuICBwYWRkaW5nOiAxNnB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn1cbi5tZW51IC5yb3RhdGUge1xuICB0cmFuc2l0aW9uOiAwLjdzO1xufVxuLm1lbnUgLnJvdGF0ZTpob3ZlciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKSB0cmFuc2xhdGVaKDApO1xuICB0cmFuc2l0aW9uOiAwLjdzO1xufVxuXG4ubGl0ZXJhdHVyZW1lbnUge1xuICBjb2xvcjogI0Y0RjRGNDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI1MHB4KSB7XG4gIC5tYWluX19wcm9qZWN0bmFtZSB7XG4gICAgZm9udC1zaXplOiAzNXB4O1xuICAgIHdpZHRoOiAxMDQ2cHg7XG4gIH1cblxuICAuY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDEwMDBweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTEwNXB4KSB7XG4gIC5tYWluX19wcm9qZWN0bmFtZSB7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICAgIHdpZHRoOiA4NTBweDtcbiAgfVxuXG4gIC5jb250YWluZXIge1xuICAgIG1heC13aWR0aDogODAwcHg7XG4gIH1cblxuICAuaGVhZGVyX190ZXh0IHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwOHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIG1heC13aWR0aDogNzUwcHg7XG4gIH1cblxuICAuaGVhZGVyX190ZXh0IHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cblxuICAubWFpbl9fcHJvamVjdG5hbWUge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB3aWR0aDogNTU2cHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc4MHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIG1heC13aWR0aDogNjgwcHg7XG4gIH1cblxuICAubWFpbl9fcGVyc29ucyB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIC5tYWluX19jaGFyYWN0ZXIge1xuICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gIH1cblxuICAuZm9vdGVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY5NXB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIG1heC13aWR0aDogNjAwcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0MHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIG1heC13aWR0aDogNTUwcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU4NXB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIG1heC13aWR0aDogNTAwcHg7XG4gIH1cblxuICAubWFpbl9fcHJvamVjdG5hbWUge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB3aWR0aDogNDg0cHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cblxuICAuZm9vdGVyX19pbmZvcm1hdGlvbiB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG5cbiAgLmZvb3Rlcl9fc29jaWFscyB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG5cbiAgLmZvb3Rlcl9fbGluayB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG5cbiAgLmZvb3Rlcl9fbG9jYXRpb24ge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BiographyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-biography',
          templateUrl: './biography.component.html',
          styleUrls: ['./biography.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: _services_data_getter_service__WEBPACK_IMPORTED_MODULE_2__["DataGetterService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/edit-author/edit-author.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/edit-author/edit-author.component.ts ***!
    \******************************************************/

  /*! exports provided: EditAuthorComponent */

  /***/
  function srcAppEditAuthorEditAuthorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditAuthorComponent", function () {
      return EditAuthorComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _models_author__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../models/author */
    "./src/app/models/author.ts");
    /* harmony import */


    var _models_collection_name_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../models/collection-name.enum */
    "./src/app/models/collection-name.enum.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ckeditor/ckeditor5-build-classic */
    "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js");
    /* harmony import */


    var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _services_data_getter_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/data-getter.service */
    "./src/app/services/data-getter.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ckeditor/ckeditor5-angular */
    "./node_modules/@ckeditor/ckeditor5-angular/__ivy_ngcc__/fesm2015/ckeditor-ckeditor5-angular.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function EditAuthorComponent_div_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Short info text length > 15!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0() {
      return ["heading", "|", "bold", "italic", "link", "bulletedList", "numberedList"];
    };

    var _c1 = function _c1(a0) {
      return {
        toolbar: a0
      };
    };

    var EditAuthorComponent = /*#__PURE__*/function () {
      function EditAuthorComponent(dataGetterService, activatedRoute, router) {
        _classCallCheck(this, EditAuthorComponent);

        this.dataGetterService = dataGetterService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.author = new _models_author__WEBPACK_IMPORTED_MODULE_1__["Author"]();
        this.editor = _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_4__;
        this.shortInfoWarning = false;
      }

      _createClass(EditAuthorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.activatedRoute.queryParams.subscribe(function (author) {
            _this4.author = _models_author__WEBPACK_IMPORTED_MODULE_1__["Author"].clone(author);

            _this4.dataGetterService.GetImgURL(_this4.author.imgURI).subscribe(function (url) {
              return _this4.authorImgURL = url;
            });
          });
        }
      }, {
        key: "ngOnChange",
        value: function ngOnChange(changes) {
          this.shortInfoWarning = changes.length > 15;
        }
      }, {
        key: "SetAuthorImg",
        value: function SetAuthorImg(data) {
          var _this5 = this;

          this.newAuthorImgFile = data.target.files[0];
          var path = "".concat(_models_collection_name_enum__WEBPACK_IMPORTED_MODULE_2__["CollectionName"].sections, "/").concat(this.author.sectionId, "/").concat(_models_collection_name_enum__WEBPACK_IMPORTED_MODULE_2__["CollectionName"].authors, "/").concat(this.author.id, "/authorImg");
          this.dataGetterService.UploadFile(path, this.newAuthorImgFile).subscribe(function (value) {
            value.ref.getDownloadURL().then(function (value1) {
              return _this5.authorImgURL = value1;
            });
            _this5.author.imgURI = "gs://".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].firebaseConfig.storageBucket, "/").concat(path);
          });
        }
      }, {
        key: "DeleteAuthor",
        value: function DeleteAuthor() {
          var _this6 = this;

          this.dataGetterService.DeleteAuthor(this.author);
          alert("Author deleted!");
          this.dataGetterService.GetSection(this.author.sectionId).subscribe(function (section) {
            return _this6.router.navigate(['/section'], {
              queryParams: section
            });
          });
        }
      }, {
        key: "SaveAuthor",
        value: function SaveAuthor() {
          var _this7 = this;

          this.dataGetterService.SetAuthor(this.author).subscribe(function (value) {
            alert("Author saved!");

            _this7.router.navigate(['/author'], {
              queryParams: _this7.author
            });
          }, function (error) {
            alert("Error ".concat(error));
          });
        }
      }]);

      return EditAuthorComponent;
    }();

    EditAuthorComponent.ɵfac = function EditAuthorComponent_Factory(t) {
      return new (t || EditAuthorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_getter_service__WEBPACK_IMPORTED_MODULE_5__["DataGetterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]));
    };

    EditAuthorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EditAuthorComponent,
      selectors: [["app-edit-author"]],
      decls: 19,
      vars: 20,
      consts: [[3, "src"], ["type", "file", 3, "change"], [3, "ngModel", "editor", "config", "ngModelChange"], [4, "ngIf"], [3, "ngModel", "editor", "config", "ngModelChange", "keyup.enter", "keyup.backspace", "blur", "input"], ["type", "button", "value", "Delete", 3, "click"], ["type", "button", "value", "Save", 3, "click"]],
      template: function EditAuthorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditAuthorComponent_Template_input_change_2_listener($event) {
            return ctx.SetAuthorImg($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Name: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ckeditor", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditAuthorComponent_Template_ckeditor_ngModelChange_6_listener($event) {
            return ctx.author.name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Status: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ckeditor", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditAuthorComponent_Template_ckeditor_ngModelChange_10_listener($event) {
            return ctx.author.status = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "ShortInfo: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, EditAuthorComponent_div_14_Template, 2, 0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ckeditor", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditAuthorComponent_Template_ckeditor_ngModelChange_15_listener($event) {
            return ctx.author.shortInfo = $event;
          })("keyup.enter", function EditAuthorComponent_Template_ckeditor_keyup_enter_15_listener() {
            return ctx.ngOnChange(ctx.author.shortInfo);
          })("keyup.backspace", function EditAuthorComponent_Template_ckeditor_keyup_backspace_15_listener() {
            return ctx.ngOnChange(ctx.author.shortInfo);
          })("blur", function EditAuthorComponent_Template_ckeditor_blur_15_listener() {
            return ctx.ngOnChange(ctx.author.shortInfo);
          })("input", function EditAuthorComponent_Template_ckeditor_input_15_listener() {
            return ctx.ngOnChange(ctx.author.shortInfo);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditAuthorComponent_Template_input_click_17_listener() {
            return ctx.DeleteAuthor();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditAuthorComponent_Template_input_click_18_listener() {
            return ctx.SaveAuthor();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.authorImgURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.author.name)("editor", ctx.editor)("config", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c0)));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.author.status)("editor", ctx.editor)("config", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c0)));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.shortInfoWarning);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.author.shortInfo)("editor", ctx.editor)("config", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](18, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c0)));
        }
      },
      directives: [_ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_7__["CKEditorComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXQtYXV0aG9yL2VkaXQtYXV0aG9yLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditAuthorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-edit-author',
          templateUrl: './edit-author.component.html',
          styleUrls: ['./edit-author.component.scss']
        }]
      }], function () {
        return [{
          type: _services_data_getter_service__WEBPACK_IMPORTED_MODULE_5__["DataGetterService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/edit-biography/edit-biography.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/edit-biography/edit-biography.component.ts ***!
    \************************************************************/

  /*! exports provided: EditBiographyComponent */

  /***/
  function srcAppEditBiographyEditBiographyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditBiographyComponent", function () {
      return EditBiographyComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _models_author__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../models/author */
    "./src/app/models/author.ts");
    /* harmony import */


    var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ckeditor/ckeditor5-build-classic */
    "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js");
    /* harmony import */


    var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_data_getter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/data-getter.service */
    "./src/app/services/data-getter.service.ts");
    /* harmony import */


    var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ckeditor/ckeditor5-angular */
    "./node_modules/@ckeditor/ckeditor5-angular/__ivy_ngcc__/fesm2015/ckeditor-ckeditor5-angular.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var _c0 = function _c0() {
      return ["heading", "|", "bold", "italic", "link", "bulletedList", "numberedList"];
    };

    var _c1 = function _c1(a0) {
      return {
        toolbar: a0
      };
    };

    var EditBiographyComponent = /*#__PURE__*/function () {
      function EditBiographyComponent(activatedRoute, dataGetterService, router) {
        _classCallCheck(this, EditBiographyComponent);

        this.activatedRoute = activatedRoute;
        this.dataGetterService = dataGetterService;
        this.router = router;
        this.editor = _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_2__;
      }

      _createClass(EditBiographyComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this8 = this;

          this.activatedRoute.queryParams.subscribe(function (author) {
            _this8.author = _models_author__WEBPACK_IMPORTED_MODULE_1__["Author"].clone(author);
          });
        }
      }, {
        key: "saveAuthor",
        value: function saveAuthor() {
          var _this9 = this;

          this.dataGetterService.SetAuthor(this.author).subscribe(function (value) {
            alert("biography saved!");

            _this9.router.navigate(['/biography'], {
              queryParams: _this9.author
            });
          }, function (error) {
            alert("Error ".concat(error));
          });
        }
      }]);

      return EditBiographyComponent;
    }();

    EditBiographyComponent.ɵfac = function EditBiographyComponent_Factory(t) {
      return new (t || EditBiographyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_getter_service__WEBPACK_IMPORTED_MODULE_4__["DataGetterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    EditBiographyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EditBiographyComponent,
      selectors: [["app-edit-biography"]],
      decls: 2,
      vars: 6,
      consts: [[3, "ngModel", "editor", "config", "ngModelChange"], ["type", "button", "value", "Save", 3, "click"]],
      template: function EditBiographyComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ckeditor", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditBiographyComponent_Template_ckeditor_ngModelChange_0_listener($event) {
            return ctx.author.biography = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditBiographyComponent_Template_input_click_1_listener() {
            return ctx.saveAuthor();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.author.biography)("editor", ctx.editor)("config", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0)));
        }
      },
      directives: [_ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_5__["CKEditorComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXQtYmlvZ3JhcGh5L2VkaXQtYmlvZ3JhcGh5LmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditBiographyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-edit-biography',
          templateUrl: './edit-biography.component.html',
          styleUrls: ['./edit-biography.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _services_data_getter_service__WEBPACK_IMPORTED_MODULE_4__["DataGetterService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/edit-footer/edit-footer.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/edit-footer/edit-footer.component.ts ***!
    \******************************************************/

  /*! exports provided: EditFooterComponent */

  /***/
  function srcAppEditFooterEditFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditFooterComponent", function () {
      return EditFooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _models_footer_socialnetwork__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../models/footer-socialnetwork */
    "./src/app/models/footer-socialnetwork.ts");
    /* harmony import */


    var _services_data_getter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/data-getter.service */
    "./src/app/services/data-getter.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function EditFooterComponent_div_15_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0418\u043A\u043E\u043D\u043A\u0430: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditFooterComponent_div_15_Template_input_ngModelChange_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var i_r2 = ctx.index;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.social_networks[i_r2].icon = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "URL: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditFooterComponent_div_15_Template_input_ngModelChange_7_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var i_r2 = ctx.index;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.social_networks[i_r2].url = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditFooterComponent_div_15_Template_input_click_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var i_r2 = ctx.index;

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r6.removeSocialNetworkFromArray(i_r2);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r2 = ctx.index;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.social_networks[i_r2].icon);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.social_networks[i_r2].url);
      }
    }

    var EditFooterComponent = /*#__PURE__*/function () {
      function EditFooterComponent(dataGetterService, router) {
        _classCallCheck(this, EditFooterComponent);

        this.dataGetterService = dataGetterService;
        this.router = router;
      }

      _createClass(EditFooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this10 = this;

          this.dataGetterService.GetFooter().subscribe(function (footer) {
            return _this10.footer = footer;
          });
          this.dataGetterService.GetFooterSocialNetworks().subscribe(function (result) {
            return _this10.social_networks = result;
          });
        }
      }, {
        key: "addSocialNetworkToArray",
        value: function addSocialNetworkToArray() {
          this.social_networks.push(new _models_footer_socialnetwork__WEBPACK_IMPORTED_MODULE_1__["FooterSocialnetwork"]());
        }
      }, {
        key: "removeSocialNetworkFromArray",
        value: function removeSocialNetworkFromArray(index) {
          // this.social_networks.splice(index, 1);
          this.dataGetterService.DeleteFooterSocialNetwork(this.social_networks[index]);
        }
      }, {
        key: "setFooter",
        value: function setFooter() {
          this.dataGetterService.SetFooter(this.footer).then(function (res) {// location.reload();
          });
          this.dataGetterService.SetFooterSocialNetworks(this.social_networks); //location.reload();
          //this.dataGetterService.GetFooter().subscribe(footer => this.footer = footer);
          //window.location.reload();
        }
      }]);

      return EditFooterComponent;
    }();

    EditFooterComponent.ɵfac = function EditFooterComponent_Factory(t) {
      return new (t || EditFooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_getter_service__WEBPACK_IMPORTED_MODULE_2__["DataGetterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    EditFooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EditFooterComponent,
      selectors: [["app-edit-footer"]],
      decls: 17,
      vars: 4,
      consts: [["type", "text", 3, "ngModel", "ngModelChange"], ["type", "button", "value", "Add social network", 3, "click"], [4, "ngFor", "ngForOf"], ["type", "button", "value", "Save all", 3, "click"], ["type", "button", "value", "Delete this", 3, "click"]],
      template: function EditFooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0422\u0435\u043B\u0435\u0444\u043E\u043D: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditFooterComponent_Template_input_ngModelChange_2_listener($event) {
            return ctx.footer.phone = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u041F\u043E\u0448\u0442\u0430: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditFooterComponent_Template_input_ngModelChange_6_listener($event) {
            return ctx.footer.email = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Location: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditFooterComponent_Template_input_ngModelChange_10_listener($event) {
            return ctx.footer.location = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u0421\u043E\u0446 \u0441\u0435\u0442\u0438: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditFooterComponent_Template_input_click_14_listener() {
            return ctx.addSocialNetworkToArray();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, EditFooterComponent_div_15_Template, 15, 2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditFooterComponent_Template_input_click_16_listener() {
            return ctx.setFooter();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.footer.phone);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.footer.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.footer.location);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.social_networks);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXQtZm9vdGVyL2VkaXQtZm9vdGVyLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditFooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-edit-footer',
          templateUrl: './edit-footer.component.html',
          styleUrls: ['./edit-footer.component.scss']
        }]
      }], function () {
        return [{
          type: _services_data_getter_service__WEBPACK_IMPORTED_MODULE_2__["DataGetterService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/edit-indicators/edit-indicators.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/edit-indicators/edit-indicators.component.ts ***!
    \**************************************************************/

  /*! exports provided: EditIndicatorsComponent */

  /***/
  function srcAppEditIndicatorsEditIndicatorsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditIndicatorsComponent", function () {
      return EditIndicatorsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_data_getter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/data-getter.service */
    "./src/app/services/data-getter.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function EditIndicatorsComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditIndicatorsComponent_div_0_Template_input_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var i_r2 = ctx.index;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.removeLibraryFile(i_r2);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var file_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](file_r1.name);
      }
    }

    var EditIndicatorsComponent = /*#__PURE__*/function () {
      function EditIndicatorsComponent(activatedRoute, dataGetterService, router) {
        _classCallCheck(this, EditIndicatorsComponent);

        this.activatedRoute = activatedRoute;
        this.dataGetterService = dataGetterService;
        this.router = router;
      }

      _createClass(EditIndicatorsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this11 = this;

          this.activatedRoute.queryParams.subscribe(function (author) {
            _this11.author = author;

            _this11.dataGetterService.GetAuthorIndicatorsFiles(_this11.author).subscribe(function (res) {
              return _this11.indicatorsFiles = res;
            });
          });
        }
      }, {
        key: "removeLibraryFile",
        value: function removeLibraryFile(index) {
          // this.social_networks.splice(index, 1);
          this.dataGetterService.DeleteAuthorIndicatorsFile(this.author, this.indicatorsFiles[index]);
        }
      }]);

      return EditIndicatorsComponent;
    }();

    EditIndicatorsComponent.ɵfac = function EditIndicatorsComponent_Factory(t) {
      return new (t || EditIndicatorsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_getter_service__WEBPACK_IMPORTED_MODULE_2__["DataGetterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    EditIndicatorsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EditIndicatorsComponent,
      selectors: [["app-edit-indicators"]],
      decls: 1,
      vars: 1,
      consts: [[4, "ngFor", "ngForOf"], ["type", "button", "value", "Delete", 3, "click"]],
      template: function EditIndicatorsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, EditIndicatorsComponent_div_0_Template, 6, 1, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.indicatorsFiles);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXQtaW5kaWNhdG9ycy9lZGl0LWluZGljYXRvcnMuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditIndicatorsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-edit-indicators',
          templateUrl: './edit-indicators.component.html',
          styleUrls: ['./edit-indicators.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: _services_data_getter_service__WEBPACK_IMPORTED_MODULE_2__["DataGetterService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/edit-library/edit-library.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/edit-library/edit-library.component.ts ***!
    \********************************************************/

  /*! exports provided: EditLibraryComponent */

  /***/
  function srcAppEditLibraryEditLibraryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditLibraryComponent", function () {
      return EditLibraryComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_data_getter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/data-getter.service */
    "./src/app/services/data-getter.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function EditLibraryComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditLibraryComponent_div_0_Template_input_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var i_r2 = ctx.index;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.removeLibraryFile(i_r2);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var file_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](file_r1.name);
      }
    }

    var EditLibraryComponent = /*#__PURE__*/function () {
      function EditLibraryComponent(activatedRoute, dataGetterService, router) {
        _classCallCheck(this, EditLibraryComponent);

        this.activatedRoute = activatedRoute;
        this.dataGetterService = dataGetterService;
        this.router = router;
      }

      _createClass(EditLibraryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this12 = this;

          this.activatedRoute.queryParams.subscribe(function (author) {
            _this12.author = author;

            _this12.dataGetterService.GetAuthorLibraryFiles(_this12.author).subscribe(function (res) {
              return _this12.libraryFiles = res;
            });
          });
        }
      }, {
        key: "removeLibraryFile",
        value: function removeLibraryFile(index) {
          // this.social_networks.splice(index, 1);
          this.dataGetterService.DeleteAuthorLibraryFile(this.author, this.libraryFiles[index]);
        }
      }]);

      return EditLibraryComponent;
    }();

    EditLibraryComponent.ɵfac = function EditLibraryComponent_Factory(t) {
      return new (t || EditLibraryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_getter_service__WEBPACK_IMPORTED_MODULE_2__["DataGetterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    EditLibraryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EditLibraryComponent,
      selectors: [["app-edit-library"]],
      decls: 1,
      vars: 1,
      consts: [[4, "ngFor", "ngForOf"], ["type", "button", "value", "Delete", 3, "click"]],
      template: function EditLibraryComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, EditLibraryComponent_div_0_Template, 6, 1, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.libraryFiles);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXQtbGlicmFyeS9lZGl0LWxpYnJhcnkuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditLibraryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-edit-library',
          templateUrl: './edit-library.component.html',
          styleUrls: ['./edit-library.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: _services_data_getter_service__WEBPACK_IMPORTED_MODULE_2__["DataGetterService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/footer/footer.component.ts":
  /*!********************************************!*\
    !*** ./src/app/footer/footer.component.ts ***!
    \********************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _models_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../models/footer */
    "./src/app/models/footer.ts");
    /* harmony import */


    var _services_data_getter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/data-getter.service */
    "./src/app/services/data-getter.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function FooterComponent_a_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var socialNetwork_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", socialNetwork_r2.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](socialNetwork_r2.icon);
      }
    }

    function FooterComponent_a_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent(dataGetterService) {
        _classCallCheck(this, FooterComponent);

        this.dataGetterService = dataGetterService;
        this.footer = new _models_footer__WEBPACK_IMPORTED_MODULE_1__["Footer"]();
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this13 = this;

          this.dataGetterService.GetFooter().subscribe(function (footer) {
            return _this13.footer = footer;
          });
          this.dataGetterService.GetFooterSocialNetworks().subscribe(function (result) {
            return _this13.socialNetworks = result;
          });
        }
      }]);

      return FooterComponent;
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_getter_service__WEBPACK_IMPORTED_MODULE_2__["DataGetterService"]));
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 24,
      vars: 5,
      consts: [[1, "footer"], [1, "container"], [1, "footer__blocks"], [1, "footer__contacts"], [1, "footer__information"], [1, "footer__bold"], [1, "footer__media"], [1, "footer__socials"], ["class", "footer__link", 3, "href", 4, "ngFor", "ngForOf"], [1, "footer__adress"], [1, "footer__librarylink", 3, "href"], [1, "footer__location"], ["href", "", "routerLink", "/edit-footer", "class", "menu", 4, "ngIf"], [1, "line"], [1, "copyright"], [1, "footer__link", 3, "href"], ["href", "", "routerLink", "/edit-footer", 1, "menu"], [1, "fas", "fa-cog", "rotate"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u0422\u0435\u043B\u0435\u0444\u043E\u043D:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u041F\u043E\u0448\u0442\u0430:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u0421\u043E\u0446\u043C\u0435\u0440\u0435\u0436\u0456:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, FooterComponent_a_15_Template, 2, 4, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u0410\u0434\u0440\u0435\u0441\u0430");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, FooterComponent_a_20_Template, 2, 0, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\xA92020 Copyright");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.footer.phone, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.footer.email, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.socialNetworks);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.footer.location, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataGetterService.userAuthenticated());
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]],
      styles: ["*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: \"Comfortaa\", cursive;\n}\n\n.container[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  max-width: 1200px;\n  height: 100%;\n}\n\nbody[_ngcontent-%COMP%] {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.footer[_ngcontent-%COMP%] {\n  background: #F4F4F4;\n  padding-top: 36px;\n  position: relative;\n}\n\n.footer__blocks[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.footer__contacts[_ngcontent-%COMP%] {\n  font-family: Comfortaa;\n  font-style: normal;\n  font-size: 18px;\n  line-height: 20px;\n  color: #575965;\n}\n\n.footer__bold[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.footer__information[_ngcontent-%COMP%] {\n  padding-bottom: 14px;\n}\n\n.footer__information[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:last-child {\n  padding-bottom: 0;\n}\n\n.footer__socials[_ngcontent-%COMP%] {\n  font-family: Comfortaa;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 18px;\n  line-height: 20px;\n  color: #575965;\n  padding-bottom: 14px;\n}\n\n.footer__link[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #3B5998;\n  font-size: 22px;\n}\n\n.footer__librarylink[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #575965;\n}\n\n.footer__location[_ngcontent-%COMP%] {\n  font-family: Comfortaa;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 18px;\n  line-height: 20px;\n  color: #575965;\n}\n\n.line[_ngcontent-%COMP%] {\n  display: block;\n  height: 1px;\n  width: 100%;\n  background: rgba(87, 89, 101, 0.35);\n  margin-top: 28px;\n  margin-bottom: 18px;\n}\n\n.copyright[_ngcontent-%COMP%] {\n  font-family: Comfortaa;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 18px;\n  line-height: 20px;\n  color: #575965;\n  margin: 0 auto;\n  text-align: center;\n  padding-bottom: 18px;\n}\n\n.menu[_ngcontent-%COMP%] {\n  position: absolute;\n  display: inline-block;\n  list-style: none;\n  right: 0;\n  top: 0;\n  color: #575965;\n  padding: 16px;\n  text-decoration: none;\n  font-size: 22px;\n}\n\n.menu[_ngcontent-%COMP%]   .rotate[_ngcontent-%COMP%] {\n  transition: 0.7s;\n}\n\n.menu[_ngcontent-%COMP%]   .rotate[_ngcontent-%COMP%]:hover {\n  transform: rotate(90deg) translateZ(0);\n  transition: 0.7s;\n}\n\n.literaturemenu[_ngcontent-%COMP%] {\n  color: #F4F4F4;\n}\n\n@media screen and (max-width: 1250px) {\n  .main__projectname[_ngcontent-%COMP%] {\n    font-size: 35px;\n    width: 1046px;\n  }\n\n  .container[_ngcontent-%COMP%] {\n    max-width: 1000px;\n  }\n}\n\n@media screen and (max-width: 1105px) {\n  .main__projectname[_ngcontent-%COMP%] {\n    font-size: 28px;\n    width: 850px;\n  }\n\n  .container[_ngcontent-%COMP%] {\n    max-width: 800px;\n  }\n\n  .header__text[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n\n@media screen and (max-width: 908px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 750px;\n  }\n\n  .header__text[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n\n  .main__projectname[_ngcontent-%COMP%] {\n    font-size: 18px;\n    width: 556px;\n    margin: 0 auto;\n  }\n}\n\n@media screen and (max-width: 780px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 680px;\n  }\n\n  .main__persons[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n  }\n  .main__character[_ngcontent-%COMP%] {\n    margin-bottom: 24px;\n  }\n\n  .footer[_ngcontent-%COMP%] {\n    position: relative;\n  }\n}\n\n@media screen and (max-width: 695px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 600px;\n  }\n}\n\n@media screen and (max-width: 640px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 550px;\n  }\n}\n\n@media screen and (max-width: 585px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 500px;\n  }\n\n  .main__projectname[_ngcontent-%COMP%] {\n    font-size: 16px;\n    width: 484px;\n    margin: 0 auto;\n  }\n\n  .footer__information[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n\n  .footer__socials[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n\n  .footer__link[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n\n  .footer__location[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL0M6XFxHaXRIdWJcXGxpYnJhcnkvc3JjXFxhcHBcXGZvb3RlclxcZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtFQUNBLGlDQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7QUNDRjs7QURHQTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0FGOztBREVFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUNBSjs7QURHRTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDREo7O0FESUU7RUFDRSxpQkFBQTtBQ0ZKOztBREtFO0VBQ0Usb0JBQUE7QUNISjs7QURLSTtFQUNFLGlCQUFBO0FDSE47O0FET0U7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7QUNMSjs7QURRRTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNOSjs7QURTRTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtBQ1BKOztBRFVFO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ1JKOztBRGFBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsbUNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDVkY7O0FEYUE7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUNWRjs7QURhQTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUNWRjs7QURZRTtFQUNFLGdCQUFBO0FDVko7O0FEV0k7RUFDRSxzQ0FBQTtFQUNBLGdCQUFBO0FDVE47O0FEY0E7RUFDRSxjQUFBO0FDWEY7O0FEY0E7RUFDRTtJQUNFLGVBQUE7SUFDQSxhQUFBO0VDWEY7O0VEY0E7SUFDRSxpQkFBQTtFQ1hGO0FBQ0Y7O0FEaUJBO0VBQ0U7SUFDRSxlQUFBO0lBQ0EsWUFBQTtFQ2ZGOztFRGlCQTtJQUNFLGdCQUFBO0VDZEY7O0VEaUJBO0lBQ0UsZUFBQTtFQ2RGO0FBQ0Y7O0FEa0JBO0VBQ0U7SUFDRSxnQkFBQTtFQ2hCRjs7RURtQkE7SUFDRSxlQUFBO0VDaEJGOztFRG1CQTtJQUNFLGVBQUE7SUFDQSxZQUFBO0lBQ0EsY0FBQTtFQ2hCRjtBQUNGOztBRG9CQTtFQUNFO0lBQ0UsZ0JBQUE7RUNsQkY7O0VEcUJFO0lBQ0Usc0JBQUE7SUFDQSxtQkFBQTtFQ2xCSjtFRHFCRTtJQUNFLG1CQUFBO0VDbkJKOztFRHVCQTtJQUNFLGtCQUFBO0VDcEJGO0FBQ0Y7O0FEdUJBO0VBQ0U7SUFDRSxnQkFBQTtFQ3JCRjtBQUNGOztBRDBCQTtFQUVFO0lBQ0UsZ0JBQUE7RUN6QkY7QUFDRjs7QUQ2QkE7RUFDRTtJQUNFLGdCQUFBO0VDM0JGOztFRDhCQTtJQUNFLGVBQUE7SUFDQSxZQUFBO0lBQ0EsY0FBQTtFQzNCRjs7RUQ4QkE7SUFDRSxlQUFBO0VDM0JGOztFRDhCQTtJQUNFLGVBQUE7RUMzQkY7O0VEOEJBO0lBQ0UsZUFBQTtFQzNCRjs7RUQ4QkE7SUFDRSxlQUFBO0VDM0JGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGZvbnQtZmFtaWx5OiAnQ29tZm9ydGFhJywgY3Vyc2l2ZTtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5ib2R5e1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuXHJcbi5mb290ZXJ7XHJcbiAgYmFja2dyb3VuZDogI0Y0RjRGNDtcclxuICBwYWRkaW5nLXRvcDogMzZweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICZfX2Jsb2Nrc3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgJl9fY29udGFjdHN7XHJcbiAgICBmb250LWZhbWlseTogQ29tZm9ydGFhO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICBjb2xvcjogIzU3NTk2NTtcclxuICB9XHJcblxyXG4gICZfX2JvbGR7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcblxyXG4gICZfX2luZm9ybWF0aW9ue1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE0cHg7XHJcblxyXG4gICAgOmxhc3QtY2hpbGR7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJl9fc29jaWFsc3tcclxuICAgIGZvbnQtZmFtaWx5OiBDb21mb3J0YWE7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgY29sb3I6ICM1NzU5NjU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTRweDtcclxuICB9XHJcblxyXG4gICZfX2xpbmt7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogIzNCNTk5ODtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICB9XHJcblxyXG4gICZfX2xpYnJhcnlsaW5re1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6ICM1NzU5NjU7XHJcbiAgfVxyXG5cclxuICAmX19sb2NhdGlvbntcclxuICAgIGZvbnQtZmFtaWx5OiBDb21mb3J0YWE7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgY29sb3I6ICM1NzU5NjU7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLmxpbmV7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgaGVpZ2h0OiAxcHg7XHJcbiAgd2lkdGg6MTAwJTtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDg3LCA4OSwgMTAxLCAwLjM1KTtcclxuICBtYXJnaW4tdG9wOiAyOHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDE4cHg7XHJcbn1cclxuXHJcbi5jb3B5cmlnaHR7XHJcbiAgZm9udC1mYW1pbHk6IENvbWZvcnRhYTtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gIGNvbG9yOiAjNTc1OTY1O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nLWJvdHRvbTogMThweDtcclxufVxyXG5cclxuLm1lbnV7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHRvcDogMDtcclxuICBjb2xvcjogIzU3NTk2NTtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBmb250LXNpemU6IDIycHg7XHJcblxyXG4gIC5yb3RhdGV7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjdzO1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKSB0cmFuc2xhdGVaKDApO1xyXG4gICAgICB0cmFuc2l0aW9uOiAwLjdzO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmxpdGVyYXR1cmVtZW51e1xyXG4gIGNvbG9yOiAjRjRGNEY0O1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEyNTBweCl7XHJcbiAgLm1haW5fX3Byb2plY3RuYW1le1xyXG4gICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgd2lkdGg6IDEwNDZweDtcclxuICB9XHJcblxyXG4gIC5jb250YWluZXJ7XHJcbiAgICBtYXgtd2lkdGg6IDEwMDBweDtcclxuICB9XHJcblxyXG5cclxufVxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTEwNXB4KXtcclxuICAubWFpbl9fcHJvamVjdG5hbWV7XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICB3aWR0aDogODUwcHg7XHJcbiAgfVxyXG4gIC5jb250YWluZXJ7XHJcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xyXG4gIH1cclxuXHJcbiAgLmhlYWRlcl9fdGV4dHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcblxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjkwOHB4KXtcclxuICAuY29udGFpbmVye1xyXG4gICAgbWF4LXdpZHRoOiA3NTBweDtcclxuICB9XHJcblxyXG4gIC5oZWFkZXJfX3RleHR7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgfVxyXG5cclxuICAubWFpbl9fcHJvamVjdG5hbWV7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB3aWR0aDogNTU2cHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICB9XHJcblxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc4MHB4KXtcclxuICAuY29udGFpbmVye1xyXG4gICAgbWF4LXdpZHRoOiA2ODBweDtcclxuICB9XHJcbiAgLm1haW57XHJcbiAgICAmX19wZXJzb25ze1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgICZfX2NoYXJhY3RlcntcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5mb290ZXJ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjY5NXB4KXtcclxuICAuY29udGFpbmVye1xyXG4gICAgbWF4LXdpZHRoOiA2MDBweDtcclxuICB9XHJcblxyXG5cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo2NDBweCkge1xyXG5cclxuICAuY29udGFpbmVye1xyXG4gICAgbWF4LXdpZHRoOiA1NTBweDtcclxuICB9XHJcblxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjU4NXB4KSB7XHJcbiAgLmNvbnRhaW5lcntcclxuICAgIG1heC13aWR0aDogNTAwcHg7XHJcbiAgfVxyXG5cclxuICAubWFpbl9fcHJvamVjdG5hbWV7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB3aWR0aDogNDg0cHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICB9XHJcblxyXG4gIC5mb290ZXJfX2luZm9ybWF0aW9ue1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxuXHJcbiAgLmZvb3Rlcl9fc29jaWFsc3tcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcblxyXG4gIC5mb290ZXJfX2xpbmt7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgfVxyXG5cclxuICAuZm9vdGVyX19sb2NhdGlvbntcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcblxyXG59XHJcbiIsIioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZvbnQtZmFtaWx5OiBcIkNvbWZvcnRhYVwiLCBjdXJzaXZlO1xufVxuXG4uY29udGFpbmVyIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1heC13aWR0aDogMTIwMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmJvZHkge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5mb290ZXIge1xuICBiYWNrZ3JvdW5kOiAjRjRGNEY0O1xuICBwYWRkaW5nLXRvcDogMzZweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmZvb3Rlcl9fYmxvY2tzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmZvb3Rlcl9fY29udGFjdHMge1xuICBmb250LWZhbWlseTogQ29tZm9ydGFhO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGNvbG9yOiAjNTc1OTY1O1xufVxuLmZvb3Rlcl9fYm9sZCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmZvb3Rlcl9faW5mb3JtYXRpb24ge1xuICBwYWRkaW5nLWJvdHRvbTogMTRweDtcbn1cbi5mb290ZXJfX2luZm9ybWF0aW9uIDpsYXN0LWNoaWxkIHtcbiAgcGFkZGluZy1ib3R0b206IDA7XG59XG4uZm9vdGVyX19zb2NpYWxzIHtcbiAgZm9udC1mYW1pbHk6IENvbWZvcnRhYTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgY29sb3I6ICM1NzU5NjU7XG4gIHBhZGRpbmctYm90dG9tOiAxNHB4O1xufVxuLmZvb3Rlcl9fbGluayB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICMzQjU5OTg7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn1cbi5mb290ZXJfX2xpYnJhcnlsaW5rIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzU3NTk2NTtcbn1cbi5mb290ZXJfX2xvY2F0aW9uIHtcbiAgZm9udC1mYW1pbHk6IENvbWZvcnRhYTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgY29sb3I6ICM1NzU5NjU7XG59XG5cbi5saW5lIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMXB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogcmdiYSg4NywgODksIDEwMSwgMC4zNSk7XG4gIG1hcmdpbi10b3A6IDI4cHg7XG4gIG1hcmdpbi1ib3R0b206IDE4cHg7XG59XG5cbi5jb3B5cmlnaHQge1xuICBmb250LWZhbWlseTogQ29tZm9ydGFhO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBjb2xvcjogIzU3NTk2NTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy1ib3R0b206IDE4cHg7XG59XG5cbi5tZW51IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIGNvbG9yOiAjNTc1OTY1O1xuICBwYWRkaW5nOiAxNnB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn1cbi5tZW51IC5yb3RhdGUge1xuICB0cmFuc2l0aW9uOiAwLjdzO1xufVxuLm1lbnUgLnJvdGF0ZTpob3ZlciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKSB0cmFuc2xhdGVaKDApO1xuICB0cmFuc2l0aW9uOiAwLjdzO1xufVxuXG4ubGl0ZXJhdHVyZW1lbnUge1xuICBjb2xvcjogI0Y0RjRGNDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI1MHB4KSB7XG4gIC5tYWluX19wcm9qZWN0bmFtZSB7XG4gICAgZm9udC1zaXplOiAzNXB4O1xuICAgIHdpZHRoOiAxMDQ2cHg7XG4gIH1cblxuICAuY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDEwMDBweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTEwNXB4KSB7XG4gIC5tYWluX19wcm9qZWN0bmFtZSB7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICAgIHdpZHRoOiA4NTBweDtcbiAgfVxuXG4gIC5jb250YWluZXIge1xuICAgIG1heC13aWR0aDogODAwcHg7XG4gIH1cblxuICAuaGVhZGVyX190ZXh0IHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwOHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIG1heC13aWR0aDogNzUwcHg7XG4gIH1cblxuICAuaGVhZGVyX190ZXh0IHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cblxuICAubWFpbl9fcHJvamVjdG5hbWUge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB3aWR0aDogNTU2cHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc4MHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIG1heC13aWR0aDogNjgwcHg7XG4gIH1cblxuICAubWFpbl9fcGVyc29ucyB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIC5tYWluX19jaGFyYWN0ZXIge1xuICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gIH1cblxuICAuZm9vdGVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY5NXB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIG1heC13aWR0aDogNjAwcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0MHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIG1heC13aWR0aDogNTUwcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU4NXB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIG1heC13aWR0aDogNTAwcHg7XG4gIH1cblxuICAubWFpbl9fcHJvamVjdG5hbWUge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB3aWR0aDogNDg0cHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cblxuICAuZm9vdGVyX19pbmZvcm1hdGlvbiB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG5cbiAgLmZvb3Rlcl9fc29jaWFscyB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG5cbiAgLmZvb3Rlcl9fbGluayB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG5cbiAgLmZvb3Rlcl9fbG9jYXRpb24ge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.scss']
        }]
      }], function () {
        return [{
          type: _services_data_getter_service__WEBPACK_IMPORTED_MODULE_2__["DataGetterService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/guards/edit.guard.ts":
  /*!**************************************!*\
    !*** ./src/app/guards/edit.guard.ts ***!
    \**************************************/

  /*! exports provided: EditGuard */

  /***/
  function srcAppGuardsEditGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditGuard", function () {
      return EditGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_data_getter_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/data-getter.service */
    "./src/app/services/data-getter.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var EditGuard = /*#__PURE__*/function () {
      function EditGuard(dataGetterService, router) {
        _classCallCheck(this, EditGuard);

        this.dataGetterService = dataGetterService;
        this.router = router;
      }

      _createClass(EditGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          var access = this.dataGetterService.userAuthenticated(); // confirm('yes/no?');

          if (!access) {
            this.router.navigate(['/']);
          }

          return access;
        }
      }]);

      return EditGuard;
    }();

    EditGuard.ɵfac = function EditGuard_Factory(t) {
      return new (t || EditGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_data_getter_service__WEBPACK_IMPORTED_MODULE_1__["DataGetterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    EditGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: EditGuard,
      factory: EditGuard.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _services_data_getter_service__WEBPACK_IMPORTED_MODULE_1__["DataGetterService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_data_getter_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/data-getter.service */
    "./src/app/services/data-getter.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function HeaderComponent_button_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_button_7_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1.signOut();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0412\u0438\u0445\u0456\u0434");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent(dataGetterService) {
        _classCallCheck(this, HeaderComponent);

        this.dataGetterService = dataGetterService;
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "signOut",
        value: function signOut() {
          if (this.dataGetterService.userAuthenticated()) {
            this.dataGetterService.signOut();
          }
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_getter_service__WEBPACK_IMPORTED_MODULE_1__["DataGetterService"]));
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 8,
      vars: 1,
      consts: [[1, "header"], [1, "container"], [1, "header__content"], ["href", "", 1, "header__logolink"], ["src", "../assets/img/librarylogo.png", "alt", "library logo", 1, "header__logo"], [1, "header__text"], ["class", "header__button", 3, "click", 4, "ngIf"], [1, "header__button", 3, "click"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u041E\u0431\u043B\u0430\u0441\u043D\u0430 \u0431\u0456\u0431\u043B\u0456\u043E\u0442\u0435\u043A\u0430 \u0432\u0438\u0441\u0442\u0443\u043F\u0430\u0454 \u0456\u043D\u0456\u0446\u0456\u0430\u0442\u043E\u0440\u043E\u043C \u0441\u0442\u0432\u043E\u0440\u0435\u043D\u043D\u044F \u0454\u0434\u0438\u043D\u043E\u0433\u043E \u0432\u0456\u0440\u0442\u0443\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u0440\u0435\u0441\u0443\u0440\u0441\u0443 \u043F\u0440\u043E \u043C\u0438\u043A\u043E\u043B\u0430\u0457\u0432\u0441\u044C\u043A\u0438\u0445 \u043B\u0430\u0443\u0440\u0435\u0430\u0442\u0456\u0432, \u043E\u0441\u043A\u0456\u043B\u044C\u043A\u0438 \u043C\u0430\u0454 \u043D\u0430\u0439\u0431\u0456\u043B\u044C\u0448\u0443 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u0439\u043D\u043E-\u0434\u0436\u0435\u0440\u0435\u043B\u044C\u043D\u0443 \u0431\u0430\u0437\u0443, \u044F\u043A\u0443 \u043F\u043B\u0430\u043D\u0443\u0454 \u0434\u043E\u043F\u043E\u0432\u043D\u0438\u0442\u0438 \u0437\u0430 \u043F\u0456\u0434\u0442\u0440\u0438\u043C\u043A\u0438 \u043E\u0440\u0433\u0430\u043D\u0456\u0437\u0430\u0446\u0456\u0439-\u0443\u0447\u0430\u0441\u043D\u0438\u043A\u0456\u0432. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HeaderComponent_button_7_Template, 2, 0, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataGetterService.userAuthenticated());
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
      styles: ["*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: \"Comfortaa\", cursive;\n}\n\n.container[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  max-width: 1200px;\n  height: 100%;\n}\n\nbody[_ngcontent-%COMP%] {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.header[_ngcontent-%COMP%] {\n  background: linear-gradient(158.11deg, #014B80 34.34%, #4892FF 103.15%);\n  padding: 15px 0;\n}\n\n.header__logolink[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\n.header__content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.header__logo[_ngcontent-%COMP%] {\n  width: 107px;\n  height: 70px;\n}\n\n.header__text[_ngcontent-%COMP%] {\n  font-family: Comfortaa;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 16px;\n  line-height: 18px;\n  color: #FFFFFF;\n  padding-left: 28px;\n}\n\n.header__button[_ngcontent-%COMP%] {\n  text-decoration: none;\n  outline: none;\n  border: 0;\n  background: #F4F4F4;\n  border-radius: 8px;\n  font-family: Comfortaa;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 16px;\n  text-align: center;\n  color: #575965;\n  padding: 18px;\n}\n\n.menu[_ngcontent-%COMP%] {\n  position: absolute;\n  display: inline-block;\n  list-style: none;\n  right: 0;\n  top: 0;\n  color: #575965;\n  padding: 16px;\n  text-decoration: none;\n  font-size: 22px;\n}\n\n.menu[_ngcontent-%COMP%]   .rotate[_ngcontent-%COMP%] {\n  transition: 0.7s;\n}\n\n.menu[_ngcontent-%COMP%]   .rotate[_ngcontent-%COMP%]:hover {\n  transform: rotate(90deg) translateZ(0);\n  transition: 0.7s;\n}\n\n.literaturemenu[_ngcontent-%COMP%] {\n  color: #F4F4F4;\n}\n\n@media screen and (max-width: 1250px) {\n  .main__projectname[_ngcontent-%COMP%] {\n    font-size: 35px;\n    width: 1046px;\n  }\n\n  .container[_ngcontent-%COMP%] {\n    max-width: 1000px;\n  }\n\n  .main__slider[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n  }\n\n  .main__section[_ngcontent-%COMP%] {\n    font-size: 30px;\n  }\n}\n\n@media screen and (max-width: 1105px) {\n  .main__projectname[_ngcontent-%COMP%] {\n    font-size: 28px;\n    width: 850px;\n  }\n}\n\n@media screen and (max-width: 1105px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 800px;\n  }\n\n  .header__text[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n\n  .main__section[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n\n  .main__slider[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .main__infosection[_ngcontent-%COMP%] {\n    margin: 0 auto;\n  }\n}\n\n@media screen and (max-width: 908px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 750px;\n  }\n\n  .header__text[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n\n  .main__projectname[_ngcontent-%COMP%] {\n    font-size: 18px;\n    width: 556px;\n    margin: 0 auto;\n  }\n}\n\n@media screen and (max-width: 780px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 680px;\n  }\n}\n\n@media screen and (max-width: 695px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 600px;\n  }\n}\n\n@media screen and (max-width: 640px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 550px;\n  }\n}\n\n@media screen and (max-width: 585px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 500px;\n  }\n\n  .main__projectname[_ngcontent-%COMP%] {\n    font-size: 16px;\n    width: 484px;\n    margin: 0 auto;\n  }\n\n  .footer__information[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n\n  .footer__socials[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n\n  .footer__link[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n\n  .footer__location[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL0M6XFxHaXRIdWJcXGxpYnJhcnkvc3JjXFxhcHBcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtFQUNBLGlDQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7QUNDRjs7QURFQTtFQUNFLHVFQUFBO0VBQ0EsZUFBQTtBQ0NGOztBRENFO0VBQ0UscUJBQUE7QUNDSjs7QURFRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQ0FKOztBREdFO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUNESjs7QURJRTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ0ZKOztBREtFO0VBQ0UscUJBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FDSEo7O0FET0E7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FDSkY7O0FETUU7RUFDRSxnQkFBQTtBQ0pKOztBREtJO0VBQ0Usc0NBQUE7RUFDQSxnQkFBQTtBQ0hOOztBRFFBO0VBQ0UsY0FBQTtBQ0xGOztBRFNBO0VBQ0U7SUFDRSxlQUFBO0lBQ0EsYUFBQTtFQ05GOztFRFNBO0lBQ0UsaUJBQUE7RUNORjs7RURTQTtJQUNFLFdBQUE7SUFDQSxZQUFBO0VDTkY7O0VEU0E7SUFDRSxlQUFBO0VDTkY7QUFDRjs7QURVQTtFQUNFO0lBQ0UsZUFBQTtJQUNBLFlBQUE7RUNSRjtBQUNGOztBRFdBO0VBQ0U7SUFDRSxnQkFBQTtFQ1RGOztFRFlBO0lBQ0UsZUFBQTtFQ1RGOztFRFlBO0lBQ0UsZUFBQTtFQ1RGOztFRFlBO0lBQ0UsYUFBQTtFQ1RGOztFRFlBO0lBQ0UsY0FBQTtFQ1RGO0FBQ0Y7O0FEWUE7RUFDRTtJQUNFLGdCQUFBO0VDVkY7O0VEYUE7SUFDRSxlQUFBO0VDVkY7O0VEYUE7SUFDRSxlQUFBO0lBQ0EsWUFBQTtJQUNBLGNBQUE7RUNWRjtBQUNGOztBRGNBO0VBQ0U7SUFDRSxnQkFBQTtFQ1pGO0FBQ0Y7O0FEZUE7RUFDRTtJQUNFLGdCQUFBO0VDYkY7QUFDRjs7QURnQkE7RUFFRTtJQUNFLGdCQUFBO0VDZkY7QUFDRjs7QURtQkE7RUFDRTtJQUNFLGdCQUFBO0VDakJGOztFRG9CQTtJQUNFLGVBQUE7SUFDQSxZQUFBO0lBQ0EsY0FBQTtFQ2pCRjs7RURvQkE7SUFDRSxlQUFBO0VDakJGOztFRG9CQTtJQUNFLGVBQUE7RUNqQkY7O0VEb0JBO0lBQ0UsZUFBQTtFQ2pCRjs7RURvQkE7SUFDRSxlQUFBO0VDakJGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGZvbnQtZmFtaWx5OiAnQ29tZm9ydGFhJywgY3Vyc2l2ZTtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5ib2R5e1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLmhlYWRlcntcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTU4LjExZGVnLCAjMDE0QjgwIDM0LjM0JSwgIzQ4OTJGRiAxMDMuMTUlKTtcclxuICBwYWRkaW5nOiAxNXB4IDA7XHJcblxyXG4gICZfX2xvZ29saW5re1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxuXHJcbiAgJl9fY29udGVudHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgJl9fbG9nb3tcclxuICAgIHdpZHRoOiAxMDdweDtcclxuICAgIGhlaWdodDogNzBweDtcclxuICB9XHJcblxyXG4gICZfX3RleHR7XHJcbiAgICBmb250LWZhbWlseTogQ29tZm9ydGFhO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyOHB4O1xyXG4gIH1cclxuXHJcbiAgJl9fYnV0dG9ue1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGJhY2tncm91bmQ6ICNGNEY0RjQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBmb250LWZhbWlseTogQ29tZm9ydGFhO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICM1NzU5NjU7XHJcbiAgICBwYWRkaW5nOiAxOHB4O1xyXG4gIH1cclxufVxyXG5cclxuLm1lbnV7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHRvcDogMDtcclxuICBjb2xvcjogIzU3NTk2NTtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBmb250LXNpemU6IDIycHg7XHJcblxyXG4gIC5yb3RhdGV7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjdzO1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKSB0cmFuc2xhdGVaKDApO1xyXG4gICAgICB0cmFuc2l0aW9uOiAwLjdzO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmxpdGVyYXR1cmVtZW51e1xyXG4gIGNvbG9yOiAjRjRGNEY0O1xyXG59XHJcblxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMjUwcHgpe1xyXG4gIC5tYWluX19wcm9qZWN0bmFtZXtcclxuICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgIHdpZHRoOiAxMDQ2cHg7XHJcbiAgfVxyXG5cclxuICAuY29udGFpbmVye1xyXG4gICAgbWF4LXdpZHRoOiAxMDAwcHg7XHJcbiAgfVxyXG5cclxuICAubWFpbl9fc2xpZGVye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAubWFpbl9fc2VjdGlvbntcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICB9XHJcblxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjExMDVweCl7XHJcbiAgLm1haW5fX3Byb2plY3RuYW1le1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgd2lkdGg6IDg1MHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMTA1cHgpe1xyXG4gIC5jb250YWluZXJ7XHJcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xyXG4gIH1cclxuXHJcbiAgLmhlYWRlcl9fdGV4dHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcblxyXG4gIC5tYWluX19zZWN0aW9ue1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gIH1cclxuXHJcbiAgLm1haW5fX3NsaWRlcntcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAubWFpbl9faW5mb3NlY3Rpb257XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTA4cHgpe1xyXG4gIC5jb250YWluZXJ7XHJcbiAgICBtYXgtd2lkdGg6IDc1MHB4O1xyXG4gIH1cclxuXHJcbiAgLmhlYWRlcl9fdGV4dHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICB9XHJcblxyXG4gIC5tYWluX19wcm9qZWN0bmFtZXtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIHdpZHRoOiA1NTZweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzgwcHgpe1xyXG4gIC5jb250YWluZXJ7XHJcbiAgICBtYXgtd2lkdGg6IDY4MHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo2OTVweCl7XHJcbiAgLmNvbnRhaW5lcntcclxuICAgIG1heC13aWR0aDogNjAwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjY0MHB4KSB7XHJcblxyXG4gIC5jb250YWluZXJ7XHJcbiAgICBtYXgtd2lkdGg6IDU1MHB4O1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NTg1cHgpIHtcclxuICAuY29udGFpbmVye1xyXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICB9XHJcblxyXG4gIC5tYWluX19wcm9qZWN0bmFtZXtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIHdpZHRoOiA0ODRweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLmZvb3Rlcl9faW5mb3JtYXRpb257XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgfVxyXG5cclxuICAuZm9vdGVyX19zb2NpYWxze1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxuXHJcbiAgLmZvb3Rlcl9fbGlua3tcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcblxyXG4gIC5mb290ZXJfX2xvY2F0aW9ue1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxuXHJcbn1cclxuIiwiKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udC1mYW1pbHk6IFwiQ29tZm9ydGFhXCIsIGN1cnNpdmU7XG59XG5cbi5jb250YWluZXIge1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuYm9keSB7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmhlYWRlciB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNTguMTFkZWcsICMwMTRCODAgMzQuMzQlLCAjNDg5MkZGIDEwMy4xNSUpO1xuICBwYWRkaW5nOiAxNXB4IDA7XG59XG4uaGVhZGVyX19sb2dvbGluayB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5oZWFkZXJfX2NvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmhlYWRlcl9fbG9nbyB7XG4gIHdpZHRoOiAxMDdweDtcbiAgaGVpZ2h0OiA3MHB4O1xufVxuLmhlYWRlcl9fdGV4dCB7XG4gIGZvbnQtZmFtaWx5OiBDb21mb3J0YWE7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBwYWRkaW5nLWxlZnQ6IDI4cHg7XG59XG4uaGVhZGVyX19idXR0b24ge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogMDtcbiAgYmFja2dyb3VuZDogI0Y0RjRGNDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBmb250LWZhbWlseTogQ29tZm9ydGFhO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICM1NzU5NjU7XG4gIHBhZGRpbmc6IDE4cHg7XG59XG5cbi5tZW51IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIGNvbG9yOiAjNTc1OTY1O1xuICBwYWRkaW5nOiAxNnB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn1cbi5tZW51IC5yb3RhdGUge1xuICB0cmFuc2l0aW9uOiAwLjdzO1xufVxuLm1lbnUgLnJvdGF0ZTpob3ZlciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKSB0cmFuc2xhdGVaKDApO1xuICB0cmFuc2l0aW9uOiAwLjdzO1xufVxuXG4ubGl0ZXJhdHVyZW1lbnUge1xuICBjb2xvcjogI0Y0RjRGNDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI1MHB4KSB7XG4gIC5tYWluX19wcm9qZWN0bmFtZSB7XG4gICAgZm9udC1zaXplOiAzNXB4O1xuICAgIHdpZHRoOiAxMDQ2cHg7XG4gIH1cblxuICAuY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDEwMDBweDtcbiAgfVxuXG4gIC5tYWluX19zbGlkZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuXG4gIC5tYWluX19zZWN0aW9uIHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExMDVweCkge1xuICAubWFpbl9fcHJvamVjdG5hbWUge1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICB3aWR0aDogODUwcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExMDVweCkge1xuICAuY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xuICB9XG5cbiAgLmhlYWRlcl9fdGV4dCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG5cbiAgLm1haW5fX3NlY3Rpb24ge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxuXG4gIC5tYWluX19zbGlkZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAubWFpbl9faW5mb3NlY3Rpb24ge1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDhweCkge1xuICAuY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDc1MHB4O1xuICB9XG5cbiAgLmhlYWRlcl9fdGV4dCB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG5cbiAgLm1haW5fX3Byb2plY3RuYW1lIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgd2lkdGg6IDU1NnB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3ODBweCkge1xuICAuY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDY4MHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2OTVweCkge1xuICAuY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NDBweCkge1xuICAuY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDU1MHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1ODVweCkge1xuICAuY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICB9XG5cbiAgLm1haW5fX3Byb2plY3RuYW1lIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgd2lkdGg6IDQ4NHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG5cbiAgLmZvb3Rlcl9faW5mb3JtYXRpb24ge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxuXG4gIC5mb290ZXJfX3NvY2lhbHMge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxuXG4gIC5mb290ZXJfX2xpbmsge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxuXG4gIC5mb290ZXJfX2xvY2F0aW9uIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.scss']
        }]
      }], function () {
        return [{
          type: _services_data_getter_service__WEBPACK_IMPORTED_MODULE_1__["DataGetterService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_data_getter_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/data-getter.service */
    "./src/app/services/data-getter.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return ["section"];
    };

    function HomeComponent_a_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var section_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0))("queryParams", section_r1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](section_r1.title);
      }
    }

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(dataGetterService) {
        _classCallCheck(this, HomeComponent);

        this.dataGetterService = dataGetterService;
        this.imgUrls = [];
        this.curImageIndex = 0;
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this14 = this;

          this.dataGetterService.GetSections().subscribe(function (sections) {
            _this14.sections = sections;

            _this14.getAuthorImages();

            _this14.currentImage();
          });
        }
      }, {
        key: "getAuthorImages",
        value: function getAuthorImages() {
          var _this15 = this;

          var _iterator = _createForOfIteratorHelper(this.sections),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var section = _step.value;
              this.dataGetterService.GetAuthors(section.id).subscribe(function (authors) {
                var _iterator2 = _createForOfIteratorHelper(authors),
                    _step2;

                try {
                  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                    var author = _step2.value;

                    _this15.dataGetterService.GetImgURL(author.imgURI).subscribe(function (url) {
                      _this15.imgUrls.push(url);

                      console.log(_this15.imgUrls);
                    });
                  }
                } catch (err) {
                  _iterator2.e(err);
                } finally {
                  _iterator2.f();
                }
              });
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
      }, {
        key: "changeCurImage",
        value: function changeCurImage(forward) {
          if (forward) {
            this.curImageIndex++;
          } else {
            this.curImageIndex--;
          }

          if (this.curImageIndex >= this.imgUrls.length) {
            this.curImageIndex = 0;
          }

          if (this.curImageIndex < 0) {
            this.curImageIndex = this.imgUrls.length - 1;
          }

          this.curImage = this.imgUrls[this.curImageIndex];
        }
      }, {
        key: "currentImage",
        value: function currentImage() {
          var _this16 = this;

          this.curImage = this.imgUrls[this.curImageIndex];
          setInterval(function () {
            _this16.changeCurImage(true);
          }, 1000);
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_getter_service__WEBPACK_IMPORTED_MODULE_1__["DataGetterService"]));
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 9,
      vars: 2,
      consts: [[1, "main"], [1, "container"], [1, "main__projectname"], [1, "main__content"], [1, "main__slider"], ["alt", "testman", 1, "main__sliderimg", 3, "src"], [1, "main__infosection"], ["class", "main__sectionlink", "href", "", 3, "routerLink", "queryParams", 4, "ngFor", "ngForOf"], ["href", "", 1, "main__sectionlink", 3, "routerLink", "queryParams"], [1, "main__section"], [1, "main__sectiontext"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\xAB\u041C\u0438\u043A\u043E\u043B\u0430\u0457\u0432\u0441\u044C\u043A\u0456 \u043B\u0430\u0443\u0440\u0435\u0430\u0442\u0438 \u041D\u0430\u0446\u0456\u043E\u043D\u0430\u043B\u044C\u043D\u043E\u0457 \u043F\u0440\u0435\u043C\u0456\u0457 \u0423\u043A\u0440\u0430\u0457\u043D\u0438 \u0456\u043C. \u0422. \u0413. \u0428\u0435\u0432\u0447\u0435\u043D\u043A\u0430\xBB");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, HomeComponent_a_8_Template, 4, 4, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.curImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.sections);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]],
      styles: ["*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: \"Comfortaa\", cursive;\n}\n\n.container[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  max-width: 1200px;\n  height: 100%;\n}\n\nbody[_ngcontent-%COMP%] {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.main[_ngcontent-%COMP%] {\n  padding: 64px 0;\n}\n\n.main__projectname[_ngcontent-%COMP%] {\n  width: 1096px;\n  font-family: Comfortaa;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 36px;\n  line-height: 40px;\n  text-align: center;\n  color: #575965;\n  margin: 0 auto;\n}\n\n.main__content[_ngcontent-%COMP%] {\n  padding-top: 64px;\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n}\n\n.main__slider[_ngcontent-%COMP%] {\n  width: 421px;\n  height: 650px;\n}\n\n.main__sliderimg[_ngcontent-%COMP%] {\n  overflow: hidden;\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.main__section[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background: #F4F4F4;\n  box-shadow: 0px 2px 4px #CFD8DC;\n  margin-bottom: 25px;\n  padding: 80px 155px;\n  font-family: Comfortaa;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 36px;\n  line-height: 40px;\n  text-align: center;\n  color: #575965;\n}\n\n.main__section[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n\n.main__sectionlink[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #575965;\n}\n\n@media screen and (max-width: 1250px) {\n  .main__projectname[_ngcontent-%COMP%] {\n    font-size: 35px;\n    width: 1046px;\n  }\n\n  .container[_ngcontent-%COMP%] {\n    max-width: 1000px;\n  }\n\n  .main__slider[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n  }\n\n  .main__section[_ngcontent-%COMP%] {\n    font-size: 30px;\n  }\n}\n\n@media screen and (max-width: 1105px) {\n  .main__projectname[_ngcontent-%COMP%] {\n    font-size: 28px;\n    width: 850px;\n  }\n}\n\n@media screen and (max-width: 1105px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 800px;\n  }\n\n  .header__text[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n\n  .main__section[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n\n  .main__slider[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .main__infosection[_ngcontent-%COMP%] {\n    margin: 0 auto;\n  }\n}\n\n@media screen and (max-width: 908px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 750px;\n  }\n\n  .header__text[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n\n  .main__projectname[_ngcontent-%COMP%] {\n    font-size: 18px;\n    width: 556px;\n    margin: 0 auto;\n  }\n}\n\n@media screen and (max-width: 780px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 680px;\n  }\n}\n\n@media screen and (max-width: 695px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 600px;\n  }\n}\n\n@media screen and (max-width: 640px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 550px;\n  }\n}\n\n@media screen and (max-width: 585px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 500px;\n  }\n\n  .main__projectname[_ngcontent-%COMP%] {\n    font-size: 16px;\n    width: 484px;\n    margin: 0 auto;\n  }\n\n  .footer__information[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n\n  .footer__socials[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n\n  .footer__link[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n\n  .footer__location[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcR2l0SHViXFxsaWJyYXJ5L3NyY1xcYXBwXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUNBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtBQ0NGOztBRENFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUNDSjs7QURFRTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsdUJBQUE7QUNBSjs7QURHRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FDREo7O0FESUU7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQ0ZKOztBRE1FO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLCtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0pKOztBRE1JO0VBQ0UsZ0JBQUE7QUNKTjs7QURRRTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtBQ05KOztBRFVBO0VBQ0U7SUFDRSxlQUFBO0lBQ0EsYUFBQTtFQ1BGOztFRFVBO0lBQ0UsaUJBQUE7RUNQRjs7RURVQTtJQUNFLFdBQUE7SUFDQSxZQUFBO0VDUEY7O0VEVUE7SUFDRSxlQUFBO0VDUEY7QUFDRjs7QURXQTtFQUNFO0lBQ0UsZUFBQTtJQUNBLFlBQUE7RUNURjtBQUNGOztBRFlBO0VBQ0U7SUFDRSxnQkFBQTtFQ1ZGOztFRGFBO0lBQ0UsZUFBQTtFQ1ZGOztFRGFBO0lBQ0UsZUFBQTtFQ1ZGOztFRGFBO0lBQ0UsYUFBQTtFQ1ZGOztFRGFBO0lBQ0UsY0FBQTtFQ1ZGO0FBQ0Y7O0FEYUE7RUFDRTtJQUNFLGdCQUFBO0VDWEY7O0VEY0E7SUFDRSxlQUFBO0VDWEY7O0VEY0E7SUFDRSxlQUFBO0lBQ0EsWUFBQTtJQUNBLGNBQUE7RUNYRjtBQUNGOztBRGVBO0VBQ0U7SUFDRSxnQkFBQTtFQ2JGO0FBQ0Y7O0FEZ0JBO0VBQ0U7SUFDRSxnQkFBQTtFQ2RGO0FBQ0Y7O0FEaUJBO0VBRUU7SUFDRSxnQkFBQTtFQ2hCRjtBQUNGOztBRG9CQTtFQUNFO0lBQ0UsZ0JBQUE7RUNsQkY7O0VEcUJBO0lBQ0UsZUFBQTtJQUNBLFlBQUE7SUFDQSxjQUFBO0VDbEJGOztFRHFCQTtJQUNFLGVBQUE7RUNsQkY7O0VEcUJBO0lBQ0UsZUFBQTtFQ2xCRjs7RURxQkE7SUFDRSxlQUFBO0VDbEJGOztFRHFCQTtJQUNFLGVBQUE7RUNsQkY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIip7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBmb250LWZhbWlseTogJ0NvbWZvcnRhYScsIGN1cnNpdmU7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIG1heC13aWR0aDogMTIwMHB4O1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuYm9keXtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5tYWlue1xyXG4gIHBhZGRpbmc6IDY0cHggMDtcclxuXHJcbiAgJl9fcHJvamVjdG5hbWV7XHJcbiAgICB3aWR0aDogMTA5NnB4O1xyXG4gICAgZm9udC1mYW1pbHk6IENvbWZvcnRhYTtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzU3NTk2NTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gIH1cclxuXHJcbiAgJl9fY29udGVudHtcclxuICAgIHBhZGRpbmctdG9wOiA2NHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIH1cclxuXHJcbiAgJl9fc2xpZGVye1xyXG4gICAgd2lkdGg6IDQyMXB4O1xyXG4gICAgaGVpZ2h0OiA2NTBweDtcclxuICB9XHJcblxyXG4gICZfX3NsaWRlcmltZ3tcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIH1cclxuXHJcblxyXG4gICZfX3NlY3Rpb257XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6ICNGNEY0RjQ7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDRweCAjQ0ZEOERDO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICAgIHBhZGRpbmc6IDgwcHggMTU1cHg7XHJcbiAgICBmb250LWZhbWlseTogQ29tZm9ydGFhO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMzZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICM1NzU5NjU7XHJcblxyXG4gICAgOmxhc3QtY2hpbGR7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmX19zZWN0aW9ubGlua3tcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiAjNTc1OTY1O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMjUwcHgpe1xyXG4gIC5tYWluX19wcm9qZWN0bmFtZXtcclxuICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgIHdpZHRoOiAxMDQ2cHg7XHJcbiAgfVxyXG5cclxuICAuY29udGFpbmVye1xyXG4gICAgbWF4LXdpZHRoOiAxMDAwcHg7XHJcbiAgfVxyXG5cclxuICAubWFpbl9fc2xpZGVye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAubWFpbl9fc2VjdGlvbntcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICB9XHJcblxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjExMDVweCl7XHJcbiAgLm1haW5fX3Byb2plY3RuYW1le1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgd2lkdGg6IDg1MHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMTA1cHgpe1xyXG4gIC5jb250YWluZXJ7XHJcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xyXG4gIH1cclxuXHJcbiAgLmhlYWRlcl9fdGV4dHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcblxyXG4gIC5tYWluX19zZWN0aW9ue1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gIH1cclxuXHJcbiAgLm1haW5fX3NsaWRlcntcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAubWFpbl9faW5mb3NlY3Rpb257XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTA4cHgpe1xyXG4gIC5jb250YWluZXJ7XHJcbiAgICBtYXgtd2lkdGg6IDc1MHB4O1xyXG4gIH1cclxuXHJcbiAgLmhlYWRlcl9fdGV4dHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICB9XHJcblxyXG4gIC5tYWluX19wcm9qZWN0bmFtZXtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIHdpZHRoOiA1NTZweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzgwcHgpe1xyXG4gIC5jb250YWluZXJ7XHJcbiAgICBtYXgtd2lkdGg6IDY4MHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo2OTVweCl7XHJcbiAgLmNvbnRhaW5lcntcclxuICAgIG1heC13aWR0aDogNjAwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjY0MHB4KSB7XHJcblxyXG4gIC5jb250YWluZXJ7XHJcbiAgICBtYXgtd2lkdGg6IDU1MHB4O1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NTg1cHgpIHtcclxuICAuY29udGFpbmVye1xyXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICB9XHJcblxyXG4gIC5tYWluX19wcm9qZWN0bmFtZXtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIHdpZHRoOiA0ODRweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLmZvb3Rlcl9faW5mb3JtYXRpb257XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgfVxyXG5cclxuICAuZm9vdGVyX19zb2NpYWxze1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxuXHJcbiAgLmZvb3Rlcl9fbGlua3tcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcblxyXG4gIC5mb290ZXJfX2xvY2F0aW9ue1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxuXHJcbn1cclxuIiwiKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udC1mYW1pbHk6IFwiQ29tZm9ydGFhXCIsIGN1cnNpdmU7XG59XG5cbi5jb250YWluZXIge1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuYm9keSB7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLm1haW4ge1xuICBwYWRkaW5nOiA2NHB4IDA7XG59XG4ubWFpbl9fcHJvamVjdG5hbWUge1xuICB3aWR0aDogMTA5NnB4O1xuICBmb250LWZhbWlseTogQ29tZm9ydGFhO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDM2cHg7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjNTc1OTY1O1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5tYWluX19jb250ZW50IHtcbiAgcGFkZGluZy10b3A6IDY0cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG4ubWFpbl9fc2xpZGVyIHtcbiAgd2lkdGg6IDQyMXB4O1xuICBoZWlnaHQ6IDY1MHB4O1xufVxuLm1haW5fX3NsaWRlcmltZyB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuLm1haW5fX3NlY3Rpb24ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjRjRGNEY0O1xuICBib3gtc2hhZG93OiAwcHggMnB4IDRweCAjQ0ZEOERDO1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICBwYWRkaW5nOiA4MHB4IDE1NXB4O1xuICBmb250LWZhbWlseTogQ29tZm9ydGFhO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICM1NzU5NjU7XG59XG4ubWFpbl9fc2VjdGlvbiA6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4ubWFpbl9fc2VjdGlvbmxpbmsge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjNTc1OTY1O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjUwcHgpIHtcbiAgLm1haW5fX3Byb2plY3RuYW1lIHtcbiAgICBmb250LXNpemU6IDM1cHg7XG4gICAgd2lkdGg6IDEwNDZweDtcbiAgfVxuXG4gIC5jb250YWluZXIge1xuICAgIG1heC13aWR0aDogMTAwMHB4O1xuICB9XG5cbiAgLm1haW5fX3NsaWRlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG5cbiAgLm1haW5fX3NlY3Rpb24ge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTEwNXB4KSB7XG4gIC5tYWluX19wcm9qZWN0bmFtZSB7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICAgIHdpZHRoOiA4NTBweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTEwNXB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIG1heC13aWR0aDogODAwcHg7XG4gIH1cblxuICAuaGVhZGVyX190ZXh0IHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cblxuICAubWFpbl9fc2VjdGlvbiB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG5cbiAgLm1haW5fX3NsaWRlciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5tYWluX19pbmZvc2VjdGlvbiB7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwOHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIG1heC13aWR0aDogNzUwcHg7XG4gIH1cblxuICAuaGVhZGVyX190ZXh0IHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cblxuICAubWFpbl9fcHJvamVjdG5hbWUge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB3aWR0aDogNTU2cHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc4MHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIG1heC13aWR0aDogNjgwcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY5NXB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIG1heC13aWR0aDogNjAwcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0MHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIG1heC13aWR0aDogNTUwcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU4NXB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIG1heC13aWR0aDogNTAwcHg7XG4gIH1cblxuICAubWFpbl9fcHJvamVjdG5hbWUge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB3aWR0aDogNDg0cHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cblxuICAuZm9vdGVyX19pbmZvcm1hdGlvbiB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG5cbiAgLmZvb3Rlcl9fc29jaWFscyB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG5cbiAgLmZvb3Rlcl9fbGluayB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG5cbiAgLmZvb3Rlcl9fbG9jYXRpb24ge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.scss']
        }]
      }], function () {
        return [{
          type: _services_data_getter_service__WEBPACK_IMPORTED_MODULE_1__["DataGetterService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/indicators/indicators.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/indicators/indicators.component.ts ***!
    \****************************************************/

  /*! exports provided: IndicatorsComponent */

  /***/
  function srcAppIndicatorsIndicatorsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IndicatorsComponent", function () {
      return IndicatorsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _models_storage_file__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../models/storage-file */
    "./src/app/models/storage-file.ts");
    /* harmony import */


    var _models_collection_name_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../models/collection-name.enum */
    "./src/app/models/collection-name.enum.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_data_getter_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/data-getter.service */
    "./src/app/services/data-getter.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _library_file_library_file_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../library-file/library-file.component */
    "./src/app/library-file/library-file.component.ts");

    var _c0 = function _c0() {
      return ["/edit-library"];
    };

    function IndicatorsComponent_a_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0))("queryParams", ctx_r0.author);
      }
    }

    function IndicatorsComponent_app_library_file_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-library-file", 14);
      }

      if (rf & 2) {
        var file_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("file", file_r3);
      }
    }

    function IndicatorsComponent_div_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function IndicatorsComponent_div_10_Template_input_input_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.loadNewFile($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var IndicatorsComponent = /*#__PURE__*/function () {
      function IndicatorsComponent(activatedRoute, dataGetterService, router) {
        _classCallCheck(this, IndicatorsComponent);

        this.activatedRoute = activatedRoute;
        this.dataGetterService = dataGetterService;
        this.router = router;
      }

      _createClass(IndicatorsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this17 = this;

          this.activatedRoute.queryParams.subscribe(function (author) {
            _this17.author = author;

            _this17.dataGetterService.GetAuthorIndicatorsFiles(_this17.author).subscribe(function (res) {
              return _this17.indicatorsFiles = res;
            });
          });
        }
      }, {
        key: "backToAuthor",
        value: function backToAuthor() {
          this.router.navigate(['/author'], {
            queryParams: this.author
          });
        }
      }, {
        key: "loadNewFile",
        value: function loadNewFile(data) {
          var _this18 = this;

          var file = data.target.files[0];
          var path = "".concat(_models_collection_name_enum__WEBPACK_IMPORTED_MODULE_2__["CollectionName"].sections, "/").concat(this.author.sectionId, "/").concat(_models_collection_name_enum__WEBPACK_IMPORTED_MODULE_2__["CollectionName"].authors, "/").concat(this.author.id, "/").concat(_models_collection_name_enum__WEBPACK_IMPORTED_MODULE_2__["CollectionName"].indicators, "/").concat(this.dataGetterService.GenerateUUID());
          this.dataGetterService.UploadFile(path, file).subscribe(function (value) {
            var newLibraryFile = new _models_storage_file__WEBPACK_IMPORTED_MODULE_1__["StorageFile"]();
            newLibraryFile.name = file.name;
            newLibraryFile.uri = "gs://".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].firebaseConfig.storageBucket, "/").concat(path); // this.libraryFiles.push(newLibraryFile);

            _this18.dataGetterService.SetAuthorIndicatorsFile(_this18.author, newLibraryFile);
          });
        }
      }]);

      return IndicatorsComponent;
    }();

    IndicatorsComponent.ɵfac = function IndicatorsComponent_Factory(t) {
      return new (t || IndicatorsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_getter_service__WEBPACK_IMPORTED_MODULE_5__["DataGetterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
    };

    IndicatorsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IndicatorsComponent,
      selectors: [["app-indicators"]],
      decls: 33,
      vars: 3,
      consts: [[1, "main"], [1, "container"], [1, "main__title", 2, "background-image", "url(../../assets/img/literature.jpg)"], [1, "main__textcontent"], [1, "main__titlename"], [1, "fas", "fa-arrow-circle-left", "main__arrow", 3, "click"], ["href", "", "class", "menu literaturemenu", 3, "routerLink", "queryParams", 4, "ngIf"], [1, "main__content"], [3, "file", 4, "ngFor", "ngForOf"], ["class", "main__newbook", 4, "ngIf"], [1, "main__allsections"], ["href", "", 1, "main__sectionlink"], ["href", "", 1, "menu", "literaturemenu", 3, "routerLink", "queryParams"], [1, "fas", "fa-cog", "rotate"], [3, "file"], [1, "main__newbook"], ["type", "file", 1, "fas", "fa-plus-circle", 3, "input"]],
      template: function IndicatorsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IndicatorsComponent_Template_i_click_5_listener() {
            return ctx.backToAuthor();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u041F\u043E\u043A\u0430\u0436\u0447\u0438\u043A\u0438");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, IndicatorsComponent_a_7_Template, 2, 3, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, IndicatorsComponent_app_library_file_9_Template, 1, 1, "app-library-file", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, IndicatorsComponent_div_10_Template, 2, 0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u0411\u0456\u043E\u0433\u0440\u0430\u0444\u0456\u044F");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u0421\u043F\u043E\u0433\u0430\u0434\u0438");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\u041F\u043E\u043A\u0430\u0436\u0447\u0438\u043A\u0438");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u0420\u0435\u0446\u0435\u043D\u0437\u0456\u0457");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\u0424\u043E\u0442\u043E");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\u0412\u0456\u0434\u0435\u043E");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\u041C\u0435\u0440\u0435\u0436\u0456");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataGetterService.userAuthenticated());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.indicatorsFiles);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataGetterService.userAuthenticated());
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _library_file_library_file_component__WEBPACK_IMPORTED_MODULE_7__["LibraryFileComponent"]],
      styles: ["*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: \"Comfortaa\", cursive;\n}\n\n.container[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  max-width: 1200px;\n  height: 100%;\n}\n\nbody[_ngcontent-%COMP%] {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.header[_ngcontent-%COMP%] {\n  background: linear-gradient(158.11deg, #014B80 34.34%, #4892FF 103.15%);\n  padding: 15px 0;\n}\n\n.header__logolink[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\n.header__content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.header__logo[_ngcontent-%COMP%] {\n  width: 107px;\n  height: 70px;\n}\n\n.header__text[_ngcontent-%COMP%] {\n  font-family: Comfortaa;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 16px;\n  line-height: 18px;\n  color: #FFFFFF;\n  padding-left: 28px;\n}\n\n.main[_ngcontent-%COMP%] {\n  padding: 64px 0;\n}\n\n.main__arrow[_ngcontent-%COMP%] {\n  font-size: 64px;\n  color: #FFFFFF;\n  margin: 0 auto;\n}\n\n.main__content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n.main__textcontent[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  margin-bottom: 24px;\n}\n\n.main__titlename[_ngcontent-%COMP%] {\n  padding: 44px 0;\n  font-family: HelveticaNeueCyr;\n  font-style: normal;\n  font-weight: 300;\n  font-size: 64px;\n  line-height: 63px;\n  color: #FFFFFF;\n  margin: 0 auto;\n}\n\n.main__allsections[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 24px;\n  color: #575965;\n}\n\n.main__sectionlink[_ngcontent-%COMP%] {\n  color: #575965;\n  text-decoration: none;\n}\n\n.main__book[_ngcontent-%COMP%] {\n  width: 180px;\n  position: relative;\n}\n\n.main__bookimg[_ngcontent-%COMP%] {\n  height: 250px;\n  margin-bottom: 14px;\n}\n\n.main__bookname[_ngcontent-%COMP%] {\n  font-family: HelveticaNeueCyr;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 18px;\n  line-height: 18px;\n  text-align: center;\n  color: #575965;\n  padding-bottom: 44px;\n}\n\n.main__bookdownload[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  top: 0;\n  left: 0;\n  background: #D5D5D5;\n  color: #575965;\n  width: 180px;\n  height: 250px;\n  font-size: 45px;\n  opacity: 0;\n  transition: 0.7s;\n}\n\n.main__bookdownload[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n  transition: 0.7s;\n}\n\n.main__newbook[_ngcontent-%COMP%] {\n  width: 180px;\n  height: 250px;\n  color: #96979F;\n  font-size: 52px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #F4F4F4;\n  box-shadow: 0px 2px 4px #CFD8DC;\n}\n\n.footer[_ngcontent-%COMP%] {\n  background: #F4F4F4;\n  padding-top: 36px;\n}\n\n.footer__blocks[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.footer__contacts[_ngcontent-%COMP%] {\n  font-family: Comfortaa;\n  font-style: normal;\n  font-size: 18px;\n  line-height: 20px;\n  color: #575965;\n}\n\n.footer__bold[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.footer__information[_ngcontent-%COMP%] {\n  padding-bottom: 14px;\n}\n\n.footer__information[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:last-child {\n  padding-bottom: 0;\n}\n\n.footer__socials[_ngcontent-%COMP%] {\n  font-family: Comfortaa;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 18px;\n  line-height: 20px;\n  color: #575965;\n  padding-bottom: 14px;\n}\n\n.footer__link[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #3B5998;\n  font-size: 22px;\n}\n\n.footer__librarylink[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #575965;\n}\n\n.footer__location[_ngcontent-%COMP%] {\n  font-family: Comfortaa;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 18px;\n  line-height: 20px;\n  color: #575965;\n}\n\n.line[_ngcontent-%COMP%] {\n  display: block;\n  height: 1px;\n  width: 100%;\n  background: rgba(87, 89, 101, 0.35);\n  margin-top: 28px;\n  margin-bottom: 18px;\n}\n\n.copyright[_ngcontent-%COMP%] {\n  font-family: Comfortaa;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 18px;\n  line-height: 20px;\n  color: #575965;\n  margin: 0 auto;\n  text-align: center;\n  padding-bottom: 18px;\n}\n\n.menu[_ngcontent-%COMP%] {\n  position: absolute;\n  display: inline-block;\n  list-style: none;\n  right: 0;\n  top: 0;\n  color: #575965;\n  padding: 16px;\n  text-decoration: none;\n  font-size: 22px;\n}\n\n.menu[_ngcontent-%COMP%]   .rotate[_ngcontent-%COMP%] {\n  transition: 0.7s;\n}\n\n.menu[_ngcontent-%COMP%]   .rotate[_ngcontent-%COMP%]:hover {\n  transform: rotate(90deg) translateZ(0);\n  transition: 0.7s;\n}\n\n.literaturemenu[_ngcontent-%COMP%] {\n  color: #F4F4F4;\n}\n\n@media screen and (max-width: 1250px) {\n  .main__projectname[_ngcontent-%COMP%] {\n    font-size: 35px;\n    width: 1046px;\n  }\n\n  .container[_ngcontent-%COMP%] {\n    max-width: 1000px;\n  }\n}\n\n@media screen and (max-width: 1105px) {\n  .main__projectname[_ngcontent-%COMP%] {\n    font-size: 28px;\n    width: 850px;\n  }\n\n  .container[_ngcontent-%COMP%] {\n    max-width: 800px;\n  }\n\n  .header__text[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n\n@media screen and (max-width: 908px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 750px;\n  }\n\n  .header__text[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n\n  .main__projectname[_ngcontent-%COMP%] {\n    font-size: 18px;\n    width: 556px;\n    margin: 0 auto;\n  }\n}\n\n@media screen and (max-width: 780px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 680px;\n  }\n\n  .main__persons[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n  }\n  .main__character[_ngcontent-%COMP%] {\n    margin-bottom: 24px;\n  }\n\n  .footer[_ngcontent-%COMP%] {\n    position: relative;\n  }\n}\n\n@media screen and (max-width: 695px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 600px;\n  }\n}\n\n@media screen and (max-width: 640px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 550px;\n  }\n}\n\n@media screen and (max-width: 585px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 500px;\n  }\n\n  .main__projectname[_ngcontent-%COMP%] {\n    font-size: 16px;\n    width: 484px;\n    margin: 0 auto;\n  }\n\n  .footer__information[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n\n  .footer__socials[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n\n  .footer__link[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n\n  .footer__location[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5kaWNhdG9ycy9DOlxcR2l0SHViXFxsaWJyYXJ5L3NyY1xcYXBwXFxpbmRpY2F0b3JzXFxpbmRpY2F0b3JzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9pbmRpY2F0b3JzL2luZGljYXRvcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUNBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNDRjs7QURHQTtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtBQ0FGOztBREdBO0VBQ0UsdUVBQUE7RUFDQSxlQUFBO0FDQUY7O0FERUU7RUFDRSxxQkFBQTtBQ0FKOztBREdFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FDREo7O0FESUU7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQ0ZKOztBREtFO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDSEo7O0FET0E7RUFDRSxlQUFBO0FDSkY7O0FEU0U7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUNQSjs7QURVRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtBQ1JKOztBRFdFO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQ1RKOztBRFlFO0VBQ0UsZUFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FDVko7O0FEY0U7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ1pKOztBRGVFO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0FDYko7O0FEZ0JFO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FDZEo7O0FEaUJFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FDZko7O0FEa0JFO0VBQ0UsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7QUNoQko7O0FEbUJFO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FDakJKOztBRHFCRTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtBQ25CSjs7QURzQkU7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLCtCQUFBO0FDcEJKOztBRHlCQTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7QUN0QkY7O0FEd0JFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUN0Qko7O0FEeUJFO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUN2Qko7O0FEMEJFO0VBQ0UsaUJBQUE7QUN4Qko7O0FEMkJFO0VBQ0Usb0JBQUE7QUN6Qko7O0FEMkJJO0VBQ0UsaUJBQUE7QUN6Qk47O0FENkJFO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FDM0JKOztBRDhCRTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUM1Qko7O0FEK0JFO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0FDN0JKOztBRGdDRTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUM5Qko7O0FEbUNBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsbUNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDaENGOztBRG1DQTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQ2hDRjs7QURtQ0E7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FDaENGOztBRGtDRTtFQUNFLGdCQUFBO0FDaENKOztBRGlDSTtFQUNFLHNDQUFBO0VBQ0EsZ0JBQUE7QUMvQk47O0FEb0NBO0VBQ0UsY0FBQTtBQ2pDRjs7QURvQ0E7RUFDRTtJQUNFLGVBQUE7SUFDQSxhQUFBO0VDakNGOztFRG9DQTtJQUNFLGlCQUFBO0VDakNGO0FBQ0Y7O0FEdUNBO0VBQ0U7SUFDRSxlQUFBO0lBQ0EsWUFBQTtFQ3JDRjs7RUR1Q0E7SUFDRSxnQkFBQTtFQ3BDRjs7RUR1Q0E7SUFDRSxlQUFBO0VDcENGO0FBQ0Y7O0FEd0NBO0VBQ0U7SUFDRSxnQkFBQTtFQ3RDRjs7RUR5Q0E7SUFDRSxlQUFBO0VDdENGOztFRHlDQTtJQUNFLGVBQUE7SUFDQSxZQUFBO0lBQ0EsY0FBQTtFQ3RDRjtBQUNGOztBRDBDQTtFQUNFO0lBQ0UsZ0JBQUE7RUN4Q0Y7O0VEMkNFO0lBQ0Usc0JBQUE7SUFDQSxtQkFBQTtFQ3hDSjtFRDJDRTtJQUNFLG1CQUFBO0VDekNKOztFRDZDQTtJQUNFLGtCQUFBO0VDMUNGO0FBQ0Y7O0FENkNBO0VBQ0U7SUFDRSxnQkFBQTtFQzNDRjtBQUNGOztBRGdEQTtFQUVFO0lBQ0UsZ0JBQUE7RUMvQ0Y7QUFDRjs7QURtREE7RUFDRTtJQUNFLGdCQUFBO0VDakRGOztFRG9EQTtJQUNFLGVBQUE7SUFDQSxZQUFBO0lBQ0EsY0FBQTtFQ2pERjs7RURvREE7SUFDRSxlQUFBO0VDakRGOztFRG9EQTtJQUNFLGVBQUE7RUNqREY7O0VEb0RBO0lBQ0UsZUFBQTtFQ2pERjs7RURvREE7SUFDRSxlQUFBO0VDakRGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9pbmRpY2F0b3JzL2luZGljYXRvcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqe1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgZm9udC1mYW1pbHk6ICdDb21mb3J0YWEnLCBjdXJzaXZlO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBtYXgtd2lkdGg6IDEyMDBweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcblxyXG5ib2R5e1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLmhlYWRlcntcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTU4LjExZGVnLCAjMDE0QjgwIDM0LjM0JSwgIzQ4OTJGRiAxMDMuMTUlKTtcclxuICBwYWRkaW5nOiAxNXB4IDA7XHJcblxyXG4gICZfX2xvZ29saW5re1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxuXHJcbiAgJl9fY29udGVudHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgJl9fbG9nb3tcclxuICAgIHdpZHRoOiAxMDdweDtcclxuICAgIGhlaWdodDogNzBweDtcclxuICB9XHJcblxyXG4gICZfX3RleHR7XHJcbiAgICBmb250LWZhbWlseTogQ29tZm9ydGFhO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyOHB4O1xyXG4gIH1cclxufVxyXG5cclxuLm1haW57XHJcbiAgcGFkZGluZzogNjRweCAwO1xyXG5cclxuICAmX190aXRsZXtcclxuICB9XHJcblxyXG4gICZfX2Fycm93e1xyXG4gICAgZm9udC1zaXplOiA2NHB4O1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICB9XHJcblxyXG4gICZfX2NvbnRlbnR7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIH1cclxuXHJcbiAgJl9fdGV4dGNvbnRlbnR7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcbiAgfVxyXG5cclxuICAmX190aXRsZW5hbWV7XHJcbiAgICBwYWRkaW5nOiA0NHB4IDA7XHJcbiAgICBmb250LWZhbWlseTogSGVsdmV0aWNhTmV1ZUN5cjtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBmb250LXNpemU6IDY0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogNjNweDtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgfVxyXG5cclxuXHJcbiAgJl9fYWxsc2VjdGlvbnN7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgY29sb3I6ICM1NzU5NjU7XHJcbiAgfVxyXG5cclxuICAmX19zZWN0aW9ubGlua3tcclxuICAgIGNvbG9yOiAjNTc1OTY1O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxuXHJcbiAgJl9fYm9va3tcclxuICAgIHdpZHRoOiAxODBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcblxyXG4gICZfX2Jvb2tpbWd7XHJcbiAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTRweDtcclxuICB9XHJcblxyXG4gICZfX2Jvb2tuYW1le1xyXG4gICAgZm9udC1mYW1pbHk6IEhlbHZldGljYU5ldWVDeXI7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICM1NzU5NjU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNDRweDtcclxuICB9XHJcblxyXG4gICZfX2Jvb2tkb3dubG9hZHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYmFja2dyb3VuZDogI0Q1RDVENTtcclxuICAgIGNvbG9yOiAjNTc1OTY1O1xyXG4gICAgd2lkdGg6IDE4MHB4O1xyXG4gICAgaGVpZ2h0OiAyNTBweDtcclxuICAgIGZvbnQtc2l6ZTogNDVweDtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjdzO1xyXG5cclxuICB9XHJcblxyXG4gICZfX2Jvb2tkb3dubG9hZDpob3ZlcntcclxuICAgIG9wYWNpdHk6IDAuODtcclxuICAgIHRyYW5zaXRpb246IDAuN3M7XHJcbiAgfVxyXG5cclxuICAmX19uZXdib29re1xyXG4gICAgd2lkdGg6IDE4MHB4O1xyXG4gICAgaGVpZ2h0OiAyNTBweDtcclxuICAgIGNvbG9yOiAjOTY5NzlGO1xyXG4gICAgZm9udC1zaXplOiA1MnB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6ICNGNEY0RjQ7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDRweCAjQ0ZEOERDO1xyXG5cclxuICB9XHJcbn1cclxuXHJcbi5mb290ZXJ7XHJcbiAgYmFja2dyb3VuZDogI0Y0RjRGNDtcclxuICBwYWRkaW5nLXRvcDogMzZweDtcclxuXHJcbiAgJl9fYmxvY2tze1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAmX19jb250YWN0c3tcclxuICAgIGZvbnQtZmFtaWx5OiBDb21mb3J0YWE7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgIGNvbG9yOiAjNTc1OTY1O1xyXG4gIH1cclxuXHJcbiAgJl9fYm9sZHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuXHJcbiAgJl9faW5mb3JtYXRpb257XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTRweDtcclxuXHJcbiAgICA6bGFzdC1jaGlsZHtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmX19zb2NpYWxze1xyXG4gICAgZm9udC1mYW1pbHk6IENvbWZvcnRhYTtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICBjb2xvcjogIzU3NTk2NTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNHB4O1xyXG4gIH1cclxuXHJcbiAgJl9fbGlua3tcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiAjM0I1OTk4O1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gIH1cclxuXHJcbiAgJl9fbGlicmFyeWxpbmt7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogIzU3NTk2NTtcclxuICB9XHJcblxyXG4gICZfX2xvY2F0aW9ue1xyXG4gICAgZm9udC1mYW1pbHk6IENvbWZvcnRhYTtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICBjb2xvcjogIzU3NTk2NTtcclxuICB9XHJcblxyXG59XHJcblxyXG4ubGluZXtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBoZWlnaHQ6IDFweDtcclxuICB3aWR0aDoxMDAlO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoODcsIDg5LCAxMDEsIDAuMzUpO1xyXG4gIG1hcmdpbi10b3A6IDI4cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMThweDtcclxufVxyXG5cclxuLmNvcHlyaWdodHtcclxuICBmb250LWZhbWlseTogQ29tZm9ydGFhO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgY29sb3I6ICM1NzU5NjU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxOHB4O1xyXG59XHJcblxyXG4ubWVudXtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIGNvbG9yOiAjNTc1OTY1O1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuXHJcbiAgLnJvdGF0ZXtcclxuICAgIHRyYW5zaXRpb246IDAuN3M7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpIHRyYW5zbGF0ZVooMCk7XHJcbiAgICAgIHRyYW5zaXRpb246IDAuN3M7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ubGl0ZXJhdHVyZW1lbnV7XHJcbiAgY29sb3I6ICNGNEY0RjQ7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTI1MHB4KXtcclxuICAubWFpbl9fcHJvamVjdG5hbWV7XHJcbiAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICB3aWR0aDogMTA0NnB4O1xyXG4gIH1cclxuXHJcbiAgLmNvbnRhaW5lcntcclxuICAgIG1heC13aWR0aDogMTAwMHB4O1xyXG4gIH1cclxuXHJcblxyXG59XHJcblxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMTA1cHgpe1xyXG4gIC5tYWluX19wcm9qZWN0bmFtZXtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIHdpZHRoOiA4NTBweDtcclxuICB9XHJcbiAgLmNvbnRhaW5lcntcclxuICAgIG1heC13aWR0aDogODAwcHg7XHJcbiAgfVxyXG5cclxuICAuaGVhZGVyX190ZXh0e1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTA4cHgpe1xyXG4gIC5jb250YWluZXJ7XHJcbiAgICBtYXgtd2lkdGg6IDc1MHB4O1xyXG4gIH1cclxuXHJcbiAgLmhlYWRlcl9fdGV4dHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICB9XHJcblxyXG4gIC5tYWluX19wcm9qZWN0bmFtZXtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIHdpZHRoOiA1NTZweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzgwcHgpe1xyXG4gIC5jb250YWluZXJ7XHJcbiAgICBtYXgtd2lkdGg6IDY4MHB4O1xyXG4gIH1cclxuICAubWFpbntcclxuICAgICZfX3BlcnNvbnN7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fY2hhcmFjdGVye1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmZvb3RlcntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6Njk1cHgpe1xyXG4gIC5jb250YWluZXJ7XHJcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gIH1cclxuXHJcblxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjY0MHB4KSB7XHJcblxyXG4gIC5jb250YWluZXJ7XHJcbiAgICBtYXgtd2lkdGg6IDU1MHB4O1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NTg1cHgpIHtcclxuICAuY29udGFpbmVye1xyXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICB9XHJcblxyXG4gIC5tYWluX19wcm9qZWN0bmFtZXtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIHdpZHRoOiA0ODRweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLmZvb3Rlcl9faW5mb3JtYXRpb257XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgfVxyXG5cclxuICAuZm9vdGVyX19zb2NpYWxze1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxuXHJcbiAgLmZvb3Rlcl9fbGlua3tcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcblxyXG4gIC5mb290ZXJfX2xvY2F0aW9ue1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxuXHJcbn1cclxuIiwiKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udC1mYW1pbHk6IFwiQ29tZm9ydGFhXCIsIGN1cnNpdmU7XG59XG5cbi5jb250YWluZXIge1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuYm9keSB7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmhlYWRlciB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNTguMTFkZWcsICMwMTRCODAgMzQuMzQlLCAjNDg5MkZGIDEwMy4xNSUpO1xuICBwYWRkaW5nOiAxNXB4IDA7XG59XG4uaGVhZGVyX19sb2dvbGluayB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5oZWFkZXJfX2NvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmhlYWRlcl9fbG9nbyB7XG4gIHdpZHRoOiAxMDdweDtcbiAgaGVpZ2h0OiA3MHB4O1xufVxuLmhlYWRlcl9fdGV4dCB7XG4gIGZvbnQtZmFtaWx5OiBDb21mb3J0YWE7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBwYWRkaW5nLWxlZnQ6IDI4cHg7XG59XG5cbi5tYWluIHtcbiAgcGFkZGluZzogNjRweCAwO1xufVxuLm1haW5fX2Fycm93IHtcbiAgZm9udC1zaXplOiA2NHB4O1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4ubWFpbl9fY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5tYWluX190ZXh0Y29udGVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbn1cbi5tYWluX190aXRsZW5hbWUge1xuICBwYWRkaW5nOiA0NHB4IDA7XG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2FOZXVlQ3lyO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc2l6ZTogNjRweDtcbiAgbGluZS1oZWlnaHQ6IDYzcHg7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5tYWluX19hbGxzZWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBjb2xvcjogIzU3NTk2NTtcbn1cbi5tYWluX19zZWN0aW9ubGluayB7XG4gIGNvbG9yOiAjNTc1OTY1O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4ubWFpbl9fYm9vayB7XG4gIHdpZHRoOiAxODBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLm1haW5fX2Jvb2tpbWcge1xuICBoZWlnaHQ6IDI1MHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNHB4O1xufVxuLm1haW5fX2Jvb2tuYW1lIHtcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYU5ldWVDeXI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICM1NzU5NjU7XG4gIHBhZGRpbmctYm90dG9tOiA0NHB4O1xufVxuLm1haW5fX2Jvb2tkb3dubG9hZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZDogI0Q1RDVENTtcbiAgY29sb3I6ICM1NzU5NjU7XG4gIHdpZHRoOiAxODBweDtcbiAgaGVpZ2h0OiAyNTBweDtcbiAgZm9udC1zaXplOiA0NXB4O1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiAwLjdzO1xufVxuLm1haW5fX2Jvb2tkb3dubG9hZDpob3ZlciB7XG4gIG9wYWNpdHk6IDAuODtcbiAgdHJhbnNpdGlvbjogMC43cztcbn1cbi5tYWluX19uZXdib29rIHtcbiAgd2lkdGg6IDE4MHB4O1xuICBoZWlnaHQ6IDI1MHB4O1xuICBjb2xvcjogIzk2OTc5RjtcbiAgZm9udC1zaXplOiA1MnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogI0Y0RjRGNDtcbiAgYm94LXNoYWRvdzogMHB4IDJweCA0cHggI0NGRDhEQztcbn1cblxuLmZvb3RlciB7XG4gIGJhY2tncm91bmQ6ICNGNEY0RjQ7XG4gIHBhZGRpbmctdG9wOiAzNnB4O1xufVxuLmZvb3Rlcl9fYmxvY2tzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmZvb3Rlcl9fY29udGFjdHMge1xuICBmb250LWZhbWlseTogQ29tZm9ydGFhO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGNvbG9yOiAjNTc1OTY1O1xufVxuLmZvb3Rlcl9fYm9sZCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmZvb3Rlcl9faW5mb3JtYXRpb24ge1xuICBwYWRkaW5nLWJvdHRvbTogMTRweDtcbn1cbi5mb290ZXJfX2luZm9ybWF0aW9uIDpsYXN0LWNoaWxkIHtcbiAgcGFkZGluZy1ib3R0b206IDA7XG59XG4uZm9vdGVyX19zb2NpYWxzIHtcbiAgZm9udC1mYW1pbHk6IENvbWZvcnRhYTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgY29sb3I6ICM1NzU5NjU7XG4gIHBhZGRpbmctYm90dG9tOiAxNHB4O1xufVxuLmZvb3Rlcl9fbGluayB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICMzQjU5OTg7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn1cbi5mb290ZXJfX2xpYnJhcnlsaW5rIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzU3NTk2NTtcbn1cbi5mb290ZXJfX2xvY2F0aW9uIHtcbiAgZm9udC1mYW1pbHk6IENvbWZvcnRhYTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgY29sb3I6ICM1NzU5NjU7XG59XG5cbi5saW5lIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMXB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogcmdiYSg4NywgODksIDEwMSwgMC4zNSk7XG4gIG1hcmdpbi10b3A6IDI4cHg7XG4gIG1hcmdpbi1ib3R0b206IDE4cHg7XG59XG5cbi5jb3B5cmlnaHQge1xuICBmb250LWZhbWlseTogQ29tZm9ydGFhO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBjb2xvcjogIzU3NTk2NTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy1ib3R0b206IDE4cHg7XG59XG5cbi5tZW51IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIGNvbG9yOiAjNTc1OTY1O1xuICBwYWRkaW5nOiAxNnB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn1cbi5tZW51IC5yb3RhdGUge1xuICB0cmFuc2l0aW9uOiAwLjdzO1xufVxuLm1lbnUgLnJvdGF0ZTpob3ZlciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKSB0cmFuc2xhdGVaKDApO1xuICB0cmFuc2l0aW9uOiAwLjdzO1xufVxuXG4ubGl0ZXJhdHVyZW1lbnUge1xuICBjb2xvcjogI0Y0RjRGNDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI1MHB4KSB7XG4gIC5tYWluX19wcm9qZWN0bmFtZSB7XG4gICAgZm9udC1zaXplOiAzNXB4O1xuICAgIHdpZHRoOiAxMDQ2cHg7XG4gIH1cblxuICAuY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDEwMDBweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTEwNXB4KSB7XG4gIC5tYWluX19wcm9qZWN0bmFtZSB7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICAgIHdpZHRoOiA4NTBweDtcbiAgfVxuXG4gIC5jb250YWluZXIge1xuICAgIG1heC13aWR0aDogODAwcHg7XG4gIH1cblxuICAuaGVhZGVyX190ZXh0IHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwOHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIG1heC13aWR0aDogNzUwcHg7XG4gIH1cblxuICAuaGVhZGVyX190ZXh0IHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cblxuICAubWFpbl9fcHJvamVjdG5hbWUge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB3aWR0aDogNTU2cHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc4MHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIG1heC13aWR0aDogNjgwcHg7XG4gIH1cblxuICAubWFpbl9fcGVyc29ucyB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIC5tYWluX19jaGFyYWN0ZXIge1xuICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gIH1cblxuICAuZm9vdGVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY5NXB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIG1heC13aWR0aDogNjAwcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0MHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIG1heC13aWR0aDogNTUwcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU4NXB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIG1heC13aWR0aDogNTAwcHg7XG4gIH1cblxuICAubWFpbl9fcHJvamVjdG5hbWUge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB3aWR0aDogNDg0cHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cblxuICAuZm9vdGVyX19pbmZvcm1hdGlvbiB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG5cbiAgLmZvb3Rlcl9fc29jaWFscyB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG5cbiAgLmZvb3Rlcl9fbGluayB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG5cbiAgLmZvb3Rlcl9fbG9jYXRpb24ge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IndicatorsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-indicators',
          templateUrl: './indicators.component.html',
          styleUrls: ['./indicators.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _services_data_getter_service__WEBPACK_IMPORTED_MODULE_5__["DataGetterService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/library-file/library-file.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/library-file/library-file.component.ts ***!
    \********************************************************/

  /*! exports provided: LibraryFileComponent */

  /***/
  function srcAppLibraryFileLibraryFileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LibraryFileComponent", function () {
      return LibraryFileComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_data_getter_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/data-getter.service */
    "./src/app/services/data-getter.service.ts");

    var LibraryFileComponent = /*#__PURE__*/function () {
      function LibraryFileComponent(dataGetterService) {
        _classCallCheck(this, LibraryFileComponent);

        this.dataGetterService = dataGetterService;
      }

      _createClass(LibraryFileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "openFileInNewTab",
        value: function openFileInNewTab() {
          this.dataGetterService.GetFileURL(this.file.uri).subscribe(function (url) {
            window.open(url, '_blank');
            console.log(url);
          });
        }
      }]);

      return LibraryFileComponent;
    }();

    LibraryFileComponent.ɵfac = function LibraryFileComponent_Factory(t) {
      return new (t || LibraryFileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_getter_service__WEBPACK_IMPORTED_MODULE_1__["DataGetterService"]));
    };

    LibraryFileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LibraryFileComponent,
      selectors: [["app-library-file"]],
      inputs: {
        file: "file"
      },
      decls: 6,
      vars: 1,
      consts: [[1, "main__book"], ["src", "../../assets/img/libraryFileImg.jpg", "alt", "indicators", 1, "main__bookimg"], [1, "main__bookname"], [1, "main__bookdownload", 3, "click"], [1, "fas", "fa-file-download"]],
      template: function LibraryFileComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LibraryFileComponent_Template_div_click_4_listener() {
            return ctx.openFileInNewTab();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.file.name);
        }
      },
      styles: ["*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: \"Comfortaa\", cursive;\n}\n\n.container[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  max-width: 1200px;\n  height: 100%;\n}\n\nbody[_ngcontent-%COMP%] {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.header[_ngcontent-%COMP%] {\n  background: linear-gradient(158.11deg, #014B80 34.34%, #4892FF 103.15%);\n  padding: 15px 0;\n}\n\n.header__logolink[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\n.header__content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.header__logo[_ngcontent-%COMP%] {\n  width: 107px;\n  height: 70px;\n}\n\n.header__text[_ngcontent-%COMP%] {\n  font-family: Comfortaa;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 16px;\n  line-height: 18px;\n  color: #FFFFFF;\n  padding-left: 28px;\n}\n\n.main[_ngcontent-%COMP%] {\n  padding: 64px 0;\n}\n\n.main__arrow[_ngcontent-%COMP%] {\n  font-size: 64px;\n  color: #FFFFFF;\n  margin: 0 auto;\n}\n\n.main__content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n.main__textcontent[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  margin-bottom: 24px;\n}\n\n.main__titlename[_ngcontent-%COMP%] {\n  padding: 44px 0;\n  font-family: HelveticaNeueCyr;\n  font-style: normal;\n  font-weight: 300;\n  font-size: 64px;\n  line-height: 63px;\n  color: #FFFFFF;\n  margin: 0 auto;\n}\n\n.main__allsections[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 24px;\n  color: #575965;\n}\n\n.main__sectionlink[_ngcontent-%COMP%] {\n  color: #575965;\n  text-decoration: none;\n}\n\n.main__book[_ngcontent-%COMP%] {\n  width: 180px;\n  position: relative;\n}\n\n.main__bookimg[_ngcontent-%COMP%] {\n  height: 250px;\n  margin-bottom: 14px;\n}\n\n.main__bookname[_ngcontent-%COMP%] {\n  font-family: HelveticaNeueCyr;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 18px;\n  line-height: 18px;\n  text-align: center;\n  color: #575965;\n  padding-bottom: 44px;\n}\n\n.main__bookdownload[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  top: 0;\n  left: 0;\n  background: #D5D5D5;\n  color: #575965;\n  width: 180px;\n  height: 250px;\n  font-size: 45px;\n  opacity: 0;\n  transition: 0.7s;\n}\n\n.main__bookdownload[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n  transition: 0.7s;\n}\n\n.main__newbook[_ngcontent-%COMP%] {\n  width: 180px;\n  height: 250px;\n  color: #96979F;\n  font-size: 52px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #F4F4F4;\n  box-shadow: 0px 2px 4px #CFD8DC;\n}\n\n.footer[_ngcontent-%COMP%] {\n  background: #F4F4F4;\n  padding-top: 36px;\n}\n\n.footer__blocks[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.footer__contacts[_ngcontent-%COMP%] {\n  font-family: Comfortaa;\n  font-style: normal;\n  font-size: 18px;\n  line-height: 20px;\n  color: #575965;\n}\n\n.footer__bold[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.footer__information[_ngcontent-%COMP%] {\n  padding-bottom: 14px;\n}\n\n.footer__information[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:last-child {\n  padding-bottom: 0;\n}\n\n.footer__socials[_ngcontent-%COMP%] {\n  font-family: Comfortaa;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 18px;\n  line-height: 20px;\n  color: #575965;\n  padding-bottom: 14px;\n}\n\n.footer__link[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #3B5998;\n  font-size: 22px;\n}\n\n.footer__librarylink[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #575965;\n}\n\n.footer__location[_ngcontent-%COMP%] {\n  font-family: Comfortaa;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 18px;\n  line-height: 20px;\n  color: #575965;\n}\n\n.line[_ngcontent-%COMP%] {\n  display: block;\n  height: 1px;\n  width: 100%;\n  background: rgba(87, 89, 101, 0.35);\n  margin-top: 28px;\n  margin-bottom: 18px;\n}\n\n.copyright[_ngcontent-%COMP%] {\n  font-family: Comfortaa;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 18px;\n  line-height: 20px;\n  color: #575965;\n  margin: 0 auto;\n  text-align: center;\n  padding-bottom: 18px;\n}\n\n.menu[_ngcontent-%COMP%] {\n  position: absolute;\n  display: inline-block;\n  list-style: none;\n  right: 0;\n  top: 0;\n  color: #575965;\n  padding: 16px;\n  text-decoration: none;\n  font-size: 22px;\n}\n\n.menu[_ngcontent-%COMP%]   .rotate[_ngcontent-%COMP%] {\n  transition: 0.7s;\n}\n\n.menu[_ngcontent-%COMP%]   .rotate[_ngcontent-%COMP%]:hover {\n  transform: rotate(90deg) translateZ(0);\n  transition: 0.7s;\n}\n\n.literaturemenu[_ngcontent-%COMP%] {\n  color: #F4F4F4;\n}\n\n@media screen and (max-width: 1250px) {\n  .main__projectname[_ngcontent-%COMP%] {\n    font-size: 35px;\n    width: 1046px;\n  }\n\n  .container[_ngcontent-%COMP%] {\n    max-width: 1000px;\n  }\n}\n\n@media screen and (max-width: 1105px) {\n  .main__projectname[_ngcontent-%COMP%] {\n    font-size: 28px;\n    width: 850px;\n  }\n\n  .container[_ngcontent-%COMP%] {\n    max-width: 800px;\n  }\n\n  .header__text[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n\n@media screen and (max-width: 908px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 750px;\n  }\n\n  .header__text[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n\n  .main__projectname[_ngcontent-%COMP%] {\n    font-size: 18px;\n    width: 556px;\n    margin: 0 auto;\n  }\n}\n\n@media screen and (max-width: 780px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 680px;\n  }\n\n  .main__persons[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n  }\n  .main__character[_ngcontent-%COMP%] {\n    margin-bottom: 24px;\n  }\n\n  .footer[_ngcontent-%COMP%] {\n    position: relative;\n  }\n}\n\n@media screen and (max-width: 695px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 600px;\n  }\n}\n\n@media screen and (max-width: 640px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 550px;\n  }\n}\n\n@media screen and (max-width: 585px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 500px;\n  }\n\n  .main__projectname[_ngcontent-%COMP%] {\n    font-size: 16px;\n    width: 484px;\n    margin: 0 auto;\n  }\n\n  .footer__information[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n\n  .footer__socials[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n\n  .footer__link[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n\n  .footer__location[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlicmFyeS1maWxlL0M6XFxHaXRIdWJcXGxpYnJhcnkvc3JjXFxhcHBcXGxpYnJhcnktZmlsZVxcbGlicmFyeS1maWxlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9saWJyYXJ5LWZpbGUvbGlicmFyeS1maWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtFQUNBLGlDQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FER0E7RUFDRSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7QUNBRjs7QURHQTtFQUNFLHVFQUFBO0VBQ0EsZUFBQTtBQ0FGOztBREVFO0VBQ0UscUJBQUE7QUNBSjs7QURHRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQ0RKOztBRElFO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUNGSjs7QURLRTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ0hKOztBRE9BO0VBQ0UsZUFBQTtBQ0pGOztBRFNFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FDUEo7O0FEVUU7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7QUNSSjs7QURXRTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNUSjs7QURZRTtFQUNFLGVBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQ1ZKOztBRGNFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNaSjs7QURlRTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtBQ2JKOztBRGdCRTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQ2RKOztBRGlCRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQ2ZKOztBRGtCRTtFQUNFLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FDaEJKOztBRG1CRTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQ2pCSjs7QURxQkU7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7QUNuQko7O0FEc0JFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQkFBQTtBQ3BCSjs7QUR5QkE7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0FDdEJGOztBRHdCRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FDdEJKOztBRHlCRTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDdkJKOztBRDBCRTtFQUNFLGlCQUFBO0FDeEJKOztBRDJCRTtFQUNFLG9CQUFBO0FDekJKOztBRDJCSTtFQUNFLGlCQUFBO0FDekJOOztBRDZCRTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtBQzNCSjs7QUQ4QkU7RUFDRSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDNUJKOztBRCtCRTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtBQzdCSjs7QURnQ0U7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDOUJKOztBRG1DQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG1DQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ2hDRjs7QURtQ0E7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUNoQ0Y7O0FEbUNBO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQ2hDRjs7QURrQ0U7RUFDRSxnQkFBQTtBQ2hDSjs7QURpQ0k7RUFDRSxzQ0FBQTtFQUNBLGdCQUFBO0FDL0JOOztBRG9DQTtFQUNFLGNBQUE7QUNqQ0Y7O0FEb0NBO0VBQ0U7SUFDRSxlQUFBO0lBQ0EsYUFBQTtFQ2pDRjs7RURvQ0E7SUFDRSxpQkFBQTtFQ2pDRjtBQUNGOztBRHVDQTtFQUNFO0lBQ0UsZUFBQTtJQUNBLFlBQUE7RUNyQ0Y7O0VEdUNBO0lBQ0UsZ0JBQUE7RUNwQ0Y7O0VEdUNBO0lBQ0UsZUFBQTtFQ3BDRjtBQUNGOztBRHdDQTtFQUNFO0lBQ0UsZ0JBQUE7RUN0Q0Y7O0VEeUNBO0lBQ0UsZUFBQTtFQ3RDRjs7RUR5Q0E7SUFDRSxlQUFBO0lBQ0EsWUFBQTtJQUNBLGNBQUE7RUN0Q0Y7QUFDRjs7QUQwQ0E7RUFDRTtJQUNFLGdCQUFBO0VDeENGOztFRDJDRTtJQUNFLHNCQUFBO0lBQ0EsbUJBQUE7RUN4Q0o7RUQyQ0U7SUFDRSxtQkFBQTtFQ3pDSjs7RUQ2Q0E7SUFDRSxrQkFBQTtFQzFDRjtBQUNGOztBRDZDQTtFQUNFO0lBQ0UsZ0JBQUE7RUMzQ0Y7QUFDRjs7QURnREE7RUFFRTtJQUNFLGdCQUFBO0VDL0NGO0FBQ0Y7O0FEbURBO0VBQ0U7SUFDRSxnQkFBQTtFQ2pERjs7RURvREE7SUFDRSxlQUFBO0lBQ0EsWUFBQTtJQUNBLGNBQUE7RUNqREY7O0VEb0RBO0lBQ0UsZUFBQTtFQ2pERjs7RURvREE7SUFDRSxlQUFBO0VDakRGOztFRG9EQTtJQUNFLGVBQUE7RUNqREY7O0VEb0RBO0lBQ0UsZUFBQTtFQ2pERjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbGlicmFyeS1maWxlL2xpYnJhcnktZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIip7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBmb250LWZhbWlseTogJ0NvbWZvcnRhYScsIGN1cnNpdmU7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIG1heC13aWR0aDogMTIwMHB4O1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuXHJcbmJvZHl7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uaGVhZGVye1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNTguMTFkZWcsICMwMTRCODAgMzQuMzQlLCAjNDg5MkZGIDEwMy4xNSUpO1xyXG4gIHBhZGRpbmc6IDE1cHggMDtcclxuXHJcbiAgJl9fbG9nb2xpbmt7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG5cclxuICAmX19jb250ZW50e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAmX19sb2dve1xyXG4gICAgd2lkdGg6IDEwN3B4O1xyXG4gICAgaGVpZ2h0OiA3MHB4O1xyXG4gIH1cclxuXHJcbiAgJl9fdGV4dHtcclxuICAgIGZvbnQtZmFtaWx5OiBDb21mb3J0YWE7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDI4cHg7XHJcbiAgfVxyXG59XHJcblxyXG4ubWFpbntcclxuICBwYWRkaW5nOiA2NHB4IDA7XHJcblxyXG4gICZfX3RpdGxle1xyXG4gIH1cclxuXHJcbiAgJl9fYXJyb3d7XHJcbiAgICBmb250LXNpemU6IDY0cHg7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gIH1cclxuXHJcbiAgJl9fY29udGVudHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgfVxyXG5cclxuICAmX190ZXh0Y29udGVudHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjRweDtcclxuICB9XHJcblxyXG4gICZfX3RpdGxlbmFtZXtcclxuICAgIHBhZGRpbmc6IDQ0cHggMDtcclxuICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2FOZXVlQ3lyO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGZvbnQtc2l6ZTogNjRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA2M3B4O1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICB9XHJcblxyXG5cclxuICAmX19hbGxzZWN0aW9uc3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBjb2xvcjogIzU3NTk2NTtcclxuICB9XHJcblxyXG4gICZfX3NlY3Rpb25saW5re1xyXG4gICAgY29sb3I6ICM1NzU5NjU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG5cclxuICAmX19ib29re1xyXG4gICAgd2lkdGg6IDE4MHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuXHJcbiAgJl9fYm9va2ltZ3tcclxuICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNHB4O1xyXG4gIH1cclxuXHJcbiAgJl9fYm9va25hbWV7XHJcbiAgICBmb250LWZhbWlseTogSGVsdmV0aWNhTmV1ZUN5cjtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzU3NTk2NTtcclxuICAgIHBhZGRpbmctYm90dG9tOiA0NHB4O1xyXG4gIH1cclxuXHJcbiAgJl9fYm9va2Rvd25sb2Fke1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRDVENUQ1O1xyXG4gICAgY29sb3I6ICM1NzU5NjU7XHJcbiAgICB3aWR0aDogMTgwcHg7XHJcbiAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gICAgZm9udC1zaXplOiA0NXB4O1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zaXRpb246IDAuN3M7XHJcblxyXG4gIH1cclxuXHJcbiAgJl9fYm9va2Rvd25sb2FkOmhvdmVye1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG4gICAgdHJhbnNpdGlvbjogMC43cztcclxuICB9XHJcblxyXG4gICZfX25ld2Jvb2t7XHJcbiAgICB3aWR0aDogMTgwcHg7XHJcbiAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gICAgY29sb3I6ICM5Njk3OUY7XHJcbiAgICBmb250LXNpemU6IDUycHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogI0Y0RjRGNDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAycHggNHB4ICNDRkQ4REM7XHJcblxyXG4gIH1cclxufVxyXG5cclxuLmZvb3RlcntcclxuICBiYWNrZ3JvdW5kOiAjRjRGNEY0O1xyXG4gIHBhZGRpbmctdG9wOiAzNnB4O1xyXG5cclxuICAmX19ibG9ja3N7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gICZfX2NvbnRhY3Rze1xyXG4gICAgZm9udC1mYW1pbHk6IENvbWZvcnRhYTtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgY29sb3I6ICM1NzU5NjU7XHJcbiAgfVxyXG5cclxuICAmX19ib2xke1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG5cclxuICAmX19pbmZvcm1hdGlvbntcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNHB4O1xyXG5cclxuICAgIDpsYXN0LWNoaWxke1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICZfX3NvY2lhbHN7XHJcbiAgICBmb250LWZhbWlseTogQ29tZm9ydGFhO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgIGNvbG9yOiAjNTc1OTY1O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE0cHg7XHJcbiAgfVxyXG5cclxuICAmX19saW5re1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6ICMzQjU5OTg7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgfVxyXG5cclxuICAmX19saWJyYXJ5bGlua3tcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiAjNTc1OTY1O1xyXG4gIH1cclxuXHJcbiAgJl9fbG9jYXRpb257XHJcbiAgICBmb250LWZhbWlseTogQ29tZm9ydGFhO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgIGNvbG9yOiAjNTc1OTY1O1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbi5saW5le1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGhlaWdodDogMXB4O1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgYmFja2dyb3VuZDogcmdiYSg4NywgODksIDEwMSwgMC4zNSk7XHJcbiAgbWFyZ2luLXRvcDogMjhweDtcclxuICBtYXJnaW4tYm90dG9tOiAxOHB4O1xyXG59XHJcblxyXG4uY29weXJpZ2h0e1xyXG4gIGZvbnQtZmFtaWx5OiBDb21mb3J0YWE7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBsaW5lLWhlaWdodDogMjBweDtcclxuICBjb2xvcjogIzU3NTk2NTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZy1ib3R0b206IDE4cHg7XHJcbn1cclxuXHJcbi5tZW51e1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICByaWdodDogMDtcclxuICB0b3A6IDA7XHJcbiAgY29sb3I6ICM1NzU5NjU7XHJcbiAgcGFkZGluZzogMTZweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG5cclxuICAucm90YXRle1xyXG4gICAgdHJhbnNpdGlvbjogMC43cztcclxuICAgICY6aG92ZXIge1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZykgdHJhbnNsYXRlWigwKTtcclxuICAgICAgdHJhbnNpdGlvbjogMC43cztcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5saXRlcmF0dXJlbWVudXtcclxuICBjb2xvcjogI0Y0RjRGNDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMjUwcHgpe1xyXG4gIC5tYWluX19wcm9qZWN0bmFtZXtcclxuICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgIHdpZHRoOiAxMDQ2cHg7XHJcbiAgfVxyXG5cclxuICAuY29udGFpbmVye1xyXG4gICAgbWF4LXdpZHRoOiAxMDAwcHg7XHJcbiAgfVxyXG5cclxuXHJcbn1cclxuXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjExMDVweCl7XHJcbiAgLm1haW5fX3Byb2plY3RuYW1le1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgd2lkdGg6IDg1MHB4O1xyXG4gIH1cclxuICAuY29udGFpbmVye1xyXG4gICAgbWF4LXdpZHRoOiA4MDBweDtcclxuICB9XHJcblxyXG4gIC5oZWFkZXJfX3RleHR7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo5MDhweCl7XHJcbiAgLmNvbnRhaW5lcntcclxuICAgIG1heC13aWR0aDogNzUwcHg7XHJcbiAgfVxyXG5cclxuICAuaGVhZGVyX190ZXh0e1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxuXHJcbiAgLm1haW5fX3Byb2plY3RuYW1le1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgd2lkdGg6IDU1NnB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgfVxyXG5cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo3ODBweCl7XHJcbiAgLmNvbnRhaW5lcntcclxuICAgIG1heC13aWR0aDogNjgwcHg7XHJcbiAgfVxyXG4gIC5tYWlue1xyXG4gICAgJl9fcGVyc29uc3tcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAmX19jaGFyYWN0ZXJ7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuZm9vdGVye1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo2OTVweCl7XHJcbiAgLmNvbnRhaW5lcntcclxuICAgIG1heC13aWR0aDogNjAwcHg7XHJcbiAgfVxyXG5cclxuXHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjQwcHgpIHtcclxuXHJcbiAgLmNvbnRhaW5lcntcclxuICAgIG1heC13aWR0aDogNTUwcHg7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo1ODVweCkge1xyXG4gIC5jb250YWluZXJ7XHJcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gIH1cclxuXHJcbiAgLm1haW5fX3Byb2plY3RuYW1le1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgd2lkdGg6IDQ4NHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgfVxyXG5cclxuICAuZm9vdGVyX19pbmZvcm1hdGlvbntcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcblxyXG4gIC5mb290ZXJfX3NvY2lhbHN7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgfVxyXG5cclxuICAuZm9vdGVyX19saW5re1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxuXHJcbiAgLmZvb3Rlcl9fbG9jYXRpb257XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgfVxyXG5cclxufVxyXG4iLCIqIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmb250LWZhbWlseTogXCJDb21mb3J0YWFcIiwgY3Vyc2l2ZTtcbn1cblxuLmNvbnRhaW5lciB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uaGVhZGVyIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE1OC4xMWRlZywgIzAxNEI4MCAzNC4zNCUsICM0ODkyRkYgMTAzLjE1JSk7XG4gIHBhZGRpbmc6IDE1cHggMDtcbn1cbi5oZWFkZXJfX2xvZ29saW5rIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLmhlYWRlcl9fY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uaGVhZGVyX19sb2dvIHtcbiAgd2lkdGg6IDEwN3B4O1xuICBoZWlnaHQ6IDcwcHg7XG59XG4uaGVhZGVyX190ZXh0IHtcbiAgZm9udC1mYW1pbHk6IENvbWZvcnRhYTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIHBhZGRpbmctbGVmdDogMjhweDtcbn1cblxuLm1haW4ge1xuICBwYWRkaW5nOiA2NHB4IDA7XG59XG4ubWFpbl9fYXJyb3cge1xuICBmb250LXNpemU6IDY0cHg7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5tYWluX19jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLm1haW5fX3RleHRjb250ZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xufVxuLm1haW5fX3RpdGxlbmFtZSB7XG4gIHBhZGRpbmc6IDQ0cHggMDtcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYU5ldWVDeXI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zaXplOiA2NHB4O1xuICBsaW5lLWhlaWdodDogNjNweDtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLm1haW5fX2FsbHNlY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiAjNTc1OTY1O1xufVxuLm1haW5fX3NlY3Rpb25saW5rIHtcbiAgY29sb3I6ICM1NzU5NjU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5tYWluX19ib29rIHtcbiAgd2lkdGg6IDE4MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubWFpbl9fYm9va2ltZyB7XG4gIGhlaWdodDogMjUwcHg7XG4gIG1hcmdpbi1ib3R0b206IDE0cHg7XG59XG4ubWFpbl9fYm9va25hbWUge1xuICBmb250LWZhbWlseTogSGVsdmV0aWNhTmV1ZUN5cjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzU3NTk2NTtcbiAgcGFkZGluZy1ib3R0b206IDQ0cHg7XG59XG4ubWFpbl9fYm9va2Rvd25sb2FkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kOiAjRDVENUQ1O1xuICBjb2xvcjogIzU3NTk2NTtcbiAgd2lkdGg6IDE4MHB4O1xuICBoZWlnaHQ6IDI1MHB4O1xuICBmb250LXNpemU6IDQ1cHg7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IDAuN3M7XG59XG4ubWFpbl9fYm9va2Rvd25sb2FkOmhvdmVyIHtcbiAgb3BhY2l0eTogMC44O1xuICB0cmFuc2l0aW9uOiAwLjdzO1xufVxuLm1haW5fX25ld2Jvb2sge1xuICB3aWR0aDogMTgwcHg7XG4gIGhlaWdodDogMjUwcHg7XG4gIGNvbG9yOiAjOTY5NzlGO1xuICBmb250LXNpemU6IDUycHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjRjRGNEY0O1xuICBib3gtc2hhZG93OiAwcHggMnB4IDRweCAjQ0ZEOERDO1xufVxuXG4uZm9vdGVyIHtcbiAgYmFja2dyb3VuZDogI0Y0RjRGNDtcbiAgcGFkZGluZy10b3A6IDM2cHg7XG59XG4uZm9vdGVyX19ibG9ja3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uZm9vdGVyX19jb250YWN0cyB7XG4gIGZvbnQtZmFtaWx5OiBDb21mb3J0YWE7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgY29sb3I6ICM1NzU5NjU7XG59XG4uZm9vdGVyX19ib2xkIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uZm9vdGVyX19pbmZvcm1hdGlvbiB7XG4gIHBhZGRpbmctYm90dG9tOiAxNHB4O1xufVxuLmZvb3Rlcl9faW5mb3JtYXRpb24gOmxhc3QtY2hpbGQge1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbn1cbi5mb290ZXJfX3NvY2lhbHMge1xuICBmb250LWZhbWlseTogQ29tZm9ydGFhO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBjb2xvcjogIzU3NTk2NTtcbiAgcGFkZGluZy1ib3R0b206IDE0cHg7XG59XG4uZm9vdGVyX19saW5rIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzNCNTk5ODtcbiAgZm9udC1zaXplOiAyMnB4O1xufVxuLmZvb3Rlcl9fbGlicmFyeWxpbmsge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjNTc1OTY1O1xufVxuLmZvb3Rlcl9fbG9jYXRpb24ge1xuICBmb250LWZhbWlseTogQ29tZm9ydGFhO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBjb2xvcjogIzU3NTk2NTtcbn1cblxuLmxpbmUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiAxcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDg3LCA4OSwgMTAxLCAwLjM1KTtcbiAgbWFyZ2luLXRvcDogMjhweDtcbiAgbWFyZ2luLWJvdHRvbTogMThweDtcbn1cblxuLmNvcHlyaWdodCB7XG4gIGZvbnQtZmFtaWx5OiBDb21mb3J0YWE7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGNvbG9yOiAjNTc1OTY1O1xuICBtYXJnaW46IDAgYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLWJvdHRvbTogMThweDtcbn1cblxuLm1lbnUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgY29sb3I6ICM1NzU5NjU7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC1zaXplOiAyMnB4O1xufVxuLm1lbnUgLnJvdGF0ZSB7XG4gIHRyYW5zaXRpb246IDAuN3M7XG59XG4ubWVudSAucm90YXRlOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpIHRyYW5zbGF0ZVooMCk7XG4gIHRyYW5zaXRpb246IDAuN3M7XG59XG5cbi5saXRlcmF0dXJlbWVudSB7XG4gIGNvbG9yOiAjRjRGNEY0O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjUwcHgpIHtcbiAgLm1haW5fX3Byb2plY3RuYW1lIHtcbiAgICBmb250LXNpemU6IDM1cHg7XG4gICAgd2lkdGg6IDEwNDZweDtcbiAgfVxuXG4gIC5jb250YWluZXIge1xuICAgIG1heC13aWR0aDogMTAwMHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTA1cHgpIHtcbiAgLm1haW5fX3Byb2plY3RuYW1lIHtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gICAgd2lkdGg6IDg1MHB4O1xuICB9XG5cbiAgLmNvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiA4MDBweDtcbiAgfVxuXG4gIC5oZWFkZXJfX3RleHQge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTA4cHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiA3NTBweDtcbiAgfVxuXG4gIC5oZWFkZXJfX3RleHQge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxuXG4gIC5tYWluX19wcm9qZWN0bmFtZSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIHdpZHRoOiA1NTZweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzgwcHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiA2ODBweDtcbiAgfVxuXG4gIC5tYWluX19wZXJzb25zIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgLm1haW5fX2NoYXJhY3RlciB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgfVxuXG4gIC5mb290ZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjk1cHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjQwcHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiA1NTBweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTg1cHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgfVxuXG4gIC5tYWluX19wcm9qZWN0bmFtZSB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIHdpZHRoOiA0ODRweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxuXG4gIC5mb290ZXJfX2luZm9ybWF0aW9uIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cblxuICAuZm9vdGVyX19zb2NpYWxzIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cblxuICAuZm9vdGVyX19saW5rIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cblxuICAuZm9vdGVyX19sb2NhdGlvbiB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LibraryFileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-library-file',
          templateUrl: './library-file.component.html',
          styleUrls: ['./library-file.component.scss']
        }]
      }], function () {
        return [{
          type: _services_data_getter_service__WEBPACK_IMPORTED_MODULE_1__["DataGetterService"]
        }];
      }, {
        file: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/library/library.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/library/library.component.ts ***!
    \**********************************************/

  /*! exports provided: LibraryComponent */

  /***/
  function srcAppLibraryLibraryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LibraryComponent", function () {
      return LibraryComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _models_collection_name_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../models/collection-name.enum */
    "./src/app/models/collection-name.enum.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _models_storage_file__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../models/storage-file */
    "./src/app/models/storage-file.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_data_getter_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/data-getter.service */
    "./src/app/services/data-getter.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _library_file_library_file_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../library-file/library-file.component */
    "./src/app/library-file/library-file.component.ts");

    var _c0 = function _c0() {
      return ["/edit-library"];
    };

    function LibraryComponent_a_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0))("queryParams", ctx_r0.author);
      }
    }

    function LibraryComponent_app_library_file_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-library-file", 14);
      }

      if (rf & 2) {
        var file_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("file", file_r3);
      }
    }

    function LibraryComponent_div_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function LibraryComponent_div_10_Template_input_input_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.loadNewFile($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var LibraryComponent = /*#__PURE__*/function () {
      function LibraryComponent(activatedRoute, dataGetterService, router) {
        _classCallCheck(this, LibraryComponent);

        this.activatedRoute = activatedRoute;
        this.dataGetterService = dataGetterService;
        this.router = router;
      }

      _createClass(LibraryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this19 = this;

          this.activatedRoute.queryParams.subscribe(function (author) {
            _this19.author = author;

            _this19.dataGetterService.GetAuthorLibraryFiles(_this19.author).subscribe(function (res) {
              return _this19.libraryFiles = res;
            });
          });
        }
      }, {
        key: "backToAuthor",
        value: function backToAuthor() {
          this.router.navigate(['/author'], {
            queryParams: this.author
          });
        }
      }, {
        key: "loadNewFile",
        value: function loadNewFile(data) {
          var _this20 = this;

          var file = data.target.files[0];
          var path = "".concat(_models_collection_name_enum__WEBPACK_IMPORTED_MODULE_1__["CollectionName"].sections, "/").concat(this.author.sectionId, "/").concat(_models_collection_name_enum__WEBPACK_IMPORTED_MODULE_1__["CollectionName"].authors, "/").concat(this.author.id, "/").concat(_models_collection_name_enum__WEBPACK_IMPORTED_MODULE_1__["CollectionName"].library, "/").concat(this.dataGetterService.GenerateUUID());
          this.dataGetterService.UploadFile(path, file).subscribe(function (value) {
            var newLibraryFile = new _models_storage_file__WEBPACK_IMPORTED_MODULE_3__["StorageFile"]();
            newLibraryFile.name = file.name;
            newLibraryFile.uri = "gs://".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].firebaseConfig.storageBucket, "/").concat(path); // this.libraryFiles.push(newLibraryFile);

            _this20.dataGetterService.SetAuthorLibraryFile(_this20.author, newLibraryFile);
          });
        }
      }]);

      return LibraryComponent;
    }();

    LibraryComponent.ɵfac = function LibraryComponent_Factory(t) {
      return new (t || LibraryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_getter_service__WEBPACK_IMPORTED_MODULE_5__["DataGetterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
    };

    LibraryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LibraryComponent,
      selectors: [["app-library"]],
      decls: 33,
      vars: 3,
      consts: [[1, "main"], [1, "container"], [1, "main__title", 2, "background-image", "url(../../assets/img/literature.jpg)"], [1, "main__textcontent"], [1, "main__titlename"], [1, "fas", "fa-arrow-circle-left", "main__arrow", 3, "click"], ["href", "", "class", "menu literaturemenu", 3, "routerLink", "queryParams", 4, "ngIf"], [1, "main__content"], [3, "file", 4, "ngFor", "ngForOf"], ["class", "main__newbook", 4, "ngIf"], [1, "main__allsections"], ["href", "", 1, "main__sectionlink"], ["href", "", 1, "menu", "literaturemenu", 3, "routerLink", "queryParams"], [1, "fas", "fa-cog", "rotate"], [3, "file"], [1, "main__newbook"], ["type", "file", "accept", ".pdf", 1, "fas", "fa-plus-circle", 3, "input"]],
      template: function LibraryComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LibraryComponent_Template_i_click_5_listener() {
            return ctx.backToAuthor();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u0411\u0456\u0431\u043B\u0456\u043E\u0442\u0435\u043A\u0430");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, LibraryComponent_a_7_Template, 2, 3, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, LibraryComponent_app_library_file_9_Template, 1, 1, "app-library-file", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, LibraryComponent_div_10_Template, 2, 0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u0411\u0456\u043E\u0433\u0440\u0430\u0444\u0456\u044F");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u0421\u043F\u043E\u0433\u0430\u0434\u0438");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\u041F\u043E\u043A\u0430\u0436\u0447\u0438\u043A\u0438");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u0420\u0435\u0446\u0435\u043D\u0437\u0456\u0457");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\u0424\u043E\u0442\u043E");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\u0412\u0456\u0434\u0435\u043E");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\u041C\u0435\u0440\u0435\u0436\u0456");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataGetterService.userAuthenticated());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.libraryFiles);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataGetterService.userAuthenticated());
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _library_file_library_file_component__WEBPACK_IMPORTED_MODULE_7__["LibraryFileComponent"]],
      styles: ["*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: \"Comfortaa\", cursive;\n}\n\n.container[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  max-width: 1200px;\n  height: 100%;\n}\n\nbody[_ngcontent-%COMP%] {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.header[_ngcontent-%COMP%] {\n  background: linear-gradient(158.11deg, #014B80 34.34%, #4892FF 103.15%);\n  padding: 15px 0;\n}\n\n.header__logolink[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\n.header__content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.header__logo[_ngcontent-%COMP%] {\n  width: 107px;\n  height: 70px;\n}\n\n.header__text[_ngcontent-%COMP%] {\n  font-family: Comfortaa;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 16px;\n  line-height: 18px;\n  color: #FFFFFF;\n  padding-left: 28px;\n}\n\n.main[_ngcontent-%COMP%] {\n  padding: 64px 0;\n}\n\n.main__arrow[_ngcontent-%COMP%] {\n  font-size: 64px;\n  color: #FFFFFF;\n  margin: 0 auto;\n}\n\n.main__content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n.main__textcontent[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  margin-bottom: 24px;\n}\n\n.main__titlename[_ngcontent-%COMP%] {\n  padding: 44px 0;\n  font-family: HelveticaNeueCyr;\n  font-style: normal;\n  font-weight: 300;\n  font-size: 64px;\n  line-height: 63px;\n  color: #FFFFFF;\n  margin: 0 auto;\n}\n\n.main__allsections[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 24px;\n  color: #575965;\n}\n\n.main__sectionlink[_ngcontent-%COMP%] {\n  color: #575965;\n  text-decoration: none;\n}\n\n.main__book[_ngcontent-%COMP%] {\n  width: 180px;\n  position: relative;\n}\n\n.main__bookimg[_ngcontent-%COMP%] {\n  height: 250px;\n  margin-bottom: 14px;\n}\n\n.main__bookname[_ngcontent-%COMP%] {\n  font-family: HelveticaNeueCyr;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 18px;\n  line-height: 18px;\n  text-align: center;\n  color: #575965;\n  padding-bottom: 44px;\n}\n\n.main__bookdownload[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  top: 0;\n  left: 0;\n  background: #D5D5D5;\n  color: #575965;\n  width: 180px;\n  height: 250px;\n  font-size: 45px;\n  opacity: 0;\n  transition: 0.7s;\n}\n\n.main__bookdownload[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n  transition: 0.7s;\n}\n\n.main__newbook[_ngcontent-%COMP%] {\n  width: 180px;\n  height: 250px;\n  color: #96979F;\n  font-size: 52px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #F4F4F4;\n  box-shadow: 0px 2px 4px #CFD8DC;\n}\n\n.footer[_ngcontent-%COMP%] {\n  background: #F4F4F4;\n  padding-top: 36px;\n}\n\n.footer__blocks[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.footer__contacts[_ngcontent-%COMP%] {\n  font-family: Comfortaa;\n  font-style: normal;\n  font-size: 18px;\n  line-height: 20px;\n  color: #575965;\n}\n\n.footer__bold[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.footer__information[_ngcontent-%COMP%] {\n  padding-bottom: 14px;\n}\n\n.footer__information[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:last-child {\n  padding-bottom: 0;\n}\n\n.footer__socials[_ngcontent-%COMP%] {\n  font-family: Comfortaa;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 18px;\n  line-height: 20px;\n  color: #575965;\n  padding-bottom: 14px;\n}\n\n.footer__link[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #3B5998;\n  font-size: 22px;\n}\n\n.footer__librarylink[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #575965;\n}\n\n.footer__location[_ngcontent-%COMP%] {\n  font-family: Comfortaa;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 18px;\n  line-height: 20px;\n  color: #575965;\n}\n\n.line[_ngcontent-%COMP%] {\n  display: block;\n  height: 1px;\n  width: 100%;\n  background: rgba(87, 89, 101, 0.35);\n  margin-top: 28px;\n  margin-bottom: 18px;\n}\n\n.copyright[_ngcontent-%COMP%] {\n  font-family: Comfortaa;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 18px;\n  line-height: 20px;\n  color: #575965;\n  margin: 0 auto;\n  text-align: center;\n  padding-bottom: 18px;\n}\n\n.menu[_ngcontent-%COMP%] {\n  position: absolute;\n  display: inline-block;\n  list-style: none;\n  right: 0;\n  top: 0;\n  color: #575965;\n  padding: 16px;\n  text-decoration: none;\n  font-size: 22px;\n}\n\n.menu[_ngcontent-%COMP%]   .rotate[_ngcontent-%COMP%] {\n  transition: 0.7s;\n}\n\n.menu[_ngcontent-%COMP%]   .rotate[_ngcontent-%COMP%]:hover {\n  transform: rotate(90deg) translateZ(0);\n  transition: 0.7s;\n}\n\n.literaturemenu[_ngcontent-%COMP%] {\n  color: #F4F4F4;\n}\n\n@media screen and (max-width: 1250px) {\n  .main__projectname[_ngcontent-%COMP%] {\n    font-size: 35px;\n    width: 1046px;\n  }\n\n  .container[_ngcontent-%COMP%] {\n    max-width: 1000px;\n  }\n}\n\n@media screen and (max-width: 1105px) {\n  .main__projectname[_ngcontent-%COMP%] {\n    font-size: 28px;\n    width: 850px;\n  }\n\n  .container[_ngcontent-%COMP%] {\n    max-width: 800px;\n  }\n\n  .header__text[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n\n@media screen and (max-width: 908px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 750px;\n  }\n\n  .header__text[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n\n  .main__projectname[_ngcontent-%COMP%] {\n    font-size: 18px;\n    width: 556px;\n    margin: 0 auto;\n  }\n}\n\n@media screen and (max-width: 780px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 680px;\n  }\n\n  .main__persons[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n  }\n  .main__character[_ngcontent-%COMP%] {\n    margin-bottom: 24px;\n  }\n\n  .footer[_ngcontent-%COMP%] {\n    position: relative;\n  }\n}\n\n@media screen and (max-width: 695px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 600px;\n  }\n}\n\n@media screen and (max-width: 640px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 550px;\n  }\n}\n\n@media screen and (max-width: 585px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 500px;\n  }\n\n  .main__projectname[_ngcontent-%COMP%] {\n    font-size: 16px;\n    width: 484px;\n    margin: 0 auto;\n  }\n\n  .footer__information[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n\n  .footer__socials[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n\n  .footer__link[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n\n  .footer__location[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlicmFyeS9DOlxcR2l0SHViXFxsaWJyYXJ5L3NyY1xcYXBwXFxsaWJyYXJ5XFxsaWJyYXJ5LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9saWJyYXJ5L2xpYnJhcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUNBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNDRjs7QURHQTtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtBQ0FGOztBREdBO0VBQ0UsdUVBQUE7RUFDQSxlQUFBO0FDQUY7O0FERUU7RUFDRSxxQkFBQTtBQ0FKOztBREdFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FDREo7O0FESUU7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQ0ZKOztBREtFO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDSEo7O0FET0E7RUFDRSxlQUFBO0FDSkY7O0FEU0U7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUNQSjs7QURVRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtBQ1JKOztBRFdFO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQ1RKOztBRFlFO0VBQ0UsZUFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FDVko7O0FEY0U7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ1pKOztBRGVFO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0FDYko7O0FEZ0JFO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FDZEo7O0FEaUJFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FDZko7O0FEa0JFO0VBQ0UsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7QUNoQko7O0FEbUJFO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FDakJKOztBRHFCRTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtBQ25CSjs7QURzQkU7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLCtCQUFBO0FDcEJKOztBRHlCQTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7QUN0QkY7O0FEd0JFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUN0Qko7O0FEeUJFO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUN2Qko7O0FEMEJFO0VBQ0UsaUJBQUE7QUN4Qko7O0FEMkJFO0VBQ0Usb0JBQUE7QUN6Qko7O0FEMkJJO0VBQ0UsaUJBQUE7QUN6Qk47O0FENkJFO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FDM0JKOztBRDhCRTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUM1Qko7O0FEK0JFO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0FDN0JKOztBRGdDRTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUM5Qko7O0FEbUNBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsbUNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDaENGOztBRG1DQTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQ2hDRjs7QURtQ0E7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FDaENGOztBRGtDRTtFQUNFLGdCQUFBO0FDaENKOztBRGlDSTtFQUNFLHNDQUFBO0VBQ0EsZ0JBQUE7QUMvQk47O0FEb0NBO0VBQ0UsY0FBQTtBQ2pDRjs7QURvQ0E7RUFDRTtJQUNFLGVBQUE7SUFDQSxhQUFBO0VDakNGOztFRG9DQTtJQUNFLGlCQUFBO0VDakNGO0FBQ0Y7O0FEdUNBO0VBQ0U7SUFDRSxlQUFBO0lBQ0EsWUFBQTtFQ3JDRjs7RUR1Q0E7SUFDRSxnQkFBQTtFQ3BDRjs7RUR1Q0E7SUFDRSxlQUFBO0VDcENGO0FBQ0Y7O0FEd0NBO0VBQ0U7SUFDRSxnQkFBQTtFQ3RDRjs7RUR5Q0E7SUFDRSxlQUFBO0VDdENGOztFRHlDQTtJQUNFLGVBQUE7SUFDQSxZQUFBO0lBQ0EsY0FBQTtFQ3RDRjtBQUNGOztBRDBDQTtFQUNFO0lBQ0UsZ0JBQUE7RUN4Q0Y7O0VEMkNFO0lBQ0Usc0JBQUE7SUFDQSxtQkFBQTtFQ3hDSjtFRDJDRTtJQUNFLG1CQUFBO0VDekNKOztFRDZDQTtJQUNFLGtCQUFBO0VDMUNGO0FBQ0Y7O0FENkNBO0VBQ0U7SUFDRSxnQkFBQTtFQzNDRjtBQUNGOztBRGdEQTtFQUVFO0lBQ0UsZ0JBQUE7RUMvQ0Y7QUFDRjs7QURtREE7RUFDRTtJQUNFLGdCQUFBO0VDakRGOztFRG9EQTtJQUNFLGVBQUE7SUFDQSxZQUFBO0lBQ0EsY0FBQTtFQ2pERjs7RURvREE7SUFDRSxlQUFBO0VDakRGOztFRG9EQTtJQUNFLGVBQUE7RUNqREY7O0VEb0RBO0lBQ0UsZUFBQTtFQ2pERjs7RURvREE7SUFDRSxlQUFBO0VDakRGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9saWJyYXJ5L2xpYnJhcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqe1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgZm9udC1mYW1pbHk6ICdDb21mb3J0YWEnLCBjdXJzaXZlO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBtYXgtd2lkdGg6IDEyMDBweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcblxyXG5ib2R5e1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLmhlYWRlcntcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTU4LjExZGVnLCAjMDE0QjgwIDM0LjM0JSwgIzQ4OTJGRiAxMDMuMTUlKTtcclxuICBwYWRkaW5nOiAxNXB4IDA7XHJcblxyXG4gICZfX2xvZ29saW5re1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxuXHJcbiAgJl9fY29udGVudHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgJl9fbG9nb3tcclxuICAgIHdpZHRoOiAxMDdweDtcclxuICAgIGhlaWdodDogNzBweDtcclxuICB9XHJcblxyXG4gICZfX3RleHR7XHJcbiAgICBmb250LWZhbWlseTogQ29tZm9ydGFhO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyOHB4O1xyXG4gIH1cclxufVxyXG5cclxuLm1haW57XHJcbiAgcGFkZGluZzogNjRweCAwO1xyXG5cclxuICAmX190aXRsZXtcclxuICB9XHJcblxyXG4gICZfX2Fycm93e1xyXG4gICAgZm9udC1zaXplOiA2NHB4O1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICB9XHJcblxyXG4gICZfX2NvbnRlbnR7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIH1cclxuXHJcbiAgJl9fdGV4dGNvbnRlbnR7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcbiAgfVxyXG5cclxuICAmX190aXRsZW5hbWV7XHJcbiAgICBwYWRkaW5nOiA0NHB4IDA7XHJcbiAgICBmb250LWZhbWlseTogSGVsdmV0aWNhTmV1ZUN5cjtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBmb250LXNpemU6IDY0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogNjNweDtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgfVxyXG5cclxuXHJcbiAgJl9fYWxsc2VjdGlvbnN7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgY29sb3I6ICM1NzU5NjU7XHJcbiAgfVxyXG5cclxuICAmX19zZWN0aW9ubGlua3tcclxuICAgIGNvbG9yOiAjNTc1OTY1O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxuXHJcbiAgJl9fYm9va3tcclxuICAgIHdpZHRoOiAxODBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcblxyXG4gICZfX2Jvb2tpbWd7XHJcbiAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTRweDtcclxuICB9XHJcblxyXG4gICZfX2Jvb2tuYW1le1xyXG4gICAgZm9udC1mYW1pbHk6IEhlbHZldGljYU5ldWVDeXI7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICM1NzU5NjU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNDRweDtcclxuICB9XHJcblxyXG4gICZfX2Jvb2tkb3dubG9hZHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYmFja2dyb3VuZDogI0Q1RDVENTtcclxuICAgIGNvbG9yOiAjNTc1OTY1O1xyXG4gICAgd2lkdGg6IDE4MHB4O1xyXG4gICAgaGVpZ2h0OiAyNTBweDtcclxuICAgIGZvbnQtc2l6ZTogNDVweDtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjdzO1xyXG5cclxuICB9XHJcblxyXG4gICZfX2Jvb2tkb3dubG9hZDpob3ZlcntcclxuICAgIG9wYWNpdHk6IDAuODtcclxuICAgIHRyYW5zaXRpb246IDAuN3M7XHJcbiAgfVxyXG5cclxuICAmX19uZXdib29re1xyXG4gICAgd2lkdGg6IDE4MHB4O1xyXG4gICAgaGVpZ2h0OiAyNTBweDtcclxuICAgIGNvbG9yOiAjOTY5NzlGO1xyXG4gICAgZm9udC1zaXplOiA1MnB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6ICNGNEY0RjQ7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDRweCAjQ0ZEOERDO1xyXG5cclxuICB9XHJcbn1cclxuXHJcbi5mb290ZXJ7XHJcbiAgYmFja2dyb3VuZDogI0Y0RjRGNDtcclxuICBwYWRkaW5nLXRvcDogMzZweDtcclxuXHJcbiAgJl9fYmxvY2tze1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAmX19jb250YWN0c3tcclxuICAgIGZvbnQtZmFtaWx5OiBDb21mb3J0YWE7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgIGNvbG9yOiAjNTc1OTY1O1xyXG4gIH1cclxuXHJcbiAgJl9fYm9sZHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuXHJcbiAgJl9faW5mb3JtYXRpb257XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTRweDtcclxuXHJcbiAgICA6bGFzdC1jaGlsZHtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmX19zb2NpYWxze1xyXG4gICAgZm9udC1mYW1pbHk6IENvbWZvcnRhYTtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICBjb2xvcjogIzU3NTk2NTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNHB4O1xyXG4gIH1cclxuXHJcbiAgJl9fbGlua3tcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiAjM0I1OTk4O1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gIH1cclxuXHJcbiAgJl9fbGlicmFyeWxpbmt7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogIzU3NTk2NTtcclxuICB9XHJcblxyXG4gICZfX2xvY2F0aW9ue1xyXG4gICAgZm9udC1mYW1pbHk6IENvbWZvcnRhYTtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICBjb2xvcjogIzU3NTk2NTtcclxuICB9XHJcblxyXG59XHJcblxyXG4ubGluZXtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBoZWlnaHQ6IDFweDtcclxuICB3aWR0aDoxMDAlO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoODcsIDg5LCAxMDEsIDAuMzUpO1xyXG4gIG1hcmdpbi10b3A6IDI4cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMThweDtcclxufVxyXG5cclxuLmNvcHlyaWdodHtcclxuICBmb250LWZhbWlseTogQ29tZm9ydGFhO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgY29sb3I6ICM1NzU5NjU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxOHB4O1xyXG59XHJcblxyXG4ubWVudXtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIGNvbG9yOiAjNTc1OTY1O1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuXHJcbiAgLnJvdGF0ZXtcclxuICAgIHRyYW5zaXRpb246IDAuN3M7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpIHRyYW5zbGF0ZVooMCk7XHJcbiAgICAgIHRyYW5zaXRpb246IDAuN3M7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ubGl0ZXJhdHVyZW1lbnV7XHJcbiAgY29sb3I6ICNGNEY0RjQ7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTI1MHB4KXtcclxuICAubWFpbl9fcHJvamVjdG5hbWV7XHJcbiAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICB3aWR0aDogMTA0NnB4O1xyXG4gIH1cclxuXHJcbiAgLmNvbnRhaW5lcntcclxuICAgIG1heC13aWR0aDogMTAwMHB4O1xyXG4gIH1cclxuXHJcblxyXG59XHJcblxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMTA1cHgpe1xyXG4gIC5tYWluX19wcm9qZWN0bmFtZXtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIHdpZHRoOiA4NTBweDtcclxuICB9XHJcbiAgLmNvbnRhaW5lcntcclxuICAgIG1heC13aWR0aDogODAwcHg7XHJcbiAgfVxyXG5cclxuICAuaGVhZGVyX190ZXh0e1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTA4cHgpe1xyXG4gIC5jb250YWluZXJ7XHJcbiAgICBtYXgtd2lkdGg6IDc1MHB4O1xyXG4gIH1cclxuXHJcbiAgLmhlYWRlcl9fdGV4dHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICB9XHJcblxyXG4gIC5tYWluX19wcm9qZWN0bmFtZXtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIHdpZHRoOiA1NTZweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzgwcHgpe1xyXG4gIC5jb250YWluZXJ7XHJcbiAgICBtYXgtd2lkdGg6IDY4MHB4O1xyXG4gIH1cclxuICAubWFpbntcclxuICAgICZfX3BlcnNvbnN7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fY2hhcmFjdGVye1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmZvb3RlcntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6Njk1cHgpe1xyXG4gIC5jb250YWluZXJ7XHJcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gIH1cclxuXHJcblxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjY0MHB4KSB7XHJcblxyXG4gIC5jb250YWluZXJ7XHJcbiAgICBtYXgtd2lkdGg6IDU1MHB4O1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NTg1cHgpIHtcclxuICAuY29udGFpbmVye1xyXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICB9XHJcblxyXG4gIC5tYWluX19wcm9qZWN0bmFtZXtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIHdpZHRoOiA0ODRweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLmZvb3Rlcl9faW5mb3JtYXRpb257XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgfVxyXG5cclxuICAuZm9vdGVyX19zb2NpYWxze1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxuXHJcbiAgLmZvb3Rlcl9fbGlua3tcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcblxyXG4gIC5mb290ZXJfX2xvY2F0aW9ue1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxuXHJcbn1cclxuIiwiKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udC1mYW1pbHk6IFwiQ29tZm9ydGFhXCIsIGN1cnNpdmU7XG59XG5cbi5jb250YWluZXIge1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuYm9keSB7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmhlYWRlciB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNTguMTFkZWcsICMwMTRCODAgMzQuMzQlLCAjNDg5MkZGIDEwMy4xNSUpO1xuICBwYWRkaW5nOiAxNXB4IDA7XG59XG4uaGVhZGVyX19sb2dvbGluayB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5oZWFkZXJfX2NvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmhlYWRlcl9fbG9nbyB7XG4gIHdpZHRoOiAxMDdweDtcbiAgaGVpZ2h0OiA3MHB4O1xufVxuLmhlYWRlcl9fdGV4dCB7XG4gIGZvbnQtZmFtaWx5OiBDb21mb3J0YWE7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBwYWRkaW5nLWxlZnQ6IDI4cHg7XG59XG5cbi5tYWluIHtcbiAgcGFkZGluZzogNjRweCAwO1xufVxuLm1haW5fX2Fycm93IHtcbiAgZm9udC1zaXplOiA2NHB4O1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4ubWFpbl9fY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5tYWluX190ZXh0Y29udGVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbn1cbi5tYWluX190aXRsZW5hbWUge1xuICBwYWRkaW5nOiA0NHB4IDA7XG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2FOZXVlQ3lyO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc2l6ZTogNjRweDtcbiAgbGluZS1oZWlnaHQ6IDYzcHg7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5tYWluX19hbGxzZWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBjb2xvcjogIzU3NTk2NTtcbn1cbi5tYWluX19zZWN0aW9ubGluayB7XG4gIGNvbG9yOiAjNTc1OTY1O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4ubWFpbl9fYm9vayB7XG4gIHdpZHRoOiAxODBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLm1haW5fX2Jvb2tpbWcge1xuICBoZWlnaHQ6IDI1MHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNHB4O1xufVxuLm1haW5fX2Jvb2tuYW1lIHtcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYU5ldWVDeXI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICM1NzU5NjU7XG4gIHBhZGRpbmctYm90dG9tOiA0NHB4O1xufVxuLm1haW5fX2Jvb2tkb3dubG9hZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZDogI0Q1RDVENTtcbiAgY29sb3I6ICM1NzU5NjU7XG4gIHdpZHRoOiAxODBweDtcbiAgaGVpZ2h0OiAyNTBweDtcbiAgZm9udC1zaXplOiA0NXB4O1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiAwLjdzO1xufVxuLm1haW5fX2Jvb2tkb3dubG9hZDpob3ZlciB7XG4gIG9wYWNpdHk6IDAuODtcbiAgdHJhbnNpdGlvbjogMC43cztcbn1cbi5tYWluX19uZXdib29rIHtcbiAgd2lkdGg6IDE4MHB4O1xuICBoZWlnaHQ6IDI1MHB4O1xuICBjb2xvcjogIzk2OTc5RjtcbiAgZm9udC1zaXplOiA1MnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogI0Y0RjRGNDtcbiAgYm94LXNoYWRvdzogMHB4IDJweCA0cHggI0NGRDhEQztcbn1cblxuLmZvb3RlciB7XG4gIGJhY2tncm91bmQ6ICNGNEY0RjQ7XG4gIHBhZGRpbmctdG9wOiAzNnB4O1xufVxuLmZvb3Rlcl9fYmxvY2tzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmZvb3Rlcl9fY29udGFjdHMge1xuICBmb250LWZhbWlseTogQ29tZm9ydGFhO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGNvbG9yOiAjNTc1OTY1O1xufVxuLmZvb3Rlcl9fYm9sZCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmZvb3Rlcl9faW5mb3JtYXRpb24ge1xuICBwYWRkaW5nLWJvdHRvbTogMTRweDtcbn1cbi5mb290ZXJfX2luZm9ybWF0aW9uIDpsYXN0LWNoaWxkIHtcbiAgcGFkZGluZy1ib3R0b206IDA7XG59XG4uZm9vdGVyX19zb2NpYWxzIHtcbiAgZm9udC1mYW1pbHk6IENvbWZvcnRhYTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgY29sb3I6ICM1NzU5NjU7XG4gIHBhZGRpbmctYm90dG9tOiAxNHB4O1xufVxuLmZvb3Rlcl9fbGluayB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICMzQjU5OTg7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn1cbi5mb290ZXJfX2xpYnJhcnlsaW5rIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzU3NTk2NTtcbn1cbi5mb290ZXJfX2xvY2F0aW9uIHtcbiAgZm9udC1mYW1pbHk6IENvbWZvcnRhYTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgY29sb3I6ICM1NzU5NjU7XG59XG5cbi5saW5lIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMXB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogcmdiYSg4NywgODksIDEwMSwgMC4zNSk7XG4gIG1hcmdpbi10b3A6IDI4cHg7XG4gIG1hcmdpbi1ib3R0b206IDE4cHg7XG59XG5cbi5jb3B5cmlnaHQge1xuICBmb250LWZhbWlseTogQ29tZm9ydGFhO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBjb2xvcjogIzU3NTk2NTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy1ib3R0b206IDE4cHg7XG59XG5cbi5tZW51IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIGNvbG9yOiAjNTc1OTY1O1xuICBwYWRkaW5nOiAxNnB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn1cbi5tZW51IC5yb3RhdGUge1xuICB0cmFuc2l0aW9uOiAwLjdzO1xufVxuLm1lbnUgLnJvdGF0ZTpob3ZlciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKSB0cmFuc2xhdGVaKDApO1xuICB0cmFuc2l0aW9uOiAwLjdzO1xufVxuXG4ubGl0ZXJhdHVyZW1lbnUge1xuICBjb2xvcjogI0Y0RjRGNDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI1MHB4KSB7XG4gIC5tYWluX19wcm9qZWN0bmFtZSB7XG4gICAgZm9udC1zaXplOiAzNXB4O1xuICAgIHdpZHRoOiAxMDQ2cHg7XG4gIH1cblxuICAuY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDEwMDBweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTEwNXB4KSB7XG4gIC5tYWluX19wcm9qZWN0bmFtZSB7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICAgIHdpZHRoOiA4NTBweDtcbiAgfVxuXG4gIC5jb250YWluZXIge1xuICAgIG1heC13aWR0aDogODAwcHg7XG4gIH1cblxuICAuaGVhZGVyX190ZXh0IHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwOHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIG1heC13aWR0aDogNzUwcHg7XG4gIH1cblxuICAuaGVhZGVyX190ZXh0IHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cblxuICAubWFpbl9fcHJvamVjdG5hbWUge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB3aWR0aDogNTU2cHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc4MHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIG1heC13aWR0aDogNjgwcHg7XG4gIH1cblxuICAubWFpbl9fcGVyc29ucyB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIC5tYWluX19jaGFyYWN0ZXIge1xuICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gIH1cblxuICAuZm9vdGVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY5NXB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIG1heC13aWR0aDogNjAwcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0MHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIG1heC13aWR0aDogNTUwcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU4NXB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIG1heC13aWR0aDogNTAwcHg7XG4gIH1cblxuICAubWFpbl9fcHJvamVjdG5hbWUge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB3aWR0aDogNDg0cHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cblxuICAuZm9vdGVyX19pbmZvcm1hdGlvbiB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG5cbiAgLmZvb3Rlcl9fc29jaWFscyB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG5cbiAgLmZvb3Rlcl9fbGluayB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG5cbiAgLmZvb3Rlcl9fbG9jYXRpb24ge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LibraryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-library',
          templateUrl: './library.component.html',
          styleUrls: ['./library.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _services_data_getter_service__WEBPACK_IMPORTED_MODULE_5__["DataGetterService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_data_getter_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/data-getter.service */
    "./src/app/services/data-getter.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(dataGetterService, router) {
        _classCallCheck(this, LoginComponent);

        this.dataGetterService = dataGetterService;
        this.router = router;
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.dataGetterService.userAuthenticated()) {
            this.router.navigate(['/home']);
          }
        }
      }, {
        key: "tryLogin",
        value: function tryLogin() {
          var _this21 = this;

          this.dataGetterService.checkUser(this.username, this.password).then(function (res) {
            // this.dataGetterService.setUser(this.username);
            // console.log({ login: this.username, password: this.password});
            _this21.router.navigate(['/home']);
          }, function (err) {
            alert(err.message);
          });
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_getter_service__WEBPACK_IMPORTED_MODULE_1__["DataGetterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 12,
      vars: 2,
      consts: [[1, "form"], [1, "formgroup"], ["type", "text", "id", "text", 3, "ngModel", "ngModelChange"], ["for", "text"], ["type", "password", "id", "password", 3, "ngModel", "ngModelChange"], ["for", "password"], [3, "click"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_3_listener($event) {
            return ctx.username = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u041B\u043E\u0433\u0456\u043D");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_7_listener($event) {
            return ctx.password = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u041F\u0430\u0440\u043E\u043B\u044C");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_10_listener() {
            return ctx.tryLogin();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u0412\u0445\u0456\u0434");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.username);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]],
      styles: ["*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: \"Comfortaa\", cursive;\n}\n\nbody[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n}\n\ninput[_ngcontent-%COMP%] {\n  border: 0;\n  padding: 16px;\n  border-bottom: 1px solid grey;\n  outline: none;\n  transition: 0.5s;\n}\n\nbutton[_ngcontent-%COMP%] {\n  border: none;\n  padding: 16px;\n  margin-top: 16px;\n  background: #F4F4F4;\n  color: #575965;\n  width: 100%;\n  transition: 0.5s;\n  border-radius: 35px;\n}\n\n.form[_ngcontent-%COMP%] {\n  box-shadow: 0 4px 8px grey;\n  padding: 32px;\n  border-top-left-radius: 35px;\n}\n\nbutton[_ngcontent-%COMP%]:hover {\n  color: #F4F4F4;\n  background: #575965;\n}\n\n.formgroup[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 32px;\n}\n\nlabel[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  color: #575965;\n  transition: 0.5s;\n}\n\ninput[_ngcontent-%COMP%]:focus    + label[_ngcontent-%COMP%], input[_ngcontent-%COMP%]:not(:placeholder-shown)    + label[_ngcontent-%COMP%] {\n  top: -10px;\n  font-size: 12px;\n  color: #575965;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXEdpdEh1YlxcbGlicmFyeS9zcmNcXGFwcFxcbG9naW5cXGxvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLFNBQUE7RUFBUyxVQUFBO0VBQXdDLHNCQUFBO0VBQXNCLGlDQUFBO0FDSXpFOztBRERBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FDSUY7O0FEREE7RUFDRSxTQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FDSUY7O0FEREE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNJRjs7QUREQTtFQUNFLDBCQUFBO0VBQ0EsYUFBQTtFQUNBLDRCQUFBO0FDSUY7O0FEREE7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7QUNJRjs7QUREQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUNJRjs7QUREQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNJRjs7QUREQTtFQUNFLFVBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ0lGIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuKntcclxuICBtYXJnaW46MDtwYWRkaW5nOjA7LXdlYmtpdC1ib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym94LXNpemluZzpib3JkZXItYm94O2ZvbnQtZmFtaWx5OidDb21mb3J0YWEnLCBjdXJzaXZlXHJcbn1cclxuXHJcbmJvZHl7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbmlucHV0e1xyXG4gIGJvcmRlcjogMDtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIGJvcmRlci1ib3R0b206MXB4IHNvbGlkIGdyZXkgO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgdHJhbnNpdGlvbjogMC41cztcclxufVxyXG5cclxuYnV0dG9ue1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgYmFja2dyb3VuZDogI0Y0RjRGNDtcclxuICBjb2xvcjogIzU3NTk2NTtcclxuICB3aWR0aDogMTAwJTtcclxuICB0cmFuc2l0aW9uOjAuNXM7XHJcbiAgYm9yZGVyLXJhZGl1czogMzVweDtcclxufVxyXG5cclxuLmZvcm17XHJcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IGdyZXk7XHJcbiAgcGFkZGluZzogMzJweDtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzNXB4O1xyXG59XHJcblxyXG5idXR0b246aG92ZXJ7XHJcbiAgY29sb3I6ICNGNEY0RjQ7XHJcbiAgYmFja2dyb3VuZDogIzU3NTk2NTtcclxufVxyXG5cclxuLmZvcm1ncm91cHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzJweDtcclxufVxyXG5cclxubGFiZWx7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDowO1xyXG4gIGxlZnQ6MDtcclxuICBjb2xvcjogIzU3NTk2NTtcclxuICB0cmFuc2l0aW9uOiAwLjVzO1xyXG59XHJcblxyXG5pbnB1dDpmb2N1cyArIGxhYmVsLCBpbnB1dDpub3QoOnBsYWNlaG9sZGVyLXNob3duKStsYWJlbCB7XHJcbiAgdG9wOiAtMTBweDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgY29sb3I6IzU3NTk2NSA7XHJcblxyXG59XHJcbiIsIioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udC1mYW1pbHk6IFwiQ29tZm9ydGFhXCIsIGN1cnNpdmU7XG59XG5cbmJvZHkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuaW5wdXQge1xuICBib3JkZXI6IDA7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmV5O1xuICBvdXRsaW5lOiBub25lO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuXG5idXR0b24ge1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG4gIGJhY2tncm91bmQ6ICNGNEY0RjQ7XG4gIGNvbG9yOiAjNTc1OTY1O1xuICB3aWR0aDogMTAwJTtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgYm9yZGVyLXJhZGl1czogMzVweDtcbn1cblxuLmZvcm0ge1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggZ3JleTtcbiAgcGFkZGluZzogMzJweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMzVweDtcbn1cblxuYnV0dG9uOmhvdmVyIHtcbiAgY29sb3I6ICNGNEY0RjQ7XG4gIGJhY2tncm91bmQ6ICM1NzU5NjU7XG59XG5cbi5mb3JtZ3JvdXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDMycHg7XG59XG5cbmxhYmVsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGNvbG9yOiAjNTc1OTY1O1xuICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuXG5pbnB1dDpmb2N1cyArIGxhYmVsLCBpbnB1dDpub3QoOnBsYWNlaG9sZGVyLXNob3duKSArIGxhYmVsIHtcbiAgdG9wOiAtMTBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzU3NTk2NTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.scss']
        }]
      }], function () {
        return [{
          type: _services_data_getter_service__WEBPACK_IMPORTED_MODULE_1__["DataGetterService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/models/author.ts":
  /*!**********************************!*\
    !*** ./src/app/models/author.ts ***!
    \**********************************/

  /*! exports provided: Author */

  /***/
  function srcAppModelsAuthorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Author", function () {
      return Author;
    });

    var Author = /*#__PURE__*/function () {
      function Author() {
        _classCallCheck(this, Author);

        this.id = 'none';
        this.sectionId = 'none';
        this.imgURI = 'none';
        this.name = 'none';
        this.status = 'none';
        this.shortInfo = 'none';
        this.biography = 'none';
        this.library = [];
        this.indicators = [];
        this.photos = [];
      }

      _createClass(Author, null, [{
        key: "clone",
        value: function clone(author) {
          var newAuthor = new Author();
          newAuthor.id = author.id;
          newAuthor.sectionId = author.sectionId;
          newAuthor.imgURI = author.imgURI;
          newAuthor.name = author.name;
          newAuthor.status = author.status;
          newAuthor.shortInfo = author.shortInfo;
          newAuthor.biography = author.biography;
          newAuthor.library = author.library;
          newAuthor.indicators = author.indicators;
          newAuthor.photos = author.photos;
          return newAuthor;
        }
      }]);

      return Author;
    }();
    /***/

  },

  /***/
  "./src/app/models/collection-name.enum.ts":
  /*!************************************************!*\
    !*** ./src/app/models/collection-name.enum.ts ***!
    \************************************************/

  /*! exports provided: CollectionName */

  /***/
  function srcAppModelsCollectionNameEnumTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CollectionName", function () {
      return CollectionName;
    });

    var CollectionName;

    (function (CollectionName) {
      CollectionName["sections"] = "sections";
      CollectionName["authors"] = "authors";
      CollectionName["site"] = "site";
      CollectionName["social_networks"] = "social_networks";
      CollectionName["library"] = "library";
      CollectionName["indicators"] = "indicators";
      CollectionName["photos"] = "photos";
    })(CollectionName || (CollectionName = {}));
    /***/

  },

  /***/
  "./src/app/models/footer-socialnetwork.ts":
  /*!************************************************!*\
    !*** ./src/app/models/footer-socialnetwork.ts ***!
    \************************************************/

  /*! exports provided: FooterSocialnetwork */

  /***/
  function srcAppModelsFooterSocialnetworkTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterSocialnetwork", function () {
      return FooterSocialnetwork;
    });

    var FooterSocialnetwork = function FooterSocialnetwork() {
      _classCallCheck(this, FooterSocialnetwork);

      this.id = '';
      this.icon = 'none';
      this.url = 'none';
    };
    /***/

  },

  /***/
  "./src/app/models/footer.ts":
  /*!**********************************!*\
    !*** ./src/app/models/footer.ts ***!
    \**********************************/

  /*! exports provided: Footer */

  /***/
  function srcAppModelsFooterTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Footer", function () {
      return Footer;
    });

    var Footer = function Footer() {
      _classCallCheck(this, Footer);
    };
    /***/

  },

  /***/
  "./src/app/models/section.ts":
  /*!***********************************!*\
    !*** ./src/app/models/section.ts ***!
    \***********************************/

  /*! exports provided: Section */

  /***/
  function srcAppModelsSectionTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Section", function () {
      return Section;
    });

    var Section = function Section(id) {
      _classCallCheck(this, Section);

      this.id = id;
    };
    /***/

  },

  /***/
  "./src/app/models/storage-file.ts":
  /*!****************************************!*\
    !*** ./src/app/models/storage-file.ts ***!
    \****************************************/

  /*! exports provided: StorageFile */

  /***/
  function srcAppModelsStorageFileTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StorageFile", function () {
      return StorageFile;
    });

    var StorageFile = function StorageFile() {
      _classCallCheck(this, StorageFile);

      this.id = '';
      this.name = 'none';
      this.uri = 'none';
    };
    /***/

  },

  /***/
  "./src/app/not-found/not-found.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/not-found/not-found.component.ts ***!
    \**************************************************/

  /*! exports provided: NotFoundComponent */

  /***/
  function srcAppNotFoundNotFoundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function () {
      return NotFoundComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var NotFoundComponent = /*#__PURE__*/function () {
      function NotFoundComponent() {
        _classCallCheck(this, NotFoundComponent);
      }

      _createClass(NotFoundComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NotFoundComponent;
    }();

    NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) {
      return new (t || NotFoundComponent)();
    };

    NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NotFoundComponent,
      selectors: [["app-not-found"]],
      decls: 2,
      vars: 0,
      consts: [[2, "font-size", "128px"]],
      template: function NotFoundComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "404");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-not-found',
          templateUrl: './not-found.component.html',
          styleUrls: ['./not-found.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/photo-file/photo-file.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/photo-file/photo-file.component.ts ***!
    \****************************************************/

  /*! exports provided: PhotoFileComponent */

  /***/
  function srcAppPhotoFilePhotoFileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PhotoFileComponent", function () {
      return PhotoFileComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_data_getter_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/data-getter.service */
    "./src/app/services/data-getter.service.ts");

    var PhotoFileComponent = /*#__PURE__*/function () {
      function PhotoFileComponent(dataGetterService) {
        _classCallCheck(this, PhotoFileComponent);

        this.dataGetterService = dataGetterService;
        this.showPhotoEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(PhotoFileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this22 = this;

          this.dataGetterService.GetImgURL(this.file.uri).subscribe(function (url) {
            return _this22.photoURL = url;
          });
        }
      }, {
        key: "openFileInNewTab",
        value: function openFileInNewTab() {
          this.dataGetterService.GetFileURL(this.file.uri).subscribe(function (url) {
            window.open(url, '_blank');
            console.log(url);
          });
        }
      }, {
        key: "showPhoto",
        value: function showPhoto() {
          this.showPhotoEvent.emit(this.file);
        }
      }]);

      return PhotoFileComponent;
    }();

    PhotoFileComponent.ɵfac = function PhotoFileComponent_Factory(t) {
      return new (t || PhotoFileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_getter_service__WEBPACK_IMPORTED_MODULE_1__["DataGetterService"]));
    };

    PhotoFileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PhotoFileComponent,
      selectors: [["app-photo-file"]],
      inputs: {
        file: "file"
      },
      outputs: {
        showPhotoEvent: "showPhotoEvent"
      },
      decls: 6,
      vars: 2,
      consts: [[1, "main__book"], ["alt", "indicators", 1, "main__bookimg", 3, "src"], [1, "main__bookname"], [1, "main__bookdownload", 3, "click"], [1, "fas", "fa-file-download"]],
      template: function PhotoFileComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PhotoFileComponent_Template_div_click_4_listener() {
            return ctx.showPhoto();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.photoURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.file.name);
        }
      },
      styles: ["*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: \"Comfortaa\", cursive;\n}\n\n.container[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  max-width: 1200px;\n  height: 100%;\n}\n\nbody[_ngcontent-%COMP%] {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.header[_ngcontent-%COMP%] {\n  background: linear-gradient(158.11deg, #014B80 34.34%, #4892FF 103.15%);\n  padding: 15px 0;\n}\n\n.header__logolink[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\n.header__content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.header__logo[_ngcontent-%COMP%] {\n  width: 107px;\n  height: 70px;\n}\n\n.header__text[_ngcontent-%COMP%] {\n  font-family: Comfortaa;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 16px;\n  line-height: 18px;\n  color: #FFFFFF;\n  padding-left: 28px;\n}\n\n.main[_ngcontent-%COMP%] {\n  padding: 64px 0;\n}\n\n.main__arrow[_ngcontent-%COMP%] {\n  font-size: 64px;\n  color: #FFFFFF;\n  margin: 0 auto;\n}\n\n.main__content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n.main__textcontent[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  margin-bottom: 24px;\n}\n\n.main__titlename[_ngcontent-%COMP%] {\n  padding: 44px 0;\n  font-family: HelveticaNeueCyr;\n  font-style: normal;\n  font-weight: 300;\n  font-size: 64px;\n  line-height: 63px;\n  color: #FFFFFF;\n  margin: 0 auto;\n}\n\n.main__allsections[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 24px;\n  color: #575965;\n}\n\n.main__sectionlink[_ngcontent-%COMP%] {\n  color: #575965;\n  text-decoration: none;\n}\n\n.main__book[_ngcontent-%COMP%] {\n  width: 180px;\n  position: relative;\n}\n\n.main__bookimg[_ngcontent-%COMP%] {\n  height: 250px;\n  margin-bottom: 14px;\n}\n\n.main__bookname[_ngcontent-%COMP%] {\n  font-family: HelveticaNeueCyr;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 18px;\n  line-height: 18px;\n  text-align: center;\n  color: #575965;\n  padding-bottom: 44px;\n}\n\n.main__bookdownload[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  top: 0;\n  left: 0;\n  background: #D5D5D5;\n  color: #575965;\n  width: 180px;\n  height: 250px;\n  font-size: 45px;\n  opacity: 0;\n  transition: 0.7s;\n}\n\n.main__bookdownload[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n  transition: 0.7s;\n}\n\n.main__newbook[_ngcontent-%COMP%] {\n  width: 180px;\n  height: 250px;\n  color: #96979F;\n  font-size: 52px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #F4F4F4;\n  box-shadow: 0px 2px 4px #CFD8DC;\n}\n\n.footer[_ngcontent-%COMP%] {\n  background: #F4F4F4;\n  padding-top: 36px;\n}\n\n.footer__blocks[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.footer__contacts[_ngcontent-%COMP%] {\n  font-family: Comfortaa;\n  font-style: normal;\n  font-size: 18px;\n  line-height: 20px;\n  color: #575965;\n}\n\n.footer__bold[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.footer__information[_ngcontent-%COMP%] {\n  padding-bottom: 14px;\n}\n\n.footer__information[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:last-child {\n  padding-bottom: 0;\n}\n\n.footer__socials[_ngcontent-%COMP%] {\n  font-family: Comfortaa;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 18px;\n  line-height: 20px;\n  color: #575965;\n  padding-bottom: 14px;\n}\n\n.footer__link[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #3B5998;\n  font-size: 22px;\n}\n\n.footer__librarylink[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #575965;\n}\n\n.footer__location[_ngcontent-%COMP%] {\n  font-family: Comfortaa;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 18px;\n  line-height: 20px;\n  color: #575965;\n}\n\n.line[_ngcontent-%COMP%] {\n  display: block;\n  height: 1px;\n  width: 100%;\n  background: rgba(87, 89, 101, 0.35);\n  margin-top: 28px;\n  margin-bottom: 18px;\n}\n\n.copyright[_ngcontent-%COMP%] {\n  font-family: Comfortaa;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 18px;\n  line-height: 20px;\n  color: #575965;\n  margin: 0 auto;\n  text-align: center;\n  padding-bottom: 18px;\n}\n\n.menu[_ngcontent-%COMP%] {\n  position: absolute;\n  display: inline-block;\n  list-style: none;\n  right: 0;\n  top: 0;\n  color: #575965;\n  padding: 16px;\n  text-decoration: none;\n  font-size: 22px;\n}\n\n.menu[_ngcontent-%COMP%]   .rotate[_ngcontent-%COMP%] {\n  transition: 0.7s;\n}\n\n.menu[_ngcontent-%COMP%]   .rotate[_ngcontent-%COMP%]:hover {\n  transform: rotate(90deg) translateZ(0);\n  transition: 0.7s;\n}\n\n.literaturemenu[_ngcontent-%COMP%] {\n  color: #F4F4F4;\n}\n\n@media screen and (max-width: 1250px) {\n  .main__projectname[_ngcontent-%COMP%] {\n    font-size: 35px;\n    width: 1046px;\n  }\n\n  .container[_ngcontent-%COMP%] {\n    max-width: 1000px;\n  }\n}\n\n@media screen and (max-width: 1105px) {\n  .main__projectname[_ngcontent-%COMP%] {\n    font-size: 28px;\n    width: 850px;\n  }\n\n  .container[_ngcontent-%COMP%] {\n    max-width: 800px;\n  }\n\n  .header__text[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n\n@media screen and (max-width: 908px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 750px;\n  }\n\n  .header__text[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n\n  .main__projectname[_ngcontent-%COMP%] {\n    font-size: 18px;\n    width: 556px;\n    margin: 0 auto;\n  }\n}\n\n@media screen and (max-width: 780px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 680px;\n  }\n\n  .main__persons[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n  }\n  .main__character[_ngcontent-%COMP%] {\n    margin-bottom: 24px;\n  }\n\n  .footer[_ngcontent-%COMP%] {\n    position: relative;\n  }\n}\n\n@media screen and (max-width: 695px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 600px;\n  }\n}\n\n@media screen and (max-width: 640px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 550px;\n  }\n}\n\n@media screen and (max-width: 585px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 500px;\n  }\n\n  .main__projectname[_ngcontent-%COMP%] {\n    font-size: 16px;\n    width: 484px;\n    margin: 0 auto;\n  }\n\n  .footer__information[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n\n  .footer__socials[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n\n  .footer__link[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n\n  .footer__location[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGhvdG8tZmlsZS9DOlxcR2l0SHViXFxsaWJyYXJ5L3NyY1xcYXBwXFxwaG90by1maWxlXFxwaG90by1maWxlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9waG90by1maWxlL3Bob3RvLWZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUNBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNDRjs7QURHQTtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtBQ0FGOztBREdBO0VBQ0UsdUVBQUE7RUFDQSxlQUFBO0FDQUY7O0FERUU7RUFDRSxxQkFBQTtBQ0FKOztBREdFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FDREo7O0FESUU7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQ0ZKOztBREtFO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDSEo7O0FET0E7RUFDRSxlQUFBO0FDSkY7O0FEU0U7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUNQSjs7QURVRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtBQ1JKOztBRFdFO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQ1RKOztBRFlFO0VBQ0UsZUFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FDVko7O0FEY0U7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ1pKOztBRGVFO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0FDYko7O0FEZ0JFO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FDZEo7O0FEaUJFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FDZko7O0FEa0JFO0VBQ0UsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7QUNoQko7O0FEbUJFO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FDakJKOztBRHFCRTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtBQ25CSjs7QURzQkU7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLCtCQUFBO0FDcEJKOztBRHlCQTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7QUN0QkY7O0FEd0JFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUN0Qko7O0FEeUJFO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUN2Qko7O0FEMEJFO0VBQ0UsaUJBQUE7QUN4Qko7O0FEMkJFO0VBQ0Usb0JBQUE7QUN6Qko7O0FEMkJJO0VBQ0UsaUJBQUE7QUN6Qk47O0FENkJFO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FDM0JKOztBRDhCRTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUM1Qko7O0FEK0JFO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0FDN0JKOztBRGdDRTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUM5Qko7O0FEbUNBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsbUNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDaENGOztBRG1DQTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQ2hDRjs7QURtQ0E7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FDaENGOztBRGtDRTtFQUNFLGdCQUFBO0FDaENKOztBRGlDSTtFQUNFLHNDQUFBO0VBQ0EsZ0JBQUE7QUMvQk47O0FEb0NBO0VBQ0UsY0FBQTtBQ2pDRjs7QURvQ0E7RUFDRTtJQUNFLGVBQUE7SUFDQSxhQUFBO0VDakNGOztFRG9DQTtJQUNFLGlCQUFBO0VDakNGO0FBQ0Y7O0FEdUNBO0VBQ0U7SUFDRSxlQUFBO0lBQ0EsWUFBQTtFQ3JDRjs7RUR1Q0E7SUFDRSxnQkFBQTtFQ3BDRjs7RUR1Q0E7SUFDRSxlQUFBO0VDcENGO0FBQ0Y7O0FEd0NBO0VBQ0U7SUFDRSxnQkFBQTtFQ3RDRjs7RUR5Q0E7SUFDRSxlQUFBO0VDdENGOztFRHlDQTtJQUNFLGVBQUE7SUFDQSxZQUFBO0lBQ0EsY0FBQTtFQ3RDRjtBQUNGOztBRDBDQTtFQUNFO0lBQ0UsZ0JBQUE7RUN4Q0Y7O0VEMkNFO0lBQ0Usc0JBQUE7SUFDQSxtQkFBQTtFQ3hDSjtFRDJDRTtJQUNFLG1CQUFBO0VDekNKOztFRDZDQTtJQUNFLGtCQUFBO0VDMUNGO0FBQ0Y7O0FENkNBO0VBQ0U7SUFDRSxnQkFBQTtFQzNDRjtBQUNGOztBRGdEQTtFQUVFO0lBQ0UsZ0JBQUE7RUMvQ0Y7QUFDRjs7QURtREE7RUFDRTtJQUNFLGdCQUFBO0VDakRGOztFRG9EQTtJQUNFLGVBQUE7SUFDQSxZQUFBO0lBQ0EsY0FBQTtFQ2pERjs7RURvREE7SUFDRSxlQUFBO0VDakRGOztFRG9EQTtJQUNFLGVBQUE7RUNqREY7O0VEb0RBO0lBQ0UsZUFBQTtFQ2pERjs7RURvREE7SUFDRSxlQUFBO0VDakRGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9waG90by1maWxlL3Bob3RvLWZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqe1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgZm9udC1mYW1pbHk6ICdDb21mb3J0YWEnLCBjdXJzaXZlO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBtYXgtd2lkdGg6IDEyMDBweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcblxyXG5ib2R5e1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLmhlYWRlcntcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTU4LjExZGVnLCAjMDE0QjgwIDM0LjM0JSwgIzQ4OTJGRiAxMDMuMTUlKTtcclxuICBwYWRkaW5nOiAxNXB4IDA7XHJcblxyXG4gICZfX2xvZ29saW5re1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxuXHJcbiAgJl9fY29udGVudHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgJl9fbG9nb3tcclxuICAgIHdpZHRoOiAxMDdweDtcclxuICAgIGhlaWdodDogNzBweDtcclxuICB9XHJcblxyXG4gICZfX3RleHR7XHJcbiAgICBmb250LWZhbWlseTogQ29tZm9ydGFhO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyOHB4O1xyXG4gIH1cclxufVxyXG5cclxuLm1haW57XHJcbiAgcGFkZGluZzogNjRweCAwO1xyXG5cclxuICAmX190aXRsZXtcclxuICB9XHJcblxyXG4gICZfX2Fycm93e1xyXG4gICAgZm9udC1zaXplOiA2NHB4O1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICB9XHJcblxyXG4gICZfX2NvbnRlbnR7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIH1cclxuXHJcbiAgJl9fdGV4dGNvbnRlbnR7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcbiAgfVxyXG5cclxuICAmX190aXRsZW5hbWV7XHJcbiAgICBwYWRkaW5nOiA0NHB4IDA7XHJcbiAgICBmb250LWZhbWlseTogSGVsdmV0aWNhTmV1ZUN5cjtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBmb250LXNpemU6IDY0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogNjNweDtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgfVxyXG5cclxuXHJcbiAgJl9fYWxsc2VjdGlvbnN7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgY29sb3I6ICM1NzU5NjU7XHJcbiAgfVxyXG5cclxuICAmX19zZWN0aW9ubGlua3tcclxuICAgIGNvbG9yOiAjNTc1OTY1O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxuXHJcbiAgJl9fYm9va3tcclxuICAgIHdpZHRoOiAxODBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcblxyXG4gICZfX2Jvb2tpbWd7XHJcbiAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTRweDtcclxuICB9XHJcblxyXG4gICZfX2Jvb2tuYW1le1xyXG4gICAgZm9udC1mYW1pbHk6IEhlbHZldGljYU5ldWVDeXI7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICM1NzU5NjU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNDRweDtcclxuICB9XHJcblxyXG4gICZfX2Jvb2tkb3dubG9hZHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYmFja2dyb3VuZDogI0Q1RDVENTtcclxuICAgIGNvbG9yOiAjNTc1OTY1O1xyXG4gICAgd2lkdGg6IDE4MHB4O1xyXG4gICAgaGVpZ2h0OiAyNTBweDtcclxuICAgIGZvbnQtc2l6ZTogNDVweDtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjdzO1xyXG5cclxuICB9XHJcblxyXG4gICZfX2Jvb2tkb3dubG9hZDpob3ZlcntcclxuICAgIG9wYWNpdHk6IDAuODtcclxuICAgIHRyYW5zaXRpb246IDAuN3M7XHJcbiAgfVxyXG5cclxuICAmX19uZXdib29re1xyXG4gICAgd2lkdGg6IDE4MHB4O1xyXG4gICAgaGVpZ2h0OiAyNTBweDtcclxuICAgIGNvbG9yOiAjOTY5NzlGO1xyXG4gICAgZm9udC1zaXplOiA1MnB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6ICNGNEY0RjQ7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDRweCAjQ0ZEOERDO1xyXG5cclxuICB9XHJcbn1cclxuXHJcbi5mb290ZXJ7XHJcbiAgYmFja2dyb3VuZDogI0Y0RjRGNDtcclxuICBwYWRkaW5nLXRvcDogMzZweDtcclxuXHJcbiAgJl9fYmxvY2tze1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAmX19jb250YWN0c3tcclxuICAgIGZvbnQtZmFtaWx5OiBDb21mb3J0YWE7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgIGNvbG9yOiAjNTc1OTY1O1xyXG4gIH1cclxuXHJcbiAgJl9fYm9sZHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuXHJcbiAgJl9faW5mb3JtYXRpb257XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTRweDtcclxuXHJcbiAgICA6bGFzdC1jaGlsZHtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmX19zb2NpYWxze1xyXG4gICAgZm9udC1mYW1pbHk6IENvbWZvcnRhYTtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICBjb2xvcjogIzU3NTk2NTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNHB4O1xyXG4gIH1cclxuXHJcbiAgJl9fbGlua3tcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiAjM0I1OTk4O1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gIH1cclxuXHJcbiAgJl9fbGlicmFyeWxpbmt7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogIzU3NTk2NTtcclxuICB9XHJcblxyXG4gICZfX2xvY2F0aW9ue1xyXG4gICAgZm9udC1mYW1pbHk6IENvbWZvcnRhYTtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICBjb2xvcjogIzU3NTk2NTtcclxuICB9XHJcblxyXG59XHJcblxyXG4ubGluZXtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBoZWlnaHQ6IDFweDtcclxuICB3aWR0aDoxMDAlO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoODcsIDg5LCAxMDEsIDAuMzUpO1xyXG4gIG1hcmdpbi10b3A6IDI4cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMThweDtcclxufVxyXG5cclxuLmNvcHlyaWdodHtcclxuICBmb250LWZhbWlseTogQ29tZm9ydGFhO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgY29sb3I6ICM1NzU5NjU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxOHB4O1xyXG59XHJcblxyXG4ubWVudXtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIGNvbG9yOiAjNTc1OTY1O1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuXHJcbiAgLnJvdGF0ZXtcclxuICAgIHRyYW5zaXRpb246IDAuN3M7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpIHRyYW5zbGF0ZVooMCk7XHJcbiAgICAgIHRyYW5zaXRpb246IDAuN3M7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ubGl0ZXJhdHVyZW1lbnV7XHJcbiAgY29sb3I6ICNGNEY0RjQ7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTI1MHB4KXtcclxuICAubWFpbl9fcHJvamVjdG5hbWV7XHJcbiAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICB3aWR0aDogMTA0NnB4O1xyXG4gIH1cclxuXHJcbiAgLmNvbnRhaW5lcntcclxuICAgIG1heC13aWR0aDogMTAwMHB4O1xyXG4gIH1cclxuXHJcblxyXG59XHJcblxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMTA1cHgpe1xyXG4gIC5tYWluX19wcm9qZWN0bmFtZXtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIHdpZHRoOiA4NTBweDtcclxuICB9XHJcbiAgLmNvbnRhaW5lcntcclxuICAgIG1heC13aWR0aDogODAwcHg7XHJcbiAgfVxyXG5cclxuICAuaGVhZGVyX190ZXh0e1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTA4cHgpe1xyXG4gIC5jb250YWluZXJ7XHJcbiAgICBtYXgtd2lkdGg6IDc1MHB4O1xyXG4gIH1cclxuXHJcbiAgLmhlYWRlcl9fdGV4dHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICB9XHJcblxyXG4gIC5tYWluX19wcm9qZWN0bmFtZXtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIHdpZHRoOiA1NTZweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzgwcHgpe1xyXG4gIC5jb250YWluZXJ7XHJcbiAgICBtYXgtd2lkdGg6IDY4MHB4O1xyXG4gIH1cclxuICAubWFpbntcclxuICAgICZfX3BlcnNvbnN7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fY2hhcmFjdGVye1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmZvb3RlcntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6Njk1cHgpe1xyXG4gIC5jb250YWluZXJ7XHJcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gIH1cclxuXHJcblxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjY0MHB4KSB7XHJcblxyXG4gIC5jb250YWluZXJ7XHJcbiAgICBtYXgtd2lkdGg6IDU1MHB4O1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NTg1cHgpIHtcclxuICAuY29udGFpbmVye1xyXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICB9XHJcblxyXG4gIC5tYWluX19wcm9qZWN0bmFtZXtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIHdpZHRoOiA0ODRweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLmZvb3Rlcl9faW5mb3JtYXRpb257XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgfVxyXG5cclxuICAuZm9vdGVyX19zb2NpYWxze1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxuXHJcbiAgLmZvb3Rlcl9fbGlua3tcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcblxyXG4gIC5mb290ZXJfX2xvY2F0aW9ue1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxuXHJcbn1cclxuIiwiKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udC1mYW1pbHk6IFwiQ29tZm9ydGFhXCIsIGN1cnNpdmU7XG59XG5cbi5jb250YWluZXIge1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuYm9keSB7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmhlYWRlciB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNTguMTFkZWcsICMwMTRCODAgMzQuMzQlLCAjNDg5MkZGIDEwMy4xNSUpO1xuICBwYWRkaW5nOiAxNXB4IDA7XG59XG4uaGVhZGVyX19sb2dvbGluayB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5oZWFkZXJfX2NvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmhlYWRlcl9fbG9nbyB7XG4gIHdpZHRoOiAxMDdweDtcbiAgaGVpZ2h0OiA3MHB4O1xufVxuLmhlYWRlcl9fdGV4dCB7XG4gIGZvbnQtZmFtaWx5OiBDb21mb3J0YWE7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBwYWRkaW5nLWxlZnQ6IDI4cHg7XG59XG5cbi5tYWluIHtcbiAgcGFkZGluZzogNjRweCAwO1xufVxuLm1haW5fX2Fycm93IHtcbiAgZm9udC1zaXplOiA2NHB4O1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4ubWFpbl9fY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5tYWluX190ZXh0Y29udGVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbn1cbi5tYWluX190aXRsZW5hbWUge1xuICBwYWRkaW5nOiA0NHB4IDA7XG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2FOZXVlQ3lyO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc2l6ZTogNjRweDtcbiAgbGluZS1oZWlnaHQ6IDYzcHg7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5tYWluX19hbGxzZWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBjb2xvcjogIzU3NTk2NTtcbn1cbi5tYWluX19zZWN0aW9ubGluayB7XG4gIGNvbG9yOiAjNTc1OTY1O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4ubWFpbl9fYm9vayB7XG4gIHdpZHRoOiAxODBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLm1haW5fX2Jvb2tpbWcge1xuICBoZWlnaHQ6IDI1MHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNHB4O1xufVxuLm1haW5fX2Jvb2tuYW1lIHtcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYU5ldWVDeXI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICM1NzU5NjU7XG4gIHBhZGRpbmctYm90dG9tOiA0NHB4O1xufVxuLm1haW5fX2Jvb2tkb3dubG9hZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZDogI0Q1RDVENTtcbiAgY29sb3I6ICM1NzU5NjU7XG4gIHdpZHRoOiAxODBweDtcbiAgaGVpZ2h0OiAyNTBweDtcbiAgZm9udC1zaXplOiA0NXB4O1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiAwLjdzO1xufVxuLm1haW5fX2Jvb2tkb3dubG9hZDpob3ZlciB7XG4gIG9wYWNpdHk6IDAuODtcbiAgdHJhbnNpdGlvbjogMC43cztcbn1cbi5tYWluX19uZXdib29rIHtcbiAgd2lkdGg6IDE4MHB4O1xuICBoZWlnaHQ6IDI1MHB4O1xuICBjb2xvcjogIzk2OTc5RjtcbiAgZm9udC1zaXplOiA1MnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogI0Y0RjRGNDtcbiAgYm94LXNoYWRvdzogMHB4IDJweCA0cHggI0NGRDhEQztcbn1cblxuLmZvb3RlciB7XG4gIGJhY2tncm91bmQ6ICNGNEY0RjQ7XG4gIHBhZGRpbmctdG9wOiAzNnB4O1xufVxuLmZvb3Rlcl9fYmxvY2tzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmZvb3Rlcl9fY29udGFjdHMge1xuICBmb250LWZhbWlseTogQ29tZm9ydGFhO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGNvbG9yOiAjNTc1OTY1O1xufVxuLmZvb3Rlcl9fYm9sZCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmZvb3Rlcl9faW5mb3JtYXRpb24ge1xuICBwYWRkaW5nLWJvdHRvbTogMTRweDtcbn1cbi5mb290ZXJfX2luZm9ybWF0aW9uIDpsYXN0LWNoaWxkIHtcbiAgcGFkZGluZy1ib3R0b206IDA7XG59XG4uZm9vdGVyX19zb2NpYWxzIHtcbiAgZm9udC1mYW1pbHk6IENvbWZvcnRhYTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgY29sb3I6ICM1NzU5NjU7XG4gIHBhZGRpbmctYm90dG9tOiAxNHB4O1xufVxuLmZvb3Rlcl9fbGluayB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICMzQjU5OTg7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn1cbi5mb290ZXJfX2xpYnJhcnlsaW5rIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzU3NTk2NTtcbn1cbi5mb290ZXJfX2xvY2F0aW9uIHtcbiAgZm9udC1mYW1pbHk6IENvbWZvcnRhYTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgY29sb3I6ICM1NzU5NjU7XG59XG5cbi5saW5lIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMXB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogcmdiYSg4NywgODksIDEwMSwgMC4zNSk7XG4gIG1hcmdpbi10b3A6IDI4cHg7XG4gIG1hcmdpbi1ib3R0b206IDE4cHg7XG59XG5cbi5jb3B5cmlnaHQge1xuICBmb250LWZhbWlseTogQ29tZm9ydGFhO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBjb2xvcjogIzU3NTk2NTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy1ib3R0b206IDE4cHg7XG59XG5cbi5tZW51IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIGNvbG9yOiAjNTc1OTY1O1xuICBwYWRkaW5nOiAxNnB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn1cbi5tZW51IC5yb3RhdGUge1xuICB0cmFuc2l0aW9uOiAwLjdzO1xufVxuLm1lbnUgLnJvdGF0ZTpob3ZlciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKSB0cmFuc2xhdGVaKDApO1xuICB0cmFuc2l0aW9uOiAwLjdzO1xufVxuXG4ubGl0ZXJhdHVyZW1lbnUge1xuICBjb2xvcjogI0Y0RjRGNDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI1MHB4KSB7XG4gIC5tYWluX19wcm9qZWN0bmFtZSB7XG4gICAgZm9udC1zaXplOiAzNXB4O1xuICAgIHdpZHRoOiAxMDQ2cHg7XG4gIH1cblxuICAuY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDEwMDBweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTEwNXB4KSB7XG4gIC5tYWluX19wcm9qZWN0bmFtZSB7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICAgIHdpZHRoOiA4NTBweDtcbiAgfVxuXG4gIC5jb250YWluZXIge1xuICAgIG1heC13aWR0aDogODAwcHg7XG4gIH1cblxuICAuaGVhZGVyX190ZXh0IHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwOHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIG1heC13aWR0aDogNzUwcHg7XG4gIH1cblxuICAuaGVhZGVyX190ZXh0IHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cblxuICAubWFpbl9fcHJvamVjdG5hbWUge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB3aWR0aDogNTU2cHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc4MHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIG1heC13aWR0aDogNjgwcHg7XG4gIH1cblxuICAubWFpbl9fcGVyc29ucyB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIC5tYWluX19jaGFyYWN0ZXIge1xuICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gIH1cblxuICAuZm9vdGVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY5NXB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIG1heC13aWR0aDogNjAwcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0MHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIG1heC13aWR0aDogNTUwcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU4NXB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIG1heC13aWR0aDogNTAwcHg7XG4gIH1cblxuICAubWFpbl9fcHJvamVjdG5hbWUge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB3aWR0aDogNDg0cHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cblxuICAuZm9vdGVyX19pbmZvcm1hdGlvbiB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG5cbiAgLmZvb3Rlcl9fc29jaWFscyB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG5cbiAgLmZvb3Rlcl9fbGluayB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG5cbiAgLmZvb3Rlcl9fbG9jYXRpb24ge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PhotoFileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-photo-file',
          templateUrl: './photo-file.component.html',
          styleUrls: ['./photo-file.component.scss']
        }]
      }], function () {
        return [{
          type: _services_data_getter_service__WEBPACK_IMPORTED_MODULE_1__["DataGetterService"]
        }];
      }, {
        file: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        showPhotoEvent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/photos/photos.component.ts":
  /*!********************************************!*\
    !*** ./src/app/photos/photos.component.ts ***!
    \********************************************/

  /*! exports provided: PhotosComponent */

  /***/
  function srcAppPhotosPhotosComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PhotosComponent", function () {
      return PhotosComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _models_storage_file__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../models/storage-file */
    "./src/app/models/storage-file.ts");
    /* harmony import */


    var _models_collection_name_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../models/collection-name.enum */
    "./src/app/models/collection-name.enum.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_data_getter_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/data-getter.service */
    "./src/app/services/data-getter.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _photo_file_photo_file_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../photo-file/photo-file.component */
    "./src/app/photo-file/photo-file.component.ts");

    var _c0 = function _c0() {
      return ["/edit-library"];
    };

    function PhotosComponent_a_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0))("queryParams", ctx_r0.author);
      }
    }

    function PhotosComponent_ng_container_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
      }
    }

    function PhotosComponent_ng_template_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PhotosComponent_ng_template_10_Template_input_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r6.hidePhotoViewer();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r3.currentPhotoURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function PhotosComponent_ng_template_12_app_photo_file_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-photo-file", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("showPhotoEvent", function PhotosComponent_ng_template_12_app_photo_file_0_Template_app_photo_file_showPhotoEvent_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r11.showPhotoViewer($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var file_r10 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("file", file_r10);
      }
    }

    function PhotosComponent_ng_template_12_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function PhotosComponent_ng_template_12_div_1_Template_input_input_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r13.loadNewFile($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PhotosComponent_ng_template_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PhotosComponent_ng_template_12_app_photo_file_0_Template, 1, 1, "app-photo-file", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PhotosComponent_ng_template_12_div_1_Template, 2, 0, "div", 18);
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.photosFiles);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.dataGetterService.userAuthenticated());
      }
    }

    var PhotosComponent = /*#__PURE__*/function () {
      function PhotosComponent(activatedRoute, dataGetterService, router) {
        _classCallCheck(this, PhotosComponent);

        this.activatedRoute = activatedRoute;
        this.dataGetterService = dataGetterService;
        this.router = router;
        this.photoViewerEnabled = false;
      }

      _createClass(PhotosComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this23 = this;

          this.activatedRoute.queryParams.subscribe(function (author) {
            _this23.author = author;

            _this23.dataGetterService.GetAuthorPhotosFiles(_this23.author).subscribe(function (res) {
              return _this23.photosFiles = res;
            });
          });
        }
      }, {
        key: "backToAuthor",
        value: function backToAuthor() {
          this.router.navigate(['/author'], {
            queryParams: this.author
          });
        }
      }, {
        key: "loadNewFile",
        value: function loadNewFile(data) {
          var _this24 = this;

          var file = data.target.files[0];
          var path = "".concat(_models_collection_name_enum__WEBPACK_IMPORTED_MODULE_2__["CollectionName"].sections, "/").concat(this.author.sectionId, "/").concat(_models_collection_name_enum__WEBPACK_IMPORTED_MODULE_2__["CollectionName"].authors, "/").concat(this.author.id, "/").concat(_models_collection_name_enum__WEBPACK_IMPORTED_MODULE_2__["CollectionName"].photos, "/").concat(this.dataGetterService.GenerateUUID());
          this.dataGetterService.UploadFile(path, file).subscribe(function (value) {
            var newLibraryFile = new _models_storage_file__WEBPACK_IMPORTED_MODULE_1__["StorageFile"]();
            newLibraryFile.name = file.name;
            newLibraryFile.uri = "gs://".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].firebaseConfig.storageBucket, "/").concat(path); // this.libraryFiles.push(newLibraryFile);

            _this24.dataGetterService.SetAuthorPhotosFile(_this24.author, newLibraryFile);
          });
        }
      }, {
        key: "showPhotoViewer",
        value: function showPhotoViewer(photoFile) {
          var _this25 = this;

          this.dataGetterService.GetImgURL(photoFile.uri).subscribe(function (url) {
            _this25.photoViewerEnabled = true;
            _this25.currentPhotoURL = url;
          });
        }
      }, {
        key: "hidePhotoViewer",
        value: function hidePhotoViewer() {
          this.photoViewerEnabled = false;
        }
      }]);

      return PhotosComponent;
    }();

    PhotosComponent.ɵfac = function PhotosComponent_Factory(t) {
      return new (t || PhotosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_getter_service__WEBPACK_IMPORTED_MODULE_5__["DataGetterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
    };

    PhotosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PhotosComponent,
      selectors: [["app-photos"]],
      decls: 36,
      vars: 4,
      consts: [[1, "main"], [1, "container"], [1, "main__title", 2, "background-image", "url(../../assets/img/literature.jpg)"], [1, "main__textcontent"], [1, "main__titlename"], [1, "fas", "fa-arrow-circle-left", "main__arrow", 3, "click"], ["href", "", "class", "menu literaturemenu", 3, "routerLink", "queryParams", 4, "ngIf"], [1, "main__content"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["photoViewerShowed", ""], ["photosShowed", ""], [1, "main__allsections"], ["href", "", 1, "main__sectionlink"], ["href", "", 1, "menu", "literaturemenu", 3, "routerLink", "queryParams"], [1, "fas", "fa-cog", "rotate"], ["type", "button", "value", "Close", 3, "click"], [3, "src"], [3, "file", "showPhotoEvent", 4, "ngFor", "ngForOf"], ["class", "main__newbook", 4, "ngIf"], [3, "file", "showPhotoEvent"], [1, "main__newbook"], ["type", "file", "accept", "image/*", 1, "fas", "fa-plus-circle", 3, "input"]],
      template: function PhotosComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PhotosComponent_Template_i_click_5_listener() {
            return ctx.backToAuthor();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Photos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PhotosComponent_a_7_Template, 2, 3, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, PhotosComponent_ng_container_9_Template, 1, 0, "ng-container", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, PhotosComponent_ng_template_10_Template, 3, 1, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, PhotosComponent_ng_template_12_Template, 2, 2, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u0411\u0456\u043E\u0433\u0440\u0430\u0444\u0456\u044F");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\u0421\u043F\u043E\u0433\u0430\u0434\u0438");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u041F\u043E\u043A\u0430\u0436\u0447\u0438\u043A\u0438");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\u0420\u0435\u0446\u0435\u043D\u0437\u0456\u0457");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\u0424\u043E\u0442\u043E");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\u0412\u0456\u0434\u0435\u043E");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "\u041C\u0435\u0440\u0435\u0436\u0456");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);

          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataGetterService.userAuthenticated());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.photoViewerEnabled)("ngIfThen", _r2)("ngIfElse", _r4);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _photo_file_photo_file_component__WEBPACK_IMPORTED_MODULE_7__["PhotoFileComponent"]],
      styles: ["*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: \"Comfortaa\", cursive;\n}\n\n.container[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  max-width: 1200px;\n  height: 100%;\n}\n\nbody[_ngcontent-%COMP%] {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.header[_ngcontent-%COMP%] {\n  background: linear-gradient(158.11deg, #014B80 34.34%, #4892FF 103.15%);\n  padding: 15px 0;\n}\n\n.header__logolink[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\n.header__content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.header__logo[_ngcontent-%COMP%] {\n  width: 107px;\n  height: 70px;\n}\n\n.header__text[_ngcontent-%COMP%] {\n  font-family: Comfortaa;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 16px;\n  line-height: 18px;\n  color: #FFFFFF;\n  padding-left: 28px;\n}\n\n.main[_ngcontent-%COMP%] {\n  padding: 64px 0;\n}\n\n.main__arrow[_ngcontent-%COMP%] {\n  font-size: 64px;\n  color: #FFFFFF;\n  margin: 0 auto;\n}\n\n.main__content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n.main__textcontent[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  margin-bottom: 24px;\n}\n\n.main__titlename[_ngcontent-%COMP%] {\n  padding: 44px 0;\n  font-family: HelveticaNeueCyr;\n  font-style: normal;\n  font-weight: 300;\n  font-size: 64px;\n  line-height: 63px;\n  color: #FFFFFF;\n  margin: 0 auto;\n}\n\n.main__allsections[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 24px;\n  color: #575965;\n}\n\n.main__sectionlink[_ngcontent-%COMP%] {\n  color: #575965;\n  text-decoration: none;\n}\n\n.main__book[_ngcontent-%COMP%] {\n  width: 180px;\n  position: relative;\n}\n\n.main__bookimg[_ngcontent-%COMP%] {\n  height: 250px;\n  margin-bottom: 14px;\n}\n\n.main__bookname[_ngcontent-%COMP%] {\n  font-family: HelveticaNeueCyr;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 18px;\n  line-height: 18px;\n  text-align: center;\n  color: #575965;\n  padding-bottom: 44px;\n}\n\n.main__bookdownload[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  top: 0;\n  left: 0;\n  background: #D5D5D5;\n  color: #575965;\n  width: 180px;\n  height: 250px;\n  font-size: 45px;\n  opacity: 0;\n  transition: 0.7s;\n}\n\n.main__bookdownload[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n  transition: 0.7s;\n}\n\n.main__newbook[_ngcontent-%COMP%] {\n  width: 180px;\n  height: 250px;\n  color: #96979F;\n  font-size: 52px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #F4F4F4;\n  box-shadow: 0px 2px 4px #CFD8DC;\n}\n\n.footer[_ngcontent-%COMP%] {\n  background: #F4F4F4;\n  padding-top: 36px;\n}\n\n.footer__blocks[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.footer__contacts[_ngcontent-%COMP%] {\n  font-family: Comfortaa;\n  font-style: normal;\n  font-size: 18px;\n  line-height: 20px;\n  color: #575965;\n}\n\n.footer__bold[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.footer__information[_ngcontent-%COMP%] {\n  padding-bottom: 14px;\n}\n\n.footer__information[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:last-child {\n  padding-bottom: 0;\n}\n\n.footer__socials[_ngcontent-%COMP%] {\n  font-family: Comfortaa;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 18px;\n  line-height: 20px;\n  color: #575965;\n  padding-bottom: 14px;\n}\n\n.footer__link[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #3B5998;\n  font-size: 22px;\n}\n\n.footer__librarylink[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #575965;\n}\n\n.footer__location[_ngcontent-%COMP%] {\n  font-family: Comfortaa;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 18px;\n  line-height: 20px;\n  color: #575965;\n}\n\n.line[_ngcontent-%COMP%] {\n  display: block;\n  height: 1px;\n  width: 100%;\n  background: rgba(87, 89, 101, 0.35);\n  margin-top: 28px;\n  margin-bottom: 18px;\n}\n\n.copyright[_ngcontent-%COMP%] {\n  font-family: Comfortaa;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 18px;\n  line-height: 20px;\n  color: #575965;\n  margin: 0 auto;\n  text-align: center;\n  padding-bottom: 18px;\n}\n\n.menu[_ngcontent-%COMP%] {\n  position: absolute;\n  display: inline-block;\n  list-style: none;\n  right: 0;\n  top: 0;\n  color: #575965;\n  padding: 16px;\n  text-decoration: none;\n  font-size: 22px;\n}\n\n.menu[_ngcontent-%COMP%]   .rotate[_ngcontent-%COMP%] {\n  transition: 0.7s;\n}\n\n.menu[_ngcontent-%COMP%]   .rotate[_ngcontent-%COMP%]:hover {\n  transform: rotate(90deg) translateZ(0);\n  transition: 0.7s;\n}\n\n.literaturemenu[_ngcontent-%COMP%] {\n  color: #F4F4F4;\n}\n\n@media screen and (max-width: 1250px) {\n  .main__projectname[_ngcontent-%COMP%] {\n    font-size: 35px;\n    width: 1046px;\n  }\n\n  .container[_ngcontent-%COMP%] {\n    max-width: 1000px;\n  }\n}\n\n@media screen and (max-width: 1105px) {\n  .main__projectname[_ngcontent-%COMP%] {\n    font-size: 28px;\n    width: 850px;\n  }\n\n  .container[_ngcontent-%COMP%] {\n    max-width: 800px;\n  }\n\n  .header__text[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n\n@media screen and (max-width: 908px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 750px;\n  }\n\n  .header__text[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n\n  .main__projectname[_ngcontent-%COMP%] {\n    font-size: 18px;\n    width: 556px;\n    margin: 0 auto;\n  }\n}\n\n@media screen and (max-width: 780px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 680px;\n  }\n\n  .main__persons[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n  }\n  .main__character[_ngcontent-%COMP%] {\n    margin-bottom: 24px;\n  }\n\n  .footer[_ngcontent-%COMP%] {\n    position: relative;\n  }\n}\n\n@media screen and (max-width: 695px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 600px;\n  }\n}\n\n@media screen and (max-width: 640px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 550px;\n  }\n}\n\n@media screen and (max-width: 585px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 500px;\n  }\n\n  .main__projectname[_ngcontent-%COMP%] {\n    font-size: 16px;\n    width: 484px;\n    margin: 0 auto;\n  }\n\n  .footer__information[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n\n  .footer__socials[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n\n  .footer__link[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n\n  .footer__location[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGhvdG9zL0M6XFxHaXRIdWJcXGxpYnJhcnkvc3JjXFxhcHBcXHBob3Rvc1xccGhvdG9zLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9waG90b3MvcGhvdG9zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtFQUNBLGlDQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FER0E7RUFDRSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7QUNBRjs7QURHQTtFQUNFLHVFQUFBO0VBQ0EsZUFBQTtBQ0FGOztBREVFO0VBQ0UscUJBQUE7QUNBSjs7QURHRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQ0RKOztBRElFO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUNGSjs7QURLRTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ0hKOztBRE9BO0VBQ0UsZUFBQTtBQ0pGOztBRFNFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FDUEo7O0FEVUU7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7QUNSSjs7QURXRTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNUSjs7QURZRTtFQUNFLGVBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQ1ZKOztBRGNFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNaSjs7QURlRTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtBQ2JKOztBRGdCRTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQ2RKOztBRGlCRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQ2ZKOztBRGtCRTtFQUNFLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FDaEJKOztBRG1CRTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQ2pCSjs7QURxQkU7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7QUNuQko7O0FEc0JFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQkFBQTtBQ3BCSjs7QUR5QkE7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0FDdEJGOztBRHdCRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FDdEJKOztBRHlCRTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDdkJKOztBRDBCRTtFQUNFLGlCQUFBO0FDeEJKOztBRDJCRTtFQUNFLG9CQUFBO0FDekJKOztBRDJCSTtFQUNFLGlCQUFBO0FDekJOOztBRDZCRTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtBQzNCSjs7QUQ4QkU7RUFDRSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDNUJKOztBRCtCRTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtBQzdCSjs7QURnQ0U7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDOUJKOztBRG1DQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG1DQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ2hDRjs7QURtQ0E7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUNoQ0Y7O0FEbUNBO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQ2hDRjs7QURrQ0U7RUFDRSxnQkFBQTtBQ2hDSjs7QURpQ0k7RUFDRSxzQ0FBQTtFQUNBLGdCQUFBO0FDL0JOOztBRG9DQTtFQUNFLGNBQUE7QUNqQ0Y7O0FEb0NBO0VBQ0U7SUFDRSxlQUFBO0lBQ0EsYUFBQTtFQ2pDRjs7RURvQ0E7SUFDRSxpQkFBQTtFQ2pDRjtBQUNGOztBRHVDQTtFQUNFO0lBQ0UsZUFBQTtJQUNBLFlBQUE7RUNyQ0Y7O0VEdUNBO0lBQ0UsZ0JBQUE7RUNwQ0Y7O0VEdUNBO0lBQ0UsZUFBQTtFQ3BDRjtBQUNGOztBRHdDQTtFQUNFO0lBQ0UsZ0JBQUE7RUN0Q0Y7O0VEeUNBO0lBQ0UsZUFBQTtFQ3RDRjs7RUR5Q0E7SUFDRSxlQUFBO0lBQ0EsWUFBQTtJQUNBLGNBQUE7RUN0Q0Y7QUFDRjs7QUQwQ0E7RUFDRTtJQUNFLGdCQUFBO0VDeENGOztFRDJDRTtJQUNFLHNCQUFBO0lBQ0EsbUJBQUE7RUN4Q0o7RUQyQ0U7SUFDRSxtQkFBQTtFQ3pDSjs7RUQ2Q0E7SUFDRSxrQkFBQTtFQzFDRjtBQUNGOztBRDZDQTtFQUNFO0lBQ0UsZ0JBQUE7RUMzQ0Y7QUFDRjs7QURnREE7RUFFRTtJQUNFLGdCQUFBO0VDL0NGO0FBQ0Y7O0FEbURBO0VBQ0U7SUFDRSxnQkFBQTtFQ2pERjs7RURvREE7SUFDRSxlQUFBO0lBQ0EsWUFBQTtJQUNBLGNBQUE7RUNqREY7O0VEb0RBO0lBQ0UsZUFBQTtFQ2pERjs7RURvREE7SUFDRSxlQUFBO0VDakRGOztFRG9EQTtJQUNFLGVBQUE7RUNqREY7O0VEb0RBO0lBQ0UsZUFBQTtFQ2pERjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGhvdG9zL3Bob3Rvcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIip7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBmb250LWZhbWlseTogJ0NvbWZvcnRhYScsIGN1cnNpdmU7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIG1heC13aWR0aDogMTIwMHB4O1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuXHJcbmJvZHl7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uaGVhZGVye1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNTguMTFkZWcsICMwMTRCODAgMzQuMzQlLCAjNDg5MkZGIDEwMy4xNSUpO1xyXG4gIHBhZGRpbmc6IDE1cHggMDtcclxuXHJcbiAgJl9fbG9nb2xpbmt7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG5cclxuICAmX19jb250ZW50e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAmX19sb2dve1xyXG4gICAgd2lkdGg6IDEwN3B4O1xyXG4gICAgaGVpZ2h0OiA3MHB4O1xyXG4gIH1cclxuXHJcbiAgJl9fdGV4dHtcclxuICAgIGZvbnQtZmFtaWx5OiBDb21mb3J0YWE7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDI4cHg7XHJcbiAgfVxyXG59XHJcblxyXG4ubWFpbntcclxuICBwYWRkaW5nOiA2NHB4IDA7XHJcblxyXG4gICZfX3RpdGxle1xyXG4gIH1cclxuXHJcbiAgJl9fYXJyb3d7XHJcbiAgICBmb250LXNpemU6IDY0cHg7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gIH1cclxuXHJcbiAgJl9fY29udGVudHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgfVxyXG5cclxuICAmX190ZXh0Y29udGVudHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjRweDtcclxuICB9XHJcblxyXG4gICZfX3RpdGxlbmFtZXtcclxuICAgIHBhZGRpbmc6IDQ0cHggMDtcclxuICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2FOZXVlQ3lyO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGZvbnQtc2l6ZTogNjRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA2M3B4O1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICB9XHJcblxyXG5cclxuICAmX19hbGxzZWN0aW9uc3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBjb2xvcjogIzU3NTk2NTtcclxuICB9XHJcblxyXG4gICZfX3NlY3Rpb25saW5re1xyXG4gICAgY29sb3I6ICM1NzU5NjU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG5cclxuICAmX19ib29re1xyXG4gICAgd2lkdGg6IDE4MHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuXHJcbiAgJl9fYm9va2ltZ3tcclxuICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNHB4O1xyXG4gIH1cclxuXHJcbiAgJl9fYm9va25hbWV7XHJcbiAgICBmb250LWZhbWlseTogSGVsdmV0aWNhTmV1ZUN5cjtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzU3NTk2NTtcclxuICAgIHBhZGRpbmctYm90dG9tOiA0NHB4O1xyXG4gIH1cclxuXHJcbiAgJl9fYm9va2Rvd25sb2Fke1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRDVENUQ1O1xyXG4gICAgY29sb3I6ICM1NzU5NjU7XHJcbiAgICB3aWR0aDogMTgwcHg7XHJcbiAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gICAgZm9udC1zaXplOiA0NXB4O1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zaXRpb246IDAuN3M7XHJcblxyXG4gIH1cclxuXHJcbiAgJl9fYm9va2Rvd25sb2FkOmhvdmVye1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG4gICAgdHJhbnNpdGlvbjogMC43cztcclxuICB9XHJcblxyXG4gICZfX25ld2Jvb2t7XHJcbiAgICB3aWR0aDogMTgwcHg7XHJcbiAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gICAgY29sb3I6ICM5Njk3OUY7XHJcbiAgICBmb250LXNpemU6IDUycHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogI0Y0RjRGNDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAycHggNHB4ICNDRkQ4REM7XHJcblxyXG4gIH1cclxufVxyXG5cclxuLmZvb3RlcntcclxuICBiYWNrZ3JvdW5kOiAjRjRGNEY0O1xyXG4gIHBhZGRpbmctdG9wOiAzNnB4O1xyXG5cclxuICAmX19ibG9ja3N7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gICZfX2NvbnRhY3Rze1xyXG4gICAgZm9udC1mYW1pbHk6IENvbWZvcnRhYTtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgY29sb3I6ICM1NzU5NjU7XHJcbiAgfVxyXG5cclxuICAmX19ib2xke1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG5cclxuICAmX19pbmZvcm1hdGlvbntcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNHB4O1xyXG5cclxuICAgIDpsYXN0LWNoaWxke1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICZfX3NvY2lhbHN7XHJcbiAgICBmb250LWZhbWlseTogQ29tZm9ydGFhO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgIGNvbG9yOiAjNTc1OTY1O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE0cHg7XHJcbiAgfVxyXG5cclxuICAmX19saW5re1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6ICMzQjU5OTg7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgfVxyXG5cclxuICAmX19saWJyYXJ5bGlua3tcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiAjNTc1OTY1O1xyXG4gIH1cclxuXHJcbiAgJl9fbG9jYXRpb257XHJcbiAgICBmb250LWZhbWlseTogQ29tZm9ydGFhO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgIGNvbG9yOiAjNTc1OTY1O1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbi5saW5le1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGhlaWdodDogMXB4O1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgYmFja2dyb3VuZDogcmdiYSg4NywgODksIDEwMSwgMC4zNSk7XHJcbiAgbWFyZ2luLXRvcDogMjhweDtcclxuICBtYXJnaW4tYm90dG9tOiAxOHB4O1xyXG59XHJcblxyXG4uY29weXJpZ2h0e1xyXG4gIGZvbnQtZmFtaWx5OiBDb21mb3J0YWE7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBsaW5lLWhlaWdodDogMjBweDtcclxuICBjb2xvcjogIzU3NTk2NTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZy1ib3R0b206IDE4cHg7XHJcbn1cclxuXHJcbi5tZW51e1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICByaWdodDogMDtcclxuICB0b3A6IDA7XHJcbiAgY29sb3I6ICM1NzU5NjU7XHJcbiAgcGFkZGluZzogMTZweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG5cclxuICAucm90YXRle1xyXG4gICAgdHJhbnNpdGlvbjogMC43cztcclxuICAgICY6aG92ZXIge1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZykgdHJhbnNsYXRlWigwKTtcclxuICAgICAgdHJhbnNpdGlvbjogMC43cztcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5saXRlcmF0dXJlbWVudXtcclxuICBjb2xvcjogI0Y0RjRGNDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMjUwcHgpe1xyXG4gIC5tYWluX19wcm9qZWN0bmFtZXtcclxuICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgIHdpZHRoOiAxMDQ2cHg7XHJcbiAgfVxyXG5cclxuICAuY29udGFpbmVye1xyXG4gICAgbWF4LXdpZHRoOiAxMDAwcHg7XHJcbiAgfVxyXG5cclxuXHJcbn1cclxuXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjExMDVweCl7XHJcbiAgLm1haW5fX3Byb2plY3RuYW1le1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgd2lkdGg6IDg1MHB4O1xyXG4gIH1cclxuICAuY29udGFpbmVye1xyXG4gICAgbWF4LXdpZHRoOiA4MDBweDtcclxuICB9XHJcblxyXG4gIC5oZWFkZXJfX3RleHR7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo5MDhweCl7XHJcbiAgLmNvbnRhaW5lcntcclxuICAgIG1heC13aWR0aDogNzUwcHg7XHJcbiAgfVxyXG5cclxuICAuaGVhZGVyX190ZXh0e1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxuXHJcbiAgLm1haW5fX3Byb2plY3RuYW1le1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgd2lkdGg6IDU1NnB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgfVxyXG5cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo3ODBweCl7XHJcbiAgLmNvbnRhaW5lcntcclxuICAgIG1heC13aWR0aDogNjgwcHg7XHJcbiAgfVxyXG4gIC5tYWlue1xyXG4gICAgJl9fcGVyc29uc3tcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAmX19jaGFyYWN0ZXJ7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuZm9vdGVye1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo2OTVweCl7XHJcbiAgLmNvbnRhaW5lcntcclxuICAgIG1heC13aWR0aDogNjAwcHg7XHJcbiAgfVxyXG5cclxuXHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjQwcHgpIHtcclxuXHJcbiAgLmNvbnRhaW5lcntcclxuICAgIG1heC13aWR0aDogNTUwcHg7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo1ODVweCkge1xyXG4gIC5jb250YWluZXJ7XHJcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gIH1cclxuXHJcbiAgLm1haW5fX3Byb2plY3RuYW1le1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgd2lkdGg6IDQ4NHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgfVxyXG5cclxuICAuZm9vdGVyX19pbmZvcm1hdGlvbntcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcblxyXG4gIC5mb290ZXJfX3NvY2lhbHN7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgfVxyXG5cclxuICAuZm9vdGVyX19saW5re1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxuXHJcbiAgLmZvb3Rlcl9fbG9jYXRpb257XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgfVxyXG5cclxufVxyXG4iLCIqIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmb250LWZhbWlseTogXCJDb21mb3J0YWFcIiwgY3Vyc2l2ZTtcbn1cblxuLmNvbnRhaW5lciB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uaGVhZGVyIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE1OC4xMWRlZywgIzAxNEI4MCAzNC4zNCUsICM0ODkyRkYgMTAzLjE1JSk7XG4gIHBhZGRpbmc6IDE1cHggMDtcbn1cbi5oZWFkZXJfX2xvZ29saW5rIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLmhlYWRlcl9fY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uaGVhZGVyX19sb2dvIHtcbiAgd2lkdGg6IDEwN3B4O1xuICBoZWlnaHQ6IDcwcHg7XG59XG4uaGVhZGVyX190ZXh0IHtcbiAgZm9udC1mYW1pbHk6IENvbWZvcnRhYTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIHBhZGRpbmctbGVmdDogMjhweDtcbn1cblxuLm1haW4ge1xuICBwYWRkaW5nOiA2NHB4IDA7XG59XG4ubWFpbl9fYXJyb3cge1xuICBmb250LXNpemU6IDY0cHg7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5tYWluX19jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLm1haW5fX3RleHRjb250ZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xufVxuLm1haW5fX3RpdGxlbmFtZSB7XG4gIHBhZGRpbmc6IDQ0cHggMDtcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYU5ldWVDeXI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zaXplOiA2NHB4O1xuICBsaW5lLWhlaWdodDogNjNweDtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLm1haW5fX2FsbHNlY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiAjNTc1OTY1O1xufVxuLm1haW5fX3NlY3Rpb25saW5rIHtcbiAgY29sb3I6ICM1NzU5NjU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5tYWluX19ib29rIHtcbiAgd2lkdGg6IDE4MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubWFpbl9fYm9va2ltZyB7XG4gIGhlaWdodDogMjUwcHg7XG4gIG1hcmdpbi1ib3R0b206IDE0cHg7XG59XG4ubWFpbl9fYm9va25hbWUge1xuICBmb250LWZhbWlseTogSGVsdmV0aWNhTmV1ZUN5cjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzU3NTk2NTtcbiAgcGFkZGluZy1ib3R0b206IDQ0cHg7XG59XG4ubWFpbl9fYm9va2Rvd25sb2FkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kOiAjRDVENUQ1O1xuICBjb2xvcjogIzU3NTk2NTtcbiAgd2lkdGg6IDE4MHB4O1xuICBoZWlnaHQ6IDI1MHB4O1xuICBmb250LXNpemU6IDQ1cHg7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IDAuN3M7XG59XG4ubWFpbl9fYm9va2Rvd25sb2FkOmhvdmVyIHtcbiAgb3BhY2l0eTogMC44O1xuICB0cmFuc2l0aW9uOiAwLjdzO1xufVxuLm1haW5fX25ld2Jvb2sge1xuICB3aWR0aDogMTgwcHg7XG4gIGhlaWdodDogMjUwcHg7XG4gIGNvbG9yOiAjOTY5NzlGO1xuICBmb250LXNpemU6IDUycHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjRjRGNEY0O1xuICBib3gtc2hhZG93OiAwcHggMnB4IDRweCAjQ0ZEOERDO1xufVxuXG4uZm9vdGVyIHtcbiAgYmFja2dyb3VuZDogI0Y0RjRGNDtcbiAgcGFkZGluZy10b3A6IDM2cHg7XG59XG4uZm9vdGVyX19ibG9ja3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uZm9vdGVyX19jb250YWN0cyB7XG4gIGZvbnQtZmFtaWx5OiBDb21mb3J0YWE7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgY29sb3I6ICM1NzU5NjU7XG59XG4uZm9vdGVyX19ib2xkIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uZm9vdGVyX19pbmZvcm1hdGlvbiB7XG4gIHBhZGRpbmctYm90dG9tOiAxNHB4O1xufVxuLmZvb3Rlcl9faW5mb3JtYXRpb24gOmxhc3QtY2hpbGQge1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbn1cbi5mb290ZXJfX3NvY2lhbHMge1xuICBmb250LWZhbWlseTogQ29tZm9ydGFhO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBjb2xvcjogIzU3NTk2NTtcbiAgcGFkZGluZy1ib3R0b206IDE0cHg7XG59XG4uZm9vdGVyX19saW5rIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzNCNTk5ODtcbiAgZm9udC1zaXplOiAyMnB4O1xufVxuLmZvb3Rlcl9fbGlicmFyeWxpbmsge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjNTc1OTY1O1xufVxuLmZvb3Rlcl9fbG9jYXRpb24ge1xuICBmb250LWZhbWlseTogQ29tZm9ydGFhO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBjb2xvcjogIzU3NTk2NTtcbn1cblxuLmxpbmUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiAxcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDg3LCA4OSwgMTAxLCAwLjM1KTtcbiAgbWFyZ2luLXRvcDogMjhweDtcbiAgbWFyZ2luLWJvdHRvbTogMThweDtcbn1cblxuLmNvcHlyaWdodCB7XG4gIGZvbnQtZmFtaWx5OiBDb21mb3J0YWE7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGNvbG9yOiAjNTc1OTY1O1xuICBtYXJnaW46IDAgYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLWJvdHRvbTogMThweDtcbn1cblxuLm1lbnUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgY29sb3I6ICM1NzU5NjU7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC1zaXplOiAyMnB4O1xufVxuLm1lbnUgLnJvdGF0ZSB7XG4gIHRyYW5zaXRpb246IDAuN3M7XG59XG4ubWVudSAucm90YXRlOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpIHRyYW5zbGF0ZVooMCk7XG4gIHRyYW5zaXRpb246IDAuN3M7XG59XG5cbi5saXRlcmF0dXJlbWVudSB7XG4gIGNvbG9yOiAjRjRGNEY0O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjUwcHgpIHtcbiAgLm1haW5fX3Byb2plY3RuYW1lIHtcbiAgICBmb250LXNpemU6IDM1cHg7XG4gICAgd2lkdGg6IDEwNDZweDtcbiAgfVxuXG4gIC5jb250YWluZXIge1xuICAgIG1heC13aWR0aDogMTAwMHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTA1cHgpIHtcbiAgLm1haW5fX3Byb2plY3RuYW1lIHtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gICAgd2lkdGg6IDg1MHB4O1xuICB9XG5cbiAgLmNvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiA4MDBweDtcbiAgfVxuXG4gIC5oZWFkZXJfX3RleHQge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTA4cHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiA3NTBweDtcbiAgfVxuXG4gIC5oZWFkZXJfX3RleHQge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxuXG4gIC5tYWluX19wcm9qZWN0bmFtZSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIHdpZHRoOiA1NTZweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzgwcHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiA2ODBweDtcbiAgfVxuXG4gIC5tYWluX19wZXJzb25zIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgLm1haW5fX2NoYXJhY3RlciB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgfVxuXG4gIC5mb290ZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjk1cHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjQwcHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiA1NTBweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTg1cHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgfVxuXG4gIC5tYWluX19wcm9qZWN0bmFtZSB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIHdpZHRoOiA0ODRweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxuXG4gIC5mb290ZXJfX2luZm9ybWF0aW9uIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cblxuICAuZm9vdGVyX19zb2NpYWxzIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cblxuICAuZm9vdGVyX19saW5rIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cblxuICAuZm9vdGVyX19sb2NhdGlvbiB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PhotosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-photos',
          templateUrl: './photos.component.html',
          styleUrls: ['./photos.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _services_data_getter_service__WEBPACK_IMPORTED_MODULE_5__["DataGetterService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/section-author/section-author.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/section-author/section-author.component.ts ***!
    \************************************************************/

  /*! exports provided: SectionAuthorComponent */

  /***/
  function srcAppSectionAuthorSectionAuthorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SectionAuthorComponent", function () {
      return SectionAuthorComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_data_getter_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/data-getter.service */
    "./src/app/services/data-getter.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return ["/author"];
    };

    var SectionAuthorComponent = /*#__PURE__*/function () {
      function SectionAuthorComponent(dataGetterService) {
        _classCallCheck(this, SectionAuthorComponent);

        this.dataGetterService = dataGetterService;
      }

      _createClass(SectionAuthorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this26 = this;

          this.dataGetterService.GetImgURL(this.author.imgURI).subscribe(function (url) {
            return _this26.authorImgURL = url;
          }); // this.author.imgURLObservable.subscribe(url => this.authorImgURL = url );
        }
      }]);

      return SectionAuthorComponent;
    }();

    SectionAuthorComponent.ɵfac = function SectionAuthorComponent_Factory(t) {
      return new (t || SectionAuthorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_getter_service__WEBPACK_IMPORTED_MODULE_1__["DataGetterService"]));
    };

    SectionAuthorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SectionAuthorComponent,
      selectors: [["app-section-author"]],
      inputs: {
        author: "author"
      },
      decls: 6,
      vars: 6,
      consts: [[1, "main__character", 3, "routerLink", "queryParams"], [1, "main__characterimg"], ["alt", "person", 1, "main__img", 3, "src"], [1, "main__characterinfo"], [1, "main__personame", 3, "innerHTML"], [1, "main__personstatus", 3, "innerHTML"]],
      template: function SectionAuthorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "p", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0))("queryParams", ctx.author);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.authorImgURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.author.name, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.author.status, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]],
      styles: ["*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: \"Comfortaa\", cursive;\n}\n\n.container[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  max-width: 1200px;\n  height: 100%;\n}\n\nbody[_ngcontent-%COMP%] {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.main[_ngcontent-%COMP%] {\n  padding: 64px 0;\n}\n\n.main__arrow[_ngcontent-%COMP%] {\n  font-size: 64px;\n  color: #FFFFFF;\n  margin: 0 auto;\n}\n\n.main__textcontent[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 24px;\n}\n\n.main__titlename[_ngcontent-%COMP%] {\n  padding: 44px 0;\n  font-family: HelveticaNeueCyr;\n  font-style: normal;\n  font-weight: 300;\n  font-size: 64px;\n  line-height: 63px;\n  color: #FFFFFF;\n  margin: 0 auto;\n}\n\n.main__persons[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 24px;\n}\n\n.main__character[_ngcontent-%COMP%] {\n  display: flex;\n  background: #F4F4F4;\n  box-shadow: 0px 2px 4px #CFD8DC;\n  width: 350px;\n}\n\n.main__characterimg[_ngcontent-%COMP%] {\n  width: 175px;\n  height: 200px;\n}\n\n.main__img[_ngcontent-%COMP%] {\n  overflow: hidden;\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.main__characterinfo[_ngcontent-%COMP%] {\n  padding: 72px 14px;\n  color: #96979F;\n  justify-content: left;\n  width: 50%;\n}\n\n.main__personame[_ngcontent-%COMP%] {\n  font-family: Comfortaa;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 22px;\n  line-height: 27px;\n  color: #96979F;\n  padding-bottom: 8px;\n}\n\n.main__personstatus[_ngcontent-%COMP%] {\n  font-family: Comfortaa;\n  font-style: normal;\n  font-weight: 300;\n  font-size: 16px;\n  line-height: 18px;\n  color: #96979F;\n}\n\n.main__sectionlink[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #575965;\n}\n\n.main__newcharacter[_ngcontent-%COMP%] {\n  width: 350px;\n  height: 200px;\n  color: #96979F;\n  font-size: 52px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #F4F4F4;\n  box-shadow: 0px 2px 4px #CFD8DC;\n}\n\n@media screen and (max-width: 1250px) {\n  .main__projectname[_ngcontent-%COMP%] {\n    font-size: 35px;\n    width: 1046px;\n  }\n\n  .container[_ngcontent-%COMP%] {\n    max-width: 1000px;\n  }\n\n  .main__slider[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n  }\n\n  .main__section[_ngcontent-%COMP%] {\n    font-size: 30px;\n  }\n}\n\n@media screen and (max-width: 1105px) {\n  .main__projectname[_ngcontent-%COMP%] {\n    font-size: 28px;\n    width: 850px;\n  }\n}\n\n@media screen and (max-width: 1105px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 800px;\n  }\n\n  .header__text[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n\n  .main__section[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n\n  .main__slider[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .main__infosection[_ngcontent-%COMP%] {\n    margin: 0 auto;\n  }\n}\n\n@media screen and (max-width: 908px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 750px;\n  }\n\n  .header__text[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n\n  .main__projectname[_ngcontent-%COMP%] {\n    font-size: 18px;\n    width: 556px;\n    margin: 0 auto;\n  }\n}\n\n@media screen and (max-width: 780px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 680px;\n  }\n}\n\n@media screen and (max-width: 695px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 600px;\n  }\n}\n\n@media screen and (max-width: 640px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 550px;\n  }\n}\n\n@media screen and (max-width: 585px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 500px;\n  }\n\n  .main__projectname[_ngcontent-%COMP%] {\n    font-size: 16px;\n    width: 484px;\n    margin: 0 auto;\n  }\n\n  .footer__information[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n\n  .footer__socials[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n\n  .footer__link[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n\n  .footer__location[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VjdGlvbi1hdXRob3IvQzpcXEdpdEh1YlxcbGlicmFyeS9zcmNcXGFwcFxcc2VjdGlvbi1hdXRob3JcXHNlY3Rpb24tYXV0aG9yLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zZWN0aW9uLWF1dGhvci9zZWN0aW9uLWF1dGhvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQ0FBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0FDQ0Y7O0FEQ0U7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUNDSjs7QURFRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDQUo7O0FER0U7RUFDRSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUNESjs7QURJRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FDRko7O0FES0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQkFBQTtFQUNBLFlBQUE7QUNISjs7QURNRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FDSko7O0FET0U7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQ0xKOztBRFFFO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxVQUFBO0FDTko7O0FEU0U7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUNQSjs7QURVRTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNSSjs7QURXRTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtBQ1RKOztBRFlFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQkFBQTtBQ1ZKOztBRGNBO0VBQ0U7SUFDRSxlQUFBO0lBQ0EsYUFBQTtFQ1hGOztFRGNBO0lBQ0UsaUJBQUE7RUNYRjs7RURjQTtJQUNFLFdBQUE7SUFDQSxZQUFBO0VDWEY7O0VEY0E7SUFDRSxlQUFBO0VDWEY7QUFDRjs7QURlQTtFQUNFO0lBQ0UsZUFBQTtJQUNBLFlBQUE7RUNiRjtBQUNGOztBRGdCQTtFQUNFO0lBQ0UsZ0JBQUE7RUNkRjs7RURpQkE7SUFDRSxlQUFBO0VDZEY7O0VEaUJBO0lBQ0UsZUFBQTtFQ2RGOztFRGlCQTtJQUNFLGFBQUE7RUNkRjs7RURpQkE7SUFDRSxjQUFBO0VDZEY7QUFDRjs7QURpQkE7RUFDRTtJQUNFLGdCQUFBO0VDZkY7O0VEa0JBO0lBQ0UsZUFBQTtFQ2ZGOztFRGtCQTtJQUNFLGVBQUE7SUFDQSxZQUFBO0lBQ0EsY0FBQTtFQ2ZGO0FBQ0Y7O0FEbUJBO0VBQ0U7SUFDRSxnQkFBQTtFQ2pCRjtBQUNGOztBRG9CQTtFQUNFO0lBQ0UsZ0JBQUE7RUNsQkY7QUFDRjs7QURxQkE7RUFFRTtJQUNFLGdCQUFBO0VDcEJGO0FBQ0Y7O0FEd0JBO0VBQ0U7SUFDRSxnQkFBQTtFQ3RCRjs7RUR5QkE7SUFDRSxlQUFBO0lBQ0EsWUFBQTtJQUNBLGNBQUE7RUN0QkY7O0VEeUJBO0lBQ0UsZUFBQTtFQ3RCRjs7RUR5QkE7SUFDRSxlQUFBO0VDdEJGOztFRHlCQTtJQUNFLGVBQUE7RUN0QkY7O0VEeUJBO0lBQ0UsZUFBQTtFQ3RCRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc2VjdGlvbi1hdXRob3Ivc2VjdGlvbi1hdXRob3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqe1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgZm9udC1mYW1pbHk6ICdDb21mb3J0YWEnLCBjdXJzaXZlO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBtYXgtd2lkdGg6IDEyMDBweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbmJvZHl7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4ubWFpbntcclxuICBwYWRkaW5nOiA2NHB4IDA7XHJcblxyXG4gICZfX2Fycm93e1xyXG4gICAgZm9udC1zaXplOiA2NHB4O1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICB9XHJcblxyXG4gICZfX3RleHRjb250ZW50e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG4gIH1cclxuXHJcbiAgJl9fdGl0bGVuYW1le1xyXG4gICAgcGFkZGluZzogNDRweCAwO1xyXG4gICAgZm9udC1mYW1pbHk6IEhlbHZldGljYU5ldWVDeXI7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgZm9udC1zaXplOiA2NHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDYzcHg7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gIH1cclxuXHJcbiAgJl9fcGVyc29uc3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBtYXJnaW4tYm90dG9tOjI0cHg7XHJcbiAgfVxyXG5cclxuICAmX19jaGFyYWN0ZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYmFja2dyb3VuZDogI0Y0RjRGNDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAycHggNHB4ICNDRkQ4REM7XHJcbiAgICB3aWR0aDogMzUwcHg7XHJcbiAgfVxyXG5cclxuICAmX19jaGFyYWN0ZXJpbWd7XHJcbiAgICB3aWR0aDogMTc1cHg7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gIH1cclxuXHJcbiAgJl9faW1ne1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgfVxyXG5cclxuICAmX19jaGFyYWN0ZXJpbmZve1xyXG4gICAgcGFkZGluZzogNzJweCAxNHB4O1xyXG4gICAgY29sb3I6ICM5Njk3OUY7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XHJcbiAgICB3aWR0aDo1MCU7XHJcbiAgfVxyXG5cclxuICAmX19wZXJzb25hbWV7XHJcbiAgICBmb250LWZhbWlseTogQ29tZm9ydGFhO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjdweDtcclxuICAgIGNvbG9yOiAjOTY5NzlGO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDhweDtcclxuICB9XHJcblxyXG4gICZfX3BlcnNvbnN0YXR1c3tcclxuICAgIGZvbnQtZmFtaWx5OiBDb21mb3J0YWE7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICBjb2xvcjogIzk2OTc5RjtcclxuICB9XHJcblxyXG4gICZfX3NlY3Rpb25saW5re1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6ICM1NzU5NjU7XHJcbiAgfVxyXG5cclxuICAmX19uZXdjaGFyYWN0ZXJ7XHJcbiAgICB3aWR0aDogMzUwcHg7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgY29sb3I6ICM5Njk3OUY7XHJcbiAgICBmb250LXNpemU6IDUycHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogI0Y0RjRGNDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAycHggNHB4ICNDRkQ4REM7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEyNTBweCl7XHJcbiAgLm1haW5fX3Byb2plY3RuYW1le1xyXG4gICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgd2lkdGg6IDEwNDZweDtcclxuICB9XHJcblxyXG4gIC5jb250YWluZXJ7XHJcbiAgICBtYXgtd2lkdGg6IDEwMDBweDtcclxuICB9XHJcblxyXG4gIC5tYWluX19zbGlkZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5tYWluX19zZWN0aW9ue1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTEwNXB4KXtcclxuICAubWFpbl9fcHJvamVjdG5hbWV7XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICB3aWR0aDogODUwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjExMDVweCl7XHJcbiAgLmNvbnRhaW5lcntcclxuICAgIG1heC13aWR0aDogODAwcHg7XHJcbiAgfVxyXG5cclxuICAuaGVhZGVyX190ZXh0e1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gIH1cclxuXHJcbiAgLm1haW5fX3NlY3Rpb257XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgfVxyXG5cclxuICAubWFpbl9fc2xpZGVye1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIC5tYWluX19pbmZvc2VjdGlvbntcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo5MDhweCl7XHJcbiAgLmNvbnRhaW5lcntcclxuICAgIG1heC13aWR0aDogNzUwcHg7XHJcbiAgfVxyXG5cclxuICAuaGVhZGVyX190ZXh0e1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxuXHJcbiAgLm1haW5fX3Byb2plY3RuYW1le1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgd2lkdGg6IDU1NnB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgfVxyXG5cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo3ODBweCl7XHJcbiAgLmNvbnRhaW5lcntcclxuICAgIG1heC13aWR0aDogNjgwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjY5NXB4KXtcclxuICAuY29udGFpbmVye1xyXG4gICAgbWF4LXdpZHRoOiA2MDBweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjQwcHgpIHtcclxuXHJcbiAgLmNvbnRhaW5lcntcclxuICAgIG1heC13aWR0aDogNTUwcHg7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo1ODVweCkge1xyXG4gIC5jb250YWluZXJ7XHJcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gIH1cclxuXHJcbiAgLm1haW5fX3Byb2plY3RuYW1le1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgd2lkdGg6IDQ4NHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgfVxyXG5cclxuICAuZm9vdGVyX19pbmZvcm1hdGlvbntcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcblxyXG4gIC5mb290ZXJfX3NvY2lhbHN7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgfVxyXG5cclxuICAuZm9vdGVyX19saW5re1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxuXHJcbiAgLmZvb3Rlcl9fbG9jYXRpb257XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgfVxyXG5cclxufVxyXG4iLCIqIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmb250LWZhbWlseTogXCJDb21mb3J0YWFcIiwgY3Vyc2l2ZTtcbn1cblxuLmNvbnRhaW5lciB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4ubWFpbiB7XG4gIHBhZGRpbmc6IDY0cHggMDtcbn1cbi5tYWluX19hcnJvdyB7XG4gIGZvbnQtc2l6ZTogNjRweDtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLm1haW5fX3RleHRjb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbn1cbi5tYWluX190aXRsZW5hbWUge1xuICBwYWRkaW5nOiA0NHB4IDA7XG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2FOZXVlQ3lyO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc2l6ZTogNjRweDtcbiAgbGluZS1oZWlnaHQ6IDYzcHg7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5tYWluX19wZXJzb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xufVxuLm1haW5fX2NoYXJhY3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJhY2tncm91bmQ6ICNGNEY0RjQ7XG4gIGJveC1zaGFkb3c6IDBweCAycHggNHB4ICNDRkQ4REM7XG4gIHdpZHRoOiAzNTBweDtcbn1cbi5tYWluX19jaGFyYWN0ZXJpbWcge1xuICB3aWR0aDogMTc1cHg7XG4gIGhlaWdodDogMjAwcHg7XG59XG4ubWFpbl9faW1nIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG4ubWFpbl9fY2hhcmFjdGVyaW5mbyB7XG4gIHBhZGRpbmc6IDcycHggMTRweDtcbiAgY29sb3I6ICM5Njk3OUY7XG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcbiAgd2lkdGg6IDUwJTtcbn1cbi5tYWluX19wZXJzb25hbWUge1xuICBmb250LWZhbWlseTogQ29tZm9ydGFhO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDIycHg7XG4gIGxpbmUtaGVpZ2h0OiAyN3B4O1xuICBjb2xvcjogIzk2OTc5RjtcbiAgcGFkZGluZy1ib3R0b206IDhweDtcbn1cbi5tYWluX19wZXJzb25zdGF0dXMge1xuICBmb250LWZhbWlseTogQ29tZm9ydGFhO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIGNvbG9yOiAjOTY5NzlGO1xufVxuLm1haW5fX3NlY3Rpb25saW5rIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzU3NTk2NTtcbn1cbi5tYWluX19uZXdjaGFyYWN0ZXIge1xuICB3aWR0aDogMzUwcHg7XG4gIGhlaWdodDogMjAwcHg7XG4gIGNvbG9yOiAjOTY5NzlGO1xuICBmb250LXNpemU6IDUycHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjRjRGNEY0O1xuICBib3gtc2hhZG93OiAwcHggMnB4IDRweCAjQ0ZEOERDO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjUwcHgpIHtcbiAgLm1haW5fX3Byb2plY3RuYW1lIHtcbiAgICBmb250LXNpemU6IDM1cHg7XG4gICAgd2lkdGg6IDEwNDZweDtcbiAgfVxuXG4gIC5jb250YWluZXIge1xuICAgIG1heC13aWR0aDogMTAwMHB4O1xuICB9XG5cbiAgLm1haW5fX3NsaWRlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG5cbiAgLm1haW5fX3NlY3Rpb24ge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTEwNXB4KSB7XG4gIC5tYWluX19wcm9qZWN0bmFtZSB7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICAgIHdpZHRoOiA4NTBweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTEwNXB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIG1heC13aWR0aDogODAwcHg7XG4gIH1cblxuICAuaGVhZGVyX190ZXh0IHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cblxuICAubWFpbl9fc2VjdGlvbiB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG5cbiAgLm1haW5fX3NsaWRlciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5tYWluX19pbmZvc2VjdGlvbiB7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwOHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIG1heC13aWR0aDogNzUwcHg7XG4gIH1cblxuICAuaGVhZGVyX190ZXh0IHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cblxuICAubWFpbl9fcHJvamVjdG5hbWUge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB3aWR0aDogNTU2cHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc4MHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIG1heC13aWR0aDogNjgwcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY5NXB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIG1heC13aWR0aDogNjAwcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0MHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIG1heC13aWR0aDogNTUwcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU4NXB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIG1heC13aWR0aDogNTAwcHg7XG4gIH1cblxuICAubWFpbl9fcHJvamVjdG5hbWUge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB3aWR0aDogNDg0cHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cblxuICAuZm9vdGVyX19pbmZvcm1hdGlvbiB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG5cbiAgLmZvb3Rlcl9fc29jaWFscyB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG5cbiAgLmZvb3Rlcl9fbGluayB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG5cbiAgLmZvb3Rlcl9fbG9jYXRpb24ge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SectionAuthorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-section-author',
          templateUrl: './section-author.component.html',
          styleUrls: ['./section-author.component.scss']
        }]
      }], function () {
        return [{
          type: _services_data_getter_service__WEBPACK_IMPORTED_MODULE_1__["DataGetterService"]
        }];
      }, {
        author: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/section/section.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/section/section.component.ts ***!
    \**********************************************/

  /*! exports provided: SectionComponent */

  /***/
  function srcAppSectionSectionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SectionComponent", function () {
      return SectionComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _models_author__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../models/author */
    "./src/app/models/author.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_data_getter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/data-getter.service */
    "./src/app/services/data-getter.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _section_author_section_author_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../section-author/section-author.component */
    "./src/app/section-author/section-author.component.ts");

    function SectionComponent_app_section_author_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-section-author", 10);
      }

      if (rf & 2) {
        var author_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("author", author_r2);
      }
    }

    function SectionComponent_div_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SectionComponent_div_10_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.addNewAuthor();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0() {
      return ["/home"];
    };

    var SectionComponent = /*#__PURE__*/function () {
      function SectionComponent(activatedRoute, router, dataGetterService) {
        _classCallCheck(this, SectionComponent);

        // activatedRoute.queryParams.subscribe((section: Section) => {
        //  this.section = section; });
        // activatedRoute.snapshot.paramMap.get('id');
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.dataGetterService = dataGetterService;
      }

      _createClass(SectionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this27 = this;

          this.activatedRoute.queryParams.subscribe(function (section) {
            _this27.section = section;
          });
          this.refreshAuthors();
          this.dataGetterService.GetImgURL(this.section.titleBackgroundImgURI).subscribe(function (url) {
            _this27.sectionBackgroundImgURL = url;
          });
        }
      }, {
        key: "refreshAuthors",
        value: function refreshAuthors() {
          var _this28 = this;

          this.dataGetterService.GetAuthors(this.section.id).subscribe(function (authors) {
            _this28.authors = authors;
            console.log(_this28.authors);
          });
        }
      }, {
        key: "addNewAuthor",
        value: function addNewAuthor() {
          var _this29 = this;

          var newAuthor = new _models_author__WEBPACK_IMPORTED_MODULE_1__["Author"]();
          newAuthor.sectionId = this.section.id;
          newAuthor.imgURI = this.dataGetterService.GetDummyAuthorImgURI();
          this.dataGetterService.AddAuthor(this.section.id, newAuthor).subscribe(function (value) {
            _this29.dataGetterService.GetAuthor(_this29.section.id, value.id).subscribe(function (res) {
              _this29.router.navigate(['/edit-author'], {
                queryParams: res
              });
            });
          });
        }
      }]);

      return SectionComponent;
    }();

    SectionComponent.ɵfac = function SectionComponent_Factory(t) {
      return new (t || SectionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_getter_service__WEBPACK_IMPORTED_MODULE_3__["DataGetterService"]));
    };

    SectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SectionComponent,
      selectors: [["app-section"]],
      decls: 11,
      vars: 8,
      consts: [[1, "main"], [1, "container"], [1, "main__title"], [1, "main__textcontent"], ["href", ""], [1, "fas", "fa-arrow-circle-left", "main__arrow", 3, "routerLink"], [1, "main__titlename"], [1, "main__persons"], [3, "author", 4, "ngFor", "ngForOf"], ["class", "main__newcharacter", 3, "click", 4, "ngIf"], [3, "author"], [1, "main__newcharacter", 3, "click"], [1, "fas", "fa-plus-circle"]],
      template: function SectionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SectionComponent_app_section_author_9_Template, 1, 1, "app-section-author", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SectionComponent_div_10_Template, 2, 0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("background-image: url(", ctx.sectionBackgroundImgURL, ");");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.section.title, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.authors);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataGetterService.userAuthenticated());
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _section_author_section_author_component__WEBPACK_IMPORTED_MODULE_5__["SectionAuthorComponent"]],
      styles: ["*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: \"Comfortaa\", cursive;\n}\n\n.container[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  max-width: 1200px;\n  height: 100%;\n}\n\nbody[_ngcontent-%COMP%] {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.main[_ngcontent-%COMP%] {\n  padding: 64px 0;\n}\n\n.main__arrow[_ngcontent-%COMP%] {\n  position: absolute;\n  font-size: 64px;\n  color: #FFFFFF;\n  top: 45px;\n  left: 34px;\n}\n\n.main__textcontent[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  margin-bottom: 24px;\n}\n\n.main__titlename[_ngcontent-%COMP%] {\n  padding: 44px 0;\n  font-family: HelveticaNeueCyr;\n  font-style: normal;\n  font-weight: 300;\n  font-size: 64px;\n  line-height: 63px;\n  color: #FFFFFF;\n  margin: 0 auto;\n}\n\n.main__persons[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 24px;\n}\n\n.main__character[_ngcontent-%COMP%] {\n  display: flex;\n  background: #F4F4F4;\n  box-shadow: 0px 2px 4px #CFD8DC;\n  width: 350px;\n}\n\n.main__characterimg[_ngcontent-%COMP%] {\n  width: 175px;\n  height: 200px;\n}\n\n.main__img[_ngcontent-%COMP%] {\n  overflow: hidden;\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.main__characterinfo[_ngcontent-%COMP%] {\n  padding: 72px 14px;\n  color: #96979F;\n  justify-content: left;\n  width: 50%;\n}\n\n.main__personame[_ngcontent-%COMP%] {\n  font-family: Comfortaa;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 22px;\n  line-height: 27px;\n  color: #96979F;\n  padding-bottom: 8px;\n}\n\n.main__personstatus[_ngcontent-%COMP%] {\n  font-family: Comfortaa;\n  font-style: normal;\n  font-weight: 300;\n  font-size: 16px;\n  line-height: 18px;\n  color: #96979F;\n}\n\n.main__sectionlink[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #575965;\n}\n\n.main__newcharacter[_ngcontent-%COMP%] {\n  width: 350px;\n  height: 200px;\n  color: #96979F;\n  font-size: 52px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #F4F4F4;\n  box-shadow: 0px 2px 4px #CFD8DC;\n}\n\n@media screen and (max-width: 1250px) {\n  .main__projectname[_ngcontent-%COMP%] {\n    font-size: 35px;\n    width: 1046px;\n  }\n\n  .container[_ngcontent-%COMP%] {\n    max-width: 1000px;\n  }\n\n  .main__slider[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n  }\n\n  .main__section[_ngcontent-%COMP%] {\n    font-size: 30px;\n  }\n}\n\n@media screen and (max-width: 1105px) {\n  .main__projectname[_ngcontent-%COMP%] {\n    font-size: 28px;\n    width: 850px;\n  }\n}\n\n@media screen and (max-width: 1105px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 800px;\n  }\n\n  .header__text[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n\n  .main__section[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n\n  .main__slider[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .main__infosection[_ngcontent-%COMP%] {\n    margin: 0 auto;\n  }\n}\n\n@media screen and (max-width: 908px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 750px;\n  }\n\n  .header__text[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n\n  .main__projectname[_ngcontent-%COMP%] {\n    font-size: 18px;\n    width: 556px;\n    margin: 0 auto;\n  }\n}\n\n@media screen and (max-width: 780px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 680px;\n  }\n}\n\n@media screen and (max-width: 695px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 600px;\n  }\n}\n\n@media screen and (max-width: 640px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 550px;\n  }\n}\n\n@media screen and (max-width: 585px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 500px;\n  }\n\n  .main__projectname[_ngcontent-%COMP%] {\n    font-size: 16px;\n    width: 484px;\n    margin: 0 auto;\n  }\n\n  .footer__information[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n\n  .footer__socials[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n\n  .footer__link[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n\n  .footer__location[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VjdGlvbi9DOlxcR2l0SHViXFxsaWJyYXJ5L3NyY1xcYXBwXFxzZWN0aW9uXFxzZWN0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zZWN0aW9uL3NlY3Rpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUNBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtBQ0NGOztBRENFO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDQ0o7O0FERUU7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDQUo7O0FER0U7RUFDRSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUNESjs7QURJRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FDRko7O0FES0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQkFBQTtFQUNBLFlBQUE7QUNISjs7QURNRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FDSko7O0FET0U7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQ0xKOztBRFFFO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxVQUFBO0FDTko7O0FEU0U7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUNQSjs7QURVRTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNSSjs7QURXRTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtBQ1RKOztBRFlFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQkFBQTtBQ1ZKOztBRGNBO0VBQ0U7SUFDRSxlQUFBO0lBQ0EsYUFBQTtFQ1hGOztFRGNBO0lBQ0UsaUJBQUE7RUNYRjs7RURjQTtJQUNFLFdBQUE7SUFDQSxZQUFBO0VDWEY7O0VEY0E7SUFDRSxlQUFBO0VDWEY7QUFDRjs7QURlQTtFQUNFO0lBQ0UsZUFBQTtJQUNBLFlBQUE7RUNiRjtBQUNGOztBRGdCQTtFQUNFO0lBQ0UsZ0JBQUE7RUNkRjs7RURpQkE7SUFDRSxlQUFBO0VDZEY7O0VEaUJBO0lBQ0UsZUFBQTtFQ2RGOztFRGlCQTtJQUNFLGFBQUE7RUNkRjs7RURpQkE7SUFDRSxjQUFBO0VDZEY7QUFDRjs7QURpQkE7RUFDRTtJQUNFLGdCQUFBO0VDZkY7O0VEa0JBO0lBQ0UsZUFBQTtFQ2ZGOztFRGtCQTtJQUNFLGVBQUE7SUFDQSxZQUFBO0lBQ0EsY0FBQTtFQ2ZGO0FBQ0Y7O0FEbUJBO0VBQ0U7SUFDRSxnQkFBQTtFQ2pCRjtBQUNGOztBRG9CQTtFQUNFO0lBQ0UsZ0JBQUE7RUNsQkY7QUFDRjs7QURxQkE7RUFFRTtJQUNFLGdCQUFBO0VDcEJGO0FBQ0Y7O0FEd0JBO0VBQ0U7SUFDRSxnQkFBQTtFQ3RCRjs7RUR5QkE7SUFDRSxlQUFBO0lBQ0EsWUFBQTtJQUNBLGNBQUE7RUN0QkY7O0VEeUJBO0lBQ0UsZUFBQTtFQ3RCRjs7RUR5QkE7SUFDRSxlQUFBO0VDdEJGOztFRHlCQTtJQUNFLGVBQUE7RUN0QkY7O0VEeUJBO0lBQ0UsZUFBQTtFQ3RCRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc2VjdGlvbi9zZWN0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGZvbnQtZmFtaWx5OiAnQ29tZm9ydGFhJywgY3Vyc2l2ZTtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5ib2R5e1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLm1haW57XHJcbiAgcGFkZGluZzogNjRweCAwO1xyXG5cclxuICAmX19hcnJvd3tcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGZvbnQtc2l6ZTogNjRweDtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgdG9wOiA0NXB4O1xyXG4gICAgbGVmdDogMzRweFxyXG4gIH1cclxuXHJcbiAgJl9fdGV4dGNvbnRlbnR7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcbiAgfVxyXG5cclxuICAmX190aXRsZW5hbWV7XHJcbiAgICBwYWRkaW5nOiA0NHB4IDA7XHJcbiAgICBmb250LWZhbWlseTogSGVsdmV0aWNhTmV1ZUN5cjtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBmb250LXNpemU6IDY0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogNjNweDtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgfVxyXG5cclxuICAmX19wZXJzb25ze1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIG1hcmdpbi1ib3R0b206MjRweDtcclxuICB9XHJcblxyXG4gICZfX2NoYXJhY3RlcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRjRGNEY0O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCA0cHggI0NGRDhEQztcclxuICAgIHdpZHRoOiAzNTBweDtcclxuICB9XHJcblxyXG4gICZfX2NoYXJhY3RlcmltZ3tcclxuICAgIHdpZHRoOiAxNzVweDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgfVxyXG5cclxuICAmX19pbWd7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICB9XHJcblxyXG4gICZfX2NoYXJhY3RlcmluZm97XHJcbiAgICBwYWRkaW5nOiA3MnB4IDE0cHg7XHJcbiAgICBjb2xvcjogIzk2OTc5RjtcclxuICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcclxuICAgIHdpZHRoOjUwJTtcclxuICB9XHJcblxyXG4gICZfX3BlcnNvbmFtZXtcclxuICAgIGZvbnQtZmFtaWx5OiBDb21mb3J0YWE7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyN3B4O1xyXG4gICAgY29sb3I6ICM5Njk3OUY7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xyXG4gIH1cclxuXHJcbiAgJl9fcGVyc29uc3RhdHVze1xyXG4gICAgZm9udC1mYW1pbHk6IENvbWZvcnRhYTtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgIGNvbG9yOiAjOTY5NzlGO1xyXG4gIH1cclxuXHJcbiAgJl9fc2VjdGlvbmxpbmt7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogIzU3NTk2NTtcclxuICB9XHJcblxyXG4gICZfX25ld2NoYXJhY3RlcntcclxuICAgIHdpZHRoOiAzNTBweDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICBjb2xvcjogIzk2OTc5RjtcclxuICAgIGZvbnQtc2l6ZTogNTJweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRjRGNEY0O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCA0cHggI0NGRDhEQztcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTI1MHB4KXtcclxuICAubWFpbl9fcHJvamVjdG5hbWV7XHJcbiAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICB3aWR0aDogMTA0NnB4O1xyXG4gIH1cclxuXHJcbiAgLmNvbnRhaW5lcntcclxuICAgIG1heC13aWR0aDogMTAwMHB4O1xyXG4gIH1cclxuXHJcbiAgLm1haW5fX3NsaWRlcntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLm1haW5fX3NlY3Rpb257XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMTA1cHgpe1xyXG4gIC5tYWluX19wcm9qZWN0bmFtZXtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIHdpZHRoOiA4NTBweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTEwNXB4KXtcclxuICAuY29udGFpbmVye1xyXG4gICAgbWF4LXdpZHRoOiA4MDBweDtcclxuICB9XHJcblxyXG4gIC5oZWFkZXJfX3RleHR7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG5cclxuICAubWFpbl9fc2VjdGlvbntcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICB9XHJcblxyXG4gIC5tYWluX19zbGlkZXJ7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLm1haW5fX2luZm9zZWN0aW9ue1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjkwOHB4KXtcclxuICAuY29udGFpbmVye1xyXG4gICAgbWF4LXdpZHRoOiA3NTBweDtcclxuICB9XHJcblxyXG4gIC5oZWFkZXJfX3RleHR7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgfVxyXG5cclxuICAubWFpbl9fcHJvamVjdG5hbWV7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB3aWR0aDogNTU2cHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICB9XHJcblxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc4MHB4KXtcclxuICAuY29udGFpbmVye1xyXG4gICAgbWF4LXdpZHRoOiA2ODBweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6Njk1cHgpe1xyXG4gIC5jb250YWluZXJ7XHJcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo2NDBweCkge1xyXG5cclxuICAuY29udGFpbmVye1xyXG4gICAgbWF4LXdpZHRoOiA1NTBweDtcclxuICB9XHJcblxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjU4NXB4KSB7XHJcbiAgLmNvbnRhaW5lcntcclxuICAgIG1heC13aWR0aDogNTAwcHg7XHJcbiAgfVxyXG5cclxuICAubWFpbl9fcHJvamVjdG5hbWV7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB3aWR0aDogNDg0cHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICB9XHJcblxyXG4gIC5mb290ZXJfX2luZm9ybWF0aW9ue1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxuXHJcbiAgLmZvb3Rlcl9fc29jaWFsc3tcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcblxyXG4gIC5mb290ZXJfX2xpbmt7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgfVxyXG5cclxuICAuZm9vdGVyX19sb2NhdGlvbntcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcblxyXG59XHJcbiIsIioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZvbnQtZmFtaWx5OiBcIkNvbWZvcnRhYVwiLCBjdXJzaXZlO1xufVxuXG4uY29udGFpbmVyIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1heC13aWR0aDogMTIwMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmJvZHkge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5tYWluIHtcbiAgcGFkZGluZzogNjRweCAwO1xufVxuLm1haW5fX2Fycm93IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmb250LXNpemU6IDY0cHg7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICB0b3A6IDQ1cHg7XG4gIGxlZnQ6IDM0cHg7XG59XG4ubWFpbl9fdGV4dGNvbnRlbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG59XG4ubWFpbl9fdGl0bGVuYW1lIHtcbiAgcGFkZGluZzogNDRweCAwO1xuICBmb250LWZhbWlseTogSGVsdmV0aWNhTmV1ZUN5cjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXNpemU6IDY0cHg7XG4gIGxpbmUtaGVpZ2h0OiA2M3B4O1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4ubWFpbl9fcGVyc29ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbn1cbi5tYWluX19jaGFyYWN0ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBiYWNrZ3JvdW5kOiAjRjRGNEY0O1xuICBib3gtc2hhZG93OiAwcHggMnB4IDRweCAjQ0ZEOERDO1xuICB3aWR0aDogMzUwcHg7XG59XG4ubWFpbl9fY2hhcmFjdGVyaW1nIHtcbiAgd2lkdGg6IDE3NXB4O1xuICBoZWlnaHQ6IDIwMHB4O1xufVxuLm1haW5fX2ltZyB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuLm1haW5fX2NoYXJhY3RlcmluZm8ge1xuICBwYWRkaW5nOiA3MnB4IDE0cHg7XG4gIGNvbG9yOiAjOTY5NzlGO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XG4gIHdpZHRoOiA1MCU7XG59XG4ubWFpbl9fcGVyc29uYW1lIHtcbiAgZm9udC1mYW1pbHk6IENvbWZvcnRhYTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBsaW5lLWhlaWdodDogMjdweDtcbiAgY29sb3I6ICM5Njk3OUY7XG4gIHBhZGRpbmctYm90dG9tOiA4cHg7XG59XG4ubWFpbl9fcGVyc29uc3RhdHVzIHtcbiAgZm9udC1mYW1pbHk6IENvbWZvcnRhYTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICBjb2xvcjogIzk2OTc5Rjtcbn1cbi5tYWluX19zZWN0aW9ubGluayB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICM1NzU5NjU7XG59XG4ubWFpbl9fbmV3Y2hhcmFjdGVyIHtcbiAgd2lkdGg6IDM1MHB4O1xuICBoZWlnaHQ6IDIwMHB4O1xuICBjb2xvcjogIzk2OTc5RjtcbiAgZm9udC1zaXplOiA1MnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogI0Y0RjRGNDtcbiAgYm94LXNoYWRvdzogMHB4IDJweCA0cHggI0NGRDhEQztcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI1MHB4KSB7XG4gIC5tYWluX19wcm9qZWN0bmFtZSB7XG4gICAgZm9udC1zaXplOiAzNXB4O1xuICAgIHdpZHRoOiAxMDQ2cHg7XG4gIH1cblxuICAuY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDEwMDBweDtcbiAgfVxuXG4gIC5tYWluX19zbGlkZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuXG4gIC5tYWluX19zZWN0aW9uIHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExMDVweCkge1xuICAubWFpbl9fcHJvamVjdG5hbWUge1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICB3aWR0aDogODUwcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExMDVweCkge1xuICAuY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xuICB9XG5cbiAgLmhlYWRlcl9fdGV4dCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG5cbiAgLm1haW5fX3NlY3Rpb24ge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxuXG4gIC5tYWluX19zbGlkZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAubWFpbl9faW5mb3NlY3Rpb24ge1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDhweCkge1xuICAuY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDc1MHB4O1xuICB9XG5cbiAgLmhlYWRlcl9fdGV4dCB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG5cbiAgLm1haW5fX3Byb2plY3RuYW1lIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgd2lkdGg6IDU1NnB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3ODBweCkge1xuICAuY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDY4MHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2OTVweCkge1xuICAuY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NDBweCkge1xuICAuY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDU1MHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1ODVweCkge1xuICAuY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICB9XG5cbiAgLm1haW5fX3Byb2plY3RuYW1lIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgd2lkdGg6IDQ4NHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG5cbiAgLmZvb3Rlcl9faW5mb3JtYXRpb24ge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxuXG4gIC5mb290ZXJfX3NvY2lhbHMge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxuXG4gIC5mb290ZXJfX2xpbmsge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxuXG4gIC5mb290ZXJfX2xvY2F0aW9uIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-section',
          templateUrl: './section.component.html',
          styleUrls: ['./section.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _services_data_getter_service__WEBPACK_IMPORTED_MODULE_3__["DataGetterService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/data-getter.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/services/data-getter.service.ts ***!
    \*************************************************/

  /*! exports provided: DataGetterService */

  /***/
  function srcAppServicesDataGetterServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataGetterService", function () {
      return DataGetterService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _models_collection_name_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../models/collection-name.enum */
    "./src/app/models/collection-name.enum.ts");
    /* harmony import */


    var _models_section__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../models/section */
    "./src/app/models/section.ts");
    /* harmony import */


    var _models_author__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../models/author */
    "./src/app/models/author.ts");
    /* harmony import */


    var _models_footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../models/footer */
    "./src/app/models/footer.ts");
    /* harmony import */


    var _models_footer_socialnetwork__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../models/footer-socialnetwork */
    "./src/app/models/footer-socialnetwork.ts");
    /* harmony import */


    var uuid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! uuid */
    "./node_modules/uuid/dist/esm-browser/index.js");
    /* harmony import */


    var _models_storage_file__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../models/storage-file */
    "./src/app/models/storage-file.ts");
    /* harmony import */


    var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/fire/storage */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");

    var DataGetterService = /*#__PURE__*/function () {
      // private username: string;
      // private authenticated: boolean;
      function DataGetterService(angularFireStorage, angularFirestore, angularFireAuth) {
        var _this30 = this;

        _classCallCheck(this, DataGetterService);

        this.angularFireStorage = angularFireStorage;
        this.angularFirestore = angularFirestore;
        this.angularFireAuth = angularFireAuth;
        angularFireAuth.authState.subscribe(function (user) {
          if (user) {
            _this30.user = user;
            localStorage.setItem('user', JSON.stringify(_this30.user));
            console.log(_this30.user);
          } else {
            localStorage.setItem('user', null);
          }
        });
      }

      _createClass(DataGetterService, [{
        key: "GenerateUUID",
        value: function GenerateUUID() {
          return Object(uuid__WEBPACK_IMPORTED_MODULE_8__["v4"])();
        }
      }, {
        key: "GetSections",
        value: function GetSections() {
          return this.angularFirestore.collection(_models_collection_name_enum__WEBPACK_IMPORTED_MODULE_3__["CollectionName"].sections).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (sections) {
            return sections.map(function (section) {
              var id = section.payload.doc.id;
              var title = section.payload.doc.get('title');
              var titleBackgroundImgURI = section.payload.doc.get('titleBackgroundImgURI');
              var newSection = new _models_section__WEBPACK_IMPORTED_MODULE_4__["Section"](id);
              newSection.title = title;
              newSection.titleBackgroundImgURI = titleBackgroundImgURI;
              return newSection;
            });
          }));
        }
      }, {
        key: "GetSection",
        value: function GetSection(sectionId) {
          return this.angularFirestore.collection(_models_collection_name_enum__WEBPACK_IMPORTED_MODULE_3__["CollectionName"].sections).doc(sectionId).get().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (section) {
            var id = section.id;
            var title = section.get('title');
            var titleBackgroundImgURI = section.get('titleBackgroundImgURI');
            var newSection = new _models_section__WEBPACK_IMPORTED_MODULE_4__["Section"](id);
            newSection.title = title;
            newSection.titleBackgroundImgURI = titleBackgroundImgURI;
            return newSection;
          }));
        }
      }, {
        key: "GetFooter",
        value: function GetFooter() {
          return this.angularFirestore.collection(_models_collection_name_enum__WEBPACK_IMPORTED_MODULE_3__["CollectionName"].site).doc('footer').get().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (doc) {
            {
              var footer = new _models_footer__WEBPACK_IMPORTED_MODULE_6__["Footer"]();
              footer.email = doc.get('email');
              footer.phone = doc.get('phone');
              footer.location = doc.get('location');
              return footer;
            }
          }));
        }
      }, {
        key: "SetFooter",
        value: function SetFooter(footer) {
          return this.angularFirestore.collection(_models_collection_name_enum__WEBPACK_IMPORTED_MODULE_3__["CollectionName"].site).doc('footer').set({
            email: footer.email,
            phone: footer.phone,
            location: footer.location
          }).then(function (result) {
            console.log("Footer document written.");
          })["catch"](function (error) {
            console.log("Error writing footer document: ".concat(error));
          });
        }
      }, {
        key: "GetFooterSocialNetworks",
        value: function GetFooterSocialNetworks() {
          return this.angularFirestore.collection(_models_collection_name_enum__WEBPACK_IMPORTED_MODULE_3__["CollectionName"].site).doc('footer').collection(_models_collection_name_enum__WEBPACK_IMPORTED_MODULE_3__["CollectionName"].social_networks).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (socialNetworks) {
            return socialNetworks.map(function (socialNetwork) {
              var newSocialNetwork = new _models_footer_socialnetwork__WEBPACK_IMPORTED_MODULE_7__["FooterSocialnetwork"]();
              newSocialNetwork.icon = socialNetwork.payload.doc.get('icon');
              newSocialNetwork.url = socialNetwork.payload.doc.get('url');
              newSocialNetwork.id = socialNetwork.payload.doc.id;
              return newSocialNetwork;
            });
          }));
        }
      }, {
        key: "SetFooterSocialNetworks",
        value: function SetFooterSocialNetworks(footerSocialnetworks) {
          var _iterator3 = _createForOfIteratorHelper(footerSocialnetworks),
              _step3;

          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var temp = _step3.value;

              if (temp.id !== '') {
                this.DeleteFooterSocialNetwork(temp);
              }
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }

          var _iterator4 = _createForOfIteratorHelper(footerSocialnetworks),
              _step4;

          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var _temp = _step4.value;
              this.angularFirestore.collection(_models_collection_name_enum__WEBPACK_IMPORTED_MODULE_3__["CollectionName"].site).doc('footer').collection(_models_collection_name_enum__WEBPACK_IMPORTED_MODULE_3__["CollectionName"].social_networks).add({
                icon: _temp.icon,
                url: _temp.url
              });
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }
        }
      }, {
        key: "DeleteFooterSocialNetwork",
        value: function DeleteFooterSocialNetwork(footerSocialnetwork) {
          this.angularFirestore.collection(_models_collection_name_enum__WEBPACK_IMPORTED_MODULE_3__["CollectionName"].site).doc('footer').collection(_models_collection_name_enum__WEBPACK_IMPORTED_MODULE_3__["CollectionName"].social_networks).doc(footerSocialnetwork.id)["delete"]();
        }
      }, {
        key: "GetAuthors",
        value: function GetAuthors(sectionId) {
          return this.angularFirestore.collection(_models_collection_name_enum__WEBPACK_IMPORTED_MODULE_3__["CollectionName"].sections).doc(sectionId).collection(_models_collection_name_enum__WEBPACK_IMPORTED_MODULE_3__["CollectionName"].authors).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (authors) {
            return authors.map(function (author) {
              var newAuthor = new _models_author__WEBPACK_IMPORTED_MODULE_5__["Author"]();
              newAuthor.id = author.payload.doc.id;
              newAuthor.sectionId = author.payload.doc.get('sectionId');
              newAuthor.name = author.payload.doc.get('name');
              newAuthor.imgURI = author.payload.doc.get('img');
              newAuthor.status = author.payload.doc.get('status');
              newAuthor.shortInfo = author.payload.doc.get('shortInfo');
              newAuthor.biography = author.payload.doc.get('biography');
              return newAuthor;
            });
          }));
        }
      }, {
        key: "GetAuthor",
        value: function GetAuthor(sectionId, authorId) {
          return this.angularFirestore.collection(_models_collection_name_enum__WEBPACK_IMPORTED_MODULE_3__["CollectionName"].sections).doc(sectionId).collection(_models_collection_name_enum__WEBPACK_IMPORTED_MODULE_3__["CollectionName"].authors).doc(authorId).get().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (author) {
            var newAuthor = new _models_author__WEBPACK_IMPORTED_MODULE_5__["Author"]();
            newAuthor.id = author.id;
            newAuthor.sectionId = author.get('sectionId');
            newAuthor.name = author.get('name');
            newAuthor.imgURI = author.get('img');
            newAuthor.status = author.get('status');
            newAuthor.shortInfo = author.get('shortInfo');
            newAuthor.biography = author.get('biography');
            return newAuthor;
          }));
        }
      }, {
        key: "AddAuthor",
        value: function AddAuthor(sectionId, author) {
          var result = this.angularFirestore.collection(_models_collection_name_enum__WEBPACK_IMPORTED_MODULE_3__["CollectionName"].sections).doc(sectionId).collection(_models_collection_name_enum__WEBPACK_IMPORTED_MODULE_3__["CollectionName"].authors).add({
            sectionId: author.sectionId,
            img: author.imgURI,
            name: author.name,
            shortInfo: author.shortInfo,
            status: author.status,
            biography: author.biography
          });
          result.then(function (ref) {
            return console.log("Author document (".concat(ref.id, ") successfully written."));
          })["catch"](function (error) {
            return console.log("Error creating author document: ".concat(error));
          });
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(result);
        }
      }, {
        key: "SetAuthor",
        value: function SetAuthor(author) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(this.angularFirestore.collection(_models_collection_name_enum__WEBPACK_IMPORTED_MODULE_3__["CollectionName"].sections).doc(author.sectionId).collection(_models_collection_name_enum__WEBPACK_IMPORTED_MODULE_3__["CollectionName"].authors).doc(author.id).set({
            sectionId: author.sectionId,
            img: author.imgURI,
            name: author.name,
            shortInfo: author.shortInfo,
            status: author.status,
            biography: author.biography
          }).then(function (result) {
            console.log("Author document written.");
          })["catch"](function (error) {
            console.log("Error writing author document: ".concat(error));
          }));
        }
      }, {
        key: "DeleteAuthor",
        value: function DeleteAuthor(author) {
          this.angularFireStorage.storage.refFromURL(author.imgURI)["delete"]();
          this.angularFirestore.collection(_models_collection_name_enum__WEBPACK_IMPORTED_MODULE_3__["CollectionName"].sections).doc(author.sectionId).collection(_models_collection_name_enum__WEBPACK_IMPORTED_MODULE_3__["CollectionName"].authors).doc(author.id)["delete"](); // Promise.all([promise, promise])
          // const path = `${CollectionName.sections}/${author.sectionId}/${CollectionName.authors}/${author.id}/`;
          // this.angularFireStorage.storage.ref(`${path}`).delete();
        }
      }, {
        key: "GetAuthorLibraryFiles",
        value: function GetAuthorLibraryFiles(author) {
          return this.angularFirestore.collection(_models_collection_name_enum__WEBPACK_IMPORTED_MODULE_3__["CollectionName"].sections).doc(author.sectionId).collection(_models_collection_name_enum__WEBPACK_IMPORTED_MODULE_3__["CollectionName"].authors).doc(author.id).collection(_models_collection_name_enum__WEBPACK_IMPORTED_MODULE_3__["CollectionName"].library).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (files) {
            return files.map(function (file) {
              var newFile = new _models_storage_file__WEBPACK_IMPORTED_MODULE_9__["StorageFile"]();
              newFile.name = file.payload.doc.get('name');
              newFile.uri = file.payload.doc.get('uri');
              newFile.id = file.payload.doc.id;
              return newFile;
            });
          }));
        }
      }, {
        key: "DeleteAuthorLibraryFile",
        value: function DeleteAuthorLibraryFile(author, file) {
          var _this31 = this;

          this.angularFireStorage.storage.refFromURL(file.uri)["delete"]().then(function (value) {
            console.log("Success remove file (".concat(file.name, ") from firebase storage. Next remove ref uri from firestore."));

            _this31.angularFirestore.collection(_models_collection_name_enum__WEBPACK_IMPORTED_MODULE_3__["CollectionName"].sections).doc(author.sectionId).collection(_models_collection_name_enum__WEBPACK_IMPORTED_MODULE_3__["CollectionName"].authors).doc(author.id).collection(_models_collection_name_enum__WEBPACK_IMPORTED_MODULE_3__["CollectionName"].library).doc(file.id)["delete"]().then(function (value1) {
              return console.log("Success remove ref uri from firestore.");
            })["catch"](function (reason) {
              return console.log('Error on delete ref uri from firestore: ' + reason);
            });
          })["catch"](function (reason) {
            return console.log('Error on delete library file from firebase storage: ' + reason);
          });
        }
      }, {
        key: "SetAuthorLibraryFile",
        value: function SetAuthorLibraryFile(author, file) {
          this.angularFirestore.collection(_models_collection_name_enum__WEBPACK_IMPORTED_MODULE_3__["CollectionName"].sections).doc(author.sectionId).collection(_models_collection_name_enum__WEBPACK_IMPORTED_MODULE_3__["CollectionName"].authors).doc(author.id).collection(_models_collection_name_enum__WEBPACK_IMPORTED_MODULE_3__["CollectionName"].library).add({
            name: file.name,
            uri: file.uri
          });
        }
      }, {
        key: "GetAuthorIndicatorsFiles",
        value: function GetAuthorIndicatorsFiles(author) {
          return this.angularFirestore.collection(_models_collection_name_enum__WEBPACK_IMPORTED_MODULE_3__["CollectionName"].sections).doc(author.sectionId).collection(_models_collection_name_enum__WEBPACK_IMPORTED_MODULE_3__["CollectionName"].authors).doc(author.id).collection(_models_collection_name_enum__WEBPACK_IMPORTED_MODULE_3__["CollectionName"].indicators).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (files) {
            return files.map(function (file) {
              var newFile = new _models_storage_file__WEBPACK_IMPORTED_MODULE_9__["StorageFile"]();
              newFile.name = file.payload.doc.get('name');
              newFile.uri = file.payload.doc.get('uri');
              newFile.id = file.payload.doc.id;
              return newFile;
            });
          }));
        }
      }, {
        key: "DeleteAuthorIndicatorsFile",
        value: function DeleteAuthorIndicatorsFile(author, file) {
          var _this32 = this;

          this.angularFireStorage.storage.refFromURL(file.uri)["delete"]().then(function (value) {
            console.log("Success remove file (".concat(file.name, ") from firebase storage. Next remove ref uri from firestore."));

            _this32.angularFirestore.collection(_models_collection_name_enum__WEBPACK_IMPORTED_MODULE_3__["CollectionName"].sections).doc(author.sectionId).collection(_models_collection_name_enum__WEBPACK_IMPORTED_MODULE_3__["CollectionName"].authors).doc(author.id).collection(_models_collection_name_enum__WEBPACK_IMPORTED_MODULE_3__["CollectionName"].indicators).doc(file.id)["delete"]().then(function (value1) {
              return console.log("Success remove ref uri from firestore.");
            })["catch"](function (reason) {
              return console.log('Error on delete ref uri from firestore: ' + reason);
            });
          })["catch"](function (reason) {
            return console.log('Error on delete library file from firebase storage: ' + reason);
          });
        }
      }, {
        key: "SetAuthorIndicatorsFile",
        value: function SetAuthorIndicatorsFile(author, file) {
          this.angularFirestore.collection(_models_collection_name_enum__WEBPACK_IMPORTED_MODULE_3__["CollectionName"].sections).doc(author.sectionId).collection(_models_collection_name_enum__WEBPACK_IMPORTED_MODULE_3__["CollectionName"].authors).doc(author.id).collection(_models_collection_name_enum__WEBPACK_IMPORTED_MODULE_3__["CollectionName"].indicators).add({
            name: file.name,
            uri: file.uri
          });
        }
      }, {
        key: "GetAuthorPhotosFiles",
        value: function GetAuthorPhotosFiles(author) {
          return this.angularFirestore.collection(_models_collection_name_enum__WEBPACK_IMPORTED_MODULE_3__["CollectionName"].sections).doc(author.sectionId).collection(_models_collection_name_enum__WEBPACK_IMPORTED_MODULE_3__["CollectionName"].authors).doc(author.id).collection(_models_collection_name_enum__WEBPACK_IMPORTED_MODULE_3__["CollectionName"].photos).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (files) {
            return files.map(function (file) {
              var newFile = new _models_storage_file__WEBPACK_IMPORTED_MODULE_9__["StorageFile"]();
              newFile.name = file.payload.doc.get('name');
              newFile.uri = file.payload.doc.get('uri');
              newFile.id = file.payload.doc.id;
              return newFile;
            });
          }));
        }
      }, {
        key: "DeleteAuthorPhotosFile",
        value: function DeleteAuthorPhotosFile(author, file) {
          var _this33 = this;

          this.angularFireStorage.storage.refFromURL(file.uri)["delete"]().then(function (value) {
            console.log("Success remove file (".concat(file.name, ") from firebase storage. Next remove ref uri from firestore."));

            _this33.angularFirestore.collection(_models_collection_name_enum__WEBPACK_IMPORTED_MODULE_3__["CollectionName"].sections).doc(author.sectionId).collection(_models_collection_name_enum__WEBPACK_IMPORTED_MODULE_3__["CollectionName"].authors).doc(author.id).collection(_models_collection_name_enum__WEBPACK_IMPORTED_MODULE_3__["CollectionName"].photos).doc(file.id)["delete"]().then(function (value1) {
              return console.log("Success remove ref uri from firestore.");
            })["catch"](function (reason) {
              return console.log('Error on delete ref uri from firestore: ' + reason);
            });
          })["catch"](function (reason) {
            return console.log('Error on delete library file from firebase storage: ' + reason);
          });
        }
      }, {
        key: "SetAuthorPhotosFile",
        value: function SetAuthorPhotosFile(author, file) {
          this.angularFirestore.collection(_models_collection_name_enum__WEBPACK_IMPORTED_MODULE_3__["CollectionName"].sections).doc(author.sectionId).collection(_models_collection_name_enum__WEBPACK_IMPORTED_MODULE_3__["CollectionName"].authors).doc(author.id).collection(_models_collection_name_enum__WEBPACK_IMPORTED_MODULE_3__["CollectionName"].photos).add({
            name: file.name,
            uri: file.uri
          });
        } // public GetImg(): Observable<any> {
        //  return from(this.angularFireStorage
        //    .storage
        //    .refFromURL('gs://library-5ba4a.appspot.com/authorImg.png')
        //    .getDownloadURL()
        //    .then(url =>  url));
        // }

      }, {
        key: "GetImgURL",
        value: function GetImgURL(googleCloudStorageURI) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(this.angularFireStorage.storage.refFromURL(googleCloudStorageURI).getDownloadURL().then(function (url) {
            return url;
          }));
        }
      }, {
        key: "GetDummyAuthorImgURL",
        value: function GetDummyAuthorImgURL() {
          var dummyAuthorImgURi = this.GetDummyAuthorImgURI();
          return this.GetImgURL(dummyAuthorImgURi);
        }
      }, {
        key: "GetDummyAuthorImgURI",
        value: function GetDummyAuthorImgURI() {
          return 'gs://library-5ba4a.appspot.com/dummyAuthorImg.jpg';
        }
      }, {
        key: "UploadFile",
        value: function UploadFile(path, file) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(this.angularFireStorage.storage.ref().child("".concat(path)).put(file));
        }
      }, {
        key: "GetFileURL",
        value: function GetFileURL(googleCloudStorageURI) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(this.angularFireStorage.storage.refFromURL(googleCloudStorageURI).getDownloadURL().then(function (url) {
            return url;
          }));
        }
      }, {
        key: "checkUser",
        value: function checkUser(username, password) {
          this.angularFireAuth.currentUser.then(function (res) {
            return console.log(res);
          });
          return this.angularFireAuth.signInWithEmailAndPassword(username, password);
        }
      }, {
        key: "signOut",
        value: function signOut() {
          this.angularFireAuth.signOut();
          localStorage.removeItem('user'); // this.authenticated = false;
          // this.username = '';
        } // public setUser(username: string) {
        //  this.username = username;
        //  this.authenticated = true;
        // }

      }, {
        key: "getUser",
        value: function getUser() {
          return this.user;
        }
      }, {
        key: "userAuthenticated",
        value: function userAuthenticated() {
          var user = JSON.parse(localStorage.getItem('user'));
          return user !== null;
        }
      }]);

      return DataGetterService;
    }();

    DataGetterService.ɵfac = function DataGetterService_Factory(t) {
      return new (t || DataGetterService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_storage__WEBPACK_IMPORTED_MODULE_10__["AngularFireStorage"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_12__["AngularFireAuth"]));
    };

    DataGetterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: DataGetterService,
      factory: DataGetterService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataGetterService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_10__["AngularFireStorage"]
        }, {
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__["AngularFirestore"]
        }, {
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_12__["AngularFireAuth"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/video-list-item/video-list-item.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/video-list-item/video-list-item.component.ts ***!
    \**************************************************************/

  /*! exports provided: VideoListItemComponent */

  /***/
  function srcAppVideoListItemVideoListItemComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VideoListItemComponent", function () {
      return VideoListItemComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var VideoListItemComponent = /*#__PURE__*/function () {
      function VideoListItemComponent() {
        _classCallCheck(this, VideoListItemComponent);
      }

      _createClass(VideoListItemComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return VideoListItemComponent;
    }();

    VideoListItemComponent.ɵfac = function VideoListItemComponent_Factory(t) {
      return new (t || VideoListItemComponent)();
    };

    VideoListItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: VideoListItemComponent,
      selectors: [["app-video-list-item"]],
      inputs: {
        videoURL: "videoURL"
      },
      decls: 3,
      vars: 1,
      consts: [[1, "main__videolist__item"], ["controls", "controls", "width", "300", "height", "200"], [3, "src"]],
      template: function VideoListItemComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "video", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "source", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.videoURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      },
      styles: ["*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: \"Comfortaa\", cursive;\n}\n\n.container[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  max-width: 1200px;\n  height: 100%;\n}\n\n.header[_ngcontent-%COMP%] {\n  background: linear-gradient(158.11deg, #014B80 34.34%, #4892FF 103.15%);\n  padding: 15px 0;\n}\n\n.header__logolink[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\n.header__content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.header__logo[_ngcontent-%COMP%] {\n  width: 107px;\n  height: 70px;\n}\n\n.header__text[_ngcontent-%COMP%] {\n  font-family: Comfortaa;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 16px;\n  line-height: 18px;\n  color: #FFFFFF;\n  padding-left: 28px;\n}\n\n.main[_ngcontent-%COMP%] {\n  padding: 64px 0;\n}\n\n.main__title[_ngcontent-%COMP%] {\n  background-image: url('literature.jpg');\n}\n\n.main__arrow[_ngcontent-%COMP%] {\n  font-size: 64px;\n  color: #FFFFFF;\n  margin: 0 auto;\n}\n\n.main__textcontent[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  margin-bottom: 24px;\n}\n\n.main__titlename[_ngcontent-%COMP%] {\n  padding: 44px 0;\n  font-family: HelveticaNeueCyr;\n  font-style: normal;\n  font-weight: 300;\n  font-size: 64px;\n  line-height: 63px;\n  color: #FFFFFF;\n  margin: 0 auto;\n}\n\n.main__videolist[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n  padding: 24px;\n  font-family: HelveticaNeueCyr;\n  color: #575965;\n  background: #F4F4F4;\n  box-shadow: 0px 2px 4px #CFD8DC;\n  margin-bottom: 64px;\n}\n\n.main__videolist__item[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  transition: background-color 0.2s linear;\n}\n\n.main__videolist__item[_ngcontent-%COMP%]:hover {\n  border: 1px solid #333;\n  background-color: lightblue;\n}\n\n.main__video[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n  padding: 24px;\n  font-family: HelveticaNeueCyr;\n  color: #575965;\n  background: #F4F4F4;\n  box-shadow: 0px 2px 4px #CFD8DC;\n  margin-bottom: 64px;\n}\n\n.main__allsections[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 24px;\n  color: #575965;\n}\n\n.main__sectionlink[_ngcontent-%COMP%] {\n  color: #575965;\n  text-decoration: none;\n}\n\n.footer[_ngcontent-%COMP%] {\n  background: #F4F4F4;\n  padding-top: 36px;\n}\n\n.footer__blocks[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.footer__contacts[_ngcontent-%COMP%] {\n  font-family: Comfortaa;\n  font-style: normal;\n  font-size: 18px;\n  line-height: 20px;\n  color: #575965;\n}\n\n.footer__bold[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.footer__information[_ngcontent-%COMP%] {\n  padding-bottom: 14px;\n}\n\n.footer__information[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:last-child {\n  padding-bottom: 0;\n}\n\n.footer__socials[_ngcontent-%COMP%] {\n  font-family: Comfortaa;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 18px;\n  line-height: 20px;\n  color: #575965;\n  padding-bottom: 14px;\n}\n\n.footer__link[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #3B5998;\n  font-size: 22px;\n}\n\n.footer__librarylink[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #575965;\n}\n\n.footer__location[_ngcontent-%COMP%] {\n  font-family: Comfortaa;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 18px;\n  line-height: 20px;\n  color: #575965;\n}\n\n.line[_ngcontent-%COMP%] {\n  display: block;\n  height: 1px;\n  width: 100%;\n  background: rgba(87, 89, 101, 0.35);\n  margin-top: 28px;\n  margin-bottom: 18px;\n}\n\n.copyright[_ngcontent-%COMP%] {\n  font-family: Comfortaa;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 18px;\n  line-height: 20px;\n  color: #575965;\n  margin: 0 auto;\n  text-align: center;\n  padding-bottom: 18px;\n}\n\n.menu[_ngcontent-%COMP%] {\n  position: absolute;\n  display: inline-block;\n  list-style: none;\n  right: 0;\n  top: 0;\n  color: #575965;\n  padding: 16px;\n  text-decoration: none;\n  font-size: 22px;\n}\n\n.menu[_ngcontent-%COMP%]   .rotate[_ngcontent-%COMP%] {\n  transition: 0.7s;\n}\n\n.menu[_ngcontent-%COMP%]   .rotate[_ngcontent-%COMP%]:hover {\n  transform: rotate(90deg) translateZ(0);\n  transition: 0.7s;\n}\n\n.literaturemenu[_ngcontent-%COMP%] {\n  color: #F4F4F4;\n}\n\n@media screen and (max-width: 1250px) {\n  .main__projectname[_ngcontent-%COMP%] {\n    font-size: 35px;\n    width: 1046px;\n  }\n\n  .container[_ngcontent-%COMP%] {\n    max-width: 1000px;\n  }\n}\n\n@media screen and (max-width: 1105px) {\n  .main__projectname[_ngcontent-%COMP%] {\n    font-size: 28px;\n    width: 850px;\n  }\n\n  .container[_ngcontent-%COMP%] {\n    max-width: 800px;\n  }\n\n  .header__text[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n\n@media screen and (max-width: 908px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 750px;\n  }\n\n  .header__text[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n\n  .main__projectname[_ngcontent-%COMP%] {\n    font-size: 18px;\n    width: 556px;\n    margin: 0 auto;\n  }\n}\n\n@media screen and (max-width: 780px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 680px;\n  }\n\n  .main__persons[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n  }\n  .main__character[_ngcontent-%COMP%] {\n    margin-bottom: 24px;\n  }\n\n  .footer[_ngcontent-%COMP%] {\n    position: relative;\n  }\n}\n\n@media screen and (max-width: 695px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 600px;\n  }\n}\n\n@media screen and (max-width: 640px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 550px;\n  }\n}\n\n@media screen and (max-width: 585px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 500px;\n  }\n\n  .main__projectname[_ngcontent-%COMP%] {\n    font-size: 16px;\n    width: 484px;\n    margin: 0 auto;\n  }\n\n  .footer__information[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n\n  .footer__socials[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n\n  .footer__link[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n\n  .footer__location[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlkZW8tbGlzdC1pdGVtL0M6XFxHaXRIdWJcXGxpYnJhcnkvc3JjXFxhcHBcXHZpZGVvLWxpc3QtaXRlbVxcdmlkZW8tbGlzdC1pdGVtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92aWRlby1saXN0LWl0ZW0vdmlkZW8tbGlzdC1pdGVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksU0FBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtFQUNBLGlDQUFBO0FDQ0o7O0FERUU7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUU7RUFDRSx1RUFBQTtFQUNBLGVBQUE7QUNDSjs7QURDSTtFQUNFLHFCQUFBO0FDQ047O0FERUk7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUNBTjs7QURHSTtFQUNFLFlBQUE7RUFDQSxZQUFBO0FDRE47O0FESUk7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNGTjs7QURNRTtFQUNFLGVBQUE7QUNISjs7QURLSTtFQUNDLHVDQUFBO0FDSEw7O0FETUk7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUNKTjs7QURPSTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNMTjs7QURRSTtFQUNFLGVBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQ05OOztBRFNJO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQkFBQTtFQUNBLG1CQUFBO0FDUFI7O0FEVUk7RUFDRSxtQkFBQTtFQUNBLHdDQUFBO0FDUk47O0FEV0k7RUFDRSxzQkFBQTtFQUNBLDJCQUFBO0FDVE47O0FEWUk7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLCtCQUFBO0VBQ0EsbUJBQUE7QUNWUjs7QURhSTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDWE47O0FEY0k7RUFDRSxjQUFBO0VBQ0EscUJBQUE7QUNaTjs7QURpQkU7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0FDZEo7O0FEZ0JJO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUNkTjs7QURpQkk7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ2ZOOztBRGtCSTtFQUNFLGlCQUFBO0FDaEJOOztBRG1CSTtFQUNFLG9CQUFBO0FDakJOOztBRG1CTTtFQUNFLGlCQUFBO0FDakJSOztBRHFCSTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtBQ25CTjs7QURzQkk7RUFDRSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDcEJOOztBRHVCSTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtBQ3JCTjs7QUR3Qkk7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDdEJOOztBRDJCRTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG1DQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ3hCSjs7QUQyQkU7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUN4Qko7O0FEMkJFO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQ3hCSjs7QUQwQkk7RUFDRSxnQkFBQTtBQ3hCTjs7QUR5Qk07RUFDRSxzQ0FBQTtFQUNBLGdCQUFBO0FDdkJSOztBRDRCRTtFQUNFLGNBQUE7QUN6Qko7O0FENEJFO0VBQ0U7SUFDRSxlQUFBO0lBQ0EsYUFBQTtFQ3pCSjs7RUQ0QkU7SUFDRSxpQkFBQTtFQ3pCSjtBQUNGOztBRCtCRTtFQUNFO0lBQ0UsZUFBQTtJQUNBLFlBQUE7RUM3Qko7O0VEK0JFO0lBQ0UsZ0JBQUE7RUM1Qko7O0VEK0JFO0lBQ0UsZUFBQTtFQzVCSjtBQUNGOztBRGdDRTtFQUNFO0lBQ0UsZ0JBQUE7RUM5Qko7O0VEaUNFO0lBQ0UsZUFBQTtFQzlCSjs7RURpQ0U7SUFDRSxlQUFBO0lBQ0EsWUFBQTtJQUNBLGNBQUE7RUM5Qko7QUFDRjs7QURrQ0U7RUFDRTtJQUNFLGdCQUFBO0VDaENKOztFRG1DSTtJQUNFLHNCQUFBO0lBQ0EsbUJBQUE7RUNoQ047RURtQ0k7SUFDRSxtQkFBQTtFQ2pDTjs7RURxQ0U7SUFDRSxrQkFBQTtFQ2xDSjtBQUNGOztBRHFDRTtFQUNFO0lBQ0UsZ0JBQUE7RUNuQ0o7QUFDRjs7QUR3Q0U7RUFFRTtJQUNFLGdCQUFBO0VDdkNKO0FBQ0Y7O0FEMkNFO0VBQ0U7SUFDRSxnQkFBQTtFQ3pDSjs7RUQ0Q0U7SUFDRSxlQUFBO0lBQ0EsWUFBQTtJQUNBLGNBQUE7RUN6Q0o7O0VENENFO0lBQ0UsZUFBQTtFQ3pDSjs7RUQ0Q0U7SUFDRSxlQUFBO0VDekNKOztFRDRDRTtJQUNFLGVBQUE7RUN6Q0o7O0VENENFO0lBQ0UsZUFBQTtFQ3pDSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvdmlkZW8tbGlzdC1pdGVtL3ZpZGVvLWxpc3QtaXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIip7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGZvbnQtZmFtaWx5OiAnQ29tZm9ydGFhJywgY3Vyc2l2ZTtcclxuICB9XHJcbiAgXHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIG1heC13aWR0aDogMTIwMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAuaGVhZGVye1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE1OC4xMWRlZywgIzAxNEI4MCAzNC4zNCUsICM0ODkyRkYgMTAzLjE1JSk7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDA7XHJcbiAgXHJcbiAgICAmX19sb2dvbGlua3tcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgJl9fY29udGVudHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxuICBcclxuICAgICZfX2xvZ297XHJcbiAgICAgIHdpZHRoOiAxMDdweDtcclxuICAgICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgJl9fdGV4dHtcclxuICAgICAgZm9udC1mYW1pbHk6IENvbWZvcnRhYTtcclxuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMjhweDtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLm1haW57XHJcbiAgICBwYWRkaW5nOiA2NHB4IDA7XHJcbiAgXHJcbiAgICAmX190aXRsZXtcclxuICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2ltZy9saXRlcmF0dXJlLmpwZyk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAmX19hcnJvd3tcclxuICAgICAgZm9udC1zaXplOiA2NHB4O1xyXG4gICAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB9XHJcbiAgXHJcbiAgICAmX190ZXh0Y29udGVudHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgJl9fdGl0bGVuYW1le1xyXG4gICAgICBwYWRkaW5nOiA0NHB4IDA7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2FOZXVlQ3lyO1xyXG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogNjRweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDYzcHg7XHJcbiAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIH1cclxuICBcclxuICAgICZfX3ZpZGVvbGlzdHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgcGFkZGluZzogMjRweDtcclxuICAgICAgICBmb250LWZhbWlseTogSGVsdmV0aWNhTmV1ZUN5cjtcclxuICAgICAgICBjb2xvcjogIzU3NTk2NTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjRjRGNEY0O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAycHggNHB4ICNDRkQ4REM7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNjRweDtcclxuICAgIH0gIFxyXG5cclxuICAgICZfX3ZpZGVvbGlzdF9faXRlbXtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGxpbmVhcjtcclxuICAgIH1cclxuXHJcbiAgICAmX192aWRlb2xpc3RfX2l0ZW06aG92ZXJ7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMzMzM7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAmX192aWRlb3tcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgcGFkZGluZzogMjRweDtcclxuICAgICAgICBmb250LWZhbWlseTogSGVsdmV0aWNhTmV1ZUN5cjtcclxuICAgICAgICBjb2xvcjogIzU3NTk2NTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjRjRGNEY0O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAycHggNHB4ICNDRkQ4REM7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNjRweDtcclxuICAgIH1cclxuXHJcbiAgICAmX19hbGxzZWN0aW9uc3tcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgIGNvbG9yOiAjNTc1OTY1O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgJl9fc2VjdGlvbmxpbmt7XHJcbiAgICAgIGNvbG9yOiAjNTc1OTY1O1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB9XHJcbiAgXHJcbiAgfVxyXG4gIFxyXG4gIC5mb290ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRjRGNEY0O1xyXG4gICAgcGFkZGluZy10b3A6IDM2cHg7XHJcbiAgXHJcbiAgICAmX19ibG9ja3N7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxuICBcclxuICAgICZfX2NvbnRhY3Rze1xyXG4gICAgICBmb250LWZhbWlseTogQ29tZm9ydGFhO1xyXG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgIGNvbG9yOiAjNTc1OTY1O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgJl9fYm9sZHtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAmX19pbmZvcm1hdGlvbntcclxuICAgICAgcGFkZGluZy1ib3R0b206IDE0cHg7XHJcbiAgXHJcbiAgICAgIDpsYXN0LWNoaWxke1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgICAmX19zb2NpYWxze1xyXG4gICAgICBmb250LWZhbWlseTogQ29tZm9ydGFhO1xyXG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICBjb2xvcjogIzU3NTk2NTtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDE0cHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAmX19saW5re1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgIGNvbG9yOiAjM0I1OTk4O1xyXG4gICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAmX19saWJyYXJ5bGlua3tcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICBjb2xvcjogIzU3NTk2NTtcclxuICAgIH1cclxuICBcclxuICAgICZfX2xvY2F0aW9ue1xyXG4gICAgICBmb250LWZhbWlseTogQ29tZm9ydGFhO1xyXG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICBjb2xvcjogIzU3NTk2NTtcclxuICAgIH1cclxuICBcclxuICB9XHJcbiAgXHJcbiAgLmxpbmV7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGhlaWdodDogMXB4O1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoODcsIDg5LCAxMDEsIDAuMzUpO1xyXG4gICAgbWFyZ2luLXRvcDogMjhweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE4cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb3B5cmlnaHR7XHJcbiAgICBmb250LWZhbWlseTogQ29tZm9ydGFhO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgIGNvbG9yOiAjNTc1OTY1O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMThweDtcclxuICB9XHJcbiAgXHJcbiAgLm1lbnV7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBjb2xvcjogIzU3NTk2NTtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgXHJcbiAgICAucm90YXRle1xyXG4gICAgICB0cmFuc2l0aW9uOiAwLjdzO1xyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZykgdHJhbnNsYXRlWigwKTtcclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjdzO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5saXRlcmF0dXJlbWVudXtcclxuICAgIGNvbG9yOiAjRjRGNEY0O1xyXG4gIH1cclxuICBcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEyNTBweCl7XHJcbiAgICAubWFpbl9fcHJvamVjdG5hbWV7XHJcbiAgICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgICAgd2lkdGg6IDEwNDZweDtcclxuICAgIH1cclxuICBcclxuICAgIC5jb250YWluZXJ7XHJcbiAgICAgIG1heC13aWR0aDogMTAwMHB4O1xyXG4gICAgfVxyXG4gIFxyXG4gIFxyXG4gIH1cclxuICBcclxuICBcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjExMDVweCl7XHJcbiAgICAubWFpbl9fcHJvamVjdG5hbWV7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgICAgd2lkdGg6IDg1MHB4O1xyXG4gICAgfVxyXG4gICAgLmNvbnRhaW5lcntcclxuICAgICAgbWF4LXdpZHRoOiA4MDBweDtcclxuICAgIH1cclxuICBcclxuICAgIC5oZWFkZXJfX3RleHR7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxuICBcclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo5MDhweCl7XHJcbiAgICAuY29udGFpbmVye1xyXG4gICAgICBtYXgtd2lkdGg6IDc1MHB4O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmhlYWRlcl9fdGV4dHtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLm1haW5fX3Byb2plY3RuYW1le1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIHdpZHRoOiA1NTZweDtcclxuICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB9XHJcbiAgXHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzgwcHgpe1xyXG4gICAgLmNvbnRhaW5lcntcclxuICAgICAgbWF4LXdpZHRoOiA2ODBweDtcclxuICAgIH1cclxuICAgIC5tYWlue1xyXG4gICAgICAmX19wZXJzb25ze1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAmX19jaGFyYWN0ZXJ7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgLmZvb3RlcntcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjY5NXB4KXtcclxuICAgIC5jb250YWluZXJ7XHJcbiAgICAgIG1heC13aWR0aDogNjAwcHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgXHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjQwcHgpIHtcclxuICBcclxuICAgIC5jb250YWluZXJ7XHJcbiAgICAgIG1heC13aWR0aDogNTUwcHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NTg1cHgpIHtcclxuICAgIC5jb250YWluZXJ7XHJcbiAgICAgIG1heC13aWR0aDogNTAwcHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAubWFpbl9fcHJvamVjdG5hbWV7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgd2lkdGg6IDQ4NHB4O1xyXG4gICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIH1cclxuICBcclxuICAgIC5mb290ZXJfX2luZm9ybWF0aW9ue1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuZm9vdGVyX19zb2NpYWxze1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuZm9vdGVyX19saW5re1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuZm9vdGVyX19sb2NhdGlvbntcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgfVxyXG4gIFxyXG4gIH1cclxuICAiLCIqIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmb250LWZhbWlseTogXCJDb21mb3J0YWFcIiwgY3Vyc2l2ZTtcbn1cblxuLmNvbnRhaW5lciB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uaGVhZGVyIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE1OC4xMWRlZywgIzAxNEI4MCAzNC4zNCUsICM0ODkyRkYgMTAzLjE1JSk7XG4gIHBhZGRpbmc6IDE1cHggMDtcbn1cbi5oZWFkZXJfX2xvZ29saW5rIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLmhlYWRlcl9fY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uaGVhZGVyX19sb2dvIHtcbiAgd2lkdGg6IDEwN3B4O1xuICBoZWlnaHQ6IDcwcHg7XG59XG4uaGVhZGVyX190ZXh0IHtcbiAgZm9udC1mYW1pbHk6IENvbWZvcnRhYTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIHBhZGRpbmctbGVmdDogMjhweDtcbn1cblxuLm1haW4ge1xuICBwYWRkaW5nOiA2NHB4IDA7XG59XG4ubWFpbl9fdGl0bGUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2ltZy9saXRlcmF0dXJlLmpwZyk7XG59XG4ubWFpbl9fYXJyb3cge1xuICBmb250LXNpemU6IDY0cHg7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5tYWluX190ZXh0Y29udGVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbn1cbi5tYWluX190aXRsZW5hbWUge1xuICBwYWRkaW5nOiA0NHB4IDA7XG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2FOZXVlQ3lyO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc2l6ZTogNjRweDtcbiAgbGluZS1oZWlnaHQ6IDYzcHg7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5tYWluX192aWRlb2xpc3Qge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMjRweDtcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYU5ldWVDeXI7XG4gIGNvbG9yOiAjNTc1OTY1O1xuICBiYWNrZ3JvdW5kOiAjRjRGNEY0O1xuICBib3gtc2hhZG93OiAwcHggMnB4IDRweCAjQ0ZEOERDO1xuICBtYXJnaW4tYm90dG9tOiA2NHB4O1xufVxuLm1haW5fX3ZpZGVvbGlzdF9faXRlbSB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBsaW5lYXI7XG59XG4ubWFpbl9fdmlkZW9saXN0X19pdGVtOmhvdmVyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzMzMztcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xufVxuLm1haW5fX3ZpZGVvIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDI0cHg7XG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2FOZXVlQ3lyO1xuICBjb2xvcjogIzU3NTk2NTtcbiAgYmFja2dyb3VuZDogI0Y0RjRGNDtcbiAgYm94LXNoYWRvdzogMHB4IDJweCA0cHggI0NGRDhEQztcbiAgbWFyZ2luLWJvdHRvbTogNjRweDtcbn1cbi5tYWluX19hbGxzZWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBjb2xvcjogIzU3NTk2NTtcbn1cbi5tYWluX19zZWN0aW9ubGluayB7XG4gIGNvbG9yOiAjNTc1OTY1O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5mb290ZXIge1xuICBiYWNrZ3JvdW5kOiAjRjRGNEY0O1xuICBwYWRkaW5nLXRvcDogMzZweDtcbn1cbi5mb290ZXJfX2Jsb2NrcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5mb290ZXJfX2NvbnRhY3RzIHtcbiAgZm9udC1mYW1pbHk6IENvbWZvcnRhYTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBjb2xvcjogIzU3NTk2NTtcbn1cbi5mb290ZXJfX2JvbGQge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5mb290ZXJfX2luZm9ybWF0aW9uIHtcbiAgcGFkZGluZy1ib3R0b206IDE0cHg7XG59XG4uZm9vdGVyX19pbmZvcm1hdGlvbiA6bGFzdC1jaGlsZCB7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xufVxuLmZvb3Rlcl9fc29jaWFscyB7XG4gIGZvbnQtZmFtaWx5OiBDb21mb3J0YWE7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGNvbG9yOiAjNTc1OTY1O1xuICBwYWRkaW5nLWJvdHRvbTogMTRweDtcbn1cbi5mb290ZXJfX2xpbmsge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjM0I1OTk4O1xuICBmb250LXNpemU6IDIycHg7XG59XG4uZm9vdGVyX19saWJyYXJ5bGluayB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICM1NzU5NjU7XG59XG4uZm9vdGVyX19sb2NhdGlvbiB7XG4gIGZvbnQtZmFtaWx5OiBDb21mb3J0YWE7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGNvbG9yOiAjNTc1OTY1O1xufVxuXG4ubGluZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDFweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHJnYmEoODcsIDg5LCAxMDEsIDAuMzUpO1xuICBtYXJnaW4tdG9wOiAyOHB4O1xuICBtYXJnaW4tYm90dG9tOiAxOHB4O1xufVxuXG4uY29weXJpZ2h0IHtcbiAgZm9udC1mYW1pbHk6IENvbWZvcnRhYTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgY29sb3I6ICM1NzU5NjU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctYm90dG9tOiAxOHB4O1xufVxuXG4ubWVudSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBjb2xvcjogIzU3NTk2NTtcbiAgcGFkZGluZzogMTZweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXNpemU6IDIycHg7XG59XG4ubWVudSAucm90YXRlIHtcbiAgdHJhbnNpdGlvbjogMC43cztcbn1cbi5tZW51IC5yb3RhdGU6aG92ZXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZykgdHJhbnNsYXRlWigwKTtcbiAgdHJhbnNpdGlvbjogMC43cztcbn1cblxuLmxpdGVyYXR1cmVtZW51IHtcbiAgY29sb3I6ICNGNEY0RjQ7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyNTBweCkge1xuICAubWFpbl9fcHJvamVjdG5hbWUge1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICB3aWR0aDogMTA0NnB4O1xuICB9XG5cbiAgLmNvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiAxMDAwcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExMDVweCkge1xuICAubWFpbl9fcHJvamVjdG5hbWUge1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICB3aWR0aDogODUwcHg7XG4gIH1cblxuICAuY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xuICB9XG5cbiAgLmhlYWRlcl9fdGV4dCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDhweCkge1xuICAuY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDc1MHB4O1xuICB9XG5cbiAgLmhlYWRlcl9fdGV4dCB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG5cbiAgLm1haW5fX3Byb2plY3RuYW1lIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgd2lkdGg6IDU1NnB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3ODBweCkge1xuICAuY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDY4MHB4O1xuICB9XG5cbiAgLm1haW5fX3BlcnNvbnMge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICAubWFpbl9fY2hhcmFjdGVyIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICB9XG5cbiAgLmZvb3RlciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2OTVweCkge1xuICAuY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NDBweCkge1xuICAuY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDU1MHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1ODVweCkge1xuICAuY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICB9XG5cbiAgLm1haW5fX3Byb2plY3RuYW1lIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgd2lkdGg6IDQ4NHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG5cbiAgLmZvb3Rlcl9faW5mb3JtYXRpb24ge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxuXG4gIC5mb290ZXJfX3NvY2lhbHMge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxuXG4gIC5mb290ZXJfX2xpbmsge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxuXG4gIC5mb290ZXJfX2xvY2F0aW9uIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VideoListItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-video-list-item',
          templateUrl: './video-list-item.component.html',
          styleUrls: ['./video-list-item.component.scss']
        }]
      }], function () {
        return [];
      }, {
        videoURL: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/video/video.component.ts":
  /*!******************************************!*\
    !*** ./src/app/video/video.component.ts ***!
    \******************************************/

  /*! exports provided: VideoComponent */

  /***/
  function srcAppVideoVideoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VideoComponent", function () {
      return VideoComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_data_getter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/data-getter.service */
    "./src/app/services/data-getter.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _video_list_item_video_list_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../video-list-item/video-list-item.component */
    "./src/app/video-list-item/video-list-item.component.ts");

    function VideoComponent_app_video_list_item_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-video-list-item", 15);
      }

      if (rf & 2) {
        var videoURL_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("videoURL", videoURL_r1);
      }
    }

    var VideoComponent = /*#__PURE__*/function () {
      function VideoComponent(activatedRoute, dataGetterService, router) {
        _classCallCheck(this, VideoComponent);

        this.activatedRoute = activatedRoute;
        this.dataGetterService = dataGetterService;
        this.router = router;
        this.videoURL = "../../assets/video/poem.mp4";
        this.videoURLs = ["../../assets/video/poem.mp4", "../../assets/video/gold.mp4", "../../assets/video/people.mp4"];
      }

      _createClass(VideoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this34 = this;

          this.activatedRoute.queryParams.subscribe(function (author) {
            _this34.author = author;
          });
        }
      }, {
        key: "backToAuthor",
        value: function backToAuthor() {
          this.router.navigate(['/author'], {
            queryParams: this.author
          });
        }
      }]);

      return VideoComponent;
    }();

    VideoComponent.ɵfac = function VideoComponent_Factory(t) {
      return new (t || VideoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_getter_service__WEBPACK_IMPORTED_MODULE_2__["DataGetterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    VideoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: VideoComponent,
      selectors: [["app-video"]],
      decls: 36,
      vars: 1,
      consts: [[1, "main"], [1, "container"], [1, "main__title"], [1, "main__textcontent"], [1, "main__titlename"], [1, "fas", "fa-arrow-circle-left", "main__arrow", 3, "click"], ["href", "", 1, "menu", "literaturemenu"], [1, "fas", "fa-cog", "rotate"], [1, "main__videolist"], [3, "videoURL", 4, "ngFor", "ngForOf"], [1, "main__video"], ["controls", "controls", "width", "1200", "height", "500"], ["src", "../../assets/video/poem.mp4"], [1, "main__allsections"], ["href", "", 1, "main__sectionlink"], [3, "videoURL"]],
      template: function VideoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VideoComponent_Template_i_click_5_listener() {
            return ctx.backToAuthor();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " \u0412\u0456\u0434\u0435\u043E ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, VideoComponent_app_video_list_item_10_Template, 1, 1, "app-video-list-item", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "video", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "source", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u0421\u043F\u043E\u0433\u0430\u0434\u0438");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\u041F\u043E\u043A\u0430\u0436\u0447\u0438\u043A\u0438");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u0411\u0456\u0431\u043B\u0456\u043E\u0442\u0435\u043A\u0430");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\u0420\u0435\u0446\u0435\u043D\u0437\u0456\u0457");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\u0424\u043E\u0442\u043E");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\u0412\u0456\u0434\u0435\u043E");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "\u041C\u0435\u0440\u0435\u0436\u0456");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.videoURLs);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _video_list_item_video_list_item_component__WEBPACK_IMPORTED_MODULE_4__["VideoListItemComponent"]],
      styles: ["*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: \"Comfortaa\", cursive;\n}\n\n.container[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  max-width: 1200px;\n  height: 100%;\n}\n\n.header[_ngcontent-%COMP%] {\n  background: linear-gradient(158.11deg, #014B80 34.34%, #4892FF 103.15%);\n  padding: 15px 0;\n}\n\n.header__logolink[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\n.header__content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.header__logo[_ngcontent-%COMP%] {\n  width: 107px;\n  height: 70px;\n}\n\n.header__text[_ngcontent-%COMP%] {\n  font-family: Comfortaa;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 16px;\n  line-height: 18px;\n  color: #FFFFFF;\n  padding-left: 28px;\n}\n\n.main[_ngcontent-%COMP%] {\n  padding: 64px 0;\n}\n\n.main__title[_ngcontent-%COMP%] {\n  background-image: url('literature.jpg');\n}\n\n.main__arrow[_ngcontent-%COMP%] {\n  font-size: 64px;\n  color: #FFFFFF;\n  margin: 0 auto;\n}\n\n.main__textcontent[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  margin-bottom: 24px;\n}\n\n.main__titlename[_ngcontent-%COMP%] {\n  padding: 44px 0;\n  font-family: HelveticaNeueCyr;\n  font-style: normal;\n  font-weight: 300;\n  font-size: 64px;\n  line-height: 63px;\n  color: #FFFFFF;\n  margin: 0 auto;\n}\n\n.main__videolist[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n  padding: 24px;\n  font-family: HelveticaNeueCyr;\n  color: #575965;\n  background: #F4F4F4;\n  box-shadow: 0px 2px 4px #CFD8DC;\n  margin-bottom: 64px;\n}\n\n.main__allsections[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 24px;\n  color: #575965;\n}\n\n.main__sectionlink[_ngcontent-%COMP%] {\n  color: #575965;\n  text-decoration: none;\n}\n\n.footer[_ngcontent-%COMP%] {\n  background: #F4F4F4;\n  padding-top: 36px;\n}\n\n.footer__blocks[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.footer__contacts[_ngcontent-%COMP%] {\n  font-family: Comfortaa;\n  font-style: normal;\n  font-size: 18px;\n  line-height: 20px;\n  color: #575965;\n}\n\n.footer__bold[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.footer__information[_ngcontent-%COMP%] {\n  padding-bottom: 14px;\n}\n\n.footer__information[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:last-child {\n  padding-bottom: 0;\n}\n\n.footer__socials[_ngcontent-%COMP%] {\n  font-family: Comfortaa;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 18px;\n  line-height: 20px;\n  color: #575965;\n  padding-bottom: 14px;\n}\n\n.footer__link[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #3B5998;\n  font-size: 22px;\n}\n\n.footer__librarylink[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #575965;\n}\n\n.footer__location[_ngcontent-%COMP%] {\n  font-family: Comfortaa;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 18px;\n  line-height: 20px;\n  color: #575965;\n}\n\n.line[_ngcontent-%COMP%] {\n  display: block;\n  height: 1px;\n  width: 100%;\n  background: rgba(87, 89, 101, 0.35);\n  margin-top: 28px;\n  margin-bottom: 18px;\n}\n\n.copyright[_ngcontent-%COMP%] {\n  font-family: Comfortaa;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 18px;\n  line-height: 20px;\n  color: #575965;\n  margin: 0 auto;\n  text-align: center;\n  padding-bottom: 18px;\n}\n\n.menu[_ngcontent-%COMP%] {\n  position: absolute;\n  display: inline-block;\n  list-style: none;\n  right: 0;\n  top: 0;\n  color: #575965;\n  padding: 16px;\n  text-decoration: none;\n  font-size: 22px;\n}\n\n.menu[_ngcontent-%COMP%]   .rotate[_ngcontent-%COMP%] {\n  transition: 0.7s;\n}\n\n.menu[_ngcontent-%COMP%]   .rotate[_ngcontent-%COMP%]:hover {\n  transform: rotate(90deg) translateZ(0);\n  transition: 0.7s;\n}\n\n.literaturemenu[_ngcontent-%COMP%] {\n  color: #F4F4F4;\n}\n\n@media screen and (max-width: 1250px) {\n  .main__projectname[_ngcontent-%COMP%] {\n    font-size: 35px;\n    width: 1046px;\n  }\n\n  .container[_ngcontent-%COMP%] {\n    max-width: 1000px;\n  }\n}\n\n@media screen and (max-width: 1105px) {\n  .main__projectname[_ngcontent-%COMP%] {\n    font-size: 28px;\n    width: 850px;\n  }\n\n  .container[_ngcontent-%COMP%] {\n    max-width: 800px;\n  }\n\n  .header__text[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n\n@media screen and (max-width: 908px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 750px;\n  }\n\n  .header__text[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n\n  .main__projectname[_ngcontent-%COMP%] {\n    font-size: 18px;\n    width: 556px;\n    margin: 0 auto;\n  }\n}\n\n@media screen and (max-width: 780px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 680px;\n  }\n\n  .main__persons[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n  }\n  .main__character[_ngcontent-%COMP%] {\n    margin-bottom: 24px;\n  }\n\n  .footer[_ngcontent-%COMP%] {\n    position: relative;\n  }\n}\n\n@media screen and (max-width: 695px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 600px;\n  }\n}\n\n@media screen and (max-width: 640px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 550px;\n  }\n}\n\n@media screen and (max-width: 585px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 500px;\n  }\n\n  .main__projectname[_ngcontent-%COMP%] {\n    font-size: 16px;\n    width: 484px;\n    margin: 0 auto;\n  }\n\n  .footer__information[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n\n  .footer__socials[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n\n  .footer__link[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n\n  .footer__location[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlkZW8vQzpcXEdpdEh1YlxcbGlicmFyeS9zcmNcXGFwcFxcdmlkZW9cXHZpZGVvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92aWRlby92aWRlby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFNBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQ0FBQTtBQ0NKOztBREVFO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVFO0VBQ0UsdUVBQUE7RUFDQSxlQUFBO0FDQ0o7O0FEQ0k7RUFDRSxxQkFBQTtBQ0NOOztBREVJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FDQU47O0FER0k7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQ0ROOztBRElJO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDRk47O0FETUU7RUFDRSxlQUFBO0FDSEo7O0FES0k7RUFDQyx1Q0FBQTtBQ0hMOztBRE1JO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FDSk47O0FET0k7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDTE47O0FEUUk7RUFDRSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUNOTjs7QURTSTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsK0JBQUE7RUFDQSxtQkFBQTtBQ1BSOztBRHNCSTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDcEJOOztBRHVCSTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtBQ3JCTjs7QUQwQkU7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0FDdkJKOztBRHlCSTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FDdkJOOztBRDBCSTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDeEJOOztBRDJCSTtFQUNFLGlCQUFBO0FDekJOOztBRDRCSTtFQUNFLG9CQUFBO0FDMUJOOztBRDRCTTtFQUNFLGlCQUFBO0FDMUJSOztBRDhCSTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtBQzVCTjs7QUQrQkk7RUFDRSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDN0JOOztBRGdDSTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtBQzlCTjs7QURpQ0k7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDL0JOOztBRG9DRTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG1DQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ2pDSjs7QURvQ0U7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUNqQ0o7O0FEb0NFO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQ2pDSjs7QURtQ0k7RUFDRSxnQkFBQTtBQ2pDTjs7QURrQ007RUFDRSxzQ0FBQTtFQUNBLGdCQUFBO0FDaENSOztBRHFDRTtFQUNFLGNBQUE7QUNsQ0o7O0FEcUNFO0VBQ0U7SUFDRSxlQUFBO0lBQ0EsYUFBQTtFQ2xDSjs7RURxQ0U7SUFDRSxpQkFBQTtFQ2xDSjtBQUNGOztBRHdDRTtFQUNFO0lBQ0UsZUFBQTtJQUNBLFlBQUE7RUN0Q0o7O0VEd0NFO0lBQ0UsZ0JBQUE7RUNyQ0o7O0VEd0NFO0lBQ0UsZUFBQTtFQ3JDSjtBQUNGOztBRHlDRTtFQUNFO0lBQ0UsZ0JBQUE7RUN2Q0o7O0VEMENFO0lBQ0UsZUFBQTtFQ3ZDSjs7RUQwQ0U7SUFDRSxlQUFBO0lBQ0EsWUFBQTtJQUNBLGNBQUE7RUN2Q0o7QUFDRjs7QUQyQ0U7RUFDRTtJQUNFLGdCQUFBO0VDekNKOztFRDRDSTtJQUNFLHNCQUFBO0lBQ0EsbUJBQUE7RUN6Q047RUQ0Q0k7SUFDRSxtQkFBQTtFQzFDTjs7RUQ4Q0U7SUFDRSxrQkFBQTtFQzNDSjtBQUNGOztBRDhDRTtFQUNFO0lBQ0UsZ0JBQUE7RUM1Q0o7QUFDRjs7QURpREU7RUFFRTtJQUNFLGdCQUFBO0VDaERKO0FBQ0Y7O0FEb0RFO0VBQ0U7SUFDRSxnQkFBQTtFQ2xESjs7RURxREU7SUFDRSxlQUFBO0lBQ0EsWUFBQTtJQUNBLGNBQUE7RUNsREo7O0VEcURFO0lBQ0UsZUFBQTtFQ2xESjs7RURxREU7SUFDRSxlQUFBO0VDbERKOztFRHFERTtJQUNFLGVBQUE7RUNsREo7O0VEcURFO0lBQ0UsZUFBQTtFQ2xESjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvdmlkZW8vdmlkZW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqe1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBmb250LWZhbWlseTogJ0NvbWZvcnRhYScsIGN1cnNpdmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb250YWluZXIge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBtYXgtd2lkdGg6IDEyMDBweDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLmhlYWRlcntcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNTguMTFkZWcsICMwMTRCODAgMzQuMzQlLCAjNDg5MkZGIDEwMy4xNSUpO1xyXG4gICAgcGFkZGluZzogMTVweCAwO1xyXG4gIFxyXG4gICAgJl9fbG9nb2xpbmt7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIH1cclxuICBcclxuICAgICZfX2NvbnRlbnR7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAmX19sb2dve1xyXG4gICAgICB3aWR0aDogMTA3cHg7XHJcbiAgICAgIGhlaWdodDogNzBweDtcclxuICAgIH1cclxuICBcclxuICAgICZfX3RleHR7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBDb21mb3J0YWE7XHJcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDI4cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5tYWlue1xyXG4gICAgcGFkZGluZzogNjRweCAwO1xyXG4gIFxyXG4gICAgJl9fdGl0bGV7XHJcbiAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9pbWcvbGl0ZXJhdHVyZS5qcGcpO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgJl9fYXJyb3d7XHJcbiAgICAgIGZvbnQtc2l6ZTogNjRweDtcclxuICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgJl9fdGV4dGNvbnRlbnR7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcclxuICAgIH1cclxuICBcclxuICAgICZfX3RpdGxlbmFtZXtcclxuICAgICAgcGFkZGluZzogNDRweCAwO1xyXG4gICAgICBmb250LWZhbWlseTogSGVsdmV0aWNhTmV1ZUN5cjtcclxuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICBmb250LXNpemU6IDY0cHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiA2M3B4O1xyXG4gICAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB9XHJcbiAgXHJcbiAgICAmX192aWRlb2xpc3R7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIHBhZGRpbmc6IDI0cHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IEhlbHZldGljYU5ldWVDeXI7XHJcbiAgICAgICAgY29sb3I6ICM1NzU5NjU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI0Y0RjRGNDtcclxuICAgICAgICBib3gtc2hhZG93OiAwcHggMnB4IDRweCAjQ0ZEOERDO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDY0cHg7XHJcbiAgICB9ICBcclxuXHJcbiAgICAvLyAmX192aWRlb3tcclxuICAgIC8vICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAvLyAgICAgZGlzcGxheTogZmxleDtcclxuICAgIC8vICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAvLyAgICAgcGFkZGluZzogMjRweDtcclxuICAgIC8vICAgICBmb250LWZhbWlseTogSGVsdmV0aWNhTmV1ZUN5cjtcclxuICAgIC8vICAgICBjb2xvcjogIzU3NTk2NTtcclxuICAgIC8vICAgICBiYWNrZ3JvdW5kOiAjRjRGNEY0O1xyXG4gICAgLy8gICAgIGJveC1zaGFkb3c6IDBweCAycHggNHB4ICNDRkQ4REM7XHJcbiAgICAvLyAgICAgbWFyZ2luLWJvdHRvbTogNjRweDtcclxuICAgIC8vIH1cclxuXHJcbiAgICAmX19hbGxzZWN0aW9uc3tcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgIGNvbG9yOiAjNTc1OTY1O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgJl9fc2VjdGlvbmxpbmt7XHJcbiAgICAgIGNvbG9yOiAjNTc1OTY1O1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB9XHJcbiAgXHJcbiAgfVxyXG4gIFxyXG4gIC5mb290ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRjRGNEY0O1xyXG4gICAgcGFkZGluZy10b3A6IDM2cHg7XHJcbiAgXHJcbiAgICAmX19ibG9ja3N7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxuICBcclxuICAgICZfX2NvbnRhY3Rze1xyXG4gICAgICBmb250LWZhbWlseTogQ29tZm9ydGFhO1xyXG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgIGNvbG9yOiAjNTc1OTY1O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgJl9fYm9sZHtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAmX19pbmZvcm1hdGlvbntcclxuICAgICAgcGFkZGluZy1ib3R0b206IDE0cHg7XHJcbiAgXHJcbiAgICAgIDpsYXN0LWNoaWxke1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgICAmX19zb2NpYWxze1xyXG4gICAgICBmb250LWZhbWlseTogQ29tZm9ydGFhO1xyXG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICBjb2xvcjogIzU3NTk2NTtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDE0cHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAmX19saW5re1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgIGNvbG9yOiAjM0I1OTk4O1xyXG4gICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAmX19saWJyYXJ5bGlua3tcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICBjb2xvcjogIzU3NTk2NTtcclxuICAgIH1cclxuICBcclxuICAgICZfX2xvY2F0aW9ue1xyXG4gICAgICBmb250LWZhbWlseTogQ29tZm9ydGFhO1xyXG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICBjb2xvcjogIzU3NTk2NTtcclxuICAgIH1cclxuICBcclxuICB9XHJcbiAgXHJcbiAgLmxpbmV7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGhlaWdodDogMXB4O1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoODcsIDg5LCAxMDEsIDAuMzUpO1xyXG4gICAgbWFyZ2luLXRvcDogMjhweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE4cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb3B5cmlnaHR7XHJcbiAgICBmb250LWZhbWlseTogQ29tZm9ydGFhO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgIGNvbG9yOiAjNTc1OTY1O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMThweDtcclxuICB9XHJcbiAgXHJcbiAgLm1lbnV7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBjb2xvcjogIzU3NTk2NTtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgXHJcbiAgICAucm90YXRle1xyXG4gICAgICB0cmFuc2l0aW9uOiAwLjdzO1xyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZykgdHJhbnNsYXRlWigwKTtcclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjdzO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5saXRlcmF0dXJlbWVudXtcclxuICAgIGNvbG9yOiAjRjRGNEY0O1xyXG4gIH1cclxuICBcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEyNTBweCl7XHJcbiAgICAubWFpbl9fcHJvamVjdG5hbWV7XHJcbiAgICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgICAgd2lkdGg6IDEwNDZweDtcclxuICAgIH1cclxuICBcclxuICAgIC5jb250YWluZXJ7XHJcbiAgICAgIG1heC13aWR0aDogMTAwMHB4O1xyXG4gICAgfVxyXG4gIFxyXG4gIFxyXG4gIH1cclxuICBcclxuICBcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjExMDVweCl7XHJcbiAgICAubWFpbl9fcHJvamVjdG5hbWV7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgICAgd2lkdGg6IDg1MHB4O1xyXG4gICAgfVxyXG4gICAgLmNvbnRhaW5lcntcclxuICAgICAgbWF4LXdpZHRoOiA4MDBweDtcclxuICAgIH1cclxuICBcclxuICAgIC5oZWFkZXJfX3RleHR7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxuICBcclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo5MDhweCl7XHJcbiAgICAuY29udGFpbmVye1xyXG4gICAgICBtYXgtd2lkdGg6IDc1MHB4O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmhlYWRlcl9fdGV4dHtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLm1haW5fX3Byb2plY3RuYW1le1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIHdpZHRoOiA1NTZweDtcclxuICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB9XHJcbiAgXHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzgwcHgpe1xyXG4gICAgLmNvbnRhaW5lcntcclxuICAgICAgbWF4LXdpZHRoOiA2ODBweDtcclxuICAgIH1cclxuICAgIC5tYWlue1xyXG4gICAgICAmX19wZXJzb25ze1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAmX19jaGFyYWN0ZXJ7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgLmZvb3RlcntcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjY5NXB4KXtcclxuICAgIC5jb250YWluZXJ7XHJcbiAgICAgIG1heC13aWR0aDogNjAwcHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgXHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjQwcHgpIHtcclxuICBcclxuICAgIC5jb250YWluZXJ7XHJcbiAgICAgIG1heC13aWR0aDogNTUwcHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NTg1cHgpIHtcclxuICAgIC5jb250YWluZXJ7XHJcbiAgICAgIG1heC13aWR0aDogNTAwcHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAubWFpbl9fcHJvamVjdG5hbWV7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgd2lkdGg6IDQ4NHB4O1xyXG4gICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIH1cclxuICBcclxuICAgIC5mb290ZXJfX2luZm9ybWF0aW9ue1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuZm9vdGVyX19zb2NpYWxze1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuZm9vdGVyX19saW5re1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuZm9vdGVyX19sb2NhdGlvbntcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgfVxyXG4gIFxyXG4gIH1cclxuICAiLCIqIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmb250LWZhbWlseTogXCJDb21mb3J0YWFcIiwgY3Vyc2l2ZTtcbn1cblxuLmNvbnRhaW5lciB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uaGVhZGVyIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE1OC4xMWRlZywgIzAxNEI4MCAzNC4zNCUsICM0ODkyRkYgMTAzLjE1JSk7XG4gIHBhZGRpbmc6IDE1cHggMDtcbn1cbi5oZWFkZXJfX2xvZ29saW5rIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLmhlYWRlcl9fY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uaGVhZGVyX19sb2dvIHtcbiAgd2lkdGg6IDEwN3B4O1xuICBoZWlnaHQ6IDcwcHg7XG59XG4uaGVhZGVyX190ZXh0IHtcbiAgZm9udC1mYW1pbHk6IENvbWZvcnRhYTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIHBhZGRpbmctbGVmdDogMjhweDtcbn1cblxuLm1haW4ge1xuICBwYWRkaW5nOiA2NHB4IDA7XG59XG4ubWFpbl9fdGl0bGUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2ltZy9saXRlcmF0dXJlLmpwZyk7XG59XG4ubWFpbl9fYXJyb3cge1xuICBmb250LXNpemU6IDY0cHg7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5tYWluX190ZXh0Y29udGVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbn1cbi5tYWluX190aXRsZW5hbWUge1xuICBwYWRkaW5nOiA0NHB4IDA7XG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2FOZXVlQ3lyO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc2l6ZTogNjRweDtcbiAgbGluZS1oZWlnaHQ6IDYzcHg7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5tYWluX192aWRlb2xpc3Qge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMjRweDtcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYU5ldWVDeXI7XG4gIGNvbG9yOiAjNTc1OTY1O1xuICBiYWNrZ3JvdW5kOiAjRjRGNEY0O1xuICBib3gtc2hhZG93OiAwcHggMnB4IDRweCAjQ0ZEOERDO1xuICBtYXJnaW4tYm90dG9tOiA2NHB4O1xufVxuLm1haW5fX2FsbHNlY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiAjNTc1OTY1O1xufVxuLm1haW5fX3NlY3Rpb25saW5rIHtcbiAgY29sb3I6ICM1NzU5NjU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmZvb3RlciB7XG4gIGJhY2tncm91bmQ6ICNGNEY0RjQ7XG4gIHBhZGRpbmctdG9wOiAzNnB4O1xufVxuLmZvb3Rlcl9fYmxvY2tzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmZvb3Rlcl9fY29udGFjdHMge1xuICBmb250LWZhbWlseTogQ29tZm9ydGFhO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGNvbG9yOiAjNTc1OTY1O1xufVxuLmZvb3Rlcl9fYm9sZCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmZvb3Rlcl9faW5mb3JtYXRpb24ge1xuICBwYWRkaW5nLWJvdHRvbTogMTRweDtcbn1cbi5mb290ZXJfX2luZm9ybWF0aW9uIDpsYXN0LWNoaWxkIHtcbiAgcGFkZGluZy1ib3R0b206IDA7XG59XG4uZm9vdGVyX19zb2NpYWxzIHtcbiAgZm9udC1mYW1pbHk6IENvbWZvcnRhYTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgY29sb3I6ICM1NzU5NjU7XG4gIHBhZGRpbmctYm90dG9tOiAxNHB4O1xufVxuLmZvb3Rlcl9fbGluayB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICMzQjU5OTg7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn1cbi5mb290ZXJfX2xpYnJhcnlsaW5rIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzU3NTk2NTtcbn1cbi5mb290ZXJfX2xvY2F0aW9uIHtcbiAgZm9udC1mYW1pbHk6IENvbWZvcnRhYTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgY29sb3I6ICM1NzU5NjU7XG59XG5cbi5saW5lIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMXB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogcmdiYSg4NywgODksIDEwMSwgMC4zNSk7XG4gIG1hcmdpbi10b3A6IDI4cHg7XG4gIG1hcmdpbi1ib3R0b206IDE4cHg7XG59XG5cbi5jb3B5cmlnaHQge1xuICBmb250LWZhbWlseTogQ29tZm9ydGFhO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBjb2xvcjogIzU3NTk2NTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy1ib3R0b206IDE4cHg7XG59XG5cbi5tZW51IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIGNvbG9yOiAjNTc1OTY1O1xuICBwYWRkaW5nOiAxNnB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn1cbi5tZW51IC5yb3RhdGUge1xuICB0cmFuc2l0aW9uOiAwLjdzO1xufVxuLm1lbnUgLnJvdGF0ZTpob3ZlciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKSB0cmFuc2xhdGVaKDApO1xuICB0cmFuc2l0aW9uOiAwLjdzO1xufVxuXG4ubGl0ZXJhdHVyZW1lbnUge1xuICBjb2xvcjogI0Y0RjRGNDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI1MHB4KSB7XG4gIC5tYWluX19wcm9qZWN0bmFtZSB7XG4gICAgZm9udC1zaXplOiAzNXB4O1xuICAgIHdpZHRoOiAxMDQ2cHg7XG4gIH1cblxuICAuY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDEwMDBweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTEwNXB4KSB7XG4gIC5tYWluX19wcm9qZWN0bmFtZSB7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICAgIHdpZHRoOiA4NTBweDtcbiAgfVxuXG4gIC5jb250YWluZXIge1xuICAgIG1heC13aWR0aDogODAwcHg7XG4gIH1cblxuICAuaGVhZGVyX190ZXh0IHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwOHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIG1heC13aWR0aDogNzUwcHg7XG4gIH1cblxuICAuaGVhZGVyX190ZXh0IHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cblxuICAubWFpbl9fcHJvamVjdG5hbWUge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB3aWR0aDogNTU2cHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc4MHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIG1heC13aWR0aDogNjgwcHg7XG4gIH1cblxuICAubWFpbl9fcGVyc29ucyB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIC5tYWluX19jaGFyYWN0ZXIge1xuICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gIH1cblxuICAuZm9vdGVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY5NXB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIG1heC13aWR0aDogNjAwcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0MHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIG1heC13aWR0aDogNTUwcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU4NXB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIG1heC13aWR0aDogNTAwcHg7XG4gIH1cblxuICAubWFpbl9fcHJvamVjdG5hbWUge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB3aWR0aDogNDg0cHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cblxuICAuZm9vdGVyX19pbmZvcm1hdGlvbiB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG5cbiAgLmZvb3Rlcl9fc29jaWFscyB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG5cbiAgLmZvb3Rlcl9fbGluayB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG5cbiAgLmZvb3Rlcl9fbG9jYXRpb24ge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VideoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-video',
          templateUrl: './video.component.html',
          styleUrls: ['./video.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: _services_data_getter_service__WEBPACK_IMPORTED_MODULE_2__["DataGetterService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      firebaseConfig: {
        apiKey: 'AIzaSyCb5_-q72QfnBP2JdAEzJbYyzu87WnkpW0',
        authDomain: 'library-5ba4a.firebaseapp.com',
        databaseURL: 'https://library-5ba4a.firebaseio.com',
        projectId: 'library-5ba4a',
        storageBucket: 'library-5ba4a.appspot.com',
        messagingSenderId: '552395540499',
        appId: '1:552395540499:web:ba01de01a879baf7e997e6'
      }
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\GitHub\library\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map