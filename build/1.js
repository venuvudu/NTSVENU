webpackJsonp([1],{

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadcontentPageModule", function() { return UploadcontentPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__uploadcontent__ = __webpack_require__(304);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UploadcontentPageModule = /** @class */ (function () {
    function UploadcontentPageModule() {
    }
    UploadcontentPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__uploadcontent__["a" /* UploadcontentPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__uploadcontent__["a" /* UploadcontentPage */]),
            ],
        })
    ], UploadcontentPageModule);
    return UploadcontentPageModule;
}());

//# sourceMappingURL=uploadcontent.module.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadcontentPage; });
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
 * Generated class for the UploadcontentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UploadcontentPage = /** @class */ (function () {
    function UploadcontentPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    UploadcontentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UploadcontentPage');
    };
    UploadcontentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-uploadcontent',template:/*ion-inline-start:"E:\Notus\DIZZM\dizzmApp-n\src\pages\uploadcontent\uploadcontent.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-buttons start>\n\n      <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    </ion-buttons>\n\n    <ion-title>Upload content</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n \n\n<ion-content>\n\n  <ion-row padding>\n\n      <ion-col col-12>\n\n        <h2 class="subtitle">Upload content</h2>\n\n      </ion-col>\n\n      <ion-col col-12>\n\n          <ion-list>\n\n              <ion-item class="border-top-none p-0">\n\n                <ion-input type="text" placeholder="Content title"></ion-input>\n\n              </ion-item>\n\n            \n\n              <ion-item class="p-0 border-none upload-img-label">\n\n                <ion-label class="p-0 ">Upload images / video</ion-label>\n\n              </ion-item>\n\n\n\n              <ion-item class="p-0 upload-file">\n\n                <label class="item item-input"> <input type="file" id="upimgfile" name="uploadfile" ng-model="orderDetails.uploadfile">\n\n                </label>\n\n                <div class="preview-img"> <img id="myImage" width="100" height="100"  size="30" /> </div>\n\n              </ion-item>\n\n\n\n              <ion-item class="border-top-none p-0">\n\n                  <ion-input type="text" placeholder="External source URL"></ion-input>\n\n              </ion-item>\n\n\n\n              <ion-item class="border-top-none p-0">\n\n                  <ion-textarea placeholder="Enter a description"></ion-textarea>\n\n                </ion-item>\n\n                  \n\n            </ion-list>\n\n      </ion-col>\n\n      <ion-col>\n\n        <button medium color="dizzm-red" round ion-button full>Submit</button>\n\n      </ion-col>\n\n    </ion-row>\n\n</ion-content>'/*ion-inline-end:"E:\Notus\DIZZM\dizzmApp-n\src\pages\uploadcontent\uploadcontent.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], UploadcontentPage);
    return UploadcontentPage;
}());

//# sourceMappingURL=uploadcontent.js.map

/***/ })

});
//# sourceMappingURL=1.js.map