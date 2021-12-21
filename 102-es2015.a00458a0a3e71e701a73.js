(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{NPgX:function(t,e,i){"use strict";i.r(e),i.d(e,"PlatformDisplayListItemDocsModule",function(){return O});var a={};i.r(a),i.d(a,"default",function(){return W});var n={};i.r(n),i.d(n,"default",function(){return w});var o={};i.r(o),i.d(o,"default",function(){return L});var s={};i.r(s),i.d(s,"default",function(){return N});var r={};i.r(r),i.d(r,"default",function(){return k});var l=i("5+WD"),d=i("tyNb"),c=i("t33z"),m=i("kR/j"),p=i("Ccq/"),f=i("Uw1m"),g=i("jzzn"),u=i("t9W5"),b=i("IywY"),v=i("fXoL"),y=i("dor/"),h=i("kt86"),I=i("RJTZ"),V=i("Kpas");let x=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=v.Kb({type:t,selectors:[["app-display-list-item-header"]],decls:24,vars:0,consts:[["routerLink","/core/list"],["module","DisplayListItemModule, PlatformListModule","subPackage","list"]],template:function(t,e){1&t&&(v.Wb(0,"header"),v.Vc(1,"Display List Item"),v.Vb(),v.Wb(2,"description"),v.Wb(3,"p"),v.Vc(4," The display list item is the simplest list item. It shows content in the form of labels and text. This component makes use of "),v.Wb(5,"a",0),v.Vc(6,"list-item"),v.Vb(),v.Vc(7," directive present in fundamental-ngx/core and has additional enhancements on top of it. "),v.Vb(),v.Wb(8,"h3"),v.Vc(9,"Platform specific enhancements:"),v.Vb(),v.Wb(10,"ul"),v.Wb(11,"li"),v.Vc(12,"Display-List-Item is implemented as Angular component to hide complexity of dealing with HTML in order to deliver high-order component."),v.Vb(),v.Wb(13,"li"),v.Vc(14,"Alignment of sub elements title, secondary, footer, group header, navigation are abstracted."),v.Vb(),v.Wb(15,"li"),v.Vc(16,"Enhanced support for accessibility which covers access by keyboard, mouse and touch."),v.Vb(),v.Wb(17,"li"),v.Vc(18,"Enhanced compatibility with assistive technology (screen readers)."),v.Vb(),v.Wb(19,"li"),v.Vc(20,"Supports both imperative and declarative way of accepting the items for all the list variants."),v.Vb(),v.Vb(),v.Vb(),v.Rb(21,"import",1),v.Rb(22,"fd-header-tabs"),v.Rb(23,"router-outlet"))},directives:[y.a,h.a,d.f,I.a,V.a,d.h],encapsulation:2}),t})();var W='<fdp-list [navigated]="true">\n    <fdp-list-group-header grpheaderTitle="Vegetables Group"></fdp-list-group-header>\n    <fdp-display-list-item title="Green Vegetables">\n    </fdp-display-list-item>\n    <fdp-display-list-item title="Dry Vegetables">\n    </fdp-display-list-item>\n    <fdp-list-footer>List footer</fdp-list-footer>\n</fdp-list>',w='<h3>Cozy Mode</h3>\n<fdp-list noBorder="true" [navigationIndicator]="true">\n    <fdp-display-list-item *ngFor="let item of items" [title]="item.title" [secondary]="item.secondary"\n        [navigationIndicator]="item.navigationIndicator" [link]="item.link" [ariaLabel]="item.msg"></fdp-display-list-item>\n</fdp-list>\n\n<h3>Compact Mode</h3>\n<fdp-list contentDensity="compact" noBorder="true" [navigationIndicator]="true">\n    <fdp-display-list-item *ngFor="let item of items" [title]="item.title" [secondary]="item.secondary"\n        [navigationIndicator]="item.navigationIndicator" [link]="item.link" [ariaLabel]="item.msg">\n    </fdp-display-list-item>\n</fdp-list>\n',L="import { Component } from '@angular/core';\n\nexport interface Movie {\n    title: string;\n    secondary: string;\n    navigationIndicator: boolean;\n    link: string;\n    msg: string;\n}\n\n@Component({\n    selector: 'fdp-platform-display-list-item-border-less-example',\n    templateUrl: './platform-display-list-item-border-less-example.component.html'\n})\nexport class PlatformDisplayListItemBorderLessExampleComponent {\n    items: Movie[] = [\n        { title: 'Star War Item Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sapien est, efficitur eu urna quis, sagittis posuere massa. Integer euismod purus ligula, vitae efficitur massa volutpat sit amet. Cras tempor placerat elit, a commodo odio vehicula at.',\n         secondary: 'Next session Item Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sapien est, efficitur eu urna quis, sagittis posuere massa. Integer euismod purus ligula, vitae efficitur massa volutpat sit amet. Cras tempor placerat elit, a commodo odio vehicula at.',\n          navigationIndicator: true, link: '/platform/home',\n          msg: 'Navigate to get more information on this movie' },\n        { title: 'Spide Man', secondary: 'No latest release', navigationIndicator: false, link: '', msg: '' },\n        { title: 'Iron Man', secondary: 'No latest release', navigationIndicator: false, link: '', msg: '' },\n        { title: 'Wonder Women', secondary: 'Next session', navigationIndicator: true, link: '' , msg: 'Navigate to get more information on this movie'}];\n\n}\n\n",N='<h5>Declarative Approach</h5>\n<fdp-list [navigationIndicator]="true">\n    <fdp-display-list-item title="Corona" ariaLabel="Navigate to get more information on Corona">\n    </fdp-display-list-item>\n    <fdp-display-list-item title="Fever"  ariaLabel="Navigate to get more information on Fever">\n    </fdp-display-list-item>\n    <fdp-display-list-item title="Sneeze"  ariaLabel="Navigate to get more information on Sneezing">\n    </fdp-display-list-item>\n</fdp-list>',k="import { Component } from '@angular/core';\n\nexport interface Corona {\n    title: string;\n    secondary: string;\n}\n\n@Component({\n    selector: 'fdp-platform-display-list-item-with-navigation-example',\n    templateUrl: './platform-display-list-item-with-navigation-example.component.html'\n})\nexport class PlatformDisplayListItemWithNavigationExampleComponent {\n    items: Corona[] = [\n        {\n            title: 'First Stage',\n            secondary: 'First stage take medical help on call (Standard text)'\n        },\n        {\n            title: 'Second Stage',\n            secondary: 'Second stage take medical help in person (Standard text)'\n        },\n        {\n            title: 'Third Stage',\n            secondary: 'Third stage admit in hospital (Standard text)'\n        }\n    ];\n}\n",D=i("ddaM"),C=i("X1JU"),S=i("0yjR"),F=i("ofXK"),R=i("yUOt");function M(t,e){if(1&t&&v.Rb(0,"fdp-display-list-item",3),2&t){const t=e.$implicit;v.vc("title",t.title)("secondary",t.secondary)("navigationIndicator",t.navigationIndicator)("link",t.link)("ariaLabel",t.msg)}}function T(t,e){if(1&t&&v.Rb(0,"fdp-display-list-item",3),2&t){const t=e.$implicit;v.vc("title",t.title)("secondary",t.secondary)("navigationIndicator",t.navigationIndicator)("link",t.link)("ariaLabel",t.msg)}}let P=(()=>{class t{constructor(){this.items=[{title:"Star War Item Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sapien est, efficitur eu urna quis, sagittis posuere massa. Integer euismod purus ligula, vitae efficitur massa volutpat sit amet. Cras tempor placerat elit, a commodo odio vehicula at.",secondary:"Next session Item Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sapien est, efficitur eu urna quis, sagittis posuere massa. Integer euismod purus ligula, vitae efficitur massa volutpat sit amet. Cras tempor placerat elit, a commodo odio vehicula at.",navigationIndicator:!0,link:"/platform/home",msg:"Navigate to get more information on this movie"},{title:"Spide Man",secondary:"No latest release",navigationIndicator:!1,link:"",msg:""},{title:"Iron Man",secondary:"No latest release",navigationIndicator:!1,link:"",msg:""},{title:"Wonder Women",secondary:"Next session",navigationIndicator:!0,link:"",msg:"Navigate to get more information on this movie"}]}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=v.Kb({type:t,selectors:[["fdp-platform-display-list-item-border-less-example"]],decls:8,vars:4,consts:[["noBorder","true",3,"navigationIndicator"],[3,"title","secondary","navigationIndicator","link","ariaLabel",4,"ngFor","ngForOf"],["contentDensity","compact","noBorder","true",3,"navigationIndicator"],[3,"title","secondary","navigationIndicator","link","ariaLabel"]],template:function(t,e){1&t&&(v.Wb(0,"h3"),v.Vc(1,"Cozy Mode"),v.Vb(),v.Wb(2,"fdp-list",0),v.Tc(3,M,1,5,"fdp-display-list-item",1),v.Vb(),v.Wb(4,"h3"),v.Vc(5,"Compact Mode"),v.Vb(),v.Wb(6,"fdp-list",2),v.Tc(7,T,1,5,"fdp-display-list-item",1),v.Vb()),2&t&&(v.Db(2),v.vc("navigationIndicator",!0),v.Db(1),v.vc("ngForOf",e.items),v.Db(3),v.vc("navigationIndicator",!0),v.Db(1),v.vc("ngForOf",e.items))},directives:[S.a,F.n,R.a],encapsulation:2}),t})();var z=i("5HkS"),B=i("Hxo2");let E=(()=>{class t{constructor(){this.items=[{title:"First Stage",secondary:"First stage take medical help on call (Standard text)"},{title:"Second Stage",secondary:"Second stage take medical help in person (Standard text)"},{title:"Third Stage",secondary:"Third stage admit in hospital (Standard text)"}]}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=v.Kb({type:t,selectors:[["fdp-platform-display-list-item-with-navigation-example"]],decls:6,vars:1,consts:[[3,"navigationIndicator"],["title","Corona","ariaLabel","Navigate to get more information on Corona"],["title","Fever","ariaLabel","Navigate to get more information on Fever"],["title","Sneeze","ariaLabel","Navigate to get more information on Sneezing"]],template:function(t,e){1&t&&(v.Wb(0,"h5"),v.Vc(1,"Declarative Approach"),v.Vb(),v.Wb(2,"fdp-list",0),v.Rb(3,"fdp-display-list-item",1),v.Rb(4,"fdp-display-list-item",2),v.Rb(5,"fdp-display-list-item",3),v.Vb()),2&t&&(v.Db(2),v.vc("navigationIndicator",!0))},directives:[S.a,R.a],encapsulation:2}),t})();const K=[{path:"",component:x,children:[{path:"",component:(()=>{class t{constructor(){this.simpleDLI=[{language:"html",code:a,fileName:"platform-display-list-item-example"}],this.borderLessDLI=[{language:"html",code:n,fileName:"platform-display-list-item-border-less-example"},{language:"typescript",component:"PlatformDisplayListItemBorderLessExampleComponent",code:o,fileName:"platform-display-list-item-border-less-example"}],this.dliWithNavigation=[{language:"html",code:s,fileName:"platform-display-list-item-with-navigation-example"},{language:"typescript",component:"PlatformDisplayListItemWithNavigationExampleComponent",code:r,fileName:"platform-display-list-item-with-navigation-example"}]}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=v.Kb({type:t,selectors:[["app-standard-list-item"]],decls:28,vars:2,consts:[["id","partial-navigation","componentName","display-list-item"],[3,"exampleFiles"],["id","navigation","componentName","display-list-item"]],template:function(t,e){1&t&&(v.Wb(0,"fd-docs-section-title",0),v.Vc(1," Display List Item - With Partial Navigation\n"),v.Vb(),v.Wb(2,"description"),v.Vc(3,"A Display list without border, setting "),v.Wb(4,"code"),v.Vc(5,'noBorder="true"'),v.Vb(),v.Vc(6," will help to have no border and "),v.Wb(7,"code"),v.Vc(8,' [navigationIndicator]="true"'),v.Vb(),v.Vc(9," helps to display navigation and it will display navigation for specfic items for which navigtion indicator is set to true again, by default its value is false. Below examples shows declarative way to bind the list items. Where we can pass list items individually where a number of items are less"),v.Vb(),v.Wb(10,"component-example"),v.Rb(11,"fdp-platform-display-list-item-border-less-example"),v.Vb(),v.Rb(12,"code-example",1),v.Rb(13,"separator"),v.Wb(14,"fd-docs-section-title",2),v.Vc(15," Display List Item - Navigation\n"),v.Vb(),v.Wb(16,"description"),v.Vc(17,"Display List with Navigation Option. "),v.Wb(18,"code"),v.Vc(19,'[navigationIndicator]="true"'),v.Vb(),v.Vc(20," will provide *>* indicator, "),v.Wb(21,"code"),v.Vc(22,"[link]"),v.Vb(),v.Vc(23," will help to get into the desired destination on click of navigation. Below example shows declarative way to use it."),v.Vb(),v.Wb(24,"component-example"),v.Rb(25,"fdp-platform-display-list-item-with-navigation-example"),v.Vb(),v.Rb(26,"code-example",1),v.Rb(27,"separator")),2&t&&(v.Db(12),v.vc("exampleFiles",e.borderLessDLI),v.Db(14),v.vc("exampleFiles",e.dliWithNavigation))},directives:[D.a,h.a,C.a,P,z.a,B.a,E],encapsulation:2}),t})()},{path:"api",component:g.a,data:{content:b.a.displaylistitem}}]}];let O=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=v.Ob({type:t}),t.\u0275inj=v.Nb({imports:[[l.g,c.f,d.g.forChild(K),u.a,m.b,f.f,p.b,f.b],d.g]}),t})()}}]);