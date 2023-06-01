"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[7423],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),d=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return i.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(n),h=r,f=p["".concat(l,".").concat(h)]||p[h]||u[h]||a;return n?i.createElement(f,o(o({ref:t},c),{},{components:n})):i.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var d=2;d<a;d++)o[d]=n[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5331:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var i=n(7462),r=(n(7294),n(3905));const a={sidebar_position:1},o="TL",s={unversionedId:"arch/networking/tl",id:"arch/networking/tl",title:"TL",description:"TL (Type Language) is used for describing data structures. To structure data, TL schemes are used. TL operates with 32-bit blocks. Accordingly, the size of the data in TL should be a multiple of 4 bytes. If the size of the object is not a multiple of 4, we need to add the required number of zero bytes to achieve multiplicity. The Little Endian order is always used to encode numbers.",source:"@site/../../src/arch/networking/tl.md",sourceDirName:"arch/networking",slug:"/arch/networking/tl",permalink:"/preview/PR-342/arch/networking/tl",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/arch/networking/tl.md",tags:[],version:"current",lastUpdatedAt:1684349049,formattedLastUpdatedAt:"May 17, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Networking",permalink:"/preview/PR-342/arch/networking/"},next:{title:"ADNL",permalink:"/preview/PR-342/arch/networking/adnl"}},l={},d=[{value:"Encoding bytes in TL",id:"encoding-bytes-in-tl",level:3},{value:"Non-obvious rules of serialization",id:"non-obvious-rules-of-serialization",level:3}],c={toc:d},p="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"tl"},"TL"),(0,r.kt)("p",null,"TL (Type Language) is used for describing data structures. To structure data, ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ton-blockchain/ton/tree/master/tl/generate/scheme"},"TL schemes")," are used. TL operates with 32-bit blocks. Accordingly, the size of the data in TL should be a multiple of 4 bytes. If the size of the object is not a multiple of 4, we need to add the required number of zero bytes to achieve multiplicity. The Little Endian order is always used to encode numbers."),(0,r.kt)("p",null,"TL can be studied in more detail in the ",(0,r.kt)("a",{parentName:"p",href:"https://core.telegram.org/mtproto/TL"},"Telegram documentation"),"."),(0,r.kt)("h3",{id:"encoding-bytes-in-tl"},"Encoding bytes in TL"),(0,r.kt)("p",null,"To encode an array of bytes, we first need to determine its size. If it is less than 254 bytes, then encoding with 1 byte is used as size. If it is larger, then ",(0,r.kt)("inlineCode",{parentName:"p"},"0xFE")," is written as the first byte, as an indicator of a large array, and then 3 bytes of size follow it."),(0,r.kt)("p",null,"For example, we encode an array ",(0,r.kt)("inlineCode",{parentName:"p"},"[0xAA, 0xBB]"),", its size is 2. We use 1 byte of size and then we write the data ourselves, we get ",(0,r.kt)("inlineCode",{parentName:"p"},"[0x02, 0xAA, 0xBB]"),". That's it! However, we see that the final size is 3 and not a multiple of 4 bytes, then we need to add 1 byte of padding so that there is 4. We get: ",(0,r.kt)("inlineCode",{parentName:"p"},"[0x02, 0xAA, 0xBB, 0x00]"),"."),(0,r.kt)("p",null,"If we need to encode an array whose size is, for example, 396, we proceed as follows: 396 >= 254, which means we use 3 bytes to encode the size and 1 byte of the increased size indicator, we get: ",(0,r.kt)("inlineCode",{parentName:"p"},"[0xFE, 0x8C, 0x01, 0x00, array bytes]"),", 396+4 = 400, which is a multiple of 4 and does not need to be adjusted."),(0,r.kt)("h3",{id:"non-obvious-rules-of-serialization"},"Non-obvious rules of serialization"),(0,r.kt)("p",null,"Often, a prefix of 4 bytes is written before the scheme itself - its ID. The schema ID is a CRC32 with an IEEE table from the schema text, while characters such as ",(0,r.kt)("inlineCode",{parentName:"p"},";")," and brackets ",(0,r.kt)("inlineCode",{parentName:"p"},"()")," are removed from the text. Serialization of a scheme with an ID prefix is called boxed. This allows the parser to determine which scheme is in front of it if several options are possible."),(0,r.kt)("p",null,"How to determine whether to serialize as boxed or not? If our schema is part of another schema, then we need to see how the field type is specified.  If it is specified explicitly, then we serialize without a prefix. If not explicitly (there are many such types), then we need to serialize as boxed. Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"pub.unenc data:bytes = PublicKey;\npub.ed25519 key:int256 = PublicKey;\npub.aes key:int256 = PublicKey;\npub.overlay name:bytes = PublicKey;\n")),(0,r.kt)("p",null,"We have such types. If ",(0,r.kt)("inlineCode",{parentName:"p"},"PublicKey")," is specified in the schema, for example, ",(0,r.kt)("inlineCode",{parentName:"p"},"adnl.node")," ",(0,r.kt)("inlineCode",{parentName:"p"},"id:PublicKey addr_list:adnl.AddressList = adnl.Node"),", then it is not explicitly specified and we need to serialize with the ID prefix (boxed). And if it were specified like this: ",(0,r.kt)("inlineCode",{parentName:"p"},"adsl.node id:pub.ed25519 addr_list:all.address List = add.Node"),", then it would be explicit, and the prefix would not be needed."))}u.isMDXComponent=!0}}]);