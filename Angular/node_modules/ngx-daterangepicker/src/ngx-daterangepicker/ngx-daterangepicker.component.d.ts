import { OnInit, ElementRef, OnChanges, SimpleChange, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export interface NgxDateRangePickerDates {
    from: {
        year: number;
        month: number;
        day: number;
    };
    to: {
        year: number;
        month: number;
        day: number;
    };
}
export interface NgxMenuItem {
    alias: string;
    text: string;
    operation: string;
    active?: boolean;
}
export interface NgxDateRangePickerOptions {
    theme: 'default' | 'green' | 'teal' | 'cyan' | 'grape' | 'red' | 'gray';
    range?: string;
    locale?: string;
    labels: string[];
    menu: NgxMenuItem[];
    dateFormat: string;
    outputFormat: string;
    startOfWeek: number;
    outputType?: 'string' | 'object';
    date?: NgxDateRangePickerDates;
    mobilePx?: number;
}
export interface IDay {
    date: Date;
    day: number;
    weekday: number;
    today: boolean;
    firstMonthDay: boolean;
    lastMonthDay: boolean;
    visible: boolean;
    from: boolean;
    to: boolean;
    isWithinRange: boolean;
}
export declare let DATERANGEPICKER_VALUE_ACCESSOR: any;
export declare class NgxDateRangePickerComponent implements ControlValueAccessor, OnInit, AfterViewInit, OnChanges {
    private elementRef;
    private cdr;
    fromInput: ElementRef;
    options: NgxDateRangePickerOptions;
    isOpen: false | 'from' | 'to';
    mobileMode: boolean;
    modelValue: string | Object;
    _opened: false | 'from' | 'to';
    date: Date;
    dateFrom: Date;
    dateTo: Date;
    dayNames: string[];
    days: IDay[];
    range: string;
    defaultOptions: NgxDateRangePickerOptions;
    arrowLeft: number;
    private onTouchedCallback;
    private onChangeCallback;
    constructor(elementRef: ElementRef, cdr: ChangeDetectorRef);
    value: string | Object;
    writeValue(value: string): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    ngAfterViewInit(): void;
    onResize(): void;
    ngOnInit(): void;
    ngOnChanges(changes: {
        [propName: string]: SimpleChange;
    }): void;
    initNames(): void;
    getDayOfWeek(day: number): string;
    generateCalendar(): void;
    toggleCalendar(e: MouseEvent, selection: 'from' | 'to'): void;
    closeCalendar(e: MouseEvent): void;
    selectDate(e: MouseEvent, index: number): void;
    prevMonth(): void;
    nextMonth(): void;
    selectDates(dates: NgxDateRangePickerDates): void;
    selectRange(range: NgxMenuItem): void;
    handleBlurClick(e: MouseEvent): void;
}
