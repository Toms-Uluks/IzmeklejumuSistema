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

/***/ "./src/app/abdominal-cavity-ultrasound/abdominal-cavity-ultrasound.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/abdominal-cavity-ultrasound/abdominal-cavity-ultrasound.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!preview\">\n    <div>\n      <mat-form-field class=\"example-full-width\">\n        <input matInput  placeholder=\"Vārds, Uzvārds\" [(ngModel)]=\"name\">\n      </mat-form-field>  \n    </div>  \n    <div>\n      <mat-form-field class=\"example-full-width\">\n        <input matInput placeholder=\"Personas kods\" [(ngModel)]=\"personasKods\"/> \n      </mat-form-field>\n    </div>    \n    <div>\n        Aknas:\n        <div>\n          <mat-form-field class=\"example-full-width\">\n            <input matInput  placeholder=\"Izmērs\" [(ngModel)]=\"liverSize\">\n          </mat-form-field>\n          <mat-form-field class=\"example-full-width\">\n              <input matInput  placeholder=\"Struktūra\" [(ngModel)]=\"liverStructure\">\n          </mat-form-field>\n          <mat-form-field class=\"example-full-width\">\n              <input matInput  placeholder=\"Ehogenitāte\" [(ngModel)]=\"liverEphogenicity\">\n          </mat-form-field>\n          <mat-form-field class=\"example-full-width\">\n              <input matInput  placeholder=\"Intrahepatiskie, ekstrahepatiskie žultsvadi\" [(ngModel)]=\"liverDucts\">\n          </mat-form-field>\n        </div>\n    </div>\n    <div>\n        Žultspūslis:\n        <div>\n          <mat-form-field class=\"example-full-width\">\n            <input matInput  placeholder=\"Sieniņas\" [(ngModel)]=\"bladderWalls\">\n          </mat-form-field>\n          <mat-form-field class=\"example-full-width\">\n            <input matInput  placeholder=\"Biezums (mm)\" [(ngModel)]=\"bladderWidth\">\n          </mat-form-field>\n          <mat-form-field class=\"example-full-width\">\n            <input matInput  placeholder=\"Ehostruktura\" [(ngModel)]=\"bladderEcostructure\">\n          </mat-form-field>\n          <mat-form-field class=\"example-full-width\">\n            <input matInput  placeholder=\"Komentāri\" [(ngModel)]=\"bladderComments\">\n          </mat-form-field>\n        </div>\n    </div>\n    <div>\n        Aizkuņģa dziedzeris:\n        <div>\n          <mat-form-field class=\"example-full-width\">\n            <input matInput  placeholder=\"Galvas un ķermeņa daļas\" [(ngModel)]=\"pancreaParts\">\n          </mat-form-field>\n          <mat-form-field class=\"example-full-width\">\n            <input matInput  placeholder=\"Izmērs\" [(ngModel)]=\"pancreaSize\">\n          </mat-form-field>\n          <mat-form-field class=\"example-full-width\">\n            <input matInput  placeholder=\"Ehostruktura\" [(ngModel)]=\"pancreaEcostructure\">\n          </mat-form-field>\n          <mat-form-field class=\"example-full-width\">\n            <input matInput  placeholder=\"Sienas\" [(ngModel)]=\"pancreaWalls\">\n          </mat-form-field>\n          <mat-form-field class=\"example-full-width\">\n            <input matInput  placeholder=\"Astes daļa\" [(ngModel)]=\"pancreaTail\">\n          </mat-form-field>\n        </div>\n    </div>\n    <!--<div>\n        Nieres:\n        <div>\n          <mat-form-field class=\"example-full-width\">\n            <input matInput  placeholder=\"Izmērs\" [(ngModel)]=\"kidneySize\">\n          </mat-form-field>\n          <mat-form-field class=\"example-full-width\">\n            <input matInput  placeholder=\"Lokalizējas\" [(ngModel)]=\"pancreaEcostructure\">\n          </mat-form-field>\n          <mat-form-field class=\"example-full-width\">\n            <input matInput  placeholder=\"Sienas\" [(ngModel)]=\"pancreaWalls\">\n          </mat-form-field>\n          <mat-form-field class=\"example-full-width\">\n            <input matInput  placeholder=\"Astes daļa\" [(ngModel)]=\"pancreaTail\">\n          </mat-form-field>\n        </div>\n    </div>-->\n    <div>\n      Slēdziens: \n      <mat-form-field  class=\"selector\">\n        <mat-select [(value)]=\"final\">\n          <mat-option value=\"true\">fibroza mastopātijas</mat-option>\n          <mat-option value=\"other\">Cits</mat-option>\n        </mat-select>\n      </mat-form-field>\n      <div *ngIf=\"final == 'other'\">\n          <mat-form-field class=\"example-full-width\">\n            <textarea matInput placeholder=\"Cits\" [(ngModel)]=\"finalReason\"></textarea>\n          </mat-form-field>\n      </div>\n    </div>\n    <div>\n      <mat-form-field>\n        <input matInput [matDatepicker]=\"date\" placeholder=\"Izmeklējuma datums\" (dateInput)=\"addEvent('input', $event)\" (dateChange)=\"addEvent('change', $event)\">\n        <mat-datepicker-toggle matSuffix [for]=\"date\"></mat-datepicker-toggle>\n        <mat-datepicker #date></mat-datepicker>\n      </mat-form-field>\n    </div>\n  \n    <div>\n      <mat-form-field  class=\"selector\">\n        <mat-select [(value)]=\"doctorName\">\n          <mat-option *ngFor=\"let doctor of doctors\" value=\"{{doctor.id}}\">{{doctor.name}}</mat-option>\n        </mat-select>\n      </mat-form-field>\n    </div>\n    \n  </div>\n  <div *ngIf=\"preview\">\n    <div id=\"print-section\" *ngIf=\"preview\">\n      <p>Vārds, Uzvārds: {{name}}</p>\n      <p>Personas kods: {{personasKods}}</p>\n      <div>\n        <p>Isthmus:</p>\n        <p>Izmers: {{isthmusSize}}</p>\n        <p>Struktūra: {{isthmusStructure}}</p>\n        <p>Kontūras: {{isthmusContour}}</p>\n        <p>Veidojumi: {{isthmusAnomalities}}</p>\n      </div>\n      <div>\n        <p>Kreisā daiva:</p>\n        <p>Izmers: {{leftSideSize}}</p>\n        <p>Struktūra: {{leftSideStructure}}</p>\n        <p>Kontūras: {{leftSideContour}}</p>\n        <p>Veidojumi: {{leftSideAnomalities}}</p>\n      </div>\n      <div>\n        <p>Labā daiva:</p>\n        <p>Izmers: {{rightSideSize}}</p>\n        <p>Struktūra: {{rightSideStructure}}</p>\n        <p>Kontūras: {{rightSideContour}}</p>\n        <p>Veidojumi: {{rightSideAnomalities}}</p>\n      </div>\n      <p>Slēdziens: {{final == 'other' ? finalReason : 'fibroza mastopātijas'}}</p>\n      <p>Izmeklējuma datums: {{dateTaken}}</p>\n      <p>Ārsts: {{doctorName}}</p>\n    </div>\n  </div>\n  <button mat-raised-button color=\"accent\" (click)=\"preview = !preview\">{{preview ? 'Labot' : 'Apskatīt'}}</button>\n  "

