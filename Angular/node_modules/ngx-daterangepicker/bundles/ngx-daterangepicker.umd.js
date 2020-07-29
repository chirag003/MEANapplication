(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/core"), require("@angular/forms"), require("date-fns"), require("@angular/common"), require("date-fns/locale/en"), require("date-fns/locale/es"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/core", "@angular/forms", "date-fns", "@angular/common", "date-fns/locale/en", "date-fns/locale/es"], factory);
	else if(typeof exports === 'object')
		exports["ngx-daterangepicker"] = factory(require("@angular/core"), require("@angular/forms"), require("date-fns"), require("@angular/common"), require("date-fns/locale/en"), require("date-fns/locale/es"));
	else
		root["ngx-daterangepicker"] = factory(root["@angular/core"], root["@angular/forms"], root["date-fns"], root["@angular/common"], root["date-fns/locale/en"], root["date-fns/locale/es"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_14__, __WEBPACK_EXTERNAL_MODULE_15__, __WEBPACK_EXTERNAL_MODULE_16__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return locales; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_date_fns_locale_es__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_date_fns_locale_es___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_date_fns_locale_es__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns_locale_en__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns_locale_en___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_date_fns_locale_en__);


var locales = {
    es: __WEBPACK_IMPORTED_MODULE_0_date_fns_locale_es__,
    en: __WEBPACK_IMPORTED_MODULE_1_date_fns_locale_en__,
};


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DATERANGEPICKER_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NgxDateRangePickerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_date_fns__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_date_fns___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_date_fns__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DATERANGEPICKER_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NG_VALUE_ACCESSOR"],
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return NgxDateRangePickerComponent; }),
    multi: true
};
var NgxDateRangePickerComponent = /** @class */ (function () {
    function NgxDateRangePickerComponent(elementRef, cdr) {
        this.elementRef = elementRef;
        this.cdr = cdr;
        this.mobileMode = false;
        this.defaultOptions = {
            theme: 'default',
            labels: ['Start', 'End'],
            locale: 'en',
            menu: [],
            dateFormat: 'DD-MM-YYYY',
            outputFormat: 'DD-MM-YYYY',
            outputType: 'string',
            startOfWeek: 1,
            date: null,
            mobilePx: 545
        };
        this.onTouchedCallback = function () {
        };
        this.onChangeCallback = function () {
        };
    }
    Object.defineProperty(NgxDateRangePickerComponent.prototype, "isOpen", {
        get: function () {
            return this._opened;
        },
        set: function (open) {
            if (!open) {
                this._opened = false;
            }
            else if (open !== 'from' && open !== 'to') {
                this._opened = open;
            }
            else {
                this._opened = 'from';
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxDateRangePickerComponent.prototype, "value", {
        get: function () {
            return this.modelValue;
        },
        set: function (value) {
            if (!value) {
                return;
            }
            this.modelValue = value;
            this.onChangeCallback(value);
        },
        enumerable: true,
        configurable: true
    });
    NgxDateRangePickerComponent.prototype.writeValue = function (value) {
        if (!value) {
            return;
        }
        this.modelValue = value;
    };
    NgxDateRangePickerComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    NgxDateRangePickerComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    NgxDateRangePickerComponent.prototype.ngAfterViewInit = function () {
        this.arrowLeft = this.fromInput.nativeElement.offsetWidth;
        this.cdr.detectChanges();
    };
    NgxDateRangePickerComponent.prototype.onResize = function () {
        this.mobileMode = !!(this.options.mobilePx && window.innerWidth < this.options.mobilePx);
        console.log(this.mobileMode);
    };
    NgxDateRangePickerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._opened = false;
        this.defaultOptions.date = {
            from: {
                year: __WEBPACK_IMPORTED_MODULE_2_date_fns__["getYear"](this.date),
                month: __WEBPACK_IMPORTED_MODULE_2_date_fns__["getMonth"](this.date),
                day: __WEBPACK_IMPORTED_MODULE_2_date_fns__["getDay"](this.date)
            },
            to: {
                year: __WEBPACK_IMPORTED_MODULE_2_date_fns__["getYear"](this.date),
                month: __WEBPACK_IMPORTED_MODULE_2_date_fns__["getMonth"](this.date),
                day: __WEBPACK_IMPORTED_MODULE_2_date_fns__["getDay"](__WEBPACK_IMPORTED_MODULE_2_date_fns__["addDays"](this.date, 1))
            }
        };
        this.options = this.options || this.defaultOptions;
        this.options.mobilePx = this.options.mobilePx == undefined ? this.defaultOptions.mobilePx : this.options.mobilePx;
        this.initNames();
        this.onResize();
        ;
        if (this.options.range) {
            this.selectRange(this.options.menu.filter(function (item) {
                return _this.options.range === item.alias;
            })[0]);
        }
        else {
            if (!this.options.date) {
                this.options.date = this.defaultOptions.date;
            }
            this.selectDates(this.options.date);
        }
    };
    NgxDateRangePickerComponent.prototype.ngOnChanges = function (changes) {
        this.options = this.options || this.defaultOptions;
        if (this.options.date) {
            this.selectDates(this.options.date);
        }
        this.initNames();
    };
    NgxDateRangePickerComponent.prototype.initNames = function () {
        this.dayNames = [];
        for (var i = 1; i < 7; ++i) {
            this.dayNames.push(this.getDayOfWeek(i));
        }
        this.dayNames.push(this.getDayOfWeek(0));
    };
    NgxDateRangePickerComponent.prototype.getDayOfWeek = function (day) {
        var date = new Date();
        var dayOfWeek = __WEBPACK_IMPORTED_MODULE_2_date_fns__["format"](__WEBPACK_IMPORTED_MODULE_2_date_fns__["setDay"](date, day, { weekStartsOn: 1 }), "dd", { locale: __WEBPACK_IMPORTED_MODULE_3__constants__["a" /* locales */][this.options.locale] });
        return dayOfWeek[0].toUpperCase() + dayOfWeek.substring(1);
    };
    NgxDateRangePickerComponent.prototype.generateCalendar = function () {
        var _this = this;
        this.days = [];
        var start = __WEBPACK_IMPORTED_MODULE_2_date_fns__["startOfMonth"](this.date);
        var end = __WEBPACK_IMPORTED_MODULE_2_date_fns__["endOfMonth"](this.date);
        var days = __WEBPACK_IMPORTED_MODULE_2_date_fns__["eachDay"](start, end).map(function (d) {
            var startOfWeek = _this.options.startOfWeek;
            var endOfWeek = startOfWeek === 0 ? 6 : 0;
            return {
                date: d,
                day: __WEBPACK_IMPORTED_MODULE_2_date_fns__["getDate"](d),
                weekday: __WEBPACK_IMPORTED_MODULE_2_date_fns__["getDay"](d),
                startOfWeek: startOfWeek,
                endOfWeek: endOfWeek,
                today: __WEBPACK_IMPORTED_MODULE_2_date_fns__["isToday"](d),
                firstMonthDay: __WEBPACK_IMPORTED_MODULE_2_date_fns__["isFirstDayOfMonth"](d),
                lastMonthDay: __WEBPACK_IMPORTED_MODULE_2_date_fns__["isLastDayOfMonth"](d),
                visible: true,
                from: __WEBPACK_IMPORTED_MODULE_2_date_fns__["isSameDay"](_this.dateFrom, d),
                to: __WEBPACK_IMPORTED_MODULE_2_date_fns__["isSameDay"](_this.dateTo, d),
                isWithinRange: __WEBPACK_IMPORTED_MODULE_2_date_fns__["isWithinRange"](d, _this.dateFrom, _this.dateTo)
            };
        });
        var prevMonthDayNum = __WEBPACK_IMPORTED_MODULE_2_date_fns__["getDay"](start) - 1;
        var prevMonthDays = [];
        if (prevMonthDayNum > 0) {
            prevMonthDays = Array.from(Array(prevMonthDayNum).keys()).map(function (i) {
                var d = __WEBPACK_IMPORTED_MODULE_2_date_fns__["subDays"](start, prevMonthDayNum - i);
                return {
                    date: d,
                    day: __WEBPACK_IMPORTED_MODULE_2_date_fns__["getDate"](d),
                    weekday: __WEBPACK_IMPORTED_MODULE_2_date_fns__["getDay"](d),
                    firstMonthDay: __WEBPACK_IMPORTED_MODULE_2_date_fns__["isFirstDayOfMonth"](d),
                    lastMonthDay: __WEBPACK_IMPORTED_MODULE_2_date_fns__["isLastDayOfMonth"](d),
                    today: false,
                    visible: false,
                    from: false,
                    to: false,
                    isWithinRange: false
                };
            });
        }
        this.days = prevMonthDays.concat(days);
        if (this.options.outputType === 'object') {
            this.value = {
                from: __WEBPACK_IMPORTED_MODULE_2_date_fns__["format"](this.dateFrom, this.options.outputFormat),
                to: __WEBPACK_IMPORTED_MODULE_2_date_fns__["format"](this.dateTo, this.options.outputFormat)
            };
        }
        else {
            this.value =
                __WEBPACK_IMPORTED_MODULE_2_date_fns__["format"](this.dateFrom, this.options.outputFormat) + "-" + __WEBPACK_IMPORTED_MODULE_2_date_fns__["format"](this.dateTo, this.options.outputFormat);
        }
    };
    NgxDateRangePickerComponent.prototype.toggleCalendar = function (e, selection) {
        // Arrow position
        if (selection === 'from') {
            this.arrowLeft = this.fromInput.nativeElement.offsetWidth * 0.4;
        }
        else {
            this.arrowLeft = this.fromInput.nativeElement.offsetWidth + this.fromInput.nativeElement.offsetWidth * 0.4;
        }
        if (this._opened && this._opened !== selection) {
            this._opened = selection;
        }
        else {
            this._opened = this._opened ? false : selection;
        }
    };
    NgxDateRangePickerComponent.prototype.closeCalendar = function (e) {
        this._opened = false;
    };
    NgxDateRangePickerComponent.prototype.selectDate = function (e, index) {
        e.preventDefault();
        var selectedDate = this.days[index].date;
        if ((this._opened === 'to' && __WEBPACK_IMPORTED_MODULE_2_date_fns__["isBefore"](selectedDate, this.dateFrom))) {
            this._opened = 'from';
        }
        if ((this._opened === 'from' && __WEBPACK_IMPORTED_MODULE_2_date_fns__["isAfter"](selectedDate, this.dateTo))) {
            this.dateFrom = selectedDate;
            this.dateTo = selectedDate;
        }
        if (this._opened === 'from') {
            this.dateFrom = selectedDate;
            this._opened = 'to';
        }
        else if (this._opened === 'to') {
            this.dateTo = selectedDate;
            this._opened = 'from';
        }
        if (this._opened === 'from') {
            this.arrowLeft = this.fromInput.nativeElement.offsetWidth * 0.4;
        }
        else {
            this.arrowLeft = this.fromInput.nativeElement.offsetWidth + this.fromInput.nativeElement.offsetWidth * 0.4;
        }
        if (this.options.menu && this.options.menu.length > 0) {
            this.options.menu.map(function (item) {
                item.active = false;
            });
        }
        this.generateCalendar();
    };
    NgxDateRangePickerComponent.prototype.prevMonth = function () {
        this.date = __WEBPACK_IMPORTED_MODULE_2_date_fns__["subMonths"](this.date, 1);
        this.generateCalendar();
    };
    NgxDateRangePickerComponent.prototype.nextMonth = function () {
        this.date = __WEBPACK_IMPORTED_MODULE_2_date_fns__["addMonths"](this.date, 1);
        this.generateCalendar();
    };
    NgxDateRangePickerComponent.prototype.selectDates = function (dates) {
        this.dateFrom = __WEBPACK_IMPORTED_MODULE_2_date_fns__["startOfDay"](new Date(dates.from.year, dates.from.month - 1, dates.from.day));
        this.dateTo = __WEBPACK_IMPORTED_MODULE_2_date_fns__["startOfDay"](new Date(dates.to.year, dates.to.month - 1, dates.to.day));
        if (__WEBPACK_IMPORTED_MODULE_2_date_fns__["isAfter"](this.dateFrom, this.dateTo)) {
            this.dateTo = this.dateFrom;
        }
        this.date = __WEBPACK_IMPORTED_MODULE_2_date_fns__["startOfDay"](this.dateFrom);
        this.generateCalendar();
    };
    NgxDateRangePickerComponent.prototype.selectRange = function (range) {
        var today = __WEBPACK_IMPORTED_MODULE_2_date_fns__["startOfDay"](new Date());
        var fromDate = today;
        var toDate = today;
        this.options.menu.map(function (item) {
            item.active = item.alias === range.alias;
        });
        var operand = range.operation.charAt(0) === '-' ? -1 : 1;
        var amount = Math.abs(parseInt(range.operation, 10));
        var ope = range.operation.match(/[d,w,m,y]t?/);
        var unit = ope.length > 0 ? ope[0] : '';
        switch (unit) {
            case 'm':
                if (amount) {
                    fromDate = __WEBPACK_IMPORTED_MODULE_2_date_fns__["addMonths"](fromDate, amount * operand);
                    toDate = __WEBPACK_IMPORTED_MODULE_2_date_fns__["addMonths"](fromDate, (amount - 1));
                }
                this.dateFrom = __WEBPACK_IMPORTED_MODULE_2_date_fns__["startOfMonth"](fromDate);
                this.dateTo = __WEBPACK_IMPORTED_MODULE_2_date_fns__["endOfMonth"](toDate);
                break;
            case 'w':
                if (amount) {
                    fromDate = __WEBPACK_IMPORTED_MODULE_2_date_fns__["addWeeks"](fromDate, amount * operand);
                    toDate = __WEBPACK_IMPORTED_MODULE_2_date_fns__["addWeeks"](fromDate, (amount - 1));
                }
                this.dateFrom = __WEBPACK_IMPORTED_MODULE_2_date_fns__["startOfWeek"](fromDate, { weekStartsOn: this.options.startOfWeek });
                this.dateTo = __WEBPACK_IMPORTED_MODULE_2_date_fns__["endOfWeek"](toDate, { weekStartsOn: this.options.startOfWeek });
                break;
            case 'y':
                if (amount) {
                    fromDate = __WEBPACK_IMPORTED_MODULE_2_date_fns__["addYears"](fromDate, amount * operand);
                    toDate = __WEBPACK_IMPORTED_MODULE_2_date_fns__["addYears"](fromDate, (amount - 1));
                }
                this.dateFrom = __WEBPACK_IMPORTED_MODULE_2_date_fns__["startOfYear"](fromDate);
                this.dateTo = __WEBPACK_IMPORTED_MODULE_2_date_fns__["endOfYear"](toDate);
                break;
            case 'd':
                if (amount) {
                    fromDate = __WEBPACK_IMPORTED_MODULE_2_date_fns__["addDays"](fromDate, amount * operand);
                    toDate = __WEBPACK_IMPORTED_MODULE_2_date_fns__["addDays"](fromDate, (amount - 1));
                }
                this.dateFrom = __WEBPACK_IMPORTED_MODULE_2_date_fns__["startOfDay"](fromDate);
                this.dateTo = __WEBPACK_IMPORTED_MODULE_2_date_fns__["startOfDay"](toDate);
                break;
            // From today
            case 'mt':
                if (operand < 0) {
                    fromDate = __WEBPACK_IMPORTED_MODULE_2_date_fns__["subMonths"](today, amount);
                }
                else {
                    toDate = __WEBPACK_IMPORTED_MODULE_2_date_fns__["addMonths"](today, amount);
                }
                this.dateFrom = fromDate;
                this.dateTo = toDate;
                break;
            case 'wt':
                if (operand < 0) {
                    fromDate = __WEBPACK_IMPORTED_MODULE_2_date_fns__["subWeeks"](today, amount);
                }
                else {
                    toDate = __WEBPACK_IMPORTED_MODULE_2_date_fns__["addWeeks"](today, amount);
                }
                this.dateFrom = fromDate;
                this.dateTo = toDate;
                break;
            case 'yt':
                if (operand < 0) {
                    fromDate = __WEBPACK_IMPORTED_MODULE_2_date_fns__["subYears"](today, amount);
                }
                else {
                    toDate = __WEBPACK_IMPORTED_MODULE_2_date_fns__["addYears"](today, amount);
                }
                this.dateFrom = fromDate;
                this.dateTo = toDate;
                break;
            default:
                if (operand < 0) {
                    fromDate = __WEBPACK_IMPORTED_MODULE_2_date_fns__["subDays"](today, amount);
                }
                else {
                    toDate = __WEBPACK_IMPORTED_MODULE_2_date_fns__["addDays"](today, amount);
                }
                this.dateFrom = fromDate;
                this.dateTo = toDate;
                break;
        }
        this.date = __WEBPACK_IMPORTED_MODULE_2_date_fns__["startOfDay"](this.dateFrom);
        this.range = range.alias;
        this.generateCalendar();
    };
    NgxDateRangePickerComponent.prototype.handleBlurClick = function (e) {
        var target = e.srcElement || e.target;
        if (!this.elementRef.nativeElement.contains(e.target) && !target.classList.contains('day-num')) {
            this._opened = false;
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fromInput'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], NgxDateRangePickerComponent.prototype, "fromInput", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], NgxDateRangePickerComponent.prototype, "options", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], NgxDateRangePickerComponent.prototype, "isOpen", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], NgxDateRangePickerComponent.prototype, "onResize", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('document:click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [MouseEvent]),
        __metadata("design:returntype", void 0)
    ], NgxDateRangePickerComponent.prototype, "handleBlurClick", null);
    NgxDateRangePickerComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngx-daterangepicker',
            template: __webpack_require__(12),
            styles: [__webpack_require__(13)],
            providers: [DATERANGEPICKER_VALUE_ACCESSOR]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]])
    ], NgxDateRangePickerComponent);
    return NgxDateRangePickerComponent;
}());



