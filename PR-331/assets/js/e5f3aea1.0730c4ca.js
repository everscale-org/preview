"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[9510],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>v});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(r),h=n,v=p["".concat(l,".").concat(h)]||p[h]||u[h]||i;return r?a.createElement(v,o(o({ref:t},d),{},{components:r})):a.createElement(v,o({ref:t},d))}));function v(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},7838:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const i={sidebar_position:0},o="Getting started",s={unversionedId:"validate/getting-started",id:"validate/getting-started",title:"Getting started",description:"Before we start",source:"@site/../../src/validate/getting-started.md",sourceDirName:"validate",slug:"/validate/getting-started",permalink:"/preview/PR-331/validate/getting-started",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/validate/getting-started.md",tags:[],version:"current",lastUpdatedAt:1666367166,formattedLastUpdatedAt:"Oct 21, 2022",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Validate",permalink:"/preview/PR-331/validate"},next:{title:"Run Validator",permalink:"/preview/PR-331/validate/run-validator"}},l={},c=[{value:"Before we start",id:"before-we-start",level:2},{value:"Overview",id:"overview",level:2},{value:"Let\u2019s get started",id:"lets-get-started",level:2},{value:"Help and News",id:"help-and-news",level:2}],d={toc:c},p="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"getting-started"},"Getting started"),(0,n.kt)("h2",{id:"before-we-start"},"Before we start"),(0,n.kt)("p",null,"Before proceeding with the material explaining what it means to be a validator of Everscale, firstly consult with ",(0,n.kt)("a",{parentName:"p",href:"/preview/PR-331/learn/overview"},"Everscale overview page"),", in order to get familiar with Everscale blockchain essentials."),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"A validator on the Everscale network is basically a server tasked with confirmation of new blocks generated in the blockchain. "),(0,n.kt)("p",null,"In order for a new block to be confirmed, it has to be signed by several validators (or nodes). This way, a consensus in the network is reached, which is needed to ensure its reliability. Practically, this mechanism secures resistance to failures of individual nodes and protects the network from deliberate attacks."),(0,n.kt)("p",null,"To become a validator on the Everscale network, a stake (deposit) is required. It allows the participation in the election of validators and subsequent validation of the Proof-of-Stake consensus algorithm. Right now, the stake required amounts to 350 000 Ever."),(0,n.kt)("p",null,"For their work, validators receive  remuneration at the end of each validation cycle, consisting of two parts: "),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Processing fees - 1,7 EVER for a new block on the masterchain, and 1 EVER for a new block on the shardchain. "),(0,n.kt)("li",{parentName:"ol"},"Fees from the emission of new tokens distributed to validators, which is currently fixed in the network at the level of ~0.5% per year.")),(0,n.kt)("p",null,"Based on the current network configuration, validator elections take place every 18 hours. Each period consists of 3 phases:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"The election is open, the elector's smart contract accepts new stakes, and previous validators can return their stakes from the elector's smart contract;"),(0,n.kt)("li",{parentName:"ol"},"The election is over and the smart contract determines the group of validators for the next phase;"),(0,n.kt)("li",{parentName:"ol"},"A new group of validators starts working. The stakes of the former group of validators are temporarily frozen.")),(0,n.kt)("p",null,"Check out the ",(0,n.kt)("a",{parentName:"p",href:"/preview/PR-331/validate/run-validator/validator-elections"},"validator elections page")," to get better understanding the elections mechanism."),(0,n.kt)("p",null,"To accomodate participants with stakes lower than those required, as mentioned above, DePool smart contracts are designed. They permit any validator, irrespective of the stake size, to participate in staking and receive their part of the reward. DePool smart contracts guarantee that the validator cannot use the participants' funds in any other way, thereby guaranteeing the security of their funds from the validator's dishonesty. "),(0,n.kt)("h2",{id:"lets-get-started"},"Let\u2019s get started"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"run-validator/"},(0,n.kt)("strong",{parentName:"a"},"Run Validator"))," - here you can find information explaining how to launch a validation node in prod or testnet, as well as learn all additional information regarding this topic.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"depools/"},(0,n.kt)("strong",{parentName:"a"},"Depools"))," - in this section you can find information on interaction with DePools. More on this, you can read in the ",(0,n.kt)("a",{parentName:"p",href:"/preview/PR-331/learn/decentralization/debot-specifications"},"Learn section"),"."))),(0,n.kt)("h2",{id:"help-and-news"},"Help and News"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://t.me/freetonvalidators"},"Everscale validator's Telegram chat")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://t.me/ever_validators"},"Everscale validator's Telegram group"))))}u.isMDXComponent=!0}}]);