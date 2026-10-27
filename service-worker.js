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
    "revision": "ceda00eb0bb6899f44e6046dc5190ee4"
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
    "url": "assets/js/100.d1e61981.js",
    "revision": "8cb58771e58c1e53cbe7ce45704539fd"
  },
  {
    "url": "assets/js/101.198a6730.js",
    "revision": "0beaf18bd292aa99f3d74a7452873f53"
  },
  {
    "url": "assets/js/102.0b1647bd.js",
    "revision": "9d8710f17cc73c615fd5e5f115d6b457"
  },
  {
    "url": "assets/js/103.3a562758.js",
    "revision": "66027e0baf05e5026b78c3959bf3f04c"
  },
  {
    "url": "assets/js/104.d98990e9.js",
    "revision": "e9205914ceb619b198fcbea977af1754"
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
    "url": "assets/js/107.ce125f16.js",
    "revision": "d290211c9551fb0f4713810fb8f7a976"
  },
  {
    "url": "assets/js/108.edf58bc5.js",
    "revision": "c72765be46fac6eb269d21b260fdbfd8"
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
    "url": "assets/js/110.40175b26.js",
    "revision": "dbf5d71d09d286cd2c724c671c1c1285"
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
    "url": "assets/js/23.37eee318.js",
    "revision": "1cec9d80c8b745bed643b8b5db60f6ff"
  },
  {
    "url": "assets/js/24.43ffe935.js",
    "revision": "4987e90e650eec25815ab00abf867a4e"
  },
  {
    "url": "assets/js/25.b598904c.js",
    "revision": "ea28929e8bbf9cd04f1897428b7d649a"
  },
  {
    "url": "assets/js/26.a112ff9e.js",
    "revision": "7a92c685c969a88097135a6f67dfcb53"
  },
  {
    "url": "assets/js/27.ea6b2824.js",
    "revision": "302695ec4cf4a54ca7cd9f09e579365e"
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
    "url": "assets/js/30.8117193b.js",
    "revision": "78b163dabbae07af2977782e9adc44f8"
  },
  {
    "url": "assets/js/31.9a73c1d2.js",
    "revision": "1b9d499e0f58e7d26eff34656a2751ad"
  },
  {
    "url": "assets/js/32.a0eab2e0.js",
    "revision": "1e47e679902fe7ad53cfd063a3772d57"
  },
  {
    "url": "assets/js/33.bc406b15.js",
    "revision": "304742c9fc9baee40d9b3e5fa66a2de2"
  },
  {
    "url": "assets/js/34.83e2020a.js",
    "revision": "d5902ed6e697c953c4acdd42d1a4d1a4"
  },
  {
    "url": "assets/js/35.23311c4d.js",
    "revision": "c57fd981a6f1df90384435bed4a618c1"
  },
  {
    "url": "assets/js/36.1ddc98d2.js",
    "revision": "e9d5e7a47778a70334f0304b8d0894fd"
  },
  {
    "url": "assets/js/37.3ada3e69.js",
    "revision": "bf92d202755f2f69b2f47dd8fa42925f"
  },
  {
    "url": "assets/js/38.4ad85e6e.js",
    "revision": "0e028a01342e4cb68a3c9a587a77a5f7"
  },
  {
    "url": "assets/js/39.5c0d8ace.js",
    "revision": "88d25cd565317b70a89ce715e4776d0a"
  },
  {
    "url": "assets/js/4.26cdfca2.js",
    "revision": "f2290412901cdeaa1e3bfcb8ddb2efbd"
  },
  {
    "url": "assets/js/40.2ab651f0.js",
    "revision": "2cdba5d3380dd45c1e4b130c9d0fd932"
  },
  {
    "url": "assets/js/41.804b5854.js",
    "revision": "caee2a97cfd8e606b08f94ac6b344cef"
  },
  {
    "url": "assets/js/42.c47375ea.js",
    "revision": "b6b558f13389155c815cf936644682ee"
  },
  {
    "url": "assets/js/43.ef9b6779.js",
    "revision": "ad9a0c9f7e2d427cbbe19ac432261749"
  },
  {
    "url": "assets/js/44.1b976a95.js",
    "revision": "a405a5ae9ce98b9ca7b7859901d47f81"
  },
  {
    "url": "assets/js/45.8cca8ab4.js",
    "revision": "12dec4562718550c0d97a5f327dde691"
  },
  {
    "url": "assets/js/46.81c6419c.js",
    "revision": "30e4ca488021261aad936d9b0d295079"
  },
  {
    "url": "assets/js/47.2546e343.js",
    "revision": "a043a3fab305ce8bfd5c224fcab84fce"
  },
  {
    "url": "assets/js/48.1cabdef1.js",
    "revision": "bf3a945bf2f3358bc962d4ad9be535ce"
  },
  {
    "url": "assets/js/49.2e41d837.js",
    "revision": "c5a977e23563979d015b00e254e53eca"
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
    "url": "assets/js/57.43626f0d.js",
    "revision": "fc6ef046e2d9e9f577c1c226962609b4"
  },
  {
    "url": "assets/js/58.fab70428.js",
    "revision": "a0924ff4dc5892510d25588fcc4d196d"
  },
  {
    "url": "assets/js/59.4694c36b.js",
    "revision": "ab2a6341618f0beb907fe8fdf3d9d875"
  },
  {
    "url": "assets/js/6.bb1af159.js",
    "revision": "5ecaf1476e687aadb45fde0e5fdfc1b6"
  },
  {
    "url": "assets/js/60.1b119f3d.js",
    "revision": "de008afeaaf50d06f202cc8e6b7f1f9c"
  },
  {
    "url": "assets/js/61.592f0f3e.js",
    "revision": "edca2c2d20ef11c66596534f6b88526d"
  },
  {
    "url": "assets/js/62.03532373.js",
    "revision": "8bd4649d02c372c512036ab46b829494"
  },
  {
    "url": "assets/js/63.d57ac779.js",
    "revision": "8f60d7fcd2573815db2d130ace38b5de"
  },
  {
    "url": "assets/js/64.b96f62c4.js",
    "revision": "3e215f19d2a4e1dbc25fc4006477d270"
  },
  {
    "url": "assets/js/65.c9414e02.js",
    "revision": "c0868f5e205367a971af751a7dbd6238"
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
    "url": "assets/js/68.0c6eca93.js",
    "revision": "07d8373cc93cc73d175f97b6688be83b"
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
    "url": "assets/js/70.853984a5.js",
    "revision": "f503df42d529a367d806a8b519ae3ace"
  },
  {
    "url": "assets/js/71.d1b275cc.js",
    "revision": "9f333dbd3a94d481b299820696fdc5da"
  },
  {
    "url": "assets/js/72.5db6988b.js",
    "revision": "da9c74da99c6fefc2371d6aec780e9ca"
  },
  {
    "url": "assets/js/73.eff774dd.js",
    "revision": "0a8857fc53472bd25be210ad52730865"
  },
  {
    "url": "assets/js/74.20f61b38.js",
    "revision": "cb2b1b88bacb084a8f1afbc9b453e4dc"
  },
  {
    "url": "assets/js/75.52163c59.js",
    "revision": "79e3c9264c036dd3b805153f5a356ba8"
  },
  {
    "url": "assets/js/76.fcf715b8.js",
    "revision": "94670261ad363c95012b87bf40800794"
  },
  {
    "url": "assets/js/77.24d3e878.js",
    "revision": "bcd38b33523537e70fd975a31c849fe8"
  },
  {
    "url": "assets/js/78.0ba2ac19.js",
    "revision": "41a7e544552ca44cff76921a6ee66651"
  },
  {
    "url": "assets/js/79.e86ddb2d.js",
    "revision": "13abd4c6d63c50ac5365d8ce24eee1c2"
  },
  {
    "url": "assets/js/80.23104955.js",
    "revision": "2b471521b9d5b017e0cd3564d52027c8"
  },
  {
    "url": "assets/js/81.023efa89.js",
    "revision": "6f47af016e1ba8381606ed618bf1e138"
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
    "url": "assets/js/86.85e1f59f.js",
    "revision": "a4697fb2d542b6d92dfee30bbc11a576"
  },
  {
    "url": "assets/js/87.e52e7cc8.js",
    "revision": "925f9cec059c63075337439327d0e31f"
  },
  {
    "url": "assets/js/88.09e8d3e5.js",
    "revision": "da2c9fbc2ccfc2bc140fc6b8cbfbf1ea"
  },
  {
    "url": "assets/js/89.cd63dde4.js",
    "revision": "c7cd0b1815d6076671347b1de6b29170"
  },
  {
    "url": "assets/js/90.827fd0bc.js",
    "revision": "33672dcf55849adf477afa75dc09aa5e"
  },
  {
    "url": "assets/js/91.c3a1c6f6.js",
    "revision": "f55031993504bbe6efdbc4cb7aba2879"
  },
  {
    "url": "assets/js/92.6f3d39b7.js",
    "revision": "fa155f93640a60b158392987ac720608"
  },
  {
    "url": "assets/js/93.7665d81d.js",
    "revision": "9049422bb011aae82be7f2e1bc4b701d"
  },
  {
    "url": "assets/js/94.c62054f7.js",
    "revision": "bcb2f453e14788e451e4dec0702f6273"
  },
  {
    "url": "assets/js/95.7ec78174.js",
    "revision": "adb99ef7d78f3f97229401286cd1eb9e"
  },
  {
    "url": "assets/js/96.40ce9592.js",
    "revision": "2c5dc2c6dd9083864c779f09cfadb641"
  },
  {
    "url": "assets/js/97.cb6fbae5.js",
    "revision": "f3b251466636e6a0d3300516ec696c09"
  },
  {
    "url": "assets/js/98.6a07d996.js",
    "revision": "c69629078a64eaac845185af5c999d9c"
  },
  {
    "url": "assets/js/99.830c4be7.js",
    "revision": "29e06cfedca4330d4cef585b726f051b"
  },
  {
    "url": "assets/js/app.ad4116e7.js",
    "revision": "51b1c0da1af1ee8922ddd9a94cb57743"
  },
  {
    "url": "assets/js/vendors~docsearch.0644ee0a.js",
    "revision": "b77890ee16800d927f76d8f8f61a0875"
  },
  {
    "url": "draft/quick-notes.html",
    "revision": "623df4eb9ce126cca6a898079c99c5f7"
  },
  {
    "url": "flux-ui/dropdowns.html",
    "revision": "99cc7f10e2b8c6e43f47e141c08924ab"
  },
  {
    "url": "flux-ui/tables.html",
    "revision": "efd358213c3f667704d298647475482c"
  },
  {
    "url": "html/bootstrap/cards.html",
    "revision": "1ee5af94085a97f181344186ba1221fe"
  },
  {
    "url": "html/bootstrap/forms/checks-radios.html",
    "revision": "39dfcf1bb16bffb746ccd5208308be12"
  },
  {
    "url": "html/bootstrap/forms/floating-labels.html",
    "revision": "e902b12150a51440126d69f4a83c7f5c"
  },
  {
    "url": "html/bootstrap/forms/form-control.html",
    "revision": "7761528cf903d3f369e854c0e5f24ce7"
  },
  {
    "url": "html/bootstrap/forms/index.html",
    "revision": "4a74f66e0925f376f82173524f4668ba"
  },
  {
    "url": "html/bootstrap/forms/layout.html",
    "revision": "6ff1df8af1a048cd2725d8e6ceff15ca"
  },
  {
    "url": "html/bootstrap/forms/select.html",
    "revision": "bd4709190cda2acc8dbac3e8f9ce8103"
  },
  {
    "url": "html/bootstrap/forms/validation.html",
    "revision": "0e4ecbfdf72b87dc15e070e7a2163744"
  },
  {
    "url": "html/bootstrap/index.html",
    "revision": "de922be3962d7881368a1aacc80551f5"
  },
  {
    "url": "html/bootstrap/tables.html",
    "revision": "0f2481226aa6de341492fe378aeb4460"
  },
  {
    "url": "html/tailwind/customization/index.html",
    "revision": "dda9e08a9ab64b5e71902f5d0fa8d88f"
  },
  {
    "url": "html/tailwind/customization/presets.html",
    "revision": "5268d9f9136572167370a8e1572329f7"
  },
  {
    "url": "html/tailwind/directives.html",
    "revision": "d11458e7101cb2d796d57e66dd8bafa7"
  },
  {
    "url": "html/tailwind/index.html",
    "revision": "1818865e034f698f1f70ed2c66a120e3"
  },
  {
    "url": "htmx/index.html",
    "revision": "a3d99fd7a3d91200893d39b7e753f78f"
  },
  {
    "url": "index.html",
    "revision": "6e763badd1d296ba95d8f2f588904449"
  },
  {
    "url": "javascript/alpinejs/index.html",
    "revision": "93de186d8d14980b5bf479b6b2422d39"
  },
  {
    "url": "javascript/alpinejs/textarea.html",
    "revision": "83c37d0d8c0e37ec36e0072f16bd9b50"
  },
  {
    "url": "javascript/modules.html",
    "revision": "462175330d86d3eab58127da3007010e"
  },
  {
    "url": "livewire/components/index.html",
    "revision": "aeea23c6fb9d5d296307e823eca03f5b"
  },
  {
    "url": "livewire/components/pagination.html",
    "revision": "f9afa6e0fe92911e0070bcc1a3e53060"
  },
  {
    "url": "livewire/installation.html",
    "revision": "99a20813272f0f179f3ccdae530783f8"
  },
  {
    "url": "nextjs/index.html",
    "revision": "8611c23396b9ce6cc1888cab42dbbf1e"
  },
  {
    "url": "nextjs/laravel-sanctum-auth.html",
    "revision": "f9bfa2e6d8f464ed557840125f300569"
  },
  {
    "url": "other/priority-levels.html",
    "revision": "6e7551f994c4e14e31a296d3007e8600"
  },
  {
    "url": "other/static-site-generators.html",
    "revision": "ed947af1c6d6fb335fff98ebf4933504"
  },
  {
    "url": "php/arrays/sorting-arrays.html",
    "revision": "cbc6d049f035fbbd3d4caaadc8b70457"
  },
  {
    "url": "php/classes/pagination.html",
    "revision": "9be79d5cf92871f380ce2d4f4516dae2"
  },
  {
    "url": "php/classes/pdo.html",
    "revision": "071a1e2ed82579e1c0e4fe7958ae5485"
  },
  {
    "url": "php/laravel/authorization/blade-directives/can.html",
    "revision": "d3ca3751210e0d07235c409f7a7160ab"
  },
  {
    "url": "php/laravel/authorization/blade-directives/canany.html",
    "revision": "59db0d3f9266d4d372f87d4af20ab3fa"
  },
  {
    "url": "php/laravel/authorization/blade-directives/cannot.html",
    "revision": "fff4219b5708c4fefcce883ed8d874d6"
  },
  {
    "url": "php/laravel/authorization/blade-directives/index.html",
    "revision": "4b41ac54f7137bdbdf628779df6782e7"
  },
  {
    "url": "php/laravel/authorization/gates.html",
    "revision": "e4f58852aea61bbf5c8dbdd6d991e795"
  },
  {
    "url": "php/laravel/authorization/index.html",
    "revision": "7fc25ee2a58c7f107768ad339ae15960"
  },
  {
    "url": "php/laravel/authorization/policies.html",
    "revision": "b93fd45f95b8c19b2b8dc6f18b945944"
  },
  {
    "url": "php/laravel/blade/components.html",
    "revision": "ddd2ddffe976508aa78af818d2366ef9"
  },
  {
    "url": "php/laravel/blade/directives.html",
    "revision": "c38031ffa4b2daeefa3493742c2c2559"
  },
  {
    "url": "php/laravel/blade/index.html",
    "revision": "cfd273be2d8f8b4b890ee63c8ebbbd5d"
  },
  {
    "url": "php/laravel/controller.html",
    "revision": "80d297d3f4f52fc76e94ffe6d5f8fc19"
  },
  {
    "url": "php/laravel/database/factories.html",
    "revision": "e032666a1717435a2a87819819c8b883"
  },
  {
    "url": "php/laravel/database/index.html",
    "revision": "decbff707b01633c3fa6ca4d0d0ff870"
  },
  {
    "url": "php/laravel/database/migrations.html",
    "revision": "1b69476b4d9d6bb378fa8a3e57ddede5"
  },
  {
    "url": "php/laravel/database/model.html",
    "revision": "e0553aa4acfd878c19b82922614fdbed"
  },
  {
    "url": "php/laravel/database/observer.html",
    "revision": "6d716fa1bfebdd1a1822e984461dfed2"
  },
  {
    "url": "php/laravel/database/queries.html",
    "revision": "3cc1b87eefe7d07a5dd2bebc97c92811"
  },
  {
    "url": "php/laravel/database/quiet-model-events.html",
    "revision": "92bcc14709c6e89715ad645c05e05e6e"
  },
  {
    "url": "php/laravel/database/scopes.html",
    "revision": "ab26ff32212afb4a6f4fe082eb038fef"
  },
  {
    "url": "php/laravel/database/seeders.html",
    "revision": "8b6ff0c1977ee23077240d2ebe3dd9b9"
  },
  {
    "url": "php/laravel/database/transactions.html",
    "revision": "74523d42f4dd3e0ffcefc7f76361dfee"
  },
  {
    "url": "php/laravel/enums.html",
    "revision": "b7619366824e9d1108e1becbaa9a3703"
  },
  {
    "url": "php/laravel/index.html",
    "revision": "d53c3b7c17916d9c641f618b20c6c0a3"
  },
  {
    "url": "php/laravel/package-development/index.html",
    "revision": "fa82ce43ac8ba77a1882538818df4e19"
  },
  {
    "url": "php/laravel/package-development/laravel-packager.html",
    "revision": "e60ff52299a040ccf7093cc68ca9a78e"
  },
  {
    "url": "php/laravel/package-development/views.html",
    "revision": "74343b2eac0214221f7f445aaf7d89d0"
  },
  {
    "url": "php/laravel/packages/guides/index.html",
    "revision": "6b7d7d9019bb29bcaca9dfaec937adc5"
  },
  {
    "url": "php/laravel/packages/guides/laravel-pint.html",
    "revision": "9dce1a1a9375b41f8676893c47c81434"
  },
  {
    "url": "php/laravel/packages/guides/spatie-activity-log.html",
    "revision": "0a1615238c56da681e1e934e5a0d3063"
  },
  {
    "url": "php/laravel/packages/guides/spatie-comments.html",
    "revision": "b65786336ae4db306bd9a9937f11e6e6"
  },
  {
    "url": "php/laravel/packages/guides/spatie-feed.html",
    "revision": "b9afccd0aa2c775a250fdf9550ddbd63"
  },
  {
    "url": "php/laravel/packages/guides/spatie-media-library.html",
    "revision": "1269c601474ab95f733c18d659cc34f4"
  },
  {
    "url": "php/laravel/packages/guides/spatie-permissions.html",
    "revision": "bb059bbcda621e73222c4db407291a1a"
  },
  {
    "url": "php/laravel/packages/guides/spatie-query-builder.html",
    "revision": "ce5f8fd8d5ac8f2c9fe1e3d7a11ac6b7"
  },
  {
    "url": "php/laravel/packages/guides/spatie-settings.html",
    "revision": "b0ee278a8a0d2a66e73a4d7a87c1a07b"
  },
  {
    "url": "php/laravel/packages/index.html",
    "revision": "75e979578a83dca93a23e1aa3e41768c"
  },
  {
    "url": "php/laravel/pipelines.html",
    "revision": "0135d0d2cff4b90c86418e0252e123d9"
  },
  {
    "url": "php/laravel/policies.html",
    "revision": "fe05f0fd924ffc69a5327527b9e8c2bc"
  },
  {
    "url": "php/laravel/queues.html",
    "revision": "c6ef6d27fbbaaad1b6a4d777caff4fa2"
  },
  {
    "url": "php/laravel/relationships/belongs-to-many.html",
    "revision": "0f29e18be2f3b06109a59a52f0a57943"
  },
  {
    "url": "php/laravel/relationships/index.html",
    "revision": "12f7bc15c4bf78c6324494a6dfcf1f88"
  },
  {
    "url": "php/laravel/relationships/many-to-many.html",
    "revision": "6d14f6e7c02c15f7552948634ec127b9"
  },
  {
    "url": "php/laravel/routes.html",
    "revision": "3322c0fcf33f1f6aabedeeb1f37e2c8c"
  },
  {
    "url": "php/laravel/task-scheduling.html",
    "revision": "8fe2914bb69a4de69542d2fd86760df6"
  },
  {
    "url": "php/laravel/testing/controller-methods.html",
    "revision": "00384300524b2db90f893b22c5f6713d"
  },
  {
    "url": "php/laravel/testing/index.html",
    "revision": "b0ca46476be10b0b6fd865752dd07e79"
  },
  {
    "url": "php/laravel/tinker/index.html",
    "revision": "9d028a974cef58203ca05a140f2edb18"
  },
  {
    "url": "php/laravel/traits/index.html",
    "revision": "027883a86d3b2b2bfa93ae5437d48e39"
  },
  {
    "url": "php/laravel/traits/scopes.html",
    "revision": "4ec447af3d3398d767f13a2bd4e522c5"
  },
  {
    "url": "php/laravel/validation/fluent-rule-builders.html",
    "revision": "d50e0792529adc73dc8ba5afb9f9012c"
  },
  {
    "url": "php/laravel/validation/form-request.html",
    "revision": "7937cd9ddb1ac7ea77a917a0db520ee6"
  },
  {
    "url": "php/laravel/validation/index.html",
    "revision": "82ecf27a8d6dd4d7e496ff21fecaeb14"
  },
  {
    "url": "php/laravel/validation/validation-rules.html",
    "revision": "0c4b207dc0d83b9e4e16999c984b10bb"
  },
  {
    "url": "php/laravel/views.html",
    "revision": "4eb6c6bc8ac0f70c1b649538f345f8b6"
  },
  {
    "url": "php/nova/fields.html",
    "revision": "8ef63b4893eec7ab171ee23c17bb0f38"
  },
  {
    "url": "tools/database.html",
    "revision": "8b3c05f727e1565abe61f363946ab7f5"
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
