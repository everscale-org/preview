"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[9126],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var r=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(a),m=o,h=p["".concat(s,".").concat(m)]||p[m]||u[m]||n;return a?r.createElement(h,i(i({ref:t},d),{},{components:a})):r.createElement(h,i({ref:t},d))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<n;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2948:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var r=a(7462),o=(a(7294),a(3905));const n={sidebar_position:2},i="Validator Elections",l={unversionedId:"validate/run-validator/validator-elections",id:"validate/run-validator/validator-elections",title:"Validator Elections",description:"After having studied how to run a validator node, please follow the description below in order to understand how a validator is elected. It explains in detail the election process using an electoral contract.",source:"@site/../../src/validate/run-validator/validator-elections.md",sourceDirName:"validate/run-validator",slug:"/validate/run-validator/validator-elections",permalink:"/preview/PR-331/validate/run-validator/validator-elections",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/validate/run-validator/validator-elections.md",tags:[],version:"current",lastUpdatedAt:1655223035,formattedLastUpdatedAt:"Jun 14, 2022",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Run Testnet Node",permalink:"/preview/PR-331/validate/run-validator/run-testnet-node"},next:{title:"Update Validator",permalink:"/preview/PR-331/validate/run-validator/update-validator"}},s={},c=[],d={toc:c},p="wrapper";function u(e){let{components:t,...a}=e;return(0,o.kt)(p,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"validator-elections"},"Validator Elections"),(0,o.kt)("p",null,"After having studied how to run a validator node, please follow the description below in order to understand how a validator is elected. It explains in detail the election process using an electoral contract. "),(0,o.kt)("p",null,"The election mechanism works as follows:"),(0,o.kt)("p",null,"Firstly, it should be noted that elections of validators take place every 18 hours in respect to the current network configuration."),(0,o.kt)("p",null,"Each period consists of 3 phases:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The election is open, the elector's smart contract accepts new stakes, and previous validators can return their stakes from the elector's smart contract.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The election is over and the smart contract determines the group of validators for the next phase.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"A new group of validators starts working. The stakes of the former group of validators are temporarily frozen."))),(0,o.kt)("p",null,"The electoral smart contract operates according to the following rules:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The following parameters are taken from the network configuration: a) Min and Max number of validators; b) Min and Max stake size; c) Maximum difference between the first (maximum) and last (minimum) validator stakes.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The maximum group of validators is selected, starting from the largest stake (and moving further in the stake descending order. In the case that the amounts of stakes coincide, then the time of the validator serving in the network is considered), which has a difference between the largest and smallest stakes no more than max_factor.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"For the next stake, the sum of all the stakes is calculated in such a way as to comply with the max_factor rule. For this, the largest stake (or stakes) is trimmed in order to meet the max_factor rules. If the resulting sum of all the stakes has become larger, then the elector's smart contract tries to select the next stakes, in the descending stakes order, according to the max_factor rule.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"As soon as the total stake calculated according to the above mentioned procedure stops growing, that is, the maximum amount of stakes is found, then this stake is considered to have passed the elections - then, all past elections, and validators will begin to validate for the next election period, and the trimmed parts of the stakes (if any) are immediately returned to wallets from which they were sent."))),(0,o.kt)("p",null,"Please follow ",(0,o.kt)("a",{parentName:"p",href:"https://docs.everscale.network/validate/run-validator/update-validator"},(0,o.kt)("strong",{parentName:"a"},"this page"))," in order to find out how a Validator is Updated."))}u.isMDXComponent=!0}}]);