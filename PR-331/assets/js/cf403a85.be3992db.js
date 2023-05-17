"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[2977],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>m});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function s(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?s(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)o=s[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)o=s[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var a=n.createContext({}),d=function(e){var t=n.useContext(a),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=d(e.components);return n.createElement(a.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},v=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,s=e.originalType,a=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(o),v=r,m=u["".concat(a,".").concat(v)]||u[v]||p[v]||s;return o?n.createElement(m,i(i({ref:t},c),{},{components:o})):n.createElement(m,i({ref:t},c))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=o.length,i=new Array(s);i[0]=v;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var d=2;d<s;d++)i[d]=o[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}v.displayName="MDXCreateElement"},730:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var n=o(7462),r=(o(7294),o(3905));const s={title:"Troubleshooting",sidebar_position:2},i="EverDev Troubleshooting",l={unversionedId:"develop/tools/everdev/troubleshooting",id:"develop/tools/everdev/troubleshooting",title:"Troubleshooting",description:"Here are some solutions to frequently encountered problems.",source:"@site/../../src/develop/tools/everdev/troubleshooting.md",sourceDirName:"develop/tools/everdev",slug:"/develop/tools/everdev/troubleshooting",permalink:"/preview/PR-331/develop/tools/everdev/troubleshooting",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/develop/tools/everdev/troubleshooting.md",tags:[],version:"current",lastUpdatedAt:1660241980,formattedLastUpdatedAt:"Aug 11, 2022",sidebarPosition:2,frontMatter:{title:"Troubleshooting",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"How to view controller info",permalink:"/preview/PR-331/develop/tools/everdev/guides/controller-info"},next:{title:"Use in JS Application",permalink:"/preview/PR-331/develop/tools/everdev/js-application"}},a={},d=[{value:"EACCESS errors during installation",id:"eaccess-errors-during-installation",level:2},{value:"command not found: everdev",id:"command-not-found-everdev",level:2},{value:"Unspecified Error on <code>everdev sol compile</code> in Windows 10",id:"unspecified-error-on-everdev-sol-compile-in-windows-10",level:2},{value:"TON OS SE: Couldn\u2019t connect to Docker daemon",id:"ton-os-se-couldnt-connect-to-docker-daemon",level:2},{value:"After everdev is installed on Ubuntu WSL on Windows 10 old version is there",id:"after-everdev-is-installed-on-ubuntu-wsl-on-windows-10-old-version-is-there",level:2}],c={toc:d},u="wrapper";function p(e){let{components:t,...o}=e;return(0,r.kt)(u,(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"everdev-troubleshooting"},"EverDev Troubleshooting"),(0,r.kt)("p",null,"Here are some solutions to frequently encountered problems."),(0,r.kt)("h2",{id:"eaccess-errors-during-installation"},"EACCESS errors during installation"),(0,r.kt)("p",null,"These errors can occur, if npm was installed without the use of a version manager."),(0,r.kt)("p",null,"Refer to ",(0,r.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally"},"this article")," for ways to resolve the issue."),(0,r.kt)("h2",{id:"command-not-found-everdev"},"command not found: everdev"),(0,r.kt)("p",null,"This error may happen because ",(0,r.kt)("inlineCode",{parentName:"p"},"PATH")," environment variable was not correctly updated to contain path to Node.js binary."),(0,r.kt)("p",null,"If you use Linux, ensure the following command is in your ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.bashrc")," for bash shell or ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.zshrc")," for zsh shell:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"export PATH=~/.npm-global/bin:$PATH\n")),(0,r.kt)("p",null,"If you have installed Node.js using Homebrew on MacOS, npm binaries could be found in ",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/local/share/npm/bin"),".\nSo, in your ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.zshrc")," file add the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"export PATH=/usr/local/share/npm/bin:$PATH\n")),(0,r.kt)("p",null,"If you use Windows, add path to NodeJS bin directory via environment variables settings dialogue and relaunch console window."),(0,r.kt)("p",null,"Additionally, make sure ",(0,r.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally"},"permissions are alright"),"."),(0,r.kt)("h2",{id:"unspecified-error-on-everdev-sol-compile-in-windows-10"},"Unspecified Error on ",(0,r.kt)("inlineCode",{parentName:"h2"},"everdev sol compile")," in Windows 10"),(0,r.kt)("p",null,"1) Run \\Users\\UserName\\everdev\\solidity\\solc.exe and review error messages.\n2) Update Visual Studio components and make sure ",(0,r.kt)("a",{parentName:"p",href:"https://support.microsoft.com/en-us/topic/the-latest-supported-visual-c-downloads-2647da03-1eea-4433-9aff-95f26a218cc0"},"vc_redist is installed"),"."),(0,r.kt)("h2",{id:"ton-os-se-couldnt-connect-to-docker-daemon"},"TON OS SE: Couldn\u2019t connect to Docker daemon"),(0,r.kt)("p",null,"This error occurs in two cases. Either the docker daemon isn't running, or current user doesn't have rights to access docker."),(0,r.kt)("p",null,"You can ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/install/linux-postinstall/"},"fix the rights")," issue either by running relevant commands as the superuser or adding the user to the ",(0,r.kt)("inlineCode",{parentName:"p"},"docker")," group: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo usermod -a -G docker $USER\n")),(0,r.kt)("p",null,"Make sure to restart the system or log out and back in, for the new group settings to take effect."),(0,r.kt)("h2",{id:"after-everdev-is-installed-on-ubuntu-wsl-on-windows-10-old-version-is-there"},"After everdev is installed on Ubuntu WSL on Windows 10 old version is there"),(0,r.kt)("p",null,"This issue can occur if npm was installed without correct permissions for Linux/Ubuntu.\nRefer to ",(0,r.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally"},"this article")," for ways to resolve it."),(0,r.kt)("p",null,"After it is done, reload terminal and install everdev via `npm i everdev -g' again."))}p.isMDXComponent=!0}}]);