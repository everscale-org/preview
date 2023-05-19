"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[5170],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=l(n),m=r,h=p["".concat(c,".").concat(m)]||p[m]||u[m]||o;return n?a.createElement(h,s(s({ref:t},d),{},{components:n})):a.createElement(h,s({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9251:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:5},s="Smart Conctracts, ABI and Messages",i={unversionedId:"develop/sc-abi-messages",id:"develop/sc-abi-messages",title:"Smart Conctracts, ABI and Messages",description:"Frontend developers used to build a UI around some machinery called \u201cbackend\u201d, that can be accessed via an API. The common practice in software development is to have some schema definitions, usually built with tool called swagger.",source:"@site/../../src/develop/sc-abi-messages.md",sourceDirName:"develop",slug:"/develop/sc-abi-messages",permalink:"/preview/PR-337/develop/sc-abi-messages",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/develop/sc-abi-messages.md",tags:[],version:"current",lastUpdatedAt:1684349049,formattedLastUpdatedAt:"May 17, 2023",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"TVMCell Data structures",permalink:"/preview/PR-337/develop/tvmcell-data-structure"},next:{title:"Smart Contracts",permalink:"/preview/PR-337/develop/smart-contracts"}},c={},l=[],d={toc:l},p="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"smart-conctracts-abi-and-messages"},"Smart Conctracts, ABI and Messages"),(0,r.kt)("p",null,"Frontend developers used to build a UI around some machinery called \u201cbackend\u201d, that can be accessed via an API. The common practice in software development is to have some schema definitions, usually built with tool called swagger."),(0,r.kt)("p",null,"In blockchain development, the \u201cbackend\u201d thing is called a smart contract. It is usually being built with Solidity language, and also has schema definition called an Abstract Binary Interface, or ABI. In most cases, a frontend developer doesn\u2019t need to bother his mind with understanding the smart-contract code. But it is crucial to understand the ABI to interact with a smart contract."),(0,r.kt)("p",null,"Let\u2019s see how an ABI looks like, and what can we underfstand from it without reading the smart contract itself."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"ABI"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json5"},'{\n  // Major version of ABI standart\n  "ABI version": 2,\n    // Full version of ABI\n    // Can be \u2013 2.0, 2.1, 2.2, 2.3\n  version: "2.3",\n  // Headers, specifying SDK which additional fields to attach to external message\n  // Defined in the contract code, there are:\n  // pragma AbiHeader time;\n  // pragma AbiHeader pubkey;\n  // pragma AbiHeader expire;\n  header: [\n    "time", "pubkey", "expire"\n  ],\n  // Description of callable function signatures\n  // both internal and external messages\n  functions: [\n    {\n      "name": "constructor",\n      "inputs": [],\n      "outputs": []\n    },\n    {\n      "name": "get",\n      "inputs": [],\n      "outputs": [{"name":"value0","type":"uint256"}]\n    },\n    {\n      "name": "getInternal",\n      "inputs": [\n        {"name":"answerId","type":"uint32"}\n      ],\n      "outputs": [\n        {"name":"value0","type":"uint256"}\n      ]\n    },\n    {\n      "name": "set",\n      "inputs": [{"name":"_value","type":"uint256"}],\n      "outputs": []\n    }\n  ],\n  // A description of the events that a contract can create\n  events: [\n    {\n      "name": "VariableChanged",\n      "inputs": [{"name":"new_value","type":"uint256"}],\n      "outputs": []\n    }\n  ],\n  // A list of static variables that must be specified to deploy the contract\n  data: [\n    {"key":1,"name":"owner","type":"address"}\n    // There are also three hidden variables that SDK will set by itself\n    // _pubkey, _timestamp, _constructorFlag\n  ],\n  // a list of all variables, so that you can\n  // download the contract state and decode it\n  fields: [\n    {"name":"_pubkey","type":"uint256"}, // tvm.pubkey()\n    {"name":"_timestamp","type":"uint64"}, // set by SDK\n    {"name":"_constructorFlag","type":"bool"}, // set by SDK\n    {"name":"owner","type":"address"},\n    {"name":"variable","type":"uint256"}\n  ]\n}\n'))),(0,r.kt)("p",null,"An ABI describes how we pack the data into a TOC (Tree Of Cells) - the fundamental internal data structure of Everscale blockchain. We need that to encode the message according to Everscale standard and send it to the blockchain."),(0,r.kt)("p",null,"Any message have a body for the function call. Let's look at an example function from abi:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "set",\n  "inputs": [{"name":"_value","type":"uint256"}],\n  "outputs": []\n}\n')),(0,r.kt)("p",null,"In the Recipes section, we provide snippets for ",(0,r.kt)("inlineCode",{parentName:"p"},"ever-sdk-js"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"surf-keeper-provider")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"everscale-inpage-provider")," libraries, where we use ABI to interact with smart-contracts. It\u2019s important to understand what happens under the hood, so lets summarize: we want to encode the payload, construct the message to some contract and send it over the RPC to a blockhain."),(0,r.kt)("p",null,"Usually you will connect your dApp to existing smart contract system, deployed on-chain by a smart-contract developer. We assume that you have an ABI an address of one or several contracts."),(0,r.kt)("p",null,"In further examples we will learn how to perform common routines."))}u.isMDXComponent=!0}}]);