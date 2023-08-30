"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[5174],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),l=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=l(e.components);return n.createElement(d.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=l(a),m=r,k=p["".concat(d,".").concat(m)]||p[m]||h[m]||i;return a?n.createElement(k,s(s({ref:t},c),{},{components:a})):n.createElement(k,s({ref:t},c))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=m;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[p]="string"==typeof e?e:r,s[1]=o;for(var l=2;l<i;l++)s[l]=a[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3291:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_position:2},s="ADNL",o={unversionedId:"arch/networking/adnl",id:"arch/networking/adnl",title:"ADNL",description:"The key element of Eversale is the Abstract Datagram Network Layer (ADNL).It allows all nodes to assume certain network identities, represented by 256-bit abstract network addresses. They communicate via sending datagrams to each other using only these 256-bit network addresses to identify both the sender and the receiver. In particular, one does not need to worry about IPv4 or IPv6 addresses, UDP port numbers, and the like. They are hidden by the Abstract Network Layer.Each datagram is signed and encrypted by the sender. Only the recipient has the possibility to decrypt the message and verify its integrity via signatures.",source:"@site/../../src/arch/networking/adnl.md",sourceDirName:"arch/networking",slug:"/arch/networking/adnl",permalink:"/preview/PR-362/arch/networking/adnl",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/arch/networking/adnl.md",tags:[],version:"current",lastUpdatedAt:1684349049,formattedLastUpdatedAt:"May 17, 2023",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"TL",permalink:"/preview/PR-362/arch/networking/tl"},next:{title:"DHT - Distributed Hash Table",permalink:"/preview/PR-362/arch/networking/dht"}},d={},l=[{value:"Address",id:"address",level:3},{value:"Neighbor tables",id:"neighbor-tables",level:2},{value:"Peer Identity",id:"peer-identity",level:3},{value:"Client-server protocol",id:"client-server-protocol",level:2},{value:"Initiating communications - Handshakes",id:"initiating-communications---handshakes",level:3},{value:"Padding",id:"padding",level:3},{value:"Datagram",id:"datagram",level:3},{value:"Security considerations",id:"security-considerations",level:2},{value:"Handshake padding",id:"handshake-padding",level:3},{value:"Session parameters encryption key derivation process",id:"session-parameters-encryption-key-derivation-process",level:3},{value:"Datagram nonce",id:"datagram-nonce",level:3}],c={toc:l},p="wrapper";function h(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"adnl"},"ADNL"),(0,r.kt)("p",null,"The key element of Eversale is the Abstract Datagram Network Layer (ADNL).It allows all nodes to assume certain network identities, represented by 256-bit abstract network addresses. They communicate via sending datagrams to each other using only these 256-bit network addresses to identify both the sender and the receiver. In particular, one does not need to worry about IPv4 or IPv6 addresses, UDP port numbers, and the like. They are hidden by the Abstract Network Layer.Each datagram is signed and encrypted by the sender. Only the recipient has the possibility to decrypt the message and verify its integrity via signatures."),(0,r.kt)("h3",{id:"address"},"Address"),(0,r.kt)("p",null,"An ADNL address is equal to a 256-bit ECC public key. In turn, this public key can be randomly generated. This way, there is the possibility to create as many different network identities as the node requires. Still, there is the need to know the corresponding private key to be able to receive and decrypt messages intended for the recipient's address."),(0,r.kt)("p",null,"Practically, the ADNL address is not the public key itself. It is a 256-bit SHA 256 hash of a serialized TL-object that can describe several types of public keys and addresses depending on its constructor."),(0,r.kt)("admonition",{title:"Tip",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"A TCP-like stream protocol can be built over ADNL")),(0,r.kt)("h2",{id:"neighbor-tables"},"Neighbor tables"),(0,r.kt)("p",null,"Practically, an Everscle ADNL node will have a so-called ",(0,r.kt)("strong",{parentName:"p"},"\u201cneighbor table\u201d"),". It includes the information about other known nodes: abstract addresses, public keys, IP addresses and UDP ports. "),(0,r.kt)("p",null,"With time, it will constantly extend this table using the information accumulated from these known nodes. This new information can be in the form of answers to special queries or sometimes the removal of obsolete records."),(0,r.kt)("h3",{id:"peer-identity"},"Peer Identity"),(0,r.kt)("p",null,"Each peer must have at least one identity. Although, there is the possibility to use multiple. Each identity is a key pair, which is used to perform the Diffie-Hellman between peers. An abstract network address is derived from the public key as follows:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"address = SHA-256(type_id || public_key). Note that type_id must be serialized as little-endian uint32")),(0,r.kt)("h2",{id:"client-server-protocol"},"Client-server protocol"),(0,r.kt)("p",null,"The client connects to the server via TCP and sends an ADNL handshake packet. It contains a server abstract address, a client public key and encrypted AES-CTR session parameters - determined by the client."),(0,r.kt)("h3",{id:"initiating-communications---handshakes"},"Initiating communications - Handshakes"),(0,r.kt)("p",null,"Initially, the client must perform a key agreement protocol. For instance, x25519 with the help of both the private key and server public key - considering server key ",(0,r.kt)("strong",{parentName:"p"},"type_id"),". Accordingly, the client will get a secret, which is used to encrypt session keys in upcoming steps."),(0,r.kt)("p",null,"Then, the client has to generate AES-CTR session parameters, a 16-byte nonce and 32-byte key, both for ",(0,r.kt)("strong",{parentName:"p"},"TX (client->server)")," and ",(0,r.kt)("strong",{parentName:"p"},"RX (server->client)")," directions and serialize it into a 160-byte buffer as follows:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Size"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"rx_key"),(0,r.kt)("td",{parentName:"tr",align:"center"},"32 bytes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"tx_key"),(0,r.kt)("td",{parentName:"tr",align:"center"},"32 bytes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"rx_nonce"),(0,r.kt)("td",{parentName:"tr",align:"center"},"16 bytes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"tx_nonce"),(0,r.kt)("td",{parentName:"tr",align:"center"},"16 bytes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"padding"),(0,r.kt)("td",{parentName:"tr",align:"center"},"64 bytes")))),(0,r.kt)("h3",{id:"padding"},"Padding"),(0,r.kt)("p",null,"It is not used by server implementations. However, It is recommended to fill the whole 160-byte buffer with random bytes. If not, an attacker may conduct a MitM assault via compromised AES-CTR session parameters."),(0,r.kt)("p",null,"The next step is to encrypt session parameters using secret via the key agreement protocol. For this, AES-256 must be initialized in CTR mode with a 128-bit big-endian counter with the help of a key and nonce pair which is computed as in the example below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"hash = SHA-256(aes_params)\nkey = secret[0..16] || hash[16..32]\nnonce = hash[0..4] || secret[20..32]\n")),(0,r.kt)("admonition",{title:"Tip",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"aes_params")," is a 160-byte buffer")),(0,r.kt)("p",null,"After the encryption of ",(0,r.kt)("strong",{parentName:"p"},"aes_params"),", noted as ",(0,r.kt)("strong",{parentName:"p"},"E(aes_params)"),", AES should be removed because it is not needed anymore."),(0,r.kt)("p",null,"Now we are ready to serialize all the information to the 256-byte handshake package and send it to the server:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Size"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"receiver_address"),(0,r.kt)("td",{parentName:"tr",align:"center"},"32 bytes"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Server peer identity as described in the corresponding section")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"sender_public"),(0,r.kt)("td",{parentName:"tr",align:"center"},"32 bytes"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Client public key")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"SHA-256(aes_params)"),(0,r.kt)("td",{parentName:"tr",align:"center"},"32 bytes"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Integrity proof of session parameters")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"E(aes_params)"),(0,r.kt)("td",{parentName:"tr",align:"center"},"160 bytes"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Encrypted session parameters")))),(0,r.kt)("p",null,"The server decrypts session parameters using a secret, derived from the key agreement protocol, in the same way as the client. Then the server conducts the checks outlined below to confirm protocol security properties:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The server must have the private key for receiver_address. Without it, there is no other way to perform the key agreement protocol."),(0,r.kt)("li",{parentName:"ol"},"SHA-256(aes_params) == SHA-256(D(E(aes_params))). In case it is not so, the key agreement protocol failed, and the secret is not the same on both sides.")),(0,r.kt)("p",null,"In case one of the checks fails, the server will in a instant stop the connection. On the other hand, in case both checks pass, the server will issue an empty datagram to the client in order to prove that it owns the private key for the specified receiver_address."),(0,r.kt)("h3",{id:"datagram"},"Datagram"),(0,r.kt)("p",null,"Both the client and server must initialize two AES-CTR instances each, for TX and RX directions. AES-256 must be used in CTR mode with a 128-bit big-endian counter. Each AES instance is initialized using a key and nonce pair belonging to it, which can be taken from aes_params in the handshake."),(0,r.kt)("p",null,"To send a datagram, a peer must build the structure shown below. Afterwards, it must be encrypted and sent to the receiver:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Size"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"length"),(0,r.kt)("td",{parentName:"tr",align:"center"},"4 bytes (LE)"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Length of the whole datagram, excluding length field")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"nonce"),(0,r.kt)("td",{parentName:"tr",align:"center"},"32 bytes"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Random value")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"buffer"),(0,r.kt)("td",{parentName:"tr",align:"center"},"length - 64 bytes"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Actual data to be sent to the other side")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"hash"),(0,r.kt)("td",{parentName:"tr",align:"center"},"32 bytes"),(0,r.kt)("td",{parentName:"tr",align:"center"},"SHA-256(nonce ","|","|"," buffer) to ensure integrity")))),(0,r.kt)("p",null,"The structure must be encrypted with the help of the AES instance ",(0,r.kt)("strong",{parentName:"p"},"(TX for client -> server, RX for server -> client)"),"."),(0,r.kt)("p",null,"The receiver must fetch the first 4 bytes, decrypt them into the length field and read exactly the length of the bytes to get the full datagram. The receiver may start to decrypt and process the buffer earlier. However, it must consider that it may be corrupted, even unintentionally. The datagram hash must be checked to ensure the integrity of the buffer. In the event of failure, no new datagrams can be issued and the connection must be abandoned."),(0,r.kt)("p",null,"The first datagram in the session always goes from the server to the client. It happens after a handshake package is accepted by the server and it's actual buffer is empty. In the event of failure, the client must decrypt it and drop the connection with the server. The reason is that the server has not followed the protocol accordingly. Correspondingly, actual session keys differ on the server and client side."),(0,r.kt)("h2",{id:"security-considerations"},"Security considerations"),(0,r.kt)("h3",{id:"handshake-padding"},"Handshake padding"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"aes_params")," integrity is protected by a SHA-256 hash. The confidentiality, in turn, is protected by the key derived from the ",(0,r.kt)("inlineCode",{parentName:"p"},"secret")," parameter. Possibly, it works this way due to initial TON developers thinking of migrating from AES-CTR at some point. "),(0,r.kt)("p",null,"To do this, the specification may be extended to include a special magic value in ",(0,r.kt)("inlineCode",{parentName:"p"},"aes_params"),", which will signal that the peer is ready to use the updated primitives. The response to such a handshake may be decrypted twice: with new and old schemes. This is needed in order to to clarify which scheme the other peer is actually using."),(0,r.kt)("h3",{id:"session-parameters-encryption-key-derivation-process"},"Session parameters encryption key derivation process"),(0,r.kt)("p",null,"The encryption key will be static in case it is derived only from the ",(0,r.kt)("inlineCode",{parentName:"p"},"secret")," parameter. This is due to the fact that the secret is static. To derive a new encryption key for each session, ",(0,r.kt)("inlineCode",{parentName:"p"},"SHA-256(aes_params)")," is used. It is random if ",(0,r.kt)("inlineCode",{parentName:"p"},"aes_params")," is random. It should be noted that the current key derivation algorithm linking different subarrays is considered poor."),(0,r.kt)("h3",{id:"datagram-nonce"},"Datagram nonce"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"nonce")," field necessity in the datagram is not obvious. Any two ciphertexts would be distinguished due to the session-bounded keys for AES and encryption in CTR mode even in case of its absence. "),(0,r.kt)("p",null,"With this in mind, however, the attack described below can be realized if there isn\u2019t a ",(0,r.kt)("inlineCode",{parentName:"p"},"nonce")," field or it is poor."),(0,r.kt)("p",null,"CTR encryption turns block ciphers, such as AES, into stream ciphers to make a bit-flipping attack possible. In case the attacker is in possession of the plaintext which belongs to an encrypted datagram, he can easily obtain a pure keystream. Then, XOR it with his own plaintext and replace the message which was sent by a peer. We remember that buffer integrity is protected by a SHA-256 hash. However, an attacker can replace it too. This is because knowing a full plaintext means knowing its hash. The ",(0,r.kt)("inlineCode",{parentName:"p"},"nonce")," field is there to prevent such an attack. No attacker can replace the SHA-256 without knowing the ",(0,r.kt)("inlineCode",{parentName:"p"},"nonce"),"."))}h.isMDXComponent=!0}}]);