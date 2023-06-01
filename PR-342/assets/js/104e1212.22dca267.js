"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[7155],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>h});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),c=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(i.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(t),m=r,h=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return t?a.createElement(h,s(s({ref:n},u),{},{components:t})):a.createElement(h,s({ref:n},u))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=m;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l[p]="string"==typeof e?e:r,s[1]=l;for(var c=2;c<o;c++)s[c]=t[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5162:(e,n,t)=>{t.d(n,{Z:()=>s});var a=t(7294),r=t(6010);const o={tabItem:"tabItem_Ymn6"};function s(e){let{children:n,hidden:t,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,s),hidden:t},n)}},4866:(e,n,t)=>{t.d(n,{Z:()=>T});var a=t(7462),r=t(7294),o=t(6010),s=t(2466),l=t(6550),i=t(1980),c=t(7392),u=t(12);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}function d(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??p(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function h(e){let{queryString:n=!1,groupId:t}=e;const a=(0,l.k6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i._X)(o),(0,r.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(a.location.search);n.set(o,e),a.replace({...a.location,search:n.toString()})}),[o,a])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,o=d(e),[s,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:o}))),[i,c]=h({queryString:t,groupId:a}),[p,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,o]=(0,u.Nk)(t);return[a,(0,r.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:a}),f=(()=>{const e=i??p;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{f&&l(f)}),[f]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),g(e)}),[c,g,o]),tabValues:o}}var f=t(2389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:n,block:t,selectedValue:l,selectValue:i,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,s.o5)(),d=e=>{const n=e.currentTarget,t=u.indexOf(n),a=c[t].value;a!==l&&(p(n),i(a))},m=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;n=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;n=u[t]??u[u.length-1];break}}n?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},n)},c.map((e=>{let{value:n,label:t,attributes:s}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===n?0:-1,"aria-selected":l===n,key:n,ref:e=>u.push(e),onKeyDown:m,onClick:d},s,{className:(0,o.Z)("tabs__item",y.tabItem,s?.className,{"tabs__item--active":l===n})}),t??n)})))}function v(e){let{lazy:n,children:t,selectedValue:a}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a}))))}function k(e){const n=g(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",y.tabList)},r.createElement(b,(0,a.Z)({},e,n)),r.createElement(v,(0,a.Z)({},e,n)))}function T(e){const n=(0,f.Z)();return r.createElement(k,(0,a.Z)({key:String(n)},e))}},2804:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var a=t(7462),r=(t(7294),t(3905)),o=t(4866),s=t(5162);const l={sidebar_position:12,description:"Integrating Evercloud GraphQL API with Typescript"},i="GraphQL code generation",c={unversionedId:"develop/payment",id:"develop/payment",title:"GraphQL code generation",description:"Integrating Evercloud GraphQL API with Typescript",source:"@site/../../src/develop/payment.md",sourceDirName:"develop",slug:"/develop/payment",permalink:"/preview/PR-342/develop/payment",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/develop/payment.md",tags:[],version:"current",lastUpdatedAt:1684359517,formattedLastUpdatedAt:"May 17, 2023",sidebarPosition:12,frontMatter:{sidebar_position:12,description:"Integrating Evercloud GraphQL API with Typescript"},sidebar:"tutorialSidebar",previous:{title:"Write data to blockchain",permalink:"/preview/PR-342/develop/recipes/write-data"},next:{title:"Run Validator",permalink:"/preview/PR-342/validate"}},u={},p=[{value:"Evercloud GraphQL",id:"evercloud-graphql",level:2},{value:"Setting up code generation",id:"setting-up-code-generation",level:2},{value:"API initialization",id:"api-initialization",level:2},{value:"Code examples",id:"code-examples",level:2},{value:"Get account balance",id:"get-account-balance",level:3},{value:"Get incoming messages",id:"get-incoming-messages",level:3},{value:"Example project",id:"example-project",level:2}],d={toc:p},m="wrapper";function h(e){let{components:n,...t}=e;return(0,r.kt)(m,(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"graphql-code-generation"},"GraphQL code generation"),(0,r.kt)("p",null,"This is a guide to help you quickly integrate Everscale into your Typescript project using Evercloud GraphQL API for making queries to the blockchain, and ",(0,r.kt)("a",{parentName:"p",href:"https://the-guild.dev/graphql/codegen"},"GraphQL Code Generator")," for automatically generating type definitions from the API schema."),(0,r.kt)("h2",{id:"evercloud-graphql"},"Evercloud GraphQL"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.evercloud.dev/"},"Evercloud")," makes it easy to set up and manage a GraphQL endpoint for your application, providing you with secure access to the Everscale blockchain."),(0,r.kt)("p",null,"Follow ",(0,r.kt)("a",{parentName:"p",href:"https://docs.evercloud.dev/products/evercloud/get-started"},"this guide")," to set up a project on Evercloud. Make sure to note down the project ID in the security tab, as well as the project secret and the HTTP Authorization value, as you will need to configure these in the code."),(0,r.kt)("p",null,"Once you have the necessary credentials, you're ready to start making GraphQL queries to the Everscale network in your TypeScript project. To cater to various development preferences, we'll provide two versions for each example: one using the Everscale SDK (follow ",(0,r.kt)("a",{parentName:"p",href:"https://docs.everos.dev/ever-sdk/guides/installation/add_sdk_to_your_app"},"this guide")," for setup instructions) and another using ",(0,r.kt)("a",{parentName:"p",href:"https://axios-http.com/"},"Axios"),", a popular HTTP client for JavaScript."),(0,r.kt)("h2",{id:"setting-up-code-generation"},"Setting up code generation"),(0,r.kt)("p",null,"First, add both the ",(0,r.kt)("inlineCode",{parentName:"p"},"graphql")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"@graphql-codegen/cli")," packages to your project's dependencies:"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"npm",label:"npm",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npm install graphql\nnpm install -D typescript\nnpm install -D @graphql-codegen/cli\nnpm install -D @graphql-codegen/typescript\n"))),(0,r.kt)(s.Z,{value:"yarn",label:"yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add graphql\nyarn add -D typescript\nyarn add -D @graphql-codegen/cli\nyarn add -D @graphql-codegen/typescript\n")))),(0,r.kt)("p",null,"Next, create a file named ",(0,r.kt)("inlineCode",{parentName:"p"},"codegen.ts")," in your project's root folder containing the following (adjust as needed):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import type {CodegenConfig} from '@graphql-codegen/cli'\n\n// configure your credentials here\nconst PROJECT_ID = ''\nconst PROJECT_HTTP_AUTHORIZATION = ''\n\nconst schemaUrl = `https://mainnet.evercloud.dev/${PROJECT_ID}/graphql`\n\nconst config: CodegenConfig = {\n  overwrite: true,\n  schema: [\n    {\n      [schemaUrl]: {\n        headers: {\n          Authorization: PROJECT_HTTP_AUTHORIZATION,\n        },\n      },\n    },\n  ],\n  documents: ['src/**/*.ts'],\n  ignoreNoDocuments: true, // for better experience with the watcher\n  generates: {\n    'src/generated/graphql.ts': {\n      plugins: ['typescript'],\n    },\n  },\n  watch: true,\n}\n\nexport default config\n")),(0,r.kt)("p",null,"Finally, follow ",(0,r.kt)("a",{parentName:"p",href:"https://the-guild.dev/graphql/codegen/docs/getting-started/development-workflow"},"these instructions")," to add GraphQL code generation to your development workflow."),(0,r.kt)("h2",{id:"api-initialization"},"API initialization"),(0,r.kt)("p",null,"To start making queries to the GraphQL API, you'll need to configure your client. Following is an example on how you can do that using either the Everscale SDK or Axios."),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"sdk",label:"Everscale SDK",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import {TonClient} from '@eversdk/core'\nimport {libNode} from '@eversdk/lib-node'\n\n// configure your credentials here\nconst PROJECT_ID = ''\nconst PROJECT_SECRET = ''\n\nTonClient.useBinaryLibrary(libNode)\n\nconst client = new TonClient({\n  network: {\n    endpoints: [`https://mainnet.evercloud.dev/${PROJECT_ID}/graphql`],\n    access_key: PROJECT_SECRET,\n  },\n})\n"))),(0,r.kt)(s.Z,{value:"axios",label:"Axios",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import axios from 'axios'\n\n// configure your credentials here\nconst PROJECT_ID = ''\nconst PROJECT_SECRET = ''\n\naxios.defaults.baseURL = `https://mainnet.evercloud.dev/${PROJECT_ID}/graphql`\naxios.defaults.headers.post['Content-Type'] = 'application/json'\nif (PROJECT_SECRET) {\n  axios.defaults.auth = {\n    username: '',\n    password: PROJECT_SECRET,\n  }\n}\n")))),(0,r.kt)("h2",{id:"code-examples"},"Code examples"),(0,r.kt)("p",null,"Following examples demonstrate how you can use the types generated from the GraphQL schema in your project."),(0,r.kt)("h3",{id:"get-account-balance"},"Get account balance"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"sdk",label:"Everscale SDK",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// Add this to imports at the top of the file\nimport {BlockchainQuery} from './generated/graphql'\n\n// Specify your account's address\nconst ACCOUNT_ADDRESS = ''\n\nasync function main() {\n  try {\n    const query = `\n    query {\n      blockchain {\n        account(\n          address: \"${ACCOUNT_ADDRESS}\"\n        ) {\n          info {\n            balance(format: DEC)\n          }\n        }\n      }\n    }`\n    const {result} = await client.net.query({query})\n    const blockchain: BlockchainQuery = result.data.blockchain\n    console.log(`The account balance is ${parseInt(blockchain.account?.info?.balance || '0', 10) / 10 ** 9}`)\n    client.close()\n  } catch (error) {\n    console.error(error)\n  }\n}\n\nmain()\n"))),(0,r.kt)(s.Z,{value:"axios",label:"Axios",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// Add this to imports at the top of the file\nimport {BlockchainQuery} from './generated/graphql'\n\n// Specify your account's address\nconst ACCOUNT_ADDRESS = ''\n\nasync function main() {\n  try {\n    const query = `\n      query {\n        blockchain {\n          account(\n            address: \"${ACCOUNT_ADDRESS}\"\n          ) {\n            info {\n              balance(format: DEC)\n            }\n          }\n        }\n      }`\n    const {data} = await axios.post('', {query})\n    const blockchain: BlockchainQuery = data.data.blockchain\n    console.log(`The account balance is ${parseInt(blockchain.account?.info?.balance || '0', 10) / 10**9}`)\n  } catch (error) {\n    console.error(error)\n  }\n}\n\nmain()\n\n")))),(0,r.kt)("h3",{id:"get-incoming-messages"},"Get incoming messages"),(0,r.kt)("p",null,"This example shows how to query incoming messages for a specified destination account using both the Everscale SDK and Axios. This can be particularly useful for processing incoming token transfers or other transaction-related information."),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"sdk",label:"Everscale SDK",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// Add this to imports at the top of the file\nimport {BlockchainQuery} from './generated/graphql'\n\n// Specify your account's address\nconst ACCOUNT_ADDRESS = ''\n\ninterface MyQuery {\n  address: string\n  cursor: string | null\n  count: number\n  seq_no: number\n}\n\nasync function main() {\n  try {\n    const query = `\n    query MyQuery($address: String!, $cursor: String, $count: Int, $seq_no: Int){\n      blockchain {\n        account(address: $address){\n          messages(\n            msg_type: ExtIn\n            master_seq_no_range: {\n              start: $seq_no\n            }\n            first: $count\n            after: $cursor\n          ){\n            edges{\n              node{\n                hash\n                msg_type\n                value(format: DEC)\n                src\n              }\n            }\n          }\n        }\n      }\n    }`\n    const variables: MyQuery = {\n      address: ACCOUNT_ADDRESS,\n      cursor: null,\n      count: 10, // number per page, max: 50\n      seq_no: 1, // set to the initial block sequence number\n    }\n    while (true) { // infinity loop, implement exit condition here\n      const {result} = await client.net.query({query, variables})\n      const data: BlockchainQuery = result.data\n      const messages = data.account?.messages\n      const edges = messages?.edges || []\n      variables.cursor = messages?.pageInfo.endCursor || variables.cursor\n      edges.forEach(edge => {\n        const message = edge.node\n        // do something with message\n        console.log(message)\n      })\n      // implement a delay here so as not to spam the API\n    }\n\n    client.close()\n  } catch (error) {\n    console.error(error)\n  }\n}\n\nmain()\n"))),(0,r.kt)(s.Z,{value:"axios",label:"Axios",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// Add this to imports at the top of the file\nimport {BlockchainQuery} from './generated/graphql'\n\n// Specify your account's address\nconst ACCOUNT_ADDRESS = ''\n\ninterface MyQuery {\n  address: string\n  cursor: string | null\n  count: number\n  seq_no: number\n}\n\nasync function main() {\n  try {\n    const query = `\n    query MyQuery($address: String!, $cursor: String, $count: Int, $seq_no: Int){\n      blockchain {\n        account(address: $address){\n          messages(\n            msg_type: ExtIn\n            master_seq_no_range: {\n              start: $seq_no\n            }\n            first: $count\n            after: $cursor\n          ){\n            edges{\n              node{\n                hash\n                msg_type\n                value(format: DEC)\n                src\n              }\n            }\n          }\n        }\n      }\n    }`\n    const variables: MyQuery = {\n      address: ACCOUNT_ADDRESS,\n      cursor: null,\n      count: 10, // number per page, max: 50\n      seq_no: 1, // set to the initial block sequence number\n    }\n    while (true) { // infinity loop, implement exit condition here\n      const {data} = await axios.post('', {query, variables})\n      const result: BlockchainQuery = data.data\n      const messages = result.account?.messages\n      const edges = messages?.edges || []\n      variables.cursor = messages?.pageInfo.endCursor || variables.cursor\n      edges.forEach(edge => {\n        const message = edge.node\n        // do something with message\n        console.log(message)\n      })\n      // implement a delay here so as not to spam the API\n    }\n  } catch (error) {\n    console.error(error)\n  }\n}\n\nmain()\n")))),(0,r.kt)("h2",{id:"example-project"},"Example project"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/everscale-contest/everscale-graphql/tree/main/examples"},"the examples directory in this repository")," for a demo project containing these examples."))}h.isMDXComponent=!0}}]);