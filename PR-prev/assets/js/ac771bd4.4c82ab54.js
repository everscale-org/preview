"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[1153],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),p=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},v="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),v=p(r),u=n,m=v["".concat(s,".").concat(u)]||v[u]||d[u]||a;return r?o.createElement(m,l(l({ref:t},c),{},{components:r})):o.createElement(m,l({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[v]="string"==typeof e?e:n,l[1]=i;for(var p=2;p<a;p++)l[p]=r[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},7321:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var o=r(7462),n=(r(7294),r(3905));const a={sidebar_position:0},l="Overview",i={unversionedId:"develop/tools/overview",id:"develop/tools/overview",title:"Overview",description:"Introduction",source:"@site/../../src/develop/tools/overview.md",sourceDirName:"develop/tools",slug:"/develop/tools/overview",permalink:"/preview/PR-prev/develop/tools/overview",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/develop/tools/overview.md",tags:[],version:"current",lastUpdatedAt:1666367166,formattedLastUpdatedAt:"Oct 21, 2022",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Tools",permalink:"/preview/PR-prev/develop/tools"},next:{title:"EverDev",permalink:"/preview/PR-prev/api-tools/everdev"}},s={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Tools",id:"tools",level:2},{value:"Set up Development Environment",id:"set-up-development-environment",level:3},{value:"Interaction with blockchain",id:"interaction-with-blockchain",level:3},{value:"Tools for contract developers:",id:"tools-for-contract-developers",level:3}],c={toc:p},v="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(v,(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"overview"},"Overview"),(0,n.kt)("h2",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,"Before you start developing or integrating anything into Everscale, we would like to tell you about the tools and environment that you will use in your work."),(0,n.kt)("p",null,"First of all, it is worth noting that Everscale is really a decentralized blockchain, not only from a technical point of view, but also from a management side, so the key tools and approaches to development may differ from different teams, technical contributors on the network."),(0,n.kt)("p",null,"At the moment, there are two active companies of technical contributors in Everscale network:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://everx.dev/about"},"EverX")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://broxus.com/"},"Broxus"))),(0,n.kt)("p",null,"And it is their solutions and tools that you will use when developing, while you will have every opportunity to write your own solutions as well, if necessary or desired."),(0,n.kt)("h2",{id:"tools"},"Tools"),(0,n.kt)("h3",{id:"set-up-development-environment"},"Set up Development Environment"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/tonlabs/everdev"},"Everdev"),"(by EverX) - CLI tool and Javascript package that helps set up all the core developer tools and work with Everscale blockchain from a single interface")),(0,n.kt)("h3",{id:"interaction-with-blockchain"},"Interaction with blockchain"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/preview/PR-prev/develop/tools/tonos-cli"},"TONOS CLI"),"(by EverX) - is a multi-platform command line interface for Ever OS. It allows you to work with keys and seed phrases, deploy contracts, call any of their methods, generate and broadcast messages. It supports specific commands for ",(0,n.kt)("a",{parentName:"li",href:"/preview/PR-prev/develop/debots/getting-started"},"DeBot"),", ",(0,n.kt)("a",{parentName:"li",href:"/preview/PR-prev/validate/depools/getting-started"},"DePools")," and Multisig contracts, as well as a number of supplementary functions.")),(0,n.kt)("h3",{id:"tools-for-contract-developers"},"Tools for contract developers:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://github.com/tonlabs/everdev"},"Everdev")," (by EverX) - helps manage keys and networks and local testing blockchain, and compile, deploy and call contracts from CLI or from Javascript with a convenient API. ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://github.com/tonlabs/evernode-se"},"Evernode-SE")," - local blockchain for contract and Dapp testing, exposing GraphQL API. Can be managed from ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/tonlabs/everdev"},"everdev"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/preview/PR-prev/develop/tools/locklift"},"Locklift")," (by Broxus) - development environment, analogous to Hardhat.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/preview/PR-prev/develop/tools/everdev/command-line-interface/testsuite4"},"TestSuite4")," (by EverX) - a framework designed to simplify development and testing of Everscale Contracts. It contains a lightweight blockchain emulator making it easy to develop contracts in a TDD-friendly style.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/preview/PR-prev/develop/tools/ever-bytie"},"Ever.bytie.moe")," (by Broxus) - smart contracts interaction playground."))))}d.isMDXComponent=!0}}]);