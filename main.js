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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<router-outlet></router-outlet>\n"

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
        this.title = 'BugTracker';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _views_all_bugs_all_bugs_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/all-bugs/all-bugs.component */ "./src/app/views/all-bugs/all-bugs.component.ts");
/* harmony import */ var _views_create_bugs_create_bugs_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/create-bugs/create-bugs.component */ "./src/app/views/create-bugs/create-bugs.component.ts");
/* harmony import */ var _views_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/dashboard/dashboard.component */ "./src/app/views/dashboard/dashboard.component.ts");
/* harmony import */ var _views_edit_bugs_edit_bugs_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/edit-bugs/edit-bugs.component */ "./src/app/views/edit-bugs/edit-bugs.component.ts");
/* harmony import */ var _views_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/notfound/notfound.component */ "./src/app/views/notfound/notfound.component.ts");
/* harmony import */ var _services_route_guard_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/route-guard.service */ "./src/app/services/route-guard.service.ts");
/* harmony import */ var _pipes_sort_countries_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pipes/sort-countries.pipe */ "./src/app/pipes/sort-countries.pipe.ts");
/* harmony import */ var _services_socket_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/socket.service */ "./src/app/services/socket.service.ts");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var ngx_editor__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-editor */ "./node_modules/ngx-editor/fesm5/ngx-editor.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _users_login_login_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./users/login/login.component */ "./src/app/users/login/login.component.ts");
/* harmony import */ var _users_signup_signup_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./users/signup/signup.component */ "./src/app/users/signup/signup.component.ts");
/* harmony import */ var _users_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./users/forgot-password/forgot-password.component */ "./src/app/users/forgot-password/forgot-password.component.ts");
/* harmony import */ var _users_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./users/reset-password/reset-password.component */ "./src/app/users/reset-password/reset-password.component.ts");
/* harmony import */ var _views_bug_view_bug_view_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./views/bug-view/bug-view.component */ "./src/app/views/bug-view/bug-view.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _pipes_sort_by_pipe__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./pipes/sort-by.pipe */ "./src/app/pipes/sort-by.pipe.ts");
/* harmony import */ var _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pipes/filter.pipe */ "./src/app/pipes/filter.pipe.ts");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "./node_modules/ngx-bootstrap/tooltip/fesm5/ngx-bootstrap-tooltip.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ngx-filter-pipe */ "./node_modules/ngx-filter-pipe/esm5/ngx-filter-pipe.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/@angular/http.es5.js");















//HttpClientModule is to be imported in latest version of angular

//for loading spinner









//import this module for using animations







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _views_all_bugs_all_bugs_component__WEBPACK_IMPORTED_MODULE_5__["AllBugsComponent"],
                _views_create_bugs_create_bugs_component__WEBPACK_IMPORTED_MODULE_6__["CreateBugsComponent"],
                _views_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"],
                _views_edit_bugs_edit_bugs_component__WEBPACK_IMPORTED_MODULE_8__["EditBugsComponent"],
                _views_bug_view_bug_view_component__WEBPACK_IMPORTED_MODULE_24__["BugViewComponent"],
                _views_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_9__["NotfoundComponent"],
                _users_login_login_component__WEBPACK_IMPORTED_MODULE_20__["LoginComponent"],
                _views_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"],
                _users_signup_signup_component__WEBPACK_IMPORTED_MODULE_21__["SignupComponent"],
                _users_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_22__["ForgotPasswordComponent"],
                _users_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_23__["ResetPasswordComponent"],
                _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_27__["FilterPipe"],
                _pipes_sort_by_pipe__WEBPACK_IMPORTED_MODULE_26__["SortByPipe"],
                _pipes_sort_countries_pipe__WEBPACK_IMPORTED_MODULE_11__["SortCountriesPipe"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_25__["BrowserAnimationsModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_29__["NgxPaginationModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
                ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_28__["TooltipModule"],
                ngx_editor__WEBPACK_IMPORTED_MODULE_17__["NgxEditorModule"],
                ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_30__["FilterPipeModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_31__["HttpModule"],
                ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_16__["Ng4LoadingSpinnerModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_18__["ToastrModule"].forRoot(),
                //routerModule forRoot method is use to declare the possible routes in the application
                _angular_router__WEBPACK_IMPORTED_MODULE_19__["RouterModule"].forRoot([
                    { path: 'login', component: _users_login_login_component__WEBPACK_IMPORTED_MODULE_20__["LoginComponent"] },
                    { path: '', redirectTo: 'login', pathMatch: 'full' },
                    { path: 'dashboard', component: _views_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"], canActivate: [_services_route_guard_service__WEBPACK_IMPORTED_MODULE_10__["RouteGuardService"]] },
                    { path: 'goback/:userId', component: _views_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"], canActivate: [_services_route_guard_service__WEBPACK_IMPORTED_MODULE_10__["RouteGuardService"]] },
                    { path: 'createBug', component: _views_create_bugs_create_bugs_component__WEBPACK_IMPORTED_MODULE_6__["CreateBugsComponent"], canActivate: [_services_route_guard_service__WEBPACK_IMPORTED_MODULE_10__["RouteGuardService"]] },
                    { path: 'editbug/:bugId', component: _views_edit_bugs_edit_bugs_component__WEBPACK_IMPORTED_MODULE_8__["EditBugsComponent"], canActivate: [_services_route_guard_service__WEBPACK_IMPORTED_MODULE_10__["RouteGuardService"]] },
                    { path: 'register', component: _users_signup_signup_component__WEBPACK_IMPORTED_MODULE_21__["SignupComponent"] },
                    { path: 'bugDetails/:bugId', component: _views_bug_view_bug_view_component__WEBPACK_IMPORTED_MODULE_24__["BugViewComponent"], canActivate: [_services_route_guard_service__WEBPACK_IMPORTED_MODULE_10__["RouteGuardService"]] },
                    { path: 'forgot-password', component: _users_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_22__["ForgotPasswordComponent"] },
                    { path: 'all-bugs', component: _views_all_bugs_all_bugs_component__WEBPACK_IMPORTED_MODULE_5__["AllBugsComponent"], canActivate: [_services_route_guard_service__WEBPACK_IMPORTED_MODULE_10__["RouteGuardService"]] },
                    { path: 'reset-password', component: _users_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_23__["ResetPasswordComponent"] },
                    { path: '**', component: _views_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_9__["NotfoundComponent"] }
                ])
            ],
            providers: [_services_app_service__WEBPACK_IMPORTED_MODULE_13__["AppService"], _services_socket_service__WEBPACK_IMPORTED_MODULE_12__["SocketService"], _pipes_sort_countries_pipe__WEBPACK_IMPORTED_MODULE_11__["SortCountriesPipe"], _services_route_guard_service__WEBPACK_IMPORTED_MODULE_10__["RouteGuardService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/pipes/filter.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/pipes/filter.pipe.ts ***!
  \**************************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (details, keys, term) {
        if (!term)
            return details;
        return details.filter(function (item) { return keys.split(',').some(function (key) { return item.hasOwnProperty(key) && new RegExp(term, 'gi').test(item[key]); }); });
    };
    FilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'filter'
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "./src/app/pipes/sort-by.pipe.ts":
/*!***************************************!*\
  !*** ./src/app/pipes/sort-by.pipe.ts ***!
  \***************************************/
/*! exports provided: SortByPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortByPipe", function() { return SortByPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SortByPipe = /** @class */ (function () {
    function SortByPipe() {
    }
    SortByPipe.prototype.transform = function (value, orderType, field) {
        if (value != undefined) {
            value.sort(function (a, b) {
                var temp1;
                var temp2;
                if (field == "status") {
                    temp1 = a.status;
                    temp2 = b.status;
                }
                else if (field == "issueTitle") {
                    temp1 = a.issueTitle;
                    temp2 = b.issueTitle;
                }
                else if (field == "reporterName") {
                    temp1 = a.reporterName;
                    temp2 = b.reporterName;
                }
                else if (field == "reportedOn") {
                    var date1 = new Date(a.reportedOn);
                    temp1 = date1.getTime();
                    //console.log(temp1)
                    var date2 = new Date(b.reportedOn);
                    temp2 = date2.getTime();
                    //console.log(temp2)
                }
                else {
                }
                if (temp1 == undefined && temp2 == undefined)
                    return 0; //cheching for undefined values.
                if (temp1 == undefined && temp2 != undefined)
                    return orderType ? 1 : -1;
                if (temp1 != undefined && temp2 == undefined)
                    return orderType ? -1 : 1;
                if (temp1 == temp2)
                    return 0; //equality check
                //checking for the lesser or greater value and arranging accordingly.
                return orderType ? (temp1.toString().toLowerCase() > temp2.toString().toLowerCase() ? -1 : 1) : (temp2.toString().toLowerCase() > temp1.toString().toLowerCase() ? -1 : 1);
            });
            return value; //finally returning the sorted array to the view for display.
        }
        else {
        }
    };
    SortByPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'sortBy'
        })
    ], SortByPipe);
    return SortByPipe;
}());



/***/ }),

/***/ "./src/app/pipes/sort-countries.pipe.ts":
/*!**********************************************!*\
  !*** ./src/app/pipes/sort-countries.pipe.ts ***!
  \**********************************************/
/*! exports provided: SortCountriesPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortCountriesPipe", function() { return SortCountriesPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SortCountriesPipe = /** @class */ (function () {
    function SortCountriesPipe() {
    }
    SortCountriesPipe.prototype.transform = function (array, args) {
        if (array == null) {
            return null;
        }
        var finalArray = array.sort(function (a, b) {
            var textA = a['value'].toLowerCase();
            var textB = b['value'].toLowerCase();
            return textA < textB ? -1 : (textA > textB) ? 1 : 0;
        });
        return finalArray;
    };
    SortCountriesPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'sortCountries'
        })
    ], SortCountriesPipe);
    return SortCountriesPipe;
}());



/***/ }),

/***/ "./src/app/services/app.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/app.service.ts ***!
  \*****************************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-cookies */ "./node_modules/ng2-cookies/index.js");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies__WEBPACK_IMPORTED_MODULE_3__);




var AppService = /** @class */ (function () {
    function AppService(http) {
        var _this = this;
        this.http = http;
        this.url = 'http://api.bugtracker.gq/api/v1';
        this.getUserInfoFromLocalStorage = function () {
            return JSON.parse(localStorage.getItem('userInfo'));
        }; // end getUserInfoFromLocalstorage
        this.setUserInfoInLocalStorage = function (data) {
            localStorage.setItem('userInfo', JSON.stringify(data));
        };
        //Method to get country list
        this.getCountryList = function () {
            var response = _this.http.get('../assets/countries.json');
            return response;
        }; //end
        //method to get country code
        this.getCountryCode = function () {
            var response = _this.http.get('../assets/country-code-list.json');
            return response;
        }; //end
        //Method to verify email
        this.verifyEmail = function (data) {
            return _this.http.get(_this.url + "/users/" + data + "/verifyUser");
        };
        //end method
        this.resetPassword = function (data) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set('email', data.email);
            return _this.http.post(_this.url + '/users/recovery-password', params);
        }; //end resetPassword
        this.updatePassword = function (data) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set('recoveryPassword', data.recoveryPassword)
                .set('password', data.newPassword);
            return _this.http.post(_this.url + "/users/update-password", params);
        };
        //Get All Users:
        this.getAllpeople = function () {
            return _this.http.get(_this.url + "/users/all?authToken=" + ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('authtoken'));
        };
        //Method to get All bugs
        this.getBugs = function () {
            return _this.http.get(_this.url + "/bugs/allBugs?authToken=" + ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('authtoken'));
        };
        //end method
        //Creating a new Bug:
        this.createBug = function (data) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set("bugTitle", data.bugTitle)
                .set("reporterId", data.reporterId)
                .set("reporterName", data.reporterName)
                .set("status", data.status)
                .set("description", data.description)
                .set("attachments", data.attachments)
                .set("assignee", data.assignee);
            return _this.http.post(_this.url + "/bugs/registerBug?authToken=" + ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('authtoken'), params);
        };
        //Method to get single bug details
        this.getBug = function (bugId) {
            return _this.http.get(_this.url + "/issues/" + bugId + "/getBug?authToken=" + ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('authtoken'));
        };
        //end method
        //Method to edit bug title
        this.editBug = function (bugDetails, bugId) {
            return _this.http.put(_this.url + "/bugs/" + bugId + "/editbug?authToken=" + ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('authtoken'), bugDetails);
        };
        this.deleteBug = function (bugDetails, bugId) {
            return _this.http.put(_this.url + "/bugs/" + bugId + "/deleteBug?authToken=" + ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('authtoken'), bugDetails);
        };
        //add a new comment to bug:
        this.addComment = function (data) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set("bugId", data.bugId)
                .set("userId", data.userId)
                .set("userName", data.userName)
                .set("comment", data.comment);
            return _this.http.post(_this.url + "/comments/addComment?authToken=" + ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('authtoken'), params);
        };
        //Method to get all comments on Bug
        this.getAllCommentOnBug = function (bugId) {
            return _this.http.get(_this.url + "/comments/" + bugId + "/getCommentsOnIssue?authToken=" + ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('authtoken'));
        };
    }
    AppService.prototype.LoginFunction = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('email', data.email)
            .set('password', data.password);
        return this.http.post(this.url + "/users/login", params);
    }; // end of signinFunction function.
    AppService.prototype.signupFunction = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('firstName', data.firstName)
            .set('lastName', data.lastName)
            .set('mobileNumber', data.mobileNumber)
            .set('email', data.email)
            .set('password', data.password)
            .set('country', data.country);
        return this.http.post(this.url + "/users/signup", params);
    }; // end of signupFunction function.
    //end method
    AppService.prototype.logout = function () {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('authtoken', ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('authtoken'));
        return this.http.post(this.url + "/users/logout?authToken=" + ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('authtoken'), params);
    }; // end logout function
    AppService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./src/app/services/route-guard.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/route-guard.service.ts ***!
  \*************************************************/
/*! exports provided: RouteGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteGuardService", function() { return RouteGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-cookies */ "./node_modules/ng2-cookies/index.js");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies__WEBPACK_IMPORTED_MODULE_4__);





var RouteGuardService = /** @class */ (function () {
    function RouteGuardService(router, toastr) {
        this.router = router;
        this.toastr = toastr;
    }
    RouteGuardService.prototype.canActivate = function (route) {
        console.log("in guard service");
        if (ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('authtoken') === undefined || ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('authtoken') === '' || ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('authtoken') === null) {
            this.toastr.error("Token Expired, Please login again");
            this.router.navigate(['/']);
            return false;
        }
        else {
            return true;
        }
    };
    RouteGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], RouteGuardService);
    return RouteGuardService;
}());



/***/ }),

/***/ "./src/app/services/socket.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/socket.service.ts ***!
  \********************************************/
/*! exports provided: SocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketService", function() { return SocketService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_4__);





var SocketService = /** @class */ (function () {
    function SocketService(http) {
        var _this = this;
        this.http = http;
        this.baseurl = "http://api.bugtracker.gq";
        //Authentication Section:
        this.verifyUser = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
                _this.socket.on("verify-user", function (socketData) {
                    observer.next(socketData);
                });
            });
        };
        this.setUser = function (token) {
            _this.socket.emit("set-user", token);
        };
        this.onlineUserList = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
                _this.socket.on("onlineUsers", function (userList) {
                    observer.next(userList);
                }); // end Socket
            }); // end Observable
        }; // end onlineUserList
        //list create socket service for multi user
        this.createBug = function (userName) {
            _this.socket.emit("createBug", userName);
        };
        this.bugAddedResponse = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
                _this.socket.on("createBug-res", function (data) {
                    observer.next(data);
                    console.log(data);
                });
            });
        };
        //bug title update(edit) respose
        this.updateBug = function (userName) {
            _this.socket.emit("updateBug", userName);
        };
        this.bugUpdatedResponse = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
                _this.socket.on("updateBug-res", function (data) {
                    observer.next(data);
                });
            });
        };
        //comments on bug response
        this.addComment = function (userName) {
            _this.socket.emit("addComment", userName);
        };
        this.commentAddedResponse = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
                _this.socket.on("addComment-res", function (data) {
                    observer.next(data);
                });
            });
        };
        this.disconnectedSocket = function () {
            _this.socket.emit("disconnect", ""); //end Socket
        }; //end disconnectedSocket
        this.exitSocket = function () {
            _this.socket.disconnect();
        }; // end exit socket
        /**
         * Bug watch functionality
         */
        //Add As Watcher:
        this.addAsWatcher = function (data) {
            _this.socket.emit("watch", data);
        };
        this.responseAlreadyWatcher = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
                _this.socket.on("alreadyWatcher", function (data) {
                    observer.next(data);
                });
            });
        };
        this.save_watch = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
                _this.socket.on("savewatch", function (data) {
                    observer.next(data);
                });
            });
        };
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_4__(this.baseurl);
    }
    SocketService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], SocketService);
    return SocketService;
}());



/***/ }),

