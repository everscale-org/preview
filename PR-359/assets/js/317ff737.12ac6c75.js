"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[7193],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),i=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=i(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=i(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(h,s(s({ref:t},u),{},{components:n})):a.createElement(h,s({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[d]="string"==typeof e?e:r,s[1]=c;for(var i=2;i<o;i++)s[i]=n[i];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(7294),r=n(6010);const o={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:n,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,s),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(7462),r=n(7294),o=n(6010),s=n(2466),c=n(6550),l=n(1980),i=n(7392),u=n(12);function d(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,c.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=p(e),[s,c]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[l,i]=h({queryString:n,groupId:a}),[d,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),v=(()=>{const e=l??d;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{v&&c(v)}),[v]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);c(e),i(e),b(e)}),[i,b,o]),tabValues:o}}var v=n(2389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:n,selectedValue:c,selectValue:l,tabValues:i}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.o5)(),p=e=>{const t=e.currentTarget,n=u.indexOf(t),a=i[n].value;a!==c&&(d(t),l(a))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},i.map((e=>{let{value:t,label:n,attributes:s}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:c===t?0:-1,"aria-selected":c===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:p},s,{className:(0,o.Z)("tabs__item",f.tabItem,s?.className,{"tabs__item--active":c===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function k(e){const t=b(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",f.tabList)},r.createElement(g,(0,a.Z)({},e,t)),r.createElement(y,(0,a.Z)({},e,t)))}function w(e){const t=(0,v.Z)();return r.createElement(k,(0,a.Z)({key:String(t)},e))}},6246:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>d});var a=n(7462),r=(n(7294),n(3905)),o=n(4866),s=n(5162);const c={sidebar_position:7},l="Write data to blockchain",i={unversionedId:"develop/recipes/write-data",id:"develop/recipes/write-data",title:"Write data to blockchain",description:"To put something in the Everscale blockchain, you need to send an external message to some account. Depending on a use-case and smart-contract logic, you may also want the account (usually it will be a users' Wallet smart-contract) to act as a proxy and forward your message to other contract. In this article, we describe both cases",source:"@site/../../src/develop/recipes/write-data.md",sourceDirName:"develop/recipes",slug:"/develop/recipes/write-data",permalink:"/preview/PR-359/develop/recipes/write-data",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/develop/recipes/write-data.md",tags:[],version:"current",lastUpdatedAt:1688495820,formattedLastUpdatedAt:"Jul 4, 2023",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Read data from blockchain",permalink:"/preview/PR-359/develop/recipes/read-data"},next:{title:"GraphQL code generation",permalink:"/preview/PR-359/develop/payment"}},u={},d=[{value:"Send External Message",id:"send-external-message",level:2},{value:"Encode and send Internal Message",id:"encode-and-send-internal-message",level:2},{value:"Links",id:"links",level:2}],p={toc:d},m="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"write-data-to-blockchain"},"Write data to blockchain"),(0,r.kt)("p",null,"To put something in the Everscale blockchain, you need to send an external message to some account. Depending on a use-case and smart-contract logic, you may also want the account (usually it will be a users' Wallet smart-contract) to act as a proxy and forward your message to other contract. In this article, we describe both cases"),(0,r.kt)("h2",{id:"send-external-message"},"Send External Message"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"ever-sdk process",label:"ever-sdk-js process_message",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// Encode the message with `touch` function call\nconst params = {\n  send_events: false,\n  message_encode_params: {\n      address,\n      abi,\n      call_set: {\n          function_name: 'touch',\n          input: {}\n      },\n      // There is no pubkey key check in the contract\n      // so we can leave it empty. Never use this approach in production\n      // because anyone can call this function\n      signer: { type: 'None' }\n  }\n}\n// Call `touch` function\nlet response = await client.processing.process_message(params);\nconsole.log(`\u0421ontract run transaction with output ${response.decoded.output}, ${response.transaction.id}`);\n"))),(0,r.kt)(s.Z,{value:"ever-sdk encode+send",label:"ever-sdk-js encode_message -> send_message",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// Encode the message with `touch` function call\nconst params = {\n      abi = {\n          type: 'Contract',\n          value: contract.abi\n      },\n      address,\n      call_set: {\n          function_name: 'touch',\n          input: {}\n      },\n      // There is no pubkey key check in the contract\n      // so we can leave it empty. Never use this approach in production\n      // because anyone can call this function\n      signer: { type: 'None' }\n}\n\n// Create external inbound message with `touch` function call\nconst encode_touch_result = await client.abi.encode_message(params);\n\n// Send `touch` call message to the network\n// See more info about `send_message` here  \n// https://github.com/tonlabs/ever-sdk/blob/master/docs/mod_processing.md#send_message\nshard_block_id = (await client.processing.send_message({\n  message: encode_touch_result.message,\n  send_events: true\n  },logEvents\n)).shard_block_id;\nconsole.log(`Touch message was sent.`);\n"))),(0,r.kt)(s.Z,{value:"inp-prov",label:"everscale-inpage-provider",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"  // Create Contract wrapper using ABI and an address\n  const example = new provider.Contract(contractABI, contractAddress);\n  // Send the external message `touch` to the contract\n  await example.methods.touch({}).sendExternal({\n    publicKey: `0x...` // you can get the pubkey from keystore, which is set up either manually or provided by the browser extension\n  });\n  console.log('Message sent');\n")))),(0,r.kt)("h2",{id:"encode-and-send-internal-message"},"Encode and send Internal Message"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"inp-prov",label:"everscale-inpage-provider",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"  // Create Contract wrapper using ABI and an address\n  const example = new provider.Contract(contractABI, contractAddress);\n  // Send the external message `touch` to the contract\n  await example.methods.touch({}).send({\n    address: <Address object>, // you can get the address from AccountStorage, which is set up either manually or provided by the browser extension\n    amount: <nanotokens> // you should attach non-zero value of native currency to pay at least foraward, compute and storage fees of destination contract.\n  });\n  console.log('Message sent');\n")))),(0,r.kt)("h2",{id:"links"},"Links"),(0,r.kt)("p",null,"Explore the full guides to writing data to blockchain in Ever SDK here:"),(0,r.kt)("p",null,"  ",(0,r.kt)("a",{parentName:"p",href:"https://docs.everos.dev/ever-sdk/guides/work_with_contracts/deploy"},"https://docs.everos.dev/ever-sdk/guides/work_with_contracts/deploy")),(0,r.kt)("p",null,"  ",(0,r.kt)("a",{parentName:"p",href:"https://docs.everos.dev/ever-sdk/guides/work_with_contracts/run_onchain"},"https://docs.everos.dev/ever-sdk/guides/work_with_contracts/run_onchain")),(0,r.kt)("p",null,"  Advanced guide for working with Surf keeper provider is ",(0,r.kt)("a",{parentName:"p",href:"/preview/PR-359/develop/recipes/surf-wallet-advanced"},"here"),"."),(0,r.kt)("p",null,"If you use ",(0,r.kt)("inlineCode",{parentName:"p"},"everscale-inpage-provider"),", see more docs and guides here:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.broxus.com"},"https://docs.broxus.com")))}h.isMDXComponent=!0}}]);