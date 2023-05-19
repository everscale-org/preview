"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[6644],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>v});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=p(r),u=o,v=d["".concat(c,".").concat(u)]||d[u]||m[u]||a;return r?n.createElement(v,l(l({ref:t},s),{},{components:r})):n.createElement(v,l({ref:t},s))}));function v(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},6853:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={title:"C++ Compiler",sidebar_position:0},l="C++",i={unversionedId:"develop/tools/everdev/command-line-interface/cpp",id:"develop/tools/everdev/command-line-interface/cpp",title:"C++ Compiler",description:"Create your first contract",source:"@site/../../src/develop/tools/everdev/command-line-interface/cpp.md",sourceDirName:"develop/tools/everdev/command-line-interface",slug:"/develop/tools/everdev/command-line-interface/cpp",permalink:"/preview/PR-333/develop/tools/everdev/command-line-interface/cpp",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/develop/tools/everdev/command-line-interface/cpp.md",tags:[],version:"current",lastUpdatedAt:1660241980,formattedLastUpdatedAt:"Aug 11, 2022",sidebarPosition:0,frontMatter:{title:"C++ Compiler",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Command Line Interface",permalink:"/preview/PR-333/everdev/command-line-interface"},next:{title:"Solidity compiler",permalink:"/preview/PR-333/develop/tools/everdev/command-line-interface/solidity"}},c={},p=[{value:"Create your first contract",id:"create-your-first-contract",level:2},{value:"Compile",id:"compile",level:2},{value:"Version",id:"version",level:2},{value:"Update",id:"update",level:2},{value:"Set",id:"set",level:2}],s={toc:p},d="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"c"},"C++"),(0,o.kt)("h2",{id:"create-your-first-contract"},"Create your first contract"),(0,o.kt)("p",null,"This command creates a basic C++ contract with comments that you can observe and compile."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"everdev clang create Contract\n")),(0,o.kt)("h2",{id:"compile"},"Compile"),(0,o.kt)("p",null,"This command compiles and links a selected C++ contract. After successful compilation you get .abi.json and .tvc files that you can later ",(0,o.kt)("a",{parentName:"p",href:"https://docs.everos.dev/ever-sdk/guides/work_with_contracts/add_contract_to_your_app"},"use in your DApps to deploy and run contract methods"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"everdev clang compile Contract.cpp\n")),(0,o.kt)("h2",{id:"version"},"Version"),(0,o.kt)("p",null,"This command shows the currently installed C++ compiler version."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"everdev clang version\n")),(0,o.kt)("h2",{id:"update"},"Update"),(0,o.kt)("p",null,"This command updates the compiler to the latest version."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"everdev clang update\n")),(0,o.kt)("p",null,"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"--force")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"-f")," option to force reinstall, if the compiler is already up to date."),(0,o.kt)("h2",{id:"set"},"Set"),(0,o.kt)("p",null,"This command sets the compiler version and downloads it if needed."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"everdev clang set --compiler 7.0.0\n")),(0,o.kt)("p",null,"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"--force")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"-f")," option to force reinstall, if the current version is the same as the requested version."))}m.isMDXComponent=!0}}]);