/***/ "./src/app/users/forgot-password/forgot-password.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/users/forgot-password/forgot-password.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.container-fluid\n{\n\n    background-image:url('tracker.jpg');\n    background-size:cover;\n    background-position:center center;\n    background-repeat:no-repeat;\n    width:100%;\n    height:100vh;\n}\n\n\n.nav-brand\n{\n    color:white;\n}\n\n\n.title-1\n{\n    font-family: 'Luckiest Guy', cursive;\n    color:white;\n}\n\n\ninput{\n\n    border-bottom:2px solid orange;\n    border-top:1px solid white;\n    border-left:1px solid white;\n    border-right:1px solid white;\n    outline:none;\n    width:100vw;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcnMvZm9yZ290LXBhc3N3b3JkL2ZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTs7O0lBR0ksbUNBQTBEO0lBQzFELHFCQUFxQjtJQUNyQixpQ0FBaUM7SUFDakMsMkJBQTJCO0lBQzNCLFVBQVU7SUFDVixZQUFZO0FBQ2hCOzs7QUFHQTs7SUFFSSxXQUFXO0FBQ2Y7OztBQUVBOztJQUVJLG9DQUFvQztJQUNwQyxXQUFXO0FBQ2Y7OztBQUdBOztJQUVJLDhCQUE4QjtJQUM5QiwwQkFBMEI7SUFDMUIsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1QixZQUFZO0lBQ1osV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvdXNlcnMvZm9yZ290LXBhc3N3b3JkL2ZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uY29udGFpbmVyLWZsdWlkXG57XG5cbiAgICBiYWNrZ3JvdW5kLWltYWdlOnVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy90cmFja2VyLmpwZycpO1xuICAgIGJhY2tncm91bmQtc2l6ZTpjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOmNlbnRlciBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O1xuICAgIHdpZHRoOjEwMCU7XG4gICAgaGVpZ2h0OjEwMHZoO1xufVxuXG5cbi5uYXYtYnJhbmRcbntcbiAgICBjb2xvcjp3aGl0ZTtcbn1cblxuLnRpdGxlLTFcbntcbiAgICBmb250LWZhbWlseTogJ0x1Y2tpZXN0IEd1eScsIGN1cnNpdmU7XG4gICAgY29sb3I6d2hpdGU7XG59XG5cblxuaW5wdXR7XG5cbiAgICBib3JkZXItYm90dG9tOjJweCBzb2xpZCBvcmFuZ2U7XG4gICAgYm9yZGVyLXRvcDoxcHggc29saWQgd2hpdGU7XG4gICAgYm9yZGVyLWxlZnQ6MXB4IHNvbGlkIHdoaXRlO1xuICAgIGJvcmRlci1yaWdodDoxcHggc29saWQgd2hpdGU7XG4gICAgb3V0bGluZTpub25lO1xuICAgIHdpZHRoOjEwMHZ3O1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/users/forgot-password/forgot-password.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/users/forgot-password/forgot-password.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  \n    <div class=\"row\">\n        <div class=\"col-12\">\n    \n          <nav class=\"navbar navbar-expand-lg navbar-dark fixed-top nav-div\">\n              <a class=\"navbar-brand nav-brand title-1\" href=\"#\">Bug Tracker</a>\n        \n            <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n              aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n              <span class=\"navbar-toggler-icon\"></span>\n            </button>\n        \n            <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n              <ul class=\"nav navbar-nav ml-auto\"> \n                <li class=\"nav-item\">\n                  <a class=\"nav-link\" [routerLink]=\"['/about']\">About</a>\n                </li>\n                <li class=\"nav-item active\">\n                    <a class=\"nav-link \" [routerLink]=\"['/login']\">Login</a>\n                  </li>\n            \n              </ul>\n        \n            </div>\n          </nav>\n    \n      </div>\n    \n    </div>\n    \n<div style=\"margin-top: 20vh;\" class=\"col-md-6 mx-auto col-sm-8\">\n    <div class=\"card border-info cardBorder\" style=\"border-radius:10px;border:2px solid green;box-shadow: 0 35px 30px rgba(0, 0, 0, 0.8);\">\n         <div style=\"padding-top:30px\" class=\"card-body text-center \">\n             <div class=\"text-center\">\n                <div>\n                       <h3 class=\"text-success\">Request Password!</h3>\n                </div>\n     \n                <div>\n                    <h6>Please provide your email and we'll send a link to set up a new password.</h6>\n                </div>\n            </div>\n\n            <br>\n            <form class=\"form-horizontal\" role=\"form\" #forgotForm=\"ngForm\">\n\n                <div class=\"input-group  form-field-container\">\n\n                       <input  placeholder=\"Enter your email\" class=\" input-box\" [(ngModel)]=\"email\" [ngModelOptions]=\"{standalone: true}\" required>\n                    \n                </div>\n\n                \n                  <br>\n                        <button  type=\"button\" style=\"float:right;border-radius:15px\" class=\"btn btn-success\" (click)=\"forgotPasswordFunction()\" [disabled]=\"!forgotForm.valid\">\n                          Send </button>\n\n                        \n                        <button  type=\"button\" style=\"float:left;border-radius:15px\" class=\"btn btn-primary\" [routerLink]=\"['/register']\">Sign\n                            In Instead</button>\n\n                \n\n\n            </form>\n        </div>\n   </div> \n</div>\n</div>"

/***/ }),

/***/ "./src/app/users/forgot-password/forgot-password.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/users/forgot-password/forgot-password.component.ts ***!
  \********************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");





var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent(appService, _route, router, toastr) {
        this.appService = appService;
        this._route = _route;
        this.router = router;
        this.toastr = toastr;
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
    };
    ForgotPasswordComponent.prototype.forgotPasswordFunction = function () {
        var _this = this;
        if (!this.email) {
            this.toastr.warning("Email is required", "Warning!");
        }
        else {
            var data = {
                email: this.email
            };
            //console.log(data)  
            this.appService.resetPassword(data).subscribe(function (apiResponse) {
                if (apiResponse.status == 200) {
                    _this.toastr.success("Password reset instructions is sent to your email", "Success!");
                    setTimeout(function () {
                        _this.router.navigate(['/reset-password']);
                    }, 1000);
                }
                else {
                    _this.toastr.error(apiResponse.message, "Error!");
                }
            }, function (error) {
                if (error.status == 404) {
                    _this.toastr.error("Reset Password Failed", "Email Not Found!");
                }
                else {
                    _this.toastr.error("Some Error Occurred", "Error!");
                }
            }); //end calling resetPassword
        }
    }; //end forgotPasswordFunction
    ForgotPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forgot-password',
            template: __webpack_require__(/*! ./forgot-password.component.html */ "./src/app/users/forgot-password/forgot-password.component.html"),
            styles: [__webpack_require__(/*! ./forgot-password.component.css */ "./src/app/users/forgot-password/forgot-password.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());



/***/ }),

/***/ "./src/app/users/login/login.component.css":
/*!*************************************************!*\
  !*** ./src/app/users/login/login.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n\n\n\n.container-fluid\n{\n\n    background-image:url('tracker.jpg');\n    background-size:cover;\n    background-position:center center;\n    background-repeat:no-repeat;\n    width:100%;\n    height:100vh;\n}\n\n\n\n.nav-brand\n{\n    color:white;\n}\n\n\n\n.title-1\n{\n    font-family: 'Luckiest Guy', cursive;\n    color:white;\n}\n\n\n\n.form-div\n{\n    \n    background-size:cover;\n    background-position:center center;\n    background-repeat:no-repeat;\n    border-radius:30px 0 30px 0;\n    \n\n    box-shadow: 0 4px 16px 4px #2b2b2b;\n   \n}\n\n\n\n.title\n{\n    font-family: 'Luckiest Guy', cursive;\n    color:white;\n    font-size:70px;\n}\n\n\n\n.description\n{\n    font-family: 'Bitter', serif;\n    color:#fbbc03;\n    font-size:20px;\n    letter-spacing:3px;\n    font-weight:bolder;\n}\n\n\n\n.input-box{\n\n    border-radius: 30px 0 30px 0;\n    \n}\n\n\n\n.submit\n{\n    background:transparent;\n    border-radius:20px;\n    border:3px solid #228fcf;\n}\n\n\n\n.social1\n{\n    background:#3b5998;\n    border:none;\n    border-radius:20px;\n    margin-right:6px;\n    margin-top:6px;\n}\n\n\n\n.social2\n{\n    background:#db4437;\n    border:none;\n    border-radius:20px;\n    margin-right:6px;\n    margin-top:6px;\n}\n\n\n\n.Or\n{\n   \n   color:#fbbc03;\n    \n}\n\n\n\n.icon\n{\n    margin-right: 4px;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcnMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFNQTs7O0lBR0ksbUNBQTBEO0lBQzFELHFCQUFxQjtJQUNyQixpQ0FBaUM7SUFDakMsMkJBQTJCO0lBQzNCLFVBQVU7SUFDVixZQUFZO0FBQ2hCOzs7O0FBSUE7O0lBRUksV0FBVztBQUNmOzs7O0FBRUE7O0lBRUksb0NBQW9DO0lBQ3BDLFdBQVc7QUFDZjs7OztBQUVBOzs7SUFHSSxxQkFBcUI7SUFDckIsaUNBQWlDO0lBQ2pDLDJCQUEyQjtJQUMzQiwyQkFBMkI7OztJQUczQixrQ0FBa0M7O0FBRXRDOzs7O0FBRUE7O0lBRUksb0NBQW9DO0lBQ3BDLFdBQVc7SUFDWCxjQUFjO0FBQ2xCOzs7O0FBRUE7O0lBRUksNEJBQTRCO0lBQzVCLGFBQWE7SUFDYixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7OztBQUVBOztJQUVJLDRCQUE0Qjs7QUFFaEM7Ozs7QUFFQTs7SUFFSSxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLHdCQUF3QjtBQUM1Qjs7OztBQUVBOztJQUVJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCOzs7O0FBRUE7O0lBRUksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7Ozs7QUFLQTs7O0dBR0csYUFBYTs7QUFFaEI7Ozs7QUFFQTs7SUFFSSxpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC91c2Vycy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cblxuXG5cblxuLmNvbnRhaW5lci1mbHVpZFxue1xuXG4gICAgYmFja2dyb3VuZC1pbWFnZTp1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvdHJhY2tlci5qcGcnKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6Y292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjpjZW50ZXIgY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDtcbiAgICB3aWR0aDoxMDAlO1xuICAgIGhlaWdodDoxMDB2aDtcbn1cblxuXG5cbi5uYXYtYnJhbmRcbntcbiAgICBjb2xvcjp3aGl0ZTtcbn1cblxuLnRpdGxlLTFcbntcbiAgICBmb250LWZhbWlseTogJ0x1Y2tpZXN0IEd1eScsIGN1cnNpdmU7XG4gICAgY29sb3I6d2hpdGU7XG59XG5cbi5mb3JtLWRpdlxue1xuICAgIFxuICAgIGJhY2tncm91bmQtc2l6ZTpjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOmNlbnRlciBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O1xuICAgIGJvcmRlci1yYWRpdXM6MzBweCAwIDMwcHggMDtcbiAgICBcblxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDE2cHggNHB4ICMyYjJiMmI7XG4gICBcbn1cblxuLnRpdGxlXG57XG4gICAgZm9udC1mYW1pbHk6ICdMdWNraWVzdCBHdXknLCBjdXJzaXZlO1xuICAgIGNvbG9yOndoaXRlO1xuICAgIGZvbnQtc2l6ZTo3MHB4O1xufVxuXG4uZGVzY3JpcHRpb25cbntcbiAgICBmb250LWZhbWlseTogJ0JpdHRlcicsIHNlcmlmO1xuICAgIGNvbG9yOiNmYmJjMDM7XG4gICAgZm9udC1zaXplOjIwcHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6M3B4O1xuICAgIGZvbnQtd2VpZ2h0OmJvbGRlcjtcbn1cblxuLmlucHV0LWJveHtcblxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHggMCAzMHB4IDA7XG4gICAgXG59XG5cbi5zdWJtaXRcbntcbiAgICBiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1yYWRpdXM6MjBweDtcbiAgICBib3JkZXI6M3B4IHNvbGlkICMyMjhmY2Y7XG59XG5cbi5zb2NpYWwxXG57XG4gICAgYmFja2dyb3VuZDojM2I1OTk4O1xuICAgIGJvcmRlcjpub25lO1xuICAgIGJvcmRlci1yYWRpdXM6MjBweDtcbiAgICBtYXJnaW4tcmlnaHQ6NnB4O1xuICAgIG1hcmdpbi10b3A6NnB4O1xufVxuXG4uc29jaWFsMlxue1xuICAgIGJhY2tncm91bmQ6I2RiNDQzNztcbiAgICBib3JkZXI6bm9uZTtcbiAgICBib3JkZXItcmFkaXVzOjIwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OjZweDtcbiAgICBtYXJnaW4tdG9wOjZweDtcbn1cblxuXG5cblxuLk9yXG57XG4gICBcbiAgIGNvbG9yOiNmYmJjMDM7XG4gICAgXG59XG5cbi5pY29uXG57XG4gICAgbWFyZ2luLXJpZ2h0OiA0cHg7XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/users/login/login.component.html":
/*!**************************************************!*\
  !*** ./src/app/users/login/login.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"container-fluid\">\n  \n  <div class=\"row\">\n    <div class=\"col-12\">\n\n      <nav class=\"navbar navbar-expand-lg navbar-dark fixed-top nav-div\">\n          <a class=\"navbar-brand nav-brand title-1\" href=\"#\">BugTracker</a>\n    \n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n          aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n          <span class=\"navbar-toggler-icon\"></span>\n        </button>\n    \n        <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n          <ul class=\"nav navbar-nav ml-auto\"> \n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/about']\">About</a>\n            </li>\n        \n          </ul>\n    \n        </div>\n      </nav>\n\n  </div>\n\n</div>\n\n\n  <br>\n  <br>\n  <br>\n  \n<div class=\"row p-0 m-0 \">\n  \n\n  \n  \n\n    <div class=\"col-sm \"></div>\n   \n  \n    <div class=\"col-sm p-5 ml-3 form-div\">\n        \n\n        <div class=\"row\">\n            \n            <div class=\"col-12 text-center\">\n              <h1 class=\"title\">BugTracker</h1>\n              \n            </div>\n          </div>\n\n      \n     \n  \n  \n      \n  \n      \n      \n      <input type=\"email\" id=\"inputEmail\" class=\"form-control input-box\" [(ngModel)]=\"email\" placeholder=\"Email address\" required >\n  \n      <br>\n  \n      <label for=\"inputPassword\" class=\"sr-only\">Password</label>\n  \n      <input type=\"password\" id=\"inputPassword\" class=\"form-control input-box\" [(ngModel)]=\"password\" placeholder=\"Password\" required>\n      \n     \n       <br>\n      <button class=\"btn btn-lg btn-primary btn-block submit \" type=\"button\" (click)=\"loginFunction()\">Login</button>\n      <br>\n      <a  [routerLink]=\"['/forgot-password']\" style=\"color:white\">Forgot password?</a><br>\n      <a  [routerLink]=\"['/register']\" style=\"color:white\">Don't have an account</a>\n     \n  <br><br>\n  \n    </div>\n\n\n  \n    <div class=\"col-sm\"></div>\n  \n  </div>\n  <br><br><br>\n  \n</div>\n\n\n"

/***/ }),

/***/ "./src/app/users/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/users/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-cookies */ "./node_modules/ng2-cookies/index.js");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies__WEBPACK_IMPORTED_MODULE_5__);






var LoginComponent = /** @class */ (function () {
    function LoginComponent(appService, router, toastr) {
        var _this = this;
        this.appService = appService;
        this.router = router;
        this.toastr = toastr;
        this.loginFunction = function () {
            if (!_this.email) {
                _this.toastr.warning('enter email');
            }
            else if (!_this.password) {
                _this.toastr.warning('enter password');
            }
            else {
                var data = {
                    email: _this.email,
                    password: _this.password
                };
                _this.appService.LoginFunction(data)
                    .subscribe(function (apiResponse) {
                    if (apiResponse.status === 200) {
                        console.log(apiResponse);
                        ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].set('authtoken', apiResponse.data.authToken);
                        ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].set('receiverId', apiResponse.data.userDetails.userId);
                        ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].set('receiverName', apiResponse.data.userDetails.firstName + ' ' + apiResponse.data.userDetails.lastName);
                        _this.appService.setUserInfoInLocalStorage(apiResponse.data.userDetails);
                        setTimeout(function () {
                            _this.router.navigate(['/dashboard']);
                        }, 1000);
                    }
                    else {
                        _this.toastr.error(apiResponse.message);
                    }
                }, function (err) {
                    _this.toastr.error('some error occured');
                });
            } // end condition
        }; // end signinFunction
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/users/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/users/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/users/reset-password/reset-password.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/users/reset-password/reset-password.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.container-fluid\n{\n\n    background-image:url('tracker.jpg');\n    background-size:cover;\n    background-position:center center;\n    background-repeat:no-repeat;\n    width:100%;\n    height:100vh;\n}\n\n\n.nav-brand\n{\n    color:white;\n}\n\n\n.title-1\n{\n    font-family: 'Luckiest Guy', cursive;\n    color:white;\n}\n\n\ninput{\n\n    border-bottom:2px solid orange;\n    border-top:1px solid white;\n    border-left:1px solid white;\n    border-right:1px solid white;\n    outline:none;\n    width:100vw;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcnMvcmVzZXQtcGFzc3dvcmQvcmVzZXQtcGFzc3dvcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7OztJQUdJLG1DQUEwRDtJQUMxRCxxQkFBcUI7SUFDckIsaUNBQWlDO0lBQ2pDLDJCQUEyQjtJQUMzQixVQUFVO0lBQ1YsWUFBWTtBQUNoQjs7O0FBR0E7O0lBRUksV0FBVztBQUNmOzs7QUFFQTs7SUFFSSxvQ0FBb0M7SUFDcEMsV0FBVztBQUNmOzs7QUFFQTs7SUFFSSw4QkFBOEI7SUFDOUIsMEJBQTBCO0lBQzFCLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIsWUFBWTtJQUNaLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL3Jlc2V0LXBhc3N3b3JkL3Jlc2V0LXBhc3N3b3JkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5jb250YWluZXItZmx1aWRcbntcblxuICAgIGJhY2tncm91bmQtaW1hZ2U6dXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3RyYWNrZXIuanBnJyk7XG4gICAgYmFja2dyb3VuZC1zaXplOmNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246Y2VudGVyIGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBoZWlnaHQ6MTAwdmg7XG59XG5cblxuLm5hdi1icmFuZFxue1xuICAgIGNvbG9yOndoaXRlO1xufVxuXG4udGl0bGUtMVxue1xuICAgIGZvbnQtZmFtaWx5OiAnTHVja2llc3QgR3V5JywgY3Vyc2l2ZTtcbiAgICBjb2xvcjp3aGl0ZTtcbn1cblxuaW5wdXR7XG5cbiAgICBib3JkZXItYm90dG9tOjJweCBzb2xpZCBvcmFuZ2U7XG4gICAgYm9yZGVyLXRvcDoxcHggc29saWQgd2hpdGU7XG4gICAgYm9yZGVyLWxlZnQ6MXB4IHNvbGlkIHdoaXRlO1xuICAgIGJvcmRlci1yaWdodDoxcHggc29saWQgd2hpdGU7XG4gICAgb3V0bGluZTpub25lO1xuICAgIHdpZHRoOjEwMHZ3O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/users/reset-password/reset-password.component.html":
/*!********************************************************************!*\
  !*** ./src/app/users/reset-password/reset-password.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container-fluid\">\n  \n    <div class=\"row\">\n        <div class=\"col-12\">\n    \n          <nav class=\"navbar navbar-expand-lg navbar-dark fixed-top nav-div\">\n              <a class=\"navbar-brand nav-brand title-1\" href=\"#\">BugTracker</a>\n        \n            <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n              aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n              <span class=\"navbar-toggler-icon\"></span>\n            </button>\n        \n            <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n              <ul class=\"nav navbar-nav ml-auto\"> \n                <li class=\"nav-item\">\n                  <a class=\"nav-link\" [routerLink]=\"['/about']\">About</a>\n                </li>\n                <li class=\"nav-item active\">\n                    <a class=\"nav-link \" [routerLink]=\"['/login']\">Login</a>\n                  </li>\n            \n              </ul>\n        \n            </div>\n          </nav>\n    \n      </div>\n    \n    </div>\n    \n  <div style=\"margin-top: 20vh;\" class=\"col-md-6 mx-auto col-sm-8\">\n    <div class=\"card border-info cardBorder \" style=\"border-radius:10px;border:2px solid green;box-shadow: 0 35px 30px rgba(0, 0, 0, 0.8);\">\n         <div style=\"padding-top:30px\" class=\"card-body text-center \">\n             <div class=\"text-center\">\n                <div>\n                       <h2>Update Password!</h2>\n                </div>\n                <div>\n                    <h6>Use the recovery password send on your email</h6>\n                </div>\n            </div>\n  \n            <br>\n            <form class=\"form-horizontal\" role=\"form\" #forgotForm=\"ngForm\">\n  \n                <div class=\"input-group  form-field-container\">\n  \n                       <input  placeholder=\"Recovery password\" class=\"input-box\" [(ngModel)]=\"recoveryPassword\" [ngModelOptions]=\"{standalone: true}\" required>\n                       <br>\n                       <input type=\"password\" placeholder=\"new password\" class=\"input-box\" [(ngModel)]=\"newPassword\" [ngModelOptions]=\"{standalone: true}\" required>\n                       <br>\n                       <input type=\"password\" placeholder=\"confirm password\" class=\"input-box\" [(ngModel)]=\"confirmPassword\" [ngModelOptions]=\"{standalone: true}\" required>\n                    \n                </div>\n  \n                <br>\n        \n                        <button  type=\"button\" style=\"float:right;border-radius:15px\" class=\"btn btn-primary\" (click)=\"updatePasswordFunction()\" [disabled]=\"!forgotForm.valid\">\n                          Send </button>\n  \n                        \n                        <button  type=\"button\" style=\"float:left;border-radius:15px\" class=\"btn btn-success\"  [routerLink]=\"['/register']\">Sign\n                            In Instead</button>\n  \n                \n  \n  \n            </form>\n        </div>\n   </div> \n  </div>\n  </div>"

/***/ }),

