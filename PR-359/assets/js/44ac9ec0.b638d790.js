"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[586],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),h=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=h(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=h(a),p=n,m=d["".concat(l,".").concat(p)]||d[p]||u[p]||o;return a?r.createElement(m,i(i({ref:t},c),{},{components:a})):r.createElement(m,i({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:n,i[1]=s;for(var h=2;h<o;h++)i[h]=a[h];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},200:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>h});var r=a(7462),n=(a(7294),a(3905));const o={title:"Multithreading",description:"How the blockchain works on the block and queue level"},i="Multithreading and Message Queues",s={unversionedId:"arch/multithreading",id:"arch/multithreading",title:"Multithreading",description:"How the blockchain works on the block and queue level",source:"@site/../../src/arch/80-multithreading.md",sourceDirName:"arch",slug:"/arch/multithreading",permalink:"/preview/PR-359/arch/multithreading",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/arch/80-multithreading.md",tags:[],version:"current",lastUpdatedAt:1684349049,formattedLastUpdatedAt:"May 17, 2023",sidebarPosition:80,frontMatter:{title:"Multithreading",description:"How the blockchain works on the block and queue level"},sidebar:"tutorialSidebar",previous:{title:"Workchains",permalink:"/preview/PR-359/arch/workchains"},next:{title:"Contribute",permalink:"/preview/PR-359/contribute"}},l={},h=[{value:"How the blockchain works on the block and queue level",id:"how-the-blockchain-works-on-the-block-and-queue-level",level:2}],c={toc:h},d="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"multithreading-and-message-queues"},"Multithreading and Message Queues"),(0,n.kt)("h2",{id:"how-the-blockchain-works-on-the-block-and-queue-level"},"How the blockchain works on the block and queue level"),(0,n.kt)("p",null,"This note is just for a general understanding of how the blockchain works, it\u2019s not 100% accurate, we are waiting for a description from the writers of the node. This may change after a new consensus."),(0,n.kt)("p",null,"There is a workchain ",(0,n.kt)("inlineCode",{parentName:"p"},"-1"),", this is the master chain, it is validated by the validators with the largest stake."),(0,n.kt)("p",null,"Contracts can be deployed in the ",(0,n.kt)("inlineCode",{parentName:"p"},"-1")," workchain, but it is more expensive, and it was made mainly for governorship. (Probably in the future there will be no user contracts)"),(0,n.kt)("p",null,"There is a workchain ",(0,n.kt)("inlineCode",{parentName:"p"},"0"),", where contracts are mostly located. More workchains will be launched in the future."),(0,n.kt)("p",null,"Workchains are further divided into Processing threads. There is a workchain parameter that indicates the minimum number of processing threads, and currently it is ",(0,n.kt)("inlineCode",{parentName:"p"},"16")," for a ",(0,n.kt)("inlineCode",{parentName:"p"},"0")," workchain."),(0,n.kt)("p",null,"Thread processing is an interesting concept. In ES, only computation is shared between the validators of the same workchain, but they all have the same storage. Let\u2019s look at what that means and how it works."),(0,n.kt)("p",null,"For example, we have 160 validators for the 0 workchain. They are randomly divided into 16 groups of 10 validators, and each gets its own Processing thread. All workchain contracts are also divided into 16 groups, simply by address ranges. (0.00 - 0:08, 0:08 - 0.18, etc.)."),(0,n.kt)("p",null,"Each group of validators executes transactions only for their group of smart contracts, and releases blocks of their processing thread."),(0,n.kt)("p",null,"But at the same time, they are constantly downloading blocks of other processing threads in order to see their outgoing and incoming message queues. At the same time, blocks are not a list of transactions that need to be rolled up, but a list of incoming messages + a state delta. So, when you download a block of another processing thread, you do not have to do computation in order to update your state. You\u2019re just rolling state changes."),(0,n.kt)("p",null,"How roughly works:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"The Masterchain generates block 1."),(0,n.kt)("li",{parentName:"ol"},"All threads download the last master block."),(0,n.kt)("li",{parentName:"ol"},"Threads create their own block and register it in the master block."),(0,n.kt)("li",{parentName:"ol"},"The masterchain generates block 2, which contains the hashes of all blocks of threads that have registered in it."),(0,n.kt)("li",{parentName:"ol"},"All threads download masterblock 2."),(0,n.kt)("li",{parentName:"ol"},"All threads look at the hashes of the registered blocks of other threads, and download them all."),(0,n.kt)("li",{parentName:"ol"},"All threads generate a block."),(0,n.kt)("li",{parentName:"ol"},"This process gets repeated.")),(0,n.kt)("p",null,"Message delivery guarantees also work in this way. When you create a message, it is placed on that thread\u2019s outgoing queue:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Thread A generates a message for the contract that is in thread B, and creates a block with a new outgoing message in the outgoing queue."),(0,n.kt)("li",{parentName:"ol"},"Thread A is registered in the master block."),(0,n.kt)("li",{parentName:"ol"},"The masterchain generates a block."),(0,n.kt)("li",{parentName:"ol"},"Thread B downloads the master block, and downloads the block of thread A registered there."),(0,n.kt)("li",{parentName:"ol"},"Thread B sees the message in thread A and imports it into its inbound queue. (When a message is imported, it is immediately executed (transaction starts) If there is not enough gas for a transaction in the current block, then the message is simply not imported, and waits for its turn in another block. At the same time, there is a message import order, so that validators will not be able to ignore it forever)."),(0,n.kt)("li",{parentName:"ol"},"Thread B creates a block with a message in the incoming queue, and registers with the master."),(0,n.kt)("li",{parentName:"ol"},"Thread A downloads the block in which it sees its message in thread B\u2019s incoming queue and removes the message from its outgoing queue since it was delivered successfully."),(0,n.kt)("li",{parentName:"ol"},"Generally, thread A generates a block, then registers it in the master block. Then thread B downloads it, sees that thread A has removed it from its outgoing queue, and deletes it from its incoming one.")),(0,n.kt)("p",null,"In fact, sharding in this blockchain is the sharding of computational resources. And the data is the same for everyone, with the expectation that all validators have gigabit channels, and we rest only on computation."),(0,n.kt)("p",null,"If some processing thread is heavily loaded with the last N blocks, then it will split into two, and new processing threads can also split in turn. Then when the load drops, they all merge."))}u.isMDXComponent=!0}}]);