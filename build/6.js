webpackJsonp([6],{

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainviewPageModule", function() { return MainviewPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mainview__ = __webpack_require__(299);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MainviewPageModule = /** @class */ (function () {
    function MainviewPageModule() {
    }
    MainviewPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__mainview__["a" /* MainviewPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__mainview__["a" /* MainviewPage */]),
            ],
        })
    ], MainviewPageModule);
    return MainviewPageModule;
}());

//# sourceMappingURL=mainview.module.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the MainviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MainviewPage = /** @class */ (function () {
    function MainviewPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.socialposts = "facebook";
    }
    MainviewPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MainviewPage');
    };
    MainviewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mainview',template:/*ion-inline-start:"E:\Notus\DIZZM\dizzmApp-n\src\pages\mainview\mainview.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-buttons start>\n\n      <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    </ion-buttons>\n\n    <ion-title>Home</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n \n\n<ion-content>\n\n  <ion-row padding>\n\n    \n\n    <ion-col col-7>\n\n        <figure>\n\n            <svg viewBox="0 0 63.6619772368 63.6619772368">\n\n              <circle class="pie1" cx="31.8309886184" cy="31.8309886184" r="15.9154943092"/>\n\n              <circle class="pie2" cx="31.8309886184" cy="31.8309886184" r="15.9154943092"/>\n\n             </svg>\n\n          </figure>\n\n    </ion-col>\n\n    <ion-col col-5>\n\n      <div class="sociamedia-likes">\n\n        <p>Facebook likes</p>\n\n        <h1 class="fblikes-count">6200</h1>\n\n      </div>\n\n\n\n      <div class="sociamedia-likes">\n\n          <p>Twitter followers</p>\n\n          <h1 class="twtlikes-count">900</h1>\n\n        </div>\n\n    </ion-col>\n\n  </ion-row>\n\n  <ion-row class="content-bg">\n\n      <ion-col col-12>\n\n          <div padding>\n\n              <ion-segment [(ngModel)]="socialposts">\n\n                <ion-segment-button value="facebook">\n\n                  Facebook\n\n                </ion-segment-button>\n\n                <ion-segment-button value="twitter">\n\n                  Twitter\n\n                </ion-segment-button>\n\n              </ion-segment>\n\n            </div>\n\n            \n\n            <div class="social-posts-tweets" padding [ngSwitch]="socialposts">\n\n                      <ion-list class="fb-posts-ctnr" ngSelected="selected" *ngSwitchCase="\'facebook\'">\n\n                          <h4>Facebook posts</h4>\n\n                          <div class="fb-post-item">\n\n                              <ion-item>\n\n                                  <ion-avatar item-start>\n\n                                    <img src="assets/imgs/avatar-finn.png">\n\n                                  </ion-avatar>\n\n                                  <h2>Farhan Bahadur</h2>\n\n                                  <p>March 6 at 9:30 pm</p>\n\n                                </ion-item>\n\n                                <p class="desc">"When your own employees don’t use or support your product..."</p>\n\n                          </div>\n\n          \n\n                          <div class="fb-post-item">\n\n                              <ion-item>\n\n                                  <ion-avatar item-start>\n\n                                    <img src="assets/imgs/avatar-luke.png">\n\n                                  </ion-avatar>\n\n                                  <h2>Rajesh pandurai</h2>\n\n                                  <p>February 12 at 7:30 pm</p>\n\n                                </ion-item>\n\n                                <p class="desc">"When your own employees don’t use or support your product..."</p>\n\n                          </div>\n\n          \n\n                          <div class="fb-post-item">\n\n                              <ion-item>\n\n                                  <ion-avatar item-start>\n\n                                    <img src="assets/imgs/avatar-rey.png">\n\n                                  </ion-avatar>\n\n                                  <h2>Santosh choudhary</h2>\n\n                                  <p>February 9 at 11:15 am</p>\n\n                                </ion-item>\n\n                                <p class="desc">"Support your product, the problem is with the product, not the employees." \n\n                                    not the employees."</p>\n\n                          </div>\n\n          \n\n                          <div class="fb-post-item">\n\n                              <ion-item>\n\n                                  <ion-avatar item-start>\n\n                                    <img src="assets/imgs/avatar-han.png">\n\n                                  </ion-avatar>\n\n                                  <h2>Mohammed Salman</h2>\n\n                                  <p>January 6 at 5:30 pm</p>\n\n                                </ion-item>\n\n                                <p class="desc">"Employees don’t use or support use or support your product..."</p>\n\n                          </div>\n\n                          <button class="m-t-25" color="dizzm-red" round ion-button full>More posts</button>\n\n                        </ion-list>\n\n                   \n\n            \n\n                  \n\n                      <ion-list class="twt-posts-ctnr" *ngSwitchCase="\'twitter\'">\n\n                          <h4>Twitter tweets</h4>\n\n                          <div class="twtr-post-item">\n\n                              <ion-item>\n\n                                  <ion-avatar item-start>\n\n                                    <img src="assets/imgs/avatar-finn.png">\n\n                                  </ion-avatar>\n\n                                  <h2>Farhan Bahadur</h2>\n\n                                  <p>March 6 at 9:30 pm</p>\n\n                                </ion-item>\n\n                                <p class="desc">"When your own employees don’t use or support your product..."</p>\n\n                          </div>\n\n          \n\n                          <div class="twtr-post-item">\n\n                              <ion-item>\n\n                                  <ion-avatar item-start>\n\n                                    <img src="assets/imgs/avatar-luke.png">\n\n                                  </ion-avatar>\n\n                                  <h2>Rajesh pandurai</h2>\n\n                                  <p>February 12 at 7:30 pm</p>\n\n                                </ion-item>\n\n                                <p class="desc">"When your own employees don’t use or support your product..."</p>\n\n                          </div>\n\n          \n\n                          <div class="twtr-post-item">\n\n                              <ion-item>\n\n                                  <ion-avatar item-start>\n\n                                    <img src="assets/imgs/avatar-rey.png">\n\n                                  </ion-avatar>\n\n                                  <h2>Santosh choudhary</h2>\n\n                                  <p>February 9 at 11:15 am</p>\n\n                                </ion-item>\n\n                                <p class="desc">"Support your product, the problem is with the product, not the employees." \n\n                                    not the employees."</p>\n\n                          </div>\n\n          \n\n                          <div class="twtr-post-item">\n\n                              <ion-item>\n\n                                  <ion-avatar item-start>\n\n                                    <img src="assets/imgs/avatar-han.png">\n\n                                  </ion-avatar>\n\n                                  <h2>Mohammed Salman</h2>\n\n                                  <p>January 6 at 5:30 pm</p>\n\n                                </ion-item>\n\n                                <p class="desc">"Employees don’t use or support use or support your product..."</p>\n\n                          </div>\n\n                          <button class="m-t-25" color="dizzm-red" round ion-button full>More posts</button>\n\n                        </ion-list>\n\n                  \n\n            </div>\n\n      </ion-col>\n\n  </ion-row>\n\n</ion-content>'/*ion-inline-end:"E:\Notus\DIZZM\dizzmApp-n\src\pages\mainview\mainview.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], MainviewPage);
    return MainviewPage;
}());

//# sourceMappingURL=mainview.js.map

/***/ })

});
//# sourceMappingURL=6.js.map