/***/ "./src/app/users/reset-password/reset-password.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/users/reset-password/reset-password.component.ts ***!
  \******************************************************************/
/*! exports provided: ResetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function() { return ResetPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");





var ResetPasswordComponent = /** @class */ (function () {
    function ResetPasswordComponent(appService, _route, router, toastr) {
        this.appService = appService;
        this._route = _route;
        this.router = router;
        this.toastr = toastr;
    }
    ResetPasswordComponent.prototype.ngOnInit = function () {
    };
    ResetPasswordComponent.prototype.updatePasswordFunction = function () {
        var _this = this;
        if (!this.recoveryPassword) {
            this.toastr.warning("recovery password is missing", "Warning!");
        }
        else if (!this.newPassword) {
            this.toastr.warning("new Password is missing ", "Warning!");
        }
        else if (!this.confirmPassword) {
            this.toastr.warning("confirm password is missing", "Warning!");
        }
        else if (this.confirmPassword != this.newPassword) {
            this.toastr.warning("password doesn't match", "Warning!");
        }
        else {
            var data = {
                recoveryPassword: this.recoveryPassword,
                newPassword: this.newPassword
            };
            //console.log(data)  
            this.appService.updatePassword(data).subscribe(function (apiResponse) {
                if (apiResponse.status == 200) {
                    _this.toastr.success("Update Password", "Password updated successfully!");
                    setTimeout(function () { _this.router.navigate(['/login']); }, 2000);
                }
                else {
                    _this.toastr.error(apiResponse.message, "Error!");
                }
            }, function (error) {
                if (error.status == 404) {
                    _this.toastr.warning("Reset Password Failed", "Email Not Found!");
                }
                else {
                    _this.toastr.error("Some Error Occurred", "Error!");
                }
            }); //end calling resetPassword
        }
    }; //end forgotPasswordFunction
    ResetPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reset-password',
            template: __webpack_require__(/*! ./reset-password.component.html */ "./src/app/users/reset-password/reset-password.component.html"),
            styles: [__webpack_require__(/*! ./reset-password.component.css */ "./src/app/users/reset-password/reset-password.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], ResetPasswordComponent);
    return ResetPasswordComponent;
}());



/***/ }),

/***/ "./src/app/users/signup/signup.component.css":
/*!***************************************************!*\
  !*** ./src/app/users/signup/signup.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n\n    \n.container-fluid\n{\n\n    background-image:url('tracker.jpg');\n    background-size:cover;\n    background-position:center center;\n    background-repeat:no-repeat;\n    width:100%;\n    height:100%;\n}\n\n\n\n.nav-brand\n{\n    color:white;\n}\n\n\n\n.form-div\n{\n    \n    background-size:cover;\n    background-position:center center;\n    background-repeat:no-repeat;\n    border-radius:30px 0 30px 0;\n    \n\n    box-shadow: 0 4px 16px 4px #2b2b2b;\n   \n}\n\n\n\n.title\n{\n    font-family: 'Luckiest Guy', cursive;\n    color:white;\n    font-size:70px;\n}\n\n\n\n.description\n{\n    font-family: 'Bitter', serif;\n    color:#fbbc03;\n    font-size:27px;\n    letter-spacing:3px;\n    font-weight:bolder;\n}\n\n\n\n.input-box{\n\n    border-radius: 30px 0 30px 0;\n    \n}\n\n\n\n.submit\n{\n    background:transparent;\n    border-radius:20px;\n    border:3px solid #228fcf;\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcnMvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBS0E7OztJQUdJLG1DQUEwRDtJQUMxRCxxQkFBcUI7SUFDckIsaUNBQWlDO0lBQ2pDLDJCQUEyQjtJQUMzQixVQUFVO0lBQ1YsV0FBVztBQUNmOzs7O0FBSUE7O0lBRUksV0FBVztBQUNmOzs7O0FBR0E7OztJQUdJLHFCQUFxQjtJQUNyQixpQ0FBaUM7SUFDakMsMkJBQTJCO0lBQzNCLDJCQUEyQjs7O0lBRzNCLGtDQUFrQzs7QUFFdEM7Ozs7QUFFQTs7SUFFSSxvQ0FBb0M7SUFDcEMsV0FBVztJQUNYLGNBQWM7QUFDbEI7Ozs7QUFFQTs7SUFFSSw0QkFBNEI7SUFDNUIsYUFBYTtJQUNiLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOzs7O0FBRUE7O0lBRUksNEJBQTRCOztBQUVoQzs7OztBQUVBOztJQUVJLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsd0JBQXdCO0FBQzVCIiwiZmlsZSI6InNyYy9hcHAvdXNlcnMvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cblxuXG4gICAgXG4uY29udGFpbmVyLWZsdWlkXG57XG5cbiAgICBiYWNrZ3JvdW5kLWltYWdlOnVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy90cmFja2VyLmpwZycpO1xuICAgIGJhY2tncm91bmQtc2l6ZTpjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOmNlbnRlciBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O1xuICAgIHdpZHRoOjEwMCU7XG4gICAgaGVpZ2h0OjEwMCU7XG59XG5cblxuXG4ubmF2LWJyYW5kXG57XG4gICAgY29sb3I6d2hpdGU7XG59XG5cblxuLmZvcm0tZGl2XG57XG4gICAgXG4gICAgYmFja2dyb3VuZC1zaXplOmNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246Y2VudGVyIGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7XG4gICAgYm9yZGVyLXJhZGl1czozMHB4IDAgMzBweCAwO1xuICAgIFxuXG4gICAgYm94LXNoYWRvdzogMCA0cHggMTZweCA0cHggIzJiMmIyYjtcbiAgIFxufVxuXG4udGl0bGVcbntcbiAgICBmb250LWZhbWlseTogJ0x1Y2tpZXN0IEd1eScsIGN1cnNpdmU7XG4gICAgY29sb3I6d2hpdGU7XG4gICAgZm9udC1zaXplOjcwcHg7XG59XG5cbi5kZXNjcmlwdGlvblxue1xuICAgIGZvbnQtZmFtaWx5OiAnQml0dGVyJywgc2VyaWY7XG4gICAgY29sb3I6I2ZiYmMwMztcbiAgICBmb250LXNpemU6MjdweDtcbiAgICBsZXR0ZXItc3BhY2luZzozcHg7XG4gICAgZm9udC13ZWlnaHQ6Ym9sZGVyO1xufVxuXG4uaW5wdXQtYm94e1xuXG4gICAgYm9yZGVyLXJhZGl1czogMzBweCAwIDMwcHggMDtcbiAgICBcbn1cblxuLnN1Ym1pdFxue1xuICAgIGJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJhZGl1czoyMHB4O1xuICAgIGJvcmRlcjozcHggc29saWQgIzIyOGZjZjtcbn1cblxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/users/signup/signup.component.html":
/*!****************************************************!*\
  !*** ./src/app/users/signup/signup.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n    <div class=\"container-fluid\">\n      <br>\n    \n      <nav class=\"navbar navbar-expand-lg navbar-dark fixed-top nav-div\">\n        <a class=\"navbar-brand nav-brand title-1\" href=\"#\">Bug Tracker</a>\n    \n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n          aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n          <span class=\"navbar-toggler-icon\"></span>\n        </button>\n    \n        <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n          <ul class=\"nav navbar-nav ml-auto\"> \n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/about']\">About</a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" [routerLink]=\"['/login']\">Login</a>\n              </li>\n        \n          </ul>\n    \n        </div>\n      </nav>\n     <br>\n     <br>\n      \n    <div class=\"row p-0 m-0 \">\n    \n        <div class=\"col-sm\"></div>\n      \n        <div class=\"col-sm p-5 form-div\">\n          \n\n            <div class=\"row\">\n            \n                <div class=\"col-12 text-center\">\n                  <h1 class=\"title\">Bug Tracker</h1>\n                  \n                </div>\n              </div>\n    \n          \n      \n        \n      \n      \n          <input type=\"text\" id=\"firstName\" class=\"form-control  input-box\" [(ngModel)]=\"firstName\" #first=\"ngModel\" pattern=\"^[A-Z][A-za-z ]+$\" minlength=\"2\" placeholder=\"first name\" required autofocus>\n          <br>\n          <div [hidden]=\"first.pristine || first.valid\" class=\"alert alert-danger\">\n           <div *ngIf=\"first.errors?.pattern\">\n                Warning : Please tart with Capital and contain only letters !\n             <div *ngIf=\"first.errors?.minlength\">\n              Warning : Minimum 2 letters required!\n            </div>\n           </div>\n          <div *ngIf=\"first.errors?.required\">\n              Warning : First Name is required!\n         </div>\n\n         </div>\n          \n          <input type=\"text\" id=\"lastName\" class=\"form-control  input-box\" [(ngModel)]=\"lastName\" #last=\"ngModel\" pattern=\"^[A-Z][A-za-z ]+$\" minlength=\"2\"  placeholder=\"last name\" required >\n          <br>\n          <div [hidden]=\"last.pristine || last.valid\" class=\"alert alert-danger\">\n            <div *ngIf=\"last.errors?.pattern\">\n                  Warning : Please tart with Capital and contain only letters !\n              <div *ngIf=\"last.errors?.minlength\">\n                  Warning : Minimum 2 letters required!\n              </div>\n            </div>\n           <div *ngIf=\"last.errors?.required\">\n              Warning : Last Name is required!\n          </div>\n          </div>\n        \n          <input type=\"email\" id=\"inputEmail\" class=\"form-control  input-box\" [(ngModel)]=\"email\" #emailId=\"ngModel\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\"  placeholder=\"Email address\" required >\n          <br>\n          <div [hidden]=\"emailId.valid || emailId.pristine\" class=\"alert alert-danger\">\n            <div *ngIf=\"emailId.errors?.pattern\">\n             Warning : Email is invalid!\n      \n            </div>\n            <div *ngIf=\"emailId.errors?.required\">\n             Warning : Email is required!\n            </div>\n          </div>\n        \n          <input type=\"password\" id=\"inputPassword\" class=\"form-control  input-box\" [(ngModel)]=\"password\"  #pass=\"ngModel\" pattern=\"(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}\" placeholder=\"Password\" required>\n          <br>\n          \n          <div [hidden]=\"pass.valid || pass.pristine\" class=\"alert alert-danger\">\n            <div *ngIf=\"pass.errors?.pattern\">\n             Warning : Password must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters!\n            </div>\n            <div *ngIf=\"pass.errors?.required\">\n             Warning : Password is required!\n            </div>\n          </div>\n        \n          <input type=\"password\" id=\"confirmPassword\" class=\"form-control  input-box\" [(ngModel)]=\"confirmPassword\"  #conPass=\"ngModel\"   placeholder=\"confirm Password\" required>\n          <br>\n          \n          <div [hidden]=\"conPass.pristine || password==confirmPassword\" class=\"alert alert-danger\">\n            <div *ngIf=\"password!=confirmPassword\">\n               Warning : Password and Confirm Password does not match!\n            </div>\n           <div *ngIf=\"conPass.errors?.required\">\n               Warning: Confirm Password is required!\n           </div>\n         </div>\n         \n         <select [(ngModel)]=\"countryName\" #Country=\"ngModel\"  name=\"countryName\" class=\"form-control  input-box\" \n          id=\"inputCountry\" (change)=\"onChange()\" required>\n          <option value=\"\" >Select</option>\n          <option *ngFor=\"let country of finalCountryList\" [value]=\"country.key\">{{country.value}}</option>\n          </select>\n          <br>\n            \n           <div [hidden]=\"Country.valid || Country.pristine  \" class=\"alert alert-danger\">\n             ** Country Name is required \n          </div>\n        \n          <div class=\"input-group\">\n            <div class=\"input-group-text\">+{{code}}</div>\n            <input type=\"number\" #mobileNum=\"ngModel\" pattern=\"^\\d{10}$\" id=\"inputMobile\" class=\"form-control input-box\" name=\"mobile\" [(ngModel)]=\"mobileNumber\"\n            placeholder=\"Mobile\" required>\n          </div>\n     \n    \n        \n          <div [hidden]=\"mobileNum.valid || mobileNum.pristine\" class=\"alert alert-danger\">\n          <div *ngIf=\"mobileNum.errors?.pattern\">\n            Mobile Number should only start contain only 10 digits!\n    \n          </div>\n          <div *ngIf=\"mobileNum.errors?.required\">\n            Mobile Number is required!\n          </div>\n        </div>\n        <br>\n\n        \n         \n          <button class=\"btn btn-lg btn-primary btn-block submit \" type=\"button\" (click)=\"signupFunction()\">Get Started</button>\n    \n      \n        </div>\n       \n      \n        <div class=\"col-sm\"></div>\n      \n      </div>\n      <br><br>\n      \n    </div>\n    \n    \n    \n"

/***/ }),

/***/ "./src/app/users/signup/signup.component.ts":
/*!**************************************************!*\
  !*** ./src/app/users/signup/signup.component.ts ***!
  \**************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _pipes_sort_countries_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../pipes/sort-countries.pipe */ "./src/app/pipes/sort-countries.pipe.ts");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6__);






//for spinner loading

