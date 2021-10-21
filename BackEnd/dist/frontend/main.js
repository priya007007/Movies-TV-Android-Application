(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+qSQ":
/*!************************************************************!*\
  !*** ./src/app/popular-movies/popular-movies.component.ts ***!
  \************************************************************/
/*! exports provided: PopularMoviesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopularMoviesComponent", function() { return PopularMoviesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_hw8_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service-hw8.service */ "Lsth");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




function PopularMoviesComponent_ngb_carousel_0_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-hovercomp", 5);
} if (rf & 2) {
    const single_pack_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("poster", single_pack_r3.poster)("id", single_pack_r3.id)("media_type", single_pack_r3.media_type)("title", single_pack_r3.title);
} }
function PopularMoviesComponent_ngb_carousel_0_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PopularMoviesComponent_ngb_carousel_0_1_ng_template_0_Template, 1, 4, "ng-template", 4);
} }
function PopularMoviesComponent_ngb_carousel_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-carousel", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PopularMoviesComponent_ngb_carousel_0_1_Template, 1, 0, undefined, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showNavigationArrows", ctx_r0.showNavigationArrows)("showNavigationIndicators", ctx_r0.showNavigationIndicators)("interval", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.resp);
} }
function PopularMoviesComponent_ngb_carousel_1_1_ng_template_0_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-hovercomp", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const each_card_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("poster", each_card_r10.poster)("id", each_card_r10.id)("media_type", each_card_r10.media_type)("title", each_card_r10.title);
} }
function PopularMoviesComponent_ngb_carousel_1_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PopularMoviesComponent_ngb_carousel_1_1_ng_template_0_div_3_Template, 2, 4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const single_page_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", single_page_r7);
} }
function PopularMoviesComponent_ngb_carousel_1_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PopularMoviesComponent_ngb_carousel_1_1_ng_template_0_Template, 4, 1, "ng-template", 7);
} }
function PopularMoviesComponent_ngb_carousel_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-carousel", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PopularMoviesComponent_ngb_carousel_1_1_Template, 1, 0, undefined, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showNavigationArrows", ctx_r1.showNavigationArrows)("showNavigationIndicators", ctx_r1.showNavigationIndicators)("interval", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.send_data);
} }
// import {type} from './home01Component/home01.component.html'
// import {Message} from 
class PopularMoviesComponent {
    constructor(service, observer, router) {
        this.service = service;
        this.observer = observer;
        this.router = router;
        this.mobile = false;
        this.showNavigationArrows = true;
        this.showNavigationIndicators = false;
    }
    ngOnInit() {
        (this.observer.observe('(max-width: 700px)').subscribe((result) => {
            if (result.matches) {
                this.mobile = true;
            }
        }));
        if (this.type === 'continuewatching') {
            let t = JSON.parse(localStorage.getItem("continuewatching"));
            t = t.reverse();
            this.resp = t;
            if (this.mobile !== true) {
                this.showNavigationIndicators = true;
                this.send_data = [];
                var j = -1;
                for (var i = 0; i < t.length; i++) {
                    if (i % 6 == 0) {
                        j++;
                        // console.log("see where error is coming from","i=",i,t[i]);
                        this.send_data[j] = [];
                        this.send_data[j].push(t[i]);
                    }
                    else {
                        this.send_data[j].push(t[i]);
                    }
                }
                // console.log("cont watching final", this.send_data);
            }
        }
        else if (this.type == 'POPULAR') {
            this.media = "movie";
            {
                this.service.PopularMovies().subscribe((response) => {
                    this.resp = response;
                    let t = response;
                    if (this.mobile !== true) {
                        this.showNavigationIndicators = true;
                        this.send_data = [];
                        var j = -1;
                        for (var i = 0; i < t.length; i++) {
                            if (i % 6 == 0) {
                                j++;
                                this.send_data[j] = [];
                                this.send_data[j].push(t[i]);
                            }
                            else {
                                this.send_data[j].push(t[i]);
                            }
                        }
                        // console.log("---", this.send_data);
                    }
                }, (error) => { console.log("ERRORs", error); });
            }
            ;
        }
        else if (this.type == 'TopMovies') {
            this.media = "movie";
            this.service.TopRatedMovies().subscribe((response) => {
                this.resp = response;
                let t = response;
                if (this.mobile !== true) {
                    this.showNavigationIndicators = true;
                    this.send_data = [];
                    var j = -1;
                    for (var i = 0; i < t.length; i++) {
                        if (i % 6 == 0) {
                            j++;
                            this.send_data[j] = [];
                            this.send_data[j].push(t[i]);
                        }
                        else {
                            this.send_data[j].push(t[i]);
                        }
                    }
                    //  console.log("---", this.send_data);
                }
            }, (error) => { console.log("ERRORs", error); });
        }
        else if (this.type == 'TrendingMovies') {
            this.media = "movie";
            this.service.TrendingMovies().subscribe((response) => {
                this.resp = response;
                let t = response;
                if (this.mobile !== true) {
                    this.showNavigationIndicators = true;
                    this.send_data = [];
                    var j = -1;
                    for (var i = 0; i < t.length; i++) {
                        if (i % 6 == 0) {
                            j++;
                            this.send_data[j] = [];
                            this.send_data[j].push(t[i]);
                        }
                        else {
                            this.send_data[j].push(t[i]);
                        }
                    }
                    //  console.log("---", this.send_data);
                }
            }, (error) => { console.log("ERRORs", error); });
        }
        else if (this.type == 'popularTV') {
            this.media = "tv";
            this.service.PopularTV().subscribe((response) => {
                this.resp = response;
                let t = response;
                if (this.mobile !== true) {
                    this.showNavigationIndicators = true;
                    this.send_data = [];
                    var j = -1;
                    for (var i = 0; i < t.length; i++) {
                        if (i % 6 == 0) {
                            j++;
                            this.send_data[j] = [];
                            this.send_data[j].push(t[i]);
                        }
                        else {
                            this.send_data[j].push(t[i]);
                        }
                    }
                    //    console.log("---", this.send_data);
                }
            }, (error) => { console.log("ERRORs", error); });
        }
        else if (this.type == 'TVTopRated') {
            this.media = "tv";
            this.service.TVTopRated().subscribe((response) => {
                this.resp = response;
                let t = response;
                if (this.mobile !== true) {
                    this.showNavigationIndicators = true;
                    this.send_data = [];
                    var j = -1;
                    for (var i = 0; i < t.length; i++) {
                        if (i % 6 == 0) {
                            j++;
                            this.send_data[j] = [];
                            this.send_data[j].push(t[i]);
                        }
                        else {
                            this.send_data[j].push(t[i]);
                        }
                    }
                    //   console.log("---", this.send_data);
                }
            }, (error) => { console.log("ERRORs", error); });
        }
        else if (this.type == 'TVtrending') {
            this.media = "tv";
            this.service.TVtrending().subscribe((response) => {
                this.resp = response;
                let t = response;
                //  console.log("t",t);
                if (this.mobile !== true) {
                    this.showNavigationIndicators = true;
                    this.send_data = [];
                    var j = -1;
                    for (var i = 0; i < t.length; i++) {
                        if (i % 6 == 0) {
                            j++;
                            this.send_data[j] = [];
                            this.send_data[j].push(t[i]);
                        }
                        else {
                            this.send_data[j].push(t[i]);
                        }
                    }
                    //   console.log("---", this.send_data);
                }
            }, (error) => { console.log("ERRORs", error); });
        }
    }
    routeToPage(id, media) {
        console.log("routed here", "this.media", media, "id = ", id);
        if (media === "tv") {
            document.documentElement.scrollTop = 0;
            this.router.navigate(['/watch/tv/', id]);
        }
        else if (media === "movie") {
            document.documentElement.scrollTop = 0;
            this.router.navigate(['/watch/movie/', id]);
        }
    }
}
PopularMoviesComponent.ɵfac = function PopularMoviesComponent_Factory(t) { return new (t || PopularMoviesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_hw8_service__WEBPACK_IMPORTED_MODULE_1__["ServiceHw8Service"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
PopularMoviesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PopularMoviesComponent, selectors: [["app-popular-movies"]], inputs: { type: "type" }, decls: 2, vars: 2, consts: [["class", "my-carousal-navigators", 3, "showNavigationArrows", "showNavigationIndicators", "interval", 4, "ngIf"], ["class", "my-no-wrap", 3, "showNavigationArrows", "showNavigationIndicators", "interval", 4, "ngIf"], [1, "my-carousal-navigators", 3, "showNavigationArrows", "showNavigationIndicators", "interval"], [4, "ngFor", "ngForOf"], ["ngbSlide", "", "class", "col-xs-8"], [3, "poster", "id", "media_type", "title"], [1, "my-no-wrap", 3, "showNavigationArrows", "showNavigationIndicators", "interval"], ["ngbSlide", ""], [1, "my-warp-around"], [1, "container"], [1, "row"], ["class", "my-display-card  col-sm-12 col-md-2 ", 4, "ngFor", "ngForOf"], [1, "my-display-card", "col-sm-12", "col-md-2"], [1, "card", "border-0", "box", "card-my", "text-white", "bg-dark", "mb-3", 3, "poster", "id", "media_type", "title"]], template: function PopularMoviesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PopularMoviesComponent_ngb_carousel_0_Template, 2, 4, "ngb-carousel", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PopularMoviesComponent_ngb_carousel_1_Template, 2, 4, "ngb-carousel", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.mobile);
    } }, styles: ["h1[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{\r\n    color: aliceblue;\r\n}\r\n\r\n.carousel_indicators[_ngcontent-%COMP%]{\r\n    margin-top: -40px;\r\n    \r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n.card-my[_ngcontent-%COMP%]:hover {\r\n    transform: translate3d(0,-1px,0) scale(1.1);\r\n    transition: all .1s ease-in-out;\r\n\r\n  }\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n .carousel-inner{\r\n    overflow: visible!important;\r\n}\r\n\r\n\r\n\r\n .carousel-indicators{  \r\n    bottom: -40px !important;\r\n}\r\n\r\nngb-carousel[_ngcontent-%COMP%]:focus{  \r\n    outline: none;\r\n}\r\n\r\n.my-image-card-size[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n\r\n}\r\n\r\nimg[_ngcontent-%COMP%]{\r\n    z-index: -100;\r\n}\r\n\r\n .try-black-gradient{\r\n    background-image: linear-gradient(transparent, rgba(0,0,0,0.3) 45%, rgba(0,0,0,1) 80%);\r\n    height: 100%;\r\n    width: 100%;\r\n    display: inline-block;\r\n    \r\n    color: aliceblue;\r\n    \r\n    \r\n}\r\n\r\n\r\n\r\n\r\n\r\n .carousel-item:hover{\r\n      height: 100%;\r\n  }\r\n\r\n\r\n\r\n.box[_ngcontent-%COMP%]{\r\n      box-shadow: 0px 0px 25px 1px hsla(233,81.1%, 20.4%,0.5);\r\n  }\r\n\r\n.bg-overlay[_ngcontent-%COMP%]{\r\n      background-image:  linear-gradient(transparent, rgba(0,0,0,0.3) 45%, rgba(0,0,0,1) 80%);\r\n      max-height: 100%;\r\n      min-width: 100%;\r\n    }\r\n\r\n.my-image-card-phone-size[_ngcontent-%COMP%]{\r\n        max-height: 400px;\r\n        min-width: 270px;\r\n    \r\n    }\r\n\r\n.my-image-card-size[_ngcontent-%COMP%]:after{\r\n        background-image:  linear-gradient(transparent, rgba(0,0,0,0.3) 45%, rgba(0,0,0,1) 80%);\r\n        position: absolute;\r\n        top: 0;\r\n        bottom: 0;\r\n        left: 0;\r\n        right: 0;\r\n        content: '';\r\n        z-index: 1;\r\n        opacity: 1;\r\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvcHVsYXItbW92aWVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpQkFBaUI7O0FBRXJCOztBQUNBOzs7R0FHRzs7QUFDSDs7OztHQUlHOztBQUVIOzs7OztHQUtHOztBQUVIO0lBQ0ksMkNBQTJDO0lBQzNDLCtCQUErQjs7RUFFakM7O0FBR0Y7O0dBRUc7O0FBRUg7Ozs7RUFJRTs7QUFDRjs7SUFFSTs7QUFFSjtJQUNJLDJCQUEyQjtBQUMvQjs7QUFDQSx5QkFBeUI7O0FBQ3pCO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBLHFCQUFxQixzQkFBc0I7SUFDdkMsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsb0JBQW9COztBQUV4Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBR0E7SUFDSSxzRkFBc0Y7SUFDdEYsWUFBWTtJQUNaLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsZ0JBQWdCO0FBQ3BCOztBQUVBOztHQUVHOztBQUNIOzs7Ozs7Ozs7OztNQVdNOztBQUVKO01BQ0ksWUFBWTtFQUNoQjs7QUFHQTs7Ozs7S0FLRzs7QUFFSDtNQUNJLHVEQUF1RDtFQUMzRDs7QUFDRDtNQUNLLHVGQUF1RjtNQUN2RixnQkFBZ0I7TUFDaEIsZUFBZTtJQUNqQjs7QUFHRTtRQUNFLGlCQUFpQjtRQUNqQixnQkFBZ0I7O0lBRXBCOztBQUdBO1FBQ0ksdUZBQXVGO1FBQ3ZGLGtCQUFrQjtRQUNsQixNQUFNO1FBQ04sU0FBUztRQUNULE9BQU87UUFDUCxRQUFRO1FBQ1IsV0FBVztRQUNYLFVBQVU7UUFDVixVQUFVO01BQ1oiLCJmaWxlIjoicG9wdWxhci1tb3ZpZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxLHB7XHJcbiAgICBjb2xvcjogYWxpY2VibHVlO1xyXG59XHJcblxyXG4uY2Fyb3VzZWxfaW5kaWNhdG9yc3tcclxuICAgIG1hcmdpbi10b3A6IC00MHB4O1xyXG4gICAgXHJcbn1cclxuLyogOjpuZy1kZWVwLmNhcmR7XHJcbiAgICB0cmFuc2Zvcm06c2NhbGUoMS4xKTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmVlbjtcclxufSAqL1xyXG4vKiAubXktaW1nLWNsYXNze1xyXG4gICAgbWF4LWhlaWdodDogMjYwcHg7XHJcbiAgICB3aWR0aDoxMDAlIDtcclxuICAgIHotaW5kZXg6IDE7XHJcbn0gKi9cclxuXHJcbi8qIC5jYXJkLW15e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjFzIGVhc2UtaW4tb3V0O1xyXG4gICAgYmFja2dyb3VuZC1jbGlwOiBpbmhlcml0O1xyXG5cclxufSAqL1xyXG5cclxuLmNhcmQtbXk6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLC0xcHgsMCkgc2NhbGUoMS4xKTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuMXMgZWFzZS1pbi1vdXQ7XHJcblxyXG4gIH1cclxuICBcclxuXHJcbi8qIC5jYXJkLW15OmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50LCByZ2JhKDAsMCwwLDAuMykgNDUlLCByZ2JhKDAsMCwwLDEpIDgwJSk7XHJcbn0gKi9cclxuXHJcbi8qIDo6bmctZGVlcC5teS1pbWctY2xhc3M6aG92ZXJ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbiAgICBcclxufSovXHJcbi8qIC5teS1pbWctY2xhc3M6aG92ZXJ7XHJcbmJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCwgcmdiYSgwLDAsMCwwLjMpIDQ1JSwgcmdiYSgwLDAsMCwxKSA4MCUpO1xyXG59ICAqL1xyXG5cclxuOjpuZy1kZWVwLmNhcm91c2VsLWlubmVye1xyXG4gICAgb3ZlcmZsb3c6IHZpc2libGUhaW1wb3J0YW50O1xyXG59XHJcbi8qIHB1bGwgZG93biBpbmRpY2F0b3JzICovXHJcbjo6bmctZGVlcC5jYXJvdXNlbC1pbmRpY2F0b3JzeyAgXHJcbiAgICBib3R0b206IC00MHB4ICFpbXBvcnRhbnQ7XHJcbn0gXHJcblxyXG5uZ2ItY2Fyb3VzZWw6Zm9jdXN7ICAvKiByZW1vdmVzIHdoaXRlIGxpbmUqL1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLm15LWltYWdlLWNhcmQtc2l6ZXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcblxyXG59XHJcblxyXG5pbWd7XHJcbiAgICB6LWluZGV4OiAtMTAwO1xyXG59XHJcblxyXG5cclxuOjpuZy1kZWVwLnRyeS1ibGFjay1ncmFkaWVudHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCwgcmdiYSgwLDAsMCwwLjMpIDQ1JSwgcmdiYSgwLDAsMCwxKSA4MCUpO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAvKiB6LWluZGV4OiAxMDAwOyAqL1xyXG4gICAgY29sb3I6IGFsaWNlYmx1ZTtcclxuICAgIC8qIHBvc2l0aW9uOiByZWxhdGl2ZTsqL1xyXG4gICAgLyogb3BhY2l0eTogMTsgKi9cclxufSBcclxuXHJcbi8qIGltZ3tcclxuICAgIHotaW5kZXg6IC0xO1xyXG59ICovXHJcbi8qIFxyXG4gOjpuZy1kZWVwLmNhcm91c2VsLWl0ZW06YWZ0ZXIge1xyXG4gICAgY29udGVudDpcIlwiO1xyXG4gICAgZGlzcGxheTpibG9jaztcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgdG9wOjA7XHJcbiAgICBib3R0b206MDtcclxuICAgIGxlZnQ6MDtcclxuICAgIHJpZ2h0OjA7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQsIHJnYmEoMCwwLDAsMC4zKSA0NSUsIHJnYmEoMCwwLDAsMSkgODAlKTtcclxuICB9ICAqL1xyXG5cclxuICA6Om5nLWRlZXAuY2Fyb3VzZWwtaXRlbTpob3ZlcntcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuXHJcblxyXG4gIC8qIC5jYXJkLWltZy1vdmVybGF5e1xyXG4gICAgICBwYWRkaW5nOiAxMCU7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiA1JTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgei1pbmRleDogMTA7XHJcbiAgfSAqL1xyXG5cclxuICAuYm94e1xyXG4gICAgICBib3gtc2hhZG93OiAwcHggMHB4IDI1cHggMXB4IGhzbGEoMjMzLDgxLjElLCAyMC40JSwwLjUpO1xyXG4gIH1cclxuIC5iZy1vdmVybGF5e1xyXG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiAgbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50LCByZ2JhKDAsMCwwLDAuMykgNDUlLCByZ2JhKDAsMCwwLDEpIDgwJSk7XHJcbiAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgIG1pbi13aWR0aDogMTAwJTtcclxuICAgIH0gXHJcblxyXG4gIFxyXG4gICAgICAubXktaW1hZ2UtY2FyZC1waG9uZS1zaXple1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDQwMHB4O1xyXG4gICAgICAgIG1pbi13aWR0aDogMjcwcHg7XHJcbiAgICBcclxuICAgIH1cclxuXHJcblxyXG4gICAgLm15LWltYWdlLWNhcmQtc2l6ZTphZnRlcntcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiAgbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50LCByZ2JhKDAsMCwwLDAuMykgNDUlLCByZ2JhKDAsMCwwLDEpIDgwJSk7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIH0iXX0= */"] });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\97150\Desktop\hw8part2\FrontEnd\src\main.ts */"zUnb");


/***/ }),

/***/ "76GK":
/*!********************************************!*\
  !*** ./src/app/mylist/mylist.component.ts ***!
  \********************************************/
/*! exports provided: MylistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MylistComponent", function() { return MylistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _hovercomp_hovercomp_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hovercomp/hovercomp.component */ "lrS5");





