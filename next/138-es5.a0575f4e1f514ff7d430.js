function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _templateObject(){var e=_taggedTemplateLiteral([":\u241fdf2b9a3517093d8eefd3d80f4dcf9bab451cc925\u241f3431486840313958011:Disable animation"]);return _templateObject=function(){return e},e}function _taggedTemplateLiteral(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(window.webpackJsonp=window.webpackJsonp||[]).push([[138],{l7Ok:function(e,t,n){"use strict";n.r(t),n.d(t,"DisableAnimationModule",(function(){return S}));var a,i,o=n("2kYt"),l=n("sEIs"),r=n("SVIu"),s=n("Qq0t"),c=n("EM62"),d=n("OZlg"),m=n("yZWP"),u=n("u8jZ"),p=["header",$localize(_templateObject())],f=((i=function e(){_classCallCheck(this,e),this.disableAnimationExample="import {TUI_IS_CYPRESS} from '@taiga-ui/cdk';\nimport {TUI_ANIMATIONS_DURATION} from '@taiga-ui/core';\n...\n@NgModule({\n    ...\n    providers: [\n        ...\n        {\n            provide: TUI_ANIMATIONS_DURATION,\n            useFactory: () => (inject(TUI_IS_CYPRESS) ? 0 : 300),\n        }\n    ],\n})\nexport class AppModule {}\n"}).\u0275fac=function(e){return new(e||i)},i.\u0275cmp=c["\u0275\u0275defineComponent"]({type:i,selectors:[["disable-animation"]],decls:27,vars:1,consts:[[6,"header"],["tuiLink","","target","_blank","href","https://www.cypress.io/"],[1,"tui-list"],[1,"tui-list__item"],["filename","app.module.ts",3,"code"]],template:function(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"tui-doc-page",0),c["\u0275\u0275i18nAttributes"](1,p),c["\u0275\u0275elementStart"](2,"p"),c["\u0275\u0275text"](3," During integration testing you can face with problem of flaky tests caused by animation. It is especially crucial if you are writing screenshot tests. "),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](4,"p"),c["\u0275\u0275text"](5," For example, you want to make screenshot of dialog content: you click button which opens dialog and make screenshot. Sometimes screenshots can be made too early (before dialog fully opens) and test fails. "),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](6,"p"),c["\u0275\u0275text"](7," To avoid this "),c["\u0275\u0275elementStart"](8,"strong"),c["\u0275\u0275text"](9," we recommend to toggle all animation off while integration test works. "),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](10,"p"),c["\u0275\u0275text"](11," For example, we use "),c["\u0275\u0275elementStart"](12,"a",1),c["\u0275\u0275text"](13,"Cypress"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275text"](14," for screenshot testing of our ui-kit components. "),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](15,"ol",2),c["\u0275\u0275elementStart"](16,"li",3),c["\u0275\u0275text"](17," To detect if app is running under Cypress we use token "),c["\u0275\u0275elementStart"](18,"code"),c["\u0275\u0275text"](19,"TUI_IS_CYPRESS"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275text"](20,". "),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](21,"li",3),c["\u0275\u0275text"](22," To disable animation in ALL Taiga UI components we use token "),c["\u0275\u0275elementStart"](23,"code"),c["\u0275\u0275text"](24,"TUI_ANIMATIONS_DURATION"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275text"](25,". "),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275element"](26,"tui-doc-code",4),c["\u0275\u0275elementEnd"]()),2&e&&(c["\u0275\u0275advance"](26),c["\u0275\u0275property"]("code",t.disableAnimationExample))},directives:[d.a,m.a,u.a],encapsulation:2}),i),S=((a=function e(){_classCallCheck(this,e)}).\u0275mod=c["\u0275\u0275defineNgModule"]({type:a}),a.\u0275inj=c["\u0275\u0275defineInjector"]({factory:function(e){return new(e||a)},imports:[[o.c,r.h,s.TuiLinkModule,l.f.forChild(Object(r.o)(f))]]}),a)}}]);