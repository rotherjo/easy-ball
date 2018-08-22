(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _body_aufgabe_aufgabe_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./body/aufgabe/aufgabe.component */ "./src/app/body/aufgabe/aufgabe.component.ts");
/* harmony import */ var _body_events_eventliste_eventliste_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./body/events/eventliste/eventliste.component */ "./src/app/body/events/eventliste/eventliste.component.ts");
/* harmony import */ var _header_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/login/login.component */ "./src/app/header/login/login.component.ts");
/* harmony import */ var _body_person_personenliste_personenliste_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./body/person/personenliste/personenliste.component */ "./src/app/body/person/personenliste/personenliste.component.ts");
/* harmony import */ var _body_events_editevent_editevent_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./body/events/editevent/editevent.component */ "./src/app/body/events/editevent/editevent.component.ts");
/* harmony import */ var _body_QR_qrgenerator_qrgenerator_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./body/QR/qrgenerator/qrgenerator.component */ "./src/app/body/QR/qrgenerator/qrgenerator.component.ts");
/* harmony import */ var _body_QR_qrscanner_qrscanner_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./body/QR/qrscanner/qrscanner.component */ "./src/app/body/QR/qrscanner/qrscanner.component.ts");
/* harmony import */ var _body_QR_personenscan_personenscan_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./body/QR/personenscan/personenscan.component */ "./src/app/body/QR/personenscan/personenscan.component.ts");
/* harmony import */ var _body_person_editperson_editperson_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./body/person/editperson/editperson.component */ "./src/app/body/person/editperson/editperson.component.ts");
/* harmony import */ var _header_kontakt_kontakt_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./header/kontakt/kontakt.component */ "./src/app/header/kontakt/kontakt.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [
    { path: '', redirectTo: '/aufgabe', pathMatch: 'full' },
    { path: 'aufgabe', component: _body_aufgabe_aufgabe_component__WEBPACK_IMPORTED_MODULE_2__["AufgabeComponent"] },
    { path: 'eventliste', component: _body_events_eventliste_eventliste_component__WEBPACK_IMPORTED_MODULE_3__["EventlisteComponent"] },
    { path: 'personenliste', component: _body_person_personenliste_personenliste_component__WEBPACK_IMPORTED_MODULE_5__["PersonenlisteComponent"] },
    { path: 'editevent/:id', component: _body_events_editevent_editevent_component__WEBPACK_IMPORTED_MODULE_6__["EditeventComponent"] },
    { path: 'login', component: _header_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'qrgenerator', component: _body_QR_qrgenerator_qrgenerator_component__WEBPACK_IMPORTED_MODULE_7__["QrgeneratorComponent"] },
    { path: 'qrscanner', component: _body_QR_qrscanner_qrscanner_component__WEBPACK_IMPORTED_MODULE_8__["QrscannerComponent"] },
    { path: 'personenscan/:id', component: _body_QR_personenscan_personenscan_component__WEBPACK_IMPORTED_MODULE_9__["PersonenscanComponent"] },
    { path: 'editperson/:id', component: _body_person_editperson_editperson_component__WEBPACK_IMPORTED_MODULE_10__["EditpersonComponent"] },
    { path: 'kontakt', component: _header_kontakt_kontakt_component__WEBPACK_IMPORTED_MODULE_11__["KontaktComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\r\n  color: #006400;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-size: 250%;\r\n  margin-top: 5px;\r\n  margin-right: 0px;\r\n  margin-bottom: 0px;\r\n  margin-left: 0p;\r\n}\r\n\r\nh2, h3 {\r\n  color: #228B22;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-weight: lighter;\r\n}\r\n\r\nbody {\r\n  margin: 2em;\r\n}\r\n\r\nbody, input[text], button {\r\n  color: #888;\r\n  font-family: Cambria, Georgia;\r\n}\r\n\r\n/* everywhere else */\r\n\r\n* {\r\n  font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\n/* Router Elemente */\r\n\r\nnav a {\r\n  padding: 5px 10px;\r\n  text-decoration: none;\r\n  margin-top: 10px;\r\n  display: inline-block;\r\n  background-color: YellowGreen;\r\n  border-radius: 4px;\r\n  margin-left: 5px;\r\n}\r\n\r\nnav a:visited, a:link {\r\n  color: #607d8b;\r\n}\r\n\r\nnav a:hover {\r\n  color: #FFFFFF;\r\n  background-color: #006400;\r\n}\r\n\r\nnav\r\n a.active {\r\n  color: #039be5;\r\n}\r\n\r\nbutton {\r\n\tmargin: 2px;\r\n}\r\n\r\ndiv {\r\n/*\tborder: 1px solid blue; */\r\n}\r\n\r\n.TODO {\r\n\tcolor:red;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head>\n\t<meta http-equiv=\"content-type\" content=\"text/html; charset=utf-8\">\n</head>\n\n<link rel=\"stylesheet\" type=\"text/css\" href=\"/node_modules/primeicons/primeicons.css\" />\n<link rel=\"stylesheet\" type=\"text/css\" href=\"/node_modules/primeng/resources/themes/omega/theme.css\" />\n<link rel=\"stylesheet\" type=\"text/css\" href=\"/node_modules/primeng/resources/primeng.min.css\" />\n<link href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\" rel=\"stylesheet\">\n\n<div class=\"ui-g body\">\n\n\t<!-- Headerzeile -->\n\t<div class=\"ui-g-12 header\" style=\"background-color: lightgreen\">\n        <app-header></app-header>\n    </div>\n\t\n\t<!-- Body -->\n    <div class=\"ui-g-12 body\">\n    \t<router-outlet></router-outlet>\n    </div>\n    \n    <!-- Footer -->\n    <div class=\"ui-g-12\"  style=\"background-color: lightgreen\">\n        <app-messages></app-messages>\n    </div>\n    \n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'easyBall';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var primeng_tabmenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/tabmenu */ "./node_modules/primeng/tabmenu.js");
/* harmony import */ var primeng_tabmenu__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_tabmenu__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/calendar */ "./node_modules/primeng/calendar.js");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_calendar__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var primeng_tieredmenu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/tieredmenu */ "./node_modules/primeng/tieredmenu.js");
/* harmony import */ var primeng_tieredmenu__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primeng_tieredmenu__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var primeng_panelmenu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/panelmenu */ "./node_modules/primeng/panelmenu.js");
/* harmony import */ var primeng_panelmenu__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(primeng_panelmenu__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/menu */ "./node_modules/primeng/menu.js");
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(primeng_menu__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/toolbar */ "./node_modules/primeng/toolbar.js");
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(primeng_toolbar__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var primeng_inputmask__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/inputmask */ "./node_modules/primeng/inputmask.js");
/* harmony import */ var primeng_inputmask__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(primeng_inputmask__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var primeng_multiselect__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/multiselect */ "./node_modules/primeng/multiselect.js");
/* harmony import */ var primeng_multiselect__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(primeng_multiselect__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/dialog */ "./node_modules/primeng/dialog.js");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(primeng_dialog__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! angular-in-memory-web-api */ "./node_modules/angular-in-memory-web-api/index.js");
/* harmony import */ var _in_memory_data_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./in-memory-data.service */ "./src/app/in-memory-data.service.ts");
/* harmony import */ var angularx_qrcode__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! angularx-qrcode */ "./node_modules/angularx-qrcode/dist/index.js");
/* harmony import */ var ng2_qrcode_reader__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng2-qrcode-reader */ "./node_modules/ng2-qrcode-reader/index.js");
/* harmony import */ var angular2_qrscanner__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! angular2-qrscanner */ "./node_modules/angular2-qrscanner/esm5/angular2-qrscanner.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _body_aufgabe_aufgabe_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./body/aufgabe/aufgabe.component */ "./src/app/body/aufgabe/aufgabe.component.ts");
/* harmony import */ var _body_events_eventliste_eventliste_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./body/events/eventliste/eventliste.component */ "./src/app/body/events/eventliste/eventliste.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _body_person_personenliste_personenliste_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./body/person/personenliste/personenliste.component */ "./src/app/body/person/personenliste/personenliste.component.ts");
/* harmony import */ var _header_login_login_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./header/login/login.component */ "./src/app/header/login/login.component.ts");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./messages/messages.component */ "./src/app/messages/messages.component.ts");
/* harmony import */ var _body_events_editevent_editevent_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./body/events/editevent/editevent.component */ "./src/app/body/events/editevent/editevent.component.ts");
/* harmony import */ var _body_QR_qrgenerator_qrgenerator_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./body/QR/qrgenerator/qrgenerator.component */ "./src/app/body/QR/qrgenerator/qrgenerator.component.ts");
/* harmony import */ var _body_QR_qrscanner_qrscanner_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./body/QR/qrscanner/qrscanner.component */ "./src/app/body/QR/qrscanner/qrscanner.component.ts");
/* harmony import */ var _body_QR_personenscan_personenscan_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./body/QR/personenscan/personenscan.component */ "./src/app/body/QR/personenscan/personenscan.component.ts");
/* harmony import */ var _body_person_editperson_editperson_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./body/person/editperson/editperson.component */ "./src/app/body/person/editperson/editperson.component.ts");
/* harmony import */ var _header_menu_menu_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./header/menu/menu.component */ "./src/app/header/menu/menu.component.ts");
/* harmony import */ var _header_kontakt_kontakt_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./header/kontakt/kontakt.component */ "./src/app/header/kontakt/kontakt.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* angular */




/* PrimeNG */














/* In-Memory-Web-API */


/* QR Codes */



