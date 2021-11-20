(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{3024:function(e,t,n){"use strict";n(770)},3025:function(e,t,n){var o=n(65)((function(i){return i[1]}));o.push([e.i,"/*purgecss start ignore*/\n@-webkit-keyframes xfade-data-v-cde9d746{\n20%{\n    opacity:1\n}\n25%{\n    opacity:0\n}\n80%{\n    opacity:0\n}\n}\n@keyframes xfade-data-v-cde9d746{\n20%{\n    opacity:1\n}\n25%{\n    opacity:0\n}\n80%{\n    opacity:0\n}\n}\n.fade-images[data-v-cde9d746]{\n  margin:auto;\n  position:relative;\n  width:10rem;\n  height:10rem;\n  max-width:100%\n}\n.fade-images img[data-v-cde9d746]{\n  position:absolute;\n  top:0;\n  left:0;\n  right:0;\n  bottom:0\n}\n.fade-images img[data-v-cde9d746]:first-child{\n  -webkit-animation:xfade-data-v-cde9d746 6s linear 4s infinite normal;\n          animation:xfade-data-v-cde9d746 6s linear 4s infinite normal\n}\n.fade-images img[data-v-cde9d746]:nth-child(2){\n  -webkit-animation:xfade-data-v-cde9d746 6s linear 2s infinite normal;\n          animation:xfade-data-v-cde9d746 6s linear 2s infinite normal\n}\n.fade-images img[data-v-cde9d746]:nth-child(3){\n  -webkit-animation:xfade-data-v-cde9d746 6s linear 0s infinite normal;\n          animation:xfade-data-v-cde9d746 6s linear 0s infinite normal\n}\n\n/*purgecss end ignore*/",""]),o.locals={},e.exports=o},3032:function(e,t,n){"use strict";n.r(t);var o=n(8),r=(n(53),n(579)),c=n.n(r),l=n(768),d=n(481),m=n.n(d),f={name:"App",data:function(){return{loading:!0,account:null,totalSupply:0,maxTokens:0,metaforgeInstance:null,metaforgeContract:null,publicSalePaused:!0}},computed:{},created:function(){},mounted:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(void 0===window.ethereum){t.next=18;break}return console.log("MetaMask is installed!"),console.log(ethereum.networkVersion),console.log(ethereum.selectedAddress),e.metaforgeContract=c()(l),e.metaforgeContract.setProvider(window.ethereum),t.next=8,e.metaforgeContract.deployed();case 8:return e.metaforgeInstance=t.sent,console.log("Metaforge instance address",e.metaforgeInstance),t.next=12,e.listenForEvents();case 12:return t.next=14,e.loadData();case 14:e.loading=!1,e.connectWallet(),t.next=19;break;case 18:e.$notify.error({title:"Error",message:"Unable to connect to your wallet! Make sure you have Metamask installed!",duration:1e4});case 19:case"end":return t.stop()}}),t)})))()},methods:{connectWallet:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,window.ethereum.request({method:"eth_requestAccounts"});case 3:n=t.sent,e.account=n[0],console.log("Connected account",e.account),e.$notify({title:"Success",message:"Successfully connected to your wallet!",type:"success",duration:2e3}),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(0),console.error(t.t0),e.$notify.error({title:"Error",message:"Unable to connect to your wallet! Make sure you have Metamask installed!",duration:1e4});case 13:case"end":return t.stop()}}),t,null,[[0,9]])})))()},loadData:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.t0=parseInt,t.next=4,e.metaforgeInstance.totalSupply();case 4:return t.t1=t.sent,e.totalSupply=(0,t.t0)(t.t1),t.t2=parseInt,t.next=9,e.metaforgeInstance.maxSupply();case 9:return t.t3=t.sent,e.maxTokens=(0,t.t2)(t.t3),t.next=13,e.metaforgeInstance.publicSalePaused();case 13:e.publicSalePaused=t.sent,t.next=20;break;case 16:t.prev=16,t.t4=t.catch(0),console.error(t.t4),e.$notify.error({title:"Error",message:"Impossible to communicate with the NFT, make sure you have installed Metamask!",duration:1e4});case 20:case"end":return t.stop()}}),t,null,[[0,16]])})))()},listenForEvents:function(){var e=this;this.metaforgeInstance.Minted({fromBlock:"latest"}).on("data",(function(t){console.log("Event ",t),e.loadData()})),this.metaforgeInstance.PublicSaleUpdated({fromBlock:"latest"}).on("data",(function(t){console.log("Event ",t),e.loadData()}))},mintNft:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e.loading=!0,new m.a(window.ethereum),t.next=5,e.metaforgeInstance.cost();case 5:return n=t.sent,t.next=8,e.metaforgeInstance.mint(1,{from:e.account,gas:5e5,value:n});case 8:o=t.sent,console.log("Minted NFT...",o),e.$notify({title:"Success",message:"You have minted a NFT, you can see it on Opensea!",type:"success",duration:1e4}),t.next=17;break;case 13:t.prev=13,t.t0=t.catch(0),console.error(t.t0),e.$notify.error({title:"Error",message:"The NFT has not been minted, make sure you are using enough gas!",duration:1e4});case 17:e.loading=!1;case 18:case"end":return t.stop()}}),t,null,[[0,13]])})))()}}},v=(n(3024),n(59)),component=Object(v.a)(f,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"flex flex-wrap justify-between items-center gap-2 mb-4"},[n("NuxtLink",{attrs:{to:"/"}},[n("span",{staticClass:"flex items-center"},[n("img",{staticClass:"h-10 w-10 inline",attrs:{src:"/logo.png"}}),e._v(" "),n("span",{staticClass:"text-xl font-bold "},[e._v("\n          The Metaforge\n        ")])])]),e._v(" "),e.account?n("div",{staticClass:"float-right bg-white text-black px-1 flex justify-center items-center"},[e._v("\n      "+e._s(e.account.slice(0,6))+"..."+e._s(e.account.slice(-4))+"\n    ")]):n("button",{staticClass:"float-right bg-white text-black px-1 flex justify-center items-center",on:{click:function(t){return e.connectWallet()}}},[e._v("\n      Connect wallet\n    ")])],1),e._v(" "),n("p",{staticClass:"text-center font-bold italic"},[e._v("\n    « Arm yourself for the metaverse »\n  ")]),e._v(" "),e.publicSalePaused?n("div",[n("button",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"m-auto bg-white p-6 text-black mb-4 disabled:cursor-not-allowed relative flex justify-center items-center",attrs:{"element-loading-customClass":"block m-auto",disabled:!0}},[e._v("\n      The public sale is coming soon...\n    ")])]):n("div",{staticClass:"my-4"},[n("button",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"m-auto bg-white p-6 text-black mb-4 disabled:cursor-not-allowed relative flex justify-center items-center",attrs:{"element-loading-customClass":"block m-auto",disabled:e.loading||e.totalSupply>=e.maxTokens},on:{click:function(t){t.preventDefault(),e.account?e.mintNft():e.connectWallet()}}},[e._v("\n      MINT A NFT\n    ")]),e._v(" "),n("p",{staticClass:"text-center text-xs"},[e._v("\n      Default gas limit is 250'000, price is 0.05 eth\n    ")]),e._v(" "),n("div",{staticClass:"h-10 w-96 max-w-full m-auto p-0.5 bg-white text-black "},[n("div",{staticClass:"bg-black h-full flex justify-center items-center",style:{width:e.totalSupply/e.maxTokens*100+"%"}})]),e._v(" "),n("p",{staticClass:"text-center"},[e._v("\n      "+e._s(e.totalSupply)+" / "+e._s(e.maxTokens)+" NFTs have been minted\n    ")])]),e._v(" "),e._m(0),e._v(" "),e._m(1)])}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mb-2"},[n("p",{staticClass:"text-justify"},[e._v("\n      With few exceptions, even the most popular video games on the planet\n      eventually lose their players' interest and fade into oblivion to never\n      reemerge again. Players who spent thousands of hours building their\n      accounts in a franchise are left to start again from scratch in the next\n      popular game. At Metaforge, we envision a world in which your\n      hard-earned tokens are not only portable from one part of the metaverse\n      to the other, but also through time. We want to transform in-game time\n      from an expense into an investment by enabling players to carry their\n      digital possessions with them, on-chain, and independently of any\n      particular game studio. Metaforge is an attempt at creating a \"base\n      inventory\" that can be implemented in any game that wishes to do so,\n      with the item's ownership being fully controlled by the players\n      themselves.\n    ")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mb-4"},[n("div",{staticClass:"fade-images"},[n("img",{attrs:{src:"/img/sample3.jpeg",alt:"Weapon sample 3"}}),e._v(" "),n("img",{attrs:{src:"/img/sample2.jpeg",alt:"Weapon sample 2"}}),e._v(" "),n("img",{attrs:{src:"/img/sample1.jpeg",alt:"Weapon sample 1"}})])])}],!1,null,"cde9d746",null);t.default=component.exports},770:function(e,t,n){var content=n(3025);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(66).default)("35aaf1f3",content,!0,{sourceMap:!1})}}]);