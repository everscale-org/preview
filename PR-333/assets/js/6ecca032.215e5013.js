"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[942],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},v=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(r),v=a,f=d["".concat(s,".").concat(v)]||d[v]||u[v]||i;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=v;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}v.displayName="MDXCreateElement"},1574:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const i={sidebar_position:1},o="Ever SDK",l={unversionedId:"develop/client-api/ever-sdk",id:"develop/client-api/ever-sdk",title:"Ever SDK",description:"Core Client Library built on the EVER OS GraphQL API for Everscale DApp development",source:"@site/../../src/develop/client-api/ever-sdk.md",sourceDirName:"develop/client-api",slug:"/develop/client-api/ever-sdk",permalink:"/preview/PR-333/develop/client-api/ever-sdk",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/develop/client-api/ever-sdk.md",tags:[],version:"current",lastUpdatedAt:1670335891,formattedLastUpdatedAt:"Dec 6, 2022",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/preview/PR-333/develop/client-api/overview"},next:{title:"GraphQL API",permalink:"/preview/PR-333/client-api/gql-api"}},s={},p=[{value:"Useful links",id:"useful-links",level:2},{value:"What is Core Everscale Client Library",id:"what-is-core-everscale-client-library",level:2},{value:"How to use library",id:"how-to-use-library",level:2},{value:"Full docs",id:"full-docs",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ever-sdk"},"Ever SDK"),(0,a.kt)("p",null,"Core Client Library built on the EVER OS GraphQL API for Everscale DApp development"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Get quick help in our telegram channel:")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://t.me/ever_sdk"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/chat-on%20telegram-9cf.svg",alt:"Channel on Telegram"}))),(0,a.kt)("h2",{id:"useful-links"},"Useful links"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://docs.everos.dev/ever-sdk/quick_start"},"Quick Start (Javascript)")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://docs.everos.dev/ever-sdk/reference/error_codes"},"Error descriptions")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://tonlabs.github.io/ever-sdk-js/"},"JavaScript SDK Types and Methods (API Reference)")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://docs.everos.dev/ever-sdk/reference/types-and-methods/modules"},"Core Types and Methods (API Reference)")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://docs.everos.dev/ever-sdk/guides/installation"},"Guides")),(0,a.kt)("h2",{id:"what-is-core-everscale-client-library"},"What is Core Everscale Client Library"),(0,a.kt)("p",null,"Core Client Library is written in Rust that can be dynamically linked. It provides all heavy-computation components and functions, such as TON Virtual Machine, TON Transaction Executor, ABI-related functions, boc-related functions, crypto functions."),(0,a.kt)("p",null,"The decision to create the Rust library was made after a period of time using pure JavaScript to implement these use cases."),(0,a.kt)("p",null,"We ended up with very slow work of pure JavaScript and decided to move all this to Rust library and link it to Javascript as a compiled binary including a wasm module for browser applications."),(0,a.kt)("p",null,"Also this approach provided an opportunity to easily create bindings for any programming language and platform, thus, to make it possible to develop distributed applications (DApps) for any possible use-cases, such as: mobile DApps, web DApps, server-side DApps, enterprise DApp etc."),(0,a.kt)("p",null,"Client Library exposes all the functionality through a few of exported functions. All interaction with library is performed using JSON-RPC like protocol."),(0,a.kt)("p",null,"Library works over ",(0,a.kt)("a",{parentName:"p",href:"https://docs.everos.dev/ever-platform/reference/graphql-api"},"GraphQL API")," of ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/tonlabs/evernode-ds"},"EVER OS DApp Server"),". So, it can be used to interact directly with ",(0,a.kt)("a",{parentName:"p",href:"https://docs.everos.dev/ever-platform/reference/graphql-api/networks"},"EVER OS Clouds"),"."),(0,a.kt)("h2",{id:"how-to-use-library"},"How to use library"),(0,a.kt)("p",null,"The simplest way is to use library in then Rust applications because of the native Rust library interface. The Rust interface is clear and well documented."),(0,a.kt)("p",null,"But what if you are required to use library in languages others than Rust?"),(0,a.kt)("p",null,"You have some options:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"use library module ",(0,a.kt)("inlineCode",{parentName:"li"},"json_interface"),' which provides access to library functions through JSON-RPC interface. This interface exports several extern "C" functions. So you can build a dynamic or static link library and link it to your application as any other external libraries. The JSON Interface is fully "C" compliant. You can find description in section ',(0,a.kt)("a",{parentName:"li",href:"https://docs.everos.dev/ever-sdk/for-binding-developers/json_interface"},"JSON Interface"),"."),(0,a.kt)("li",{parentName:"ul"},"use bindings already written by EverX and community. Below you can find a list of known bindings."),(0,a.kt)("li",{parentName:"ul"},"write your own binding to chosen language and share it with community.")),(0,a.kt)("p",null,"If you choose using JSON Interface please read this document ",(0,a.kt)("a",{parentName:"p",href:"https://docs.everos.dev/ever-sdk/for-binding-developers/json_interface"},"JSON Interface"),".\nHere you can find directions how to use ",(0,a.kt)("inlineCode",{parentName:"p"},"json_interface")," and write your own binding."),(0,a.kt)("h2",{id:"full-docs"},"Full docs"),(0,a.kt)("p",null,"Full EVER SDK docs are available at ",(0,a.kt)("a",{parentName:"p",href:"https://docs.everos.dev/ever-sdk/"},"https://docs.everos.dev/ever-sdk/")))}u.isMDXComponent=!0}}]);