function MylistComponent_div_0_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 3);
} }
function MylistComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No Items Found in Watchlist.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MylistComponent_div_0_div_1_div_3_Template, 1, 0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.mob0);
} }
function MylistComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MylistComponent_div_0_div_1_Template, 4, 1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.ifTrue);
} }
function MylistComponent_div_1_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 5);
} }
function MylistComponent_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No Items Found in Watchlist.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MylistComponent_div_1_div_1_div_3_Template, 1, 0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.lap0);
} }
function MylistComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MylistComponent_div_1_div_1_Template, 4, 1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.ifTrue);
} }
function MylistComponent_div_2_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MylistComponent_div_2_div_1_div_5_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const card_r10 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r11.routeToPage(card_r10.id, card_r10.media_type); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const card_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", card_r10.poster, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](card_r10.title);
} }
function MylistComponent_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "My WatchList");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MylistComponent_div_2_div_1_div_5_Template, 7, 2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.l);
} }
function MylistComponent_div_2_div_2_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-hovercomp", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const card_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("poster", card_r15.poster)("id", card_r15.id)("media_type", card_r15.media_type)("title", card_r15.title);
} }
function MylistComponent_div_2_div_2_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 22);
} }
function MylistComponent_div_2_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "My WatchList");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MylistComponent_div_2_div_2_div_6_Template, 2, 4, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MylistComponent_div_2_div_2_div_7_Template, 1, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r8.l);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.lap1);
} }
function MylistComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MylistComponent_div_2_div_1_Template, 6, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MylistComponent_div_2_div_2_Template, 8, 2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.mobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.mobile);
} }
class MylistComponent {
    constructor(observer, router) {
        this.observer = observer;
        this.router = router;
        this.ifTrue = true;
        this.mobile = false;
        this.isHover = false;
        this.mob0 = false;
        this.lap0 = false;
        this.lap1 = false;
    }
    ngOnInit() {
        // let key  = "mylist"
        // localStorage.setItem(key, 'New Value');
        (this.observer.observe('(max-width: 700px)').subscribe((result) => {
            if (result.matches) {
                this.mobile = true;
            }
        }));
        if (localStorage.getItem("watchlist") === null) {
            this.ifTrue = true;
            console.log("watchlist is empty");
        }
        else {
            this.l = JSON.parse(localStorage.getItem("watchlist"));
            if (this.l.length === 0) {
                console.log("it is empty array");
                this.ifTrue = true;
            }
            else {
                this.ifTrue = false;
                this.l = this.l.reverse();
                console.log("l", this.l);
                console.log("watchlist doesnt seem to be empty");
            }
            if (this.l.length === 0) {
                this.lap0 = true;
                this.mob0 = true;
                this.lap1 = false;
            }
            if (this.l.length < 6 && this.l.length > 0) {
                this.lap1 = true;
                this.lap0 = false;
                this.mob0 = false;
            }
        }
    }
    routeToPage(id, media) {
        if (media === "movie") {
            this.router.navigate(['/watch/movie/', id]);
        }
        else {
            this.router.navigate(['/watch/tv/', id]);
            console.log("movie", media);
            console.log("id", id);
        }
    }
}
MylistComponent.ɵfac = function MylistComponent_Factory(t) { return new (t || MylistComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
MylistComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MylistComponent, selectors: [["app-mylist"]], decls: 3, vars: 3, consts: [[4, "ngIf"], [1, "my_text_center"], ["style", "height: 400px;", "class", "dummy", 4, "ngIf"], [1, "dummy", 2, "height", "400px"], ["style", "height: 550px;", "class", "dummy_for_desktop", 4, "ngIf"], [1, "dummy_for_desktop", 2, "height", "550px"], ["class", "container", 4, "ngIf"], ["class", "my-warp-around", 4, "ngIf"], [1, "container"], [1, "row"], [1, "my_text_phone"], ["class", "col-md-2 col-sm-4", 4, "ngFor", "ngForOf"], [1, "col-md-2", "col-sm-4"], [1, "my-card", "center-it", 3, "click"], ["alt", "", 1, "my-img-class", "my-mobile-padding", 3, "src"], [1, "bg"], [1, "carousel-caption", "text-left"], [1, "my-warp-around"], ["class", "my-display-card  col-sm-12 col-md-2 ", 4, "ngFor", "ngForOf"], ["style", "height: 270px;", "class", "desk_has", 4, "ngIf"], [1, "my-display-card", "col-sm-12", "col-md-2"], [1, "card", "border-0", "box", "card-my", "text-white", "bg-dark", "mb-3", 3, "poster", "id", "media_type", "title"], [1, "desk_has", 2, "height", "270px"]], template: function MylistComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MylistComponent_div_0_Template, 2, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MylistComponent_div_1_Template, 2, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MylistComponent_div_2_Template, 3, 2, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.mobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.ifTrue);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _hovercomp_hovercomp_component__WEBPACK_IMPORTED_MODULE_4__["HovercompComponent"]], styles: [".my_text_center[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    margin-top:30px ;\r\n}\r\n\r\n.my_text_phone[_ngcontent-%COMP%]{\r\n   padding-left: 20px;\r\n}\r\n\r\n.my-img-class[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n}\r\n\r\n.my-card[_ngcontent-%COMP%]{\r\n    padding-top: 50px;\r\n}\r\n\r\n.my-mobile-padding[_ngcontent-%COMP%]{\r\n    height: 400px;\r\n    width: 70%;\r\n}\r\n\r\n.center-it[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n}\r\n\r\nbody[_ngcontent-%COMP%]{\r\n    height: 100%;\r\n}\r\n\r\n.card-my[_ngcontent-%COMP%]:hover {\r\n    transform: translate3d(0,-1px,0) scale(1.1);\r\n    transition: all .1s ease-in-out;\r\n\r\n  }\r\n\r\n.bg[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 100%;\r\n    background-image: linear-gradient(transparent, rgba(0,0,0,0.3) 45%, rgba(0,0,0,1) 80%);\r\n    z-index: 1000;\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 15%;\r\n    right: 0;\r\n    \r\n    height: 400px;\r\n    width: 70%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15bGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtHQUNHLGtCQUFrQjtBQUNyQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBR0E7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksMkNBQTJDO0lBQzNDLCtCQUErQjs7RUFFakM7O0FBR0Y7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHNGQUFzRjtJQUN0RixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxTQUFTO0lBQ1QsUUFBUTtJQUNSLFlBQVk7SUFDWixhQUFhO0lBQ2IsVUFBVTtBQUNkIiwiZmlsZSI6Im15bGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm15X3RleHRfY2VudGVye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDozMHB4IDtcclxufVxyXG5cclxuLm15X3RleHRfcGhvbmV7XHJcbiAgIHBhZGRpbmctbGVmdDogMjBweDtcclxufVxyXG5cclxuLm15LWltZy1jbGFzc3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubXktY2FyZHtcclxuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xyXG59XHJcblxyXG4ubXktbW9iaWxlLXBhZGRpbmd7XHJcbiAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgd2lkdGg6IDcwJTtcclxufVxyXG5cclxuLmNlbnRlci1pdHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbmJvZHl7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5jYXJkLW15OmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwtMXB4LDApIHNjYWxlKDEuMSk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjFzIGVhc2UtaW4tb3V0O1xyXG5cclxuICB9XHJcblxyXG5cclxuLmJne1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQsIHJnYmEoMCwwLDAsMC4zKSA0NSUsIHJnYmEoMCwwLDAsMSkgODAlKTtcclxuICAgIHotaW5kZXg6IDEwMDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAxNSU7XHJcbiAgICByaWdodDogMDtcclxuICAgIC8qIHRvcDogMDsgKi9cclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICB3aWR0aDogNzAlO1xyXG59XHJcblxyXG4gICJdfQ== */"] });


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "Lsth":
/*!****************************************!*\
  !*** ./src/app/service-hw8.service.ts ***!
  \****************************************/
/*! exports provided: ServiceHw8Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceHw8Service", function() { return ServiceHw8Service; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class ServiceHw8Service {
    constructor(http) {
        this.http = http;
    } //CH
    TypeHeadData(name) {
        console.log("name--works");
        return this.http.get(`http://localhost:8080/Typehead/${name}`);
    }
    getDataSlideshowMovie() {
        return this.http.get('http://localhost:8080/slideshow');
    }
    //////////////////////////////////////////////////////
    PopularMovies() {
        return this.http.get(`http://localhost:8080/popularMovies`);
    }
    TopRatedMovies() {
        return this.http.get(`http://localhost:8080/TopRatedMovies`);
    }
    TrendingMovies() {
        return this.http.get(`http://localhost:8080/TrendingMovies`);
    }
    PopularTV() {
        return this.http.get(`http://localhost:8080/PopularTVshows`);
    }
    TVTopRated() {
        return this.http.get(`http://localhost:8080/TopRatedTV`);
    }
    TVtrending() {
        return this.http.get(`http://localhost:8080/TVTrending`);
    }
    ////////////////////////////////////////
    getVideoMovieDetails(id) {
        return this.http.get(`http://localhost:8080/MovieVideoDetails/${id}`);
    }
    getMoviePosterPath(id) {
        return this.http.get(`http://localhost:8080/MoviePoster_path/${id}`);
    }
    getDataMovieDetails(id) {
        //console.log("service",id);  
        //let para = new HttpParams().set('id',id)
        //console.log("para",para);
        return this.http.get(`http://localhost:8080/MovieDetailsServer/${id}`);
    }
    get_Movie_Cast_Details(id) {
        return this.http.get(`http://localhost:8080/Movie_Cast_Details/${id}`);
    }
    get_Movie_Review_List(id) {
        return this.http.get(`http://localhost:8080/Movie_Review_List/${id}`);
    }
    get_Recommended_Movies(id) {
        return this.http.get(`http://localhost:8080/get_Recommended_Movies/${id}`);
    }
    Get_Similar_Movies(id) {
        return this.http.get(`http://localhost:8080/Get_Similar_Movies/${id}`);
    }
    /////////////////////////////////////////////
    TVyoutube(id) {
        return this.http.get(`http://localhost:8080/TVvideoDetails/${id}`);
    }
    TVdetails(id) {
        return this.http.get(`http://localhost:8080/TVdetails/${id}`);
    }
    tv_posterPath(id) {
        return this.http.get(`http://localhost:8080/TVposter_path/${id}`);
    }
    tv_CastList(id) {
        return this.http.get(`http://localhost:8080/TV_Cast_Details/${id}`);
    }
    tv_reviews(id) {
        return this.http.get(`http://localhost:8080/TV_Review_List/${id}`);
    }
    tv_reccomend(id) {
        return this.http.get(`http://localhost:8080/get_Recommended_TV/${id}`);
    }
    tv_similar(id) {
        return this.http.get(`http://localhost:8080/Get_Similar_tv/${id}`);
    }
    //////////////////////////////////
    each_cast_model(castid) {
        return this.http.get(`http://localhost:8080/each_cast_model/${castid}`);
    }
    each_cast_socials(castid) {
        return this.http.get(`http://localhost:8080/each_cast_socials/${castid}`);
    }
}
ServiceHw8Service.ɵfac = function ServiceHw8Service_Factory(t) { return new (t || ServiceHw8Service)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ServiceHw8Service.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ServiceHw8Service, factory: ServiceHw8Service.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "MB8E":
/*!********************************************!*\
  !*** ./src/app/home01/home01.component.ts ***!
  \********************************************/
/*! exports provided: Home01Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Home01Component", function() { return Home01Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_hw8_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service-hw8.service */ "Lsth");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _popular_movies_popular_movies_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../popular-movies/popular-movies.component */ "+qSQ");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");







function Home01Component_div_0_3_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function Home01Component_div_0_3_ng_template_0_Template_div_mouseover_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r7.isHover = true; })("mouseleave", function Home01Component_div_0_3_ng_template_0_Template_div_mouseleave_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r9.isHover = false; })("click", function Home01Component_div_0_3_ng_template_0_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const single_page_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r10.routeToPage(single_page_r5.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const single_page_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", single_page_r5.backdrop_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](single_page_r5.title);
} }
function Home01Component_div_0_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Home01Component_div_0_3_ng_template_0_Template, 5, 2, "ng-template", 9);
} }
function Home01Component_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ngb-carousel", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, Home01Component_div_0_3_Template, 1, 0, undefined, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showNavigationIndicators", ctx_r0.allow && !ctx_r0.mobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.slideshow_data);
} }
function Home01Component_div_1_3_ng_template_0_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const single_page_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](single_page_r14.title);
} }
function Home01Component_div_1_3_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function Home01Component_div_1_3_ng_template_0_Template_div_mouseover_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r18.isHover = true; })("mouseleave", function Home01Component_div_1_3_ng_template_0_Template_div_mouseleave_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r20.isHover = false; })("click", function Home01Component_div_1_3_ng_template_0_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const single_page_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r21.routeToPage(single_page_r14.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Home01Component_div_1_3_ng_template_0_div_2_Template, 3, 1, "div", 14);
} if (rf & 2) {
    const single_page_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", single_page_r14.backdrop_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r15.isHover);
} }
function Home01Component_div_1_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Home01Component_div_1_3_ng_template_0_Template, 3, 2, "ng-template", 9);
} }
function Home01Component_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ngb-carousel", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, Home01Component_div_1_3_Template, 1, 0, undefined, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showNavigationIndicators", ctx_r1.allow && !ctx_r1.mobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.slideshow_data);
} }
function Home01Component_h1_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Continue Watching");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function Home01Component_app_popular_movies_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-popular-movies", 6);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", "continuewatching");
} }
class Home01Component {
    constructor(service, router, observer) {
        this.service = service;
        this.router = router;
        this.observer = observer;
        this.allow = true;
        this.type = "I have been passed from parent";
        this.ifWorks = false;
        this.mobile = false;
        this.isHover = false;
    }
    ngOnInit() {
        // this.getDataTypeHead();
        this.getDataSlidesShow();
        (this.observer.observe('(max-width: 700px)').subscribe((result) => {
            if (result.matches) {
                this.mobile = true;
            }
        }));
        if (localStorage.getItem("continuewatching") === null) {
        }
        else {
            this.l = JSON.parse(localStorage.getItem("continuewatching"));
            if (this.l.length === 0) {
            }
            else {
                this.ifWorks = true;
            }
        }
    }
    getDataSlidesShow() {
        this.service.getDataSlideshowMovie().subscribe((response) => {
            this.slideshow_data = response;
        }, (error) => {
            console.log("ERRORSSSS", error);
        });
    }
    routeToPage(id) {
        this.router.navigate(['/watch/movie/', id]);
    }
}
Home01Component.ɵfac = function Home01Component_Factory(t) { return new (t || Home01Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_hw8_service__WEBPACK_IMPORTED_MODULE_1__["ServiceHw8Service"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["BreakpointObserver"])); };
Home01Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Home01Component, selectors: [["app-home01"]], decls: 43, vars: 10, consts: [["class", "container", 4, "ngIf"], [1, "container"], [1, "row"], [1, "col-md-12", "my-space-above"], [4, "ngIf"], [3, "type", 4, "ngIf"], [3, "type"], [1, "Mark-overflow", 3, "showNavigationIndicators"], [4, "ngFor", "ngForOf"], ["ngbSlide", ""], [1, "picsum-img-wrapper", "caption-item-mob", "my-item-carousal", "col-md-12", "hover-zoom", 3, "mouseover", "mouseleave", "click"], ["alt", "Random first slide", 1, "fit-parent", "img-fluid", 3, "src"], [1, "carousel-caption", "text-left"], [1, "picsum-img-wrapper", "caption-item", "my-item-carousal", "col-md-12", "hover-zoom", 3, "mouseover", "mouseleave", "click"], ["class", "carousel-caption text-left", 4, "ngIf"]], template: function Home01Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Home01Component_div_0_Template, 4, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Home01Component_div_1_Template, 4, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, Home01Component_h1_5_Template, 2, 0, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, Home01Component_app_popular_movies_6_Template, 1, 1, "app-popular-movies", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Popular Movies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-popular-movies", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Top Rated Movies ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "app-popular-movies", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Trending Movies ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "app-popular-movies", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Popular TV Shows ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "app-popular-movies", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Top Rated TV Shows ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "app-popular-movies", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Trending TV Shows ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "app-popular-movies", 6);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.mobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ifWorks);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ifWorks);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", "POPULAR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", "TopMovies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", "TrendingMovies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", "popularTV");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", "TVTopRated");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", "TVtrending");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _popular_movies_popular_movies_component__WEBPACK_IMPORTED_MODULE_5__["PopularMoviesComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbCarousel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbSlide"]], styles: [".fit-parent[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    max-height: 400px;\r\n    object-fit: cover;\r\n    object-position: 20% 0%;\r\n    \r\n}\r\n\r\n.Mark-overflow[_ngcontent-%COMP%]{\r\n   overflow: hidden;\r\n  \r\n}\r\n\r\nngb-carousel[_ngcontent-%COMP%]:focus{  \r\n    outline: none;\r\n}\r\n\r\n .Mark-overflow .carousel-indicators{\r\n  margin-bottom: 50px;\r\n}\r\n\r\n.showNavigationIndicators_main[_ngcontent-%COMP%]{\r\nmargin-bottom: 50px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n.my-space-above[_ngcontent-%COMP%]{\r\n  margin-top: 30px;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.caption-item-mob[_ngcontent-%COMP%]:after{\r\n  background-image:  linear-gradient(transparent, rgba(0,0,0,0.3) 45%, rgba(0,0,0,1) 80%);\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  content: '';\r\n  transition: all 0.3s ease;\r\n  z-index: 1;\r\n  opacity: 1;\r\n\r\n}\r\n\r\n.caption-item[_ngcontent-%COMP%]:after{\r\n  background-image:  linear-gradient(transparent, rgba(0,0,0,0.3) 45%, rgba(0,0,0,1) 80%);\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  content: '';\r\n  transition: all 0.3s ease;\r\n  z-index: 1;\r\n  opacity: 0;\r\n}\r\n\r\n@media (max-width: 767px) {\r\n\r\n}\r\n\r\n.caption-item[_ngcontent-%COMP%]:hover:after{\r\n  opacity: 1;\r\n  cursor: pointer;\r\n  }\r\n\r\n.caption-item[_ngcontent-%COMP%]:hover{\r\n    transform: scale(1.1)\r\n  }\r\n\r\n\r\n\r\n.carousel-caption[_ngcontent-%COMP%]   .text-left[_ngcontent-%COMP%] {\r\n  left: 40px;\r\n  bottom: 10px;\r\n  position: absolute;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUwMS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsdUJBQXVCOztBQUUzQjs7QUFFQTtHQUNHLGdCQUFnQjs7QUFFbkI7O0FBQ0EscUJBQXFCLHNCQUFzQjtJQUN2QyxhQUFhO0FBQ2pCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0FBQ0EsbUJBQW1CO0FBQ25COztBQUVBO2lCQUNpQjs7QUFDYixrQ0FBa0M7O0FBSXBDOzs7S0FHRzs7QUFDSDs7OztLQUlHOztBQUNIOztLQUVHOztBQUVIOzs7OztLQUtHOztBQUVGOztNQUVHOztBQUNOO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFHQTtFQUNFLHVGQUF1RjtFQUN2RixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFNBQVM7RUFDVCxPQUFPO0VBQ1AsUUFBUTtFQUNSLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsVUFBVTtFQUNWLFVBQVU7O0FBRVo7O0FBRUE7RUFDRSx1RkFBdUY7RUFDdkYsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixTQUFTO0VBQ1QsT0FBTztFQUNQLFFBQVE7RUFDUixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLFVBQVU7RUFDVixVQUFVO0FBQ1o7O0FBRUE7O0FBRUE7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsZUFBZTtFQUNmOztBQUNBO0lBQ0U7RUFDRjs7QUFLRjs7OztHQUlHOztBQUVIO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixrQkFBa0I7QUFDcEIiLCJmaWxlIjoiaG9tZTAxLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZml0LXBhcmVudHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LWhlaWdodDogNDAwcHg7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIG9iamVjdC1wb3NpdGlvbjogMjAlIDAlO1xyXG4gICAgXHJcbn1cclxuXHJcbi5NYXJrLW92ZXJmbG93e1xyXG4gICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIFxyXG59XHJcbm5nYi1jYXJvdXNlbDpmb2N1c3sgIC8qIHJlbW92ZXMgd2hpdGUgbGluZSovXHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG46Om5nLWRlZXAuTWFyay1vdmVyZmxvdyAuY2Fyb3VzZWwtaW5kaWNhdG9yc3tcclxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG59XHJcblxyXG4uc2hvd05hdmlnYXRpb25JbmRpY2F0b3JzX21haW57XHJcbm1hcmdpbi1ib3R0b206IDUwcHg7XHJcbn1cclxuXHJcbi8qIDo6bmctZGVlcC5jYXJvdXNlbC1jYXB0aW9uIHtcclxuICAgIG9wYWNpdHk6MDt9ICovXHJcbiAgICAvKiB0cmFuc2l0aW9uOjUwMG1zIGVhc2UtaW4tb3V0OyAqL1xyXG4gIFxyXG5cclxuXHJcbiAgLyogOjpuZy1kZWVwLmZpdC1wYXJlbnQ6aG92ZXJ7XHJcbiAgICBvcGFjaXR5OjE7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICB9ICovXHJcbiAgLyogOjpuZy1kZWVwLmNhcm91c2VsLWl0ZW06aG92ZXIgLmNhcm91c2VsLWNhcHRpb24ge1xyXG4gICBcclxuIG9wYWNpdHk6MTtcclxuICAgXHJcbiAgfSAqL1xyXG4gIC8qIDo6bmctZGVlcC5jYXJvdXNlbC1pdGVtOmhvdmVye1xyXG4gICAgIHRyYW5zZm9ybTogc2NhbGUoMC41LjAuNSk7IFxyXG4gIH0gKi9cclxuXHJcbiAgLyogOjpuZy1kZWVwLm15LWl0ZW0tY2Fyb3VzYWx7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAgbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50LCByZ2JhKDAsMCwwLDAuMykgNDUlLCByZ2JhKDAsMCwwLDEpIDgwJSk7XHJcbiAgICB6LWluZGV4OiAxMDtcclxuXHJcbiAgfSAqL1xyXG5cclxuICAgLyogOjpuZy1kZWVwLmNhcHRpb24taXRlbXtcclxuICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xyXG4gIH0gICovXHJcbi5teS1zcGFjZS1hYm92ZXtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcblxyXG4uY2FwdGlvbi1pdGVtLW1vYjphZnRlcntcclxuICBiYWNrZ3JvdW5kLWltYWdlOiAgbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50LCByZ2JhKDAsMCwwLDAuMykgNDUlLCByZ2JhKDAsMCwwLDEpIDgwJSk7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBjb250ZW50OiAnJztcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgb3BhY2l0eTogMTtcclxuXHJcbn1cclxuXHJcbi5jYXB0aW9uLWl0ZW06YWZ0ZXJ7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogIGxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCwgcmdiYSgwLDAsMCwwLjMpIDQ1JSwgcmdiYSgwLDAsMCwxKSA4MCUpO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgY29udGVudDogJyc7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICB6LWluZGV4OiAxO1xyXG4gIG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG5cclxufVxyXG5cclxuLmNhcHRpb24taXRlbTpob3ZlcjphZnRlcntcclxuICBvcGFjaXR5OiAxO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgLmNhcHRpb24taXRlbTpob3ZlcntcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKVxyXG4gIH1cclxuXHJcbiBcclxuXHJcblxyXG4vKiA6Om5nLWRlZXAuY2Fyb3VzZWwtY2FwdGlvbiB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgXHJcbn0gKi9cclxuXHJcbi5jYXJvdXNlbC1jYXB0aW9uIC50ZXh0LWxlZnQge1xyXG4gIGxlZnQ6IDQwcHg7XHJcbiAgYm90dG9tOiAxMHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuXHJcbiJdfQ== */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_hw8_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service-hw8.service */ "Lsth");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _search_nav_search_nav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search-nav/search-nav.component */ "rRuK");





class AppComponent {
    constructor(service, router, httpClient) {
        this.service = service;
        this.router = router;
        this.httpClient = httpClient;
    }
    ngOnInit() {
        // localStorage.clear()
        //throw 'error in source. Details: ' + err;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_hw8_service__WEBPACK_IMPORTED_MODULE_1__["ServiceHw8Service"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-search-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_search_nav_search_nav_component__WEBPACK_IMPORTED_MODULE_4__["SearchNavComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "Vaaa":
/*!****************************************************!*\
  !*** ./src/app/footer-try/footer-try.component.ts ***!
  \****************************************************/
/*! exports provided: FooterTryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterTryComponent", function() { return FooterTryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FooterTryComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterTryComponent.ɵfac = function FooterTryComponent_Factory(t) { return new (t || FooterTryComponent)(); };
FooterTryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterTryComponent, selectors: [["app-footer-try"]], decls: 0, vars: 0, template: function FooterTryComponent_Template(rf, ctx) { }, styles: [".footer-here[_ngcontent-%COMP%]{\r\n    margin: 0;\r\n    padding-bottom: 10px;\r\n    background-color: blueviolet;\r\n    \r\n    width: 100%;\r\n    \r\n    margin-top: auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci10cnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFNBQVM7SUFDVCxvQkFBb0I7SUFDcEIsNEJBQTRCOztJQUU1QixXQUFXOztJQUVYLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJmb290ZXItdHJ5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyLWhlcmV7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWV2aW9sZXQ7XHJcbiAgICBcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgXHJcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xyXG59Il19 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _home01_home01_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home01/home01.component */ "MB8E");
/* harmony import */ var _popular_movies_popular_movies_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./popular-movies/popular-movies.component */ "+qSQ");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./movie-details/movie-details.component */ "r0S5");
/* harmony import */ var _mylist_mylist_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./mylist/mylist.component */ "76GK");
/* harmony import */ var _angular_youtube_player__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/youtube-player */ "TIDI");
/* harmony import */ var _service_hw8_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./service-hw8.service */ "Lsth");
/* harmony import */ var _tvshows_tvshows_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./tvshows/tvshows.component */ "iqFE");
/* harmony import */ var _search_nav_search_nav_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./search-nav/search-nav.component */ "rRuK");
/* harmony import */ var _footer_try_footer_try_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./footer-try/footer-try.component */ "Vaaa");
/* harmony import */ var _hovercomp_hovercomp_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./hovercomp/hovercomp.component */ "lrS5");
/* harmony import */ var _watchlist_hover_watchlist_hover_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./watchlist-hover/watchlist-hover.component */ "zNig");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ "ofXK");

 //httpclient install //CH





 //home 01









 //works without it before



