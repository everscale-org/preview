"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[8685],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>v});var i=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,i,o=function(e,t){if(null==e)return{};var r,i,o={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=i.createContext({}),s=function(e){var t=i.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,p=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=s(r),u=o,v=d["".concat(p,".").concat(u)]||d[u]||m[u]||n;return r?i.createElement(v,l(l({ref:t},c),{},{components:r})):i.createElement(v,l({ref:t},c))}));function v(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,l=new Array(n);l[0]=u;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a[d]="string"==typeof e?e:o,l[1]=a;for(var s=2;s<n;s++)l[s]=r[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,r)}u.displayName="MDXCreateElement"},9353:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>n,metadata:()=>a,toc:()=>s});var i=r(7462),o=(r(7294),r(3905));const n={sidebar_position:1,"//":null},l="TON Solidity Compiler",a={unversionedId:"develop/solidity-developing/compiler",id:"develop/solidity-developing/compiler",title:"TON Solidity Compiler",description:"TON Solidity Compiler is the Solidity smart contract compiler port for the Everscale blockchain.",source:"@site/../../src/develop/solidity-developing/compiler.md",sourceDirName:"develop/solidity-developing",slug:"/develop/solidity-developing/compiler",permalink:"/preview/PR-prev/develop/solidity-developing/compiler",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/develop/solidity-developing/compiler.md",tags:[],version:"current",lastUpdatedAt:1666367166,formattedLastUpdatedAt:"Oct 21, 2022",sidebarPosition:1,frontMatter:{sidebar_position:1,"//":null},sidebar:"tutorialSidebar",previous:{title:"Getting started",permalink:"/preview/PR-prev/develop/solidity-developing/getting-started"},next:{title:"Solidity Contracts Examples",permalink:"/preview/PR-prev/develop/solidity-developing/samples"}},p={},s=[{value:"Prerequisites:",id:"prerequisites",level:2},{value:"Ubuntu Linux",id:"ubuntu-linux",level:2},{value:"Windows",id:"windows",level:2}],c={toc:s},d="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,i.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ton-solidity-compiler"},"TON Solidity Compiler"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/tonlabs/TON-Solidity-Compiler"},"TON Solidity Compiler")," is the Solidity smart contract compiler port for the Everscale blockchain. "),(0,o.kt)("p",null,"You can read the TON Solidity API documentation at ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tonlabs/TON-Solidity-Compiler/blob/master/API.md"},"this link"),"."),(0,o.kt)("p",null,"In this section we will tell you how to build and install the Solidity Compiler.",(0,o.kt)("br",{parentName:"p"}),"\n","For more information, see the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tonlabs/TON-Solidity-Compiler"},"appropriate EverX repository.")),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://git-scm.com/downloads"},"GitBash")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://cmake.org/"},"Cmake"))),(0,o.kt)("h2",{id:"ubuntu-linux"},"Ubuntu Linux"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"git clone git@github.com:tonlabs/TON-Solidity-Compiler.git\ncd TON-Solidity-Compiler\nsh ./compiler/scripts/install_deps.sh\nmkdir build\ncd build\ncmake ../compiler/ -DCMAKE_BUILD_TYPE=Release\ncmake --build . -- -j8\n")),(0,o.kt)("p",null,"Make other Everscale toolchain utilities aware of the language runtime library location via an environment variable: specify path to ",(0,o.kt)("inlineCode",{parentName:"p"},"stdlib_sol.tvm"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sh ./compiler/scripts/install_lib_variable.sh\n")),(0,o.kt)("h2",{id:"windows"},"Windows"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"git clone https://github.com/tonlabs/TON-Solidity-Compiler\ncd TON-Solidity-Compiler\ncmake -P compiler\\scripts\\install_deps.cmake\nmkdir build\ncd build\ncmake ..\\compiler\ncmake --build . --config Release -j 8\n")),(0,o.kt)("p",null,"To facilitate work with other Everscale tools add path to ",(0,o.kt)("inlineCode",{parentName:"p"},"stdlib_sol.tvm")," into environment variable ",(0,o.kt)("inlineCode",{parentName:"p"},"TVM_LINKER_LIB_PATH"),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"}," The documentation in Everscale repository is a community effort. Therefore, everyone can contribute with proposals for new topics, suggest new content elements, participate in editing, and provide ideas that will be of great help for network development.\nPlease be informed that our documentation can be ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/everscale-org/docs/issues"},"edited via GitHub"),".",(0,o.kt)("br",{parentName:"p"}),"\n","Also please make sure to consult our rules and rewards policy via ",(0,o.kt)("a",{parentName:"p",href:"https://docs.everscale.network/contribute/hot-streams/documentations"},"this link"),".",(0,o.kt)("br",{parentName:"p"}),"\n","Feel free to join ",(0,o.kt)("a",{parentName:"p",href:"https://t.me/+C2IpQXWZtCwxYzEy"},"Everscale Documentation Development Telegram chat")," and ",(0,o.kt)("a",{parentName:"p",href:"https://t.me/+Vca1Gs6uPzIyNWVi"},"Everscale Developers Onboarding Telegram chat"),"!")))}m.isMDXComponent=!0}}]);