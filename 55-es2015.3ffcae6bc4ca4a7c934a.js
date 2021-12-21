(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{v5GZ:function(e,t,n){"use strict";n.r(t),n.d(t,"MessageToastDocsModule",function(){return z});var a={};n.r(a),n.d(a,"default",function(){return l});var o={};n.r(o),n.d(o,"default",function(){return p});var s={};n.r(s),n.d(s,"default",function(){return u});var r={};n.r(r),n.d(r,"default",function(){return d});var c=n("tyNb"),m=n("jzzn"),i=n("PzQJ"),l="import { Component } from '@angular/core';\nimport { MessageToastRef } from '@fundamental-ngx/core/message-toast';\n\n@Component({\n    selector: 'fd-message-toast-content-example',\n    template: `<div>\n        Message Toast created from component. It will stay open if the cursor is above it. Has a customized width and\n        will disappear after 7500ms\n    </div>`\n})\nexport class MessageToastContentExampleComponent {\n    constructor(public ref: MessageToastRef) {}\n}\n",p="import { Component } from '@angular/core';\nimport { MessageToastService } from '@fundamental-ngx/core/message-toast';\nimport { MessageToastContentExampleComponent } from './message-toast-content-example.component';\n\n@Component({\n    selector: 'fd-message-toast-example',\n    templateUrl: './message-toast-example.component.html',\n    styleUrls: ['message-toast-example.component.scss']\n})\nexport class MessageToastExampleComponent {\n    constructor(public messageToastService: MessageToastService) {}\n\n    openFromComponent(): void {\n        this.messageToastService.open(MessageToastContentExampleComponent, {\n            mousePersist: true,\n            duration: 5000,\n            maxWidth: '25rem'\n        });\n    }\n\n    openFromString(): void {\n        const content = 'Message Toast created from string. Will disappear after 5000ms';\n        this.messageToastService.open(content, {\n            duration: 5000\n        });\n    }\n\n    openFromTemplate(template): void {\n        const messageToast = this.messageToastService.open(template, {\n            data: {\n                content: 'Message Toast created from template.'\n            }\n        });\n    }\n}\n",u='<button fd-button label="Open from Component" (click)="openFromComponent()"></button>\n<button fd-button label="Open from Template" (click)="openFromTemplate(template)"></button>\n<button fd-button label="Open from String" (click)="openFromString()"></button>\n<button fd-button label="Hide All" fdType="emphasized" (click)="messageToastService.hideAll()"></button>\n\n\x3c!-- Defining a template to open --\x3e\n<ng-template let-messageToast #template>\n    {{ messageToast.data.content }}\n</ng-template>\n',d="button {\n    margin-right: 12px;\n}\n",b=n("fXoL"),g=n("ddaM"),f=n("kt86"),h=n("X1JU"),T=n("3/dr");let v=(()=>{class e{constructor(e){this.ref=e}}return e.\u0275fac=function(t){return new(t||e)(b.Qb(T.b))},e.\u0275cmp=b.Kb({type:e,selectors:[["fd-message-toast-content-example"]],decls:2,vars:0,template:function(e,t){1&e&&(b.Wb(0,"div"),b.Vc(1," Message Toast created from component. It will stay open if the cursor is above it. Has a customized width and will disappear after 7500ms "),b.Vb())},encapsulation:2}),e})();var V=n("rp8N");function x(e,t){1&e&&b.Vc(0),2&e&&b.Xc(" ",t.$implicit.data.content,"\n")}let C=(()=>{class e{constructor(e){this.messageToastService=e}openFromComponent(){this.messageToastService.open(v,{mousePersist:!0,duration:5e3,maxWidth:"25rem"})}openFromString(){this.messageToastService.open("Message Toast created from string. Will disappear after 5000ms",{duration:5e3})}openFromTemplate(e){this.messageToastService.open(e,{data:{content:"Message Toast created from template."}})}}return e.\u0275fac=function(t){return new(t||e)(b.Qb(T.c))},e.\u0275cmp=b.Kb({type:e,selectors:[["fd-message-toast-example"]],decls:6,vars:0,consts:[["fd-button","","label","Open from Component",3,"click"],["fd-button","","label","Open from Template",3,"click"],["fd-button","","label","Open from String",3,"click"],["fd-button","","label","Hide All","fdType","emphasized",3,"click"],["template",""]],template:function(e,t){if(1&e){const e=b.Xb();b.Wb(0,"button",0),b.jc("click",function(){return t.openFromComponent()}),b.Vb(),b.Wb(1,"button",1),b.jc("click",function(){b.Kc(e);const n=b.Hc(5);return t.openFromTemplate(n)}),b.Vb(),b.Wb(2,"button",2),b.jc("click",function(){return t.openFromString()}),b.Vb(),b.Wb(3,"button",3),b.jc("click",function(){return t.messageToastService.hideAll()}),b.Vb(),b.Tc(4,x,1,1,"ng-template",null,4,b.Uc)}},directives:[V.a],styles:["button[_ngcontent-%COMP%]{margin-right:12px}"]}),e})();var W=n("5HkS");let y=(()=>{class e{constructor(){this.messageToastComponentExample=[{language:"html",fileName:"message-toast-example",code:s,scssFileCode:r},{language:"typescript",fileName:"message-toast-example",code:o,component:"MessageToastExampleComponent",entryComponent:!0,name:"Main Component",main:!0},{language:"typescript",code:a,fileName:"message-toast-content-example",component:"MessageToastContentExampleComponent",name:"Content Component",entryComponent:!0}]}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=b.Kb({type:e,selectors:[["app-message-toast"]],decls:7,vars:1,consts:[["id","message-toast","componentName","message-toast"],[3,"exampleFiles"]],template:function(e,t){1&e&&(b.Wb(0,"fd-docs-section-title",0),b.Vc(1," Message Toast\n"),b.Vb(),b.Wb(2,"description"),b.Vc(3," The MessageToastService is available for injection and accepts a component type, a template ref or a string as the alert content.\n"),b.Vb(),b.Wb(4,"component-example"),b.Rb(5,"fd-message-toast-example"),b.Vb(),b.Rb(6,"code-example",1)),2&e&&(b.Db(6),b.vc("exampleFiles",t.messageToastComponentExample))},directives:[g.a,f.a,h.a,C,W.a],encapsulation:2}),e})();var M=n("dor/"),w=n("RJTZ"),S=n("Kpas");let k=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=b.Kb({type:e,selectors:[["fd-message-toast-header"]],decls:33,vars:0,consts:[["module","MessageToastModule","subPackage","message-toast"]],template:function(e,t){1&e&&(b.Wb(0,"header"),b.Vc(1,"Message Toast"),b.Vb(),b.Wb(2,"description"),b.Wb(3,"p"),b.Vc(4," The message toast is a small, non-disruptive popup for success messages that disappears automatically after a few seconds. When message toast is displayed, it is always centered horizontally at the bottom of the screen and fades in and out automatically. "),b.Rb(5,"br"),b.Rb(6,"br"),b.Wb(7,"b"),b.Vc(8,"Note:"),b.Vb(),b.Vc(9," The timing and duration of the message toast is defined by the application, the standard value being 3000 ms. The duration can be above 3000 ms, but it's not recommended to be less than 3000 ms. "),b.Vb(),b.Wb(10,"h2"),b.Vc(11,"Usage"),b.Vb(),b.Wb(12,"b"),b.Vc(13,"Use message toast if:"),b.Vb(),b.Wb(14,"ul"),b.Wb(15,"li"),b.Vc(16,"To display a short success message."),b.Vb(),b.Wb(17,"li"),b.Vc(18,"To avoid interrupting the user while they are performing an action."),b.Vb(),b.Wb(19,"li"),b.Vc(20,"To confirm a successful action."),b.Vb(),b.Vb(),b.Wb(21,"b"),b.Vc(22,"Do not use the message toast if:"),b.Vb(),b.Wb(23,"ul"),b.Wb(24,"li"),b.Vc(25,"You want to display an error or warning message."),b.Vb(),b.Wb(26,"li"),b.Vc(27,"You want to interrupt users while they are performing an action."),b.Vb(),b.Wb(28,"li"),b.Vc(29,"You want to make sure that users read the message before they leave the page."),b.Vb(),b.Vb(),b.Vb(),b.Rb(30,"import",0),b.Rb(31,"fd-header-tabs"),b.Rb(32,"router-outlet"))},directives:[M.a,f.a,w.a,S.a,c.h],encapsulation:2}),e})();var F=n("t9W5");const R=[{path:"",component:k,children:[{path:"",component:y},{path:"api",component:m.a,data:{content:i.a.messageToast}}]}];let z=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=b.Ob({type:e}),e.\u0275inj=b.Nb({providers:[T.c],imports:[[c.g.forChild(R),F.a,T.a],c.g]}),e})()}}]);