/* die eigenen Komponenten importieren */















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_21__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_22__["HeaderComponent"],
                _body_aufgabe_aufgabe_component__WEBPACK_IMPORTED_MODULE_23__["AufgabeComponent"],
                _body_events_eventliste_eventliste_component__WEBPACK_IMPORTED_MODULE_24__["EventlisteComponent"],
                _header_login_login_component__WEBPACK_IMPORTED_MODULE_27__["LoginComponent"],
                _messages_messages_component__WEBPACK_IMPORTED_MODULE_28__["MessagesComponent"],
                _body_person_personenliste_personenliste_component__WEBPACK_IMPORTED_MODULE_26__["PersonenlisteComponent"],
                _body_events_editevent_editevent_component__WEBPACK_IMPORTED_MODULE_29__["EditeventComponent"],
                _body_QR_personenscan_personenscan_component__WEBPACK_IMPORTED_MODULE_32__["PersonenscanComponent"],
                _body_person_editperson_editperson_component__WEBPACK_IMPORTED_MODULE_33__["EditpersonComponent"],
                // QR
                _body_QR_qrgenerator_qrgenerator_component__WEBPACK_IMPORTED_MODULE_30__["QrgeneratorComponent"],
                _body_QR_qrscanner_qrscanner_component__WEBPACK_IMPORTED_MODULE_31__["QrscannerComponent"],
                // PrimeNG
                _header_menu_menu_component__WEBPACK_IMPORTED_MODULE_34__["MenuComponent"],
                _header_kontakt_kontakt_component__WEBPACK_IMPORTED_MODULE_35__["KontaktComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_5__["ButtonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                // QR
                angularx_qrcode__WEBPACK_IMPORTED_MODULE_18__["QRCodeModule"],
                angular2_qrscanner__WEBPACK_IMPORTED_MODULE_20__["NgQrScannerModule"],
                ng2_qrcode_reader__WEBPACK_IMPORTED_MODULE_19__["NgQRCodeReaderModule"],
                // PrimeNG
                primeng_panelmenu__WEBPACK_IMPORTED_MODULE_10__["PanelMenuModule"],
                primeng_tieredmenu__WEBPACK_IMPORTED_MODULE_9__["TieredMenuModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_25__["AppRoutingModule"],
                primeng_menu__WEBPACK_IMPORTED_MODULE_11__["MenuModule"],
                primeng_toolbar__WEBPACK_IMPORTED_MODULE_12__["ToolbarModule"],
                primeng_inputmask__WEBPACK_IMPORTED_MODULE_13__["InputMaskModule"],
                primeng_multiselect__WEBPACK_IMPORTED_MODULE_14__["MultiSelectModule"],
                primeng_table__WEBPACK_IMPORTED_MODULE_7__["TableModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_5__["DropdownModule"],
                primeng_tabmenu__WEBPACK_IMPORTED_MODULE_6__["TabMenuModule"],
                primeng_calendar__WEBPACK_IMPORTED_MODULE_8__["CalendarModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_5__["InputTextModule"],
                primeng_dialog__WEBPACK_IMPORTED_MODULE_15__["DialogModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_5__["SliderModule"],
                // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
                // and returns simulated server responses.
                // Remove it when a real server is ready to receive requests.
                angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_16__["HttpClientInMemoryWebApiModule"].forRoot(_in_memory_data_service__WEBPACK_IMPORTED_MODULE_17__["InMemoryDataService"], { dataEncapsulation: false }),
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_21__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' })
};
var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.getUserDetails = function (nutzer, pw) {
        // post these details to API server and return user info if correct
        return this.http.post('http://127.0.0.1:80/api/auth.php', {
            nutzer: nutzer,
            pw: pw
        }, httpOptions).subscribe(function (data) {
            console.log(data, ' vom Server erhalten');
        });
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/body/QR/personenscan/personenscan.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/body/QR/personenscan/personenscan.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/body/QR/personenscan/personenscan.component.html":
/*!******************************************************************!*\
  !*** ./src/app/body/QR/personenscan/personenscan.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head>\n\t<meta http-equiv='content-type' content ='text/html; charset=utf-8'>\n</head>\n\n<div *ngIf=\"person\">\n\t<div class=\"text\">\n\t\t<h2>{{person.vname}} {{person.nname}} Details</h2>\n\t\n\t\t<p>Hier können nach einem erfolgreichen Scan Personendaten am Eingang des Events eingesehen und überprüft werden.</p>\n\t</div>\n\t\n\t<div>\n\t\n\t\t<!-- Bild -->\n\t\t<div class=\"ui-g-2 ui-xl-2 ui-l-3 ui-lg-3 ui-md-4 ui-sm-4\">\n\t\t\t<img src='{{person.imgurl}}' style=\"width:100%\">\n\t\t</div>\n\t\t\n\t\t<!-- Informationen -->\n\t\t<div class=\"ui-g-10\" id=\"infos\">\n\t\t\n\t\t\t<div class=\"ui-g\">\n\t\t\t\t<div class=\"ui-g-2 ui-xl-2 ui-l-3 ui-lg-4 ui-md-5 ui-sm-5\" align=\"right\">Vorname:</div>\n\t\t\t\t<div class=\"ui-g-2 ui-xl-2 ui-l-3 ui-lg-4 ui-md-5 ui-sm-8\">{{person.vname}}</div>\n\t\t\t</div>\n\t\t\t\n\t\t\t<div class=\"ui-g\">\n\t\t\t\t<div class=\"ui-g-2 ui-xl-2 ui-l-3 ui-lg-4 ui-md-5 ui-sm-5\" align=\"right\">Nachname:</div>\n\t\t\t\t<div class=\"ui-g-2 ui-xl-2 ui-l-3 ui-lg-4 ui-md-5 ui-sm-8\">{{person.nname}}</div>\n\t\t\t</div>\n\t\t\t\n\t\t\t<div class=\"ui-g\">\t\n\t\t\t\t<div class=\"ui-g-2 ui-xl-2 ui-l-3 ui-lg-4 ui-md-5 ui-sm-5\" align=\"right\">Firma:</div>\n\t\t\t\t<div class=\"ui-g-2 ui-xl-2 ui-l-3 ui-lg-4 ui-md-5 ui-sm-8\">{{person.firma}}</div>\n\t\t\t</div>\n\t\t\t\n\t\t\t<div class=\"ui-g\">\n\t\t\t\t<div class=\"ui-g-2 ui-xl-2 ui-l-3 ui-lg-4 ui-md-5 ui-sm-5\" align=\"right\">Freigeschaltet:</div>\n\t\t\t\t<div class=\"ui-g-1 ui-xl-1 ui-l-2 ui-lg-2 ui-md-3 ui-sm-8\" [ngClass]=\"person.darf ? null : 'schlecht'\">{{person.darf}}</div>\n\t\t\t</div>\n\t\t\t\n\t\t\t<div class=\"ui-g\">\n\t\t\t\t<div class=\"ui-g-2 ui-xl-2 ui-l-3 ui-lg-4 ui-md-5 ui-sm-5\" align=\"right\">VIP:</div>\n\t\t\t\t<div class=\"ui-g-1 ui-xl-1 ui-l-2 ui-lg-2 ui-md-3 ui-sm-8\" [ngClass]=\"person.vip ? 'gut' : null\">{{person.vip}}</div>\n\t\t\t</div>\n\t\t\t\n\t\t\t<div class=\"ui-g\">\n\t\t\t\t<div class=\"ui-g-2 ui-xl-2 ui-l-3 ui-lg-4 ui-md-5 ui-sm-5\" align=\"right\">Gescannt:</div>\n\t\t\t\t<div class=\"ui-g-1 ui-xl-1 ui-l-2 ui-lg-2 ui-md-3 ui-sm-8\"  [ngClass]=\"person.gescannt ? 'schlecht': null\">{{person.gescannt}}</div>\n\t\t\t</div>\n\t\t\t\n\t\t\t<!-- Ungültiger QR-Code -->\n\t\t\t<div *ngIf=\"person.gescannt\">\n\t\t\t\t<button type=\"button\" pButton icon=\"pi pi-exclamation-triangle\" class=ui-button-danger label=\"Code wurde bereits gescannt !\"></button>\n\t\t\t</div>\n\t\t\t\n\t\t\t<!-- GinTonic -->\n\t\t\t<div *ngIf=\"person.gescannt == false\">\n\t\t\t\t<button type=\"button\" pButton class=ui-button-success label=\"Der Code ist gültig.\"></button>\n\t\t\t\t<div *ngIf=\"person.vip\">\n\t\t\t\t\t<button type=\"button\" pButton class=ui-button-warning label=\"Dem Gast einen GinTonic ausgeben !\"></button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t\n\t<!-- Button: Nächster Scan -->\n\t<div class=\"ui-g-12\">\n\t\t<a routerLink=\"/qrscanner\">\n\t\t\t<button pButton type=\"button\" label=\"Nächster Scan\" class=\"ui-button-warning ui-g-12\" align=\"center\"></button>\n\t\t</a>\n\t</div>  \n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/body/QR/personenscan/personenscan.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/body/QR/personenscan/personenscan.component.ts ***!
  \****************************************************************/
/*! exports provided: PersonenscanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonenscanComponent", function() { return PersonenscanComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _person__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../person */ "./src/app/person.ts");
/* harmony import */ var _eventloader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../eventloader.service */ "./src/app/eventloader.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PersonenscanComponent = /** @class */ (function () {
    function PersonenscanComponent(route, eventloaderservice, location) {
        this.route = route;
        this.eventloaderservice = eventloaderservice;
        this.location = location;
    }
    PersonenscanComponent.prototype.ngOnInit = function () {
        this.getPerson();
    };
    PersonenscanComponent.prototype.getPerson = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.eventloaderservice.getPerson(id).subscribe(function (person1) { return _this.person = person1; });
    };
    PersonenscanComponent.prototype.goBack = function () {
        this.location.back();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _person__WEBPACK_IMPORTED_MODULE_3__["Person"])
    ], PersonenscanComponent.prototype, "person", void 0);
    PersonenscanComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-personenscan',
            template: __webpack_require__(/*! ./personenscan.component.html */ "./src/app/body/QR/personenscan/personenscan.component.html"),
            styles: [__webpack_require__(/*! ./personenscan.component.css */ "./src/app/body/QR/personenscan/personenscan.component.css"), __webpack_require__(/*! ./../../../app.component.css */ "./src/app/app.component.css"), __webpack_require__(/*! ./../../body.css */ "./src/app/body/body.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _eventloader_service__WEBPACK_IMPORTED_MODULE_4__["EventloaderService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
    ], PersonenscanComponent);
    return PersonenscanComponent;
}());



/***/ }),

/***/ "./src/app/body/QR/qrgenerator/qrgenerator.component.css":
/*!***************************************************************!*\
  !*** ./src/app/body/QR/qrgenerator/qrgenerator.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/body/QR/qrgenerator/qrgenerator.component.html":
/*!****************************************************************!*\
  !*** ./src/app/body/QR/qrgenerator/qrgenerator.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head>\n\t<meta http-equiv=\"content-type\" content=\"text/html; charset=utf-8\">\n</head>\n\n<div class=\"text\">\n\t<h2>QR-Code</h2>\n</div>\n\n<div id=\"Grafik\">\n\t<qrcode [qrdata]=\"qrdata\" [size]=\"256\" [level]=\"'M'\"></qrcode>\n</div>\n\n<br>\n\n<div id=\"text\">\n\tID der Person eingeben: <input pInputText [(ngModel)]=\"qrdata\" placeholder=\"Personen-ID\" size=\"10\">\n</div>\n\n<div id=\"buttons\">\t\n\t<button pButton type=\"button\" class=\"ui-button-success\" label=\"ID=0 (Bud)\" (click)=\"changeValue('0')\"></button>\n\t<button pButton type=\"button\" class=\"ui-button-warning\" label=\"ID=1 (Dave)\" (click)=\"changeValue('1')\"></button>\n</div>\n"

/***/ }),

/***/ "./src/app/body/QR/qrgenerator/qrgenerator.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/body/QR/qrgenerator/qrgenerator.component.ts ***!
  \**************************************************************/
/*! exports provided: NgxQrCode, QrgeneratorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxQrCode", function() { return NgxQrCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QrgeneratorComponent", function() { return QrgeneratorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NgxQrCode = /** @class */ (function () {
    function NgxQrCode() {
    }
    return NgxQrCode;
}());

var QrgeneratorComponent = /** @class */ (function () {
    function QrgeneratorComponent() {
        this.qrdata = null;
        console.log('QRGenerator gestartet');
        this.qrdata = '0';
    }
    QrgeneratorComponent.prototype.ngOnInit = function () {
    };
    QrgeneratorComponent.prototype.changeValue = function (newValue) {
        this.qrdata = newValue;
    };
    QrgeneratorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-qrgenerator',
            template: __webpack_require__(/*! ./qrgenerator.component.html */ "./src/app/body/QR/qrgenerator/qrgenerator.component.html"),
            styles: [__webpack_require__(/*! ./qrgenerator.component.css */ "./src/app/body/QR/qrgenerator/qrgenerator.component.css"), __webpack_require__(/*! ./../../../app.component.css */ "./src/app/app.component.css"), __webpack_require__(/*! ./../../body.css */ "./src/app/body/body.css")]
        }),
        __metadata("design:paramtypes", [])
    ], QrgeneratorComponent);
    return QrgeneratorComponent;
}());



/***/ }),

