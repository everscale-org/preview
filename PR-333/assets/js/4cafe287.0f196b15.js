"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[1049],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5113:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={title:"Pseudo-code",description:"The pseudo-code language we use to define the behavior"},i="Pseudo-code Semantics",l={unversionedId:"arch/pseudo-code",id:"arch/pseudo-code",title:"Pseudo-code",description:"The pseudo-code language we use to define the behavior",source:"@site/../../src/arch/20-pseudo-code.md",sourceDirName:"arch",slug:"/arch/pseudo-code",permalink:"/preview/PR-333/arch/pseudo-code",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/arch/20-pseudo-code.md",tags:[],version:"current",lastUpdatedAt:1684270521,formattedLastUpdatedAt:"May 16, 2023",sidebarPosition:20,frontMatter:{title:"Pseudo-code",description:"The pseudo-code language we use to define the behavior"},sidebar:"tutorialSidebar",previous:{title:"Ever OS",permalink:"/preview/PR-333/arch/ever-os"},next:{title:"Fee calculation",permalink:"/preview/PR-333/arch/fee-calculation"}},s={},c=[],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"pseudo-code-semantics"},"Pseudo-code Semantics"),(0,a.kt)("p",null,"A few words about the pseudo-code language we use to define the behavior of the Architecture parts."),(0,a.kt)("p",null,"The language used is Python-like, with nearly intuitive semantics."),(0,a.kt)("p",null,"We would like to highlight the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"For basic values like ",(0,a.kt)("inlineCode",{parentName:"li"},"Ints")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"Bools"),", the assignment operator copies the value."),(0,a.kt)("li",{parentName:"ul"},"For complex data types (objects), the assignment operator copies a reference to the object instead of creating a new instance."),(0,a.kt)("li",{parentName:"ul"},"The call ",(0,a.kt)("inlineCode",{parentName:"li"},"obj.clone()")," creates a deep copy of the object ",(0,a.kt)("inlineCode",{parentName:"li"},"obj"),"."),(0,a.kt)("li",{parentName:"ul"},"The input arguments are passed by reference, so, mutating them within the function would mutate them for the caller also."),(0,a.kt)("li",{parentName:"ul"},"Sometimes, the default value is irrelevant and not specified explicitly. Default values for structure fields are:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"0")," for ",(0,a.kt)("inlineCode",{parentName:"li"},"Ints")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"False")," for ",(0,a.kt)("inlineCode",{parentName:"li"},"Bools")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"None")," for ",(0,a.kt)("inlineCode",{parentName:"li"},"Option")),(0,a.kt)("li",{parentName:"ul"},"For ",(0,a.kt)("inlineCode",{parentName:"li"},"Enum")," types, the default value is the first item in the enumeration."))),(0,a.kt)("li",{parentName:"ul"},"In few places, we use idiomatic ",(0,a.kt)("inlineCode",{parentName:"li"},"Python")," values swap: ",(0,a.kt)("inlineCode",{parentName:"li"},"a, b = b, a")," This construct exchanges the values of ",(0,a.kt)("inlineCode",{parentName:"li"},"a")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"b"),"."),(0,a.kt)("li",{parentName:"ul"},"The object method syntax is used in few places, for example: ",(0,a.kt)("inlineCode",{parentName:"li"},"obj.method(p1, p2,...) = method(obj, p1, p2,...)"),"."),(0,a.kt)("li",{parentName:"ul"},"Types and namespaces begin with uppercase letter, for example: ",(0,a.kt)("inlineCode",{parentName:"li"},"TransactionExecutor.TrExecutorError()")," denotes the object ",(0,a.kt)("inlineCode",{parentName:"li"},"TrExecutorError")," residing in the namespace ",(0,a.kt)("inlineCode",{parentName:"li"},"TransactionExecutor")),(0,a.kt)("li",{parentName:"ul"},"We use ",(0,a.kt)("strong",{parentName:"li"},"is")," operator to do type test. For example, to test that message is internal, we use the following construct:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"if in_msg.header is IntMsgInfo:\nreturn ExecuteInternalMessage(in_msg, ...)\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"We omit details of some global objects, and just assume they exist. For example, the virtual machine is created using some abstract ",(0,a.kt)("em",{parentName:"li"},"TVM")," object. The same goes for system error enumerations. It is done this way not to overload the pseudo-code with easily recoverable details.")))}d.isMDXComponent=!0}}]);