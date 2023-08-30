"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[877],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=l(n),f=i,m=p["".concat(c,".").concat(f)]||p[f]||u[f]||a;return n?r.createElement(m,s(s({ref:t},d),{},{components:n})):r.createElement(m,s({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=f;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[p]="string"==typeof e?e:i,s[1]=o;for(var l=2;l<a;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6630:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var r=n(7462),i=(n(7294),n(3905));const a={title:"4.5. NFT Licensing",sidebar_position:4,slug:"/standard/TIP-4.5"},s="Non-Fungible Licensing (TIP-4.5)",o={unversionedId:"standard/TIP-4/5",id:"standard/TIP-4/5",title:"4.5. NFT Licensing",description:"Requires: TIP-4.1",source:"@site/../../src/standard/TIP-4/5.md",sourceDirName:"standard/TIP-4",slug:"/standard/TIP-4.5",permalink:"/preview/PR-362/standard/TIP-4.5",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/standard/TIP-4/5.md",tags:[],version:"current",lastUpdatedAt:1688555554,formattedLastUpdatedAt:"Jul 5, 2023",sidebarPosition:4,frontMatter:{title:"4.5. NFT Licensing",sidebar_position:4,slug:"/standard/TIP-4.5"},sidebar:"tutorialSidebar",previous:{title:"4.4. On-chain storage",permalink:"/preview/PR-362/standard/TIP-4.4"},next:{title:"Core description",permalink:"/preview/PR-362/standard/TIP-6"}},c={},l=[{value:"Abstract",id:"abstract",level:2},{value:"Motivation",id:"motivation",level:2},{value:"Specification",id:"specification",level:2},{value:"TIP4_5",id:"tip4_5",level:3},{value:"TIP4_5.getLicenseURI()",id:"tip4_5getlicenseuri",level:3},{value:"TIP4_5.getLicenseName()",id:"tip4_5getlicensename",level:3}],d={toc:l},p="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"non-fungible-licensing-tip-45"},"Non-Fungible Licensing (TIP-4.5)"),(0,i.kt)("p",null,"Requires: ",(0,i.kt)("a",{parentName:"p",href:"/preview/PR-362/standard/TIP-4.1"},"TIP-4.1"),"\nRequires: ",(0,i.kt)("a",{parentName:"p",href:"/preview/PR-362/standard/TIP-6.1"},"TIP-6.1")),(0,i.kt)("h2",{id:"abstract"},"Abstract"),(0,i.kt)("p",null,"The NFT License Standart is a standard set of functions for retrieving license information. This interface allows external callers to access the license URI and the license name associated with a specific entity. The preferred but not mandatory method of storing license links is using IPFS. A collection of NFT licenses can be obtained via a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/a16z/a16z-contracts"},"link"),". "),(0,i.kt)("h2",{id:"motivation"},"Motivation"),(0,i.kt)("p",null,"This standard was developed based on the previous version of the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/everscale-org/docs/blob/6198a3be3428841b47d7072d87b10854aca6b879/src/standard/TIP-4/5.md"},'"CantBeEvil"'),' standard. The new "NFT Licensing" standard offers you more freedom and flexibility in using licenses for your NFT tokens, allowing you to choose any license that reflects your vision and protects your rights, provided that a link to it is provided.'),(0,i.kt)("h2",{id:"specification"},"Specification"),(0,i.kt)("p",null,"The keywords \u201cMUST\u201d, \u201cMUST NOT\u201d, \u201cREQUIRED\u201d, \u201cSHALL\u201d, \u201cSHALL NOT\u201d, \u201cSHOULD\u201d, \u201cSHOULD NOT\u201d, \u201cRECOMMENDED\u201d, \u201cMAY\u201d, and \u201cOPTIONAL\u201d in this document are to be interpreted as described in ",(0,i.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc2119"},"RFC 2119"),"."),(0,i.kt)("h3",{id:"tip4_5"},"TIP4_5"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"pragma ever-solidity >= 0.61.2;\n\ninterface ITIP4_5 {\n    function getLicenseURI() external view responsible returns (string);\n    function getLicenseName() external view responsible returns (string);\n}\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"NOTE")," The ",(0,i.kt)("a",{parentName:"p",href:"/preview/PR-362/standard/TIP-6.1"},"TIP-6.1")," identifier for this interface is ",(0,i.kt)("inlineCode",{parentName:"p"},"0x8A1EB91")," (with responsible) and ",(0,i.kt)("inlineCode",{parentName:"p"},"0x1E4848D4")," (without responsible)."),(0,i.kt)("h3",{id:"tip4_5getlicenseuri"},"TIP4_5.getLicenseURI()"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function getLicenseURI() external view responsible returns (string);\n")),(0,i.kt)("p",null,"Returns the license URI. The license URI represents the location or identifier that can be used to access the full details of the license, such as terms and conditions, permissions, and restrictions."),(0,i.kt)("h3",{id:"tip4_5getlicensename"},"TIP4_5.getLicenseName()"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function getLicenseName() external view responsible returns (string);\n")),(0,i.kt)("p",null,"Returns the name or title of the license. The license name provides a concise and descriptive representation of the license type or category."))}u.isMDXComponent=!0}}]);