var SignupComponent = /** @class */ (function () {
    function SignupComponent(appService, router, toastr, sortCountries, spinnerService) {
        var _this = this;
        this.appService = appService;
        this.router = router;
        this.toastr = toastr;
        this.sortCountries = sortCountries;
        this.spinnerService = spinnerService;
        this.countryName = "";
        this.finalCountryList = [];
        this.codeList = [];
        this.goToLogin = function () {
            _this.router.navigate(['/']);
        }; // end goToSignIn
        this.onChange = function () {
            _this.appService.getCountryCode().subscribe(function (Response) {
                _this.codeList = Response;
                _this.code = _this.codeList[_this.countryName];
            });
        }; //end
    }
    SignupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appService.getCountryList().subscribe(function (Response) {
            _this.countryList = Response;
            for (var prop in _this.countryList) {
                _this.finalCountryList.push({
                    'key': prop,
                    'value': _this.countryList[prop]
                });
            }
            _this.finalCountryList = _this.sortCountries.transform(_this.finalCountryList);
        });
    };
    SignupComponent.prototype.signupFunction = function () {
        var _this = this;
        if (!this.firstName) {
            this.toastr.warning('Enter your first name');
        }
        else if (!this.lastName) {
            this.toastr.warning('Enter your last name');
        }
        else if (!this.email) {
            this.toastr.warning('Enter your email');
        }
        else if (!this.password) {
            this.toastr.warning('Enter the password');
        }
        else if (!this.confirmPassword) {
            this.toastr.warning('Enter the password');
        }
        else if (this.password != this.confirmPassword) {
            this.toastr.warning("password doesn't match");
        }
        else if (!this.countryName) {
            this.toastr.warning('countryName is required');
        }
        else if (!this.mobileNumber) {
            this.toastr.warning('mobileNumber is required');
        }
        else {
            var data = {
                firstName: this.firstName,
                lastName: this.lastName,
                email: this.email,
                password: this.password,
                mobileNumber: "+" + this.code + "-" + this.mobileNumber,
                country: this.countryName
            };
            console.log(data);
            this.appService.signupFunction(data).subscribe(function (apiResponse) {
                console.log(apiResponse);
                if (apiResponse.status === 200) {
                    _this.spinnerService.hide();
                    _this.toastr.success('Signup successful');
                    setTimeout(function () {
                        _this.goToLogin();
                    }, 2000);
                }
                else {
                    _this.toastr.error(apiResponse.message);
                }
            }, function (err) {
                _this.toastr.error('some error occured');
            });
        } //end condition
    }; //end signupFunction
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/users/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/users/signup/signup.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _pipes_sort_countries_pipe__WEBPACK_IMPORTED_MODULE_5__["SortCountriesPipe"],
            ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6__["Ng4LoadingSpinnerService"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/views/all-bugs/all-bugs.component.css":
/*!*******************************************************!*\
  !*** ./src/app/views/all-bugs/all-bugs.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n.container-fluid{\n  height:100%;\n}\n\n\n\n.title-1\n{\n    font-family: 'Luckiest Guy', cursive;\n    color:white;\n}\n\n\n\n.nav-border\n{\n    border-radius:0 0 10px 10px;\n}\n\n\n\n.bg-danger {\n  background-color:#0000FF !important;\n}\n\n\n\ntable {\n    width: 100%;\n  }\n\n\n\nth.mat-sort-header-sorted {\n    color: black;\n  }\n\n\n\n.header{\n    background-color:green;\n    color: white;\n    padding: 2%;\n    text-align: center;\n  }\n\n\n\n.navbar{\n    cursor: pointer;\n  }\n\n\n\n.user{\n    background-color:#4eb9c7;\n    color:black;\n    padding:5%;\n    display:block;\n    width:100%;\n    font-size:1.2em;\n    text-align:center;\n    font-family:sans-serif;\n  }\n\n\n\n.fasquare{\n    float: center;\n    margin-top:3%;\n  }\n\n\n\n.fasquare:hover{\n    color:rgb(22, 83, 37);\n    cursor:pointer;\n  }\n\n\n\n.aside{\n    background:  #f5f5f5;\n    overflow:auto;\n    margin-top:2%;\n  }\n\n\n\n.aside1{\n    overflow:auto;\n    margin-top:2%;\n  }\n\n\n\n.box\n  {\n    height:100vh;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvYWxsLWJ1Z3MvYWxsLWJ1Z3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0VBQ0UsV0FBVztBQUNiOzs7O0FBSUE7O0lBRUksb0NBQW9DO0lBQ3BDLFdBQVc7QUFDZjs7OztBQUVBOztJQUVJLDJCQUEyQjtBQUMvQjs7OztBQUVBO0VBQ0UsbUNBQW1DO0FBQ3JDOzs7O0FBRUE7SUFDSSxXQUFXO0VBQ2I7Ozs7QUFFQTtJQUNFLFlBQVk7RUFDZDs7OztBQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0VBQ3BCOzs7O0FBQ0E7SUFDRSxlQUFlO0VBQ2pCOzs7O0FBR0E7SUFDRSx3QkFBd0I7SUFDeEIsV0FBVztJQUNYLFVBQVU7SUFDVixhQUFhO0lBQ2IsVUFBVTtJQUNWLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsc0JBQXNCO0VBQ3hCOzs7O0FBR0E7SUFDRSxhQUFhO0lBQ2IsYUFBYTtFQUNmOzs7O0FBQ0E7SUFDRSxxQkFBcUI7SUFDckIsY0FBYztFQUNoQjs7OztBQUVBO0lBQ0Usb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixhQUFhO0VBQ2Y7Ozs7QUFFQTtJQUNFLGFBQWE7SUFDYixhQUFhO0VBQ2Y7Ozs7QUFFQTs7SUFFRSxZQUFZO0VBQ2QiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9hbGwtYnVncy9hbGwtYnVncy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbi5jb250YWluZXItZmx1aWR7XG4gIGhlaWdodDoxMDAlO1xufVxuXG5cblxuLnRpdGxlLTFcbntcbiAgICBmb250LWZhbWlseTogJ0x1Y2tpZXN0IEd1eScsIGN1cnNpdmU7XG4gICAgY29sb3I6d2hpdGU7XG59XG5cbi5uYXYtYm9yZGVyXG57XG4gICAgYm9yZGVyLXJhZGl1czowIDAgMTBweCAxMHB4O1xufVxuXG4uYmctZGFuZ2VyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjojMDAwMEZGICFpbXBvcnRhbnQ7XG59XG5cbnRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIHRoLm1hdC1zb3J0LWhlYWRlci1zb3J0ZWQge1xuICAgIGNvbG9yOiBibGFjaztcbiAgfVxuXG4gIC5oZWFkZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjpncmVlbjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMiU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5uYXZiYXJ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cblxuICAudXNlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiM0ZWI5Yzc7XG4gICAgY29sb3I6YmxhY2s7XG4gICAgcGFkZGluZzo1JTtcbiAgICBkaXNwbGF5OmJsb2NrO1xuICAgIHdpZHRoOjEwMCU7XG4gICAgZm9udC1zaXplOjEuMmVtO1xuICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OnNhbnMtc2VyaWY7XG4gIH1cblxuXG4gIC5mYXNxdWFyZXtcbiAgICBmbG9hdDogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6MyU7XG4gIH1cbiAgLmZhc3F1YXJlOmhvdmVye1xuICAgIGNvbG9yOnJnYigyMiwgODMsIDM3KTtcbiAgICBjdXJzb3I6cG9pbnRlcjtcbiAgfVxuXG4gIC5hc2lkZXtcbiAgICBiYWNrZ3JvdW5kOiAgI2Y1ZjVmNTtcbiAgICBvdmVyZmxvdzphdXRvO1xuICAgIG1hcmdpbi10b3A6MiU7XG4gIH1cblxuICAuYXNpZGUxe1xuICAgIG92ZXJmbG93OmF1dG87XG4gICAgbWFyZ2luLXRvcDoyJTtcbiAgfVxuXG4gIC5ib3hcbiAge1xuICAgIGhlaWdodDoxMDB2aDtcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/views/all-bugs/all-bugs.component.html":
/*!********************************************************!*\
  !*** ./src/app/views/all-bugs/all-bugs.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\n  <div class=\"row\"> \n     <div class=\"col-12\">\n \n         <nav class=\"navbar navbar-expand-lg navbar-dark bg-danger nav-border\">\n             <a class=\"navbar-brand nav-brand title-1\" href=\"#\">BugTracker</a>\n                <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n                          aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                          <span class=\"navbar-toggler-icon\"></span>\n                </button>\n             <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n                <ul class=\"nav navbar-nav  ml-auto\">\n               \n                   <li>\n                     <input class=\"form-control bug-search\" [(ngModel)]=\"bug\" [placeholder]=\"placeholderText\" aria-label=\"Search\">\n                  </li>\n                  <li class=\"nav-item active\">\n                    <a class=\"nav-link\" [routerLink]=\"['/dashboard']\">Dashboard</a>\n                 </li>\n                   <li class=\"nav-item active\">\n                     <a class=\"nav-link\" [routerLink]=\"['/createBug']\">New Bug+</a>\n                  </li>\n                  <li class=\"nav-item active\">\n                         <a  class=\"nav-link\" data-toggle=\"modal\" data-target=\"#myModal1\">My Bugs</a>\n                  </li>\n \n                  <li class=\"nav-item  active\">\n                         <a  class=\"nav-link\" data-toggle=\"modal\" data-target=\"#myModal2\">Other Bugs</a>\n                  </li>\n \n                \n                  <li class=\"nav-item\">\n                    <a class=\"nav-link\" (click)=\"logout()\">Logout</a>\n                  </li>\n               </ul>\n            </div>\n        </nav>\n     </div>\n </div>\n \n \n \n \n   <!--Modal to show bugs repoted by me-->\n \n   <div id=\"myModal1\" class=\"modal fade\" role=\"dialog\"  tabindex=\"-1\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n           <div class=\"modal-dialog\" role=\"document\">\n               <div class=\"modal-content\">\n                   <div class=\"modal-header text-center text-white bg-danger\">\n                       <h4 class=\"modal-title w-100 font-weight-bold\">Bugs Reported by Me</h4>\n                       <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                           <span aria-hidden=\"true\">&times;</span>\n                       </button>\n                   </div>\n \n \n                   <div>\n \n                       <table class=\"table table-info\">\n                           <thead>\n                           <tr>\n                               <th scope=\"col\">Status</th>\n                               <th scope=\"col\">Title</th>\n                               <th scope=\"col\">Reporter</th>\n                               <th scope=\"col\">Date</th>\n                           </tr>\n                           </thead>\n                           <tbody *ngFor=\"let bug of reportedBug\">\n                           <tr style=\"cursor: pointer;\" routerLink=\"/bugDetails/{{bug.bugId}}\"  data-dismiss=\"modal\">\n                               <td class=\"text-secondary\"><b>{{bug.status}}</b></td>\n                               <td class=\"text-secondary\"><b>{{bug.bugTitle}}</b></td>\n                               <td class=\"text-secondary\"><b><span class=\"text-success\">{{bug.reporterName}}</span></b></td>\n                               <td class=\"text-secondary\"><b>{{bug.reportedOn|date}}</b></td>\n                           </tr>\n                           </tbody>\n                       </table>\n       \n                   </div>\n           \n           \n \n \n \n \n \n \n \n               </div>\n           </div>\n   </div>\n   <div class=\"container\" style=\"margin-top:5px\">\n       <div class=\"row\">\n           <div class=\"col-12 bg-secondary\" style=\"border-radius:20px;\">\n               <marquee style=\"color:white;font-size:20px;margin:2px\">Welcome <span class=\"text-warning\">{{fullName}}</span> to the world of developers.Enjoy the Toker issue tracking app.</marquee>\n           </div>\n       </div>\n   </div>\n \n \n   <!--Modal to show bugs related to other users-->\n \n   <div id=\"myModal2\" class=\"modal fade\" role=\"dialog\"  tabindex=\"-1\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n       <div class=\"modal-dialog\" role=\"document\">\n           <div class=\"modal-content\">\n               <div class=\"modal-header text-center bg-danger text-light\">\n                   <h4 class=\"modal-title w-100 font-weight-bold\">Other Bugs</h4>\n                   <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                       <span aria-hidden=\"true\">&times;</span>\n                   </button>\n               </div>\n \n \n               <div>\n \n                   <table class=\"table table-primary\">\n                       <thead>\n                       <tr>\n                           <th scope=\"col\">Status</th>\n                           <th scope=\"col\">Title</th>\n                           <th scope=\"col\">Reporter</th>\n                           <th scope=\"col\">Date</th>\n                       </tr>\n                       </thead>\n                       <tbody *ngFor=\"let bug of otherUsersRealatedBug;\">\n                       <tr style=\"cursor: pointer;\" routerLink=\"/bugDetails/{{bug.bugId}}\"  data-dismiss=\"modal\">\n                           <td>{{bug.status}}</td>\n                           <td><b>{{bug.bugTitle}}</b></td>\n                           <td><span class=\"text-success\"><b>{{bug.reporterName}}</b></span></td>\n                           <td>{{bug.reportedOn|date}}</td>\n                       </tr>\n                       </tbody>\n                   </table>\n   \n               </div>\n \n \n           </div>\n       </div>\n   </div>\n \n \n \n \n     <div class=\"table-responsive col-md-12 aside1\">\n         <div>\n \n               <p style=\"font-size:20px;margin-bottom:-5px;color:#1cd3a2\"><span><b>All Bugs</b></span> <p>\n               <table class=\"table table-info\" style=\"border-radius:10px\">\n                   <thead>\n                   <tr>\n                     <th scope=\"col\">Status <i class=\"fa fa-sort\" style=\"cursor: pointer;\" (click)=\"changeOrder('status')\"></i></th>\n                     <th scope=\"col\">Title <i class=\"fa fa-sort\" style=\"cursor: pointer;\" (click)=\"changeOrder('bugTitle')\"></i></th>\n                     <th scope=\"col\">Reporter <i class=\"fa fa-sort\" style=\"cursor: pointer;\" (click)=\"changeOrder('reporterName')\"></i></th>\n                     <th scope=\"col\">Date <i class=\"fa fa-sort\" style=\"cursor: pointer;\" (click)=\"changeOrder('reportedOn')\"></i></th>\n                   </tr>\n                 </thead>\n                 \n                 <tbody *ngFor=\"let bug of AllBugs | filter:'bugTitle,reporterName,status,reportedOn': bug | sortBy: sortOrder : field   | filterBy: filterName | paginate: { itemsPerPage: 6, currentPage: p }\" >\n                 \n                   <tr  style=\"cursor: pointer;\" routerLink=\"/bugDetails/{{bug.bugId}}\">\n                     <td class=\"text-secondary\"><b>{{bug.status}}</b></td>\n                     <td class=\"text-secondary\" ><b>{{bug.bugTitle}}</b></td>\n                     <td class=\"text-secondary\"><b>{{bug.reporterName}}</b></td>\n                     <td class=\"text-secondary\"><b>{{bug.reportedOn|date:'medium'}}</b></td>\n                   </tr>\n                 </tbody>\n               </table>\n               <div class=\"text-center\">\n               <pagination-controls  (pageChange)=\"p = $event\" ></pagination-controls>\n               </div>\n \n \n \n         </div>\n \n \n \n \n \n \n     </div>\n \n \n   </div>\n \n \n \n \n \n "

/***/ }),

/***/ "./src/app/views/all-bugs/all-bugs.component.ts":
/*!******************************************************!*\
  !*** ./src/app/views/all-bugs/all-bugs.component.ts ***!
  \******************************************************/
/*! exports provided: AllBugsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllBugsComponent", function() { return AllBugsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_socket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/socket.service */ "./src/app/services/socket.service.ts");
/* harmony import */ var src_app_services_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-cookies */ "./node_modules/ng2-cookies/index.js");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies__WEBPACK_IMPORTED_MODULE_6__);







var AllBugsComponent = /** @class */ (function () {
    function AllBugsComponent(socketService, appService, toastr, router) {
        var _this = this;
        this.socketService = socketService;
        this.appService = appService;
        this.toastr = toastr;
        this.router = router;
        this.otherUsersRealatedBug = [];
        this.reportedBug = [];
        this.assignedBug = [];
        this.users2 = [];
        this.p = 1;
        this.q = 1;
        this.searchedText = "";
        //for sorting
        this.sortOrder = false;
        //for filter
        this.filterName = { bugTitle: '' };
        //for selecting files
        this.selectedFiles = [];
        //To check whether the user is loggedIn or not
        this.checkStatus = function () {
            if (ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].get('authtoken') === undefined ||
                ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].get('authtoken') === '' ||
                ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].get('authtoken') === null) {
                _this.router.navigate(['/']);
                return false;
            }
            else {
                return true;
            }
        }; // end checkStatus
        //for getting all users
        this.getAllUsers = function () {
            _this.appService.getAllpeople().subscribe(function (apiResponse) {
                _this.users1 = apiResponse.data;
                _this.users2 = [];
                for (var _i = 0, _a = _this.users1; _i < _a.length; _i++) {
                    var user = _a[_i];
                    if (user.firstName + " " + user.lastName != _this.fullName) {
                        _this.users2.push(user);
                    }
                }
            });
        };
        //user confirmation
        this.verifyUserConfirmation = function () {
            _this.socketService.verifyUser().subscribe(function (response) {
                _this.socketService.setUser(_this.token);
                console.log("User is verified");
            });
        };
        this.getOnlineUserList = function () {
            _this.socketService.onlineUserList()
                .subscribe(function (userListfromdb) {
                _this.users = '';
                for (var x in userListfromdb) {
                    var temp = { 'userId': x, 'fullName': userListfromdb[x] };
                    _this.users = temp;
                }
            }); //end subscribe
        }; //end getOnlineUserList
        //Getting All Items:
        this.getAllBugs = function () {
            _this.appService.getBugs().subscribe(function (apiResponse) {
                _this.AllBugs = apiResponse.data;
                //sorting bug which are assigned to me
                _this.assignedBug = [];
                _this.reportedBug = [];
                _this.otherUsersRealatedBug = [];
                if (_this.AllBugs != null) {
                    for (var _i = 0, _a = _this.AllBugs; _i < _a.length; _i++) {
                        var iss = _a[_i];
                        if (_this.fullName == iss.assignee) {
                            _this.assignedBug.push(iss);
                        }
                    }
                    for (var _b = 0, _c = _this.AllBugs; _b < _c.length; _b++) {
                        var iss = _c[_b];
                        if (_this.fullName == iss.reporterName) {
                            _this.reportedBug.push(iss);
                        }
                    }
                    for (var _d = 0, _e = _this.AllBugs; _d < _e.length; _d++) {
                        var iss = _e[_d];
                        if (_this.fullName != iss.reporterName && _this.fullName != iss.assignee) {
                            _this.otherUsersRealatedBug.push(iss);
                        }
                    }
                }
            }, function (err) {
                console.log(err);
            });
        };
        //for creating OR registering new bug
        this.newBug = function () {
            _this.getAllUsers();
            if (!_this.bugTitle) {
                _this.toastr.warning("Bug title is required");
            }
            else if (!_this.status) {
                _this.toastr.warning("Please select status option");
            }
            else {
                var values = {
                    bugTitle: _this.bugTitle,
                    reporterId: _this.userId,
                    reporterName: _this.fullName,
                    status: _this.status,
                    description: _this.description,
                    attachments: _this.data,
                    assignee: _this.assignee
                };
                _this.appService.createBug(values).subscribe(function (apiResponse) {
                    if (apiResponse.status == 200) {
                        _this.toastr.success(apiResponse.message);
                        _this.bugDetails = apiResponse.data;
                        _this.newBugId = apiResponse.data.issueId;
                        _this.newBugStatus = apiResponse.status;
                        _this.bugTitle = "";
                        _this.status = "";
                        _this.description = "";
                        _this.getAllBugs();
                        _this.socketService.createBug(_this.fullName);
                        setTimeout(function () {
                            _this.router.navigate(["/bugDetails/" + _this.newBugId]);
                        }, 1000);
                        _this.getAllBugs();
                    }
                }, function (error) {
                    console.log("Error Occured");
                });
            }
        };
        this.newBugAddedResponse = function () {
            _this.socketService.bugAddedResponse().subscribe(function (response) {
                _this.getAllBugs();
                _this.toastr.success(response);
            });
        };
        //listening event for edit title
        this.bugUpdatedResponse = function () {
            _this.socketService.bugUpdatedResponse().subscribe(function (response) {
                _this.getAllBugs();
                _this.toastr.success(response);
            });
        };
        //listening event for comment on issue
        this.commentAddedResponse = function () {
            _this.socketService.commentAddedResponse().subscribe(function (response) {
                _this.getAllBugs();
                _this.toastr.success(response);
            });
        };
        //Logout:
        this.logout = function () {
            _this.appService.logout().subscribe(function (apiResponse) {
                if (apiResponse.status === 200) {
                    console.log("logout called");
                    ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].delete('authtoken');
                    ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].delete('receiverId');
                    ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].delete('receiverName');
                    _this.socketService.disconnectedSocket(); //calling the method which emits the disconnect event.
                    _this.socketService.exitSocket();
                    _this.router.navigate(['/']);
                }
                else {
                    _this.toastr.error(apiResponse.message);
                } // end condition
            }, function (err) {
                _this.toastr.error('Internal Server Error occured');
            });
        };
    }
    AllBugsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userId = ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].get("receiverId");
        this.fullName = ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].get("receiverName");
        this.token = ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].get('authtoken');
        console.log(this.token);
        this.incrementer = 1;
        this.placeholderArray = [
            "Search by name...",
            "Search by title...",
            "Search by bug..."
        ];
        this.placeholderText = this.placeholderArray[0];
        // after every 2.5 seconds
        setInterval(function () {
            _this.placeholderText = _this.placeholderArray[_this.incrementer];
            ++_this.incrementer;
            if (_this.incrementer === 3)
                _this.incrementer = 0;
        }, 2000);
        this.checkStatus();
        this.verifyUserConfirmation();
        this.getOnlineUserList();
        this.getAllUsers();
        this.getAllBugs();
        this.newBugAddedResponse();
        this.bugUpdatedResponse();
        this.commentAddedResponse();
    };
    AllBugsComponent.prototype.ngOnDestroy = function () {
        this.socketService.exitSocket();
    };
    //for sorting
    AllBugsComponent.prototype.changeOrder = function (field) {
        this.sortOrder = !this.sortOrder;
        this.field = field;
    };
    AllBugsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-all-bugs',
            template: __webpack_require__(/*! ./all-bugs.component.html */ "./src/app/views/all-bugs/all-bugs.component.html"),
            styles: [__webpack_require__(/*! ./all-bugs.component.css */ "./src/app/views/all-bugs/all-bugs.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_socket_service__WEBPACK_IMPORTED_MODULE_2__["SocketService"],
            src_app_services_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], AllBugsComponent);
    return AllBugsComponent;
}());