class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineInjector"]({ providers: [_service_hw8_service__WEBPACK_IMPORTED_MODULE_12__["ServiceHw8Service"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_8__["LayoutModule"],
            _angular_youtube_player__WEBPACK_IMPORTED_MODULE_11__["YouTubePlayerModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _home01_home01_component__WEBPACK_IMPORTED_MODULE_5__["Home01Component"],
        _tvshows_tvshows_component__WEBPACK_IMPORTED_MODULE_13__["TvshowsComponent"],
        _popular_movies_popular_movies_component__WEBPACK_IMPORTED_MODULE_6__["PopularMoviesComponent"],
        _movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_9__["MovieDetailsComponent"],
        _mylist_mylist_component__WEBPACK_IMPORTED_MODULE_10__["MylistComponent"],
        _tvshows_tvshows_component__WEBPACK_IMPORTED_MODULE_13__["TvshowsComponent"],
        _search_nav_search_nav_component__WEBPACK_IMPORTED_MODULE_14__["SearchNavComponent"],
        _footer_try_footer_try_component__WEBPACK_IMPORTED_MODULE_15__["FooterTryComponent"],
        _hovercomp_hovercomp_component__WEBPACK_IMPORTED_MODULE_16__["HovercompComponent"],
        _watchlist_hover_watchlist_hover_component__WEBPACK_IMPORTED_MODULE_17__["WatchlistHoverComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_8__["LayoutModule"],
        _angular_youtube_player__WEBPACK_IMPORTED_MODULE_11__["YouTubePlayerModule"]] }); })();
_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵsetComponentScope"](_popular_movies_popular_movies_component__WEBPACK_IMPORTED_MODULE_6__["PopularMoviesComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_19__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbCarousel"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbSlide"], _hovercomp_hovercomp_component__WEBPACK_IMPORTED_MODULE_16__["HovercompComponent"]], []);


/***/ }),

/***/ "iqFE":
/*!**********************************************!*\
  !*** ./src/app/tvshows/tvshows.component.ts ***!
  \**********************************************/
/*! exports provided: TvshowsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TvshowsComponent", function() { return TvshowsComponent; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "EVdn");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _service_hw8_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-hw8.service */ "Lsth");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_youtube_player__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/youtube-player */ "TIDI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _hovercomp_hovercomp_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../hovercomp/hovercomp.component */ "lrS5");









