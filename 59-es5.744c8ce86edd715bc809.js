!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{"//OG":function(t,i,n){"use strict";n.r(i),n.d(i,"ObjectIdentifierDocsModule",function(){return ie});var c={};n.r(c),n.d(c,"default",function(){return j});var o={};n.r(o),n.d(o,"default",function(){return h});var d={};n.r(d),n.d(d,"default",function(){return W});var b={};n.r(b),n.d(b,"default",function(){return x});var r={};n.r(r),n.d(r,"default",function(){return v});var a={};n.r(a),n.d(a,"default",function(){return w});var l,f,s,p,u=n("tyNb"),m=n("jzzn"),V=n("PzQJ"),j="<fd-object-identifier>\n    Title\n</fd-object-identifier>\n",h='<fd-object-identifier>\n    <a href="#" fd-link>Link</a>\n</fd-object-identifier>\n\n<br><br>\n\n<fd-object-identifier [bold]="true">\n    <a href="#" fd-link>Bold Link</a>\n</fd-object-identifier>\n',W='<fd-object-identifier [bold]="true">\n    Bold Title\n</fd-object-identifier>\n',x='<fd-object-identifier description="Description">\n    Title\n</fd-object-identifier>\n\n<br><br>\n\n<fd-object-identifier [bold]="true" description="Description">\n    Bold Title\n</fd-object-identifier>\n\n<br><br>\n\n<fd-object-identifier description="Description">\n    <a href="#" fd-link>Link</a>\n</fd-object-identifier>\n\n<br><br>\n\n<fd-object-identifier [bold]="true" description="Description">\n    <a href="#" fd-link>Bold Link</a>\n</fd-object-identifier>\n',v='<table fd-table>\n    <thead fd-table-header>\n    <tr fd-table-row>\n        <th fd-table-cell>Product</th>\n        <th fd-table-cell>Country</th>\n        <th fd-table-cell>Price</th>\n    </tr>\n    </thead>\n    <tbody fd-table-body>\n    <tr *ngFor="let row of tableRows" fd-table-row>\n        <td fd-table-cell>\n            <fd-object-identifier [description]="row.column1Description" [medium]="true">\n                {{ row.column1 }}\n            </fd-object-identifier>\n        </td>\n        <td fd-table-cell>{{ row.column2 }}</td>\n        <td fd-table-cell>{{ row.column3 }}</td>\n    </tr>\n    </tbody>\n</table>\n',w="import { Component } from '@angular/core';\n\n@Component({\n    selector: 'fd-object-identifier-table-example',\n    templateUrl: './object-identifier-table-example.component.html'\n})\nexport class ObjectIdentifierTableExampleComponent {\n    tableRows = [\n        {\n            column1: 'Apple',\n            column1Description: 'Fruit',\n            column2: 'USA',\n            column3: '1.50$',\n        },\n        {\n            column1: 'Carrot',\n            column1Description: 'Vegetable',\n            column2: 'Uzbekistan',\n            column3: '3$',\n        },\n        {\n            column1: 'Kiwi',\n            column1Description: 'Fruit',\n            column2: 'New Zealand',\n            column3: '5$',\n        }\n    ];\n}\n",y=n("fXoL"),D=n("ddaM"),R=n("kt86"),k=n("X1JU"),T=n("euhb"),g=n("muRr"),I=((p=function t(){e(this,t)}).\u0275fac=function(e){return new(e||p)},p.\u0275cmp=y.Kb({type:p,selectors:[["fd-object-identifier-default-example"]],decls:2,vars:0,template:function(e,t){1&e&&(y.Wb(0,"fd-object-identifier"),y.Vc(1," Title\n"),y.Vb())},directives:[T.a],encapsulation:2}),p),O=((s=function t(){e(this,t)}).\u0275fac=function(e){return new(e||s)},s.\u0275cmp=y.Kb({type:s,selectors:[["fd-object-identifier-link-example"]],decls:8,vars:1,consts:[["href","#","fd-link",""],[3,"bold"]],template:function(e,t){1&e&&(y.Wb(0,"fd-object-identifier"),y.Wb(1,"a",0),y.Vc(2,"Link"),y.Vb(),y.Vb(),y.Rb(3,"br"),y.Rb(4,"br"),y.Wb(5,"fd-object-identifier",1),y.Wb(6,"a",0),y.Vc(7,"Bold Link"),y.Vb(),y.Vb()),2&e&&(y.Db(5),y.vc("bold",!0))},directives:[T.a,g.a],encapsulation:2}),s),N=((f=function t(){e(this,t)}).\u0275fac=function(e){return new(e||f)},f.\u0275cmp=y.Kb({type:f,selectors:[["fd-object-identifier-bold-example"]],decls:2,vars:1,consts:[[3,"bold"]],template:function(e,t){1&e&&(y.Wb(0,"fd-object-identifier",0),y.Vc(1," Bold Title\n"),y.Vb()),2&e&&y.vc("bold",!0)},directives:[T.a],encapsulation:2}),f),F=((l=function t(){e(this,t)}).\u0275fac=function(e){return new(e||l)},l.\u0275cmp=y.Kb({type:l,selectors:[["fd-object-identifier-descriptive-example"]],decls:16,vars:2,consts:[["description","Description"],["description","Description",3,"bold"],["href","#","fd-link",""]],template:function(e,t){1&e&&(y.Wb(0,"fd-object-identifier",0),y.Vc(1," Title\n"),y.Vb(),y.Rb(2,"br"),y.Rb(3,"br"),y.Wb(4,"fd-object-identifier",1),y.Vc(5," Bold Title\n"),y.Vb(),y.Rb(6,"br"),y.Rb(7,"br"),y.Wb(8,"fd-object-identifier",0),y.Wb(9,"a",2),y.Vc(10,"Link"),y.Vb(),y.Vb(),y.Rb(11,"br"),y.Rb(12,"br"),y.Wb(13,"fd-object-identifier",1),y.Wb(14,"a",2),y.Vc(15,"Bold Link"),y.Vb(),y.Vb()),2&e&&(y.Db(4),y.vc("bold",!0),y.Db(9),y.vc("bold",!0))},directives:[T.a,g.a],encapsulation:2}),l),C=n("5HkS"),K=n("Hxo2"),L=n("hee+"),B=n("qrZt"),z=n("D/jN"),$=n("jn3b"),P=n("eifd"),U=n("ofXK");function E(e,t){if(1&e&&(y.Wb(0,"tr",2),y.Wb(1,"td",3),y.Wb(2,"fd-object-identifier",6),y.Vc(3),y.Vb(),y.Vb(),y.Wb(4,"td",3),y.Vc(5),y.Vb(),y.Wb(6,"td",3),y.Vc(7),y.Vb(),y.Vb()),2&e){var i=t.$implicit;y.Db(2),y.vc("description",i.column1Description)("medium",!0),y.Db(1),y.Xc(" ",i.column1," "),y.Db(2),y.Wc(i.column2),y.Db(2),y.Wc(i.column3)}}var J,X,A,M,Z=((X=function t(){e(this,t),this.tableRows=[{column1:"Apple",column1Description:"Fruit",column2:"USA",column3:"1.50$"},{column1:"Carrot",column1Description:"Vegetable",column2:"Uzbekistan",column3:"3$"},{column1:"Kiwi",column1Description:"Fruit",column2:"New Zealand",column3:"5$"}]}).\u0275fac=function(e){return new(e||X)},X.\u0275cmp=y.Kb({type:X,selectors:[["fd-object-identifier-table-example"]],decls:11,vars:1,consts:[["fd-table",""],["fd-table-header",""],["fd-table-row",""],["fd-table-cell",""],["fd-table-body",""],["fd-table-row","",4,"ngFor","ngForOf"],[3,"description","medium"]],template:function(e,t){1&e&&(y.Wb(0,"table",0),y.Wb(1,"thead",1),y.Wb(2,"tr",2),y.Wb(3,"th",3),y.Vc(4,"Product"),y.Vb(),y.Wb(5,"th",3),y.Vc(6,"Country"),y.Vb(),y.Wb(7,"th",3),y.Vc(8,"Price"),y.Vb(),y.Vb(),y.Vb(),y.Wb(9,"tbody",4),y.Tc(10,E,8,5,"tr",5),y.Vb(),y.Vb()),2&e&&(y.Db(10),y.vc("ngForOf",t.tableRows))},directives:[L.a,B.a,z.a,$.a,P.a,U.n,T.a],encapsulation:2}),X),S=((J=function t(){e(this,t),this.defaultObjectIdentifier=[{language:"html",code:c,fileName:"object-identifier-default-example"}],this.linkObjectIdentifier=[{language:"html",code:o,fileName:"object-identifier-link-example"}],this.boldObjectIdentifier=[{language:"html",code:d,fileName:"object-identifier-bold-example"}],this.descriptiveObjectIdentifier=[{language:"html",code:b,fileName:"object-identifier-descriptive-example"}],this.tableObjectIdentifierType=[{language:"html",code:r,fileName:"object-identifier-table-example",component:"ObjectIdentifierTableExampleComponent"},{language:"typescript",component:"ObjectIdentifierTableExampleComponent",code:a,fileName:"object-identifier-table-example"}]}).\u0275fac=function(e){return new(e||J)},J.\u0275cmp=y.Kb({type:J,selectors:[["app-object-identifier"]],decls:61,vars:5,consts:[["id","default","componentName","object-identifier"],[3,"exampleFiles"],["id","bold","componentName","object-identifier"],["id","links","componentName","object-identifier"],["id","descriptive","componentName","object-identifier"],["id","tables","componentName","object-identifier"]],template:function(e,t){1&e&&(y.Wb(0,"fd-docs-section-title",0),y.Vc(1," Title\n"),y.Vb(),y.Wb(2,"description"),y.Vc(3," To display the object identifier as a title, add some text inside "),y.Wb(4,"code"),y.Vc(5,"fd-object-identifier"),y.Vb(),y.Vc(6," component.\n"),y.Vb(),y.Wb(7,"component-example"),y.Rb(8,"fd-object-identifier-default-example"),y.Vb(),y.Rb(9,"code-example",1),y.Rb(10,"separator"),y.Wb(11,"fd-docs-section-title",2),y.Vc(12," Bold\n"),y.Vb(),y.Wb(13,"description"),y.Vc(14," To display the object identifier's title in bold, add "),y.Wb(15,"code"),y.Vc(16,'[bold]="true"'),y.Vb(),y.Vc(17,".\n"),y.Vb(),y.Wb(18,"component-example"),y.Rb(19,"fd-object-identifier-bold-example"),y.Vb(),y.Rb(20,"code-example",1),y.Rb(21,"separator"),y.Wb(22,"fd-docs-section-title",3),y.Vc(23," Links\n"),y.Vb(),y.Wb(24,"description"),y.Vc(25," To display the object identifier as a link, add "),y.Wb(26,"code"),y.Vc(27,"fd-link"),y.Vb(),y.Vc(28," component inside "),y.Wb(29,"code"),y.Vc(30,"fd-object-identifier"),y.Vb(),y.Vc(31," component.\n"),y.Vb(),y.Wb(32,"component-example"),y.Rb(33,"fd-object-identifier-link-example"),y.Vb(),y.Rb(34,"code-example",1),y.Rb(35,"separator"),y.Wb(36,"fd-docs-section-title",4),y.Vc(37," Descriptive\n"),y.Vb(),y.Wb(38,"description"),y.Vc(39," To display the object identifier's title with descriptive text, add "),y.Wb(40,"code"),y.Vc(41,"[description]=\"'text'\""),y.Vb(),y.Vc(42,".\n"),y.Vb(),y.Wb(43,"component-example"),y.Rb(44,"fd-object-identifier-descriptive-example"),y.Vb(),y.Rb(45,"code-example",1),y.Rb(46,"separator"),y.Wb(47,"fd-docs-section-title",5),y.Vc(48," Tables\n"),y.Vb(),y.Wb(49,"description"),y.Vc(50," To display the object identifier in a table, add the "),y.Wb(51,"code"),y.Vc(52,"fd-object-identifier"),y.Vb(),y.Vc(53," within the table cells, along with "),y.Wb(54,"code"),y.Vc(55,'[medium]="true"'),y.Vb(),y.Vc(56,", to reduce size of title.\n"),y.Vb(),y.Wb(57,"component-example"),y.Rb(58,"fd-object-identifier-table-example"),y.Vb(),y.Rb(59,"code-example",1),y.Rb(60,"separator")),2&e&&(y.Db(9),y.vc("exampleFiles",t.defaultObjectIdentifier),y.Db(11),y.vc("exampleFiles",t.boldObjectIdentifier),y.Db(14),y.vc("exampleFiles",t.linkObjectIdentifier),y.Db(11),y.vc("exampleFiles",t.descriptiveObjectIdentifier),y.Db(14),y.vc("exampleFiles",t.tableObjectIdentifierType))},directives:[D.a,R.a,k.a,I,C.a,K.a,N,O,F,Z],encapsulation:2}),J),H=n("dor/"),q=n("RJTZ"),G=n("Kpas"),Q=((A=function t(){e(this,t)}).\u0275fac=function(e){return new(e||A)},A.\u0275cmp=y.Kb({type:A,selectors:[["app-object-status-header"]],decls:10,vars:0,consts:[["module","ObjectIdentifierModule","subPackage","object-identifier"]],template:function(e,t){1&e&&(y.Wb(0,"header"),y.Vc(1,"Object Identifier"),y.Vb(),y.Wb(2,"description"),y.Wb(3,"p"),y.Vc(4," The object identifier is a short text that represents the key identifier of an object, and can be displayed in various types of containers, tables, panels, popovers and more. The text wraps if there is insufficient horizontal space. "),y.Vb(),y.Wb(5,"p"),y.Vc(6," The object identifier should be easily read by the users, preferably displaying text instead of an ID. If it necessary to distinguish objects by their IDs, then it should appear as descriptive text below the title text. "),y.Vb(),y.Vb(),y.Rb(7,"import",0),y.Rb(8,"fd-header-tabs"),y.Rb(9,"router-outlet"))},directives:[H.a,R.a,q.a,G.a,u.h],styles:[""]}),A),Y=n("t9W5"),_=n("0vMX"),ee=n("a4EW"),te=[{path:"",component:Q,children:[{path:"",component:S},{path:"api",component:m.a,data:{content:V.a.objectIdentifier}}]}],ie=((M=function t(){e(this,t)}).\u0275fac=function(e){return new(e||M)},M.\u0275mod=y.Ob({type:M}),M.\u0275inj=y.Nb({imports:[[u.g.forChild(te),Y.a,_.a,ee.b]]}),M)}}])}();