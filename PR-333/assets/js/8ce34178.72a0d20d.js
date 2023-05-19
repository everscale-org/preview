"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[5339],{3905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>u});var n=t(7294);function s(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){s(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,s=function(e,a){if(null==e)return{};var t,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var o=n.createContext({}),m=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},p=function(e){var a=m(e.components);return n.createElement(o.Provider,{value:a},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},h=n.forwardRef((function(e,a){var t=e.components,s=e.mdxType,r=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=m(t),h=s,u=c["".concat(o,".").concat(h)]||c[h]||g[h]||r;return t?n.createElement(u,i(i({ref:a},p),{},{components:t})):n.createElement(u,i({ref:a},p))}));function u(e,a){var t=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var r=t.length,i=new Array(r);i[0]=h;var l={};for(var o in a)hasOwnProperty.call(a,o)&&(l[o]=a[o]);l.originalType=e,l[c]="string"==typeof e?e:s,i[1]=l;for(var m=2;m<r;m++)i[m]=t[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"},1031:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>i,default:()=>g,frontMatter:()=>r,metadata:()=>l,toc:()=>m});var n=t(7462),s=(t(7294),t(3905));const r={title:"Managing gas",description:"The entire state of TVM consists of the five components"},i="Managing gas",l={unversionedId:"arch/managing-gas",id:"arch/managing-gas",title:"Managing gas",description:"The entire state of TVM consists of the five components",source:"@site/../../src/arch/30-managing-gas.md",sourceDirName:"arch",slug:"/arch/managing-gas",permalink:"/preview/PR-333/arch/managing-gas",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/arch/30-managing-gas.md",tags:[],version:"current",lastUpdatedAt:1684270521,formattedLastUpdatedAt:"May 16, 2023",sidebarPosition:30,frontMatter:{title:"Managing gas",description:"The entire state of TVM consists of the five components"},sidebar:"tutorialSidebar",previous:{title:"Fee calculation",permalink:"/preview/PR-333/arch/fee-calculation"},next:{title:"Executor",permalink:"/preview/PR-333/arch/executor"}},o={},m=[{value:"Gas calculation basics",id:"gas-calculation-basics",level:2},{value:"Specification Overview",id:"specification-overview",level:3},{value:"Gas prices",id:"gas-prices",level:3},{value:"Global gas limits",id:"global-gas-limits",level:3},{value:"Gas-related TVM primitives",id:"gas-related-tvm-primitives",level:3},{value:"Gas initialization types",id:"gas-initialization-types",level:2},{value:"1. Calling contract from another contract",id:"1-calling-contract-from-another-contract",level:3},{value:"2. Offchain contract call",id:"2-offchain-contract-call",level:3}],p={toc:m},c="wrapper";function g(e){let{components:a,...t}=e;return(0,s.kt)(c,(0,n.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"managing-gas"},"Managing gas"),(0,s.kt)("h2",{id:"gas-calculation-basics"},"Gas calculation basics"),(0,s.kt)("h3",{id:"specification-overview"},"Specification Overview"),(0,s.kt)("p",null,"The entire state of TVM consists of the five components:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Stack"),(0,s.kt)("li",{parentName:"ul"},"Control registers"),(0,s.kt)("li",{parentName:"ul"},"Current continuation"),(0,s.kt)("li",{parentName:"ul"},"Current codepage"),(0,s.kt)("li",{parentName:"ul"},"Gas limits")),(0,s.kt)("p",null,"Collectively these are called ",(0,s.kt)("inlineCode",{parentName:"p"},"SCCCG"),"."),(0,s.kt)("p",null,"Check out section ",(0,s.kt)("strong",{parentName:"p"},"1.4")," of the ",(0,s.kt)("a",{parentName:"p",href:"https://ton.org/tvm.pdf"},"TVM specification"),"."),(0,s.kt)("p",null,"The ",(0,s.kt)("strong",{parentName:"p"},"Gas")," component limits gas usage and \u0441ontains four signed 64-bit integers:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"the remaining gas: ",(0,s.kt)("strong",{parentName:"li"},"gr")),(0,s.kt)("li",{parentName:"ul"},"the current gas limit: ",(0,s.kt)("strong",{parentName:"li"},"gl")),(0,s.kt)("li",{parentName:"ul"},"the maximal gas limit: ",(0,s.kt)("strong",{parentName:"li"},"gm")),(0,s.kt)("li",{parentName:"ul"},"the gas credit: ",(0,s.kt)("strong",{parentName:"li"},"gc"))),(0,s.kt)("p",null,"The following is always true:"),(0,s.kt)("div",{className:"math math-display"},(0,s.kt)("span",{parentName:"div",className:"katex-display"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mn",{parentName:"mrow"},"0"),(0,s.kt)("mo",{parentName:"mrow"},"\u2264"),(0,s.kt)("mi",{parentName:"mrow"},"g"),(0,s.kt)("mi",{parentName:"mrow"},"l"),(0,s.kt)("mo",{parentName:"mrow"},"\u2264"),(0,s.kt)("mi",{parentName:"mrow"},"g"),(0,s.kt)("mi",{parentName:"mrow"},"m"),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,s.kt)("mi",{parentName:"mrow"},"g"),(0,s.kt)("mi",{parentName:"mrow"},"c"),(0,s.kt)("mo",{parentName:"mrow"},"\u2265"),(0,s.kt)("mn",{parentName:"mrow"},"0"),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,s.kt)("mi",{parentName:"mrow"},"a"),(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mi",{parentName:"mrow"},"d"),(0,s.kt)("mi",{parentName:"mrow"},"g"),(0,s.kt)("mi",{parentName:"mrow"},"r"),(0,s.kt)("mo",{parentName:"mrow"},"\u2264"),(0,s.kt)("mi",{parentName:"mrow"},"g"),(0,s.kt)("mi",{parentName:"mrow"},"l"),(0,s.kt)("mo",{parentName:"mrow"},"+"),(0,s.kt)("mi",{parentName:"mrow"},"g"),(0,s.kt)("mi",{parentName:"mrow"},"c")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"0 \u2264 gl \u2264 gm, gc \u2265 0, and gr \u2264 gl + gc")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7804em",verticalAlign:"-0.136em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"0"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"\u2264"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"g"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"\u2264"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8304em",verticalAlign:"-0.1944em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"g"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"m"),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"g"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"c"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"\u2265"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"0"),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"an"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"d"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"g"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"r"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"\u2264"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"g"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"g"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"c")))))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"gc")," is initialized by zero for internal messages, ",(0,s.kt)("strong",{parentName:"p"},"gr")," is initialized by ",(0,s.kt)("inlineCode",{parentName:"p"},"gl + gc")," and gradually decreases, as the TVM runs. When gr becomes negative or if contract terminates with ",(0,s.kt)("inlineCode",{parentName:"p"},"gc > 0"),", an ",(0,s.kt)("strong",{parentName:"p"},"out of gas")," exception is triggered."),(0,s.kt)("h3",{id:"gas-prices"},"Gas prices"),(0,s.kt)("p",null,"As stated in ",(0,s.kt)("strong",{parentName:"p"},"A.1")," of the ",(0,s.kt)("a",{parentName:"p",href:"https://ton.org/tvm.pdf"},"TVM specification"),"."),(0,s.kt)("p",null,"According to the original TON, for most primitives gas is calculated according to the following formula:"),(0,s.kt)("div",{className:"math math-display"},(0,s.kt)("span",{parentName:"div",className:"katex-display"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"P"),(0,s.kt)("mi",{parentName:"mrow"},"b"),(0,s.kt)("mo",{parentName:"mrow"},":"),(0,s.kt)("mo",{parentName:"mrow"},"="),(0,s.kt)("mn",{parentName:"mrow"},"10"),(0,s.kt)("mo",{parentName:"mrow"},"+"),(0,s.kt)("mi",{parentName:"mrow"},"b")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"Pb := 10 + b")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6944em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"P"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"b"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},":="),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"10"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6944em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"b")))))),(0,s.kt)("p",null,"where ",(0,s.kt)("strong",{parentName:"p"},"b")," is the instruction length in bits. The same is true for EverX implementation."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"For example:")," the gas required for ",(0,s.kt)("inlineCode",{parentName:"p"},"A0")," (",(0,s.kt)("strong",{parentName:"p"},"ADD"),") instruction is ",(0,s.kt)("inlineCode",{parentName:"p"},"10 + 8 = 18 gas"),", while the gas for ",(0,s.kt)("inlineCode",{parentName:"p"},"A6cc")," (",(0,s.kt)("strong",{parentName:"p"},"ADDCONST")," ",(0,s.kt)("inlineCode",{parentName:"p"},"cc"),") instruction is ",(0,s.kt)("inlineCode",{parentName:"p"},"10 + 16 = 26 gas"),"."),(0,s.kt)("p",null,"For some instructions this rule does not apply. TVM specification lists either total gas prices, or prices in addition to the basic ",(0,s.kt)("strong",{parentName:"p"},"Pb")," for them explicitly."),(0,s.kt)("p",null,"Instruction list with additional information may be obtained in ",(0,s.kt)("strong",{parentName:"p"},"A.2")," through ",(0,s.kt)("strong",{parentName:"p"},"A.13")," of the ",(0,s.kt)("a",{parentName:"p",href:"https://ton.org/tvm.pdf"},"TVM specification"),"."),(0,s.kt)("p",null,"Apart from integer constants, the following expressions may appear:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"The total price of loading cells. Currently it is 100 gas units per cell. Reloading a cell again now costs 25 gas units."),(0,s.kt)("li",{parentName:"ul"},"The total price of creating new Cells from Builders. Currently it is 500 gas units."),(0,s.kt)("li",{parentName:"ul"},"Exception throwing. 50 gas units per exception."),(0,s.kt)("li",{parentName:"ul"},"Exiting the block costs 5 gas units per implicit RET. Jumping to the first link costs 10 gas units - implicit JUMP."),(0,s.kt)("li",{parentName:"ul"},"Moving to a new continuation with transferring parameters costs gas if there are more then 32 parameters. It costs N-32 gas, where N is the number of parameters."),(0,s.kt)("li",{parentName:"ul"},"Tuple gas price. 1 gas unit for every tuple element.")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("strong",{parentName:"p"},"Note:")," that the most expensive operations are dictionary read/write operations. Dictionaries are stored in the form of trees of cells, where each cell can only be linked to four others. As result, these trees can grow quite large, depending on the data that needs to be stored. To read data in any cell, all its parent cells need to be read first, at the price of 100 gas per cell, and to write data in a cell, similarly all its parent cells need to be (re)created at the price of 500 gas per cell.")),(0,s.kt)("h3",{id:"global-gas-limits"},"Global gas limits"),(0,s.kt)("p",null,"Global gas limits are values stored in the masterchain configuration contract. Global values are standard and do not change at contract deployment. Only validator consensus can modify them."),(0,s.kt)("p",null,"The values currently used can always be reviewed on ",(0,s.kt)("a",{parentName:"p",href:"https://ever.live/"},"ever.live")," in the latest key block details (",(0,s.kt)("a",{parentName:"p",href:"https://net.ever.live/blocks?section=details&id=8cee868a94b1e22794a927279286dc95498310cda982f4657e351a3da693cf27"},"example")," ",(0,s.kt)("inlineCode",{parentName:"p"},"FIXME broken link"),"). ",(0,s.kt)("inlineCode",{parentName:"p"},"p20")," config parameter values are used for masterchain and ",(0,s.kt)("inlineCode",{parentName:"p"},"p21")," values are used for workchain."),(0,s.kt)("h3",{id:"gas-related-tvm-primitives"},"Gas-related TVM primitives"),(0,s.kt)("p",null,"These is the list of official TVM primitives used for gas-related operations:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"F800")," \u2014 ",(0,s.kt)("inlineCode",{parentName:"li"},"ACCEPT"),", sets current gas limit ",(0,s.kt)("strong",{parentName:"li"},"gl")," to its maximal allowed value ",(0,s.kt)("strong",{parentName:"li"},"gm"),", and resets the gas credit ",(0,s.kt)("strong",{parentName:"li"},"gc")," to zero, decreasing the value of ",(0,s.kt)("strong",{parentName:"li"},"gr")," by ",(0,s.kt)("strong",{parentName:"li"},"gc")," in the process. In other words, the current smart contract agrees to buy some gas to finish the current transaction. This action is required to process external messages, which bring no value (hence no gas) with themselves."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"F801")," \u2014 ",(0,s.kt)("inlineCode",{parentName:"li"},"SETGASLIMIT (g \u2013 )"),", sets current gas limit gl to the minimum of g and gm, and resets the gas credit ",(0,s.kt)("strong",{parentName:"li"},"gc")," to zero. If the gas consumed so far (including the present instruction) exceeds the resulting value of ",(0,s.kt)("strong",{parentName:"li"},"gl"),", an (unhandled) out of gas exception is thrown before setting new gas limits. Notice that ",(0,s.kt)("inlineCode",{parentName:"li"},"SETGASLIMIT")," with an argument ",(0,s.kt)("inlineCode",{parentName:"li"},"g \u2265 2 63 \u2212 1")," is equivalent to ",(0,s.kt)("inlineCode",{parentName:"li"},"ACCEPT"),"."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"F802")," \u2014 ",(0,s.kt)("inlineCode",{parentName:"li"},"BUYGAS (x \u2013 )"),", computes the amount of gas that can be bought for ",(0,s.kt)("strong",{parentName:"li"},"x")," nanotokens, and sets ",(0,s.kt)("strong",{parentName:"li"},"gl")," accordingly in the same way as SETGASLIMIT."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"F804")," \u2014 ",(0,s.kt)("inlineCode",{parentName:"li"},"GRAMTOGAS (x \u2013 g)"),", computes the amount of gas that can be bought for ",(0,s.kt)("strong",{parentName:"li"},"x")," nanotokens. If ",(0,s.kt)("strong",{parentName:"li"},"x")," is negative, returns 0. If ",(0,s.kt)("strong",{parentName:"li"},"g")," exceeds 2 63\u22121, it is replaced with this value."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"F805")," \u2014 ",(0,s.kt)("inlineCode",{parentName:"li"},"GASTOGRAM (g \u2013 x)"),", computes the price of ",(0,s.kt)("strong",{parentName:"li"},"g")," gas in nanotokens."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"F806\u2013F80F")," \u2014 Reserved for gas-related primitives. These are yet to be released.")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("strong",{parentName:"p"},"Note:")," F802, F804, F805 are not implemented in Telegram TON node.")),(0,s.kt)("p",null,"In Evernode, the general gas formula is the same as specified by TON specifications. Overall, Evernode operate in compliance with the specification."),(0,s.kt)("p",null,"For every executed primitive, the amount of gas is added to the virtual machine according to the specification formula. Gas value for every primitive is based on gr."),(0,s.kt)("h2",{id:"gas-initialization-types"},"Gas initialization types"),(0,s.kt)("h3",{id:"1-calling-contract-from-another-contract"},"1. Calling contract from another contract"),(0,s.kt)("p",null,"An internal message with a balance value is received. In this case, the following formulas are applied to determine limits:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},"gm = MIN(account balance / gas price, global_gas_limit)\ngl = MIN(message value / gas price, global_gas_limit)\ngc = 0\ngr = gc + gl\n")),(0,s.kt)("p",null,"By default, gas costs are allocated to the caller contract that triggers the transaction with a message. Accepting is also available for internal contracts. If ",(0,s.kt)("inlineCode",{parentName:"p"},"ACCEPT")," is not called, gas is taken from the caller contract according to the message value. In other words, the message value defines the current limit. The message value determines the starting TVM gas limit."),(0,s.kt)("p",null,"So, to put it plain, if ",(0,s.kt)("inlineCode",{parentName:"p"},"ACCEPT")," is not called, the message pays, if ",(0,s.kt)("inlineCode",{parentName:"p"},"ACCEPT")," is used, additional gas can be bought by the target contract. This approach enables flexible contract design where either total gas is paid by the caller contract (but in this case it has to have enough gas at any moment of time) or the target contract also incurs costs."),(0,s.kt)("h3",{id:"2-offchain-contract-call"},"2. Offchain contract call"),(0,s.kt)("p",null,"External messages do not carry balance values. In this case, the values are calculated according to the following formulas:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},"gm = MIN(account balance / gas price, global_gas_limit)\ngl = 0\ngc = MIN(gm, global_gas_credit)\ngr = gc + gl\n")),(0,s.kt)("p",null,"As external messages have no gas value, gas is credited to execute it. Target contracts have to cover costs by calling Accept to buy gas."),(0,s.kt)("p",null,"If a contract returns an exception before the credit is given, no gas fee applies."),(0,s.kt)("p",null,"As the public code for node has just been released this documentation is likely to be updated."),(0,s.kt)("p",null,"Managing Gas in Solidity\nSome Theory\nAnyone can send external message to your contract. When a message arrives, the contract initial gas limit is equal to 10,000 units of credit gas that should be bought later by the ACCEPT TVM primitive. Otherwise when credit gas falls to zero, the TVM throws the out of gas exception. The contract is supposed to spend these 10,000 units of 'free' gas to check the body of an inbound message tp make sure that it is valid and can be processed by contract successfully."),(0,s.kt)("p",null,"The idea of credit gas allowance is that as long as it is beyond zero, any exception thrown by contract prevents all further gas charges. But once the contract accepts a message, all gas consumed by contract is converted to gas fees regardless of whether a transaction is aborted or not."),(0,s.kt)("p",null,"ACCEPT is useful in internal messages too. When another contract sends an internal message to your contract, initial gas limit is equal to an inbound message value divided by the gas_price or global gas limit, if it is smaller. If this value is not enough to finish execution, the contract then can increase its gas limit by calling ACCEPT or SETGASLIMIT primitive. The ACCEPT primitive increases the limit to the value of its balance divided by the gas_price, and the SETGASLIMIT primitive sets the current gas limit to the value popped from the TVM stack (the value cannot be bigger than the gm limit)."),(0,s.kt)("p",null,"With the ACCEPT command a contract can choose whether gas for its execution is paid by the caller contract or by the contract itself."),(0,s.kt)("p",null,"Implementation\nIn EverX the ACCEPT primitive is implemented in Solidity as a private function called by public functions."),(0,s.kt)("p",null,"Find below actual usage examples. All can be compiled using EverX Solidity compiler."),(0,s.kt)("p",null,"Accept gas inside function\nTo avoid gas payment when the foo function is called by another contract, we can use the following code:"),(0,s.kt)("p",null,"Remember that the caller contract should attach enough tokens to its message to cover all gas that will be spend by foo function."),(0,s.kt)("p",null,"Accept gas inside modifier"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-solidity"},"contract AcceptExample2 {\n    uint _sum = 0;\n    \n    modifier AlwaysAccept() {\n        tvm.accept();\n        _;\n    }\n    \n    function foo(uint a, uint b) AlwaysAccept() public {\n        _sum = a + b;\n    }\n}\n")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("strong",{parentName:"p"},"Important:")," modifier is called before arguments are deserialized from inbound message body. In the example above ",(0,s.kt)("inlineCode",{parentName:"p"},"AlwaysAccept()")," will be called before ",(0,s.kt)("inlineCode",{parentName:"p"},"a")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"b")," are decoded.")))}g.isMDXComponent=!0}}]);