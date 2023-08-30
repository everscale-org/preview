"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[5559],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),s=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return i.createElement(c.Provider,{value:t},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),f=s(n),u=r,m=f["".concat(c,".").concat(u)]||f[u]||p[u]||a;return n?i.createElement(m,l(l({ref:t},d),{},{components:n})):i.createElement(m,l({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[f]="string"==typeof e?e:r,l[1]=o;for(var s=2;s<a;s++)l[s]=n[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1145:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var i=n(7462),r=(n(7294),n(3905));const a={title:"1. Interface Detection",sidebar_position:1,slug:"/standard/TIP-6.1"},l="Standard Interface Detection Interface (TIP-6.1)",o={unversionedId:"standard/TIP-6/1",id:"standard/TIP-6/1",title:"1. Interface Detection",description:"Simple summary",source:"@site/../../src/standard/TIP-6/1.md",sourceDirName:"standard/TIP-6",slug:"/standard/TIP-6.1",permalink:"/preview/PR-362/standard/TIP-6.1",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/standard/TIP-6/1.md",tags:[],version:"current",lastUpdatedAt:1649905495,formattedLastUpdatedAt:"Apr 14, 2022",sidebarPosition:1,frontMatter:{title:"1. Interface Detection",sidebar_position:1,slug:"/standard/TIP-6.1"},sidebar:"tutorialSidebar",previous:{title:"Core description",permalink:"/preview/PR-362/standard/TIP-6"},next:{title:"Architecture",permalink:"/preview/PR-362/arch"}},c={},s=[{value:"Simple summary",id:"simple-summary",level:2},{value:"Abstract",id:"abstract",level:2},{value:"Motivation",id:"motivation",level:2},{value:"Specification",id:"specification",level:2},{value:"How interfaces are identified",id:"how-interfaces-are-identified",level:3},{value:"Solidity",id:"solidity",level:4},{value:"How a Contract will Publish the Interfaces it Implements",id:"how-a-contract-will-publish-the-interfaces-it-implements",level:4},{value:"Solidity",id:"solidity-1",level:4},{value:"References",id:"references",level:2}],d={toc:s},f="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(f,(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"standard-interface-detection-interface-tip-61"},"Standard Interface Detection Interface (TIP-6.1)"),(0,r.kt)("h2",{id:"simple-summary"},"Simple summary"),(0,r.kt)("p",null,"Creates a standard method to publish and detect what interfaces a smart contract implements."),(0,r.kt)("h2",{id:"abstract"},"Abstract"),(0,r.kt)("p",null,"Herein, we standardize the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"How interfaces are identified"),(0,r.kt)("li",{parentName:"ul"},"How a contract will publish the interfaces it implements")),(0,r.kt)("h2",{id:"motivation"},"Motivation"),(0,r.kt)("p",null,"For some \u201cstandard interfaces\u201d like the token interface, it is sometimes useful to query whether a contract supports the interface and if yes, which version of the interface, in order to adapt the way in which the contract is to be interacted with. This proposal standardizes the concept of interfaces and standardizes the identification (naming) of interfaces."),(0,r.kt)("h2",{id:"specification"},"Specification"),(0,r.kt)("h3",{id:"how-interfaces-are-identified"},"How interfaces are identified"),(0,r.kt)("p",null,"For this standard, an interface is a set of function selectors as defined by the Solidity ABI. This a subset of Solidity\u2019s concept of interfaces and the interface keyword definition which also defines return types, mutability and events."),(0,r.kt)("p",null,"We define the interface identifier as the XOR of all function selectors in the interface. This code example shows how to calculate an interface identifier:"),(0,r.kt)("h4",{id:"solidity"},"Solidity"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"interface Solidity101 {\n    function hello() external pure;\n    function world(int) external pure;\n}\n\ncontract Selector {\n    function calculateSelector() public view returns (bytes4) {\n        Solidity101 i;\n        return bytes4(tvm.functionId(i.hello) ^ tvm.functionId(i.world));\n    }\n}\n")),(0,r.kt)("h4",{id:"how-a-contract-will-publish-the-interfaces-it-implements"},"How a Contract will Publish the Interfaces it Implements"),(0,r.kt)("p",null,"A contract that is compliant with TIP6.1 shall implement the following interface:"),(0,r.kt)("h4",{id:"solidity-1"},"Solidity"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"interface TIP6 {\n    /// @notice Query if a contract implements an interface\n    /// @param interfaceID The interface identifier, as specified in TIP6.1\n    /// @dev Interface identification is specified in TIP6.1.\n    /// @return `true` if the contract implements `interfaceID` and\n    ///  `interfaceID` is not 0xffffffff, `false` otherwise\n    function supportsInterface(bytes4 interfaceID) external view responsible returns (bool);\n}\n")),(0,r.kt)("p",null,"The interface identifier for this interface is ",(0,r.kt)("inlineCode",{parentName:"p"},"0x3204EC29"),". You can calculate this by running ",(0,r.kt)("inlineCode",{parentName:"p"},"tvm.functionId('supportsInterface(bytes4)')"),"; or using the Selector contract above."),(0,r.kt)("p",null,"Therefore, the implementing contract will have a ",(0,r.kt)("inlineCode",{parentName:"p"},"supportsInterface")," function that returns:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"true")," when ",(0,r.kt)("inlineCode",{parentName:"li"},"interfaceID")," is ",(0,r.kt)("inlineCode",{parentName:"li"},"0x3204EC29")," (TIP6.1 interface)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"false")," when ",(0,r.kt)("inlineCode",{parentName:"li"},"interfaceID")," is ",(0,r.kt)("inlineCode",{parentName:"li"},"0xffffffff")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"true")," for any other ",(0,r.kt)("inlineCode",{parentName:"li"},"interfaceID")," this contract implements"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"false")," for any other ",(0,r.kt)("inlineCode",{parentName:"li"},"interfaceID"))),(0,r.kt)("h2",{id:"references"},"References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://eips.ethereum.org/EIPS/eip-165"},"EIP-165: Standard Interface Detection"))))}p.isMDXComponent=!0}}]);