function TvshowsComponent_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r13.movie_details.title);
} }
function TvshowsComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TvshowsComponent_div_7_div_1_Template, 2, 1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Genres: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Spoken Languages: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TvshowsComponent_div_7_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r14.Button_Clicked(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, " Added to watchlist ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, " Removed from watchlist ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.movie_details.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.movie_details.tagline);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"](" ", ctx_r0.movie_details.release_date, " | \u2605 ", ctx_r0.movie_details.vote_average, " | ", ctx_r0.movie_details.runtime, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.movie_details.genre, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.movie_details.spoken_languages, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.button_text ? "Add to watchlist" : "Remove from watchlist");
} }
function TvshowsComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.movie_details.overview);
} }
function TvshowsComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TvshowsComponent_div_24_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); const Each_Cast_r16 = ctx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](26); return ctx_r17.open_popup(Each_Cast_r16.id, _r3, Each_Cast_r16.full_profile_path); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "AS");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const Each_Cast_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", Each_Cast_r16.full_profile_path, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](Each_Cast_r16.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](Each_Cast_r16.character);
} }
function TvshowsComponent_ng_template_25_h4_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h4", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r20.model_name);
} }
function TvshowsComponent_ng_template_25_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Birth: ", ctx_r21.model_birthdate, "");
} }
function TvshowsComponent_ng_template_25_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Birth Place: ", ctx_r22.model_place_of_birth, "");
} }
function TvshowsComponent_ng_template_25_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Website: ", ctx_r23.model_homepage, "");
} }
function TvshowsComponent_ng_template_25_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Gender: ", ctx_r24.model_gender, "");
} }
function TvshowsComponent_ng_template_25_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Known for: ", ctx_r25.model_known_for, "");
} }
function TvshowsComponent_ng_template_25_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Also Known as: ", ctx_r26.model_other_names, "");
} }
function TvshowsComponent_ng_template_25_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, "Visit IMDB");
} }
function TvshowsComponent_ng_template_25_a_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](18);
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx_r29.imdb_id, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("ngbPopover", _r27);
} }
function TvshowsComponent_ng_template_25_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, "Visit Instagram");
} }
function TvshowsComponent_ng_template_25_a_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](21);
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx_r32.insta, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("ngbPopover", _r30);
} }
function TvshowsComponent_ng_template_25_ng_template_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, "Visit Facebook");
} }
function TvshowsComponent_ng_template_25_a_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](24);
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx_r35.fb, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("ngbPopover", _r33);
} }
function TvshowsComponent_ng_template_25_ng_template_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, "Visit Twitter");
} }
function TvshowsComponent_ng_template_25_a_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](27);
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx_r38.tweet, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("ngbPopover", _r36);
} }
function TvshowsComponent_ng_template_25_h2_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Biography");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TvshowsComponent_ng_template_25_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r40.model_biography);
} }
function TvshowsComponent_ng_template_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TvshowsComponent_ng_template_25_h4_1_Template, 2, 1, "h4", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TvshowsComponent_ng_template_25_Template_button_click_2_listener() { const modal_r19 = ctx.$implicit; return modal_r19.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "img", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, TvshowsComponent_ng_template_25_div_11_Template, 2, 1, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, TvshowsComponent_ng_template_25_div_12_Template, 2, 1, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, TvshowsComponent_ng_template_25_div_13_Template, 2, 1, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, TvshowsComponent_ng_template_25_div_14_Template, 2, 1, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, TvshowsComponent_ng_template_25_div_15_Template, 2, 1, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, TvshowsComponent_ng_template_25_div_16_Template, 2, 1, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, TvshowsComponent_ng_template_25_ng_template_17_Template, 1, 0, "ng-template", null, 52, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, TvshowsComponent_ng_template_25_a_19_Template, 2, 2, "a", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, TvshowsComponent_ng_template_25_ng_template_20_Template, 1, 0, "ng-template", null, 54, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, TvshowsComponent_ng_template_25_a_22_Template, 2, 2, "a", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, TvshowsComponent_ng_template_25_ng_template_23_Template, 1, 0, "ng-template", null, 55, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, TvshowsComponent_ng_template_25_a_25_Template, 2, 2, "a", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, TvshowsComponent_ng_template_25_ng_template_26_Template, 1, 0, "ng-template", null, 56, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, TvshowsComponent_ng_template_25_a_28_Template, 2, 2, "a", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, TvshowsComponent_ng_template_25_h2_31_Template, 2, 0, "h2", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, TvshowsComponent_ng_template_25_div_32_Template, 2, 1, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.bool_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r4.profile_path, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.bool_birth);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.bool_birth_place);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.bool_website);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.bool_gender);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.bool_known_for);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.bool_other_names);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.bool_imdb_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.bool_insta);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.bool_fb);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.bool_tweet);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.bool_bio);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.bool_bio);
} }
function TvshowsComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Reviews ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r5.length_of_reviews, "");
} }
function TvshowsComponent_div_28_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const review_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", review_r42.avatar_path_here, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function TvshowsComponent_div_28_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const review_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", review_r42.avatar_path_here, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function TvshowsComponent_div_28_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const review_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("A review created by ", review_r42.author, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u2605 ", review_r42.rating_here, "");
} }
function TvshowsComponent_div_28_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const review_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("A review created by ", review_r42.author, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" \u2605 ", review_r42.rating_here, "");
} }
function TvshowsComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, TvshowsComponent_div_28_div_7_Template, 2, 1, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, TvshowsComponent_div_28_div_8_Template, 2, 1, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, TvshowsComponent_div_28_div_10_Template, 6, 2, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, TvshowsComponent_div_28_div_11_Template, 5, 2, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "a", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Read the rest");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const review_r42 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.mobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r6.mobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.mobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r6.mobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" Written by ", review_r42.author, " on ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](14, 8, review_r42.created_at, "MMMM d, y, h:mm:ss a"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", review_r42.content, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", review_r42.url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function TvshowsComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Similar TV Shows");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TvshowsComponent_ngb_carousel_30_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-hovercomp", 84);
} if (rf & 2) {
    const single_pack_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("poster", single_pack_r52.poster)("id", single_pack_r52.id)("media_type", single_pack_r52.media_type)("title", single_pack_r52.title);
} }
function TvshowsComponent_ngb_carousel_30_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, TvshowsComponent_ngb_carousel_30_1_ng_template_0_Template, 1, 4, "ng-template", 83);
} }
function TvshowsComponent_ngb_carousel_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngb-carousel", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TvshowsComponent_ngb_carousel_30_1_Template, 1, 0, undefined, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("showNavigationArrows", ctx_r8.showNavigationArrows_movie_details)("showNavigationIndicators", ctx_r8.showNavigationIndicators_movie_details)("interval", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r8.resp_movie_details);
} }
function TvshowsComponent_ngb_carousel_31_1_ng_template_0_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-hovercomp", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const each_card_r59 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("poster", each_card_r59.poster)("id", each_card_r59.id)("media_type", each_card_r59.media_type)("title", each_card_r59.title);
} }
function TvshowsComponent_ngb_carousel_31_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, TvshowsComponent_ngb_carousel_31_1_ng_template_0_div_3_Template, 2, 4, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const single_page_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", single_page_r56);
} }
function TvshowsComponent_ngb_carousel_31_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, TvshowsComponent_ngb_carousel_31_1_ng_template_0_Template, 4, 1, "ng-template", 86);
} }
function TvshowsComponent_ngb_carousel_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngb-carousel", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TvshowsComponent_ngb_carousel_31_1_Template, 1, 0, undefined, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("showNavigationArrows", ctx_r9.showNavigationArrows_movie_details)("showNavigationIndicators", ctx_r9.showNavigationIndicators_movie_details)("interval", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r9.send_data_movie_details);
} }
function TvshowsComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Recommended TV Shows");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TvshowsComponent_ngb_carousel_33_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-hovercomp", 84);
} if (rf & 2) {
    const single_pack_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("poster", single_pack_r62.poster)("id", single_pack_r62.id)("media_type", single_pack_r62.media_type)("title", single_pack_r62.title);
} }
function TvshowsComponent_ngb_carousel_33_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, TvshowsComponent_ngb_carousel_33_1_ng_template_0_Template, 1, 4, "ng-template", 83);
} }
function TvshowsComponent_ngb_carousel_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngb-carousel", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TvshowsComponent_ngb_carousel_33_1_Template, 1, 0, undefined, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("showNavigationArrows", ctx_r11.showNavigationArrows_movie_details)("showNavigationIndicators", !ctx_r11.mobile)("interval", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r11.recc_movie_details);
} }
function TvshowsComponent_ngb_carousel_34_1_ng_template_0_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-hovercomp", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const each_card_r69 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("poster", each_card_r69.poster)("id", each_card_r69.id)("media_type", each_card_r69.media_type)("title", each_card_r69.title);
} }
function TvshowsComponent_ngb_carousel_34_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, TvshowsComponent_ngb_carousel_34_1_ng_template_0_div_3_Template, 2, 4, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const single_page_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", single_page_r66);
} }
function TvshowsComponent_ngb_carousel_34_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, TvshowsComponent_ngb_carousel_34_1_ng_template_0_Template, 4, 1, "ng-template", 86);
} }
function TvshowsComponent_ngb_carousel_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngb-carousel", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TvshowsComponent_ngb_carousel_34_1_Template, 1, 0, undefined, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("showNavigationArrows", ctx_r12.showNavigationArrows_movie_details)("showNavigationIndicators", ctx_r12.showNavigationIndicators_movie_details)("interval", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r12.desktop_recc);
} }
class TvshowsComponent {
    constructor(Aroute, service, observer, modalService, router) {
        this.Aroute = Aroute;
        this.service = service;
        this.observer = observer;
        this.modalService = modalService;
        this.router = router;
        this.movie_details = null;
        this.det = {};
        this.media_type = "tv";
        this.move_the_value = {};
        this.array_local = [];
        this.count = 0;
        this.cont_array = [];
        this.button_text = true;
        this.addeds = false;
        this.bool_birth = true;
        this.bool_website = true;
        this.bool_birth_place = true;
        this.bool_gender = true;
        this.bool_known_for = true;
        this.bool_name = true;
        this.bool_other_names = true;
        this.bool_bio = true;
        this.bool_imdb_id = true;
        this.bool_fb = true;
        this.bool_insta = true;
        this.bool_tweet = true;
        this.reviews_exist = true;
        this.showNavigationArrows_movie_details = true;
        this.showNavigationIndicators_movie_details = false;
        this.similar_tv = true;
        this.recc_tv = true;
    }
    ngOnInit() {
        let id = this.Aroute.snapshot.paramMap.get('id');
        this.idUse = id;
        this.check_if_added_to_watchlist();
        (this.observer.observe('(max-width: 700px)').subscribe((result) => {
            if (result.matches) {
                this.mobile = true;
            }
        }));
        try {
            this.service.TVyoutube(id).subscribe((respons) => {
                this.video_id = respons;
                console.log("id", this.idUse);
                console.log("this.video_id", this.video_id);
                this.twitter_share = "https://twitter.com/intent/tweet?text=https://www.youtube.com/watch?v=" + this.video_id + "&hashtags=USC,CSCI571,FightOn";
                this.fb_shar = "https://www.facebook.com/sharer/sharer.php?u=https://www.youtube.com/watch?v=" + this.video_id;
            });
        }
        catch (_a) {
            console.log("TVyoutube error!!!!");
        }
        try {
            this.service.TVdetails(id).subscribe((response) => {
                this.movie_details = response;
                this.title_here = this.movie_details.title;
            });
        }
        catch (_b) {
            console.log("TVdetails error!!!!");
        }
        try {
            this.service.tv_posterPath(id).subscribe((response) => {
                this.poster_path = response;
            });
        }
        catch (_c) {
            console.log("Poster_path_watchlist error");
        }
        try {
            this.service.tv_CastList(id).subscribe((response) => {
                this.cast = response;
            });
        }
        catch (_d) {
            console.log("cast list error");
        }
        try {
            this.service.tv_reviews(id).subscribe((response) => {
                this.reviews = response;
                // console.log("review response.avatar_path_here", this.reviews.avatar_path_here);
                // console.log(" this.reviews", this.reviews);
                this.length_of_reviews = Object.keys(this.reviews).length;
                if (this.length_of_reviews === 0) {
                    this.reviews_exist = false;
                }
            });
        }
        catch (_e) {
            console.log("Review Details error");
        }
        try {
            this.service.tv_reccomend(id).subscribe((response) => {
                if (response === "No") {
                    this.recc_tv = false;
                }
                else {
                    this.Reccom_movies(this.mobile);
                    this.recc_tv = true;
                    console.log("Reccomended tv shows ", response);
                }
            });
        }
        catch (_f) {
            console.log("error: reccomended tv!!!!");
        }
        try {
            this.service.tv_similar(id).subscribe((response) => {
                if (response === "No") {
                    this.similar_tv = false;
                }
                else {
                    this.Similar_movies(this.mobile);
                    this.similar_tv = true;
                }
                //console.log("Similar!! ", response);
            });
        }
        catch (_g) {
            console.log("error : similar tv!!!!");
        }
        setTimeout(() => {
            this.continuewatching();
        }, 800);
    }
    continuewatching() {
        if (localStorage.getItem("continuewatching") === null) {
            this.det = { id: this.idUse, poster: this.poster_path, title: this.title_here, media_type: this.media_type };
            console.log("if cw", this.det);
            this.cont_array.push(this.det);
            localStorage.setItem("continuewatching", JSON.stringify(this.cont_array));
        }
        else {
            let key1 = "continuewatching";
            this.get_json_c = JSON.parse(localStorage.getItem(key1));
            for (var i = 0; i < this.get_json_c.length; i++) {
                if (this.idUse === this.get_json_c[i].id && this.media_type === "tv") {
                    this.get_json_c.splice(i, 1);
                    break;
                }
            }
            this.det = { id: this.idUse, poster: this.poster_path, title: this.title_here, media_type: this.media_type };
            console.log("else cw", this.det);
            this.get_json_c.push(this.det);
            if (this.get_json_c.length > 24) {
                this.get_json_c.shift();
            }
            localStorage.removeItem(key1);
            localStorage.setItem(key1, JSON.stringify(this.get_json_c));
            console.log("get_json_c length", this.get_json_c);
        }
    }
    add_to_local_storage() {
        if (localStorage.getItem("watchlist") === null) {
            this.det = { id: this.idUse, poster: this.poster_path, title: this.title_here, media_type: this.media_type };
            this.array_local.push(this.det);
            localStorage.setItem("watchlist", JSON.stringify(this.array_local));
            console.log("thos det add_to_local_storage", this.det);
        }
        else {
            let key = "watchlist";
            this.get_json = JSON.parse(localStorage.getItem(key));
            // console.log("movie else get_json", this.get_json);
            this.det = { id: this.idUse, poster: this.poster_path, title: this.title_here, media_type: this.media_type };
            //console.log("else this.del", this.det);
            this.get_json.push(this.det);
            //console.log("get_json pushed", this.get_json);
            localStorage.removeItem(key);
            localStorage.setItem(key, JSON.stringify(this.get_json));
        }
    }
    remove_from_local_storage() {
        let key = "watchlist";
        this.rem_json = JSON.parse(localStorage.getItem(key));
        // console.log("to remove", this.idUse, "done");
        for (var i = 0; i < this.rem_json.length; i++) {
            //console.log("id parsing", this.rem_json[i].id);
            if (this.idUse === this.rem_json[i].id && this.media_type === "tv") {
                // console.log("to be removed", i);
                //console.log("before romoval", this.rem_json);
                this.rem_json.splice(i, 1);
                localStorage.removeItem(key);
                localStorage.setItem(key, JSON.stringify(this.rem_json));
            }
            //console.log("after removal", this.rem_json);
        }
    }
    Button_Clicked() {
        this.button_text = !this.button_text;
        //console.log("this.button_text", this.button_text);
        this.addeds = !this.addeds;
        if (this.button_text === false) {
            this.add_to_local_storage();
            jquery__WEBPACK_IMPORTED_MODULE_0__(`#added`).show();
            setTimeout(function () {
                jquery__WEBPACK_IMPORTED_MODULE_0__(`#added`).hide();
            }, 5000);
            jquery__WEBPACK_IMPORTED_MODULE_0__(`#linkClose`).click(function () {
                jquery__WEBPACK_IMPORTED_MODULE_0__(`#added`).hide();
            });
        }
        else {
            this.remove_from_local_storage();
            jquery__WEBPACK_IMPORTED_MODULE_0__(`#removed`).show();
            setTimeout(function () {
                jquery__WEBPACK_IMPORTED_MODULE_0__(`#removed`).hide();
            }, 5000);
            jquery__WEBPACK_IMPORTED_MODULE_0__(`#linkClosehere`).click(function () {
                jquery__WEBPACK_IMPORTED_MODULE_0__(`#removed`).hide();
            });
        }
    }
    ;
    open_popup(castid, content, profile) {
        this.modalService.open(content, { size: 'lg' });
        try {
            this.service.each_cast_model(castid).subscribe((response) => {
                this.model_details = response;
                console.log("tv res", response);
                if (this.model_details.name === "" || this.model_details.name === null) { //name
                    this.bool_name = false;
                    console.log("if  this.bool_name ", this.bool_name, this.model_details.name);
                }
                else {
                    this.model_name = this.model_details.name;
                    this.bool_name = true;
                    console.log("else this.bool_name ", this.bool_name, this.model_details.name);
                }
                if (this.model_details.birthdate === "" || this.model_details.birthdate === null) { //birthdate
                    this.bool_birth = false;
                }
                else {
                    this.model_birthdate = this.model_details.birthdate;
                    this.bool_birth = true;
                }
                if (this.model_details.gender === "" || this.model_details.gender === null) { //gender
                    this.bool_gender = false;
                }
                else {
                    this.bool_gender = true;
                    this.model_gender = this.model_details.gender;
                }
                if (this.model_details.known_for_department === "" || this.model_details.known_for_department === null || this.model_details.known_for_department === []) { //known for
                    this.bool_known_for = false;
                }
                else {
                    this.bool_known_for = true;
                    this.model_known_for = this.model_details.known_for_department;
                }
                if (this.model_details.also_known_as === "" || this.model_details.also_known_as === null || this.model_details.also_known_as.length === 0) { //known as
                    this.bool_other_names = false;
                }
                else {
                    this.bool_other_names = true;
                    this.model_other_names = this.model_details.also_known_as;
                }
                if (this.model_details.biography === "" || this.model_details.biography === null) {
                    this.bool_bio = false;
                }
                else {
                    this.bool_bio = true;
                    this.model_biography = this.model_details.biography;
                }
                if (this.model_details.homepage === null || this.model_details.homepage === "") { //website
                    this.bool_website = false;
                }
                else {
                    this.model_homepage = this.model_details.homepage;
                    this.bool_website = true;
                }
                if (this.model_details.place_of_birth === "" || this.model_details.place_of_birth === null) {
                    this.bool_birth_place = false;
                }
                else {
                    this.bool_birth_place = true;
                    this.model_place_of_birth = this.model_details.place_of_birth;
                }
                this.profile_path = profile;
                // this.model_name = this.model_details.name;
                // this.model_birthdate = this.model_details.birthdate;
                // if (this.model_birthdate === "") {
                //   this.bool_birth = false
                // }
                // this.model_gender = this.model_details.gender;
                // this.model_known_for = this.model_details.known_for_department;
                // this.model_other_names = this.model_details.also_known_as;
                // this.model_biography = this.model_details.biography;
                // this.model_homepage = this.model_details.homepage;
                // if (this.model_homepage === "") {
                //   this.bool_website = false;
                // }
                // this.model_place_of_birth = this.model_details.place_of_birth;
                // this.profile_path = profile
            });
        }
        catch (_a) {
            console.log("ERROR!!!!");
        }
        try {
            this.service.each_cast_socials(castid).subscribe((response) => {
                this.isocials = response;
                if (this.isocials.imdb_id === "") {
                    this.bool_imdb_id = false;
                }
                else {
                    this.bool_imdb_id = true;
                }
                this.imdb_id = "https://www.imdb.com/name/" + this.isocials.imdb_id;
                if (this.isocials.facebook_id === "") {
                    this.bool_fb = false;
                }
                else {
                    this.bool_fb = true;
                }
                this.fb = "https://www.facebook.com/" + this.isocials.facebook_id;
                if (this.isocials.instagram_id === "") {
                    this.bool_insta = false;
                }
                else {
                    this.bool_insta = true;
                }
                this.insta = "https://www.instagram.com/" + this.isocials.instagram_id;
                if (this.isocials.twitter_id === "") {
                    this.bool_tweet = false;
                }
                else {
                    this.bool_tweet = true;
                }
                this.tweet = "https://twitter.com/" + this.isocials.twitter_id;
                //console.log("tweet id", this.tweet);
            });
        }
        catch (_b) {
            console.log("ERROR!!!!");
        }
    }
    check_if_added_to_watchlist() {
        if (localStorage.getItem("watchlist") === null) {
        }
        else {
            // console.log("it does call", this.idUse);
            let key = "watchlist";
            this.check_json = JSON.parse(localStorage.getItem(key));
            //console.log("check_json", this.check_json);
            for (var i = 0; i < this.check_json.length; i++) {
                if (this.idUse === this.check_json[i].id && this.media_type === "tv") {
                    this.button_text = false;
                    // console.log("to be removed", i);
                    //console.log("before romoval", this.check_json);
                    this.move_the_value = this.check_json.splice(i, 1);
                    // console.log("this.check_json", this.check_json);
                    this.check_json.push(this.move_the_value[0]);
                    localStorage.removeItem(key);
                    localStorage.setItem(key, JSON.stringify(this.check_json));
                    //console.log("final", this.check_json);
                    break;
                }
            }
        }
    }
    Similar_movies(mob) {
        this.service.tv_similar(this.idUse).subscribe((response) => {
            this.resp_movie_details = response;
            let t = this.resp_movie_details;
            //console.log(" this.resp_movie_details", this.resp_movie_details);
            var keys = Object.keys(this.resp_movie_details);
            if (mob !== true) {
                this.showNavigationIndicators_movie_details = true;
                this.send_data_movie_details = [];
                var j = -1;
                for (var i = 0; i < t.length; i++) {
                    if (i % 6 == 0) {
                        j++;
                        this.send_data_movie_details[j] = [];
                        this.send_data_movie_details[j].push(t[i]);
                    }
                    else {
                        this.send_data_movie_details[j].push(t[i]);
                    }
                    // console.log("Sim_movies", this.send_data_movie_details);
                }
            }
        }, (error) => { console.log("error in recc tv", error); });
    }
    ;
    Reccom_movies(mob) {
        this.service.tv_reccomend(this.idUse).subscribe((response) => {
            this.recc_movie_details = response;
            let t = this.recc_movie_details;
            console.log(" thistv_reccomend", this.recc_movie_details);
            var keys = Object.keys(this.recc_movie_details);
            if (mob !== true) {
                this.showNavigationIndicators_movie_details = true;
                this.desktop_recc = [];
                var j = -1;
                for (var i = 0; i < t.length; i++) {
                    if (i % 6 == 0) {
                        console.log("entered if");
                        j++;
                        this.desktop_recc[j] = [];
                        this.desktop_recc[j].push(t[i]);
                    }
                    else {
                        console.log("entered else");
                        this.desktop_recc[j].push(t[i]);
                    }
                    // console.log("recc_movies", this.desktop_recc);
                }
            }
        }, (error) => { console.log("error in recc movies", error); });
    }
    ;
    routeToPage(id) {
        // this.router.navigate(['/watch/movie/', id]);
        let x = '/watch/tv/' + id;
        // this.ngOnInit();
        // console.log("Before or after??");
        document.documentElement.scrollTop = 0;
        this.redirectTo(x);
    }
    redirectTo(uri) {
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => this.router.navigate([uri]));
    }
}
TvshowsComponent.ɵfac = function TvshowsComponent_Factory(t) { return new (t || TvshowsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_hw8_service__WEBPACK_IMPORTED_MODULE_3__["ServiceHw8Service"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["BreakpointObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
TvshowsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TvshowsComponent, selectors: [["app-tvshows"]], decls: 35, vars: 16, consts: [[1, "try-test"], [1, "my-outer"], [1, "container"], [1, "row"], [1, "col-lg-8"], [1, "embed-responsive", "embed-responsive-16by9"], [1, "embed-responsive-item", 3, "videoId", "width", "height"], ["class", "col-lg-4 ", 4, "ngIf"], ["class", "col-lg-12", 4, "ngIf"], [1, "col-lg-12"], [1, "word_share"], ["target", "_blank", "rel", "noopener noreferrer", 1, "class_icon", 3, "href"], [1, "fab", "fa-twitter"], [1, "fab", "fa-facebook-square", "colo_fb"], [1, "col-sm-12"], [1, "row", "flex-row", "flex-nowrap", "my-all-cards"], [4, "ngFor", "ngForOf"], ["content", ""], ["class", "row space-above", 4, "ngIf"], ["class", "row", 4, "ngIf"], [3, "showNavigationArrows", "showNavigationIndicators", "interval", 4, "ngIf"], ["class", "my-no-wrap", 3, "showNavigationArrows", "showNavigationIndicators", "interval", 4, "ngIf"], ["class", "container", 4, "ngIf"], [1, "col-lg-4"], ["class", "first_title", 4, "ngIf"], [1, "my_tag_line"], [1, "my_date_line"], [1, "my_genre"], [1, "gen_and_spoken"], [1, "my_spoken"], ["id", "btnSubmit", "value", "Not_added", 1, "btn", "btn-primary", 3, "click"], ["id", "added", 1, "alert", "alert-success", "collapse"], ["id", "linkClose", 1, "close"], ["id", "removed", 1, "alert", "alert-danger", "collapse"], ["id", "linkClosehere", 1, "close"], [1, "first_title"], [1, "word_h4_description"], [1, "the_description"], [1, "card", "card-block", "my-card", 2, "border", "0px solid red", 3, "click"], ["alt", "not working", 1, "my-image-class", 2, "border", "0px solid red", 3, "src"], [1, "my-color-black", 2, "font-weight", "700"], [1, "as", 2, "font-weight", "700"], [1, "my-character"], [1, "modal-header", "make-it-black"], ["class", "modal-title my-title-format", 4, "ngIf"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "col-md-3"], ["alt", "", 1, "fit-the-div", 3, "src"], [1, "col-md-9"], ["class", "make-it-black", 4, "ngIf"], ["popContent0", ""], ["target", "_blank", "rel", "noopener noreferrer", "triggers", "hover", "class", "class_icon", 3, "href", "ngbPopover", 4, "ngIf"], ["popContent", ""], ["popContent2", ""], ["popContent3", ""], [1, "col-md-12"], [1, "modal-title", "my-title-format"], [1, "make-it-black"], ["target", "_blank", "rel", "noopener noreferrer", "triggers", "hover", 1, "class_icon", 3, "href", "ngbPopover"], [1, "fab", "fab", "fa-imdb", "colYel"], [1, "fab", "fa-instagram", "col_insta"], [1, "row", "space-above"], [1, "span_list_reviews"], [1, "row", "space-generation"], [1, "card"], [1, "card-block"], [1, "row", "margin-declaration"], [1, "col-md-2", "col-sm-12"], [4, "ngIf"], ["class", "center-align-it", 4, "ngIf"], [1, "col-md-10", "col-sm-12"], [1, "make-it-black", "me-style-it"], [1, "make-it-black", "my-cut-to-3"], [1, "make-it-black", "make-it-pretty"], ["target", "_blank", "rel", "noopener noreferrer", 3, "href"], ["alt", "", 1, "my-image", 3, "src"], [1, "center-align-it"], [1, "make-it-black", "make-it-bold"], [1, "ratings"], [1, "make-it-black", "make-inline", "make-it-bold"], [3, "showNavigationArrows", "showNavigationIndicators", "interval"], ["ngbSlide", "", "class", "col-xs-8"], [3, "poster", "id", "media_type", "title"], [1, "my-no-wrap", 3, "showNavigationArrows", "showNavigationIndicators", "interval"], ["ngbSlide", ""], [1, "my-warp-around"], ["class", "my-display-card col-md-2", 4, "ngFor", "ngForOf"], [1, "my-display-card", "col-md-2"], [1, "card", "border-0", "box", "card-my", "text-white", "bg-dark", "mb-3", 3, "poster", "id", "media_type", "title"]], template: function TvshowsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "youtube-player", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, TvshowsComponent_div_7_Template, 26, 8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, TvshowsComponent_div_9_Template, 5, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Share ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Full Cast and Crew");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, TvshowsComponent_div_24_Template, 9, 3, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, TvshowsComponent_ng_template_25_Template, 33, 14, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, TvshowsComponent_div_27_Template, 7, 1, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, TvshowsComponent_div_28_Template, 20, 11, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, TvshowsComponent_div_29_Template, 4, 0, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, TvshowsComponent_ngb_carousel_30_Template, 2, 4, "ngb-carousel", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, TvshowsComponent_ngb_carousel_31_Template, 2, 4, "ngb-carousel", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, TvshowsComponent_div_32_Template, 5, 0, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, TvshowsComponent_ngb_carousel_33_Template, 2, 4, "ngb-carousel", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, TvshowsComponent_ngb_carousel_34_Template, 2, 4, "ngb-carousel", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("videoId", ctx.video_id)("width", 560)("height", 360);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.movie_details);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.movie_details);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx.twitter_share, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx.fb_shar, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.cast);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.reviews_exist);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.reviews);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.similar_tv);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.mobile && ctx.similar_tv);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.mobile && ctx.similar_tv);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.recc_tv);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.mobile && ctx.recc_tv);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.mobile && ctx.recc_tv);
    } }, directives: [_angular_youtube_player__WEBPACK_IMPORTED_MODULE_6__["YouTubePlayer"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbPopover"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbCarousel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbSlide"], _hovercomp_hovercomp_component__WEBPACK_IMPORTED_MODULE_8__["HovercompComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]], styles: [".my-outer[_ngcontent-%COMP%]{\r\n    margin-right:20px ;\r\n    margin-left:20px;\r\n}\r\n\r\n.first_title[_ngcontent-%COMP%]{\r\n    font-size: 40px;\r\n    font-weight:490;\r\n    color: rgb(225, 225, 225);\r\n}\r\n\r\n.my_tag_line[_ngcontent-%COMP%]{\r\n    font-style: italic;\r\n    color: rgb(200, 200, 200);\r\n}\r\n\r\n.my_date_line[_ngcontent-%COMP%]{\r\n    color: rgb(200, 200, 200);\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%]:focus {\r\n    box-shadow: none;\r\n  }\r\n\r\n.my_spoken[_ngcontent-%COMP%]{\r\n    padding-bottom: 15px;\r\n}\r\n\r\n.my_genre[_ngcontent-%COMP%], .my_spoken[_ngcontent-%COMP%]{\r\n    color: rgb(200, 200, 200);\r\n}\r\n\r\n.gen_and_spoken[_ngcontent-%COMP%]{\r\n    color: rgb(225, 225, 225);\r\n}\r\n\r\n.word_h4_description[_ngcontent-%COMP%]{\r\n    padding-top: 10px;\r\n    font-weight:600;\r\n}\r\n\r\n.the_description[_ngcontent-%COMP%]{\r\n    color: rgb(200, 200, 200);\r\n}\r\n\r\n.colo_fb[_ngcontent-%COMP%]{\r\n    color:blue;\r\n}\r\n\r\n.class_icon[_ngcontent-%COMP%]{\r\nfont-size: 20px;\r\npadding-right:10px ;\r\n}\r\n\r\n.word_share[_ngcontent-%COMP%]{\r\n    padding-top:20px ;\r\n}\r\n\r\n.my-color-black[_ngcontent-%COMP%]{\r\n    color: black;\r\n    text-align: center;\r\n}\r\n\r\n.my-card[_ngcontent-%COMP%]{\r\n\r\n    max-width: 160px;\r\n    margin-right: 17px;\r\n    border-radius: 10px;\r\n \r\n}\r\n\r\n .my-card:hover{\r\n    cursor: pointer;\r\n}\r\n\r\n.my-all-cards[_ngcontent-%COMP%]{\r\n    overflow-x: scroll;\r\n    margin-left: 5px;\r\n\r\n}\r\n\r\n.as[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    color: black;\r\n}\r\n\r\n.my-character[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    color: black;\r\n}\r\n\r\n .my-image-class{\r\n    border-top-left-radius: 10px;\r\n    border-top-right-radius: 10px;\r\n    border-bottom-left-radius: 0px;\r\n    border-bottom-right-radius: 0px;\r\n    margin: 0;\r\n    border:0px solid red;\r\n\r\n}\r\n\r\n.card-my[_ngcontent-%COMP%]:hover {\r\n    transform: translate3d(0,-1px,0) scale(1.1);\r\n    transition: all .1s ease-in-out;\r\n\r\n  }\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n    height: 5px;\r\n    border-radius: 10px;\r\n    margin-top: 10px;\r\n    \r\n  }\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\r\n    box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.3);\r\n    border-radius: 10px;\r\n    border-left: 0.5px solid rgb(30, 30, 41);\r\n  }\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n    background-color: darkgrey;\r\n    \r\n    border-radius: 10px;\r\n    width: 2px;\r\n  }\r\n\r\n.my-title-format[_ngcontent-%COMP%]{\r\n      color: #000;\r\n  }\r\n\r\n.make-it-black[_ngcontent-%COMP%]{\r\n    color: #000;\r\n  }\r\n\r\n.fit-the-div[_ngcontent-%COMP%]{\r\n      width: 100%;\r\n  }\r\n\r\n.make-it-black[_ngcontent-%COMP%]{\r\n      color: black;\r\n  }\r\n\r\n.colYel[_ngcontent-%COMP%]{\r\n      color: sandybrown;\r\n  }\r\n\r\n.col_insta[_ngcontent-%COMP%]{\r\n      color: rgb(198, 53,132);\r\n  }\r\n\r\n.span_list_reviews[_ngcontent-%COMP%]{\r\n      color: rgb(105, 104, 104);\r\n  }\r\n\r\n.my-image[_ngcontent-%COMP%]{\r\n      width: 50px;\r\n      height: 50px;\r\n  }\r\n\r\n.center-align-it[_ngcontent-%COMP%]{\r\n      text-align: center;\r\n  }\r\n\r\n.make-inline[_ngcontent-%COMP%]{\r\n      display: contents;\r\n  }\r\n\r\n.ratings[_ngcontent-%COMP%]{\r\n      color: white;\r\n      background-color: black;\r\n      border-radius: 20px;\r\n      padding-left: 10px;\r\n      padding-right: 10px;\r\n\r\n  }\r\n\r\n.make-it-bold[_ngcontent-%COMP%]{\r\n      font-weight: 670;\r\n      font-size: 17px;\r\n  }\r\n\r\n.me-style-it[_ngcontent-%COMP%]{\r\n      color: rgb(145, 139, 145);\r\n      font-size: 15px;\r\n  }\r\n\r\n.my-cut-to-3[_ngcontent-%COMP%]{\r\n    display: -webkit-box;\r\n    -webkit-line-clamp: 3;\r\n    -webkit-box-orient: vertical;\r\n    overflow: hidden;\r\n  }\r\n\r\n.make-it-pretty[_ngcontent-%COMP%]{\r\n      text-decoration: underline;\r\n      margin-top: 20px;\r\n      margin-bottom: 20px;\r\n  }\r\n\r\n.margin-declaration[_ngcontent-%COMP%]{\r\n      margin: 10px;\r\n  }\r\n\r\n.space-generation[_ngcontent-%COMP%]{\r\n      margin-bottom: 15px;\r\n  }\r\n\r\n.space-above[_ngcontent-%COMP%]{\r\n      margin-top: 20px;\r\n  }\r\n\r\n.my-img-class[_ngcontent-%COMP%]{ \r\n    max-height: 260px;\r\n    width:100% ;\r\n}\r\n\r\n .my-img-class:hover{\r\n    cursor: pointer;\r\n    transform: scale(1.1);\r\n}\r\n\r\n.my-img-class[_ngcontent-%COMP%]:hover{\r\n    background-image: linear-gradient(transparent, rgba(0,0,0,0.3) 45%, rgba(0,0,0,1) 80%);\r\n  \r\n    }\r\n\r\n\r\n\r\n .carousel-inner{\r\n        overflow: visible!important;\r\n    }\r\n\r\n .carousel-indicators{  \r\n        bottom: -40px !important;\r\n    }\r\n\r\nngb-carousel[_ngcontent-%COMP%]:focus{  \r\n    outline: none;\r\n}\r\n\r\n.my-image-card-phone-size[_ngcontent-%COMP%]{\r\n    max-height: 400px;\r\n    min-width: 270px;\r\n\r\n}\r\n\r\n.my-image-card-size[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n\r\n}\r\n\r\n.my-image-card-phone-size[_ngcontent-%COMP%]{\r\n    max-height: 400px;\r\n    min-width: 270px;\r\n\r\n}\r\n\r\n.try-test[_ngcontent-%COMP%]{\r\n    margin-left: 10px;\r\n    margin-right: 10px;\r\n    margin-top: 0;\r\n    margin-bottom: 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInR2c2hvd3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZUFBZTtJQUNmLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGdCQUFnQjtFQUNsQjs7QUFDRjtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFDQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0FBQ0EsZUFBZTtBQUNmLG1CQUFtQjtBQUNuQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixtQkFBbUI7O0FBRXZCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7O0FBRXBCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLDRCQUE0QjtJQUM1Qiw2QkFBNkI7SUFDN0IsOEJBQThCO0lBQzlCLCtCQUErQjtJQUMvQixTQUFTO0lBQ1Qsb0JBQW9COztBQUV4Qjs7QUFFQTtJQUNJLDJDQUEyQztJQUMzQywrQkFBK0I7O0VBRWpDOztBQUdGO0lBQ0ksV0FBVztJQUNYLG1CQUFtQjtJQUNuQixnQkFBZ0I7O0VBRWxCOztBQUVBO0lBQ0UsNENBQTRDO0lBQzVDLG1CQUFtQjtJQUNuQix3Q0FBd0M7RUFDMUM7O0FBRUE7SUFDRSwwQkFBMEI7SUFDMUIsa0NBQWtDO0lBQ2xDLG1CQUFtQjtJQUNuQixVQUFVO0VBQ1o7O0FBRUE7TUFDSSxXQUFXO0VBQ2Y7O0FBRUE7SUFDRSxXQUFXO0VBQ2I7O0FBRUE7TUFDSSxXQUFXO0VBQ2Y7O0FBRUE7TUFDSSxZQUFZO0VBQ2hCOztBQUVBO01BQ0ksaUJBQWlCO0VBQ3JCOztBQUVBO01BQ0ksdUJBQXVCO0VBQzNCOztBQUVBO01BQ0kseUJBQXlCO0VBQzdCOztBQUVBO01BQ0ksV0FBVztNQUNYLFlBQVk7RUFDaEI7O0FBRUE7TUFDSSxrQkFBa0I7RUFDdEI7O0FBRUE7TUFDSSxpQkFBaUI7RUFDckI7O0FBRUE7TUFDSSxZQUFZO01BQ1osdUJBQXVCO01BQ3ZCLG1CQUFtQjtNQUNuQixrQkFBa0I7TUFDbEIsbUJBQW1COztFQUV2Qjs7QUFFQTtNQUNJLGdCQUFnQjtNQUNoQixlQUFlO0VBQ25COztBQUVBO01BQ0kseUJBQXlCO01BQ3pCLGVBQWU7RUFDbkI7O0FBRUE7SUFDRSxvQkFBb0I7SUFDcEIscUJBQXFCO0lBQ3JCLDRCQUE0QjtJQUM1QixnQkFBZ0I7RUFDbEI7O0FBR0E7TUFDSSwwQkFBMEI7TUFDMUIsZ0JBQWdCO01BQ2hCLG1CQUFtQjtFQUN2Qjs7QUFFQTtNQUNJLFlBQVk7RUFDaEI7O0FBRUE7TUFDSSxtQkFBbUI7RUFDdkI7O0FBRUE7TUFDSSxnQkFBZ0I7RUFDcEI7O0FBRUEsZUFBZSx1QkFBdUI7SUFDcEMsaUJBQWlCO0lBQ2pCLFdBQVc7QUFDZjs7QUFDQTtJQUNJLGVBQWU7SUFDZixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxzRkFBc0Y7O0lBRXRGOztBQUNKOzs7OztPQUtPOztBQUdIO1FBQ0ksMkJBQTJCO0lBQy9COztBQUdBO1FBQ0ksd0JBQXdCO0lBQzVCOztBQUNKLHFCQUFxQix1QkFBdUI7SUFDeEMsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7O0FBRXBCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixvQkFBb0I7O0FBRXhCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjs7QUFFcEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEIiLCJmaWxlIjoidHZzaG93cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm15LW91dGVye1xyXG4gICAgbWFyZ2luLXJpZ2h0OjIwcHggO1xyXG4gICAgbWFyZ2luLWxlZnQ6MjBweDtcclxufVxyXG5cclxuLmZpcnN0X3RpdGxle1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6NDkwO1xyXG4gICAgY29sb3I6IHJnYigyMjUsIDIyNSwgMjI1KTtcclxufVxyXG5cclxuLm15X3RhZ19saW5le1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgY29sb3I6IHJnYigyMDAsIDIwMCwgMjAwKTtcclxufVxyXG5cclxuLm15X2RhdGVfbGluZXtcclxuICAgIGNvbG9yOiByZ2IoMjAwLCAyMDAsIDIwMCk7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uYnRuOmZvY3VzIHtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgfVxyXG4ubXlfc3Bva2Vue1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbi5teV9nZW5yZSwgLm15X3Nwb2tlbntcclxuICAgIGNvbG9yOiByZ2IoMjAwLCAyMDAsIDIwMCk7XHJcbn1cclxuLmdlbl9hbmRfc3Bva2Vue1xyXG4gICAgY29sb3I6IHJnYigyMjUsIDIyNSwgMjI1KTtcclxufVxyXG5cclxuLndvcmRfaDRfZGVzY3JpcHRpb257XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OjYwMDtcclxufVxyXG5cclxuLnRoZV9kZXNjcmlwdGlvbntcclxuICAgIGNvbG9yOiByZ2IoMjAwLCAyMDAsIDIwMCk7XHJcbn1cclxuXHJcbi5jb2xvX2Zie1xyXG4gICAgY29sb3I6Ymx1ZTtcclxufVxyXG5cclxuLmNsYXNzX2ljb257XHJcbmZvbnQtc2l6ZTogMjBweDtcclxucGFkZGluZy1yaWdodDoxMHB4IDtcclxufVxyXG5cclxuLndvcmRfc2hhcmV7XHJcbiAgICBwYWRkaW5nLXRvcDoyMHB4IDtcclxufVxyXG5cclxuLm15LWNvbG9yLWJsYWNre1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubXktY2FyZHtcclxuXHJcbiAgICBtYXgtd2lkdGg6IDE2MHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxN3B4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuIFxyXG59XHJcblxyXG46Om5nLWRlZXAubXktY2FyZDpob3ZlcntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLm15LWFsbC1jYXJkc3tcclxuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcblxyXG59XHJcblxyXG4uYXN7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5teS1jaGFyYWN0ZXJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbjo6bmctZGVlcC5teS1pbWFnZS1jbGFzc3tcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDBweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwcHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBib3JkZXI6MHB4IHNvbGlkIHJlZDtcclxuXHJcbn1cclxuXHJcbi5jYXJkLW15OmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwtMXB4LDApIHNjYWxlKDEuMSk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjFzIGVhc2UtaW4tb3V0O1xyXG5cclxuICB9XHJcblxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICBoZWlnaHQ6IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgXHJcbiAgfVxyXG4gICBcclxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlci1sZWZ0OiAwLjVweCBzb2xpZCByZ2IoMzAsIDMwLCA0MSk7XHJcbiAgfVxyXG4gICBcclxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmV5O1xyXG4gICAgLyogb3V0bGluZTogMXB4IHNvbGlkIHNsYXRlZ3JleTsgKi9cclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICB3aWR0aDogMnB4O1xyXG4gIH1cclxuXHJcbiAgLm15LXRpdGxlLWZvcm1hdHtcclxuICAgICAgY29sb3I6ICMwMDA7XHJcbiAgfVxyXG5cclxuICAubWFrZS1pdC1ibGFja3tcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gIH1cclxuXHJcbiAgLmZpdC10aGUtZGl2e1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5tYWtlLWl0LWJsYWNre1xyXG4gICAgICBjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG5cclxuICAuY29sWWVse1xyXG4gICAgICBjb2xvcjogc2FuZHlicm93bjtcclxuICB9XHJcblxyXG4gIC5jb2xfaW5zdGF7XHJcbiAgICAgIGNvbG9yOiByZ2IoMTk4LCA1MywxMzIpO1xyXG4gIH1cclxuXHJcbiAgLnNwYW5fbGlzdF9yZXZpZXdze1xyXG4gICAgICBjb2xvcjogcmdiKDEwNSwgMTA0LCAxMDQpO1xyXG4gIH1cclxuXHJcbiAgLm15LWltYWdle1xyXG4gICAgICB3aWR0aDogNTBweDtcclxuICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gIH0gXHJcblxyXG4gIC5jZW50ZXItYWxpZ24taXR7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5tYWtlLWlubGluZXtcclxuICAgICAgZGlzcGxheTogY29udGVudHM7XHJcbiAgfVxyXG5cclxuICAucmF0aW5nc3tcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG5cclxuICB9XHJcblxyXG4gIC5tYWtlLWl0LWJvbGR7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2NzA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICB9XHJcblxyXG4gIC5tZS1zdHlsZS1pdHtcclxuICAgICAgY29sb3I6IHJnYigxNDUsIDEzOSwgMTQ1KTtcclxuICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gIH1cclxuXHJcbiAgLm15LWN1dC10by0ze1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDM7XHJcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcblxyXG5cclxuICAubWFrZS1pdC1wcmV0dHl7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLm1hcmdpbi1kZWNsYXJhdGlvbntcclxuICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgLnNwYWNlLWdlbmVyYXRpb257XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgfVxyXG5cclxuICAuc3BhY2UtYWJvdmV7XHJcbiAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgfVxyXG5cclxuICAubXktaW1nLWNsYXNzeyAvKmZyb20gcG9wdWxhciBtb3ZpZWVzKi9cclxuICAgIG1heC1oZWlnaHQ6IDI2MHB4O1xyXG4gICAgd2lkdGg6MTAwJSA7XHJcbn1cclxuOjpuZy1kZWVwLm15LWltZy1jbGFzczpob3ZlcntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxufVxyXG5cclxuLm15LWltZy1jbGFzczpob3ZlcntcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCwgcmdiYSgwLDAsMCwwLjMpIDQ1JSwgcmdiYSgwLDAsMCwxKSA4MCUpO1xyXG4gIFxyXG4gICAgfVxyXG4vKiBcclxuICAgIDo6bmctZGVlcCBpbWd7XHJcbiAgICAgICAgei1pbmRleDotMTtcclxuICAgICAgICBtYXNrLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDAsMCwwLDApIDAlLHJnYmEoMCwwLDAsMC42NSkgMTAwJSk7XHJcbiAgICAgICAgLXdlYmtpdC1tYXNrLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDAsMCwwLDApIDAlLHJnYmEoMCwwLDAsMC42NSkgMTAwJSk7XHJcbiAgICB9ICovXHJcblxyXG5cclxuICAgIDo6bmctZGVlcC5jYXJvdXNlbC1pbm5lcntcclxuICAgICAgICBvdmVyZmxvdzogdmlzaWJsZSFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIDo6bmctZGVlcC5jYXJvdXNlbC1pbmRpY2F0b3JzeyAgXHJcbiAgICAgICAgYm90dG9tOiAtNDBweCAhaW1wb3J0YW50O1xyXG4gICAgfSBcclxubmdiLWNhcm91c2VsOmZvY3VzeyAgLypmcm9tIHBvcHVsYXIgbW92aWVlcyovXHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4ubXktaW1hZ2UtY2FyZC1waG9uZS1zaXple1xyXG4gICAgbWF4LWhlaWdodDogNDAwcHg7XHJcbiAgICBtaW4td2lkdGg6IDI3MHB4O1xyXG5cclxufVxyXG5cclxuLm15LWltYWdlLWNhcmQtc2l6ZXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcblxyXG59XHJcblxyXG4ubXktaW1hZ2UtY2FyZC1waG9uZS1zaXple1xyXG4gICAgbWF4LWhlaWdodDogNDAwcHg7XHJcbiAgICBtaW4td2lkdGg6IDI3MHB4O1xyXG5cclxufVxyXG5cclxuLnRyeS10ZXN0e1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxufSJdfQ== */"] });


/***/ }),

