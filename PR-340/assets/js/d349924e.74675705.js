"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[3156],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>f});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=l(a),p=o,f=u["".concat(c,".").concat(p)]||u[p]||h[p]||s;return a?n.createElement(f,r(r({ref:t},d),{},{components:a})):n.createElement(f,r({ref:t},d))}));function f(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=a.length,r=new Array(s);r[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:o,r[1]=i;for(var l=2;l<s;l++)r[l]=a[l];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},5398:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var n=a(7462),o=(a(7294),a(3905));const s={title:"Basics",description:"Introduction to understand the basic terminology and concepts"},r="Basics of Everscale Blockchain",i={unversionedId:"arch/basics",id:"arch/basics",title:"Basics",description:"Introduction to understand the basic terminology and concepts",source:"@site/../../src/arch/05-basics.md",sourceDirName:"arch",slug:"/arch/basics",permalink:"/preview/PR-340/arch/basics",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/arch/05-basics.md",tags:[],version:"current",lastUpdatedAt:1684349049,formattedLastUpdatedAt:"May 17, 2023",sidebarPosition:5,frontMatter:{title:"Basics",description:"Introduction to understand the basic terminology and concepts"},sidebar:"tutorialSidebar",previous:{title:"Catchain Protocol Messages & Structures",permalink:"/preview/PR-340/arch/consensus/messages"},next:{title:"TL-B and BoC",permalink:"/preview/PR-340/arch/tlb-and-boc"}},c={},l=[{value:"Blockchain structure",id:"blockchain-structure",level:2},{value:"Account (contract)",id:"account-contract",level:2},{value:"About deploy",id:"about-deploy",level:3},{value:"Address",id:"address",level:3},{value:"About digital assets transfers",id:"about-digital-assets-transfers",level:3},{value:"About get methods",id:"about-get-methods",level:3},{value:"Message",id:"message",level:2},{value:"Transaction",id:"transaction",level:2},{value:"BOC (Bag of cells)",id:"boc-bag-of-cells",level:2},{value:"TVM",id:"tvm",level:2},{value:"Transaction Executor",id:"transaction-executor",level:2}],d={toc:l},u="wrapper";function h(e){let{components:t,...a}=e;return(0,o.kt)(u,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"basics-of-everscale-blockchain"},"Basics of Everscale Blockchain"),(0,o.kt)("h2",{id:"blockchain-structure"},"Blockchain structure"),(0,o.kt)("p",null,"At the moment, blockchain consists of 2 workchains. One of them (-1), a so-called masterchain, is needed for service contracts and validator contracts, another one (0) is for simple users. In the future, it is possible to add more simple workchains (1, 2, etc) to the blockchain."),(0,o.kt)("p",null,"In turn, a workchain is split into shards (so-called shardchains). When the load is low, there are 16 shards. When it increases, shards split and when they decrease they merge."),(0,o.kt)("p",null,"Blockchain is validated by validators. Part of them validate masterchain, others are split into groups and validate shardchains. Periodically, the global set of validators changes with elections. Within one election cycle, shardchain validators rotate as well."),(0,o.kt)("h2",{id:"account-contract"},"Account (contract)"),(0,o.kt)("p",null,"An account (contract) is identified by its full address consisting of a workchain and ID. Full information about the Account is stored in its state.",(0,o.kt)("br",{parentName:"p"}),"\n","An account can have some balance, a place for its code, a place for its data and many other fields.\nIt can have 1 owner, many owners and no owners at all.",(0,o.kt)("br",{parentName:"p"}),"\n","Account ID is calculated during deploy from its initial code and data."),(0,o.kt)("p",null,"In order to learn what Accounts are in detail, please follow ",(0,o.kt)("a",{parentName:"p",href:"/preview/PR-340/arch/accounts"},"this page"),"."),(0,o.kt)("h3",{id:"about-deploy"},"About deploy"),(0,o.kt)("p",null,"Deploy \u2014 placing the code of the account onto the blockchain."),(0,o.kt)("p",null,"You can not deploy an account's code if its balance is empty because deploy is paid out of that money. This is why any deploy operation must begin with sponsoring the account with some tokens."),(0,o.kt)("p",null,"Because the account's ID is unequivocally calculated from code and data, this calculation can be done before the actual deploy."),(0,o.kt)("h3",{id:"address"},"Address"),(0,o.kt)("p",null,"An Address is calculated from the initial contract's code and data that is attached to the deploy message."),(0,o.kt)("p",null,"When a contract performs SETCODE operation, its address does not change."),(0,o.kt)("p",null,"To calculate the contract address, you need to know its code and its initial data (public key of the owner is also stored in the data)."),(0,o.kt)("h3",{id:"about-digital-assets-transfers"},"About digital assets transfers"),(0,o.kt)("p",null,"Digital assets can be transferred from one account to another only by execution of the account's code. "),(0,o.kt)("p",null,"DO NOT transfer digital assets to the addresses where you can not deploy code because it will stay there forever."),(0,o.kt)("p",null,"About fees"),(0,o.kt)("p",null,"There are several types of fees for operations with contracts."),(0,o.kt)("p",null,"For example, commission for storage, execution, and message delivery."),(0,o.kt)("p",null,"Please follow ",(0,o.kt)("a",{parentName:"p",href:"/preview/PR-340/arch/fee-calculation"},"this page")," for Fee calculation details. "),(0,o.kt)("h3",{id:"about-get-methods"},"About get methods"),(0,o.kt)("p",null,"Get method is a method of the contract which doesn't change its state, so it can be executed locally on the client's machine for free."),(0,o.kt)("p",null,"What shard my account is in right now? An account shard is defined by the first bits of its address and the current list of shards."),(0,o.kt)("p",null,"Encode the hex shard prefix to binary format, discard the most right 1. You just got the shard mask. Put this mask on top of the account address, if the bits are equal \u2014 the account is in this shard."),(0,o.kt)("p",null,"An account can change its shard depending on the load of the network. So, before calculating an account's shard, check the current list of shards."),(0,o.kt)("h2",{id:"message"},"Message"),(0,o.kt)("p",null,"All interactions in Everscale are performed via messages."),(0,o.kt)("p",null,"External inbound messages help deploy and call contracts from outside."),(0,o.kt)("p",null,"Internal messages allow contracts to communicate with each other."),(0,o.kt)("p",null,"External outbound messages are the events the contracts produce for the outside world. Use them to implement some off-chain logic \u2014 subscribe for these messages and perform some off-chain actions whenever you receive them."),(0,o.kt)("p",null,"For example, a simple value transfer can be initiated with an external inbound message (by developers or a service) or with an internal message from another contract. This message will produce a transaction (read below) and an internal message with value transfer."),(0,o.kt)("p",null,"In order to learn what Messages are in detail, please follow ",(0,o.kt)("a",{parentName:"p",href:"/preview/PR-340/arch/message"},"this page"),"."),(0,o.kt)("h2",{id:"transaction"},"Transaction"),(0,o.kt)("p",null,"A transaction is the result of a contract execution."),(0,o.kt)("p",null,"In general, a transaction is generated with one incoming message (external or internal) and can generate several outcoming messages (external or internal) as a result."),(0,o.kt)("p",null,"The transaction can be successful or aborted."),(0,o.kt)("p",null,"For example, a simple value transfer consists of 2 transactions \u2014 Sender's transaction which generated an internal message with a value transfer, and Recipient's transaction where it received the message with value and updated its balance."),(0,o.kt)("h2",{id:"boc-bag-of-cells"},"BOC (Bag of cells)"),(0,o.kt)("p",null,"It is a universal format for data packaging in Everscale. Every object \u2014 account, transaction, message, block is stored in the blockchain database as bocs. By the way, the boc of the block includes bocs of all messages and transactions that were executed in this block inside of it."),(0,o.kt)("h2",{id:"tvm"},"TVM"),(0,o.kt)("p",null,"Turing-complete virtual machine for contract code execution. It works with data represented in boc format. TVM itself does not calculate any commissions and can be used on the client side for running the get methods of the contracts. TVM is used for debot engine execution on the client side as well."),(0,o.kt)("p",null,"Also, TVM is used by validators together with higher level protocols, such as Transaction Executor, to additionally calculate commissions and perform other necessary checks."),(0,o.kt)("p",null,"In order to learn what TVM is in detail, please follow ",(0,o.kt)("a",{parentName:"p",href:"/preview/PR-340/arch/tvm"},"this link"),"."),(0,o.kt)("h2",{id:"transaction-executor"},"Transaction Executor"),(0,o.kt)("p",null,"It takes the results of TVM, calculates fees, checks balances and other things. Used by validators to validate blocks. Can also be used on the client side to debug contract execution."),(0,o.kt)("p",null,"In order to learn what Transaction Executor is in detail, please follow ",(0,o.kt)("a",{parentName:"p",href:"/preview/PR-340/arch/executor"},"this link"),"."),(0,o.kt)("p",null,"In order to understand how Everscale blockchain works please follow ",(0,o.kt)("a",{parentName:"p",href:"/preview/PR-340/develop/intro"},"this page"),"."))}h.isMDXComponent=!0}}]);