/***/ "./src/app/body/QR/qrscanner/qrscanner.component.css":
/*!***********************************************************!*\
  !*** ./src/app/body/QR/qrscanner/qrscanner.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/body/QR/qrscanner/qrscanner.component.html":
/*!************************************************************!*\
  !*** ./src/app/body/QR/qrscanner/qrscanner.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head>\r\n\t<meta http-equiv=\"content-type\" content=\"text/html; charset=utf-8\">\r\n</head>\r\n\r\n<div class=\"text\">\r\n\t<h2>QR-Code Scanner</h2>\r\n\t<p>Scan: {{result}}</p>\r\n</div>\r\n\r\n<div class=\"ui-g-5 ui-xl-5 ui-l-7 ui-lg-9 ui-md-12 ui-sm-12\">\r\n\t<qr-scanner [debug]=\"false\" [canvasWidth]=\"1080\" [canvasHeight]=\"720\" [stopAfterScan]=\"true\" [updateTime]=\"500\"></qr-scanner>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/body/QR/qrscanner/qrscanner.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/body/QR/qrscanner/qrscanner.component.ts ***!
  \**********************************************************/
/*! exports provided: QrscannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QrscannerComponent", function() { return QrscannerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular2_qrscanner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular2-qrscanner */ "./node_modules/angular2-qrscanner/esm5/angular2-qrscanner.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QrscannerComponent = /** @class */ (function () {
    function QrscannerComponent(router) {
        this.router = router;
    }
    QrscannerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fail = false;
        this.qrScannerComponent.getMediaDevices().then(function (devices) {
            console.log(devices);
            var videoDevices = [];
            for (var _i = 0, devices_1 = devices; _i < devices_1.length; _i++) {
                var device = devices_1[_i];
                if (device.kind.toString() === 'videoinput') {
                    videoDevices.push(device);
                }
            }
            if (videoDevices.length > 0) {
                var choosenDev = void 0;
                for (var _a = 0, videoDevices_1 = videoDevices; _a < videoDevices_1.length; _a++) {
                    var dev = videoDevices_1[_a];
                    if (dev.label.includes('front')) {
                        choosenDev = dev;
                        break;
                    }
                }
                if (choosenDev) {
                    _this.qrScannerComponent.chooseCamera.next(choosenDev);
                }
                else {
                    _this.qrScannerComponent.chooseCamera.next(videoDevices[0]);
                }
            }
        });
        this.qrScannerComponent.capturedQr.subscribe(function (result) {
            console.log(result),
                _this.result = result,
                _this.showPerson(result);
        });
    };
    QrscannerComponent.prototype.showPerson = function (id) {
        this.router.navigate(['/personenscan/'.concat(this.result)]).catch();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('result'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], QrscannerComponent.prototype, "resultElement", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(angular2_qrscanner__WEBPACK_IMPORTED_MODULE_1__["QrScannerComponent"]),
        __metadata("design:type", angular2_qrscanner__WEBPACK_IMPORTED_MODULE_1__["QrScannerComponent"])
    ], QrscannerComponent.prototype, "qrScannerComponent", void 0);
    QrscannerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-qrscanner',
            template: __webpack_require__(/*! ./qrscanner.component.html */ "./src/app/body/QR/qrscanner/qrscanner.component.html"),
            styles: [__webpack_require__(/*! ./qrscanner.component.css */ "./src/app/body/QR/qrscanner/qrscanner.component.css"), __webpack_require__(/*! ./../../../app.component.css */ "./src/app/app.component.css"), __webpack_require__(/*! ./../../body.css */ "./src/app/body/body.css")],
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], QrscannerComponent);
    return QrscannerComponent;
}());



/***/ }),

/***/ "./src/app/body/aufgabe/aufgabe.component.css":
/*!****************************************************!*\
  !*** ./src/app/body/aufgabe/aufgabe.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/body/aufgabe/aufgabe.component.html":
/*!*****************************************************!*\
  !*** ./src/app/body/aufgabe/aufgabe.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head>\r\n\t<meta http-equiv=\"content-type\" content=\"text/html; charset=utf-8\">\r\n</head>\r\n\r\n\r\n<!-- Hier fest einfügen wegen Formatierung und Übersichtlichkeit -->\r\n<div>\r\n\t<p>Folgende halbwegs kryptische Anfrage haben wir:</p>\r\n\t<p>\"Eventeinladungen 4.0\" :)</p>\r\n\t\r\n\t<p>Für ein Event (an Bord, Land, Messe,..) sollen Einladungen per Mail verschickt werden, die einen QR Code beinhalten, der beim Empfang gescannt wird, um nachzuvollziehen welcher Gast auf dem Event war.</p>\r\n\t\r\n\t<p>Anforderung des fiktiven \"Kunden\":</p>\r\n\t\r\n\t<ul>\r\n\t\r\n\t\t<li>Login in geschützten Bereich</li>\r\n\t\t<li>Liste an Personen verwalten (CRUD – Create, Read, Update, Delete)\r\n\t\t\t<ul>\r\n\t\t\t\t<li>Min. Vorname, Nachname, E-Mail, Firma, Foto</li>\r\n\t\t\t</ul>\r\n\t\t</li>\r\n\t\t<li>Personen können sich auf einer ungeschützten Webseite für das System anmelden und ihre Daten eintragen. Diese Personen müssen erst im System freigeschaltet werden.</li>\r\n\t\t<li>E-Mail mit Einladung und QR Code pro Person zum Event, wenn Personen im System erstellt werden, oder freigeschaltet wurden</li>\r\n\t\t<li>QR Code soll irgendwie durch ein Gerät, Handy, Pi,... eingescannt werden können und dabei soll der Name + Foto sichtbar sein, um die Person zu identifizieren</li>\r\n\t\t<li>Jeder Code darf nur einmal gescannt werden - danach Hinweis, dass bereits gescannt wurde</li>\r\n\t\t<li>Eine Auswertung wie viele Codes gescannt wurden und wer da / wer nicht da war</li>\r\n\t</ul>\r\n\t\r\n\t<p>Unsere Wünsche:</p>\r\n\t<ul>\r\n\t\t<li>Nutzung des Frameworks: <a href=\"https://www.primefaces.org/primeng/#/\">https://www.primefaces.org/primeng/#/</a> und damit auch Angular</li>\r\n\t\t<li>Ansonsten hast du absolut freie Hand =)</li>\r\n\t</ul>\r\n\t<p>Zusatzaufgabe 1:</p>\r\n\t<ul>\r\n\t\t<li>Personen können im System mit einem VIP Status versehen werden. Beim Scannen erhält der Scannende einen Hinweis und verteilt zusätzlich einen Gin Tonic an den Gast</li>\r\n\t</ul>\r\n\t\r\n\t<p>Zusatzaufgabe 2:</p>\r\n\t<ul>\r\n\t\t<li>Verwaltung von Events (CRUD)\r\n\t\t\t<ul>\r\n\t\t\t\t<li>Min. Name, Datum, Ort</li>\r\n\t\t\t</ul>\r\n\t\t</li>\r\n\t\t<li>Personen erhalten Einladungen zu einem Event und müssen statt generell für ein entsprechendes Event freigeschaltet werden</li>\r\n\t\t<li>Auswertung pro Event: wieviele waren da, wer und wer nicht</li>\r\n\t</ul>\r\n\t\r\n\t<p>Enrico Lorenz</p>\r\n</div>"

/***/ }),

/***/ "./src/app/body/aufgabe/aufgabe.component.ts":
/*!***************************************************!*\
  !*** ./src/app/body/aufgabe/aufgabe.component.ts ***!
  \***************************************************/
/*! exports provided: AufgabeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AufgabeComponent", function() { return AufgabeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _eventloader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../eventloader.service */ "./src/app/eventloader.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AufgabeComponent = /** @class */ (function () {
    function AufgabeComponent(eventloaderService) {
        this.eventloaderService = eventloaderService;
    }
    AufgabeComponent.prototype.ngOnInit = function () {
    };
    AufgabeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-aufgabe',
            template: __webpack_require__(/*! ./aufgabe.component.html */ "./src/app/body/aufgabe/aufgabe.component.html"),
            styles: [__webpack_require__(/*! ./../../app.component.css */ "./src/app/app.component.css"), __webpack_require__(/*! ./aufgabe.component.css */ "./src/app/body/aufgabe/aufgabe.component.css"), __webpack_require__(/*! ./../body.css */ "./src/app/body/body.css")]
        }),
        __metadata("design:paramtypes", [_eventloader_service__WEBPACK_IMPORTED_MODULE_1__["EventloaderService"]])
    ], AufgabeComponent);
    return AufgabeComponent;
}());



/***/ }),

/***/ "./src/app/body/body.css":
/*!*******************************!*\
  !*** ./src/app/body/body.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\r\n/*\tborder: 1px solid #73AD21; */\r\n}\r\n\r\n.gut {\r\n    background-color: green !important;\r\n    color: #ffffff !important;\r\n}\r\n\r\n.schlecht {\r\n    background-color: red !important;\r\n    color: #ffffff !important;\r\n}\r\n\r\n.links {\r\n\t line-height: 29px;\r\n}"

/***/ }),

/***/ "./src/app/body/events/editevent/editevent.component.css":
/*!***************************************************************!*\
  !*** ./src/app/body/events/editevent/editevent.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/body/events/editevent/editevent.component.html":
/*!****************************************************************!*\
  !*** ./src/app/body/events/editevent/editevent.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head>\n\t<meta http-equiv='content-type' content ='text/html; charset=utf-8'>\n</head>\n\n\n<div *ngIf=\"event\">\n\t<div id=\"text\">\n\t\t<h2>{{event.ename}}</h2>\n\t\t\n\t\t<p>Hier können bereits erstellte Events editiert werden.</p>\n\t</div>\n\t\n\t\t\n\t<!-- Informationen -->\n\t<div class=\"ui-g-10\" id=\"infos\">\n\t\t<div class=\"ui-g\">\n\t\t\t<div class=\"ui-g-1 ui-xl-2 ui-l-2 ui-lg-3 ui-md-4 ui-sm-5\" align=\"right\">Eventname:</div>\n\t\t\t<div><input #ename pInputText value=\"{{event.ename}}\"></div>\n\t\t</div>\n\t\t\n\t\t<div class=\"ui-g\">\t\n\t\t\t<div class=\"ui-g-1 ui-xl-2 ui-l-2 ui-lg-3 ui-md-4 ui-sm-5\" align=\"right\">Datum</div>\n\t\t\t<div><input #edatum pInputText value=\"{{event.edatum}}\"></div>\n\t\t</div>\n\t\t\n\t\t<div class=\"ui-g\">\t\n\t\t\t<div class=\"ui-g-1 ui-xl-2 ui-l-2 ui-lg-3 ui-md-4 ui-sm-5\" align=\"right\">Ort:</div>\n\t\t\t<div><input #eort pInputText value=\"{{event.eort}}\"></div>\n\t\t</div>\n\t\t\n\t\t<div class=\"ui-g\">\t\n\t\t\t<div class=\"ui-g-1 ui-xl-2 ui-l-2 ui-lg-3 ui-md-4 ui-sm-5\" align=\"right\">ID:</div>\n\t\t\t<div class=\"ui-g-1 ui-xl-1 ui-l-2 ui-lg-2 ui-md-3 ui-sm-3\">{{event.id}}</div>\n\t\t</div>\n\t\t\n\t\t<div class=\"ui-g\">\t\n\t\t\t<div class=\"ui-g-1 ui-xl-2 ui-l-2 ui-lg-3 ui-md-4 ui-sm-5\" align=\"right\">Anmeldungen:</div>\n\t\t\t<div class=\"ui-g-1 ui-xl-1 ui-l-2 ui-lg-2 ui-md-3 ui-sm-3\">{{event.eanz}}</div>\n\t\t</div>\n\t\t\n\t\t<div class=\"ui-g\">\t\n\t\t\t<div class=\"ui-g-1 ui-xl-2 ui-l-2 ui-lg-3 ui-md-4 ui-sm-5\" align=\"right\">Besucher:</div>\n\t\t\t<div class=\"ui-g-1 ui-xl-1 ui-l-2 ui-lg-2 ui-md-3 ui-sm-3\">{{event.besucher}}</div>\n\t\t</div>\t\t\n\t</div>\n\t\n\t<!-- Buttons Zurück & Speichern -->\n\t<div class=\"ui-g-12\" style=\"margin: 5px\" id=\"buttons\">\n\t\t<button pButton type=\"button\" icon=\"pi pi-arrow-left\" label=\"Zurück\" class=\"ui-button-warning\" (click)=\"goBack()\"></button>  \n\t\t<button pButton type=\"button\" icon=\"pi pi-check\" label=\"Änderung speichern\" class=\"ui-button-success\" (click)=\"saveEvent(ename.value , edatum.value, eort.value)\"></button>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/body/events/editevent/editevent.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/body/events/editevent/editevent.component.ts ***!
  \**************************************************************/