/***/ "lrS5":
/*!**************************************************!*\
  !*** ./src/app/hovercomp/hovercomp.component.ts ***!
  \**************************************************/
/*! exports provided: HovercompComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HovercompComponent", function() { return HovercompComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function HovercompComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HovercompComponent_div_0_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.routeToPage(ctx_r2.id, ctx_r2.media_type); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HovercompComponent_div_0_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.routeToPage(ctx_r4.id, ctx_r4.media_type); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.poster, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.title);
} }
function HovercompComponent_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.title);
} }
function HovercompComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function HovercompComponent_div_1_Template_div_mouseover_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.isHover = true; })("mouseleave", function HovercompComponent_div_1_Template_div_mouseleave_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.isHover = false; })("click", function HovercompComponent_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.routeToPage(ctx_r9.id, ctx_r9.media_type); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HovercompComponent_div_1_div_2_Template, 5, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r1.poster, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isHover);
} }
class HovercompComponent {
    constructor(router, observer) {
        this.router = router;
        this.observer = observer;
        this.isHover = false;
        this.mobile = false;
    }
    ngOnInit() {
        (this.observer.observe('(max-width: 700px)').subscribe((result) => {
            if (result.matches) {
                this.mobile = true;
            }
        }));
    }
    routeToPage(id, media) {
        console.log("routed here", "this.media", media, "id = ", id);
        if (media === "tv") {
            let x = '/watch/tv/' + id;
            document.documentElement.scrollTop = 0;
            this.redirectTo(x);
        }
        else if (media === "movie") {
            let x = '/watch/movie/' + id;
            document.documentElement.scrollTop = 0;
            this.redirectTo(x);
        }
    }
    redirectTo(uri) {
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => this.router.navigate([uri]));
    }
}
HovercompComponent.ɵfac = function HovercompComponent_Factory(t) { return new (t || HovercompComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"])); };
HovercompComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HovercompComponent, selectors: [["app-hovercomp"]], inputs: { poster: "poster", id: "id", media_type: "media_type", title: "title" }, decls: 2, vars: 2, consts: [[3, "click", 4, "ngIf"], ["style", "cursor: pointer;", 3, "mouseover", "mouseleave", "click", 4, "ngIf"], [3, "click"], [1, "my-image-card-size", 3, "click"], [1, "my-image-card-phone-size", 3, "src"], [1, "carousel-caption", "my-carousel-caption"], [2, "cursor", "pointer", 3, "mouseover", "mouseleave", "click"], [1, "img-fluid", "my-img-class", "card-img", 3, "src"], ["class", "card-img-overlay bg-overlay d-flex flex-column justify-content-end", 4, "ngIf"], [1, "card-img-overlay", "bg-overlay", "d-flex", "flex-column", "justify-content-end"], [1, "text-left", "text-white"], [1, "white-text"], [2, "color", "white"]], template: function HovercompComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HovercompComponent_div_0_Template, 6, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HovercompComponent_div_1_Template, 3, 2, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.mobile);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: [".bg-overlay[_ngcontent-%COMP%]{\r\n    background-image:  linear-gradient(transparent, rgba(0,0,0,0.3) 45%, rgba(0,0,0,1) 80%);\r\n  width: 100%;\r\n  height: 100%;\r\n  }\r\n\r\n\r\n  \r\n\r\n\r\n  .my-image-card-size[_ngcontent-%COMP%]:after{\r\n    background-image:  linear-gradient(transparent, rgba(0,0,0,0.3) 45%, rgba(0,0,0,1) 80%);\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 20%;\r\n    right: 20%;\r\n    content: '';\r\n    z-index: 1;\r\n    opacity: 1;\r\n  }\r\n\r\n\r\n  .my-image-card-size[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n\r\n}\r\n\r\n\r\n  .my-image-card-phone-size[_ngcontent-%COMP%]{\r\n  max-height: 400px;\r\n  width: 60%;\r\n\r\n}\r\n\r\n\r\n   .carousel-caption {\r\n  left: 20%;\r\n  right: 20%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvdmVyY29tcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLHVGQUF1RjtFQUN6RixXQUFXO0VBQ1gsWUFBWTtFQUNaOzs7RUFHQSxLQUFLOzs7RUFFTDtJQUNFLHVGQUF1RjtJQUN2RixrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLFNBQVM7SUFDVCxTQUFTO0lBQ1QsVUFBVTtJQUNWLFdBQVc7SUFDWCxVQUFVO0lBQ1YsVUFBVTtFQUNaOzs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsb0JBQW9COztBQUV4Qjs7O0VBRUE7RUFDRSxpQkFBaUI7RUFDakIsVUFBVTs7QUFFWjs7O0VBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtBQUNaOzs7RUFFRSxLQUFLOzs7RUFDUDs7O1FBR1E7OztFQUVKOzs7O09BSUc7OztFQUVIOzs7OztHQUtEIiwiZmlsZSI6ImhvdmVyY29tcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5iZy1vdmVybGF5e1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogIGxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCwgcmdiYSgwLDAsMCwwLjMpIDQ1JSwgcmdiYSgwLDAsMCwxKSA4MCUpO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB9XHJcblxyXG5cclxuICAvKiAgKi9cclxuXHJcbiAgLm15LWltYWdlLWNhcmQtc2l6ZTphZnRlcntcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6ICBsaW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQsIHJnYmEoMCwwLDAsMC4zKSA0NSUsIHJnYmEoMCwwLDAsMSkgODAlKTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDIwJTtcclxuICAgIHJpZ2h0OiAyMCU7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuXHJcbiAgLm15LWltYWdlLWNhcmQtc2l6ZXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcblxyXG59XHJcblxyXG4ubXktaW1hZ2UtY2FyZC1waG9uZS1zaXple1xyXG4gIG1heC1oZWlnaHQ6IDQwMHB4O1xyXG4gIHdpZHRoOiA2MCU7XHJcblxyXG59XHJcblxyXG46Om5nLWRlZXAuY2Fyb3VzZWwtY2FwdGlvbiB7XHJcbiAgbGVmdDogMjAlO1xyXG4gIHJpZ2h0OiAyMCU7XHJcbn1cclxuXHJcbiAgLyogICovXHJcbi8qIFxyXG4gIC5teS1pbWctY2xhc3M6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQsIHJnYmEoMCwwLDAsMC4zKSA0NSUsIHJnYmEoMCwwLDAsMSkgODAlKTtcclxuICAgIH0gICovXHJcblxyXG4gICAgLyogLm15LWltZy1jbGFzc3tcclxuICAgICAgICBtYXgtaGVpZ2h0OiAyNjBweDtcclxuICAgICAgICB3aWR0aDoxMDAlIDtcclxuICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgfSAqL1xyXG5cclxuICAgIC8qIC5jYXJkLWltZy1vdmVybGF5e1xyXG4gICAgcGFkZGluZzogMTAlO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDUlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIHotaW5kZXg6IDEwO1xyXG59ICovXHJcbiJdfQ== */"] });


/***/ }),

/***/ "r0S5":
/*!**********************************************************!*\
  !*** ./src/app/movie-details/movie-details.component.ts ***!
  \**********************************************************/
/*! exports provided: MovieDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieDetailsComponent", function() { return MovieDetailsComponent; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "EVdn");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _service_hw8_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-hw8.service */ "Lsth");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_youtube_player__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/youtube-player */ "TIDI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _hovercomp_hovercomp_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../hovercomp/hovercomp.component */ "lrS5");









