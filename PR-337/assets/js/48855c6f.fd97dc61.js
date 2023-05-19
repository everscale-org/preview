"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[1290],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(a),u=r,m=p["".concat(l,".").concat(u)]||p[u]||h[u]||o;return a?n.createElement(m,i(i({ref:t},d),{},{components:a})):n.createElement(m,i({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},4501:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_position:0},i="Intro",s={unversionedId:"develop/intro",id:"develop/intro",title:"Intro",description:"To start your developer journey with Everscale, some important concepts should be understood first.",source:"@site/../../src/develop/intro.md",sourceDirName:"develop",slug:"/develop/intro",permalink:"/preview/PR-337/develop/intro",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/develop/intro.md",tags:[],version:"current",lastUpdatedAt:1684349049,formattedLastUpdatedAt:"May 17, 2023",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Build",permalink:"/preview/PR-337/develop"},next:{title:"Developer Tools Overview",permalink:"/preview/PR-337/develop/tools-overview"}},l={},c=[{value:"Distributed Programming approach",id:"distributed-programming-approach",level:2},{value:"Contract Deployment",id:"contract-deployment",level:2}],d={toc:c},p="wrapper";function h(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"intro"},"Intro"),(0,r.kt)("p",null,"To start your developer journey with Everscale, some important concepts should be understood first."),(0,r.kt)("p",null,"The first one is the mechanism of Dynamic Multithreading, which allows the network to scale as the load increase. "),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The Dynamic Multithreading is part of Everscale's approach to ",(0,r.kt)("strong",{parentName:"p"},"Infinite Scalability"),". Please follow ",(0,r.kt)("a",{parentName:"p",href:"/preview/PR-337/overview/infinite-scalability"},"here")," to dive deeper.")),(0,r.kt)("p",null,"Shortly speaking, a single workchain can split to shardchains dynamically, and a different subsets of accounts are assigned to different threads, running in parallel. "),(0,r.kt)("p",null,"To take advantage from that in your Smart Contracts, you can't simply use the same approach as in Ethereum development (where we allow a single smart contract to store lot of data)."),(0,r.kt)("p",null,"This leads us to the Distributed Programming approach."),(0,r.kt)("h2",{id:"distributed-programming-approach"},"Distributed Programming approach"),(0,r.kt)("p",null,"Instead of writing contracts in which the state can continuously grow, we write distributed systems of smart contracts. For example TIP-3 token standard is designed as a system of main ",(0,r.kt)("inlineCode",{parentName:"p"},"TokenRoot")," contract, which stores metadata, and has a function to deploy a separate smart-contract called ",(0,r.kt)("inlineCode",{parentName:"p"},"TokenWallet")," for each token owner (that is what a wallet is) and can send tokens directly among contracts without a central hub."),(0,r.kt)("admonition",{title:"Important concept",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"In Everscale, each contract address is a uniquely computed value. A contract address is a hash of the contract code and initial data (initial data is a value of static variables, and not what you pass to the constructor, since in Everscale the constructor is a function that you call after the deployment of the contract in one transaction)."),(0,r.kt)("p",{parentName:"admonition"},"This is a very important pattern of distributed programming (as it is understood in Everscale). Knowing the code of a contract, and its initial data you can make sure that you are being called by a contract with the same parents as your own. Or, knowing the contract code and its initial data, you can compute the address of a contract on the fly and send messages to it.")),(0,r.kt)("p",null,"By creating small contracts for a single system (like in TIP-3 token) we solve a number of issues:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"All contracts end up in different shards which distributes the load evenly throughout the network."),(0,r.kt)("li",{parentName:"ul"},"Contract states are very small. Validators can load them very quickly from a disk."),(0,r.kt)("li",{parentName:"ul"},"Storage fee. If we had one contract with a huge hash map, then it would have to pay a large fee for its storage, and it is not clear who should pay and how for this storage. If there are many accounts with small balances that their owners no longer need, then naturally they will not pay for its storage, and the rest of the holders of this token will have to pay for all of the \u201cremainders.\u201d So that smart contract programmers do not have to think about how to force users to pay for storage or clean up old data inside the contract, Everscale has allowed each user to deploy their own contract. Each user determines how long they will pay for storage and can always adjust these parameters.")),(0,r.kt)("h2",{id:"contract-deployment"},"Contract Deployment"),(0,r.kt)("p",null,"The concept about deterministic address calculations, described above, is also tied to how contracts are deployed in Everscale. The contract can naturally be deployed by another contract. But what should we do if we want to deploy a contract from outside?"),(0,r.kt)("p",null,"To do this, we have to take the contract code and its initial data, and compute its future address."),(0,r.kt)("p",null,"After that, we simply send money there, with a bounce flag = false. And the money just stays on the address, which has no initialized code."),(0,r.kt)("p",null,"Then we send a special external message to this address with the code and initial data, and we say \u201cLook, here we have the code and initial data, the hash of which gives us this address, initialize it please\u201d and the network initializes the contract."))}h.isMDXComponent=!0}}]);