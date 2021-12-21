!function(){function t(t,o){for(var e=0;e<o.length;e++){var a=o[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function o(t,o){if(!(t instanceof o))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{"A+qJ":function(e,a,l){"use strict";l.r(a),l.d(a,"ToolbarDocsModule",function(){return Mt});var b={};l.r(b),l.d(b,"default",function(){return T});var r={};l.r(r),l.d(r,"default",function(){return g});var n={};l.r(n),l.d(n,"default",function(){return O});var c={};l.r(c),l.d(c,"default",function(){return R});var i={};l.r(i),l.d(i,"default",function(){return D});var d={};l.r(d),l.d(d,"default",function(){return P});var f={};l.r(f),l.d(f,"default",function(){return N});var p={};l.r(p),l.d(p,"default",function(){return E});var u={};l.r(u),l.d(u,"default",function(){return z});var m,s,v,w,h,V,x,y=l("tyNb"),W=l("t9W5"),T='<fd-toolbar [fdType]="\'solid\'">\n    <label fd-toolbar-label>Solid</label>\n</fd-toolbar>\n<br />\n\n<fd-toolbar [fdType]="\'auto\'">\n    <label fd-toolbar-label>Auto</label>\n</fd-toolbar>\n<br />\n\n<fd-toolbar [fdType]="\'transparent\'" [clearBorder]="true">\n    <label fd-toolbar-label>Transparent</label>\n</fd-toolbar>\n<br />\n\n<fd-toolbar [fdType]="\'info\'">\n    <label fd-toolbar-label>Info</label>\n</fd-toolbar>\n<br />\n\n<fd-toolbar [fdType]="\'info\'" [active]="true">\n    <label fd-toolbar-label>Info active</label>\n</fd-toolbar>\n',g='<fd-toolbar [hasTitle]="true">\n    <h4>H4 sized text</h4>\n</fd-toolbar>\n',O='<fd-toolbar>\n    <label fd-toolbar-label>text</label>\n    <fd-toolbar-spacer></fd-toolbar-spacer>\n    <label fd-toolbar-label>text</label>\n</fd-toolbar>\n<br />\n\n<fd-toolbar>\n    <label fd-toolbar-label>text</label>\n    <fd-toolbar-spacer [fixed]="true" [width]="\'200px\'"></fd-toolbar-spacer>\n    <label fd-toolbar-label>text</label>\n</fd-toolbar>\n',R="<fd-toolbar>\n    <label fd-toolbar-label>text</label>\n    <fd-toolbar-separator></fd-toolbar-separator>\n    <label fd-toolbar-label>text</label>\n</fd-toolbar>\n",D="import { Component } from '@angular/core';\nimport { DatetimeAdapter, DATE_TIME_FORMATS, FdDatetimeAdapter, FD_DATETIME_FORMATS } from '@fundamental-ngx/core/datetime';\n\n@Component({\n    selector: 'fd-toolbar-overflow-example',\n    templateUrl: './toolbar-overflow-example.component.html',\n    providers: [\n        {\n            provide: DatetimeAdapter,\n            useClass: FdDatetimeAdapter\n        },\n        {\n            provide: DATE_TIME_FORMATS,\n            useValue: FD_DATETIME_FORMATS\n        }\n    ]\n})\nexport class ToolbarOverflowExampleComponent {}\n",P='<fd-toolbar [shouldOverflow]="true">\n    <button fd-toolbar-item fd-button label="Button" [compact]="true"></button>\n    <button fd-toolbar-item fd-button label="Button" [compact]="true"></button>\n    <button fd-toolbar-item fd-button label="Button" [compact]="true"></button>\n\n    <fd-datetime-picker fd-toolbar-item [compact]="true"></fd-datetime-picker>\n\n    <fd-select fd-toolbar-item [compact]="true" placeholder="Select an option" [closeOnOutsideClick]="false">\n        <fd-option *ngFor="let option of [\'Apple\', \'Pineapple\', \'Tomato\', \'Strawberry\']" [value]="option">{{\n            option\n        }}</fd-option>\n    </fd-select>\n\n    <button fd-toolbar-item fd-button label="Button" [compact]="true"></button>\n\n    <fd-checkbox fd-toolbar-item label="Option 1" [tristate]="true"> </fd-checkbox>\n\n    <button fd-toolbar-item fd-button label="Button" [compact]="true"></button>\n\n    <fd-split-button fd-toolbar-item [compact]="true">\n        <fd-menu>\n            <li fd-menu-item>\n                <div fd-menu-interactive>\n                    <span fd-menu-title>Option 1</span>\n                </div>\n            </li>\n            <li fd-menu-item>\n                <div fd-menu-interactive>\n                    <span fd-menu-title>Option 2</span>\n                </div>\n            </li>\n        </fd-menu>\n    </fd-split-button>\n\n    <label fd-toolbar-item fd-toolbar-label fd-form-label for="input-1">Default Input</label>\n    <input\n        [compact]="true"\n        fd-toolbar-item\n        fd-form-control\n        type="text"\n        id="input-1"\n        placeholder="Field placeholder text"\n        style="max-width: 200px;"\n    />\n\n    <button fd-toolbar-item fd-button fd-toolbar-overflow-button fd-toolbar-overflow-button-menu label="Button" [fdMenu]="true" [compact]="true"></button>\n\n    <fd-segmented-button fd-toolbar-item>\n        <button fd-button label="Left" [compact]="true"></button>\n        <button fd-button label="Middle" [compact]="true"></button>\n        <button fd-button label="Right" [compact]="true"></button>\n    </fd-segmented-button>\n\n    <button fd-toolbar-item fd-button fd-toolbar-overflow-button label="Button" [compact]="true"></button>\n    <button fd-toolbar-item fd-button fd-toolbar-overflow-button label="Button" [compact]="true"></button>\n    <fd-toolbar-spacer fd-toolbar-item [fixed]="true" [width]="\'200px\'"></fd-toolbar-spacer>\n    <button fd-toolbar-item fd-button fd-toolbar-overflow-button label="Button" [compact]="true"></button>\n    <button fd-toolbar-item fd-button fd-toolbar-overflow-button label="Button" [compact]="true"></button>\n    <button fd-toolbar-item fd-button fd-toolbar-overflow-button label="Button" [compact]="true"></button>\n</fd-toolbar>\n',N='<fd-toolbar [shouldOverflow]="true">\n    <button fd-toolbar-item fd-button label="Button First" [compact]="true"></button>\n    <button fd-toolbar-item fd-button label="Always" [compact]="true" fdOverflowPriority="always"></button>\n    <button fd-toolbar-item fd-button label="Never" [compact]="true" fdOverflowPriority="never"></button>\n    <button fd-toolbar-item fd-button label="Low" [compact]="true" fdOverflowPriority="low"></button>\n    <button fd-toolbar-item fd-button label="High" [compact]="true" fdOverflowPriority="high"></button>\n    <button fd-toolbar-item fd-button label="Disappear" [compact]="true" fdOverflowPriority="disappear"></button>\n    <button fd-toolbar-item fd-button label="Button Last" [compact]="true"></button>\n</fd-toolbar>\n',E='<fd-toolbar [shouldOverflow]="true">\n    <button fd-toolbar-item fd-button [compact]="true" label="Button"></button>\n    <button fd-toolbar-item fd-button [compact]="true" fdOverflowPriority="always" label="Always"></button>\n    <button fd-toolbar-item fd-button [compact]="true" fdOverflowPriority="never" label="Never"></button>\n    <button fd-toolbar-item fd-button [compact]="true" fdOverflowPriority="low" fdOverflowGroup="1" label="Gr 1 / Low"></button>\n    <button fd-toolbar-item fd-button [compact]="true" fdOverflowPriority="low" fdOverflowGroup="2" label="Gr 2 / Low"></button>\n    <button fd-toolbar-item fd-button [compact]="true" fdOverflowPriority="disappear" fdOverflowGroup="2" label="Gr 2 / Disappear"></button>\n    <button fd-toolbar-item fd-button [compact]="true" fdOverflowPriority="low" fdOverflowGroup="2" label="Gr 2 / Low">" ></button>\n    <button fd-toolbar-item fd-button [compact]="true" fdOverflowPriority="high" fdOverflowGroup="1" label="Gr 1 / High"></button>\n</fd-toolbar>\n',z="<fd-toolbar [size]=\"'compact'\">\n    <label fd-toolbar-label>Text</label>\n</fd-toolbar>\n\n<br />\n\n<fd-toolbar [size]=\"'cozy'\">\n    <label fd-toolbar-label>Text</label>\n</fd-toolbar>\n",F=l("fXoL"),G=l("ddaM"),S=l("kt86"),B=l("X1JU"),A=l("7x1L"),k=l("H7+b"),I=l("+9PV"),M=l("cG1C"),C=l("rp8N"),L=l("1aDH"),K=l("PtXP"),H=l("fYZo"),_=((x=function t(){o(this,t)}).\u0275fac=function(t){return new(t||x)},x.\u0275cmp=F.Kb({type:x,selectors:[["fd-toolbar-type-example"]],decls:19,vars:7,consts:[[3,"fdType"],["fd-toolbar-label",""],[3,"fdType","clearBorder"],[3,"fdType","active"]],template:function(t,o){1&t&&(F.Wb(0,"fd-toolbar",0),F.Wb(1,"label",1),F.Vc(2,"Solid"),F.Vb(),F.Vb(),F.Rb(3,"br"),F.Wb(4,"fd-toolbar",0),F.Wb(5,"label",1),F.Vc(6,"Auto"),F.Vb(),F.Vb(),F.Rb(7,"br"),F.Wb(8,"fd-toolbar",2),F.Wb(9,"label",1),F.Vc(10,"Transparent"),F.Vb(),F.Vb(),F.Rb(11,"br"),F.Wb(12,"fd-toolbar",0),F.Wb(13,"label",1),F.Vc(14,"Info"),F.Vb(),F.Vb(),F.Rb(15,"br"),F.Wb(16,"fd-toolbar",3),F.Wb(17,"label",1),F.Vc(18,"Info active"),F.Vb(),F.Vb()),2&t&&(F.vc("fdType","solid"),F.Db(4),F.vc("fdType","auto"),F.Db(4),F.vc("fdType","transparent")("clearBorder",!0),F.Db(4),F.vc("fdType","info"),F.Db(4),F.vc("fdType","info")("active",!0))},directives:[A.a,k.a],encapsulation:2}),x),J=((V=function t(){o(this,t)}).\u0275fac=function(t){return new(t||V)},V.\u0275cmp=F.Kb({type:V,selectors:[["fd-toolbar-title-example"]],decls:3,vars:1,consts:[[3,"hasTitle"]],template:function(t,o){1&t&&(F.Wb(0,"fd-toolbar",0),F.Wb(1,"h4"),F.Vc(2,"H4 sized text"),F.Vb(),F.Vb()),2&t&&F.vc("hasTitle",!0)},directives:[A.a],encapsulation:2}),V),Y=((h=function t(){o(this,t)}).\u0275fac=function(t){return new(t||h)},h.\u0275cmp=F.Kb({type:h,selectors:[["fd-toolbar-spacer-example"]],decls:13,vars:2,consts:[["fd-toolbar-label",""],[3,"fixed","width"]],template:function(t,o){1&t&&(F.Wb(0,"fd-toolbar"),F.Wb(1,"label",0),F.Vc(2,"text"),F.Vb(),F.Rb(3,"fd-toolbar-spacer"),F.Wb(4,"label",0),F.Vc(5,"text"),F.Vb(),F.Vb(),F.Rb(6,"br"),F.Wb(7,"fd-toolbar"),F.Wb(8,"label",0),F.Vc(9,"text"),F.Vb(),F.Rb(10,"fd-toolbar-spacer",1),F.Wb(11,"label",0),F.Vc(12,"text"),F.Vb(),F.Vb()),2&t&&(F.Db(10),F.vc("fixed",!0)("width","200px"))},directives:[A.a,k.a,I.a],encapsulation:2}),h),Z=((w=function t(){o(this,t)}).\u0275fac=function(t){return new(t||w)},w.\u0275cmp=F.Kb({type:w,selectors:[["fd-toolbar-separator-example"]],decls:6,vars:0,consts:[["fd-toolbar-label",""]],template:function(t,o){1&t&&(F.Wb(0,"fd-toolbar"),F.Wb(1,"label",0),F.Vc(2,"text"),F.Vb(),F.Rb(3,"fd-toolbar-separator"),F.Wb(4,"label",0),F.Vc(5,"text"),F.Vb(),F.Vb())},directives:[A.a,k.a,M.a],encapsulation:2}),w),j=((v=function t(){o(this,t)}).\u0275fac=function(t){return new(t||v)},v.\u0275cmp=F.Kb({type:v,selectors:[["fd-toolbar-overflow-priority-example"]],decls:8,vars:8,consts:[[3,"shouldOverflow"],["fd-toolbar-item","","fd-button","","label","Button First",3,"compact"],["fd-toolbar-item","","fd-button","","label","Always","fdOverflowPriority","always",3,"compact"],["fd-toolbar-item","","fd-button","","label","Never","fdOverflowPriority","never",3,"compact"],["fd-toolbar-item","","fd-button","","label","Low","fdOverflowPriority","low",3,"compact"],["fd-toolbar-item","","fd-button","","label","High","fdOverflowPriority","high",3,"compact"],["fd-toolbar-item","","fd-button","","label","Disappear","fdOverflowPriority","disappear",3,"compact"],["fd-toolbar-item","","fd-button","","label","Button Last",3,"compact"]],template:function(t,o){1&t&&(F.Wb(0,"fd-toolbar",0),F.Rb(1,"button",1),F.Rb(2,"button",2),F.Rb(3,"button",3),F.Rb(4,"button",4),F.Rb(5,"button",5),F.Rb(6,"button",6),F.Rb(7,"button",7),F.Vb()),2&t&&(F.vc("shouldOverflow",!0),F.Db(1),F.vc("compact",!0),F.Db(1),F.vc("compact",!0),F.Db(1),F.vc("compact",!0),F.Db(1),F.vc("compact",!0),F.Db(1),F.vc("compact",!0),F.Db(1),F.vc("compact",!0),F.Db(1),F.vc("compact",!0))},directives:[A.a,C.a,L.a,K.a],encapsulation:2}),v),U=((s=function t(){o(this,t)}).\u0275fac=function(t){return new(t||s)},s.\u0275cmp=F.Kb({type:s,selectors:[["fd-toolbar-overflow-grouping-example"]],decls:10,vars:9,consts:[[3,"shouldOverflow"],["fd-toolbar-item","","fd-button","","label","Button",3,"compact"],["fd-toolbar-item","","fd-button","","fdOverflowPriority","always","label","Always",3,"compact"],["fd-toolbar-item","","fd-button","","fdOverflowPriority","never","label","Never",3,"compact"],["fd-toolbar-item","","fd-button","","fdOverflowPriority","low","fdOverflowGroup","1","label","Gr 1 / Low",3,"compact"],["fd-toolbar-item","","fd-button","","fdOverflowPriority","low","fdOverflowGroup","2","label","Gr 2 / Low",3,"compact"],["fd-toolbar-item","","fd-button","","fdOverflowPriority","disappear","fdOverflowGroup","2","label","Gr 2 / Disappear",3,"compact"],["fd-toolbar-item","","fd-button","","fdOverflowPriority","high","fdOverflowGroup","1","label","Gr 1 / High",3,"compact"]],template:function(t,o){1&t&&(F.Wb(0,"fd-toolbar",0),F.Rb(1,"button",1),F.Rb(2,"button",2),F.Rb(3,"button",3),F.Rb(4,"button",4),F.Rb(5,"button",5),F.Rb(6,"button",6),F.Wb(7,"button",5),F.Vc(8,'" >'),F.Vb(),F.Rb(9,"button",7),F.Vb()),2&t&&(F.vc("shouldOverflow",!0),F.Db(1),F.vc("compact",!0),F.Db(1),F.vc("compact",!0),F.Db(1),F.vc("compact",!0),F.Db(1),F.vc("compact",!0),F.Db(1),F.vc("compact",!0),F.Db(1),F.vc("compact",!0),F.Db(1),F.vc("compact",!0),F.Db(2),F.vc("compact",!0))},directives:[A.a,C.a,L.a,K.a,H.a],encapsulation:2}),s),X=((m=function t(){o(this,t)}).\u0275fac=function(t){return new(t||m)},m.\u0275cmp=F.Kb({type:m,selectors:[["fd-toolbar-size-example"]],decls:7,vars:2,consts:[[3,"size"],["fd-toolbar-label",""]],template:function(t,o){1&t&&(F.Wb(0,"fd-toolbar",0),F.Wb(1,"label",1),F.Vc(2,"Text"),F.Vb(),F.Vb(),F.Rb(3,"br"),F.Wb(4,"fd-toolbar",0),F.Wb(5,"label",1),F.Vc(6,"Text"),F.Vb(),F.Vb()),2&t&&(F.vc("size","compact"),F.Db(4),F.vc("size","cozy"))},directives:[A.a,k.a],encapsulation:2}),m),q=l("5HkS"),Q=l("Hxo2"),$=l("GKNN"),tt=l("PzlP"),ot=l("03Ze"),et=l("ofXK"),at=l("YIcY"),lt=l("2xHS"),bt=l("4hEO"),rt=l("RDwP"),nt=l("ZN1x"),ct=l("zGT1"),it=l("Dtj0"),dt=l("L8qV"),ft=l("Y0uB"),pt=l("O0gx"),ut=l("icNb"),mt=l("8i3P");function st(t,o){if(1&t&&(F.Wb(0,"fd-option",18),F.Vc(1),F.Vb()),2&t){var e=o.$implicit;F.vc("value",e),F.Db(1),F.Wc(e)}}var vt,wt,ht,Vt,xt=function(){return["Apple","Pineapple","Tomato","Strawberry"]},yt=((wt=function t(){o(this,t)}).\u0275fac=function(t){return new(t||wt)},wt.\u0275cmp=F.Kb({type:wt,selectors:[["fd-toolbar-overflow-example"]],features:[F.Cb([{provide:$.b,useClass:$.e},{provide:$.a,useValue:$.c}])],decls:34,vars:26,consts:[[3,"shouldOverflow"],["fd-toolbar-item","","fd-button","","label","Button",3,"compact"],["fd-toolbar-item","",3,"compact"],["fd-toolbar-item","","placeholder","Select an option",3,"compact","closeOnOutsideClick"],[3,"value",4,"ngFor","ngForOf"],["fd-toolbar-item","","label","Option 1",3,"tristate"],["fd-menu-item",""],["fd-menu-interactive",""],["fd-menu-title",""],["fd-toolbar-item","","fd-toolbar-label","","fd-form-label","","for","input-1"],["fd-toolbar-item","","fd-form-control","","type","text","id","input-1","placeholder","Field placeholder text",2,"max-width","200px",3,"compact"],["fd-toolbar-item","","fd-button","","fd-toolbar-overflow-button","","fd-toolbar-overflow-button-menu","","label","Button",3,"fdMenu","compact"],["fd-toolbar-item",""],["fd-button","","label","Left",3,"compact"],["fd-button","","label","Middle",3,"compact"],["fd-button","","label","Right",3,"compact"],["fd-toolbar-item","","fd-button","","fd-toolbar-overflow-button","","label","Button",3,"compact"],["fd-toolbar-item","",3,"fixed","width"],[3,"value"]],template:function(t,o){1&t&&(F.Wb(0,"fd-toolbar",0),F.Rb(1,"button",1),F.Rb(2,"button",1),F.Rb(3,"button",1),F.Rb(4,"fd-datetime-picker",2),F.Wb(5,"fd-select",3),F.Tc(6,st,2,2,"fd-option",4),F.Vb(),F.Rb(7,"button",1),F.Rb(8,"fd-checkbox",5),F.Rb(9,"button",1),F.Wb(10,"fd-split-button",2),F.Wb(11,"fd-menu"),F.Wb(12,"li",6),F.Wb(13,"div",7),F.Wb(14,"span",8),F.Vc(15,"Option 1"),F.Vb(),F.Vb(),F.Vb(),F.Wb(16,"li",6),F.Wb(17,"div",7),F.Wb(18,"span",8),F.Vc(19,"Option 2"),F.Vb(),F.Vb(),F.Vb(),F.Vb(),F.Vb(),F.Wb(20,"label",9),F.Vc(21,"Default Input"),F.Vb(),F.Rb(22,"input",10),F.Rb(23,"button",11),F.Wb(24,"fd-segmented-button",12),F.Rb(25,"button",13),F.Rb(26,"button",14),F.Rb(27,"button",15),F.Vb(),F.Rb(28,"button",16),F.Rb(29,"button",16),F.Rb(30,"fd-toolbar-spacer",17),F.Rb(31,"button",16),F.Rb(32,"button",16),F.Rb(33,"button",16),F.Vb()),2&t&&(F.vc("shouldOverflow",!0),F.Db(1),F.vc("compact",!0),F.Db(1),F.vc("compact",!0),F.Db(1),F.vc("compact",!0),F.Db(1),F.vc("compact",!0),F.Db(1),F.vc("compact",!0)("closeOnOutsideClick",!1),F.Db(1),F.vc("ngForOf",F.zc(25,xt)),F.Db(1),F.vc("compact",!0),F.Db(1),F.vc("tristate",!0),F.Db(1),F.vc("compact",!0),F.Db(1),F.vc("compact",!0),F.Db(12),F.vc("compact",!0),F.Db(1),F.vc("fdMenu",!0)("compact",!0),F.Db(2),F.vc("compact",!0),F.Db(1),F.vc("compact",!0),F.Db(1),F.vc("compact",!0),F.Db(1),F.vc("compact",!0),F.Db(1),F.vc("compact",!0),F.Db(1),F.vc("fixed",!0)("width","200px"),F.Db(1),F.vc("compact",!0),F.Db(1),F.vc("compact",!0),F.Db(1),F.vc("compact",!0))},directives:[A.a,C.a,L.a,tt.a,ot.a,et.n,at.a,lt.a,bt.a,rt.a,nt.a,ct.a,k.a,it.a,dt.a,ft.a,pt.a,ut.a,I.a,mt.a],encapsulation:2}),wt),Wt=((vt=function t(){o(this,t),this.toolbarTypeExample=[{language:"html",code:b,fileName:"toolbar-type-example"}],this.toolbarTitleExample=[{language:"html",code:r,fileName:"toolbar-title-example"}],this.toolbarSpacerExample=[{language:"html",code:n,fileName:"toolbar-spacer-example"}],this.toolbarSeparatorExample=[{language:"html",code:c,fileName:"toolbar-separator-example"}],this.toolbarOverflowExample=[{language:"html",code:d,fileName:"toolbar-overflow-example"},{language:"typescript",code:i,fileName:"toolbar-overflow-example",component:"ToolbarOverflowExampleComponent"}],this.toolbarOverflowPriorityExample=[{language:"html",code:f,fileName:"toolbar-overflow-priority-example"}],this.toolbarOverflowGroupingExample=[{language:"html",code:p,fileName:"toolbar-overflow-grouping-example"}],this.toolbarSizeExample=[{language:"html",code:u,fileName:"toolbar-size-example"}]}).\u0275fac=function(t){return new(t||vt)},vt.\u0275cmp=F.Kb({type:vt,selectors:[["fd-docs-toolbar"]],decls:120,vars:8,consts:[["id","types","componentName","toolbar"],[1,"code-snippet"],[3,"exampleFiles"],["id","title","componentName","toolbar"],["id","overflow","componentName","toolbar"],["id","overflow-priority","componentName","toolbar"],["id","overflow-grouping","componentName","toolbar"],["id","size","componentName","toolbar"],["id","spacer","componentName","toolbar"],["id","separator","componentName","toolbar"]],template:function(t,o){1&t&&(F.Wb(0,"fd-docs-section-title",0),F.Vc(1," Toolbar Types "),F.Vb(),F.Wb(2,"description"),F.Vc(3,' The Toolbar component follows the fundamental-styles guidelines for Toolbar. The default type is "solid"; no modifier is required. Use the '),F.Wb(4,"code",1),F.Vc(5,'[fdType]=""'),F.Vb(),F.Vc(6," property to set the toolbar type.\n"),F.Vb(),F.Wb(7,"component-example"),F.Rb(8,"fd-toolbar-type-example"),F.Vb(),F.Rb(9,"code-example",2),F.Rb(10,"separator"),F.Wb(11,"fd-docs-section-title",3),F.Vc(12," Toolbar Title "),F.Vb(),F.Wb(13,"description"),F.Vc(14," When the text inside a Toolbar is set to h4, the "),F.Wb(15,"code",1),F.Vc(16,'[hasTitle]="true"'),F.Vb(),F.Vc(17," must be used as seen in the exmaple below.\n"),F.Vb(),F.Wb(18,"component-example"),F.Rb(19,"fd-toolbar-title-example"),F.Vb(),F.Rb(20,"code-example",2),F.Rb(21,"separator"),F.Wb(22,"fd-docs-section-title",4),F.Vc(23," Toolbar Overflow\n"),F.Vb(),F.Wb(24,"description"),F.Vc(25,' If there isn\u2019t enough room in a Toolbar, the [shouldOverflow]="true" can be used to move buttons to an overflow area. A popover button will be created which will contain all the items in the overflow. Make sure to include the '),F.Wb(26,"code",1),F.Vc(27,"fd-toolbar-item "),F.Vb(),F.Vc(28,"directive in each Toolbar. "),F.Wb(29,"code",1),F.Vc(30,"fd-toolbar-overflow-button"),F.Vb(),F.Vc(31," for button and "),F.Wb(32,"code",1),F.Vc(33,"fd-toolbar-overflow-button-menu"),F.Vb(),F.Vc(34," for menu button in each Toolbar.\n"),F.Vb(),F.Wb(35,"component-example"),F.Rb(36,"fd-toolbar-overflow-example"),F.Vb(),F.Rb(37,"code-example",2),F.Rb(38,"separator"),F.Wb(39,"fd-docs-section-title",5),F.Vc(40," Toolbar Overflow Priority\n"),F.Vb(),F.Wb(41,"description"),F.Vc(42,' Individual child elements can be "prioritized" for the overflow behavior using the '),F.Wb(43,"code",1),F.Vc(44,"fdOverflowPriority"),F.Vb(),F.Vc(45," attribute directive. The values for prioritization are as follows: "),F.Wb(46,"ul"),F.Wb(47,"li"),F.Wb(48,"code",1),F.Vc(49,"always"),F.Vb(),F.Vc(50," - This element will always be positioned in the overflow menu."),F.Vb(),F.Wb(51,"li"),F.Wb(52,"code",1),F.Vc(53,"never"),F.Vb(),F.Vc(54," - This element will never be added to the overflow. It will always be visible in the toolbar."),F.Vb(),F.Wb(55,"li"),F.Wb(56,"code",1),F.Vc(57,"low"),F.Vb(),F.Vc(58," - The element has low priority and will be consider first for moving to overflow menu."),F.Vb(),F.Wb(59,"li"),F.Wb(60,"code",1),F.Vc(61,"high"),F.Vb(),F.Vc(62," - This element has high priority and will be considered last for moving to overflow menu."),F.Vb(),F.Wb(63,"li"),F.Wb(64,"code",1),F.Vc(65,"disappear"),F.Vb(),F.Vc(66," - This element is not important and will be removed from the toolbar, and will not be added to the overflow menu."),F.Vb(),F.Vb(),F.Vb(),F.Wb(67,"component-example"),F.Rb(68,"fd-toolbar-overflow-priority-example"),F.Vb(),F.Rb(69,"code-example",2),F.Rb(70,"separator"),F.Wb(71,"fd-docs-section-title",6),F.Vc(72," Toolbar Overflow Grouping\n"),F.Vb(),F.Wb(73,"description"),F.Vc(74,' Child elements can be grouped so that they can "overflow" together. Setting the attribute directive '),F.Wb(75,"code",1),F.Vc(76,"fdOverflowGroup"),F.Vb(),F.Vc(77," to the same number will allow child elements to be grouped. Child elements which are grouped, will enter (or leave) the overflow menu together. Child elements grouped in this manner cannot have the "),F.Wb(78,"code",1),F.Vc(79,"fdOverflowPriority"),F.Vb(),F.Vc(80," values of "),F.Wb(81,"code",1),F.Vc(82,"always"),F.Vb(),F.Vc(83," or "),F.Wb(84,"code",1),F.Vc(85,"never"),F.Vb(),F.Vc(86,". When the value of the property is 0, the element does not belong to any group.\n"),F.Vb(),F.Wb(87,"component-example"),F.Rb(88,"fd-toolbar-overflow-grouping-example"),F.Vb(),F.Rb(89,"code-example",2),F.Rb(90,"separator"),F.Wb(91,"fd-docs-section-title",7),F.Vc(92," Toolbar Size\n"),F.Vb(),F.Wb(93,"description"),F.Vc(94," The Toolbar size can be set to either compact(default) or cozy. T\n"),F.Vb(),F.Wb(95,"component-example"),F.Rb(96,"fd-toolbar-size-example"),F.Vb(),F.Rb(97,"code-example",2),F.Rb(98,"separator"),F.Wb(99,"fd-docs-section-title",8),F.Vc(100," Toolbar Spacer "),F.Vb(),F.Wb(101,"description"),F.Vc(102," Spacers can be used to fill any remaining space either automatically or manually within a toolbar. A Spacer has 2 modes: "),F.Wb(103,"code",1),F.Vc(104,"auto (default) which takes remaining space"),F.Vb(),F.Vc(105," and "),F.Wb(106,"code",1),F.Vc(107,'fixed which has to be set: [fixed]="true" width="200px"'),F.Vb(),F.Vb(),F.Wb(108,"component-example"),F.Rb(109,"fd-toolbar-spacer-example"),F.Vb(),F.Rb(110,"code-example",2),F.Rb(111,"separator"),F.Wb(112,"fd-docs-section-title",9),F.Vc(113," Toolbar Separator\n"),F.Vb(),F.Wb(114,"description"),F.Vc(115," Separators should be used to visually separate items from each other.\n"),F.Vb(),F.Wb(116,"component-example"),F.Rb(117,"fd-toolbar-separator-example"),F.Vb(),F.Rb(118,"code-example",2),F.Rb(119,"separator")),2&t&&(F.Db(9),F.vc("exampleFiles",o.toolbarTypeExample),F.Db(11),F.vc("exampleFiles",o.toolbarTitleExample),F.Db(17),F.vc("exampleFiles",o.toolbarOverflowExample),F.Db(32),F.vc("exampleFiles",o.toolbarOverflowPriorityExample),F.Db(20),F.vc("exampleFiles",o.toolbarOverflowGroupingExample),F.Db(8),F.vc("exampleFiles",o.toolbarSizeExample),F.Db(13),F.vc("exampleFiles",o.toolbarSpacerExample),F.Db(8),F.vc("exampleFiles",o.toolbarSeparatorExample))},directives:[G.a,S.a,B.a,_,q.a,Q.a,J,yt,j,U,X,Y,Z],styles:[""]}),vt),Tt=l("dor/"),gt=l("RJTZ"),Ot=l("Kpas"),Rt=((ht=function(){function e(){o(this,e)}var a,l,b;return a=e,(l=[{key:"ngOnInit",value:function(){}}])&&t(a.prototype,l),b&&t(a,b),e}()).\u0275fac=function(t){return new(t||ht)},ht.\u0275cmp=F.Kb({type:ht,selectors:[["fd-toolbar-header"]],decls:7,vars:0,consts:[["module","ToolbarModule","subPackage","toolbar"]],template:function(t,o){1&t&&(F.Wb(0,"header"),F.Vc(1,"Toolbar"),F.Vb(),F.Wb(2,"description"),F.Vc(3," The Toolbar enables the user to change the UI or trigger an action. For example, the toolbar allows the user to change views, manipulate data or objects, navigate to another page, perform generic actions, and so on. It is most commonly used to display buttons, labels, selects and various other input controls.\n"),F.Vb(),F.Rb(4,"import",0),F.Rb(5,"fd-header-tabs"),F.Rb(6,"router-outlet"))},directives:[Tt.a,S.a,gt.a,Ot.a,y.h],styles:[""]}),ht),Dt=l("jzzn"),Pt=l("PzQJ"),Nt=l("kR/j"),Et=l("TClZ"),zt=l("7zrd"),Ft=l("sYXb"),Gt=l("0sLb"),St=l("0IYM"),Bt=l("Zq6K"),At=l("NZOU"),kt=l("8lYJ"),It=[{path:"",component:Rt,children:[{path:"",component:Wt},{path:"api",component:Dt.a,data:{content:Pt.a.toolbar}}]}],Mt=((Vt=function t(){o(this,t)}).\u0275fac=function(t){return new(t||Vt)},Vt.\u0275mod=F.Ob({type:Vt}),Vt.\u0275inj=F.Nb({imports:[[y.g.forChild(It),W.a,Nt.b,Et.c,zt.a,Ft.a,Gt.e,St.c,Bt.b,At.h,$.f,kt.b],y.g]}),Vt)}}])}();