/***/ }),

/***/ "./src/app/abdominal-cavity-ultrasound/abdominal-cavity-ultrasound.component.sass":
/*!****************************************************************************************!*\
  !*** ./src/app/abdominal-cavity-ultrasound/abdominal-cavity-ultrasound.component.sass ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FiZG9taW5hbC1jYXZpdHktdWx0cmFzb3VuZC9hYmRvbWluYWwtY2F2aXR5LXVsdHJhc291bmQuY29tcG9uZW50LnNhc3MifQ== */"

/***/ }),

/***/ "./src/app/abdominal-cavity-ultrasound/abdominal-cavity-ultrasound.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/abdominal-cavity-ultrasound/abdominal-cavity-ultrasound.component.ts ***!
  \**************************************************************************************/
/*! exports provided: AbdominalCavityUltrasoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbdominalCavityUltrasoundComponent", function() { return AbdominalCavityUltrasoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AbdominalCavityUltrasoundComponent = /** @class */ (function () {
    function AbdominalCavityUltrasoundComponent() {
        this.name = '';
        this.personasKods = '';
        this.limfmezgliReason = '';
        this.bothchestReason = '';
        this.anomalitiesReason = '';
        this.finalReason = '';
    }
    AbdominalCavityUltrasoundComponent.prototype.ngOnInit = function () {
    };
    AbdominalCavityUltrasoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-abdominal-cavity-ultrasound',
            template: __webpack_require__(/*! ./abdominal-cavity-ultrasound.component.html */ "./src/app/abdominal-cavity-ultrasound/abdominal-cavity-ultrasound.component.html"),
            styles: [__webpack_require__(/*! ./abdominal-cavity-ultrasound.component.sass */ "./src/app/abdominal-cavity-ultrasound/abdominal-cavity-ultrasound.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AbdominalCavityUltrasoundComponent);
    return AbdominalCavityUltrasoundComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _guards_login_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./guards/login.guard */ "./src/app/guards/login.guard.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");






var routes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: '', canActivate: [_guards_login_guard__WEBPACK_IMPORTED_MODULE_4__["LoginGuard"]], children: [
            { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
        ] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'printingApp';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _chest_usg_chest_usg_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./chest-usg/chest-usg.component */ "./src/app/chest-usg/chest-usg.component.ts");
/* harmony import */ var _thyroid_ultrasound_thyroid_ultrasound_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./thyroid-ultrasound/thyroid-ultrasound.component */ "./src/app/thyroid-ultrasound/thyroid-ultrasound.component.ts");
/* harmony import */ var _abdominal_cavity_ultrasound_abdominal_cavity_ultrasound_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./abdominal-cavity-ultrasound/abdominal-cavity-ultrasound.component */ "./src/app/abdominal-cavity-ultrasound/abdominal-cavity-ultrasound.component.ts");
/* harmony import */ var ngx_print__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-print */ "./node_modules/ngx-print/fesm5/ngx-print.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _chest_usg_chest_usg_component__WEBPACK_IMPORTED_MODULE_7__["ChestUsgComponent"],
                _thyroid_ultrasound_thyroid_ultrasound_component__WEBPACK_IMPORTED_MODULE_8__["ThyroidUltrasoundComponent"],
                _abdominal_cavity_ultrasound_abdominal_cavity_ultrasound_component__WEBPACK_IMPORTED_MODULE_9__["AbdominalCavityUltrasoundComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                ngx_print__WEBPACK_IMPORTED_MODULE_10__["NgxPrintModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatNativeDateModule"]
            ],
            providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_11__["CookieService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/chest-usg/chest-usg.component.html":
/*!****************************************************!*\
  !*** ./src/app/chest-usg/chest-usg.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example-form\" *ngIf=\"!preview\">\n  <div>\n    <mat-form-field class=\"example-full-width\">\n      <input matInput  placeholder=\"Vārds, Uzvārds\" [(ngModel)]=\"name\">\n    </mat-form-field>  \n  </div>  \n  <div>\n    <mat-form-field class=\"example-full-width\">\n      <input matInput placeholder=\"Personas kods\" [(ngModel)]=\"personasKods\"/> \n    </mat-form-field>\n  </div>\n  <div>\n    Aksilāri limfmezgli:\n      <mat-form-field class=\"selector\">\n        <mat-select [(value)]=\"limfmezgli\">\n          <mat-option value=\"true\">vizualizējās</mat-option>\n          <mat-option value=\"false\">nevizualizējas</mat-option>\n        </mat-select>\n      </mat-form-field>\n      <div *ngIf=\"limfmezgli == 'true'\">\n          <mat-form-field class=\"example-full-width\">\n            <textarea matInput placeholder=\"Vizualizējās\" [(ngModel)]=\"limfmezgliReason\"></textarea>\n          </mat-form-field>\n      </div>\n  </div>\n  \n  <div>\n    Abos krūts diedzeros:\n    <mat-form-field  class=\"selector\">\n      <mat-select [(value)]=\"bothchest\">\n        <mat-option value=\"true\">fibrozu audu hiperplāzijas zonas uz šī fona atsevišķas piena dziedzera daiviņas.</mat-option>\n        <mat-option value=\"other\">Cits</mat-option>\n      </mat-select>\n    </mat-form-field>\n    <div *ngIf=\"bothchest == 'other'\">\n      <mat-form-field class=\"example-full-width\">\n        <textarea matInput placeholder=\"Cits\" [(ngModel)]=\"bothchestReason\"></textarea>\n      </mat-form-field>\n    </div>\n  </div>\n\n  <div>\n    Veidojumi: \n    <mat-form-field  class=\"selector\">\n      <mat-select [(value)]=\"anomalities\">\n        <mat-option value=\"true\">norobežotus veidojumus nevizualizē</mat-option>\n        <mat-option value=\"other\">Cits</mat-option>\n      </mat-select>\n    </mat-form-field>\n    <div *ngIf=\"anomalities == 'other'\">\n      <mat-form-field class=\"example-full-width\">\n        <textarea matInput placeholder=\"Cits\" [(ngModel)]=\"anomalitiesReason\"></textarea>\n      </mat-form-field>\n    </div>\n  </div>\n\n  <div>\n    Slēdziens: \n    <mat-form-field  class=\"selector\">\n      <mat-select [(value)]=\"final\">\n        <mat-option value=\"true\">fibroza mastopātijas</mat-option>\n        <mat-option value=\"other\">Cits</mat-option>\n      </mat-select>\n    </mat-form-field>\n    <div *ngIf=\"final == 'other'\">\n        <mat-form-field class=\"example-full-width\">\n          <textarea matInput placeholder=\"Cits\" [(ngModel)]=\"finalReason\"></textarea>\n        </mat-form-field>\n    </div>\n  </div>\n\n  <div>\n    <mat-form-field>\n      <input matInput [matDatepicker]=\"date\" placeholder=\"Izmeklējuma datums\" (dateInput)=\"addEvent('input', $event)\" (dateChange)=\"addEvent('change', $event)\">\n      <mat-datepicker-toggle matSuffix [for]=\"date\"></mat-datepicker-toggle>\n      <mat-datepicker #date></mat-datepicker>\n    </mat-form-field>\n  </div>\n\n  <div>\n    <mat-form-field  class=\"selector\">\n      <mat-select [(value)]=\"doctorName\">\n        <mat-option *ngFor=\"let doctor of doctors\" value=\"{{doctor.id}}\">{{doctor.name}}</mat-option>\n      </mat-select>\n    </mat-form-field>\n  </div>\n\n</div>\n<div id=\"print-section\" *ngIf=\"preview\">\n    <p>Vārds, Uzvārds: {{name}}</p>\n    <p>Personas kods: {{personasKods}}</p>\n    <p>Aksilāri limfmezgli: {{limfmezgli ? limfmezgliReason : 'nevizualizējas'}}</p>\n    <p>Abos krūts diedzeros: {{bothchest == 'other' ? bothchestReason : 'fibrozu audu hiperplāzijas zonas uz šī fona atsevišķas piena dziedzera daiviņas.'}}</p>\n    <p>Veidojumi: {{anomalities == 'other' ? anomalitiesReason : 'norobežotus veidojumus nevizualizē.'}}</p>\n    <p>Slēdziens: {{final == 'other' ? finalReason : 'fibroza mastopātijas'}}</p>\n    <p>Izmeklējuma datums: {{dateTaken}}</p>\n    <p>Ārsts: {{doctorName}}</p>\n</div>\n\n<button mat-raised-button color=\"accent\" (click)=\"preview = !preview\">{{preview ? 'Labot' : 'Apskatīt'}}</button>\n"

/***/ }),

