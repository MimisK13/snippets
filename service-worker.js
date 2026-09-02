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
    "revision": "5185bdf0bcddc0d9f77c6aa151402fcb"
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
    "url": "assets/js/100.03250797.js",
    "revision": "ef22e82bc4846f3555e64f80715539cb"
  },
  {
    "url": "assets/js/101.b72deb05.js",
    "revision": "292a6ba166cbed4f3f349af2ad813511"
  },
  {
    "url": "assets/js/102.0f980308.js",
    "revision": "ef10792548d742654be472fedd3da121"
  },
  {
    "url": "assets/js/103.ab9d2a65.js",
    "revision": "4e224c844da43839cf35c1177ec21c60"
  },
  {
    "url": "assets/js/104.f64ca9e8.js",
    "revision": "061012e1ddeebe80d868e121df63227e"
  },
  {
    "url": "assets/js/105.1e24bf61.js",
    "revision": "1a26a651ce69c151f55b76b6b893a259"
  },
  {
    "url": "assets/js/106.814e53f0.js",
    "revision": "f5499461c1a7afb3416ced44ec946401"
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
    "url": "assets/js/23.c09eb83e.js",
    "revision": "0a73195b21899c845fda74d4b79235b1"
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
    "url": "assets/js/28.12089762.js",
    "revision": "b243d7d2b4d910d1055420bb2e7156fa"
  },
  {
    "url": "assets/js/29.3fc49d1d.js",
    "revision": "0b324e4b886f254f26f9668df17592f4"
  },
  {
    "url": "assets/js/3.5740590c.js",
    "revision": "395b4d6a1743218ea90c901e772361ed"
  },
  {
    "url": "assets/js/30.22033731.js",
    "revision": "3cb5b691cda3b1fdfa649aa7359e3bd8"
  },
  {
    "url": "assets/js/31.9a73c1d2.js",
    "revision": "1b9d499e0f58e7d26eff34656a2751ad"
  },
  {
    "url": "assets/js/32.c152046d.js",
    "revision": "b635a688742fbf9a9b1d88e36320bd2b"
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
    "url": "assets/js/37.d7c44644.js",
    "revision": "217b4ba0e463a15e5d1bae605924dd55"
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
    "url": "assets/js/40.fc664589.js",
    "revision": "d99fa4e225b6f04c3e004b897d5a0bcb"
  },
  {
    "url": "assets/js/41.804b5854.js",
    "revision": "caee2a97cfd8e606b08f94ac6b344cef"
  },
  {
    "url": "assets/js/42.0fc643a2.js",
    "revision": "dead19440ef393f65228b85cd35cdc3a"
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
    "url": "assets/js/46.81c6419c.js",
    "revision": "30e4ca488021261aad936d9b0d295079"
  },
  {
    "url": "assets/js/47.6e437947.js",
    "revision": "8b938a1c52344c9c1ce75af641674370"
  },
  {
    "url": "assets/js/48.54444d42.js",
    "revision": "9e4b10cf589c3d54e8b1eaf07578d72b"
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
    "url": "assets/js/58.fab70428.js",
    "revision": "a0924ff4dc5892510d25588fcc4d196d"
  },
  {
    "url": "assets/js/59.1787408e.js",
    "revision": "fa3af75bc9a00ee6d21ba368d539178b"
  },
  {
    "url": "assets/js/6.bb1af159.js",
    "revision": "5ecaf1476e687aadb45fde0e5fdfc1b6"
  },
  {
    "url": "assets/js/60.b3035f7d.js",
    "revision": "58044d5d1b3f16dc5569c345d9df5cd3"
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
    "url": "assets/js/70.d56f1ee8.js",
    "revision": "0fe91bb6a70393e04c5f5ed141f29bf9"
  },
  {
    "url": "assets/js/71.6b329dd1.js",
    "revision": "43ad3cdd6220d09738d866f2dcf13418"
  },
  {
    "url": "assets/js/72.6e3da643.js",
    "revision": "244b5dd0cb3d5b48d9f0ddf613ba042c"
  },
  {
    "url": "assets/js/73.9b8e5483.js",
    "revision": "0ecc73382566f920e378c144d8367499"
  },
  {
    "url": "assets/js/74.b7471e60.js",
    "revision": "3c9b113d1149b21008918d641ea76813"
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
    "url": "assets/js/81.cb011207.js",
    "revision": "97f767bb2fef8248c0734f6408d3f4ed"
  },
  {
    "url": "assets/js/82.babbf092.js",
    "revision": "ba25fac105a261cd9f7a132642647802"
  },
  {
    "url": "assets/js/83.24639aa2.js",
    "revision": "356943c911d79bc4c0e94da4b2c5a70a"
  },
  {
    "url": "assets/js/84.659f9c56.js",
    "revision": "919f58835c7df615c3c51b27707938dc"
  },
  {
    "url": "assets/js/85.ff550b19.js",
    "revision": "c782d7f6ed5d78dc7f2c9d90a57a3e7d"
  },
  {
    "url": "assets/js/86.117ad058.js",
    "revision": "56c6daf0ce8234f45d222ac65c6e3d3b"
  },
  {
    "url": "assets/js/87.17538ece.js",
    "revision": "a64490708455dad514670eb97081c5aa"
  },
  {
    "url": "assets/js/88.e9a54cd0.js",
    "revision": "6d9af8a2787751651ba20085d1ec1ac3"
  },
  {
    "url": "assets/js/89.75a06dca.js",
    "revision": "98974f21e5cbb3ff3837abf5e8293f7d"
  },
  {
    "url": "assets/js/90.ec26d6c6.js",
    "revision": "2b20551ae5727fb5d40b2754cd387a6e"
  },
  {
    "url": "assets/js/91.e9c0bf76.js",
    "revision": "c3175cc94ac4daa6fca683773ea6f805"
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
    "url": "assets/js/95.42749edc.js",
    "revision": "9e2fb1ec9fecf316e79adb9bea04c1b1"
  },
  {
    "url": "assets/js/96.21999cff.js",
    "revision": "45e705d3d0c8ac695eb9bcbceaa68b11"
  },
  {
    "url": "assets/js/97.494b6abe.js",
    "revision": "d999aa49bdb5fb0d7d17bcafe3ea6c67"
  },
  {
    "url": "assets/js/98.265b0888.js",
    "revision": "b6f67c8ec9d2f21cc23aebb5903a8531"
  },
  {
    "url": "assets/js/99.fe907fc2.js",
    "revision": "65550a7ee70be97617b50f21cce78c6d"
  },
  {
    "url": "assets/js/app.c5153ae1.js",
    "revision": "8467f4a18ed0e9edbff4da8dba12a239"
  },
  {
    "url": "assets/js/vendors~docsearch.0644ee0a.js",
    "revision": "b77890ee16800d927f76d8f8f61a0875"
  },
  {
    "url": "draft/quick-notes.html",
    "revision": "8fe13d8a6fd21a95d05bd9df8022c99f"
  },
  {
    "url": "flux-ui/dropdowns.html",
    "revision": "c8957830aefb987c51e49bc9edce00f5"
  },
  {
    "url": "flux-ui/tables.html",
    "revision": "30700efe2ecf627ae1818f500a0885a5"
  },
  {
    "url": "html/bootstrap/cards.html",
    "revision": "38205197d61796587c7c2ee74e4d6de1"
  },
  {
    "url": "html/bootstrap/forms/checks-radios.html",
    "revision": "6e03bfec36234d56b9253f03562e21af"
  },
  {
    "url": "html/bootstrap/forms/floating-labels.html",
    "revision": "7daac165c0343a8589f6f9117ca29550"
  },
  {
    "url": "html/bootstrap/forms/form-control.html",
    "revision": "fee04ebc1ae2cc94ff5077b357b52f1f"
  },
  {
    "url": "html/bootstrap/forms/index.html",
    "revision": "48b36eef120a0e995774fee3e94f1cb2"
  },
  {
    "url": "html/bootstrap/forms/layout.html",
    "revision": "79b9db84a345b75dcba5ca9a3ed25b58"
  },
  {
    "url": "html/bootstrap/forms/select.html",
    "revision": "9e1be34794955103f2b72b6be6aa6267"
  },
  {
    "url": "html/bootstrap/forms/validation.html",
    "revision": "52284791387bdd380fb0c19893d01f1e"
  },
  {
    "url": "html/bootstrap/index.html",
    "revision": "70c7376b15ebc8abcf527c9ec278104c"
  },
  {
    "url": "html/bootstrap/tables.html",
    "revision": "39ac863650cc825a18e1c74a310714fa"
  },
  {
    "url": "html/tailwind/customization/index.html",
    "revision": "b10fd7a2829ca0c91a69752d186b54b9"
  },
  {
    "url": "html/tailwind/customization/presets.html",
    "revision": "c36b39676b8cc6542482055059b4ee91"
  },
  {
    "url": "html/tailwind/directives.html",
    "revision": "fe32352bed753aed400f282401e192eb"
  },
  {
    "url": "html/tailwind/index.html",
    "revision": "40aa016f1c257cd98c04ddf1acdd3545"
  },
  {
    "url": "htmx/index.html",
    "revision": "af9f8ab0903bd01bb00465eb2770c013"
  },
  {
    "url": "index.html",
    "revision": "4c8eec61e8cced4570c09e7a0f318f6b"
  },
  {
    "url": "javascript/alpinejs/index.html",
    "revision": "8b58a9a4d38787412c51de4e57d78ba6"
  },
  {
    "url": "javascript/alpinejs/textarea.html",
    "revision": "22fe1113dbb670f82678c550989f7028"
  },
  {
    "url": "javascript/modules.html",
    "revision": "4b69ed194fed46f4625fd0c97c6cbae8"
  },
  {
    "url": "livewire/components/index.html",
    "revision": "0d7f2cb0fc2b714fd3f6645652704eca"
  },
  {
    "url": "livewire/components/pagination.html",
    "revision": "369a6ab3e0dc24b0ec8072e305eeb05c"
  },
  {
    "url": "livewire/installation.html",
    "revision": "b65e00409c11947322aa39ae0fd89300"
  },
  {
    "url": "nextjs/index.html",
    "revision": "9eab92c53574e2712ffb4d06438b9406"
  },
  {
    "url": "nextjs/laravel-sanctum-auth.html",
    "revision": "2e5a7fa7ce27baa3508626160604f991"
  },
  {
    "url": "other/priority-levels.html",
    "revision": "74b72cbec5a41f67b05fa0052dd2725d"
  },
  {
    "url": "other/static-site-generators.html",
    "revision": "cf01ce2a8291eee8e6ea9bd42de81d01"
  },
  {
    "url": "php/arrays/sorting-arrays.html",
    "revision": "efca689cbf51ca432f280b7b0ab90ba5"
  },
  {
    "url": "php/classes/pagination.html",
    "revision": "154252cd1bb91ff5cd0e9266e9ec13f1"
  },
  {
    "url": "php/classes/pdo.html",
    "revision": "dd1ae7e22b158b1e2683335befe24bdc"
  },
  {
    "url": "php/laravel/authorization/blade-directives/can.html",
    "revision": "18e1e93a3440e412cb2ab6c262812665"
  },
  {
    "url": "php/laravel/authorization/blade-directives/canany.html",
    "revision": "910e137b5bbdc6ccbe8dd0da5379233e"
  },
  {
    "url": "php/laravel/authorization/blade-directives/cannot.html",
    "revision": "257f0a121efe7ea260931f00ddea5b0b"
  },
  {
    "url": "php/laravel/authorization/blade-directives/index.html",
    "revision": "37e16dc831b4d404faa5cb65bc18fad2"
  },
  {
    "url": "php/laravel/authorization/gates.html",
    "revision": "0df7c11150ad05866fa31aaf38545523"
  },
  {
    "url": "php/laravel/authorization/index.html",
    "revision": "b303d861937fb0b9ec067ea73838daae"
  },
  {
    "url": "php/laravel/authorization/policies.html",
    "revision": "4bc553fe7d996879cd6422dbd818e443"
  },
  {
    "url": "php/laravel/blade/components.html",
    "revision": "52085fc10938d94a460fbf9dc66034a8"
  },
  {
    "url": "php/laravel/blade/directives.html",
    "revision": "9c8e52d04c47fad10e6eafc9dde359fd"
  },
  {
    "url": "php/laravel/blade/index.html",
    "revision": "40858346e9fb71b21dcc04bfc791d4af"
  },
  {
    "url": "php/laravel/controller.html",
    "revision": "1dbbc4691c44ea6af5f28159372be63d"
  },
  {
    "url": "php/laravel/database/factories.html",
    "revision": "eb02c9f229d9f1f0d62be73f739cedef"
  },
  {
    "url": "php/laravel/database/index.html",
    "revision": "706d2c1092c82d5afd0d2c2fc57db76e"
  },
  {
    "url": "php/laravel/database/migrations.html",
    "revision": "8f0d5f5051490943f7971f0cf97a1cb0"
  },
  {
    "url": "php/laravel/database/model.html",
    "revision": "be8d7cf506d9a179028aebf11ee3e28e"
  },
  {
    "url": "php/laravel/database/observer.html",
    "revision": "9452b7b743aa4f3715688df0f99c6fe7"
  },
  {
    "url": "php/laravel/database/queries.html",
    "revision": "c75c2d2e27f2970fe83a630915a82728"
  },
  {
    "url": "php/laravel/database/scopes.html",
    "revision": "9207bfe42e9652349793246b11836e60"
  },
  {
    "url": "php/laravel/database/seeders.html",
    "revision": "2f2d5c7b4e968dad13f64d52e3736ea6"
  },
  {
    "url": "php/laravel/database/transactions.html",
    "revision": "39adeaa3f7ce8e5a583c900a64583e90"
  },
  {
    "url": "php/laravel/enums.html",
    "revision": "5175603f156de1a9319090a42d61d12d"
  },
  {
    "url": "php/laravel/index.html",
    "revision": "418d27033583828403b1033d4f51b4e8"
  },
  {
    "url": "php/laravel/package-development/index.html",
    "revision": "19945e7b14f7e4384f5445e4b625323c"
  },
  {
    "url": "php/laravel/package-development/laravel-packager.html",
    "revision": "7350888e02ca11342472add244697975"
  },
  {
    "url": "php/laravel/package-development/views.html",
    "revision": "437bdd74992db380de4e76978975d34a"
  },
  {
    "url": "php/laravel/packages/guides/index.html",
    "revision": "b5543fe6c011ed176cd44ceedbd265b8"
  },
  {
    "url": "php/laravel/packages/guides/laravel-pint.html",
    "revision": "fb14267f99dda648d47d81c749d51f84"
  },
  {
    "url": "php/laravel/packages/guides/spatie-activity-log.html",
    "revision": "f6944ce202572d1661f3890935fe561e"
  },
  {
    "url": "php/laravel/packages/guides/spatie-comments.html",
    "revision": "1aa23ec551ae433f04bdd12952d6a5db"
  },
  {
    "url": "php/laravel/packages/guides/spatie-feed.html",
    "revision": "791728617daaaabdb8cfa6aae4e51e22"
  },
  {
    "url": "php/laravel/packages/guides/spatie-media-library.html",
    "revision": "7ec3c96cc214c20a214b6d80bae73ce3"
  },
  {
    "url": "php/laravel/packages/guides/spatie-permissions.html",
    "revision": "56e5a4ae849e5434c6186db79ec17ae6"
  },
  {
    "url": "php/laravel/packages/guides/spatie-query-builder.html",
    "revision": "2cab314df1389ce88e0f261abfd50461"
  },
  {
    "url": "php/laravel/packages/guides/spatie-settings.html",
    "revision": "7f03dbd0bc95abb0efda959ea7b71574"
  },
  {
    "url": "php/laravel/packages/index.html",
    "revision": "17c4a1f6a4431b26027dbad290c48809"
  },
  {
    "url": "php/laravel/policies.html",
    "revision": "b30d0847de5c21476f40bb2df621c6c8"
  },
  {
    "url": "php/laravel/relationships/belongs-to-many.html",
    "revision": "181aa06ff16c4bfe71ba155dabbd3681"
  },
  {
    "url": "php/laravel/relationships/index.html",
    "revision": "4a8996ab374f8c316adf13419885cfc0"
  },
  {
    "url": "php/laravel/relationships/many-to-many.html",
    "revision": "7acf1dd1be60db5dec32f62661300030"
  },
  {
    "url": "php/laravel/routes.html",
    "revision": "b937ceee2a30ba2f34c121e35573c83f"
  },
  {
    "url": "php/laravel/task-scheduling.html",
    "revision": "b0b34a7674ea551f925f1cc80e5ae704"
  },
  {
    "url": "php/laravel/testing/controller-methods.html",
    "revision": "2b49ce47c5b7bf3ce8df5ecf5740c97c"
  },
  {
    "url": "php/laravel/testing/index.html",
    "revision": "fe03f0489e51e47e522c1473534cc67f"
  },
  {
    "url": "php/laravel/tinker/index.html",
    "revision": "d6babf3c0f094a89fde4dbb6dd434c45"
  },
  {
    "url": "php/laravel/traits/index.html",
    "revision": "a410b76028e291a97c6aba339d23a6d6"
  },
  {
    "url": "php/laravel/traits/scopes.html",
    "revision": "d62deea29b577aa48269ba9647637e68"
  },
  {
    "url": "php/laravel/validation/form-request.html",
    "revision": "7d13928ce513f10a880e9ab58dacc714"
  },
  {
    "url": "php/laravel/validation/index.html",
    "revision": "74bf85ebcf5428d195c5da0aaa13b362"
  },
  {
    "url": "php/laravel/validation/validation-rules.html",
    "revision": "eb88cfb4db0fd36730bf6931da2ee4c2"
  },
  {
    "url": "php/laravel/views.html",
    "revision": "2b43f59c142308ae67f767c616600b0f"
  },
  {
    "url": "php/nova/fields.html",
    "revision": "3ce925a00c0e1753498514dd37b6ea43"
  },
  {
    "url": "tools/database.html",
    "revision": "235035541403ead0f637dcd89b0b1f92"
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
