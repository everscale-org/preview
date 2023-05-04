"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[3299],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return n?o.createElement(f,l(l({ref:t},p),{},{components:n})):o.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<r;c++)l[c]=n[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9810:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var o=n(7462),a=(n(7294),n(3905));const r={sidebar_position:2},l="Deploy TIP-3 Token",i={unversionedId:"develop/smart-contracts/use-fungible-tokens",id:"develop/smart-contracts/use-fungible-tokens",title:"Deploy TIP-3 Token",description:"One of the most popular use cases for Everscale is the creation of custom tokens using the TIP-3 standard. TIP-3 tokens are fungible tokens that follow a set of rules and standards, making them compatible with a variety of wallets, exchanges, and other Everscale-based services.",source:"@site/../../src/develop/smart-contracts/use-fungible-tokens.md",sourceDirName:"develop/smart-contracts",slug:"/develop/smart-contracts/use-fungible-tokens",permalink:"/preview/PR-328/develop/smart-contracts/use-fungible-tokens",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/develop/smart-contracts/use-fungible-tokens.md",tags:[],version:"current",lastUpdatedAt:1683166168,formattedLastUpdatedAt:"May 4, 2023",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Environment setup",permalink:"/preview/PR-328/develop/smart-contracts/environment-setup"},next:{title:"Tutorial: Tokensale",permalink:"/preview/PR-328/develop/smart-contracts/tokensale"}},s={},c=[{value:"Install Dependencies",id:"install-dependencies",level:2},{value:"Compile Contract",id:"compile-contract",level:2},{value:"Deploy",id:"deploy",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"deploy-tip-3-token"},"Deploy TIP-3 Token"),(0,a.kt)("p",null,"One of the most popular use cases for Everscale is the creation of custom tokens using the TIP-3 standard. TIP-3 tokens are fungible tokens that follow a set of rules and standards, making them compatible with a variety of wallets, exchanges, and other Everscale-based services. "),(0,a.kt)("p",null,"TIP-3 provides the following functionalities:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"transfer tokens from one account to another"),(0,a.kt)("li",{parentName:"ul"},"get the current token balance of an account"),(0,a.kt)("li",{parentName:"ul"},"get the total supply of the token available on the network"),(0,a.kt)("li",{parentName:"ul"},"mint and burn tokens")),(0,a.kt)("p",null,"The TIP-3 standard is made up of a set of interfaces, contracts, and utilities that work together to facilitate the creation and management of tokens. They include:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"TIP3TokenRoot"),": is an interface that defines the minimal required functionality for a TIP-3 compliant token root contract. It includes functions for querying the name, symbol, number of decimals, total supply, and wallet code of the token. These functions are used for display purposes and do not affect the contract's arithmetic.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"ITokenRoot"),": the interface for the token root contract that stores general information about the token, such as the name, symbol, decimals, and total supply.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"TokenRootBase"),": is an implementation of the TIP-3 Token Standard for the Everscale blockchain. It provides the minimal required functionality for a token root contract, including storing general information about the token such as name, symbol, decimals, and total supply."))),(0,a.kt)("p",null,"To get started with developing your token, you can inspect the Everscale source code for ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/broxus/tip3"},"TIP-3 token implementation here"),". Then you need to install and set up your ",(0,a.kt)("a",{parentName:"p",href:"/preview/PR-328/develop/smart-contracts/environment-setup"},"smart contract development environment"),". "),(0,a.kt)("p",null,"Next, you follow the steps below:"),(0,a.kt)("h2",{id:"install-dependencies"},"Install Dependencies"),(0,a.kt)("p",null,"To install dependencies, add TIP-3 implementation repository as a ",(0,a.kt)("inlineCode",{parentName:"p"},"devDependencies")," in the corresponding section of the ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "devDependencies": {\n    "tip3": "git://github.com/broxus/tip3#v5"\n  }\n}\n')),(0,a.kt)("p",null,"Then run following command to install dependency:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm i\n")),(0,a.kt)("p",null,"Specify installed contracts to the ",(0,a.kt)("inlineCode",{parentName:"p"},"externalContracts")," section of ",(0,a.kt)("inlineCode",{parentName:"p"},"locklift.config.ts"),", by providing a path to contracts artifacts (",(0,a.kt)("inlineCode",{parentName:"p"},".abi.json")," files, ",(0,a.kt)("inlineCode",{parentName:"p"},".tvc")," files, etc., most commonly placed in a ",(0,a.kt)("inlineCode",{parentName:"p"},"build")," folder of smart contracts projects) and contract names array."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'const config: LockliftConfig = {\n  compiler: {\n    // ...\n    externalContracts: {\n      "node_modules/tip3/build": ["TokenRoot", "TokenWallet"],\n    },\n  },\n  // ...  \n}\n')),(0,a.kt)("h2",{id:"compile-contract"},"Compile Contract"),(0,a.kt)("p",null,"Next, the contracts need to be compiled to ensure that artifacts are created. To do this, run the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npx locklift build\n")),(0,a.kt)("h2",{id:"deploy"},"Deploy"),(0,a.kt)("p",null,"After compiling the contract, we move to deploy. Firstly, we make a new deploy script in the ",(0,a.kt)("inlineCode",{parentName:"p"},"scripts")," directory for the ",(0,a.kt)("inlineCode",{parentName:"p"},"TokenRoot")," contract:"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"scripts/01-deploy-token-root.ts"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'import { Address, getRandomNonce, toNano, zeroAddress } from "locklift"\nimport BigNumber from "bignumber.js"\nasync function main() {\n  const signer = (await locklift.keystore.getSigner("0"))!\n  // Address of initial token supply recipient (write your own)\n  const initialSupplyTo   = new Address("0:7542...")\n  // Address of token owner (write your own)\n  const rootOwner         = new Address("0:7542...")\n  // Name of the token\n  const name              = "First Everscale Token"\n  // Symbol of the token\n  const symbol            = "FET"\n  // How many token will be issued instantly after deploy\n  const initialSupply     = 0\n  // The number of decimals the token uses\n  const decimals          = 18\n  // If true, disables token minting\n  const disableMint       = false\n  // If true, disables token burning by root\n  const disableBurnByRoot = false\n  // If true, pauses token burning\n  const pauseBurn         = false\n  \n  /*\n  Returns compilation artifacts based on the .sol file name\n  or name from value config.externalContracts[pathToLib].\n  */\n  const TokenWallet = locklift.factory.getContractArtifacts("TokenWallet")\n\n  /*\n  Deploy the TIP-3 Token Root contract.\n  @params deployWalletValue: Along with the deployment of the root token,\n  the wallet will be automatically deployed to the owner.\n  This is the amount of EVERs that will be sent to the wallet.\n  */\n  const { contract: tokenRoot } = await locklift.factory.deployContract({\n    contract: "TokenRoot",\n    publicKey: signer.publicKey,\n    initParams: {\n    // this field should be zero address if deploying with public key (see source code)\n      deployer_: zeroAddress, \n      randomNonce_: getRandomNonce(),\n      rootOwner_: rootOwner,\n      name_: name,\n      symbol_: symbol,\n      decimals_: decimals,\n      walletCode_: TokenWallet.code,\n    },\n    constructorParams: {\n      initialSupplyTo: initialSupplyTo,\n      initialSupply: new BigNumber(initialSupply).shiftedBy(decimals).toFixed(),\n      deployWalletValue: toNano(1),\n      mintDisabled: disableMint,\n      burnByRootDisabled: disableBurnByRoot,\n      burnPaused: pauseBurn,\n      remainingGasTo: zeroAddress,\n    },\n    value: toNano(5),\n  });\n  console.log(${name}: ${tokenRoot.address})\n}\n\nmain()\n  .then(() => process.exit(0))\n  .catch(e => {\n    console.log(e)\n    process.exit(1)\n  });\n'))),(0,a.kt)("p",null,"Finally, we can deploy a new token to local network. For this, make sure the local node is running, if not - run the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"docker run -d --name local-node -e USER_AGREEMENT=yes -p80:80 tonlabs/local-node\n")),(0,a.kt)("p",null,"Then run the deploy script:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npx locklift run -s ./scripts/01-deploy-token.ts -n local\n")),(0,a.kt)("p",null,"If you succeeded with all steps above, you should see the address, where the ",(0,a.kt)("inlineCode",{parentName:"p"},"TokenRoot")," contract is deployed."))}u.isMDXComponent=!0}}]);