/*! exports provided: EditeventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditeventComponent", function() { return EditeventComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../event */ "./src/app/event.ts");
/* harmony import */ var _eventloader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../eventloader.service */ "./src/app/eventloader.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditeventComponent = /** @class */ (function () {
    function EditeventComponent(route, eventloaderservice, location) {
        this.route = route;
        this.eventloaderservice = eventloaderservice;
        this.location = location;
    }
    EditeventComponent.prototype.ngOnInit = function () {
        this.getEvent();
    };
    /* Event laden */
    EditeventComponent.prototype.getEvent = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.eventloaderservice.getEvent(id).subscribe(function (event1) { return _this.event = event1; });
    };
    /* zur vorherigen Seite */
    EditeventComponent.prototype.goBack = function () {
        this.location.back();
    };
    /* �nderungen speichern */
    EditeventComponent.prototype.saveEvent = function (name, date, ort) {
        var _this = this;
        this.event.ename = name;
        // Datum neu zusammensetzen
        this.datum = date.split('.');
        this.event.edatum = this.datum[2] + '-' + // Jahr
            this.datum[1] + '-' + // Monat
            this.datum[0]; // Tag
        this.event.eort = ort;
        this.eventloaderservice.updateEvent(this.event).subscribe(function () { return _this.goBack(); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _event__WEBPACK_IMPORTED_MODULE_3__["Event"])
    ], EditeventComponent.prototype, "event", void 0);
    EditeventComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-editevent',
            template: __webpack_require__(/*! ./editevent.component.html */ "./src/app/body/events/editevent/editevent.component.html"),
            styles: [__webpack_require__(/*! ./editevent.component.css */ "./src/app/body/events/editevent/editevent.component.css"), __webpack_require__(/*! ./../../../app.component.css */ "./src/app/app.component.css"), __webpack_require__(/*! ./../../body.css */ "./src/app/body/body.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _eventloader_service__WEBPACK_IMPORTED_MODULE_4__["EventloaderService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
    ], EditeventComponent);
    return EditeventComponent;
}());



/***/ }),

/***/ "./src/app/body/events/eventliste/eventliste.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/body/events/eventliste/eventliste.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n.events {\r\n  margin: 0 0 2em 0;\r\n  list-style-type: none;\r\n  padding: 0;\r\n  width: 50em;\r\n}\r\n\r\n.events li {\r\n  position: relative;\r\n  cursor: pointer;\r\n  background-color: #EEE;\r\n  margin: .5em;\r\n  padding: .3em 0;\r\n  height: 1.6em;\r\n  border-radius: 4px;\r\n}\r\n\r\n.events li:hover {\r\n  color: #607D8B;\r\n  background-color: #DDD;\r\n  left: .1em;\r\n}\r\n\r\n.events a {\r\n  color: #888;\r\n  text-decoration: none;\r\n  position: relative;\r\n  display: block;\r\n  width: 250px;\r\n}\r\n\r\n.events a:hover {\r\n  color:#607D8B;\r\n}\r\n\r\n.events .badge {\r\n  display: inline-block;\r\n  font-size: small;\r\n  color: white;\r\n  padding: 0.8em 0.7em 0 0.7em;\r\n  background-color: #607D8B;\r\n  line-height: 1em;\r\n  position: relative;\r\n  left: -1px;\r\n  top: -4px;\r\n  height: 1.8em;\r\n  min-width: 16px;\r\n  text-align: right;\r\n  margin-right: .8em;\r\n  border-radius: 4px 0 0 4px;\r\n}\r\n\r\nbutton:hover {\r\n  background-color: #cfd8dc;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/body/events/eventliste/eventliste.component.html":
/*!******************************************************************!*\
  !*** ./src/app/body/events/eventliste/eventliste.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head>\n\t<meta http-equiv=\"content-type\" content=\"text/html; charset=utf-8\">\n</head>\n\n<div id=\"text\">\n\t<h2>Eventliste</h2>\n\t<p>\n\t  Liste der eingetragenen Events und Möglichkeite weitere hinzuzufügen.\n\t</p>\n</div>\n\n<div style=\"margin: 5px\" id=\"events-tabelle\">\n<p-table [columns]=\"selectedColumns\" [value]=\"events\" [autoLayout]=true [responsive]=\"true\">\n    \n    <!-- Select & Suchfeld -->\n    <ng-template pTemplate=\"caption\">\n    \t<div>\n\t    \t<div style=\"text-align:left\">\n\t            <p-multiSelect [options]=\"cols\" [(ngModel)]=\"selectedColumns\" optionLabel=\"header\"\n\t                        selectedItemsLabel=\"{0} Spalten ausgewählt\" [style]=\"{minWidth: '200px'}\" defaultLabel=\"Wähle Spalten\"></p-multiSelect>\n\t        </div>\n\t        <div style=\"text-align: right\">        \n\t            <i class=\"fa fa-search\" style=\"margin:4px 4px 0 0\"></i>\n\t            <input type=\"text\" pInputText size=\"25\" placeholder=\"Globaler Filter\" (input)=\"dt.filterGlobal($event.target.value, 'contains')\" style=\"width:auto\">\n\t        </div>\n        </div> \n    </ng-template>\n    \n    <!-- header -->\n    <ng-template pTemplate=\"header\" let-columns>\n        <tr>\n        \t<!-- Kopfzeile mit Beschriftung der Spalten -->\n            <th *ngFor=\"let col of columns\">\n                {{col.header}}\n            </th>\n        </tr>\n        <tr>\n        \t<!-- Suchfelder der Spalten -->\n            <th *ngFor=\"let col of columns\" [ngSwitch]=\"col.field\">\n                <input class=\"ui-sm-2 pull-right\" *ngSwitchCase=\"'id'\" pInputText type=\"text\" (input)=\"dt.filter($event.target.value, col.field, col.filterMatchMode)\" size=\"2\">\n                <input *ngSwitchCase=\"'ename'\" pInputText type=\"text\" (input)=\"dt.filter($event.target.value, col.field, 'contains')\" size=\"15\">\n                <input *ngSwitchCase=\"'edatum'\" pInputText type=\"text\" (input)=\"dt.filter($event.target.value, col.field, col.filterMatchMode)\" size=\"10\">\n                <input *ngSwitchCase=\"'eort'\" pInputText type=\"text\" (input)=\"dt.filter($event.target.value, col.field, 'contains')\" size=\"15\">\n                <div *ngSwitchCase=\"'eanz'\">\n                    mehr als {{anzFilter}}\n                    <i (click)=\"yearFilter=null;dt.filter(null, col.field, col.filterMatchMode)\" style=\"cursor:pointer\" *ngIf=\"anzFilter\"></i>\n                    <p-slider [style]=\"{'width':'100%','margin-top':'8px'}\" [(ngModel)]=\"anzFilter\" [min]=\"0\" [max]=\"20\" (onChange)=\"onAnzChange($event, dt)\"></p-slider>\n                </div>\n                <div *ngSwitchCase=\"'besucher'\">\n                    mehr als {{besucherFilter}}\n                    <i (click)=\"yearFilter=null;dt.filter(null, col.field, col.filterMatchMode)\" style=\"cursor:pointer\" *ngIf=\"besucherFilter\"></i>\n                    <p-slider [style]=\"{'width':'100%','margin-top':'8px'}\" [(ngModel)]=\"besucherFilter\" [min]=\"0\" [max]=\"20\" (onChange)=\"onBesucherChange($event, dt)\"></p-slider>\n                </div>\n            </th>\n        </tr>\n    </ng-template>\n\n    <!-- der eigentliche Inhalt der Tabelle --> \n    <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n        <tr [pSelectableRow]=\"rowData\" align='center'>\n            <td *ngFor=\"let col of columns\" [ngSwitch]=\"col.field\">\n            \t<span class=\"ui-column-title\">{{col.header}}</span>\n            \t<div *ngSwitchCase=\"'id'\" (input)=\"dt.filter($event.target.value, col.field, col.filterMatchMode)\" align='center'>{{rowData[col.field]}}</div>\n                <div *ngSwitchCase=\"'ename'\" (input)=\"dt.filter($event.target.value, col.field, col.filterMatchMode)\">{{rowData[col.field]}}</div>\n                <div *ngSwitchCase=\"'edatum'\" (input)=\"dt.filter($event.target.value, col.field, col.filterMatchMode)\">{{rowData[col.field]}}</div>\n                <div *ngSwitchCase=\"'eort'\" (input)=\"dt.filter($event.target.value, col.field, col.filterMatchMode)\">{{rowData[col.field]}}</div>\n                <div *ngSwitchCase=\"'eanz'\" (input)=\"dt.filter($event.target.value, col.field, col.filterMatchMode)\" align='center'>{{rowData[col.field]}}</div>\n                <div *ngSwitchCase=\"'besucher'\" (input)=\"dt.filter($event.target.value, col.field, col.filterMatchMode)\" align='center'>{{rowData[col.field]}}</div>\n                <div *ngSwitchCase=\"'admin'\" (input)=\"dt.filter($event.target.value, col.field, col.filterMatchMode)\" align='center'>{{rowData[col.field]}}\n                \t<a routerLink=\"/editevent/{{rowData['id']}}\">\n            \t\t\t<button pButton type=\"button\" icon=\"pi pi-pencil\" class=\"ui-button-warning\"></button>  \n\t            \t</a>  \n\t            \t<a routerLink=\"/eventliste\" routerLinkActive=\"active\">        \n\t            \t\t<button pButton type=\"button\" icon=\"pi pi-times\" class=\"ui-button-danger\" title=\"deleteperson\" (click)=\"delete(rowData['id'])\"></button>\n                \t</a>\n                </div>\n            </td>\n        </tr>\n    </ng-template>\n    \n    <!-- footer -->\n\t<ng-template pTemplate=\"summary\">\n        <div style=\"text-align:right\">\n        \n        \t<div style=\"text-align:center\">\n\t       \t\t{{events?.length}} Events\n\t\t\t</div>\n\n            <button type=\"button\" pButton icon=\"fa fa-plus\" (click)=\"showDialogToAdd()\" label=\"Event hinzufügen\" class=\"ui-button-success\"></button>\n        \n        </div>\n    </ng-template>\n    \n</p-table>\n</div>\n\n<!-- Dialogbox zum Hinzufügen -->\n<p-dialog header=\"Eventdetails\" [(visible)]=\"displayDialog\" [responsive]=\"true\" showEffect=\"fade\" [modal]=\"true\" [width]=\"400\">\n    <div class=\"ui-g ui-fluid\">\n        \n        <div class=\"ui-g-12\">\n        \t<div class=\"ui-g-4 links\">Eventname</div>\n            <div class=\"ui-g-8\">\n            \t<input pInputText id=\"ename\" #ename placeholder=\"Eventname\">\n            </div>\n        </div>\n        \n        <div class=\"ui-g-12\">\n            <div class=\"ui-g-4 links\">Datum</div>\n            <div class=\"ui-g-8\">\n            \t<input pInputText id=\"edatum\" #edatum placeholder=\"Datum\">\n            </div>\n        </div>\n        \n        <div class=\"ui-g-12\">\n            <div class=\"ui-g-4 links\">Ort</div>\n            <div class=\"ui-g-8\">\n            \t<input pInputText id=\"eort\" #eort placeholder=\"Ort\">\n            </div>\n        </div>  \n    </div>\n    \n    <p-footer>\n        <div class=\"ui-g-5 ui-dialog-buttonpane ui-helper-clearfix\">\n\t\t\t<button pButton type=\"button\" label=\"Hinzufügen\" class=\"ui-button-success\"\n\t\t\t\t\t(click)=\"addEvent(ename.value, edatum.value, eort.value); ename.value = 'Eventname'; edatum.value = 'Datum'; eort.value = 'Ort';\"></button>\n\t\t</div>\n    </p-footer>\n</p-dialog>"

/***/ }),

