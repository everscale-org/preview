"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[3159],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),c=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=c(e.components);return a.createElement(d.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,d=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=c(n),h=r,m=u["".concat(d,".").concat(h)]||u[h]||p[h]||s;return n?a.createElement(m,o(o({ref:t},l),{},{components:n})):a.createElement(m,o({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=h;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var c=2;c<s;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1461:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const s={sidebar_position:3},o="Everscale \u2192 EVM Transactions",i={unversionedId:"develop/integrate/build-cross-chain/getting-started/everscale-evm",id:"develop/integrate/build-cross-chain/getting-started/everscale-evm",title:"Everscale \u2192 EVM Transactions",description:"Everscale - EVM transactions are similar to EVM - Everscale. The difference is that they are in the opposite direction.",source:"@site/../../src/develop/integrate/build-cross-chain/getting-started/everscale-evm.md",sourceDirName:"develop/integrate/build-cross-chain/getting-started",slug:"/develop/integrate/build-cross-chain/getting-started/everscale-evm",permalink:"/preview/PR-333/develop/integrate/build-cross-chain/getting-started/everscale-evm",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/develop/integrate/build-cross-chain/getting-started/everscale-evm.md",tags:[],version:"current",lastUpdatedAt:1660241460,formattedLastUpdatedAt:"Aug 11, 2022",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"EVM \u2192 Everscale transactions of liquid tokens without the credit processor",permalink:"/preview/PR-333/develop/integrate/build-cross-chain/getting-started/evm-everscale"},next:{title:"EVM \u2192 Everscale Transactions Using The Credit Processor Contract",permalink:"/preview/PR-333/develop/integrate/build-cross-chain/getting-started/credit-processor"}},d={},c=[],l={toc:c},u="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"everscale--evm-transactions"},"Everscale \u2192 EVM Transactions"),(0,r.kt)("p",null,"Everscale - EVM transactions are similar to EVM - Everscale. The difference is that they are in the opposite direction.",(0,r.kt)("br",{parentName:"p"}),"\n","The exception lies in the fact that we don't have to check how many tokens the Vault is still ready to accept, but how many tokens it has on the balance (how muck can be withdrawn).",(0,r.kt)("br",{parentName:"p"}),"\n","There is a lot of code needed to explain this transaction type. Therefore, in what follows, only a simplified\nversion is given. Please check the details in the repository via following ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mnill/octus-bridge-integration-sample/blob/master/src/helpers/EverscaleEvm/everscaleEvmPipeline.ts"},"this link"),"."),(0,r.kt)("p",null,"The transaction pipeline is as follows:"),(0,r.kt)("p",null,"Similarly, we take the Vaults list from ",(0,r.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/broxus/bridge-assets/master/main.json"},"this file"),"."),(0,r.kt)("p",null,"Select the desired token, and take for it the Vault of the desired network (chain id), and depositType -\ndefault. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"DO NOT")," use ",(0,r.kt)("inlineCode",{parentName:"p"},"EthereumEventConfiguration.sol"),".",(0,r.kt)("br",{parentName:"p"}),"\n","Instead, use ",(0,r.kt)("inlineCode",{parentName:"p"},"EverscaleEventConfiguration.sol"),".   "),(0,r.kt)("p",null,"Get the address from ",(0,r.kt)("inlineCode",{parentName:"p"},"Proxy.sol"),".",(0,r.kt)("br",{parentName:"p"}),"\n","This is a contract owner TIP 3 Root which knows which configuration can be trusted. Take the ",(0,r.kt)("inlineCode",{parentName:"p"},"proxy address")," from the ",(0,r.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/broxus/bridge-assets/master/main.json"},"following file"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"const proxyContract = new rpc.Contract(TokenAbi.EvmTokenTransferProxy, new Address(address));\n\nconst configurationAddress = (await contract.methods.getDetails({ answerId: 0 }).call()).value0.tonConfiguration;\n")),(0,r.kt)("p",null,"The so-called liquid tokens are the tokens that are issued by the bridge for the tokens locked in Vaults.",(0,r.kt)("br",{parentName:"p"}),"\n","Accordingly, in order to get the tokens from the Vaults, the issued tokens must be burned. "),(0,r.kt)("p",null,"Send tokens for burning, and put the callback from this burning on ",(0,r.kt)("inlineCode",{parentName:"p"},"Proxy.sol"),", which in turn will send the\ncallback ",(0,r.kt)("inlineCode",{parentName:"p"},"EverscaleEventConfiguration.sol"),", and it will deposit ",(0,r.kt)("inlineCode",{parentName:"p"},"TokenTransferEverscaleEvent.sol"),"."),(0,r.kt)("p",null,"This is similar to EVM \u2192 Everscale transactions, except that in this case, the relayers do not just say Yes/No.",(0,r.kt)("br",{parentName:"p"}),"\n","They sign the contract for the transaction, with which the funds can be withdrawn from ",(0,r.kt)("inlineCode",{parentName:"p"},"Vault.sol")," on the EVM side."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"const data = await rpc.packIntoCell({\n    data: {\n        addr: evmAddress,\n        chainId: evmChainId,\n    },\n    structure: [\n        {name: 'addr', type: 'uint160'},\n        {name: 'chainId', type: 'uint32'},\n    ] as const,\n});\n\n    await walletContract.methods\n      .burn({\n          callbackTo: proxyAddress,\n          payload: data.boc,\n          remainingGasTo: userAddress,\n          amount: amount,\n      }).send({\n          amount: burnValue,\n          bounce: true,\n          from: userAddress,\n      });\n")),(0,r.kt)("p",null,"Actually, having sent the token burning transaction, it is needed to wait for the Event. This is a difficult task. The Event contract address cannot be calculated in advance, because it depends on the LT (Logical time).",(0,r.kt)("br",{parentName:"p"}),"\n","It can be solved in different ways. One of them is to subscribe to the ",(0,r.kt)("inlineCode",{parentName:"p"},"EverscaleEventConfiguration.sol")," contract and wait for the transaction that will create the contract. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"const lastConfigurationLt = (\n                await rpc.getFullContractState({\n                    address: configurationAddress,\n                })\n            ).state?.lastTransactionId?.lt\n\nconst subscriber = new rpc.Subscriber();\nconst oldStream = subscriber.oldTransactions(configurationAddress, {\n    fromLt: fromLT,\n});\n\nconst eventStream = oldStream\n.merge(subscriber.transactions(address))\n.flatMap((item) => item.transactions)\n.filterMap(async (tx) => {\n    const decodedTx = await contract.decodeTransaction({\n        methods: ['deployEvent'],\n        transaction: tx,\n    });\n    if (decodedTx?.method === 'deployEvent' && decodedTx.input) {\n        const {eventData} = decodedTx.input.eventVoteData;\n        const event = await rpc.unpackFromCell({\n            allowPartial: true,\n            boc: eventData,\n            structure: [\n                {name: 'wid', type: 'int8'},\n                {name: 'addr', type: 'uint256'},\n                {name: 'tokens', type: 'uint128'},\n                {name: 'eth_addr', type: 'uint160'},\n                {name: 'chainId', type: 'uint32'},\n            ] as const,\n        });\n        const checkAddress = `${event.data.wid}:${new BigNumber(event.data.addr)\n            .toString(16)\n            .padStart(64, '0')}`;\n        const checkEvmAddress = `0x${new BigNumber(event.data.eth_addr)\n            .toString(16)\n            .padStart(40, '0')}`;\n\n        if (\n            checkAddress.toLowerCase() === fromAddress.toLowerCase() &&\n            checkEvmAddress.toLowerCase() === toAddress.toLowerCase()\n        ) {\n            const eventAddress = await contract.methods\n                .deriveEventAddress({\n                    answerId: 0,\n                    eventVoteData: decodedTx.input.eventVoteData,\n                })\n                .call();\n\n            return eventAddress.eventContract;\n        }\n        return undefined;\n    }\n    return undefined;\n});\nconst eventAddress = await eventStream.first();\n")),(0,r.kt)("p",null,"The address must be saved so that if the user refreshes the page without completing the transaction, to be able to return to it."),(0,r.kt)("p",null,"Unfortunately, there is a time lag between the moment when tokens are sent to when the address is generated.",(0,r.kt)("br",{parentName:"p"}),"\n","Thus, if the user leaves in this time frame, then the address of the Event will have to be searched on app.octusbridge.io.",(0,r.kt)("br",{parentName:"p"}),"\n","You can check ",(0,r.kt)("inlineCode",{parentName:"p"},"History")," to find there all transactions via the Bridge."),(0,r.kt)("p",null,"When the address is generated, ",(0,r.kt)("inlineCode",{parentName:"p"},"TokenTransferEverscaleEvent.sol"),", we subscribe to it and track its status.",(0,r.kt)("br",{parentName:"p"}),"\n","Everything is the same as in the case of EVM - Everscale. The statuses are: ",(0,r.kt)("inlineCode",{parentName:"p"},"Initializing, Pending, Confirmed, Rejected."),(0,r.kt)("br",{parentName:"p"}),"\n","After the Event has been signed by a sufficient number of relayers and the transaction is ",(0,r.kt)("inlineCode",{parentName:"p"},"Confirmed"),", it is needed to get the data that they signed and the signatures themselves."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"const eventContract = new rpc.Contract(TokenAbi.TokenTransferTonEvent, new Address(eventAddress));\n\nconst eventDetails = await eventContract.methods.getDetails({ answerId: 0 }).call();\n\nconst round_number = (await eventContract.methods.round_number({}).call()).round_number;\n\nconst eventConfigDetails = await eventConfig.methods.getDetails({ answerId: 0 }).call()\n\nconst eventDataEncoded = mapTonCellIntoEthBytes(\n                    Buffer.from(eventConfigDetails._basicConfiguration.eventABI, 'base64').toString(),\n                    eventDetails._eventInitData.voteData.eventData,\n                );\n\nconst encodedEvent = web3.eth.abi.encodeParameters([{\n    TONEvent: {\n        eventTransactionLt: 'uint64',\n        eventTimestamp: 'uint32',\n        eventData: 'bytes',\n        configurationWid: 'int8',\n        configurationAddress: 'uint256',\n        eventContractWid: 'int8',\n        eventContractAddress: 'uint256',\n        proxy: 'address',\n        round: 'uint32',\n    },\n    }], [{\n        eventTransactionLt: eventDetails._eventInitData.voteData.eventTransactionLt,\n        eventTimestamp: eventDetails._eventInitData.voteData.eventTimestamp,\n        eventData: eventDataEncoded,\n        configurationWid: configurationAddressWid,\n        configurationAddress: `0x${configurationAddressValue}`,\n        eventContractWid: eventContractAddressWid,\n        eventContractAddress: `0x${eventContractAddressValue}`,\n        proxy: `0x${new BigNumber(eventConfigDetails._networkConfiguration.proxy).toString(16).padStart(40, '0')}`,\n        round: round_number\n    }])\n\nconst signatures = eventDetails._signatures.map(sign => {\n    const signature = `0x${Buffer.from(sign, 'base64').toString('hex')}`\n    const address = web3!.eth.accounts.recover(\n        this.evmWallet.web3!.utils.sha3(this.data.encodedEvent!)!,\n        signature,\n    )\n    return {\n        address,\n        order: new BigNumber(address.slice(2).toUpperCase(), 16),\n        signature,\n    }\n})\n\nsignatures.sort((a, b) => {\n    if (a.order.eq(b.order)) {\n        return 0\n    }\n\n    if (a.order.gt(b.order)) {\n        return 1\n    }\n\n    return -1\n});\n\nconst vaultContract = new web3.eth.Contract(EthAbi.Vault, vaultAddress);\n\nconst isAlreadyReleased = await vaultContract.methods.withdrawalIds(withdrawId).call();\n\nif (!isAlreadyReleased) {\n        vaultContract.methods\n          .saveWithdraw(\n              encodedEvent,\n              signatures.map(({signature}) => signature),\n          ).send({\n          from: fromAddress,\n          type: txType,\n      });\n}\n")),(0,r.kt)("p",null,"Please follow ",(0,r.kt)("a",{parentName:"p",href:"/preview/PR-333/develop/integrate/build-cross-chain/getting-started/credit-processor"},"this page")," in order to go through the details of EVM \u2013 Everscale transactions using the Credit Processor."))}p.isMDXComponent=!0}}]);