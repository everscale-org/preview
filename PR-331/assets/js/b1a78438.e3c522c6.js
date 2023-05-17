"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[7795],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>v});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=s(n),u=r,v=p["".concat(c,".").concat(u)]||p[u]||f[u]||l;return n?o.createElement(v,a(a({ref:t},d),{},{components:n})):o.createElement(v,a({ref:t},d))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,a=new Array(l);a[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:r,a[1]=i;for(var s=2;s<l;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2247:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>f,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var o=n(7462),r=(n(7294),n(3905));const l={sidebar_position:4,title:"How to view controller info"},a="How to view controller info",i={unversionedId:"develop/tools/everdev/guides/controller-info",id:"develop/tools/everdev/guides/controller-info",title:"How to view controller info",description:"This command displays a summary of all controller configurations.",source:"@site/../../src/develop/tools/everdev/guides/controller-info.md",sourceDirName:"develop/tools/everdev/guides",slug:"/develop/tools/everdev/guides/controller-info",permalink:"/preview/PR-331/develop/tools/everdev/guides/controller-info",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/develop/tools/everdev/guides/controller-info.md",tags:[],version:"current",lastUpdatedAt:1660241980,formattedLastUpdatedAt:"Aug 11, 2022",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"How to view controller info"},sidebar:"tutorialSidebar",previous:{title:"How to create controller",permalink:"/preview/PR-331/develop/tools/everdev/guides/create-controller"},next:{title:"Troubleshooting",permalink:"/preview/PR-331/develop/tools/everdev/troubleshooting"}},c={},s=[],d={toc:s},p="wrapper";function f(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"how-to-view-controller-info"},"How to view controller info"),(0,r.kt)("p",null,"This command displays a summary of all controller configurations."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"everdev info\n")),(0,r.kt)("p",null,"Output example:"),(0,r.kt)("p",null,"$ everdev info"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"C++ compiler\nComponent  Version  Available\n---------  -------  ---------\nclang      7.0.0    7.0.0\nSolidity Compiler\nComponent  Available\n---------  ----------------------------------------------\ncompiler   0.42.0, 0.41.0, 0.40.0, 0.39.0, 0.38.2, 0.38.1\nlinker     0.3.0, 0.1.0\nstdlib     0.42.0, 0.41.0, 0.40.0, 0.39.0, 0.38.2, 0.38.1\nTON OS SE\nInstance  State          Version  GraphQL Port  Docker Container      Docker Image\n--------  -------------  -------  ------------  --------------------  -----------------------\ndefault   not installed  0.27     80            tonlabs-tonos-se-test  tonlabs/local-node:0.27\nNetwork Registry\nNetwork        Endpoints                                        Giver\n-------------  -----------------------------------------------  ------------------------------------------------------------------\nse             http://localhost                                 0:b5e9240fc2d2f1ff8cbb1d1dee7fb7cae155e5f6320e585fcc685698994a19a5\ndev (Default)  net.ton.dev, net1.ton.dev, net5.ton.dev          0:255a3ad9dfa8aa4f3481856aafc7d79f47d50205190bd56147138740e9b177f3\nmain           main.ton.dev, main2.ton.dev, main3.ton.dev, ...\nSigner Registry\nSigner          Public Key\n--------------  ----------------------------------------------------------------\nsurf            8534c46f7a135058773fa1298cb3a299a5ddd40dafe41cb06c64f274da360bfb\ntest (Default)  ad4bf7bd8da244932c52127a943bfa9217b6e215c1b3307272283c4d64f34486\ntest2           5c2e348c5caeb420a863dc5e972f897ebe5ee899a6ef2a8299aac352eca4380a\nTON OS CLI\nComponent  Version  Available\n---------  -------  --------------------------------------------------------------------------------\ntonoscli   0.11.3   0.11.4, 0.11.3, 0.11.2, 0.11.1, 0.11.0, 0.10.1, 0.10.0, 0.9.2, 0.9.1, 0.9.0, ...\n")))}f.isMDXComponent=!0}}]);