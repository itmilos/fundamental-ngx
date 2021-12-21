(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{R893:function(e,r,b){"use strict";b.r(r),b.d(r,"BreadcrumbDocsModule",function(){return D});var a={};b.r(a),b.d(a,"default",function(){return p});var c={};b.r(c),b.d(c,"default",function(){return v});var n={};b.r(n),b.d(n,"default",function(){return V});var t=b("tyNb"),d=b("jzzn"),m=b("PzQJ"),u=b("fXoL"),i=b("dor/"),o=b("kt86"),l=b("RJTZ"),s=b("Kpas");let f=(()=>{class e{}return e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=u.Kb({type:e,selectors:[["app-breadcrumb-header"]],decls:16,vars:0,consts:[["module","BreadcrumbModule","subPackage","breadcrumb"]],template:function(e,r){1&e&&(u.Wb(0,"header"),u.Vc(1,"Breadcrumb"),u.Vb(),u.Wb(2,"description"),u.Vc(3," The breadcrumb allows users to see the current page and navigation path to that page. Users can navigate to previous levels in the path by clicking on those levels. By clicking on the current page, a dropdown allows users to access other pages at that same level. "),u.Rb(4,"br"),u.Rb(5,"br"),u.Vc(6," Breadcrumb links are keyboard-navigable via the tab key, provided they have a "),u.Wb(7,"code"),u.Vc(8,"[routerLink]"),u.Vb(),u.Vc(9," or "),u.Wb(10,"code"),u.Vc(11,"[attr.href]"),u.Vb(),u.Vc(12," attribute.\n"),u.Vb(),u.Rb(13,"import",0),u.Rb(14,"fd-header-tabs"),u.Rb(15,"router-outlet"))},directives:[i.a,o.a,l.a,s.a,t.h],styles:[""]}),e})();var p='<fd-breadcrumb>\n        <fd-breadcrumb-item>\n            <a fd-breadcrumb-link href="/#/core/breadcrumb">Breadcrumb Level 1</a>\n        </fd-breadcrumb-item>\n        <fd-breadcrumb-item>\n            <a fd-breadcrumb-link href="/#/core/breadcrumb">Breadcrumb Level 2</a>\n        </fd-breadcrumb-item>\n        <fd-breadcrumb-item>\n            <a fd-breadcrumb-link href="/#/core/breadcrumb">Breadcrumb Level 3</a>\n        </fd-breadcrumb-item>\n        <fd-breadcrumb-item>\n            <span>Breadcrumb Level 4</span>\n        </fd-breadcrumb-item>\n</fd-breadcrumb>\n',v='<div #responsiveBreadcrumbContainer>\n    <fd-breadcrumb [containerElement]="responsiveBreadcrumbContainer">\n        <fd-breadcrumb-item>\n            <a fd-breadcrumb-link href="/#/core/breadcrumb">Breadcrumb Level 1</a>\n        </fd-breadcrumb-item>\n        <fd-breadcrumb-item>\n            <a fd-breadcrumb-link href="/#/core/breadcrumb">Breadcrumb Level 2</a>\n        </fd-breadcrumb-item>\n        <fd-breadcrumb-item>\n            <a fd-breadcrumb-link href="/#/core/breadcrumb">Breadcrumb Level 3</a>\n        </fd-breadcrumb-item>\n        <fd-breadcrumb-item>\n            <span>Breadcrumb Level 4</span>\n        </fd-breadcrumb-item>\n    </fd-breadcrumb>\n</div>\n',V='<fd-breadcrumb>\n    <fd-breadcrumb-item>\n        <a fd-breadcrumb-link routerLink="../../avatar">Breadcrumb Level 1</a>\n    </fd-breadcrumb-item>\n    <fd-breadcrumb-item>\n        <a fd-breadcrumb-link routerLink="../../alert">Breadcrumb Level 2</a>\n    </fd-breadcrumb-item>\n    <fd-breadcrumb-item>\n        <a fd-breadcrumb-link routerLink="../../bar" queryParams="#">Breadcrumb Level 3</a>\n    </fd-breadcrumb-item>\n    <fd-breadcrumb-item>\n        <span>Breadcrumb Level 4</span>\n    </fd-breadcrumb-item>\n</fd-breadcrumb>\n',h=b("ddaM"),W=b("X1JU"),L=b("BKL3"),k=b("bnly"),B=b("GOIr");const w="[_nghost-%COMP%] {\n                display: block;\n                width: 100%;\n            }";let x=(()=>{class e{}return e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=u.Kb({type:e,selectors:[["fd-breadcrumb-routerLink-example"]],decls:13,vars:0,consts:[["fd-breadcrumb-link","","routerLink","../../avatar"],["fd-breadcrumb-link","","routerLink","../../alert"],["fd-breadcrumb-link","","routerLink","../../bar","queryParams","#"]],template:function(e,r){1&e&&(u.Wb(0,"fd-breadcrumb"),u.Wb(1,"fd-breadcrumb-item"),u.Wb(2,"a",0),u.Vc(3,"Breadcrumb Level 1"),u.Vb(),u.Vb(),u.Wb(4,"fd-breadcrumb-item"),u.Wb(5,"a",1),u.Vc(6,"Breadcrumb Level 2"),u.Vb(),u.Vb(),u.Wb(7,"fd-breadcrumb-item"),u.Wb(8,"a",2),u.Vc(9,"Breadcrumb Level 3"),u.Vb(),u.Vb(),u.Wb(10,"fd-breadcrumb-item"),u.Wb(11,"span"),u.Vc(12,"Breadcrumb Level 4"),u.Vb(),u.Vb(),u.Vb())},directives:[L.a,k.a,t.f,B.a],styles:[w]}),e})(),y=(()=>{class e{}return e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=u.Kb({type:e,selectors:[["fd-breadcrumb-href-example"]],decls:13,vars:0,consts:[["fd-breadcrumb-link","","href","/#/core/breadcrumb"]],template:function(e,r){1&e&&(u.Wb(0,"fd-breadcrumb"),u.Wb(1,"fd-breadcrumb-item"),u.Wb(2,"a",0),u.Vc(3,"Breadcrumb Level 1"),u.Vb(),u.Vb(),u.Wb(4,"fd-breadcrumb-item"),u.Wb(5,"a",0),u.Vc(6,"Breadcrumb Level 2"),u.Vb(),u.Vb(),u.Wb(7,"fd-breadcrumb-item"),u.Wb(8,"a",0),u.Vc(9,"Breadcrumb Level 3"),u.Vb(),u.Vb(),u.Wb(10,"fd-breadcrumb-item"),u.Wb(11,"span"),u.Vc(12,"Breadcrumb Level 4"),u.Vb(),u.Vb(),u.Vb())},directives:[L.a,k.a,B.a],styles:[w]}),e})(),g=(()=>{class e{}return e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=u.Kb({type:e,selectors:[["fd-breadcrumb-responsive-example"]],decls:15,vars:1,consts:[["responsiveBreadcrumbContainer",""],[3,"containerElement"],["fd-breadcrumb-link","","href","/#/core/breadcrumb"]],template:function(e,r){if(1&e&&(u.Wb(0,"div",null,0),u.Wb(2,"fd-breadcrumb",1),u.Wb(3,"fd-breadcrumb-item"),u.Wb(4,"a",2),u.Vc(5,"Breadcrumb Level 1"),u.Vb(),u.Vb(),u.Wb(6,"fd-breadcrumb-item"),u.Wb(7,"a",2),u.Vc(8,"Breadcrumb Level 2"),u.Vb(),u.Vb(),u.Wb(9,"fd-breadcrumb-item"),u.Wb(10,"a",2),u.Vc(11,"Breadcrumb Level 3"),u.Vb(),u.Vb(),u.Wb(12,"fd-breadcrumb-item"),u.Wb(13,"span"),u.Vc(14,"Breadcrumb Level 4"),u.Vb(),u.Vb(),u.Vb(),u.Vb()),2&e){const e=u.Hc(1);u.Db(2),u.vc("containerElement",e)}},directives:[L.a,k.a,B.a],encapsulation:2}),e})();var R=b("5HkS"),H=b("Hxo2");let N=(()=>{class e{constructor(){this.breadcrumbRouterLinkHtml=[{language:"html",code:n,fileName:"breadcrumb-routerLink-example"}],this.breadcrumbHrefHtml=[{language:"html",code:a,fileName:"fd-breadcrumb-href-example"}],this.breadcrumbResponsiveHtml=[{language:"html",code:c,fileName:"fd-breadcrumb-responsive-example"}]}}return e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=u.Kb({type:e,selectors:[["app-breadcrumb"]],decls:22,vars:3,consts:[["id","routerLink","componentName","breadcrumb"],[3,"exampleFiles"],["id","href","componentName","breadcrumb"],["id","responsive","componentName","breadcrumb"]],template:function(e,r){1&e&&(u.Wb(0,"fd-docs-section-title",0),u.Vc(1," An example using "),u.Wb(2,"b"),u.Vc(3,"routerLink"),u.Vb(),u.Vb(),u.Wb(4,"component-example"),u.Rb(5,"fd-breadcrumb-routerLink-example"),u.Vb(),u.Rb(6,"code-example",1),u.Rb(7,"separator"),u.Wb(8,"fd-docs-section-title",2),u.Vc(9," An example using "),u.Wb(10,"b"),u.Vc(11,"href"),u.Vb(),u.Vb(),u.Wb(12,"component-example"),u.Rb(13,"fd-breadcrumb-href-example"),u.Vb(),u.Rb(14,"code-example",1),u.Wb(15,"fd-docs-section-title",3),u.Vc(16," Responsive Breadcrumbs\n"),u.Vb(),u.Wb(17,"description"),u.Vc(18," The breadcrumb will automatically refer to its parent element to know whether to show breadcrumbs or to collapse them into the overflow menu. You can provide an HTMLElement to the [containerElement] input to set your own container element. Note that the responsiveness feature will not function properly if the containerElement or parent element have a set fixed width.\n"),u.Vb(),u.Wb(19,"component-example"),u.Rb(20,"fd-breadcrumb-responsive-example"),u.Vb(),u.Rb(21,"code-example",1)),2&e&&(u.Db(6),u.vc("exampleFiles",r.breadcrumbRouterLinkHtml),u.Db(8),u.vc("exampleFiles",r.breadcrumbHrefHtml),u.Db(7),u.vc("exampleFiles",r.breadcrumbResponsiveHtml))},directives:[h.a,W.a,x,R.a,H.a,y,o.a,g],encapsulation:2}),e})();var K=b("N6uK"),E=b("t9W5");const C=[{path:"",component:f,children:[{path:"",component:N},{path:"api",component:d.a,data:{content:m.a.breadcrumb}}]}];let D=(()=>{class e{}return e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=u.Ob({type:e}),e.\u0275inj=u.Nb({imports:[[t.g.forChild(C),E.a,K.b],t.g]}),e})()}}]);