/***/ }),

/***/ "./src/app/views/bug-view/bug-view.component.css":
/*!*******************************************************!*\
  !*** ./src/app/views/bug-view/bug-view.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Righteous&subset=latin-ext');\n\n\n.nav-border\n{\n    border-radius:0 0 10px 10px;\n}\n\n\n.container-fluid\n{\n\n    width:100%;\n    height:100%;\n    background-size:cover;\n    width:100%;\n    height:100vh;\n    \n}\n\n\n.bg-danger {\n    background-color:#0000FF !important;\n  }\n\n\n.title-1\n{\n    font-family: 'Luckiest Guy', cursive;\n    color:white;\n}\n\n\n.details{\n\n    margin-top:10vh;\n\n\n}\n\n\n.title{\n    margin-bottom:0px;\n    margin-top:2vw;\n    font-family: 'Righteous', cursive;\n    color:white;\n}\n\n\n.description{\n\n    margin-top:30px;\n    color:white;\n}\n\n\n.tags{\n    color:white;\n}\n\n\nspan{\n    padding-left:5px;\n}\n\n\n.button{\n    margin-right:1vw;\n}\n\n\n.button-div{\n    margin-bottom:3vw;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvYnVnLXZpZXcvYnVnLXZpZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpRkFBaUY7OztBQUdqRjs7SUFFSSwyQkFBMkI7QUFDL0I7OztBQUVBOzs7SUFHSSxVQUFVO0lBQ1YsV0FBVztJQUNYLHFCQUFxQjtJQUNyQixVQUFVO0lBQ1YsWUFBWTs7QUFFaEI7OztBQUVBO0lBQ0ksbUNBQW1DO0VBQ3JDOzs7QUFHRjs7SUFFSSxvQ0FBb0M7SUFDcEMsV0FBVztBQUNmOzs7QUFLQTs7SUFFSSxlQUFlOzs7QUFHbkI7OztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxpQ0FBaUM7SUFDakMsV0FBVztBQUNmOzs7QUFJQTs7SUFFSSxlQUFlO0lBQ2YsV0FBVztBQUNmOzs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7O0FBSUE7SUFDSSxnQkFBZ0I7QUFDcEI7OztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOzs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2J1Zy12aWV3L2J1Zy12aWV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJpZ2h0ZW91cyZzdWJzZXQ9bGF0aW4tZXh0Jyk7XG5cblxuLm5hdi1ib3JkZXJcbntcbiAgICBib3JkZXItcmFkaXVzOjAgMCAxMHB4IDEwcHg7XG59XG5cbi5jb250YWluZXItZmx1aWRcbntcblxuICAgIHdpZHRoOjEwMCU7XG4gICAgaGVpZ2h0OjEwMCU7XG4gICAgYmFja2dyb3VuZC1zaXplOmNvdmVyO1xuICAgIHdpZHRoOjEwMCU7XG4gICAgaGVpZ2h0OjEwMHZoO1xuICAgIFxufVxuXG4uYmctZGFuZ2VyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMwMDAwRkYgIWltcG9ydGFudDtcbiAgfVxuXG5cbi50aXRsZS0xXG57XG4gICAgZm9udC1mYW1pbHk6ICdMdWNraWVzdCBHdXknLCBjdXJzaXZlO1xuICAgIGNvbG9yOndoaXRlO1xufVxuXG5cblxuXG4uZGV0YWlsc3tcblxuICAgIG1hcmdpbi10b3A6MTB2aDtcblxuXG59XG5cbi50aXRsZXtcbiAgICBtYXJnaW4tYm90dG9tOjBweDtcbiAgICBtYXJnaW4tdG9wOjJ2dztcbiAgICBmb250LWZhbWlseTogJ1JpZ2h0ZW91cycsIGN1cnNpdmU7XG4gICAgY29sb3I6d2hpdGU7XG59XG5cblxuXG4uZGVzY3JpcHRpb257XG5cbiAgICBtYXJnaW4tdG9wOjMwcHg7XG4gICAgY29sb3I6d2hpdGU7XG59XG5cbi50YWdze1xuICAgIGNvbG9yOndoaXRlO1xufVxuXG5cblxuc3BhbntcbiAgICBwYWRkaW5nLWxlZnQ6NXB4O1xufVxuXG4uYnV0dG9ue1xuICAgIG1hcmdpbi1yaWdodDoxdnc7XG59XG5cbi5idXR0b24tZGl2e1xuICAgIG1hcmdpbi1ib3R0b206M3Z3O1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/views/bug-view/bug-view.component.html":
/*!********************************************************!*\
  !*** ./src/app/views/bug-view/bug-view.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n          <div class=\"col-12\">\n         \n      \n      \n          <nav class=\"navbar navbar-expand-lg navbar-dark bg-danger nav-border\">\n      \n              <a class=\"navbar-brand nav-brand title-1\" href=\"#\">BugTracker</a>\n      \n            <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n              aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n              <span class=\"navbar-toggler-icon\"></span>\n            </button>\n      \n            <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n              <ul class=\"nav navbar-nav  ml-auto\">\n                  <li class=\"nav-item\">\n                      <a class=\"nav-link\" [routerLink]=\"['/dashboard']\">Dashboard</a>\n                    </li>\n                  <li class=\"nav-item\">\n                  </li>\n             \n                <li class=\"nav-item\">\n                  <a class=\"nav-link\" [routerLink]=\"['/']\">Logout</a>\n                </li>\n      \n      \n      \n      \n      \n              </ul>\n      \n            </div>\n          </nav>\n          </div>\n      \n        </div>\n        <br>\n\n        \n              <div class=\"col-1 float-right\"><a  (click)=\"deleteBug()\"  style=\"padding-right:10px\">\n                  <i class=\"fa fa-trash fa-lg\" style=\"color:#dc3545\" ></i>\n            </a> \n          </div>\n            <div class=\"col-11 float-right\"><a [routerLink]=\"['/editBug',bugDetails.bugId]\" class=\"float-right\"  >\n              <i class=\"fa fa-edit fa-lg edit1\" ></i>\n          </a>\n      </div>\n\n  <br><br><br>\n  <div class=\"container\">\n      <div style=\"border-bottom:1px solid grey\">\n<div class=\"row\">\n\n  <div class=\"row\" >\n      <div class=\"col-lg-3 col-sm-12 text-center\" >\n              <p style=\"font-size:20px;color:#1cd3a2\"><b>{{bugDetails.reporterName}}</b><br>\n                  <span class=\"text-secondary \" style=\"font-size:15px\">{{bugDetails.reportedOn |  date:'medium' }}</span></p>\n       \n      </div>\n      <div class=\"col-lg-9 col-sm-12 text-left\">\n              <div class=\"row\">\n           <div class=\"col-10\">\n                  <p style=\"font-size:20px;color:#1cd3a2\">{{bugDetails.bugTitle}}  <a class=\"btn float-right\" (click)=addAsWatcher(bugId)><i class=\"fa fa-eye\" style=\"color:#1cd3a2\" aria-hidden=\"true\"></i><b style=\"margin-left:5px\">Watch</b></a> </p>\n               \n           </div>\n           <div class=\"col-sm-12\">\n              <span class=\"text-secondary text-left\" style=\"font-size:15px\">{{bugDetails.description}}</span>\n           </div>\n           \n                  \n            <div class=\"col-12\" style=\"margin-top:15px\">\n                          <p class=\"text-secondary text-left\" style=\"font-size:20px\"><b>Assigned to-</b><span style=\"font-size:20px;color:#1cd3a2\"><b>{{bugDetails.assignee}}</b></span></p>\n                          <p class=\"text-secondary text-left\"><b>Status-<span style=\"color:#1cd3a2\">{{bugDetails.status}}</span></b></p>\n                          <p class=\"text-left\" *ngIf=\"bugDetails.watchers\">\n                          <b class=\"text-secondary text-left\">Watchers:</b>\n                                  <span *ngFor=\"let watcher of bugDetails.watchers; let i = index\">\n                          <b style=\"color:#1cd3a2\" > {{watcher.watcherName}}</b>\n                          </span></p>\n            </div>\n          </div>\n       </div>\n   </div>\n</div>\n</div>\n<br>\n\n<div class=\"row\" >\n<div class=\"container\">     \n<div class=\"col-12\">\n     <div class=\"scrollbar scrollbar-primary\">\n          <div class=\"force-overflow\">\n              <div *ngFor=\"let comment of AllCommentsOfBug\">\n                  <div *ngIf=\"comment\" style=\"border-bottom:1px solid #1cd3a2\">\n                      <span style=\"color:#1cd3a2\"><b>{{comment.userName}}</b></span><br>\n                      <span>{{comment.commentedOn |  date}}</span>\n                      <span class=\"text-secondary\" style=\"margin-left:15px\"><b>{{comment.comment}}</b></span><br>\n                  <br><br> \n                  </div>\n\n                  <br>\n                  \n              </div>    \n          </div>\n      </div>\n</div>\n<div class=\"col-12\" style=\"height:15vw\">\n      \n          <app-ngx-editor class=\"textarea float-right\" height=\"150px\" [(ngModel)]=\"comment\" placeholder=\"Type your comment\"></app-ngx-editor>\n      \n          <button type=\"button\" class=\"btn  btn-primary float-right\" style=\"margin-top:20px\"  (click)=addNewComment()>Send</button>\n     \n</div>\n</div>\n</div>\n\n</div>"

/***/ }),

/***/ "./src/app/views/bug-view/bug-view.component.ts":
/*!******************************************************!*\
  !*** ./src/app/views/bug-view/bug-view.component.ts ***!
  \******************************************************/
/*! exports provided: BugViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BugViewComponent", function() { return BugViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_socket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/socket.service */ "./src/app/services/socket.service.ts");
/* harmony import */ var src_app_services_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-cookies */ "./node_modules/ng2-cookies/index.js");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies__WEBPACK_IMPORTED_MODULE_6__);







var BugViewComponent = /** @class */ (function () {
    function BugViewComponent(socketService, appService, _route, router, toastr) {
        var _this = this;
        this.socketService = socketService;
        this.appService = appService;
        this._route = _route;
        this.router = router;
        this.toastr = toastr;
        this.users1 = [];
        this.users2 = [];
        this.bugDetails = [];
        //To check whether the user is loggedIn or not
        this.checkStatus = function () {
            if (ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].get('authtoken') === undefined ||
                ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].get('authtoken') === '' ||
                ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].get('authtoken') === null) {
                _this.router.navigate(['/']);
                return false;
            }
            else {
                return true;
            }
        }; // end checkStatus
        //for getting all users
        this.getAllUsers = function () {
            _this.appService.getAllpeople().subscribe(function (apiResponse) {
                _this.users1 = apiResponse.data;
                //  this.requests = apiResponse.data.requests;
                _this.users2 = [];
                for (var _i = 0, _a = _this.users1; _i < _a.length; _i++) {
                    var user = _a[_i];
                    if (user.firstName + " " + user.lastName != _this.fullName) {
                        _this.users2.push(user);
                    }
                }
            });
        };
        //user confirmation
        this.verifyUserConfirmation = function () {
            _this.socketService.verifyUser().subscribe(function (response) {
                _this.socketService.setUser(_this.token);
                console.log("User is verified");
            });
        };
        this.getOnlineUserList = function () {
            _this.socketService.onlineUserList()
                .subscribe(function (userListfromdb) {
                _this.users = '';
                for (var x in userListfromdb) {
                    var temp = { 'userId': x, 'fullName': userListfromdb[x] };
                    _this.users = temp;
                }
            }); //end subscribe
        }; //end getOnlineUserList
        //Getting All Items:
        this.getAllBugs = function () {
            _this.appService.getBugs().subscribe(function (apiResponse) {
                _this.AllBugs = apiResponse.data;
            }, function (err) {
                console.log(err);
            });
        };
        this.getBug = function () {
            var bugId = _this._route.snapshot.paramMap.get('bugId');
            _this.appService.getBug(bugId).subscribe(function (apiResponse) {
                _this.bugDetails = apiResponse.data;
                _this.bugId = _this.bugDetails.bugId;
            }, function (err) {
                console.log(err);
            });
        };
        //Getting All Items:
        this.getAllCommentsOnBug = function () {
            var bugId = _this._route.snapshot.paramMap.get('bugId');
            //console.log(this.bugId)
            _this.appService.getAllCommentOnBug(bugId).subscribe(function (apiResponse) {
                _this.AllCommentsOfBug = apiResponse.data;
            }, function (err) {
                console.log(err);
            });
        };
        //Update a bug details for all users:
        this.setBugDetails = function (bugId, bugTitle, status, description, assignee) {
            _this.getAllUsers();
            _this.bugId = bugId;
            _this.bugTitle = bugTitle;
            _this.status = status;
            _this.description = description;
            _this.assignee = assignee;
        };
        this.updateIssue = function () {
            var data = {
                issueTitle: _this.bugTitle,
                issueId: _this.bugId,
                status: _this.status,
                description: _this.description,
                assignee: _this.assignee
            };
            _this.appService.editBug(data, _this.token).subscribe(function (apiResponse) {
                _this.getBug();
                _this.socketService.updateBug(_this.fullName);
            }, function (err) {
                _this.toastr.error("Unable to update Bug details");
            });
        };
        this.bugUpdatedResponse = function () {
            _this.socketService.bugUpdatedResponse().subscribe(function (response) {
                _this.toastr.success(response);
                _this.getBug();
            });
        };
        //listening event for add bug  
        this.newBugAddedResponse = function () {
            _this.socketService.bugAddedResponse().subscribe(function (response) {
                _this.toastr.success(response);
            });
        };
        //for creating OR registering new bug
        this.addNewComment = function () {
            if (!_this.comment) {
                _this.toastr.warning("Please enter comment");
            }
            else {
                var values = {
                    issueId: _this.bugId,
                    userId: _this.userId,
                    userName: _this.fullName,
                    comment: _this.comment
                };
                _this.appService.addComment(values).subscribe(function (apiResponse) {
                    if (apiResponse.status == 200) {
                        _this.toastr.success(apiResponse.message);
                        _this.comment = "";
                        _this.getAllCommentsOnBug();
                        _this.socketService.addComment(_this.fullName);
                    }
                }, function (error) {
                    console.log("Error Occured");
                });
            }
        };
        this.commentAddedResponse = function () {
            _this.socketService.commentAddedResponse().subscribe(function (response) {
                _this.toastr.success(response);
                _this.getAllCommentsOnBug();
            });
        };
        //watch related functionalities
        this.addAsWatcher = function (bugId) {
            var data = {
                issueId: bugId,
                watcherId: _this.userId,
                watcherName: _this.fullName
            };
            _this.socketService.addAsWatcher(data);
            _this.getBug();
            _this.getAllBugs();
        };
        this.responseAlreadyWatcher = function () {
            _this.socketService.responseAlreadyWatcher().subscribe(function (response) {
                _this.toastr.error(response);
            });
        };
        this.save_watch = function () {
            _this.socketService.save_watch().subscribe(function (response) {
                _this.toastr.success(response);
                _this.getAllUsers();
                _this.getBug();
            });
        };
    }
    BugViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userId = ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].get("receiverId");
        this.fullName = ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].get("receiverName");
        this.token = ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].get('authToken');
        var bugId = this._route.snapshot.paramMap.get('bugId');
        this.appService.getBug(bugId).subscribe(function (apiResponse) {
            _this.bugDetails = apiResponse.data;
            _this.bugId = _this.bugDetails.bugId;
        }, function (err) {
            console.log(err);
        });
        this.checkStatus();
        this.bugUpdatedResponse();
        this.newBugAddedResponse();
        this.getAllBugs();
        this.getAllCommentsOnBug();
        this.commentAddedResponse();
        this.responseAlreadyWatcher();
        this.save_watch();
        this.getBug();
    };
    BugViewComponent.prototype.ngOnDestroy = function () {
        this.socketService.exitSocket();
    };
    BugViewComponent.prototype.deleteBug = function () {
        var _this = this;
        var data = {
            issueTitle: this.bugTitle,
            issueId: this.bugId,
            status: this.status,
            description: this.description,
            assignee: this.assignee
        };
        this.appService.deleteBug(data, this.bugId).subscribe(function (data) {
            _this.toastr.success("Bug deleted succesfully");
            setTimeout(function () {
                _this.router.navigate(['/dashboard']);
            }, 1000);
        }, function (error) {
            _this.toastr.error("some error occured");
        });
    }; //end of deleteThisBlog
    BugViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bug-view',
            template: __webpack_require__(/*! ./bug-view.component.html */ "./src/app/views/bug-view/bug-view.component.html"),
            styles: [__webpack_require__(/*! ./bug-view.component.css */ "./src/app/views/bug-view/bug-view.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_socket_service__WEBPACK_IMPORTED_MODULE_2__["SocketService"],
            src_app_services_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], BugViewComponent);
    return BugViewComponent;
}());