function MovieDetailsComponent_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r13.movie_details.title);
} }
function MovieDetailsComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MovieDetailsComponent_div_7_div_1_Template, 2, 1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Genres: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Spoken Languages: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MovieDetailsComponent_div_7_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r14.Button_Clicked(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, " Added to watchlist ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, " Removed from watchlist ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.movie_details.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.movie_details.tagline);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"](" ", ctx_r0.movie_details.release_date, " | \u2605 ", ctx_r0.movie_details.vote_average, " | ", ctx_r0.movie_details.runtime, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.movie_details.genre, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.movie_details.spoken_languages, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.button_text ? "Add to watchlist" : "Remove from watchlist");
} }
function MovieDetailsComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.movie_details.overview);
} }
function MovieDetailsComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MovieDetailsComponent_div_24_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); const Each_Cast_r16 = ctx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](26); return ctx_r17.open_popup(Each_Cast_r16.id, _r3, Each_Cast_r16.full_profile_path); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "AS");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const Each_Cast_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", Each_Cast_r16.full_profile_path, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](Each_Cast_r16.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](Each_Cast_r16.character);
} }
function MovieDetailsComponent_ng_template_25_h4_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h4", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r20.model_name);
} }
function MovieDetailsComponent_ng_template_25_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Birth: ", ctx_r21.model_birthdate, "");
} }
function MovieDetailsComponent_ng_template_25_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Birth Place: ", ctx_r22.model_place_of_birth, "");
} }
function MovieDetailsComponent_ng_template_25_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Website: ", ctx_r23.model_homepage, "");
} }
function MovieDetailsComponent_ng_template_25_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Gender: ", ctx_r24.model_gender, "");
} }
function MovieDetailsComponent_ng_template_25_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Known for: ", ctx_r25.model_known_for, "");
} }
function MovieDetailsComponent_ng_template_25_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Also Known as: ", ctx_r26.model_other_names, "");
} }
function MovieDetailsComponent_ng_template_25_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, "Visit IMDB");
} }
function MovieDetailsComponent_ng_template_25_a_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](18);
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx_r29.imdb_id, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("ngbPopover", _r27);
} }
function MovieDetailsComponent_ng_template_25_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, "Visit Instagram");
} }
function MovieDetailsComponent_ng_template_25_a_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](21);
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx_r32.insta, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("ngbPopover", _r30);
} }
function MovieDetailsComponent_ng_template_25_ng_template_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, "Visit Facebook");
} }
function MovieDetailsComponent_ng_template_25_a_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](24);
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx_r35.fb, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("ngbPopover", _r33);
} }
function MovieDetailsComponent_ng_template_25_ng_template_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, "Visit Twitter");
} }
function MovieDetailsComponent_ng_template_25_a_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](27);
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx_r38.tweet, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("ngbPopover", _r36);
} }
function MovieDetailsComponent_ng_template_25_h2_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Biography");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function MovieDetailsComponent_ng_template_25_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r40.model_biography);
} }
function MovieDetailsComponent_ng_template_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MovieDetailsComponent_ng_template_25_h4_1_Template, 2, 1, "h4", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MovieDetailsComponent_ng_template_25_Template_button_click_2_listener() { const modal_r19 = ctx.$implicit; return modal_r19.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "img", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, MovieDetailsComponent_ng_template_25_div_11_Template, 2, 1, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, MovieDetailsComponent_ng_template_25_div_12_Template, 2, 1, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, MovieDetailsComponent_ng_template_25_div_13_Template, 2, 1, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, MovieDetailsComponent_ng_template_25_div_14_Template, 2, 1, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, MovieDetailsComponent_ng_template_25_div_15_Template, 2, 1, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, MovieDetailsComponent_ng_template_25_div_16_Template, 2, 1, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, MovieDetailsComponent_ng_template_25_ng_template_17_Template, 1, 0, "ng-template", null, 51, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, MovieDetailsComponent_ng_template_25_a_19_Template, 2, 2, "a", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, MovieDetailsComponent_ng_template_25_ng_template_20_Template, 1, 0, "ng-template", null, 53, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, MovieDetailsComponent_ng_template_25_a_22_Template, 2, 2, "a", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, MovieDetailsComponent_ng_template_25_ng_template_23_Template, 1, 0, "ng-template", null, 54, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, MovieDetailsComponent_ng_template_25_a_25_Template, 2, 2, "a", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, MovieDetailsComponent_ng_template_25_ng_template_26_Template, 1, 0, "ng-template", null, 55, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, MovieDetailsComponent_ng_template_25_a_28_Template, 2, 2, "a", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, MovieDetailsComponent_ng_template_25_h2_31_Template, 2, 0, "h2", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, MovieDetailsComponent_ng_template_25_div_32_Template, 2, 1, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.bool_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r4.profile_path, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.bool_birth);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.bool_birth_place);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.bool_website);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.bool_gender);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.bool_known_for);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.bool_other_names);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.bool_imdb_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.bool_insta);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.bool_fb);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.bool_tweet);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.bool_bio);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.bool_bio);
} }
function MovieDetailsComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Reviews ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r5.length_of_reviews, "");
} }
function MovieDetailsComponent_div_28_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const review_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", review_r42.avatar_path_here, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function MovieDetailsComponent_div_28_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const review_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", review_r42.avatar_path_here, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function MovieDetailsComponent_div_28_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const review_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("A review created by ", review_r42.author, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u2605 ", review_r42.rating_here, "");
} }
function MovieDetailsComponent_div_28_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const review_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("A review created by ", review_r42.author, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" \u2605 ", review_r42.rating_here, "");
} }
function MovieDetailsComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, MovieDetailsComponent_div_28_div_7_Template, 2, 1, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, MovieDetailsComponent_div_28_div_8_Template, 2, 1, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, MovieDetailsComponent_div_28_div_10_Template, 6, 2, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, MovieDetailsComponent_div_28_div_11_Template, 5, 2, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "a", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Read the rest");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const review_r42 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.mobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r6.mobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.mobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r6.mobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" Written by ", review_r42.author, " on ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](14, 8, review_r42.created_at, "MMMM d, y, h:mm:ss a"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", review_r42.content, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", review_r42.url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function MovieDetailsComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Similar Movies");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function MovieDetailsComponent_ngb_carousel_30_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-hovercomp", 83);
} if (rf & 2) {
    const single_pack_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("poster", single_pack_r52.poster)("id", single_pack_r52.id)("media_type", single_pack_r52.media_type)("title", single_pack_r52.title);
} }
function MovieDetailsComponent_ngb_carousel_30_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, MovieDetailsComponent_ngb_carousel_30_1_ng_template_0_Template, 1, 4, "ng-template", 82);
} }
function MovieDetailsComponent_ngb_carousel_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngb-carousel", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MovieDetailsComponent_ngb_carousel_30_1_Template, 1, 0, undefined, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("showNavigationArrows", ctx_r8.showNavigationArrows_movie_details)("showNavigationIndicators", ctx_r8.showNavigationIndicators_movie_details)("interval", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r8.resp_movie_details);
} }
function MovieDetailsComponent_ngb_carousel_31_1_ng_template_0_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-hovercomp", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const each_card_r59 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("poster", each_card_r59.poster)("id", each_card_r59.id)("media_type", each_card_r59.media_type)("title", each_card_r59.title);
} }
function MovieDetailsComponent_ngb_carousel_31_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, MovieDetailsComponent_ngb_carousel_31_1_ng_template_0_div_3_Template, 2, 4, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const single_page_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", single_page_r56);
} }
function MovieDetailsComponent_ngb_carousel_31_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, MovieDetailsComponent_ngb_carousel_31_1_ng_template_0_Template, 4, 1, "ng-template", 85);
} }
function MovieDetailsComponent_ngb_carousel_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngb-carousel", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MovieDetailsComponent_ngb_carousel_31_1_Template, 1, 0, undefined, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("showNavigationArrows", ctx_r9.showNavigationArrows_movie_details)("showNavigationIndicators", ctx_r9.showNavigationIndicators_movie_details)("interval", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r9.send_data_movie_details);
} }
function MovieDetailsComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Recommended Movies");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function MovieDetailsComponent_ngb_carousel_34_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-hovercomp", 83);
} if (rf & 2) {
    const single_pack_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("poster", single_pack_r62.poster)("id", single_pack_r62.id)("media_type", single_pack_r62.media_type)("title", single_pack_r62.title);
} }
function MovieDetailsComponent_ngb_carousel_34_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, MovieDetailsComponent_ngb_carousel_34_1_ng_template_0_Template, 1, 4, "ng-template", 82);
} }
function MovieDetailsComponent_ngb_carousel_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngb-carousel", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MovieDetailsComponent_ngb_carousel_34_1_Template, 1, 0, undefined, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("showNavigationArrows", ctx_r11.showNavigationArrows_movie_details)("showNavigationIndicators", !ctx_r11.mobile)("interval", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r11.recc_movie_details);
} }
function MovieDetailsComponent_ngb_carousel_35_1_ng_template_0_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-hovercomp", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const each_card_r69 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("poster", each_card_r69.poster)("id", each_card_r69.id)("media_type", each_card_r69.media_type)("title", each_card_r69.title);
} }
function MovieDetailsComponent_ngb_carousel_35_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, MovieDetailsComponent_ngb_carousel_35_1_ng_template_0_div_3_Template, 2, 4, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const single_page_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", single_page_r66);
} }
function MovieDetailsComponent_ngb_carousel_35_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, MovieDetailsComponent_ngb_carousel_35_1_ng_template_0_Template, 4, 1, "ng-template", 85);
} }
function MovieDetailsComponent_ngb_carousel_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngb-carousel", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MovieDetailsComponent_ngb_carousel_35_1_Template, 1, 0, undefined, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("showNavigationArrows", ctx_r12.showNavigationArrows_movie_details)("showNavigationIndicators", ctx_r12.showNavigationIndicators_movie_details)("interval", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r12.desktop_recc);
} }
class MovieDetailsComponent {
    constructor(Aroute, service, observer, modalService, router) {
        this.Aroute = Aroute;
        this.service = service;
        this.observer = observer;
        this.modalService = modalService;
        this.router = router;
        this.movie_details = null;
        this.det = {};
        this.media_type = "movie";
        this.move_the_value = {};
        this.array_local = [];
        this.count = 0;
        this.cont_array = [];
        this.button_text = true;
        this.addeds = false;
        this.model_homepage = "";
        this.bool_birth = true;
        this.bool_website = true;
        this.bool_birth_place = true;
        this.bool_gender = true;
        this.bool_known_for = true;
        this.bool_name = true;
        this.bool_other_names = true;
        this.bool_bio = true;
        this.bool_imdb_id = true;
        this.bool_fb = true;
        this.bool_insta = true;
        this.bool_tweet = true;
        this.reviews_exist = true;
        this.similar_movies = true;
        this.recc_movies = true;
        this.showNavigationArrows_movie_details = true;
        this.showNavigationIndicators_movie_details = false;
    }
    // ngAfterViewInit(): void {
    // }
    ngOnInit() {
        let id = this.Aroute.snapshot.paramMap.get('id');
        this.idUse = id;
        this.check_if_added_to_watchlist();
        (this.observer.observe('(max-width: 700px)').subscribe((result) => {
            if (result.matches) {
                this.mobile = true;
            }
        }));
        try {
            this.service.getVideoMovieDetails(id).subscribe((respons) => {
                this.video_id = respons;
                this.twitter_share = "https://twitter.com/intent/tweet?text=https://www.youtube.com/watch?v=" + this.video_id + "&hashtags=USC,CSCI571,FightOn";
                this.fb_shar = "https://www.facebook.com/sharer/sharer.php?u=https://www.youtube.com/watch?v=" + this.video_id;
            });
        }
        catch (_a) {
            console.log("ERROR!!!!");
        }
        try {
            this.service.getDataMovieDetails(id).subscribe((response) => {
                //console.log("MOVIE DETAILS!!!!",response);
                this.movie_details = response;
                this.title_here = response.title;
            });
        }
        catch (_b) {
            console.log("ERROR!!!!");
        }
        try {
            this.service.getMoviePosterPath(id).subscribe((response) => {
                this.poster_path = response;
            });
        }
        catch (_c) {
            console.log("Poster_path_watchlist error");
        }
        setTimeout(() => {
            this.continuewatching();
        }, 800);
        try {
            this.service.get_Movie_Cast_Details(id).subscribe((response) => {
                this.cast = response;
                console.log("this.cast", this.cast);
            });
        }
        catch (_d) {
            console.log("cast list error");
        }
        try {
            this.service.get_Movie_Review_List(id).subscribe((response) => {
                this.reviews = response;
                this.length_of_reviews = Object.keys(this.reviews).length;
                if (this.length_of_reviews === 0) {
                    this.reviews_exist = false;
                }
            });
        }
        catch (_e) {
            console.log("Review Details error");
        }
        try {
            this.service.get_Recommended_Movies(id).subscribe((response) => {
                // console.log("Reccomended ", response);
                if (response === "No Reccomended Movies") {
                    this.recc_movies = false;
                }
                else {
                    this.Reccom_movies(this.mobile);
                    this.recc_movies = true;
                }
            });
        }
        catch (_f) {
            console.log("ERROR!!!!");
        }
        try {
            this.service.Get_Similar_Movies(id).subscribe((response) => {
                console.log("Similar!! ", response);
                if (response === "No similar movies") {
                    this.similar_movies = false;
                }
                else {
                    this.Similar_movies(this.mobile);
                    this.similar_movies = true;
                }
            });
        }
        catch (_g) {
            console.log("ERROR!!!!");
        }
        // this.service.Get_Similar_Movies(id).subscribe((response)=>{
        //   //console.log("Similar!! ",response);
        // }, (error) => {console.log("Similar movie ERROR!!!!",error);}
        // )
        //     setTimeout(  3000);
        //     function seeWorks(){
        // this.continuewatching()
        //     }
    }
    //////////////////////////////////////////////////////////////////////////
    continuewatching() {
        if (localStorage.getItem("continuewatching") === null) {
            this.det = { id: this.idUse, poster: this.poster_path, title: this.title_here, media_type: this.media_type };
            this.cont_array.push(this.det);
            localStorage.setItem("continuewatching", JSON.stringify(this.cont_array));
        }
        else {
            let key1 = "continuewatching";
            this.get_json_c = JSON.parse(localStorage.getItem(key1));
            for (var i = 0; i < this.get_json_c.length; i++) {
                if (this.idUse === this.get_json_c[i].id && this.media_type === "movie") {
                    this.get_json_c.splice(i, 1);
                    break;
                }
            }
            this.det = { id: this.idUse, poster: this.poster_path, title: this.title_here, media_type: this.media_type };
            this.get_json_c.push(this.det);
            console.log("thos det", this.det);
            if (this.get_json_c.length > 24) {
                this.get_json_c.shift();
            }
            localStorage.removeItem(key1);
            localStorage.setItem(key1, JSON.stringify(this.get_json_c));
            console.log("get_json_c length", this.get_json_c);
        }
    }
    //Local Storage Add
    add_to_local_storage() {
        if (localStorage.getItem("watchlist") === null) {
            this.det = { id: this.idUse, poster: this.poster_path, title: this.title_here, media_type: this.media_type };
            this.array_local.push(this.det);
            localStorage.setItem("watchlist", JSON.stringify(this.array_local));
            console.log("thos det add_to_local_storage", this.det);
        }
        else {
            let key = "watchlist";
            this.get_json = JSON.parse(localStorage.getItem(key));
            // console.log("movie else get_json", this.get_json);
            this.det = { id: this.idUse, poster: this.poster_path, title: this.title_here, media_type: this.media_type };
            //console.log("else this.del", this.det);
            this.get_json.push(this.det);
            //console.log("get_json pushed", this.get_json);
            localStorage.removeItem(key);
            localStorage.setItem(key, JSON.stringify(this.get_json));
        }
    }
    remove_from_local_storage() {
        let key = "watchlist";
        this.rem_json = JSON.parse(localStorage.getItem(key));
        // console.log("to remove", this.idUse, "done");
        for (var i = 0; i < this.rem_json.length; i++) {
            //console.log("id parsing", this.rem_json[i].id);
            if (this.idUse === this.rem_json[i].id && this.media_type === "movie") {
                // console.log("to be removed", i);
                //console.log("before romoval", this.rem_json);
                this.rem_json.splice(i, 1);
                localStorage.removeItem(key);
                localStorage.setItem(key, JSON.stringify(this.rem_json));
            }
            //console.log("after removal", this.rem_json);
        }
    }
    Button_Clicked() {
        this.button_text = !this.button_text;
        //console.log("this.button_text", this.button_text);
        this.addeds = !this.addeds;
        if (this.button_text === false) {
            this.add_to_local_storage();
            jquery__WEBPACK_IMPORTED_MODULE_0__(`#added`).show();
            setTimeout(function () {
                jquery__WEBPACK_IMPORTED_MODULE_0__(`#added`).hide();
            }, 5000);
            jquery__WEBPACK_IMPORTED_MODULE_0__(`#linkClose`).click(function () {
                jquery__WEBPACK_IMPORTED_MODULE_0__(`#added`).hide();
            });
        }
        else {
            this.remove_from_local_storage();
            jquery__WEBPACK_IMPORTED_MODULE_0__(`#removed`).show();
            setTimeout(function () {
                jquery__WEBPACK_IMPORTED_MODULE_0__(`#removed`).hide();
            }, 5000);
            jquery__WEBPACK_IMPORTED_MODULE_0__(`#linkClosehere`).click(function () {
                jquery__WEBPACK_IMPORTED_MODULE_0__(`#removed`).hide();
            });
        }
    }
    ;
    open_popup(castid, content, profile) {
        this.modalService.open(content, { size: 'lg' });
        try {
            this.service.each_cast_model(castid).subscribe((response) => {
                console.log("it worked each cast!!", response);
                this.model_details = response;
                if (this.model_details.name === "" || this.model_details.name === null) { //name
                    this.bool_name = false;
                }
                else {
                    this.model_name = this.model_details.name;
                    this.bool_name = true;
                }
                if (this.model_details.birthdate === "" || this.model_details.birthdate === null) { //birthdate
                    this.bool_birth = false;
                }
                else {
                    this.model_birthdate = this.model_details.birthdate;
                    this.bool_birth = true;
                }
                if (this.model_details.gender === "" || this.model_details.gender === null) { //gender
                    this.bool_gender = false;
                }
                else {
                    this.bool_gender = true;
                    this.model_gender = this.model_details.gender;
                }
                if (this.model_details.known_for_department === "" || this.model_details.known_for_department === null) { //known for
                    this.bool_known_for = false;
                }
                else {
                    this.bool_known_for = true;
                    this.model_known_for = this.model_details.known_for_department;
                }
                if (this.model_details.also_known_as === "" || this.model_details.also_known_as === null) { //known as
                    this.bool_other_names = false;
                }
                else {
                    this.bool_other_names = true;
                    this.model_other_names = this.model_details.also_known_as;
                }
                if (this.model_details.biography === "" || this.model_details.biography === null) {
                    this.bool_bio = false;
                }
                else {
                    this.bool_bio = true;
                    this.model_biography = this.model_details.biography;
                }
                if (this.model_details.homepage === null || this.model_details.homepage === "") { //website
                    this.bool_website = false;
                }
                else {
                    this.model_homepage = this.model_details.homepage;
                    this.bool_website = true;
                }
                // bool_name
                // bool_birth
                // bool_website
                // bool_birth_place
                // bool_other_names
                // bool_known_for"
                if (this.model_details.place_of_birth === "" || this.model_details.place_of_birth === null) {
                    this.bool_birth_place = false;
                }
                else {
                    this.bool_birth_place = true;
                    this.model_place_of_birth = this.model_details.place_of_birth;
                }
                this.profile_path = profile;
            });
        }
        catch (_a) {
            console.log("ERROR!!!!");
        }
        try {
            this.service.each_cast_socials(castid).subscribe((response) => {
                this.isocials = response;
                if (this.isocials.imdb_id === "") {
                    this.bool_imdb_id = false;
                }
                else {
                    this.bool_imdb_id = true;
                }
                this.imdb_id = "https://www.imdb.com/name/" + this.isocials.imdb_id;
                if (this.isocials.facebook_id === "") {
                    this.bool_fb = false;
                }
                else {
                    this.bool_fb = true;
                }
                this.fb = "https://www.facebook.com/" + this.isocials.facebook_id;
                if (this.isocials.instagram_id === "") {
                    this.bool_insta = false;
                }
                else {
                    this.bool_insta = true;
                }
                this.insta = "https://www.instagram.com/" + this.isocials.instagram_id;
                if (this.isocials.twitter_id === "") {
                    this.bool_tweet = false;
                }
                else {
                    this.bool_tweet = true;
                }
                this.tweet = "https://twitter.com/" + this.isocials.twitter_id;
                //console.log("tweet id", this.tweet);
            });
        }
        catch (_b) {
            console.log("ERROR!!!!");
        }
    }
    check_if_added_to_watchlist() {
        if (localStorage.getItem("watchlist") === null) {
        }
        else {
            // console.log("it does call", this.idUse);
            let key = "watchlist";
            this.check_json = JSON.parse(localStorage.getItem(key));
            //console.log("check_json", this.check_json);
            for (var i = 0; i < this.check_json.length; i++) {
                if (this.idUse === this.check_json[i].id && this.media_type === "movie") {
                    this.button_text = false;
                    // console.log("to be removed", i);
                    //console.log("before romoval", this.check_json);
                    this.move_the_value = this.check_json.splice(i, 1);
                    // console.log("this.check_json", this.check_json);
                    this.check_json.push(this.move_the_value[0]);
                    localStorage.removeItem(key);
                    localStorage.setItem(key, JSON.stringify(this.check_json));
                    //console.log("final", this.check_json);
                    break;
                }
            }
        }
    }
    Similar_movies(mob) {
        this.service.Get_Similar_Movies(this.idUse).subscribe((response) => {
            this.resp_movie_details = response;
            let t = this.resp_movie_details;
            //console.log(" this.resp_movie_details", this.resp_movie_details);
            var keys = Object.keys(this.resp_movie_details);
            if (mob !== true) {
                this.showNavigationIndicators_movie_details = true;
                this.send_data_movie_details = [];
                var j = -1;
                for (var i = 0; i < t.length; i++) {
                    if (i % 6 == 0) {
                        j++;
                        this.send_data_movie_details[j] = [];
                        this.send_data_movie_details[j].push(t[i]);
                    }
                    else {
                        this.send_data_movie_details[j].push(t[i]);
                    }
                    // console.log("Sim_movies", this.send_data_movie_details);
                }
            }
        }, (error) => { console.log("error in recc movies", error); });
    }
    ;
    Reccom_movies(mob) {
        this.service.get_Recommended_Movies(this.idUse).subscribe((response) => {
            this.recc_movie_details = response;
            let t = this.recc_movie_details;
            console.log(" this._movie_details", this.recc_movie_details);
            var keys = Object.keys(this.recc_movie_details);
            if (mob !== true) {
                this.showNavigationIndicators_movie_details = true;
                this.desktop_recc = [];
                var j = -1;
                for (var i = 0; i < t.length; i++) {
                    if (i % 6 == 0) {
                        console.log("entered if");
                        j++;
                        this.desktop_recc[j] = [];
                        this.desktop_recc[j].push(t[i]);
                    }
                    else {
                        console.log("entered else");
                        this.desktop_recc[j].push(t[i]);
                    }
                    //  console.log("recc_movies", this.desktop_recc);
                }
            }
        }, (error) => { console.log("error in recc movies", error); });
    }
    ;
    routeToPage(id) {
        // this.router.navigate(['/watch/movie/', id]);
        let x = '/watch/movie/' + id;
        // this.ngOnInit();
        // console.log("Before or after??");
        document.documentElement.scrollTop = 0;
        this.redirectTo(x);
    }
    redirectTo(uri) {
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => this.router.navigate([uri]));
    }
}
MovieDetailsComponent.ɵfac = function MovieDetailsComponent_Factory(t) { return new (t || MovieDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_hw8_service__WEBPACK_IMPORTED_MODULE_3__["ServiceHw8Service"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["BreakpointObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
MovieDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MovieDetailsComponent, selectors: [["app-movie-details"]], decls: 36, vars: 16, consts: [[1, "try-test"], [1, "my-outer"], [1, "container"], [1, "row"], [1, "col-lg-8"], [1, "embed-responsive", "embed-responsive-16by9"], [1, "embed-responsive-item", 3, "videoId", "width", "height"], ["class", "col-lg-4 ", 4, "ngIf"], ["class", "col-lg-12", 4, "ngIf"], [1, "col-lg-12"], [1, "word_share"], ["target", "_blank", "rel", "noopener noreferrer", 1, "class_icon", 3, "href"], [1, "fab", "fa-twitter"], [1, "fab", "fa-facebook-square", "colo_fb"], [1, "col-sm-12"], [1, "row", "flex-row", "flex-nowrap", "my-all-cards"], [4, "ngFor", "ngForOf"], ["content", ""], ["class", "row space-above", 4, "ngIf"], ["class", "row", 4, "ngIf"], [3, "showNavigationArrows", "showNavigationIndicators", "interval", 4, "ngIf"], ["class", "my-no-wrap", 3, "showNavigationArrows", "showNavigationIndicators", "interval", 4, "ngIf"], [1, "col-lg-4"], ["class", "first_title", 4, "ngIf"], [1, "my_tag_line"], [1, "my_date_line"], [1, "my_genre"], [1, "gen_and_spoken"], [1, "my_spoken"], ["id", "btnSubmit", "value", "Not_added", 1, "btn", "btn-primary", 3, "click"], ["id", "added", 1, "alert", "alert-success", "collapse"], ["id", "linkClose", 1, "close"], ["id", "removed", 1, "alert", "alert-danger", "collapse"], ["id", "linkClosehere", 1, "close"], [1, "first_title"], [1, "word_h4_description"], [1, "the_description"], [1, "card", "card-block", "my-card", 2, "border", "0px solid red", 3, "click"], ["alt", "not working", 1, "my-image-class", 3, "src"], [1, "my-color-black", 2, "font-weight", "700"], [1, "as", 2, "font-weight", "700"], [1, "my-character"], [1, "modal-header", "make-it-black"], ["class", "modal-title my-title-format", 4, "ngIf"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "col-md-3"], ["alt", "", 1, "fit-the-div", 3, "src"], [1, "col-md-9"], ["class", "make-it-black", 4, "ngIf"], ["popContent0", ""], ["target", "_blank", "rel", "noopener noreferrer", "triggers", "hover", "class", "class_icon", 3, "href", "ngbPopover", 4, "ngIf"], ["popContent1", ""], ["popContent2", ""], ["popContent3", ""], [1, "col-md-12"], [1, "modal-title", "my-title-format"], [1, "make-it-black"], ["target", "_blank", "rel", "noopener noreferrer", "triggers", "hover", 1, "class_icon", 3, "href", "ngbPopover"], [1, "fab", "fab", "fa-imdb", "colYel"], [1, "fab", "fa-instagram", "col_insta"], [1, "row", "space-above"], [1, "span_list_reviews"], [1, "row", "space-generation"], [1, "card"], [1, "card-block"], [1, "row", "margin-declaration"], [1, "col-md-2", "col-sm-12"], [4, "ngIf"], ["class", "center-align-it", 4, "ngIf"], [1, "col-md-10", "col-sm-12"], [1, "make-it-black", "me-style-it"], [1, "make-it-black", "my-cut-to-3"], [1, "make-it-black", "make-it-pretty"], ["target", "_blank", "rel", "noopener noreferrer", 3, "href"], ["alt", "", 1, "my-image", 3, "src"], [1, "center-align-it"], [1, "make-it-black", "make-it-bold"], [1, "ratings"], [1, "make-it-black", "make-inline", "make-it-bold"], [3, "showNavigationArrows", "showNavigationIndicators", "interval"], ["ngbSlide", "", "class", "col-xs-8"], [3, "poster", "id", "media_type", "title"], [1, "my-no-wrap", 3, "showNavigationArrows", "showNavigationIndicators", "interval"], ["ngbSlide", ""], [1, "my-warp-around"], ["class", "my-display-card col-md-2", 4, "ngFor", "ngForOf"], [1, "my-display-card", "col-md-2"], [1, "card", "border-0", "box", "card-my", "text-white", "bg-dark", "mb-3", 3, "poster", "id", "media_type", "title"]], template: function MovieDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "youtube-player", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, MovieDetailsComponent_div_7_Template, 26, 8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, MovieDetailsComponent_div_9_Template, 5, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Share ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Full Cast and Crew");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, MovieDetailsComponent_div_24_Template, 9, 3, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, MovieDetailsComponent_ng_template_25_Template, 33, 14, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, MovieDetailsComponent_div_27_Template, 7, 1, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, MovieDetailsComponent_div_28_Template, 20, 11, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, MovieDetailsComponent_div_29_Template, 4, 0, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, MovieDetailsComponent_ngb_carousel_30_Template, 2, 4, "ngb-carousel", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, MovieDetailsComponent_ngb_carousel_31_Template, 2, 4, "ngb-carousel", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, MovieDetailsComponent_div_33_Template, 4, 0, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, MovieDetailsComponent_ngb_carousel_34_Template, 2, 4, "ngb-carousel", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, MovieDetailsComponent_ngb_carousel_35_Template, 2, 4, "ngb-carousel", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("videoId", ctx.video_id)("width", 560)("height", 360);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.movie_details);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.movie_details);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx.twitter_share, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx.fb_shar, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.cast);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.reviews_exist);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.reviews);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.similar_movies);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.mobile && ctx.similar_movies);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.mobile && ctx.similar_movies);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.recc_movies);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.mobile && ctx.recc_movies);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.mobile && ctx.recc_movies);
    } }, directives: [_angular_youtube_player__WEBPACK_IMPORTED_MODULE_6__["YouTubePlayer"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbPopover"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbCarousel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbSlide"], _hovercomp_hovercomp_component__WEBPACK_IMPORTED_MODULE_8__["HovercompComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]], styles: [".my-outer[_ngcontent-%COMP%]{\r\n    margin-right:20px ;\r\n    margin-left:20px;\r\n}\r\n\r\n.first_title[_ngcontent-%COMP%]{\r\n    font-size: 40px;\r\n    font-weight:490;\r\n    color: rgb(225, 225, 225);\r\n}\r\n\r\n.my_tag_line[_ngcontent-%COMP%]{\r\n    font-style: italic;\r\n    color: rgb(200, 200, 200);\r\n}\r\n\r\n.my_date_line[_ngcontent-%COMP%]{\r\n    color: rgb(200, 200, 200);\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n}\r\n\r\n.card-my[_ngcontent-%COMP%]:hover {\r\n    transform: translate3d(0,-1px,0) scale(1.1);\r\n    transition: all .1s ease-in-out;\r\n\r\n  }\r\n\r\n.btn[_ngcontent-%COMP%]:focus {\r\n    box-shadow: none;\r\n  }\r\n\r\n.my_spoken[_ngcontent-%COMP%]{\r\n    padding-bottom: 15px;\r\n}\r\n\r\n.my_genre[_ngcontent-%COMP%], .my_spoken[_ngcontent-%COMP%]{\r\n    color: rgb(200, 200, 200);\r\n}\r\n\r\n.gen_and_spoken[_ngcontent-%COMP%]{\r\n    color: rgb(225, 225, 225);\r\n}\r\n\r\n.word_h4_description[_ngcontent-%COMP%]{\r\n    padding-top: 10px;\r\n    font-weight:600;\r\n}\r\n\r\n.the_description[_ngcontent-%COMP%]{\r\n    color: rgb(200, 200, 200);\r\n}\r\n\r\n.colo_fb[_ngcontent-%COMP%]{\r\n    color:blue;\r\n}\r\n\r\n.class_icon[_ngcontent-%COMP%]{\r\nfont-size: 20px;\r\npadding-right:10px ;\r\n}\r\n\r\n.word_share[_ngcontent-%COMP%]{\r\n    padding-top:20px ;\r\n}\r\n\r\n.my-color-black[_ngcontent-%COMP%]{\r\n    color: black;\r\n    text-align: center;\r\n}\r\n\r\n.my-card[_ngcontent-%COMP%]{\r\n\r\n    max-width: 160px;\r\n    margin-right: 17px;\r\n    border-radius: 10px;\r\n    border: 0px;\r\n \r\n}\r\n\r\n .my-card:hover{\r\n    cursor: pointer;\r\n}\r\n\r\n.my-all-cards[_ngcontent-%COMP%]{\r\n    overflow-x: scroll;\r\n    margin-left: 5px;\r\n\r\n}\r\n\r\n.as[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    color: black;\r\n}\r\n\r\n.my-character[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    color: black;\r\n}\r\n\r\n.my-image-class[_ngcontent-%COMP%]{\r\n    border-top-left-radius: 10px;\r\n    border-top-right-radius: 10px;\r\n    border-bottom-left-radius: 0px;\r\n    border-bottom-right-radius: 0px;\r\n    margin: 0;\r\n    border:0px solid red;\r\n\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n    height: 5px;\r\n    border-radius: 10px;\r\n    margin-top: 10px;\r\n    \r\n  }\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\r\n    box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.3);\r\n    border-radius: 10px;\r\n    border-left: 0.5px solid rgb(30, 30, 41);\r\n  }\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n    background-color: darkgrey;\r\n    \r\n    border-radius: 10px;\r\n    width: 2px;\r\n  }\r\n\r\n.my-title-format[_ngcontent-%COMP%]{\r\n      color: #000;\r\n  }\r\n\r\n.make-it-black[_ngcontent-%COMP%]{\r\n    color: #000;\r\n  }\r\n\r\n.fit-the-div[_ngcontent-%COMP%]{\r\n      width: 100%;\r\n  }\r\n\r\n.make-it-black[_ngcontent-%COMP%]{\r\n      color: black;\r\n  }\r\n\r\n.colYel[_ngcontent-%COMP%]{\r\n      color: sandybrown;\r\n  }\r\n\r\n.col_insta[_ngcontent-%COMP%]{\r\n      color: rgb(198, 53,132);\r\n  }\r\n\r\n.span_list_reviews[_ngcontent-%COMP%]{\r\n      color: rgb(105, 104, 104);\r\n  }\r\n\r\n.my-image[_ngcontent-%COMP%]{\r\n      width: 50px;\r\n      height: 50px;\r\n  }\r\n\r\n.center-align-it[_ngcontent-%COMP%]{\r\n      text-align: center;\r\n  }\r\n\r\n.make-inline[_ngcontent-%COMP%]{\r\n      display: contents;\r\n  }\r\n\r\n.ratings[_ngcontent-%COMP%]{\r\n      color: white;\r\n      background-color: black;\r\n      border-radius: 20px;\r\n      padding-left: 10px;\r\n      padding-right: 10px;\r\n\r\n  }\r\n\r\n.make-it-bold[_ngcontent-%COMP%]{\r\n      font-weight: 670;\r\n      font-size: 17px;\r\n  }\r\n\r\n.me-style-it[_ngcontent-%COMP%]{\r\n      color: rgb(145, 139, 145);\r\n      font-size: 15px;\r\n  }\r\n\r\n.my-cut-to-3[_ngcontent-%COMP%]{\r\n    display: -webkit-box;\r\n    -webkit-line-clamp: 3;\r\n    -webkit-box-orient: vertical;\r\n    overflow: hidden;\r\n  }\r\n\r\n.make-it-pretty[_ngcontent-%COMP%]{\r\n      text-decoration: underline;\r\n      margin-top: 20px;\r\n      margin-bottom: 20px;\r\n  }\r\n\r\n.margin-declaration[_ngcontent-%COMP%]{\r\n      margin: 10px;\r\n  }\r\n\r\n.space-generation[_ngcontent-%COMP%]{\r\n      margin-bottom: 15px;\r\n  }\r\n\r\n.space-above[_ngcontent-%COMP%]{\r\n      margin-top: 20px;\r\n  }\r\n\r\n.my-img-class[_ngcontent-%COMP%]{ \r\n    max-height: 260px;\r\n    width:100% ;\r\n}\r\n\r\n .my-img-class:hover{\r\n    cursor: pointer;\r\n    transform: scale(1.1);\r\n}\r\n\r\n.my-img-class[_ngcontent-%COMP%]:hover{\r\n    background-image: linear-gradient(transparent, rgba(0,0,0,0.3) 45%, rgba(0,0,0,1) 80%);\r\n  \r\n    }\r\n\r\n\r\n\r\n .carousel-inner{\r\n        overflow: visible!important;\r\n    }\r\n\r\n .carousel-indicators{  \r\n        bottom: -40px !important;\r\n    }\r\n\r\nngb-carousel[_ngcontent-%COMP%]:focus{  \r\n    outline: none;\r\n}\r\n\r\n.my-image-card-phone-size[_ngcontent-%COMP%]{\r\n    max-height: 400px;\r\n    min-width: 270px;\r\n\r\n}\r\n\r\n.my-image-card-size[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n\r\n}\r\n\r\n.my-image-card-phone-size[_ngcontent-%COMP%]{\r\n    max-height: 400px;\r\n    min-width: 270px;\r\n\r\n}\r\n\r\n.try-test[_ngcontent-%COMP%]{\r\n    margin-left: 10px;\r\n    margin-right: 10px;\r\n    margin-top: 0;\r\n    margin-bottom: 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vdmllLWRldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZUFBZTtJQUNmLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLDJDQUEyQztJQUMzQywrQkFBK0I7O0VBRWpDOztBQUVGO0lBQ0ksZ0JBQWdCO0VBQ2xCOztBQUNGO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUNBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7QUFDQSxlQUFlO0FBQ2YsbUJBQW1CO0FBQ25COztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTs7SUFFSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixXQUFXOztBQUVmOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7O0FBRXBCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLDRCQUE0QjtJQUM1Qiw2QkFBNkI7SUFDN0IsOEJBQThCO0lBQzlCLCtCQUErQjtJQUMvQixTQUFTO0lBQ1Qsb0JBQW9COztBQUV4Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsZ0JBQWdCOztFQUVsQjs7QUFFQTtJQUNFLDRDQUE0QztJQUM1QyxtQkFBbUI7SUFDbkIsd0NBQXdDO0VBQzFDOztBQUVBO0lBQ0UsMEJBQTBCO0lBQzFCLGtDQUFrQztJQUNsQyxtQkFBbUI7SUFDbkIsVUFBVTtFQUNaOztBQUVBO01BQ0ksV0FBVztFQUNmOztBQUVBO0lBQ0UsV0FBVztFQUNiOztBQUVBO01BQ0ksV0FBVztFQUNmOztBQUVBO01BQ0ksWUFBWTtFQUNoQjs7QUFFQTtNQUNJLGlCQUFpQjtFQUNyQjs7QUFFQTtNQUNJLHVCQUF1QjtFQUMzQjs7QUFFQTtNQUNJLHlCQUF5QjtFQUM3Qjs7QUFFQTtNQUNJLFdBQVc7TUFDWCxZQUFZO0VBQ2hCOztBQUVBO01BQ0ksa0JBQWtCO0VBQ3RCOztBQUVBO01BQ0ksaUJBQWlCO0VBQ3JCOztBQUVBO01BQ0ksWUFBWTtNQUNaLHVCQUF1QjtNQUN2QixtQkFBbUI7TUFDbkIsa0JBQWtCO01BQ2xCLG1CQUFtQjs7RUFFdkI7O0FBRUE7TUFDSSxnQkFBZ0I7TUFDaEIsZUFBZTtFQUNuQjs7QUFFQTtNQUNJLHlCQUF5QjtNQUN6QixlQUFlO0VBQ25COztBQUVBO0lBQ0Usb0JBQW9CO0lBQ3BCLHFCQUFxQjtJQUNyQiw0QkFBNEI7SUFDNUIsZ0JBQWdCO0VBQ2xCOztBQUdBO01BQ0ksMEJBQTBCO01BQzFCLGdCQUFnQjtNQUNoQixtQkFBbUI7RUFDdkI7O0FBRUE7TUFDSSxZQUFZO0VBQ2hCOztBQUVBO01BQ0ksbUJBQW1CO0VBQ3ZCOztBQUVBO01BQ0ksZ0JBQWdCO0VBQ3BCOztBQUVBLGVBQWUsdUJBQXVCO0lBQ3BDLGlCQUFpQjtJQUNqQixXQUFXO0FBQ2Y7O0FBQ0E7SUFDSSxlQUFlO0lBQ2YscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksc0ZBQXNGOztJQUV0Rjs7QUFDSjs7Ozs7T0FLTzs7QUFHSDtRQUNJLDJCQUEyQjtJQUMvQjs7QUFHQTtRQUNJLHdCQUF3QjtJQUM1Qjs7QUFDSixxQkFBcUIsdUJBQXVCO0lBQ3hDLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCOztBQUVwQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsb0JBQW9COztBQUV4Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7O0FBRXBCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6Im1vdmllLWRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teS1vdXRlcntcclxuICAgIG1hcmdpbi1yaWdodDoyMHB4IDtcclxuICAgIG1hcmdpbi1sZWZ0OjIwcHg7XHJcbn1cclxuXHJcbi5maXJzdF90aXRsZXtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIGZvbnQtd2VpZ2h0OjQ5MDtcclxuICAgIGNvbG9yOiByZ2IoMjI1LCAyMjUsIDIyNSk7XHJcbn1cclxuXHJcbi5teV90YWdfbGluZXtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIGNvbG9yOiByZ2IoMjAwLCAyMDAsIDIwMCk7XHJcbn1cclxuXHJcbi5teV9kYXRlX2xpbmV7XHJcbiAgICBjb2xvcjogcmdiKDIwMCwgMjAwLCAyMDApO1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLmNhcmQtbXk6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLC0xcHgsMCkgc2NhbGUoMS4xKTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuMXMgZWFzZS1pbi1vdXQ7XHJcblxyXG4gIH1cclxuXHJcbi5idG46Zm9jdXMge1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICB9XHJcbi5teV9zcG9rZW57XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuLm15X2dlbnJlLCAubXlfc3Bva2Vue1xyXG4gICAgY29sb3I6IHJnYigyMDAsIDIwMCwgMjAwKTtcclxufVxyXG4uZ2VuX2FuZF9zcG9rZW57XHJcbiAgICBjb2xvcjogcmdiKDIyNSwgMjI1LCAyMjUpO1xyXG59XHJcblxyXG4ud29yZF9oNF9kZXNjcmlwdGlvbntcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6NjAwO1xyXG59XHJcblxyXG4udGhlX2Rlc2NyaXB0aW9ue1xyXG4gICAgY29sb3I6IHJnYigyMDAsIDIwMCwgMjAwKTtcclxufVxyXG5cclxuLmNvbG9fZmJ7XHJcbiAgICBjb2xvcjpibHVlO1xyXG59XHJcblxyXG4uY2xhc3NfaWNvbntcclxuZm9udC1zaXplOiAyMHB4O1xyXG5wYWRkaW5nLXJpZ2h0OjEwcHggO1xyXG59XHJcblxyXG4ud29yZF9zaGFyZXtcclxuICAgIHBhZGRpbmctdG9wOjIwcHggO1xyXG59XHJcblxyXG4ubXktY29sb3ItYmxhY2t7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5teS1jYXJke1xyXG5cclxuICAgIG1heC13aWR0aDogMTYwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE3cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyOiAwcHg7XHJcbiBcclxufVxyXG5cclxuOjpuZy1kZWVwLm15LWNhcmQ6aG92ZXJ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5teS1hbGwtY2FyZHN7XHJcbiAgICBvdmVyZmxvdy14OiBzY3JvbGw7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG5cclxufVxyXG5cclxuLmFze1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4ubXktY2hhcmFjdGVye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4ubXktaW1hZ2UtY2xhc3N7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwcHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMHB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgYm9yZGVyOjBweCBzb2xpZCByZWQ7XHJcblxyXG59XHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIGhlaWdodDogNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBcclxuICB9XHJcbiAgIFxyXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyLWxlZnQ6IDAuNXB4IHNvbGlkIHJnYigzMCwgMzAsIDQxKTtcclxuICB9XHJcbiAgIFxyXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyZXk7XHJcbiAgICAvKiBvdXRsaW5lOiAxcHggc29saWQgc2xhdGVncmV5OyAqL1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHdpZHRoOiAycHg7XHJcbiAgfVxyXG5cclxuICAubXktdGl0bGUtZm9ybWF0e1xyXG4gICAgICBjb2xvcjogIzAwMDtcclxuICB9XHJcblxyXG4gIC5tYWtlLWl0LWJsYWNre1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgfVxyXG5cclxuICAuZml0LXRoZS1kaXZ7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLm1ha2UtaXQtYmxhY2t7XHJcbiAgICAgIGNvbG9yOiBibGFjaztcclxuICB9XHJcblxyXG4gIC5jb2xZZWx7XHJcbiAgICAgIGNvbG9yOiBzYW5keWJyb3duO1xyXG4gIH1cclxuXHJcbiAgLmNvbF9pbnN0YXtcclxuICAgICAgY29sb3I6IHJnYigxOTgsIDUzLDEzMik7XHJcbiAgfVxyXG5cclxuICAuc3Bhbl9saXN0X3Jldmlld3N7XHJcbiAgICAgIGNvbG9yOiByZ2IoMTA1LCAxMDQsIDEwNCk7XHJcbiAgfVxyXG5cclxuICAubXktaW1hZ2V7XHJcbiAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgfSBcclxuXHJcbiAgLmNlbnRlci1hbGlnbi1pdHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLm1ha2UtaW5saW5le1xyXG4gICAgICBkaXNwbGF5OiBjb250ZW50cztcclxuICB9XHJcblxyXG4gIC5yYXRpbmdze1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcblxyXG4gIH1cclxuXHJcbiAgLm1ha2UtaXQtYm9sZHtcclxuICAgICAgZm9udC13ZWlnaHQ6IDY3MDtcclxuICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gIH1cclxuXHJcbiAgLm1lLXN0eWxlLWl0e1xyXG4gICAgICBjb2xvcjogcmdiKDE0NSwgMTM5LCAxNDUpO1xyXG4gICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgfVxyXG5cclxuICAubXktY3V0LXRvLTN7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIC13ZWJraXQtbGluZS1jbGFtcDogMztcclxuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIH1cclxuXHJcblxyXG4gIC5tYWtlLWl0LXByZXR0eXtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgfVxyXG5cclxuICAubWFyZ2luLWRlY2xhcmF0aW9ue1xyXG4gICAgICBtYXJnaW46IDEwcHg7XHJcbiAgfVxyXG5cclxuICAuc3BhY2UtZ2VuZXJhdGlvbntcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICB9XHJcblxyXG4gIC5zcGFjZS1hYm92ZXtcclxuICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICB9XHJcblxyXG4gIC5teS1pbWctY2xhc3N7IC8qZnJvbSBwb3B1bGFyIG1vdmllZXMqL1xyXG4gICAgbWF4LWhlaWdodDogMjYwcHg7XHJcbiAgICB3aWR0aDoxMDAlIDtcclxufVxyXG46Om5nLWRlZXAubXktaW1nLWNsYXNzOmhvdmVye1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG59XHJcblxyXG4ubXktaW1nLWNsYXNzOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50LCByZ2JhKDAsMCwwLDAuMykgNDUlLCByZ2JhKDAsMCwwLDEpIDgwJSk7XHJcbiAgXHJcbiAgICB9XHJcbi8qIFxyXG4gICAgOjpuZy1kZWVwIGltZ3tcclxuICAgICAgICB6LWluZGV4Oi0xO1xyXG4gICAgICAgIG1hc2staW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMCwwLDAsMCkgMCUscmdiYSgwLDAsMCwwLjY1KSAxMDAlKTtcclxuICAgICAgICAtd2Via2l0LW1hc2staW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMCwwLDAsMCkgMCUscmdiYSgwLDAsMCwwLjY1KSAxMDAlKTtcclxuICAgIH0gKi9cclxuXHJcblxyXG4gICAgOjpuZy1kZWVwLmNhcm91c2VsLWlubmVye1xyXG4gICAgICAgIG92ZXJmbG93OiB2aXNpYmxlIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgOjpuZy1kZWVwLmNhcm91c2VsLWluZGljYXRvcnN7ICBcclxuICAgICAgICBib3R0b206IC00MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9IFxyXG5uZ2ItY2Fyb3VzZWw6Zm9jdXN7ICAvKmZyb20gcG9wdWxhciBtb3ZpZWVzKi9cclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi5teS1pbWFnZS1jYXJkLXBob25lLXNpemV7XHJcbiAgICBtYXgtaGVpZ2h0OiA0MDBweDtcclxuICAgIG1pbi13aWR0aDogMjcwcHg7XHJcblxyXG59XHJcblxyXG4ubXktaW1hZ2UtY2FyZC1zaXple1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuXHJcbn1cclxuXHJcbi5teS1pbWFnZS1jYXJkLXBob25lLXNpemV7XHJcbiAgICBtYXgtaGVpZ2h0OiA0MDBweDtcclxuICAgIG1pbi13aWR0aDogMjcwcHg7XHJcblxyXG59XHJcblxyXG4udHJ5LXRlc3R7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG59Il19 */"] });


/***/ }),

