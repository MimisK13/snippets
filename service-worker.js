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
    "revision": "17b55691915110b3db000390cafb6a6b"
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
    "url": "assets/js/100.2d4bcbf4.js",
    "revision": "2360baa12dc1717908aff6e6ca46351a"
  },
  {
    "url": "assets/js/101.8ccff730.js",
    "revision": "0f7f84c4068eed9a807aa5c6a23d55da"
  },
  {
    "url": "assets/js/102.305c1697.js",
    "revision": "23aa6e1c8f50dc83af27db3db52a4a31"
  },
  {
    "url": "assets/js/103.51f38f42.js",
    "revision": "de8736b999ca50fe2e8a749c01734a36"
  },
  {
    "url": "assets/js/104.320888dd.js",
    "revision": "5ecf0660ae3196309ed227b7c3628eee"
  },
  {
    "url": "assets/js/105.97f7e6c2.js",
    "revision": "eaec0c9fabfac8a83be5ddbc273acb6f"
  },
  {
    "url": "assets/js/106.e80a2aff.js",
    "revision": "212e1c684b45c6d1a453df057723ad2c"
  },
  {
    "url": "assets/js/107.b5c00d26.js",
    "revision": "df2ffa280f5c41e7acbcc5b061b2820a"
  },
  {
    "url": "assets/js/108.571b078b.js",
    "revision": "6a31f5a8a7691cde3711ae4c5931ce69"
  },
  {
    "url": "assets/js/109.b807177c.js",
    "revision": "41d477014795b91350ee2f28057dc3a7"
  },
  {
    "url": "assets/js/11.788742d3.js",
    "revision": "5811556242a6d81028611d4c0a27f632"
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
    "url": "assets/js/24.de96783e.js",
    "revision": "5f02097016ea3d3a0484da0dff6f41fe"
  },
  {
    "url": "assets/js/25.26e6f4e5.js",
    "revision": "75d5e66dba9b50296878b7ccda877745"
  },
  {
    "url": "assets/js/26.a6866ec8.js",
    "revision": "3667a503cf45be97b5e8ed1da143e625"
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
    "url": "assets/js/30.7d4f3a20.js",
    "revision": "ba9b5efc11451a4d5327be5392905be5"
  },
  {
    "url": "assets/js/31.7a848993.js",
    "revision": "a7e40ba75dcf772b73be2b6507c5ae03"
  },
  {
    "url": "assets/js/32.c152046d.js",
    "revision": "b635a688742fbf9a9b1d88e36320bd2b"
  },
  {
    "url": "assets/js/33.f2fcf224.js",
    "revision": "6d30d6a6c2eb953f4a9b0f8c0ce23545"
  },
  {
    "url": "assets/js/34.b147349d.js",
    "revision": "4e48759eb110135165b35f844d6adde5"
  },
  {
    "url": "assets/js/35.334293c6.js",
    "revision": "da017f3d185e3f6f161b2e68a35edf40"
  },
  {
    "url": "assets/js/36.3de9d3b2.js",
    "revision": "ac8f763d00957383dd171baad563fc29"
  },
  {
    "url": "assets/js/37.3ada3e69.js",
    "revision": "bf92d202755f2f69b2f47dd8fa42925f"
  },
  {
    "url": "assets/js/38.8853d7fc.js",
    "revision": "ee17ae58227641ff88a88e5bb489b049"
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
    "url": "assets/js/40.6af955ed.js",
    "revision": "2aff5b160a763fac3d060793c56166d6"
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
    "url": "assets/js/43.90d76bf4.js",
    "revision": "377a9a17e473c170fcec00d843ce8fa0"
  },
  {
    "url": "assets/js/44.1b976a95.js",
    "revision": "a405a5ae9ce98b9ca7b7859901d47f81"
  },
  {
    "url": "assets/js/45.0a9a958b.js",
    "revision": "344cb2e101c39362a9502f6685d04d17"
  },
  {
    "url": "assets/js/46.c6b3633a.js",
    "revision": "6180d1394fe0c22cd05b09e12ebae1bb"
  },
  {
    "url": "assets/js/47.9634ed20.js",
    "revision": "62a005bbefc568c5e1e4099e41c1062a"
  },
  {
    "url": "assets/js/48.f09668d8.js",
    "revision": "5cc8d20590de792f129b100ce77628fd"
  },
  {
    "url": "assets/js/49.c383d4d0.js",
    "revision": "ddead9ab23b7a34198148a6bae3b40df"
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
    "url": "assets/js/53.06c7876c.js",
    "revision": "0d72e35235309a8ab7a8679ae677a3e4"
  },
  {
    "url": "assets/js/54.bb615190.js",
    "revision": "720ad1da20f94609faf81df547354d9c"
  },
  {
    "url": "assets/js/55.a2d83a3d.js",
    "revision": "512548a1a15a5bb0fea7e96a0ceeb298"
  },
  {
    "url": "assets/js/56.5bd5be7c.js",
    "revision": "6bd0b10f1de12c56f48823d98f12fcca"
  },
  {
    "url": "assets/js/57.de61ad7e.js",
    "revision": "25b2bfcbc192cb5bf10531b4d388196e"
  },
  {
    "url": "assets/js/58.18302a13.js",
    "revision": "9eb0e6a7574aa0b0e26bdabca9d48654"
  },
  {
    "url": "assets/js/59.4260d7cd.js",
    "revision": "cf85b19ea63d1930796f3c2e0a84d759"
  },
  {
    "url": "assets/js/6.bb1af159.js",
    "revision": "5ecaf1476e687aadb45fde0e5fdfc1b6"
  },
  {
    "url": "assets/js/60.ee145494.js",
    "revision": "26b60dacca00ed5479ef02ea68264dd7"
  },
  {
    "url": "assets/js/61.592f0f3e.js",
    "revision": "edca2c2d20ef11c66596534f6b88526d"
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
    "url": "assets/js/65.6b66af62.js",
    "revision": "cd3dc93b4ac46efba9f5ff695081e956"
  },
  {
    "url": "assets/js/66.e8b35325.js",
    "revision": "33d648ca8015305801850502d9fa906d"
  },
  {
    "url": "assets/js/67.39bff222.js",
    "revision": "d7064cb32feaa0cadc78c0937f762e21"
  },
  {
    "url": "assets/js/68.8e91a15c.js",
    "revision": "58a420e83fd53a4fc1517b0a33da9132"
  },
  {
    "url": "assets/js/69.29af48e7.js",
    "revision": "fe17ba47200685d3bc69c69f17c87771"
  },
  {
    "url": "assets/js/7.ca5a7b15.js",
    "revision": "7f79cab7262ae574c3075ebbf4c1ac64"
  },
  {
    "url": "assets/js/70.619add52.js",
    "revision": "1d56811717fd0d382d8b51f176b49e63"
  },
  {
    "url": "assets/js/71.35db3ebf.js",
    "revision": "afdf64a420f70316b1c721de5052f52a"
  },
  {
    "url": "assets/js/72.6e3da643.js",
    "revision": "244b5dd0cb3d5b48d9f0ddf613ba042c"
  },
  {
    "url": "assets/js/73.fe1e0834.js",
    "revision": "aed6083628f4c6246c24a06d98afd45d"
  },
  {
    "url": "assets/js/74.668605fc.js",
    "revision": "3a44739cf1350be0d5c0ed06bddcfc4a"
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
    "url": "assets/js/78.2793e29f.js",
    "revision": "47d09b10fd37862f0585313f466bd5b3"
  },
  {
    "url": "assets/js/79.208b031d.js",
    "revision": "63792568ff11bccf1eeb249883a1853c"
  },
  {
    "url": "assets/js/80.6485cce3.js",
    "revision": "68da6b117b4c0100b12b89771336d21d"
  },
  {
    "url": "assets/js/81.93709b84.js",
    "revision": "1a1afc45ce310ecc7924ed719e591f61"
  },
  {
    "url": "assets/js/82.d3f220a3.js",
    "revision": "893c3da5d2ca7c7ee7a6e9ece61a3fd1"
  },
  {
    "url": "assets/js/83.a04dd85f.js",
    "revision": "95ebe4faec35c0086de226e96ef17d1b"
  },
  {
    "url": "assets/js/84.fdbc1b86.js",
    "revision": "4bf66d30905d9035c920556807641734"
  },
  {
    "url": "assets/js/85.bb20b510.js",
    "revision": "d22a080c44a399f55079391390a0eeed"
  },
  {
    "url": "assets/js/86.cbdb7609.js",
    "revision": "f164f1fb1cc4b07ddc6755592b59da7a"
  },
  {
    "url": "assets/js/87.31a72e06.js",
    "revision": "7168bc396c956123cc5104618a3360ba"
  },
  {
    "url": "assets/js/88.3f31258d.js",
    "revision": "043109fd01ce229a2adacc3303f993fe"
  },
  {
    "url": "assets/js/89.5e59a9d1.js",
    "revision": "dd99cc395f9bbe844fdba68572ec2d4b"
  },
  {
    "url": "assets/js/90.17b2b56b.js",
    "revision": "dd718c6c5dac7b162b91d38bb2da44a8"
  },
  {
    "url": "assets/js/91.23f2495b.js",
    "revision": "304347bfbadc4dd441dd729500123282"
  },
  {
    "url": "assets/js/92.f9c54c2d.js",
    "revision": "30e37c86fcc16e3ec18e0fa3eaa6ea87"
  },
  {
    "url": "assets/js/93.b6eba67d.js",
    "revision": "4bb3e10c17025a7cf557dddbe25f5273"
  },
  {
    "url": "assets/js/94.49d76fd9.js",
    "revision": "d4d03104addf75f4217b4da14abcbcca"
  },
  {
    "url": "assets/js/95.d2f72373.js",
    "revision": "426a8380bb291fcf0169879a297e51ca"
  },
  {
    "url": "assets/js/96.2eb08ea9.js",
    "revision": "6cd8d93338f3dd78e5fe5a52b354f98a"
  },
  {
    "url": "assets/js/97.73259506.js",
    "revision": "b1d59b7c708bb4e258fbf3c4ed6936ee"
  },
  {
    "url": "assets/js/98.659080e8.js",
    "revision": "3fd11f60d6bf513b701545365054eb95"
  },
  {
    "url": "assets/js/99.6d395d91.js",
    "revision": "7fd4100c362c0ce47bf9e4c59e572c6d"
  },
  {
    "url": "assets/js/app.b2e5bac9.js",
    "revision": "e6894c588becf686f9e8ff1a04351c45"
  },
  {
    "url": "assets/js/vendors~docsearch.0644ee0a.js",
    "revision": "b77890ee16800d927f76d8f8f61a0875"
  },
  {
    "url": "draft/quick-notes.html",
    "revision": "9c3e60b8d3011bae90d720fff9aada91"
  },
  {
    "url": "flux-ui/dropdowns.html",
    "revision": "e7616ef249bf8c45f109b598d444bada"
  },
  {
    "url": "flux-ui/tables.html",
    "revision": "5894ce8bee6be9e0a78044764d74d2fb"
  },
  {
    "url": "html/bootstrap/cards.html",
    "revision": "a608e9d1ae752cd515ac92dfd3f0a9ba"
  },
  {
    "url": "html/bootstrap/forms/checks-radios.html",
    "revision": "53aa433dc6bfbc6acc4c63ec436d255d"
  },
  {
    "url": "html/bootstrap/forms/floating-labels.html",
    "revision": "497c81475f12db12b4e3a48ba07ced52"
  },
  {
    "url": "html/bootstrap/forms/form-control.html",
    "revision": "6d1fcb913d7ffaefe7dc31b7012364ef"
  },
  {
    "url": "html/bootstrap/forms/index.html",
    "revision": "4bea5a1d1eb4ab578668bdf5896fad1e"
  },
  {
    "url": "html/bootstrap/forms/layout.html",
    "revision": "7a138e40cca3c2a3268e6406f17cafe0"
  },
  {
    "url": "html/bootstrap/forms/select.html",
    "revision": "0a0f5d4ccd004b9a452d2b3ba5a025bb"
  },
  {
    "url": "html/bootstrap/forms/validation.html",
    "revision": "3fc2c1ff1f6f8ec6bd090d08225a5fb0"
  },
  {
    "url": "html/bootstrap/index.html",
    "revision": "3969d1e261781d4def3d6044e055b8a4"
  },
  {
    "url": "html/bootstrap/tables.html",
    "revision": "fbffb0259de7202796646131c8e322fa"
  },
  {
    "url": "html/tailwind/customization/index.html",
    "revision": "f79694006c9efc32580db89d5285d807"
  },
  {
    "url": "html/tailwind/customization/presets.html",
    "revision": "5e894adda1f5a0a487f2d37b6027b3f6"
  },
  {
    "url": "html/tailwind/directives.html",
    "revision": "c1e0bf43e1058fe2c705dce077699311"
  },
  {
    "url": "html/tailwind/index.html",
    "revision": "83be2f1431a27f8ddbf9cb4308f00db9"
  },
  {
    "url": "htmx/index.html",
    "revision": "5fcaf742082a9355424e06052cc11e64"
  },
  {
    "url": "index.html",
    "revision": "23094cf083523ad93f91f29e08c0037f"
  },
  {
    "url": "javascript/alpinejs/index.html",
    "revision": "addefdd96d89464810adf81da1b2ae88"
  },
  {
    "url": "javascript/alpinejs/textarea.html",
    "revision": "e6dd831d64394b1ef25fa3b65eb1efa5"
  },
  {
    "url": "javascript/modules.html",
    "revision": "0da485f7b98cd766acd43862e292f540"
  },
  {
    "url": "livewire/components/index.html",
    "revision": "31540b712e2e5aa7ce79a6901984ba2b"
  },
  {
    "url": "livewire/components/pagination.html",
    "revision": "c4764189a0191c8536cd845a72577b64"
  },
  {
    "url": "livewire/installation.html",
    "revision": "2813ca3a2cf8b2306579f765e6a8c03b"
  },
  {
    "url": "nextjs/index.html",
    "revision": "27881274e5eed1bc838498a2bc0b417f"
  },
  {
    "url": "nextjs/laravel-sanctum-auth.html",
    "revision": "b103abed7b91bd3aa198d0a7233b7669"
  },
  {
    "url": "other/priority-levels.html",
    "revision": "a0037cec472a5eae8cd259af995fda05"
  },
  {
    "url": "other/static-site-generators.html",
    "revision": "5e0e5564f0c2a8bd304042873c74cf15"
  },
  {
    "url": "php/arrays/sorting-arrays.html",
    "revision": "b64627a5b8e864734e6ac47a3b85e761"
  },
  {
    "url": "php/classes/pagination.html",
    "revision": "94ede6902ef78cf3590e5cd55cb8ccec"
  },
  {
    "url": "php/classes/pdo.html",
    "revision": "f45a8a6d214180613ff030721e2dbdeb"
  },
  {
    "url": "php/laravel/authorization/blade-directives/can.html",
    "revision": "e121b32fe7b6c0398fa819e49720f832"
  },
  {
    "url": "php/laravel/authorization/blade-directives/canany.html",
    "revision": "b2c38a47d3fa2b799f8efceb02095930"
  },
  {
    "url": "php/laravel/authorization/blade-directives/cannot.html",
    "revision": "fcf6fbcc55a127e3285170c88e821d5e"
  },
  {
    "url": "php/laravel/authorization/blade-directives/index.html",
    "revision": "34da790f84ed7138f2158af34897543f"
  },
  {
    "url": "php/laravel/authorization/gates.html",
    "revision": "47dcd50919ffa4e2975ac417598473ff"
  },
  {
    "url": "php/laravel/authorization/index.html",
    "revision": "0b865c2696c51e804648465d4b51185d"
  },
  {
    "url": "php/laravel/authorization/policies.html",
    "revision": "6914f2f376439cbe22db948c55b5b997"
  },
  {
    "url": "php/laravel/blade/components.html",
    "revision": "082c445882e81216480834c6969c1371"
  },
  {
    "url": "php/laravel/blade/directives.html",
    "revision": "959b253a97b6187f3748ed74c372b9b8"
  },
  {
    "url": "php/laravel/blade/index.html",
    "revision": "aaf543b86e4e8034a63dcd24a0720839"
  },
  {
    "url": "php/laravel/controller.html",
    "revision": "0530c8321892fd35b094e19141aa1dbd"
  },
  {
    "url": "php/laravel/database/factories.html",
    "revision": "f5d9d427ff2fc23f36010135f5c15dae"
  },
  {
    "url": "php/laravel/database/index.html",
    "revision": "7686437a1bfa9afb94cf1583b5f21d94"
  },
  {
    "url": "php/laravel/database/migrations.html",
    "revision": "d1bd4261bb10e1a0ca3e8906bdaba74a"
  },
  {
    "url": "php/laravel/database/model.html",
    "revision": "0682c3de205b5fa54f2c9ceb63d0bdaf"
  },
  {
    "url": "php/laravel/database/observer.html",
    "revision": "cb971c693a37c727339380367b92d16b"
  },
  {
    "url": "php/laravel/database/queries.html",
    "revision": "2b028b348388b2754252863dfce3d057"
  },
  {
    "url": "php/laravel/database/scopes.html",
    "revision": "fd7f8f1dbfb89d3f540b72a9523155cc"
  },
  {
    "url": "php/laravel/database/seeders.html",
    "revision": "ef294ff84a9dc39307279ceb907921d5"
  },
  {
    "url": "php/laravel/database/transactions.html",
    "revision": "722fc242294e9a350c0e8f32125a31dd"
  },
  {
    "url": "php/laravel/enums.html",
    "revision": "517141535d58a474643841bc202cbe96"
  },
  {
    "url": "php/laravel/index.html",
    "revision": "38d8dd286d306bd7894f4f19fc0786fb"
  },
  {
    "url": "php/laravel/package-development/index.html",
    "revision": "f1a34bd62fd9f5129be7fad7c4b69795"
  },
  {
    "url": "php/laravel/package-development/laravel-packager.html",
    "revision": "016a2de9f1ff2899444313269ecded96"
  },
  {
    "url": "php/laravel/package-development/views.html",
    "revision": "860244e34f46643dc4c8f9b7a1f4e7de"
  },
  {
    "url": "php/laravel/packages/guides/index.html",
    "revision": "85f989373d2c1890964e84148d40528a"
  },
  {
    "url": "php/laravel/packages/guides/laravel-pint.html",
    "revision": "88dcefdeb2771c1f5ac31e4729d91b58"
  },
  {
    "url": "php/laravel/packages/guides/spatie-activity-log.html",
    "revision": "9d8557d3f91e5461a9db32de7ea43dbf"
  },
  {
    "url": "php/laravel/packages/guides/spatie-comments.html",
    "revision": "003246329b23cc13df43a1ce6c209ff3"
  },
  {
    "url": "php/laravel/packages/guides/spatie-feed.html",
    "revision": "7f6e61e05940fc60b0656de8a8ad3f09"
  },
  {
    "url": "php/laravel/packages/guides/spatie-media-library.html",
    "revision": "530bc3aeb3f0ca68966419b8471e8490"
  },
  {
    "url": "php/laravel/packages/guides/spatie-permissions.html",
    "revision": "b31405458e0793922989536fb3d224ff"
  },
  {
    "url": "php/laravel/packages/guides/spatie-query-builder.html",
    "revision": "349d09b19f80a88289f2bcfb974d5ca3"
  },
  {
    "url": "php/laravel/packages/guides/spatie-settings.html",
    "revision": "23152b2024472a2be0510513a2ec6a05"
  },
  {
    "url": "php/laravel/packages/index.html",
    "revision": "6fbd401164889a12ac80216f97d99743"
  },
  {
    "url": "php/laravel/pipelines.html",
    "revision": "a6a46f428d363e58d94764766e4572ac"
  },
  {
    "url": "php/laravel/policies.html",
    "revision": "0e0fd13ccf15ec7ba62cd8de3e584a4f"
  },
  {
    "url": "php/laravel/queues.html",
    "revision": "a2b06325fc9b713620b81d2c0afdcb3a"
  },
  {
    "url": "php/laravel/relationships/belongs-to-many.html",
    "revision": "1682b599df7e87ccfc698454506ac7d7"
  },
  {
    "url": "php/laravel/relationships/index.html",
    "revision": "2f34c61b586069bbf9999c0c93614b59"
  },
  {
    "url": "php/laravel/relationships/many-to-many.html",
    "revision": "2ed01518b29c01c16b5a1c6925430ae9"
  },
  {
    "url": "php/laravel/routes.html",
    "revision": "2e4d4ebc44551d95a34ada242c5f600b"
  },
  {
    "url": "php/laravel/task-scheduling.html",
    "revision": "f41b5684dbd3d6ff75599e0da052522d"
  },
  {
    "url": "php/laravel/testing/controller-methods.html",
    "revision": "cc3b25b3f7272443a250524c2919fe70"
  },
  {
    "url": "php/laravel/testing/index.html",
    "revision": "6cdac1714233e9787266261393d98fa2"
  },
  {
    "url": "php/laravel/tinker/index.html",
    "revision": "ab9bd292bf6ac8d85ad92fc5ba889405"
  },
  {
    "url": "php/laravel/traits/index.html",
    "revision": "a6d37f40a6f51336ce433ecd5af83b71"
  },
  {
    "url": "php/laravel/traits/scopes.html",
    "revision": "d469db76003d88be4228f7684c4bac00"
  },
  {
    "url": "php/laravel/validation/form-request.html",
    "revision": "33dacb06819849d41cea8aa800711be8"
  },
  {
    "url": "php/laravel/validation/index.html",
    "revision": "48cd317353346fe5025504675bcfe1c9"
  },
  {
    "url": "php/laravel/validation/validation-rules.html",
    "revision": "7bf8c3850e6197f538d366fbb7182332"
  },
  {
    "url": "php/laravel/views.html",
    "revision": "42360411cc9b15a8e34e27ea9f28a8db"
  },
  {
    "url": "php/nova/fields.html",
    "revision": "58b7d58e0826388ecddf07c19d4df160"
  },
  {
    "url": "tools/database.html",
    "revision": "35fb2da82b5789069fac4f6e9f76dd57"
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
