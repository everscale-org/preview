"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[7287],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),u=i,h=c["".concat(s,".").concat(u)]||c[u]||m[u]||r;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9945:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const r={description:"Typed Language - Binary is used to describe the scheme of deserialization of objects to cells"},o="TL-B and BoC",l={unversionedId:"arch/tlb-and-boc",id:"arch/tlb-and-boc",title:"TL-B and BoC",description:"Typed Language - Binary is used to describe the scheme of deserialization of objects to cells",source:"@site/../../src/arch/07-tlb-and-boc.md",sourceDirName:"arch",slug:"/arch/tlb-and-boc",permalink:"/preview/PR-359/arch/tlb-and-boc",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/arch/07-tlb-and-boc.md",tags:[],version:"current",lastUpdatedAt:1693413632,formattedLastUpdatedAt:"Aug 30, 2023",sidebarPosition:7,frontMatter:{description:"Typed Language - Binary is used to describe the scheme of deserialization of objects to cells"},sidebar:"tutorialSidebar",previous:{title:"Catchain Protocol Messages & Structures",permalink:"/preview/PR-359/arch/consensus/messages"},next:{title:"TVM",permalink:"/preview/PR-359/arch/tvm"}},s={},p=[{value:"TL-B",id:"tl-b",level:2},{value:"Scheme",id:"scheme",level:3},{value:"Constructor",id:"constructor",level:4},{value:"Field definitions",id:"field-definitions",level:4},{value:"Explicit",id:"explicit",level:5},{value:"Implicit",id:"implicit",level:5},{value:"Type definition",id:"type-definition",level:4},{value:"Constraints",id:"constraints",level:4},{value:"Deserialization",id:"deserialization",level:3},{value:"BoC",id:"boc",level:2}],d={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"tl-b-and-boc"},"TL-B and BoC"),(0,i.kt)("h2",{id:"tl-b"},"TL-B"),(0,i.kt)("p",null,"Typed Language - Binary is used to describe the scheme of deserialization of objects to cells."),(0,i.kt)("h3",{id:"scheme"},"Scheme"),(0,i.kt)("p",null,"TL-B schemes are comprised of declarations. Each declaration, in turn, describes a ",(0,i.kt)("em",{parentName:"p"},"constructor")," for some ",(0,i.kt)("em",{parentName:"p"},"type"),". For example, a ",(0,i.kt)("em",{parentName:"p"},"Bool type")," may have ",(0,i.kt)("em",{parentName:"p"},"constructors")," for ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," values."),(0,i.kt)("p",null,"Please see typical TL-B declarations below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"bool_false$0 = Bool;\nbool_true$1 = Bool;\n\nunary_zero$0 = Unary ~0;\nunary_succ$1 {n:#} x:(Unary ~n) = Unary ~(n + 1);\n\nacc_trans#5 account_addr:bits256\n   transactions:(HashmapAug 64 ^Transaction CurrencyCollection)\n   state_update:^(HASH_UPDATE Account)\n   = AccountBlock;\n")),(0,i.kt)("p",null,"Each TL-B declaration is comprised of:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A constructor name followed by an optional constructor tag"),(0,i.kt)("li",{parentName:"ul"},"A list of both explicit and implicit field definitions separated by whitespaces (",(0,i.kt)("inlineCode",{parentName:"li"},'" "'),", ",(0,i.kt)("inlineCode",{parentName:"li"},'"\\n"'),", etc)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"=")," sign"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Type name")," (optionally parametrized) ")),(0,i.kt)("p",null,"Example: Two constructors with different binary prefixes for a ",(0,i.kt)("inlineCode",{parentName:"p"},"Bool")," type."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"bool_false$0 = Bool;\nbool_true$1 = Bool;\n")),(0,i.kt)("h4",{id:"constructor"},"Constructor"),(0,i.kt)("p",null,"A constructor is declared via ",(0,i.kt)("inlineCode",{parentName:"p"},"constructor_name[separator,tag]"),"."),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"constructor_name")," is comprised of ",(0,i.kt)("inlineCode",{parentName:"p"},"[A-z0-9_]")," symbols. Normally, ",(0,i.kt)("inlineCode",{parentName:"p"},"snake_case")," names are used."),(0,i.kt)("p",null,"A constructor name can be followed by a ",(0,i.kt)("inlineCode",{parentName:"p"},"separator"),". If there is no separator it means that the ",(0,i.kt)("inlineCode",{parentName:"p"},"tag")," will be calculated automatically as a ",(0,i.kt)("inlineCode",{parentName:"p"},"32bit CRC32-sum")," of constructor declarations. If there is a ",(0,i.kt)("inlineCode",{parentName:"p"},"separator"),", it can take two values: ",(0,i.kt)("inlineCode",{parentName:"p"},"#")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"$.")," The first value means that a ",(0,i.kt)("inlineCode",{parentName:"p"},"tag")," will be given in a hexadecimal form while the second means a binary ",(0,i.kt)("inlineCode",{parentName:"p"},"tag"),". After both separators, there may be an underscore symbol ",(0,i.kt)("inlineCode",{parentName:"p"},"_")," which stands for an empty tag."),(0,i.kt)("p",null,"There is also a special constructor name called ",(0,i.kt)("inlineCode",{parentName:"p"},"anonymous constructor")," which means that there is only one unnamed constructor with an empty tag for a given type."),(0,i.kt)("p",null,"Please see the table below for possible tag definitions."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Constructor"),(0,i.kt)("th",{parentName:"tr",align:"center"},"tag"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"_")),(0,i.kt)("td",{parentName:"tr",align:"center"},"empty tag for anonymous constructor")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"some")),(0,i.kt)("td",{parentName:"tr",align:"center"},"automatically calculated 32-bit tag")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"some#bba")),(0,i.kt)("td",{parentName:"tr",align:"center"},"12-bit tag equal to ",(0,i.kt)("inlineCode",{parentName:"td"},"0b101110111010"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"some$01011")),(0,i.kt)("td",{parentName:"tr",align:"center"},"5-bit tag equal to ",(0,i.kt)("inlineCode",{parentName:"td"},"0b01011"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"some#_")),(0,i.kt)("td",{parentName:"tr",align:"center"},"empty tag")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"some$_")),(0,i.kt)("td",{parentName:"tr",align:"center"},"empty tag")))),(0,i.kt)("p",null,"Please note that pregenerated tags are not usually used. Those explicitly declared are preferred."),(0,i.kt)("h4",{id:"field-definitions"},"Field definitions"),(0,i.kt)("h5",{id:"explicit"},"Explicit"),(0,i.kt)("p",null,"Each field definition has the ",(0,i.kt)("em",{parentName:"p"},"ident"),": ",(0,i.kt)("em",{parentName:"p"},"type-expr"),". "),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"ident")," is an identifier for the name of the field. It is replaced by an underscore _ for anonymous fields. "),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"type-expr")," is the field type. "),(0,i.kt)("p",null,"The type provided here is a type expression. It may include simple types or parametrized types with suitable parameters. "),(0,i.kt)("p",null,"The identifiers of the previously defined fields of types ",(0,i.kt)("inlineCode",{parentName:"p"},"#")," (natural numbers) or ",(0,i.kt)("inlineCode",{parentName:"p"},"Type")," (type of types) may be used as parameters for the ",(0,i.kt)("strong",{parentName:"p"},"parametrized types"),". "),(0,i.kt)("p",null,"There are a few predefined types:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"#"),"\xa0- means an unsigned 32-bit number"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"## N"),"\xa0- the same as\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"uintN"),"\xa0- means an unsigned N-bit number"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"#<= N"),"\xa0- means a number between\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"0"),"\xa0and\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"N"),"\xa0(including both). Such a number is stored in\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"ceil(log2(N+1))"),"\xa0bits."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"N * Bit"),"\xa0- means N-bit slice"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"^Cell"),"\xa0- means an arbitrary cell in reference"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"^[ field_definitions ]"),"\xa0- means that field definitions are stored in the referenced cell"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Type"),"\xa0- stands for arbitrary type (but only presents in implicit definitions).")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"type-expr")," usually consist of optionally parametrized ",(0,i.kt)("em",{parentName:"p"},"Type")," only as: ",(0,i.kt)("inlineCode",{parentName:"p"},"last_trans_lt:uint64 or _:StateInit"),". Yet, it is possible that ",(0,i.kt)("em",{parentName:"p"},"type-expr")," also contains conditions. In that case, ",(0,i.kt)("em",{parentName:"p"},"type-expr")," consists of ",(0,i.kt)("em",{parentName:"p"},"ident"),", ",(0,i.kt)("inlineCode",{parentName:"p"},":"),", ",(0,i.kt)("em",{parentName:"p"},"condition"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"?"),", type. If a condition, which can refer to previously defined fields, renders to ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),", the corresponding field is not presented. For instance, ",(0,i.kt)("inlineCode",{parentName:"p"},"prev:n?^(ProofChain n)")," means that ",(0,i.kt)("inlineCode",{parentName:"p"},"prev")," field is only presented for objects when ",(0,i.kt)("inlineCode",{parentName:"p"},"n>0"),"."),(0,i.kt)("h5",{id:"implicit"},"Implicit"),(0,i.kt)("p",null,"Some fields may be implicit. Their definitions are surrounded by ",(0,i.kt)("strong",{parentName:"p"},"curly brackets"),". It indicates that the field is not actually present in the serialization. Their value must be deduced from some other data. Usually, the parameters of the type are being serialized. For instance"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"nothing$0 {X:Type} = Maybe X;\njust$1 {X:Type} value:X = Maybe X;\n")),(0,i.kt)("p",null,"Some other constructor may define the field ",(0,i.kt)("inlineCode",{parentName:"p"},"var:(Maybe #)"),". In that case, the variable will be serialized either as ",(0,i.kt)("inlineCode",{parentName:"p"},"1")," bit and a serialization of ",(0,i.kt)("inlineCode",{parentName:"p"},"#")," (uint32) if ",(0,i.kt)("inlineCode",{parentName:"p"},"var")," is present or as ",(0,i.kt)("inlineCode",{parentName:"p"},"0")," bit if ",(0,i.kt)("inlineCode",{parentName:"p"},"var")," is absent. That way, ",(0,i.kt)("inlineCode",{parentName:"p"},"Maybe")," is declared as a C++-like template type for arbitrary type X. However, if ",(0,i.kt)("inlineCode",{parentName:"p"},"Maybe")," is declared as ",(0,i.kt)("inlineCode",{parentName:"p"},"nothing$0 {X:#} = Maybe X;"),", that will mean that ",(0,i.kt)("inlineCode",{parentName:"p"},"Maybe")," is declared for an arbitrary number (not totally arbitrary type X)."),(0,i.kt)("h4",{id:"type-definition"},"Type definition"),(0,i.kt)("p",null,"A type name consists of ",(0,i.kt)("inlineCode",{parentName:"p"},"[A-z0-9_]")," symbols. By practice, it is a ",(0,i.kt)("strong",{parentName:"p"},"CamelCase")," name."),(0,i.kt)("p",null,"It can be parametrized by one or more parameters."),(0,i.kt)("p",null,"In some cases, the variables are prefixed by a tilde (",(0,i.kt)("inlineCode",{parentName:"p"},"~"),"). Basically, it means that, prior to deserialization, the exact value of that variable is not known. It will be computed during deserialization."),(0,i.kt)("p",null,"Let's consider:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"unary_zero$0 = Unary ~0;\nunary_succ$1 {n:#} x:(Unary ~n) = Unary ~(n + 1);\n")),(0,i.kt)("p",null,"In the case when we want to deserialize the ",(0,i.kt)("inlineCode",{parentName:"p"},"Unary ~N")," object from the slice containing ",(0,i.kt)("inlineCode",{parentName:"p"},"0b1111111100101")," bit string. Thus, when we intend to deserialize ",(0,i.kt)("inlineCode",{parentName:"p"},"Unary ~N"),", it means that we do not know yet whether we deserialize ",(0,i.kt)("inlineCode",{parentName:"p"},"Unary 0"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Unary 7")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Unary 1020"),". "),(0,i.kt)("p",null,"We begin with ",(0,i.kt)("inlineCode",{parentName:"p"},"0b1111111100101")," and compare it with the constructor prefixes ",(0,i.kt)("inlineCode",{parentName:"p"},"0b0")," for ",(0,i.kt)("inlineCode",{parentName:"p"},"unary_zero")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"0b1")," for ",(0,i.kt)("inlineCode",{parentName:"p"},"unary_succ"),". We can see that we have ",(0,i.kt)("inlineCode",{parentName:"p"},"unary_succ"),". However, the value of N cannot be deducted. It should be obtained from the deserialization of variable ",(0,i.kt)("inlineCode",{parentName:"p"},"x"),". This variable has type ",(0,i.kt)("inlineCode",{parentName:"p"},"Unary ~(N-1)")," and the value of ",(0,i.kt)("inlineCode",{parentName:"p"},"N-1")," can be deducted from the deserialization of the remaining bits in the slice. We get the remaining bits of the slice and try to deserialize ",(0,i.kt)("inlineCode",{parentName:"p"},"Unary ~(N-1)")," and again see the ",(0,i.kt)("inlineCode",{parentName:"p"},"unary_succ")," tag."),(0,i.kt)("p",null,"We, therefore, recursively dive into ",(0,i.kt)("inlineCode",{parentName:"p"},"Unary")," until we get to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Unary ~(N-8)"),". Then, we see that the rest of the slice starts from the ",(0,i.kt)("inlineCode",{parentName:"p"},"unary_zero")," tag and thus constitutes a ",(0,i.kt)("inlineCode",{parentName:"p"},"Unary 0")," object. Looking back, we can see that we initially had a ",(0,i.kt)("inlineCode",{parentName:"p"},"Unary 8")," object. After the deserialization of ",(0,i.kt)("inlineCode",{parentName:"p"},"Unary ~N")," from Slice(",(0,i.kt)("inlineCode",{parentName:"p"},"0b1111111100101"),") we get a ",(0,i.kt)("inlineCode",{parentName:"p"},"Unary 8")," object and the remaining slice(",(0,i.kt)("inlineCode",{parentName:"p"},"0b0101"),") from which subsequent variables of the constructor can be deserialized."),(0,i.kt)("h4",{id:"constraints"},"Constraints"),(0,i.kt)("p",null,"Some implicit fields may contain constraints, for instance ",(0,i.kt)("inlineCode",{parentName:"p"},"{n <= m}"),". It means that the previously defined variables ",(0,i.kt)("inlineCode",{parentName:"p"},"n")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"m")," should satisfy the corresponding inequality. This inequality is an inherent property of the constructor. It should be checked during serialization and objects with variables which do not satisfy these constraints are invalid."),(0,i.kt)("p",null,"An example of constructors with constraints:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"hml_short$0 {m:#} {n:#} len:(Unary ~n) {n <= m} s:(n * Bit) = HmLabel ~n m;\nhml_long$10 {m:#} n:(#<= m) s:(n * Bit) = HmLabel ~n m;\nhml_same$11 {m:#} v:Bit n:(#<= m) = HmLabel ~n m;\n")),(0,i.kt)("h3",{id:"deserialization"},"Deserialization"),(0,i.kt)("p",null,"With the help of TL-B schemes, any object can be serialized to the ",(0,i.kt)("strong",{parentName:"p"},"builder")," and deserialized from the ",(0,i.kt)("strong",{parentName:"p"},"slice"),". In particular, in order to deserialize an object, we need to start with the determination of the constructor. For this purpose we use a tag and then deserialize variables one by one from left to right. "),(0,i.kt)("p",null,"It is done recursively turning to the serialization of variables (they are TL-B objects). Throughout the serialization process we go the other way. Write to the builder ",(0,i.kt)("inlineCode",{parentName:"p"},"tag")," which corresponds to a given object of that type and then, continue from left to right with each variable."),(0,i.kt)("h2",{id:"boc"},"BoC"),(0,i.kt)("p",null,"All data in the blocks and state of the Everscale Blockchain is represented as a collection of cells, like in the TON Blockchain, because ES is based on the TON Blockchain technology. Referring to ",(0,i.kt)("a",{parentName:"p",href:"https://ton.org/tblkch.pdf"},"tblkch.pdf")," document \u2013 each cell consists of up to 1023 data bits and up to four references to other cells. Cyclic cell references are not allowed, so the cells are usually organized into trees of cells, or rather directed acyclic graphs (DAGs) of cells. Any value of an abstract algebraic (dependent) data type may be represented (serialized) as a tree of cells. The precise way of representing values of an abstract data type as a tree of cells is expressed by means of a TL-B scheme. "),(0,i.kt)("p",null,"TL-B is a fantastic way to describe the structure of a cell tree, but sometimes developers resort to using ABI to simplify the development process. ABI is automatically generated by the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/tonlabs/TON-Solidity-Compiler/"},"TVM Solidity Compiler")," in JSON format, and then can be used for encoding/decoding data structures stored in cells. But unfortunately, ABI comes with a set of significant limitations compared to TL-B. Read more about ABI ",(0,i.kt)("a",{parentName:"p",href:"/preview/PR-359/spec/abi"},"here"),"."),(0,i.kt)("p",null,"Interesting fact \u2013 this complicated data storage scheme helps to scale the network, so that the validator can quickly execute smart contracts. Validators do not need to store the entire current state of the blockchain in RAM, because loading the smart contract state from the disk will be fast, since all smart contracts are small. Additionally, since all contracts are small, they are evenly distributed across all shards."),(0,i.kt)("p",null,"In the Everscale Blockchain, we typically, pay for storage, transfering, and any operations with cells (such as loading them). Hence, it's crucial to consider this when developing your smart contracts. The code and data of smart contracts executed in TVM are also represented in the tree of cells."),(0,i.kt)("p",null,"Read more about bag of cells in the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.everscale.network/tvm.pdf"},"tvm.pdf")," document."))}m.isMDXComponent=!0}}]);