/***/ "./src/app/chest-usg/chest-usg.component.sass":
/*!****************************************************!*\
  !*** ./src/app/chest-usg/chest-usg.component.sass ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoZXN0LXVzZy9jaGVzdC11c2cuY29tcG9uZW50LnNhc3MifQ== */"

/***/ }),

/***/ "./src/app/chest-usg/chest-usg.component.ts":
/*!**************************************************!*\
  !*** ./src/app/chest-usg/chest-usg.component.ts ***!
  \**************************************************/
/*! exports provided: ChestUsgComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChestUsgComponent", function() { return ChestUsgComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ChestUsgComponent = /** @class */ (function () {
    function ChestUsgComponent() {
        this.name = '';
        this.personasKods = '';
        this.limfmezgliReason = '';
        this.bothchestReason = '';
        this.anomalitiesReason = '';
        this.finalReason = '';
    }
    ChestUsgComponent.prototype.addEvent = function (type, event) {
        this.dateTaken = event.value;
        this.dateTaken = this.dateTaken.toISOString().substring(0, 10);
    };
    ChestUsgComponent.prototype.ngOnInit = function () {
    };
    ChestUsgComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chest-usg',
            template: __webpack_require__(/*! ./chest-usg.component.html */ "./src/app/chest-usg/chest-usg.component.html"),
            styles: [__webpack_require__(/*! ./chest-usg.component.sass */ "./src/app/chest-usg/chest-usg.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ChestUsgComponent);
    return ChestUsgComponent;
}());



/***/ }),

