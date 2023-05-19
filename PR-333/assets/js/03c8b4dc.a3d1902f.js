"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[4552],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),l=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=l(a),f=n,m=c["".concat(p,".").concat(f)]||c[f]||d[f]||i;return a?r.createElement(m,o(o({ref:t},u),{},{components:a})):r.createElement(m,o({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=f;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:n,o[1]=s;for(var l=2;l<i;l++)o[l]=a[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},8322:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=a(7462),n=(a(7294),a(3905));const i={sidebar_position:2},o="FlatQube API",s={unversionedId:"develop/integrate/products-api/flatqube",id:"develop/integrate/products-api/flatqube",title:"FlatQube API",description:"FlatQube DEX, powered by Broxus, is a decentralized digital asset exchange providing users a convenient means of exchanging their cryptocurrency. The DEX also provides users with a plethora of options for earning a passive income through its farming and staking mechanisms.",source:"@site/../../src/develop/integrate/products-api/flatqube.md",sourceDirName:"develop/integrate/products-api",slug:"/develop/integrate/products-api/flatqube",permalink:"/preview/PR-333/develop/integrate/products-api/flatqube",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/develop/integrate/products-api/flatqube.md",tags:[],version:"current",lastUpdatedAt:1670335891,formattedLastUpdatedAt:"Dec 6, 2022",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"EVER Scan API",permalink:"/preview/PR-333/develop/integrate/products-api/everscan"},next:{title:"Octus Bridge API",permalink:"/preview/PR-333/develop/integrate/products-api/octus-bridge"}},p={},l=[],u={toc:l},c="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(c,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"flatqube-api"},"FlatQube API"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://flatqube.io/"},(0,n.kt)("strong",{parentName:"a"},"FlatQube DEX")),", powered by Broxus, is a decentralized digital asset exchange providing users a convenient means of exchanging their cryptocurrency. The DEX also provides users with a plethora of options for earning a passive income through its farming and staking mechanisms."),(0,n.kt)("p",null,"The APIs below are used by FlatQube itself to facilitate user interfaces. "),(0,n.kt)("p",null,"The information below will allow you to familiarize yourself with the various function calls, as well as examples of their use."),(0,n.kt)("p",null,"All of the API call methods below are divided into 2 sections: ",(0,n.kt)("a",{parentName:"p",href:"https://docs.flatqube.io/integrate/open-api/flatqube-dex-indexer"},"FlatQube Dex Indexer")," and ",(0,n.kt)("a",{parentName:"p",href:"https://docs.flatqube.io/integrate/open-api/flatqube-farming-indexer"},"FlatQube Farming Indexer"),"."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.flatqube.io/integrate/open-api/flatqube-dex-indexer"},(0,n.kt)("strong",{parentName:"a"},"Dex Indexer")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.flatqube.io/integrate/open-api/flatqube-dex-indexer/cmc-api"},(0,n.kt)("strong",{parentName:"a"},"CMC API"))," - used to view all DEX pools with their information and get information about farming pools."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.flatqube.io/integrate/open-api/flatqube-dex-indexer/currencies-api"},(0,n.kt)("strong",{parentName:"a"},"Currencies API"))," - used to get DEX currencys data."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.flatqube.io/integrate/open-api/flatqube-dex-indexer/pairs"},(0,n.kt)("strong",{parentName:"a"},"Pairs API"))," - used to get DEX pairs data."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.flatqube.io/integrate/open-api/flatqube-dex-indexer/transactions-api"},(0,n.kt)("strong",{parentName:"a"},"Transactions API"))," - used to get DEX transactions data."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.flatqube.io/integrate/open-api/flatqube-farming-indexer"},(0,n.kt)("strong",{parentName:"a"},"Farming Indexer")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.flatqube.io/integrate/open-api/flatqube-farming-indexer/farming-pools-api"},(0,n.kt)("strong",{parentName:"a"},"Farming pools API"))," - used to get farming pools list and their data, such as balances, token addresses, etc."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.flatqube.io/integrate/open-api/flatqube-farming-indexer/transactions-api"},(0,n.kt)("strong",{parentName:"a"},"Transactions API"))," - used to get transactions data."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.flatqube.io/integrate/open-api/flatqube-farming-indexer/graphics-api"},(0,n.kt)("strong",{parentName:"a"},"Graphics API"))," - used to get graphs data, such as TVL, APR and other.")))))}d.isMDXComponent=!0}}]);