/***/ "rRuK":
/*!****************************************************!*\
  !*** ./src/app/search-nav/search-nav.component.ts ***!
  \****************************************************/
/*! exports provided: SearchNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchNavComponent", function() { return SearchNavComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_hw8_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-hw8.service */ "Lsth");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");







function SearchNavComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "ngb-highlight", 13);
} if (rf & 2) {
    const r_r2 = ctx.result;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", r_r2.backdrop_path, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("result", r_r2.name)("term", ctx_r1.searchTermModel);
} }
class SearchNavComponent {
    constructor(service, router) {
        this.service = service;
        this.router = router;
    }
    ngOnInit() {
        this.search = (text$) => text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["switchMap"])(term => this.service.TypeHeadData(term).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(() => { console.log("received"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(() => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])([]);
        }))));
        this.formatter = (x) => x.name;
    }
    RouteToHomePage() {
        this.router.navigate(['/']);
    }
    RouteToMyList() {
        this.router.navigate(['/mylist']);
    }
    Route(id, media) {
        console.log("this works");
    }
    selectedItem(item) {
        item.preventDefault(); //empty textbox
        this.searchTermModel = null;
        // this.clickedItem=item.item;
        console.log(item);
        let k = item.item;
        if (k.media_type === "movie") {
            let x = '/watch/movie/' + k.id;
            this.redirectTo(x);
            //this.router.navigate(['/watch/movie/', k.id])
            //this.searchTermModel = [];
            //document.getElementById('typeahead-http')!.value = "";
        }
        else {
            let x = '/watch/tv/' + k.id;
            this.redirectTo(x);
            // this.router.navigate(['/watch/tv/', k.id])
        }
        //  console.log("item id",typeof(item.));
    }
    redirectTo(uri) {
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => this.router.navigate([uri]));
    }
}
SearchNavComponent.ɵfac = function SearchNavComponent_Factory(t) { return new (t || SearchNavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_hw8_service__WEBPACK_IMPORTED_MODULE_3__["ServiceHw8Service"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
SearchNavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SearchNavComponent, selectors: [["app-search-nav"]], decls: 18, vars: 4, consts: [[1, "navbar", "navbar-expand-sm", "navbar-dark", "color_my_nav"], [1, "navbar-brand", "my-class-style", 3, "click"], ["data-toggle", "collapse", "data-target", "#my-data-tar", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "my-data-tar", 1, "collapse", "navbar-collapse"], [1, "navbar-nav"], [1, "nav-item", "ml-auto"], [1, "nav-link", "my-class-style", 3, "click"], [1, "navbar-nav", "ml-auto"], ["rt", ""], ["id", "typeahead-http", "type", "text", "placeholder", "Search", 1, "form-control", 2, "width", "200px", 3, "ngModel", "ngbTypeahead", "resultTemplate", "inputFormatter", "ngModelChange", "selectItem"], [2, "margin-bottom", "20px"], [1, "mr-1", 2, "width", "80px", 3, "src"], [3, "result", "term"]], template: function SearchNavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SearchNavComponent_Template_a_click_1_listener() { return ctx.RouteToHomePage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "USC Films");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SearchNavComponent_Template_a_click_8_listener() { return ctx.RouteToHomePage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SearchNavComponent_Template_a_click_11_listener() { return ctx.RouteToMyList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "My List");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, SearchNavComponent_ng_template_14_Template, 2, 3, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function SearchNavComponent_Template_input_ngModelChange_16_listener($event) { return ctx.searchTermModel = $event; })("selectItem", function SearchNavComponent_Template_input_selectItem_16_listener($event) { return ctx.selectedItem($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "div", 11);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.searchTermModel)("ngbTypeahead", ctx.search)("resultTemplate", _r0)("inputFormatter", ctx.formatter);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbNavbar"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbTypeahead"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbHighlight"]], styles: [".my-class-style[_ngcontent-%COMP%]{\r\n    cursor: pointer;\r\n} \r\n#typeahead-http[_ngcontent-%COMP%]{\r\n    background-color: #03061c !important;\r\n    border-radius: 0px;\r\n    border: none;\r\n    border-bottom: 1px solid white;\r\n    outline: none;\r\n} \r\n#typeahead-http[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:active{\r\n    outline: none;\r\n} \r\ninput[_ngcontent-%COMP%]:focus, textarea[_ngcontent-%COMP%] {\r\n    outline: none !important;\r\n} \r\n  .navbar .dropdown-menu {\r\n    background-color: rgb(4, 4, 54)!important;\r\n \r\n    } \r\n  .navbar .dropdown-item{\r\n        color: aliceblue!important;\r\n    } \r\n.color_my_nav[_ngcontent-%COMP%]{\r\n    background-color: #03061c;\r\n} \r\ninput[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{\r\n    color: #ffffff;\r\n    outline: none;\r\n} \r\ntextarea[_ngcontent-%COMP%]:focus, input[_ngcontent-%COMP%]:focus {\r\n    color: #ffffff;\r\n    outline: none;\r\n} \r\n .ui-inputtext:enabled:focus:not(.ui-state-error) {\r\n    outline: 0 none !important;\r\n    outline-offset: 0 !important;\r\n  \r\n \r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC1uYXYuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLG9DQUFvQztJQUNwQyxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLDhCQUE4QjtJQUM5QixhQUFhO0FBQ2pCO0FBRUE7SUFDSSxhQUFhO0FBQ2pCO0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7QUFHQTtJQUNJLHlDQUF5Qzs7SUFFekM7QUFFQTtRQUNJLDBCQUEwQjtJQUM5QjtBQUNKO0lBQ0kseUJBQXlCO0FBQzdCO0FBRUE7SUFDSSxjQUFjO0lBQ2QsYUFBYTtBQUNqQjtBQUVBO0lBQ0ksY0FBYztJQUNkLGFBQWE7QUFDakI7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQiw0QkFBNEI7OztFQUc5QiIsImZpbGUiOiJzZWFyY2gtbmF2LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXktY2xhc3Mtc3R5bGV7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn0gXHJcbiN0eXBlYWhlYWQtaHR0cHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMzA2MWMgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbiN0eXBlYWhlYWQtaHR0cCA6YWN0aXZle1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuaW5wdXQ6Zm9jdXMsIHRleHRhcmVhIHtcclxuICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbjo6bmctZGVlcCAubmF2YmFyIC5kcm9wZG93bi1tZW51IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0LCA0LCA1NCkhaW1wb3J0YW50O1xyXG4gXHJcbiAgICB9XHJcblxyXG4gICAgOjpuZy1kZWVwIC5uYXZiYXIgLmRyb3Bkb3duLWl0ZW17XHJcbiAgICAgICAgY29sb3I6IGFsaWNlYmx1ZSFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbi5jb2xvcl9teV9uYXZ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDMwNjFjO1xyXG59XHJcblxyXG5pbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYXtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxudGV4dGFyZWE6Zm9jdXMsIGlucHV0OmZvY3VzIHtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuOjpuZy1kZWVwLnVpLWlucHV0dGV4dDplbmFibGVkOmZvY3VzOm5vdCgudWktc3RhdGUtZXJyb3IpIHtcclxuICAgIG91dGxpbmU6IDAgbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgb3V0bGluZS1vZmZzZXQ6IDAgIWltcG9ydGFudDtcclxuICBcclxuIFxyXG4gIH0iXX0= */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule, routingComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routingComponents", function() { return routingComponents; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home01_home01_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home01/home01.component */ "MB8E");
/* harmony import */ var _tvshows_tvshows_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tvshows/tvshows.component */ "iqFE");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./movie-details/movie-details.component */ "r0S5");
/* harmony import */ var _mylist_mylist_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mylist/mylist.component */ "76GK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");








const routes = [
    { path: 'watch/movie/:id', component: _movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_4__["MovieDetailsComponent"] },
    { path: 'watch/tv/:id', component: _tvshows_tvshows_component__WEBPACK_IMPORTED_MODULE_2__["TvshowsComponent"] },
    { path: 'mylist', component: _mylist_mylist_component__WEBPACK_IMPORTED_MODULE_5__["MylistComponent"] },
    { path: '**', component: _home01_home01_component__WEBPACK_IMPORTED_MODULE_1__["Home01Component"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes), _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"]], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();
const routingComponents = [_tvshows_tvshows_component__WEBPACK_IMPORTED_MODULE_2__["TvshowsComponent"], _home01_home01_component__WEBPACK_IMPORTED_MODULE_1__["Home01Component"], _movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_4__["MovieDetailsComponent"], _mylist_mylist_component__WEBPACK_IMPORTED_MODULE_5__["MylistComponent"]];


/***/ }),

/***/ "zNig":
/*!**************************************************************!*\
  !*** ./src/app/watchlist-hover/watchlist-hover.component.ts ***!
  \**************************************************************/
/*! exports provided: WatchlistHoverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WatchlistHoverComponent", function() { return WatchlistHoverComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function WatchlistHoverComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.title);
} }
function WatchlistHoverComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function WatchlistHoverComponent_div_0_Template_div_mouseover_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.isHover = true; })("mouseleave", function WatchlistHoverComponent_div_0_Template_div_mouseleave_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.isHover = false; })("click", function WatchlistHoverComponent_div_0_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.routeToPage(ctx_r5.id, ctx_r5.media_type); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, WatchlistHoverComponent_div_0_div_2_Template, 5, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.poster, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isHover);
} }
class WatchlistHoverComponent {
    constructor(router, observer) {
        this.router = router;
        this.observer = observer;
        this.mobile = false;
        this.isHover = false;
    }
    ngOnInit() {
        (this.observer.observe('(max-width: 700px)').subscribe((result) => {
            if (result.matches) {
                this.mobile = true;
            }
        }));
    }
    routeToPage(id, media) {
        console.log("routed here", "this.media", media, "id = ", id);
        if (media === "tv") {
            let x = '/watch/tv/' + id;
            document.documentElement.scrollTop = 0;
            this.redirectTo(x);
        }
        else if (media === "movie") {
            let x = '/watch/movie/' + id;
            document.documentElement.scrollTop = 0;
            this.redirectTo(x);
        }
    }
    redirectTo(uri) {
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => this.router.navigate([uri]));
    }
}
WatchlistHoverComponent.ɵfac = function WatchlistHoverComponent_Factory(t) { return new (t || WatchlistHoverComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"])); };
WatchlistHoverComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WatchlistHoverComponent, selectors: [["app-watchlist-hover"]], inputs: { poster: "poster", id: "id", media_type: "media_type", title: "title" }, decls: 1, vars: 1, consts: [["style", "cursor: pointer;", "class", " ", 3, "mouseover", "mouseleave", "click", 4, "ngIf"], [1, "", 2, "cursor", "pointer", 3, "mouseover", "mouseleave", "click"], [1, "img-fluid", "my-img-class", "card-img", "my-image-card-size", 3, "src"], ["class", " bg-overlay d-flex flex-column justify-content-end", 4, "ngIf"], [1, "bg-overlay", "d-flex", "flex-column", "justify-content-end"], [1, "text-left", "text-white"], [1, "white-text"], [2, "color", "white"]], template: function WatchlistHoverComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, WatchlistHoverComponent_div_0_Template, 3, 2, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.mobile);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: [".bg-overlay[_ngcontent-%COMP%]{\r\n    background-image:  linear-gradient(transparent, rgba(0,0,0,0.3) 45%, rgba(0,0,0,1) 80%);\r\n  width: 100%;\r\n  height: 100%;\r\n  z-index: 1000;\r\n  }\r\n\r\n\r\n\r\n  .my-image-card-size[_ngcontent-%COMP%]:after{\r\n    background-image:  linear-gradient(transparent, rgba(0,0,0,0.3) 45%, rgba(0,0,0,1) 80%);\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left:0;\r\n    right: 0;\r\n    content: '';\r\n    z-index: 1;\r\n    opacity: 0;\r\n  }\r\n\r\n\r\n\r\n  .my-image-card-size[_ngcontent-%COMP%]:hover:after{\r\n   opacity: 1;\r\n  }\r\n\r\n\r\n\r\n  .my-image-card-size[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n\r\n}\r\n\r\n\r\n\r\n  .my-image-card-phone-size[_ngcontent-%COMP%]{\r\n  max-height: 400px;\r\n  width: 60%;\r\n\r\n}\r\n\r\n\r\n\r\n   .carousel-caption {\r\n  left: 20%;\r\n  right: 20%;\r\n}\r\n\r\n\r\n\r\n  .card-img-overlay[_ngcontent-%COMP%]:hover{\r\n    transform: scale(1.1);\r\n}\r\n\r\n\r\n\r\n  .my-img-class[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndhdGNobGlzdC1ob3Zlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLHVGQUF1RjtFQUN6RixXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYjs7OztFQUlBO0lBQ0UsdUZBQXVGO0lBQ3ZGLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sU0FBUztJQUNULE1BQU07SUFDTixRQUFRO0lBQ1IsV0FBVztJQUNYLFVBQVU7SUFDVixVQUFVO0VBQ1o7Ozs7RUFFQTtHQUNDLFVBQVU7RUFDWDs7OztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixvQkFBb0I7O0FBRXhCOzs7O0VBRUE7RUFDRSxpQkFBaUI7RUFDakIsVUFBVTs7QUFFWjs7OztFQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7QUFDWjs7OztFQUdBO0lBQ0kscUJBQXFCO0FBQ3pCOzs7O0VBSUE7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoid2F0Y2hsaXN0LWhvdmVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmJnLW92ZXJsYXl7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAgbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50LCByZ2JhKDAsMCwwLDAuMykgNDUlLCByZ2JhKDAsMCwwLDEpIDgwJSk7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHotaW5kZXg6IDEwMDA7XHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIC5teS1pbWFnZS1jYXJkLXNpemU6YWZ0ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAgbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50LCByZ2JhKDAsMCwwLDAuMykgNDUlLCByZ2JhKDAsMCwwLDEpIDgwJSk7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OjA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG5cclxuICAubXktaW1hZ2UtY2FyZC1zaXplOmhvdmVyOmFmdGVye1xyXG4gICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuXHJcbiAgLm15LWltYWdlLWNhcmQtc2l6ZXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcblxyXG59XHJcblxyXG4ubXktaW1hZ2UtY2FyZC1waG9uZS1zaXple1xyXG4gIG1heC1oZWlnaHQ6IDQwMHB4O1xyXG4gIHdpZHRoOiA2MCU7XHJcblxyXG59XHJcblxyXG46Om5nLWRlZXAuY2Fyb3VzZWwtY2FwdGlvbiB7XHJcbiAgbGVmdDogMjAlO1xyXG4gIHJpZ2h0OiAyMCU7XHJcbn1cclxuXHJcblxyXG4uY2FyZC1pbWctb3ZlcmxheTpob3ZlcntcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxufVxyXG5cclxuXHJcblxyXG4ubXktaW1nLWNsYXNze1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map