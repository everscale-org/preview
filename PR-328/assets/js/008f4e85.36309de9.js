"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[7519],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var o=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,l=function(e,t){if(null==e)return{};var n,o,l={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=l,k=d["".concat(c,".").concat(m)]||d[m]||u[m]||r;return n?o.createElement(k,a(a({ref:t},p),{},{components:n})):o.createElement(k,a({ref:t},p))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,a=new Array(r);a[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:l,a[1]=i;for(var s=2;s<r;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1876:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var o=n(7462),l=(n(7294),n(3905));const r={sidebar_position:1},a="Locklift Environment setup",i={unversionedId:"develop/smart-contracts/locklift-setup",id:"develop/smart-contracts/locklift-setup",title:"Locklift Environment setup",description:"Locklift",source:"@site/../../src/develop/smart-contracts/locklift-setup.md",sourceDirName:"develop/smart-contracts",slug:"/develop/smart-contracts/locklift-setup",permalink:"/preview/PR-328/develop/smart-contracts/locklift-setup",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/develop/smart-contracts/locklift-setup.md",tags:[],version:"current",lastUpdatedAt:1684322594,formattedLastUpdatedAt:"May 17, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Everdev CLI Quick Start",permalink:"/preview/PR-328/develop/smart-contracts/everdev"},next:{title:"Deploy TIP-3 Token",permalink:"/preview/PR-328/develop/smart-contracts/use-fungible-tokens"}},c={},s=[{value:"Locklift",id:"locklift",level:2},{value:"Local node",id:"local-node",level:2},{value:"Initialize new project",id:"initialize-new-project",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Build",id:"build",level:2},{value:"Run Tests",id:"run-tests",level:2},{value:"Invoke Scripts",id:"invoke-scripts",level:2}],p={toc:s},d="wrapper";function u(e){let{components:t,...n}=e;return(0,l.kt)(d,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"locklift-environment-setup"},"Locklift Environment setup"),(0,l.kt)("h2",{id:"locklift"},"Locklift"),(0,l.kt)("p",null,"To improve the development experience, you will need tools and utilities to compile, deploy and test your Everscale contracts. "),(0,l.kt)("p",null,"Let's consider Locklift as an example tool. It is a development environment like Hardhat or Truffle and it uses the specified T-Sol compiler to build all project contracts."),(0,l.kt)("p",null,"With Locklift, you get:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Network management for working with any networks (main, test, local, ...) "),(0,l.kt)("li",{parentName:"ul"},"Automated contract testing"),(0,l.kt)("li",{parentName:"ul"},"Handy wrappers around Everscale smart contracts"),(0,l.kt)("li",{parentName:"ul"},"Custom givers support"),(0,l.kt)("li",{parentName:"ul"},"Keys management"),(0,l.kt)("li",{parentName:"ul"},"External script runner that executes scripts within a specified environment")),(0,l.kt)("p",null,"To install Locklift, run the following command line:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npm install -g locklift\n")),(0,l.kt)("h2",{id:"local-node"},"Local node"),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"You need to have a ",(0,l.kt)("a",{parentName:"p",href:"https://www.docker.com/"},"docker")," runtime to continue with this.")),(0,l.kt)("p",null,"If Locklift is like a Hardhat development environment tool, then local-node is Ganache- like a local blockchain that is designed for dApp debugging and testing. To run local- node you need to follow this command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"docker run -d --name local-node -e USER_AGREEMENT=yes -p80:80 tonlabs/local-node\n")),(0,l.kt)("p",null,"The container exposes the specified 80 port with Nginx which proxies requests to /graphql to GraphQL API. Check out the local explorer at http://localhost/ and GraphQL playground at http://localhost/graphql"),(0,l.kt)("p",null,"Once we are all set, the next thing to do is to initialize your first project."),(0,l.kt)("h2",{id:"initialize-new-project"},"Initialize new project"),(0,l.kt)("p",null,"Run the following command line:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"locklift init --path sample-project\n")),(0,l.kt)("p",null,"This command initializes a new Locklift project, filled with samples:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u251c\u2500\u2500 locklift.config.ts\n\u251c\u2500\u2500 tsconfig.json\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 package-lock.json\n\u2502\n\u251c\u2500\u2500 contracts\n\u2502   \u2514\u2500\u2500 Sample.tsol\n\u251c\u2500\u2500 scripts\n\u2502   \u2514\u2500\u2500 1-deploy-sample.ts\n\u251c\u2500\u2500 test\n\u2502   \u2514\u2500\u2500 sample-test.ts\n")),(0,l.kt)("p",null,"You can see that your smart contract ",(0,l.kt)("inlineCode",{parentName:"p"},"Sample.tsol")," appeared in the ",(0,l.kt)("inlineCode",{parentName:"p"},"sample-project/contracts")," directory."),(0,l.kt)("h2",{id:"configuration"},"Configuration"),(0,l.kt)("p",null,"The configuration file is called ",(0,l.kt)("inlineCode",{parentName:"p"},"locklift.config.ts"),". Here's how the basic layout for local node looks like (note, that your config may contain more networks, but the way they are configured is the same): "),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Default locklift.config.ts layout"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},'import { LockliftConfig } from "locklift";\nimport { FactorySource } from "./build/factorySource";\ndeclare global {\n const locklift: import("locklift").Locklift<FactorySource>;\n}\n\nconst LOCAL_NETWORK_ENDPOINT = process.env.NETWORK_ENDPOINT || "http://localhost/graphql";\nconst DEV_NET_NETWORK_ENDPOINT = process.env.DEV_NET_NETWORK_ENDPOINT || "https://devnet-sandbox.evercloud.dev/graphql";\nconst VENOM_TESTNET_ENDPOINT = process.env.VENOM_TESTNET_ENDPOINT || "https://jrpc-testnet.venom.foundation/rpc";\nconst VENOM_TESTNET_TRACE_ENDPOINT = process.env.VENOM_TESTNET_TRACE_ENDPOINT || "https://gql-testnet.venom.foundation/graphql";\n// Create your own link on https://dashboard.evercloud.dev/\nconst MAIN_NET_NETWORK_ENDPOINT = process.env.MAIN_NET_NETWORK_ENDPOINT || "https://mainnet.evercloud.dev/XXX/graphql";\nconst config: LockliftConfig = {\n compiler: {\n  // Specify path to your TON-Solidity-Compiler\n  // path: "/mnt/o/projects/broxus/TON-Solidity-Compiler/build/solc/solc",\n  // Or specify version of compiler\n  version: "0.62.0",\n  // Specify config for extarnal contracts as in exapmple\n  // externalContracts: {\n  //  "node_modules/broxus-ton-tokens-contracts/build": [\'TokenRoot\', \'TokenWallet\']\n  // }\n },\n linker: {\n  // Specify path to your stdlib\n  // lib: "/mnt/o/projects/broxus/TON-Solidity-Compiler/lib/stdlib_sol.tvm",\n  // // Specify path to your Linker\n  // path: "/mnt/o/projects/broxus/TVM-linker/target/release/tvm_linker",\n  // Or specify version of linker\n  version: "0.15.48",\n },\n networks: {\n  local: {\n   // Specify connection settings for https://github.com/broxus/everscale-standalone-client/\n   connection: {\n    id: 1,\n    group: "localnet",\n    type: "graphql",\n    data: {\n     endpoints: [LOCAL_NETWORK_ENDPOINT],\n     latencyDetectionInterval: 1000,\n     local: true,\n    },\n   },\n   // This giver is default local-node giverV2\n   giver: {\n    // Check if you need provide custom giver\n    address: "0:ece57bcc6c530283becbbd8a3b24d3c5987cdddc3c8b7b33be6e4a6312490415",\n    key: "172af540e43a524763dd53b26a066d472a97c4de37d5498170564510608250c3",\n   },\n   tracing: {\n    endpoint: LOCAL_NETWORK_ENDPOINT,\n   },\n   keys: {\n    // Use everdev to generate your phrase\n    // !!! Never commit it in your repos !!!\n    // phrase: "action inject penalty envelope rabbit element slim tornado dinner pizza off blood",\n    amount: 20,\n   },\n  },\n  \n  // ... (configs for other networks go here)\n'))),(0,l.kt)("p",null,"For the avoidance of doubt, it\u2019s important that we go through each of the parameters:  "),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"compiler.version")," - the version of the solidity compiler binary "),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"linker.version")," - the version of the TVM-linker binary"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"networks")," - specify which networks are available for deployment and testing. "),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"networks.[NETWORK_NAME].keys.phrase")," - if you leave this field value empty - a new random seed will be generated each time you're running locklift."),(0,l.kt)("p",null,"Or specify it explicitly - fill the ",(0,l.kt)("inlineCode",{parentName:"p"},"phrase")," field with a mnemonic phrase. "),(0,l.kt)("h2",{id:"build"},"Build"),(0,l.kt)("p",null,"You can run tests and start to develop your amazing projects. To do this, you need to run the following command. The command uses the specified TON Solidity compiler and TVM linker to build all project contracts:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npx locklift build\n")),(0,l.kt)("p",null,"Now, let\u2019s proceed with testing the sample contract."),(0,l.kt)("h2",{id:"run-tests"},"Run Tests"),(0,l.kt)("p",null,"This command runs the project Mocha tests, ",(0,l.kt)("inlineCode",{parentName:"p"},"test")," folder by default. The ",(0,l.kt)("inlineCode",{parentName:"p"},"locklift")," object will be set up and included automatically, you don't need to import it manually."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npx locklift test -n local\n")),(0,l.kt)("h2",{id:"invoke-scripts"},"Invoke Scripts"),(0,l.kt)("p",null,"There is a common practice to keep various scripts within the same environment where the samrt contracts and tests live. Such scripts may perform deployment, configuration, data collection or and smart-contract upgrade routines."),(0,l.kt)("p",null,"Let's run the sample deployment script within locklift environment (make sure your local node container is up and running)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npx locklift run -s scripts/1-deploy-sample.ts -n local\n")),(0,l.kt)("p",null,"If you succeeded with all steps above, you should see the address, where the ",(0,l.kt)("inlineCode",{parentName:"p"},"Sample.tsol")," is deployed."))}u.isMDXComponent=!0}}]);