/***/ "./src/app/body/events/eventliste/eventliste.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/body/events/eventliste/eventliste.component.ts ***!
  \****************************************************************/
/*! exports provided: EventlisteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventlisteComponent", function() { return EventlisteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _eventloader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../eventloader.service */ "./src/app/eventloader.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EventlisteComponent = /** @class */ (function () {
    function EventlisteComponent(eventloaderService) {
        this.eventloaderService = eventloaderService;
    }
    EventlisteComponent.prototype.ngOnInit = function () {
        this.getEvents();
        this.cols = [
            { field: 'id', header: 'ID' },
            { field: 'ename', header: 'Eventname' },
            { field: 'edatum', header: 'Datum' },
            { field: 'eort', header: 'Ort' },
            { field: 'eanz', header: 'Anmeldungen' },
            { field: 'besucher', header: 'Besucher' },
            { field: 'admin', header: 'Admin' }
        ];
        this.selectedColumns = [
            { field: 'ename', header: 'Eventname' },
            { field: 'edatum', header: 'Datum' },
            { field: 'eort', header: 'Ort' },
            { field: 'admin', header: 'Admin' }
        ];
    };
    /* alle Events laden */
    EventlisteComponent.prototype.getEvents = function () {
        var _this = this;
        this.eventloaderService.getEvents().subscribe(function (events) { return _this.events = events; });
    };
    /* Neues Event hinzuf�gen */
    EventlisteComponent.prototype.addEvent = function (name, date, ort) {
        var _this = this;
        name = name.trim();
        date = date.trim();
        ort = ort.trim();
        // Zur�ck wenn ein Feld leer ist
        if (!name || !date || !ort) {
            return;
        }
        this.eventloaderService.addEvent({ ename: name, edatum: date, eort: ort, eanz: 0, besucher: 0 })
            .subscribe(function (event) {
            _this.events.push(event);
        });
    };
    /* Achtung: �ndert Tabelle ohne auf Erfolg der Datanbank zu warten */
    EventlisteComponent.prototype.delete = function (event) {
        this.events = this.events.filter(function (e) { return e !== event; });
        this.eventloaderService.deleteEvent(event).subscribe();
    };
    /* Filter auf Anmeldungen nicht sofort anwenden */
    EventlisteComponent.prototype.onAnzChange = function (event, dt) {
        if (this.anzTimeout) {
            clearTimeout(this.anzTimeout);
        }
        this.anzTimeout = setTimeout(function () {
            dt.filter(event.value, 'eanz', 'gt');
        }, 250);
    };
    /* Filter auf Besucher nicht sofort anwenden */
    EventlisteComponent.prototype.onBesucherChange = function (event, dt) {
        if (this.besucherTimeout) {
            clearTimeout(this.besucherTimeout);
        }
        this.besucherTimeout = setTimeout(function () {
            dt.filter(event.value, 'besucher', 'gt');
        }, 250);
    };
    /* Hinzuf�ge-Dialog �ffnen */
    EventlisteComponent.prototype.showDialogToAdd = function () {
        this.displayDialog = true;
    };
    EventlisteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-eventliste',
            template: __webpack_require__(/*! ./eventliste.component.html */ "./src/app/body/events/eventliste/eventliste.component.html"),
            styles: [__webpack_require__(/*! ./eventliste.component.css */ "./src/app/body/events/eventliste/eventliste.component.css"), __webpack_require__(/*! ./../../body.css */ "./src/app/body/body.css"), __webpack_require__(/*! ./../../../app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_eventloader_service__WEBPACK_IMPORTED_MODULE_1__["EventloaderService"]])
    ], EventlisteComponent);
    return EventlisteComponent;
}());



/***/ }),

/***/ "./src/app/body/person/editperson/editperson.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/body/person/editperson/editperson.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n"

/***/ }),

/***/ "./src/app/body/person/editperson/editperson.component.html":
/*!******************************************************************!*\
  !*** ./src/app/body/person/editperson/editperson.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head>\n\t<meta http-equiv='content-type' content ='text/html; charset=utf-8'>\n</head>\n\n<div *ngIf=\"person\">\n\t<div id=\"text\">\n\t\t<h2>{{person.vname}} {{person.nname}}</h2>\n\t\t\n\t\t<p>Hier kann der Admin Personen komplett bearbeiten.</p>\n\t</div>\n\n\t<div>\n\t\n\t\t<!-- Bild -->\n\t\t<div class=\"ui-g-2 ui-xl-2 ui-l-3 ui-lg-3 ui-md-4 ui-sm-4\" id=\"bild\">\n\t\t\t<img src='{{person.imgurl}}' style=\"width:100%\">\n\t\t</div>\n\t\t\n\t\t<!-- Informationen -->\n\t\t<div class=\"ui-g-10\" id=\"infos\">\n\t\t\n\t\t\t<div class=\"ui-g\">\n\t\t\t\t<div class=\"ui-g-2 ui-xl-2 ui-l-3 ui-lg-4 ui-md-5 ui-sm-5\" align=\"right\">Vorname:</div>\n\t\t\t\t<div><input #vname pInputText value=\"{{person.vname}}\"></div>\n\t\t\t</div>\n\t\t\t\n\t\t\t<div class=\"ui-g\">\t\n\t\t\t\t<div class=\"ui-g-2 ui-xl-2 ui-l-3 ui-lg-4 ui-md-5 ui-sm-5\" align=\"right\">Nachname:</div>\n\t\t\t\t<div><input #nname pInputText value=\"{{person.nname}}\"></div>\n\t\t\t</div>\n\t\t\t\n\t\t\t<div class=\"ui-g\">\t\n\t\t\t\t<div class=\"ui-g-2 ui-xl-2 ui-l-3 ui-lg-4 ui-md-5 ui-sm-5\" align=\"right\">Mail:</div>\n\t\t\t\t<div><input #mail pInputText value=\"{{person.mail}}\" pattern=\"+@+.+\" placeholder=\"name@firma.de\" type=\"email\"></div>\n\t\t\t</div>\n\t\t\t\n\t\t\t<div class=\"ui-g\">\t\n\t\t\t\t<div class=\"ui-g-2 ui-xl-2 ui-l-3 ui-lg-4 ui-md-5 ui-sm-5\" align=\"right\">Firma:</div>\n\t\t\t\t<div><input #firma pInputText value=\"{{person.firma}}\"></div>\n\t\t\t</div>\n\t\t\t\n\t\t\t<div class=\"ui-g\">\t\n\t\t\t\t<div class=\"ui-g-2 ui-xl-2 ui-l-3 ui-lg-4 ui-md-5 ui-sm-5\" align=\"right\">Bild-Url:</div>\n\t\t\t\t<div><input #imgurl pInputText value=\"{{person.imgurl}}\"></div>\n\t\t\t</div>\n\t\t\t\n\t\t\t<div class=\"ui-g\">\t\n\t\t\t\t<div class=\"ui-g-2 ui-xl-2 ui-l-3 ui-lg-4 ui-md-5 ui-sm-5\" align=\"right\">Freigeschaltet:</div>\n\t\t\t\t<div class=\"ui-g-1 ui-xl-1 ui-l-2 ui-lg-2 ui-md-3 ui-sm-3\" [ngClass]=\"person.darf ? 'gut' : 'schlecht'\">{{person.darf}}</div>\n\t\t\t\t<div>\n\t\t\t\t\t<button pButton type=\"button\" icon=\"pi pi-unlock\"class=\"ui-button-success\" (click)=\"allow(true)\"></button>\n\t\t\t\t\t<button pButton type=\"button\" icon=\"pi pi-lock\"class=\"ui-button-danger\" (click)=\"allow(false)\"></button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t\n\t\t\t<div class=\"ui-g\">\t\n\t\t\t\t<div class=\"ui-g-2 ui-xl-2 ui-l-3 ui-lg-4 ui-md-5 ui-sm-5\" align=\"right\">VIP:</div>\n\t\t\t\t<div class=\"ui-g-1 ui-xl-1 ui-l-2 ui-lg-2 ui-md-3 ui-sm-3\" [ngClass]=\"person.vip ? 'gut' : 'schlecht'\">{{person.vip}}</div>\n\t\t\t\t<div>\n\t\t\t\t\t<button pButton type=\"button\" icon=\"pi pi-angle-double-up\" class=\"ui-button-success\" (click)=\"vip(true)\"></button>\n\t\t\t\t\t<button pButton type=\"button\" icon=\"pi pi-angle-double-down\" class=\"ui-button-danger\" (click)=\"vip(false)\"></button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t\n\t\t\t<div class=\"ui-g\">\t\n\t\t\t\t<div class=\"ui-g-2 ui-xl-2 ui-l-3 ui-lg-4 ui-md-5 ui-sm-5\" align=\"right\">Gescannt:</div>\n\t\t\t\t<div class=\"ui-g-1 ui-xl-1 ui-l-2 ui-lg-2 ui-md-3 ui-sm-3\"  [ngClass]=\"person.gescannt ? 'schlecht': 'gut'\">{{person.gescannt}}</div>\n\t\t\t\t<div>\n\t\t\t\t\t<button pButton type=\"button\" icon=\"pi pi-refresh\" class=\"ui-button-success\" (click)=\"scan(false)\"></button>\n\t\t\t\t\t<button pButton type=\"button\" icon=\"pi pi-ban\" class=\"ui-button-danger\" (click)=\"scan(true)\" ></button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t\n\t\t</div>\n\t</div>\n\t\n\t<!-- Buttons Zurück & Speichern -->\n\t<div class=\"ui-g-12\" style=\"margin: 5px\" id=\"buttons\">\n\t\t<button pButton type=\"button\" icon=\"pi pi-arrow-left\" label=\"Zurück\" class=\"ui-button-warning\" (click)=\"goBack()\"></button>\n\t\t<button pButton type=\"button\" icon=\"pi pi-check\" label=\"Änderungen speichern\" class=\"ui-button-success\" (click)=\"savePerson(vname.value, nname.value, mail.value, firma.value, imgurl.value)\"></button>\n\t</div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/body/person/editperson/editperson.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/body/person/editperson/editperson.component.ts ***!
  \****************************************************************/
