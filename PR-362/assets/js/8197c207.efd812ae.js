"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[2270],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),h=l(r),d=a,m=h["".concat(c,".").concat(d)]||h[d]||p[d]||o;return r?n.createElement(m,s(s({ref:t},u),{},{components:r})):n.createElement(m,s({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[h]="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8653:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:5},s="Glossary",i={unversionedId:"overview/concepts",id:"overview/concepts",title:"Glossary",description:"Accounts",source:"@site/../../src/overview/concepts.md",sourceDirName:"overview",slug:"/overview/concepts",permalink:"/preview/PR-362/overview/concepts",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/overview/concepts.md",tags:[],version:"current",lastUpdatedAt:1684349049,formattedLastUpdatedAt:"May 17, 2023",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"The Lore",permalink:"/preview/PR-362/overview/lore"},next:{title:"Build",permalink:"/preview/PR-362/develop"}},c={},l=[{value:"<strong>Accounts</strong>",id:"accounts",level:3},{value:"<strong>Blockchain</strong>",id:"blockchain",level:3},{value:"<strong>Blocks</strong>",id:"blocks",level:3},{value:"<strong>Ever</strong>",id:"ever",level:3},{value:"<strong>Everscale</strong>",id:"everscale",level:3},{value:"<strong>Messages</strong>",id:"messages",level:3},{value:"<strong>Nodes</strong>",id:"nodes",level:3},{value:"<strong>Shards</strong>",id:"shards",level:3},{value:"<strong>Smart contracts</strong>",id:"smart-contracts",level:3},{value:"<strong>TVM</strong>",id:"tvm",level:3},{value:"<strong>Transactions</strong>",id:"transactions",level:3},{value:"<strong>Transaction Executorexecu</strong>",id:"transaction-executorexecu",level:3}],u={toc:l},h="wrapper";function p(e){let{components:t,...r}=e;return(0,a.kt)(h,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"glossary"},"Glossary"),(0,a.kt)("h3",{id:"accounts"},(0,a.kt)("strong",{parentName:"h3"},"Accounts")),(0,a.kt)("p",null,"This is the place for storing EVERs . Besides storage, users with an account are able to deposit and transfer Ever. The account record stores account address and account balance. Accounts are ultimately stored in TVM. For more information about Accounts please consult ",(0,a.kt)("a",{parentName:"p",href:"/preview/PR-362/arch/accounts"},"this page"),"."),(0,a.kt)("h3",{id:"blockchain"},(0,a.kt)("strong",{parentName:"h3"},"Blockchain")),(0,a.kt)("p",null,"The chain of all blocks that have been added to the Everscale network throughout the history of the network. Each block has a reference to the previous block. Thus, it permits us to maintain a sequence of all blocks in the chain."),(0,a.kt)("h3",{id:"blocks"},(0,a.kt)("strong",{parentName:"h3"},"Blocks")),(0,a.kt)("p",null,"There is a very high number of transactions on the Everscale network. Due to this, transactions are grouped in blocks. Each block counts hundreds of transactions."),(0,a.kt)("h3",{id:"ever"},(0,a.kt)("strong",{parentName:"h3"},"Ever")),(0,a.kt)("p",null,"Ever is the native cryptocurrency of Everscale. Besides being an investment opportunity for users, it has multiple uses inside as well as outside the Everscale network."),(0,a.kt)("h3",{id:"everscale"},(0,a.kt)("strong",{parentName:"h3"},"Everscale")),(0,a.kt)("p",null,"Decentralised blockchain network that comprises many leading applications and services. Everscale has powerful developer tools, such as compilers for Solidity and C++, API, an SDK that includes client libraries for 13 programming languages and other convenient instruments designed for developers to build outstanding blockchain applications."),(0,a.kt)("h3",{id:"messages"},(0,a.kt)("strong",{parentName:"h3"},"Messages")),(0,a.kt)("p",null,"All interactions in Everscale are performed via messages."),(0,a.kt)("p",null,"External inbound messages help deploy and call contracts from outside. Internal messages allow contracts to communicate with each other."),(0,a.kt)("p",null,"External outbound messages are the events the contracts produce for the outside world. Use them to implement some off-chain logic - subscribe for these messages and perform some off-chain actions whenever you receive them."),(0,a.kt)("p",null,"For example, simple value transfer can be initiated with an external inbound message (by a human or some service) or with internal message from another contract. This message will produce a transaction (read below) and an internal message with value transfer."),(0,a.kt)("p",null,"For detailed information about Messages please consult ",(0,a.kt)("a",{parentName:"p",href:"/preview/PR-362/arch/message"},"this page")),(0,a.kt)("h3",{id:"nodes"},(0,a.kt)("strong",{parentName:"h3"},"Nodes")),(0,a.kt)("p",null,"Nodes are ordinary computers on which the Everscale program is running. Each node is connected to other nodes, which allows to come to a consensus, which is a special mechanism by which information about the correctness of transactions on the network is checked. The Everscale network is the aggregate of all Everscale nodes and their communications."),(0,a.kt)("h3",{id:"shards"},(0,a.kt)("strong",{parentName:"h3"},"Shards")),(0,a.kt)("p",null,"Shards in Everscale are used for solving the classical issue faced by blockchains, which is low throughput. Sharding is merely partitioning of data in a database, in our case in the Everscale blockchain."),(0,a.kt)("p",null,"Due to sharding, Everscale achieved one of the highest transactions per second rate available out there. For detailed information about how sharding works please consult ",(0,a.kt)("a",{parentName:"p",href:"/preview/PR-362/overview/differences-from-evm"},"this page"),"."),(0,a.kt)("h3",{id:"smart-contracts"},(0,a.kt)("strong",{parentName:"h3"},"Smart contracts")),(0,a.kt)("p",null,"SMs are a kind of algorithm, or program that runs on Everscale or other blockchains, like Ethereum, which was the first to come up with the idea of smart contracts. They work in accordance with a prescribed set of rules that are programmed by developers. When all conditions prescribed in the contract are met, the contract is executed."),(0,a.kt)("p",null,"For more information about smart contracts please consult ",(0,a.kt)("a",{parentName:"p",href:"../develop/smart-contracts/"},"this page")),(0,a.kt)("h3",{id:"tvm"},(0,a.kt)("strong",{parentName:"h3"},"TVM")),(0,a.kt)("p",null,"TVM is the virtual machine used to execute smart-contract code in the masterchain and in the basic workchain."),(0,a.kt)("p",null,"Any user can request the execution of arbitrary code on the TVM."),(0,a.kt)("p",null,"For more information about TVM please consult ",(0,a.kt)("a",{parentName:"p",href:"/preview/PR-362/arch/tvm"},"this page")),(0,a.kt)("h3",{id:"transactions"},(0,a.kt)("strong",{parentName:"h3"},"Transactions")),(0,a.kt)("p",null,"A transaction is the result of a contract execution. In general, a transaction is generated with one incoming message (external or internal) and can generate several outcoming messages (external or internal) as a result. Any user can broadcast a transaction request to the Everscale network from a node."),(0,a.kt)("h3",{id:"transaction-executorexecu"},(0,a.kt)("strong",{parentName:"h3"},"Transaction Executorexecu")),(0,a.kt)("p",null,"Takes results of TVM, calculates fees, checks balance and other things. Used by validators to validate blocks. Can also be used on the client side to debug contract execution."),(0,a.kt)("p",null,"For detailed information about Transaction executor please consult ",(0,a.kt)("a",{parentName:"p",href:"/preview/PR-362/arch/executor"},"this page")))}p.isMDXComponent=!0}}]);