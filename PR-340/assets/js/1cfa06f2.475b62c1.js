"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[6790],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(r),m=o,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(f,c(c({ref:t},p),{},{components:r})):n.createElement(f,c({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6851:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:3},c="Actor model",i={unversionedId:"develop/actor-model",id:"develop/actor-model",title:"Actor model",description:"Let's consider one smart contract.",source:"@site/../../src/develop/actor-model.md",sourceDirName:"develop",slug:"/develop/actor-model",permalink:"/preview/PR-340/develop/actor-model",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/develop/actor-model.md",tags:[],version:"current",lastUpdatedAt:1684349049,formattedLastUpdatedAt:"May 17, 2023",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Account Abstraction",permalink:"/preview/PR-340/develop/account-abstraction"},next:{title:"TVMCell Data structures",permalink:"/preview/PR-340/develop/tvmcell-data-structure"}},l={},s=[],p={toc:s},d="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"actor-model"},"Actor model"),(0,o.kt)("p",null,"Let's consider one smart contract."),(0,o.kt)("p",null,"In Everscale, it is a ",(0,o.kt)("em",{parentName:"p"},"thing")," with properties like address, code, data, balance and others. In other words, it is an object which has some ",(0,o.kt)("em",{parentName:"p"},"storage")," and ",(0,o.kt)("em",{parentName:"p"},"behavior"),". That behavior has the following pattern:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"a contract gets a message"),(0,o.kt)("li",{parentName:"ul"},"contract handles that event by executing its code in TVM"),(0,o.kt)("li",{parentName:"ul"},"contract modifies its own properties (code, data and others)"),(0,o.kt)("li",{parentName:"ul"},"contract optionally generates outgoing messages (which may include deployments of other contracts)"),(0,o.kt)("li",{parentName:"ul"},"contract goes into standby mode until the next event occurs")),(0,o.kt)("p",null,"A combination of these steps is called a ",(0,o.kt)("strong",{parentName:"p"},"transaction"),". It is important that events are handled one by one, thus ",(0,o.kt)("em",{parentName:"p"},"transactions")," are strictly ordered and cannot interrupt each other."),(0,o.kt)("p",null,"This pattern is well known and called ",(0,o.kt)("inlineCode",{parentName:"p"},"Actor Model"),"."))}u.isMDXComponent=!0}}]);