/*! exports provided: EditpersonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditpersonComponent", function() { return EditpersonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _person__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../person */ "./src/app/person.ts");
/* harmony import */ var _eventloader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../eventloader.service */ "./src/app/eventloader.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditpersonComponent = /** @class */ (function () {
    function EditpersonComponent(route, eventloaderservice, location) {
        this.route = route;
        this.eventloaderservice = eventloaderservice;
        this.location = location;
    }
    EditpersonComponent.prototype.ngOnInit = function () {
        this.getPerson();
    };
    /* Person laden */
    EditpersonComponent.prototype.getPerson = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.eventloaderservice.getPerson(id).subscribe(function (person1) { return _this.person = person1; });
    };
    /* Zur�ck zur Seite davor */
    EditpersonComponent.prototype.goBack = function () {
        this.location.back();
    };
    /* umschalten ob freigeschaltet */
    EditpersonComponent.prototype.allow = function (bool) {
        this.person.darf = bool;
    };
    /* VIP umschalten */
    EditpersonComponent.prototype.vip = function (bool) {
        this.person.vip = bool;
    };
    /* gescannt umschalten */
    EditpersonComponent.prototype.scan = function (bool) {
        this.person.gescannt = bool;
    };
    /* �nderung speichern */
    EditpersonComponent.prototype.savePerson = function (vname, nname, mail, firma, imgurl) {
        var _this = this;
        this.person.vname = vname;
        this.person.nname = nname;
        this.person.mail = mail;
        this.person.firma = firma;
        this.person.imgurl = imgurl;
        this.eventloaderservice.updatePerson(this.person).subscribe(function () { return _this.goBack(); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _person__WEBPACK_IMPORTED_MODULE_3__["Person"])
    ], EditpersonComponent.prototype, "person", void 0);
    EditpersonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-editperson',
            template: __webpack_require__(/*! ./editperson.component.html */ "./src/app/body/person/editperson/editperson.component.html"),
            styles: [__webpack_require__(/*! ./editperson.component.css */ "./src/app/body/person/editperson/editperson.component.css"), __webpack_require__(/*! ./../../../app.component.css */ "./src/app/app.component.css"), __webpack_require__(/*! ./../../body.css */ "./src/app/body/body.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _eventloader_service__WEBPACK_IMPORTED_MODULE_4__["EventloaderService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
    ], EditpersonComponent);
    return EditpersonComponent;
}());



/***/ }),

/***/ "./src/app/body/person/personenliste/personenliste.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/body/person/personenliste/personenliste.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/body/person/personenliste/personenliste.component.html":
/*!************************************************************************!*\
  !*** ./src/app/body/person/personenliste/personenliste.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head>\n\t<meta http-equiv='content-type' content ='text/html; charset=utf-8'>\n</head>\n\n<!-- Text -->\n<div style=\"margin: 5px\" id=\"text\">\n\t<h2>Personenliste</h2>\n\t<p>\n\t  Liste der Personen, die in der Datenbank sind - auch noch nicht freigeschaltene Personen und jene, deren Code bereits gescannt wurde.\n\t</p>\n</div>\n\n<!-- p-table von PrimeNG -->\n<div style=\"margin: 5px\" id=\"personen-tabelle\">\n<p-table #dt [columns]=\"selectedColumns\" [value]=\"persons\" [paginator]=\"true\" [rows]=\"4\" [autoLayout]=true [responsive]=\"true\">\n    <!-- globales Suchfeld -->\n    <ng-template pTemplate=\"caption\">\n\t    \t<div style=\"text-align:left\">\n\t            <p-multiSelect [options]=\"cols\" [(ngModel)]=\"selectedColumns\" optionLabel=\"header\"\n\t                        selectedItemsLabel=\"{0} Spalten ausgewählt\" [style]=\"{minWidth: '200px'}\" defaultLabel=\"Wähle Spalten\"></p-multiSelect>\n\t        </div>\n\t        <div style=\"text-align: right\">        \n\t            <i class=\"fa fa-search\" style=\"margin:4px 4px 0 0\"></i>\n\t            <input type=\"text\" pInputText size=\"25\" placeholder=\"Global Filter\" (input)=\"dt.filterGlobal($event.target.value, 'contains')\" style=\"width:auto\">\n\t        </div>\n    </ng-template>\n    \n    <!--  header der Tabelle -->\n    <ng-template pTemplate=\"header\" let-columns>\n        <tr>\n        \t<!-- Kopfzeile mit Beschriftung der Spalten -->\n            <th *ngFor=\"let col of columns\">\n                {{col.header}}\n            </th>\n        </tr>\n        <tr>\n        \t<!-- Suchfelder der Spalten -->\n            <th *ngFor=\"let col of columns\" [ngSwitch]=\"col.field\">\n                <input *ngSwitchCase=\"'id'\" pInputText type=\"text\" (input)=\"dt.filter($event.target.value, col.field, 'contains')\" size=\"2\">\n                <input *ngSwitchCase=\"'vname'\" pInputText type=\"text\" (input)=\"dt.filter($event.target.value, col.field, 'contains')\" size=\"10\">\n                <input *ngSwitchCase=\"'nname'\" pInputText type=\"text\" (input)=\"dt.filter($event.target.value, col.field, 'contains')\" size=\"10\">\n                <input *ngSwitchCase=\"'mail'\" pInputText type=\"text\" (input)=\"dt.filter($event.target.value, col.field, 'contains')\">\n                <input *ngSwitchCase=\"'firma'\" pInputText type=\"text\" (input)=\"dt.filter($event.target.value, col.field, 'contains')\">\n                <p-dropdown *ngSwitchCase=\"'darf'\" [options]=\"bools\" [style]=\"{'width':'100%'}\" (onChange)=\"dt.filter($event.value, col.field, 'equals')\"></p-dropdown>\n                <p-dropdown *ngSwitchCase=\"'vip'\" [options]=\"bools\" [style]=\"{'width':'100%'}\" (onChange)=\"dt.filter($event.value, col.field, 'equals')\"></p-dropdown>\n                <p-dropdown *ngSwitchCase=\"'gescannt'\" [options]=\"bools\" [style]=\"{'width':'100%'}\" (onChange)=\"dt.filter($event.value, col.field, 'equals')\"></p-dropdown>\n            </th>\n        </tr>\n    </ng-template>\n    \n    <!-- der eigentliche Inhalt der Tabelle --> \n    <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n        <tr [pSelectableRow]=\"rowData\" align='center'>\n            <td *ngFor=\"let col of columns\" [ngSwitch]=\"col.field\">\n            \t<span class=\"ui-column-title\">{{col.header}}</span>\n            \t<div *ngSwitchCase=\"'id'\" (input)=\"dt.filter($event.target.value, col.field, col.filterMatchMode)\" align='center'>{{rowData[col.field]}}</div>\n                <div *ngSwitchCase=\"'vname'\" (input)=\"dt.filter($event.target.value, col.field, col.filterMatchMode)\">{{rowData[col.field]}}</div>\n                <div *ngSwitchCase=\"'nname'\" (input)=\"dt.filter($event.target.value, col.field, col.filterMatchMode)\">{{rowData[col.field]}}</div>\n                <div *ngSwitchCase=\"'mail'\" (input)=\"dt.filter($event.target.value, col.field, col.filterMatchMode)\">{{rowData[col.field]}}</div>\n                <div *ngSwitchCase=\"'firma'\" (input)=\"dt.filter($event.target.value, col.field, col.filterMatchMode)\">{{rowData[col.field]}}</div>\n                <div *ngSwitchCase=\"'imgurl'\" (input)=\"dt.filter($event.target.value, col.field, col.filterMatchMode)\" align='center'><img src=\"{{rowData[col.field]}}\" height=\"50\" width=\"50\"></div>\n                <div *ngSwitchCase=\"'darf'\" (input)=\"dt.filter($event.target.value, col.field, col.filterMatchMode)\" align='center'>{{rowData[col.field]}}</div>\n                <div *ngSwitchCase=\"'vip'\" (input)=\"dt.filter($event.target.value, col.field, col.filterMatchMode)\" align='center'>{{rowData[col.field]}}</div>\n                <div *ngSwitchCase=\"'gescannt'\" (input)=\"dt.filter($event.target.value, col.field, col.filterMatchMode)\" align='center'>{{rowData[col.field]}}</div>\n                <div *ngSwitchCase=\"'admin'\" (input)=\"dt.filter($event.target.value, col.field, col.filterMatchMode)\" align='center'>\n                \t<a routerLink=\"/editperson/{{rowData['id']}}\">\n            \t\t\t<button pButton type=\"button\" icon=\"pi pi-pencil\" class=\"ui-button-warning\"></button>  \n\t            \t</a>  \n\t            \t<a routerLink=\"/personenliste\" routerLinkActive=\"active\">        \n\t            \t\t<button pButton type=\"button\" icon=\"pi pi-times\" class=\"ui-button-danger\" title=\"deleteperson\" (click)=\"delete(rowData['id'])\"></button>\n                \t</a>\n                </div>\n            </td>\n        </tr>\n    </ng-template>\n    \n    <!-- footer -->\n\t<ng-template pTemplate=\"summary\">\n        <div style=\"text-align:right\">\n        \n        \t<div style=\"text-align:center\">\n\t       \t\t{{persons?.length}} Personen\n\t\t\t</div>\n        \n        \t<button pButton type=\"button\" icon=\"pi pi-user-plus\" class=\"ui-button-warning\" title=\"addperson\" (click)=\"add()\" label=\"Irgendwen hinzufügen\"></button>\n            <button type=\"button\" pButton icon=\"fa fa-plus\" (click)=\"showDialogToAdd()\" label=\"Per Einagbe hinzufügen\" class=\"ui-button-success\"></button>\n        \n        </div>\n    </ng-template>\n\n</p-table>\n</div>\n\n<!-- Dialogbox zum Hinzufügen -->\n<p-dialog header=\"Personendetails\" [(visible)]=\"displayDialog\" [responsive]=\"true\" showEffect=\"fade\" [modal]=\"true\" [width]=\"400\">\n    <div class=\"ui-g ui-fluid\">\n        \n        <div class=\"ui-g-12\">\n        \t<div class=\"ui-g-4 links\">Vorname</div>\n            <div class=\"ui-g-8\">\n            \t<input pInputText id=\"vname\" #vname placeholder=\"Vorname\">\n            </div>\n        </div>\n        \n        <div class=\"ui-g-12\">\n            <div class=\"ui-g-4 links\">Nachname</div>\n            <div class=\"ui-g-8\">\n            \t<input pInputText id=\"nname\" #nname placeholder=\"Nachname\">\n            </div>\n        </div>\n        \n        <div class=\"ui-g-12\">\n            <div class=\"ui-g-4 links\">Mail</div>\n            <div class=\"ui-g-8\">\n            \t<input pInputText id=\"mail\" #mail placeholder=\"Mail\">\n            </div>\n        </div>\n        <div class=\"ui-g-12\">\n            <div class=\"ui-g-4 links\">Firma</div>\n            <div class=\"ui-g-8\">\n            \t<input pInputText id=\"firma\" #firma placeholder=\"Firma\">\n            </div>\n        </div>\n        <div class=\"ui-g-12\">\n            <div class=\"ui-g-4 links\">Bild-URL</div>\n            <div class=\"ui-g-8\">\n            \t<input pInputText id=\"imgurl\" #imgurl placeholder=\"Bild-URL\">\n            </div>\n        </div>\n    </div>\n    \n    <p-footer>\n        <div class=\"ui-g-5 ui-dialog-buttonpane ui-helper-clearfix\">\n            <button pButton type=\"button\" label=\"Hinzufügen\" class=\"ui-button-success\"\n            (click)=\"addPerson(vname.value, nname.value, mail.value, firma.value, imgurl.value); vname.value = 'Vorname'; nname.value = 'Nachname'; mail.value = 'E-Mail'; firma.value = 'Firma'; imgurl.value = 'Bild-URL';\"></button> \n        </div>\n    </p-footer>\n</p-dialog>\n"

/***/ }),

