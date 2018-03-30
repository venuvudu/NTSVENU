webpackJsonp([8],{

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditprofilePageModule", function() { return EditprofilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__editprofile__ = __webpack_require__(283);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EditprofilePageModule = /** @class */ (function () {
    function EditprofilePageModule() {
    }
    EditprofilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__editprofile__["a" /* EditprofilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__editprofile__["a" /* EditprofilePage */]),
            ],
        })
    ], EditprofilePageModule);
    return EditprofilePageModule;
}());

//# sourceMappingURL=editprofile.module.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditprofilePage; });
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
 * Generated class for the EditprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditprofilePage = /** @class */ (function () {
    function EditprofilePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.editprofiletabs = "updateprofile";
    }
    EditprofilePage.prototype.backtoProfile = function () {
        this.navCtrl.setRoot('ProfilePage');
    };
    EditprofilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditprofilePage');
    };
    EditprofilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-editprofile',template:/*ion-inline-start:"E:\Notus\DIZZM\dizzmApp-n\src\pages\editprofile\editprofile.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>Edit profile</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n    <ion-row padding>\n\n        <ion-col col-12>\n\n          <h2 class="subtitle">Profile</h2>\n\n        </ion-col>\n\n        <ion-col col-12>\n\n            <div class="editprofile-tabs">\n\n                <ion-segment [(ngModel)]="editprofiletabs">\n\n                  <ion-segment-button value="updateprofile">\n\n                    Update profile\n\n                  </ion-segment-button>\n\n                  <ion-segment-button value="changepassword">\n\n                    Change password\n\n                  </ion-segment-button>\n\n                </ion-segment>\n\n              </div>\n\n              \n\n              <div class="editprofile-ctnr" [ngSwitch]="editprofiletabs">\n\n\n\n                  <ion-list ngSelected="selected" *ngSwitchCase="\'updateprofile\'">\n\n                      \n\n                      <ion-item class="p-0 border-none upload-photo">\n\n                          <ion-label class="p-0 ">Upload photo</ion-label>\n\n                        </ion-item>\n\n          \n\n                      <ion-item class="p-0 upload-file">\n\n                          <label class="item item-input"> <input type="file" id="profileimgfile" name="uploadfile" ng-model="orderDetails.uploadfile">\n\n                          </label>\n\n                          <div class="preview-img"> <img id="profileImg" src="assets/imgs/user-profile.jpg" /> </div>\n\n                       </ion-item>\n\n\n\n                     <ion-item class="border-top-none p-0">\n\n                        <ion-input type="text" placeholder="Company name"></ion-input>\n\n                      </ion-item>\n\n\n\n                      <ion-item class="border-top-none p-0">\n\n                          <ion-input type="text" placeholder="Contact number"></ion-input>\n\n                      </ion-item>\n\n\n\n                      <ion-item class="border-top-none p-0">\n\n                          <ion-input type="text" placeholder="Alternate Contact 1"></ion-input>\n\n                      </ion-item>\n\n\n\n                      <ion-item class="border-top-none p-0">\n\n                          <ion-input type="text" placeholder="Alternate Contact 2"></ion-input>\n\n                      </ion-item>\n\n\n\n                      <ion-item class="border-top-none p-0">\n\n                          <ion-input type="text" placeholder="Alternate Contact 3"></ion-input>\n\n                      </ion-item>\n\n                    \n\n                      <ion-item class="border-top-none p-0">\n\n                          <ion-input type="text" placeholder="Email"></ion-input>\n\n                      </ion-item>\n\n\n\n                      <button class="m-t-15" medium color="dizzm-red" round ion-button full>Submit</button>\n\n                     </ion-list>\n\n\n\n                     \n\n              \n\n                    \n\n                        <ion-list class="twt-posts-ctnr" *ngSwitchCase="\'changepassword\'">\n\n                            <ion-item class="border-top-none p-0">\n\n                                <ion-input type="password" placeholder="Current password"></ion-input>\n\n                            </ion-item>\n\n        \n\n                            <ion-item class="border-top-none p-0">\n\n                              <ion-input type="password" placeholder="New password"></ion-input>\n\n                            </ion-item>\n\n\n\n                            <ion-item class="border-top-none p-0">\n\n                                <ion-input type="password" placeholder="Confirm password"></ion-input>\n\n                              </ion-item>\n\n\n\n                            <button class="m-t-25" color="dizzm-red" round ion-button full> Submit </button>\n\n                          </ion-list>\n\n                    \n\n              </div>\n\n        </ion-col>\n\n\n\n      </ion-row>\n\n  </ion-content>\n\n'/*ion-inline-end:"E:\Notus\DIZZM\dizzmApp-n\src\pages\editprofile\editprofile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], EditprofilePage);
    return EditprofilePage;
}());

//# sourceMappingURL=editprofile.js.map

/***/ })

});
//# sourceMappingURL=8.js.map