"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[415],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(a),h=r,k=p["".concat(s,".").concat(h)]||p[h]||u[h]||o;return a?n.createElement(k,i(i({ref:t},c),{},{components:a})):n.createElement(k,i({ref:t},c))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},4606:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_position:2},i="Run Validator",l={unversionedId:"validate",id:"validate",title:"Run Validator",description:"Validation is crucial in maintaining the security of the Everscale network. It is accomplished by the means of staking EVER tokens and participating in the consensus along with other validators. With the help of the consensus algorithm, the validator proposes candidate blocks and votes on blocks proposed by other validators. When the voting threshold is reached, the proposed block is added to the chain.This process is aided by an overlay network which connects the validators.",source:"@site/../../src/validate.md",sourceDirName:".",slug:"/validate",permalink:"/preview/PR-359/validate",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/validate.md",tags:[],version:"current",lastUpdatedAt:1684349049,formattedLastUpdatedAt:"May 17, 2023",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"GraphQL Block and Transaction Pagination: Best Practice",permalink:"/preview/PR-359/develop/graphql-pagination"},next:{title:"Specifications",permalink:"/preview/PR-359/spec"}},s={},d=[{value:"Delegator",id:"delegator",level:3},{value:"How to run a validator node",id:"how-to-run-a-validator-node",level:2},{value:"Node setup",id:"node-setup",level:2}],c={toc:d},p="wrapper";function u(e){let{components:t,...o}=e;return(0,r.kt)(p,(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"run-validator"},"Run Validator"),(0,r.kt)("p",null,"Validation is crucial in maintaining the security of the Everscale network. It is accomplished by the means of staking EVER tokens and participating in the consensus along with other validators. With the help of the consensus algorithm, the validator proposes candidate blocks and votes on blocks proposed by other validators. When the voting threshold is reached, the proposed block is added to the chain.This process is aided by an overlay network which connects the validators."),(0,r.kt)("p",null,"The incentive for validators to participate in block generation is realized via rewards. It is important to mention that each block included in the network provides a reward. "),(0,r.kt)("p",null,"The validators of the ",(0,r.kt)("inlineCode",{parentName:"p"},"masterchain")," are responsible for the security of the masterchain network, via: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"creation of master blocks"),(0,r.kt)("li",{parentName:"ul"},"enabling shardchains to share messages "),(0,r.kt)("li",{parentName:"ul"},"the state of contracts "),(0,r.kt)("li",{parentName:"ul"},"network sharding configuration with other shardchains")),(0,r.kt)("h3",{id:"delegator"},"Delegator"),(0,r.kt)("p",null,"Delegators play a big role in the decentralization of the network. They greatly contribute to network security by the means of allocating their stakes to validators.\nTo add, they also direct the Elector's algorithm to validators that should proceed with validation in the next round. This enables well-regarded validators with low stakes to accumulate funds in their pools and subsequently become validators."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(7870).Z,width:"1920",height:"1080"})),(0,r.kt)("p",null,"Due to the fact that Everscale is a proof of stake blockchain, any participant with enough EVER tokens can become a validator. That\u2019s even if they haven't been nominated by other participants."),(0,r.kt)("p",null,"Validators part the rewards with delegators in accordance with their share of EVER tokens. Although, it should be mentioned that they also share the risks. Thus, if a particular validator node is offline during validation, it is punished by having its stake slashed. Consequently, the delegator's stake may as well be reduced."),(0,r.kt)("p",null,"After having gone through the essentials of validation on Everscale, let\u2019s now move to practice. "),(0,r.kt)("h2",{id:"how-to-run-a-validator-node"},"How to run a validator node"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Sufficient Linux engineering skills are required in order to manage, secure, and maintain nodes. Running a Validator node is much harder than executing a validator binary.")),(0,r.kt)("p",null,"Running a validator node is a consequential task. Therefore, to ensure the stability of your node, you should use highly efficient hardware. Below, we provide the hardware requirements we consider best fit: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Operating system:")," Ubuntu 22.04"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"CPU:")," 12x cores Intel Skylake or a newer CPU. Higher base CPU frequency is preferred over the core count. "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"RAM:")," 64GB; Network: 300Mbps with a strong internet connection. In case of connection issues, it could lead to the disconnection of the validator."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Storage:")," 50GB SSD storage for the operating system; 500GB of NVMe for validator internal database with the ability to add additional space to allow for the growth of the blockchain. "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Cloud providers:")," Google Cloud, Amazon AWS, Microsoft Azure, OVH.")),(0,r.kt)("p",null,"Also, for the node to work properly, configure the cloud firewall to accept incoming traffic on UDP/30000 port."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Please be informed that the node will consume around 6TB of incoming traffic each month.")),(0,r.kt)("h2",{id:"node-setup"},"Node setup"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Always check any scripts you are running")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Prepare the server for node setup")),(0,r.kt)("p",null,"1.1. Create a user and group for running the Validator node, and create all necessary folder structures"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'VALIDATOR_USER="validator"\nVALIDATOR_GROUP="validator"\nsudo groupadd $VALIDATOR_GROUP\nsudo useradd $VALIDATOR_USER -m -s /bin/bash -g $VALIDATOR_GROUP -G sudo\n# Mount \nsudo mkdir -p /var/ever/rnode/\nsudo chown $VALIDATOR_USER:$VALIDATOR_GROUP /var/ever/rnode/\n')),(0,r.kt)("p",null,"1.2. Check if the NTP service is UP and running"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl status systemd-timesyncd\n")),(0,r.kt)("p",null,"Your system should show that the service is up and running. If not - please refer to the documentation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\u25cf systemd-timesyncd.service - Network Time Synchronization\n     Loaded: loaded (/lib/systemd/system/systemd-timesyncd.service; enabled; \n     preset: enabled)\n     Active: active (running) \n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"If the system clock is out of sync (even by a small amount), the blocks which the Validator produces, may not be accepted by the network.")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Create firewall rules to allow ADNL communications")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo ufw allow 30000/UDP\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Install dependencies")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt update \nsudo apt install -y git libssl-dev pkg-config build-essential libzstd-dev \nlibclang-dev libgoogle-perftools-dev\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Switch to the validator user")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo su validator\n")),(0,r.kt)("p",null,"4.1 Install rust"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'\ncurl https://sh.rustup.rs -sSf | sh\nsource "$HOME/.cargo/env"\n')),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Build a Validator node")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\ncargo install --locked --git https://github.com/broxus/nodekeeper\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Optionally configure root directory:\n# export NODEKEEPER_ROOT=/var/nodekeeper\n#\n# Or explicitly specify it as a param, e.g.:\n# nodekeeper --root /var/nodekeeper init\n\n# Configure node\nnodekeeper init\n\nsudo $(which nodekeeper) init systemd\n")),(0,r.kt)("p",null,"Here choose the user for the validator. DON'T RUN Validator service as a root user!"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"[0/2] Preparing services\n? Select the user from which the service will work \u203a\n\u276f validator\n  root\n")),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"Setup Validator and create wallets\nCompile and init node")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"nodekeeper init\n")),(0,r.kt)("p",null,'Choose "other" network'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"[0/2] Preparing configs\n\u2714 Create root directory? (/home/validator/.nodekeeper) \xb7 yes\n? Select network \u203a\n  Everscale mainnet\n  Everscale testnet\n\u276f other\n")),(0,r.kt)("p",null,"Provide global config URL (Contact Everscale core team)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\u2714 Select network \xb7 other\n? Config URL \u203a\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"[0/2] Preparing configs\n\u2714 Create root directory? (/home/validator/.nodekeeper) \xb7 yes\n\u2714 Select network \xb7 other\n\u2714 Config URL \xb7<hidden>\n\u2714 Node config doesn't have control server entry. Create? \xb7 yes\n\u2714 Control server listen address \xb7 localhost\n\u2714 Specify control port \xb7 31000\n\u2714 Enter public ip \xb7 164.92.106.127\n\u2714 Specify server ADNL port \xb7 30000\n\u2714 Specify node DB path \xb7 /var/ever/rnode\n[1/2] Preparing binary\n")),(0,r.kt)("p",null,"The node would be compiled, Select the mode of your node:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"? Select validator type \u203a\n\u276f Single\n  DePool\n")),(0,r.kt)("p",null,"Create a new seed phrase or import existing"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"[0/2] Creating validator wallet\n\u276f Generate new keys\n  Import seed\n")),(0,r.kt)("p",null,"6.1 Define the desired stake per round. Notice you will need an amount of\ntokens 2*(stake per round)+10"),(0,r.kt)("p",null,'Leave "stake factor (ratio between maximum available stake on the network and\nyour stake) to 3 as it is standard in the Everscale network'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\u2714 Stake per round (EVER) \xb7 10000\n\u2714 Stake factor \xb7 3\n[2/2] Validator configured successfully. Great!\n\nValidator wallet address:\n\n\nRequired validator wallet balance: 20010 EVER\n  \u2022 10 EVER, maintenance balance\n  \u2022 2 x 20010 EVER, stakes for each round\n\nMake sure you back up your keys:\n/home/validator/.nodekeeper/keys/vld.keys.json\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Make sure you back up your keys after the initial configuration!\nAll keys are stored at $HOME/.nodekeeper/keys/")),(0,r.kt)("p",null,"Init validator services"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo ~/.cargo/bin/nodekeeper init systemd\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Service MUST NOT run as the root user")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"[0/2] Preparing services\n? Select the user from which the service will work \u203a\n\u276f validator\n  root\n")),(0,r.kt)("p",null,"It will create two services:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"validator-manager - control service that takes part in elections,\nrecovers stake and performs other tasks with the Elector contract"),(0,r.kt)("li",{parentName:"ul"},"validator - node itself, managing validation process")),(0,r.kt)("p",null,"You can check the status of both services with the following commands:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"service validator status\nservice validator-manager status\n")),(0,r.kt)("ol",{start:7},(0,r.kt)("li",{parentName:"ol"},"Transfer tokens to the Validator contract")),(0,r.kt)("p",null,"Transfer the required amount of tokens to the address generated in the previous\nstep. The Wallet will become active after the first stake"),(0,r.kt)("ol",{start:8},(0,r.kt)("li",{parentName:"ol"},"Wait until the elections start")),(0,r.kt)("p",null,"When elections start, the validator-manager process will automatically stake the desired amount of tokens. You can check the current state of elections using ",(0,r.kt)("a",{parentName:"p",href:"https://everscan.io/validators"},"Everscan"),"."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},'validator-manager adds 1 EVER token for the stake to pay for the transaction fees, and you will be required to add 1 EVER token to the "stake and bonuses recovery" transaction. Due to this, it is adviseable to always keep some additional tokens in the Validator')),(0,r.kt)("p",null,"If everything has been setup correctly - you should see your address in the validators list for the next round."))}u.isMDXComponent=!0},7870:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/delegator-d347c0b07c29f88b0ff61ad2fd4272b5.svg"}}]);