/***/ "./src/app/guards/login.guard.ts":
/*!***************************************!*\
  !*** ./src/app/guards/login.guard.ts ***!
  \***************************************/
/*! exports provided: LoginGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginGuard", function() { return LoginGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");




var LoginGuard = /** @class */ (function () {
    function LoginGuard(cookieService, router) {
        this.cookieService = cookieService;
        this.router = router;
    }
    LoginGuard.prototype.canActivate = function (next, state) {
        this.cookieValue = this.cookieService.get('user');
        if (this.cookieValue) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    LoginGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginGuard);
    return LoginGuard;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"selector\">\n    <mat-form-field>\n      <mat-select [(value)]=\"selected\">\n        <mat-option value=\"chestUsg\">Krūšu USG</mat-option>\n        <mat-option value=\"abdominalUltrasound\">Vēdera dobuma ultrasonografija</mat-option>\n        <mat-option value=\"thyroidUltrasound\">Vairogdziedzera ultrasonografija</mat-option>\n      </mat-select>\n    </mat-form-field>\n  </div>\n\n  <div class=\"home\">\n    <app-chest-usg *ngIf=\"selected == 'chestUsg'\"></app-chest-usg>\n    <app-abdominal-cavity-ultrasound *ngIf=\"selected == 'abdominalUltrasound'\"></app-abdominal-cavity-ultrasound>\n    <app-thyroid-ultrasound *ngIf=\"selected == 'thyroidUltrasound'\"></app-thyroid-ultrasound>\n    <button mat-raised-button color=\"primary\" (click)=\"print()\">Printēt</button>\n  </div>\n  \n\n</div>\n\n"

/***/ }),

