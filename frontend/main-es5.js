function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

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


    var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./auth/login/login.component */
    "./src/app/auth/login/login.component.ts");
    /* harmony import */


    var _auth_register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./auth/register/register.component */
    "./src/app/auth/register/register.component.ts");
    /* harmony import */


    var _auth_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./auth/inicio/inicio.component */
    "./src/app/auth/inicio/inicio.component.ts");
    /* harmony import */


    var _auth_peliculas_peliculas_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./auth/peliculas/peliculas.component */
    "./src/app/auth/peliculas/peliculas.component.ts");

    var routes = [{
      path: "",
      component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
    }, {
      path: "register",
      component: _auth_register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"]
    }, {
      path: "inicio",
      component: _auth_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_4__["InicioComponent"]
    }, {
      path: "peliculas",
      component: _auth_peliculas_peliculas_component__WEBPACK_IMPORTED_MODULE_5__["PeliculasComponent"]
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


    var angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! angularfire2/auth */
    "./node_modules/angularfire2/auth/index.js");
    /* harmony import */


    var angularfire2_auth__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent(afAuth) {
      var _this = this;

      _classCallCheck(this, AppComponent);

      this.afAuth = afAuth;
      this.title = "frontend";
      this.cargando = true;
      this.afAuth.user.subscribe(function (usuario) {
        _this.cargando = false;
        _this.usuario = usuario;
      });
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-root",
          templateUrl: "./app.component.html",
          styleUrls: ["./app.component.scss"]
        }]
      }], function () {
        return [{
          type: angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"]
        }];
      }, null);
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


    var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./auth/login/login.component */
    "./src/app/auth/login/login.component.ts");
    /* harmony import */


    var _auth_register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./auth/register/register.component */
    "./src/app/auth/register/register.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _auth_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./auth/inicio/inicio.component */
    "./src/app/auth/inicio/inicio.component.ts");
    /* harmony import */


    var _auth_header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./auth/header/header.component */
    "./src/app/auth/header/header.component.ts");
    /* harmony import */


    var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! angularfire2/firestore */
    "./node_modules/angularfire2/firestore/index.js");
    /* harmony import */


    var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_11___default =
    /*#__PURE__*/
    __webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_11__);
    /* harmony import */


    var angularfire2__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! angularfire2 */
    "./node_modules/angularfire2/index.js");
    /* harmony import */


    var angularfire2__WEBPACK_IMPORTED_MODULE_12___default =
    /*#__PURE__*/
    __webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_12__);
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var angularfire2_auth__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! angularfire2/auth */
    "./node_modules/angularfire2/auth/index.js");
    /* harmony import */


    var angularfire2_auth__WEBPACK_IMPORTED_MODULE_14___default =
    /*#__PURE__*/
    __webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_14__);
    /* harmony import */


    var angularfire2_storage__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! angularfire2/storage */
    "./node_modules/angularfire2/storage/index.js");
    /* harmony import */


    var angularfire2_storage__WEBPACK_IMPORTED_MODULE_15___default =
    /*#__PURE__*/
    __webpack_require__.n(angularfire2_storage__WEBPACK_IMPORTED_MODULE_15__);
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _auth_peliculas_peliculas_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./auth/peliculas/peliculas.component */
    "./src/app/auth/peliculas/peliculas.component.ts");
    /* harmony import */


    var _pipes_pipes_img_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./pipes/pipes-img.pipe */
    "./src/app/pipes/pipes-img.pipe.ts");
    /* harmony import */


    var _pipes_series_pipe__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./pipes/series.pipe */
    "./src/app/pipes/series.pipe.ts");

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
      providers: [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_11__["AngularFirestore"], angularfire2_auth__WEBPACK_IMPORTED_MODULE_14__["AngularFireAuth"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], angularfire2__WEBPACK_IMPORTED_MODULE_12__["AngularFireModule"], angularfire2__WEBPACK_IMPORTED_MODULE_12__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].firebase), angularfire2_storage__WEBPACK_IMPORTED_MODULE_15__["AngularFireStorageModule"], angularfire2_firestore__WEBPACK_IMPORTED_MODULE_11__["AngularFirestoreModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_16__["StoreModule"].forRoot({}), _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _auth_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"], _auth_register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"], _auth_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_9__["InicioComponent"], _auth_header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"], _auth_peliculas_peliculas_component__WEBPACK_IMPORTED_MODULE_17__["PeliculasComponent"], _pipes_pipes_img_pipe__WEBPACK_IMPORTED_MODULE_18__["PipesImgPipe"], _pipes_series_pipe__WEBPACK_IMPORTED_MODULE_19__["SeriesPipe"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], angularfire2__WEBPACK_IMPORTED_MODULE_12__["AngularFireModule"], angularfire2__WEBPACK_IMPORTED_MODULE_12__["AngularFireModule"], angularfire2_storage__WEBPACK_IMPORTED_MODULE_15__["AngularFireStorageModule"], angularfire2_firestore__WEBPACK_IMPORTED_MODULE_11__["AngularFirestoreModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_16__["StoreRootModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _auth_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"], _auth_register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"], _auth_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_9__["InicioComponent"], _auth_header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"], _auth_peliculas_peliculas_component__WEBPACK_IMPORTED_MODULE_17__["PeliculasComponent"], _pipes_pipes_img_pipe__WEBPACK_IMPORTED_MODULE_18__["PipesImgPipe"], _pipes_series_pipe__WEBPACK_IMPORTED_MODULE_19__["SeriesPipe"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], angularfire2__WEBPACK_IMPORTED_MODULE_12__["AngularFireModule"], angularfire2__WEBPACK_IMPORTED_MODULE_12__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].firebase), angularfire2_storage__WEBPACK_IMPORTED_MODULE_15__["AngularFireStorageModule"], angularfire2_firestore__WEBPACK_IMPORTED_MODULE_11__["AngularFirestoreModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_16__["StoreModule"].forRoot({}), _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]],
          providers: [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_11__["AngularFirestore"], angularfire2_auth__WEBPACK_IMPORTED_MODULE_14__["AngularFireAuth"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/auth/header/header.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/auth/header/header.component.ts ***!
    \*************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppAuthHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var HeaderComponent =
    /*#__PURE__*/
    function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)();
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 27,
      vars: 0,
      consts: [[1, "navbar", "navbar-expand-lg", "navbar-primary", "bg-primary"], ["href", "#", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], [1, "nav-item", "active"], ["routerLink", "/inicio", 1, "nav-link"], [1, "nav-item"], ["routerLink", "/peliculas", 1, "nav-link"], ["href", "#", 1, "nav-link"], [1, "form-inline", "my-2", "my-lg-0"], [1, "mr-sm-2", "nu"], ["type", "submit", "routerLink", "/", 1, "btn", "btn-danger", "my-2", "my-sm-0"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Movie Classification");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Inicio ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Peliculas");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Series");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Favoritos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Plataforma");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "form", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h4", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "oliver11");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Salir ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]],
      styles: [".nu[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n#navbarSupportedContent[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n  color: #fff;\n}\n\n.navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9oZWFkZXIvQzpcXFVzZXJzXFxVc3VhcmlvXFxEZXNrdG9wXFxmcm9udGVkXFxmcm9udGVuZC9zcmNcXGFwcFxcYXV0aFxcaGVhZGVyXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2F1dGgvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUNDRjs7QURDQTtFQUNFLGtNQUFBO0VBR0EsV0FBQTtBQ0FGOztBREVBO0VBQ0UsV0FBQTtFQUNBLGtNQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9hdXRoL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubnUge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcbiNuYXZiYXJTdXBwb3J0ZWRDb250ZW50IHVsIGxpIGEge1xyXG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLFxyXG4gICAgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgXCJOb3RvIFNhbnNcIiwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLFxyXG4gICAgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiLCBcIk5vdG8gQ29sb3IgRW1vamlcIjtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG4ubmF2YmFyIGEge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLFxyXG4gICAgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgXCJOb3RvIFNhbnNcIiwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLFxyXG4gICAgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiLCBcIk5vdG8gQ29sb3IgRW1vamlcIjtcclxufVxyXG4iLCIubnUge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuI25hdmJhclN1cHBvcnRlZENvbnRlbnQgdWwgbGkgYSB7XG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBcIk5vdG8gU2Fuc1wiLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIiwgXCJOb3RvIENvbG9yIEVtb2ppXCI7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ubmF2YmFyIGEge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIFwiTm90byBTYW5zXCIsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiLCBcIk5vdG8gQ29sb3IgRW1vamlcIjtcbn0iXX0= */"]
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
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/auth/inicio/inicio.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/auth/inicio/inicio.component.ts ***!
    \*************************************************/

  /*! exports provided: InicioComponent */

  /***/
  function srcAppAuthInicioInicioComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InicioComponent", function () {
      return InicioComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! angularfire2/firestore */
    "./node_modules/angularfire2/firestore/index.js");
    /* harmony import */


    var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var src_app_services_imagenes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/imagenes.service */
    "./src/app/services/imagenes.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../header/header.component */
    "./src/app/auth/header/header.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _pipes_pipes_img_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../pipes/pipes-img.pipe */
    "./src/app/pipes/pipes-img.pipe.ts");
    /* harmony import */


    var _pipes_series_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../pipes/series.pipe */
    "./src/app/pipes/series.pipe.ts");

    function InicioComponent_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Pelicula:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Agregar Pelicula ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var pelicula_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](pelicula_r2.original_title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://image.tmdb.org/t/p/w500", pelicula_r2.poster_path, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function InicioComponent_div_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Serie:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Agregar Serie ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var tv_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tv_r3.original_name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://image.tmdb.org/t/p/w500", tv_r3.poster_path, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    var InicioComponent =
    /*#__PURE__*/
    function () {
      function InicioComponent(db, imgServicio, http) {
        _classCallCheck(this, InicioComponent);

        this.db = db;
        this.imgServicio = imgServicio;
        this.http = http;
        this.nombrePelicula = [];
        this.nombreTv = [];
        this.filterPost = "";
      }

      _createClass(InicioComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.imgServicio.getAllImagenesId().subscribe(function (data) {
            _this2.nombrePelicula = data["results"];
          });
          this.imgServicio.getAllImagenesId2().subscribe(function (data2) {
            _this2.nombreTv = data2["results"];
          });
        } // getAllPeliculas() {
        //   this.imgServicio.getAllImagenesId().subscribe((resultado) => {
        //     for (var i = 0; i < resultado.results.length; i++) {
        //       // console.log(resultado.results[i].original_title);
        //       this.nombrePelicula = resultado.results[i].original_title;
        //       console.log(this.nombrePelicula);
        //     }
        //   });
        // }

      }, {
        key: "BuscarClientes",
        value: function BuscarClientes(clienteBuscar) {}
      }]);

      return InicioComponent;
    }();

    InicioComponent.ɵfac = function InicioComponent_Factory(t) {
      return new (t || InicioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_imagenes_service__WEBPACK_IMPORTED_MODULE_2__["ImagenesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
    };

    InicioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: InicioComponent,
      selectors: [["app-inicio"]],
      decls: 16,
      vars: 9,
      consts: [[1, "container", "mt-5"], [1, "text-center"], ["for", "", 1, "text-center", "mt-4"], ["type", "text", "id", "buscador", "name", "filterPost", "placeholder", "Buscar...", 1, "form-control", "mt-4", 3, "ngModel", "input", "ngModelChange"], [1, "container", "mt-4"], [1, "row", "mt-4"], ["class", "col col-sm-4", 4, "ngFor", "ngForOf"], [1, "container"], [1, "col", "col-sm-4"], ["for", ""], ["alt", "", "id", "img", "height", "280", "width", "280", 3, "src"], ["id", "botones", 1, "form-group"], ["id", "b1", 1, "btn", "btn-primary"]],
      template: function InicioComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Bienvenido");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Busca tu pelicula o serie favorita a\xF1adela, calificala por tu gusto y mira en que plataforma de Striming esta ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function InicioComponent_Template_input_input_7_listener($event) {
            return ctx.BuscarClientes($event);
          })("ngModelChange", function InicioComponent_Template_input_ngModelChange_7_listener($event) {
            return ctx.filterPost = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, InicioComponent_div_10_Template, 9, 2, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "pipesImg");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, InicioComponent_div_14_Template, 9, 2, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "series");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.filterPost);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](11, 3, ctx.nombrePelicula, ctx.filterPost));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](15, 6, ctx.nombreTv, ctx.filterPost));
        }
      },
      directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]],
      pipes: [_pipes_pipes_img_pipe__WEBPACK_IMPORTED_MODULE_7__["PipesImgPipe"], _pipes_series_pipe__WEBPACK_IMPORTED_MODULE_8__["SeriesPipe"]],
      styles: ["#botones[_ngcontent-%COMP%]   #b1[_ngcontent-%COMP%] {\n  width: 280px;\n}\n\n#imgprevia[_ngcontent-%COMP%] {\n  border: 1px solid #3361ff;\n  height: 280px;\n  width: 280px;\n  color: #fff;\n  background: #3f4350;\n}\n\n#imgprevia[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-left: 0px;\n}\n\n#buscador[_ngcontent-%COMP%] {\n  width: 900px;\n  border: 2px solid #3361ff;\n  margin-left: 100px;\n}\n\n#img[_ngcontent-%COMP%] {\n  border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9pbmljaW8vQzpcXFVzZXJzXFxVc3VhcmlvXFxEZXNrdG9wXFxmcm9udGVkXFxmcm9udGVuZC9zcmNcXGFwcFxcYXV0aFxcaW5pY2lvXFxpbmljaW8uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2F1dGgvaW5pY2lvL2luaWNpby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURDQTtFQUNFLGdCQUFBO0FDRUY7O0FEQUE7RUFDRSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQ0dGOztBRERBO0VBQ0Usa0JBQUE7QUNJRiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvaW5pY2lvL2luaWNpby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNib3RvbmVzICNiMSB7XHJcbiAgd2lkdGg6IDI4MHB4O1xyXG59XHJcblxyXG4jaW1ncHJldmlhIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMzM2MWZmO1xyXG4gIGhlaWdodDogMjgwcHg7XHJcbiAgd2lkdGg6IDI4MHB4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQ6ICMzZjQzNTA7XHJcbn1cclxuI2ltZ3ByZXZpYSBpbWcge1xyXG4gIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbn1cclxuI2J1c2NhZG9yIHtcclxuICB3aWR0aDogOTAwcHg7XHJcbiAgYm9yZGVyOiAycHggc29saWQgIzMzNjFmZjtcclxuICBtYXJnaW4tbGVmdDogMTAwcHg7XHJcbn1cclxuI2ltZyB7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcbiIsIiNib3RvbmVzICNiMSB7XG4gIHdpZHRoOiAyODBweDtcbn1cblxuI2ltZ3ByZXZpYSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMzMzYxZmY7XG4gIGhlaWdodDogMjgwcHg7XG4gIHdpZHRoOiAyODBweDtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQ6ICMzZjQzNTA7XG59XG5cbiNpbWdwcmV2aWEgaW1nIHtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbn1cblxuI2J1c2NhZG9yIHtcbiAgd2lkdGg6IDkwMHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjMzM2MWZmO1xuICBtYXJnaW4tbGVmdDogMTAwcHg7XG59XG5cbiNpbWcge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InicioComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-inicio",
          templateUrl: "./inicio.component.html",
          styleUrls: ["./inicio.component.scss"]
        }]
      }], function () {
        return [{
          type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]
        }, {
          type: src_app_services_imagenes_service__WEBPACK_IMPORTED_MODULE_2__["ImagenesService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/auth/login/login.component.ts":
  /*!***********************************************!*\
    !*** ./src/app/auth/login/login.component.ts ***!
    \***********************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppAuthLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(validadorFormulario) {
        _classCallCheck(this, LoginComponent);

        this.validadorFormulario = validadorFormulario;
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.formulario = this.validadorFormulario.group({
            usuario: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 20,
      vars: 2,
      consts: [[1, "contenedor-formularios"], [1, "contenedor-tabs"], [1, "tab", "tab-segunda", "active"], ["href", ""], [1, "tab", "tab-primera"], ["routerLink", "/register"], [1, "contenido-tab"], [3, "formGroup"], [1, "contenedor-input"], ["type", "text", "required", "", "placeholder", "Usuario *", "formControlName", "usuario"], ["type", "password", "required", "", "placeholder", "Password *", "formControlName", "password"], ["type", "submit", "value", "Iniciar Sesi\xF3n", "routerLink", "/inicio", 1, "btn", "btn-primary", 3, "disabled"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Iniciar Sesi\xF3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Registrarse");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Iniciar Sesi\xF3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "form", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Iniciar Session ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formulario);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.formulario.valid);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]],
      styles: ["*[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n}\n\n*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]:before, *[_ngcontent-%COMP%]:after {\n  box-sizing: border-box;\n}\n\nbody[_ngcontent-%COMP%] {\n  background: #fff;\n  font-family: \"Ubuntu\", helvetica;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #1ab188;\n  transition: 0.5s ease;\n}\n\na[_ngcontent-%COMP%]:hover {\n  color: #179b77;\n}\n\n.contenedor-formularios[_ngcontent-%COMP%] {\n  background: rgba(19, 35, 47, 0.9);\n  padding: 40px;\n  max-width: 600px;\n  height: 600px;\n  margin: 40px auto;\n  border-radius: 4px;\n  box-shadow: 0 4px 10px 4px rgba(19, 35, 47, 0.3);\n}\n\n.contenedor-tabs[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0 0 40px 0;\n}\n\n.contenedor-tabs[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.contenedor-tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  text-decoration: none;\n  padding: 15px;\n  background: rgba(255, 255, 255, 0.25);\n  color: #fff;\n  font-size: 20px;\n  float: left;\n  width: 50%;\n  text-align: center;\n  cursor: pointer;\n  transition: 0.5s ease;\n}\n\n.contenedor-tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: #179b77;\n  color: #fff;\n}\n\n.contenedor-tabs[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  background: #1ab188;\n  color: #fff;\n}\n\n.contenido-tab[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-child {\n  display: none;\n}\n\nh1[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #fff;\n  font-weight: 300;\n  margin: 0 0 40px;\n}\n\nlabel[_ngcontent-%COMP%] {\n  position: absolute;\n  transform: translateY(6px);\n  left: 13px;\n  color: rgba(255, 255, 255, 0.5);\n  transition: all 0.25s ease;\n  -webkit-backface-visibility: hidden;\n  pointer-events: none;\n  font-size: 22px;\n}\n\nlabel[_ngcontent-%COMP%]   .req[_ngcontent-%COMP%] {\n  margin: 2px;\n  color: #1ab188;\n}\n\nlabel.active[_ngcontent-%COMP%] {\n  transform: translateY(50px);\n  left: 2px;\n  font-size: 14px;\n}\n\nlabel.active[_ngcontent-%COMP%]   .req[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n\nlabel.highlight[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\ninput[_ngcontent-%COMP%] {\n  font-size: 22px;\n  display: block;\n  width: 100%;\n  height: 100%;\n  padding: 5px 10px;\n  background: none;\n  background-image: none;\n  border: 1px solid #fff;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  color: #fff;\n  border-radius: 0;\n  transition: all 0.5s ease;\n  border-radius: 5px;\n}\n\ninput[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #1ab188;\n}\n\n.contenedor-input[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 40px;\n}\n\n.fila-arriba[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.fila-arriba[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  float: left;\n  width: 48%;\n  margin-right: 4%;\n}\n\n.fila-arriba[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child {\n  margin: 0;\n}\n\n.btn[_ngcontent-%COMP%] {\n  border: 0;\n  border-radius: 5px;\n  padding: 15px 0;\n  font-size: 2rem;\n  background: #1ab188;\n  color: #fff;\n}\n\n.btn-primary[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.forgot[_ngcontent-%COMP%] {\n  margin-top: -20px;\n  text-align: right;\n  margin-bottom: 20px;\n}\n\n@media screen and (max-width: 500px) {\n  .fila-arriba[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .fila-arriba[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child {\n    margin-bottom: 40px;\n  }\n}\n\n@media screen and (max-width: 400px) {\n  .contenedor-tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9sb2dpbi9DOlxcVXNlcnNcXFVzdWFyaW9cXERlc2t0b3BcXGZyb250ZWRcXGZyb250ZW5kL3NyY1xcYXBwXFxhdXRoXFxsb2dpblxcbG9naW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUJBO0VBQ0UsVUFBQTtFQUNBLFNBQUE7QUNsQkY7O0FEcUJBOzs7RUFHRSxzQkFBQTtBQ2xCRjs7QURxQkE7RUFDRSxnQkFBQTtFQUNBLGdDQWhCaUI7QUNGbkI7O0FEcUJBO0VBQ0UscUJBQUE7RUFDQSxjQWpDZ0I7RUFrQ2hCLHFCQUFBO0FDbEJGOztBRG9CRTtFQUNFLGNBbkNtQjtBQ2lCdkI7O0FEc0JBO0VBQ0UsaUNBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFyQ0c7RUFzQ0gsZ0RBQUE7QUNuQkY7O0FEc0JBO0VBQ0UsZ0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUNuQkY7O0FEcUJFO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FDbkJKOztBRHNCRTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLFdBL0RTO0VBZ0VULGVBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FDcEJKOztBRHNCSTtFQUNFLG1CQTFFaUI7RUEyRWpCLFdBL0VHO0FDMkRUOztBRHdCRTtFQUNFLG1CQWxGYztFQW1GZCxXQXJGSztBQytEVDs7QUQwQkE7RUFDRSxhQUFBO0FDdkJGOztBRDBCQTtFQUNFLGtCQUFBO0VBQ0EsV0EvRk87RUFnR1AsZ0JBdkZLO0VBd0ZMLGdCQUFBO0FDdkJGOztBRDBCQTtFQUNFLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxVQUFBO0VBQ0EsK0JBQUE7RUFDQSwwQkFBQTtFQUNBLG1DQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0FDdkJGOztBRHlCRTtFQUNFLFdBQUE7RUFDQSxjQTlHYztBQ3VGbEI7O0FEMkJBO0VBQ0UsMkJBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtBQ3hCRjs7QUQwQkU7RUFDRSxVQUFBO0FDeEJKOztBRDRCQTtFQUNFLFdBL0hPO0FDc0dUOztBRDRCQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBOUlPO0VBK0lQLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQ3pCRjs7QUQwQkU7RUFDRSxhQUFBO0VBQ0EscUJBbEpjO0FDMEhsQjs7QUQ0QkE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FDekJGOztBRDZCRTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQzFCSjs7QUQ2QkU7RUFDRSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FDM0JKOztBRDZCSTtFQUNFLFNBQUE7QUMzQk47O0FEZ0NBO0VBQ0UsU0FBQTtFQUVBLGtCQUFBO0VBRUEsZUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFwTGdCO0VBcUxoQixXQXZMTztBQ3dKVDs7QURrQ0E7RUFDRSxXQUFBO0FDL0JGOztBRGtDQTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQy9CRjs7QURtQ0E7RUFFSTtJQUNFLFdBQUE7RUNqQ0o7RURtQ0k7SUFDRSxtQkFBQTtFQ2pDTjtBQUNGOztBRHNDQTtFQUVJO0lBQ0UsV0FBQTtFQ3JDSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRib2R5LWJnOiAjYzFiZGJhO1xyXG4kZm9ybS1iZzogIzEzMjMyZjtcclxuJGJsYW5jbzogI2ZmZjtcclxuXHJcbiRjb2xvci1wcmluY2lwYWw6ICMxYWIxODg7XHJcbiRjb2xvci1wcmluY2lwYWwtbGlnaHQ6IGxpZ2h0ZW4oJGNvbG9yLXByaW5jaXBhbCwgNSUpO1xyXG4kY29sb3ItcHJpbmNpcGFsLWRhcms6IGRhcmtlbigkY29sb3ItcHJpbmNpcGFsLCA1JSk7XHJcblxyXG4kZ3Jpcy1saWdodDogI2ZmZjtcclxuJGdyaXM6ICNmZmY7XHJcblxyXG4kdGhpbjogMzAwO1xyXG4kbm9ybWFsOiA0MDA7XHJcbiRib2xkOiA2MDA7XHJcbiRicjogNHB4O1xyXG5cclxuJGZ1ZW50ZS1wcmluY2lwYWw6IFwiVWJ1bnR1XCIsIGhlbHZldGljYTtcclxuJGZ1ZW50ZS1zZWN1bmRhcmlhOiBcIlJhbGV3YXlcIiwgYXJpYWw7XHJcblxyXG4qIHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuKixcclxuKjpiZWZvcmUsXHJcbio6YWZ0ZXIge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgZm9udC1mYW1pbHk6ICRmdWVudGUtcHJpbmNpcGFsO1xyXG59XHJcblxyXG5hIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6ICRjb2xvci1wcmluY2lwYWw7XHJcbiAgdHJhbnNpdGlvbjogMC41cyBlYXNlO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGNvbG9yOiAkY29sb3ItcHJpbmNpcGFsLWRhcms7XHJcbiAgfVxyXG59XHJcblxyXG4uY29udGVuZWRvci1mb3JtdWxhcmlvcyB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgkZm9ybS1iZywgMC45KTtcclxuICBwYWRkaW5nOiA0MHB4O1xyXG4gIG1heC13aWR0aDogNjAwcHg7XHJcbiAgaGVpZ2h0OiA2MDBweDtcclxuICBtYXJnaW46IDQwcHggYXV0bztcclxuICBib3JkZXItcmFkaXVzOiAkYnI7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggMTBweCA0cHggcmdiYSgkZm9ybS1iZywgMC4zKTtcclxufVxyXG5cclxuLmNvbnRlbmVkb3ItdGFicyB7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMCAwIDQwcHggMDtcclxuXHJcbiAgJjphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgICBjbGVhcjogYm90aDtcclxuICB9XHJcblxyXG4gIGxpIGEge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgkZ3Jpcy1saWdodCwgMC4yNSk7XHJcbiAgICBjb2xvcjogJGdyaXMtbGlnaHQ7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzIGVhc2U7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICRjb2xvci1wcmluY2lwYWwtZGFyaztcclxuICAgICAgY29sb3I6ICRibGFuY287XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYWN0aXZlIGEge1xyXG4gICAgYmFja2dyb3VuZDogJGNvbG9yLXByaW5jaXBhbDtcclxuICAgIGNvbG9yOiAkYmxhbmNvO1xyXG4gIH1cclxufVxyXG5cclxuLmNvbnRlbmlkby10YWIgPiBkaXY6bGFzdC1jaGlsZCB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuaDEge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogJGJsYW5jbztcclxuICBmb250LXdlaWdodDogJHRoaW47XHJcbiAgbWFyZ2luOiAwIDAgNDBweDtcclxufVxyXG5cclxubGFiZWwge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNnB4KTtcclxuICBsZWZ0OiAxM3B4O1xyXG4gIGNvbG9yOiByZ2JhKCRibGFuY28sIDAuNSk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2U7XHJcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG5cclxuICAucmVxIHtcclxuICAgIG1hcmdpbjogMnB4O1xyXG4gICAgY29sb3I6ICRjb2xvci1wcmluY2lwYWw7XHJcbiAgfVxyXG59XHJcblxyXG5sYWJlbC5hY3RpdmUge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MHB4KTtcclxuICBsZWZ0OiAycHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG5cclxuICAucmVxIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG59XHJcblxyXG5sYWJlbC5oaWdobGlnaHQge1xyXG4gIGNvbG9yOiAkYmxhbmNvO1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwYWRkaW5nOiA1cHggMTBweDtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJGdyaXMtbGlnaHQ7XHJcbiAgYm9yZGVyLXRvcDogbm9uZTtcclxuICBib3JkZXItbGVmdDogbm9uZTtcclxuICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgY29sb3I6ICRibGFuY287XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAmOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3JkZXItY29sb3I6ICRjb2xvci1wcmluY2lwYWw7XHJcbiAgfVxyXG59XHJcblxyXG4uY29udGVuZWRvci1pbnB1dCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbn1cclxuXHJcbi5maWxhLWFycmliYSB7XHJcbiAgJjphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgICBjbGVhcjogYm90aDtcclxuICB9XHJcblxyXG4gIGRpdiB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiA0OCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDQlO1xyXG5cclxuICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gIGJvcmRlcjogMDtcclxuXHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG5cclxuICBwYWRkaW5nOiAxNXB4IDA7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG4gIGJhY2tncm91bmQ6ICRjb2xvci1wcmluY2lwYWw7XHJcbiAgY29sb3I6ICRibGFuY287XHJcbn1cclxuXHJcbi5idG4tcHJpbWFyeSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5mb3Jnb3Qge1xyXG4gIG1hcmdpbi10b3A6IC0yMHB4O1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi8vIE1lZGlhcXVlcmllc1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gIC5maWxhLWFycmliYSB7XHJcbiAgICBkaXYge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpIHtcclxuICAuY29udGVuZWRvci10YWJzIHtcclxuICAgIGxpIGEge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiKiB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cblxuKixcbio6YmVmb3JlLFxuKjphZnRlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgaGVsdmV0aWNhO1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzFhYjE4ODtcbiAgdHJhbnNpdGlvbjogMC41cyBlYXNlO1xufVxuYTpob3ZlciB7XG4gIGNvbG9yOiAjMTc5Yjc3O1xufVxuXG4uY29udGVuZWRvci1mb3JtdWxhcmlvcyB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTksIDM1LCA0NywgMC45KTtcbiAgcGFkZGluZzogNDBweDtcbiAgbWF4LXdpZHRoOiA2MDBweDtcbiAgaGVpZ2h0OiA2MDBweDtcbiAgbWFyZ2luOiA0MHB4IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNoYWRvdzogMCA0cHggMTBweCA0cHggcmdiYSgxOSwgMzUsIDQ3LCAwLjMpO1xufVxuXG4uY29udGVuZWRvci10YWJzIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwIDAgNDBweCAwO1xufVxuLmNvbnRlbmVkb3ItdGFiczphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBjbGVhcjogYm90aDtcbn1cbi5jb250ZW5lZG9yLXRhYnMgbGkgYSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogNTAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogMC41cyBlYXNlO1xufVxuLmNvbnRlbmVkb3ItdGFicyBsaSBhOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzE3OWI3NztcbiAgY29sb3I6ICNmZmY7XG59XG4uY29udGVuZWRvci10YWJzIC5hY3RpdmUgYSB7XG4gIGJhY2tncm91bmQ6ICMxYWIxODg7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uY29udGVuaWRvLXRhYiA+IGRpdjpsYXN0LWNoaWxkIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuaDEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogMzAwO1xuICBtYXJnaW46IDAgMCA0MHB4O1xufVxuXG5sYWJlbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDZweCk7XG4gIGxlZnQ6IDEzcHg7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlO1xuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn1cbmxhYmVsIC5yZXEge1xuICBtYXJnaW46IDJweDtcbiAgY29sb3I6ICMxYWIxODg7XG59XG5cbmxhYmVsLmFjdGl2ZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MHB4KTtcbiAgbGVmdDogMnB4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG5sYWJlbC5hY3RpdmUgLnJlcSB7XG4gIG9wYWNpdHk6IDA7XG59XG5cbmxhYmVsLmhpZ2hsaWdodCB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG5pbnB1dCB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xuICBib3JkZXItdG9wOiBub25lO1xuICBib3JkZXItbGVmdDogbm9uZTtcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuaW5wdXQ6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXItY29sb3I6ICMxYWIxODg7XG59XG5cbi5jb250ZW5lZG9yLWlucHV0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xufVxuXG4uZmlsYS1hcnJpYmE6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgY2xlYXI6IGJvdGg7XG59XG4uZmlsYS1hcnJpYmEgZGl2IHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiA0OCU7XG4gIG1hcmdpbi1yaWdodDogNCU7XG59XG4uZmlsYS1hcnJpYmEgZGl2Omxhc3QtY2hpbGQge1xuICBtYXJnaW46IDA7XG59XG5cbi5idG4ge1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMTVweCAwO1xuICBmb250LXNpemU6IDJyZW07XG4gIGJhY2tncm91bmQ6ICMxYWIxODg7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uYnRuLXByaW1hcnkge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmZvcmdvdCB7XG4gIG1hcmdpbi10b3A6IC0yMHB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgLmZpbGEtYXJyaWJhIGRpdiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmZpbGEtYXJyaWJhIGRpdjpsYXN0LWNoaWxkIHtcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MDBweCkge1xuICAuY29udGVuZWRvci10YWJzIGxpIGEge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-login",
          templateUrl: "./login.component.html",
          styleUrls: ["./login.component.scss"]
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/auth/peliculas/peliculas.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/auth/peliculas/peliculas.component.ts ***!
    \*******************************************************/

  /*! exports provided: PeliculasComponent */

  /***/
  function srcAppAuthPeliculasPeliculasComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PeliculasComponent", function () {
      return PeliculasComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../header/header.component */
    "./src/app/auth/header/header.component.ts");

    var PeliculasComponent =
    /*#__PURE__*/
    function () {
      function PeliculasComponent() {
        _classCallCheck(this, PeliculasComponent);
      }

      _createClass(PeliculasComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PeliculasComponent;
    }();

    PeliculasComponent.ɵfac = function PeliculasComponent_Factory(t) {
      return new (t || PeliculasComponent)();
    };

    PeliculasComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PeliculasComponent,
      selectors: [["app-peliculas"]],
      decls: 47,
      vars: 0,
      consts: [[1, "container", "mt-3"], [1, "text-center"], [1, "row", "mt-3"], [1, "card", "col-sm-4", 2, "width", "18rem"], ["src", "https://image.tmdb.org/t/p/w500/gbw7Tm7SUyiTMhI2B8yHk4OcT9I.jpg", "height", "220", "alt", "Card image cap", 1, "card-img-top"], [1, "card-body"], [1, "card-title"], [1, "card-text"], ["src", "https://image.tmdb.org/t/p/w500/sddV6vaUC6x37icJS3opIXTXB07.jpg", "height", "220", "alt", "Card image cap", 1, "card-img-top"], ["src", "https://image.tmdb.org/t/p/w500/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg", "height", "220", "alt", "Card image cap", 1, "card-img-top"], [1, "card", "col-sm-4", "mt-3", 2, "width", "18rem"], ["src", "https://image.tmdb.org/t/p/w500//f5F4cRhQdUbyVbB5lTNCwUzD6BP.jpg", "height", "220", "alt", "Card image cap", 1, "card-img-top"], ["src", "https://image.tmdb.org/t/p/w500//oLma4sWjqlXVr0E3jpaXQCytuG9.jpg", "height", "220", "alt", "Card image cap", 1, "card-img-top"], ["src", "https://image.tmdb.org/t/p/w500//sd4xN5xi8tKRPrJOWwNiZEile7f.jpg", "height", "220", "alt", "Card image cap", 1, "card-img-top"]],
      template: function PeliculasComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Peliculas");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h5", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "El profesional");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Some quick example text to build on the card title and make up the bulk of the card's content. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h5", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "STAR TREK");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Some quick example text to build on the card title and make up the bulk of the card's content. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h5", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "AD ASTRA");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Some quick example text to build on the card title and make up the bulk of the card's content. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h5", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "JOKER");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Some quick example text to build on the card title and make up the bulk of the card's content. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h5", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Jumanji: The Next Level");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Some quick example text to build on the card title and make up the bulk of the card's content. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h5", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Cars");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Some quick example text to build on the card title and make up the bulk of the card's content. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvcGVsaWN1bGFzL3BlbGljdWxhcy5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PeliculasComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-peliculas",
          templateUrl: "./peliculas.component.html",
          styleUrls: ["./peliculas.component.scss"]
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/auth/register/register.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/auth/register/register.component.ts ***!
    \*****************************************************/

  /*! exports provided: RegisterComponent */

  /***/
  function srcAppAuthRegisterRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
      return RegisterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var RegisterComponent =
    /*#__PURE__*/
    function () {
      function RegisterComponent(validadorFormulario) {
        _classCallCheck(this, RegisterComponent);

        this.validadorFormulario = validadorFormulario;
      }

      _createClass(RegisterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.formularioRegistro = this.validadorFormulario.group({
            nombre: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            apellido: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            usuario: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email])],
            password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            confirmPW: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });
        }
      }]);

      return RegisterComponent;
    }();

    RegisterComponent.ɵfac = function RegisterComponent_Factory(t) {
      return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
    };

    RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RegisterComponent,
      selectors: [["app-register"]],
      decls: 28,
      vars: 2,
      consts: [["lang", "en"], [1, "contenedor-formularios"], [1, "contenedor-tabs"], [1, "tab", "tab-segunda"], ["href", ""], [1, "tab", "tab-primera", "active"], ["routerLink", "/app-register"], [1, "contenido-tab"], [3, "formGroup"], [1, "fila-arriba"], [1, "contenedor-input"], ["type", "text", "placeholder", "Nombre *", "formControlName", "nombre"], ["type", "text", "placeholder", "Apellido *", "formControlName", "apellido"], ["type", "text", "placeholder", "Usuario *", "formControlName", "usuario"], ["type", "email", "placeholder", "Email *", "formControlName", "email"], ["type", "password", "placeholder", "Password", "formControlName", "password"], ["type", "password", "placeholder", "Repetir Contrase\xF1a *", "formControlName", "confirmPW"], ["type", "submit", "value", "Registrarse", 1, "btn", "btn-primary", 3, "disabled"]],
      template: function RegisterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Iniciar Sesi\xF3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Registrarse");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Registrarse");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "form", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formularioRegistro);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.formularioRegistro.invalid);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]],
      styles: ["*[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n}\n\n*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]:before, *[_ngcontent-%COMP%]:after {\n  box-sizing: border-box;\n}\n\nbody[_ngcontent-%COMP%] {\n  background: #fff;\n  font-family: \"Ubuntu\", helvetica;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #1ab188;\n  transition: 0.5s ease;\n}\n\na[_ngcontent-%COMP%]:hover {\n  color: #179b77;\n}\n\n.contenedor-formularios[_ngcontent-%COMP%] {\n  background: rgba(19, 35, 47, 0.9);\n  padding: 40px;\n  max-width: 600px;\n  margin: 40px auto;\n  border-radius: 4px;\n  box-shadow: 0 4px 10px 4px rgba(19, 35, 47, 0.3);\n}\n\n.contenedor-tabs[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0 0 40px 0;\n}\n\n.contenedor-tabs[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.contenedor-tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  text-decoration: none;\n  padding: 15px;\n  background: rgba(160, 179, 176, 0.25);\n  color: #a0b3b0;\n  font-size: 20px;\n  float: left;\n  width: 50%;\n  text-align: center;\n  cursor: pointer;\n  transition: 0.5s ease;\n}\n\n.contenedor-tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: #179b77;\n  color: #fff;\n}\n\n.contenedor-tabs[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  background: #1ab188;\n  color: #fff;\n}\n\n.contenido-tab[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-child {\n  display: none;\n}\n\nh1[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #fff;\n  font-weight: 300;\n  margin: 0 0 40px;\n}\n\nlabel[_ngcontent-%COMP%] {\n  position: absolute;\n  transform: translateY(6px);\n  left: 13px;\n  color: rgba(255, 255, 255, 0.5);\n  transition: all 0.25s ease;\n  -webkit-backface-visibility: hidden;\n  pointer-events: none;\n  font-size: 22px;\n}\n\nlabel[_ngcontent-%COMP%]   .req[_ngcontent-%COMP%] {\n  margin: 2px;\n  color: #1ab188;\n}\n\nlabel.active[_ngcontent-%COMP%] {\n  transform: translateY(50px);\n  left: 2px;\n  font-size: 14px;\n}\n\nlabel.active[_ngcontent-%COMP%]   .req[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n\nlabel.highlight[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\ninput[_ngcontent-%COMP%] {\n  font-size: 22px;\n  display: block;\n  width: 100%;\n  height: 100%;\n  padding: 5px 10px;\n  background: none;\n  background-image: none;\n  border: 1px solid #a0b3b0;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  color: #fff;\n  border-radius: 0;\n  transition: all 0.5s ease;\n  border-radius: 5px;\n}\n\ninput[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #1ab188;\n}\n\n.contenedor-input[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 40px;\n}\n\n.fila-arriba[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.fila-arriba[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  float: left;\n  width: 48%;\n  margin-right: 4%;\n}\n\n.fila-arriba[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child {\n  margin: 0;\n}\n\n.btn[_ngcontent-%COMP%] {\n  border: 0;\n  border-radius: 5px;\n  padding: 15px 0;\n  font-size: 2rem;\n  background: #1ab188;\n  color: #fff;\n}\n\n.btn-primary[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.forgot[_ngcontent-%COMP%] {\n  margin-top: -20px;\n  text-align: right;\n  margin-bottom: 20px;\n}\n\n@media screen and (max-width: 500px) {\n  .fila-arriba[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .fila-arriba[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child {\n    margin-bottom: 40px;\n  }\n}\n\n@media screen and (max-width: 400px) {\n  .contenedor-tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9yZWdpc3Rlci9DOlxcVXNlcnNcXFVzdWFyaW9cXERlc2t0b3BcXGZyb250ZWRcXGZyb250ZW5kL3NyY1xcYXBwXFxhdXRoXFxyZWdpc3RlclxccmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2F1dGgvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUJBO0VBQ0UsVUFBQTtFQUNBLFNBQUE7QUNsQkY7O0FEcUJBOzs7RUFHRSxzQkFBQTtBQ2xCRjs7QURxQkE7RUFDRSxnQkFBQTtFQUNBLGdDQWhCaUI7QUNGbkI7O0FEcUJBO0VBQ0UscUJBQUE7RUFDQSxjQWpDZ0I7RUFrQ2hCLHFCQUFBO0FDbEJGOztBRG9CRTtFQUNFLGNBbkNtQjtBQ2lCdkI7O0FEc0JBO0VBQ0UsaUNBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQXBDRztFQXFDSCxnREFBQTtBQ25CRjs7QURzQkE7RUFDRSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQ25CRjs7QURxQkU7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUNuQko7O0FEc0JFO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLHFDQUFBO0VBQ0EsY0E5RFM7RUErRFQsZUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUNwQko7O0FEc0JJO0VBQ0UsbUJBekVpQjtFQTBFakIsV0E5RUc7QUMwRFQ7O0FEd0JFO0VBQ0UsbUJBakZjO0VBa0ZkLFdBcEZLO0FDOERUOztBRDBCQTtFQUNFLGFBQUE7QUN2QkY7O0FEMEJBO0VBQ0Usa0JBQUE7RUFDQSxXQTlGTztFQStGUCxnQkF0Rks7RUF1RkwsZ0JBQUE7QUN2QkY7O0FEMEJBO0VBQ0Usa0JBQUE7RUFDQSwwQkFBQTtFQUNBLFVBQUE7RUFDQSwrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsbUNBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7QUN2QkY7O0FEeUJFO0VBQ0UsV0FBQTtFQUNBLGNBN0djO0FDc0ZsQjs7QUQyQkE7RUFDRSwyQkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FDeEJGOztBRDBCRTtFQUNFLFVBQUE7QUN4Qko7O0FENEJBO0VBQ0UsV0E5SE87QUNxR1Q7O0FENEJBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0E3SU87RUE4SVAsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FDekJGOztBRDBCRTtFQUNFLGFBQUE7RUFDQSxxQkFqSmM7QUN5SGxCOztBRDRCQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUN6QkY7O0FENkJFO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FDMUJKOztBRDZCRTtFQUNFLFdBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUMzQko7O0FENkJJO0VBQ0UsU0FBQTtBQzNCTjs7QURnQ0E7RUFDRSxTQUFBO0VBRUEsa0JBQUE7RUFFQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQW5MZ0I7RUFvTGhCLFdBdExPO0FDdUpUOztBRGtDQTtFQUNFLFdBQUE7QUMvQkY7O0FEa0NBO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDL0JGOztBRG1DQTtFQUVJO0lBQ0UsV0FBQTtFQ2pDSjtFRG1DSTtJQUNFLG1CQUFBO0VDakNOO0FBQ0Y7O0FEc0NBO0VBRUk7SUFDRSxXQUFBO0VDckNKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hdXRoL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGJvZHktYmc6ICNjMWJkYmE7XHJcbiRmb3JtLWJnOiAjMTMyMzJmO1xyXG4kYmxhbmNvOiAjZmZmO1xyXG5cclxuJGNvbG9yLXByaW5jaXBhbDogIzFhYjE4ODtcclxuJGNvbG9yLXByaW5jaXBhbC1saWdodDogbGlnaHRlbigkY29sb3ItcHJpbmNpcGFsLCA1JSk7XHJcbiRjb2xvci1wcmluY2lwYWwtZGFyazogZGFya2VuKCRjb2xvci1wcmluY2lwYWwsIDUlKTtcclxuXHJcbiRncmlzLWxpZ2h0OiAjYTBiM2IwO1xyXG4kZ3JpczogI2RkZDtcclxuXHJcbiR0aGluOiAzMDA7XHJcbiRub3JtYWw6IDQwMDtcclxuJGJvbGQ6IDYwMDtcclxuJGJyOiA0cHg7XHJcblxyXG4kZnVlbnRlLXByaW5jaXBhbDogXCJVYnVudHVcIiwgaGVsdmV0aWNhO1xyXG4kZnVlbnRlLXNlY3VuZGFyaWE6IFwiUmFsZXdheVwiLCBhcmlhbDtcclxuXHJcbioge1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4qLFxyXG4qOmJlZm9yZSxcclxuKjphZnRlciB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBmb250LWZhbWlseTogJGZ1ZW50ZS1wcmluY2lwYWw7XHJcbn1cclxuXHJcbmEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogJGNvbG9yLXByaW5jaXBhbDtcclxuICB0cmFuc2l0aW9uOiAwLjVzIGVhc2U7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgY29sb3I6ICRjb2xvci1wcmluY2lwYWwtZGFyaztcclxuICB9XHJcbn1cclxuXHJcbi5jb250ZW5lZG9yLWZvcm11bGFyaW9zIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKCRmb3JtLWJnLCAwLjkpO1xyXG4gIHBhZGRpbmc6IDQwcHg7XHJcbiAgbWF4LXdpZHRoOiA2MDBweDtcclxuICBtYXJnaW46IDQwcHggYXV0bztcclxuICBib3JkZXItcmFkaXVzOiAkYnI7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggMTBweCA0cHggcmdiYSgkZm9ybS1iZywgMC4zKTtcclxufVxyXG5cclxuLmNvbnRlbmVkb3ItdGFicyB7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMCAwIDQwcHggMDtcclxuXHJcbiAgJjphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgICBjbGVhcjogYm90aDtcclxuICB9XHJcblxyXG4gIGxpIGEge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgkZ3Jpcy1saWdodCwgMC4yNSk7XHJcbiAgICBjb2xvcjogJGdyaXMtbGlnaHQ7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzIGVhc2U7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICRjb2xvci1wcmluY2lwYWwtZGFyaztcclxuICAgICAgY29sb3I6ICRibGFuY287XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYWN0aXZlIGEge1xyXG4gICAgYmFja2dyb3VuZDogJGNvbG9yLXByaW5jaXBhbDtcclxuICAgIGNvbG9yOiAkYmxhbmNvO1xyXG4gIH1cclxufVxyXG5cclxuLmNvbnRlbmlkby10YWIgPiBkaXY6bGFzdC1jaGlsZCB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuaDEge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogJGJsYW5jbztcclxuICBmb250LXdlaWdodDogJHRoaW47XHJcbiAgbWFyZ2luOiAwIDAgNDBweDtcclxufVxyXG5cclxubGFiZWwge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNnB4KTtcclxuICBsZWZ0OiAxM3B4O1xyXG4gIGNvbG9yOiByZ2JhKCRibGFuY28sIDAuNSk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2U7XHJcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG5cclxuICAucmVxIHtcclxuICAgIG1hcmdpbjogMnB4O1xyXG4gICAgY29sb3I6ICRjb2xvci1wcmluY2lwYWw7XHJcbiAgfVxyXG59XHJcblxyXG5sYWJlbC5hY3RpdmUge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MHB4KTtcclxuICBsZWZ0OiAycHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG5cclxuICAucmVxIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG59XHJcblxyXG5sYWJlbC5oaWdobGlnaHQge1xyXG4gIGNvbG9yOiAkYmxhbmNvO1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwYWRkaW5nOiA1cHggMTBweDtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJGdyaXMtbGlnaHQ7XHJcbiAgYm9yZGVyLXRvcDogbm9uZTtcclxuICBib3JkZXItbGVmdDogbm9uZTtcclxuICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgY29sb3I6ICRibGFuY287XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAmOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3JkZXItY29sb3I6ICRjb2xvci1wcmluY2lwYWw7XHJcbiAgfVxyXG59XHJcblxyXG4uY29udGVuZWRvci1pbnB1dCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbn1cclxuXHJcbi5maWxhLWFycmliYSB7XHJcbiAgJjphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgICBjbGVhcjogYm90aDtcclxuICB9XHJcblxyXG4gIGRpdiB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiA0OCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDQlO1xyXG5cclxuICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gIGJvcmRlcjogMDtcclxuXHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG5cclxuICBwYWRkaW5nOiAxNXB4IDA7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG4gIGJhY2tncm91bmQ6ICRjb2xvci1wcmluY2lwYWw7XHJcbiAgY29sb3I6ICRibGFuY287XHJcbn1cclxuXHJcbi5idG4tcHJpbWFyeSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5mb3Jnb3Qge1xyXG4gIG1hcmdpbi10b3A6IC0yMHB4O1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi8vIE1lZGlhcXVlcmllc1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gIC5maWxhLWFycmliYSB7XHJcbiAgICBkaXYge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpIHtcclxuICAuY29udGVuZWRvci10YWJzIHtcclxuICAgIGxpIGEge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiKiB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cblxuKixcbio6YmVmb3JlLFxuKjphZnRlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgaGVsdmV0aWNhO1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzFhYjE4ODtcbiAgdHJhbnNpdGlvbjogMC41cyBlYXNlO1xufVxuYTpob3ZlciB7XG4gIGNvbG9yOiAjMTc5Yjc3O1xufVxuXG4uY29udGVuZWRvci1mb3JtdWxhcmlvcyB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTksIDM1LCA0NywgMC45KTtcbiAgcGFkZGluZzogNDBweDtcbiAgbWF4LXdpZHRoOiA2MDBweDtcbiAgbWFyZ2luOiA0MHB4IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNoYWRvdzogMCA0cHggMTBweCA0cHggcmdiYSgxOSwgMzUsIDQ3LCAwLjMpO1xufVxuXG4uY29udGVuZWRvci10YWJzIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwIDAgNDBweCAwO1xufVxuLmNvbnRlbmVkb3ItdGFiczphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBjbGVhcjogYm90aDtcbn1cbi5jb250ZW5lZG9yLXRhYnMgbGkgYSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTYwLCAxNzksIDE3NiwgMC4yNSk7XG4gIGNvbG9yOiAjYTBiM2IwO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogNTAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogMC41cyBlYXNlO1xufVxuLmNvbnRlbmVkb3ItdGFicyBsaSBhOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzE3OWI3NztcbiAgY29sb3I6ICNmZmY7XG59XG4uY29udGVuZWRvci10YWJzIC5hY3RpdmUgYSB7XG4gIGJhY2tncm91bmQ6ICMxYWIxODg7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uY29udGVuaWRvLXRhYiA+IGRpdjpsYXN0LWNoaWxkIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuaDEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogMzAwO1xuICBtYXJnaW46IDAgMCA0MHB4O1xufVxuXG5sYWJlbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDZweCk7XG4gIGxlZnQ6IDEzcHg7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlO1xuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn1cbmxhYmVsIC5yZXEge1xuICBtYXJnaW46IDJweDtcbiAgY29sb3I6ICMxYWIxODg7XG59XG5cbmxhYmVsLmFjdGl2ZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MHB4KTtcbiAgbGVmdDogMnB4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG5sYWJlbC5hY3RpdmUgLnJlcSB7XG4gIG9wYWNpdHk6IDA7XG59XG5cbmxhYmVsLmhpZ2hsaWdodCB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG5pbnB1dCB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuICBib3JkZXI6IDFweCBzb2xpZCAjYTBiM2IwO1xuICBib3JkZXItdG9wOiBub25lO1xuICBib3JkZXItbGVmdDogbm9uZTtcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuaW5wdXQ6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXItY29sb3I6ICMxYWIxODg7XG59XG5cbi5jb250ZW5lZG9yLWlucHV0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xufVxuXG4uZmlsYS1hcnJpYmE6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgY2xlYXI6IGJvdGg7XG59XG4uZmlsYS1hcnJpYmEgZGl2IHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiA0OCU7XG4gIG1hcmdpbi1yaWdodDogNCU7XG59XG4uZmlsYS1hcnJpYmEgZGl2Omxhc3QtY2hpbGQge1xuICBtYXJnaW46IDA7XG59XG5cbi5idG4ge1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMTVweCAwO1xuICBmb250LXNpemU6IDJyZW07XG4gIGJhY2tncm91bmQ6ICMxYWIxODg7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uYnRuLXByaW1hcnkge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmZvcmdvdCB7XG4gIG1hcmdpbi10b3A6IC0yMHB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgLmZpbGEtYXJyaWJhIGRpdiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmZpbGEtYXJyaWJhIGRpdjpsYXN0LWNoaWxkIHtcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MDBweCkge1xuICAuY29udGVuZWRvci10YWJzIGxpIGEge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-register",
          templateUrl: "./register.component.html",
          styleUrls: ["./register.component.scss"]
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pipes/pipes-img.pipe.ts":
  /*!*****************************************!*\
    !*** ./src/app/pipes/pipes-img.pipe.ts ***!
    \*****************************************/

  /*! exports provided: PipesImgPipe */

  /***/
  function srcAppPipesPipesImgPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PipesImgPipe", function () {
      return PipesImgPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PipesImgPipe =
    /*#__PURE__*/
    function () {
      function PipesImgPipe() {
        _classCallCheck(this, PipesImgPipe);
      }

      _createClass(PipesImgPipe, [{
        key: "transform",
        value: function transform(value, args) {
          var resultadoPost = [];

          var _iterator = _createForOfIteratorHelper(value),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var post = _step.value;

              if (post.original_title.toLowerCase().indexOf(args.toLowerCase()) > -1) {
                resultadoPost.push(post);
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          return resultadoPost;
        }
      }]);

      return PipesImgPipe;
    }();

    PipesImgPipe.ɵfac = function PipesImgPipe_Factory(t) {
      return new (t || PipesImgPipe)();
    };

    PipesImgPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "pipesImg",
      type: PipesImgPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PipesImgPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: "pipesImg"
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pipes/series.pipe.ts":
  /*!**************************************!*\
    !*** ./src/app/pipes/series.pipe.ts ***!
    \**************************************/

  /*! exports provided: SeriesPipe */

  /***/
  function srcAppPipesSeriesPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SeriesPipe", function () {
      return SeriesPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SeriesPipe =
    /*#__PURE__*/
    function () {
      function SeriesPipe() {
        _classCallCheck(this, SeriesPipe);
      }

      _createClass(SeriesPipe, [{
        key: "transform",
        value: function transform(value, args) {
          var resultadoPost = [];

          var _iterator2 = _createForOfIteratorHelper(value),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var post = _step2.value;

              if (post.original_name.toLowerCase().indexOf(args.toLowerCase()) > -1) {
                resultadoPost.push(post);
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }

          return resultadoPost;
        }
      }]);

      return SeriesPipe;
    }();

    SeriesPipe.ɵfac = function SeriesPipe_Factory(t) {
      return new (t || SeriesPipe)();
    };

    SeriesPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "series",
      type: SeriesPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SeriesPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: "series"
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/imagenes.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/imagenes.service.ts ***!
    \**********************************************/

  /*! exports provided: ImagenesService */

  /***/
  function srcAppServicesImagenesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImagenesService", function () {
      return ImagenesService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var ImagenesService =
    /*#__PURE__*/
    function () {
      function ImagenesService(http) {
        _classCallCheck(this, ImagenesService);

        this.http = http;
        this.rutaprincipal = "https://api.themoviedb.org/3/discover/";
        this.apikey = "f6aa14cdd8de77b073ab81ed80e212b5";
        this.filterPost = "";
      } // el return siempre retorna un observable para poder suscribirnos


      _createClass(ImagenesService, [{
        key: "getAllImagenesId",
        value: function getAllImagenesId() {
          var url = "".concat(this.rutaprincipal, "movie?sort_by=popularity.desc&api_key=").concat(this.apikey, " ");
          return this.http.get(url);
        }
      }, {
        key: "getAllImagenesId2",
        value: function getAllImagenesId2() {
          var url = "".concat(this.rutaprincipal, "tv?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&api_key=").concat(this.apikey, " ");
          return this.http.get(url);
        }
      }]);

      return ImagenesService;
    }();

    ImagenesService.ɵfac = function ImagenesService_Factory(t) {
      return new (t || ImagenesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    ImagenesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ImagenesService,
      factory: ImagenesService.ɵfac,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImagenesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: "root"
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
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
      firebase: {
        apiKey: "AIzaSyAjfXzG8Rum3Ce6MTcb7xqTHzptUt2iQUE",
        authDomain: "movie-classification.firebaseapp.com",
        databaseURL: "https://movie-classification.firebaseio.com",
        projectId: "movie-classification",
        storageBucket: "movie-classification.appspot.com",
        messagingSenderId: "788810417841",
        appId: "1:788810417841:web:692568e20590cdf502c490",
        measurementId: "G-83Z1FFGJ7P"
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
    /*! C:\Users\Usuario\Desktop\fronted\frontend\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map