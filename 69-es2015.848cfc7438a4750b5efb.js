(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{Nmby:function(n,a,t){"use strict";t.r(a),t.d(a,"RatingIndicatorDocsModule",function(){return tn});var e={};t.r(e),t.d(e,"default",function(){return C});var i={};t.r(i),t.d(i,"default",function(){return W});var o={};t.r(o),t.d(o,"default",function(){return D});var r={};t.r(r),t.d(r,"default",function(){return M});var s={};t.r(s),t.d(s,"default",function(){return I});var c={};t.r(c),t.d(c,"default",function(){return H});var d={};t.r(d),t.d(d,"default",function(){return F});var l={};t.r(l),t.d(l,"default",function(){return j});var g={};t.r(g),t.d(g,"default",function(){return A});var p={};t.r(p),t.d(p,"default",function(){return S});var b={};t.r(b),t.d(b,"default",function(){return T});var m={};t.r(m),t.d(m,"default",function(){return X});var u=t("tyNb"),v=t("jzzn"),f=t("t9W5"),V=t("PzQJ"),R=t("fXoL"),h=t("dor/"),y=t("kt86"),x=t("RJTZ"),w=t("Kpas");let z=(()=>{class n{}return n.\u0275fac=function(a){return new(a||n)},n.\u0275cmp=R.Kb({type:n,selectors:[["app-rating-indicator-docs-header"]],decls:7,vars:0,consts:[["module","RatingIndicatorModule","subPackage","rating-indicator"]],template:function(n,a){1&n&&(R.Wb(0,"header"),R.Vc(1,"Rating indicator"),R.Vb(),R.Wb(2,"description"),R.Vc(3," The rating indicator displays a group of icons or images (usually stars) that indicate a rating. It allows users to rate content on a numeric scale, typically from 1 (lowest) to 5 (highest). Although the maximum amount is 7 for the icons or images, it is highly recommended to display the default amount of 5.\n"),R.Vb(),R.Rb(4,"import",0),R.Rb(5,"fd-header-tabs"),R.Rb(6,"router-outlet"))},directives:[h.a,y.a,x.a,w.a,u.h],encapsulation:2}),n})();var C='<div *ngFor="let size of sizes">\n    <div class="base-row">\n        <strong>Size = {{ size || \'default\' }}</strong>\n        <fd-rating-indicator\n            [size]="size"\n            totalRatings="111"\n            #sampleSize\n        ></fd-rating-indicator>\n        <span>Selected Rate: {{ sampleSize.viewValue }}</span>\n    </div>\n    <div class="base-row">\n        <strong>And same size = {{ size || \'default\' }} with halves</strong>\n        <fd-rating-indicator\n            [size]="size"\n            [allowHalves]="true"\n            totalRatings="555"\n            #sizeWithHalves\n        ></fd-rating-indicator>\n        <span>Selected Rate: {{ sizeWithHalves.viewValue }}</span>\n    </div>\n</div>',W="import { Component } from '@angular/core';\n\n@Component({\n    selector: 'fd-rating-indicator-sizes',\n    templateUrl: './rating-indicator-sizes.component.html'\n})\nexport class RatingIndicatorSizesExampleComponent {\n    sizes = ['xs', 'sm', 'md', 'lg', 'cozy', 'compact', 'condensed'];\n}\n",D='<div class="base-row">\n    <strong>Popover with ratings data and size=xs(extra small)</strong>\n    <pre>Rating Data: {{ testRatingData1 | json }}</pre>\n    <fd-rating-indicator\n        size="xs"\n        [displayAllRatings]="true"\n        [ratings]="testRatingData1"\n        #rate1\n    ></fd-rating-indicator>\n    <p>\n        Rate average: {{ rate1.ratingAverage.toFixed(2) }}\n        Total ratings: {{ rate1.totalRatings }}\n        Select rate: {{ rate1.viewValue }}\n    </p>\n</div>\n<div class="base-row">\n    <strong>Popover with ratings data and size=compact</strong>\n    <pre>Rating Data: {{ testRatingData2 | json }}</pre>\n    <fd-rating-indicator\n        indicatorCapacity="7"\n        size="compact"\n        [displayAllRatings]="true"\n        [ratings]="testRatingData2"\n        #rate2\n    ></fd-rating-indicator>\n    <p>\n        Rate average: {{ rate2.ratingAverage.toFixed(2) }}\n        Total ratings: {{ rate2.totalRatings }}\n        Select rate: {{ rate2.viewValue }}\n    </p>\n</div>\n<div class="base-row">\n    <strong>Popover with ratings data and size=lg(large)</strong>\n    <pre>Rating Data: {{ testRatingData3 | json }}</pre>\n    <fd-rating-indicator\n        size="lg"\n        [displayAllRatings]="true"\n        [ratings]="testRatingData3"\n        #rate3\n    ></fd-rating-indicator>\n    <p>\n        Rate average: {{ rate3.ratingAverage.toFixed(2) }}\n        Total ratings: {{ rate3.totalRatings }}\n        Select rate: {{ rate3.viewValue }}\n    </p>\n</div>\n<div class="base-row">\n    <strong>Wrong ratings data</strong>\n    <pre>Rating Data: {{ testRatingData4 | json }}</pre>\n    <fd-rating-indicator\n        size="lg"\n        [displayAllRatings]="true"\n        [ratings]="testRatingData4"\n        #rate4\n    ></fd-rating-indicator>\n    <span>\n        Rate average: {{ rate4.ratingAverage.toFixed(2) }}\n        Total ratings: {{ rate4.totalRatings }}\n        Select rate: {{ rate4.viewValue }}\n    </span>\n</div>',M="import { Component } from '@angular/core';\n\n@Component({\n    selector: 'fd-rating-indicator-ratings',\n    templateUrl: './rating-indicator-ratings.component.html'\n})\nexport class RatingIndicatorRatingsExampleComponent {\n    testRatingData1 = {\n        1: 50,\n        4: 15,\n        5: 12\n    };\n    testRatingData2 = {\n        1: 1,\n        2: 100,\n        5: 1,\n        7: 10\n    };\n    testRatingData3 = {\n        3: 1,\n        5: 3\n    };\n    testRatingData4 = [1, 2, 3, 4, 5];\n}\n",I='<div class="base-row">\n    <div>\n        Wrong size protection, you can use only: <strong><pre class="inline-code">\'xs\' | \'sm\' | \'md\' | \'lg\' | \'cozy\' | \'compact\' | \'condensed\'</pre></strong>\n    </div>\n    <fd-rating-indicator\n        size="xsssss"\n        value="0.1"\n        dynamicTextIndicator="ooofff"\n        (ratingChanged)="onRatingChanged($event)"\n        #rate1></fd-rating-indicator>\n    <span>Initial size: <pre class="inline-code">xsssss</pre> View size: <pre class="inline-code">md</pre></span>\n</div>\n<div class="base-row">\n    <fd-rating-indicator\n        totalRatings="2"\n        size="xs"\n        name="ngmodel-rating"\n        [(ngModel)]="modelValue"\n        (ngModelChange)="onRatingChanged($event)"\n        #rateWithModel></fd-rating-indicator>\n    <span>View rate: {{ rateWithModel.viewValue }}</span>\n    <div>\n        <input type="number" min="0" max="10" step="0.1" name="example-rating2" [(ngModel)]="modelValue" />\n    </div>\n</div>\n<div class="base-row">\n    <fd-rating-indicator\n        totalRatings="2"\n        size="xs"\n        value="0.51"\n        (ratingChanged)="onRatingChanged($event)"\n        #rate3></fd-rating-indicator>\n    Initial Rate: 0.51<br />\n    View rate: {{ rate3.viewValue }}\n</div>\n<div class="base-row">\n    <fd-rating-indicator\n    totalRatings="2"\n    size="xs"\n    value="2.51"\n    #rate4></fd-rating-indicator>\n    Initial Rate: 2.51<br />\n    View rate: {{ rate4.viewValue }}\n</div>\n<div class="base-row">\n    <fd-rating-indicator\n    totalRatings="2"\n    size="xs"\n    value="4.99"\n    #rate5></fd-rating-indicator>\n    <span>Initial Rate: 4.99 View rate: {{ rate5.viewValue }}</span>\n</div>\n<div class="base-row">\n    <fd-rating-indicator\n        totalRatings="2"\n        size="xs"\n        value="1231312312312313.99"\n        #rate6>\n    </fd-rating-indicator>\n    <span>Initial Rate: 1231312312312313.99 (Wrong value) View rate: {{ rate6.viewValue }}</span>\n</div>\n<div class="base-row">\n    <p><strong>Disabled Rating indicator</strong></p>\n    <fd-rating-indicator\n        totalRatings="1"\n        value="3.34"\n        [disabled]="true"\n        [allowHalves]="true"\n        (ratingChanged)="onRatingChanged($event)"\n    ></fd-rating-indicator>\n</div>',H="import { Component } from '@angular/core';\n\n@Component({\n    selector: 'fd-rating-indicator-example',\n    templateUrl: './rating-indicator-example.component.html'\n})\nexport class RatingIndicatorExampleComponent {\n    modelValue = 2.2;\n    onRatingChanged(event: number): void {\n        console.log(event);\n    }\n}\n",F='<fd-rating-indicator\n    #dynamicChangeRate\n    [indicatorCapacity]="config.indicatorCapacity"\n    [allowHalves]="config.allowHalves"\n    totalRatings="1"\n    [value]="modelValue"\n    [size]="config.size"\n    [disabled]="config.disabled"\n    [displayMode]="config.displayMode"\n    (ratingChanged)="onRatingChanged($event)"\n></fd-rating-indicator>\n<div *ngIf="dynamicChangeRate">\n    Value: {{ dynamicChangeRate.viewValue || 0 }}\n</div>\n<div>\n    IndicatorCapacity: <input [(ngModel)]="config.indicatorCapacity" type="number" min="1" max="7" />\n</div>\n<div>\n    AllowHalves: <input [(ngModel)]="config.allowHalves" type="checkbox" />\n</div>\n<div>\n    Disabled: <input [(ngModel)]="config.disabled" type="checkbox" />\n</div>\n<div>\n    Display Mode: <input [(ngModel)]="config.displayMode" type="checkbox" />\n</div>\n<div>\n    Sizes: <select [(ngModel)]="config.size">\n        <option [value]=size *ngFor="let size of sizes">{{ size }}</option>\n    </select>\n</div>\n<div>\n    <pre>{{ config | json}}</pre>\n</div>',j="import { Component } from '@angular/core';\n\n@Component({\n    selector: 'fd-ri-dynamic-example',\n    templateUrl: './ri-dynamic-example.component.html'\n})\nexport class RatingIndicatorDynamicExampleComponent {\n    config = {\n        indicatorCapacity: 5,\n        allowHalves: false,\n        disabled: false,\n        displayMode: false,\n        size: 'md'\n    };\n    sizes = ['xs', 'sm', 'md', 'lg', 'cozy', 'compact', 'condensed'];\n    modelValue = 2.2;\n    onRatingChanged(event: number): void {\n        console.log(event);\n    }\n}\n",A='<fd-rating-indicator\n    totalRatings="1"\n    value="3.34"\n    [allowHalves]="true"\n    ratedIcon="sap-icon--bo-strategy-management"\n    unratedIcon="sap-icon--notification"\n></fd-rating-indicator>\n',S="import { Component } from '@angular/core';\n\n@Component({\n    selector: 'fd-ri-custom-icon-example',\n    templateUrl: './ri-custom-icon-example.component.html'\n})\nexport class RatingIndicatorCustomIconExampleComponent {\n    config = {\n        indicatorCapacity: 5,\n        allowHalves: false,\n        disabled: false,\n        size: 'md'\n    };\n    sizes = ['xs', 'sm', 'md', 'lg', 'cozy', 'compact', 'condensed'];\n    modelValue = 2.2;\n    onRatingChanged(event: number): void {\n        console.log(event);\n    }\n}\n",T='<fd-rating-indicator\n    value="2"\n    [displayMode]="true"\n    dynamicTextIndicator="of">\n</fd-rating-indicator>',X="import { Component } from '@angular/core';\n\n@Component({\n    selector: 'fd-ri-display-mode-example',\n    templateUrl: './ri-display-mode-example.component.html'\n})\nexport class RatingIndicatorDisplayModeComponent {}\n",N=t("ddaM"),k=t("X1JU"),E=t("dqk3"),K=t("3Pt+");let P=(()=>{class n{constructor(){this.modelValue=2.2}onRatingChanged(n){console.log(n)}}return n.\u0275fac=function(a){return new(a||n)},n.\u0275cmp=R.Kb({type:n,selectors:[["fd-rating-indicator-example"]],decls:49,vars:9,consts:[[1,"base-row"],[1,"inline-code"],["size","xsssss","value","0.1","dynamicTextIndicator","ooofff",3,"ratingChanged"],["rate1",""],["totalRatings","2","size","xs","name","ngmodel-rating",3,"ngModel","ngModelChange"],["rateWithModel",""],["type","number","min","0","max","10","step","0.1","name","example-rating2",3,"ngModel","ngModelChange"],["totalRatings","2","size","xs","value","0.51",3,"ratingChanged"],["rate3",""],["totalRatings","2","size","xs","value","2.51"],["rate4",""],["totalRatings","2","size","xs","value","4.99"],["rate5",""],["totalRatings","2","size","xs","value","1231312312312313.99"],["rate6",""],["totalRatings","1","value","3.34",3,"disabled","allowHalves","ratingChanged"]],template:function(n,a){if(1&n&&(R.Wb(0,"div",0),R.Wb(1,"div"),R.Vc(2," Wrong size protection, you can use only: "),R.Wb(3,"strong"),R.Wb(4,"pre",1),R.Vc(5,"'xs' | 'sm' | 'md' | 'lg' | 'cozy' | 'compact' | 'condensed'"),R.Vb(),R.Vb(),R.Vb(),R.Wb(6,"fd-rating-indicator",2,3),R.jc("ratingChanged",function(n){return a.onRatingChanged(n)}),R.Vb(),R.Wb(8,"span"),R.Vc(9,"Initial size: "),R.Wb(10,"pre",1),R.Vc(11,"xsssss"),R.Vb(),R.Vc(12," View size: "),R.Wb(13,"pre",1),R.Vc(14,"md"),R.Vb(),R.Vb(),R.Vb(),R.Wb(15,"div",0),R.Wb(16,"fd-rating-indicator",4,5),R.jc("ngModelChange",function(n){return a.modelValue=n})("ngModelChange",function(n){return a.onRatingChanged(n)}),R.Vb(),R.Wb(18,"span"),R.Vc(19),R.Vb(),R.Wb(20,"div"),R.Wb(21,"input",6),R.jc("ngModelChange",function(n){return a.modelValue=n}),R.Vb(),R.Vb(),R.Vb(),R.Wb(22,"div",0),R.Wb(23,"fd-rating-indicator",7,8),R.jc("ratingChanged",function(n){return a.onRatingChanged(n)}),R.Vb(),R.Vc(25," Initial Rate: 0.51"),R.Rb(26,"br"),R.Vc(27),R.Vb(),R.Wb(28,"div",0),R.Rb(29,"fd-rating-indicator",9,10),R.Vc(31," Initial Rate: 2.51"),R.Rb(32,"br"),R.Vc(33),R.Vb(),R.Wb(34,"div",0),R.Rb(35,"fd-rating-indicator",11,12),R.Wb(37,"span"),R.Vc(38),R.Vb(),R.Vb(),R.Wb(39,"div",0),R.Rb(40,"fd-rating-indicator",13,14),R.Wb(42,"span"),R.Vc(43),R.Vb(),R.Vb(),R.Wb(44,"div",0),R.Wb(45,"p"),R.Wb(46,"strong"),R.Vc(47,"Disabled Rating indicator"),R.Vb(),R.Vb(),R.Wb(48,"fd-rating-indicator",15),R.jc("ratingChanged",function(n){return a.onRatingChanged(n)}),R.Vb(),R.Vb()),2&n){const n=R.Hc(17),t=R.Hc(24),e=R.Hc(30),i=R.Hc(36),o=R.Hc(41);R.Db(16),R.vc("ngModel",a.modelValue),R.Db(3),R.Xc("View rate: ",n.viewValue,""),R.Db(2),R.vc("ngModel",a.modelValue),R.Db(6),R.Xc(" View rate: ",t.viewValue,"\n"),R.Db(6),R.Xc(" View rate: ",e.viewValue,"\n"),R.Db(5),R.Xc("Initial Rate: 4.99 View rate: ",i.viewValue,""),R.Db(5),R.Xc("Initial Rate: 1231312312312313.99 (Wrong value) View rate: ",o.viewValue,""),R.Db(5),R.vc("disabled",!0)("allowHalves",!0)}},directives:[E.a,K.q,K.t,K.v,K.c],encapsulation:2}),n})();var U=t("5HkS"),$=t("Hxo2");let J=(()=>{class n{}return n.\u0275fac=function(a){return new(a||n)},n.\u0275cmp=R.Kb({type:n,selectors:[["fd-ri-display-mode-example"]],decls:1,vars:1,consts:[["value","2","dynamicTextIndicator","of",3,"displayMode"]],template:function(n,a){1&n&&R.Rb(0,"fd-rating-indicator",0),2&n&&R.vc("displayMode",!0)},directives:[E.a],encapsulation:2}),n})(),O=(()=>{class n{constructor(){this.config={indicatorCapacity:5,allowHalves:!1,disabled:!1,size:"md"},this.sizes=["xs","sm","md","lg","cozy","compact","condensed"],this.modelValue=2.2}onRatingChanged(n){console.log(n)}}return n.\u0275fac=function(a){return new(a||n)},n.\u0275cmp=R.Kb({type:n,selectors:[["fd-ri-custom-icon-example"]],decls:1,vars:1,consts:[["totalRatings","1","value","3.34","ratedIcon","sap-icon--bo-strategy-management","unratedIcon","sap-icon--notification",3,"allowHalves"]],template:function(n,a){1&n&&R.Rb(0,"fd-rating-indicator",0),2&n&&R.vc("allowHalves",!0)},directives:[E.a],encapsulation:2}),n})();var Z=t("ofXK");function q(n,a){if(1&n&&(R.Wb(0,"div"),R.Wb(1,"div",1),R.Wb(2,"strong"),R.Vc(3),R.Vb(),R.Rb(4,"fd-rating-indicator",2,3),R.Wb(6,"span"),R.Vc(7),R.Vb(),R.Vb(),R.Wb(8,"div",1),R.Wb(9,"strong"),R.Vc(10),R.Vb(),R.Rb(11,"fd-rating-indicator",4,5),R.Wb(13,"span"),R.Vc(14),R.Vb(),R.Vb(),R.Vb()),2&n){const n=a.$implicit,t=R.Hc(5),e=R.Hc(12);R.Db(3),R.Xc("Size = ",n||"default",""),R.Db(1),R.vc("size",n),R.Db(3),R.Xc("Selected Rate: ",t.viewValue,""),R.Db(3),R.Xc("And same size = ",n||"default"," with halves"),R.Db(1),R.vc("size",n)("allowHalves",!0),R.Db(3),R.Xc("Selected Rate: ",e.viewValue,"")}}let L=(()=>{class n{constructor(){this.sizes=["xs","sm","md","lg","cozy","compact","condensed"]}}return n.\u0275fac=function(a){return new(a||n)},n.\u0275cmp=R.Kb({type:n,selectors:[["fd-rating-indicator-sizes"]],decls:1,vars:1,consts:[[4,"ngFor","ngForOf"],[1,"base-row"],["totalRatings","111",3,"size"],["sampleSize",""],["totalRatings","555",3,"size","allowHalves"],["sizeWithHalves",""]],template:function(n,a){1&n&&R.Tc(0,q,15,7,"div",0),2&n&&R.vc("ngForOf",a.sizes)},directives:[Z.n,E.a],encapsulation:2}),n})(),Q=(()=>{class n{constructor(){this.testRatingData1={1:50,4:15,5:12},this.testRatingData2={1:1,2:100,5:1,7:10},this.testRatingData3={3:1,5:3},this.testRatingData4=[1,2,3,4,5]}}return n.\u0275fac=function(a){return new(a||n)},n.\u0275cmp=R.Kb({type:n,selectors:[["fd-rating-indicator-ratings"]],decls:40,vars:32,consts:[[1,"base-row"],["size","xs",3,"displayAllRatings","ratings"],["rate1",""],["indicatorCapacity","7","size","compact",3,"displayAllRatings","ratings"],["rate2",""],["size","lg",3,"displayAllRatings","ratings"],["rate3",""],["rate4",""]],template:function(n,a){if(1&n&&(R.Wb(0,"div",0),R.Wb(1,"strong"),R.Vc(2,"Popover with ratings data and size=xs(extra small)"),R.Vb(),R.Wb(3,"pre"),R.Vc(4),R.oc(5,"json"),R.Vb(),R.Rb(6,"fd-rating-indicator",1,2),R.Wb(8,"p"),R.Vc(9),R.Vb(),R.Vb(),R.Wb(10,"div",0),R.Wb(11,"strong"),R.Vc(12,"Popover with ratings data and size=compact"),R.Vb(),R.Wb(13,"pre"),R.Vc(14),R.oc(15,"json"),R.Vb(),R.Rb(16,"fd-rating-indicator",3,4),R.Wb(18,"p"),R.Vc(19),R.Vb(),R.Vb(),R.Wb(20,"div",0),R.Wb(21,"strong"),R.Vc(22,"Popover with ratings data and size=lg(large)"),R.Vb(),R.Wb(23,"pre"),R.Vc(24),R.oc(25,"json"),R.Vb(),R.Rb(26,"fd-rating-indicator",5,6),R.Wb(28,"p"),R.Vc(29),R.Vb(),R.Vb(),R.Wb(30,"div",0),R.Wb(31,"strong"),R.Vc(32,"Wrong ratings data"),R.Vb(),R.Wb(33,"pre"),R.Vc(34),R.oc(35,"json"),R.Vb(),R.Rb(36,"fd-rating-indicator",5,7),R.Wb(38,"span"),R.Vc(39),R.Vb(),R.Vb()),2&n){const n=R.Hc(7),t=R.Hc(17),e=R.Hc(27),i=R.Hc(37);R.Db(4),R.Xc("Rating Data: ",R.pc(5,24,a.testRatingData1),""),R.Db(2),R.vc("displayAllRatings",!0)("ratings",a.testRatingData1),R.Db(3),R.Zc(" Rate average: ",n.ratingAverage.toFixed(2)," Total ratings: ",n.totalRatings," Select rate: ",n.viewValue," "),R.Db(5),R.Xc("Rating Data: ",R.pc(15,26,a.testRatingData2),""),R.Db(2),R.vc("displayAllRatings",!0)("ratings",a.testRatingData2),R.Db(3),R.Zc(" Rate average: ",t.ratingAverage.toFixed(2)," Total ratings: ",t.totalRatings," Select rate: ",t.viewValue," "),R.Db(5),R.Xc("Rating Data: ",R.pc(25,28,a.testRatingData3),""),R.Db(2),R.vc("displayAllRatings",!0)("ratings",a.testRatingData3),R.Db(3),R.Zc(" Rate average: ",e.ratingAverage.toFixed(2)," Total ratings: ",e.totalRatings," Select rate: ",e.viewValue," "),R.Db(5),R.Xc("Rating Data: ",R.pc(35,30,a.testRatingData4),""),R.Db(2),R.vc("displayAllRatings",!0)("ratings",a.testRatingData4),R.Db(3),R.Zc(" Rate average: ",i.ratingAverage.toFixed(2)," Total ratings: ",i.totalRatings," Select rate: ",i.viewValue," ")}},directives:[E.a],pipes:[Z.h],encapsulation:2}),n})();function B(n,a){if(1&n&&(R.Wb(0,"div"),R.Vc(1),R.Vb()),2&n){R.nc();const n=R.Hc(1);R.Db(1),R.Xc(" Value: ",n.viewValue||0,"\n")}}function G(n,a){if(1&n&&(R.Wb(0,"option",7),R.Vc(1),R.Vb()),2&n){const n=a.$implicit;R.vc("value",n),R.Db(1),R.Wc(n)}}let Y=(()=>{class n{constructor(){this.config={indicatorCapacity:5,allowHalves:!1,disabled:!1,displayMode:!1,size:"md"},this.sizes=["xs","sm","md","lg","cozy","compact","condensed"],this.modelValue=2.2}onRatingChanged(n){console.log(n)}}return n.\u0275fac=function(a){return new(a||n)},n.\u0275cmp=R.Kb({type:n,selectors:[["fd-ri-dynamic-example"]],decls:23,vars:16,consts:[["totalRatings","1",3,"indicatorCapacity","allowHalves","value","size","disabled","displayMode","ratingChanged"],["dynamicChangeRate",""],[4,"ngIf"],["type","number","min","1","max","7",3,"ngModel","ngModelChange"],["type","checkbox",3,"ngModel","ngModelChange"],[3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(n,a){if(1&n&&(R.Wb(0,"fd-rating-indicator",0,1),R.jc("ratingChanged",function(n){return a.onRatingChanged(n)}),R.Vb(),R.Tc(2,B,2,1,"div",2),R.Wb(3,"div"),R.Vc(4," IndicatorCapacity: "),R.Wb(5,"input",3),R.jc("ngModelChange",function(n){return a.config.indicatorCapacity=n}),R.Vb(),R.Vb(),R.Wb(6,"div"),R.Vc(7," AllowHalves: "),R.Wb(8,"input",4),R.jc("ngModelChange",function(n){return a.config.allowHalves=n}),R.Vb(),R.Vb(),R.Wb(9,"div"),R.Vc(10," Disabled: "),R.Wb(11,"input",4),R.jc("ngModelChange",function(n){return a.config.disabled=n}),R.Vb(),R.Vb(),R.Wb(12,"div"),R.Vc(13," Display Mode: "),R.Wb(14,"input",4),R.jc("ngModelChange",function(n){return a.config.displayMode=n}),R.Vb(),R.Vb(),R.Wb(15,"div"),R.Vc(16," Sizes: "),R.Wb(17,"select",5),R.jc("ngModelChange",function(n){return a.config.size=n}),R.Tc(18,G,2,2,"option",6),R.Vb(),R.Vb(),R.Wb(19,"div"),R.Wb(20,"pre"),R.Vc(21),R.oc(22,"json"),R.Vb(),R.Vb()),2&n){const n=R.Hc(1);R.vc("indicatorCapacity",a.config.indicatorCapacity)("allowHalves",a.config.allowHalves)("value",a.modelValue)("size",a.config.size)("disabled",a.config.disabled)("displayMode",a.config.displayMode),R.Db(2),R.vc("ngIf",n),R.Db(3),R.vc("ngModel",a.config.indicatorCapacity),R.Db(3),R.vc("ngModel",a.config.allowHalves),R.Db(3),R.vc("ngModel",a.config.disabled),R.Db(3),R.vc("ngModel",a.config.displayMode),R.Db(3),R.vc("ngModel",a.config.size),R.Db(1),R.vc("ngForOf",a.sizes),R.Db(3),R.Wc(R.pc(22,14,a.config))}},directives:[E.a,Z.o,K.v,K.c,K.q,K.t,K.a,K.z,Z.n,K.u,K.C],pipes:[Z.h],encapsulation:2}),n})(),_=(()=>{class n{constructor(){this.ratingIndicatorSizes=[{language:"html",code:e,fileName:"rating-indicator-sizes",typescriptFileCode:i,component:"RatingIndicatorSizesExampleComponent"}],this.ratingIndicatorRatings=[{language:"html",fileName:"rating-indicator-ratings",code:o},{language:"typescript",component:"RatingIndicatorRatingsExampleComponent",fileName:"rating-indicator-ratings",code:r}],this.ratingIndicatorFewTest=[{language:"html",code:s,fileName:"rating-indicator-example",typescriptFileCode:c,component:"RatingIndicatorExampleComponent"}],this.ratingIndicatorDynamicFields=[{language:"html",code:d,fileName:"ri-dynamic-example",typescriptFileCode:l,component:"RatingIndicatorDynamicExampleComponent"}],this.ratingIndicatorCustomIcon=[{language:"html",code:g,fileName:"ri-custom-icon-example",typescriptFileCode:p,component:"RatingIndicatorCustomIconExampleComponent"}],this.ratingIndicatorDisplayMode=[{language:"html",code:b,fileName:"ri-display-mode-example",typescriptFileCode:m,component:"RatingIndicatorDisplayModeComponent"}]}}return n.\u0275fac=function(a){return new(a||n)},n.\u0275cmp=R.Kb({type:n,selectors:[["app-rating-indicator"]],decls:35,vars:6,consts:[["id","basic","componentName","rating-indicator"],[3,"exampleFiles"],["id","display-mode","componentName","rating-indicator"],["id","custom","componentName","rating-indicator"],["id","sizes","componentName","rating-indicator"],["id","predefined","componentName","rating-indicator"],["id","dynamic","componentName","rating-indicator"]],template:function(n,a){1&n&&(R.Wb(0,"fd-docs-section-title",0),R.Vc(1," Rating indicator examples\n"),R.Vb(),R.Wb(2,"component-example"),R.Rb(3,"fd-rating-indicator-example"),R.Vb(),R.Rb(4,"code-example",1),R.Rb(5,"separator"),R.Wb(6,"fd-docs-section-title",2),R.Vc(7," Rating indicator with displayMode\n"),R.Vb(),R.Wb(8,"component-example"),R.Rb(9,"fd-ri-display-mode-example"),R.Vb(),R.Rb(10,"code-example",1),R.Rb(11,"separator"),R.Wb(12,"fd-docs-section-title",3),R.Vc(13," Custom icons\n"),R.Vb(),R.Wb(14,"component-example"),R.Rb(15,"fd-ri-custom-icon-example"),R.Vb(),R.Rb(16,"code-example",1),R.Rb(17,"separator"),R.Wb(18,"fd-docs-section-title",4),R.Vc(19," Rating indicator with all sizes and allowHalves\n"),R.Vb(),R.Wb(20,"component-example"),R.Rb(21,"fd-rating-indicator-sizes"),R.Vb(),R.Rb(22,"code-example",1),R.Rb(23,"separator"),R.Wb(24,"fd-docs-section-title",5),R.Vc(25," Rating indicator with predefined ratings object\n"),R.Vb(),R.Wb(26,"component-example"),R.Rb(27,"fd-rating-indicator-ratings"),R.Vb(),R.Rb(28,"code-example",1),R.Rb(29,"separator"),R.Wb(30,"fd-docs-section-title",6),R.Vc(31," Test dynamic changes\n"),R.Vb(),R.Wb(32,"component-example"),R.Rb(33,"fd-ri-dynamic-example"),R.Vb(),R.Rb(34,"code-example",1)),2&n&&(R.Db(4),R.vc("exampleFiles",a.ratingIndicatorFewTest),R.Db(6),R.vc("exampleFiles",a.ratingIndicatorDisplayMode),R.Db(6),R.vc("exampleFiles",a.ratingIndicatorCustomIcon),R.Db(6),R.vc("exampleFiles",a.ratingIndicatorSizes),R.Db(6),R.vc("exampleFiles",a.ratingIndicatorRatings),R.Db(6),R.vc("exampleFiles",a.ratingIndicatorDynamicFields))},directives:[N.a,k.a,P,U.a,$.a,J,O,L,Q,Y],encapsulation:2}),n})();var nn=t("/W8k");const an=[{path:"",component:z,children:[{path:"",component:_},{path:"api",component:v.a,data:{content:V.a.ratingIndicator}}]}];let tn=(()=>{class n{}return n.\u0275fac=function(a){return new(a||n)},n.\u0275mod=R.Ob({type:n}),n.\u0275inj=R.Nb({imports:[[u.g.forChild(an),f.a,nn.a],u.g]}),n})()}}]);