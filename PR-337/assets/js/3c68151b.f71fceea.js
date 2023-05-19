"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[4730],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),i=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=i(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=i(n),m=o,h=p["".concat(c,".").concat(m)]||p[m]||u[m]||s;return n?a.createElement(h,r(r({ref:t},d),{},{components:n})):a.createElement(h,r({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,r=new Array(s);r[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:o,r[1]=l;for(var i=2;i<s;i++)r[i]=n[i];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2874:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>i});var a=n(7462),o=(n(7294),n(3905));const s={sidebar_position:0,description:"Get started by creating a new DApp using EVER SDK"},r="EVER SDK Quick Start",l={unversionedId:"develop/recipes/ever-sdk-guides/ever-sdk-start",id:"develop/recipes/ever-sdk-guides/ever-sdk-start",title:"EVER SDK Quick Start",description:"Get started by creating a new DApp using EVER SDK",source:"@site/../../src/develop/recipes/ever-sdk-guides/ever-sdk-start.md",sourceDirName:"develop/recipes/ever-sdk-guides",slug:"/develop/recipes/ever-sdk-guides/ever-sdk-start",permalink:"/preview/PR-337/develop/recipes/ever-sdk-guides/ever-sdk-start",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/develop/recipes/ever-sdk-guides/ever-sdk-start.md",tags:[],version:"current",lastUpdatedAt:1684349049,formattedLastUpdatedAt:"May 17, 2023",sidebarPosition:0,frontMatter:{sidebar_position:0,description:"Get started by creating a new DApp using EVER SDK"},sidebar:"tutorialSidebar",previous:{title:"EVER SDK Guides",permalink:"/preview/PR-337/develop/tutorial/ever-sdk-guides"},next:{title:"Work with REMP in EVER SDK",permalink:"/preview/PR-337/develop/recipes/ever-sdk-guides/remp"}},c={},i=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Prepare development environment",id:"prepare-development-environment",level:2},{value:"Start local node (SE)",id:"start-local-node-se",level:2},{value:"Install demo application",id:"install-demo-application",level:2},{value:"What the script does",id:"what-the-script-does",level:2},{value:"Sample code",id:"sample-code",level:2},{value:"Core API Implementation",id:"core-api-implementation",level:3},{value:"AppKit API Implementation",id:"appkit-api-implementation",level:3},{value:"Run it!",id:"run-it",level:2},{value:"Core API",id:"core-api",level:3},{value:"Appkit API",id:"appkit-api",level:3},{value:"Source code",id:"source-code",level:2},{value:"Full docs",id:"full-docs",level:2}],d={toc:i},p="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ever-sdk-quick-start"},"EVER SDK Quick Start"),(0,o.kt)("p",null,"This is a guide that will help you quickly familiarize yourself with the main tools and features of EVER SDK. You will create your first DApp and run it on local blockchain"),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"Node.js latest version installed ",(0,o.kt)("a",{parentName:"p",href:"https://www.docker.com/get-started"},"Docker")," latest version installed"),(0,o.kt)("h2",{id:"prepare-development-environment"},"Prepare development environment"),(0,o.kt)("p",null,"Install ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tonlabs/everdev"},"EVERDEV CLI")," that will help you easily start local node, compile your contracts, install demo projects and create new empty projects."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ npm install -g everdev\n")),(0,o.kt)("h2",{id:"start-local-node-se"},"Start local node (SE)"),(0,o.kt)("p",null,"We will run our test on local blockchain for testing (",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tonlabs/evernode-se"},"Evernode SE"),", start it with this command (docker should be launched)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ everdev se start\n")),(0,o.kt)("h2",{id:"install-demo-application"},"Install demo application"),(0,o.kt)("p",null,"Create a working folder. Then create a node.js demo project with EVERDEV"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ everdev js demo hello-wallet\n$ cd hello-wallet\n$ npm i\n")),(0,o.kt)("h2",{id:"what-the-script-does"},"What the script does"),(0,o.kt)("p",null,"The script implements the following logic:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Links the project with Node.js ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/tonlabs/ever-sdk"},"Ever-SDK")," binary. If you plan to use JS SDK in Web, link it with Wasm binary. Read more ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/tonlabs/ever-sdk-js"},"here"),"."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"TONClient")," instance is created and initialized with ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/tonlabs/evernode-se"},"Evernode SE"),' ("',(0,o.kt)("a",{parentName:"li",href:"http://localhost"},"http://localhost"),'", local blockchain) endpoint. See the list of other available ',(0,o.kt)("a",{parentName:"li",href:"https://docs.everos.dev/ever-platform/reference/graphql-api/networks"},"endpoints"),"."),(0,o.kt)("li",{parentName:"ol"},"Future address is calculated from the code and data of the contract (data includes signing keys)"),(0,o.kt)("li",{parentName:"ol"}," ","Flag ",(0,o.kt)("inlineCode",{parentName:"li"},"useGiver: true")," allows to sponsor deploy with Evernode SE giver that is hard coded as the default Account giver. ",(0,o.kt)("a",{parentName:"li",href:"https://docs.everos.dev/ever-sdk/guides/work_with_contracts/deploy#transfer-funds-to-the-future-address"},"You can re-assign it to your own giver"),".")),(0,o.kt)("h2",{id:"sample-code"},"Sample code"),(0,o.kt)("h3",{id:"core-api-implementation"},"Core API Implementation"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"(async () => {\n    try {\n        // Generate an ed25519 key pair\n        const walletKeys = await client.crypto.generate_random_sign_keys();\n\n        // Calculate future wallet address.\n        const walletAddress = await calcWalletAddress(walletKeys);\n\n        // Send some tokens to `walletAddress` before deploy\n        await getTokensFromGiver(walletAddress, 1_000_000_000);\n\n        // Deploy wallet\n        await deployWallet(walletKeys);\n\n        // Get wallet's account info and print balance\n        const accountState = await getAccount(walletAddress);\n        console.log(\"Hello wallet balance is\", accountState.balance)\n\n        // Run account's get method `getTimestamp`\n        let walletTimestamp = await runGetMethod('getTimestamp', walletAddress, accountState.boc );\n        console.log(\"`timestamp` value is\", walletTimestamp)\n\n        // Perform 2 seconds sleep, so that we receive an updated timestamp\n        await new Promise(r => setTimeout(r, 2000));\n        // Execute `touch` method for newly deployed Hello wallet contract\n        // Remember the logical time of the generated transaction\n        let transLt = await runOnChain(walletAddress, \"touch\");\n\n        // Run contract's get method locally after account is updated\n        walletTimestamp = await runGetMethodAfterLt('getTimestamp', walletAddress, transLt);\n        console.log(\"Updated `timestamp` value is\", walletTimestamp)\n\n        // Send some tokens from Hello wallet to a random account\n        // Remember the logical time of the generated transaction\n        const destAddress = await genRandomAddress();\n        transLt = await sendValue(walletAddress, destAddress, 100_000_000, walletKeys);\n\n        console.log('Normal exit');\n        process.exit(0);\n    } catch (error) {\n        if (error.code === 504) {\n            console.error(\n                [\n                    'Network is inaccessible. You have to start Evernode SE using `everdev se start`',\n                    'If you run SE on another port or ip, replace http://localhost endpoint with',\n                    'http://localhost:port or http://ip:port in index.js file.',\n                ].join('\\n'),\n            );\n        } else {\n            console.error(error);\n            process.exit(1);\n        }\n    }\n})();\n\nasync function calcWalletAddress(keys) {\n    // Get future `Hello`Wallet contract address from `encode_message` result\n    const { address } = await client.abi.encode_message(buildDeployOptions(keys));\n    console.log(`Future address of Hello wallet contract is: ${address}`);\n    return address;\n}\n\nfunction buildDeployOptions(keys) {\n    // Prepare parameters for deploy message encoding\n    // See more info about `encode_message` method parameters here:\n    // https://github.com/tonlabs/ever-sdk/blob/master/docs/reference/types-and-methods/mod_abi.md#encode_message\n    const deployOptions = {\n        abi: {\n            type: 'Contract',\n            value: HelloWallet.abi,\n        },\n        deploy_set: {\n            tvc: HelloWallet.tvc,\n            initial_data: {},\n        },\n        call_set: {\n            function_name: 'constructor',\n            input: {},\n        },\n        signer: {\n            type: 'Keys',\n            keys,\n        },\n    };\n    return deployOptions;\n}\n\n// Request funds from Giver contract\nasync function getTokensFromGiver(dest, value) {\n    console.log(`Transfering ${value} tokens from giver to ${dest}`);\n\n    const params = {\n        send_events: false,\n        message_encode_params: {\n            address: GIVER_ADDRESS,\n            abi: abiContract(GIVER_ABI),\n            call_set: {\n                function_name: 'sendTransaction',\n                input: {\n                    dest,\n                    value,\n                    bounce: false,\n                },\n            },\n            signer: {\n                type: 'Keys',\n                keys: GIVER_KEYS,\n            },\n        },\n    };\n    await client.processing.process_message(params);\n    console.log('Success. Tokens were transfered\\n');\n}\n\nasync function deployWallet(walletKeys) {\n    // Deploy `Hello wallet` contract\n    // See more info about `process_message` here:\n    // https://github.com/tonlabs/ever-sdk/blob/master/docs/reference/types-and-methods/mod_processing.md#process_message\n    console.log('Deploying Hello wallet contract');\n    await client.processing.process_message({\n        send_events: false,\n        message_encode_params: buildDeployOptions(walletKeys),\n    });\n    console.log('Success. Contract was deployed\\n');\n}\n\nasync function runOnChain(address, methodName) {\n    // Encode the message with external call\n    const params = {\n        send_events: false,\n        message_encode_params: {\n            address,\n            abi: {\n                type: 'Contract',\n                value: HelloWallet.abi,\n            },\n            call_set: {\n                function_name: methodName,\n                input: {},\n            },\n            signer: signerNone(),\n        },\n    };\n    console.log(`Calling ${methodName} function`);\n    const response = await client.processing.process_message(params);\n    const { id, lt } = response.transaction;\n    console.log('Success. TransactionId is: %s\\n', id);\n    return lt;\n}\n\n\n// Sometimes it is needed to execute getmethods after on-chain calls.\n// This means that the downloaded account state should have the changes made by the on-chain call. \n// To ensure it, we need to remember the transaction lt (logical time) of the last call\n// and then wait for the account state to have lt > the transaction lt. \n// Note that account.last_trans_lt is always bigger than transaction.lt because this field stores the end lt of transaction interval\n// For more information about transaction lt interval read TON Blockchain spec https://test.ton.org/tblkch.pdf P. 4.2.1\nasync function waitForAccountUpdate(address, transLt) {\n    console.log('Waiting for account update');\n    const startTime = Date.now();\n    const account = await client.net.wait_for_collection({\n        collection: 'accounts',\n        filter: {\n            id: { eq: address },\n            last_trans_lt: { gt: transLt },\n        },\n        result: 'boc',\n    });\n    const duration = Math.floor((Date.now() - startTime) / 1000);\n    console.log(`Success. Account was updated, it took ${duration} sec.\\n`);\n    return account;\n}\n\n\nasync function getAccount(address) {\n\n    // `boc` or bag of cells - native blockchain data layout. Account's boc contains full account state (code and data) that\n    // we will  need to execute get methods.\n    const query = `\n        query {\n          blockchain {\n            account(\n              address: \"${address}\"\n            ) {\n               info {\n                balance(format: DEC)\n                boc\n              }\n            }\n          }\n        }`\n    const {result}  = await client.net.query({query})\n    const info = result.data.blockchain.account.info\n    return info\n}\nasync function runGetMethod(methodName, address, accountState) {\n    // Execute the get method `getTimestamp` on the latest account's state\n    // This can be managed in 3 steps:\n    // 1. Download the latest Account State (BOC) \n    // 2. Encode message\n    // 3. Execute the message locally on the downloaded state\n\n    // Encode the message with `getTimestamp` call\n    const { message } = await client.abi.encode_message({\n        // Define contract ABI in the Application\n        // See more info about ABI type here:\n        // https://github.com/tonlabs/ever-sdk/blob/master/docs/reference/types-and-methods/mod_abi.md#abi\n        abi: {\n            type: 'Contract',\n            value: HelloWallet.abi,\n        },\n        address,\n        call_set: {\n            function_name: methodName,\n            input: {},\n        },\n        signer: { type: 'None' },\n    });\n\n    // Execute `getTimestamp` get method  (execute the message locally on TVM)\n    // See more info about run_tvm method here:\n    // https://github.com/tonlabs/ever-sdk/blob/master/docs/reference/types-and-methods/mod_tvm.md#run_tvm\n    console.log('Run `getTimestamp` get method');\n    const response = await client.tvm.run_tvm({\n        message,\n        account: accountState,\n        abi: {\n            type: 'Contract',\n            value: HelloWallet.abi,\n        },\n    });\n    return response.decoded.output\n}\n\n\nasync function runGetMethodAfterLt(methodName, address, transLt) {\n    // Wait for the account state to be more or equal the spesified logical time\n    const accountState = await waitForAccountUpdate(address, transLt).then(({ result }) => result.boc);\n    const result = await runGetMethod(methodName, address, accountState);\n    return result;\n    \n}\n\nasync function sendValue(address, dest, amount, keys) {\n    // Encode the message with `sendValue` function call\n    const sendValueParams = {\n        send_events: false,\n        message_encode_params: {\n            address,\n            // Define contract ABI in the Application\n            // See more info about ABI type here:\n            // https://github.com/tonlabs/ever-sdk/blob/master/docs/reference/types-and-methods/mod_abi.md#abi\n            abi: {\n                type: 'Contract',\n                value: HelloWallet.abi,\n            },\n            call_set: {\n                function_name: 'sendValue',\n                input: {\n                    dest,\n                    amount,\n                    bounce: false,\n                },\n            },\n            signer: signerKeys(keys),\n        },\n    };\n    console.log(`Sending ${amount} tokens to ${dest}`);\n    // Call `sendValue` function\n    const response = await client.processing.process_message(sendValueParams);\n    console.log('Success. Target account will recieve: %d tokens\\n', response.fees.total_output);\n    return response.transaction.lt;\n}\n")),(0,o.kt)("h3",{id:"appkit-api-implementation"},"AppKit API Implementation"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'async function main(client) {\n    // Generate an ed25519 key pair for new account\n    const keys = await TonClient.default.crypto.generate_random_sign_keys();\n\n    const helloAcc = new Account(HelloWallet, {\n        signer: signerKeys(keys),\n        client,\n    });\n\n    const address = await helloAcc.getAddress();\n    console.log(`Future address of the contract will be: ${address}`);\n\n    // Request contract deployment funds form a local Evernode SE giver\n    // not suitable for other networks.\n    // Deploy `hello` contract.\n    await helloAcc.deploy({ useGiver: true });\n    console.log(`Hello contract was deployed at address: ${address}`);\n\n    // Call `touch` function on-chain\n    // On-chain execution can be done with `run` function. \n    let response = await helloAcc.run("touch", {});\n    console.log(`touch execution transaction is  ${response.transaction.id}`);\n\n    // Read local variable `timestamp` with a get method `getTimestamp`\n    // This can be done with `runLocal` function. The execution of runLocal is performed off-chain and does not \n    // cost any gas.\n    response = await helloAcc.runLocal("getTimestamp", {});\n    console.log("getTimestamp value:", response.decoded.output)\n\n    // Send some money to the random address\n    const randomAddress = \n        "0:" + \n        Buffer.from((await client.crypto.generate_random_bytes({length: 32})).bytes, "base64").toString("hex");\n    response = await helloAcc.run("sendValue", {\n        dest: randomAddress,\n        amount: 100_000_000, // 0.1 token\n        bounce: true, // delivery will fail and money will be returned back because the random account does not exist.\n    });\n    console.log(`The tokens were sent, but soon they will come back because bounce = true and destination address does not exist`);\n}\n\n(async () => {\n    const client = new TonClient({\n        network: {\n            // Local Evernode-SE instance URL here\n            endpoints: ["http://localhost"]\n        }\n    });\n    try {\n        console.log("Hello localhost!");\n        await main(client);\n        process.exit(0);\n    } catch (error) {\n        if (error.code === 504) {\n            console.error(`Network is inaccessible. You have to start Evernode SE using \\`everdev se start\\`.\\n If you run SE on another port or ip, replace http://localhost endpoint with http://localhost:port or http://ip:port in index.js file.`);\n        } else {\n            console.error(error);\n        }\n    }\n    client.close();\n})();\n')),(0,o.kt)("h2",{id:"run-it"},"Run it!"),(0,o.kt)("h3",{id:"core-api"},"Core API"),(0,o.kt)("p",null,"Run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ node core\n")),(0,o.kt)("p",null,"You will see the result of core.js file execution. Core.js file demonstrades core ever-sdk api. It is the same for all ever-sdk bindings."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"node core\nFuture address of Hello wallet contract is: 0:1863addf562c5ab98f3761787458e47406675379a4dc6eb36042ba84bde5cb8d\nTransfering 1000000000 tokens from giver to 0:1863addf562c5ab98f3761787458e47406675379a4dc6eb36042ba84bde5cb8d\nSuccess. Tokens were transfered\n\nDeploying Hello wallet contract\nSuccess. Contract was deployed\n\nHello wallet balance is 986483999\nRun `getTimestamp` get method\n`timestamp` value is {\n  value0: '0x000000000000000000000000000000000000000000000000000000006373fbb4'\n}\nCalling touch function\nSuccess. TransactionId is: 1a34fbfc336ff8212793077c68bff9f49c6c3f270492afa55ca616ef40b22bec\n\nWaiting for account update\nSuccess. Account was updated, it took 0 sec.\n\nRun `getTimestamp` get method\nUpdated `timestamp` value is {\n  value0: '0x000000000000000000000000000000000000000000000000000000006373fbb6'\n}\nSending 100000000 tokens to 0:9f98e8de89e19093145afe134017a783daf8bac5dee04b8810c57a348020764c\nSuccess. Target account will recieve: 99000000 tokens\n\nNormal exit\n")),(0,o.kt)("h3",{id:"appkit-api"},"Appkit API"),(0,o.kt)("p",null,"Run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ node appkit\n")),(0,o.kt)("p",null,"You will see the result of appkit.js file execution. Appkit.js demonstrates high level Appkit package."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Hello localhost!\nFuture address of the contract will be: 0:5aab70b197897e47ee65faca0ebe24244fd1373d31de2ae39aca28029e0f3469\nHello contract was deployed at address: 0:5aab70b197897e47ee65faca0ebe24244fd1373d31de2ae39aca28029e0f3469\ntouch execution transaction is  495d0b02905ac541b54407283e52155fbfcbcc804a82ca40d5da96e433fe2f6b\ngetTimestamp value: {\n  value0: '0x000000000000000000000000000000000000000000000000000000006373fa68'\n}\nThe tokens were sent, but soon they will come back because bounce = true and destination address does not exist\n")),(0,o.kt)("h2",{id:"source-code"},"Source code"),(0,o.kt)("p",null,"You can find full source code of this sample here"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/tonlabs/sdk-samples/tree/master/demo/hello-wallet"},"https://github.com/tonlabs/sdk-samples/tree/master/demo/hello-wallet")),(0,o.kt)("h2",{id:"full-docs"},"Full docs"),(0,o.kt)("p",null,"See original guide at ",(0,o.kt)("a",{parentName:"p",href:"https://docs.everos.dev/ever-sdk/quick_start"},"https://docs.everos.dev/ever-sdk/quick_start")),(0,o.kt)("p",null,"Full EVER SDK documenation is available at ",(0,o.kt)("a",{parentName:"p",href:"https://docs.everos.dev/ever-sdk/"},"https://docs.everos.dev/ever-sdk/")))}u.isMDXComponent=!0}}]);