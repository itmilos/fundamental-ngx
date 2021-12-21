(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{qp4v:function(e,i,t){"use strict";t.r(i),t.d(i,"PlatformTimePickerDocsModule",function(){return X});var n={};t.r(n),t.d(n,"default",function(){return h});var l={};t.r(l),t.d(l,"default",function(){return k});var r={};t.r(r),t.d(r,"default",function(){return T});var o={};t.r(o),t.d(o,"default",function(){return V});var a={};t.r(a),t.d(a,"default",function(){return g});var m={};t.r(m),t.d(m,"default",function(){return v});var d=t("tyNb"),c=t("IywY"),p=t("t9W5"),s=t("jzzn"),u=t("7zrd"),f=t("GKNN"),b=t("G6Ao"),h='<label class="fd-form-label">24-Hour Time Picker</label>\n<br>\n<fdp-time-picker name="24-hour" [displayFormat]="displayFormat"></fdp-time-picker>\n<br>\n\n<br>\n<label class="fd-form-label">12-Hour Time Picker</label>\n<br>\n<fdp-time-picker name="12-hour" [meridian]="true"></fdp-time-picker>\n<br>\n\n<br>\n<label class="fd-form-label">Time Picker Without Seconds</label>\n<br>\n<fdp-time-picker name="without-seconds" [displaySeconds]="false"></fdp-time-picker>\n<br>\n\n<br>\n<label class="fd-form-label">Disabled Time Picker</label>\n<br>\n<fdp-time-picker name="disabled" [disabled]="true"></fdp-time-picker>\n<br>\n\n<br>\n<label class="fd-form-label">Compact Time Picker</label>\n<br>\n<fdp-time-picker name="compact" contentDensity="compact"></fdp-time-picker>\n<br>\n\n<br>\n<label class="fd-form-label">Null Validity</label>\n<br>\n<fdp-time-picker name="null-validity" [allowNull]="false" [(ngModel)]="allowNullTimeObject"></fdp-time-picker>\n<br>\n<br>\n<button fd-button label="Set To Null" (click)="setNull()"></button>\n<button fd-button label="Set Valid Time" (click)="setValid()"></button>\n',k="import { Component } from '@angular/core';\n\nimport { DatetimeAdapter, DATE_TIME_FORMATS, FdDate, FdDatetimeAdapter, FD_DATETIME_FORMATS } from '@fundamental-ngx/core/datetime';\n\n@Component({\n    selector: 'fdp-platform-time-picker-basic-example',\n    templateUrl: './platform-time-picker-basic-example.component.html',\n    providers: [\n        // Note that this is usually provided in the root of your application.\n        // Due to the limit of this example we must provide it on this level.\n        {\n            provide: DatetimeAdapter,\n            useClass: FdDatetimeAdapter\n        },\n        {\n            provide: DATE_TIME_FORMATS,\n            useValue: FD_DATETIME_FORMATS\n        }\n    ]\n})\nexport class PlatformTimePickerBasicExampleComponent {\n    allowNullTimeObject: FdDate = new FdDate().setTime(12, 0, 0);\n    displayFormat = { hour: 'numeric', minute: '2-digit', second: '2-digit', hour12: false };\n\n    setNull(): void {\n        this.allowNullTimeObject = null;\n    }\n\n    setValid(): void {\n        this.allowNullTimeObject = new FdDate().setTime(12, 0, 0);\n    }\n}\n",T='<fdp-form-group [formGroup]="timePickerForm" (onSubmit)="onSubmit()">\n    <fdp-form-field\n        #ffl1\n        id="24-hour"\n        rank="1"\n        required="true"\n        placeholder="hh:mm:ss"\n        required="true"\n        [validators]="requiredTimeValidator"\n        label="24-Hour Time Picker:"\n    >\n        <fdp-time-picker name="24-hour" [formControl]="ffl1.formControl" [displayFormat]="displayFormat"></fdp-time-picker>\n    </fdp-form-field>\n\n    <fdp-form-field\n        #ffl2\n        id="12-hour"\n        rank="1"\n        required="true"\n        placeholder="hh:mm:ss"\n        [validators]="requiredTimeValidator"\n        label="12-Hour Time Picker:"\n    >\n        <fdp-time-picker name="12-hour" [meridian]="true" [formControl]="ffl2.formControl"></fdp-time-picker>\n    </fdp-form-field>\n\n    <fdp-form-field\n        #ffl3\n        id="without-seconds"\n        rank="1"\n        required="true"\n        placeholder="hh:mm"\n        [validators]="requiredTimeValidator"\n        label="Time Picker Without Seconds:"\n    >\n        <fdp-time-picker name="without-seconds" [displaySeconds]="false" [formControl]="ffl3.formControl"></fdp-time-picker>\n    </fdp-form-field>\n\n    <fdp-form-field\n        #ffl4\n        id="compact"\n        rank="1"\n        required="true"\n        placeholder="hh:mm:ss"\n        [validators]="requiredTimeValidator"\n        label="Compact Time Picker:"\n    >\n        <fdp-time-picker name="compact" contentDensity="compact" [formControl]="ffl4.formControl"></fdp-time-picker>\n    </fdp-form-field>\n\n    <fdp-form-field\n        id="nullValidity"\n        rank="1"\n        required="true"\n        placeholder="hh:mm:ss"\n        [validators]="requiredTimeValidator"\n        label="Null Validity:"\n    >\n        <fdp-time-picker name="nullValidity" [allowNull]="false" formControlName="nullValidity"></fdp-time-picker>\n\n        <br>\n        <br>\n        <fd-segmented-button>\n            <button fd-button label="Set To Null" (click)="setNull()"></button>\n            <button fd-button label="Set Valid Time" (click)="setValid()"></button>\n        </fd-segmented-button>\n    </fdp-form-field>\n\n    <fdp-form-field\n        id="disableExample"\n        rank="1"\n        placeholder="hh:mm:ss"\n        label="Disabled Time Picker:"\n    >\n        <fdp-time-picker name="disableExample" formControlName="disableExample"></fdp-time-picker>\n    </fdp-form-field>\n\n    <fdp-form-field id="submitBtn" rank="8">\n        <button fd-button name="submitBtn" (click)="onSubmit()">Submit</button>\n    </fdp-form-field>\n    <ng-template #i18n let-errors>\n        <span *ngIf="errors.required">\n            Value is required\n        </span>\n    </ng-template>\n</fdp-form-group>\n\n<span>form status: {{ timePickerForm?.valid }}</span>\n',V="import { ChangeDetectionStrategy, Component } from '@angular/core';\nimport { FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';\n\nimport { DatetimeAdapter, DATE_TIME_FORMATS, FdDate, FdDatetimeAdapter, FD_DATETIME_FORMATS } from '@fundamental-ngx/core/datetime';\n\n@Component({\n    selector: 'fdp-platform-time-picker-reactive-example',\n    templateUrl: './platform-time-picker-reactive-example.component.html',\n    changeDetection: ChangeDetectionStrategy.OnPush,\n    providers: [\n        // Note that this is usually provided in the root of your application.\n        // Due to the limit of this example we must provide it on this level.\n        {\n            provide: DatetimeAdapter,\n            useClass: FdDatetimeAdapter\n        },\n        {\n            provide: DATE_TIME_FORMATS,\n            useValue: FD_DATETIME_FORMATS\n        }\n    ]\n})\nexport class PlatformTimePickerReactiveExampleComponent {\n    requiredTimeValidator: ValidatorFn[] = [Validators.required];\n    displayFormat = { hour: 'numeric', minute: '2-digit', second: '2-digit', hour12: false };\n\n    timePickerForm: FormGroup = new FormGroup({\n        disableExample: new FormControl({ value: '', disabled: true }),\n        nullValidity: new FormControl(new FdDate().setTime(0, 0, 0))\n    });\n\n    onSubmit(): void {\n        if (this.timePickerForm.valid) {\n            alert('Form Value: ' + JSON.stringify(this.timePickerForm.value));\n        } else {\n            alert('Form invalid');\n        }\n    }\n\n    setNull(): void {\n        this.timePickerForm.get('nullValidity').setValue(null);\n        this.markControlAsTouched('nullValidity');\n    }\n\n    setValid(): void {\n        this.timePickerForm.get('nullValidity').setValue(new FdDate().setTime(0, 0, 0));\n        this.markControlAsTouched('nullValidity');\n    }\n\n    private markControlAsTouched(controlName: string): void {\n        const control = this.timePickerForm.get(controlName);\n\n        if (control.untouched) {\n            control.markAsTouched();\n        }\n    }\n}\n",g='<fdp-form-group>\n    <fdp-form-field\n        id="24-hour"\n        rank="1"\n        label="24-Hour Time Picker:"\n    >\n        <fdp-time-picker name="24-hour" [(ngModel)]="time24h" [displayFormat]="displayFormat"></fdp-time-picker>\n    </fdp-form-field>\n\n    <fdp-form-field\n        id="12-hour"\n        rank="1"\n        label="12-Hour Time Picker:"\n    >\n        <fdp-time-picker name="12-hour" [meridian]="true" [(ngModel)]="time12h"></fdp-time-picker>\n    </fdp-form-field>\n\n    <fdp-form-field\n        id="without-seconds"\n        rank="1"\n        label="Time Picker Without Seconds:"\n    >\n        <fdp-time-picker name="without-seconds" [displaySeconds]="false" [(ngModel)]="timeWithoutSeconds"></fdp-time-picker>\n    </fdp-form-field>\n\n    <fdp-form-field\n        id="compact"\n        rank="1"\n        label="Compact Time Picker:"\n    >\n        <fdp-time-picker name="compact" contentDensity="compact" [(ngModel)]="timeCompact"></fdp-time-picker>\n    </fdp-form-field>\n\n    <fdp-form-field\n        id="null-validity"\n        rank="1"\n        label="Null Validity:"\n    >\n        <fdp-time-picker name="null-validity" [allowNull]="false" [(ngModel)]="timeAllowNull"></fdp-time-picker>\n\n        <br>\n        <br>\n        <button fd-button label="Set To Null" (click)="setNull()"></button>\n        <button fd-button label="Set Valid Time" (click)="setValid()"></button>\n    </fdp-form-field>\n\n    <fdp-form-field\n        id="disableExample"\n        rank="1"\n        label="Disabled Time Picker:"\n    >\n        <fdp-time-picker name="disableExample" [disabled]="true" [(ngModel)]="timeDisabled"></fdp-time-picker>\n    </fdp-form-field>\n\n    <ng-template #i18n let-errors>\n        <span *ngIf="errors.required">\n            Value is required\n        </span>\n    </ng-template>\n</fdp-form-group>\n',v="import { ChangeDetectionStrategy, Component } from '@angular/core';\n\nimport { DatetimeAdapter, DATE_TIME_FORMATS, FdDate, FdDatetimeAdapter, FD_DATETIME_FORMATS } from '@fundamental-ngx/core/datetime';\n\n@Component({\n    selector: 'fdp-platform-time-picker-template-example',\n    templateUrl: './platform-time-picker-template-example.component.html',\n    changeDetection: ChangeDetectionStrategy.OnPush,\n    providers: [\n        // Note that this is usually provided in the root of your application.\n        // Due to the limit of this example we must provide it on this level.\n        {\n            provide: DatetimeAdapter,\n            useClass: FdDatetimeAdapter\n        },\n        {\n            provide: DATE_TIME_FORMATS,\n            useValue: FD_DATETIME_FORMATS\n        }\n    ]\n})\nexport class PlatformTimePickerTemplateExampleComponent {\n    time24h: FdDate = new FdDate().setTime(18, 0, 0);\n    time12h: FdDate = new FdDate().setTime(18, 0, 0);\n    timeWithoutSeconds: FdDate = new FdDate().setTime(12, 0, 0);\n    timeCompact: FdDate = new FdDate().setTime(12, 0, 0);\n    timeAllowNull: FdDate = new FdDate().setTime(12, 0, 0);\n    timeDisabled: FdDate = new FdDate().setTime(12, 0, 0);\n    displayFormat = { hour: 'numeric', minute: '2-digit', second: '2-digit', hour12: false };\n\n    setNull(): void {\n        this.timeAllowNull = null;\n    }\n\n    setValid(): void {\n        this.timeAllowNull = new FdDate().setTime(12, 0, 0)\n    }\n}\n",F=t("fXoL"),D=t("ddaM"),w=t("kt86"),y=t("X1JU"),P=t("6K0q"),C=t("3Pt+"),N=t("rp8N");let W=(()=>{class e{constructor(){this.allowNullTimeObject=(new f.d).setTime(12,0,0),this.displayFormat={hour:"numeric",minute:"2-digit",second:"2-digit",hour12:!1}}setNull(){this.allowNullTimeObject=null}setValid(){this.allowNullTimeObject=(new f.d).setTime(12,0,0)}}return e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=F.Kb({type:e,selectors:[["fdp-platform-time-picker-basic-example"]],features:[F.Cb([{provide:f.b,useClass:f.e},{provide:f.a,useValue:f.c}])],decls:38,vars:6,consts:[[1,"fd-form-label"],["name","24-hour",3,"displayFormat"],["name","12-hour",3,"meridian"],["name","without-seconds",3,"displaySeconds"],["name","disabled",3,"disabled"],["name","compact","contentDensity","compact"],["name","null-validity",3,"allowNull","ngModel","ngModelChange"],["fd-button","","label","Set To Null",3,"click"],["fd-button","","label","Set Valid Time",3,"click"]],template:function(e,i){1&e&&(F.Wb(0,"label",0),F.Vc(1,"24-Hour Time Picker"),F.Vb(),F.Rb(2,"br"),F.Rb(3,"fdp-time-picker",1),F.Rb(4,"br"),F.Rb(5,"br"),F.Wb(6,"label",0),F.Vc(7,"12-Hour Time Picker"),F.Vb(),F.Rb(8,"br"),F.Rb(9,"fdp-time-picker",2),F.Rb(10,"br"),F.Rb(11,"br"),F.Wb(12,"label",0),F.Vc(13,"Time Picker Without Seconds"),F.Vb(),F.Rb(14,"br"),F.Rb(15,"fdp-time-picker",3),F.Rb(16,"br"),F.Rb(17,"br"),F.Wb(18,"label",0),F.Vc(19,"Disabled Time Picker"),F.Vb(),F.Rb(20,"br"),F.Rb(21,"fdp-time-picker",4),F.Rb(22,"br"),F.Rb(23,"br"),F.Wb(24,"label",0),F.Vc(25,"Compact Time Picker"),F.Vb(),F.Rb(26,"br"),F.Rb(27,"fdp-time-picker",5),F.Rb(28,"br"),F.Rb(29,"br"),F.Wb(30,"label",0),F.Vc(31,"Null Validity"),F.Vb(),F.Rb(32,"br"),F.Wb(33,"fdp-time-picker",6),F.jc("ngModelChange",function(e){return i.allowNullTimeObject=e}),F.Vb(),F.Rb(34,"br"),F.Rb(35,"br"),F.Wb(36,"button",7),F.jc("click",function(){return i.setNull()}),F.Vb(),F.Wb(37,"button",8),F.jc("click",function(){return i.setValid()}),F.Vb()),2&e&&(F.Db(3),F.vc("displayFormat",i.displayFormat),F.Db(6),F.vc("meridian",!0),F.Db(6),F.vc("displaySeconds",!1),F.Db(6),F.vc("disabled",!0),F.Db(12),F.vc("allowNull",!1)("ngModel",i.allowNullTimeObject))},directives:[P.a,C.q,C.t,N.a],encapsulation:2}),e})();var R=t("5HkS"),M=t("Hxo2"),S=t("vnx5"),x=t("ha2x"),A=t("icNb"),E=t("ofXK");function q(e,i){1&e&&(F.Wb(0,"span"),F.Vc(1," Value is required "),F.Vb())}function j(e,i){1&e&&F.Tc(0,q,2,0,"span",22),2&e&&F.vc("ngIf",i.$implicit.required)}let O=(()=>{class e{constructor(){this.requiredTimeValidator=[C.A.required],this.displayFormat={hour:"numeric",minute:"2-digit",second:"2-digit",hour12:!1},this.timePickerForm=new C.i({disableExample:new C.f({value:"",disabled:!0}),nullValidity:new C.f((new f.d).setTime(0,0,0))})}onSubmit(){this.timePickerForm.valid?alert("Form Value: "+JSON.stringify(this.timePickerForm.value)):alert("Form invalid")}setNull(){this.timePickerForm.get("nullValidity").setValue(null),this.markControlAsTouched("nullValidity")}setValid(){this.timePickerForm.get("nullValidity").setValue((new f.d).setTime(0,0,0)),this.markControlAsTouched("nullValidity")}markControlAsTouched(e){const i=this.timePickerForm.get(e);i.untouched&&i.markAsTouched()}}return e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=F.Kb({type:e,selectors:[["fdp-platform-time-picker-reactive-example"]],features:[F.Cb([{provide:f.b,useClass:f.e},{provide:f.a,useValue:f.c}])],decls:29,vars:15,consts:[[3,"formGroup","onSubmit"],["id","24-hour","rank","1","required","true","placeholder","hh:mm:ss","required","true","label","24-Hour Time Picker:",3,"validators"],["ffl1",""],["name","24-hour",3,"formControl","displayFormat"],["id","12-hour","rank","1","required","true","placeholder","hh:mm:ss","label","12-Hour Time Picker:",3,"validators"],["ffl2",""],["name","12-hour",3,"meridian","formControl"],["id","without-seconds","rank","1","required","true","placeholder","hh:mm","label","Time Picker Without Seconds:",3,"validators"],["ffl3",""],["name","without-seconds",3,"displaySeconds","formControl"],["id","compact","rank","1","required","true","placeholder","hh:mm:ss","label","Compact Time Picker:",3,"validators"],["ffl4",""],["name","compact","contentDensity","compact",3,"formControl"],["id","nullValidity","rank","1","required","true","placeholder","hh:mm:ss","label","Null Validity:",3,"validators"],["name","nullValidity","formControlName","nullValidity",3,"allowNull"],["fd-button","","label","Set To Null",3,"click"],["fd-button","","label","Set Valid Time",3,"click"],["id","disableExample","rank","1","placeholder","hh:mm:ss","label","Disabled Time Picker:"],["name","disableExample","formControlName","disableExample"],["id","submitBtn","rank","8"],["fd-button","","name","submitBtn",3,"click"],["i18n",""],[4,"ngIf"]],template:function(e,i){if(1&e&&(F.Wb(0,"fdp-form-group",0),F.jc("onSubmit",function(){return i.onSubmit()}),F.Wb(1,"fdp-form-field",1,2),F.Rb(3,"fdp-time-picker",3),F.Vb(),F.Wb(4,"fdp-form-field",4,5),F.Rb(6,"fdp-time-picker",6),F.Vb(),F.Wb(7,"fdp-form-field",7,8),F.Rb(9,"fdp-time-picker",9),F.Vb(),F.Wb(10,"fdp-form-field",10,11),F.Rb(12,"fdp-time-picker",12),F.Vb(),F.Wb(13,"fdp-form-field",13),F.Rb(14,"fdp-time-picker",14),F.Rb(15,"br"),F.Rb(16,"br"),F.Wb(17,"fd-segmented-button"),F.Wb(18,"button",15),F.jc("click",function(){return i.setNull()}),F.Vb(),F.Wb(19,"button",16),F.jc("click",function(){return i.setValid()}),F.Vb(),F.Vb(),F.Vb(),F.Wb(20,"fdp-form-field",17),F.Rb(21,"fdp-time-picker",18),F.Vb(),F.Wb(22,"fdp-form-field",19),F.Wb(23,"button",20),F.jc("click",function(){return i.onSubmit()}),F.Vc(24,"Submit"),F.Vb(),F.Vb(),F.Tc(25,j,1,1,"ng-template",null,21,F.Uc),F.Vb(),F.Wb(27,"span"),F.Vc(28),F.Vb()),2&e){const e=F.Hc(2),t=F.Hc(5),n=F.Hc(8),l=F.Hc(11);F.vc("formGroup",i.timePickerForm),F.Db(1),F.vc("validators",i.requiredTimeValidator),F.Db(2),F.vc("formControl",e.formControl)("displayFormat",i.displayFormat),F.Db(1),F.vc("validators",i.requiredTimeValidator),F.Db(2),F.vc("meridian",!0)("formControl",t.formControl),F.Db(1),F.vc("validators",i.requiredTimeValidator),F.Db(2),F.vc("displaySeconds",!1)("formControl",n.formControl),F.Db(1),F.vc("validators",i.requiredTimeValidator),F.Db(2),F.vc("formControl",l.formControl),F.Db(1),F.vc("validators",i.requiredTimeValidator),F.Db(1),F.vc("allowNull",!1),F.Db(14),F.Xc("form status: ",null==i.timePickerForm?null:i.timePickerForm.valid,"")}},directives:[S.a,C.r,C.j,x.a,P.a,C.q,C.g,C.h,A.a,N.a,E.o],encapsulation:2,changeDetection:0}),e})();function _(e,i){1&e&&(F.Wb(0,"span"),F.Vc(1," Value is required "),F.Vb())}function I(e,i){1&e&&F.Tc(0,_,2,0,"span",15),2&e&&F.vc("ngIf",i.$implicit.required)}let H=(()=>{class e{constructor(){this.time24h=(new f.d).setTime(18,0,0),this.time12h=(new f.d).setTime(18,0,0),this.timeWithoutSeconds=(new f.d).setTime(12,0,0),this.timeCompact=(new f.d).setTime(12,0,0),this.timeAllowNull=(new f.d).setTime(12,0,0),this.timeDisabled=(new f.d).setTime(12,0,0),this.displayFormat={hour:"numeric",minute:"2-digit",second:"2-digit",hour12:!1}}setNull(){this.timeAllowNull=null}setValid(){this.timeAllowNull=(new f.d).setTime(12,0,0)}}return e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=F.Kb({type:e,selectors:[["fdp-platform-time-picker-template-example"]],features:[F.Cb([{provide:f.b,useClass:f.e},{provide:f.a,useValue:f.c}])],decls:19,vars:11,consts:[["id","24-hour","rank","1","label","24-Hour Time Picker:"],["name","24-hour",3,"ngModel","displayFormat","ngModelChange"],["id","12-hour","rank","1","label","12-Hour Time Picker:"],["name","12-hour",3,"meridian","ngModel","ngModelChange"],["id","without-seconds","rank","1","label","Time Picker Without Seconds:"],["name","without-seconds",3,"displaySeconds","ngModel","ngModelChange"],["id","compact","rank","1","label","Compact Time Picker:"],["name","compact","contentDensity","compact",3,"ngModel","ngModelChange"],["id","null-validity","rank","1","label","Null Validity:"],["name","null-validity",3,"allowNull","ngModel","ngModelChange"],["fd-button","","label","Set To Null",3,"click"],["fd-button","","label","Set Valid Time",3,"click"],["id","disableExample","rank","1","label","Disabled Time Picker:"],["name","disableExample",3,"disabled","ngModel","ngModelChange"],["i18n",""],[4,"ngIf"]],template:function(e,i){1&e&&(F.Wb(0,"fdp-form-group"),F.Wb(1,"fdp-form-field",0),F.Wb(2,"fdp-time-picker",1),F.jc("ngModelChange",function(e){return i.time24h=e}),F.Vb(),F.Vb(),F.Wb(3,"fdp-form-field",2),F.Wb(4,"fdp-time-picker",3),F.jc("ngModelChange",function(e){return i.time12h=e}),F.Vb(),F.Vb(),F.Wb(5,"fdp-form-field",4),F.Wb(6,"fdp-time-picker",5),F.jc("ngModelChange",function(e){return i.timeWithoutSeconds=e}),F.Vb(),F.Vb(),F.Wb(7,"fdp-form-field",6),F.Wb(8,"fdp-time-picker",7),F.jc("ngModelChange",function(e){return i.timeCompact=e}),F.Vb(),F.Vb(),F.Wb(9,"fdp-form-field",8),F.Wb(10,"fdp-time-picker",9),F.jc("ngModelChange",function(e){return i.timeAllowNull=e}),F.Vb(),F.Rb(11,"br"),F.Rb(12,"br"),F.Wb(13,"button",10),F.jc("click",function(){return i.setNull()}),F.Vb(),F.Wb(14,"button",11),F.jc("click",function(){return i.setValid()}),F.Vb(),F.Vb(),F.Wb(15,"fdp-form-field",12),F.Wb(16,"fdp-time-picker",13),F.jc("ngModelChange",function(e){return i.timeDisabled=e}),F.Vb(),F.Vb(),F.Tc(17,I,1,1,"ng-template",null,14,F.Uc),F.Vb()),2&e&&(F.Db(2),F.vc("ngModel",i.time24h)("displayFormat",i.displayFormat),F.Db(2),F.vc("meridian",!0)("ngModel",i.time12h),F.Db(2),F.vc("displaySeconds",!1)("ngModel",i.timeWithoutSeconds),F.Db(2),F.vc("ngModel",i.timeCompact),F.Db(2),F.vc("allowNull",!1)("ngModel",i.timeAllowNull),F.Db(6),F.vc("disabled",!0)("ngModel",i.timeDisabled))},directives:[S.a,x.a,P.a,C.q,C.t,N.a,E.o],encapsulation:2,changeDetection:0}),e})(),B=(()=>{class e{constructor(){this.timePickerBasic=[{language:"html",code:n,fileName:"platform-time-picker-basic-example"},{language:"typescript",code:l,fileName:"platform-time-picker-basic-example",component:"PlatformTimePickerBasicExampleComponent"}],this.timePickerReactive=[{language:"html",code:r,fileName:"platform-time-picker-reactive-example"},{language:"typescript",code:o,fileName:"platform-time-picker-reactive-example",component:"PlatformTimePickerReactiveExampleComponent"}],this.timePickerTemplate=[{language:"html",code:a,fileName:"platform-time-picker-template-example"},{language:"typescript",code:m,fileName:"platform-time-picker-template-example",component:"PlatformTimePickerTemplateExampleComponent"}]}}return e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=F.Kb({type:e,selectors:[["app-time-picker"]],decls:33,vars:3,consts:[["id","basic","componentName","time-picker"],[3,"exampleFiles"],["id","reactive","componentName","time-picker"],["id","template","componentName","time-picker"]],template:function(e,i){1&e&&(F.Wb(0,"fd-docs-section-title",0),F.Vc(1," Basic Time Picker\n"),F.Vb(),F.Wb(2,"description"),F.Vc(3,"Basic usage of Time Picker without Forms and with options like "),F.Wb(4,"code"),F.Vc(5,"meredian"),F.Vb(),F.Vc(6,", "),F.Wb(7,"code"),F.Vc(8,"allowNull"),F.Vb(),F.Vc(9,", "),F.Wb(10,"code"),F.Vc(11,"disabled"),F.Vb(),F.Vc(12,", pre-populating and changing dates.\n"),F.Vb(),F.Wb(13,"component-example"),F.Rb(14,"fdp-platform-time-picker-basic-example"),F.Vb(),F.Rb(15,"code-example",1),F.Rb(16,"separator"),F.Wb(17,"fd-docs-section-title",2),F.Vc(18," Time Picker with Reactive Forms\n"),F.Vb(),F.Wb(19,"description"),F.Vc(20,"Usage of Time Picker with Platform Forms using Reactive Forms."),F.Vb(),F.Wb(21,"component-example"),F.Rb(22,"fdp-platform-time-picker-reactive-example"),F.Vb(),F.Rb(23,"code-example",1),F.Rb(24,"separator"),F.Wb(25,"fd-docs-section-title",3),F.Vc(26," Time Picker with Template Forms\n"),F.Vb(),F.Wb(27,"description"),F.Vc(28,"Usage of Time Picker with Platform Forms using Template Forms."),F.Vb(),F.Wb(29,"component-example"),F.Rb(30,"fdp-platform-time-picker-template-example"),F.Vb(),F.Rb(31,"code-example",1),F.Rb(32,"separator")),2&e&&(F.Db(15),F.vc("exampleFiles",i.timePickerBasic),F.Db(8),F.vc("exampleFiles",i.timePickerReactive),F.Db(8),F.vc("exampleFiles",i.timePickerTemplate))},directives:[D.a,w.a,y.a,W,R.a,M.a,O,H],encapsulation:2}),e})();var K=t("dor/"),G=t("RJTZ"),U=t("Kpas");const J=[{path:"",component:(()=>{class e{}return e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=F.Kb({type:e,selectors:[["app-time-picker-header"]],decls:15,vars:0,consts:[["routerLink","/core/time-picker"],["module","PlatformTimePickerModule","subPackage","form"]],template:function(e,i){1&e&&(F.Wb(0,"header"),F.Vc(1,"Time Picker"),F.Vb(),F.Wb(2,"description"),F.Wb(3,"p"),F.Vc(4,"This is an extension of the TimePicker component present in "),F.Wb(5,"a",0),F.Vc(6,"fundamental-ngx/core"),F.Vb(),F.Vc(7,"."),F.Vb(),F.Wb(8,"h3"),F.Vc(9,"Platform specific enhancements:"),F.Vb(),F.Wb(10,"p"),F.Vc(11," Platform TimePicker component implements the FormFieldControl interface, and thus can be used within the FormField component. "),F.Vb(),F.Vb(),F.Rb(12,"import",1),F.Rb(13,"fd-header-tabs"),F.Rb(14,"router-outlet"))},directives:[K.a,w.a,d.f,G.a,U.a,d.h],encapsulation:2}),e})(),children:[{path:"",component:B},{path:"api",component:s.a,data:{content:c.a.timePicker}}]}];let X=(()=>{class e{}return e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=F.Ob({type:e}),e.\u0275inj=F.Nb({imports:[[d.g.forChild(J),u.a,p.a,f.f,b.y,b.b],d.g]}),e})()}}]);