/***/ }),

/***/ "./src/app/views/create-bugs/create-bugs.component.css":
/*!*************************************************************!*\
  !*** ./src/app/views/create-bugs/create-bugs.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n.container-fluid\n{\n\n    width:100%;\n    height:100%;\n    background:#43464b;\n    background-size:cover;\n    background-position:center center;\n    width:100%;\n    height:100%\n}\n\n.nav-border\n{\n    border-radius:0 0 10px 10px;\n}\n\n.bg-danger {\n    background-color:#0000FF !important;\n  }\n\n.title\n{\n\n    color:#d2b33f;\n    font-family: 'Anton', sans-serif;\n    letter-spacing:3px;\n    \n}\n\n.title-div\n{\n    margin-bottom:30px;\n\n}\n\n.title-1\n{\n    font-family: 'Luckiest Guy', cursive;\n    color:white;\n}\n\n.ng-valid[required], .ng-valid.required  {\n    border-left: 5px solid #42A948; /* green */\n  }\n\n.ng-invalid:not(form)  {\n    border-left: 5px solid #a94442; /* red */\n  }\n\n.form-div\n  {\n      padding-top:100px;\n      margin-bottom:40px;\n      \n    \n\n  }\n\n.input-box\n  {\n      border-radius:20px;\n  }\n\n.text-area\n  {\n    border-radius:40px;\n  }\n\n.submit\n{\n    background:transparent;\n    border-radius:20px;\n    border:3px solid #228fcf;\n    font-weight:bolder;\n}\n\napp-ngx-editor[placeholder]{\n\n   color:white;\n    height:100vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvY3JlYXRlLWJ1Z3MvY3JlYXRlLWJ1Z3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFHQTs7O0lBR0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGlDQUFpQztJQUNqQyxVQUFVO0lBQ1Y7QUFDSjs7QUFFQTs7SUFFSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxtQ0FBbUM7RUFDckM7O0FBRUY7OztJQUdJLGFBQWE7SUFDYixnQ0FBZ0M7SUFDaEMsa0JBQWtCOztBQUV0Qjs7QUFHQTs7SUFFSSxrQkFBa0I7O0FBRXRCOztBQUdBOztJQUVJLG9DQUFvQztJQUNwQyxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSw4QkFBOEIsRUFBRSxVQUFVO0VBQzVDOztBQUVBO0lBQ0UsOEJBQThCLEVBQUUsUUFBUTtFQUMxQzs7QUFFQTs7TUFFSSxpQkFBaUI7TUFDakIsa0JBQWtCOzs7O0VBSXRCOztBQUVBOztNQUVJLGtCQUFrQjtFQUN0Qjs7QUFFQTs7SUFFRSxrQkFBa0I7RUFDcEI7O0FBRUE7O0lBRUUsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQix3QkFBd0I7SUFDeEIsa0JBQWtCO0FBQ3RCOztBQUVBOztHQUVHLFdBQVc7SUFDVixZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvY3JlYXRlLWJ1Z3MvY3JlYXRlLWJ1Z3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5cbi5jb250YWluZXItZmx1aWRcbntcblxuICAgIHdpZHRoOjEwMCU7XG4gICAgaGVpZ2h0OjEwMCU7XG4gICAgYmFja2dyb3VuZDojNDM0NjRiO1xuICAgIGJhY2tncm91bmQtc2l6ZTpjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOmNlbnRlciBjZW50ZXI7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBoZWlnaHQ6MTAwJVxufVxuXG4ubmF2LWJvcmRlclxue1xuICAgIGJvcmRlci1yYWRpdXM6MCAwIDEwcHggMTBweDtcbn1cblxuLmJnLWRhbmdlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojMDAwMEZGICFpbXBvcnRhbnQ7XG4gIH1cblxuLnRpdGxlXG57XG5cbiAgICBjb2xvcjojZDJiMzNmO1xuICAgIGZvbnQtZmFtaWx5OiAnQW50b24nLCBzYW5zLXNlcmlmO1xuICAgIGxldHRlci1zcGFjaW5nOjNweDtcbiAgICBcbn1cblxuXG4udGl0bGUtZGl2XG57XG4gICAgbWFyZ2luLWJvdHRvbTozMHB4O1xuXG59XG5cblxuLnRpdGxlLTFcbntcbiAgICBmb250LWZhbWlseTogJ0x1Y2tpZXN0IEd1eScsIGN1cnNpdmU7XG4gICAgY29sb3I6d2hpdGU7XG59XG5cbi5uZy12YWxpZFtyZXF1aXJlZF0sIC5uZy12YWxpZC5yZXF1aXJlZCAge1xuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzQyQTk0ODsgLyogZ3JlZW4gKi9cbiAgfVxuICBcbiAgLm5nLWludmFsaWQ6bm90KGZvcm0pICB7XG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjYTk0NDQyOyAvKiByZWQgKi9cbiAgfVxuXG4gIC5mb3JtLWRpdlxuICB7XG4gICAgICBwYWRkaW5nLXRvcDoxMDBweDtcbiAgICAgIG1hcmdpbi1ib3R0b206NDBweDtcbiAgICAgIFxuICAgIFxuXG4gIH1cblxuICAuaW5wdXQtYm94XG4gIHtcbiAgICAgIGJvcmRlci1yYWRpdXM6MjBweDtcbiAgfVxuXG4gIC50ZXh0LWFyZWFcbiAge1xuICAgIGJvcmRlci1yYWRpdXM6NDBweDtcbiAgfVxuXG4gIC5zdWJtaXRcbntcbiAgICBiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1yYWRpdXM6MjBweDtcbiAgICBib3JkZXI6M3B4IHNvbGlkICMyMjhmY2Y7XG4gICAgZm9udC13ZWlnaHQ6Ym9sZGVyO1xufVxuXG5hcHAtbmd4LWVkaXRvcltwbGFjZWhvbGRlcl17XG5cbiAgIGNvbG9yOndoaXRlO1xuICAgIGhlaWdodDoxMDB2aDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/views/create-bugs/create-bugs.component.html":
/*!**************************************************************!*\
  !*** ./src/app/views/create-bugs/create-bugs.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n   \n\n\n    <nav class=\"navbar navbar-expand-lg navbar-dark bg-danger nav-border\">\n\n        <a class=\"navbar-brand nav-brand title-1\" href=\"#\">BugTracker</a>\n\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n        aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n\n      <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n        <ul class=\"nav navbar-nav  ml-auto\">\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" [routerLink]=\"['/dashboard']\">Dashboard</a>\n              </li>\n            <li class=\"nav-item\">\n            </li>\n       \n          <li class=\"nav-item\">\n            <a class=\"nav-link\" [routerLink]=\"['/']\">Logout</a>\n          </li>\n\n\n\n\n\n        </ul>\n\n      </div>\n    </nav>\n    </div>\n\n  </div>\n\n\n  <div class=\"row form-div\" style=\"text-align:left\">\n\n    \n      <div class=\"col-12 text-center title-div\">\n        <h2 class=\"title\">Create a new Bug</h2>\n\n      </div>\n      \n  \n\n      <div class=\"col-md-10 offset-lg-1 offset-md-1  offset-sm-1  \">\n        <form #createBugForm=\"ngForm\" (ngSubmit)=\"newBug()\" enctype=\"multipart/form-data\">\n  \n          <div class=\"form-group\">\n  \n  \n            <label style=\"color:white;font-weight:bolder\">Bug Title</label>\n            <input  [(ngModel)]=\"bugTitle\" #title=\"ngModel\" type=\"Title\" class=\"form-control input-box validate\" [ngModelOptions]=\"{standalone: true}\" required>\n  \n          </div>\n         \n         \n  \n          <div class=\"form-group box\">\n            <label style=\"color:white;font-weight:bolder\">description</label>\n           \n            <app-ngx-editor [placeholder]=\"'Enter description here...'\" height=\"150px\"  [spellcheck]=\"true\" [(ngModel)]=\"description\" #bugDescription=\"ngModel\" [ngModelOptions]=\"{standalone: true}\"  class=\"descrip\"></app-ngx-editor>\n          </div>\n        \n\n          \n  \n          \n          <div class=\"form-group\">\n            <label style=\"color:white;font-weight:bolder\">Assignee</label>\n                         \n                <select  [(ngModel)]=\"assignee\" class=\"custom-select form-control input-box\" id=\"inputGroupSelect01\" [ngModelOptions]=\"{standalone: true}\"  required>\n                     <option selected>Choose...</option>\n                                 \n                    <option  *ngFor=\"let user of users2\" value=\"{{user.firstName}} {{user.lastName}}\">\n                           <p>{{user.firstName}} {{user.lastName}}</p>\n                    </option>\n               </select>\n  \n          </div>\n\n          <div class=\"form-group\">\n            <label style=\"color:white;font-weight:bolder\">Status</label>\n             <select  [(ngModel)]=\"status\" class=\"custom-select form-control input-box\" id=\"inputGroupSelect01\" [ngModelOptions]=\"{standalone: true}\" required>\n                <option selected>Choose...</option>\n                <option value=\"backlog\">backlog</option>\n                <option value=\"in-progress\">in-progress</option>\n                <option value=\"in-test\">in-test</option>\n                <option value=\"done\">done</option>\n            </select>\n\n        </div>\n\n           \n          <br>\n          <br>\n          \n        \n  \n          <button type=\"submit\" class=\"btn btn-default btn-primary submit\" [disabled]=\"!createBugForm.form.valid\" >Add a query</button>\n      \n        </form>\n       \n      </div>\n  \n    </div>\n\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/views/create-bugs/create-bugs.component.ts":
/*!************************************************************!*\
  !*** ./src/app/views/create-bugs/create-bugs.component.ts ***!
  \************************************************************/
/*! exports provided: CreateBugsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateBugsComponent", function() { return CreateBugsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_socket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/socket.service */ "./src/app/services/socket.service.ts");
/* harmony import */ var src_app_services_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-cookies */ "./node_modules/ng2-cookies/index.js");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies__WEBPACK_IMPORTED_MODULE_6__);







var CreateBugsComponent = /** @class */ (function () {
    function CreateBugsComponent(socketService, appService, toastr, router) {
        var _this = this;
        this.socketService = socketService;
        this.appService = appService;
        this.toastr = toastr;
        this.router = router;
        this.otherUsersRealatedBug = [];
        this.reportedBug = [];
        this.assignedBug = [];
        this.users2 = [];
        this.p = 1;
        this.q = 1;
        //for sorting
        this.sortOrder = false;
        //for filter
        this.filterName = { bugTitle: '' };
        //for selecting files
        this.selectedFiles = [];
        //To check whether the user is loggedIn or not
        this.checkStatus = function () {
            if (ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].get('authtoken') === undefined ||
                ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].get('authtoken') === '' ||
                ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].get('authtoken') === null) {
                _this.router.navigate(['/']);
                return false;
            }
            else {
                return true;
            }
        }; // end checkStatus
        //for getting all users
        this.getAllUsers = function () {
            _this.appService.getAllpeople().subscribe(function (apiResponse) {
                _this.users1 = apiResponse.data;
                _this.users2 = [];
                for (var _i = 0, _a = _this.users1; _i < _a.length; _i++) {
                    var user = _a[_i];
                    if (user.firstName + " " + user.lastName != _this.fullName) {
                        _this.users2.push(user);
                    }
                }
            });
        };
        //user confirmation
        this.verifyUserConfirmation = function () {
            _this.socketService.verifyUser().subscribe(function (response) {
                _this.socketService.setUser(_this.token);
                console.log("User is verified");
            });
        };
        this.getOnlineUserList = function () {
            _this.socketService.onlineUserList()
                .subscribe(function (userListfromdb) {
                _this.users = '';
                for (var x in userListfromdb) {
                    var temp = { 'userId': x, 'fullName': userListfromdb[x] };
                    _this.users = temp;
                }
            }); //end subscribe
        }; //end getOnlineUserList
        //Getting All Items:
        this.getAllBugs = function () {
            _this.appService.getBugs().subscribe(function (apiResponse) {
                _this.AllBugs = apiResponse.data;
                //sorting issue which are assigned to me
                _this.assignedBug = [];
                _this.reportedBug = [];
                _this.otherUsersRealatedBug = [];
                if (_this.AllBugs != null) {
                    for (var _i = 0, _a = _this.AllBugs; _i < _a.length; _i++) {
                        var bug = _a[_i];
                        if (_this.fullName == bug.assignee) {
                            _this.assignedBug.push(bug);
                        }
                    }
                    for (var _b = 0, _c = _this.AllBugs; _b < _c.length; _b++) {
                        var bug = _c[_b];
                        if (_this.fullName == bug.reporterName) {
                            _this.reportedBug.push(bug);
                        }
                    }
                    for (var _d = 0, _e = _this.AllBugs; _d < _e.length; _d++) {
                        var bug = _e[_d];
                        if (_this.fullName != bug.reporterName && _this.fullName != bug.assignee) {
                            _this.otherUsersRealatedBug.push(bug);
                        }
                    }
                }
            }, function (err) {
                console.log(err);
            });
        };
        //for creating OR registering new bug
        this.newBug = function () {
            _this.getAllUsers();
            if (!_this.bugTitle) {
                _this.toastr.warning("Bug title is required");
            }
            else if (!_this.status) {
                _this.toastr.warning("Please select  the status ");
            }
            else if (!_this.description) {
                _this.toastr.warning("description is required");
            }
            else if (!_this.assignee) {
                _this.toastr.warning("Please select the assignee");
            }
            else {
                var values = {
                    bugTitle: _this.bugTitle,
                    reporterId: _this.userId,
                    reporterName: _this.fullName,
                    status: _this.status,
                    description: _this.description,
                    attachments: _this.data,
                    assignee: _this.assignee
                };
                _this.appService.createBug(values).subscribe(function (apiResponse) {
                    if (apiResponse.status == 200) {
                        _this.toastr.success(apiResponse.message);
                        _this.bugDetails = apiResponse.data;
                        _this.newBugId = apiResponse.data.issueId;
                        _this.newBugStatus = apiResponse.status;
                        _this.bugTitle = "";
                        _this.status = "";
                        _this.description = "";
                        _this.getAllBugs();
                        _this.socketService.createBug(_this.fullName);
                        setTimeout(function () {
                            _this.router.navigate(["/bugDetails/" + _this.newBugId]);
                        }, 1000);
                        _this.getAllBugs();
                    }
                }, function (error) {
                    console.log("Error Occured");
                });
            }
        };
        this.newBugAddedResponse = function () {
            _this.socketService.bugAddedResponse().subscribe(function (response) {
                _this.getAllBugs();
                _this.toastr.success(response);
            });
        };
        //listening event for edit title
        this.bugUpdatedResponse = function () {
            _this.socketService.bugUpdatedResponse().subscribe(function (response) {
                _this.getAllBugs();
                _this.toastr.success(response);
            });
        };
        //listening event for comment on issue
        this.commentAddedResponse = function () {
            _this.socketService.commentAddedResponse().subscribe(function (response) {
                _this.getAllBugs();
                _this.toastr.success(response);
            });
        };
        //Logout:
        this.logout = function () {
            _this.appService.logout().subscribe(function (apiResponse) {
                if (apiResponse.status === 200) {
                    console.log("logout called");
                    ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].delete('authtoken');
                    ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].delete('receiverId');
                    ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].delete('receiverName');
                    _this.socketService.disconnectedSocket(); //calling the method which emits the disconnect event.
                    _this.socketService.exitSocket();
                    _this.router.navigate(['/']);
                }
                else {
                    _this.toastr.error(apiResponse.message);
                } // end condition
            }, function (err) {
                _this.toastr.error('Internal Server Error occured');
            });
        };
    }
    CreateBugsComponent.prototype.ngOnInit = function () {
        this.userId = ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].get("receiverId");
        this.fullName = ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].get("receiverName");
        this.token = ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].get('authtoken');
        console.log(this.token);
        this.checkStatus();
        this.verifyUserConfirmation();
        this.getOnlineUserList();
        this.getAllUsers();
        this.getAllBugs();
        this.newBugAddedResponse();
        this.bugUpdatedResponse();
        this.commentAddedResponse();
    };
    CreateBugsComponent.prototype.ngOnDestroy = function () {
        this.socketService.exitSocket();
    };
    //for sorting
    CreateBugsComponent.prototype.changeOrder = function (field) {
        this.sortOrder = !this.sortOrder;
        this.field = field;
    };
    CreateBugsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-bugs',
            template: __webpack_require__(/*! ./create-bugs.component.html */ "./src/app/views/create-bugs/create-bugs.component.html"),
            styles: [__webpack_require__(/*! ./create-bugs.component.css */ "./src/app/views/create-bugs/create-bugs.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_socket_service__WEBPACK_IMPORTED_MODULE_2__["SocketService"],
            src_app_services_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], CreateBugsComponent);
    return CreateBugsComponent;
}());



/***/ }),

