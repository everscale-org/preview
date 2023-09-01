"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[5803],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>b});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),i=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=i(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=i(n),m=r,b=d["".concat(l,".").concat(m)]||d[m]||p[m]||s;return n?a.createElement(b,o(o({ref:t},u),{},{components:n})):a.createElement(b,o({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[d]="string"==typeof e?e:r,o[1]=c;for(var i=2;i<s;i++)o[i]=n[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),r=n(6010);const s={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,o),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(7462),r=n(7294),s=n(6010),o=n(2466),c=n(6550),l=n(1980),i=n(7392),u=n(12);function d(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const a=(0,c.k6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function v(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,s=p(e),[o,c]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s}))),[l,i]=b({queryString:n,groupId:a}),[d,v]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:a}),h=(()=>{const e=l??d;return m({value:e,tabValues:s})?e:null})();(0,r.useLayoutEffect)((()=>{h&&c(h)}),[h]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);c(e),i(e),v(e)}),[i,v,s]),tabValues:s}}var h=n(2389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:n,selectedValue:c,selectValue:l,tabValues:i}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),p=e=>{const t=e.currentTarget,n=u.indexOf(t),a=i[n].value;a!==c&&(d(t),l(a))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},t)},i.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:c===t?0:-1,"aria-selected":c===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:p},o,{className:(0,s.Z)("tabs__item",f.tabItem,o?.className,{"tabs__item--active":c===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:a}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function k(e){const t=v(e);return r.createElement("div",{className:(0,s.Z)("tabs-container",f.tabList)},r.createElement(g,(0,a.Z)({},e,t)),r.createElement(y,(0,a.Z)({},e,t)))}function w(e){const t=(0,h.Z)();return r.createElement(k,(0,a.Z)({key:String(t)},e))}},3823:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>b,frontMatter:()=>c,metadata:()=>i,toc:()=>d});var a=n(7462),r=(n(7294),n(3905)),s=n(4866),o=n(5162);const c={sidebar_position:6},l="Read data from blockchain",i={unversionedId:"develop/recipes/read-data",id:"develop/recipes/read-data",title:"Read data from blockchain",description:"There are several types of things you can read from a blockchain. These are various queries to blockchain RPC node, contract get-methods and contract events.",source:"@site/../../src/develop/recipes/read-data.md",sourceDirName:"develop/recipes",slug:"/develop/recipes/read-data",permalink:"/preview/PR-359/develop/recipes/read-data",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/develop/recipes/read-data.md",tags:[],version:"current",lastUpdatedAt:1688495820,formattedLastUpdatedAt:"Jul 4, 2023",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"TIP3 Integration Guide",permalink:"/preview/PR-359/develop/recipes/tip3-integration"},next:{title:"Write data to blockchain",permalink:"/preview/PR-359/develop/recipes/write-data"}},u={},d=[{value:"Invoke a get-method",id:"invoke-a-get-method",level:2},{value:"Fetch or subscribe to contract events",id:"fetch-or-subscribe-to-contract-events",level:2},{value:"Decode message",id:"decode-message",level:2},{value:"Subscribe to updates",id:"subscribe-to-updates",level:2},{value:"Read arbitrary data from blockchain",id:"read-arbitrary-data-from-blockchain",level:2},{value:"Links",id:"links",level:2}],p={toc:d},m="wrapper";function b(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"read-data-from-blockchain"},"Read data from blockchain"),(0,r.kt)("p",null,"There are several types of things you can read from a blockchain. These are various queries to blockchain RPC node, contract get-methods and contract events."),(0,r.kt)("p",null,"Usually you will connect your dApp to existing smart contract system, deployed on-chain by a smart-contract developer. Thus, you will have an address (a string, that usually looks like ",(0,r.kt)("inlineCode",{parentName:"p"},"0:abcdef\u20267890"),") and an ABI (",(0,r.kt)("inlineCode",{parentName:"p"},".json")," file) of a contract you want to interact with."),(0,r.kt)("p",null,"In each example below, we will assume that you have following definitions of the address and ABI:"),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"ever-sdk",label:"ever-sdk-js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const abi = require('path/to/Contract.abi.json');\nconst address = \"0:deadbeef...00\";\n"))),(0,r.kt)(o.Z,{value:"inp-prov",label:"everscale-inpage-provider",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'import { Address } from \'everscale-inpage-provider\';\n// Note that it is important to use `as const` when exporting the ABI constant\nimport contractABI from "path/to/Contract.ts";\nconst contractAddress = new Address("0:deadbeef...00");\n')))),(0,r.kt)("h2",{id:"invoke-a-get-method"},"Invoke a get-method"),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"ever-sdk",label:"ever-sdk-js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"    // Execute the get method `getTimestamp` on the latest account's state\n  // This can be managed in 3 steps:\n  // 1. Download the latest Account State (BOC)\n  // 2. Encode message\n  // 3. Execute the message locally on the downloaded state\n\n  const [account, message] = await Promise.all([\n      // Download the latest state (BOC)\n      // See more info about query method here \n      // https://github.com/tonlabs/ever-sdk/blob/master/docs/mod_net.md#query_collection\n      client.net.query_collection({\n          collection: 'accounts',\n          filter: { id: { eq: address } },\n          result: 'boc'\n      })\n      .then(({ result }) => result[0].boc)\n      .catch(() => {\n          throw Error(`Failed to fetch account data`)\n      }),\n      // Encode the message with `getTimestamp` call\n      client.abi.encode_message({\n          abi,\n          address,\n          call_set: {\n              function_name: 'getTimestamp',\n              input: {}\n          },\n          signer: { type: 'None' }\n      }).then(({ message }) => message)\n  ]);\n\n  // Execute `getTimestamp` get method  (execute the message locally on TVM)\n  // See more info about run_tvm method here \n  // https://github.com/tonlabs/ever-sdk/blob/master/docs/mod_tvm.md#run_tvm\n  response = await client.tvm.run_tvm({ message, account, abi });\n  console.log('Contract reacted to your getTimestamp:', response.decoded.output);\n"))),(0,r.kt)(o.Z,{value:"inp-prov",label:"everscale-inpage-provider",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"  // Create Contract wrapper using ABI and an address\n  const example = new provider.Contract(contractABI, contractAddress);\n  // Execute the get method `getTimestamp` on the latest account's state\n  const response = await example.methods.getTimestamp({}).call();\n  console.log('Contract reacted to your getTimestamp:', response);\n")))),(0,r.kt)("h2",{id:"fetch-or-subscribe-to-contract-events"},"Fetch or subscribe to contract events"),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"ever-sdk",label:"ever-sdk-js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'// Query events\nresult = await client.net.query({\nquery: `query MyQuery($address: String!, $cursor: String, $count: Int, $start_seq_no: Int, end_seq_no: Int) {\n  blockchain {\n      account(address: $address){\n          messages(\n              master_seq_no_range: { start: $start_seq_no, end: $end_seq_no }\n              first: $count,\n              msg_type: [ExtOut, ExtIn, IntIn, IntOut],\n              after: $cursor\n          ) {\n              edges {\n                  node { id, created_at }\n              }\n              pageInfo {\n                  endCursor\n                  hasNextPage\n              }\n          }\n      }\n  }\n}`,\n     variables:{address, cursor, count, start_seq_no, end_seq_no}\n}); \n\n...\n\n  // Subscribe to events\n  const messageSubscription = await TonClient.default.net.subscribe_collection({\n  collection: "messages",\n  filter: {\n      dst: { eq: your-contract-address },\n      msg_type:{ in: [0,1,2] }\n  },\n  result: "boc"\n}, <callback function>\n});\n\n'))),(0,r.kt)(o.Z,{value:"inp-prov",label:"everscale-inpage-provider",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"  // Create a subscriber\n  const subscriber = new provider.Subscriber();\n\n  // Subscribe to contract events\n  const contractEvents = example.events(subscriber);\n\n  // Listen to contract events\n  contractEvents.on(event => {\n      console.log('contractEvent', event);\n  });\n\n  // Unsubscribe from contract events\n  contractEvents.unsubscribe();\n")))),(0,r.kt)("h2",{id:"decode-message"},"Decode message"),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"ever-sdk",label:"ever-sdk-js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'const decoded = (await client.abi.decode_message({\n      abi: abiContract(HelloEventsContract.abi),\n      message: boc,\n  }));\nswitch (decoded.body_type) {\ncase MessageBodyType.Input:\n  log_.push(`External inbound message, function "${decoded.name}", fields: ${JSON.stringify(decoded.value)}` );\n  break;\ncase MessageBodyType.Output:\n  log_.push(`External outbound message (return) of function "${decoded.name}", fields: ${JSON.stringify(decoded.value)}`);\n  break;\ncase MessageBodyType.Event:\n  log_.push(`External outbound message (event) "${decoded.name}", fields: ${JSON.stringify(decoded.value)}`);\n  break;\n}\n')))),(0,r.kt)("h2",{id:"subscribe-to-updates"},"Subscribe to updates"),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"ever-sdk",label:"ever-sdk-js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'// Account updates\nconst accountSubscription = await TonClient.default.net.subscribe_collection({\n  collection: "accounts",\n  filter: { id: { eq: address } },\n  result: "balance",\n}, (params, responseType) => {\n  if (responseType === ResponseType.Custom) {\n      console.log("Account has updated. Current balance is ", parseInt(params.result.balance));\n  }\n});\n\n...\n\n// Account messages\nconst messageSubscription = await TonClient.default.net.subscribe_collection({\n  collection: "messages",\n  filter: {\n      src: { eq: address },\n      OR: {\n          dst: { eq: address },\n      }\n  },\n  result: "boc",\n}, async (params, responseType) => {\n  try {\n      if (responseType === ResponseType.Custom) {\n          const decoded = (await TonClient.default.abi.decode_message({\n              abi: abiContract(your-contract-abi),\n              message: params.result.boc,\n          }));\n          switch (decoded.body_type) {\n          case MessageBodyType.Input:\n              console.log(`External inbound message, function "${decoded.name}", parameters: `, JSON.stringify(decoded.value));\n              break;\n          case MessageBodyType.Output:\n              console.log(`External outbound message, function "${decoded.name}", result`, JSON.stringify(decoded.value));\n              break;\n          case MessageBodyType.Event:\n              console.log(`External outbound message, event "${decoded.name}", parameters`, JSON.stringify(decoded.value));\n              break;\n          }\n      }\n  } catch (err) {\n      console.log(\'>>>\', err);\n  }\n}); \n')))),(0,r.kt)("h2",{id:"read-arbitrary-data-from-blockchain"},"Read arbitrary data from blockchain"),(0,r.kt)("p",null,"In most cases, the starting point for reading blockchain data is an account address. But sometimes you may want to perform arbitrary queries."),(0,r.kt)("p",null,"For such cases, the fullnode GraphQL API is a perfect solution. There is a public ",(0,r.kt)("a",{parentName:"p",href:"https://evercloud.dev/"},"Evercloud")," infrastructure for that. Head over to ",(0,r.kt)("a",{parentName:"p",href:"https://docs.evercloud.dev/"},"Evercloud Docs")," to read more."),(0,r.kt)("p",null,"It is fully opensource, so you may want to deploy your own full node instance with Graph QL interface. You can also reconfigure it for your dApp needs. For example - build various custom indexes according to your smart contract system architecture. Head over to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tonlabs/ton-q-server"},"Graph QL Server repository")," to learn more details."),(0,r.kt)("h2",{id:"links"},"Links"),(0,r.kt)("p",null,"Explore the full guides to reading blockchain data in Ever SDK here:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.everos.dev/ever-sdk/guides/work_with_contracts/run_abi_get_method"},"https://docs.everos.dev/ever-sdk/guides/work_with_contracts/run_abi_get_method")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.everos.dev/ever-sdk/guides/work_with_contracts/work_with_events"},"https://docs.everos.dev/ever-sdk/guides/work_with_contracts/work_with_events")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.everos.dev/ever-sdk/guides/work_with_contracts/decode_message"},"https://docs.everos.dev/ever-sdk/guides/work_with_contracts/decode_message")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.everos.dev/ever-sdk/guides/queries_and_subscriptions/subscribe_to_updates"},"https://docs.everos.dev/ever-sdk/guides/queries_and_subscriptions/subscribe_to_updates")),(0,r.kt)("p",null,"Advanced guide for working with Surf keeper provider is ",(0,r.kt)("a",{parentName:"p",href:"/preview/PR-359/develop/recipes/surf-wallet-advanced"},"here"),"."),(0,r.kt)("p",null,"If you use ",(0,r.kt)("inlineCode",{parentName:"p"},"everscale-inpage-provider"),", see more docs and guides here:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.broxus.com"},"https://docs.broxus.com")))}b.isMDXComponent=!0}}]);