/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_ngx_daterangepicker__ = __webpack_require__(7);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__src_ngx_daterangepicker__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__src_ngx_daterangepicker__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__src_ngx_daterangepicker__["c"]; });



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(5);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "DATERANGEPICKER_VALUE_ACCESSOR", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "NgxDateRangePickerComponent", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "NgxDateRangePickerModule", function() { return __WEBPACK_IMPORTED_MODULE_0__index__["c"]; });



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngx_daterangepicker_component__ = __webpack_require__(2);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__ngx_daterangepicker_component__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__ngx_daterangepicker_component__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_daterangepicker_module__ = __webpack_require__(8);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__ngx_daterangepicker_module__["a"]; });




/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgxDateRangePickerModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_common__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angular_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_daterangepicker_component__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_format_pipe__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var NgxDateRangePickerModule = /** @class */ (function () {
    function NgxDateRangePickerModule() {
    }
    NgxDateRangePickerModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_3__ngx_daterangepicker_component__["b" /* NgxDateRangePickerComponent */], __WEBPACK_IMPORTED_MODULE_4__ngx_format_pipe__["a" /* NgxFormatPipe */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"]],
            exports: [__WEBPACK_IMPORTED_MODULE_3__ngx_daterangepicker_component__["b" /* NgxDateRangePickerComponent */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"]]
        })
    ], NgxDateRangePickerModule);
    return NgxDateRangePickerModule;
}());