/***/ "./src/app/views/dashboard/dashboard.component.css":
/*!*********************************************************!*\
  !*** ./src/app/views/dashboard/dashboard.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n.container-fluid{\n  height:100%;\n}\n\n\n\n.title-1\n{\n    \n    color:white;\n}\n\n\n\n.nav-border\n{\n    border-radius:0 0 10px 10px;\n    color: blue\n}\n\n\n\n.bg-danger {\n  background-color:#0000FF !important;\n}\n\n\n\ntable {\n    width: 100%;\n  }\n\n\n\nth.mat-sort-header-sorted {\n    color: black;\n  }\n\n\n\n.header{\n    background-color: navajowhite;\n    color: white;\n    padding: 2%;\n    text-align: center;\n  }\n\n\n\n.navbar{\n    cursor: pointer;\n    \n  }\n\n\n\n.user{\n    background-color:green;\n    color:black;\n    padding:5%;\n    display:block;\n    width:100%;\n    font-size:1.2em;\n    text-align:center;\n    font-family:sans-serif;\n  }\n\n\n\n.fasquare{\n    float: center;\n    margin-top:3%;\n  }\n\n\n\n.fasquare:hover{\n    color:blue;\n    cursor:pointer;\n  }\n\n\n\n.aside{\n    background:  black;\n    overflow:auto;\n    margin-top:2%;\n  }\n\n\n\n.aside1{\n    overflow:auto;\n    margin-top:2%;\n  }\n\n\n\n.box\n  {\n    height:100vh;\n  }\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7Ozs7QUFJQTs7O0lBR0ksV0FBVztBQUNmOzs7O0FBS0E7O0lBRUksMkJBQTJCO0lBQzNCO0FBQ0o7Ozs7QUFFQTtFQUNFLG1DQUFtQztBQUNyQzs7OztBQUVBO0lBQ0ksV0FBVztFQUNiOzs7O0FBRUE7SUFDRSxZQUFZO0VBQ2Q7Ozs7QUFFQTtJQUNFLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtFQUNwQjs7OztBQUNBO0lBQ0UsZUFBZTs7RUFFakI7Ozs7QUFHQTtJQUNFLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsVUFBVTtJQUNWLGFBQWE7SUFDYixVQUFVO0lBQ1YsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixzQkFBc0I7RUFDeEI7Ozs7QUFHQTtJQUNFLGFBQWE7SUFDYixhQUFhO0VBQ2Y7Ozs7QUFDQTtJQUNFLFVBQVU7SUFDVixjQUFjO0VBQ2hCOzs7O0FBRUE7SUFDRSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGFBQWE7RUFDZjs7OztBQUVBO0lBQ0UsYUFBYTtJQUNiLGFBQWE7RUFDZjs7OztBQUVBOztJQUVFLFlBQVk7RUFDZCIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4uY29udGFpbmVyLWZsdWlke1xuICBoZWlnaHQ6MTAwJTtcbn1cblxuXG5cbi50aXRsZS0xXG57XG4gICAgXG4gICAgY29sb3I6d2hpdGU7XG59XG5cblxuXG5cbi5uYXYtYm9yZGVyXG57XG4gICAgYm9yZGVyLXJhZGl1czowIDAgMTBweCAxMHB4O1xuICAgIGNvbG9yOiBibHVlXG59XG5cbi5iZy1kYW5nZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiMwMDAwRkYgIWltcG9ydGFudDtcbn1cblxudGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgdGgubWF0LXNvcnQtaGVhZGVyLXNvcnRlZCB7XG4gICAgY29sb3I6IGJsYWNrO1xuICB9XG5cbiAgLmhlYWRlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBuYXZham93aGl0ZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMiU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5uYXZiYXJ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIFxuICB9XG5cblxuICAudXNlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmdyZWVuO1xuICAgIGNvbG9yOmJsYWNrO1xuICAgIHBhZGRpbmc6NSU7XG4gICAgZGlzcGxheTpibG9jaztcbiAgICB3aWR0aDoxMDAlO1xuICAgIGZvbnQtc2l6ZToxLjJlbTtcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICBmb250LWZhbWlseTpzYW5zLXNlcmlmO1xuICB9XG5cblxuICAuZmFzcXVhcmV7XG4gICAgZmxvYXQ6IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOjMlO1xuICB9XG4gIC5mYXNxdWFyZTpob3ZlcntcbiAgICBjb2xvcjpibHVlO1xuICAgIGN1cnNvcjpwb2ludGVyO1xuICB9XG5cbiAgLmFzaWRle1xuICAgIGJhY2tncm91bmQ6ICBibGFjaztcbiAgICBvdmVyZmxvdzphdXRvO1xuICAgIG1hcmdpbi10b3A6MiU7XG4gIH1cblxuICAuYXNpZGUxe1xuICAgIG92ZXJmbG93OmF1dG87XG4gICAgbWFyZ2luLXRvcDoyJTtcbiAgfVxuXG4gIC5ib3hcbiAge1xuICAgIGhlaWdodDoxMDB2aDtcbiAgfVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/views/dashboard/dashboard.component.html":
/*!**********************************************************!*\
  !*** ./src/app/views/dashboard/dashboard.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\n  <div class=\"row\"> \n     <div class=\"col-12\">\n \n         <nav class=\"navbar navbar-expand-lg navbar-dark bg-danger nav-border\">\n             <a class=\"navbar-brand nav-brand title-1\" href=\"#\">BugTracker</a>\n                <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n                          aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                          <span class=\"navbar-toggler-icon\"></span>\n                </button>\n             <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n                <ul class=\"nav navbar-nav  ml-auto\">\n               \n                   <li>\n                     <input class=\"form-control bug-search\" [(ngModel)]=\"bug\" [placeholder]=\"placeholderText\" aria-label=\"Search\">\n                  </li>\n                   <li class=\"nav-item active\">\n                     <a class=\"nav-link\" [routerLink]=\"['/createBug']\">New Bug+</a>\n                  </li>\n                  <li class=\"nav-item active\">\n                         <a  class=\"nav-link\" data-toggle=\"modal\" data-target=\"#myModal1\">My Bugs</a>\n                  </li>\n \n                  <li class=\"nav-item  active\">\n                         <a  class=\"nav-link\" data-toggle=\"modal\" data-target=\"#myModal2\">Other Bugs</a>\n                  </li>\n \n                  <li class=\"nav-item  active\">\n                     <a  class=\"nav-link\"  [routerLink]=\"['/all-bugs']\">All Bugs</a>\n                  </li>\n                  <li class=\"nav-item\">\n                    <a class=\"nav-link\" (click)=\"logout()\">Logout</a>\n                  </li>\n               </ul>\n            </div>\n        </nav>\n     </div>\n </div>\n \n \n \n \n   <!--Modal to show bugs repoted by me-->\n \n   <div id=\"myModal1\" class=\"modal fade\" role=\"dialog\"  tabindex=\"-1\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n           <div class=\"modal-dialog\" role=\"document\">\n               <div class=\"modal-content\">\n                   <div class=\"modal-header text-center text-white bg-danger\">\n                       <h4 class=\"modal-title w-100 font-weight-bold\">Bugs Reported by Me</h4>\n                       <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                           <span aria-hidden=\"true\">&times;</span>\n                       </button>\n                   </div>\n \n \n                   <div>\n \n                       <table class=\"table table-info\">\n                           <thead>\n                           <tr>\n                               <th scope=\"col\">Status</th>\n                               <th scope=\"col\">Title</th>\n                               <th scope=\"col\">Reporter</th>\n                               <th scope=\"col\">Date</th>\n                           </tr>\n                           </thead>\n                           <tbody *ngFor=\"let bug of reportedBug\">\n                           <tr style=\"cursor: pointer;\" routerLink=\"/bugDetails/{{bug.bugId}}\"  data-dismiss=\"modal\">\n                               <td class=\"text-secondary\"><b>{{bug.status}}</b></td>\n                               <td class=\"text-secondary\"><b>{{bug.bugTitle}}</b></td>\n                               <td class=\"text-secondary\"><b><span class=\"text-success\">{{bug.reporterName}}</span></b></td>\n                               <td class=\"text-secondary\"><b>{{bug.reportedOn|date}}</b></td>\n                           </tr>\n                           </tbody>\n                       </table>\n       \n                   </div>\n           \n           \n \n \n \n \n \n \n \n               </div>\n           </div>\n   </div>\n   <div class=\"container\" style=\"margin-top:5px\">\n       <div class=\"row\">\n           <div class=\"col-12 bg-secondary\" style=\"border-radius:20px;\">\n               <marquee style=\"color:white;font-size:20px;margin:2px\">Welcome <span class=\"text-warning\">{{fullName}}</span> to the world of developers.Enjoy the BugTracker app.</marquee>\n           </div>\n       </div>\n   </div>\n \n \n   <!--Modal to show bugs related to other users-->\n \n   <div id=\"myModal2\" class=\"modal fade\" role=\"dialog\"  tabindex=\"-1\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n       <div class=\"modal-dialog\" role=\"document\">\n           <div class=\"modal-content\">\n               <div class=\"modal-header text-center bg-danger text-light\">\n                   <h4 class=\"modal-title w-100 font-weight-bold\">Other Bugs</h4>\n                   <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                       <span aria-hidden=\"true\">&times;</span>\n                   </button>\n               </div>\n \n \n               <div>\n \n                   <table class=\"table table-primary\">\n                       <thead>\n                       <tr>\n                           <th scope=\"col\">Status</th>\n                           <th scope=\"col\">Title</th>\n                           <th scope=\"col\">Reporter</th>\n                           <th scope=\"col\">Date</th>\n                       </tr>\n                       </thead>\n                       <tbody *ngFor=\"let bug of otherUsersRealatedBug\">\n                       <tr style=\"cursor: pointer;\" routerLink=\"/bugDetails/{{bug.bugId}}\"  data-dismiss=\"modal\">\n                           <td>{{bug.status}}</td>\n                           <td><b>{{bug.bugTitle}}</b></td>\n                           <td><span class=\"text-success\"><b>{{bug.reporterName}}</b></span></td>\n                           <td>{{bug.reportedOn|date}}</td>\n                       </tr>\n                       </tbody>\n                   </table>\n   \n               </div>\n \n \n           </div>\n       </div>\n   </div>\n \n \n \n \n     <div class=\"table-responsive col-md-12 aside1\">\n         <div>\n \n               <p style=\"font-size:20px;margin-bottom:-5px;color:#1cd3a2\"><span><b>Bugs Assigned to {{fullName}}</b></span> <p>\n               <table class=\"table table-info\" style=\"border-radius:10px\">\n                   <thead>\n                   <tr>\n                     <th scope=\"col\">Status <i class=\"fa fa-sort\" style=\"cursor: pointer;\" (click)=\"changeOrder('status')\"></i></th>\n                     <th scope=\"col\">Title <i class=\"fa fa-sort\" style=\"cursor: pointer;\" (click)=\"changeOrder('bugTitle')\"></i></th>\n                     <th scope=\"col\">Reporter <i class=\"fa fa-sort\" style=\"cursor: pointer;\" (click)=\"changeOrder('reporterName')\"></i></th>\n                     <th scope=\"col\">Date <i class=\"fa fa-sort\" style=\"cursor: pointer;\" (click)=\"changeOrder('reportedOn')\"></i></th>\n                   </tr>\n                 </thead>\n                 \n                 <tbody *ngFor=\"let bug of assignedBug | filter:'bugTitle,reporterName,status,reportedOn': bug | sortBy: sortOrder : field   | filterBy: filterName | paginate: { itemsPerPage: 5, currentPage: p }\" >\n                 \n                   <tr  style=\"cursor: pointer;\" routerLink=\"/bugDetails/{{bug.bugId}}\">\n                     <td class=\"text-secondary\"><b>{{bug.status}}</b></td>\n                     <td class=\"text-secondary\" ><b>{{bug.bugTitle}}</b></td>\n                     <td class=\"text-secondary\"><b>{{bug.reporterName}}</b></td>\n                     <td class=\"text-secondary\"><b>{{bug.reportedOn|date:'medium'}}</b></td>\n                   </tr>\n                 </tbody>\n               </table>\n               <div class=\"text-center\">\n               <pagination-controls  (pageChange)=\"p = $event\" ></pagination-controls>\n               </div>\n \n \n \n         </div>\n \n \n \n \n \n \n     </div>\n \n \n   </div>\n \n \n \n \n \n "

/***/ }),

/***/ "./src/app/views/dashboard/dashboard.component.ts":
/*!********************************************************!*\
  !*** ./src/app/views/dashboard/dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_socket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/socket.service */ "./src/app/services/socket.service.ts");
/* harmony import */ var src_app_services_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-cookies */ "./node_modules/ng2-cookies/index.js");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies__WEBPACK_IMPORTED_MODULE_6__);