/***/ "./src/app/home/home.component.sass":
/*!******************************************!*\
  !*** ./src/app/home/home.component.sass ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".home {\n  padding: 0 50px;\n  margin-bottom: 50px; }\n\n.selector {\n  margin-bottom: 30px;\n  border-bottom: 1px solid #efe6e6;\n  padding: 0 20px; }\n\n.selector mat-form-field {\n    width: 300px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90b211bHVrL0RvY3VtZW50cy9Qcm9qZWN0cy9Jem1la2xlanVtdVNpc3RlbWEvc3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFlO0VBQ2YsbUJBQW1CLEVBQUE7O0FBQ3ZCO0VBQ0ksbUJBQW1CO0VBQ25CLGdDQUFnQztFQUNoQyxlQUFlLEVBQUE7O0FBSG5CO0lBTVEsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmhvbWUge1xuICAgIHBhZGRpbmc6IDAgNTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4OyB9XG4uc2VsZWN0b3Ige1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZmU2ZTY7XG4gICAgcGFkZGluZzogMCAyMHB4O1xuXG4gICAgbWF0LWZvcm0tZmllbGQge1xuICAgICAgICB3aWR0aDogMzAwcHg7IH0gfVxuIl19 */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.selected = 'chestUsg';
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.print = function () {
        var printContents, popupWin;
        printContents = document.getElementById('print-section').innerHTML;
        popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
        popupWin.document.open();
        popupWin.document.write("\n      <html>\n        <head>\n          <title>Print tab</title>\n          <style>\n          {'.selector' : {'display' : 'none'}, input: {'border-color': 'transparent', p: {'border':'1px solid black'; 'padding':'10px'}}}\n          </style>\n        </head>\n    <body onload=\"window.print();window.close()\">" + printContents + "</body>\n      </html>");
        popupWin.document.close();
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.sass */ "./src/app/home/home.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login form-wrap\">\n  <form [formGroup]=\"loginForm\">\n      <mat-form-field class=\"example-full-width\">\n        <input matInput placeholder=\"user\" formControlName=\"user\">\n      </mat-form-field>\n      <mat-form-field class=\"example-full-width\">\n        <input matInput type=\"password\" placeholder=\"password\" formControlName=\"password\">\n      </mat-form-field>\n      <button mat-raised-button color=\"primary\" (click)=\"onSubmit()\">Log in</button>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.sass":
/*!********************************************!*\
  !*** ./src/app/login/login.component.sass ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login {\n  height: 100%;\n  position: absolute;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\nform {\n  display: flex;\n  flex-wrap: wrap;\n  width: 200px; }\n\nmat-form-field {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90b211bHVrL0RvY3VtZW50cy9Qcm9qZWN0cy9Jem1la2xlanVtdVNpc3RlbWEvc3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CLEVBQUE7O0FBRXZCO0VBQ0ksYUFBYTtFQUNiLGVBQWU7RUFDZixZQUFZLEVBQUE7O0FBRWhCO0VBQ0ksV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4ge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyB9XG5cbmZvcm0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIHdpZHRoOiAyMDBweDsgfVxuXG5tYXQtZm9ybS1maWVsZCB7XG4gICAgd2lkdGg6IDEwMCU7IH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(cookieService, router) {
        this.cookieService = cookieService;
        this.router = router;
        this.errorMessage = '';
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            user: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSubmit = function () {
        if (this.loginForm.value.user == 'alpino' && this.loginForm.value.password == 'admin') {
            var date = new Date();
            date.setDate(date.getDate() + 1);
            this.cookieService.set('user', this.loginForm.value.email, date);
            this.router.navigate(['/']);
        }
        else {
            this.errorMessage = 'user/password incorrect';
        }
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.sass */ "./src/app/login/login.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/thyroid-ultrasound/thyroid-ultrasound.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/thyroid-ultrasound/thyroid-ultrasound.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!preview\">\n  <div>\n    <mat-form-field class=\"example-full-width\">\n      <input matInput  placeholder=\"Vārds, Uzvārds\" [(ngModel)]=\"name\">\n    </mat-form-field>  \n  </div>  \n  <div>\n    <mat-form-field class=\"example-full-width\">\n      <input matInput placeholder=\"Personas kods\" [(ngModel)]=\"personasKods\"/> \n    </mat-form-field>\n  </div>    \n  <div>\n      Isthmus:\n      <div>\n        <mat-form-field class=\"example-full-width\">\n          <input matInput  placeholder=\"Izmērs (cm)\" [(ngModel)]=\"isthmusSize\">\n        </mat-form-field>\n        <mat-form-field class=\"example-full-width\">\n          <input matInput  placeholder=\"Struktūra\" [(ngModel)]=\"isthmusStructure\">\n        </mat-form-field>\n        <mat-form-field class=\"example-full-width\">\n          <input matInput  placeholder=\"Kontūras\" [(ngModel)]=\"isthmusContour\">\n        </mat-form-field>\n        <mat-form-field class=\"example-full-width\">\n          <input matInput  placeholder=\"Veidojumi\" [(ngModel)]=\"isthmusAnomalities\">\n        </mat-form-field>\n      </div>\n  </div>\n  <div>\n      Kreisā daiva:\n      <div>\n        <mat-form-field class=\"example-full-width\">\n          <input matInput  placeholder=\"Izmērs (cm)\" [(ngModel)]=\"leftSideSize\">\n        </mat-form-field>\n        <mat-form-field class=\"example-full-width\">\n          <input matInput  placeholder=\"Struktūra\" [(ngModel)]=\"leftSideStructure\">\n        </mat-form-field>\n        <mat-form-field class=\"example-full-width\">\n          <input matInput  placeholder=\"Kontūras\" [(ngModel)]=\"leftSideContour\">\n        </mat-form-field>\n        <mat-form-field class=\"example-full-width\">\n          <input matInput  placeholder=\"Veidojumi\" [(ngModel)]=\"leftSideAnomalities\">\n        </mat-form-field>\n      </div>\n  </div>\n  <div>\n      Labā daiva:\n      <div>\n        <mat-form-field class=\"example-full-width\">\n          <input matInput  placeholder=\"Izmērs (cm)\" [(ngModel)]=\"rightSideSize\">\n        </mat-form-field>\n        <mat-form-field class=\"example-full-width\">\n          <input matInput  placeholder=\"Struktūra\" [(ngModel)]=\"rightSideStructure\">\n        </mat-form-field>\n        <mat-form-field class=\"example-full-width\">\n          <input matInput  placeholder=\"Kontūras\" [(ngModel)]=\"rightSideContour\">\n        </mat-form-field>\n        <mat-form-field class=\"example-full-width\">\n          <input matInput  placeholder=\"Veidojumi\" [(ngModel)]=\"rightSideAnomalities\">\n        </mat-form-field>\n      </div>\n  </div>\n  <div>\n    Slēdziens: \n    <mat-form-field  class=\"selector\">\n      <mat-select [(value)]=\"final\">\n        <mat-option value=\"true\">fibroza mastopātijas</mat-option>\n        <mat-option value=\"other\">Cits</mat-option>\n      </mat-select>\n    </mat-form-field>\n    <div *ngIf=\"final == 'other'\">\n        <mat-form-field class=\"example-full-width\">\n          <textarea matInput placeholder=\"Cits\" [(ngModel)]=\"finalReason\"></textarea>\n        </mat-form-field>\n    </div>\n  </div>\n  <div>\n    <mat-form-field>\n      <input matInput [matDatepicker]=\"date\" placeholder=\"Izmeklējuma datums\" (dateInput)=\"addEvent('input', $event)\" (dateChange)=\"addEvent('change', $event)\">\n      <mat-datepicker-toggle matSuffix [for]=\"date\"></mat-datepicker-toggle>\n      <mat-datepicker #date></mat-datepicker>\n    </mat-form-field>\n  </div>\n\n  <div>\n    <mat-form-field  class=\"selector\">\n      <mat-select [(value)]=\"doctorName\">\n        <mat-option *ngFor=\"let doctor of doctors\" value=\"{{doctor.id}}\">{{doctor.name}}</mat-option>\n      </mat-select>\n    </mat-form-field>\n  </div>\n  \n</div>\n<div *ngIf=\"preview\">\n  <div id=\"print-section\" *ngIf=\"preview\">\n    <p>Vārds, Uzvārds: {{name}}</p>\n    <p>Personas kods: {{personasKods}}</p>\n    <div>\n      <h2>Isthmus:</h2>\n      <p>Izmers: {{isthmusSize}}</p>\n      <p>Struktūra: {{isthmusStructure}}</p>\n      <p>Kontūras: {{isthmusContour}}</p>\n      <p>Veidojumi: {{isthmusAnomalities}}</p>\n    </div>\n    <div>\n      <h2>Kreisā daiva:</h2>\n      <p>Izmers: {{leftSideSize}}</p>\n      <p>Struktūra: {{leftSideStructure}}</p>\n      <p>Kontūras: {{leftSideContour}}</p>\n      <p>Veidojumi: {{leftSideAnomalities}}</p>\n    </div>\n    <div>\n      <h2>Labā daiva:</h2>\n      <p>Izmers: {{rightSideSize}}</p>\n      <p>Struktūra: {{rightSideStructure}}</p>\n      <p>Kontūras: {{rightSideContour}}</p>\n      <p>Veidojumi: {{rightSideAnomalities}}</p>\n    </div>\n    <p>Slēdziens: {{final == 'other' ? finalReason : 'fibroza mastopātijas'}}</p>\n    <p>Izmeklējuma datums: {{dateTaken}}</p>\n    <p>Ārsts: {{doctorName}}</p>\n  </div>\n</div>\n<button mat-raised-button color=\"accent\" (click)=\"preview = !preview\">{{preview ? 'Labot' : 'Apskatīt'}}</button>\n"

/***/ }),

