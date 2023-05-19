"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[1559],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>b});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,b=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(b,i(i({ref:t},u),{},{components:n})):r.createElement(b,i({ref:t},u))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(7294),a=n(6010);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,i),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>y});var r=n(7462),a=n(7294),o=n(6010),i=n(2466),l=n(6550),s=n(1980),c=n(7392),u=n(12);function p(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function d(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const r=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=d(e),[i,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[s,c]=b({queryString:n,groupId:r}),[p,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,u.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),v=(()=>{const e=s??p;return m({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{v&&l(v)}),[v]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),f(e)}),[c,f,o]),tabValues:o}}var v=n(2389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),d=e=>{const t=e.currentTarget,n=u.indexOf(t),r=c[n].value;r!==l&&(p(t),s(r))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:d},i,{className:(0,o.Z)("tabs__item",h.tabItem,i?.className,{"tabs__item--active":l===t})}),n??t)})))}function g(e){let{lazy:t,children:n,selectedValue:r}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function w(e){const t=f(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",h.tabList)},a.createElement(k,(0,r.Z)({},e,t)),a.createElement(g,(0,r.Z)({},e,t)))}function y(e){const t=(0,v.Z)();return a.createElement(w,(0,r.Z)({key:String(t)},e))}},161:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>b,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var r=n(7462),a=(n(7294),n(3905)),o=n(4866),i=n(5162);const l={sidebar_position:2},s="Connect Wallet",c={unversionedId:"develop/recipes/connect-wallet",id:"develop/recipes/connect-wallet",title:"Connect Wallet",description:"This is the most basic routine when you start working with any blockchain.",source:"@site/../../src/develop/recipes/connect-wallet.md",sourceDirName:"develop/recipes",slug:"/develop/recipes/connect-wallet",permalink:"/preview/PR-337/develop/recipes/connect-wallet",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/develop/recipes/connect-wallet.md",tags:[],version:"current",lastUpdatedAt:1684349049,formattedLastUpdatedAt:"May 17, 2023",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Other EVER SDK Guides",permalink:"/preview/PR-337/develop/recipes/ever-sdk-guides/other-sdk-guides"},next:{title:"Advanced usage of Surf Keeper",permalink:"/preview/PR-337/develop/recipes/surf-wallet-advanced"}},u={},p=[{value:"Check if the extension is available",id:"check-if-the-extension-is-available",level:3},{value:"Initialize Provider",id:"initialize-provider",level:3},{value:"Login and logout",id:"login-and-logout",level:3},{value:"NetworkId check",id:"networkid-check",level:3}],d={toc:p},m="wrapper";function b(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"connect-wallet"},"Connect Wallet"),(0,a.kt)("p",null,"This is the most basic routine when you start working with any blockchain."),(0,a.kt)("p",null,"And of course we have a way to do it in Everscale. In this section, we cover how to integrate with both EVER Wallet and Surf Keeper web-extensions. "),(0,a.kt)("h3",{id:"check-if-the-extension-is-available"},"Check if the extension is available"),(0,a.kt)("p",null,"We always start our interaction with the wallet by checking if the user has a wallet installed:"),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"inp-prov",label:"everscale-inpage-provider",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import {hasEverscaleProvider} from 'everscale-inpage-provider';\nconst isEverWalletInstalled = await hasEverscaleProvider();\n"))),(0,a.kt)(i.Z,{value:"surf-keeper",label:"surf-keeper-provider",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import {hasSurfKeeperProvider} from 'surf-keeper-provider';\nconst isSurfKeeperInstalled = await hasSurfKeeperProvider();\n")))),(0,a.kt)("p",null,"If the user doesn't have a wallet installed, ask him to install."),(0,a.kt)("h3",{id:"initialize-provider"},"Initialize Provider"),(0,a.kt)("p",null,"Next, we initialize the provider and retrieve its current state:"),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"inp-prov",label:"everscale-inpage-provider",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { ProviderRpcClient } from 'everscale-inpage-provider';\nconst ever = new ProviderRpcClient();\n// We may want to await for the extension to be fully initialized\n// await ever.ensureInitialized();\n// Get current provider state\nconst currentProviderState = await ever.getProviderState();\n")),(0,a.kt)("p",null,"The response should look like following (the values of parameters may change depending on version and selected network):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "version": "0.3.12",\n  "numericVersion": 3012,\n  "networkId": 31337,\n  "selectedConnection": "localnet",\n  "supportedPermissions": [\n    "basic",\n    "accountInteraction"\n  ],\n  "permissions": {},\n  "subscriptions": {}\n}\n'))),(0,a.kt)(i.Z,{value:"surf-keeper",label:"surf-keeper-provider",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { ProviderRpcClient } from '@eversurf/surfkeeper-provider';\nconst rpc = new ProviderRpcClient();\n\n// To check whether api is available await for \n// rpc.ensureInitialized();\n// connectStatus will return you the same result as `connect`\n// described in the next block if connnect was already granted \nconst connect = await rpc.connectStatus();\n")),(0,a.kt)("p",null,"The response should look like following (the values of parameters may change depending on version and selected network):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "isConnected": "true",\n  "address": "0x00...00",\n  "publicKey": "<pubkey>"\n}\n')))),(0,a.kt)("h3",{id:"login-and-logout"},"Login and logout"),(0,a.kt)("p",null,"Login flow is quite different for each wallet:"),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"inp-prov",label:"everscale-inpage-provider",mdxType:"TabItem"},(0,a.kt)("p",null,"To login, we ask a user for permissions to interact with one of the accounts available in his wallet. Two permissions are supported. These are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"basic")," - allows the site to retrieve data from the blockchain and use the API to decrypt transactions."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"accountInteraction")," - allows the page to prompt the user for transactions and perform other interactions such as signing a message.")),(0,a.kt)("p",null,"Asking the user for permission (connect the wallet):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// Subscribe to new permissions\n(await ever.subscribe('permissionsChanged')).on('data', permissions = > {\n  // You can monitor changes in permissions there\n  console.log('permissions from subscription', permissions);\n});\n// The provider has several events to subscribe to\n// connected, disconnected, networkChanged, permissionsChanged, loggedOut\n\n// Or you can get new permissions there\nconst permissions = await ever.requestPermissions({\n  permissions: ['basic', 'accountInteraction']\n});\n")),(0,a.kt)("p",null,"The response should look like following (may vary depending on the wallet address, public key, and wallet contract type)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "accountInteraction": {\n    "address": "0:3036eb00ab5e3e6824d564b53c4e37f999e8d3db2cb1d878db1d20ae3a5408b6",\n    "publicKey": "8eea533b840a598af3975d139926ba7f3888d3226f8597732227fe0fbf3875ac",\n    "contractType": "SafeMultisigWallet"\n  },\n  "basic": true\n}\n')),(0,a.kt)("p",null,"You may want to provide \u201clogout\u201d and \u201cchange account\u201d features in your app, using following interface:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// To disconnect, you can use\nawait ever.disconnect();\n// or changeAccount\nawait ever.changeAccount();\n"))),(0,a.kt)(i.Z,{value:"surf-keeper",label:"surf-keeper-provider",mdxType:"TabItem"},(0,a.kt)("p",null,"To interact with one's account we request permission to connect a page to the extension. It is as simple as:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const connectResponse = await rpc.connect();\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"NOTE:")),"  By this time extension should be initialized and be logged in into user's account.")),(0,a.kt)("p",null,"  The response should look like following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "isConnected": "true",\n  "address": "0x00...00",\n  "publicKey": "<pubkey>"\n}\n')),(0,a.kt)("p",null,"You may want to provide disconnect option in your app, using following interface:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"await rpc.disconnect();\n")),(0,a.kt)("p",null,"  The response should look like following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "isConnected": "false",\n}\n')))),(0,a.kt)("h3",{id:"networkid-check"},"NetworkId check"),(0,a.kt)("p",null,"After we got the permissions, we can interact with the wallet and retrieve data from the blockchain. You may want to render different thing for differend networks (mainnet / testnet)."),(0,a.kt)("p",null,"Let\u2019s assume our target contract is deployed in the testnet. We want to check the networkId to ensure, that we are connected correctly."),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"inp-prov",label:"everscale-inpage-provider",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// Subscribe to network changed event\nconst networkSubscriber = await ever.subscribe('networkChanged');\nnetworkSubscriber.on('data', (event) => {\n// track changes in the network id\n  if (event.networkId === 2) {\n    // We are on the testnet now\n  } else {\n    // Still not on the testnet\n  }\n});\n// You can use await networkSubscriber.unsubscribe(); to cancel the subscription\nconst currentProviderState = await ever.getProviderState();\nif (currentProviderState.networkId !== 2) {\n  // Ask user to change the network\n} else {\n  // Everything is okay\n}\n")))))}b.isMDXComponent=!0}}]);