var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(socketService, appService, toastr, router) {
        var _this = this;
        this.socketService = socketService;
        this.appService = appService;
        this.toastr = toastr;
        this.router = router;
        this.otherUsersRealatedBug = [];
        this.reportedBug = [];
        this.assignedBug = [];
        this.users2 = [];
        this.p = 1;
        this.q = 1;
        //for sorting
        this.sortOrder = false;
        //for filter
        this.filterName = { issueTitle: '' };
        //for selecting files
        this.selectedFiles = [];
        //To check whether the user is loggedIn or not
        this.checkStatus = function () {
            if (ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].get('authtoken') === undefined ||
                ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].get('authtoken') === '' ||
                ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].get('authtoken') === null) {
                _this.router.navigate(['/']);
                return false;
            }
            else {
                return true;
            }
        }; // end checkStatus
        //for getting all users
        this.getAllUsers = function () {
            _this.appService.getAllpeople().subscribe(function (apiResponse) {
                _this.users1 = apiResponse.data;
                _this.users2 = [];
                for (var _i = 0, _a = _this.users1; _i < _a.length; _i++) {
                    var user = _a[_i];
                    if (user.firstName + " " + user.lastName != _this.fullName) {
                        _this.users2.push(user);
                    }
                }
            });
        };
        //user confirmation
        this.verifyUserConfirmation = function () {
            _this.socketService.verifyUser().subscribe(function (response) {
                _this.socketService.setUser(_this.token);
                console.log("User is verified");
            });
        };
        this.getOnlineUserList = function () {
            _this.socketService.onlineUserList()
                .subscribe(function (userListfromdb) {
                _this.users = '';
                for (var x in userListfromdb) {
                    var temp = { 'userId': x, 'fullName': userListfromdb[x] };
                    _this.users = temp;
                }
            }); //end subscribe
        }; //end getOnlineUserList
        //Getting All Items:
        this.getAllBugs = function () {
            _this.appService.getBugs().subscribe(function (apiResponse) {
                _this.AllBugs = apiResponse.data;
                //sorting bug which are assigned to me
                _this.assignedBug = [];
                _this.reportedBug = [];
                _this.otherUsersRealatedBug = [];
                if (_this.AllBugs != null) {
                    for (var _i = 0, _a = _this.AllBugs; _i < _a.length; _i++) {
                        var bug = _a[_i];
                        if (_this.fullName == bug.assignee) {
                            _this.assignedBug.push(bug);
                        }
                    }
                    for (var _b = 0, _c = _this.AllBugs; _b < _c.length; _b++) {
                        var iss = _c[_b];
                        if (_this.fullName == iss.reporterName) {
                            _this.reportedBug.push(iss);
                        }
                    }
                    for (var _d = 0, _e = _this.AllBugs; _d < _e.length; _d++) {
                        var iss = _e[_d];
                        if (_this.fullName != iss.reporterName && _this.fullName != iss.assignee) {
                            _this.otherUsersRealatedBug.push(iss);
                        }
                    }
                }
            }, function (err) {
                console.log(err);
            });
        };
        //for creating OR registering new bug
        this.newBug = function () {
            _this.getAllUsers();
            if (!_this.bugTitle) {
                _this.toastr.warning("Bug title is required");
            }
            else if (!_this.status) {
                _this.toastr.warning("Please select status option");
            }
            else {
                var values = {
                    bugTitle: _this.bugTitle,
                    reporterId: _this.userId,
                    reporterName: _this.fullName,
                    status: _this.status,
                    description: _this.description,
                    attachments: _this.data,
                    assignee: _this.assignee
                };
                _this.appService.createBug(values).subscribe(function (apiResponse) {
                    if (apiResponse.status == 200) {
                        _this.toastr.success(apiResponse.message);
                        _this.BugDetails = apiResponse.data;
                        _this.newBugId = apiResponse.data.issueId;
                        _this.newBugStatus = apiResponse.status;
                        _this.bugTitle = "";
                        _this.status = "";
                        _this.description = "";
                        _this.getAllBugs();
                        _this.socketService.createBug(_this.fullName);
                        setTimeout(function () {
                            _this.router.navigate(["/bugDetails/" + _this.newBugId]);
                        }, 1000);
                        _this.getAllBugs();
                    }
                }, function (error) {
                    console.log("Error Occured");
                });
            }
        };
        this.newBugAddedResponse = function () {
            _this.socketService.bugAddedResponse().subscribe(function (response) {
                _this.getAllBugs();
                _this.toastr.success(response);
            });
        };
        //listening event for edit title
        this.bugUpdatedResponse = function () {
            _this.socketService.bugUpdatedResponse().subscribe(function (response) {
                _this.getAllBugs();
                _this.toastr.success(response);
            });
        };
        //listening event for comment on bug
        this.commentAddedResponse = function () {
            _this.socketService.commentAddedResponse().subscribe(function (response) {
                _this.getAllBugs();
                _this.toastr.success(response);
            });
        };
        //Logout:
        this.logout = function () {
            _this.appService.logout().subscribe(function (apiResponse) {
                if (apiResponse.status === 200) {
                    console.log("logout called");
                    ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].delete('authToken');
                    ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].delete('receiverId');
                    ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].delete('receiverName');
                    _this.socketService.disconnectedSocket(); //calling the method which emits the disconnect event.
                    _this.socketService.exitSocket();
                    _this.router.navigate(['/']);
                }
                else {
                    _this.toastr.error(apiResponse.message);
                } // end condition
            }, function (err) {
                _this.toastr.error('Internal Server Error occured');
            });
        };
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userId = ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].get("receiverId");
        this.fullName = ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].get("receiverName");
        this.token = ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].get('authToken');
        this.incrementer = 1;
        this.placeholderArray = [
            "Search by name...",
            "Search by title...",
            "Search by issue..."
        ];
        this.placeholderText = this.placeholderArray[0];
        // after every 2.5 seconds
        setInterval(function () {
            _this.placeholderText = _this.placeholderArray[_this.incrementer];
            ++_this.incrementer;
            if (_this.incrementer === 3)
                _this.incrementer = 0;
        }, 2000);
        this.verifyUserConfirmation();
        this.getOnlineUserList();
        this.getAllUsers();
        this.getAllBugs();
        this.checkStatus();
        this.newBugAddedResponse();
        this.bugUpdatedResponse();
        this.commentAddedResponse();
    };
    DashboardComponent.prototype.ngOnDestroy = function () {
        this.socketService.exitSocket();
    };
    //for sorting
    DashboardComponent.prototype.changeOrder = function (field) {
        this.sortOrder = !this.sortOrder;
        this.field = field;
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/views/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/views/dashboard/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_socket_service__WEBPACK_IMPORTED_MODULE_2__["SocketService"],
            src_app_services_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/views/edit-bugs/edit-bugs.component.css":
/*!*********************************************************!*\
  !*** ./src/app/views/edit-bugs/edit-bugs.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n.container-fluid\n{\n\n    width:100%;\n    height:100%;\n    background:#43464b;\n    background-size:cover;\n    background-position:center center;\n    width:100%;\n    height:100%\n}\n\n.nav-border\n{\n    border-radius:0 0 10px 10px;\n}\n\n.bg-danger {\n    background-color:#0000FF !important;\n  }\n\n.title\n{\n\n    color:#d2b33f;\n    font-family: 'Anton', sans-serif;\n    letter-spacing:3px;\n    \n}\n\n.title-div\n{\n    margin-bottom:30px;\n\n}\n\n.title-1\n{\n    font-family: 'Luckiest Guy', cursive;\n    color:white;\n}\n\n.ng-valid[required], .ng-valid.required  {\n    border-left: 5px solid #42A948; /* green */\n  }\n\n.ng-invalid:not(form)  {\n    border-left: 5px solid #a94442; /* red */\n  }\n\n.form-div\n  {\n      padding-top:100px;\n      margin-bottom:40px;\n      \n    \n\n  }\n\n.input-box\n  {\n      border-radius:20px;\n  }\n\n.text-area\n  {\n    border-radius:40px;\n  }\n\n.submit\n{\n    background:transparent;\n    border-radius:20px;\n    border:3px solid #228fcf;\n    font-weight:bolder;\n}\n\napp-ngx-editor{\n\n   color:white;\n    height:100vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvZWRpdC1idWdzL2VkaXQtYnVncy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7OztJQUdJLFVBQVU7SUFDVixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixpQ0FBaUM7SUFDakMsVUFBVTtJQUNWO0FBQ0o7O0FBRUE7O0lBRUksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksbUNBQW1DO0VBQ3JDOztBQUVGOzs7SUFHSSxhQUFhO0lBQ2IsZ0NBQWdDO0lBQ2hDLGtCQUFrQjs7QUFFdEI7O0FBR0E7O0lBRUksa0JBQWtCOztBQUV0Qjs7QUFHQTs7SUFFSSxvQ0FBb0M7SUFDcEMsV0FBVztBQUNmOztBQUVBO0lBQ0ksOEJBQThCLEVBQUUsVUFBVTtFQUM1Qzs7QUFFQTtJQUNFLDhCQUE4QixFQUFFLFFBQVE7RUFDMUM7O0FBRUE7O01BRUksaUJBQWlCO01BQ2pCLGtCQUFrQjs7OztFQUl0Qjs7QUFFQTs7TUFFSSxrQkFBa0I7RUFDdEI7O0FBRUE7O0lBRUUsa0JBQWtCO0VBQ3BCOztBQUVBOztJQUVFLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsd0JBQXdCO0lBQ3hCLGtCQUFrQjtBQUN0Qjs7QUFFQTs7R0FFRyxXQUFXO0lBQ1YsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2VkaXQtYnVncy9lZGl0LWJ1Z3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4uY29udGFpbmVyLWZsdWlkXG57XG5cbiAgICB3aWR0aDoxMDAlO1xuICAgIGhlaWdodDoxMDAlO1xuICAgIGJhY2tncm91bmQ6IzQzNDY0YjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6Y292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjpjZW50ZXIgY2VudGVyO1xuICAgIHdpZHRoOjEwMCU7XG4gICAgaGVpZ2h0OjEwMCVcbn1cblxuLm5hdi1ib3JkZXJcbntcbiAgICBib3JkZXItcmFkaXVzOjAgMCAxMHB4IDEwcHg7XG59XG5cbi5iZy1kYW5nZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IzAwMDBGRiAhaW1wb3J0YW50O1xuICB9XG5cbi50aXRsZVxue1xuXG4gICAgY29sb3I6I2QyYjMzZjtcbiAgICBmb250LWZhbWlseTogJ0FudG9uJywgc2Fucy1zZXJpZjtcbiAgICBsZXR0ZXItc3BhY2luZzozcHg7XG4gICAgXG59XG5cblxuLnRpdGxlLWRpdlxue1xuICAgIG1hcmdpbi1ib3R0b206MzBweDtcblxufVxuXG5cbi50aXRsZS0xXG57XG4gICAgZm9udC1mYW1pbHk6ICdMdWNraWVzdCBHdXknLCBjdXJzaXZlO1xuICAgIGNvbG9yOndoaXRlO1xufVxuXG4ubmctdmFsaWRbcmVxdWlyZWRdLCAubmctdmFsaWQucmVxdWlyZWQgIHtcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkICM0MkE5NDg7IC8qIGdyZWVuICovXG4gIH1cbiAgXG4gIC5uZy1pbnZhbGlkOm5vdChmb3JtKSAge1xuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI2E5NDQ0MjsgLyogcmVkICovXG4gIH1cblxuICAuZm9ybS1kaXZcbiAge1xuICAgICAgcGFkZGluZy10b3A6MTAwcHg7XG4gICAgICBtYXJnaW4tYm90dG9tOjQwcHg7XG4gICAgICBcbiAgICBcblxuICB9XG5cbiAgLmlucHV0LWJveFxuICB7XG4gICAgICBib3JkZXItcmFkaXVzOjIwcHg7XG4gIH1cblxuICAudGV4dC1hcmVhXG4gIHtcbiAgICBib3JkZXItcmFkaXVzOjQwcHg7XG4gIH1cblxuICAuc3VibWl0XG57XG4gICAgYmFja2dyb3VuZDp0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmFkaXVzOjIwcHg7XG4gICAgYm9yZGVyOjNweCBzb2xpZCAjMjI4ZmNmO1xuICAgIGZvbnQtd2VpZ2h0OmJvbGRlcjtcbn1cblxuYXBwLW5neC1lZGl0b3J7XG5cbiAgIGNvbG9yOndoaXRlO1xuICAgIGhlaWdodDoxMDB2dztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/views/edit-bugs/edit-bugs.component.html":
/*!**********************************************************!*\
  !*** ./src/app/views/edit-bugs/edit-bugs.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n   \n\n\n    <nav class=\"navbar navbar-expand-lg navbar-dark bg-danger nav-border\">\n\n        <a class=\"navbar-brand nav-brand title-1\" href=\"#\">Trock</a>\n\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n        aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n\n      <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n        <ul class=\"nav navbar-nav  ml-auto\">\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" [routerLink]=\"['/dashboard']\">Dashboard</a>\n              </li>\n            <li class=\"nav-item\">\n            </li>\n       \n          <li class=\"nav-item\">\n            <a class=\"nav-link\" [routerLink]=\"['/']\">Logout</a>\n          </li>\n\n\n\n\n\n        </ul>\n\n      </div>\n    </nav>\n    </div>\n\n  </div>\n\n\n  <div class=\"row form-div\" style=\"text-align:left\">\n\n    \n      <div class=\"col-12 text-center title-div\">\n        <h2 class=\"title\">Edit this Issue</h2>\n\n      </div>\n      \n  \n\n      <div class=\"col-md-10 offset-lg-1 offset-md-1  offset-sm-1  \">\n        <form #editIssueForm=\"ngForm\" (ngSubmit)=\"updateIssue()\" enctype=\"multipart/form-data\">\n  \n          <div class=\"form-group\">\n  \n  \n            <label style=\"color:white;font-weight:bolder\">Issue Title</label>\n            <input  [(ngModel)]=\"issueDetails.issueTitle\" #title=\"ngModel\" type=\"Title\" class=\"form-control input-box validate\" [ngModelOptions]=\"{standalone: true}\" required>\n  \n          </div>\n         \n         \n  \n          <div class=\"form-group\">\n            <label style=\"color:white;font-weight:bolder\">description</label>\n           \n            <app-ngx-editor [placeholder]=\"'Enter description here...'\" height=\"150px\"  [spellcheck]=\"true\" [(ngModel)]=\"issueDetails.description\" #issueDescription=\"ngModel\" [ngModelOptions]=\"{standalone: true}\"  class=\"descrip\"></app-ngx-editor>\n          </div>\n        \n\n          \n  \n          \n          <div class=\"form-group\">\n            <label style=\"color:white;font-weight:bolder\">Assignee</label>\n                         \n                <select  [(ngModel)]=\"issueDetails.assignee\" class=\"custom-select form-control input-box\" id=\"inputGroupSelect01\" [ngModelOptions]=\"{standalone: true}\"  required>\n                     <option selected>Choose...</option>\n                                 \n                    <option  *ngFor=\"let user of users2\" value=\"{{user.firstName}} {{user.lastName}}\">\n                           <p>{{user.firstName}} {{user.lastName}}</p>\n                    </option>\n               </select>\n  \n          </div>\n\n          <div class=\"form-group\">\n            <label style=\"color:white;font-weight:bolder\">Status</label>\n             <select  [(ngModel)]=\"issueDetails.status\" class=\"custom-select form-control input-box\" id=\"inputGroupSelect01\" [ngModelOptions]=\"{standalone: true}\" required>\n                <option selected>Choose...</option>\n                <option value=\"backlog\">backlog</option>\n                <option value=\"in-progress\">in-progress</option>\n                <option value=\"in-test\">in-test</option>\n                <option value=\"done\">done</option>\n            </select>\n\n        </div>\n\n           \n          <br>\n          <br>\n          \n        \n  \n          <button type=\"submit\" class=\"btn btn-default btn-primary submit\" [disabled]=\"!editIssueForm.form.valid\" >Edit query</button>\n      \n        </form>\n       \n      </div>\n  \n    </div>\n\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/views/edit-bugs/edit-bugs.component.ts":
/*!********************************************************!*\
  !*** ./src/app/views/edit-bugs/edit-bugs.component.ts ***!
  \********************************************************/
/*! exports provided: EditBugsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditBugsComponent", function() { return EditBugsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_socket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/socket.service */ "./src/app/services/socket.service.ts");
/* harmony import */ var src_app_services_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-cookies */ "./node_modules/ng2-cookies/index.js");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies__WEBPACK_IMPORTED_MODULE_6__);







var EditBugsComponent = /** @class */ (function () {
    function EditBugsComponent(socketService, appService, _route, router, toastr) {
        var _this = this;
        this.socketService = socketService;
        this.appService = appService;
        this._route = _route;
        this.router = router;
        this.toastr = toastr;
        this.users1 = [];
        this.users2 = [];
        this.bugDetails = [];
        //To check whether the user is loggedIn or not
        this.checkStatus = function () {
            if (ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].get('authtoken') === undefined ||
                ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].get('authtoken') === '' ||
                ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].get('authtoken') === null) {
                _this.router.navigate(['/']);
                return false;
            }
            else {
                return true;
            }
        }; // end checkStatus
        //for getting all users
        this.getAllUsers = function () {
            _this.appService.getAllpeople().subscribe(function (apiResponse) {
                _this.users1 = apiResponse.data;
                //  this.requests = apiResponse.data.requests;
                _this.users2 = [];
                for (var _i = 0, _a = _this.users1; _i < _a.length; _i++) {
                    var user = _a[_i];
                    if (user.firstName + " " + user.lastName != _this.fullName) {
                        _this.users2.push(user);
                    }
                }
            });
        };
        //user confirmation
        this.verifyUserConfirmation = function () {
            _this.socketService.verifyUser().subscribe(function (response) {
                _this.socketService.setUser(_this.token);
                console.log("User is verified");
            });
        };
        this.getOnlineUserList = function () {
            _this.socketService.onlineUserList()
                .subscribe(function (userListfromdb) {
                _this.users = '';
                for (var x in userListfromdb) {
                    var temp = { 'userId': x, 'fullName': userListfromdb[x] };
                    _this.users = temp;
                }
            }); //end subscribe
        }; //end getOnlineUserList
        //Getting All Items:
        this.getAllBugs = function () {
            _this.appService.getBugs().subscribe(function (apiResponse) {
                _this.AllBugs = apiResponse.data;
            }, function (err) {
                console.log(err);
            });
        };
        this.getBug = function () {
            var bugId = _this._route.snapshot.paramMap.get('bugId');
            _this.appService.getBug(bugId).subscribe(function (apiResponse) {
                _this.bugDetails = apiResponse.data;
                _this.bugId = _this.bugDetails.issueId;
            }, function (err) {
                console.log(err);
            });
        };
        //Getting All Items:
        this.getAllCommentsOnBug = function () {
            var bugId = _this._route.snapshot.paramMap.get('bugId');
            //console.log(this.bugId)
            _this.appService.getAllCommentOnBug(bugId).subscribe(function (apiResponse) {
                _this.AllCommentsOfBug = apiResponse.data;
            }, function (err) {
                console.log(err);
            });
        };
        //Update a bug details for all users:
        this.setBugDetails = function (bugId, bugTitle, status, description, assignee) {
            _this.getAllUsers();
            _this.bugId = bugId;
            _this.bugTitle = bugTitle;
            _this.status = status;
            _this.description = description;
            _this.assignee = assignee;
        };
        this.updateBug = function () {
            var data = {
                bugTitle: _this.bugTitle,
                bugId: _this.bugId,
                status: _this.status,
                description: _this.description,
                assignee: _this.assignee
            };
            _this.appService.editBug(data, _this.bugId).subscribe(function (apiResponse) {
                _this.getBug();
                _this.toastr.success("Bug edited succesfully");
                setTimeout(function () {
                    _this.router.navigate(['/bugDetails', _this.bugId]);
                }, 1000);
                _this.socketService.updateBug(_this.fullName);
            }, function (err) {
                _this.toastr.error("Unable to update Bug details");
            });
        };
        this.bugUpdatedResponse = function () {
            _this.socketService.bugUpdatedResponse().subscribe(function (response) {
                _this.toastr.success(response);
                _this.getBug();
            });
        };
        //listening event for add bug  
        this.newBugAddedResponse = function () {
            _this.socketService.bugAddedResponse().subscribe(function (response) {
                _this.toastr.success(response);
            });
        };
        //for creating OR registering new bug
        this.addNewComment = function () {
            if (!_this.comment) {
                _this.toastr.warning("Please enter comment");
            }
            else {
                var values = {
                    bugId: _this.bugId,
                    userId: _this.userId,
                    userName: _this.fullName,
                    comment: _this.comment
                };
                _this.appService.addComment(values).subscribe(function (apiResponse) {
                    if (apiResponse.status == 200) {
                        _this.toastr.success(apiResponse.message);
                        _this.comment = "";
                        _this.getAllCommentsOnBug();
                        _this.socketService.addComment(_this.fullName);
                    }
                }, function (error) {
                    console.log("Error Occured");
                });
            }
        };
        this.commentAddedResponse = function () {
            _this.socketService.commentAddedResponse().subscribe(function (response) {
                _this.toastr.success(response);
                _this.getAllCommentsOnBug();
            });
        };
        //watch related functionalities
        this.addAsWatcher = function (bugId) {
            var data = {
                issueId: bugId,
                watcherId: _this.userId,
                watcherName: _this.fullName
            };
            _this.socketService.addAsWatcher(data);
            _this.getBug();
            _this.getAllBugs();
        };
        this.responseAlreadyWatcher = function () {
            _this.socketService.responseAlreadyWatcher().subscribe(function (response) {
                _this.toastr.error(response);
            });
        };
        this.save_watch = function () {
            _this.socketService.save_watch().subscribe(function (response) {
                _this.toastr.success(response);
                _this.getAllUsers();
                _this.getBug();
            });
        };
    }
    EditBugsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userId = ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].get("receiverId");
        this.fullName = ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].get("receiverName");
        this.token = ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].get('authToken');
        var bugId = this._route.snapshot.paramMap.get('issueId');
        this.appService.getBug(bugId).subscribe(function (apiResponse) {
            _this.bugDetails = apiResponse.data;
            _this.bugId = _this.bugDetails.issueId;
        }, function (err) {
            console.log(err);
        });
        this.bugUpdatedResponse();
        this.newBugAddedResponse();
        this.getAllBugs();
        this.getAllCommentsOnBug();
        this.commentAddedResponse();
        this.responseAlreadyWatcher();
        this.save_watch();
        this.getBug();
    };
    EditBugsComponent.prototype.ngOnDestroy = function () {
        this.socketService.exitSocket();
    };
    EditBugsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-bugs',
            template: __webpack_require__(/*! ./edit-bugs.component.html */ "./src/app/views/edit-bugs/edit-bugs.component.html"),
            styles: [__webpack_require__(/*! ./edit-bugs.component.css */ "./src/app/views/edit-bugs/edit-bugs.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_socket_service__WEBPACK_IMPORTED_MODULE_2__["SocketService"],
            src_app_services_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], EditBugsComponent);
    return EditBugsComponent;
}());



/***/ }),

/***/ "./src/app/views/notfound/notfound.component.css":
/*!*******************************************************!*\
  !*** ./src/app/views/notfound/notfound.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".image\n{\n   width:400px;\n   height:400px;\n   border:1px solid white;\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3Mvbm90Zm91bmQvbm90Zm91bmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7R0FFRyxXQUFXO0dBQ1gsWUFBWTtHQUNaLHNCQUFzQjs7QUFFekIiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9ub3Rmb3VuZC9ub3Rmb3VuZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltYWdlXG57XG4gICB3aWR0aDo0MDBweDtcbiAgIGhlaWdodDo0MDBweDtcbiAgIGJvcmRlcjoxcHggc29saWQgd2hpdGU7XG5cbn0iXX0= */"

/***/ }),

/***/ "./src/app/views/notfound/notfound.component.html":
/*!********************************************************!*\
  !*** ./src/app/views/notfound/notfound.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <br><br><br><br>\n  <div class=\"row\">\n    <div class=\"col-sm-6 text-center\">\n      <h3 class=\"text-secondary\"><b>Awww...Dont't be upset</b></h3>\n      <p class=\"text-secondary\"><b>Its just a <span class=\"text-danger\">404</span> error</b></p>\n      <br>\n      <p class=\"text-secondary\"><b>what you you're looking for may have been misplaced in Long Term Memory.</b></p>\n      <p class=\"text-secondary\"><b>Go back to <a [routerLink]=\"['/dashboard']\">HomePage</a></b></p>\n        \n    </div>\n    <div class=\"col-sm-6\">\n        <img src=\"../assets/images/404.gif\" alt=\"Not Found Page\" class=\"img-thumbnail image\">\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/views/notfound/notfound.component.ts":
/*!******************************************************!*\
  !*** ./src/app/views/notfound/notfound.component.ts ***!
  \******************************************************/
/*! exports provided: NotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotfoundComponent", function() { return NotfoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotfoundComponent = /** @class */ (function () {
    function NotfoundComponent() {
    }
    NotfoundComponent.prototype.ngOnInit = function () {
    };
    NotfoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-notfound',
            template: __webpack_require__(/*! ./notfound.component.html */ "./src/app/views/notfound/notfound.component.html"),
            styles: [__webpack_require__(/*! ./notfound.component.css */ "./src/app/views/notfound/notfound.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NotfoundComponent);
    return NotfoundComponent;
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

module.exports = __webpack_require__(/*! /home/siddharthsingh/Documents/Angular7/BugTracker/frontend/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map