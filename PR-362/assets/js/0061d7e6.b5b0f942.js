"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[6659],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>v});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=s(a),h=r,v=p["".concat(c,".").concat(h)]||p[h]||u[h]||o;return a?n.createElement(v,l(l({ref:t},d),{},{components:a})):n.createElement(v,l({ref:t},d))}));function v(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=h;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},4912:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_position:0,title:"Everdev CLI Quick Start"},l="Everdev CLI Quick Start",i={unversionedId:"develop/smart-contracts/everdev",id:"develop/smart-contracts/everdev",title:"Everdev CLI Quick Start",description:"Everdev is a Node.js package with CLI interface that allows to set up developer environment and develop on TVM compatible blockchains (Everscale, Venom, TON, Gosh, etc).",source:"@site/../../src/develop/smart-contracts/everdev.md",sourceDirName:"develop/smart-contracts",slug:"/develop/smart-contracts/everdev",permalink:"/preview/PR-362/develop/smart-contracts/everdev",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/develop/smart-contracts/everdev.md",tags:[],version:"current",lastUpdatedAt:1684349049,formattedLastUpdatedAt:"May 17, 2023",sidebarPosition:0,frontMatter:{sidebar_position:0,title:"Everdev CLI Quick Start"},sidebar:"tutorialSidebar",previous:{title:"Smart Contracts",permalink:"/preview/PR-362/develop/smart-contracts"},next:{title:"Locklift Environment setup",permalink:"/preview/PR-362/develop/smart-contracts/locklift-setup"}},c={},s=[{value:"Guide overview",id:"guide-overview",level:2},{value:"Table of Contents",id:"table-of-contents",level:2},{value:"Install everdev - single interface to access all the developer tools",id:"install-everdev---single-interface-to-access-all-the-developer-tools",level:3},{value:"Create helloWorld contract",id:"create-helloworld-contract",level:3},{value:"Compile it",id:"compile-it",level:3},{value:"Run Local Blockchain",id:"run-local-blockchain",level:3},{value:"Configure default network",id:"configure-default-network",level:3},{value:"Configure Giver wallet that will sponsor deploy operation",id:"configure-giver-wallet-that-will-sponsor-deploy-operation",level:3},{value:"Generate the keys for contract ownership",id:"generate-the-keys-for-contract-ownership",level:3},{value:"Calculate the contract address",id:"calculate-the-contract-address",level:3},{value:"Deploy",id:"deploy",level:3},{value:"View contract information with Explorer",id:"view-contract-information-with-explorer",level:3},{value:"Explore contract information with GraphQL",id:"explore-contract-information-with-graphql",level:3},{value:"Run on-chain",id:"run-on-chain",level:3},{value:"Run a getter function",id:"run-a-getter-function",level:3},{value:"Transfer some tokens",id:"transfer-some-tokens",level:3},{value:"Switch to Development Network",id:"switch-to-development-network",level:3},{value:"Set a giver contract on your network",id:"set-a-giver-contract-on-your-network",level:3},{value:"What&#39;s next?",id:"whats-next",level:2}],d={toc:s},p="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"everdev-cli-quick-start"},"Everdev CLI Quick Start"),(0,r.kt)("p",null,"Everdev is a Node.js package with CLI interface that allows to set up developer environment and develop on TVM compatible blockchains (Everscale, Venom, TON, Gosh, etc)."),(0,r.kt)("h2",{id:"guide-overview"},"Guide overview"),(0,r.kt)("p",null,"This guide will help you get started with such essential Everscale tools as:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/tonlabs/everdev"},"Everdev CLI")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/tonlabs/TON-Solidity-Compiler"},"Solidity Compiler")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/tonlabs/evernode-se"},"Local Blockchain")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://ever.live"},"Everscale Blockchain Explorer")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.evercloud.dev/reference/graphql-api"},"GraphQL API")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://dashboard.evercloud.dev/"},"Evercloud dashboard"))),(0,r.kt)("p",null,"You will learn how to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create and compile your first Solidity contract"),(0,r.kt)("li",{parentName:"ul"},"Run Local blockchain for testing"),(0,r.kt)("li",{parentName:"ul"},"Deploy your first contract"),(0,r.kt)("li",{parentName:"ul"},"Run it on-chain"),(0,r.kt)("li",{parentName:"ul"},"Run a getter-function"),(0,r.kt)("li",{parentName:"ul"},"Make a transfer"),(0,r.kt)("li",{parentName:"ul"},"Explore contract data in Explorer and GraphQL playground"),(0,r.kt)("li",{parentName:"ul"},"Switch to the developer network"),(0,r.kt)("li",{parentName:"ul"},"Configure Evercloud access"),(0,r.kt)("li",{parentName:"ul"},"Configure devnet giver")),(0,r.kt)("h2",{id:"table-of-contents"},"Table of Contents"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#everdev-cli-quick-start"},"Everdev CLI Quick Start"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#guide-overview"},"Guide overview")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#table-of-contents"},"Table of Contents"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#install-everdev---single-interface-to-access-all-the-developer-tools"},"Install everdev - single interface to access all the developer tools")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#create-helloworld-contract"},"Create helloWorld contract")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#compile-it"},"Compile it")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#run-local-blockchain"},"Run Local Blockchain")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#configure-default-network"},"Configure default network")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#configure-giver-wallet-that-will-sponsor-deploy-operation"},"Configure Giver wallet that will sponsor deploy operation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#generate-the-keys-for-contract-ownership"},"Generate the keys for contract ownership")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#calculate-the-contract-address"},"Calculate the contract address")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#deploy"},"Deploy")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#view-contract-information-with-explorer"},"View contract information with Explorer")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#explore-contract-information-with-graphql"},"Explore contract information with GraphQL")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#run-on-chain"},"Run on-chain")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#run-a-getter-function"},"Run a getter function")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#transfer-some-tokens"},"Transfer some tokens")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#switch-to-development-network"},"Switch to Development Network")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#set-a-giver-contract-on-your-network"},"Set a giver contract on your network")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#whats-next"},"What's next?"))))),(0,r.kt)("h3",{id:"install-everdev---single-interface-to-access-all-the-developer-tools"},"Install everdev - single interface to access all the developer tools"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm install -g everdev\n")),(0,r.kt)("p",null,"If you experience any problems with installation, check out our ",(0,r.kt)("a",{parentName:"p",href:"https://docs.everos.dev/everdev/troubleshooting"},"troubleshooting section"),"."),(0,r.kt)("h3",{id:"create-helloworld-contract"},"Create helloWorld contract"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ everdev sol create helloWorld\n")),(0,r.kt)("h3",{id:"compile-it"},"Compile it"),(0,r.kt)("p",null,"Using Solidity compiler:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ everdev sol compile helloWorld.sol\n")),(0,r.kt)("p",null,"You can also use the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.everos.dev/everdev/command-line-interface/solidity-compiler-driver"},"Solidity compiler driver"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$ everdev sold install\n$ export PATH="/home/<username>/.everdev/sold:$PATH"\n$ sold helloWorld.sol\n')),(0,r.kt)("h3",{id:"run-local-blockchain"},"Run Local Blockchain"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Attention:")," Docker should be running."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ everdev se start\n")),(0,r.kt)("h3",{id:"configure-default-network"},"Configure default network"),(0,r.kt)("p",null,"Set Local Blockchain ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tonlabs/evernode-se"},"SE (Simple Emulator)")," as the default network:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ everdev network default se\n")),(0,r.kt)("h3",{id:"configure-giver-wallet-that-will-sponsor-deploy-operation"},"Configure Giver wallet that will sponsor deploy operation"),(0,r.kt)("p",null,"Here we use address and private key of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tonlabs/evernode-se/tree/master/contracts/giver_v3"},"SE High Load Giver"),"."),(0,r.kt)("p",null,"Note: it may be already configured if you make a clean install of the latest Everdev. Then you can skip this step. If you are updating from some old version, it is necessary."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ everdev signer add seGiver 172af540e43a524763dd53b26a066d472a97c4de37d5498170564510608250c3\n$ everdev network giver se 0:ece57bcc6c530283becbbd8a3b24d3c5987cdddc3c8b7b33be6e4a6312490415 --signer seGiver\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Attention! This giver is available only in SE. If you work in mainnet or devnet, you need to deploy your own giver - more details below.")),(0,r.kt)("h3",{id:"generate-the-keys-for-contract-ownership"},"Generate the keys for contract ownership"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ everdev signer generate owner_keys\n$ everdev signer default owner_keys\n$ everdev s l \n\nSigner                Public Key                                                        Used\n--------------------  ----------------------------------------------------------------  ---------------------------\nseGiver               2ada2e65ab8eeab09490e3521415f45b6e42df9c760a639bcf53957550b25a16  se network giver signer   EverNode SE Default Giver Keys\nowner_keys (Default)  3826202b129ea8c041b8d49a655512648fc94377d1958a7a4fc9f4b3051ecf7b\n")),(0,r.kt)("p",null,"*","Note that there are shortcuts for all the commands: s l = signer list :)"),(0,r.kt)("p",null,"*","*","Don't forget to make the owner key default otherwise giver keys will be used as default."),(0,r.kt)("h3",{id:"calculate-the-contract-address"},"Calculate the contract address"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ everdev c i helloWorld\n\nConfiguration\n\n  Network: se (http://localhost)\n  Signer:  owner_keys (public 3826202b129ea8c041b8d49a655512648fc94377d1958a7a4fc9f4b3051ecf7b)\n\nAddress:   0:e74c4258496e79e62e014ca96911acbf5cb0e286fd55dd6f4e3da54e4197ddf5 (calculated from TVC and signer public)\nCode Hash: c517820144a4daf5a3414c9233556b2b0ad34cdd228f200ea68a4c0327e0bd29 (from TVC file)\nAccount:   Doesn't exist\n")),(0,r.kt)("p",null,"You can see that the contract does not exist yet (is not deployed) but you can already see its future address."),(0,r.kt)("h3",{id:"deploy"},"Deploy"),(0,r.kt)("p",null,"Here we deploy the contract, sponsoring it with 10 Tokens (Everscale native currency has 9 decimals). The money for deploy are taken from the giver we configured in the previous steps."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ everdev contract deploy -v 10000000000 helloWorld\n\nConfiguration\n\n  Network: se (http://localhost)\n  Signer:  owner_keys (public 3826202b129ea8c041b8d49a655512648fc94377d1958a7a4fc9f4b3051ecf7b)\n\nAddress:   0:e74c4258496e79e62e014ca96911acbf5cb0e286fd55dd6f4e3da54e4197ddf5 (calculated from TVC and signer public)\n\nDeploying...\nContract has deployed at address: 0:e74c4258496e79e62e014ca96911acbf5cb0e286fd55dd6f4e3da54e4197ddf5\n")),(0,r.kt)("h3",{id:"view-contract-information-with-explorer"},"View contract information with Explorer"),(0,r.kt)("p",null,"Go to ",(0,r.kt)("a",{parentName:"p",href:"http://localhost"},"localhost")," and search for your contract address in search bar. Open your account page. You will need it later to see its transactions and messages, that we will produce in the next steps."),(0,r.kt)("h3",{id:"explore-contract-information-with-graphql"},"Explore contract information with GraphQL"),(0,r.kt)("p",null,"Go to ",(0,r.kt)("a",{parentName:"p",href:"http://localhost/graphql"},"localhost/graphql"),". Enter in the left pane and click Run button (replace the contract's address with the one you got in the previous steps)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'query {\n  accounts(\n    filter: {\n      id: {\n        eq: "0:e74c4258496e79e62e014ca96911acbf5cb0e286fd55dd6f4e3da54e4197ddf5"\n      }\n    }\n  ) {\n    acc_type_name\n    balance\n    code\n    code_hash\n    data\n  }\n}\n')),(0,r.kt)("p",null,"You will see:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n  "data": {\n    "accounts": [\n      {\n        "acc_type_name": "Active",\n        "balance": "0x1db0832ba",\n        "code": "te6ccgECEwEAAnkABCj/AIrtUyDjAyDA/+MCIMD+4wLyCxECARICoiHbPNMAAY4SgQIA1xgg+QFY+EIg+GX5EPKo3tM/AY4d+EMhuSCfMCD4I4ED6KiCCBt3QKC53pMg+GPg8jTYMNMfAfgjvPK50x8B2zz4R27yfAUDATQi0NcLA6k4ANwhxwDcIdMfId0B2zz4R27yfAMDQCCCEDtj1H67joDgIIIQaBflNbuOgOAgghBotV8/uuMCCwYEAlgw+EFu4wD4RvJzcfhm0fhC8uBl+EUgbpIwcN74Qrry4Gb4APgj+GrbPH/4ZwUPAHjtRNAg10nCAY4U0//TP9MA1wsf+Gp/+GH4Zvhj+GKOG/QFcPhqcAGAQPQO8r3XC//4YnD4Y3D4Zn/4YeICKCCCEFTWvRi64wIgghBoF+U1uuMCCAcBSts8+EqNBHAAAAAAAAAAAAAAAAA6BflNYMjOIc8LH8lw+wB/+GcQAnIw0ds8IcD/jikj0NMB+kAwMcjPhyDOjQQAAAAAAAAAAAAAAAANTWvRiM8WIc8UyXD7AN4w4wB/+GcJDwECiAoAFGhlbGxvV29ybGQCKCCCEDcxLkW64wIgghA7Y9R+uuMCDgwDSDD4QW7jAPpA1w1/ldTR0NN/39cMAJXU0dDSAN/R2zzjAH/4ZxANDwBU+EUgbpIwcN74Qrry4Gb4AFRxIMjPhYDKAHPPQM4B+gKAa89AyXD7AF8DAkAw+EFu4wDR+EUgbpIwcN74Qrry4Gb4APgj+GrbPH/4ZxAPAC74QsjL//hDzws/+EbPCwD4SgHLH8ntVAAu7UTQ0//TP9MA1wsf+Gp/+GH4Zvhj+GIBCvSkIPShEgAA",\n        "code_hash": "c517820144a4daf5a3414c9233556b2b0ad34cdd228f200ea68a4c0327e0bd29",\n        "data": "te6ccgEBAQEALwAAWTgmICsSnqjAQbjUmmVVEmSPyUN30ZWKek/J9LMFHs97AAABesq/uBawfEB6wA=="\n      }\n    ]\n  }\n}\n')),(0,r.kt)("p",null,"You can specify any other fields in the result section that are available in GraphQL Schema. (Click ",(0,r.kt)("inlineCode",{parentName:"p"},"Docs")," on the right side of your screen to explore it)."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"What is GraphQL?")," This is the API of blockchain, to retrieve data from it and to send data into it. You can use this playground later, if you will need need to test some queries."),(0,r.kt)("h3",{id:"run-on-chain"},"Run on-chain"),(0,r.kt)("p",null,"Let's move on and run an on-chain method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ everdev c run helloWorld\n\nConfiguration\n\n  Network: se (http://localhost)\n  Signer:  owner_keys (public 83cb989d99bce34dd7c04dd05a8a155f2a268d241ef8ec41c4c431cce0827f2d)\n\nAddress:   0:25d101f07d7ef18260619c5d1cf2bc46173cb70c86129d6eed9ec46ed777e966 (calculated from TVC and signer public)\n\nAvailable functions:\n\n  1) renderHelloWorld\n  2) touch\n  3) sendValue\n  4) timestamp\n\n  Select function (number): \n\n")),(0,r.kt)("p",null,"Let's enter 3. You will see the transaction ID of the operation."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'    "transaction": {\n        "json_version": 5,\n        "id": "8087f774d4b8b4d4716cb31a74deea32550a04b40e853f55c64579fa3897108f",\n        "boc": "te6ccgECBw......\n        ........................\n')),(0,r.kt)("p",null,"You can also execute it inline like this:\\\n",(0,r.kt)("inlineCode",{parentName:"p"},"$ everdev c run helloWorld touch")),(0,r.kt)("p",null,"In the result you can see the transaction","_","id. Search for it on your Contract's page in Explorer and in GraphQL playground (use ",(0,r.kt)("inlineCode",{parentName:"p"},"transactions")," collection instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"accounts"),")."),(0,r.kt)("h3",{id:"run-a-getter-function"},"Run a getter function"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'$ everdev c run-local helloWorld timestamp\n\nConfiguration\n\n  Network: se (http://localhost)\n  Signer:  owner_keys (public 3826202b129ea8c041b8d49a655512648fc94377d1958a7a4fc9f4b3051ecf7b)\n\nAddress:   0:e74c4258496e79e62e014ca96911acbf5cb0e286fd55dd6f4e3da54e4197ddf5 (calculated from TVC and signer public)\n\nExecution has finished with result: {\n    "output": {\n        "timestamp": "1626898677"\n    },\n    "out_messages": []\n}\n')),(0,r.kt)("h3",{id:"transfer-some-tokens"},"Transfer some tokens"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'$ everdev c run helloWorld sendValue\n\nConfiguration\n\n  Network: se (http://localhost)\n  Signer:  owner_keys (public 3826202b129ea8c041b8d49a655512648fc94377d1958a7a4fc9f4b3051ecf7b)\n\nAddress:   0:e74c4258496e79e62e014ca96911acbf5cb0e286fd55dd6f4e3da54e4197ddf5 (calculated from TVC and signer public)\n\nParameters of sendValue:\n\n  dest (address): 0:b5e9240fc2d2f1ff8cbb1d1dee7fb7cae155e5f6320e585fcc685698994a19a5\n  amount (uint128): 1000000000\n  bounce (bool): true\n\nRunning...\n\nExecution has finished with result: {\n    "transaction": {\n        "json_version": 5,\n        "id": "550731bb26e5054387a781257e077dbdd769367f16b19bfa529c20475e2a08f6",\n        "boc": "te6ccgECCwEAAkwAA7V+dMQlhJbnnmLgFMqWkRrL9csOKG/VXdb049pU5Bl931AAAAAAAAADdx7fDdz4W9u1NnBVF9To555bwxWhiXk8pjgn1OO6cR6wAAAAAAAAAzYPiDAAADRxN2doBQQBAg8MSMYbFBYEQAMCAG/Jh6EgTBRYQAAAAAAAAgAAAAAAAmHZXn3oj36iIsmePH9xls7+ruVE+XB4H24a\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Attention!")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Contracts take value in nanotokens, so in this step we transferred 1 token."),(0,r.kt)("li",{parentName:"ul"},"Bounce = true means that if the recipient does not exist, money will be returned back. ",(0,r.kt)("strong",{parentName:"li"},"If you plan to transfer money for deploy, specify Bounce = false!"))),(0,r.kt)("p",null,"Again, now you can find this transaction in Explorer or GraphQL API."),(0,r.kt)("h3",{id:"switch-to-development-network"},"Switch to Development Network"),(0,r.kt)("p",null,"The Development Network, aka devnet is the Everscale test network with free test tokens that has an identical configuration to mainnet. You can test your contracts in a live environment on it."),(0,r.kt)("p",null,"To access devnet, you need to create an account and a project on ",(0,r.kt)("a",{parentName:"p",href:"https://dashboard.evercloud.dev/"},"https://dashboard.evercloud.dev/"),". Follow ",(0,r.kt)("a",{parentName:"p",href:"https://docs.evercloud.dev/products/evercloud/get-started"},"this guide")," to do it."),(0,r.kt)("p",null,"You will get your personal project ID, optional secret key and an endpoint of the following format:\\\n",(0,r.kt)("a",{parentName:"p",href:"https://devnet.evercloud.dev/projectID/graphql"},"https://devnet.evercloud.dev/projectID/graphql")),(0,r.kt)("p",null,"To set devnet up as the default network in everdev, do the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"everdev network default dev\n")),(0,r.kt)("p",null,"Go to your Evercloud ",(0,r.kt)("a",{parentName:"p",href:"https://dashboard.evercloud.dev/"},"dashboard"),', find your "Project Id" and "Secret" (optional) on the "Security" tab, and pass them as parameters:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"everdev network credentials network_name --project <Project Id> --access-key <Secret>\n")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"everdev network credentials dev --project 01234567890123456789012345678901 --access-key 98765432109876543210987654321098\n")),(0,r.kt)("h3",{id:"set-a-giver-contract-on-your-network"},"Set a giver contract on your network"),(0,r.kt)("p",null,"While working with SE network, you already have a preset giver. In Devnet you need to configure your own."),(0,r.kt)("p",null,"This contract can be some multisig wallet, for example your ",(0,r.kt)("a",{parentName:"p",href:"https://ever.surf/"},"Surf")," account (don't forget to ",(0,r.kt)("a",{parentName:"p",href:"https://help.ever.surf/en/support/solutions/articles/77000397828-how-to-select-surf-test-network-"},"switch it to devnet too"),"!)."),(0,r.kt)("p",null,"To get test tokens to your future giver, go to your Evercloud ",(0,r.kt)("a",{parentName:"p",href:"https://dashboard.evercloud.dev/"},"dashboard"),", open the ",(0,r.kt)("strong",{parentName:"p"},"Endpoints")," tab of your project, and click the faucet button next to ",(0,r.kt)("strong",{parentName:"p"},"Development Network"),". Specify the address and you will get some free test tokens."),(0,r.kt)("p",null,"To set the giver up in everdev, first get your giver keys ready. In Surf it is your ",(0,r.kt)("a",{parentName:"p",href:"https://help.ever.surf/en/support/solutions/articles/77000236693-how-to-get-your-seed-phrase-in-surf-"},"seed phrase"),"."),(0,r.kt)("p",null,"Save the keys of your giver account into a signer that will be used to sign giver transactions:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"everdev signer add giver_sign signer_secret_key_or_seed_phrase_in_quotes\n")),(0,r.kt)("p",null,"Then add the giver address specifying the signer to be used with it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"everdev network giver dev giver_address --signer giver_sign --type giver_type\n")),(0,r.kt)("p",null,"Where"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"giver_type")," is the type of the giver contract you selected (GiverV1 | GiverV2 | GiverV3 | SafeMultisigWallet | SetcodeMultisigWallet) - for Surf use ",(0,r.kt)("inlineCode",{parentName:"p"},"SetcodeMultisigWallet"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Now you can do all the steps of this guide on devnet and see your transactions on your GraphQL playground at")," ",(0,r.kt)("a",{parentName:"p",href:"https://devnet.evercloud.dev/projectID/graphql"},(0,r.kt)("strong",{parentName:"a"},"https://devnet.evercloud.dev/projectID/graphql"))," ",(0,r.kt)("strong",{parentName:"p"},"and"),"  ",(0,r.kt)("a",{parentName:"p",href:"https://net.ever.live/landing"},(0,r.kt)("strong",{parentName:"a"},"ever.live")),(0,r.kt)("strong",{parentName:"p"},"!")),(0,r.kt)("h2",{id:"whats-next"},"What's next?"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Also take a look at our ",(0,r.kt)("a",{parentName:"li",href:"https://docs.everscale.network/arch/basics"},"blockchain basics page")," that will help you understand the core concepts of Everscale:)"),(0,r.kt)("li",{parentName:"ol"},"If you want to integrate your application with Everscale - dive into our ",(0,r.kt)("a",{parentName:"li",href:"https://docs.everos.dev/ever-sdk/quick_start"},"SDK Quick Start"),"!"),(0,r.kt)("li",{parentName:"ol"},"If you want to explore the GraphQL API more, ",(0,r.kt)("a",{parentName:"li",href:"https://docs.evercloud.dev/reference/graphql-api"},"here is the documentation"),"!"),(0,r.kt)("li",{parentName:"ol"},"If you are an exchange - check out our ",(0,r.kt)("a",{parentName:"li",href:"https://docs.everos.dev/ever-sdk/add_to_exchange"},"exchange guide"),"!")),(0,r.kt)("p",null,"We hope this guide was helpful to you! If you have any difficulties/questions/suggestions/etc. please write to out ",(0,r.kt)("a",{parentName:"p",href:"https://t.me/ever_sdk"},"telegram channel"),"."))}u.isMDXComponent=!0}}]);