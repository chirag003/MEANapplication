import { Component, HostListener, ElementRef, forwardRef, Input, ViewChild, ChangeDetectorRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as dateFns from 'date-fns';
import { locales } from './constants';
export var DATERANGEPICKER_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return NgxDateRangePickerComponent; }),
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
                year: dateFns.getYear(this.date),
                month: dateFns.getMonth(this.date),
                day: dateFns.getDay(this.date)
            },
            to: {
                year: dateFns.getYear(this.date),
                month: dateFns.getMonth(this.date),
                day: dateFns.getDay(dateFns.addDays(this.date, 1))
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
        var dayOfWeek = dateFns.format(dateFns.setDay(date, day, { weekStartsOn: 1 }), "dd", { locale: locales[this.options.locale] });
        return dayOfWeek[0].toUpperCase() + dayOfWeek.substring(1);
    };
    NgxDateRangePickerComponent.prototype.generateCalendar = function () {
        var _this = this;
        this.days = [];
        var start = dateFns.startOfMonth(this.date);
        var end = dateFns.endOfMonth(this.date);
        var days = dateFns.eachDay(start, end).map(function (d) {
            var startOfWeek = _this.options.startOfWeek;
            var endOfWeek = startOfWeek === 0 ? 6 : 0;
            return {
                date: d,
                day: dateFns.getDate(d),
                weekday: dateFns.getDay(d),
                startOfWeek: startOfWeek,
                endOfWeek: endOfWeek,
                today: dateFns.isToday(d),
                firstMonthDay: dateFns.isFirstDayOfMonth(d),
                lastMonthDay: dateFns.isLastDayOfMonth(d),
                visible: true,
                from: dateFns.isSameDay(_this.dateFrom, d),
                to: dateFns.isSameDay(_this.dateTo, d),
                isWithinRange: dateFns.isWithinRange(d, _this.dateFrom, _this.dateTo)
            };
        });
        var prevMonthDayNum = dateFns.getDay(start) - 1;
        var prevMonthDays = [];
        if (prevMonthDayNum > 0) {
            prevMonthDays = Array.from(Array(prevMonthDayNum).keys()).map(function (i) {
                var d = dateFns.subDays(start, prevMonthDayNum - i);
                return {
                    date: d,
                    day: dateFns.getDate(d),
                    weekday: dateFns.getDay(d),
                    firstMonthDay: dateFns.isFirstDayOfMonth(d),
                    lastMonthDay: dateFns.isLastDayOfMonth(d),
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
                from: dateFns.format(this.dateFrom, this.options.outputFormat),
                to: dateFns.format(this.dateTo, this.options.outputFormat)
            };
        }
        else {
            this.value =
                dateFns.format(this.dateFrom, this.options.outputFormat) + "-" + dateFns.format(this.dateTo, this.options.outputFormat);
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
        if ((this._opened === 'to' && dateFns.isBefore(selectedDate, this.dateFrom))) {
            this._opened = 'from';
        }
        if ((this._opened === 'from' && dateFns.isAfter(selectedDate, this.dateTo))) {
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
        this.date = dateFns.subMonths(this.date, 1);
        this.generateCalendar();
    };
    NgxDateRangePickerComponent.prototype.nextMonth = function () {
        this.date = dateFns.addMonths(this.date, 1);
        this.generateCalendar();
    };
    NgxDateRangePickerComponent.prototype.selectDates = function (dates) {
        this.dateFrom = dateFns.startOfDay(new Date(dates.from.year, dates.from.month - 1, dates.from.day));
        this.dateTo = dateFns.startOfDay(new Date(dates.to.year, dates.to.month - 1, dates.to.day));
        if (dateFns.isAfter(this.dateFrom, this.dateTo)) {
            this.dateTo = this.dateFrom;
        }
        this.date = dateFns.startOfDay(this.dateFrom);
        this.generateCalendar();
    };
    NgxDateRangePickerComponent.prototype.selectRange = function (range) {
        var today = dateFns.startOfDay(new Date());
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
                    fromDate = dateFns.addMonths(fromDate, amount * operand);
                    toDate = dateFns.addMonths(fromDate, (amount - 1));
                }
                this.dateFrom = dateFns.startOfMonth(fromDate);
                this.dateTo = dateFns.endOfMonth(toDate);
                break;
            case 'w':
                if (amount) {
                    fromDate = dateFns.addWeeks(fromDate, amount * operand);
                    toDate = dateFns.addWeeks(fromDate, (amount - 1));
                }
                this.dateFrom = dateFns.startOfWeek(fromDate, { weekStartsOn: this.options.startOfWeek });
                this.dateTo = dateFns.endOfWeek(toDate, { weekStartsOn: this.options.startOfWeek });
                break;
            case 'y':
                if (amount) {
                    fromDate = dateFns.addYears(fromDate, amount * operand);
                    toDate = dateFns.addYears(fromDate, (amount - 1));
                }
                this.dateFrom = dateFns.startOfYear(fromDate);
                this.dateTo = dateFns.endOfYear(toDate);
                break;
            case 'd':
                if (amount) {
                    fromDate = dateFns.addDays(fromDate, amount * operand);
                    toDate = dateFns.addDays(fromDate, (amount - 1));
                }
                this.dateFrom = dateFns.startOfDay(fromDate);
                this.dateTo = dateFns.startOfDay(toDate);
                break;
            // From today
            case 'mt':
                if (operand < 0) {
                    fromDate = dateFns.subMonths(today, amount);
                }
                else {
                    toDate = dateFns.addMonths(today, amount);
                }
                this.dateFrom = fromDate;
                this.dateTo = toDate;
                break;
            case 'wt':
                if (operand < 0) {
                    fromDate = dateFns.subWeeks(today, amount);
                }
                else {
                    toDate = dateFns.addWeeks(today, amount);
                }
                this.dateFrom = fromDate;
                this.dateTo = toDate;
                break;
            case 'yt':
                if (operand < 0) {
                    fromDate = dateFns.subYears(today, amount);
                }
                else {
                    toDate = dateFns.addYears(today, amount);
                }
                this.dateFrom = fromDate;
                this.dateTo = toDate;
                break;
            default:
                if (operand < 0) {
                    fromDate = dateFns.subDays(today, amount);
                }
                else {
                    toDate = dateFns.addDays(today, amount);
                }
                this.dateFrom = fromDate;
                this.dateTo = toDate;
                break;
        }
        this.date = dateFns.startOfDay(this.dateFrom);
        this.range = range.alias;
        this.generateCalendar();
    };
    NgxDateRangePickerComponent.prototype.handleBlurClick = function (e) {
        var target = e.srcElement || e.target;
        if (!this.elementRef.nativeElement.contains(e.target) && !target.classList.contains('day-num')) {
            this._opened = false;
        }
    };
    NgxDateRangePickerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ngx-daterangepicker',
                    templateUrl: 'ngx-daterangepicker.component.html',
                    styleUrls: ['ngx-daterangepicker.sass'],
                    providers: [DATERANGEPICKER_VALUE_ACCESSOR]
                },] },
    ];
    /** @nocollapse */
    NgxDateRangePickerComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef }
    ]; };
    NgxDateRangePickerComponent.propDecorators = {
        fromInput: [{ type: ViewChild, args: ['fromInput',] }],
        options: [{ type: Input }],
        isOpen: [{ type: Input }],
        onResize: [{ type: HostListener, args: ['window:resize', ['$event'],] }],
        handleBlurClick: [{ type: HostListener, args: ['document:click', ['$event'],] }]
    };
    return NgxDateRangePickerComponent;
}());
export { NgxDateRangePickerComponent };
