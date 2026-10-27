/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "ca60c4960bdcfb97697ab6a41185813b"
  },
  {
    "url": "assets/css/0.styles.1e73b5f7.css",
    "revision": "3f2d0265e7ce77b0b9cea58c7699c81b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/tdd_loop.21cfdbe5.png",
    "revision": "21cfdbe503ec4cc134b212d06056493b"
  },
  {
    "url": "assets/img/transactions-table.66d5c67f.png",
    "revision": "66d5c67fa2f03098bd477d5e94b88fc8"
  },
  {
    "url": "assets/js/1.d0c882ce.js",
    "revision": "ae1ff4243243118ffb0b222d3a7ff07c"
  },
  {
    "url": "assets/js/10.5889962b.js",
    "revision": "6aa716cac111d56749bafbca2b09fb79"
  },
  {
    "url": "assets/js/100.2ae3acc9.js",
    "revision": "e709aff0bc4afe2b0b62155925510bec"
  },
  {
    "url": "assets/js/101.2600c61d.js",
    "revision": "692a4974cac0ac86834b9d5d90dd15b2"
  },
  {
    "url": "assets/js/102.305c1697.js",
    "revision": "23aa6e1c8f50dc83af27db3db52a4a31"
  },
  {
    "url": "assets/js/103.e4ce7f06.js",
    "revision": "ea6a4e72b8ff1b2d5dd90bfa81377a08"
  },
  {
    "url": "assets/js/104.c768a4d4.js",
    "revision": "70aa5db573a116e87fb5df548451fe4c"
  },
  {
    "url": "assets/js/105.c17aa904.js",
    "revision": "06c17ae2092d14a65c56d1ba56b92193"
  },
  {
    "url": "assets/js/106.be6b4f06.js",
    "revision": "765d95d3e7606b17ec8e48028613b5f5"
  },
  {
    "url": "assets/js/107.5377c33b.js",
    "revision": "f4faea5f2973d7bfca3ee1127e50b559"
  },
  {
    "url": "assets/js/108.b3686f54.js",
    "revision": "46b52526730877823f422e27ab3851d6"
  },
  {
    "url": "assets/js/109.08ba6651.js",
    "revision": "a9e6ca5c85d7343a1c2189e33943bbd2"
  },
  {
    "url": "assets/js/11.788742d3.js",
    "revision": "5811556242a6d81028611d4c0a27f632"
  },
  {
    "url": "assets/js/110.c9a5cfd7.js",
    "revision": "8f4576a5916e35935f6522cf2b2a6ed7"
  },
  {
    "url": "assets/js/12.26ec7911.js",
    "revision": "5155235447e78ba2e36a76f19aaa3b35"
  },
  {
    "url": "assets/js/13.fe50cd5d.js",
    "revision": "1c96148a0f9297c4d1d64ff1bc0ede9a"
  },
  {
    "url": "assets/js/14.d4aa4c66.js",
    "revision": "348ec95d26cf3af5dbbf03839720c599"
  },
  {
    "url": "assets/js/15.fea40c78.js",
    "revision": "18da2fa400a10adc4c58fd89fac033ae"
  },
  {
    "url": "assets/js/16.ad327e0f.js",
    "revision": "2c43947d1e96a79187eae55df50575a0"
  },
  {
    "url": "assets/js/17.b392bdbf.js",
    "revision": "ceb900f8cdaa21877f542f73984b5f26"
  },
  {
    "url": "assets/js/18.bea50113.js",
    "revision": "4c7ba9c5592481704785ddbf9e482a45"
  },
  {
    "url": "assets/js/19.4d37c360.js",
    "revision": "9d0480bf6a61137d1579403c78a05845"
  },
  {
    "url": "assets/js/2.73ee6c6a.js",
    "revision": "40429183581e86d7be08b6aa67437677"
  },
  {
    "url": "assets/js/20.4f97b31d.js",
    "revision": "4fcf9df0d3aff02570f0951db0126587"
  },
  {
    "url": "assets/js/21.2431c3bf.js",
    "revision": "9651675da1e7d105c76a1ed9676b365c"
  },
  {
    "url": "assets/js/22.779d3336.js",
    "revision": "ec4818931f407ebce0324e8fbe9178b4"
  },
  {
    "url": "assets/js/23.794bad80.js",
    "revision": "dac281693d61b3ccc09b2c7db73e9344"
  },
  {
    "url": "assets/js/24.20624a01.js",
    "revision": "3b464b0dad36318152af50fd76c26656"
  },
  {
    "url": "assets/js/25.b598904c.js",
    "revision": "ea28929e8bbf9cd04f1897428b7d649a"
  },
  {
    "url": "assets/js/26.adc70daf.js",
    "revision": "9eb77346e4bebc6037ba1b44bbb9b536"
  },
  {
    "url": "assets/js/27.903fe5f4.js",
    "revision": "880dcea6441ca1ebb5468f7034c5573b"
  },
  {
    "url": "assets/js/28.2a0cb174.js",
    "revision": "eb1880dd1212ad202aae520affcc6a25"
  },
  {
    "url": "assets/js/29.aca13c55.js",
    "revision": "f6603fedaef0a3851360c8f72363ad82"
  },
  {
    "url": "assets/js/3.5740590c.js",
    "revision": "395b4d6a1743218ea90c901e772361ed"
  },
  {
    "url": "assets/js/30.09c710af.js",
    "revision": "03b5449bbd3e2ddb95c634f1283bfa03"
  },
  {
    "url": "assets/js/31.9a73c1d2.js",
    "revision": "1b9d499e0f58e7d26eff34656a2751ad"
  },
  {
    "url": "assets/js/32.e78839ae.js",
    "revision": "4206a55955978e9245916abf8d48d370"
  },
  {
    "url": "assets/js/33.1cb59c15.js",
    "revision": "f9779aab4bc4b85f5171817f97c360fe"
  },
  {
    "url": "assets/js/34.461b80ea.js",
    "revision": "484bcd492d5ad1711f40804818c565ff"
  },
  {
    "url": "assets/js/35.1f3e308f.js",
    "revision": "bc8663e6b21a225c705f1c7226562671"
  },
  {
    "url": "assets/js/36.f24172ed.js",
    "revision": "9ed0c04a28b5d85b56ec0bb4a5098086"
  },
  {
    "url": "assets/js/37.017730b3.js",
    "revision": "a5d09a16a67c314c2ed0e944495a7de3"
  },
  {
    "url": "assets/js/38.76ee9985.js",
    "revision": "25dc93bc6d92a16ba32188e4d236468d"
  },
  {
    "url": "assets/js/39.1fbc5608.js",
    "revision": "30e3ac1ea0ddf835429e25a5e29b1f02"
  },
  {
    "url": "assets/js/4.26cdfca2.js",
    "revision": "f2290412901cdeaa1e3bfcb8ddb2efbd"
  },
  {
    "url": "assets/js/40.4fdfe88e.js",
    "revision": "dee0a761ff171245e4ea80c1553cda7a"
  },
  {
    "url": "assets/js/41.2b2d7c2c.js",
    "revision": "adf54f8506148b87aeb00a6d89bee720"
  },
  {
    "url": "assets/js/42.c47375ea.js",
    "revision": "b6b558f13389155c815cf936644682ee"
  },
  {
    "url": "assets/js/43.7dd884f4.js",
    "revision": "4e1398fad11fe4e9a58fb9dce527639c"
  },
  {
    "url": "assets/js/44.6ef31957.js",
    "revision": "99a6b66ced63d832f422054bbc7cd4a4"
  },
  {
    "url": "assets/js/45.0a9a958b.js",
    "revision": "344cb2e101c39362a9502f6685d04d17"
  },
  {
    "url": "assets/js/46.81c6419c.js",
    "revision": "30e4ca488021261aad936d9b0d295079"
  },
  {
    "url": "assets/js/47.6e437947.js",
    "revision": "8b938a1c52344c9c1ce75af641674370"
  },
  {
    "url": "assets/js/48.f09668d8.js",
    "revision": "5cc8d20590de792f129b100ce77628fd"
  },
  {
    "url": "assets/js/49.7afb12d7.js",
    "revision": "226583266c0a49177cb8e84f60b75094"
  },
  {
    "url": "assets/js/5.e5d1443e.js",
    "revision": "14f525e794fb3bccbca940d6b60bd359"
  },
  {
    "url": "assets/js/50.5307fd31.js",
    "revision": "dbdab15047f9c6e24545f12fadd63cf9"
  },
  {
    "url": "assets/js/51.3b06caf3.js",
    "revision": "6d7380acfcd153fbb5edf0974e0fa976"
  },
  {
    "url": "assets/js/52.2d3f6f54.js",
    "revision": "cf4c6721b0e8c82f43e72d18f506d84b"
  },
  {
    "url": "assets/js/53.8b6b4dd3.js",
    "revision": "85f0a73c0230ddef87c2cbf7510e7655"
  },
  {
    "url": "assets/js/54.f4c0aafb.js",
    "revision": "be35cefc483cefdfa99f1e7c016e6828"
  },
  {
    "url": "assets/js/55.f1d96e2e.js",
    "revision": "0297a455c9760dcc4b89441121f93900"
  },
  {
    "url": "assets/js/56.79522979.js",
    "revision": "93bfeaf426f6e9ab9b61555ab20726e9"
  },
  {
    "url": "assets/js/57.8fee3454.js",
    "revision": "7ed900f7ce28c13b261a212579f7b073"
  },
  {
    "url": "assets/js/58.18302a13.js",
    "revision": "9eb0e6a7574aa0b0e26bdabca9d48654"
  },
  {
    "url": "assets/js/59.a95f6868.js",
    "revision": "b2fe2025143a9f98f2351a54c9f4d005"
  },
  {
    "url": "assets/js/6.bb1af159.js",
    "revision": "5ecaf1476e687aadb45fde0e5fdfc1b6"
  },
  {
    "url": "assets/js/60.353d028b.js",
    "revision": "0ec1d69ab8901f7cf26b84f853463cc8"
  },
  {
    "url": "assets/js/61.10cd84b5.js",
    "revision": "fb2629660aee95024dbe4c8317a80074"
  },
  {
    "url": "assets/js/62.d41231e6.js",
    "revision": "7ff939249727c0f0700f31400662a73c"
  },
  {
    "url": "assets/js/63.76573f28.js",
    "revision": "cf49304abd5f4be35b04cb6c5cb9aa14"
  },
  {
    "url": "assets/js/64.9b311ef4.js",
    "revision": "1db871d4d2601192b793d8f075d83c08"
  },
  {
    "url": "assets/js/65.fd85a720.js",
    "revision": "2f415bd81832cbc5157f80c635f52fb1"
  },
  {
    "url": "assets/js/66.a0d01e38.js",
    "revision": "305751073054c96b8afeb823a3bf0cd4"
  },
  {
    "url": "assets/js/67.8ac76011.js",
    "revision": "c1126f2753e25df86f0a1b989668a563"
  },
  {
    "url": "assets/js/68.8fdf7ac6.js",
    "revision": "749f078fd9bb2fb585e76a03316c4396"
  },
  {
    "url": "assets/js/69.afc79a1c.js",
    "revision": "70e86b8e09c04fe75e79688bc409d71b"
  },
  {
    "url": "assets/js/7.ca5a7b15.js",
    "revision": "7f79cab7262ae574c3075ebbf4c1ac64"
  },
  {
    "url": "assets/js/70.1f9dbef9.js",
    "revision": "5bd486e677d8e931fcd54c463743428b"
  },
  {
    "url": "assets/js/71.faa17539.js",
    "revision": "3c5a2e775a9c031f091d48476506f395"
  },
  {
    "url": "assets/js/72.fce569b1.js",
    "revision": "20a08b67b0bbcbfbf839d47fc4c25357"
  },
  {
    "url": "assets/js/73.9b8e5483.js",
    "revision": "0ecc73382566f920e378c144d8367499"
  },
  {
    "url": "assets/js/74.9d08c670.js",
    "revision": "d3cf28c33025801b7372e25e5010a488"
  },
  {
    "url": "assets/js/75.e3ef1569.js",
    "revision": "3e71a7f8ef51072c5325cc2ec8609dbb"
  },
  {
    "url": "assets/js/76.b72e7b19.js",
    "revision": "326d76ed2caf88ce89d6997990d06219"
  },
  {
    "url": "assets/js/77.11e00275.js",
    "revision": "aea4d4ba412eb24dd952c91fe698eb92"
  },
  {
    "url": "assets/js/78.7d897b91.js",
    "revision": "3bc21b869be4f82f189bfc135c7e3712"
  },
  {
    "url": "assets/js/79.17771690.js",
    "revision": "5ccc571d02e888a6a9f1f3b54eafad30"
  },
  {
    "url": "assets/js/80.f41c2599.js",
    "revision": "1235f2e824f9a9cabf7573ca1294d3b6"
  },
  {
    "url": "assets/js/81.b826cb8b.js",
    "revision": "0ae6297325d96199f489b6c9c1bc67ba"
  },
  {
    "url": "assets/js/82.1fa9790b.js",
    "revision": "b5838afb77d172a507ced35b7783f4a5"
  },
  {
    "url": "assets/js/83.dc9e7ece.js",
    "revision": "685384401fabefab925420bf4107b6c2"
  },
  {
    "url": "assets/js/84.fdbc1b86.js",
    "revision": "4bf66d30905d9035c920556807641734"
  },
  {
    "url": "assets/js/85.ccb38b8b.js",
    "revision": "3c3884f9b648bbe5919f07e65d34b947"
  },
  {
    "url": "assets/js/86.cbdb7609.js",
    "revision": "f164f1fb1cc4b07ddc6755592b59da7a"
  },
  {
    "url": "assets/js/87.17538ece.js",
    "revision": "a64490708455dad514670eb97081c5aa"
  },
  {
    "url": "assets/js/88.3f31258d.js",
    "revision": "043109fd01ce229a2adacc3303f993fe"
  },
  {
    "url": "assets/js/89.6176eb72.js",
    "revision": "5315afcff0a4511369ff4e4f1646dd8d"
  },
  {
    "url": "assets/js/90.36380118.js",
    "revision": "c53fb8956857c8f30f0097016211be57"
  },
  {
    "url": "assets/js/91.23f2495b.js",
    "revision": "304347bfbadc4dd441dd729500123282"
  },
  {
    "url": "assets/js/92.a06fa46f.js",
    "revision": "1058aeb3e6dfe0fa74cce341a2759290"
  },
  {
    "url": "assets/js/93.cf38f0a5.js",
    "revision": "2409ad067825a017de48d50f445086f1"
  },
  {
    "url": "assets/js/94.49d76fd9.js",
    "revision": "d4d03104addf75f4217b4da14abcbcca"
  },
  {
    "url": "assets/js/95.9ebb1da1.js",
    "revision": "39a6f0f3b69849c8569e65a6b424a859"
  },
  {
    "url": "assets/js/96.a815d40b.js",
    "revision": "5168d9a524d209a57e1b012b261de102"
  },
  {
    "url": "assets/js/97.d1e5f8cc.js",
    "revision": "93c0d1f02ac9921e88b7789503f21682"
  },
  {
    "url": "assets/js/98.bbbfc8a8.js",
    "revision": "e1cc713e0a3606cd55b29c2a34fd366b"
  },
  {
    "url": "assets/js/99.6d395d91.js",
    "revision": "7fd4100c362c0ce47bf9e4c59e572c6d"
  },
  {
    "url": "assets/js/app.8a6267df.js",
    "revision": "f4c77fee77d31cf24a2d3764c758ba66"
  },
  {
    "url": "assets/js/vendors~docsearch.0644ee0a.js",
    "revision": "b77890ee16800d927f76d8f8f61a0875"
  },
  {
    "url": "draft/quick-notes.html",
    "revision": "450d485095b52201fe01ba9aba4b3fe7"
  },
  {
    "url": "flux-ui/dropdowns.html",
    "revision": "4c674a9d41e3067dce8aa76015a4d3a6"
  },
  {
    "url": "flux-ui/tables.html",
    "revision": "5b97a42122b42e04f10f714a3fb79c18"
  },
  {
    "url": "html/bootstrap/cards.html",
    "revision": "4a597b8355c3d23a4c268569c8249391"
  },
  {
    "url": "html/bootstrap/forms/checks-radios.html",
    "revision": "c097447e5f023c7bc01772f740e24d92"
  },
  {
    "url": "html/bootstrap/forms/floating-labels.html",
    "revision": "7270b08a20320a4c1b415c7320510fa8"
  },
  {
    "url": "html/bootstrap/forms/form-control.html",
    "revision": "fb3236b50f244ef2c92d5dd68ce0d92f"
  },
  {
    "url": "html/bootstrap/forms/index.html",
    "revision": "1161d501d0f4efe6e06181c26184674c"
  },
  {
    "url": "html/bootstrap/forms/layout.html",
    "revision": "8b7ac843bab02cd7a1d17b36edb4fb58"
  },
  {
    "url": "html/bootstrap/forms/select.html",
    "revision": "88f3f448631d5c94f144dfb7e9c3037b"
  },
  {
    "url": "html/bootstrap/forms/validation.html",
    "revision": "78d973f17dca73f6add0252880f29fd0"
  },
  {
    "url": "html/bootstrap/index.html",
    "revision": "ba6351838a053b4328b5620e8ba30e5d"
  },
  {
    "url": "html/bootstrap/tables.html",
    "revision": "0621a74f85b438507e879c47847cd027"
  },
  {
    "url": "html/tailwind/customization/index.html",
    "revision": "25d36e62860f6776cd2ba0bfea749866"
  },
  {
    "url": "html/tailwind/customization/presets.html",
    "revision": "f58f65de9454f809f7a62cb1fadb5fcf"
  },
  {
    "url": "html/tailwind/directives.html",
    "revision": "acaaab819150cf4308b878f06f12cd74"
  },
  {
    "url": "html/tailwind/index.html",
    "revision": "1e910e15a9a11f334d039fa709e99590"
  },
  {
    "url": "htmx/index.html",
    "revision": "6d1fb72c504814f4f7f48a49f5360d84"
  },
  {
    "url": "index.html",
    "revision": "5c07c4456cd1b9e922468d2296007fc1"
  },
  {
    "url": "javascript/alpinejs/index.html",
    "revision": "4d9332273cd8545f5febb348b29b6278"
  },
  {
    "url": "javascript/alpinejs/textarea.html",
    "revision": "5d7f5483a1524b1ec593cc98bd8d505d"
  },
  {
    "url": "javascript/modules.html",
    "revision": "601360ae7d1c6dd0f8e8b7b29480e5f7"
  },
  {
    "url": "livewire/components/index.html",
    "revision": "2ef0629d57215c33c112ec09b99610b5"
  },
  {
    "url": "livewire/components/pagination.html",
    "revision": "81335c5e6dfe571b59033259b8f4c9ba"
  },
  {
    "url": "livewire/installation.html",
    "revision": "318e1768611ce862a8899ea69a9732b2"
  },
  {
    "url": "nextjs/index.html",
    "revision": "56026268eeb6a218737d215fe3e798b5"
  },
  {
    "url": "nextjs/laravel-sanctum-auth.html",
    "revision": "b7d6f9ab70eae00c40e646c852879fb2"
  },
  {
    "url": "other/priority-levels.html",
    "revision": "7a5ca247ab6fd2c67fe8bc22831a8c28"
  },
  {
    "url": "other/static-site-generators.html",
    "revision": "aec9ac4202f0e2b2019863556d3952c5"
  },
  {
    "url": "php/arrays/sorting-arrays.html",
    "revision": "320f9754026fdc3f9778a12f356c2344"
  },
  {
    "url": "php/classes/pagination.html",
    "revision": "2bf53e69d69a9b24b1b1c07b3bd962d8"
  },
  {
    "url": "php/classes/pdo.html",
    "revision": "86ecfbba87650a810d1445f2e4f92800"
  },
  {
    "url": "php/laravel/authorization/blade-directives/can.html",
    "revision": "b5aa9f1862458639d8ea37ba06a7d8d9"
  },
  {
    "url": "php/laravel/authorization/blade-directives/canany.html",
    "revision": "70b42d55d8b3c556f37e103ba8ff37da"
  },
  {
    "url": "php/laravel/authorization/blade-directives/cannot.html",
    "revision": "a095fcaa04d23bedf4d98c8660442aa2"
  },
  {
    "url": "php/laravel/authorization/blade-directives/index.html",
    "revision": "71ede7cc362da7c4e6a0fb3c9d5dbd21"
  },
  {
    "url": "php/laravel/authorization/gates.html",
    "revision": "ae8981fa3f25218071b5ff8c3e4e46b6"
  },
  {
    "url": "php/laravel/authorization/index.html",
    "revision": "c340d70c528b310a127d5fa23266d559"
  },
  {
    "url": "php/laravel/authorization/policies.html",
    "revision": "eb937456f2ebabce736ee3ac9ccb6a2c"
  },
  {
    "url": "php/laravel/blade/components.html",
    "revision": "d45e8db12591f41371fe75f356e7e938"
  },
  {
    "url": "php/laravel/blade/directives.html",
    "revision": "4118251c5a1eafe45ed936d6fdc970b1"
  },
  {
    "url": "php/laravel/blade/index.html",
    "revision": "2218004cece7caf1cb2016c964c352f4"
  },
  {
    "url": "php/laravel/controller.html",
    "revision": "ac45cb44a3eb61dcc43782771dbf8acb"
  },
  {
    "url": "php/laravel/database/factories.html",
    "revision": "d092c9105db66972bb44ea5aa2ac0eda"
  },
  {
    "url": "php/laravel/database/index.html",
    "revision": "ba792517fd8274f1f0d701331ca2410e"
  },
  {
    "url": "php/laravel/database/migrations.html",
    "revision": "f944cac7388663db7c9b7d0f1b085311"
  },
  {
    "url": "php/laravel/database/model.html",
    "revision": "84b46a94f4e0ecab30bac84ac1e622d1"
  },
  {
    "url": "php/laravel/database/observer.html",
    "revision": "d238b152790fa06804f9a3bc9f942f02"
  },
  {
    "url": "php/laravel/database/queries.html",
    "revision": "a7195a964be26f653f4f3287acc8b6da"
  },
  {
    "url": "php/laravel/database/scopes.html",
    "revision": "34cd5e2a0bee01c8cb3d718866d8fcc1"
  },
  {
    "url": "php/laravel/database/seeders.html",
    "revision": "6eae9f1906ef253f8d228a184e7fe16d"
  },
  {
    "url": "php/laravel/database/transactions.html",
    "revision": "cecb3bb1c1964677d4e09eb774618f87"
  },
  {
    "url": "php/laravel/enums.html",
    "revision": "d7d57bd7f8632b6e2a5153eb4d0df927"
  },
  {
    "url": "php/laravel/index.html",
    "revision": "bf3a05422c1b2751f44c6b21a2cd5ecf"
  },
  {
    "url": "php/laravel/package-development/index.html",
    "revision": "8dc9f8f30e550da7c7ce0344841c7241"
  },
  {
    "url": "php/laravel/package-development/laravel-packager.html",
    "revision": "8dc7e5cc13e2c57d8c02544ae5f75242"
  },
  {
    "url": "php/laravel/package-development/views.html",
    "revision": "0fc90ed8a7d2cec68cd558eaedf81f19"
  },
  {
    "url": "php/laravel/packages/guides/index.html",
    "revision": "ec41ebd58404798c822ac19201205a83"
  },
  {
    "url": "php/laravel/packages/guides/laravel-pint.html",
    "revision": "ccea9515ff5ecc0feb32fcdaa6762cfd"
  },
  {
    "url": "php/laravel/packages/guides/spatie-activity-log.html",
    "revision": "83114641fc964ecac039f7b035ef9dcb"
  },
  {
    "url": "php/laravel/packages/guides/spatie-comments.html",
    "revision": "bf1d10f8a2f38b49acf9108cff515b40"
  },
  {
    "url": "php/laravel/packages/guides/spatie-feed.html",
    "revision": "108879bd55e2045abc9bf323f5ec3de1"
  },
  {
    "url": "php/laravel/packages/guides/spatie-media-library.html",
    "revision": "f477d2f4931626cf1548a012865af8c3"
  },
  {
    "url": "php/laravel/packages/guides/spatie-permissions.html",
    "revision": "3c8459d49b622a4a1aad0fab4920904d"
  },
  {
    "url": "php/laravel/packages/guides/spatie-query-builder.html",
    "revision": "2ed3f3eebae9d97870473d65a6749d4d"
  },
  {
    "url": "php/laravel/packages/guides/spatie-settings.html",
    "revision": "271edb6264dd76c00bbae6e710ada7b8"
  },
  {
    "url": "php/laravel/packages/index.html",
    "revision": "682e2c868905e8879313b7ee21b10aad"
  },
  {
    "url": "php/laravel/pipelines.html",
    "revision": "a5700d9d0989cd488c4f02df99620b54"
  },
  {
    "url": "php/laravel/policies.html",
    "revision": "a84df300a698ec704ac3c6301b0ee93b"
  },
  {
    "url": "php/laravel/queues.html",
    "revision": "6ce4a328acf443426a7ecf874430fa3f"
  },
  {
    "url": "php/laravel/relationships/belongs-to-many.html",
    "revision": "fad51646aabe2969c668fb5a179baab5"
  },
  {
    "url": "php/laravel/relationships/index.html",
    "revision": "34f0a50a9ed8827f20c8f470ef40f38b"
  },
  {
    "url": "php/laravel/relationships/many-to-many.html",
    "revision": "f0892f252c0efa2d4758c44d148f8a52"
  },
  {
    "url": "php/laravel/routes.html",
    "revision": "6d36e03ee2dff7afe1abfe1caf6e0cdb"
  },
  {
    "url": "php/laravel/task-scheduling.html",
    "revision": "ac5c83d4b1add6ffcfe7f543e3e11c3b"
  },
  {
    "url": "php/laravel/testing/controller-methods.html",
    "revision": "6fc98834e49d6541aba1b8963b67e946"
  },
  {
    "url": "php/laravel/testing/index.html",
    "revision": "d88004d8d3127fc5e5707094b97ce8ad"
  },
  {
    "url": "php/laravel/tinker/index.html",
    "revision": "4f811373c69525ab3794d1b0688d1e79"
  },
  {
    "url": "php/laravel/traits/index.html",
    "revision": "7e4d24897c887b42d42b34a2385871d7"
  },
  {
    "url": "php/laravel/traits/scopes.html",
    "revision": "9307ac48683191fbe4ce2270a571ed12"
  },
  {
    "url": "php/laravel/validation/fluent-rule-builders.html",
    "revision": "4cd2f5bbe25ab2c159c988413f337ebd"
  },
  {
    "url": "php/laravel/validation/form-request.html",
    "revision": "b79bd386b9d936b9e8c9b3013af7eb4b"
  },
  {
    "url": "php/laravel/validation/index.html",
    "revision": "c9572369cf59c4ab577a35bdd9bb1391"
  },
  {
    "url": "php/laravel/validation/validation-rules.html",
    "revision": "2b68e0f76238209a3842d6bb1d5929eb"
  },
  {
    "url": "php/laravel/views.html",
    "revision": "6159616aea0135665a6d19c2b2a41a4e"
  },
  {
    "url": "php/nova/fields.html",
    "revision": "59c023a0aeb4d10b7436162fa0fb7be8"
  },
  {
    "url": "tools/database.html",
    "revision": "5073bc56d17fbae9bbbd8a8904cd1fc9"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
