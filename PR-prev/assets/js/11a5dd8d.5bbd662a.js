"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[1311],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>v});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),d=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=d(r),m=o,v=c["".concat(p,".").concat(m)]||c[m]||u[m]||a;return r?n.createElement(v,i(i({ref:t},s),{},{components:r})):n.createElement(v,i({ref:t},s))}));function v(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var d=2;d<a;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5481:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:3},i="Update Validator",l={unversionedId:"validate/run-validator/update-validator",id:"validate/run-validator/update-validator",title:"Update Validator",description:"Note: You may need to renew your copy of main.ton.dev scripts but do not remove any working files from the previous deployment (for example, configs folder).",source:"@site/../../src/validate/run-validator/update-validator.md",sourceDirName:"validate/run-validator",slug:"/validate/run-validator/update-validator",permalink:"/preview/PR-prev/validate/run-validator/update-validator",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/validate/run-validator/update-validator.md",tags:[],version:"current",lastUpdatedAt:1660241460,formattedLastUpdatedAt:"Aug 11, 2022",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Validator Elections",permalink:"/preview/PR-prev/validate/run-validator/validator-elections"},next:{title:"System Requirements",permalink:"/preview/PR-prev/validate/run-validator/system-requirements"}},p={},d=[],s={toc:d},c="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"update-validator"},"Update Validator"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," You may need to renew your copy of main.ton.dev scripts but do not remove any working files from the previous deployment (for example, configs folder)."),(0,o.kt)("p",null,"Adjust (specify new commit ID) main.ton.dev/scripts/env.sh:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'export TON_NODE_GITHUB_REPO="https://github.com/tonlabs/ton-labs-node.git"\nexport TON_NODE_GITHUB_COMMIT_ID="master"\nexport TON_NODE_TOOLS_GITHUB_REPO="https://github.com/tonlabs/ton-labs-node-tools.git"\nexport TON_NODE_TOOLS_GITHUB_COMMIT_ID="master"\nexport TONOS_CLI_GITHUB_REPO="https://github.com/tonlabs/tonos-cli.git"\nexport TONOS_CLI_GITHUB_COMMIT_ID="master"\n')),(0,o.kt)("p",null,"Upgrade the node:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"./upgrade.sh 2>&1 | tee ./upgrade.log\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," the log generated by this command will be located in the main.ton.dev/scripts/ folder and can be useful for troubleshooting."),(0,o.kt)("p",null,"Wait until the node is synced."))}u.isMDXComponent=!0}}]);