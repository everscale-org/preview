"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[946],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(r),u=a,m=c["".concat(l,".").concat(u)]||c[u]||h[u]||o;return r?n.createElement(m,i(i({ref:t},d),{},{components:r})):n.createElement(m,i({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},4198:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:4},i="RLDP",s={unversionedId:"arch/networking/rldp",id:"arch/networking/rldp",title:"RLDP",description:"Reliable Large Datagram Protocol runs on top of ADNL UDP. It is designed for transmitting big data and includes Forward Error Correction (FEC) algorithms. They are used to replace packet receipt confirmations by the other party. This opens the possibility to transfer data between network components more efficiently. Although, with high traffic consumption.",source:"@site/../../src/arch/networking/rldp.md",sourceDirName:"arch/networking",slug:"/arch/networking/rldp",permalink:"/preview/PR-328/arch/networking/rldp",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/arch/networking/rldp.md",tags:[],version:"current",lastUpdatedAt:1684322466,formattedLastUpdatedAt:"May 17, 2023",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"DHT - Distributed Hash Table",permalink:"/preview/PR-328/arch/networking/dht"},next:{title:"Overlay",permalink:"/preview/PR-328/arch/networking/overlay"}},l={},p=[{value:"Protocol",id:"protocol",level:2},{value:"FEC",id:"fec",level:3},{value:"Raptor",id:"raptor",level:4},{value:"RLDP-HTTP",id:"rldp-http",level:2}],d={toc:p},c="wrapper";function h(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"rldp"},"RLDP"),(0,a.kt)("p",null,"Reliable Large Datagram Protocol runs on top of ADNL UDP. It is designed for transmitting big data and includes Forward Error Correction (FEC) algorithms. They are used to replace packet receipt confirmations by the other party. This opens the possibility to transfer data between network components more efficiently. Although, with high traffic consumption."),(0,a.kt)("p",null,"RLDP is largely used in the Everscale infrastructure. For example, to download blocks from other nodes and transfer data to them or to make requests to Everscale sites."),(0,a.kt)("h2",{id:"protocol"},"Protocol"),(0,a.kt)("p",null,"To exchange data, RLDP uses the following TL structures:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"fec.raptorQ data_size:int symbol_size:int symbols_count:int = fec.Type;\nfec.roundRobin data_size:int symbol_size:int symbols_count:int = fec.Type;\nfec.online data_size:int symbol_size:int symbols_count:int = fec.Type;\n\nrldp.messagePart transfer_id:int256 fec_type:fec.Type part:int total_size:long seqno:int data:bytes = rldp.MessagePart;\nrldp.confirm transfer_id:int256 part:int seqno:int = rldp.MessagePart;\nrldp.complete transfer_id:int256 part:int = rldp.MessagePart;\n\nrldp.message id:int256 data:bytes = rldp.Message;\nrldp.query query_id:int256 max_answer_size:long timeout:int data:bytes = rldp.Message;\nrldp.answer query_id:int256 data:bytes = rldp.Message;\n")),(0,a.kt)("p",null,"The serialized structure is wrapped in an ",(0,a.kt)("inlineCode",{parentName:"p"},"adsl.message.custom")," TL schema and sent over ADNL UDP. The big data is transmitted via transfers. A random ",(0,a.kt)("inlineCode",{parentName:"p"},"transfer_id")," is generated while the data itself is processed by the FEC algorithm. The received pieces are wrapped in the ",(0,a.kt)("inlineCode",{parentName:"p"},"rldp.MessagePart")," structure and sent to the recipient until the recipient returns ",(0,a.kt)("inlineCode",{parentName:"p"},"rldp.complete"),". When the recipient collects the pieces of ",(0,a.kt)("inlineCode",{parentName:"p"},"rldp.MessagePart")," needed to assemble a complete message the following has to be done: connecting them all together, decoding them using FEC and deserializing the resulting byte array into one of the ",(0,a.kt)("inlineCode",{parentName:"p"},"rldp.query")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"rldp.answer")," structures - depending on the type of TL ID prefix."),(0,a.kt)("h3",{id:"fec"},"FEC"),(0,a.kt)("p",null,"Valid ",(0,a.kt)("strong",{parentName:"p"},"Forward Error Correction")," algorithms to use with RLDP are Round Robin, Online, and Raptor. Currently, Raptor is used for data exchange."),(0,a.kt)("h4",{id:"raptor"},"Raptor"),(0,a.kt)("p",null,"The essence of ",(0,a.kt)("strong",{parentName:"p"},"RaptorQ")," is that the data is divided into so-called symbols - blocks of the same, predetermined size.4"),(0,a.kt)("p",null,"Blocks, in turn, serve to create matrices, to which discrete mathematical operations are applied. This allows us to create an almost infinite number of characters from the same data. All characters are mixed, and, thanks to this, it is possible to recover lost packets without requesting additional data from the server. This is accomplished by sending fewer packets than it would be if we were to send the same pieces in the cycle."),(0,a.kt)("p",null,"The generated symbols are sent to the recipient until he says that all data has been received and restored by applying the same discrete operations."),(0,a.kt)("h2",{id:"rldp-http"},"RLDP-HTTP"),(0,a.kt)("p",null,"HTTP (wrapped in RLDP) is used to interact with Everscale sites. The hoster places his site on any HTTP web server and raises the rldp-http proxy next to it. All requests from the Everscale network come via the RLDP protocol to the proxy, and the proxy already reassembles the request into regular HTTP and calls the web server locally."),(0,a.kt)("admonition",{title:"Tip",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"The user on his side locally (ideally) raises a proxy, for example Tonutils Proxy, and uses .ton, all traffic is wrapped in reverse order, requests go to the local proxy, and it sends them via RLDP to the remote TON site.")),(0,a.kt)("p",null,"HTTP inside RLDP is implemented using TL structures:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"http.header name:string value:string = http.Header;\nhttp.payloadPart data:bytes trailer:(vector http.header) last:Bool = http.PayloadPart;\nhttp.response http_version:string status_code:int reason:string headers:(vector http.header) no_payload:Bool = http.Response;\n\nhttp.request id:int256 method:string url:string http_version:string headers:(vector http.header) = http.Response;\nhttp.getNextPayloadPart id:int256 seqno:int max_chunk_size:int = http.PayloadPart;\n")))}h.isMDXComponent=!0}}]);