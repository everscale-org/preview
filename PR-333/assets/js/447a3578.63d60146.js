"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[4877],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>v});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(r),m=o,v=p["".concat(i,".").concat(m)]||p[m]||u[m]||a;return r?n.createElement(v,s(s({ref:t},d),{},{components:r})):n.createElement(v,s({ref:t},d))}));function v(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[p]="string"==typeof e?e:o,s[1]=l;for(var c=2;c<a;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4529:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:9},s="DeBrowser",l={unversionedId:"develop/tools/everdev/command-line-interface/debrowser",id:"develop/tools/everdev/command-line-interface/debrowser",title:"DeBrowser",description:"The ExtraTON DeBot Browser.",source:"@site/../../src/develop/tools/everdev/command-line-interface/debrowser.md",sourceDirName:"develop/tools/everdev/command-line-interface",slug:"/develop/tools/everdev/command-line-interface/debrowser",permalink:"/preview/PR-333/develop/tools/everdev/command-line-interface/debrowser",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/develop/tools/everdev/command-line-interface/debrowser.md",tags:[],version:"current",lastUpdatedAt:1660241980,formattedLastUpdatedAt:"Aug 11, 2022",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Contract Management",permalink:"/preview/PR-333/develop/tools/everdev/command-line-interface/contract-management"},next:{title:"TestSuite4",permalink:"/preview/PR-333/develop/tools/everdev/testsuite4"}},i={},c=[{value:"Version",id:"version",level:2},{value:"Interfaces",id:"interfaces",level:2},{value:"Start",id:"start",level:2},{value:"Stop",id:"stop",level:2}],d={toc:c},p="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"debrowser"},"DeBrowser"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/extraton/debrowser/"},"The ExtraTON DeBot Browser"),"."),(0,o.kt)("h2",{id:"version"},"Version"),(0,o.kt)("p",null,"This command shows the list of available versions."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"everdev debrowser version\n\nAvailable Versions: 1.1.0, 1.2.0, 1.2.1, 1.3.1\n")),(0,o.kt)("h2",{id:"interfaces"},"Interfaces"),(0,o.kt)("p",null,"This command shows the list of implemented interfaces."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"everdev debrowser interfaces\n\nRealised interfaces:\n - Address Input\n - Amount Input\n - Confirm Input\n - Menu\n - Network\n - Number Input\n - QR Code\n - Signing Box Input\n - Terminal\n - User Info\n")),(0,o.kt)("h2",{id:"start"},"Start"),(0,o.kt)("p",null,"This command downloads image and starts DeBrowser container (Docker must be launched)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"everdev debrowser start 1.3.1\n")),(0,o.kt)("h2",{id:"stop"},"Stop"),(0,o.kt)("p",null,"This command stops DeBrowser container."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"everdev debrowser stop\n")))}u.isMDXComponent=!0}}]);