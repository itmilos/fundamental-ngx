!function(){function e(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{Qr9g:function(i,a,n){"use strict";n.r(a),n.d(a,"PlatformPanelDocsModule",function(){return oe});var s={};n.r(s),n.d(s,"default",function(){return F});var o={};n.r(o),n.d(o,"default",function(){return j});var l={};n.r(l),n.d(l,"default",function(){return A});var u={};n.r(u),n.d(u,"default",function(){return H});var r={};n.r(r),n.d(r,"default",function(){return T});var c={};n.r(c),n.d(c,"default",function(){return k});var p={};n.r(p),n.d(p,"default",function(){return K});var m={};n.r(m),n.d(m,"default",function(){return I});var d,b,f,g,v,V,x,h,q,C=n("tyNb"),P=n("jzzn"),N=n("IywY"),W=n("t9W5"),D=n("Ccq/"),E=n("bAzV"),y=n("fXoL"),R=n("dor/"),M=n("kt86"),L=n("RJTZ"),S=n("Kpas"),w=((d=function e(){t(this,e)}).\u0275fac=function(e){return new(e||d)},d.\u0275cmp=y.Kb({type:d,selectors:[["app-panel-header"]],decls:24,vars:0,consts:[["routerLink","/core/panel"],["module","PlatformPanelModule","subPackage","panel"]],template:function(e,t){1&e&&(y.Wb(0,"header"),y.Vc(1,"Panel"),y.Vb(),y.Wb(2,"description"),y.Vc(3," This is a wrapper of the Platform component present in "),y.Wb(4,"a",0),y.Vc(5,"@fundamental-ngx/core"),y.Vb(),y.Vc(6,". "),y.Rb(7,"br"),y.Vc(8," It provides component signature for Panel Title and Panel Content directives. Also it includes option to add buttons to panel header (future feature enhancement). "),y.Rb(9,"br"),y.Rb(10,"br"),y.Wb(11,"h3"),y.Vc(12,"Platform specific enhancements:"),y.Vb(),y.Wb(13,"ul"),y.Wb(14,"li"),y.Vc(15," Develop the Panel and sub-elements as components as opposed to core directive approach. "),y.Vb(),y.Wb(16,"li"),y.Vc(17,' Internalize "expand/collapse" button and controller logic. '),y.Vb(),y.Wb(18,"li"),y.Vc(19," Include option to add buttons to panel header (future feature enhancement). "),y.Vb(),y.Vb(),y.Vb(),y.Rb(20,"br"),y.Rb(21,"import",1),y.Rb(22,"fd-header-tabs"),y.Rb(23,"router-outlet"))},directives:[R.a,M.a,C.f,L.a,S.a,C.h],encapsulation:2}),d),F='<fdp-button\n    (click)="expanded = !expanded"\n    [ariaPressed]="expanded"\n    [ariaExpanded]="expanded"\n    ariaControlsId="fdp-panel-content-112"\n    label="Toggle Expand"\n></fdp-button>\n<br />\n<br />\nExpanded value is: {{ expanded }}\n<br />\n<br />\n<br />\n\n<fdp-panel\n    id="panel-id"\n    title="Panel Title"\n    contentDensity="cozy"\n    [expanded]="expanded"\n    [expandable]="true"\n    (panelExpandChange)="onExpandChange($event)"\n>\n    <fdp-panel-content id="fdp-panel-content-112">\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut laoreet lorem. Vestibulum ante ipsum primis\n        in faucibus orci luctus et ultrices posuere cubilia curae; Aenean sagittis aliquam justo et suscipit. Nam\n        molestie, magna at elementum pulvinar, nisi enim venenatis ante, id convallis mi neque nec risus. Cras blandit\n        sagittis augue at facilisis. Mauris egestas nunc nec diam mollis auctor. Vestibulum sed euismod elit, eget\n        accumsan quam. Donec eleifend porttitor viverra. Nunc porttitor dictum erat at molestie. Sed quis velit dolor.\n        Vestibulum et turpis eget enim gravida gravida vitae at massa. Suspendisse facilisis elit ut dolor posuere\n        consectetur. Morbi ac nibh sit amet dolor lobortis tincidunt in ornare erat. Vestibulum tristique euismod enim,\n        ac volutpat odio cursus sit amet.\n    </fdp-panel-content>\n</fdp-panel>\n',j="import { Component } from '@angular/core';\n\nimport { PanelExpandChangeEvent } from '@fundamental-ngx/platform/panel';\n\n@Component({\n    selector: 'fdp-platform-panel-expandable-example',\n    templateUrl: './platform-panel-expandable-example.component.html'\n})\nexport class PlatformPanelExpandableExampleComponent {\n    public expanded = true;\n\n    public onExpandChange(event: PanelExpandChangeEvent): void {\n        this.expanded = event.payload;\n    }\n}\n",A='<fdp-panel id="panel-actions-id" title="Panel Title">\n    <fdp-panel-actions>\n        <fdp-button label="Edit"></fdp-button>\n        <fdp-button label="Delete"></fdp-button>\n    </fdp-panel-actions>\n\n    <fdp-panel-content>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut laoreet lorem. Vestibulum ante ipsum primis\n        in faucibus orci luctus et ultrices posuere cubilia curae; Aenean sagittis aliquam justo et suscipit. Nam\n        molestie, magna at elementum pulvinar, nisi enim venenatis ante, id convallis mi neque nec risus. Cras blandit\n        sagittis augue at facilisis. Mauris egestas nunc nec diam mollis auctor. Vestibulum sed euismod elit, eget\n        accumsan quam. Donec eleifend porttitor viverra. Nunc porttitor dictum erat at molestie. Sed quis velit dolor.\n        Vestibulum et turpis eget enim gravida gravida vitae at massa. Suspendisse facilisis elit ut dolor posuere\n        consectetur. Morbi ac nibh sit amet dolor lobortis tincidunt in ornare erat. Vestibulum tristique euismod enim,\n        ac volutpat odio cursus sit amet.\n    </fdp-panel-content>\n</fdp-panel>\n',H='<fdp-panel id="fixed-panel-id" title="Panel Header" [expandable]="false">\n    <fdp-panel-content>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut laoreet lorem. Vestibulum ante ipsum primis\n        in faucibus orci luctus et ultrices posuere cubilia curae; Aenean sagittis aliquam justo et suscipit. Nam\n        molestie, magna at elementum pulvinar, nisi enim venenatis ante, id convallis mi neque nec risus. Cras blandit\n        sagittis augue at facilisis. Mauris egestas nunc nec diam mollis auctor. Vestibulum sed euismod elit, eget\n        accumsan quam. Donec eleifend porttitor viverra. Nunc porttitor dictum erat at molestie. Sed quis velit dolor.\n        Vestibulum et turpis eget enim gravida gravida vitae at massa. Suspendisse facilisis elit ut dolor posuere\n        consectetur. Morbi ac nibh sit amet dolor lobortis tincidunt in ornare erat. Vestibulum tristique euismod enim,\n        ac volutpat odio cursus sit amet.\n    </fdp-panel-content>\n</fdp-panel>\n',T='<fdp-panel id="fixed-panel-id" title="Panel Header">\n    <fdp-panel-content contentHeight="86px">\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut laoreet lorem. Vestibulum ante ipsum primis\n        in faucibus orci luctus et ultrices posuere cubilia curae; Aenean sagittis aliquam justo et suscipit. Nam\n        molestie, magna at elementum pulvinar, nisi enim venenatis ante, id convallis mi neque nec risus. Cras blandit\n        sagittis augue at facilisis. Mauris egestas nunc nec diam mollis auctor. Vestibulum sed euismod elit, eget\n        accumsan quam. Donec eleifend porttitor viverra. Nunc porttitor dictum erat at molestie. Sed quis velit dolor.\n        Vestibulum et turpis eget enim gravida gravida vitae at massa. Suspendisse facilisis elit ut dolor posuere\n        consectetur. Morbi ac nibh sit amet dolor lobortis tincidunt in ornare erat. Vestibulum tristique euismod enim,\n        ac volutpat odio cursus sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut laoreet\n        lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean sagittis\n        aliquam justo et suscipit. Nam molestie, magna at elementum pulvinar, nisi enim venenatis ante, id convallis mi\n        neque nec risus. Cras blandit sagittis augue at facilisis. Mauris egestas nunc nec diam mollis auctor.\n        Vestibulum sed euismod elit, eget accumsan quam. Donec eleifend porttitor viverra. Nunc porttitor dictum erat at\n        molestie. Sed quis velit dolor. Vestibulum et turpis eget enim gravida gravida vitae at massa. Suspendisse\n        facilisis elit ut dolor posuere consectetur. Morbi ac nibh sit amet dolor lobortis tincidunt in ornare erat.\n        Vestibulum tristique euismod enim, ac volutpat odio cursus sit amet.\n    </fdp-panel-content>\n</fdp-panel>\n',k='<fdp-panel\n    id="compact-panel-id"\n    title="Compact Panel Title"\n    contentDensity="compact"\n    expandLabel="Collapse Panel"\n    collapseLabel="Expand Panel"\n>\n    <fdp-panel-content>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut laoreet lorem. Vestibulum ante ipsum primis\n        in faucibus orci luctus et ultrices posuere cubilia curae; Aenean sagittis aliquam justo et suscipit. Nam\n        molestie, magna at elementum pulvinar, nisi enim venenatis ante, id convallis mi neque nec risus. Cras blandit\n        sagittis augue at facilisis. Mauris egestas nunc nec diam mollis auctor. Vestibulum sed euismod elit, eget\n        accumsan quam. Donec eleifend porttitor viverra. Nunc porttitor dictum erat at molestie. Sed quis velit dolor.\n        Vestibulum et turpis eget enim gravida gravida vitae at massa. Suspendisse facilisis elit ut dolor posuere\n        consectetur. Morbi ac nibh sit amet dolor lobortis tincidunt in ornare erat. Vestibulum tristique euismod enim,\n        ac volutpat odio cursus sit amet.\n    </fdp-panel-content>\n</fdp-panel>\n',K='<fdp-panel title="Panel Header">\n    <fdp-panel-content>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut laoreet lorem. Vestibulum ante ipsum primis\n        in faucibus orci luctus et ultrices posuere cubilia curae; Aenean sagittis aliquam justo et suscipit. Nam\n        molestie, magna at elementum pulvinar, nisi enim venenatis ante, id convallis mi neque nec risus. Cras blandit\n        sagittis augue at facilisis. Mauris egestas nunc nec diam mollis auctor. Vestibulum sed euismod elit, eget\n        accumsan quam. Donec eleifend porttitor viverra. Nunc porttitor dictum erat at molestie. Sed quis velit dolor.\n        Vestibulum et turpis eget enim gravida gravida vitae at massa. Suspendisse facilisis elit ut dolor posuere\n        consectetur. Morbi ac nibh sit amet dolor lobortis tincidunt in ornare erat. Vestibulum tristique euismod enim,\n        ac volutpat odio cursus sit amet.\n    </fdp-panel-content>\n</fdp-panel>\n',I="import { Component } from '@angular/core';\n\nimport { PlatformConfig } from '@fundamental-ngx/platform/shared';\nimport { PanelConfig } from '@fundamental-ngx/platform/panel';\n\nexport const panelConfigFactory = PanelConfig.createProviderFactory({\n    collapseLabel: 'New Default Collapse Label',\n    expandLabel: 'New Default Expand Label'\n});\n\nexport const customPanelConfigProvider = {\n    provide: PanelConfig,\n    useFactory: panelConfigFactory,\n    deps: [PlatformConfig]\n};\n\n@Component({\n    selector: 'fdp-platform-panel-config-example',\n    templateUrl: './platform-panel-config-example.component.html',\n    providers: [customPanelConfigProvider]\n})\nexport class PlatformPanelConfigExampleComponent {}\n",z=n("ddaM"),J=n("X1JU"),U=n("D676"),X=n("0ueD"),O=n("RWaZ"),Y=((b=function(){function i(){t(this,i),this.expanded=!0}var a,n,s;return a=i,(n=[{key:"onExpandChange",value:function(e){this.expanded=e.payload}}])&&e(a.prototype,n),s&&e(a,s),i}()).\u0275fac=function(e){return new(e||b)},b.\u0275cmp=y.Kb({type:b,selectors:[["fdp-platform-panel-expandable-example"]],decls:10,vars:5,consts:[["ariaControlsId","fdp-panel-content-112","label","Toggle Expand",3,"ariaPressed","ariaExpanded","click"],["id","panel-id","title","Panel Title","contentDensity","cozy",3,"expanded","expandable","panelExpandChange"],["id","fdp-panel-content-112"]],template:function(e,t){1&e&&(y.Wb(0,"fdp-button",0),y.jc("click",function(){return t.expanded=!t.expanded}),y.Vb(),y.Rb(1,"br"),y.Rb(2,"br"),y.Vc(3),y.Rb(4,"br"),y.Rb(5,"br"),y.Rb(6,"br"),y.Wb(7,"fdp-panel",1),y.jc("panelExpandChange",function(e){return t.onExpandChange(e)}),y.Wb(8,"fdp-panel-content",2),y.Vc(9," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut laoreet lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean sagittis aliquam justo et suscipit. Nam molestie, magna at elementum pulvinar, nisi enim venenatis ante, id convallis mi neque nec risus. Cras blandit sagittis augue at facilisis. Mauris egestas nunc nec diam mollis auctor. Vestibulum sed euismod elit, eget accumsan quam. Donec eleifend porttitor viverra. Nunc porttitor dictum erat at molestie. Sed quis velit dolor. Vestibulum et turpis eget enim gravida gravida vitae at massa. Suspendisse facilisis elit ut dolor posuere consectetur. Morbi ac nibh sit amet dolor lobortis tincidunt in ornare erat. Vestibulum tristique euismod enim, ac volutpat odio cursus sit amet. "),y.Vb(),y.Vb()),2&e&&(y.vc("ariaPressed",t.expanded)("ariaExpanded",t.expanded),y.Db(3),y.Xc("\nExpanded value is: ",t.expanded,"\n"),y.Db(4),y.vc("expanded",t.expanded)("expandable",!0))},directives:[U.a,X.a,O.a],encapsulation:2}),b),Z=n("5HkS"),B=n("Hxo2"),Q=((v=function e(){t(this,e)}).\u0275fac=function(e){return new(e||v)},v.\u0275cmp=y.Kb({type:v,selectors:[["fdp-panel-fixed-example"]],decls:3,vars:1,consts:[["id","fixed-panel-id","title","Panel Header",3,"expandable"]],template:function(e,t){1&e&&(y.Wb(0,"fdp-panel",0),y.Wb(1,"fdp-panel-content"),y.Vc(2," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut laoreet lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean sagittis aliquam justo et suscipit. Nam molestie, magna at elementum pulvinar, nisi enim venenatis ante, id convallis mi neque nec risus. Cras blandit sagittis augue at facilisis. Mauris egestas nunc nec diam mollis auctor. Vestibulum sed euismod elit, eget accumsan quam. Donec eleifend porttitor viverra. Nunc porttitor dictum erat at molestie. Sed quis velit dolor. Vestibulum et turpis eget enim gravida gravida vitae at massa. Suspendisse facilisis elit ut dolor posuere consectetur. Morbi ac nibh sit amet dolor lobortis tincidunt in ornare erat. Vestibulum tristique euismod enim, ac volutpat odio cursus sit amet. "),y.Vb(),y.Vb()),2&e&&y.vc("expandable",!1)},directives:[X.a,O.a],encapsulation:2}),v),$=((g=function e(){t(this,e)}).\u0275fac=function(e){return new(e||g)},g.\u0275cmp=y.Kb({type:g,selectors:[["fdp-panel-compact-example"]],decls:3,vars:0,consts:[["id","compact-panel-id","title","Compact Panel Title","contentDensity","compact","expandLabel","Collapse Panel","collapseLabel","Expand Panel"]],template:function(e,t){1&e&&(y.Wb(0,"fdp-panel",0),y.Wb(1,"fdp-panel-content"),y.Vc(2," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut laoreet lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean sagittis aliquam justo et suscipit. Nam molestie, magna at elementum pulvinar, nisi enim venenatis ante, id convallis mi neque nec risus. Cras blandit sagittis augue at facilisis. Mauris egestas nunc nec diam mollis auctor. Vestibulum sed euismod elit, eget accumsan quam. Donec eleifend porttitor viverra. Nunc porttitor dictum erat at molestie. Sed quis velit dolor. Vestibulum et turpis eget enim gravida gravida vitae at massa. Suspendisse facilisis elit ut dolor posuere consectetur. Morbi ac nibh sit amet dolor lobortis tincidunt in ornare erat. Vestibulum tristique euismod enim, ac volutpat odio cursus sit amet. "),y.Vb(),y.Vb())},directives:[X.a,O.a],encapsulation:2}),g),G=((f=function e(){t(this,e)}).\u0275fac=function(e){return new(e||f)},f.\u0275cmp=y.Kb({type:f,selectors:[["fdp-panel-fixed-height-example"]],decls:3,vars:0,consts:[["id","fixed-panel-id","title","Panel Header"],["contentHeight","86px"]],template:function(e,t){1&e&&(y.Wb(0,"fdp-panel",0),y.Wb(1,"fdp-panel-content",1),y.Vc(2," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut laoreet lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean sagittis aliquam justo et suscipit. Nam molestie, magna at elementum pulvinar, nisi enim venenatis ante, id convallis mi neque nec risus. Cras blandit sagittis augue at facilisis. Mauris egestas nunc nec diam mollis auctor. Vestibulum sed euismod elit, eget accumsan quam. Donec eleifend porttitor viverra. Nunc porttitor dictum erat at molestie. Sed quis velit dolor. Vestibulum et turpis eget enim gravida gravida vitae at massa. Suspendisse facilisis elit ut dolor posuere consectetur. Morbi ac nibh sit amet dolor lobortis tincidunt in ornare erat. Vestibulum tristique euismod enim, ac volutpat odio cursus sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut laoreet lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean sagittis aliquam justo et suscipit. Nam molestie, magna at elementum pulvinar, nisi enim venenatis ante, id convallis mi neque nec risus. Cras blandit sagittis augue at facilisis. Mauris egestas nunc nec diam mollis auctor. Vestibulum sed euismod elit, eget accumsan quam. Donec eleifend porttitor viverra. Nunc porttitor dictum erat at molestie. Sed quis velit dolor. Vestibulum et turpis eget enim gravida gravida vitae at massa. Suspendisse facilisis elit ut dolor posuere consectetur. Morbi ac nibh sit amet dolor lobortis tincidunt in ornare erat. Vestibulum tristique euismod enim, ac volutpat odio cursus sit amet. "),y.Vb(),y.Vb())},directives:[X.a,O.a],encapsulation:2}),f),_=n("LVY0"),ee=((V=function e(){t(this,e)}).\u0275fac=function(e){return new(e||V)},V.\u0275cmp=y.Kb({type:V,selectors:[["fdp-panel-actions-example"]],decls:6,vars:0,consts:[["id","panel-actions-id","title","Panel Title"],["label","Edit"],["label","Delete"]],template:function(e,t){1&e&&(y.Wb(0,"fdp-panel",0),y.Wb(1,"fdp-panel-actions"),y.Rb(2,"fdp-button",1),y.Rb(3,"fdp-button",2),y.Vb(),y.Wb(4,"fdp-panel-content"),y.Vc(5," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut laoreet lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean sagittis aliquam justo et suscipit. Nam molestie, magna at elementum pulvinar, nisi enim venenatis ante, id convallis mi neque nec risus. Cras blandit sagittis augue at facilisis. Mauris egestas nunc nec diam mollis auctor. Vestibulum sed euismod elit, eget accumsan quam. Donec eleifend porttitor viverra. Nunc porttitor dictum erat at molestie. Sed quis velit dolor. Vestibulum et turpis eget enim gravida gravida vitae at massa. Suspendisse facilisis elit ut dolor posuere consectetur. Morbi ac nibh sit amet dolor lobortis tincidunt in ornare erat. Vestibulum tristique euismod enim, ac volutpat odio cursus sit amet. "),y.Vb(),y.Vb())},directives:[X.a,_.a,U.a,O.a],encapsulation:2}),V),te=n("lRwm"),ie=E.a.createProviderFactory({collapseLabel:"New Default Collapse Label",expandLabel:"New Default Expand Label"}),ae={provide:E.a,useFactory:ie,deps:[te.v]},ne=((x=function e(){t(this,e)}).\u0275fac=function(e){return new(e||x)},x.\u0275cmp=y.Kb({type:x,selectors:[["fdp-platform-panel-config-example"]],features:[y.Cb([ae])],decls:3,vars:0,consts:[["title","Panel Header"]],template:function(e,t){1&e&&(y.Wb(0,"fdp-panel",0),y.Wb(1,"fdp-panel-content"),y.Vc(2," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut laoreet lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean sagittis aliquam justo et suscipit. Nam molestie, magna at elementum pulvinar, nisi enim venenatis ante, id convallis mi neque nec risus. Cras blandit sagittis augue at facilisis. Mauris egestas nunc nec diam mollis auctor. Vestibulum sed euismod elit, eget accumsan quam. Donec eleifend porttitor viverra. Nunc porttitor dictum erat at molestie. Sed quis velit dolor. Vestibulum et turpis eget enim gravida gravida vitae at massa. Suspendisse facilisis elit ut dolor posuere consectetur. Morbi ac nibh sit amet dolor lobortis tincidunt in ornare erat. Vestibulum tristique euismod enim, ac volutpat odio cursus sit amet. "),y.Vb(),y.Vb())},directives:[X.a,O.a],encapsulation:2}),x),se=[{path:"",component:w,children:[{path:"",component:(h=function e(){t(this,e),this.panelExpandable=[{language:"html",code:s,fileName:"platform-panel-expandable-example"},{language:"typescript",code:o,fileName:"platform-panel-expandable-example",component:"PlatformPanelExpandableExampleComponent"}],this.panelActions=[{language:"html",code:l,fileName:"platform-panel-actions-example"}],this.panelFixed=[{language:"html",code:u,fileName:"platform-panel-fixed-example"}],this.panelFixedHeight=[{language:"html",code:r,fileName:"platform-panel-fixed-height-example"}],this.panelCompact=[{language:"html",code:c,fileName:"platform-panel-compact-example"}],this.panelConfig=[{language:"html",code:p,fileName:"platform-panel-config-example"},{language:"typescript",code:m,fileName:"platform-panel-config-example",component:"PlatformPanelConfigExampleComponent"}]},h.\u0275fac=function(e){return new(e||h)},h.\u0275cmp=y.Kb({type:h,selectors:[["app-panel"]],decls:56,vars:6,consts:[["id","expandable","componentName","panel"],[3,"exampleFiles"],["id","fixed","componentName","panel"],["id","compact","componentName","panel"],["id","fixed-height","componentName","panel"],["id","actions","componentName","panel"],["id","config","componentName","panel"]],template:function(e,t){1&e&&(y.Wb(0,"fd-docs-section-title",0),y.Vc(1," Expandable Panel\n"),y.Vb(),y.Wb(2,"description"),y.Vc(3," Expandable panels are much like fixed panels, except their content can be expanded and collapsed.\n"),y.Vb(),y.Wb(4,"component-example"),y.Rb(5,"fdp-platform-panel-expandable-example"),y.Vb(),y.Rb(6,"code-example",1),y.Rb(7,"separator"),y.Wb(8,"fd-docs-section-title",2),y.Vc(9," Fixed Panel\n"),y.Vb(),y.Wb(10,"description"),y.Vc(11," Fixed panels are useful for grouping custom content. To create a fixed panel, add "),y.Wb(12,"code"),y.Vc(13,'[expandable]="false"'),y.Vb(),y.Vc(14," to the Panel.\n"),y.Vb(),y.Wb(15,"component-example"),y.Rb(16,"fdp-panel-fixed-example"),y.Vb(),y.Rb(17,"code-example",1),y.Rb(18,"separator"),y.Wb(19,"fd-docs-section-title",3),y.Vc(20," Compact Panel\n"),y.Vb(),y.Wb(21,"description"),y.Vc(22," For a compact panel, set the "),y.Wb(23,"code"),y.Vc(24,'contentDensity="compact"'),y.Vb(),y.Vc(25,". "),y.Vb(),y.Wb(26,"component-example"),y.Rb(27,"fdp-panel-compact-example"),y.Vb(),y.Rb(28,"code-example",1),y.Rb(29,"separator"),y.Wb(30,"fd-docs-section-title",4),y.Vc(31," Fixed Height Content Panel\n"),y.Vb(),y.Wb(32,"description"),y.Vc(33," It's possible to set height of panel content by "),y.Wb(34,"code"),y.Vc(35,"[contentHeight]"),y.Vb(),y.Vc(36," option. "),y.Vb(),y.Wb(37,"component-example"),y.Rb(38,"fdp-panel-fixed-height-example"),y.Vb(),y.Rb(39,"code-example",1),y.Rb(40,"separator"),y.Wb(41,"fd-docs-section-title",5),y.Vc(42," Panel Actions\n"),y.Vb(),y.Wb(43,"description"),y.Vc(44," Buttons and other action elements with in this tag will be placed in the Panel header toolbar\n"),y.Vb(),y.Wb(45,"component-example"),y.Rb(46,"fdp-panel-actions-example"),y.Vb(),y.Rb(47,"code-example",1),y.Rb(48,"separator"),y.Wb(49,"fd-docs-section-title",6),y.Vc(50," Panel Config\n"),y.Vb(),y.Wb(51,"description"),y.Vc(52," Use Panel Config to override default options\n"),y.Vb(),y.Wb(53,"component-example"),y.Rb(54,"fdp-platform-panel-config-example"),y.Vb(),y.Rb(55,"code-example",1)),2&e&&(y.Db(6),y.vc("exampleFiles",t.panelExpandable),y.Db(11),y.vc("exampleFiles",t.panelFixed),y.Db(11),y.vc("exampleFiles",t.panelCompact),y.Db(11),y.vc("exampleFiles",t.panelFixedHeight),y.Db(8),y.vc("exampleFiles",t.panelActions),y.Db(8),y.vc("exampleFiles",t.panelConfig))},directives:[z.a,M.a,J.a,Y,Z.a,B.a,Q,$,G,ee,ne],encapsulation:2}),h)},{path:"api",component:P.a,data:{content:N.a.panel}}]}],oe=((q=function e(){t(this,e)}).\u0275fac=function(e){return new(e||q)},q.\u0275mod=y.Ob({type:q}),q.\u0275inj=y.Nb({imports:[[C.g.forChild(se),W.a,E.b,D.b],C.g]}),q)}}])}();