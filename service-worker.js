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
    "revision": "d2d0489906bd462b0e46c6cb77eaef5a"
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
    "url": "assets/js/100.e47b4e10.js",
    "revision": "3830504bacd646ba087301d1dac2d08b"
  },
  {
    "url": "assets/js/101.b3300d93.js",
    "revision": "9b8b55ae4f8d3f88985519c06b29e051"
  },
  {
    "url": "assets/js/102.c2ae828c.js",
    "revision": "cc168ff17e6efcb7881f2b274dc61824"
  },
  {
    "url": "assets/js/103.0b307baf.js",
    "revision": "8104aefa8e8f1892a52bd0b8e1fb5671"
  },
  {
    "url": "assets/js/104.26aa3245.js",
    "revision": "d70242319276978f60a93b594d2216c0"
  },
  {
    "url": "assets/js/105.dfdc7c8d.js",
    "revision": "e182a28aced6cce1f746364f884e2619"
  },
  {
    "url": "assets/js/106.c52b3263.js",
    "revision": "0a120940059febb1e905431baeb4ee39"
  },
  {
    "url": "assets/js/107.41579e02.js",
    "revision": "435d3e9de8928c3dd2d5fef95da139ec"
  },
  {
    "url": "assets/js/108.a5c327bc.js",
    "revision": "ad42dde1f27a22c7aaa2f424ea938854"
  },
  {
    "url": "assets/js/109.23a3a8a1.js",
    "revision": "750a1fcbf8ee70333da9ccfd3b379639"
  },
  {
    "url": "assets/js/11.788742d3.js",
    "revision": "5811556242a6d81028611d4c0a27f632"
  },
  {
    "url": "assets/js/110.f4049c72.js",
    "revision": "7a0e951b5c338e610200365494be5e5a"
  },
  {
    "url": "assets/js/111.2951eea3.js",
    "revision": "6d9f63de5075a8c68e4e8000781c50c3"
  },
  {
    "url": "assets/js/112.0f0fcb02.js",
    "revision": "ad79b8f79d41d1fe0b91973068f23200"
  },
  {
    "url": "assets/js/113.dbd6b0f9.js",
    "revision": "8557a2a53b48f76da27d988a987f0634"
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
    "url": "assets/js/24.2ec32c58.js",
    "revision": "6ea578a533dc7f7260032c7df15e7d91"
  },
  {
    "url": "assets/js/25.ffcd6149.js",
    "revision": "b616ca307ff063ede0d8d0bb430698ca"
  },
  {
    "url": "assets/js/26.326cb1fc.js",
    "revision": "0a7c8fd3e5cfd2614d787ab52fd301d5"
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
    "url": "assets/js/34.461b80ea.js",
    "revision": "484bcd492d5ad1711f40804818c565ff"
  },
  {
    "url": "assets/js/35.334293c6.js",
    "revision": "da017f3d185e3f6f161b2e68a35edf40"
  },
  {
    "url": "assets/js/36.fece40aa.js",
    "revision": "1ed8715e03789e9af1744d4abc3db16a"
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
    "url": "assets/js/39.2c4482ca.js",
    "revision": "a8408baacfeb03fe14ff574e12f7b5c1"
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
    "url": "assets/js/41.2b2d7c2c.js",
    "revision": "adf54f8506148b87aeb00a6d89bee720"
  },
  {
    "url": "assets/js/42.51f1c80f.js",
    "revision": "815ed5e26292e9ee0d58d91693026dc2"
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
    "url": "assets/js/50.0b55e6ec.js",
    "revision": "118743456e8d85961fff9c3035a3fe75"
  },
  {
    "url": "assets/js/51.f45d5b4c.js",
    "revision": "415a67ac7323ed08f57da75c587d8ecc"
  },
  {
    "url": "assets/js/52.ba5f986e.js",
    "revision": "7f35594879d984eb80ca1c25450d28b1"
  },
  {
    "url": "assets/js/53.12f46107.js",
    "revision": "3aed760a8dfc883a98f60e48a322c80e"
  },
  {
    "url": "assets/js/54.93e712c5.js",
    "revision": "12a1db58ce2a624d13226a9ec05a9f64"
  },
  {
    "url": "assets/js/55.f4a6c98f.js",
    "revision": "8c082b054964b5ec180d6f26b88aa435"
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
    "url": "assets/js/58.588da123.js",
    "revision": "56027b53620202c1fed9827c61d61d4a"
  },
  {
    "url": "assets/js/59.e0569ce3.js",
    "revision": "7103d766e713ef42b0dfa2ee29636c99"
  },
  {
    "url": "assets/js/6.bb1af159.js",
    "revision": "5ecaf1476e687aadb45fde0e5fdfc1b6"
  },
  {
    "url": "assets/js/60.91d5c925.js",
    "revision": "5422c0147366f9cdbcd8868309a41ded"
  },
  {
    "url": "assets/js/61.ae4f4cac.js",
    "revision": "fd603e595148a96ffacf4828c324e8bf"
  },
  {
    "url": "assets/js/62.f801536d.js",
    "revision": "111e0ddf7e21ff9a9a48b604f28e13d5"
  },
  {
    "url": "assets/js/63.abf23a8a.js",
    "revision": "680ec6cb029931f787e65bf9b4b66419"
  },
  {
    "url": "assets/js/64.44470cbf.js",
    "revision": "11fab34c630c7abdd401d6267db57dd3"
  },
  {
    "url": "assets/js/65.9c9f10b5.js",
    "revision": "87f89d26c180c544c5495bb0148cee4c"
  },
  {
    "url": "assets/js/66.5b591653.js",
    "revision": "0875eee96a4c0c19e3a23d122d27c0d1"
  },
  {
    "url": "assets/js/67.d9de8d2b.js",
    "revision": "86609dfe26c4ae9d443a1cade9b07de3"
  },
  {
    "url": "assets/js/68.d3fa2ad5.js",
    "revision": "9fd24b505a376c2321b57b68f07f81ff"
  },
  {
    "url": "assets/js/69.4d1c79e4.js",
    "revision": "0bf8d39547e0ab33d1ae3ea112214531"
  },
  {
    "url": "assets/js/7.ca5a7b15.js",
    "revision": "7f79cab7262ae574c3075ebbf4c1ac64"
  },
  {
    "url": "assets/js/70.a720aaf3.js",
    "revision": "3890f903f91b2bc88191674c604b2a06"
  },
  {
    "url": "assets/js/71.d69d603c.js",
    "revision": "c83498cbf489dfe3ed90908ef3fd8d9a"
  },
  {
    "url": "assets/js/72.8abb179c.js",
    "revision": "ac246ecae790ddc89bd474867e2abb50"
  },
  {
    "url": "assets/js/73.d6966ec9.js",
    "revision": "5ca90712f1f4af99cedcc4ab4fecc9dd"
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
    "url": "assets/js/76.d834781e.js",
    "revision": "eb78bde7b0ce9ebc8d77adb79724fb26"
  },
  {
    "url": "assets/js/77.636c0ba2.js",
    "revision": "b214aec63ab4e018d73d5d407c9a229a"
  },
  {
    "url": "assets/js/78.2f9562c2.js",
    "revision": "ac5141f345778b3ccf2b736e529b6db6"
  },
  {
    "url": "assets/js/79.849023ff.js",
    "revision": "aabf0b0a08c86ad74bda319cc3a9103c"
  },
  {
    "url": "assets/js/80.d71a8b1a.js",
    "revision": "b035a50be16ceb8dbe197e3a23541391"
  },
  {
    "url": "assets/js/81.29231b0e.js",
    "revision": "bb427eecb47aad65bd98d528c66d1247"
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
    "url": "assets/js/84.d1b5514d.js",
    "revision": "f9aa257522f389288fbe12b7393b97a4"
  },
  {
    "url": "assets/js/85.71bcb829.js",
    "revision": "9ca40c8b1a2ab1022f9c25ae77dd7eaa"
  },
  {
    "url": "assets/js/86.7b342fdd.js",
    "revision": "f8b8c57e277818e6ed6a095d0090eb85"
  },
  {
    "url": "assets/js/87.806eb78d.js",
    "revision": "951a6c86e8e2cc93e1c3df1c7fbabc48"
  },
  {
    "url": "assets/js/88.5bf52f28.js",
    "revision": "b04d7b3058e966df7bd360249a4dfbc8"
  },
  {
    "url": "assets/js/89.7fe8f21f.js",
    "revision": "415ea0bf66c76b7a6f8789dfef10cf0c"
  },
  {
    "url": "assets/js/90.c99b44d9.js",
    "revision": "c1325940222cdbd153e549a58ad98780"
  },
  {
    "url": "assets/js/91.a97437b9.js",
    "revision": "46304056a34587dc3d8f8ad505183d42"
  },
  {
    "url": "assets/js/92.335955e9.js",
    "revision": "4cc2f41b8f01abb8e7fb0cc22bc39d23"
  },
  {
    "url": "assets/js/93.31d6cfcd.js",
    "revision": "f276a6c524b253e0f938914a739da979"
  },
  {
    "url": "assets/js/94.cdd50d30.js",
    "revision": "77148459d62391995e127183e9418f46"
  },
  {
    "url": "assets/js/95.c3b55886.js",
    "revision": "360e7ad4f77b93063ce0fa3e1f79a5e8"
  },
  {
    "url": "assets/js/96.8fd547bc.js",
    "revision": "96c8db8880277f4178d6487421c83231"
  },
  {
    "url": "assets/js/97.04f786cd.js",
    "revision": "735572f6ae2e5b6826bb00aa2c150e33"
  },
  {
    "url": "assets/js/98.7c9850ff.js",
    "revision": "f8c44220ea7af4493e81c6622933899e"
  },
  {
    "url": "assets/js/99.b4d4d61c.js",
    "revision": "b5dc44d573dd7cec74920e75710164cd"
  },
  {
    "url": "assets/js/app.832be2bd.js",
    "revision": "fea5e84401ad14de820aef8b208ad37a"
  },
  {
    "url": "assets/js/vendors~docsearch.0644ee0a.js",
    "revision": "b77890ee16800d927f76d8f8f61a0875"
  },
  {
    "url": "draft/quick-notes.html",
    "revision": "b76791d9840acb4ae2927803a4e83c2d"
  },
  {
    "url": "flux-ui/dropdowns.html",
    "revision": "5069eaac970b9cfc5bcb9ea823f4b9b9"
  },
  {
    "url": "flux-ui/tables.html",
    "revision": "6884181ad243271575eaafd435078ed4"
  },
  {
    "url": "html/bootstrap/cards.html",
    "revision": "f9e26f802a24088b3170b94f6c1c5db9"
  },
  {
    "url": "html/bootstrap/forms/checks-radios.html",
    "revision": "aa7dc59fc8441b3fe6987c4fdddd9822"
  },
  {
    "url": "html/bootstrap/forms/floating-labels.html",
    "revision": "44c3cd4ad0bec0677ed7f7be37883338"
  },
  {
    "url": "html/bootstrap/forms/form-control.html",
    "revision": "bbcb9c6288315fee1280253534dfafb7"
  },
  {
    "url": "html/bootstrap/forms/index.html",
    "revision": "eec2f61704df547e5b4fbee950e498d2"
  },
  {
    "url": "html/bootstrap/forms/layout.html",
    "revision": "c02bf5504676947e456a0e88fb6e2d8a"
  },
  {
    "url": "html/bootstrap/forms/select.html",
    "revision": "b499306e701bf1840f63cf4ab59709d3"
  },
  {
    "url": "html/bootstrap/forms/validation.html",
    "revision": "cb52a8758731c47a562ca3c22db4a2ff"
  },
  {
    "url": "html/bootstrap/index.html",
    "revision": "a0be0a020f8ad311970e137e9a34c000"
  },
  {
    "url": "html/bootstrap/tables.html",
    "revision": "46c0a70735292e1e680787b926b40367"
  },
  {
    "url": "html/tailwind/customization/index.html",
    "revision": "67228ec5aa5ef079b2f81c3231077878"
  },
  {
    "url": "html/tailwind/customization/presets.html",
    "revision": "ec8933ee85d2e96c35a677b3cd4e6afd"
  },
  {
    "url": "html/tailwind/directives.html",
    "revision": "fccd7ac56834af3febde381642c5c0a2"
  },
  {
    "url": "html/tailwind/index.html",
    "revision": "9d441184db038afb3990fe99d043de6e"
  },
  {
    "url": "htmx/index.html",
    "revision": "8d5cb04efb615d70339fe4efc6e3e783"
  },
  {
    "url": "index.html",
    "revision": "382b21ee566fba66117ae17034f7e052"
  },
  {
    "url": "inertia/live-props.html",
    "revision": "68e20b92a826d0a061b9036a11123059"
  },
  {
    "url": "javascript/alpinejs/index.html",
    "revision": "9e54df597274afacc471903643f9979d"
  },
  {
    "url": "javascript/alpinejs/textarea.html",
    "revision": "5fc3ae4e8730489e500d9bb874e67601"
  },
  {
    "url": "javascript/modules.html",
    "revision": "4743eeaf7e578a4026bb99bd25e1b193"
  },
  {
    "url": "livewire/components/index.html",
    "revision": "7aa754c0ecdad463a54693186f5c769c"
  },
  {
    "url": "livewire/components/pagination.html",
    "revision": "2fa20ff02548ddf174a1f7925e385022"
  },
  {
    "url": "livewire/installation.html",
    "revision": "96f35fe22af755651b0d42edc84a9ce3"
  },
  {
    "url": "nextjs/index.html",
    "revision": "170b756db855cf7e7a4edd6cf4552a58"
  },
  {
    "url": "nextjs/laravel-sanctum-auth.html",
    "revision": "06a26bf478772372cc94e0925b64d919"
  },
  {
    "url": "other/priority-levels.html",
    "revision": "c410af6dcdb0bb44cc696c4df99e3028"
  },
  {
    "url": "other/static-site-generators.html",
    "revision": "60ad294de386715661f7045780d62656"
  },
  {
    "url": "php/arrays/sorting-arrays.html",
    "revision": "ff4c812fa23144695bd0e3108c9cde95"
  },
  {
    "url": "php/classes/pagination.html",
    "revision": "f4e52cf4b09ca021e1d2fa2ce3edab20"
  },
  {
    "url": "php/classes/pdo.html",
    "revision": "0f61d09f2eff9b8b0c44173bd1ddfa26"
  },
  {
    "url": "php/laravel/authorization/blade-directives/can.html",
    "revision": "29a144c1024bf40fc57446090b0d926c"
  },
  {
    "url": "php/laravel/authorization/blade-directives/canany.html",
    "revision": "9705129f7770dd636d5c5fc48e7ae222"
  },
  {
    "url": "php/laravel/authorization/blade-directives/cannot.html",
    "revision": "1219958420c87701dfd05dae6eccc14c"
  },
  {
    "url": "php/laravel/authorization/blade-directives/index.html",
    "revision": "dc044fd418a04a3eb6d155e9749e8b8c"
  },
  {
    "url": "php/laravel/authorization/gates.html",
    "revision": "d36b9354a1a114989ca9ac8f7c08f5c2"
  },
  {
    "url": "php/laravel/authorization/index.html",
    "revision": "ad748882db60d3c625d31fc9cda44733"
  },
  {
    "url": "php/laravel/authorization/policies.html",
    "revision": "6e4fee8c8e480b40a53eeaadd98496d0"
  },
  {
    "url": "php/laravel/blade/components.html",
    "revision": "a1f1d92b31aa91861e786489a6e16a63"
  },
  {
    "url": "php/laravel/blade/directives.html",
    "revision": "7393efcc9ecd6d08ccf765a919681005"
  },
  {
    "url": "php/laravel/blade/index.html",
    "revision": "e9cbda5be507bd67219f4e841f7e6157"
  },
  {
    "url": "php/laravel/controller.html",
    "revision": "b7ebdb31f2e26039e93652700d89f157"
  },
  {
    "url": "php/laravel/database/factories.html",
    "revision": "825d8087d1f545fec6f0db045785f916"
  },
  {
    "url": "php/laravel/database/index.html",
    "revision": "a82cf737e0fd2663261db75cfc594cf4"
  },
  {
    "url": "php/laravel/database/migrations.html",
    "revision": "2d6b6bffb074d043c5684864c934a7fb"
  },
  {
    "url": "php/laravel/database/model.html",
    "revision": "3910422fd3dbf7e58d43589a06c9b731"
  },
  {
    "url": "php/laravel/database/observer.html",
    "revision": "814f5aa2827057d2366ed0bd438f8da5"
  },
  {
    "url": "php/laravel/database/queries.html",
    "revision": "12236840a1b159dadf69a88edd5a999d"
  },
  {
    "url": "php/laravel/database/quiet-model-events.html",
    "revision": "baa10b09f20a92dc72498d568658dbe7"
  },
  {
    "url": "php/laravel/database/read-replicas.html",
    "revision": "deced0e97cd2d84e7dba9e40f1912e26"
  },
  {
    "url": "php/laravel/database/scopes.html",
    "revision": "06f9491d8cd08be4d28a03ed168e4ed7"
  },
  {
    "url": "php/laravel/database/seeders.html",
    "revision": "0b46f0f8a755ae243d0352f0970c3b2c"
  },
  {
    "url": "php/laravel/database/transactions.html",
    "revision": "566d87c4c2ed8a4918a5282a18a3d694"
  },
  {
    "url": "php/laravel/enums.html",
    "revision": "460391d5cad3ea16628888a539836a38"
  },
  {
    "url": "php/laravel/index.html",
    "revision": "262f41a42b887972b4b157767a2aa357"
  },
  {
    "url": "php/laravel/middleware.html",
    "revision": "b37480a8d6041fefaa7348433e9720f9"
  },
  {
    "url": "php/laravel/package-development/index.html",
    "revision": "3eb157793c900babb64c53dd685a6c8c"
  },
  {
    "url": "php/laravel/package-development/laravel-packager.html",
    "revision": "3de9870e9830951e418dd5727a8eb2ab"
  },
  {
    "url": "php/laravel/package-development/views.html",
    "revision": "f7d77601f748d0a108572520dcdaaa72"
  },
  {
    "url": "php/laravel/packages/guides/index.html",
    "revision": "82853abeda6c9a021e36a1c536dbc22d"
  },
  {
    "url": "php/laravel/packages/guides/laravel-pint.html",
    "revision": "ce7cbc060001e0d5317e977fd536a37a"
  },
  {
    "url": "php/laravel/packages/guides/spatie-activity-log.html",
    "revision": "09e14d001448e1709db7dbb36276fa00"
  },
  {
    "url": "php/laravel/packages/guides/spatie-comments.html",
    "revision": "0915d365f5587d15141637985f889a94"
  },
  {
    "url": "php/laravel/packages/guides/spatie-feed.html",
    "revision": "72ca9f857b47de3660895ae4959469ec"
  },
  {
    "url": "php/laravel/packages/guides/spatie-media-library.html",
    "revision": "f5bc8c5a41685b0b13606f1b37108eed"
  },
  {
    "url": "php/laravel/packages/guides/spatie-permissions.html",
    "revision": "368413aa72d54e724aca99f488805179"
  },
  {
    "url": "php/laravel/packages/guides/spatie-query-builder.html",
    "revision": "5b4f91f15a9cd88b47cd9c768fd2cfdd"
  },
  {
    "url": "php/laravel/packages/guides/spatie-settings.html",
    "revision": "143bfd4e6e97934af6ee5f597eb6dee6"
  },
  {
    "url": "php/laravel/packages/index.html",
    "revision": "f2dc9b0c67768b30e6b0a8668e0a1b5a"
  },
  {
    "url": "php/laravel/pipelines.html",
    "revision": "80eea0f4881c2952a2bbb7f96cdd0e4b"
  },
  {
    "url": "php/laravel/policies.html",
    "revision": "23720d1cb456c8ec8214e95c6c85bbb2"
  },
  {
    "url": "php/laravel/queues.html",
    "revision": "23b14f5f533b09f5a7239eb36bf39146"
  },
  {
    "url": "php/laravel/relationships/belongs-to-many.html",
    "revision": "4385b8f5efdac79776a622caa8c297ef"
  },
  {
    "url": "php/laravel/relationships/index.html",
    "revision": "45985ecd17e0893e31a17772b8517307"
  },
  {
    "url": "php/laravel/relationships/many-to-many.html",
    "revision": "40e6e153a3def578fde8ef48e8b2bbe2"
  },
  {
    "url": "php/laravel/request-input.html",
    "revision": "9e60ceab013ad1fef1cb21e00d737f32"
  },
  {
    "url": "php/laravel/routes.html",
    "revision": "4b919c6621b54597ca0c89ecd3bef173"
  },
  {
    "url": "php/laravel/task-scheduling.html",
    "revision": "e77d5ea7c758a0f190473f3e07d7a44d"
  },
  {
    "url": "php/laravel/testing/controller-methods.html",
    "revision": "ffc7e7f17b8f9d540469fc3bac408403"
  },
  {
    "url": "php/laravel/testing/index.html",
    "revision": "37f830300839be902639712564741603"
  },
  {
    "url": "php/laravel/tinker/index.html",
    "revision": "6c4cc8c35386211770aa1dfcf40ebbab"
  },
  {
    "url": "php/laravel/traits/index.html",
    "revision": "bc8b2591570dbb1ba1a03598a08588d0"
  },
  {
    "url": "php/laravel/traits/scopes.html",
    "revision": "3a268760c9f0358e28c701efcb4af97b"
  },
  {
    "url": "php/laravel/validation/fluent-rule-builders.html",
    "revision": "2b670c9216f85d85002fd55698bd09f2"
  },
  {
    "url": "php/laravel/validation/form-request.html",
    "revision": "68350171400523507572b95f5a4dbe51"
  },
  {
    "url": "php/laravel/validation/index.html",
    "revision": "187c0fb9a758513f059014c34da13645"
  },
  {
    "url": "php/laravel/validation/validation-rules.html",
    "revision": "bad203c20b69c559089fff24408ee42c"
  },
  {
    "url": "php/laravel/views.html",
    "revision": "14ba3ba394f17666ccb267fd64276eaf"
  },
  {
    "url": "php/nova/fields.html",
    "revision": "89c5c009fc04207f47a1d05acdc17340"
  },
  {
    "url": "tools/database.html",
    "revision": "8f0c70cf257bf0a75828860c9a3022d0"
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
