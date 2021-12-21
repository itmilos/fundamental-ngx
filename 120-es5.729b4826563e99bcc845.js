!function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{Yo6X:function(n,i,a){"use strict";a.r(i),a.d(i,"PlatformSwitchDocsModule",function(){return ce});var c={};a.r(c),a.d(c,"default",function(){return W});var o={};a.r(o),a.d(o,"default",function(){return L});var l={};a.r(l),a.d(l,"default",function(){return R});var s={};a.r(s),a.d(s,"default",function(){return k});var r={};a.r(r),a.d(r,"default",function(){return N});var m={};a.r(m),a.d(m,"default",function(){return j});var d={};a.r(d),a.d(d,"default",function(){return z});var f={};a.r(f),a.d(f,"default",function(){return E});var p={};a.r(p),a.d(p,"default",function(){return G});var h,b,w,u,g,S,C,v,x=a("tyNb"),V=a("IywY"),y=a("jzzn"),D=a("t9W5"),F=a("G6Ao"),W='<fdp-form-group>\n    <fdp-form-field id="default-switch" label="Default Switch" rank="1">\n        <fdp-switch\n            name="default-switch"\n            ariaLabel="Default Switch"\n            ariaLabelledby="switch-disabled-label">\n        </fdp-switch>\n    </fdp-form-field>\n\n    <fdp-form-field id="default-compact-switch" label="Default Compact Switch" rank="1">\n        <fdp-switch\n            name="default-compact-switch"\n            ariaLabel="Default Compact Switch"\n            ariaLabelledby="switch-disabled-label"\n            contentDensity="compact">\n        </fdp-switch>\n    </fdp-form-field>\n</fdp-form-group>\n',L='<fdp-form-group [formGroup]="customForm">\n    <fdp-form-field id="switch-disabled" label="Default disabled Switch" rank="1">\n        <fdp-switch\n            name="switch-disabled"\n            ariaLabel="Switch disabled"\n            ariaLabelledby="switch-disabled-label"\n            contentDensity="cozy"\n            [semantic]="false"\n            [disabled]="true">\n        </fdp-switch>\n    </fdp-form-field>\n\n    <fdp-form-field id="form-switch-disabled" label="Form Default disabled Switch" rank="1">\n        <fdp-switch\n            name="form-switch-disabled"\n            ariaLabel="Form Switch disabled"\n            ariaLabelledby="form-switch-disabled-label"\n            formControlName="fieldDisable">\n        </fdp-switch>\n    </fdp-form-field>\n</fdp-form-group>\n',R="import { Component } from '@angular/core';\nimport { FormControl, FormGroup } from '@angular/forms';\n\n@Component({\n    selector: 'fdp-disabled-switch-example',\n    templateUrl: './disabled-switch-example.component.html'\n})\nexport class DisabledSwitchExampleComponent {\n    customForm = new FormGroup({\n        fieldDisable: new FormControl({ value: true, disabled: true })\n    });\n}\n",k='<fdp-form-group>\n    <fdp-form-field id="semantic-switch" label="Default Semantic Switch" rank="1">\n        <fdp-switch\n            name="semantic-switch"\n            ariaLabel="Semantic Switch"\n            ariaLabelledby="semantic-switch-label"\n            [semantic]="true"\n            (switchChange)="onSwitchChange($event)">\n        </fdp-switch>\n    </fdp-form-field>\n\n    <fdp-form-field id="semantic-switch-compact" label="Default Semantic Compact Switch" rank="1">\n        <fdp-switch\n            name="semantic-switch-compact"\n            ariaLabel="Semantic Switch Compact"\n            ariaLabelledby="semantic-switch-compact-label"\n            contentDensity="compact"\n            [semantic]="true"\n            [(ngModel)]="switched"\n            (switchChange)="onSwitchChange($event)">\n        </fdp-switch>\n    </fdp-form-field>\n</fdp-form-group>\n',N="import { Component } from '@angular/core';\n\nimport { SwitchChangeEvent } from '@fundamental-ngx/platform/form';\n\n@Component({\n    selector: 'fdp-semantic-switch-example',\n    templateUrl: 'semantic-switch-example.component.html'\n})\nexport class SemanticSwitchExampleComponent {\n    switched = true;\n\n    onSwitchChange(value: SwitchChangeEvent): void {\n    }\n}\n",j='<fdp-form-group [formGroup]="customForm">\n    <fdp-form-field id="switch1" label="Form Switch 1" rank="4" required="true">\n        <fdp-switch\n            name="switch-1"\n            ariaLabel="switch-label"\n            ariaLabelledby="switch-label"\n            contentDensity="cozy"\n            [semantic]="false"\n            formControlName="switch1">\n        </fdp-switch>\n    </fdp-form-field>\n\n    <fdp-form-field id="switch2" label="Form Switch 2" rank="4">\n        <fdp-switch\n            name="switch-2"\n            ariaLabel="Switch"\n            ariaLabelledby="switch-label"\n            contentDensity="compact"\n            [semantic]="true"\n            formControlName="switch2">\n        </fdp-switch>\n    </fdp-form-field>\n\n    <fdp-form-field id="switch3" label="Form Switch 3" rank="4">\n        <fdp-switch\n            name="switch-3"\n            ariaLabel="Switch"\n            ariaLabelledby="switch-label"\n            contentDensity="compact"\n            [semantic]="false"\n            formControlName="switch3">\n        </fdp-switch>\n    </fdp-form-field>\n</fdp-form-group>\n\n<div style="padding-left: 2rem;">form value: {{ customForm.getRawValue() | json }}</div>\n',z="import { Component } from '@angular/core';\nimport { FormControl, FormGroup } from '@angular/forms';\n\n@Component({\n    selector: 'fdp-switch-forms-example',\n    templateUrl: './switch-forms-example.component.html'\n})\nexport class SwitchFormsExampleComponent {\n    customForm = new FormGroup({\n        switch1: new FormControl(false),\n        switch2: new FormControl(true),\n        switch3: new FormControl(false)\n    });\n}\n",E='<fdp-form-group [object]="model" #fg>\n    <fdp-form-field #ff id="switch" label="Switch with Config" rank="4">\n        <fdp-switch name="switch" [formControl]="ff.formControl"></fdp-switch>\n    </fdp-form-field>\n</fdp-form-group>\n\n<div style="padding-left: 2rem;">form value: {{ fg.formGroup.getRawValue() | json }}</div>\n',G="import { Component } from '@angular/core';\n\nimport { SwitchConfig } from '@fundamental-ngx/platform/form';\n\nexport const switchConfigFactory = SwitchConfig.createProviderFactory({\n    contentDensity: 'compact'\n});\n\nexport const customSwitchConfigProvider = {\n    provide: SwitchConfig,\n    useFactory: switchConfigFactory\n};\n\n@Component({\n    selector: 'fdp-switch-config-example',\n    templateUrl: './switch-config-example.component.html',\n    providers: [customSwitchConfigProvider]\n})\nexport class SwitchConfigExampleComponent {\n    model: { switch: boolean } = {\n        switch: true\n    };\n}\n",P=a("fXoL"),K=a("ddaM"),M=a("kt86"),q=a("X1JU"),U=a("vnx5"),X=a("ha2x"),H=a("202n"),J=((h=function e(){t(this,e)}).\u0275fac=function(e){return new(e||h)},h.\u0275cmp=P.Kb({type:h,selectors:[["fdp-switch-sizes-example"]],decls:5,vars:0,consts:[["id","default-switch","label","Default Switch","rank","1"],["name","default-switch","ariaLabel","Default Switch","ariaLabelledby","switch-disabled-label"],["id","default-compact-switch","label","Default Compact Switch","rank","1"],["name","default-compact-switch","ariaLabel","Default Compact Switch","ariaLabelledby","switch-disabled-label","contentDensity","compact"]],template:function(e,t){1&e&&(P.Wb(0,"fdp-form-group"),P.Wb(1,"fdp-form-field",0),P.Rb(2,"fdp-switch",1),P.Vb(),P.Wb(3,"fdp-form-field",2),P.Rb(4,"fdp-switch",3),P.Vb(),P.Vb())},directives:[U.a,X.a,H.a],encapsulation:2}),h),T=a("5HkS"),I=a("Hxo2"),A=a("3Pt+"),O=((w=function e(){t(this,e),this.customForm=new A.i({fieldDisable:new A.f({value:!0,disabled:!0})})}).\u0275fac=function(e){return new(e||w)},w.\u0275cmp=P.Kb({type:w,selectors:[["fdp-disabled-switch-example"]],decls:5,vars:3,consts:[[3,"formGroup"],["id","switch-disabled","label","Default disabled Switch","rank","1"],["name","switch-disabled","ariaLabel","Switch disabled","ariaLabelledby","switch-disabled-label","contentDensity","cozy",3,"semantic","disabled"],["id","form-switch-disabled","label","Form Default disabled Switch","rank","1"],["name","form-switch-disabled","ariaLabel","Form Switch disabled","ariaLabelledby","form-switch-disabled-label","formControlName","fieldDisable"]],template:function(e,t){1&e&&(P.Wb(0,"fdp-form-group",0),P.Wb(1,"fdp-form-field",1),P.Rb(2,"fdp-switch",2),P.Vb(),P.Wb(3,"fdp-form-field",3),P.Rb(4,"fdp-switch",4),P.Vb(),P.Vb()),2&e&&(P.vc("formGroup",t.customForm),P.Db(2),P.vc("semantic",!1)("disabled",!0))},directives:[U.a,A.r,A.j,X.a,H.a,A.q,A.h],encapsulation:2}),w),Y=((b=function(){function n(){t(this,n),this.switched=!0}var i,a,c;return i=n,(a=[{key:"onSwitchChange",value:function(e){}}])&&e(i.prototype,a),c&&e(i,c),n}()).\u0275fac=function(e){return new(e||b)},b.\u0275cmp=P.Kb({type:b,selectors:[["fdp-semantic-switch-example"]],decls:5,vars:3,consts:[["id","semantic-switch","label","Default Semantic Switch","rank","1"],["name","semantic-switch","ariaLabel","Semantic Switch","ariaLabelledby","semantic-switch-label",3,"semantic","switchChange"],["id","semantic-switch-compact","label","Default Semantic Compact Switch","rank","1"],["name","semantic-switch-compact","ariaLabel","Semantic Switch Compact","ariaLabelledby","semantic-switch-compact-label","contentDensity","compact",3,"semantic","ngModel","ngModelChange","switchChange"]],template:function(e,t){1&e&&(P.Wb(0,"fdp-form-group"),P.Wb(1,"fdp-form-field",0),P.Wb(2,"fdp-switch",1),P.jc("switchChange",function(e){return t.onSwitchChange(e)}),P.Vb(),P.Vb(),P.Wb(3,"fdp-form-field",2),P.Wb(4,"fdp-switch",3),P.jc("ngModelChange",function(e){return t.switched=e})("switchChange",function(e){return t.onSwitchChange(e)}),P.Vb(),P.Vb(),P.Vb()),2&e&&(P.Db(2),P.vc("semantic",!0),P.Db(2),P.vc("semantic",!0)("ngModel",t.switched))},directives:[U.a,X.a,H.a,A.q,A.t],encapsulation:2}),b),$=a("ofXK"),Z=((u=function e(){t(this,e),this.customForm=new A.i({switch1:new A.f(!1),switch2:new A.f(!0),switch3:new A.f(!1)})}).\u0275fac=function(e){return new(e||u)},u.\u0275cmp=P.Kb({type:u,selectors:[["fdp-switch-forms-example"]],decls:10,vars:7,consts:[[3,"formGroup"],["id","switch1","label","Form Switch 1","rank","4","required","true"],["name","switch-1","ariaLabel","switch-label","ariaLabelledby","switch-label","contentDensity","cozy","formControlName","switch1",3,"semantic"],["id","switch2","label","Form Switch 2","rank","4"],["name","switch-2","ariaLabel","Switch","ariaLabelledby","switch-label","contentDensity","compact","formControlName","switch2",3,"semantic"],["id","switch3","label","Form Switch 3","rank","4"],["name","switch-3","ariaLabel","Switch","ariaLabelledby","switch-label","contentDensity","compact","formControlName","switch3",3,"semantic"],[2,"padding-left","2rem"]],template:function(e,t){1&e&&(P.Wb(0,"fdp-form-group",0),P.Wb(1,"fdp-form-field",1),P.Rb(2,"fdp-switch",2),P.Vb(),P.Wb(3,"fdp-form-field",3),P.Rb(4,"fdp-switch",4),P.Vb(),P.Wb(5,"fdp-form-field",5),P.Rb(6,"fdp-switch",6),P.Vb(),P.Vb(),P.Wb(7,"div",7),P.Vc(8),P.oc(9,"json"),P.Vb()),2&e&&(P.vc("formGroup",t.customForm),P.Db(2),P.vc("semantic",!1),P.Db(2),P.vc("semantic",!0),P.Db(2),P.vc("semantic",!1),P.Db(2),P.Xc("form value: ",P.pc(9,5,t.customForm.getRawValue()),""))},directives:[U.a,A.r,A.j,X.a,H.a,A.q,A.h],pipes:[$.h],encapsulation:2}),u),B=F.z.createProviderFactory({contentDensity:"compact"}),Q={provide:F.z,useFactory:B},_=((S=function e(){t(this,e),this.model={switch:!0}}).\u0275fac=function(e){return new(e||S)},S.\u0275cmp=P.Kb({type:S,selectors:[["fdp-switch-config-example"]],features:[P.Cb([Q])],decls:8,vars:5,consts:[[3,"object"],["fg",""],["id","switch","label","Switch with Config","rank","4"],["ff",""],["name","switch",3,"formControl"],[2,"padding-left","2rem"]],template:function(e,t){if(1&e&&(P.Wb(0,"fdp-form-group",0,1),P.Wb(2,"fdp-form-field",2,3),P.Rb(4,"fdp-switch",4),P.Vb(),P.Vb(),P.Wb(5,"div",5),P.Vc(6),P.oc(7,"json"),P.Vb()),2&e){var n=P.Hc(1),i=P.Hc(3);P.vc("object",t.model),P.Db(4),P.vc("formControl",i.formControl),P.Db(2),P.Xc("form value: ",P.pc(7,3,n.formGroup.getRawValue()),"")}},directives:[U.a,X.a,H.a,A.q,A.g],pipes:[$.h],encapsulation:2}),S),ee=((g=function e(){t(this,e),this.switchSize=[{language:"html",code:c,fileName:"switch-sizes-example"}],this.switchDisable=[{language:"html",code:o,fileName:"disabled-switch-example"},{language:"typescript",code:l,fileName:"disabled-switch-example",component:"DisabledSwitchExampleComponent"}],this.switchSemantic=[{language:"html",code:s,fileName:"semantic-switch-example"},{language:"typescript",code:r,fileName:"semantic-switch-example",component:"SemanticSwitchExampleComponent"}],this.switchFormExample=[{language:"html",code:m,fileName:"switch-forms-example"},{language:"typescript",code:d,fileName:"switch-forms-example",component:"SwitchFormsExampleComponent"}],this.switchConfig=[{language:"html",code:f,fileName:"switch-config-example"},{language:"typescript",code:p,fileName:"switch-config-example",component:"SwitchConfigExampleComponent"}]}).\u0275fac=function(e){return new(e||g)},g.\u0275cmp=P.Kb({type:g,selectors:[["app-switch"]],decls:43,vars:5,consts:[["id","sizes","componentName","switch"],[3,"exampleFiles"],["id","disabled","componentName","switch"],["id","semantic-compact","componentName","switch"],["id","with-reactive-form","componentName","switch"],["id","config","componentName","switch"]],template:function(e,t){1&e&&(P.Wb(0,"fd-docs-section-title",0),P.Vc(1,"Default switch with variations"),P.Vb(),P.Rb(2,"description"),P.Wb(3,"component-example"),P.Rb(4,"fdp-switch-sizes-example"),P.Vb(),P.Rb(5,"code-example",1),P.Rb(6,"separator"),P.Wb(7,"fd-docs-section-title",2),P.Vc(8,"Disabled State"),P.Vb(),P.Wb(9,"description"),P.Vc(10,"Switch can be in the disabled state, which prevents the user from interacting with it."),P.Vb(),P.Wb(11,"component-example"),P.Rb(12,"fdp-disabled-switch-example"),P.Vb(),P.Rb(13,"code-example",1),P.Rb(14,"separator"),P.Wb(15,"fd-docs-section-title",3),P.Vc(16,"Semantic and Compact Mode"),P.Vb(),P.Wb(17,"description"),P.Vc(18," It is possible to add semantic mode by passing "),P.Wb(19,"code"),P.Vc(20,'[semantic]="true"'),P.Vb(),P.Vc(21," and compact mode by passing "),P.Wb(22,"code"),P.Vc(23,'[compact]="true"'),P.Vb(),P.Vc(24," to switch component.\n"),P.Vb(),P.Wb(25,"component-example"),P.Rb(26,"fdp-semantic-switch-example"),P.Vb(),P.Rb(27,"code-example",1),P.Rb(28,"separator"),P.Wb(29,"fd-docs-section-title",4),P.Vc(30,"Switch used within FormFieldControl\n"),P.Vb(),P.Wb(31,"description"),P.Vc(32,"It is possible to use the fdp-switch component within Angular Reactive Forms"),P.Vb(),P.Wb(33,"component-example"),P.Rb(34,"fdp-switch-forms-example"),P.Vb(),P.Rb(35,"code-example",1),P.Wb(36,"fd-docs-section-title",5),P.Vc(37,"Switch Config"),P.Vb(),P.Wb(38,"description"),P.Vc(39,"Use Switch Config to override default options"),P.Vb(),P.Wb(40,"component-example"),P.Rb(41,"fdp-switch-config-example"),P.Vb(),P.Rb(42,"code-example",1)),2&e&&(P.Db(5),P.vc("exampleFiles",t.switchSize),P.Db(8),P.vc("exampleFiles",t.switchDisable),P.Db(14),P.vc("exampleFiles",t.switchSemantic),P.Db(8),P.vc("exampleFiles",t.switchFormExample),P.Db(7),P.vc("exampleFiles",t.switchConfig))},directives:[K.a,M.a,q.a,J,T.a,I.a,O,Y,Z,_],encapsulation:2}),g),te=a("dor/"),ne=a("RJTZ"),ie=a("Kpas"),ae=[{path:"",component:(C=function e(){t(this,e)},C.\u0275fac=function(e){return new(e||C)},C.\u0275cmp=P.Kb({type:C,selectors:[["fdp-switch-header"]],decls:15,vars:0,consts:[["routerLink","/core/switch"],["module","PlatformSwitchModule","subPackage","form"]],template:function(e,t){1&e&&(P.Wb(0,"header"),P.Vc(1,"Switch"),P.Vb(),P.Wb(2,"description"),P.Wb(3,"p"),P.Vc(4,"This is an extension of the Switch component present in "),P.Wb(5,"a",0),P.Vc(6,"fundamental-ngx/core"),P.Vb(),P.Vc(7,"."),P.Vb(),P.Wb(8,"h3"),P.Vc(9,"Platform specific enhancements:"),P.Vb(),P.Wb(10,"p"),P.Vc(11,"The Platform Switch component implement the FormFieldControl interface, thus can be used within the FormField component."),P.Vb(),P.Vb(),P.Rb(12,"import",1),P.Rb(13,"fd-header-tabs"),P.Rb(14,"router-outlet"))},directives:[te.a,M.a,x.f,ne.a,ie.a,x.h],encapsulation:2}),C),children:[{path:"",component:ee},{path:"api",component:y.a,data:{content:V.a.switch}}]}],ce=((v=function e(){t(this,e)}).\u0275fac=function(e){return new(e||v)},v.\u0275mod=P.Ob({type:v}),v.\u0275inj=P.Nb({imports:[[x.g.forChild(ae),D.a,F.w,F.b],x.g]}),v)}}])}();