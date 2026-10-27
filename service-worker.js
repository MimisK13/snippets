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
    "revision": "b6179dfe7cd59154865157f23111ce1e"
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
    "url": "assets/js/100.2d0aac9a.js",
    "revision": "ee6e3df663bb911672c5a613a5216fff"
  },
  {
    "url": "assets/js/101.929a7b64.js",
    "revision": "3ddc848d7e9a68be84f9192bce0bf0d6"
  },
  {
    "url": "assets/js/102.0b1647bd.js",
    "revision": "9d8710f17cc73c615fd5e5f115d6b457"
  },
  {
    "url": "assets/js/103.8829a356.js",
    "revision": "555509c11d4e1c5c0a6aa0a809cbbf0c"
  },
  {
    "url": "assets/js/104.7a12b5b7.js",
    "revision": "fe5947528badf68e6348d3d964f20fb4"
  },
  {
    "url": "assets/js/105.4d148658.js",
    "revision": "657a784b5f17d7f00001127b4eaa6204"
  },
  {
    "url": "assets/js/106.0f9a4faf.js",
    "revision": "7af6c4b836bc2628d2714718fcb34a99"
  },
  {
    "url": "assets/js/107.a1cf6724.js",
    "revision": "e0615c004de63486b8edc2dd2c01cff0"
  },
  {
    "url": "assets/js/108.cfcf3515.js",
    "revision": "32737c0bb24548a26b88a9f4b0e2979a"
  },
  {
    "url": "assets/js/109.5d756830.js",
    "revision": "f87756d6e22e3495427fce8ad13add87"
  },
  {
    "url": "assets/js/11.788742d3.js",
    "revision": "5811556242a6d81028611d4c0a27f632"
  },
  {
    "url": "assets/js/110.93608469.js",
    "revision": "a021fb9664e1dc22d2512242788b5b0c"
  },
  {
    "url": "assets/js/111.c18ea2b0.js",
    "revision": "3bca558535ab1fb308ebe6499c6d533b"
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
    "url": "assets/js/23.c09eb83e.js",
    "revision": "0a73195b21899c845fda74d4b79235b1"
  },
  {
    "url": "assets/js/24.2d95f689.js",
    "revision": "8ef94f1a808839e5eb90864b8edd72c5"
  },
  {
    "url": "assets/js/25.b598904c.js",
    "revision": "ea28929e8bbf9cd04f1897428b7d649a"
  },
  {
    "url": "assets/js/26.667a3f87.js",
    "revision": "52db7df7a585ab7bbd64ff7a97a2697b"
  },
  {
    "url": "assets/js/27.a330b53f.js",
    "revision": "0fbb9be8c2f0004aa84396a8aa70ab8d"
  },
  {
    "url": "assets/js/28.e1bb4504.js",
    "revision": "59a0d839eb5a892642fd58b6a1e789f7"
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
    "url": "assets/js/31.5a5f6aa1.js",
    "revision": "9f6a42f45e175f537588ed777c2146ad"
  },
  {
    "url": "assets/js/32.6550a0e5.js",
    "revision": "78d97ae569ed7dac4bbb56c6aee4a01b"
  },
  {
    "url": "assets/js/33.1cb59c15.js",
    "revision": "f9779aab4bc4b85f5171817f97c360fe"
  },
  {
    "url": "assets/js/34.83e2020a.js",
    "revision": "d5902ed6e697c953c4acdd42d1a4d1a4"
  },
  {
    "url": "assets/js/35.334293c6.js",
    "revision": "da017f3d185e3f6f161b2e68a35edf40"
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
    "url": "assets/js/38.4ad85e6e.js",
    "revision": "0e028a01342e4cb68a3c9a587a77a5f7"
  },
  {
    "url": "assets/js/39.b7a22357.js",
    "revision": "6db42df9a67d3ec971937e9ebd3bb884"
  },
  {
    "url": "assets/js/4.26cdfca2.js",
    "revision": "f2290412901cdeaa1e3bfcb8ddb2efbd"
  },
  {
    "url": "assets/js/40.f9fbb902.js",
    "revision": "2721377bee03ac04d3e29b0e07b4c6c0"
  },
  {
    "url": "assets/js/41.4bc9c4a5.js",
    "revision": "0fcfa616ec8d6c4e9cb6a2a24599d4c7"
  },
  {
    "url": "assets/js/42.51f1c80f.js",
    "revision": "815ed5e26292e9ee0d58d91693026dc2"
  },
  {
    "url": "assets/js/43.86bda943.js",
    "revision": "34d383683917d50580fedd0a310c4980"
  },
  {
    "url": "assets/js/44.9ea71cbb.js",
    "revision": "707034053b9e9104a50eb23799e833d1"
  },
  {
    "url": "assets/js/45.8cca8ab4.js",
    "revision": "12dec4562718550c0d97a5f327dde691"
  },
  {
    "url": "assets/js/46.0af241ff.js",
    "revision": "ce359823d089448f68e579f245c28875"
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
    "url": "assets/js/49.65407bdd.js",
    "revision": "80e0b541e17596a4303759a1beab22f0"
  },
  {
    "url": "assets/js/5.e5d1443e.js",
    "revision": "14f525e794fb3bccbca940d6b60bd359"
  },
  {
    "url": "assets/js/50.619b472b.js",
    "revision": "1d8793c3032e91afb95cae77b59ea798"
  },
  {
    "url": "assets/js/51.aaae567c.js",
    "revision": "c057d7afe6d08819a30a81b30745d965"
  },
  {
    "url": "assets/js/52.2d3f6f54.js",
    "revision": "cf4c6721b0e8c82f43e72d18f506d84b"
  },
  {
    "url": "assets/js/53.7aed81f8.js",
    "revision": "a787c824fe79007d1355e1717934b2c7"
  },
  {
    "url": "assets/js/54.2f7d5cb7.js",
    "revision": "548b585638bdb8e55ed0ffd09e8f724f"
  },
  {
    "url": "assets/js/55.a2d83a3d.js",
    "revision": "512548a1a15a5bb0fea7e96a0ceeb298"
  },
  {
    "url": "assets/js/56.79522979.js",
    "revision": "93bfeaf426f6e9ab9b61555ab20726e9"
  },
  {
    "url": "assets/js/57.0121d3ad.js",
    "revision": "19e27cd4c9008d9dac52199501a7ff84"
  },
  {
    "url": "assets/js/58.86d75606.js",
    "revision": "e209a79a39ec7f3068cdc9d1d734cfb3"
  },
  {
    "url": "assets/js/59.cf64903b.js",
    "revision": "41e947c5e76ed9819250ec47aeb11545"
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
    "url": "assets/js/63.78e9ac48.js",
    "revision": "6a27692859e9ea487e6cb26f7ad43219"
  },
  {
    "url": "assets/js/64.90444499.js",
    "revision": "e72eb306421be844923fdd9e55b50e74"
  },
  {
    "url": "assets/js/65.c9414e02.js",
    "revision": "c0868f5e205367a971af751a7dbd6238"
  },
  {
    "url": "assets/js/66.b0d34d80.js",
    "revision": "d4e4ba8aa93427bf6b458280baee7da7"
  },
  {
    "url": "assets/js/67.100bfd10.js",
    "revision": "766a9d23b565689f14fcd12bd974f379"
  },
  {
    "url": "assets/js/68.5283daa2.js",
    "revision": "6cadfc3cf34cbe2e3c2ee041cff00cd2"
  },
  {
    "url": "assets/js/69.34f7bb07.js",
    "revision": "bb82e90d21970426c690103ebc2919bc"
  },
  {
    "url": "assets/js/7.ca5a7b15.js",
    "revision": "7f79cab7262ae574c3075ebbf4c1ac64"
  },
  {
    "url": "assets/js/70.9d8fc6c6.js",
    "revision": "0d6d3758eac33c9a68fe580886d0efa6"
  },
  {
    "url": "assets/js/71.c81856c7.js",
    "revision": "ce55d0fa2934e65c96ed2ab67c372f63"
  },
  {
    "url": "assets/js/72.5091de7c.js",
    "revision": "eac48e753f6472fb4a9accb80d511424"
  },
  {
    "url": "assets/js/73.eff774dd.js",
    "revision": "0a8857fc53472bd25be210ad52730865"
  },
  {
    "url": "assets/js/74.a6a75549.js",
    "revision": "1644668c37313a44aea640779e44d679"
  },
  {
    "url": "assets/js/75.9bb1fd85.js",
    "revision": "8778192749dae8d8f970fa33a514845e"
  },
  {
    "url": "assets/js/76.2f50c517.js",
    "revision": "ac05facb56d3bda5493109df73dfe47b"
  },
  {
    "url": "assets/js/77.d9f90ba2.js",
    "revision": "2c2dfaaa24fb855d39e558ee71e7d6b0"
  },
  {
    "url": "assets/js/78.5b09b03c.js",
    "revision": "fc153ddf14a3183f6635e2802c1ae8a4"
  },
  {
    "url": "assets/js/79.707d6a7f.js",
    "revision": "f564b3e0ff69d8b7cd2ef517d562e2b5"
  },
  {
    "url": "assets/js/80.b177753d.js",
    "revision": "41334603527ef79b6628e3890dca17c7"
  },
  {
    "url": "assets/js/81.a35c9f20.js",
    "revision": "54651158c5caa1b81b406555657c238a"
  },
  {
    "url": "assets/js/82.535ad77f.js",
    "revision": "f4d9dcca1817a18a893e44a8b37afda5"
  },
  {
    "url": "assets/js/83.eab1d9b2.js",
    "revision": "ef412e0b9f81f9ef0e8142661f80c91f"
  },
  {
    "url": "assets/js/84.6a3a4b5a.js",
    "revision": "91649e7f4597f51bc5c785ecaa7c991b"
  },
  {
    "url": "assets/js/85.d4c40ad8.js",
    "revision": "d372f9965c410cb49c56271727be90f8"
  },
  {
    "url": "assets/js/86.2c0000bd.js",
    "revision": "92a393ba75db42d840f1a6fe3dc0c5ae"
  },
  {
    "url": "assets/js/87.9695d2b2.js",
    "revision": "740eff474582a8adba7f5715a773b00f"
  },
  {
    "url": "assets/js/88.fa918d8a.js",
    "revision": "7b205ed74769d5c8d933a154061f528c"
  },
  {
    "url": "assets/js/89.cd63dde4.js",
    "revision": "c7cd0b1815d6076671347b1de6b29170"
  },
  {
    "url": "assets/js/90.7d3e60eb.js",
    "revision": "a64110fdd1ac77386f5f2715b736e6ad"
  },
  {
    "url": "assets/js/91.c889c79c.js",
    "revision": "1c2520ec8f31030f3810707ec6e5c6d1"
  },
  {
    "url": "assets/js/92.ef3e34b5.js",
    "revision": "455f06fa7b5180d2e3c84e6a5b6243ed"
  },
  {
    "url": "assets/js/93.883c22e1.js",
    "revision": "20a0a317fe38a6ccc5f5dd4004ff2e27"
  },
  {
    "url": "assets/js/94.4675a7e8.js",
    "revision": "9219c46e3ffe37da5961beab9c6683ef"
  },
  {
    "url": "assets/js/95.2f4200f5.js",
    "revision": "eba01d97d3cec007e9b5735b8e7c5314"
  },
  {
    "url": "assets/js/96.c4b23615.js",
    "revision": "ade0182bae32100b573708a69c5be8b2"
  },
  {
    "url": "assets/js/97.cb6fbae5.js",
    "revision": "f3b251466636e6a0d3300516ec696c09"
  },
  {
    "url": "assets/js/98.5f108109.js",
    "revision": "4b49db916c228092254c42cff6ccdb57"
  },
  {
    "url": "assets/js/99.b08b5517.js",
    "revision": "b95d6dba17b75d08f0eed62e825c6414"
  },
  {
    "url": "assets/js/app.b8768395.js",
    "revision": "96a1e651a2e8947086822811ed0b1334"
  },
  {
    "url": "assets/js/vendors~docsearch.0644ee0a.js",
    "revision": "b77890ee16800d927f76d8f8f61a0875"
  },
  {
    "url": "draft/quick-notes.html",
    "revision": "16574742605cdd607d13101de11e2a49"
  },
  {
    "url": "flux-ui/dropdowns.html",
    "revision": "8eb0ed515ab62eaf48b312b022e8a017"
  },
  {
    "url": "flux-ui/tables.html",
    "revision": "85e31a7ee27b9c42191a9d9fbf9281ab"
  },
  {
    "url": "html/bootstrap/cards.html",
    "revision": "ce414318510c2f150fb4fe8d6323e81e"
  },
  {
    "url": "html/bootstrap/forms/checks-radios.html",
    "revision": "a67e32aab7eba1c054d13c0bd230c661"
  },
  {
    "url": "html/bootstrap/forms/floating-labels.html",
    "revision": "e1598ca3a291b3fbad3a48341def4aca"
  },
  {
    "url": "html/bootstrap/forms/form-control.html",
    "revision": "7dcdebfd4a79eaade7af54a81efa8421"
  },
  {
    "url": "html/bootstrap/forms/index.html",
    "revision": "486ad636ba82f4f0bd0f4df34235029e"
  },
  {
    "url": "html/bootstrap/forms/layout.html",
    "revision": "7bfaad737dda1e7e8c9927d321c88bd3"
  },
  {
    "url": "html/bootstrap/forms/select.html",
    "revision": "139371bbbf0441b02677b7b094c2fcb1"
  },
  {
    "url": "html/bootstrap/forms/validation.html",
    "revision": "14b4b45212d001baf745b9b9c29099eb"
  },
  {
    "url": "html/bootstrap/index.html",
    "revision": "cd49d5bc82cbeb9db00319fcb4b84168"
  },
  {
    "url": "html/bootstrap/tables.html",
    "revision": "07eb834351314a3fd4f9bb47776d52dd"
  },
  {
    "url": "html/tailwind/customization/index.html",
    "revision": "2923d42c7f82501308a2195f3d70c774"
  },
  {
    "url": "html/tailwind/customization/presets.html",
    "revision": "ac74bf6be6fcb814b8b539eb436bb80f"
  },
  {
    "url": "html/tailwind/directives.html",
    "revision": "06100c0532610b380395626c0330ca49"
  },
  {
    "url": "html/tailwind/index.html",
    "revision": "7a51bfce0bf7848c26ee9b0f5ddf6b3d"
  },
  {
    "url": "htmx/index.html",
    "revision": "758bcef406b81e8b949b3c4f19210ce6"
  },
  {
    "url": "index.html",
    "revision": "2c7a0517b13290710bfbfd719e3ea6d1"
  },
  {
    "url": "javascript/alpinejs/index.html",
    "revision": "f268f70389aaf1dfa9cef540fdf29bee"
  },
  {
    "url": "javascript/alpinejs/textarea.html",
    "revision": "77d5df0d03417f01792f3880ebf79ef8"
  },
  {
    "url": "javascript/modules.html",
    "revision": "3faf1c0578f5d154f5d85e02e533b21c"
  },
  {
    "url": "livewire/components/index.html",
    "revision": "570dade3cd1df9ecddbfc7dc026e4ce3"
  },
  {
    "url": "livewire/components/pagination.html",
    "revision": "f5a52debf62db92ea0de6787274902da"
  },
  {
    "url": "livewire/installation.html",
    "revision": "e74b9092807fd175ad0f8b8864cced27"
  },
  {
    "url": "nextjs/index.html",
    "revision": "abe1881c9f9f9ad676593f51bb0962aa"
  },
  {
    "url": "nextjs/laravel-sanctum-auth.html",
    "revision": "1a27833ec0475689bc26c9437b4b7822"
  },
  {
    "url": "other/priority-levels.html",
    "revision": "927d252b22e68be5c005febaa0cf05bf"
  },
  {
    "url": "other/static-site-generators.html",
    "revision": "edfa82e28bc2c9a7ec8e5ab09840e180"
  },
  {
    "url": "php/arrays/sorting-arrays.html",
    "revision": "84b9deaffa1403432bb36b690a5cd972"
  },
  {
    "url": "php/classes/pagination.html",
    "revision": "15a645daca9593d3501e5858112813d4"
  },
  {
    "url": "php/classes/pdo.html",
    "revision": "8c348afd4d073c554efb788519fa0659"
  },
  {
    "url": "php/laravel/authorization/blade-directives/can.html",
    "revision": "a7fe8df4d2b7e8b452ebb79175781711"
  },
  {
    "url": "php/laravel/authorization/blade-directives/canany.html",
    "revision": "d01224b76dea3656b99c995afb855ab1"
  },
  {
    "url": "php/laravel/authorization/blade-directives/cannot.html",
    "revision": "47d9f5f70df3c4b6e05f8258b230f183"
  },
  {
    "url": "php/laravel/authorization/blade-directives/index.html",
    "revision": "08d69f451c59d189cf1fb51b08794e7f"
  },
  {
    "url": "php/laravel/authorization/gates.html",
    "revision": "a8691327160dd07a84ea67ff46784db8"
  },
  {
    "url": "php/laravel/authorization/index.html",
    "revision": "724eca57200e2aa1c389804a59250f8b"
  },
  {
    "url": "php/laravel/authorization/policies.html",
    "revision": "bb378e038df3b96469739f9a47e351ad"
  },
  {
    "url": "php/laravel/blade/components.html",
    "revision": "c4b64958415ea5ddaed85e3e2d0264c2"
  },
  {
    "url": "php/laravel/blade/directives.html",
    "revision": "ac895f51d71270a585f3c7a8c9813d9a"
  },
  {
    "url": "php/laravel/blade/index.html",
    "revision": "aff11959d0b7a6dab7cc6259a24bec32"
  },
  {
    "url": "php/laravel/controller.html",
    "revision": "e9ff469106a8cfcae6d5a8cbf32e0b31"
  },
  {
    "url": "php/laravel/database/factories.html",
    "revision": "44e5e5891a0682474b0115175c4fe0f8"
  },
  {
    "url": "php/laravel/database/index.html",
    "revision": "67e0988750ec77a01032994699924a8f"
  },
  {
    "url": "php/laravel/database/migrations.html",
    "revision": "799a4444fcd3fa31c15b91ac4b2e04d3"
  },
  {
    "url": "php/laravel/database/model.html",
    "revision": "fe4e80c8405d7070bb599a15e4762b7e"
  },
  {
    "url": "php/laravel/database/observer.html",
    "revision": "7db995ba0bbfb6fd859f9be8606baa11"
  },
  {
    "url": "php/laravel/database/queries.html",
    "revision": "ea968e85e9d6545a6a3c9350673f77ef"
  },
  {
    "url": "php/laravel/database/quiet-model-events.html",
    "revision": "96d4b1f42ffc81b9882e0ee544a7700d"
  },
  {
    "url": "php/laravel/database/scopes.html",
    "revision": "9db6f37dbb818e164aa497ec1a753bba"
  },
  {
    "url": "php/laravel/database/seeders.html",
    "revision": "69dfe908eb40212a860c0757b30c81e7"
  },
  {
    "url": "php/laravel/database/transactions.html",
    "revision": "a30090a75e6ec5cfec165523848ce83b"
  },
  {
    "url": "php/laravel/enums.html",
    "revision": "a9f57761c273b6cfd22a3b2873e76c13"
  },
  {
    "url": "php/laravel/index.html",
    "revision": "0d6300bf001fb03167ac2fadfc244f64"
  },
  {
    "url": "php/laravel/package-development/index.html",
    "revision": "18707c76a750222eebe4363735d18581"
  },
  {
    "url": "php/laravel/package-development/laravel-packager.html",
    "revision": "1f074840be2d4ad62c485c8439b4b8fd"
  },
  {
    "url": "php/laravel/package-development/views.html",
    "revision": "4c31cbd3353ed051f6177f0fad7b8ecc"
  },
  {
    "url": "php/laravel/packages/guides/index.html",
    "revision": "b79fd64b5eb1293a0bcd0afb344db7e3"
  },
  {
    "url": "php/laravel/packages/guides/laravel-pint.html",
    "revision": "f3bf75f21c21cba05cf4b9b6d1cfccc0"
  },
  {
    "url": "php/laravel/packages/guides/spatie-activity-log.html",
    "revision": "197e927e3f3a6aa0828480fe34fdffc0"
  },
  {
    "url": "php/laravel/packages/guides/spatie-comments.html",
    "revision": "71db18377e968ce643e5ee54b806cdbe"
  },
  {
    "url": "php/laravel/packages/guides/spatie-feed.html",
    "revision": "2e54d588ff4a57e6bea16f50c3958050"
  },
  {
    "url": "php/laravel/packages/guides/spatie-media-library.html",
    "revision": "5b72525d12ffd29fa6a4ba0f099552aa"
  },
  {
    "url": "php/laravel/packages/guides/spatie-permissions.html",
    "revision": "398a17934c98d4d57ebb2e0a1d800f15"
  },
  {
    "url": "php/laravel/packages/guides/spatie-query-builder.html",
    "revision": "03d36a84174ccccf33c5cb255283f0c6"
  },
  {
    "url": "php/laravel/packages/guides/spatie-settings.html",
    "revision": "b6c4c02303fc2afcefc7d5692e0b4740"
  },
  {
    "url": "php/laravel/packages/index.html",
    "revision": "d2a4bbf56610547e183c44b4a3f87f66"
  },
  {
    "url": "php/laravel/pipelines.html",
    "revision": "394f84909c9cb90738990e2db8112674"
  },
  {
    "url": "php/laravel/policies.html",
    "revision": "81ffc89a248876127ee97abd101366ac"
  },
  {
    "url": "php/laravel/queues.html",
    "revision": "3210c057d8003809e9e1453d7fbfd9e3"
  },
  {
    "url": "php/laravel/relationships/belongs-to-many.html",
    "revision": "f214b34db02e4b2845ca882177233665"
  },
  {
    "url": "php/laravel/relationships/index.html",
    "revision": "6edb52168e581069db9084ae3b15061b"
  },
  {
    "url": "php/laravel/relationships/many-to-many.html",
    "revision": "0f5dd173fcabb6a1ad01432e68cbd8b4"
  },
  {
    "url": "php/laravel/routes.html",
    "revision": "11e92624869a429ec14043ecd78f6216"
  },
  {
    "url": "php/laravel/task-scheduling.html",
    "revision": "6b99d7c917096d8356893e758c6ce98f"
  },
  {
    "url": "php/laravel/testing/controller-methods.html",
    "revision": "2feda0ded9d50e90d6d94d41875c6ad6"
  },
  {
    "url": "php/laravel/testing/index.html",
    "revision": "75a1b29a319986550d47643274804acd"
  },
  {
    "url": "php/laravel/tinker/index.html",
    "revision": "81be3ba946881b95f73abecf4d9244ce"
  },
  {
    "url": "php/laravel/traits/index.html",
    "revision": "5e5e500cad0aed60836778acbc51dccf"
  },
  {
    "url": "php/laravel/traits/scopes.html",
    "revision": "b2692913800cd84c23d31ccc13374067"
  },
  {
    "url": "php/laravel/validation/fluent-rule-builders.html",
    "revision": "cd42c696295b28c88521b324ac9139c9"
  },
  {
    "url": "php/laravel/validation/form-request.html",
    "revision": "f002ac5afbf0368765d8b7c1c70f614e"
  },
  {
    "url": "php/laravel/validation/index.html",
    "revision": "20855e999ea9b193b8965b497bc328d4"
  },
  {
    "url": "php/laravel/validation/validation-rules.html",
    "revision": "74e0b1b05f61f1095f9be54d05626932"
  },
  {
    "url": "php/laravel/views.html",
    "revision": "47ba559d3d9ef8940ccee94ae5c11999"
  },
  {
    "url": "php/nova/fields.html",
    "revision": "eac219efb7de71ecdfef70059cfb3c86"
  },
  {
    "url": "tools/database.html",
    "revision": "615fa66063400f6a0fdeec1ccd07fb0c"
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
