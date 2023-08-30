"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[6252],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),h=r,u=m["".concat(l,".").concat(h)]||m[h]||d[h]||i;return n?a.createElement(u,o(o({ref:t},p),{},{components:n})):a.createElement(u,o({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8680:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={title:"Logical Time",description:"Logical Time and Message Delivery Guarantees"},o="Logical Time and Message Delivery Guarantees",s={unversionedId:"arch/logic-time",id:"arch/logic-time",title:"Logical Time",description:"Logical Time and Message Delivery Guarantees",source:"@site/../../src/arch/37-logic-time.md",sourceDirName:"arch",slug:"/arch/logic-time",permalink:"/preview/PR-362/arch/logic-time",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/arch/37-logic-time.md",tags:[],version:"current",lastUpdatedAt:1684349049,formattedLastUpdatedAt:"May 17, 2023",sidebarPosition:37,frontMatter:{title:"Logical Time",description:"Logical Time and Message Delivery Guarantees"},sidebar:"tutorialSidebar",previous:{title:"Transaction executor",permalink:"/preview/PR-362/arch/executor"},next:{title:"Accounts",permalink:"/preview/PR-362/arch/accounts"}},l={},c=[{value:"Delivery order for two contracts",id:"delivery-order-for-two-contracts",level:2},{value:"Complicated cases",id:"complicated-cases",level:2}],p={toc:c},m="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"logical-time-and-message-delivery-guarantees"},"Logical Time and Message Delivery Guarantees"),(0,r.kt)("p",null,"This very complex topic (the complexity arises due to sharding), and there is no consensus in the community yet on what kind of guarantees we can count on. So everything described below has not yet been confirmed with documentation."),(0,r.kt)("p",null,"The examples below are described for cases when all contracts are in the same workchain, but in unknown shards (in the same shard or different ones, it doesn\u2019t matter)."),(0,r.kt)("p",null,"Guarantees of message delivery order are built on LT guarantees. And of course, everything is described in Nikolai\u2019s WP, but so far there is no certainty that the Rust node is doing everything right."),(0,r.kt)("p",null,"LT \u2014 Logical time. This is the logical time when a transaction or message was created."),(0,r.kt)("p",null,"The main idea here is that the LT of an entity is always greater than the LT of all the entities on which it depends."),(0,r.kt)("p",null,"That is, if the LT of the block in which the transaction occurs is 1, then the LT of the transaction of this block is at least 2. The LT of the first message created from this transaction is at least 3, the LT of the second is at least 4, and so on."),(0,r.kt)("h2",{id:"delivery-order-for-two-contracts"},"Delivery order for two contracts"),(0,r.kt)("p",null,"When a contract receives incoming messages, it is guaranteed that it will receive them strictly in ascending order of the LT of those messages. That is, if we send two messages from the same transaction, the one that was sent first will be received first. If two messages are sent by different transactions, then the one that was sent first will be received first (the LT of the second transaction is greater than the first)."),(0,r.kt)("img",{src:"https://www.plantuml.com/plantuml/png/IqmkoIzISCp9J4xbub9opiyhAKeiKN1KKaWiLeXsZ4K8EK64d6AvkC2g5NJj51oj55mhIbAByX9p579JYuiJqrEv744IJbOAXWgUUJYaZ32a0000",alt:null}),(0,r.kt)("p",null,"In this case, too, Int 1 will come first, but only if ",(0,r.kt)("inlineCode",{parentName:"p"},"Ext 1")," happens before ",(0,r.kt)("inlineCode",{parentName:"p"},"Ext 2")," (if you send two external messages at the same time or close in time, there is no guarantee regarding the order in which they will be added into the block)."),(0,r.kt)("img",{src:"https://www.plantuml.com/plantuml/png/IqmkoIzISCp9J4xbub9opiyhAKeiKN1KKaWiLeXsZ4K8EK64d6AvkC2g5NJj51oj55mhIXGCkHn1F2Sh1KC5pxoIrAAyn1o5tDJYuiJqL000",alt:null}),(0,r.kt)("img",{src:"https://www.plantuml.com/plantuml/png/IqmkoIzISCp9J4xbub9opiyhAKeiKN1KKaWiLeXsZ4K8EK64d6AvkC2g5NJj51oj55mhIXICk1n1F2Sh1IC5pxoIrAAyn1o5tDJYuiJqL000",alt:null}),(0,r.kt)("h2",{id:"complicated-cases"},"Complicated cases"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"There is no consensus on whether or not you can count on this, so ",(0,r.kt)("strong",{parentName:"p"},"USE ONLY IF YOU UNDERSTAND WHAT YOU ARE DOING 100%"),", otherwise you should only use delivery order guarantees for two contracts."),(0,r.kt)("p",{parentName:"admonition"},"(This may change after new consensus)")),(0,r.kt)("p",null,"If we send two messages from contract ",(0,r.kt)("inlineCode",{parentName:"p"},"A"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"message 1")," is sent before ",(0,r.kt)("inlineCode",{parentName:"p"},"message 2"),", then ",(0,r.kt)("inlineCode",{parentName:"p"},"message 1")," will arrive earlier than any other message generated by ",(0,r.kt)("inlineCode",{parentName:"p"},"message 2"),", as in the example below, ",(0,r.kt)("inlineCode",{parentName:"p"},"Int 1")," will always arrive before ",(0,r.kt)("inlineCode",{parentName:"p"},"Int 3"),"."),(0,r.kt)("img",{src:"https://www.plantuml.com/plantuml/png/IqmkoIzISCp9J4xbub9opiyhAKeiKN1KKaWiLeXsZ4K8EK64d924d252ph5SN60357Jj51oj55mhIXGCkHn1F6Sh1SyyA0_8TO9mZHIud91aZG40",alt:null}),(0,r.kt)("p",null,"If you have more than 3 contracts, then the order of delivery is mostly undefined."),(0,r.kt)("p",null,"For all other cases, you definitely shouldn\u2019t count on this if you don\u2019t consider yourself a super expert in LT and node operation. ",(0,r.kt)("strong",{parentName:"p"},"Below I will demonstrate several cases where the delivery order is not defined.")),(0,r.kt)("img",{src:"https://www.plantuml.com/plantuml/png/IqmkoIzISCp9J4xbub9opiyhAKeiKN1KKaWiLeXsZ4K8EK64d924d252paX2BX0XbrWkBh2P2hfs2evM2guL9LoE2hf0ZhELWY6KwMIbOCJb36QwM2aOwvjmEI5n0000",alt:null}),(0,r.kt)("p",null,"Here the order is not defined, ",(0,r.kt)("inlineCode",{parentName:"p"},"G")," can receive a message from any of the chains first."),(0,r.kt)("img",{src:"https://www.plantuml.com/plantuml/png/JSWn2e0m343HFQS8tJles45eqwI7a0x5NK5xVuH49DF_l43NEUznJCm1nuDxxX1-AsR56vcHjsfMlR4PUsjcpPkOIGV86EE6ad3vjYHSeUWIaBP2rJAmje5ONm00",alt:null}),(0,r.kt)("p",null,"This is a more complicated example. If ",(0,r.kt)("inlineCode",{parentName:"p"},"Ext 1")," happens before ",(0,r.kt)("inlineCode",{parentName:"p"},"Ext 2"),", but they occur close to each other in time, then ",(0,r.kt)("inlineCode",{parentName:"p"},"1")," arrives before ",(0,r.kt)("inlineCode",{parentName:"p"},"3")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"4"),", but we don\u2019t know in which order ",(0,r.kt)("inlineCode",{parentName:"p"},"C")," will receive messages ",(0,r.kt)("inlineCode",{parentName:"p"},"3")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"4"),"."),(0,r.kt)("img",{src:"https://www.plantuml.com/plantuml/png/IqmkoIzISCp9J4xbub9opiyhAKeiKN1KKaWiLeXsZ4K8EK64d924d252ph5SN60357Jj51oj55mhIXGCkHn1F6Sh20l8TB9IC5BWSeAA6WC0",alt:null}),(0,r.kt)("img",{src:"https://www.plantuml.com/plantuml/png/IqmkoIzISCp9J4xbub9opiyhAKeiKN1KKaWiLeXsZ4K8EK64d924d252ph5SN60357Jj51oj55mhIXICk1n1F6Sh1HCG2yXqib8mLU1oWegQ0G00",alt:null}))}d.isMDXComponent=!0}}]);