"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[1330],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),l=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),h=l(r),p=n,m=h["".concat(c,".").concat(p)]||h[p]||d[p]||o;return r?a.createElement(m,s(s({ref:t},u),{},{components:r})):a.createElement(m,s({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[h]="string"==typeof e?e:n,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},514:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var a=r(7462),n=(r(7294),r(3905));const o={sidebar_position:2},s="Terminology",i={unversionedId:"learn/terminology",id:"learn/terminology",title:"Terminology",description:"Please see below the definitions of the most used terms on the Everscale network.",source:"@site/../../src/learn/terminology.md",sourceDirName:"learn",slug:"/learn/terminology",permalink:"/preview/PR-333/learn/terminology",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/learn/terminology.md",tags:[],version:"current",lastUpdatedAt:1684270521,formattedLastUpdatedAt:"May 16, 2023",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"DeBot Consortium",permalink:"/preview/PR-333/learn/decentralization/debot-consortium"},next:{title:"History",permalink:"/preview/PR-333/learn/history"}},c={},l=[{value:"Accounts",id:"accounts",level:3},{value:"Blockchain",id:"blockchain",level:3},{value:"Blocks",id:"blocks",level:3},{value:"Ever",id:"ever",level:3},{value:"Everscale",id:"everscale",level:3},{value:"Messages",id:"messages",level:3},{value:"Nodes",id:"nodes",level:3},{value:"Shards",id:"shards",level:3},{value:"Smart contracts",id:"smart-contracts",level:3},{value:"TVM",id:"tvm",level:3},{value:"Transactions",id:"transactions",level:3},{value:"Transaction Executor",id:"transaction-executor",level:3}],u={toc:l},h="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(h,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"terminology"},"Terminology"),(0,n.kt)("p",null,"Please see below the definitions of the most used terms on the Everscale network. "),(0,n.kt)("h3",{id:"accounts"},"Accounts"),(0,n.kt)("p",null,"This is the place for storing Ever. Besides storage, users with an account are able to deposit and transfer Ever. The account record stores account address and account balance. Accounts are ultimately stored in TVM. For more information about Accounts please consult ",(0,n.kt)("a",{parentName:"p",href:"/preview/PR-333/arch/accounts"},"this page"),"."),(0,n.kt)("h3",{id:"blockchain"},"Blockchain"),(0,n.kt)("p",null,"The chain of all blocks that have been added to the Everscale network throughout the history of the network. Each block has a reference to the previous block. Thus, it permits us to maintain a sequence of all blocks in the chain. "),(0,n.kt)("h3",{id:"blocks"},"Blocks"),(0,n.kt)("p",null,"There is a very high number of transactions on the Everscale network. Due to this, transactions are grouped in blocks. Each block counts hundreds of transactions. "),(0,n.kt)("h3",{id:"ever"},"Ever"),(0,n.kt)("p",null,"Ever is the native cryptocurrency of Everscale. Besides being an investment opportunity for users, it has multiple uses inside as well as outside the Everscale network."),(0,n.kt)("h3",{id:"everscale"},"Everscale"),(0,n.kt)("p",null,"Decentralised blockchain network that comprises many leading applications and services. Everscale has powerful developer tools, such as compilers for Solidity and C++, API, an SDK that includes client libraries for 13 programming languages and other convenient instruments designed for developers to build outstanding blockchain applications. "),(0,n.kt)("h3",{id:"messages"},"Messages"),(0,n.kt)("p",null,"All interactions in Everscale are performed via messages."),(0,n.kt)("p",null,"External inbound messages help deploy and call contracts from outside.\nInternal messages allow contracts to communicate with each other."),(0,n.kt)("p",null,"External outbound messages are the events the contracts produce for the outside world. Use them to implement some off-chain logic - subscribe for these messages and perform some off-chain actions whenever you receive them."),(0,n.kt)("p",null,"For example, simple value transfer can be initiated with an external inbound message (by a human or some service) or with internal message from another contract. This message will produce a transaction (read below) and an internal message with value transfer."),(0,n.kt)("p",null,"For detailed information about Messages please conult ",(0,n.kt)("a",{parentName:"p",href:"/preview/PR-333/arch/message"},"this page")," "),(0,n.kt)("h3",{id:"nodes"},"Nodes"),(0,n.kt)("p",null,"Nodes are ordinary computers on which the Everscale program is running. Each node is connected to other nodes, which allows to come to a consensus, which is a special mechanism by which information about the correctness of transactions on the network is checked. The Everscale network is the aggregate of all Everscale nodes and their communications."),(0,n.kt)("h3",{id:"shards"},"Shards"),(0,n.kt)("p",null,"Shards in Everscale are used for solving the classical issue faced by blockchains, which is low throughput. Sharding is merely partition of data in a database, in our case in the Everscale blockchain.",(0,n.kt)("br",{parentName:"p"}),"\n","Due to sharding, Everscale achieved one of the highest transactions per second rate available out there. For detailed information about how sharding works please consult ",(0,n.kt)("a",{parentName:"p",href:"/preview/PR-333/develop/from-another-platform/comparison-with-ethereum"},"this page"),"."),(0,n.kt)("h3",{id:"smart-contracts"},"Smart contracts"),(0,n.kt)("p",null,"SMs are a kind of algorithm, or program that runs on Everscale or other blockchains, like Ethereum, which was the first to come up with the idea of smart contracts. They work in accordance to a prescribed set of rules that are programmed by developers. When all conditions prescribed in the contract are met, the contract is executed."),(0,n.kt)("p",null,"For more information about smart contracts please consult ",(0,n.kt)("a",{parentName:"p",href:"/preview/PR-333/develop/tutorial/getting-started"},"this page")),(0,n.kt)("h3",{id:"tvm"},"TVM"),(0,n.kt)("p",null,"TVM is the virtual machine used to execute smart-contract code in the masterchain and in the basic workchain.",(0,n.kt)("br",{parentName:"p"}),"\n","Any user can request the execution of arbitrary code on the TVM. "),(0,n.kt)("p",null,"For more information about TVM please consult ",(0,n.kt)("a",{parentName:"p",href:"/preview/PR-333/arch/tvm"},"this page")),(0,n.kt)("h3",{id:"transactions"},"Transactions"),(0,n.kt)("p",null,"A transaction is the result of a contract execution. In general, a transaction is generated with one incoming message (external or internal) and can generate several outcoming messages (external or internal) as a result. Any user can broadcast a transaction request to the Everscale network from a node. "),(0,n.kt)("h3",{id:"transaction-executor"},"Transaction Executor"),(0,n.kt)("p",null,"Takes results of TVM, calculate fees, checks balance and other things. Used by validators to validate blocks. Can also be used on the client side to debug contract execution."),(0,n.kt)("p",null,"For detailed information about Transaction executor please conult ",(0,n.kt)("a",{parentName:"p",href:"/preview/PR-333/arch/executor"},"this page")))}d.isMDXComponent=!0}}]);