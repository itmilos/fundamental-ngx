(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{"Ls+Y":function(e,t,a){"use strict";a.r(t),a.d(t,"PlatformDatePickerDocsModule",function(){return de});var n={};a.r(n),a.d(n,"default",function(){return y});var r={};a.r(r),a.d(r,"default",function(){return k});var o={};a.r(o),a.d(o,"default",function(){return v});var l={};a.r(l),a.d(l,"default",function(){return F});var i={};a.r(i),a.d(i,"default",function(){return V});var d={};a.r(d),a.d(d,"default",function(){return P});var c={};a.r(c),a.d(c,"default",function(){return M});var m={};a.r(m),a.d(m,"default",function(){return x});var p=a("tyNb"),f=a("jzzn"),s=a("IywY"),u=a("t9W5"),b=a("7zrd"),g=a("GKNN"),h=a("vTn9"),D=a("G6Ao"),y='<h3>Date Picker with Reactive Form.</h3>\n<fdp-form-group #ffg [formGroup]="datePickerForm" [object]="formInitialData" (onSubmit)="onSubmit(ffg)" columnLayout="XL2-L2-M1-S1">\n    <fdp-form-field #ffl1 id="birthday" column="1" rank="1" required="true" placeholder="Enter your birthday"\n        label="Pre-populated single type date-picker:" [validators]="requiredDateValidator">\n        <fdp-date-picker name="birthday" type="single" [allowNull]="false" [formControl]="ffl1.formControl">\n        </fdp-date-picker>\n    </fdp-form-field>\n\n    <fdp-form-field #ffl2 id="examdate" column="2" rank="1" required="true" label="Single type date-picker:">\n        <fdp-date-picker name="examdate" type="single" [allowNull]="false" placeholder="Enter your Exam dates"\n            [formControl]="ffl2.formControl">\n        </fdp-date-picker>\n    </fdp-form-field>\n\n    <fdp-form-field #ffl3 id="holiday" column="1" rank="1" [validators]="rangeDateValidator"\n        label="Pre-populated range type date-picker:">\n        <fdp-date-picker name="holiday" type="range" [allowNull]="false" rangeHoverEffect="true"\n            contentDensity="compact" placeholder="Holiday in between?" [formControl]="ffl3.formControl">\n        </fdp-date-picker>\n    </fdp-form-field>\n\n    <fdp-form-field #ffl4 id="journeydate" column="2" rank="2" label="Range type date-picker:">\n        <fdp-date-picker name="journeydate" type="range" contentDensity="compact" placeholder="Journey dates?"\n            [formControl]="ffl4.formControl">\n        </fdp-date-picker>\n    </fdp-form-field>\n    <fdp-form-field #ffl5 id="disableddate" column="1" rank="2" label="Disabled Date Picker:"\n        disabled="true">\n        <fdp-date-picker name="disableddate" type="single" [allowNull]="false"\n            placeholder="This is a disabled date picker" [formControl]="ffl5.formControl">\n        </fdp-date-picker>\n    </fdp-form-field>\n\n    <ng-template #i18n let-errors>\n        <ng-container *ngIf="errors.required">\n            <span>Value is required</span>\n        </ng-container>\n\n        <ng-container *ngIf="errors.nullRangeDate">\n            Range date is invalid.\n        </ng-container>\n    </ng-template>\n</fdp-form-group>\n\n<p>Birthday: {{ datePickerForm.controls.birthday?.value?.toDateString() }}</p>\n<span>Exam Date: {{ datePickerForm.controls.examdate?.value?.toDateString() }}</span>\n\n<p>Holiday Start Date: {{ datePickerForm.controls.holiday?.value?.start?.toDateString() }}</p>\n<span>Holiday End Date: {{ datePickerForm.controls.holiday?.value?.end?.toDateString() }}</span>\n\n<p>Journey Start Date: {{ datePickerForm.controls.journeydate?.value?.start?.toDateString() }}</p>\n<span>Journey End Date: {{ datePickerForm.controls.journeydate?.value?.end?.toDateString() }}</span>\n\n<h3>Date Picker with Template Driven Form.</h3>\n\x3c!--Template Driven Form--\x3e\n<fdp-form-group columnLayout="XL2-L2-M1-S1">\n    <fdp-form-field id="birthday" column="1" rank="1" required="true" label="Birth Date:">\n        <fdp-date-picker name="birthday" placeholder="mm/dd/yyyy" type="single" [allowNull]="false" [(ngModel)]="birthdayPicker">\n        </fdp-date-picker>\n    </fdp-form-field>\n\n    <fdp-form-field id="holiday" column="1" rank="2" required="true" label="Holiday:" [validators]="rangeDateValidator">\n        <fdp-date-picker name="holiday" type="range" [allowNull]="false" contentDensity="compact"\n            placeholder="When are you going to holiday?" [(ngModel)]="holidayPicker">\n        </fdp-date-picker>\n    </fdp-form-field>\n\n    <fdp-form-field id="disableddate" column="2" rank="1" label="Disabled Date Picker:">\n        <fdp-date-picker name="disabledDate" type="single" disabled="true" [(ngModel)]="disabledDate"></fdp-date-picker>\n    </fdp-form-field>\n\n    <ng-template #i18n let-errors>\n        <ng-container *ngIf="errors.required">\n            <span>Value is required</span>\n        </ng-container>\n        <ng-container *ngIf="errors.nullRangeDate">\n            Range date is invalid.\n        </ng-container>\n    </ng-template>\n</fdp-form-group>\n\n\x3c!--Date picker use outside form--\x3e\n<h3>Date Picker Use Outside Form.</h3>\n<fdp-date-picker name="dateOutsideForm" placeholder="mm/dd/yyyy" type="single" [(ngModel)]="dateOutsideForm">\n</fdp-date-picker>\n\n<h3>Range Date Picker Outside Form.</h3>\n<fdp-date-picker name="rangeDateOutsideForm" type="range" placeholder="mm/dd/yyyy - mm/dd/yyyy"\n    [(ngModel)]="rangeDateOutsideForm">\n</fdp-date-picker>\n',k="import { Component } from '@angular/core';\nimport { FormGroup, ValidatorFn, Validators, AbstractControl } from '@angular/forms';\n\nimport {\n    DatetimeAdapter,\n    DATE_TIME_FORMATS,\n    FdDate,\n    FdDatetimeAdapter,\n    FD_DATETIME_FORMATS\n} from '@fundamental-ngx/core/datetime';\n\n@Component({\n    selector: 'fdp-platform-date-picker-example',\n    templateUrl: './platform-date-picker-example.component.html',\n    providers: [\n        // Note that this is usually provided in the root of your application.\n        // Due to the limit of this example we must provide it on this level.\n        {\n            provide: DatetimeAdapter,\n            useClass: FdDatetimeAdapter\n        },\n        {\n            provide: DATE_TIME_FORMATS,\n            useValue: FD_DATETIME_FORMATS\n        }\n    ]\n})\nexport class PlatformDatePickerExampleComponent {\n    birthday: FdDate = new FdDate(1990, 1, 2);\n    holiday = { start: new FdDate(2020, 5, 14), end: new FdDate(2020, 5, 24) };\n    datePickerForm = new FormGroup({});\n\n    formInitialData = {\n        birthday: this.birthday,\n        holiday: this.holiday\n    };\n\n    requiredDateValidator: ValidatorFn[] = [Validators.required];\n    rangeDateValidator: ValidatorFn[] = [dateRangeNullValidator];\n\n    // Template driven form\n    disabledDate = '';\n    birthdayPicker = '';\n    holidayPicker = '';\n    dateOutsideForm = '';\n    rangeDateOutsideForm = '';\n\n    public onSubmit(value: any): void {\n        alert('Form Value: ' + value);\n    }\n}\n\nexport function dateRangeNullValidator(control: AbstractControl): { [key: string]: any } | null {\n    const startDate = control.value?.start;\n    if (startDate) {\n        return null;\n    } else {\n        return { nullRangeDate: 'Range date is not valid' };\n    }\n}\n",v='<label fd-form-label for="language">Select language:</label>\n<fd-segmented-button id="language" style="margin-bottom:20px" [ngModel]="locale" (ngModelChange)="setLocale($event)">\n    <button fd-button label="French" value="fr"></button>\n    <button fd-button label="German" value="de"></button>\n    <button fd-button label="Bulgarian" value="bg"></button>\n</fd-segmented-button>\n<br />\n<fdp-date-picker id="i18n-example" name="i18n-example" [(ngModel)]="date" [startingDayOfWeek]="1"></fdp-date-picker>\n',F="import { Component, Injectable, LOCALE_ID } from '@angular/core';\n\nimport { CalendarI18nLabels } from '@fundamental-ngx/core/calendar';\nimport { FdDate, DatetimeAdapter, FdDatetimeAdapter, DATE_TIME_FORMATS, FD_DATETIME_FORMATS } from '@fundamental-ngx/core/datetime';\n\n// Translated aria labels.\n// Please note these labels should be translated for each locale separately\n@Injectable()\nexport class CustomI18nLabels extends CalendarI18nLabels {\n    yearSelectionLabel = `S\xe9lection de l'ann\xe9e`;\n\n    previousYearLabel = 'Ann\xe9e pr\xe9c\xe9dente';\n\n    nextYearLabel = 'Ann\xe9e suivante';\n\n    monthSelectionLabel = 'S\xe9lection du mois';\n\n    previousMonthLabel = 'Mois pr\xe9c\xe9dent';\n\n    nextMonthLabel = 'Mois suivant';\n}\n\n@Component({\n    selector: 'fdp-platform-date-picker-i18n-example',\n    templateUrl: './platform-date-picker-i18n-example.component.html',\n\n    // Note that this can be provided in the root of your application.\n    providers: [\n        // Note that this is usually provided in the root of your application.\n        // Due to the limit of this example we must provide it on this level.\n\n        { provide: LOCALE_ID, useValue: 'fr' },\n        {\n            provide: DatetimeAdapter,\n            useClass: FdDatetimeAdapter\n        },\n        {\n            provide: CalendarI18nLabels,\n            useClass: CustomI18nLabels\n        },\n        {\n            provide: DATE_TIME_FORMATS,\n            useValue: FD_DATETIME_FORMATS\n        }\n    ]\n})\nexport class PlatformDatePickeri18nExampleComponent {\n    date = FdDate.getNow();\n    locale = 'fr';\n\n    constructor(private datetimeAdapter: DatetimeAdapter<FdDate>) {}\n\n    setLocale(locale: string): void {\n        this.locale = locale;\n        this.datetimeAdapter.setLocale(locale);\n    }\n}\n",V="import { Component } from '@angular/core';\nimport { FormGroup } from '@angular/forms';\n\nimport { DatetimeAdapter, DATE_TIME_FORMATS, FdDate, FdDatetimeAdapter, FD_DATETIME_FORMATS } from '@fundamental-ngx/core/datetime';\n\n@Component({\n    selector: 'fdp-platform-date-picker-disable-func-example',\n    templateUrl: './platform-date-picker-disable-func-example.component.html',\n    providers: [\n        // Note that this is usually provided in the root of your application.\n        // Due to the limit of this example we must provide it on this level.\n        {\n            provide: DatetimeAdapter,\n            useClass: FdDatetimeAdapter\n        },\n        {\n            provide: DATE_TIME_FORMATS,\n            useValue: FD_DATETIME_FORMATS\n        }\n    ]\n})\nexport class PlatformDatePickerDisableFuncExampleComponent {\n    customForm = new FormGroup({});\n\n    constructor(private datetimeAdapter: DatetimeAdapter<FdDate>) {}\n\n    disableFunction = (fdDate: FdDate): boolean => {\n        const month = this.datetimeAdapter.getMonth(fdDate);\n        const year = this.datetimeAdapter.getYear(fdDate);\n        const day = this.datetimeAdapter.getDate(fdDate);\n\n        const currentYear = this.datetimeAdapter.today().year;\n        const currentMonth = this.datetimeAdapter.today().month;\n        const totalDaysInMonth = this.datetimeAdapter.getNumDaysInMonth(this.datetimeAdapter.today());\n\n        if (year === currentYear && month === currentMonth && day <= totalDaysInMonth) {\n            return false;\n        } else {\n            return true;\n        }\n    };\n}\n",P='<fdp-form-group #ffg [formGroup]="customForm">\n    <fdp-form-field #ffl1 id="offDay" rank="1" placeholder="Off day in current month"\n        label="Disable dates other than this month">\n        <fdp-date-picker name="offDay" type="single" [disableFunction]="disableFunction"\n            [formControl]="ffl1.formControl">\n        </fdp-date-picker>\n    </fdp-form-field>\n</fdp-form-group>\n',M="import { Component } from '@angular/core';\nimport { FormGroup } from '@angular/forms';\n\nimport { DatetimeAdapter, DateTimeFormats, DATE_TIME_FORMATS, FdDatetimeAdapter, FD_DATETIME_FORMATS } from '@fundamental-ngx/core/datetime';\n\nexport const CUSTOM_FD_DATETIME_FORMATS: DateTimeFormats = {\n    ...FD_DATETIME_FORMATS,\n    display: {\n        ...FD_DATETIME_FORMATS.display,\n        dateInput: {\n            year: '2-digit',\n            month: '2-digit',\n            day: '2-digit'\n        }\n    },\n    rangeDelimiter: ' // '\n};\n\n@Component({\n    selector: 'fdp-platform-date-picker-format-example',\n    templateUrl: './platform-date-picker-format-example.component.html',\n    providers: [\n        // Note that this is usually provided in the root of your application.\n        // Due to the limit of this example we must provide it on this level.\n        {\n            provide: DatetimeAdapter,\n            useClass: FdDatetimeAdapter\n        },\n        {\n            provide: DATE_TIME_FORMATS,\n            useValue: CUSTOM_FD_DATETIME_FORMATS\n        }\n    ]\n})\nexport class PlatformDatePickerFormatExampleComponent {\n    form = new FormGroup({});\n}\n",x='<fdp-form-group #ffg [formGroup]="form">\n    <fdp-form-field #ffl1 id="format1" label="date picker with custom output format">\n        <fdp-date-picker name="format1" [formControl]="ffl1.formControl" placeholder="mm/dd/yyyy"></fdp-date-picker>\n    </fdp-form-field>\n\n    <fdp-form-field #ffl2 id="format2" label="range date picker custom format">\n        <fdp-date-picker name="format2" placeholder="mm/dd/yy // mm/dd/yy" type="range" [formControl]="ffl2.formControl">\n        </fdp-date-picker>\n    </fdp-form-field>\n</fdp-form-group>\n\n<div>Selected Date: {{ form.controls.format1?.value?.toDateString()}}</div>\n<br />\n<br />\n<div>Selected First Date: {{ form.controls.format2?.value?.start?.toDateString() }}</div>\n<div>Selected Last Date: {{ form.controls.format2?.value?.end?.toDateString() }}</div>\n',C=a("fXoL"),A=a("ddaM"),T=a("kt86"),R=a("X1JU"),S=a("3Pt+"),E=a("vnx5"),W=a("ha2x"),w=a("U+jJ"),I=a("ofXK");function O(e,t){1&e&&(C.Ub(0),C.Wb(1,"span"),C.Vc(2,"Value is required"),C.Vb(),C.Tb())}function N(e,t){1&e&&(C.Ub(0),C.Vc(1," Range date is invalid. "),C.Tb())}function _(e,t){if(1&e&&(C.Tc(0,O,3,0,"ng-container",27),C.Tc(1,N,2,0,"ng-container",27)),2&e){const e=t.$implicit;C.vc("ngIf",e.required),C.Db(1),C.vc("ngIf",e.nullRangeDate)}}function L(e,t){1&e&&(C.Ub(0),C.Wb(1,"span"),C.Vc(2,"Value is required"),C.Vb(),C.Tb())}function j(e,t){1&e&&(C.Ub(0),C.Vc(1," Range date is invalid. "),C.Tb())}function q(e,t){if(1&e&&(C.Tc(0,L,3,0,"ng-container",27),C.Tc(1,j,2,0,"ng-container",27)),2&e){const e=t.$implicit;C.vc("ngIf",e.required),C.Db(1),C.vc("ngIf",e.nullRangeDate)}}let H=(()=>{class e{constructor(){this.birthday=new g.d(1990,1,2),this.holiday={start:new g.d(2020,5,14),end:new g.d(2020,5,24)},this.datePickerForm=new S.i({}),this.formInitialData={birthday:this.birthday,holiday:this.holiday},this.requiredDateValidator=[S.A.required],this.rangeDateValidator=[G],this.disabledDate="",this.birthdayPicker="",this.holidayPicker="",this.dateOutsideForm="",this.rangeDateOutsideForm=""}onSubmit(e){alert("Form Value: "+e)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=C.Kb({type:e,selectors:[["fdp-platform-date-picker-example"]],features:[C.Cb([{provide:g.b,useClass:g.e},{provide:g.a,useValue:g.c}])],decls:50,vars:27,consts:[["columnLayout","XL2-L2-M1-S1",3,"formGroup","object","onSubmit"],["ffg",""],["id","birthday","column","1","rank","1","required","true","placeholder","Enter your birthday","label","Pre-populated single type date-picker:",3,"validators"],["ffl1",""],["name","birthday","type","single",3,"allowNull","formControl"],["id","examdate","column","2","rank","1","required","true","label","Single type date-picker:"],["ffl2",""],["name","examdate","type","single","placeholder","Enter your Exam dates",3,"allowNull","formControl"],["id","holiday","column","1","rank","1","label","Pre-populated range type date-picker:",3,"validators"],["ffl3",""],["name","holiday","type","range","rangeHoverEffect","true","contentDensity","compact","placeholder","Holiday in between?",3,"allowNull","formControl"],["id","journeydate","column","2","rank","2","label","Range type date-picker:"],["ffl4",""],["name","journeydate","type","range","contentDensity","compact","placeholder","Journey dates?",3,"formControl"],["id","disableddate","column","1","rank","2","label","Disabled Date Picker:","disabled","true"],["ffl5",""],["name","disableddate","type","single","placeholder","This is a disabled date picker",3,"allowNull","formControl"],["i18n",""],["columnLayout","XL2-L2-M1-S1"],["id","birthday","column","1","rank","1","required","true","label","Birth Date:"],["name","birthday","placeholder","mm/dd/yyyy","type","single",3,"allowNull","ngModel","ngModelChange"],["id","holiday","column","1","rank","2","required","true","label","Holiday:",3,"validators"],["name","holiday","type","range","contentDensity","compact","placeholder","When are you going to holiday?",3,"allowNull","ngModel","ngModelChange"],["id","disableddate","column","2","rank","1","label","Disabled Date Picker:"],["name","disabledDate","type","single","disabled","true",3,"ngModel","ngModelChange"],["name","dateOutsideForm","placeholder","mm/dd/yyyy","type","single",3,"ngModel","ngModelChange"],["name","rangeDateOutsideForm","type","range","placeholder","mm/dd/yyyy - mm/dd/yyyy",3,"ngModel","ngModelChange"],[4,"ngIf"]],template:function(e,t){if(1&e){const e=C.Xb();C.Wb(0,"h3"),C.Vc(1,"Date Picker with Reactive Form."),C.Vb(),C.Wb(2,"fdp-form-group",0,1),C.jc("onSubmit",function(){C.Kc(e);const a=C.Hc(3);return t.onSubmit(a)}),C.Wb(4,"fdp-form-field",2,3),C.Rb(6,"fdp-date-picker",4),C.Vb(),C.Wb(7,"fdp-form-field",5,6),C.Rb(9,"fdp-date-picker",7),C.Vb(),C.Wb(10,"fdp-form-field",8,9),C.Rb(12,"fdp-date-picker",10),C.Vb(),C.Wb(13,"fdp-form-field",11,12),C.Rb(15,"fdp-date-picker",13),C.Vb(),C.Wb(16,"fdp-form-field",14,15),C.Rb(18,"fdp-date-picker",16),C.Vb(),C.Tc(19,_,2,2,"ng-template",null,17,C.Uc),C.Vb(),C.Wb(21,"p"),C.Vc(22),C.Vb(),C.Wb(23,"span"),C.Vc(24),C.Vb(),C.Wb(25,"p"),C.Vc(26),C.Vb(),C.Wb(27,"span"),C.Vc(28),C.Vb(),C.Wb(29,"p"),C.Vc(30),C.Vb(),C.Wb(31,"span"),C.Vc(32),C.Vb(),C.Wb(33,"h3"),C.Vc(34,"Date Picker with Template Driven Form."),C.Vb(),C.Wb(35,"fdp-form-group",18),C.Wb(36,"fdp-form-field",19),C.Wb(37,"fdp-date-picker",20),C.jc("ngModelChange",function(e){return t.birthdayPicker=e}),C.Vb(),C.Vb(),C.Wb(38,"fdp-form-field",21),C.Wb(39,"fdp-date-picker",22),C.jc("ngModelChange",function(e){return t.holidayPicker=e}),C.Vb(),C.Vb(),C.Wb(40,"fdp-form-field",23),C.Wb(41,"fdp-date-picker",24),C.jc("ngModelChange",function(e){return t.disabledDate=e}),C.Vb(),C.Vb(),C.Tc(42,q,2,2,"ng-template",null,17,C.Uc),C.Vb(),C.Wb(44,"h3"),C.Vc(45,"Date Picker Use Outside Form."),C.Vb(),C.Wb(46,"fdp-date-picker",25),C.jc("ngModelChange",function(e){return t.dateOutsideForm=e}),C.Vb(),C.Wb(47,"h3"),C.Vc(48,"Range Date Picker Outside Form."),C.Vb(),C.Wb(49,"fdp-date-picker",26),C.jc("ngModelChange",function(e){return t.rangeDateOutsideForm=e}),C.Vb()}if(2&e){const e=C.Hc(5),a=C.Hc(8),n=C.Hc(11),r=C.Hc(14),o=C.Hc(17);C.Db(2),C.vc("formGroup",t.datePickerForm)("object",t.formInitialData),C.Db(2),C.vc("validators",t.requiredDateValidator),C.Db(2),C.vc("allowNull",!1)("formControl",e.formControl),C.Db(3),C.vc("allowNull",!1)("formControl",a.formControl),C.Db(1),C.vc("validators",t.rangeDateValidator),C.Db(2),C.vc("allowNull",!1)("formControl",n.formControl),C.Db(3),C.vc("formControl",r.formControl),C.Db(3),C.vc("allowNull",!1)("formControl",o.formControl),C.Db(4),C.Xc("Birthday: ",null==t.datePickerForm.controls.birthday||null==t.datePickerForm.controls.birthday.value?null:t.datePickerForm.controls.birthday.value.toDateString(),""),C.Db(2),C.Xc("Exam Date: ",null==t.datePickerForm.controls.examdate||null==t.datePickerForm.controls.examdate.value?null:t.datePickerForm.controls.examdate.value.toDateString(),""),C.Db(2),C.Xc("Holiday Start Date: ",null==t.datePickerForm.controls.holiday||null==t.datePickerForm.controls.holiday.value||null==t.datePickerForm.controls.holiday.value.start?null:t.datePickerForm.controls.holiday.value.start.toDateString(),""),C.Db(2),C.Xc("Holiday End Date: ",null==t.datePickerForm.controls.holiday||null==t.datePickerForm.controls.holiday.value||null==t.datePickerForm.controls.holiday.value.end?null:t.datePickerForm.controls.holiday.value.end.toDateString(),""),C.Db(2),C.Xc("Journey Start Date: ",null==t.datePickerForm.controls.journeydate||null==t.datePickerForm.controls.journeydate.value||null==t.datePickerForm.controls.journeydate.value.start?null:t.datePickerForm.controls.journeydate.value.start.toDateString(),""),C.Db(2),C.Xc("Journey End Date: ",null==t.datePickerForm.controls.journeydate||null==t.datePickerForm.controls.journeydate.value||null==t.datePickerForm.controls.journeydate.value.end?null:t.datePickerForm.controls.journeydate.value.end.toDateString(),""),C.Db(5),C.vc("allowNull",!1)("ngModel",t.birthdayPicker),C.Db(1),C.vc("validators",t.rangeDateValidator),C.Db(1),C.vc("allowNull",!1)("ngModel",t.holidayPicker),C.Db(2),C.vc("ngModel",t.disabledDate),C.Db(5),C.vc("ngModel",t.dateOutsideForm),C.Db(3),C.vc("ngModel",t.rangeDateOutsideForm)}},directives:[E.a,S.r,S.j,W.a,w.a,S.q,S.g,S.t,I.o],encapsulation:2}),e})();function G(e){var t;return(null===(t=e.value)||void 0===t?void 0:t.start)?null:{nullRangeDate:"Range date is not valid"}}var X=a("5HkS"),U=a("Hxo2");let J=(()=>{class e{constructor(e){this.datetimeAdapter=e,this.customForm=new S.i({}),this.disableFunction=e=>{const t=this.datetimeAdapter.getMonth(e),a=this.datetimeAdapter.getYear(e),n=this.datetimeAdapter.getDate(e),r=this.datetimeAdapter.today().year,o=this.datetimeAdapter.today().month,l=this.datetimeAdapter.getNumDaysInMonth(this.datetimeAdapter.today());return!(a===r&&t===o&&n<=l)}}}return e.\u0275fac=function(t){return new(t||e)(C.Qb(g.b))},e.\u0275cmp=C.Kb({type:e,selectors:[["fdp-platform-date-picker-disable-func-example"]],features:[C.Cb([{provide:g.b,useClass:g.e},{provide:g.a,useValue:g.c}])],decls:5,vars:3,consts:[[3,"formGroup"],["ffg",""],["id","offDay","rank","1","placeholder","Off day in current month","label","Disable dates other than this month"],["ffl1",""],["name","offDay","type","single",3,"disableFunction","formControl"]],template:function(e,t){if(1&e&&(C.Wb(0,"fdp-form-group",0,1),C.Wb(2,"fdp-form-field",2,3),C.Rb(4,"fdp-date-picker",4),C.Vb(),C.Vb()),2&e){const e=C.Hc(3);C.vc("formGroup",t.customForm),C.Db(4),C.vc("disableFunction",t.disableFunction)("formControl",e.formControl)}},directives:[E.a,S.r,S.j,W.a,w.a,S.q,S.g],encapsulation:2}),e})();const Y=Object.assign(Object.assign({},g.c),{display:Object.assign(Object.assign({},g.c.display),{dateInput:{year:"2-digit",month:"2-digit",day:"2-digit"}}),rangeDelimiter:" // "});let K=(()=>{class e{constructor(){this.form=new S.i({})}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=C.Kb({type:e,selectors:[["fdp-platform-date-picker-format-example"]],features:[C.Cb([{provide:g.b,useClass:g.e},{provide:g.a,useValue:Y}])],decls:16,vars:6,consts:[[3,"formGroup"],["ffg",""],["id","format1","label","date picker with custom output format"],["ffl1",""],["name","format1","placeholder","mm/dd/yyyy",3,"formControl"],["id","format2","label","range date picker custom format"],["ffl2",""],["name","format2","placeholder","mm/dd/yy // mm/dd/yy","type","range",3,"formControl"]],template:function(e,t){if(1&e&&(C.Wb(0,"fdp-form-group",0,1),C.Wb(2,"fdp-form-field",2,3),C.Rb(4,"fdp-date-picker",4),C.Vb(),C.Wb(5,"fdp-form-field",5,6),C.Rb(7,"fdp-date-picker",7),C.Vb(),C.Vb(),C.Wb(8,"div"),C.Vc(9),C.Vb(),C.Rb(10,"br"),C.Rb(11,"br"),C.Wb(12,"div"),C.Vc(13),C.Vb(),C.Wb(14,"div"),C.Vc(15),C.Vb()),2&e){const e=C.Hc(3),a=C.Hc(6);C.vc("formGroup",t.form),C.Db(4),C.vc("formControl",e.formControl),C.Db(3),C.vc("formControl",a.formControl),C.Db(2),C.Xc("Selected Date: ",null==t.form.controls.format1||null==t.form.controls.format1.value?null:t.form.controls.format1.value.toDateString(),""),C.Db(4),C.Xc("Selected First Date: ",null==t.form.controls.format2||null==t.form.controls.format2.value||null==t.form.controls.format2.value.start?null:t.form.controls.format2.value.start.toDateString(),""),C.Db(2),C.Xc("Selected Last Date: ",null==t.form.controls.format2||null==t.form.controls.format2.value||null==t.form.controls.format2.value.end?null:t.form.controls.format2.value.end.toDateString(),"")}},directives:[E.a,S.r,S.j,W.a,w.a,S.q,S.g],encapsulation:2}),e})();var z=a("HppM"),B=a("Dtj0"),$=a("icNb"),Q=a("rp8N");let Z=(()=>{class e extends z.b{constructor(){super(...arguments),this.yearSelectionLabel="S\xe9lection de l'ann\xe9e",this.previousYearLabel="Ann\xe9e pr\xe9c\xe9dente",this.nextYearLabel="Ann\xe9e suivante",this.monthSelectionLabel="S\xe9lection du mois",this.previousMonthLabel="Mois pr\xe9c\xe9dent",this.nextMonthLabel="Mois suivant"}}return e.\u0275fac=function(t){return ee(t||e)},e.\u0275prov=C.Mb({token:e,factory:e.\u0275fac}),e})();const ee=C.Yb(Z);let te=(()=>{class e{constructor(e){this.datetimeAdapter=e,this.date=g.d.getNow(),this.locale="fr"}setLocale(e){this.locale=e,this.datetimeAdapter.setLocale(e)}}return e.\u0275fac=function(t){return new(t||e)(C.Qb(g.b))},e.\u0275cmp=C.Kb({type:e,selectors:[["fdp-platform-date-picker-i18n-example"]],features:[C.Cb([{provide:C.w,useValue:"fr"},{provide:g.b,useClass:g.e},{provide:z.b,useClass:Z},{provide:g.a,useValue:g.c}])],decls:8,vars:3,consts:[["fd-form-label","","for","language"],["id","language",2,"margin-bottom","20px",3,"ngModel","ngModelChange"],["fd-button","","label","French","value","fr"],["fd-button","","label","German","value","de"],["fd-button","","label","Bulgarian","value","bg"],["id","i18n-example","name","i18n-example",3,"ngModel","startingDayOfWeek","ngModelChange"]],template:function(e,t){1&e&&(C.Wb(0,"label",0),C.Vc(1,"Select language:"),C.Vb(),C.Wb(2,"fd-segmented-button",1),C.jc("ngModelChange",function(e){return t.setLocale(e)}),C.Rb(3,"button",2),C.Rb(4,"button",3),C.Rb(5,"button",4),C.Vb(),C.Rb(6,"br"),C.Wb(7,"fdp-date-picker",5),C.jc("ngModelChange",function(e){return t.date=e}),C.Vb()),2&e&&(C.Db(2),C.vc("ngModel",t.locale),C.Db(5),C.vc("ngModel",t.date)("startingDayOfWeek",1))},directives:[B.a,$.a,S.q,S.t,Q.a,w.a],encapsulation:2}),e})(),ae=(()=>{class e{constructor(){this.datePickerExample=[{language:"html",code:n,fileName:"platform-date-picker-example"},{language:"typescript",code:r,fileName:"platform-date-picker-example",component:"PlatformDatePickerExampleComponent"}],this.datePickeri18nExample=[{language:"html",code:o,fileName:"platform-date-picker-i18n-example"},{language:"typescript",code:l,fileName:"platform-date-picker-i18n-example",component:"PlatformDatePickeri18nExampleComponent"}],this.datePickerDisableFunction=[{language:"html",code:d,fileName:"platform-date-picker-disable-func-example"},{language:"typescript",code:i,fileName:"platform-date-picker-disable-func-example",component:"PlatformDatePickerDisableFuncExampleComponent"}],this.datePickerFormat=[{language:"typescript",code:c,fileName:"platform-date-picker-format-example",component:"PlatformDatePickerFormatExampleComponent"},{language:"html",code:m,fileName:"platform-date-picker-format-example",component:"PlatformDatePickerFormatExampleComponent"}]}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=C.Kb({type:e,selectors:[["app-datepicker"]],decls:34,vars:4,consts:[["id","form","componentName","date-picker"],[3,"exampleFiles"],["id","disable-calendar","componentName","date-picker"],["id","format","componentName","date-picker"],["id","internationalization","componentName","date-picker"]],template:function(e,t){1&e&&(C.Wb(0,"fd-docs-section-title",0),C.Vc(1," Simple Date Picker and Range Date Picker in Platform Form.\n"),C.Vb(),C.Wb(2,"description"),C.Vc(3," Value of date-picker can be initialized by passing data using object property in fdp-form-group.\n"),C.Vb(),C.Wb(4,"component-example"),C.Rb(5,"fdp-platform-date-picker-example"),C.Vb(),C.Rb(6,"code-example",1),C.Rb(7,"separator"),C.Wb(8,"fd-docs-section-title",2),C.Vc(9," Disable parts of Calendar for selection\n"),C.Vb(),C.Wb(10,"description"),C.Vc(11," Part of Calendar can be disabled. This can be controlled by passing disableFunction for simple date-picker and passing disableRangeStartFunction and disableRangeEndFunction for range Date Picker.\n"),C.Vb(),C.Wb(12,"component-example"),C.Rb(13,"fdp-platform-date-picker-disable-func-example"),C.Vb(),C.Rb(14,"code-example",1),C.Rb(15,"separator"),C.Wb(16,"fd-docs-section-title",3),C.Vc(17," Date Picker Formatting\n"),C.Vb(),C.Wb(18,"description"),C.Vc(19," Providing a custom format for the dates is possible through providing "),C.Wb(20,"code"),C.Vc(21,"DATE_TIME_FORMATS"),C.Vb(),C.Vc(22," config.\n"),C.Vb(),C.Wb(23,"component-example"),C.Rb(24,"fdp-platform-date-picker-format-example"),C.Vb(),C.Rb(25,"code-example",1),C.Rb(26,"separator"),C.Wb(27,"fd-docs-section-title",4),C.Vc(28," Internationalization of Date Picker\n"),C.Vb(),C.Wb(29,"description"),C.Vc(30," It is possible to internationalize both the aria labels and the month names/weekdays through providing a service.\n"),C.Vb(),C.Wb(31,"component-example"),C.Rb(32,"fdp-platform-date-picker-i18n-example"),C.Vb(),C.Rb(33,"code-example",1)),2&e&&(C.Db(6),C.vc("exampleFiles",t.datePickerExample),C.Db(8),C.vc("exampleFiles",t.datePickerDisableFunction),C.Db(11),C.vc("exampleFiles",t.datePickerFormat),C.Db(8),C.vc("exampleFiles",t.datePickeri18nExample))},directives:[A.a,T.a,R.a,H,X.a,U.a,J,K,te],encapsulation:2}),e})();var ne=a("dor/"),re=a("oqgM"),oe=a("RJTZ"),le=a("Kpas");const ie=[{path:"",component:(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=C.Kb({type:e,selectors:[["app-date-picker-header"]],decls:28,vars:0,consts:[["href","fundamental-ngx#/core/date-picker"],["href","fundamental-ngx#/platform/form-container"],["module","PlatformDatePickerModule","subPackage","form"]],template:function(e,t){1&e&&(C.Wb(0,"header"),C.Vc(1,"Date Picker"),C.Vb(),C.Wb(2,"description"),C.Vc(3," Platform Date Picker is an extension of the Date Picker component present in "),C.Wb(4,"fdp-link",0),C.Vc(5,"fundamental-ngx/core"),C.Vb(),C.Vc(6," to work with "),C.Wb(7,"fdp-link",1),C.Vc(8,"Platform Form"),C.Vb(),C.Vc(9,". "),C.Rb(10,"br"),C.Vc(11," It keeps the same property and behavior with core Date picker. "),C.Rb(12,"br"),C.Vc(13," Platform Date Picker module uses DatetimeAdapter provider for handling date parsing and formatting. "),C.Rb(14,"br"),C.Rb(15,"br"),C.Rb(16,"import",2),C.Rb(17,"br"),C.Wb(18,"h3"),C.Vc(19,"Platform specific changes"),C.Vb(),C.Wb(20,"ul"),C.Wb(21,"li"),C.Vc(22," fundamental-ngx/core Date Picker has been Wrapped up to work with "),C.Wb(23,"fdp-link",1),C.Vc(24,"Platform Form"),C.Vb(),C.Vc(25,". "),C.Vb(),C.Vb(),C.Vb(),C.Rb(26,"fd-header-tabs"),C.Rb(27,"router-outlet"))},directives:[ne.a,T.a,re.a,oe.a,le.a,p.h],encapsulation:2}),e})(),children:[{path:"",component:ae},{path:"api",component:f.a,data:{content:s.a.datePicker}}]}];let de=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=C.Ob({type:e}),e.\u0275inj=C.Nb({imports:[[p.g.forChild(ie),u.a,b.a,h.a,g.f,D.j,D.b],p.g]}),e})()}}]);