/***/ "./src/app/thyroid-ultrasound/thyroid-ultrasound.component.sass":
/*!**********************************************************************!*\
  !*** ./src/app/thyroid-ultrasound/thyroid-ultrasound.component.sass ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoeXJvaWQtdWx0cmFzb3VuZC90aHlyb2lkLXVsdHJhc291bmQuY29tcG9uZW50LnNhc3MifQ== */"

/***/ }),

/***/ "./src/app/thyroid-ultrasound/thyroid-ultrasound.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/thyroid-ultrasound/thyroid-ultrasound.component.ts ***!
  \********************************************************************/
/*! exports provided: ThyroidUltrasoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThyroidUltrasoundComponent", function() { return ThyroidUltrasoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ThyroidUltrasoundComponent = /** @class */ (function () {
    function ThyroidUltrasoundComponent() {
    }
    ThyroidUltrasoundComponent.prototype.addEvent = function (type, event) {
        this.dateTaken = event.value;
        this.dateTaken = this.dateTaken.toISOString().substring(0, 10);
    };
    ThyroidUltrasoundComponent.prototype.ngOnInit = function () {
    };
    ThyroidUltrasoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-thyroid-ultrasound',
            template: __webpack_require__(/*! ./thyroid-ultrasound.component.html */ "./src/app/thyroid-ultrasound/thyroid-ultrasound.component.html"),
            styles: [__webpack_require__(/*! ./thyroid-ultrasound.component.sass */ "./src/app/thyroid-ultrasound/thyroid-ultrasound.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ThyroidUltrasoundComponent);
    return ThyroidUltrasoundComponent;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/tomuluk/Documents/Projects/IzmeklejumuSistema/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map