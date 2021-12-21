(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{U3Or:function(t,e,n){"use strict";n.r(e),n.d(e,"ProductSwitchDocsModule",function(){return F});var o={};n.r(o),n.d(o,"default",function(){return w});var c={};n.r(c),n.d(c,"default",function(){return S});var i={};n.r(i),n.d(i,"default",function(){return y});var l={};n.r(l),n.d(l,"default",function(){return x});var s={};n.r(s),n.d(s,"default",function(){return V});var a={};n.r(a),n.d(a,"default",function(){return v});var r=n("tyNb"),d=n("jzzn"),u=n("t9W5"),p=n("PzQJ"),m=n("fXoL"),b=n("dor/"),h=n("kt86"),g=n("RJTZ"),f=n("Kpas");let C=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=m.Kb({type:t,selectors:[["app-product-switch-docs-header"]],decls:7,vars:0,consts:[["module","ProductSwitchModule","subPackage","product-switch"]],template:function(t,e){1&t&&(m.Wb(0,"header"),m.Vc(1,"Product Switch"),m.Vb(),m.Wb(2,"description"),m.Vc(3," Product Switch provides a role based access to all products or LoBs. It shows only one level of navigation.\n"),m.Vb(),m.Rb(4,"import",0),m.Rb(5,"fd-header-tabs"),m.Rb(6,"router-outlet"))},directives:[b.a,h.a,g.a,f.a,r.h],styles:[""]}),t})();var w='<fd-product-switch-body [products]="list" (productsChange)="productChangeHandle($event)"> </fd-product-switch-body>\n',S="import { Component } from '@angular/core';\nimport { ProductSwitchItem } from '@fundamental-ngx/core/product-switch';\n\n@Component({\n    selector: 'fd-product-switch-small-example',\n    templateUrl: './product-switch-small-example.component.html'\n})\nexport class ProductSwitchSmallExampleComponent {\n    list: ProductSwitchItem[] = [\n        {\n            title: 'Home',\n            subtitle: 'Central Home',\n            icon: 'home',\n            stickToPosition: true,\n            disabledDragAndDrop: true\n        },\n        {\n            title: 'Analytics Cloud',\n            subtitle: 'Analytics Cloud',\n            icon: 'business-objects-experience',\n            selected: true\n        },\n        {\n            title: 'Catalog',\n            subtitle: 'Ariba',\n            icon: 'contacts'\n        },\n        {\n            title: 'Guided Buying',\n            icon: 'credit-card'\n        },\n        {\n            title: 'Strategic Procurement',\n            icon: 'cart-3'\n        }\n    ];\n\n    productChangeHandle(products: ProductSwitchItem[]): void {\n        this.list = products;\n        console.log(products);\n    }\n}\n",y='<fd-shellbar>\n    <fd-shellbar-actions>\n        <fd-product-switch [noArrow]="false">\n            <fd-product-switch-body [products]="list" (productsChange)="productChangeHandle($event)">\n            </fd-product-switch-body>\n        </fd-product-switch>\n    </fd-shellbar-actions>\n</fd-shellbar>\n',x="import { Component } from '@angular/core';\nimport { ProductSwitchItem } from '@fundamental-ngx/core/product-switch';\n\n@Component({\n    selector: 'fd-product-switch-dnd-example',\n    templateUrl: './product-switch-dnd-example.component.html'\n})\nexport class ProductSwitchDndExampleComponent {\n    list: ProductSwitchItem[] = [\n        {\n            title: 'Home',\n            subtitle: 'Central Home',\n            icon: 'home',\n            stickToPosition: true,\n            disabledDragAndDrop: true\n        },\n        {\n            title: 'Analytics Cloud',\n            subtitle: 'Analytics Cloud',\n            icon: 'business-objects-experience'\n        },\n        {\n            title: 'Catalog',\n            subtitle: 'Ariba',\n            icon: 'contacts'\n        },\n        {\n            title: 'Guided Buying',\n            icon: 'credit-card'\n        },\n        {\n            title: 'Strategic Procurement',\n            icon: 'cart-3'\n        },\n        {\n            title: 'Vendor Managemen',\n            subtitle: 'Fieldglass',\n            icon: 'shipping-status'\n        },\n        {\n            title: 'Human Capital Management',\n            icon: 'customer'\n        },\n        {\n            title: 'Sales Cloud',\n            subtitle: 'Sales Cloud',\n            icon: 'sales-notification'\n        },\n        {\n            title: 'Commerce Cloud',\n            subtitle: 'Commerce Cloud',\n            icon: 'retail-store'\n        },\n        {\n            title: 'Marketing Cloud',\n            subtitle: 'Marketing Cloud',\n            icon: 'marketing-campaign'\n        },\n        {\n            title: 'Service Cloud',\n            icon: 'family-care'\n        },\n        {\n            title: 'S/4HANA',\n            icon: 'batch-payments'\n        }\n    ];\n\n    productChangeHandle(products: ProductSwitchItem[]): void {\n        this.list = products;\n        console.log(products);\n    }\n}\n",V='<div style="width: 450px;">\n    <fd-product-switch-body [products]="list" [forceListMode]="true" (productsChange)="productChangeHandle($event)">\n    </fd-product-switch-body>\n</div>\n',v="import { Component } from '@angular/core';\nimport { ProductSwitchItem } from '@fundamental-ngx/core/product-switch';\n\n@Component({\n    selector: 'fd-product-switch-list-example',\n    templateUrl: './product-switch-list-example.component.html'\n})\nexport class ProductSwitchListComponent {\n    list: ProductSwitchItem[] = [\n        {\n            title: 'Home',\n            subtitle: 'Central Home',\n            icon: 'home',\n            stickToPosition: true,\n            disabledDragAndDrop: true\n        },\n        {\n            title: 'Analytics Cloud',\n            subtitle: 'Analytics Cloud',\n            icon: 'business-objects-experience'\n        },\n        {\n            title: 'Catalog',\n            subtitle: 'Ariba',\n            icon: 'contacts'\n        },\n        {\n            title: 'Guided Buying',\n            icon: 'credit-card'\n        },\n        {\n            title: 'Strategic Procurement',\n            icon: 'cart-3'\n        },\n        {\n            title: 'Vendor Managemen',\n            subtitle: 'Fieldglass',\n            icon: 'shipping-status',\n            selected: true\n        },\n        {\n            title: 'Human Capital Management',\n            icon: 'customer'\n        },\n        {\n            title: 'Sales Cloud',\n            subtitle: 'Sales Cloud',\n            icon: 'sales-notification'\n        },\n        {\n            title: 'Commerce Cloud',\n            subtitle: 'Commerce Cloud',\n            icon: 'retail-store'\n        },\n        {\n            title: 'Marketing Cloud',\n            subtitle: 'Marketing Cloud',\n            icon: 'marketing-campaign'\n        },\n        {\n            title: 'Service Cloud',\n            icon: 'family-care'\n        },\n        {\n            title: 'S/4HANA',\n            icon: 'batch-payments'\n        }\n    ];\n\n    productChangeHandle(products: ProductSwitchItem[]): void {\n        this.list = products;\n        console.log(products);\n    }\n}\n",A=n("ddaM"),P=n("X1JU"),H=n("Wfyu"),W=n("890A"),D=n("envU"),k=n("ayFO");let M=(()=>{class t{constructor(){this.list=[{title:"Home",subtitle:"Central Home",icon:"home",stickToPosition:!0,disabledDragAndDrop:!0},{title:"Analytics Cloud",subtitle:"Analytics Cloud",icon:"business-objects-experience"},{title:"Catalog",subtitle:"Ariba",icon:"contacts"},{title:"Guided Buying",icon:"credit-card"},{title:"Strategic Procurement",icon:"cart-3"},{title:"Vendor Managemen",subtitle:"Fieldglass",icon:"shipping-status"},{title:"Human Capital Management",icon:"customer"},{title:"Sales Cloud",subtitle:"Sales Cloud",icon:"sales-notification"},{title:"Commerce Cloud",subtitle:"Commerce Cloud",icon:"retail-store"},{title:"Marketing Cloud",subtitle:"Marketing Cloud",icon:"marketing-campaign"},{title:"Service Cloud",icon:"family-care"},{title:"S/4HANA",icon:"batch-payments"}]}productChangeHandle(t){this.list=t,console.log(t)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=m.Kb({type:t,selectors:[["fd-product-switch-dnd-example"]],decls:4,vars:2,consts:[[3,"noArrow"],[3,"products","productsChange"]],template:function(t,e){1&t&&(m.Wb(0,"fd-shellbar"),m.Wb(1,"fd-shellbar-actions"),m.Wb(2,"fd-product-switch",0),m.Wb(3,"fd-product-switch-body",1),m.jc("productsChange",function(t){return e.productChangeHandle(t)}),m.Vb(),m.Vb(),m.Vb(),m.Vb()),2&t&&(m.Db(2),m.vc("noArrow",!1),m.Db(1),m.vc("products",e.list))},directives:[H.a,W.a,D.a,k.a],encapsulation:2}),t})();var N=n("5HkS"),L=n("Hxo2");let j=(()=>{class t{constructor(){this.list=[{title:"Home",subtitle:"Central Home",icon:"home",stickToPosition:!0,disabledDragAndDrop:!0},{title:"Analytics Cloud",subtitle:"Analytics Cloud",icon:"business-objects-experience",selected:!0},{title:"Catalog",subtitle:"Ariba",icon:"contacts"},{title:"Guided Buying",icon:"credit-card"},{title:"Strategic Procurement",icon:"cart-3"}]}productChangeHandle(t){this.list=t,console.log(t)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=m.Kb({type:t,selectors:[["fd-product-switch-small-example"]],decls:1,vars:1,consts:[[3,"products","productsChange"]],template:function(t,e){1&t&&(m.Wb(0,"fd-product-switch-body",0),m.jc("productsChange",function(t){return e.productChangeHandle(t)}),m.Vb()),2&t&&m.vc("products",e.list)},directives:[k.a],encapsulation:2}),t})(),E=(()=>{class t{constructor(){this.list=[{title:"Home",subtitle:"Central Home",icon:"home",stickToPosition:!0,disabledDragAndDrop:!0},{title:"Analytics Cloud",subtitle:"Analytics Cloud",icon:"business-objects-experience"},{title:"Catalog",subtitle:"Ariba",icon:"contacts"},{title:"Guided Buying",icon:"credit-card"},{title:"Strategic Procurement",icon:"cart-3"},{title:"Vendor Managemen",subtitle:"Fieldglass",icon:"shipping-status",selected:!0},{title:"Human Capital Management",icon:"customer"},{title:"Sales Cloud",subtitle:"Sales Cloud",icon:"sales-notification"},{title:"Commerce Cloud",subtitle:"Commerce Cloud",icon:"retail-store"},{title:"Marketing Cloud",subtitle:"Marketing Cloud",icon:"marketing-campaign"},{title:"Service Cloud",icon:"family-care"},{title:"S/4HANA",icon:"batch-payments"}]}productChangeHandle(t){this.list=t,console.log(t)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=m.Kb({type:t,selectors:[["fd-product-switch-list-example"]],decls:2,vars:2,consts:[[2,"width","450px"],[3,"products","forceListMode","productsChange"]],template:function(t,e){1&t&&(m.Wb(0,"div",0),m.Wb(1,"fd-product-switch-body",1),m.jc("productsChange",function(t){return e.productChangeHandle(t)}),m.Vb(),m.Vb()),2&t&&(m.Db(1),m.vc("products",e.list)("forceListMode",!0))},directives:[k.a],encapsulation:2}),t})(),R=(()=>{class t{constructor(){this.productSwitchBasicExample=[{language:"html",code:i,fileName:"product-switch-dnd-example"},{language:"typescript",code:l,fileName:"product-switch-dnd-example",component:"ProductSwitchDndExampleComponent"}],this.productSwitchSmallExample=[{language:"html",code:o,fileName:"product-switch-small-example"},{language:"typescript",code:c,fileName:"product-switch-small-example",component:"ProductSwitchSmallExampleComponent"}],this.productSwitchListExample=[{language:"html",code:s,fileName:"product-switch-list-example"},{language:"typescript",code:a,fileName:"product-switch-list-example",component:"ProductSwitchListComponent"}]}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=m.Kb({type:t,selectors:[["app-product-switch"]],decls:44,vars:3,consts:[["id","basic","componentName","product-switch"],[3,"exampleFiles"],["id","small","componentName","product-switch"],["id","list","componentName","product-switch"]],template:function(t,e){1&t&&(m.Wb(0,"fd-docs-section-title",0),m.Vc(1," Basic Product Switch inside "),m.Wb(2,"code"),m.Vc(3,"Shellbar"),m.Vb(),m.Vc(4,".\n"),m.Vb(),m.Wb(5,"description"),m.Vc(6," Product switch with enabled "),m.Wb(7,"code"),m.Vc(8,"Drag And Drop"),m.Vb(),m.Vc(9,". The DnD functionality can be switched off by passing "),m.Wb(10,"code"),m.Vc(11,'[dragAndDropEnabled]="false"'),m.Vb(),m.Vc(12," to component. The event thrown on drop can be handled by binding to "),m.Wb(13,"code"),m.Vc(14,"(productsChange)"),m.Vb(),m.Vc(15,". The element can stick to it's position, it can be achieved by passing "),m.Wb(16,"code"),m.Vc(17,"stickToPosition: true"),m.Vb(),m.Vc(18," value to the interface object. Example of usage is in "),m.Wb(19,"code"),m.Vc(20,"Home"),m.Vb(),m.Vc(21," product.\n"),m.Vb(),m.Wb(22,"component-example"),m.Rb(23,"fd-product-switch-dnd-example"),m.Vb(),m.Rb(24,"code-example",1),m.Rb(25,"separator"),m.Wb(26,"fd-docs-section-title",2),m.Vc(27," Product Switch With Less Than 7 Items\n"),m.Vb(),m.Wb(28,"description"),m.Vc(29," When the product switch has less than 7 items, it has 3 columns and 2 rows.\n"),m.Vb(),m.Wb(30,"component-example"),m.Rb(31,"fd-product-switch-small-example"),m.Vb(),m.Rb(32,"code-example",1),m.Rb(33,"separator"),m.Wb(34,"fd-docs-section-title",3),m.Vc(35," List Mode\n"),m.Vb(),m.Wb(36,"description"),m.Vc(37," For narrow screens the Product Switch transforms to a List by itself. Add the "),m.Wb(38,"code"),m.Vc(39,'[forceListMode]="true"'),m.Vb(),m.Vc(40," to force the list layout, even on larger screens.\n"),m.Vb(),m.Wb(41,"component-example"),m.Rb(42,"fd-product-switch-list-example"),m.Vb(),m.Rb(43,"code-example",1)),2&t&&(m.Db(24),m.vc("exampleFiles",e.productSwitchBasicExample),m.Db(8),m.vc("exampleFiles",e.productSwitchSmallExample),m.Db(11),m.vc("exampleFiles",e.productSwitchListExample))},directives:[A.a,h.a,P.a,M,N.a,L.a,j,E],encapsulation:2}),t})();var T=n("tP0/"),I=n("36lp");const B=[{path:"",component:C,children:[{path:"",component:R},{path:"api",component:d.a,data:{content:p.a.productSwitch}}]}];let F=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=m.Ob({type:t}),t.\u0275inj=m.Nb({imports:[[r.g.forChild(B),u.a,T.b,I.a],r.g]}),t})()}}]);