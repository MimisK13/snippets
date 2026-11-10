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
    "revision": "ac53f43d4fd7283bf59a4a4cd317195b"
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
    "url": "assets/js/100.8bfd1aa5.js",
    "revision": "49ba2e068bf1f103780eaa7598b801cf"
  },
  {
    "url": "assets/js/101.f676c934.js",
    "revision": "0cc7bbd6325da95052d0baafce77b047"
  },
  {
    "url": "assets/js/102.49c0ae6f.js",
    "revision": "7b9888075dd970cc8aa5c18c853c820b"
  },
  {
    "url": "assets/js/103.a92672fd.js",
    "revision": "a44d9e9f27419599073f0956ad9b5625"
  },
  {
    "url": "assets/js/104.2dbc07e3.js",
    "revision": "cbdcfbe47fdb623f12768f370e9cdd14"
  },
  {
    "url": "assets/js/105.ddcfa1cc.js",
    "revision": "0c3b66d64fe3f75c0d1c8fc2aabe93aa"
  },
  {
    "url": "assets/js/106.59575aab.js",
    "revision": "af26e6e2088756d2f0488991f63c971d"
  },
  {
    "url": "assets/js/107.01f3aeff.js",
    "revision": "1b6ef13911a9b70f56e7e49005c943a8"
  },
  {
    "url": "assets/js/108.a5c327bc.js",
    "revision": "ad42dde1f27a22c7aaa2f424ea938854"
  },
  {
    "url": "assets/js/109.ad4f13d9.js",
    "revision": "4b6057d872e83acabd74b0021e596616"
  },
  {
    "url": "assets/js/11.788742d3.js",
    "revision": "5811556242a6d81028611d4c0a27f632"
  },
  {
    "url": "assets/js/110.bcff6e55.js",
    "revision": "52d88ea0ad5f0daff32ce28e70154a9c"
  },
  {
    "url": "assets/js/111.96725329.js",
    "revision": "090874006f3cec988540ccf7db1cf15c"
  },
  {
    "url": "assets/js/112.372a01a8.js",
    "revision": "13beb0d54bdf23872f98195d0ca75157"
  },
  {
    "url": "assets/js/113.e8c59328.js",
    "revision": "73a8ee408169aba62c38878bb9396ce2"
  },
  {
    "url": "assets/js/114.deef9121.js",
    "revision": "af20b2a3c4da790b3aea9e4feb66c3d9"
  },
  {
    "url": "assets/js/115.681ecb63.js",
    "revision": "ca42813f4b14cb6677f52f81bb342fd4"
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
    "url": "assets/js/24.f571b764.js",
    "revision": "782c33231cd3aa52f2f14b937c95bcfb"
  },
  {
    "url": "assets/js/25.b598904c.js",
    "revision": "ea28929e8bbf9cd04f1897428b7d649a"
  },
  {
    "url": "assets/js/26.995a1d4d.js",
    "revision": "4e9dc67b9d04a7a09919b69c82abd24d"
  },
  {
    "url": "assets/js/27.76c39260.js",
    "revision": "d7b2f1454f1181863c7f9397cc4e3f3e"
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
    "url": "assets/js/32.02362e3b.js",
    "revision": "23d2a021f059faef82c717201c9f5967"
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
    "url": "assets/js/43.9ee1323d.js",
    "revision": "5fdd061494944d469543b720d27e55f0"
  },
  {
    "url": "assets/js/44.d27c67fa.js",
    "revision": "ffbacd357352c438343c3e38c9a9c70b"
  },
  {
    "url": "assets/js/45.0869b9d5.js",
    "revision": "3bd4448a0de85f740cc2a011f7fb9757"
  },
  {
    "url": "assets/js/46.f58aa191.js",
    "revision": "e8947c1e7df0c9c419715eab83ff2aba"
  },
  {
    "url": "assets/js/47.4c107ebd.js",
    "revision": "439e46c749a5ecfbd9e653dff5ba6a92"
  },
  {
    "url": "assets/js/48.38b1348c.js",
    "revision": "b945c3efd1e3a544d931f6db5442f5c6"
  },
  {
    "url": "assets/js/49.7f31ff04.js",
    "revision": "5c213ae75b0f8673d1cd47f7ead4b0a2"
  },
  {
    "url": "assets/js/5.e5d1443e.js",
    "revision": "14f525e794fb3bccbca940d6b60bd359"
  },
  {
    "url": "assets/js/50.df511509.js",
    "revision": "394312ab98d509d8debc8e32e1c706a9"
  },
  {
    "url": "assets/js/51.10f93765.js",
    "revision": "cc2a8d973a3149e970d94c3dfed1d62b"
  },
  {
    "url": "assets/js/52.ba5f986e.js",
    "revision": "7f35594879d984eb80ca1c25450d28b1"
  },
  {
    "url": "assets/js/53.d9e70d1f.js",
    "revision": "3942f709a73ecfd6fe678794c8b25a0d"
  },
  {
    "url": "assets/js/54.93e712c5.js",
    "revision": "12a1db58ce2a624d13226a9ec05a9f64"
  },
  {
    "url": "assets/js/55.576c06c2.js",
    "revision": "ae410808e1e146aaa151427f86acce7a"
  },
  {
    "url": "assets/js/56.4a4e41a4.js",
    "revision": "482e88f48bd15452d9582a5f7878ddc5"
  },
  {
    "url": "assets/js/57.6de9ff8a.js",
    "revision": "00925493a9b81ec57b82c48f8d50ffd9"
  },
  {
    "url": "assets/js/58.68d968f3.js",
    "revision": "e94ffa13a501ea32541d27ab8ced6b0d"
  },
  {
    "url": "assets/js/59.9f0fb75e.js",
    "revision": "ab3576282e3cc10e54f6cc17e6dd6f59"
  },
  {
    "url": "assets/js/6.bb1af159.js",
    "revision": "5ecaf1476e687aadb45fde0e5fdfc1b6"
  },
  {
    "url": "assets/js/60.0e29c635.js",
    "revision": "2cea360e624f650913797bf8ce3e7a95"
  },
  {
    "url": "assets/js/61.176447ae.js",
    "revision": "5f6a615f0efe36b1294b1b87cf7439ed"
  },
  {
    "url": "assets/js/62.9e5958e6.js",
    "revision": "db9ed2a5ac8f8d94f026a3c8b3b592ff"
  },
  {
    "url": "assets/js/63.706e40e0.js",
    "revision": "4018c9762125e32133aa511589f6e188"
  },
  {
    "url": "assets/js/64.74095e1e.js",
    "revision": "59ae808c8c237ae384730c40139bf0d1"
  },
  {
    "url": "assets/js/65.262f31e4.js",
    "revision": "6f225d7a9ec8f59daca6dd7eaf8ec733"
  },
  {
    "url": "assets/js/66.5c2584f6.js",
    "revision": "9dd0850c84c2f393fe18f8123693c90e"
  },
  {
    "url": "assets/js/67.d9de8d2b.js",
    "revision": "86609dfe26c4ae9d443a1cade9b07de3"
  },
  {
    "url": "assets/js/68.81ec9c38.js",
    "revision": "478868cb4a1634a4cdbe829dfae09ff6"
  },
  {
    "url": "assets/js/69.d4b7fd59.js",
    "revision": "457a34039fc1750634e6d07778bce6d1"
  },
  {
    "url": "assets/js/7.ca5a7b15.js",
    "revision": "7f79cab7262ae574c3075ebbf4c1ac64"
  },
  {
    "url": "assets/js/70.9ac61cdf.js",
    "revision": "466bfdcde6f3dda7947b19bbf12c72d4"
  },
  {
    "url": "assets/js/71.81d06e01.js",
    "revision": "59c4222a609cf4fda92e6366b9cefa93"
  },
  {
    "url": "assets/js/72.5e0c02e7.js",
    "revision": "54aaa784ae1e5076feeefae3055f3b7a"
  },
  {
    "url": "assets/js/73.11d25712.js",
    "revision": "098a7c4b4ca96af3447e6dd44280d8c2"
  },
  {
    "url": "assets/js/74.17a54712.js",
    "revision": "532404380a608f8c60f57f7be0d871be"
  },
  {
    "url": "assets/js/75.1a0f675c.js",
    "revision": "d183645cfbba968800cf73a50a1e352e"
  },
  {
    "url": "assets/js/76.9d0552c6.js",
    "revision": "fab36aab39b45641c9eebf6da9ba488b"
  },
  {
    "url": "assets/js/77.29028296.js",
    "revision": "5dfc5d85d72f1a0d35736a77d2f0b804"
  },
  {
    "url": "assets/js/78.48bc60aa.js",
    "revision": "e0d98c5cb759eaf5eb892093784b9648"
  },
  {
    "url": "assets/js/79.b9a264a3.js",
    "revision": "9b6d326fa91aa6e518569db054bd26be"
  },
  {
    "url": "assets/js/80.d71a8b1a.js",
    "revision": "b035a50be16ceb8dbe197e3a23541391"
  },
  {
    "url": "assets/js/81.42e7f7e8.js",
    "revision": "72bde263ac572e2e581429fccc22ed65"
  },
  {
    "url": "assets/js/82.c054c15a.js",
    "revision": "99760b046eb4cdbe15b9f4eded8de63f"
  },
  {
    "url": "assets/js/83.64f050cb.js",
    "revision": "d432675eb312e492a8ab1110ba72a631"
  },
  {
    "url": "assets/js/84.99b2dd4e.js",
    "revision": "a93fb4922525d96a60148af637bf542b"
  },
  {
    "url": "assets/js/85.bdb53899.js",
    "revision": "3dfb7bd6e97f0a36bdebf9f9a599f8c3"
  },
  {
    "url": "assets/js/86.602ddab4.js",
    "revision": "9e97ef11baa6ef9fdd504b7f96c6fe3f"
  },
  {
    "url": "assets/js/87.806eb78d.js",
    "revision": "951a6c86e8e2cc93e1c3df1c7fbabc48"
  },
  {
    "url": "assets/js/88.c767f6a9.js",
    "revision": "facb0249b7ee6107e45402a5862e9910"
  },
  {
    "url": "assets/js/89.c254f069.js",
    "revision": "8bb87a470718ab3642ec8ddf4f707c9a"
  },
  {
    "url": "assets/js/90.099c1ec1.js",
    "revision": "954800f1b1c27b915e9e8539623fd2ba"
  },
  {
    "url": "assets/js/91.9f9dda19.js",
    "revision": "ca6fee3f5efa875c7ff31aa73cfd7a29"
  },
  {
    "url": "assets/js/92.335955e9.js",
    "revision": "4cc2f41b8f01abb8e7fb0cc22bc39d23"
  },
  {
    "url": "assets/js/93.d4fc58b9.js",
    "revision": "7f147ff075ac045093c69a3d44e22afb"
  },
  {
    "url": "assets/js/94.be84c215.js",
    "revision": "37a78efd29a7b7d8e4c6234c4f241ae2"
  },
  {
    "url": "assets/js/95.c3b55886.js",
    "revision": "360e7ad4f77b93063ce0fa3e1f79a5e8"
  },
  {
    "url": "assets/js/96.a7ed9955.js",
    "revision": "3dbc9d7c0d3fa76c067c60161da0a818"
  },
  {
    "url": "assets/js/97.8b11edbd.js",
    "revision": "c09a8d05ebcae4a1457b89633e1c1b33"
  },
  {
    "url": "assets/js/98.cc18d8ab.js",
    "revision": "8b00a5451b2dc322917d0e8aaba762de"
  },
  {
    "url": "assets/js/99.64339860.js",
    "revision": "44e4a4db0592a90395e5972a53c5e80c"
  },
  {
    "url": "assets/js/app.e23a490c.js",
    "revision": "244c95b4f76ccf74454ac450384c1340"
  },
  {
    "url": "assets/js/vendors~docsearch.0644ee0a.js",
    "revision": "b77890ee16800d927f76d8f8f61a0875"
  },
  {
    "url": "draft/quick-notes.html",
    "revision": "102598227604ea0423d4510dbe37337b"
  },
  {
    "url": "flux-ui/dropdowns.html",
    "revision": "69488a92d1ab9404ad2c87313c399a62"
  },
  {
    "url": "flux-ui/tables.html",
    "revision": "e164bba395bf4e5674e545f405c59d5b"
  },
  {
    "url": "html/bootstrap/cards.html",
    "revision": "3c189a7d95936cce367bb8395780b357"
  },
  {
    "url": "html/bootstrap/forms/checks-radios.html",
    "revision": "b9adf5a5706fd7bf619bcebe34bf6372"
  },
  {
    "url": "html/bootstrap/forms/floating-labels.html",
    "revision": "aba544061959ec5dddf48ab3468594f6"
  },
  {
    "url": "html/bootstrap/forms/form-control.html",
    "revision": "ffd0dc9468bbb1b2b6f2017dbdc16054"
  },
  {
    "url": "html/bootstrap/forms/index.html",
    "revision": "ce48ca3967333e23aef5ed6c2d07be21"
  },
  {
    "url": "html/bootstrap/forms/layout.html",
    "revision": "bdc6ff5e1386e873d0e7611166c8c8ff"
  },
  {
    "url": "html/bootstrap/forms/select.html",
    "revision": "40dba8d30b95d2c2618cd07f6f952ee4"
  },
  {
    "url": "html/bootstrap/forms/validation.html",
    "revision": "c27dd494a9cecfc946b333fa1498f97c"
  },
  {
    "url": "html/bootstrap/index.html",
    "revision": "a2208e4a9f2b92899c6071d73895090a"
  },
  {
    "url": "html/bootstrap/tables.html",
    "revision": "9853d867bc1a8b83c9ba780128fe9bcd"
  },
  {
    "url": "html/tailwind/customization/index.html",
    "revision": "b3dece6ebb2788a75bd80f2fd0ed48ce"
  },
  {
    "url": "html/tailwind/customization/presets.html",
    "revision": "401a5bf04b9ba5e77e3e1c191496e050"
  },
  {
    "url": "html/tailwind/directives.html",
    "revision": "bfbb31d3d6209154e97b77348ab4919e"
  },
  {
    "url": "html/tailwind/index.html",
    "revision": "e3523990afc720c992ebe2f07e399a23"
  },
  {
    "url": "htmx/index.html",
    "revision": "a150a65ce860ebc51919d01295f288aa"
  },
  {
    "url": "index.html",
    "revision": "1fa31cfaf446c2a7eab88459f09fa688"
  },
  {
    "url": "inertia/live-props.html",
    "revision": "bd4b3a5f0f0ac0827654ebfa782a309e"
  },
  {
    "url": "javascript/alpinejs/index.html",
    "revision": "c00614e4fcafdecfeed7d6d30871d72d"
  },
  {
    "url": "javascript/alpinejs/textarea.html",
    "revision": "236c0c6ad795d3f550b3958f42903e20"
  },
  {
    "url": "javascript/modules.html",
    "revision": "73cc39d7508519207e65ff67a60cfe17"
  },
  {
    "url": "livewire/components/index.html",
    "revision": "c1522f2bd7f9c4e6d9df981c902c08dd"
  },
  {
    "url": "livewire/components/pagination.html",
    "revision": "c1372d0ecee0ee8027d7306669de31a0"
  },
  {
    "url": "livewire/installation.html",
    "revision": "73768532139cad0c2338cc9d8bee2aae"
  },
  {
    "url": "nextjs/index.html",
    "revision": "e1f2fd6f991f7b0068d7730a6da27d64"
  },
  {
    "url": "nextjs/laravel-sanctum-auth.html",
    "revision": "d2d0a2427e67255c2b3b56a8bcbc1205"
  },
  {
    "url": "other/priority-levels.html",
    "revision": "2dfe531bc151e22726ab889167008636"
  },
  {
    "url": "other/static-site-generators.html",
    "revision": "0a99ef267e2b314528b1469cd915606f"
  },
  {
    "url": "php/arrays/sorting-arrays.html",
    "revision": "4067d0bc237d3ee8f03b89eb05a197ac"
  },
  {
    "url": "php/classes/pagination.html",
    "revision": "d89c7d2ff790605c8dfe3d06aa64eb4d"
  },
  {
    "url": "php/classes/pdo.html",
    "revision": "69105a6b111eba3b5e7b540dbf6256a0"
  },
  {
    "url": "php/laravel/authorization/blade-directives/can.html",
    "revision": "a8a21daf7aa349ca9e11b09de2c3257c"
  },
  {
    "url": "php/laravel/authorization/blade-directives/canany.html",
    "revision": "5632791bc24c8133be48a068c757cbae"
  },
  {
    "url": "php/laravel/authorization/blade-directives/cannot.html",
    "revision": "86184ca5dc87037313dbccd82e1c772b"
  },
  {
    "url": "php/laravel/authorization/blade-directives/index.html",
    "revision": "e2192ccd6198df1ecb2d65b2dfba5e91"
  },
  {
    "url": "php/laravel/authorization/gates.html",
    "revision": "612a96d653b984b97c49b312656e591a"
  },
  {
    "url": "php/laravel/authorization/index.html",
    "revision": "420e9f71eae771c567b2bb5759faf444"
  },
  {
    "url": "php/laravel/authorization/policies.html",
    "revision": "88020ae7932d817bb6d5994b89c55086"
  },
  {
    "url": "php/laravel/blade/components.html",
    "revision": "2a4dde996cb7d4e9de8228a1f0753f79"
  },
  {
    "url": "php/laravel/blade/directives.html",
    "revision": "32c2813e77df0f0f04e3dfb39e1aa113"
  },
  {
    "url": "php/laravel/blade/index.html",
    "revision": "806bfb2249f03f930414240405ba550e"
  },
  {
    "url": "php/laravel/controller.html",
    "revision": "1da5605721343cb761141b0b9c2bd034"
  },
  {
    "url": "php/laravel/database/factories.html",
    "revision": "5750f97c43d84bae0f4fc953f9ad7296"
  },
  {
    "url": "php/laravel/database/index.html",
    "revision": "293b5aceda17a6505f28721e3005a404"
  },
  {
    "url": "php/laravel/database/migrations.html",
    "revision": "89296de39180012ea600bec61fc3f4f3"
  },
  {
    "url": "php/laravel/database/model.html",
    "revision": "78f2fc138cbbbf062ea82f6032a7f777"
  },
  {
    "url": "php/laravel/database/observer.html",
    "revision": "9adf199ac7d42eaa9829e2a1cf562479"
  },
  {
    "url": "php/laravel/database/queries.html",
    "revision": "581a833b69f7eaed908e87019aa56e47"
  },
  {
    "url": "php/laravel/database/quiet-model-events.html",
    "revision": "cf4cb0b7c5e6e7a34c5388ca69c759a0"
  },
  {
    "url": "php/laravel/database/read-replicas.html",
    "revision": "e2d2cba45a02710e507fc49bbd57a1fc"
  },
  {
    "url": "php/laravel/database/scopes.html",
    "revision": "f9f6f3afbac109fce26d03a0b4152f0c"
  },
  {
    "url": "php/laravel/database/seeders.html",
    "revision": "e8de57d12098c3271874ff670475f767"
  },
  {
    "url": "php/laravel/database/transactions.html",
    "revision": "b631a2cad6a926000ce8895a291356ed"
  },
  {
    "url": "php/laravel/enums.html",
    "revision": "d34ead3675767d824b1acfd4d2465979"
  },
  {
    "url": "php/laravel/index.html",
    "revision": "d7ac4cf1f413b293ebe82d92b04aa25f"
  },
  {
    "url": "php/laravel/middleware.html",
    "revision": "eca8f6041a50d77e7e5c71d19b9fb84f"
  },
  {
    "url": "php/laravel/package-development/index.html",
    "revision": "1dcbc6569e60c3e53e1655e1062f9ef9"
  },
  {
    "url": "php/laravel/package-development/laravel-packager.html",
    "revision": "74254fd396c5e2ba27e890591b988c47"
  },
  {
    "url": "php/laravel/package-development/views.html",
    "revision": "60669a3bb5933cfdd45008daa0f856e6"
  },
  {
    "url": "php/laravel/packages/guides/index.html",
    "revision": "4c7047669da7d5805115d5cb21f7e7cf"
  },
  {
    "url": "php/laravel/packages/guides/laravel-pint.html",
    "revision": "e3e0cd021e636e6bf89e4852746e3b35"
  },
  {
    "url": "php/laravel/packages/guides/spatie-activity-log.html",
    "revision": "cec6bd02605c20891a86dcf3662a3596"
  },
  {
    "url": "php/laravel/packages/guides/spatie-comments.html",
    "revision": "ca288065a1995f8d31815c4300e1d1a2"
  },
  {
    "url": "php/laravel/packages/guides/spatie-feed.html",
    "revision": "71e5e9e94dff5f114382f9ca88f1cc85"
  },
  {
    "url": "php/laravel/packages/guides/spatie-media-library.html",
    "revision": "65f69975b59188b15da30c7ef1497281"
  },
  {
    "url": "php/laravel/packages/guides/spatie-permissions.html",
    "revision": "0e502f7e0aff5487087d32501a744841"
  },
  {
    "url": "php/laravel/packages/guides/spatie-query-builder.html",
    "revision": "4f0f3ddfd33e6497a4b243c641b0ff81"
  },
  {
    "url": "php/laravel/packages/guides/spatie-settings.html",
    "revision": "9317b3901291ec18d2abf4157c63e7a3"
  },
  {
    "url": "php/laravel/packages/index.html",
    "revision": "6b3bc374a75b09346552d02a1dd20253"
  },
  {
    "url": "php/laravel/pipelines.html",
    "revision": "ea3bedd69e82374215e5b32a4f189bdb"
  },
  {
    "url": "php/laravel/policies.html",
    "revision": "fe134d81c0d547a2903696f7d6d0758b"
  },
  {
    "url": "php/laravel/queues.html",
    "revision": "140afc58880b1f5b8826d43242f88d70"
  },
  {
    "url": "php/laravel/relationships/belongs-to-many.html",
    "revision": "05a7c8807945c39a5b89a5e0ba6ddae1"
  },
  {
    "url": "php/laravel/relationships/index.html",
    "revision": "a3009159b8766de650e4a81a3c652a7d"
  },
  {
    "url": "php/laravel/relationships/many-to-many.html",
    "revision": "a89d5ac0e7bb1d89d912f96a1512624f"
  },
  {
    "url": "php/laravel/request-input.html",
    "revision": "6522225461b55e2e6f54a4135a173088"
  },
  {
    "url": "php/laravel/routes.html",
    "revision": "383b6654d71f054d946a7b039157f918"
  },
  {
    "url": "php/laravel/task-scheduling.html",
    "revision": "a8a461c20500f63c7a60ff648d877f8b"
  },
  {
    "url": "php/laravel/testing/controller-methods.html",
    "revision": "82a8b1528fc9c5faba1a146dbefa055c"
  },
  {
    "url": "php/laravel/testing/index.html",
    "revision": "4367ab9979853709ead42f928a29f099"
  },
  {
    "url": "php/laravel/tinker/index.html",
    "revision": "7f585cbc8eb4468686ae2d0f828c8a9c"
  },
  {
    "url": "php/laravel/traits/index.html",
    "revision": "b1ed8d905e0b386223d0c180f01a832c"
  },
  {
    "url": "php/laravel/traits/scopes.html",
    "revision": "e17b3beca15da50067f49e6b47f8893e"
  },
  {
    "url": "php/laravel/validation/fluent-rule-builders.html",
    "revision": "492b133c4995720ff9a2f21290e41f62"
  },
  {
    "url": "php/laravel/validation/form-request.html",
    "revision": "b44d197a237b90ee3491547a16ef98f0"
  },
  {
    "url": "php/laravel/validation/index.html",
    "revision": "244ce758bb0066584748e96d4e21262d"
  },
  {
    "url": "php/laravel/validation/validation-rules.html",
    "revision": "b118ca4dfd63da873fc48e9492d5181c"
  },
  {
    "url": "php/laravel/views.html",
    "revision": "7922d21005efada0ad37488cef8bcfc9"
  },
  {
    "url": "php/nova/fields.html",
    "revision": "79df3df811f1740c57b6b0c1581a72b7"
  },
  {
    "url": "tools/database.html",
    "revision": "14898c27ad4a39abf152fb28ea0ff821"
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