/***/ "./src/app/body/person/personenliste/personenliste.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/body/person/personenliste/personenliste.component.ts ***!
  \**********************************************************************/
/*! exports provided: PersonenlisteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonenlisteComponent", function() { return PersonenlisteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _eventloader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../eventloader.service */ "./src/app/eventloader.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PersonenlisteComponent = /** @class */ (function () {
    function PersonenlisteComponent(eventloaderService) {
        this.eventloaderService = eventloaderService;
    }
    PersonenlisteComponent.prototype.ngOnInit = function () {
        this.getPersons();
        this.count = 0;
        this.cols = [
            { field: 'id', header: 'ID' },
            { field: 'vname', header: 'Vorname' },
            { field: 'nname', header: 'Nachname' },
            { field: 'mail', header: 'Mail' },
            { field: 'firma', header: 'Firma' },
            { field: 'imgurl', header: 'Bild' },
            { field: 'darf', header: 'Freigeschalten' },
            { field: 'vip', header: 'VIP' },
            { field: 'gescannt', header: 'Gescannt' },
            { field: 'admin', header: 'Admin' }
        ];
        this.bools = [
            { label: 'Alles', value: null },
            { label: 'True', value: 'true' },
            { label: 'False', value: 'false' }
        ];
        this.selectedColumns = [
            { field: 'vname', header: 'Vorname' },
            { field: 'nname', header: 'Nachname' },
            { field: 'mail', header: 'Mail' },
            { field: 'firma', header: 'Firma' },
            { field: 'imgurl', header: 'Bild' },
            { field: 'admin', header: 'Admin' }
        ];
    };
    /* alle Personen laden */
    PersonenlisteComponent.prototype.getPersons = function () {
        var _this = this;
        this.eventloaderService.getPersons().subscribe(function (persons) { return _this.persons = persons; });
    };
    /* einzelne person hinzufügen */
    PersonenlisteComponent.prototype.addPerson = function (vname, nname, mail, firma, imgurl) {
        var _this = this;
        /* Leerzeichen entfernen */
        vname = vname.trim();
        nname = nname.trim();
        mail = mail.trim();
        firma = firma.trim();
        imgurl = imgurl.trim();
        /* wenn ein Feld leer ist, nichts hinzuf�gen */
        if (!vname || !nname || !mail || !firma) {
            return;
        }
        this.eventloaderService.addPerson({ vname: vname,
            nname: nname,
            mail: mail,
            firma: firma,
            imgurl: imgurl,
            darf: false,
            vip: false,
            gescannt: false })
            .subscribe(function (person) { _this.persons.push(person); });
    };
    /* Person löschen */
    PersonenlisteComponent.prototype.delete = function (person) {
        this.persons = this.persons.filter(function (p) { return p !== person; });
        this.eventloaderService.deletePerson(person).subscribe();
    };
    /* vordefinierte Personen hinzufügen */
    PersonenlisteComponent.prototype.add = function () {
        var _this = this;
        switch (this.count) {
            case 0: {
                this.eventloaderService.addPerson({ vname: 'Rincewind',
                    nname: 'Zaubberer',
                    mail: 'zaubberer@uuni.amp',
                    firma: 'Unsichtbare Universität',
                    imgurl: 'https://www.fischundfleisch.com/avatar/9987/300/rincewind.jpg',
                    darf: false,
                    vip: true,
                    gescannt: false })
                    .subscribe(function (person) { _this.persons.push(person); });
                this.count++;
                break;
            }
            case 1: {
                this.eventloaderService.addPerson({ vname: 'Ash',
                    nname: 'Ketchum',
                    mail: 'pokemeister@eichgmbh.jo',
                    firma: 'Eich GmbH',
                    imgurl: 'https://orig00.deviantart.net/5888/f/2016/098/5/2/ash_ketchum_by_seanklaskyn64-d9y7tzy.png',
                    darf: false,
                    vip: false,
                    gescannt: false })
                    .subscribe(function (person) { _this.persons.push(person); });
                this.count++;
                break;
            }
            case 2: {
                this.eventloaderService.addPerson({ vname: 'Stuart',
                    nname: 'Minion',
                    mail: '7326@minions.gru',
                    firma: 'GruRocks',
                    imgurl: 'https://www.amscan.co.uk/graphics_cache/6/3/48782-3265501-3-600.jpg',
                    darf: false,
                    vip: false,
                    gescannt: false })
                    .subscribe(function (person) { _this.persons.push(person); });
                this.count++;
                break;
            }
        }
    };
    /* Hinzufüge-Dialog öffnen */
    PersonenlisteComponent.prototype.showDialogToAdd = function () {
        this.newPerson = true;
        this.person;
        this.displayDialog = true;
    };
    PersonenlisteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-personenliste',
            template: __webpack_require__(/*! ./personenliste.component.html */ "./src/app/body/person/personenliste/personenliste.component.html"),
            styles: [__webpack_require__(/*! ./personenliste.component.css */ "./src/app/body/person/personenliste/personenliste.component.css"), __webpack_require__(/*! ./../../../app.component.css */ "./src/app/app.component.css"), __webpack_require__(/*! ./../../body.css */ "./src/app/body/body.css")]
        }),
        __metadata("design:paramtypes", [_eventloader_service__WEBPACK_IMPORTED_MODULE_1__["EventloaderService"]])
    ], PersonenlisteComponent);
    return PersonenlisteComponent;
}());



/***/ }),

/***/ "./src/app/event.ts":
/*!**************************!*\
  !*** ./src/app/event.ts ***!
  \**************************/
/*! exports provided: Event */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Event", function() { return Event; });
var Event = /** @class */ (function () {
    function Event() {
    }
    return Event;
}());



/***/ }),

/***/ "./src/app/eventloader.service.ts":
/*!****************************************!*\
  !*** ./src/app/eventloader.service.ts ***!
  \****************************************/
/*! exports provided: EventloaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventloaderService", function() { return EventloaderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./message.service */ "./src/app/message.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/* Angular */


/* rxjs */



