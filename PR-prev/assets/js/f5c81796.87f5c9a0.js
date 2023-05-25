"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[612],{3905:(e,t,s)=>{s.d(t,{Zo:()=>c,kt:()=>m});var n=s(7294);function r(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function o(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,n)}return s}function a(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?o(Object(s),!0).forEach((function(t){r(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):o(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function i(e,t){if(null==e)return{};var s,n,r=function(e,t){if(null==e)return{};var s,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)s=o[n],t.indexOf(s)>=0||(r[s]=e[s]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)s=o[n],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(r[s]=e[s])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),s=t;return e&&(s="function"==typeof e?e(t):a(a({},t),e)),s},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var s=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(s),h=r,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||o;return s?n.createElement(m,a(a({ref:t},c),{},{components:s})):n.createElement(m,a({ref:t},c))}));function m(e,t){var s=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=s.length,a=new Array(o);a[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:r,a[1]=i;for(var p=2;p<o;p++)a[p]=s[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,s)}h.displayName="MDXCreateElement"},2225:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=s(7462),r=(s(7294),s(3905));const o={sidebar_position:1,description:"Trace message processing with REMP"},a="Work with REMP in EVER SDK",i={unversionedId:"develop/tutorial/ever-sdk-quides/remp",id:"develop/tutorial/ever-sdk-quides/remp",title:"Work with REMP in EVER SDK",description:"Trace message processing with REMP",source:"@site/../../src/develop/tutorial/ever-sdk-quides/remp.md",sourceDirName:"develop/tutorial/ever-sdk-quides",slug:"/develop/tutorial/ever-sdk-quides/remp",permalink:"/preview/PR-prev/develop/tutorial/ever-sdk-quides/remp",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/develop/tutorial/ever-sdk-quides/remp.md",tags:[],version:"current",lastUpdatedAt:1679933170,formattedLastUpdatedAt:"Mar 27, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"Trace message processing with REMP"},sidebar:"tutorialSidebar",previous:{title:"EVER SDK Quick Start",permalink:"/preview/PR-prev/develop/tutorial/ever-sdk-quides/ever-sdk-start"},next:{title:"Other EVER SDK Guides",permalink:"/preview/PR-prev/develop/tutorial/ever-sdk-quides/other-sdk-guides"}},l={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Working with REMP statuses",id:"working-with-remp-statuses",level:2},{value:"Expected output",id:"expected-output",level:2},{value:"Sample Source code",id:"sample-source-code",level:2},{value:"See also",id:"see-also",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...s}=e;return(0,r.kt)(d,(0,n.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"work-with-remp-in-ever-sdk"},"Work with REMP in EVER SDK"),(0,r.kt)("p",null,"This is a guide that will teach you to trace and understand external message processing statuses with REMP (Reliable External Messaging Protocol)"),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"REMP (Reliable External Messaging Protocol) is a set of protocols and data structures that are designed to keep trace of incoming external messages and predict with a high probability whether a message will be processed successfully."),(0,r.kt)("p",null,"REMP adds some additional guarantees/features for external messages processing:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1. Replay protection")),(0,r.kt)("p",null,"   If a message is processed and added into an accepted block, then the same message ",(0,r.kt)("strong",{parentName:"p"},"(that is, the message with the same hash)")," will not be collated for some time period. If the message has some expiration time (corresponding to the time period), then this effectively makes efficient replay protection."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2. No messages are lost")),(0,r.kt)("p",null,"You only need to send the message once. If there will be a possibility to accept it and add it to a block, then it will be done. Message loss may occur only for blockchain overloading reasons."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"3. One can trace the message processing.")),(0,r.kt)("p",null,"There are several checkpoints on the message processing path (when validators received the message, when message was added to a block, when the block was finalized, etc). Upon reaching certain checkpoints one can predict that the message will be successfully processed with a high accuracy - most messages can be considered to be processed when validators acknowledge that they were received (this happens in 100-200 ms; after that it\u2019s highly unlikely that the message is declined). Thus, depending on the message importance one may trade efficiency for reliability in the software, choosing not to trace further processing results. On the other hand, if a transaction is really important, then you can wait till the block with the transaction result is issued."),(0,r.kt)("p",null,"During validation, as the message passes through various stages (that is, changes some statuses), validator sends receipts about each."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create a project on ",(0,r.kt)("a",{parentName:"li",href:"https://dashboard.evercloud.dev"},"dashboard.evercloud.dev")," if you don't have one."),(0,r.kt)("li",{parentName:"ul"},"Remember its Development Network HTTPS endpoint."),(0,r.kt)("li",{parentName:"ul"},"Pass this endpoint as a parameter when running the example.")),(0,r.kt)("h2",{id:"working-with-remp-statuses"},"Working with REMP statuses"),(0,r.kt)("p",null,"The sample sends a message to a predeployed test contract."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"(async () => {\n    try {\n        console.log('Sending messsage and waiting for REMP events.');\n        const { transaction } = await client.processing.process_message(\n            {\n                send_events: true,\n                message_encode_params: {\n                    address: CONTRACT_ADDRESS,\n                    abi: abiContract(CONTRACT_ABI),\n                    call_set: {\n                        function_name: 'touch',\n                    },\n                    signer: signerNone(),\n                },\n            },\n            responseHandler,\n        );\n\n        console.log(\n            [\n                `The message has been processed.`,\n                `${rempEventCnt} REMP events received`,\n                `Transaction id: ${transaction.id}, status ${transaction.status_name}`,\n            ].join('\\n'),\n        );\n        client.close();\n    } catch (error) {\n        if (error.code === 504) {\n            console.error('Network is inaccessible.');\n        } else {\n            console.error(error);\n        }\n        process.exit(1);\n    }\n\n")),(0,r.kt)("p",null,"After the message is sent all REMP events related to the message are received and printed, tracing the message processing by validators."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note"),": By REMP events one can predict with a high probability that the message will be processed successfully, before the processing is complete. Depending on message importance, you can choose to consider it processed as soon as the corresponding receipt arrives and not spend time and resources waiting for further status receipts."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"function responseHandler(params, responseType) {\n    // Tip: Always wrap the logic inside responseHandler in a try-catch block\n    // or you will be surprised by non-informative errors due to the context\n    // in which the handler is executed\n    try {\n        if (responseType === 100 /* GraphQL data received */) {\n            const { type, json, error } = params;\n\n            assert.ok(type, 'Event always has type');\n\n            if (type.startsWith('Remp')) {\n                rempEventCnt++;\n                // All REMP event types starts with `Remp`\n                // https://docs.everos.dev/ever-sdk/reference/types-and-methods/mod_processing#processingevent\n                assert.ok(json || error, 'All REMP event has `json` or `error` property');\n                if (json) {\n                    // We print all REMP events.\n                    console.log(`\\tREMP event type: ${type}, kind: ${json.kind}`);\n\n                    // but you can pay attention to only a few kinds of events:\n                    if (json.kind === 'IncludedIntoBlock') {\n                        console.log('\\t^^^ this message is probably to be processed successfully');\n                    }\n                    if (json.kind === 'IncludedIntoAcceptedBlock') {\n                        console.log(\n                            '\\t^^^ this message is highly likely to be processed successfully',\n                        );\n                    }\n                }\n                if (error) {\n                    // Errors here indicate that there was a problem processing the REMP.\n                    // This does not mean that the message cannot be processed successfully,\n                    // it only means that the SDK just didn't get the next status at the expected time, see\n                    // TonClient config params: `first_remp_status_timeout`, `next_remp_status_timeout`\n                    // https://docs.everos.dev/ever-sdk/reference/types-and-methods/mod_client#networkconfig\n                    //\n                    // In this case, the SDK switches to the scenario of waiting for a standby transaction (sequential block reading).\n                    console.log(\n                        `\\tREMP event type: ${type}, code: ${error.code}, message: ${error.message}`,\n                    );\n                }\n            } else {\n                // In this example we are interested only in REMP events, so we skip\n                // other events like `WillFetchFirstBlock`, `WillSend`, `DidSend`.\n                // console.log(`Basic event ${type}`);\n            }\n        } else {\n            // See full list of error codes here:\n            // https://docs.everos.dev/ever-sdk/reference/types-and-methods/mod_net#neterrorcode\n            console.log('ERROR', params, responseType);\n        }\n    } catch (err) {\n        console.log(err);\n    }\n")),(0,r.kt)("p",null,"See the full example in sdk samples repository:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/tonlabs/sdk-samples/blob/master/core-examples/node-js/remp/index.js"},"https://github.com/tonlabs/sdk-samples/blob/master/core-examples/node-js/remp/index.js")),(0,r.kt)("h2",{id:"expected-output"},"Expected output"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"node index.js https://devnet.evercloud.dev/your-project-id/graphql\n\nSending messsage and waiting for REMP events.\n    REMP event type: RempOther, kind: PutIntoQueue\n    REMP event type: RempOther, kind: PutIntoQueue\n    REMP event type: RempOther, kind: PutIntoQueue\n    REMP event type: RempOther, kind: PutIntoQueue\n    REMP event type: RempOther, kind: PutIntoQueue\n    REMP event type: RempOther, kind: PutIntoQueue\n    REMP event type: RempIncludedIntoBlock, kind: IncludedIntoBlock\n    ^^^ this message is probably to be processed successfully\n    REMP event type: RempOther, kind: Duplicate\n    REMP event type: RempOther, kind: Duplicate\n    REMP event type: RempOther, kind: Duplicate\n    REMP event type: RempOther, kind: Duplicate\n    REMP event type: RempOther, kind: Duplicate\n    REMP event type: RempIncludedIntoAcceptedBlock, kind: IncludedIntoAcceptedBlock\n    ^^^ this message is highly likely to be processed successfully\nThe message has been processed.\n13 REMP events received\nTransaction id: effed4849898e08d1fe5759532d34f23dbec061c5fd666604f817be82732cfb9, status finalized\n")),(0,r.kt)("h2",{id:"sample-source-code"},"Sample Source code"),(0,r.kt)("p",null,"Full sample: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tonlabs/sdk-samples/tree/master/core-examples/node-js/remp"},"https://github.com/tonlabs/sdk-samples/tree/master/core-examples/node-js/remp")),(0,r.kt)("h2",{id:"see-also"},"See also"),(0,r.kt)("p",null,"REMP Architecture documentation: "),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.everscale.network/arch/remp"},"https://docs.everscale.network/arch/remp")),(0,r.kt)("p",null,"Guides for working with REMP in GraphQL API:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.evercloud.dev/samples/graphql-samples/send-message"},"https://docs.evercloud.dev/samples/graphql-samples/send-message")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.evercloud.dev/samples/graphql-samples/subscribe-for-remp-receipts"},"https://docs.evercloud.dev/samples/graphql-samples/subscribe-for-remp-receipts")),(0,r.kt)("p",null,"Original REMP SDK guide:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.everos.dev/ever-sdk/guides/work_with_contracts/trace-message-processing-with-remp"},"https://docs.everos.dev/ever-sdk/guides/work_with_contracts/trace-message-processing-with-remp")),(0,r.kt)("p",null,"Full EVER SDK documenation is available at ",(0,r.kt)("a",{parentName:"p",href:"https://docs.everos.dev/ever-sdk/"},"https://docs.everos.dev/ever-sdk/")))}u.isMDXComponent=!0}}]);