/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgxFormatPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_date_fns__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NgxFormatPipe = /** @class */ (function () {
    function NgxFormatPipe() {
    }
    NgxFormatPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var options = {};
        if (args && args[1] && __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* locales */].hasOwnProperty(args[1])) {
            options.locale = __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* locales */][args[1]];
        }
        return __WEBPACK_IMPORTED_MODULE_1_date_fns__["format"](value, args[0] || "DD-MM-YYYY", options);
    };
    NgxFormatPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'ngxFormat'
        })
    ], NgxFormatPipe);
    return NgxFormatPipe;
}());



/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports


// module
exports.push([module.i, ".capitalize {\n  text-transform: capitalize; }\n\n.ngx-daterangepicker {\n  width: 100%;\n  height: 50px;\n  background: #FFFFFF;\n  display: inline-block;\n  border: 1px solid #9da3a6;\n  border-radius: 7px;\n  position: relative; }\n  .ngx-daterangepicker.is-active {\n    border: 1px solid #0070ba; }\n  .ngx-daterangepicker .input-section {\n    width: calc(100% / 2);\n    height: 50px;\n    display: block;\n    float: left;\n    outline: none;\n    padding: 7px 10px;\n    color: #2c2e2f;\n    cursor: pointer;\n    position: relative; }\n    .ngx-daterangepicker .input-section:first-child {\n      border-right: 1px solid #D4DADE; }\n    .ngx-daterangepicker .input-section .label-txt, .ngx-daterangepicker .input-section .value-txt {\n      display: block; }\n    .ngx-daterangepicker .input-section .label-txt {\n      color: #0070ba;\n      font-size: 11px; }\n    .ngx-daterangepicker .input-section .value-txt {\n      color: #2c2e2f;\n      font-size: 13px;\n      border-bottom: 1px solid transparent; }\n    .ngx-daterangepicker .input-section .cal-icon {\n      position: absolute;\n      display: block;\n      right: 10px;\n      bottom: 5px; }\n      .ngx-daterangepicker .input-section .cal-icon svg {\n        width: 20px;\n        height: 20px; }\n        .ngx-daterangepicker .input-section .cal-icon svg path {\n          fill: #0D79B1; }\n  .ngx-daterangepicker .calendar {\n    -webkit-touch-callout: none;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    width: auto;\n    border: 1px solid #0070ba;\n    border-radius: 7px;\n    background: #FFFFFF;\n    position: absolute;\n    top: 75px;\n    left: 0;\n    z-index: 100;\n    display: none; }\n    .ngx-daterangepicker .calendar.is-opened {\n      display: flex; }\n      .ngx-daterangepicker .calendar.is-opened.mobile {\n        position: absolute;\n        left: -15px; }\n    .ngx-daterangepicker .calendar.is-to .arrow {\n      left: 215px; }\n    .ngx-daterangepicker .calendar .arrow {\n      position: absolute;\n      display: block;\n      min-width: 30px;\n      min-height: 30px;\n      top: -15px;\n      left: 65px;\n      transform: rotate(45deg);\n      border-top: 1px solid #0070ba;\n      border-left: 1px solid #0070ba;\n      background: #FFFFFF;\n      transition: left 0.5s; }\n    .ngx-daterangepicker .calendar .calendar-container {\n      display: inline-block;\n      width: 340px;\n      height: 100%;\n      padding: 20px;\n      border-right: 1px solid #D4DADE;\n      float: left; }\n      .ngx-daterangepicker .calendar .calendar-container .controls {\n        width: 100%;\n        height: 20px;\n        display: flex;\n        justify-content: space-between;\n        align-items: center; }\n        .ngx-daterangepicker .calendar .calendar-container .controls .control-icon {\n          display: block;\n          width: 12px;\n          height: 20px;\n          cursor: pointer; }\n        .ngx-daterangepicker .calendar .calendar-container .controls .control-title {\n          font-size: 17px;\n          color: #2c2e2f; }\n      .ngx-daterangepicker .calendar .calendar-container .day-names {\n        display: inline-block;\n        width: 300px;\n        margin-top: 30px;\n        margin-bottom: 20px; }\n        .ngx-daterangepicker .calendar .calendar-container .day-names .day-name {\n          width: calc(300px / 7);\n          font-size: 13px;\n          color: #9CA3A6;\n          display: block;\n          float: left;\n          text-align: center;\n          font-weight: bold; }\n      .ngx-daterangepicker .calendar .calendar-container .days {\n        display: inline-block;\n        width: 300px; }\n        .ngx-daterangepicker .calendar .calendar-container .days .day {\n          width: calc(300px / 7);\n          height: calc(300px / 7);\n          font-size: 13px;\n          color: #9CA3A6;\n          display: block;\n          float: left;\n          text-align: center;\n          margin-bottom: 15px;\n          cursor: pointer;\n          font-weight: bold; }\n          .ngx-daterangepicker .calendar .calendar-container .days .day.is-within-range {\n            background: #ACD5ED;\n            color: #333333; }\n          .ngx-daterangepicker .calendar .calendar-container .days .day.is-from, .ngx-daterangepicker .calendar .calendar-container .days .day.is-first-weekday {\n            border-top-left-radius: 50%;\n            border-bottom-left-radius: 50%; }\n          .ngx-daterangepicker .calendar .calendar-container .days .day.is-to, .ngx-daterangepicker .calendar .calendar-container .days .day.is-last-weekday {\n            border-top-right-radius: 100%;\n            border-bottom-right-radius: 100%; }\n          .ngx-daterangepicker .calendar .calendar-container .days .day .day-num {\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            float: left;\n            width: 100%;\n            height: 100%;\n            border-radius: 50%;\n            padding: 10px 15px; }\n            .ngx-daterangepicker .calendar .calendar-container .days .day .day-num:hover, .ngx-daterangepicker .calendar .calendar-container .days .day .day-num.is-active {\n              background: #0070ba;\n              color: #FFFFFF; }\n    .ngx-daterangepicker .calendar .side-container {\n      width: 158px;\n      min-height: 390px;\n      padding: 10px;\n      display: flex;\n      align-items: center;\n      position: relative;\n      overflow: hidden;\n      height: 100%; }\n      .ngx-daterangepicker .calendar .side-container .side-container-buttons {\n        margin-top: 64px;\n        width: 200px;\n        overflow-y: auto;\n        overflow-x: hidden;\n        height: 390px;\n        position: absolute;\n        padding-bottom: 10px; }\n        .ngx-daterangepicker .calendar .side-container .side-container-buttons .side-button {\n          background: #FFFFFF;\n          border-radius: 15px;\n          border: 1px solid #0070ba;\n          height: 35px;\n          width: 138px;\n          display: block;\n          text-align: center;\n          outline: none;\n          margin-bottom: 15px;\n          color: #6B737C;\n          font-size: 13px;\n          cursor: pointer; }\n          .ngx-daterangepicker .calendar .side-container .side-container-buttons .side-button:hover, .ngx-daterangepicker .calendar .side-container .side-container-buttons .side-button.is-active {\n            background: #0070ba;\n            color: #FFFFFF; }\n      .ngx-daterangepicker .calendar .side-container .close-icon {\n        position: absolute;\n        width: 20px;\n        height: 20px;\n        top: 20px;\n        right: 15px;\n        cursor: pointer; }\n  .ngx-daterangepicker.theme-green.is-active {\n    border-color: #0b7285; }\n  .ngx-daterangepicker.theme-green .input-section .label-txt {\n    color: #0b7285; }\n  .ngx-daterangepicker.theme-green .input-section .cal-icon svg path {\n    fill: #0b7285; }\n  .ngx-daterangepicker.theme-green .calendar {\n    border-color: #0b7285; }\n    .ngx-daterangepicker.theme-green .calendar .arrow {\n      border-top-color: #0b7285;\n      border-left-color: #0b7285; }\n    .ngx-daterangepicker.theme-green .calendar .calendar-container .days .day.is-within-range {\n      background: #13c3e3; }\n    .ngx-daterangepicker.theme-green .calendar .calendar-container .days .day .day-num:hover, .ngx-daterangepicker.theme-green .calendar .calendar-container .days .day .day-num.is-active {\n      background: #0b7285; }\n    .ngx-daterangepicker.theme-green .calendar .side-container .side-container-buttons .side-button {\n      border-color: #0b7285; }\n      .ngx-daterangepicker.theme-green .calendar .side-container .side-container-buttons .side-button:hover, .ngx-daterangepicker.theme-green .calendar .side-container .side-container-buttons .side-button.is-active {\n        background: #0b7285; }\n  .ngx-daterangepicker.theme-teal.is-active {\n    border-color: #087f5b; }\n  .ngx-daterangepicker.theme-teal .input-section .label-txt {\n    color: #087f5b; }\n  .ngx-daterangepicker.theme-teal .input-section .cal-icon svg path {\n    fill: #087f5b; }\n  .ngx-daterangepicker.theme-teal .calendar {\n    border-color: #087f5b; }\n    .ngx-daterangepicker.theme-teal .calendar .arrow {\n      border-top-color: #087f5b;\n      border-left-color: #087f5b; }\n    .ngx-daterangepicker.theme-teal .calendar .calendar-container .days .day.is-within-range {\n      background: #0edfa0; }\n    .ngx-daterangepicker.theme-teal .calendar .calendar-container .days .day .day-num:hover, .ngx-daterangepicker.theme-teal .calendar .calendar-container .days .day .day-num.is-active {\n      background: #087f5b; }\n    .ngx-daterangepicker.theme-teal .calendar .side-container .side-container-buttons .side-button {\n      border-color: #087f5b; }\n      .ngx-daterangepicker.theme-teal .calendar .side-container .side-container-buttons .side-button:hover, .ngx-daterangepicker.theme-teal .calendar .side-container .side-container-buttons .side-button.is-active {\n        background: #087f5b; }\n  .ngx-daterangepicker.theme-cyan.is-active {\n    border-color: #0b7285; }\n  .ngx-daterangepicker.theme-cyan .input-section .label-txt {\n    color: #0b7285; }\n  .ngx-daterangepicker.theme-cyan .input-section .cal-icon svg path {\n    fill: #0b7285; }\n  .ngx-daterangepicker.theme-cyan .calendar {\n    border-color: #0b7285; }\n    .ngx-daterangepicker.theme-cyan .calendar .arrow {\n      border-top-color: #0b7285;\n      border-left-color: #0b7285; }\n    .ngx-daterangepicker.theme-cyan .calendar .calendar-container .days .day.is-within-range {\n      background: #13c3e3; }\n    .ngx-daterangepicker.theme-cyan .calendar .calendar-container .days .day .day-num:hover, .ngx-daterangepicker.theme-cyan .calendar .calendar-container .days .day .day-num.is-active {\n      background: #0b7285; }\n    .ngx-daterangepicker.theme-cyan .calendar .side-container .side-container-buttons .side-button {\n      border-color: #0b7285; }\n      .ngx-daterangepicker.theme-cyan .calendar .side-container .side-container-buttons .side-button:hover, .ngx-daterangepicker.theme-cyan .calendar .side-container .side-container-buttons .side-button.is-active {\n        background: #0b7285; }\n  .ngx-daterangepicker.theme-grape.is-active {\n    border-color: #862e9c; }\n  .ngx-daterangepicker.theme-grape .input-section .label-txt {\n    color: #862e9c; }\n  .ngx-daterangepicker.theme-grape .input-section .cal-icon svg path {\n    fill: #862e9c; }\n  .ngx-daterangepicker.theme-grape .calendar {\n    border-color: #862e9c; }\n    .ngx-daterangepicker.theme-grape .calendar .arrow {\n      border-top-color: #862e9c;\n      border-left-color: #862e9c; }\n    .ngx-daterangepicker.theme-grape .calendar .calendar-container .days .day.is-within-range {\n      background: #ba60d0; }\n    .ngx-daterangepicker.theme-grape .calendar .calendar-container .days .day .day-num:hover, .ngx-daterangepicker.theme-grape .calendar .calendar-container .days .day .day-num.is-active {\n      background: #862e9c; }\n    .ngx-daterangepicker.theme-grape .calendar .side-container .side-container-buttons .side-button {\n      border-color: #862e9c; }\n      .ngx-daterangepicker.theme-grape .calendar .side-container .side-container-buttons .side-button:hover, .ngx-daterangepicker.theme-grape .calendar .side-container .side-container-buttons .side-button.is-active {\n        background: #862e9c; }\n  .ngx-daterangepicker.theme-red.is-active {\n    border-color: #c92a2a; }\n  .ngx-daterangepicker.theme-red .input-section .label-txt {\n    color: #c92a2a; }\n  .ngx-daterangepicker.theme-red .input-section .cal-icon svg path {\n    fill: #c92a2a; }\n  .ngx-daterangepicker.theme-red .calendar {\n    border-color: #c92a2a; }\n    .ngx-daterangepicker.theme-red .calendar .arrow {\n      border-top-color: #c92a2a;\n      border-left-color: #c92a2a; }\n    .ngx-daterangepicker.theme-red .calendar .calendar-container .days .day.is-within-range {\n      background: #e27777; }\n    .ngx-daterangepicker.theme-red .calendar .calendar-container .days .day .day-num:hover, .ngx-daterangepicker.theme-red .calendar .calendar-container .days .day .day-num.is-active {\n      background: #c92a2a; }\n    .ngx-daterangepicker.theme-red .calendar .side-container .side-container-buttons .side-button {\n      border-color: #c92a2a; }\n      .ngx-daterangepicker.theme-red .calendar .side-container .side-container-buttons .side-button:hover, .ngx-daterangepicker.theme-red .calendar .side-container .side-container-buttons .side-button.is-active {\n        background: #c92a2a; }\n  .ngx-daterangepicker.theme-gray.is-active {\n    border-color: #212529; }\n  .ngx-daterangepicker.theme-gray .input-section .label-txt {\n    color: #212529; }\n  .ngx-daterangepicker.theme-gray .input-section .cal-icon svg path {\n    fill: #212529; }\n  .ngx-daterangepicker.theme-gray .calendar {\n    border-color: #212529; }\n    .ngx-daterangepicker.theme-gray .calendar .arrow {\n      border-top-color: #212529;\n      border-left-color: #212529; }\n    .ngx-daterangepicker.theme-gray .calendar .calendar-container .days .day.is-within-range {\n      background: #4e5862; }\n    .ngx-daterangepicker.theme-gray .calendar .calendar-container .days .day .day-num:hover, .ngx-daterangepicker.theme-gray .calendar .calendar-container .days .day .day-num.is-active {\n      background: #212529; }\n    .ngx-daterangepicker.theme-gray .calendar .side-container .side-container-buttons .side-button {\n      border-color: #212529; }\n      .ngx-daterangepicker.theme-gray .calendar .side-container .side-container-buttons .side-button:hover, .ngx-daterangepicker.theme-gray .calendar .side-container .side-container-buttons .side-button.is-active {\n        background: #212529; }\n", ""]);