var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*' })
};
var EventloaderService = /** @class */ (function () {
    function EventloaderService(http, messageService) {
        this.http = http;
        this.messageService = messageService;
        /* URL zur Web API mit der Eventliste / Aufgabe*/
        //  private eventsUrl = 'https://localhost:3306/api/events';
        this.eventsUrl = 'api/events';
        this.aufgabeUrl = 'api/aufgabe';
        this.personsUrl = 'api/persons';
    }
    /* Für die Eventliste */
    /* alle Events laden */
    EventloaderService.prototype.getEvents = function () {
        var _this = this;
        return this.http.get(this.eventsUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (persons) { return _this.log('geladen: events'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getEvents', [])));
    };
    /* Event hinzufügen */
    EventloaderService.prototype.addEvent = function (event) {
        var _this = this;
        /* event ohne id zur DB schicken, dort wird automatisch die Variable gesetzt - sie muss exakt "id" heißen ! */
        return this.http.post(this.eventsUrl, event, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (event1) { return _this.log("hinzugef\u00FCgt: Event mit der ID " + event.id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("addEvent")));
    };
    /* lösche Event */
    EventloaderService.prototype.deleteEvent = function (event) {
        var _this = this;
        var id = typeof event === 'number' ? event : event.id;
        var url = this.eventsUrl + "/" + id;
        return this.http.delete(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("entferne Event mit der ID=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("deleteEvent")));
    };
    /* für den Event - Editor */
    /* einzelnes Event laden */
    EventloaderService.prototype.getEvent = function (id) {
        var _this = this;
        var url = this.eventsUrl + "/" + id;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("geladenes Event ID=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("getEvent ID=" + id)));
    };
    /* ändere Event */
    EventloaderService.prototype.updateEvent = function (event) {
        var _this = this;
        return this.http.put(this.eventsUrl, event, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("ge\u00E4ndertes Event ID=" + event.id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("updateEvent")));
    };
    /* Für die Personenliste */
    EventloaderService.prototype.getPerson = function (id) {
        var _this = this;
        var url = this.personsUrl + "/" + id;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("geladene Person ID=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("getPerson ID=" + id)));
    };
    /* Update der Person an DB schicken */
    EventloaderService.prototype.updatePerson = function (person) {
        var _this = this;
        return this.http.put(this.personsUrl, person, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("ge\u00E4nderte Person ID=" + person.id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("updatePerson")));
    };
    /* einzelne Person laden */
    EventloaderService.prototype.getPersons = function () {
        var _this = this;
        return this.http.get(this.personsUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (persons) { return _this.log('geladen: persons'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getPersons', [])));
    };
    /* Person hinzufügen */
    EventloaderService.prototype.addPerson = function (person) {
        var _this = this;
        /* person ohne id zur DB schicken, dort wird automatisch die Variable gesetzt - sie muss exakt "id" heißen ! */
        return this.http.post(this.personsUrl, person, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (person1) { return _this.log("hinzugef\u00FCgt: Person mit ID= " + person1.id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('addPerson, []')));
    };
    /* Person löschen */
    EventloaderService.prototype.deletePerson = function (person) {
        var _this = this;
        var id = typeof person === 'number' ? person : person.id;
        var url = this.personsUrl + "/" + id;
        return this.http.delete(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("entferne Person mit der ID=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("deletePerson")));
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    EventloaderService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.error(error); // log to console instead
            _this.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    /** Log a HeroService message with the MessageService */
    EventloaderService.prototype.log = function (message) {
        this.messageService.add("Eventloader: " + message);
    };
    EventloaderService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"]])
    ], EventloaderService);
    return EventloaderService;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\nh1 {\r\n\tcolor: green !important;\r\n}\r\n\r\n.but {\r\n\tbackground-color: green !important;\r\n\tborder-color: lightgreen !important;\r\n\twidth: 100px;\r\n}\r\n\r\n.but:hover {\r\n\tbackground-color: darkgreen !important;\r\n\t\r\n}\r\n\r\n.navi {\r\n\tposition: absolute;\r\n\tright: 30px;\r\n}\r\n\r\ndiv {\r\n/*\tborder: 1px solid #73AD21 !important; */\r\n}"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12\">\n\n\t<!-- Menü einbinden -->\n\t<div class=\"ui-g-1 ui-xl-1 ui-l-1 ui-lg-1 ui-md-2 ui-sm-2\">\n\t\t<app-menu></app-menu>\n\t</div>\n\t\n\t<!-- Logo -->\n\t<div class=\"ui-g-1 ui-xl-1 ui-l-1 ui-lg-1 ui-md-1 ui-sm-2\">\n\t\t<img alt=\"logo\" style=\"width:50px\" src='./../../../Images/logo-kl.png' align=\"right\">\n\t</div>\n\t\n\t<!-- Firmenname -->\n\t<div class=\"ui-g-4 ui-xl-4 ui-l-4 ui-lg-5 ui-md-5 ui-sm-6\">\n\t\t<h1>{{ firmenname }}</h1>\n\t</div>\n\t\n\t<!-- Kontakt, Login, etc -->\n\t<div class=\"ui-g-2 \t\n\t\t\t\tui-xl-3 \n\t\t\t\tui-l-3 \t\n\t\t\t\tui-lg-4 \n\t\t\t\tui-md-4 \n\t\t\t\tui-sm-12 \n\t\t\t\tpull-right\" align=\"right\">\n\t\t\n\t\t<a routerLink=\"/kontakt\">\n\t\t\t<button pButton class=\"ui-button-success but\" label=\"Kontakt\" ></button>\n\t\t</a>\n\t\t\n\t\t<a routerLink=\"/login\">\n\t\t\t<button pButton class=\"ui-button-success but\" label=\"Login\"></button>\n\t\t</a>\n\t\t\n\t</div>\t\t\n</div>\n\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.firmenname = 'easyBall';
    }
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css"), __webpack_require__(/*! ./../app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/header/kontakt/kontakt.component.css":
/*!******************************************************!*\
  !*** ./src/app/header/kontakt/kontakt.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\r\n\tmargin: 15px;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/header/kontakt/kontakt.component.html":
/*!*******************************************************!*\
  !*** ./src/app/header/kontakt/kontakt.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head>\r\n\t<meta http-equiv=\"content-type\" content=\"text/html; charset=utf-8\">\r\n</head>\r\n\r\n<div id=\"anschrift\">\r\n\t<div>\r\n\t\t<i class=\"fa fa-map-marker\"></i>\r\n\t\t<strong> Anschrift</strong>\r\n\t</div>\r\n\t<div>\r\n\t\tThomas-Müntzer-Straße 15, 12489 Berlin\r\n\t</div>\r\n</div>\r\n\r\n<div id=\"telefon\">\r\n\t<div >\r\n\t\t<i class=\"fa fa-phone\"></i>\r\n\t\t<strong> Telefon</strong>\r\n\t</div>\r\n\t<div>\r\n\t\t030 123456789\r\n\t</div>\r\n</div>\r\n\r\n<div id=\"mail\">\r\n\t<div >\r\n\t\t<i class=\"pi pi-pencil\"></i>\r\n\t\t<strong> Mail</strong>\r\n\t</div>\r\n\t<div>\r\n\t\tmail@easyball.de\r\n\t</div>\r\n</div>\r\n\r\n\r\n<div id=\"map\">\r\n\t<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1216.195070728122!2d13.54545547205275!3d52.43584707146893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a8462ba06ebc89%3A0x6f278b5d03eedba1!2sThomas-M%C3%BCntzer-Stra%C3%9Fe+15%2C+12489+Berlin!5e0!3m2!1sde!2sde!4v1534079686021\"\r\n\t\t\twidth=\"100%\" height=\"400px\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/header/kontakt/kontakt.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/header/kontakt/kontakt.component.ts ***!
  \*****************************************************/
/*! exports provided: KontaktComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KontaktComponent", function() { return KontaktComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var KontaktComponent = /** @class */ (function () {
    function KontaktComponent() {
    }
    KontaktComponent.prototype.ngOnInit = function () {
    };
    KontaktComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-kontakt',
            template: __webpack_require__(/*! ./kontakt.component.html */ "./src/app/header/kontakt/kontakt.component.html"),
            styles: [__webpack_require__(/*! ./../../app.component.css */ "./src/app/app.component.css"), __webpack_require__(/*! ./kontakt.component.css */ "./src/app/header/kontakt/kontakt.component.css"), __webpack_require__(/*! ./../header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], KontaktComponent);
    return KontaktComponent;
}());



/***/ }),

/***/ "./src/app/header/login/login.component.css":
/*!**************************************************!*\
  !*** ./src/app/header/login/login.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/header/login/login.component.html":
/*!***************************************************!*\
  !*** ./src/app/header/login/login.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Aufgrund eines fehlendes Backends zur Zeit ohne Funktion.</p>\r\n\r\n<form (submit)=\"loginUser($event)\">\r\n\t<input pInputText placeholder=\"Benutzername\" id=\"nutzer\" value=\"admin\"/><br>\r\n\t<input pInputText placeholder=\"Passwort\" id=\"pw\" value=\"admin\"/><br>\r\n\t<button pButton type=\"button\" class=\"ui-button-success\" label=\"Login\"></button>\r\n</form>"

/***/ }),

/***/ "./src/app/header/login/login.component.ts":
/*!*************************************************!*\
  !*** ./src/app/header/login/login.component.ts ***!
  \*************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = /** @class */ (function () {
    function LoginComponent(Auth) {
        this.Auth = Auth;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.loginUser1 = function (event) {
        event.preventDefault();
        var target = event.target;
        var nutzer = target.querySelector('nutzer.value');
        var pw = target.querySelector('pw.value');
        this.Auth.getUserDetails(nutzer, pw);
        console.log(nutzer, pw);
    };
    LoginComponent.prototype.loginUser = function (event) {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/header/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/header/login/login.component.css"), __webpack_require__(/*! ./../../app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/header/menu/menu.component.css":
/*!************************************************!*\
  !*** ./src/app/header/menu/menu.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".menuicon {\r\n\theight: 100%px !important;\r\n\tbackground-color: green !important;\r\n\tborder-radius: 5px;\r\n\tborder: 1px solid lightgreen;\r\n\tcolor: white !important;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/header/menu/menu.component.html":
/*!*************************************************!*\
  !*** ./src/app/header/menu/menu.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head>\n\t<meta http-equiv=\"content-type\" content=\"text/html; charset=utf-8\">\n</head>\n\n<span>\n    <p-menu #menu popup=\"popup\" [model]=\"items\"></p-menu>\n    <i class=\"pi pi-bars action-list-icon menuicon\" style=\"font-size: 3em;\" (click)=\"menu.toggle($event)\"></i>\n</span>\n"

/***/ }),

/***/ "./src/app/header/menu/menu.component.ts":
/*!***********************************************!*\
  !*** ./src/app/header/menu/menu.component.ts ***!
  \***********************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
    }
    MenuComponent_1 = MenuComponent;
    MenuComponent.prototype.ngOnInit = function () {
        // Eintr�ge im Men�
        this.items = [
            {
                label: 'Aufgabe',
                icon: 'fa fa-fw fa-book',
                routerLink: '/aufgabe'
            },
            {
                label: 'Eventliste',
                icon: 'fa fa-fw fa-bar-chart',
                routerLink: '/eventliste'
            },
            {
                label: 'Personenliste',
                icon: 'fa fa-fw fa-bar-chart',
                routerLink: '/personenliste'
            },
            {
                label: 'QR Generator',
                routerLink: '/qrgenerator'
            },
            {
                label: 'QR Scanner',
                routerLink: '/qrscanner'
            },
        ];
    };
    MenuComponent = MenuComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [],
            declarations: [MenuComponent_1],
            bootstrap: [MenuComponent_1]
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/header/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/header/menu/menu.component.css"), __webpack_require__(/*! ./../header.component.css */ "./src/app/header/header.component.css"), __webpack_require__(/*! ./../../app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MenuComponent);
    return MenuComponent;
    var MenuComponent_1;
}());



/***/ }),

/***/ "./src/app/in-memory-data.service.ts":
/*!*******************************************!*\
  !*** ./src/app/in-memory-data.service.ts ***!
  \*******************************************/
/*! exports provided: InMemoryDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InMemoryDataService", function() { return InMemoryDataService; });
var InMemoryDataService = /** @class */ (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        /* vorgefertigte Events */
        var events = [
            { id: 0, ename: 'Freibier', eort: 'easyCube', edatum: '6.8.2018', eanz: 7, besucher: 0 },
            { id: 1, ename: 'BER-Eröffnung', eort: 'Schönefeld', edatum: '1.1.2100', eanz: 0, besucher: 0 },
            { id: 2, ename: 'Drittes Event', eort: 'Holzmarktstraße', edatum: '8.8.2018', eanz: 6, besucher: 6 }
        ];
        /* vorgefertigte Personen */
        var persons = [
            { id: 0, vname: 'Bud', nname: 'Spencer', mail: 'hau@kopf.it', firma: 'Filmcrew',
                imgurl: 'https://ih1.redbubble.net/image.368405967.1798/st%2Csmall%2C215x235-pad%2C210x230%2Cf8f8f8.lite-1u3.jpg',
                darf: true, vip: true, gescannt: false },
            { id: 1, vname: 'Dave', nname: 'Minion', mail: '6921@minions.gru', firma: 'GruRocks',
                imgurl: 'https://images-na.ssl-images-amazon.com/images/I/41HPFwV%2BdYL._SY355_.jpg',
                darf: false, vip: false, gescannt: true }
        ];
        return { persons: persons, events: events };
    };
    return InMemoryDataService;
}());



/***/ }),

/***/ "./src/app/message.service.ts":
/*!************************************!*\
  !*** ./src/app/message.service.ts ***!
  \************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MessageService = /** @class */ (function () {
    function MessageService() {
        this.messages = [];
    }
    MessageService.prototype.add = function (message) {
        this.messages.push(message);
    };
    MessageService.prototype.clear = function () {
        this.messages = [];
    };
    MessageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' })
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "./src/app/messages/messages.component.css":
/*!*************************************************!*\
  !*** ./src/app/messages/messages.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\r\n/*\tborder: 1px solid #73AD21 !important; */\r\n}\r\n\r\nh2 {\r\n\tcolor: green !important;\r\n}"

/***/ }),

/***/ "./src/app/messages/messages.component.html":
/*!**************************************************!*\
  !*** ./src/app/messages/messages.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head>\n\t<meta http-equiv=\"content-type\" content=\"text/html; charset=utf-8\">\n</head>\n\n<div class=\"ui-g-12\" id=\"text\">\n\t<h2>Debuglog</h2>\n</div>\n\n<div *ngIf=\"messageService.messages.length\">  \n  \n\t<button pButton type=\"button\" label=\"Clear\" class=\"ui-button-warning\" (click)=\"messageService.clear()\"></button>\n\t\n\t<div *ngFor='let message of messageService.messages' class=\"ui-g-12\">\n\t\t{{message}}\n\t</div>\n\n</div>"

/***/ }),

/***/ "./src/app/messages/messages.component.ts":
/*!************************************************!*\
  !*** ./src/app/messages/messages.component.ts ***!
  \************************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../message.service */ "./src/app/message.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessagesComponent = /** @class */ (function () {
    function MessagesComponent(messageService) {
        this.messageService = messageService;
    }
    MessagesComponent.prototype.ngOnInit = function () {
    };
    MessagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-messages',
            template: __webpack_require__(/*! ./messages.component.html */ "./src/app/messages/messages.component.html"),
            styles: [__webpack_require__(/*! ./messages.component.css */ "./src/app/messages/messages.component.css"), __webpack_require__(/*! ./../app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_message_service__WEBPACK_IMPORTED_MODULE_1__["MessageService"]])
    ], MessagesComponent);
    return MessagesComponent;
}());



/***/ }),

/***/ "./src/app/person.ts":
/*!***************************!*\
  !*** ./src/app/person.ts ***!
  \***************************/
/*! exports provided: Person */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Person", function() { return Person; });
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\workspace\angular\easyBall\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map