"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[4662],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(n),h=o,m=u["".concat(c,".").concat(h)]||u[h]||p[h]||r;return n?a.createElement(m,i(i({ref:t},d),{},{components:n})):a.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},9108:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=n(7462),o=(n(7294),n(3905));const r={sidebar_position:2,title:"Account Abstraction"},i=void 0,s={unversionedId:"develop/account-abstraction",id:"develop/account-abstraction",title:"Account Abstraction",description:"On the differences between Ethereum and Everscale approaches to Account Abstraction",source:"@site/../../src/develop/account-abstraction.md",sourceDirName:"develop",slug:"/develop/account-abstraction",permalink:"/preview/PR-342/develop/account-abstraction",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/develop/account-abstraction.md",tags:[],version:"current",lastUpdatedAt:1684349049,formattedLastUpdatedAt:"May 17, 2023",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Account Abstraction"},sidebar:"tutorialSidebar",previous:{title:"Developer Tools Overview",permalink:"/preview/PR-342/develop/tools-overview"},next:{title:"Actor model",permalink:"/preview/PR-342/develop/actor-model"}},c={},l=[{value:"On the differences between Ethereum and Everscale approaches to Account Abstraction",id:"on-the-differences-between-ethereum-and-everscale-approaches-to-account-abstraction",level:2},{value:"No AA and EOA. Just A",id:"no-aa-and-eoa-just-a",level:3},{value:"Lifecycle of an Account",id:"lifecycle-of-an-account",level:3},{value:"No EntryPoint",id:"no-entrypoint",level:3},{value:"Content Addressable Account Spaces",id:"content-addressable-account-spaces",level:3},{value:"Upgradeability",id:"upgradeability",level:3},{value:"Smart Contract Wallets",id:"smart-contract-wallets",level:3}],d={toc:l},u="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"on-the-differences-between-ethereum-and-everscale-approaches-to-account-abstraction"},"On the differences between Ethereum and Everscale approaches to Account Abstraction"),(0,o.kt)("p",null,"The EIP-4337, also known as an Account Abstraction (AA) was recently deployed on the Ethereum mainnet. In the Everscale blockchain, we believe in the idea of AA as a key enabler for extended wallet functionality, better security, and UX. "),(0,o.kt)("p",null,"However, due to the desire to deploy it without changes to the core protocol, the original Ethereum AA design is a bit complicated and comes with a separate alt-mempool, bundler nodes, and EntryPoint contract. "),(0,o.kt)("p",null,"Everscale comes with natively built-in \"AA batteries\", which makes the dev experience with AA much easier to pick up, especially for newbies. Let's dive deeper into how Everscale's AAs work."),(0,o.kt)("h3",{id:"no-aa-and-eoa-just-a"},"No AA and EOA. Just A"),(0,o.kt)("p",null,'The Value, be it a native coin or TIP-3 token, can only flow as an effect of smart contract code execution. For us, the notion of EOA shouldn\'t exist per se, and all Accounts are "abstract". '),(0,o.kt)("h3",{id:"lifecycle-of-an-account"},"Lifecycle of an Account"),(0,o.kt)("p",null,"The Account is deployed with some initial state (code + data). "),(0,o.kt)("p",null,"The TVM comes with instructions to access and modify Accounts' code, state, send Messages, deploy new Accounts, and more."),(0,o.kt)("p",null,"Executing the code in the TVM is invoked by an inbound Message. Both Account-to-Account and User-2-Account Messages are possible. "),(0,o.kt)("h3",{id:"no-entrypoint"},"No EntryPoint"),(0,o.kt)("p",null,"Users interact with Accounts via sending External Messages. They also may want to use key pairs or session keys to authorize External Messages. As there are no EOAs, all External Messages carry no value. "),(0,o.kt)("p",null,'When External Message is processed by an Account, the TVM gives some small portion of "credit gas". The developer can use it to perform certain logic before accepting a Message. '),(0,o.kt)("p",null,'Using the Accounts\' own balance requires the "accept" to be done explicitly with a corresponding TVM instruction.'),(0,o.kt)("p",null,"To reject the External Message, an Account should just not accept it. Rejected External Messages are never included in blocks. "),(0,o.kt)("p",null,"Thus, each Account is an EntryPoint itself."),(0,o.kt)("h3",{id:"content-addressable-account-spaces"},"Content Addressable Account Spaces"),(0,o.kt)("p",null,"Each Account is content-addressable: the Account address is deterministically derived from its initial code and state."),(0,o.kt)("p",null,"Imagine A1 sends the Message to A2. If such a message includes A1's initial data, A2 can check if A1 has the same code. For that, it will take its own initial code + A1's data and derive the expected address for A1. "),(0,o.kt)("p",null,"This approach to auth enables developers to build secure systems with address-based access control rules without the need to maintain access control lists explicitly."),(0,o.kt)("h3",{id:"upgradeability"},"Upgradeability"),(0,o.kt)("p",null,"On EVM, to implement upgradeability for a given A1 you need to deploy at least one additional A2 for your A1. Each upgrade will require at least 1 new Account to be deployed. This approach is well-adopted and known as ",(0,o.kt)("strong",{parentName:"p"},"Upgradeable Proxy Pattern"),"."),(0,o.kt)("p",null,"On TVM, there is ",(0,o.kt)("inlineCode",{parentName:"p"},"SETCODE")," instruction, which allows Account to upgrade itself with any code, that it can take from inbound Message, or its own storage. Accounts' address remains unchanged, and the Upgrade requires no extra deployments."),(0,o.kt)("h3",{id:"smart-contract-wallets"},"Smart Contract Wallets"),(0,o.kt)("p",null,"One of the key motivations for AA is to put the ownership model in the developers' hands to implement (code is a law)."),(0,o.kt)("p",null,"With greater power comes great responsibility, and cooking AAs right is important. The best practices and audited templates for AAs are yet to come into the EVM ecosystem."),(0,o.kt)("p",null,"At Everscale, there is a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/EverSurf/multisig2"},"formally verified implementation")," for singlesig / multisig + the Upgradable version, that enables one to build any logic and plug it on top (keeping the address unchanged)"))}p.isMDXComponent=!0}}]);