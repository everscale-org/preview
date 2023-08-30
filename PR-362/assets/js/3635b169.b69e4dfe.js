"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[3545],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>m});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=l(o),h=r,m=u["".concat(c,".").concat(h)]||u[h]||p[h]||a;return o?n.createElement(m,s(s({ref:t},d),{},{components:o})):n.createElement(m,s({ref:t},d))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,s=new Array(a);s[0]=h;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:r,s[1]=i;for(var l=2;l<a;l++)s[l]=o[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,o)}h.displayName="MDXCreateElement"},2972:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var n=o(7462),r=(o(7294),o(3905));const a={},s="Introduction",i={unversionedId:"arch/consensus/introduction",id:"arch/consensus/introduction",title:"Introduction",description:"This document was created when EverX started to reverse engineer a consensus protocol from publicly released source code of Telegram node as part of EverX Node implementation.",source:"@site/../../src/arch/consensus/00-introduction.md",sourceDirName:"arch/consensus",slug:"/arch/consensus/introduction",permalink:"/preview/PR-362/arch/consensus/introduction",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/arch/consensus/00-introduction.md",tags:[],version:"current",lastUpdatedAt:1684349049,formattedLastUpdatedAt:"May 17, 2023",sidebarPosition:0,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Consensus",permalink:"/preview/PR-362/arch/consensus"},next:{title:"Comparison with other solutions",permalink:"/preview/PR-362/arch/consensus/comparison"}},c={},l=[],d={toc:l},u="wrapper";function p(e){let{components:t,...o}=e;return(0,r.kt)(u,(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"This document was created when EverX started to reverse engineer a consensus protocol from publicly released source code of Telegram node as part of EverX Node implementation."),(0,r.kt)("p",null,"We decided to release this document after the author of the protocol, Dr. Nikolai Durov, released a consensus outline",(0,r.kt)("br",{parentName:"p"}),"\n","\ud83d\udc49 ",(0,r.kt)("a",{parentName:"p",href:"https://test.ton.org/catchain.pdf"},"https://test.ton.org/catchain.pdf")," and we highly recommend everybody read the original."),(0,r.kt)("p",null,"In this research, we wanted to help other engineers and the general public to gain a better understanding of the underlying protocol, to provide more context by comparing it to other protocols and give more details about practical aspects of Catchain."),(0,r.kt)("p",null,"Everscale consensus (dabbed Catchain by its author) is a Proof-of-stake consensus algorithm from a family of Byzantine Fault Tolerant (BFT) algorithms. It includes the consensus algorithm as well as a protocol for message exchange between validator nodes in a network."),(0,r.kt)("p",null,"BFT consensus is based on Byzantine Generals agreement and describes a problem of reaching a consensus in distributed system when each network participant does not have an information about the whole network and may not trust any of its participants."),(0,r.kt)("p",null,"Blockchain consensus is a classical example of BFT problem as none of the block producers can be trusted or reachable at any given moment. Consensus lies at the core of any blockchain as it allows network nodes to agree on the next block in the blockchain without trusting each other."),(0,r.kt)("p",null,"There are generally two classes of POS consensus algorithms. First (CBC Casper, Ouroboros, etc.) when block generation is very easy but forks are allowed with subsequent process of complex agreement on their resolution among the network participants. Catchain belongs to another class \u2014 the class of algorithms where block generation agreement is hard but forks are rare or impossible (PBFT, Tendermint, Algorand etc.)"),(0,r.kt)("p",null,"From a life-cycle perspective, the Catchain consensus includes the following stages:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"stake-based validator elections"),(0,r.kt)("li",{parentName:"ul"},"validation session startup"),(0,r.kt)("li",{parentName:"ul"},"several block generation rounds")),(0,r.kt)("p",null,"Each block generation round has limited time and consists of several attempts. So, if validators fail to agree during all available attempts, the round is skipped and the new block is not committed to the blockchain. In the course of a round, validators exchange messages about block candidates generated by collators, validate these candidates, select vote candidates, vote for them and finally commit the elected block to the blockchain."),(0,r.kt)("p",null,"To prevent consensus monopolization, the algorithm uses a round-robin role transfer from validator to the validator. So each round and each attempt several validators are assigned to generate blocks and one validator is assigned to propose a block for voting. As validators change roles from an attempt to attempt, the consensus mechanism cannot be blocked by a failure to get a decision from the majority of validators. The key idea here is to make sure that 2/3 of validator votes for a particular block are actually cast. The 2/3 cutoff threshold is a theoretical value that allows making sure that the decision via consensus is made."),(0,r.kt)("p",null,"To improve the overall network performance, partial cross-node message synchronization is used. It means that any validator only interacts with a randomly selected subset of validators and uses data obtained from them to make a decision during a validation round. This data also includes aggregated transitive data received from other validators and signed by their signatures."))}p.isMDXComponent=!0}}]);