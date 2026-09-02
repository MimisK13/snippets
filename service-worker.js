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
    "revision": "058bcb4c6a7b351ce3ad25ae03cf5b58"
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
    "url": "assets/js/100.23c94d0b.js",
    "revision": "733f741aaae9927132e9276000940b7b"
  },
  {
    "url": "assets/js/101.436a69e8.js",
    "revision": "a73ca9b6b7606eb26cabfad3bc947214"
  },
  {
    "url": "assets/js/102.0f980308.js",
    "revision": "ef10792548d742654be472fedd3da121"
  },
  {
    "url": "assets/js/103.bab2dcbf.js",
    "revision": "cba030896ac8938ca7bac4ef5c9b87c1"
  },
  {
    "url": "assets/js/104.ad590bf2.js",
    "revision": "056ec480d9eb9012b3399e84801b75b4"
  },
  {
    "url": "assets/js/105.ea50beca.js",
    "revision": "9191aeb7369a42a724e45fee669aa06d"
  },
  {
    "url": "assets/js/106.2275423c.js",
    "revision": "2bc1f87c3276ac85748f970e2d53ec25"
  },
  {
    "url": "assets/js/107.66103140.js",
    "revision": "31cb80ded1b29f5a2d34bda1f1b66d8c"
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
    "url": "assets/js/23.03988ff2.js",
    "revision": "a588f5fed19d3743b10d600e700bbe6c"
  },
  {
    "url": "assets/js/24.5f2227ea.js",
    "revision": "b53c1979f030e80c7b259be9c0a2ca08"
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
    "url": "assets/js/27.a330b53f.js",
    "revision": "0fbb9be8c2f0004aa84396a8aa70ab8d"
  },
  {
    "url": "assets/js/28.2a0cb174.js",
    "revision": "eb1880dd1212ad202aae520affcc6a25"
  },
  {
    "url": "assets/js/29.96c25d15.js",
    "revision": "e3f6f8a7c1bfb8ab552622e800426802"
  },
  {
    "url": "assets/js/3.5740590c.js",
    "revision": "395b4d6a1743218ea90c901e772361ed"
  },
  {
    "url": "assets/js/30.a3e42f18.js",
    "revision": "e3294e2b739fda5f9fe0986a54cd8b4d"
  },
  {
    "url": "assets/js/31.5a5f6aa1.js",
    "revision": "9f6a42f45e175f537588ed777c2146ad"
  },
  {
    "url": "assets/js/32.e78839ae.js",
    "revision": "4206a55955978e9245916abf8d48d370"
  },
  {
    "url": "assets/js/33.a75fe553.js",
    "revision": "1bf246617e69e75d4efa5f60d137d5ff"
  },
  {
    "url": "assets/js/34.b147349d.js",
    "revision": "4e48759eb110135165b35f844d6adde5"
  },
  {
    "url": "assets/js/35.54ebb87e.js",
    "revision": "d3afe2e4b820e071872088f22a8d55a6"
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
    "url": "assets/js/41.65dae6a9.js",
    "revision": "f37de1c3b50c557be9efe9ff331b2e34"
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
    "url": "assets/js/44.6ef31957.js",
    "revision": "99a6b66ced63d832f422054bbc7cd4a4"
  },
  {
    "url": "assets/js/45.5a952b53.js",
    "revision": "9c393dd465312e3f702474d05818f69f"
  },
  {
    "url": "assets/js/46.d2b5becd.js",
    "revision": "13e275ab9426c4bf1bc1e3290a288c8b"
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
    "url": "assets/js/49.f59882f8.js",
    "revision": "dd70e87ba1b65b1400521126d8202520"
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
    "url": "assets/js/58.607f02c8.js",
    "revision": "e1d0f115750b0711909ab7b0d5bdf124"
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
    "url": "assets/js/60.1b119f3d.js",
    "revision": "de008afeaaf50d06f202cc8e6b7f1f9c"
  },
  {
    "url": "assets/js/61.34e6f23d.js",
    "revision": "4104319088d48e5b2dfee121b083216a"
  },
  {
    "url": "assets/js/62.3ff01bc2.js",
    "revision": "c3dd7e810f3b92fec7b2bc2b9c73c45c"
  },
  {
    "url": "assets/js/63.989c4bfd.js",
    "revision": "674888e79719d968201834d2935a6448"
  },
  {
    "url": "assets/js/64.c668f991.js",
    "revision": "d0544235b4599d18d423ae58c10730cc"
  },
  {
    "url": "assets/js/65.6b66af62.js",
    "revision": "cd3dc93b4ac46efba9f5ff695081e956"
  },
  {
    "url": "assets/js/66.b0d34d80.js",
    "revision": "d4e4ba8aa93427bf6b458280baee7da7"
  },
  {
    "url": "assets/js/67.16817dc4.js",
    "revision": "9d5edd68e42eb0b708cbdda0ca9edc31"
  },
  {
    "url": "assets/js/68.546d84a0.js",
    "revision": "e23cab1acfc110a1663c5e02e5aba9eb"
  },
  {
    "url": "assets/js/69.cd433a2b.js",
    "revision": "3b8ddaa7f8870aa1972552bb0bf6e448"
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
    "url": "assets/js/71.6a506d13.js",
    "revision": "b4210a64ad14c5ae9a00609ef8940917"
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
    "url": "assets/js/78.2793e29f.js",
    "revision": "47d09b10fd37862f0585313f466bd5b3"
  },
  {
    "url": "assets/js/79.f82b7913.js",
    "revision": "cab5a2b0fff85e8ed1f3784269bef965"
  },
  {
    "url": "assets/js/80.665a1298.js",
    "revision": "73df31b0bc988035d7ca59f047a4bded"
  },
  {
    "url": "assets/js/81.4febddc3.js",
    "revision": "f7914ddd4875979007a48e8882924f37"
  },
  {
    "url": "assets/js/82.32977cdf.js",
    "revision": "9ada2fd347dcf8337b68940f0b372d0e"
  },
  {
    "url": "assets/js/83.41915f39.js",
    "revision": "0c8ac379e16239e9ce8a3f8941d4707e"
  },
  {
    "url": "assets/js/84.659f9c56.js",
    "revision": "919f58835c7df615c3c51b27707938dc"
  },
  {
    "url": "assets/js/85.d2b0c1b9.js",
    "revision": "b48a552e0f3555d5e5b9c10a4d9f5082"
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
    "url": "assets/js/88.beaec84b.js",
    "revision": "04d259d456dd0c01d919af98254a9686"
  },
  {
    "url": "assets/js/89.6176eb72.js",
    "revision": "5315afcff0a4511369ff4e4f1646dd8d"
  },
  {
    "url": "assets/js/90.ec26d6c6.js",
    "revision": "2b20551ae5727fb5d40b2754cd387a6e"
  },
  {
    "url": "assets/js/91.0d3cb871.js",
    "revision": "9815b08d005d7cd4ea2aaba4b2b56dc9"
  },
  {
    "url": "assets/js/92.9223f971.js",
    "revision": "2d9c61f84ab9e309a1105b9af25d6c53"
  },
  {
    "url": "assets/js/93.42c565d2.js",
    "revision": "97fb0ffbe14521129c70a84e304806b7"
  },
  {
    "url": "assets/js/94.d1089a50.js",
    "revision": "2d0bcf31466b855b5ba10588cfab1ada"
  },
  {
    "url": "assets/js/95.dfb578fb.js",
    "revision": "a9472e426528ea7a7da20cdb071a77a7"
  },
  {
    "url": "assets/js/96.74d9a86f.js",
    "revision": "c680cfd9d9c261e04ec6c843c2995343"
  },
  {
    "url": "assets/js/97.cbae6152.js",
    "revision": "09f3f81255ddc1293a1c29a23a94e2cd"
  },
  {
    "url": "assets/js/98.7f0ea037.js",
    "revision": "eecf6ceac798e36d91a8cb56e8653cc9"
  },
  {
    "url": "assets/js/99.e3c4edf8.js",
    "revision": "0c56eb6193386fad82f6172de676d565"
  },
  {
    "url": "assets/js/app.68f72715.js",
    "revision": "ef0c6ead6a2a443dfa0afd5a658a4a18"
  },
  {
    "url": "assets/js/vendors~docsearch.0644ee0a.js",
    "revision": "b77890ee16800d927f76d8f8f61a0875"
  },
  {
    "url": "draft/quick-notes.html",
    "revision": "f82e5ac4c78eb78922cb680e682c4953"
  },
  {
    "url": "flux-ui/dropdowns.html",
    "revision": "224a6fad00ddddf9aecd39059e4ecbb5"
  },
  {
    "url": "flux-ui/tables.html",
    "revision": "3d6a96683a1d6db85983a0834f7c68b1"
  },
  {
    "url": "html/bootstrap/cards.html",
    "revision": "74932fe1c7f79fa117e6a01a6a804316"
  },
  {
    "url": "html/bootstrap/forms/checks-radios.html",
    "revision": "84346ae21cc42348ea1f75eb8187cecf"
  },
  {
    "url": "html/bootstrap/forms/floating-labels.html",
    "revision": "057ce4f2f396e6f0919d881577e75e59"
  },
  {
    "url": "html/bootstrap/forms/form-control.html",
    "revision": "11776319eda2aeefe9917bf3c1fdd707"
  },
  {
    "url": "html/bootstrap/forms/index.html",
    "revision": "6c2026f717c976aaa45bc417984c15d5"
  },
  {
    "url": "html/bootstrap/forms/layout.html",
    "revision": "4d250ac57888122835fb90f7b0abc89b"
  },
  {
    "url": "html/bootstrap/forms/select.html",
    "revision": "ff04afed5930143bbfafc51988cbaa53"
  },
  {
    "url": "html/bootstrap/forms/validation.html",
    "revision": "8b2595b725ccbbdf2c60afaa3f4be715"
  },
  {
    "url": "html/bootstrap/index.html",
    "revision": "f1c23c444e994fc9e5ba1edfee9561d4"
  },
  {
    "url": "html/bootstrap/tables.html",
    "revision": "ba5acffd8124e3ec3c5947cd6f72fa52"
  },
  {
    "url": "html/tailwind/customization/index.html",
    "revision": "c5f7e0c548011764c31cf814fd5d2f42"
  },
  {
    "url": "html/tailwind/customization/presets.html",
    "revision": "22ca9f1d6f0082540b34340aaea7fe1f"
  },
  {
    "url": "html/tailwind/directives.html",
    "revision": "5b348616babcea17fba8887f810432a9"
  },
  {
    "url": "html/tailwind/index.html",
    "revision": "dac41da24d46171f9547c3f09e6e5199"
  },
  {
    "url": "htmx/index.html",
    "revision": "762be69264970df7d128a42dad186281"
  },
  {
    "url": "index.html",
    "revision": "8b9f78eb6eb9a9953ba5cfd39a34edd5"
  },
  {
    "url": "javascript/alpinejs/index.html",
    "revision": "dd1709381f4c765e6cca2465fed28030"
  },
  {
    "url": "javascript/alpinejs/textarea.html",
    "revision": "cce42d0bb7675252552faf588897639d"
  },
  {
    "url": "javascript/modules.html",
    "revision": "ff7ab65d3bdf5dbfe13dacfc0ffa9958"
  },
  {
    "url": "livewire/components/index.html",
    "revision": "2affc60afe07e501b6c9917162c9ba76"
  },
  {
    "url": "livewire/components/pagination.html",
    "revision": "faa7fcc002041f4b1ccfd10d126ec9fd"
  },
  {
    "url": "livewire/installation.html",
    "revision": "48cddd05e073fb1aa3b113253b83788b"
  },
  {
    "url": "nextjs/index.html",
    "revision": "416940a1e710c4568a1804c8c871465b"
  },
  {
    "url": "nextjs/laravel-sanctum-auth.html",
    "revision": "e7cc1588b6165b65c8483b9934463ede"
  },
  {
    "url": "other/priority-levels.html",
    "revision": "7dde7a53e4d1fdef6b04043e173ef6f6"
  },
  {
    "url": "other/static-site-generators.html",
    "revision": "f6a540ff3ac6265952f451bad41aa3c1"
  },
  {
    "url": "php/arrays/sorting-arrays.html",
    "revision": "6dd6041695a329b241250a32f6d4c296"
  },
  {
    "url": "php/classes/pagination.html",
    "revision": "e64e86096d3f32590e94c9adcf0ce431"
  },
  {
    "url": "php/classes/pdo.html",
    "revision": "8bd01fc011647dd9b97c683869c48469"
  },
  {
    "url": "php/laravel/authorization/blade-directives/can.html",
    "revision": "b7565df7e6f77a66568112b5e1680e89"
  },
  {
    "url": "php/laravel/authorization/blade-directives/canany.html",
    "revision": "a5b40f6729e0fbe5d0323917ad4c6881"
  },
  {
    "url": "php/laravel/authorization/blade-directives/cannot.html",
    "revision": "3f1f46a42eb88b4335c7791ef147dade"
  },
  {
    "url": "php/laravel/authorization/blade-directives/index.html",
    "revision": "c2b38748aeebb391ac7862e1732b9a6a"
  },
  {
    "url": "php/laravel/authorization/gates.html",
    "revision": "7ccd50c0e039eaa0c040ccf26332dfd3"
  },
  {
    "url": "php/laravel/authorization/index.html",
    "revision": "352da6744ef8bb8ab0501db5c5048e66"
  },
  {
    "url": "php/laravel/authorization/policies.html",
    "revision": "4ee64efbe8525cfa3c9091e09cdee520"
  },
  {
    "url": "php/laravel/blade/components.html",
    "revision": "993e5145a7f78a9db9854824f47eefb5"
  },
  {
    "url": "php/laravel/blade/directives.html",
    "revision": "3b56b141e31a732245554124fbc96054"
  },
  {
    "url": "php/laravel/blade/index.html",
    "revision": "65b64339edea21e8514978fb9ff1a781"
  },
  {
    "url": "php/laravel/controller.html",
    "revision": "b3ba5eabc58871479e8f4942ce476679"
  },
  {
    "url": "php/laravel/database/factories.html",
    "revision": "6cd014d6ebfc937317f9947778d5c369"
  },
  {
    "url": "php/laravel/database/index.html",
    "revision": "7a68fd6deae6263a2161fabc08d0a5c5"
  },
  {
    "url": "php/laravel/database/migrations.html",
    "revision": "1509f84ff4a8f1a58a18a3b5803ba760"
  },
  {
    "url": "php/laravel/database/model.html",
    "revision": "4ddfb2cd1c336a7a279548dd595c6c14"
  },
  {
    "url": "php/laravel/database/observer.html",
    "revision": "af0a073c395b92af501b1cc7e78366ef"
  },
  {
    "url": "php/laravel/database/queries.html",
    "revision": "9291a94a9f7e224805ac2d420466206c"
  },
  {
    "url": "php/laravel/database/scopes.html",
    "revision": "3cde55479a42463ea4047d6df3b1400a"
  },
  {
    "url": "php/laravel/database/seeders.html",
    "revision": "85d1014b3c061584ee0195470f7ded51"
  },
  {
    "url": "php/laravel/database/transactions.html",
    "revision": "84e6af1d9ad2fbd2b1d224c8aeadbb33"
  },
  {
    "url": "php/laravel/enums.html",
    "revision": "2cd3837758f3d9a21476eee15af26495"
  },
  {
    "url": "php/laravel/index.html",
    "revision": "887ad25d6f0ab2b76452bf2efee97bdb"
  },
  {
    "url": "php/laravel/package-development/index.html",
    "revision": "6571a886e3f81fb5751cf30c353847fd"
  },
  {
    "url": "php/laravel/package-development/laravel-packager.html",
    "revision": "95c62f4321a93a75d2ab37fd8a95c3c9"
  },
  {
    "url": "php/laravel/package-development/views.html",
    "revision": "f0e33ecbeb0ebb4fc7f3fc9b84778696"
  },
  {
    "url": "php/laravel/packages/guides/index.html",
    "revision": "fd55712d451de062ac28a165992b67f6"
  },
  {
    "url": "php/laravel/packages/guides/laravel-pint.html",
    "revision": "e0ddaf7642036b9188f4adb02d225afb"
  },
  {
    "url": "php/laravel/packages/guides/spatie-activity-log.html",
    "revision": "f13180f043bfb94e331daff5b3277b1a"
  },
  {
    "url": "php/laravel/packages/guides/spatie-comments.html",
    "revision": "7804697cb608bc6352f5fa49c45be71d"
  },
  {
    "url": "php/laravel/packages/guides/spatie-feed.html",
    "revision": "bb69cf3f04b88b373d7e3969aae31ab7"
  },
  {
    "url": "php/laravel/packages/guides/spatie-media-library.html",
    "revision": "75961a991e8515ead96b8ccc3402f66b"
  },
  {
    "url": "php/laravel/packages/guides/spatie-permissions.html",
    "revision": "ff6f08be50ee2b344743af5f7527731d"
  },
  {
    "url": "php/laravel/packages/guides/spatie-query-builder.html",
    "revision": "0db869b9615f7f343a9521dc09a29aa4"
  },
  {
    "url": "php/laravel/packages/guides/spatie-settings.html",
    "revision": "f4aee86e6c6051e5a0a123222aa7c8ff"
  },
  {
    "url": "php/laravel/packages/index.html",
    "revision": "d313a487bb677620e9447a949abd1394"
  },
  {
    "url": "php/laravel/policies.html",
    "revision": "5bd23fdd38ae01031cf5ac10b5296a08"
  },
  {
    "url": "php/laravel/relationships/belongs-to-many.html",
    "revision": "e19de609f40ac3dd11a804fc7f499c0f"
  },
  {
    "url": "php/laravel/relationships/index.html",
    "revision": "1e379172a5a701b333758270d358639d"
  },
  {
    "url": "php/laravel/relationships/many-to-many.html",
    "revision": "3eeed8b2572954a7bf52e76b561b4ec2"
  },
  {
    "url": "php/laravel/routes.html",
    "revision": "d14b0a179800d49571583cddc9c1c8d2"
  },
  {
    "url": "php/laravel/task-scheduling.html",
    "revision": "d04067e1310f5dd6563374520c8b3ec9"
  },
  {
    "url": "php/laravel/testing/controller-methods.html",
    "revision": "ea08d920ee49f478eabe7d325aef180f"
  },
  {
    "url": "php/laravel/testing/index.html",
    "revision": "d996ddbaa15930ac036f86c0c934b320"
  },
  {
    "url": "php/laravel/tinker/index.html",
    "revision": "b26071a232e8936d1857e39f36be1938"
  },
  {
    "url": "php/laravel/traits/index.html",
    "revision": "c0f2e447f161337a753f3ca6eee14b41"
  },
  {
    "url": "php/laravel/traits/scopes.html",
    "revision": "f0c144c1c6c3e591ce7e095bec1111fa"
  },
  {
    "url": "php/laravel/validation/form-request.html",
    "revision": "ef8c2dee99ed499d173c9015ab6ed4e5"
  },
  {
    "url": "php/laravel/validation/index.html",
    "revision": "7e65c7ccdb42c22875eb0ade3c59df28"
  },
  {
    "url": "php/laravel/validation/validation-rules.html",
    "revision": "2b18e411e5fe8f9d3774dd97ea894ddb"
  },
  {
    "url": "php/laravel/views.html",
    "revision": "00480239289d822041b93d6f114225fc"
  },
  {
    "url": "php/nova/fields.html",
    "revision": "a2ba95e06528d4b99200ecd6b6c6c30b"
  },
  {
    "url": "tools/database.html",
    "revision": "ca4fcc531a05a424f5c67b140a6f153f"
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