// exports


/***/ }),
/* 11 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = "<div class=\"ngx-daterangepicker\"\n     [ngClass]=\"{ 'is-active': !!isOpen,\n                  'theme-green': options.theme === 'green',\n                  'theme-teal': options.theme === 'teal',\n                  'theme-cyan': options.theme === 'cyan',\n                  'theme-grape': options.theme === 'grape',\n                  'theme-red': options.theme === 'red',\n                  'theme-gray': options.theme === 'gray' }\">\n\n    <div #fromInput class=\"input-section\" (click)=\"toggleCalendar($event, 'from')\">\n        <span class=\"label-txt\">{{options.labels[0]}}</span>\n        <span class=\"value-txt\">{{ dateFrom | ngxFormat: options.dateFormat }}</span>\n        <span class=\"cal-icon\">\n      <svg width=\"94px\" height=\"94px\" viewBox=\"3 3 94 94\" version=\"1.1\">\n        <g id=\"Group\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\"\n           transform=\"translate(3.000000, 3.000000)\">\n          <path d=\"M67.166,20.168 C69.238,20.168 70.916,18.489 70.916,16.418 L70.916,4.085 C70.916,2.014 69.238,0.335 67.166,0.335 C65.096,0.335 63.416,2.014 63.416,4.085 L63.416,16.418 C63.416,18.489 65.096,20.168 67.166,20.168 Z M26.834,20.168 C28.904,20.168 30.584,18.489 30.584,16.418 L30.584,4.085 C30.584,2.014 28.904,0.335 26.834,0.335 C24.762,0.335 23.084,2.014 23.084,4.085 L23.084,16.418 C23.084,18.489 24.762,20.168 26.834,20.168 Z M88.833,9.5 L75.416,9.5 L75.416,16.418 C75.416,20.967 71.715,24.668 67.166,24.668 C62.617,24.668 58.916,20.967 58.916,16.418 L58.916,9.5 L35.084,9.5 L35.084,16.418 C35.084,20.967 31.383,24.668 26.834,24.668 C22.285,24.668 18.584,20.967 18.584,16.418 L18.584,9.5 L5.167,9.5 C2.405,9.5 0.167,11.738 0.167,14.5 L0.167,35 L93.833,35 L93.833,14.5 C93.833,11.738 91.595,9.5 88.833,9.5 Z M0.167,88.167 C0.167,90.929 2.405,93.167 5.167,93.167 L88.833,93.167 C91.595,93.167 93.833,90.929 93.833,88.167 L93.833,39 L0.167,39 L0.167,88.167 Z M69.387,50.875 L82.179,50.875 L82.179,63.667 L69.387,63.667 L69.387,50.875 Z M69.387,69.125 L82.179,69.125 L82.179,81.917 L69.387,81.917 L69.387,69.125 Z M50.198,50.875 L62.99,50.875 L62.99,63.667 L50.198,63.667 L50.198,50.875 Z M50.198,69.125 L62.99,69.125 L62.99,81.917 L50.198,81.917 L50.198,69.125 Z M31.01,50.875 L43.802,50.875 L43.802,63.667 L31.01,63.667 L31.01,50.875 Z M31.01,69.125 L43.802,69.125 L43.802,81.917 L31.01,81.917 L31.01,69.125 Z M11.821,50.875 L24.613,50.875 L24.613,63.667 L11.821,63.667 L11.821,50.875 Z M11.821,69.125 L24.613,69.125 L24.613,81.917 L11.821,81.917 L11.821,69.125 Z\"\n                id=\"Shape\" fill=\"#000000\" fill-rule=\"nonzero\"></path>\n        </g>\n      </svg>\n    </span>\n    </div>\n\n    <div class=\"input-section\" (click)=\"toggleCalendar($event, 'to')\">\n        <span class=\"label-txt\">{{options.labels[1]}}</span>\n        <span class=\"value-txt\">{{ dateTo | ngxFormat: options.dateFormat }}</span>\n        <span class=\"cal-icon\">\n      <svg width=\"94px\" height=\"94px\" viewBox=\"3 3 94 94\" version=\"1.1\">\n        <g id=\"Group\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\"\n           transform=\"translate(3.000000, 3.000000)\">\n          <path d=\"M67.166,20.168 C69.238,20.168 70.916,18.489 70.916,16.418 L70.916,4.085 C70.916,2.014 69.238,0.335 67.166,0.335 C65.096,0.335 63.416,2.014 63.416,4.085 L63.416,16.418 C63.416,18.489 65.096,20.168 67.166,20.168 Z M26.834,20.168 C28.904,20.168 30.584,18.489 30.584,16.418 L30.584,4.085 C30.584,2.014 28.904,0.335 26.834,0.335 C24.762,0.335 23.084,2.014 23.084,4.085 L23.084,16.418 C23.084,18.489 24.762,20.168 26.834,20.168 Z M88.833,9.5 L75.416,9.5 L75.416,16.418 C75.416,20.967 71.715,24.668 67.166,24.668 C62.617,24.668 58.916,20.967 58.916,16.418 L58.916,9.5 L35.084,9.5 L35.084,16.418 C35.084,20.967 31.383,24.668 26.834,24.668 C22.285,24.668 18.584,20.967 18.584,16.418 L18.584,9.5 L5.167,9.5 C2.405,9.5 0.167,11.738 0.167,14.5 L0.167,35 L93.833,35 L93.833,14.5 C93.833,11.738 91.595,9.5 88.833,9.5 Z M0.167,88.167 C0.167,90.929 2.405,93.167 5.167,93.167 L88.833,93.167 C91.595,93.167 93.833,90.929 93.833,88.167 L93.833,39 L0.167,39 L0.167,88.167 Z M69.387,50.875 L82.179,50.875 L82.179,63.667 L69.387,63.667 L69.387,50.875 Z M69.387,69.125 L82.179,69.125 L82.179,81.917 L69.387,81.917 L69.387,69.125 Z M50.198,50.875 L62.99,50.875 L62.99,63.667 L50.198,63.667 L50.198,50.875 Z M50.198,69.125 L62.99,69.125 L62.99,81.917 L50.198,81.917 L50.198,69.125 Z M31.01,50.875 L43.802,50.875 L43.802,63.667 L31.01,63.667 L31.01,50.875 Z M31.01,69.125 L43.802,69.125 L43.802,81.917 L31.01,81.917 L31.01,69.125 Z M11.821,50.875 L24.613,50.875 L24.613,63.667 L11.821,63.667 L11.821,50.875 Z M11.821,69.125 L24.613,69.125 L24.613,81.917 L11.821,81.917 L11.821,69.125 Z\"\n                id=\"Shape\" fill=\"#000000\" fill-rule=\"nonzero\"></path>\n        </g>\n      </svg>\n    </span>\n    </div>\n\n    <div class=\"calendar\" [ngClass]=\"{ 'is-opened': !!isOpen, 'is-to': isOpen === 'to', 'mobile': mobileMode }\">\n        <div class=\"arrow\" [ngStyle]=\"{left: (arrowLeft || 60) + 'px'}\"></div>\n        <div class=\"calendar-container\">\n            <div class=\"controls\">\n        <span class=\"control-icon\" (click)=\"prevMonth()\">\n          <svg width=\"13px\" height=\"20px\" viewBox=\"0 44 13 20\" version=\"1.1\">\n            <path d=\"M11.7062895,64 C11.6273879,64 11.5477012,63.9744846 11.480576,63.921491 L0.139160349,54.9910879 C0.0551556781,54.9247477 0.00451734852,54.8250413 0.000199351429,54.7174839 C-0.00333355528,54.6107116 0.0402389608,54.5074722 0.119140544,54.4356364 L11.4605562,44.095211 C11.6093308,43.9589979 11.8401474,43.9707742 11.9751829,44.1187637 C12.1110036,44.2675384 12.1004048,44.4983549 11.9516302,44.6333905 L0.928176181,54.6841175 L11.9323955,63.3491601 C12.0905912,63.4735969 12.1176768,63.7028433 11.9928475,63.861039 C11.9206191,63.9521095 11.8138469,64 11.7062895,64 Z\"\n                  id=\"Shape\" stroke=\"none\" fill=\"#000000\" fill-rule=\"nonzero\"></path>\n          </svg>\n        </span>\n        <span class=\"control-title capitalize\">\n          {{ date | ngxFormat:'MMMM YYYY':options.locale }}\n        </span>\n                <span class=\"control-icon\" (click)=\"nextMonth()\">\n          <svg width=\"13px\" height=\"20px\" viewBox=\"21 44 13 20\">\n            <path d=\"M32.7062895,64 C32.6273879,64 32.5477012,63.9744846 32.480576,63.921491 L21.1391603,54.9910879 C21.0551557,54.9247477 21.0045173,54.8250413 21.0001994,54.7174839 C20.9966664,54.6107116 21.040239,54.5074722 21.1191405,54.4356364 L32.4605562,44.095211 C32.6093308,43.9589979 32.8401474,43.9707742 32.9751829,44.1187637 C33.1110036,44.2675384 33.1004048,44.4983549 32.9516302,44.6333905 L21.9281762,54.6841175 L32.9323955,63.3491601 C33.0905912,63.4735969 33.1176768,63.7028433 32.9928475,63.861039 C32.9206191,63.9521095 32.8138469,64 32.7062895,64 Z\"\n                  id=\"Shape\" stroke=\"none\" fill=\"#000000\" fill-rule=\"nonzero\"\n                  transform=\"translate(27.035642, 54.000000) scale(-1, 1) translate(-27.035642, -54.000000) \"></path>\n          </svg>\n        </span>\n            </div>\n            <div class=\"day-names\">\n                <span class=\"day-name\" *ngFor=\"let name of dayNames\">{{ name }}</span>\n            </div>\n            <div class=\"days\">\n                <div class=\"day\"\n                     *ngFor=\"let d of days; let i = index;\"\n                     [ngClass]=\"{\n               'is-within-range': d.isWithinRange,\n               'is-from': d.from,\n               'is-to': d.to,\n               'is-first-weekday': d.firstMonthDay, \n               'is-last-weekday': d.lastMonthDay }\"\n                     (click)=\"selectDate($event, i)\">\n                    <span *ngIf=\"d.visible\" class=\"day-num\" [class.is-active]=\"d.from || d.to\">{{ d.day }}</span>\n                </div>\n            </div>\n        </div>\n        <div class=\"side-container\" *ngIf=\"options.menu && options.menu.length > 0 && !mobileMode\">\n            <div class=\"side-container-buttons\">\n                <button type=\"button\" class=\"side-button\" *ngFor=\"let range of options.menu\" (click)=\"selectRange(range)\"\n                        [class.is-active]=\"range.active\">{{range.text}}\n                </button>\n            </div>\n            <span class=\"close-icon\" (click)=\"closeCalendar($event)\">\n            <svg width=\"20px\" height=\"20px\" viewBox=\"47 44 20 20\" version=\"1.1\">\n              <g id=\"Group\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\"\n                transform=\"translate(48.000000, 44.000000)\">\n                <path d=\"M19.6876399,20 C19.6047542,19.999927 19.52529,19.9669423 19.4667175,19.9082976 L0.0839056416,0.525743396 C-0.0308734765,0.402566324 -0.0274867013,0.210616527 0.0915663128,0.0915650956 C0.210619327,-0.0274863359 0.402571676,-0.030873066 0.525750385,0.0839045261 L19.9085623,19.4664587 C19.9978567,19.5558631 20.0245499,19.6902301 19.9762091,19.8069762 C19.9278683,19.9237223 19.8139998,19.9998889 19.6876399,20 Z\"\n                      id=\"Shape\" fill=\"#000000\" fill-rule=\"nonzero\"></path>\n                <path d=\"M0.312360116,20 C0.186000167,19.9998889 0.0721317315,19.9237223 0.0237909073,19.8069762 C-0.0245499168,19.6902301 0.0021432967,19.5558631 0.0914377445,19.4664587 L19.4742496,0.0839045261 C19.5974283,-0.030873066 19.7893807,-0.0274863359 19.9084337,0.0915650956 C20.0274867,0.210616527 20.0308735,0.402566324 19.9160944,0.525743396 L0.533282488,19.9082976 C0.474709982,19.9669423 0.395245751,19.999927 0.312360116,20 L0.312360116,20 Z\"\n                      id=\"Shape\" fill=\"#000000\" fill-rule=\"nonzero\"></path>\n              </g>\n            </svg>\n          </span>\n        </div>\n    </div>\n</div>\n"

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(10);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_14__;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_15__;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_16__;

/***/ })
/******/ ]);
});