(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{"935I":function(t,e,a){"use strict";a.r(e),a.d(e,"ObjectStatusDocsModule",function(){return et});var s={};a.r(s),a.d(s,"default",function(){return f});var n={};a.r(n),a.d(n,"default",function(){return m});var l={};a.r(l),a.d(l,"default",function(){return j});var i={};a.r(i),a.d(i,"default",function(){return O});var r={};a.r(r),a.d(r,"default",function(){return I});var c={};a.r(c),a.d(c,"default",function(){return x});var b={};a.r(b),a.d(b,"default",function(){return h});var o={};a.r(o),a.d(o,"default",function(){return R});var u={};a.r(u),a.d(u,"default",function(){return y});var d={};a.r(d),a.d(d,"default",function(){return D});var v=a("tyNb"),p=a("jzzn"),g=a("PzQJ"),f="import { Component } from '@angular/core';\n\n@Component({\n    selector: 'fd-object-status-default-example',\n    templateUrl: './object-status-default-example.component.html',\n    styleUrls: ['./object-status-examples.component.scss']\n})\nexport class ObjectStatusDefaultExampleComponent {}\n",m='<span fd-object-status glyphAriaLabel="Check for review" title="Default"></span>\n<span fd-object-status status="negative" glyph="message-error" glyphAriaLabel="Negative" title="Negative"></span>\n<span fd-object-status status="critical" glyph="message-warning" glyphAriaLabel="Critical" title="Critical"></span>\n<span fd-object-status status="positive" glyph="message-success" glyphAriaLabel="Positive" title="Positive"></span>\n<span fd-object-status status="informative" glyph="message-information" glyphAriaLabel="Show More" title="Informative"></span>\n',j='<span fd-object-status status="negative" label="Negative" title="Negative" aria-label="Object status Negative"></span>\n<span fd-object-status status="critical" label="Critical" title="Critical" aria-label="Object status Critical"></span>\n<span fd-object-status status="positive" label="Positive" title="Positive" aria-label="Object status Positive"></span>\n<span fd-object-status status="informative" label="Informative" title="Informative" aria-label="Object status Informative"></span>\n<span fd-object-status label="Default" title="Default" aria-label="Object status Default"></span>\n',O='<ng-container *ngFor="let item of [1, 2, 3, 4, 5, 6, 7, 8]">\n    <span fd-object-status [indicationColor]="item" label="Indication Color" aria-label="Object status Indication Color"></span>\n</ng-container>\n',I='<span fd-object-status status="negative" glyph="message-error"  label="Negative" aria-label="Object status Negative"></span>\n<span fd-object-status status="critical" glyph="message-warning"  label="Critical" aria-label="Object status Critical"></span>\n<span fd-object-status status="positive" glyph="message-success"  label="Positive" aria-label="Object status Positive"></span>\n<span fd-object-status status="informative" glyph="message-information"  label="Informative" aria-label="Object status Informative"></span>\n<span fd-object-status label="Default" aria-label="Object status Default"></span>\n',x='<a fd-object-status status="negative" glyph="message-error" [clickable]="true" label="Negative" aria-label="Object Status Negative"></a>\n<a fd-object-status status="critical" glyph="message-warning" [clickable]="true" label="Critical" aria-label="Object Status Critical"></a>\n<a fd-object-status status="positive" glyph="message-success" [clickable]="true" label="Positive" aria-label="Object Status Positive"></a>\n<a fd-object-status status="informative" glyph="message-information" [clickable]="true" label="Informative" aria-label="Object Status Informative"></a>\n<a fd-object-status [clickable]="true" label="Default" aria-label="Object Status Default"></a>\n<br />\n<br />\n<ng-container *ngFor="let item of [1, 2, 3, 4, 5, 6, 7, 8]">\n    <a fd-object-status [indicationColor]="item" [clickable]="true" label="Indication Color" aria-label="Object Status Indication Color"></a>\n</ng-container>\n',h='<span\n    fd-object-status\n    status="negative"\n    glyph="message-error"\n    [inverted]="true"\n    title="Negative"\n    aria-label="Object status Negative Inverted"\n></span>\n<span\n    fd-object-status\n    status="critical"\n    glyph="message-warning"\n    [inverted]="true"\n    title="Critical"\n    aria-label="Object status Critical Inverted"\n></span>\n<span\n    fd-object-status\n    status="positive"\n    glyph="message-success"\n    [inverted]="true"\n    title="Positive"\n    aria-label="Object status Positive Inverted"\n></span>\n<span\n    fd-object-status\n    status="informative"\n    glyph="message-information"\n    [inverted]="true"\n    title="Informative"\n    aria-label="Object status Informative Inverted"\n></span>\n\n<br /><br />\n\n<span\n    fd-object-status\n    status="negative"\n    [inverted]="true"\n    label="Negative"\n    title="Negative"\n    aria-label="Object status Negative Inverted"\n></span>\n<span\n    fd-object-status\n    status="critical"\n    [inverted]="true"\n    label="Critical"\n    title="Critical"\n    aria-label="Object status Critical Inverted"\n></span>\n<span\n    fd-object-status\n    status="positive"\n    [inverted]="true"\n    label="Positive"\n    title="Positive"\n    aria-label="Object status Positive Inverted"\n></span>\n<span\n    fd-object-status\n    status="informative"\n    [inverted]="true"\n    label="Informative"\n    title="Informative"\n    aria-label="Object status Informative Inverted"\n></span>\n<span\n    fd-object-status\n    [inverted]="true"\n    label="Default"\n    title="Default"\n    aria-label="Object status Default Inverted"\n></span>\n\n<br /><br />\n\n<span\n    fd-object-status\n    status="negative"\n    [inverted]="true"\n    label="5"\n    title="5"\n    aria-label="Object status Negative Numeric Inverted"\n></span>\n<span\n    fd-object-status\n    status="critical"\n    [inverted]="true"\n    label="20"\n    title="20"\n    aria-label="Object status Critical Numeric Inverted"\n></span>\n<span\n    fd-object-status\n    status="positive"\n    [inverted]="true"\n    label="2.99"\n    title="2.99"\n    aria-label="Object status Positive Numeric Inverted"\n></span>\n<span\n    fd-object-status\n    status="informative"\n    [inverted]="true"\n    label="10"\n    title="10"\n    aria-label="Object status Informative Numeric Inverted"\n></span>\n<span\n    fd-object-status\n    [inverted]="true"\n    label="99+"\n    title="99+"\n    aria-label="Object status Default Numeric Inverted"\n></span>\n\n<br /><br />\n\n<span\n    fd-object-status\n    status="negative"\n    glyph="message-error"\n    [inverted]="true"\n    label="Negative"\n    aria-label="Object status Negative Icon and Text Inverted"\n></span>\n<span\n    fd-object-status\n    status="critical"\n    glyph="message-warning"\n    [inverted]="true"\n    label="Critical"\n    aria-label="Object status Critical Icon and Text Inverted"\n></span>\n<span\n    fd-object-status\n    status="positive"\n    glyph="message-success"\n    [inverted]="true"\n    label="Positive"\n    aria-label="Object status Positive Icon and Text Inverted"\n></span>\n<span\n    fd-object-status\n    status="informative"\n    glyph="message-information"\n    [inverted]="true"\n    label="Informative"\n    aria-label="Object status Informative Icon and Text Inverted"\n></span>\n<span\n    fd-object-status\n    [inverted]="true"\n    label="Default"\n    aria-label="Object status Default Icon and Text Inverted"\n></span>\n\n<br /><br />\n\n<a\n    fd-object-status\n    status="negative"\n    glyph="message-error"\n    [clickable]="true"\n    [inverted]="true"\n    label="Negative"\n    aria-label="Object status Negative Icon and Text Clickable Inverted"\n></a>\n<a\n    fd-object-status\n    status="critical"\n    glyph="message-warning"\n    [clickable]="true"\n    [inverted]="true"\n    label="Critical"\n    aria-label="Object status Critical Icon and Text Clickable Inverted"\n></a>\n<a\n    fd-object-status\n    status="positive"\n    glyph="message-success"\n    [clickable]="true"\n    [inverted]="true"\n    label="Positive"\n    aria-label="Object status Positive Icon and Text Clickable Inverted"\n></a>\n<a\n    fd-object-status\n    status="informative"\n    glyph="message-information"\n    [clickable]="true"\n    [inverted]="true"\n    label="Informative"\n    aria-label="Object status Informative Icon and Text Clickable Inverted"\n></a>\n<a\n    fd-object-status\n    [clickable]="true"\n    [inverted]="true"\n    label="Default"\n    aria-label="Object status Default Icon and Text Clickable Inverted"\n></a>\n',R='<ng-container *ngFor="let item of [1, 2, 3, 4, 5, 6, 7, 8]">\n    <a\n        fd-object-status\n        [indicationColor]="item"\n        [clickable]="true"\n        [inverted]="true"\n        label="Indication Color"\n        aria-label="Object status Inverted with Indication Color"\n    ></a>\n</ng-container>\n',y='<span\n    fd-object-status\n    status="negative"\n    glyph="message-error"\n    [inverted]="true"\n    [large]="true"\n    title="Negative"\n    aria-label="Object Status Negative Inverted and large"\n></span>\n<span\n    fd-object-status\n    status="critical"\n    glyph="message-warning"\n    [inverted]="true"\n    [large]="true"\n    title="Critical"\n    aria-label="Object Status Critical Inverted and large"\n></span>\n<span\n    fd-object-status\n    status="positive"\n    glyph="message-success"\n    [inverted]="true"\n    [large]="true"\n    title="Positive"\n    aria-label="Object Status Positive Inverted and large"\n></span>\n<span\n    fd-object-status\n    status="informative"\n    glyph="message-information"\n    [inverted]="true"\n    [large]="true"\n    title="Informative"\n    aria-label="Object Status Informative Inverted and large"\n></span>\n\n<br /><br />\n\n<span\n    fd-object-status\n    status="negative"\n    [large]="true"\n    label="Negative"\n    title="Negative"\n    aria-label="Object Status Negative large"\n></span>\n<span\n    fd-object-status\n    status="critical"\n    [large]="true"\n    label="Critical"\n    title="Critical"\n    aria-label="Object Status Critical large"\n></span>\n<span\n    fd-object-status\n    status="positive"\n    [large]="true"\n    label="Positive"\n    title="Positive"\n    aria-label="Object Status Positive large"\n></span>\n<span\n    fd-object-status\n    status="informative"\n    [large]="true"\n    label="Informative"\n    title="Informative"\n    aria-label="Object Status Informative large"\n></span>\n<span fd-object-status [large]="true" label="Default" title="Default" aria-label="Object Status Default large"></span>\n\n<br /><br />\n\n<span\n    fd-object-status\n    status="negative"\n    [large]="true"\n    label="5"\n    title="5"\n    aria-label="Object Status Negative Numberic and large"\n></span>\n<span\n    fd-object-status\n    status="critical"\n    [large]="true"\n    label="20"\n    title="20"\n    aria-label="Object Status Critical Numberic and large"\n></span>\n<span\n    fd-object-status\n    status="positive"\n    [large]="true"\n    label="2.99"\n    title="2.99"\n    aria-label="Object Status Positive Numberic and large"\n></span>\n<span\n    fd-object-status\n    status="informative"\n    [large]="true"\n    label="10"\n    title="10"\n    aria-label="Object Status Informative Numberic and large"\n></span>\n<span\n    fd-object-status\n    [large]="true"\n    label="99+"\n    title="99+"\n    aria-label="Object Status Default Numberic and large"\n></span>\n\n<br /><br />\n\n<span\n    fd-object-status\n    status="negative"\n    glyph="message-error"\n    [large]="true"\n    label="Negative"\n    aria-label="Object Status Informative icon and large text"\n></span>\n<span\n    fd-object-status\n    status="critical"\n    glyph="message-warning"\n    [large]="true"\n    label="Critical"\n    aria-label="Object Status Critical icon and large text"\n></span>\n<span\n    fd-object-status\n    status="positive"\n    glyph="message-success"\n    [large]="true"\n    label="Positive"\n    aria-label="Object Status Positive icon and large text"\n></span>\n<span\n    fd-object-status\n    status="informative"\n    glyph="message-information"\n    [large]="true"\n    label="Informative"\n    aria-label="Object Status Informative icon and large text"\n></span>\n<span\n    fd-object-status\n    [large]="true"\n    label="Default"\n    aria-label="Object Status Default icon and large text"\n></span>\n\n<br /><br />\n\n<a\n    fd-object-status\n    status="negative"\n    glyph="message-error"\n    [clickable]="true"\n    [large]="true"\n    [inverted]="true"\n    label="Negative"\n    aria-label="Object Status Negative icon and large text Clickable"\n></a>\n<a\n    fd-object-status\n    status="critical"\n    glyph="message-warning"\n    [clickable]="true"\n    [large]="true"\n    [inverted]="true"\n    label="Critical"\n    aria-label="Object Status Critical icon and large text Clickable"\n></a>\n<a\n    fd-object-status\n    status="positive"\n    glyph="message-success"\n    [clickable]="true"\n    [large]="true"\n    [inverted]="true"\n    label="Positive"\n    aria-label="Object Status Positive icon and large text Clickable"\n></a>\n<a\n    fd-object-status\n    status="informative"\n    glyph="message-information"\n    [clickable]="true"\n    [large]="true"\n    [inverted]="true"\n    label="Informative"\n    aria-label="Object Status Informative icon and large text Clickable"\n></a>\n<a\n    fd-object-status\n    [clickable]="true"\n    [large]="true"\n    [inverted]="true"\n    label="Default"\n    aria-label="Object Status Default icon and large text Clickable"\n></a>\n',D=".fd-object-status {\n    margin-right: 20px;\n}\n",C=a("fXoL"),S=a("ddaM"),N=a("X1JU"),k=a("n+Xr");let V=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=C.Kb({type:t,selectors:[["fd-object-status-default-example"]],decls:5,vars:0,consts:[["fd-object-status","","glyphAriaLabel","Check for review","title","Default"],["fd-object-status","","status","negative","glyph","message-error","glyphAriaLabel","Negative","title","Negative"],["fd-object-status","","status","critical","glyph","message-warning","glyphAriaLabel","Critical","title","Critical"],["fd-object-status","","status","positive","glyph","message-success","glyphAriaLabel","Positive","title","Positive"],["fd-object-status","","status","informative","glyph","message-information","glyphAriaLabel","Show More","title","Informative"]],template:function(t,e){1&t&&(C.Rb(0,"span",0),C.Rb(1,"span",1),C.Rb(2,"span",2),C.Rb(3,"span",3),C.Rb(4,"span",4))},directives:[k.a],styles:[".fd-object-status[_ngcontent-%COMP%]{margin-right:20px}"]}),t})();var P=a("5HkS"),w=a("Hxo2"),T=a("ofXK");function W(t,e){if(1&t&&(C.Ub(0),C.Rb(1,"span",1),C.Tb()),2&t){const t=e.$implicit;C.Db(1),C.vc("indicationColor",t)}}const F=function(){return[1,2,3,4,5,6,7,8]},E=".fd-object-status[_ngcontent-%COMP%]{margin-right:20px}";function L(t,e){if(1&t&&(C.Ub(0),C.Rb(1,"a",6),C.Tb()),2&t){const t=e.$implicit;C.Db(1),C.vc("indicationColor",t)("clickable",!0)}}function A(t,e){if(1&t&&(C.Ub(0),C.Rb(1,"a",1),C.Tb()),2&t){const t=e.$implicit;C.Db(1),C.vc("indicationColor",t)("clickable",!0)("inverted",!0)}}let K=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=C.Kb({type:t,selectors:[["fd-object-status-text-example"]],decls:5,vars:0,consts:[["fd-object-status","","status","negative","label","Negative","title","Negative","aria-label","Object status Negative"],["fd-object-status","","status","critical","label","Critical","title","Critical","aria-label","Object status Critical"],["fd-object-status","","status","positive","label","Positive","title","Positive","aria-label","Object status Positive"],["fd-object-status","","status","informative","label","Informative","title","Informative","aria-label","Object status Informative"],["fd-object-status","","label","Default","title","Default","aria-label","Object status Default"]],template:function(t,e){1&t&&(C.Rb(0,"span",0),C.Rb(1,"span",1),C.Rb(2,"span",2),C.Rb(3,"span",3),C.Rb(4,"span",4))},directives:[k.a],styles:[E]}),t})(),M=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=C.Kb({type:t,selectors:[["fd-object-status-generic-text-example"]],decls:1,vars:2,consts:[[4,"ngFor","ngForOf"],["fd-object-status","","label","Indication Color","aria-label","Object status Indication Color",3,"indicationColor"]],template:function(t,e){1&t&&C.Tc(0,W,2,1,"ng-container",0),2&t&&C.vc("ngForOf",C.zc(1,F))},directives:[T.n,k.a],styles:[E]}),t})(),z=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=C.Kb({type:t,selectors:[["fd-object-status-numeric-icon-example"]],decls:5,vars:0,consts:[["fd-object-status","","status","negative","glyph","message-error","label","Negative","aria-label","Object status Negative"],["fd-object-status","","status","critical","glyph","message-warning","label","Critical","aria-label","Object status Critical"],["fd-object-status","","status","positive","glyph","message-success","label","Positive","aria-label","Object status Positive"],["fd-object-status","","status","informative","glyph","message-information","label","Informative","aria-label","Object status Informative"],["fd-object-status","","label","Default","aria-label","Object status Default"]],template:function(t,e){1&t&&(C.Rb(0,"span",0),C.Rb(1,"span",1),C.Rb(2,"span",2),C.Rb(3,"span",3),C.Rb(4,"span",4))},directives:[k.a],styles:[E]}),t})(),U=(()=>{class t{showAlert(){alert("you clicked the clickable ObjectStatus")}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=C.Kb({type:t,selectors:[["fd-object-status-clickable-and-icon-example"]],decls:8,vars:7,consts:[["fd-object-status","","status","negative","glyph","message-error","label","Negative","aria-label","Object Status Negative",3,"clickable"],["fd-object-status","","status","critical","glyph","message-warning","label","Critical","aria-label","Object Status Critical",3,"clickable"],["fd-object-status","","status","positive","glyph","message-success","label","Positive","aria-label","Object Status Positive",3,"clickable"],["fd-object-status","","status","informative","glyph","message-information","label","Informative","aria-label","Object Status Informative",3,"clickable"],["fd-object-status","","label","Default","aria-label","Object Status Default",3,"clickable"],[4,"ngFor","ngForOf"],["fd-object-status","","label","Indication Color","aria-label","Object Status Indication Color",3,"indicationColor","clickable"]],template:function(t,e){1&t&&(C.Rb(0,"a",0),C.Rb(1,"a",1),C.Rb(2,"a",2),C.Rb(3,"a",3),C.Rb(4,"a",4),C.Rb(5,"br"),C.Rb(6,"br"),C.Tc(7,L,2,2,"ng-container",5)),2&t&&(C.vc("clickable",!0),C.Db(1),C.vc("clickable",!0),C.Db(1),C.vc("clickable",!0),C.Db(1),C.vc("clickable",!0),C.Db(1),C.vc("clickable",!0),C.Db(3),C.vc("ngForOf",C.zc(6,F)))},directives:[k.a,T.n],styles:[E]}),t})(),G=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=C.Kb({type:t,selectors:[["fd-object-status-inverted-example"]],decls:32,vars:29,consts:[["fd-object-status","","status","negative","glyph","message-error","title","Negative","aria-label","Object status Negative Inverted",3,"inverted"],["fd-object-status","","status","critical","glyph","message-warning","title","Critical","aria-label","Object status Critical Inverted",3,"inverted"],["fd-object-status","","status","positive","glyph","message-success","title","Positive","aria-label","Object status Positive Inverted",3,"inverted"],["fd-object-status","","status","informative","glyph","message-information","title","Informative","aria-label","Object status Informative Inverted",3,"inverted"],["fd-object-status","","status","negative","label","Negative","title","Negative","aria-label","Object status Negative Inverted",3,"inverted"],["fd-object-status","","status","critical","label","Critical","title","Critical","aria-label","Object status Critical Inverted",3,"inverted"],["fd-object-status","","status","positive","label","Positive","title","Positive","aria-label","Object status Positive Inverted",3,"inverted"],["fd-object-status","","status","informative","label","Informative","title","Informative","aria-label","Object status Informative Inverted",3,"inverted"],["fd-object-status","","label","Default","title","Default","aria-label","Object status Default Inverted",3,"inverted"],["fd-object-status","","status","negative","label","5","title","5","aria-label","Object status Negative Numeric Inverted",3,"inverted"],["fd-object-status","","status","critical","label","20","title","20","aria-label","Object status Critical Numeric Inverted",3,"inverted"],["fd-object-status","","status","positive","label","2.99","title","2.99","aria-label","Object status Positive Numeric Inverted",3,"inverted"],["fd-object-status","","status","informative","label","10","title","10","aria-label","Object status Informative Numeric Inverted",3,"inverted"],["fd-object-status","","label","99+","title","99+","aria-label","Object status Default Numeric Inverted",3,"inverted"],["fd-object-status","","status","negative","glyph","message-error","label","Negative","aria-label","Object status Negative Icon and Text Inverted",3,"inverted"],["fd-object-status","","status","critical","glyph","message-warning","label","Critical","aria-label","Object status Critical Icon and Text Inverted",3,"inverted"],["fd-object-status","","status","positive","glyph","message-success","label","Positive","aria-label","Object status Positive Icon and Text Inverted",3,"inverted"],["fd-object-status","","status","informative","glyph","message-information","label","Informative","aria-label","Object status Informative Icon and Text Inverted",3,"inverted"],["fd-object-status","","label","Default","aria-label","Object status Default Icon and Text Inverted",3,"inverted"],["fd-object-status","","status","negative","glyph","message-error","label","Negative","aria-label","Object status Negative Icon and Text Clickable Inverted",3,"clickable","inverted"],["fd-object-status","","status","critical","glyph","message-warning","label","Critical","aria-label","Object status Critical Icon and Text Clickable Inverted",3,"clickable","inverted"],["fd-object-status","","status","positive","glyph","message-success","label","Positive","aria-label","Object status Positive Icon and Text Clickable Inverted",3,"clickable","inverted"],["fd-object-status","","status","informative","glyph","message-information","label","Informative","aria-label","Object status Informative Icon and Text Clickable Inverted",3,"clickable","inverted"],["fd-object-status","","label","Default","aria-label","Object status Default Icon and Text Clickable Inverted",3,"clickable","inverted"]],template:function(t,e){1&t&&(C.Rb(0,"span",0),C.Rb(1,"span",1),C.Rb(2,"span",2),C.Rb(3,"span",3),C.Rb(4,"br"),C.Rb(5,"br"),C.Rb(6,"span",4),C.Rb(7,"span",5),C.Rb(8,"span",6),C.Rb(9,"span",7),C.Rb(10,"span",8),C.Rb(11,"br"),C.Rb(12,"br"),C.Rb(13,"span",9),C.Rb(14,"span",10),C.Rb(15,"span",11),C.Rb(16,"span",12),C.Rb(17,"span",13),C.Rb(18,"br"),C.Rb(19,"br"),C.Rb(20,"span",14),C.Rb(21,"span",15),C.Rb(22,"span",16),C.Rb(23,"span",17),C.Rb(24,"span",18),C.Rb(25,"br"),C.Rb(26,"br"),C.Rb(27,"a",19),C.Rb(28,"a",20),C.Rb(29,"a",21),C.Rb(30,"a",22),C.Rb(31,"a",23)),2&t&&(C.vc("inverted",!0),C.Db(1),C.vc("inverted",!0),C.Db(1),C.vc("inverted",!0),C.Db(1),C.vc("inverted",!0),C.Db(3),C.vc("inverted",!0),C.Db(1),C.vc("inverted",!0),C.Db(1),C.vc("inverted",!0),C.Db(1),C.vc("inverted",!0),C.Db(1),C.vc("inverted",!0),C.Db(3),C.vc("inverted",!0),C.Db(1),C.vc("inverted",!0),C.Db(1),C.vc("inverted",!0),C.Db(1),C.vc("inverted",!0),C.Db(1),C.vc("inverted",!0),C.Db(3),C.vc("inverted",!0),C.Db(1),C.vc("inverted",!0),C.Db(1),C.vc("inverted",!0),C.Db(1),C.vc("inverted",!0),C.Db(1),C.vc("inverted",!0),C.Db(3),C.vc("clickable",!0)("inverted",!0),C.Db(1),C.vc("clickable",!0)("inverted",!0),C.Db(1),C.vc("clickable",!0)("inverted",!0),C.Db(1),C.vc("clickable",!0)("inverted",!0),C.Db(1),C.vc("clickable",!0)("inverted",!0))},directives:[k.a],styles:[E]}),t})(),J=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=C.Kb({type:t,selectors:[["fd-object-status-inverted-generic-text-example"]],decls:1,vars:2,consts:[[4,"ngFor","ngForOf"],["fd-object-status","","label","Indication Color","aria-label","Object status Inverted with Indication Color",3,"indicationColor","clickable","inverted"]],template:function(t,e){1&t&&C.Tc(0,A,2,3,"ng-container",0),2&t&&C.vc("ngForOf",C.zc(1,F))},directives:[T.n,k.a],styles:[E]}),t})(),H=(()=>{class t{showAlert(t){alert("clicked alert large at index:- "+t)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=C.Kb({type:t,selectors:[["fd-object-status-object-status-large-example"]],decls:32,vars:38,consts:[["fd-object-status","","status","negative","glyph","message-error","title","Negative","aria-label","Object Status Negative Inverted and large",3,"inverted","large"],["fd-object-status","","status","critical","glyph","message-warning","title","Critical","aria-label","Object Status Critical Inverted and large",3,"inverted","large"],["fd-object-status","","status","positive","glyph","message-success","title","Positive","aria-label","Object Status Positive Inverted and large",3,"inverted","large"],["fd-object-status","","status","informative","glyph","message-information","title","Informative","aria-label","Object Status Informative Inverted and large",3,"inverted","large"],["fd-object-status","","status","negative","label","Negative","title","Negative","aria-label","Object Status Negative large",3,"large"],["fd-object-status","","status","critical","label","Critical","title","Critical","aria-label","Object Status Critical large",3,"large"],["fd-object-status","","status","positive","label","Positive","title","Positive","aria-label","Object Status Positive large",3,"large"],["fd-object-status","","status","informative","label","Informative","title","Informative","aria-label","Object Status Informative large",3,"large"],["fd-object-status","","label","Default","title","Default","aria-label","Object Status Default large",3,"large"],["fd-object-status","","status","negative","label","5","title","5","aria-label","Object Status Negative Numberic and large",3,"large"],["fd-object-status","","status","critical","label","20","title","20","aria-label","Object Status Critical Numberic and large",3,"large"],["fd-object-status","","status","positive","label","2.99","title","2.99","aria-label","Object Status Positive Numberic and large",3,"large"],["fd-object-status","","status","informative","label","10","title","10","aria-label","Object Status Informative Numberic and large",3,"large"],["fd-object-status","","label","99+","title","99+","aria-label","Object Status Default Numberic and large",3,"large"],["fd-object-status","","status","negative","glyph","message-error","label","Negative","aria-label","Object Status Informative icon and large text",3,"large"],["fd-object-status","","status","critical","glyph","message-warning","label","Critical","aria-label","Object Status Critical icon and large text",3,"large"],["fd-object-status","","status","positive","glyph","message-success","label","Positive","aria-label","Object Status Positive icon and large text",3,"large"],["fd-object-status","","status","informative","glyph","message-information","label","Informative","aria-label","Object Status Informative icon and large text",3,"large"],["fd-object-status","","label","Default","aria-label","Object Status Default icon and large text",3,"large"],["fd-object-status","","status","negative","glyph","message-error","label","Negative","aria-label","Object Status Negative icon and large text Clickable",3,"clickable","large","inverted"],["fd-object-status","","status","critical","glyph","message-warning","label","Critical","aria-label","Object Status Critical icon and large text Clickable",3,"clickable","large","inverted"],["fd-object-status","","status","positive","glyph","message-success","label","Positive","aria-label","Object Status Positive icon and large text Clickable",3,"clickable","large","inverted"],["fd-object-status","","status","informative","glyph","message-information","label","Informative","aria-label","Object Status Informative icon and large text Clickable",3,"clickable","large","inverted"],["fd-object-status","","label","Default","aria-label","Object Status Default icon and large text Clickable",3,"clickable","large","inverted"]],template:function(t,e){1&t&&(C.Rb(0,"span",0),C.Rb(1,"span",1),C.Rb(2,"span",2),C.Rb(3,"span",3),C.Rb(4,"br"),C.Rb(5,"br"),C.Rb(6,"span",4),C.Rb(7,"span",5),C.Rb(8,"span",6),C.Rb(9,"span",7),C.Rb(10,"span",8),C.Rb(11,"br"),C.Rb(12,"br"),C.Rb(13,"span",9),C.Rb(14,"span",10),C.Rb(15,"span",11),C.Rb(16,"span",12),C.Rb(17,"span",13),C.Rb(18,"br"),C.Rb(19,"br"),C.Rb(20,"span",14),C.Rb(21,"span",15),C.Rb(22,"span",16),C.Rb(23,"span",17),C.Rb(24,"span",18),C.Rb(25,"br"),C.Rb(26,"br"),C.Rb(27,"a",19),C.Rb(28,"a",20),C.Rb(29,"a",21),C.Rb(30,"a",22),C.Rb(31,"a",23)),2&t&&(C.vc("inverted",!0)("large",!0),C.Db(1),C.vc("inverted",!0)("large",!0),C.Db(1),C.vc("inverted",!0)("large",!0),C.Db(1),C.vc("inverted",!0)("large",!0),C.Db(3),C.vc("large",!0),C.Db(1),C.vc("large",!0),C.Db(1),C.vc("large",!0),C.Db(1),C.vc("large",!0),C.Db(1),C.vc("large",!0),C.Db(3),C.vc("large",!0),C.Db(1),C.vc("large",!0),C.Db(1),C.vc("large",!0),C.Db(1),C.vc("large",!0),C.Db(1),C.vc("large",!0),C.Db(3),C.vc("large",!0),C.Db(1),C.vc("large",!0),C.Db(1),C.vc("large",!0),C.Db(1),C.vc("large",!0),C.Db(1),C.vc("large",!0),C.Db(3),C.vc("clickable",!0)("large",!0)("inverted",!0),C.Db(1),C.vc("clickable",!0)("large",!0)("inverted",!0),C.Db(1),C.vc("clickable",!0)("large",!0)("inverted",!0),C.Db(1),C.vc("clickable",!0)("large",!0)("inverted",!0),C.Db(1),C.vc("clickable",!0)("large",!0)("inverted",!0))},directives:[k.a],styles:[E]}),t})();var X=a("kt86");let $=(()=>{class t{constructor(){this.defaultObjectStatusHtmlType=[{language:"typescript",code:s,fileName:"object-status-default-example",component:"ObjectStatusDefaultExampleComponent"},{language:"html",code:n,fileName:"object-status-default-example"},{language:"scss",code:d,fileName:"object-status-examples",component:"ObjectStatusDefaultExample",scssFileCode:d}],this.ObjectStatusTextExample=[{language:"html",code:l,fileName:"object-status-text-example"}],this.ObjectStatusTextIconExample=[{language:"html",code:i,fileName:"object-status-generic-text-example"}],this.ObjectStatusNumericIconExample=[{language:"html",code:r,fileName:"object-status-icon-text-example"}],this.ObjectStatusclickableAndIconExample=[{language:"html",code:c,fileName:"object-status-clickable-and-icon-example"}],this.ObjectStatusInvertedExample=[{language:"html",code:b,fileName:"object-status-inverted-example"}],this.ObjectStatusInverterdGenericExample=[{language:"html",code:o,fileName:"object-status-inverted-generic-text-example"}],this.ObjectStatusLargeExample=[{language:"html",code:u,fileName:"object-status-large-example"}]}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=C.Kb({type:t,selectors:[["app-object-status"]],decls:72,vars:8,consts:[["id","default","componentName","object-status"],[3,"exampleFiles"],["id","text","componentName","object-status"],["id","icon-and-text","componentName","object-status"],["id","generic-text","componentName","object-status"],["id","clickable","componentName","object-status"],["id","inverted","componentName","object-status"],["id","inverted-generic","componentName","object-status"],["id","large","componentName","object-status"]],template:function(t,e){1&t&&(C.Wb(0,"fd-docs-section-title",0),C.Vc(1," Object Status Icon Only\n"),C.Vb(),C.Wb(2,"component-example"),C.Rb(3,"fd-object-status-default-example"),C.Vb(),C.Rb(4,"code-example",1),C.Rb(5,"separator"),C.Wb(6,"fd-docs-section-title",2),C.Vc(7," Object Status Text Only\n"),C.Vb(),C.Wb(8,"component-example"),C.Rb(9,"fd-object-status-text-example"),C.Vb(),C.Rb(10,"code-example",1),C.Rb(11,"separator"),C.Wb(12,"fd-docs-section-title",3),C.Vc(13," Object Status with Text and Icon\n"),C.Vb(),C.Rb(14,"description"),C.Wb(15,"component-example"),C.Rb(16,"fd-object-status-numeric-icon-example"),C.Vb(),C.Rb(17,"code-example",1),C.Rb(18,"separator"),C.Wb(19,"fd-docs-section-title",4),C.Vc(20," Object Status with Generic Indication Colors\n"),C.Vb(),C.Rb(21,"description"),C.Wb(22,"component-example"),C.Rb(23,"fd-object-status-generic-text-example"),C.Vb(),C.Rb(24,"code-example",1),C.Rb(25,"separator"),C.Wb(26,"fd-docs-section-title",5),C.Vc(27," Clickable Object Status\n"),C.Vb(),C.Wb(28,"description"),C.Vc(29,"For clickable Object Status set the "),C.Wb(30,"code"),C.Vc(31,"[clickable]"),C.Vb(),C.Vc(32," property to "),C.Wb(33,"code"),C.Vc(34,"true"),C.Vb(),C.Vc(35,"."),C.Vb(),C.Wb(36,"component-example"),C.Rb(37,"fd-object-status-clickable-and-icon-example"),C.Vb(),C.Rb(38,"code-example",1),C.Rb(39,"separator"),C.Wb(40,"fd-docs-section-title",6),C.Vc(41," Inverted Object Status\n"),C.Vb(),C.Wb(42,"description"),C.Vc(43,"Inverted Object Status are achieved by setting the "),C.Wb(44,"code"),C.Vc(45,"[inverted]"),C.Vb(),C.Vc(46," property to "),C.Wb(47,"code"),C.Vc(48,"true"),C.Vb(),C.Vc(49,"."),C.Vb(),C.Wb(50,"component-example"),C.Rb(51,"fd-object-status-inverted-example"),C.Vb(),C.Rb(52,"code-example",1),C.Rb(53,"separator"),C.Wb(54,"fd-docs-section-title",7),C.Vc(55," Inverted Object Status with Generic Indication Colors\n"),C.Vb(),C.Rb(56,"description"),C.Wb(57,"component-example"),C.Rb(58,"fd-object-status-inverted-generic-text-example"),C.Vb(),C.Rb(59,"code-example",1),C.Rb(60,"separator"),C.Wb(61,"fd-docs-section-title",8),C.Vc(62," Object Status Large Design\n"),C.Vb(),C.Wb(63,"description"),C.Vc(64,"For Object Status in large design use "),C.Wb(65,"code"),C.Vc(66,'[large]="true"'),C.Vb(),C.Vc(67,"."),C.Vb(),C.Wb(68,"component-example"),C.Rb(69,"fd-object-status-object-status-large-example"),C.Vb(),C.Rb(70,"code-example",1),C.Rb(71,"separator")),2&t&&(C.Db(4),C.vc("exampleFiles",e.defaultObjectStatusHtmlType),C.Db(6),C.vc("exampleFiles",e.ObjectStatusTextExample),C.Db(7),C.vc("exampleFiles",e.ObjectStatusNumericIconExample),C.Db(7),C.vc("exampleFiles",e.ObjectStatusTextIconExample),C.Db(14),C.vc("exampleFiles",e.ObjectStatusclickableAndIconExample),C.Db(14),C.vc("exampleFiles",e.ObjectStatusInvertedExample),C.Db(7),C.vc("exampleFiles",e.ObjectStatusInverterdGenericExample),C.Db(11),C.vc("exampleFiles",e.ObjectStatusLargeExample))},directives:[S.a,N.a,V,P.a,w.a,K,X.a,z,M,U,G,J,H],encapsulation:2}),t})();var _=a("dor/"),B=a("RJTZ"),Q=a("Kpas");let Z=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=C.Kb({type:t,selectors:[["app-object-status-header"]],decls:22,vars:0,consts:[["module","ObjectStatusModule","subPackage","object-status"]],template:function(t,e){1&t&&(C.Wb(0,"header"),C.Vc(1,"Object Status"),C.Vb(),C.Wb(2,"description"),C.Wb(3,"p"),C.Vc(4," Object Status is replacing the Label Status Indicator and Badges (now Inverted Object Status). It\u2019s used for representing a status. The status can be set to "),C.Wb(5,"code"),C.Vc(6,"positive"),C.Vb(),C.Vc(7,", "),C.Wb(8,"code"),C.Vc(9,"informative"),C.Vb(),C.Vc(10,", "),C.Wb(11,"code"),C.Vc(12,"critical"),C.Vb(),C.Vc(13," and "),C.Wb(14,"code"),C.Vc(15,"negative"),C.Vb(),C.Vc(16,". If you omit this property the default status will be applied. "),C.Vb(),C.Wb(17,"p"),C.Vc(18,"Generic indication colors with values from 1 to 8 can be used for industry specific color coding."),C.Vb(),C.Vb(),C.Rb(19,"import",0),C.Rb(20,"fd-header-tabs"),C.Rb(21,"router-outlet"))},directives:[_.a,X.a,B.a,Q.a,v.h],styles:[""]}),t})();var q=a("t9W5"),Y=a("If0g");const tt=[{path:"",component:Z,children:[{path:"",component:$},{path:"api",component:p.a,data:{content:g.a.objectStatus}}]}];let et=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=C.Ob({type:t}),t.\u0275inj=C.Nb({imports:[[v.g.forChild(tt),q.a,Y.a],v.g]}),t})()}}]);