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
    "revision": "3543a4fe1e2e2c24b9da57c5c4a3a146"
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
    "url": "assets/js/101.28c2a7fd.js",
    "revision": "d307f71e28603dc9ff6c66eb13be6700"
  },
  {
    "url": "assets/js/102.1e8edcc3.js",
    "revision": "e7d05bc734e27c3ec554eac1cb922130"
  },
  {
    "url": "assets/js/103.97818741.js",
    "revision": "ac44e97d677e03776ab6cbdad6751e4e"
  },
  {
    "url": "assets/js/104.5ed3cc6e.js",
    "revision": "b380dcbc1fce83c07f53a4e15d7ac2df"
  },
  {
    "url": "assets/js/105.4d148658.js",
    "revision": "657a784b5f17d7f00001127b4eaa6204"
  },
  {
    "url": "assets/js/106.e77c223f.js",
    "revision": "ccf49e4121384798532c32963b0de3d7"
  },
  {
    "url": "assets/js/107.a9d90f46.js",
    "revision": "c8fd3b77ae892494185e41bc1e044fb8"
  },
  {
    "url": "assets/js/108.e4f780ec.js",
    "revision": "b13ba8d1cae7d9eb8acba21e7386d23c"
  },
  {
    "url": "assets/js/109.f6976565.js",
    "revision": "5eeaacc9264fbc91390d51064e7939e1"
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
    "url": "assets/js/23.c09eb83e.js",
    "revision": "0a73195b21899c845fda74d4b79235b1"
  },
  {
    "url": "assets/js/24.2719c0e5.js",
    "revision": "5ba1b0914bf3889cf4372b05a37ba1d4"
  },
  {
    "url": "assets/js/25.a24d0905.js",
    "revision": "0db756bd2063e87a8dca9c5671c49d06"
  },
  {
    "url": "assets/js/26.a6866ec8.js",
    "revision": "3667a503cf45be97b5e8ed1da143e625"
  },
  {
    "url": "assets/js/27.76c39260.js",
    "revision": "d7b2f1454f1181863c7f9397cc4e3f3e"
  },
  {
    "url": "assets/js/28.f2463ff6.js",
    "revision": "b2a3ed333cfdeb49bafa38da9f2eb468"
  },
  {
    "url": "assets/js/29.820c735b.js",
    "revision": "bfdca0691c99a5ede20c22b18ffbfc6b"
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
    "url": "assets/js/31.e5272ab0.js",
    "revision": "00d5fde0daf9765a0ecf923fa58e849a"
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
    "url": "assets/js/41.23fe9fff.js",
    "revision": "4b9955203e4703167d6292875d624aff"
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
    "url": "assets/js/44.1b976a95.js",
    "revision": "a405a5ae9ce98b9ca7b7859901d47f81"
  },
  {
    "url": "assets/js/45.0a9a958b.js",
    "revision": "344cb2e101c39362a9502f6685d04d17"
  },
  {
    "url": "assets/js/46.3863d3b7.js",
    "revision": "6d19d7f8e566ba2088d939763af32da1"
  },
  {
    "url": "assets/js/47.9634ed20.js",
    "revision": "62a005bbefc568c5e1e4099e41c1062a"
  },
  {
    "url": "assets/js/48.1cabdef1.js",
    "revision": "bf3a945bf2f3358bc962d4ad9be535ce"
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
    "url": "assets/js/51.65b646e7.js",
    "revision": "0ca45f4a287fbacd667e137e9272fc1b"
  },
  {
    "url": "assets/js/52.55bed9f2.js",
    "revision": "40eed5e6e426e6175a65bfc8b0c2f683"
  },
  {
    "url": "assets/js/53.68859953.js",
    "revision": "e8cae047d87b01a7a0a8956ddbaa9ee8"
  },
  {
    "url": "assets/js/54.bb615190.js",
    "revision": "720ad1da20f94609faf81df547354d9c"
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
    "url": "assets/js/64.12914789.js",
    "revision": "e517de2f4da245fbc484577f5f56204b"
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
    "url": "assets/js/67.8ac76011.js",
    "revision": "c1126f2753e25df86f0a1b989668a563"
  },
  {
    "url": "assets/js/68.eef73336.js",
    "revision": "77527820ac92e90122c3ffcddcca6722"
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
    "url": "assets/js/70.5e1b8319.js",
    "revision": "a71e732e70c896df0cfcb718d17be1d5"
  },
  {
    "url": "assets/js/71.faa17539.js",
    "revision": "3c5a2e775a9c031f091d48476506f395"
  },
  {
    "url": "assets/js/72.d59f2479.js",
    "revision": "9a7c27485e35a339b6b9139e18e3c13d"
  },
  {
    "url": "assets/js/73.f46c7bab.js",
    "revision": "2ae9994c43c211b6fb264fe2cc7e17fc"
  },
  {
    "url": "assets/js/74.bb7ccbb6.js",
    "revision": "2d271ea4fcf63fd1a2f0a96812c31bb8"
  },
  {
    "url": "assets/js/75.67659392.js",
    "revision": "a6d9d35e227f92c9ec42c1847f31cf5e"
  },
  {
    "url": "assets/js/76.920c2ead.js",
    "revision": "e77f832ed4170fc48089667db39ff8bc"
  },
  {
    "url": "assets/js/77.99126955.js",
    "revision": "e9f45d6d488c064f9856bfdf7e51c927"
  },
  {
    "url": "assets/js/78.0ba2ac19.js",
    "revision": "41a7e544552ca44cff76921a6ee66651"
  },
  {
    "url": "assets/js/79.b3ed0091.js",
    "revision": "3f3034025112613bb275b49e60df2a14"
  },
  {
    "url": "assets/js/80.b177753d.js",
    "revision": "41334603527ef79b6628e3890dca17c7"
  },
  {
    "url": "assets/js/81.b669ad3f.js",
    "revision": "ab9be4927cfbc34b7404c5b874dc946b"
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
    "url": "assets/js/89.976df460.js",
    "revision": "3f19486e79527ac0ef1ea6ce3368040b"
  },
  {
    "url": "assets/js/90.25d21ae4.js",
    "revision": "19ab04f7bba2de2be80b9d712c632cbc"
  },
  {
    "url": "assets/js/91.79080b69.js",
    "revision": "60df55816d9e8cf68e2ab3a402fba890"
  },
  {
    "url": "assets/js/92.ef3e34b5.js",
    "revision": "455f06fa7b5180d2e3c84e6a5b6243ed"
  },
  {
    "url": "assets/js/93.6fbe6446.js",
    "revision": "f430b56807ce8b7979343312b556bf7d"
  },
  {
    "url": "assets/js/94.4675a7e8.js",
    "revision": "9219c46e3ffe37da5961beab9c6683ef"
  },
  {
    "url": "assets/js/95.2d396b32.js",
    "revision": "79017dd95b8e4c971599f7c4e58b92eb"
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
    "url": "assets/js/98.cc864347.js",
    "revision": "747ea583db15490a34b233cb0cde5689"
  },
  {
    "url": "assets/js/99.0da21394.js",
    "revision": "dfb9e01108ec774e2b4a008859619679"
  },
  {
    "url": "assets/js/app.d4cf1f57.js",
    "revision": "0ec4da1a809e375008b80861d78100a7"
  },
  {
    "url": "assets/js/vendors~docsearch.0644ee0a.js",
    "revision": "b77890ee16800d927f76d8f8f61a0875"
  },
  {
    "url": "draft/quick-notes.html",
    "revision": "f55732627f238b5f26a6af216deb528c"
  },
  {
    "url": "flux-ui/dropdowns.html",
    "revision": "4aace1c02c216255b65778bba1c7acf9"
  },
  {
    "url": "flux-ui/tables.html",
    "revision": "fa43e53edcb1c868e8c84868331ac1a5"
  },
  {
    "url": "html/bootstrap/cards.html",
    "revision": "37be93c1bf45a6f00bef517c32eb6076"
  },
  {
    "url": "html/bootstrap/forms/checks-radios.html",
    "revision": "16e5bc89103db18039185206009ef9f2"
  },
  {
    "url": "html/bootstrap/forms/floating-labels.html",
    "revision": "b54ff38f5d6814781b985c4b742ee8d0"
  },
  {
    "url": "html/bootstrap/forms/form-control.html",
    "revision": "c4d5c1878cd0f2e499f3c3b3ed7a9e3a"
  },
  {
    "url": "html/bootstrap/forms/index.html",
    "revision": "0341ad8f0542adf0f9fd67cb80a8dcc2"
  },
  {
    "url": "html/bootstrap/forms/layout.html",
    "revision": "f991335cca72351e2735587a4f7fda5d"
  },
  {
    "url": "html/bootstrap/forms/select.html",
    "revision": "ec23e608970e21e4567d43249a69a467"
  },
  {
    "url": "html/bootstrap/forms/validation.html",
    "revision": "581e5e98f185de451c596737e6731179"
  },
  {
    "url": "html/bootstrap/index.html",
    "revision": "11bc2541d6548f26f3864184f46e2635"
  },
  {
    "url": "html/bootstrap/tables.html",
    "revision": "d5a7a568bee63288a28d66f449741acb"
  },
  {
    "url": "html/tailwind/customization/index.html",
    "revision": "91ab23aecbb7f94cdd7cb30aa73cb584"
  },
  {
    "url": "html/tailwind/customization/presets.html",
    "revision": "2a863bf5b340956801c6115728f241cc"
  },
  {
    "url": "html/tailwind/directives.html",
    "revision": "387b1d49ce538c34f5cd98fcbb5b65e6"
  },
  {
    "url": "html/tailwind/index.html",
    "revision": "95109f5df4d27b7b338ef4cc213d18fd"
  },
  {
    "url": "htmx/index.html",
    "revision": "5e5b8f41f9dce235ca0a5e2f19f935ab"
  },
  {
    "url": "index.html",
    "revision": "32bd91495f95aa7f4327ff96ccaa9458"
  },
  {
    "url": "javascript/alpinejs/index.html",
    "revision": "5b0a4a041557de328c82381e6f6e1e5d"
  },
  {
    "url": "javascript/alpinejs/textarea.html",
    "revision": "dcb40a8e777b4a3955b6cb30cf7dd0d6"
  },
  {
    "url": "javascript/modules.html",
    "revision": "e1926d0f3e8d300ec481af73dbfb8c43"
  },
  {
    "url": "livewire/components/index.html",
    "revision": "c4a592831428e1bd0486bb5414867a97"
  },
  {
    "url": "livewire/components/pagination.html",
    "revision": "8b95633b0f1aa2403c96599983b25014"
  },
  {
    "url": "livewire/installation.html",
    "revision": "6e6d8186a082b950e024dbaf5ce81641"
  },
  {
    "url": "nextjs/index.html",
    "revision": "536c95a6a5aafaf193a78897c656eb11"
  },
  {
    "url": "nextjs/laravel-sanctum-auth.html",
    "revision": "2716bba1c32192c296801adf779472fe"
  },
  {
    "url": "other/priority-levels.html",
    "revision": "241f8982a8649fac1d1d1af78729ccb8"
  },
  {
    "url": "other/static-site-generators.html",
    "revision": "ecc8f108eb16d37dd121fda727e82524"
  },
  {
    "url": "php/arrays/sorting-arrays.html",
    "revision": "f202b315a1b5a1bd3f38b0ac10098435"
  },
  {
    "url": "php/classes/pagination.html",
    "revision": "9011991ce30af3aa6a25c696f2a908c1"
  },
  {
    "url": "php/classes/pdo.html",
    "revision": "74278470c55ebddbd7f0603555421011"
  },
  {
    "url": "php/laravel/authorization/blade-directives/can.html",
    "revision": "4d43d86047b3dbe49d46cf7227c59ec3"
  },
  {
    "url": "php/laravel/authorization/blade-directives/canany.html",
    "revision": "bf4966eb9e61bd278a1d9cfa0478acaf"
  },
  {
    "url": "php/laravel/authorization/blade-directives/cannot.html",
    "revision": "6e0c5ad4bfa4021c662d6e5938d4af9d"
  },
  {
    "url": "php/laravel/authorization/blade-directives/index.html",
    "revision": "5bac7f52e7ebabbd1fef5dde4de8cc19"
  },
  {
    "url": "php/laravel/authorization/gates.html",
    "revision": "8f1cbc8a020f472e4d293dcc1881ba8c"
  },
  {
    "url": "php/laravel/authorization/index.html",
    "revision": "bebf1fe15c373de711e030f1c27eb323"
  },
  {
    "url": "php/laravel/authorization/policies.html",
    "revision": "71ff4180648106393bdb8ec87ce8460a"
  },
  {
    "url": "php/laravel/blade/components.html",
    "revision": "5be045a0697e7b9f58c0780a907b188e"
  },
  {
    "url": "php/laravel/blade/directives.html",
    "revision": "d1faf577b9e9936b6fc18c00110253ba"
  },
  {
    "url": "php/laravel/blade/index.html",
    "revision": "22cbb6c2eb2109be864c8b7e8c30c302"
  },
  {
    "url": "php/laravel/controller.html",
    "revision": "1915fc22ba5af5ea09f66f4831fde412"
  },
  {
    "url": "php/laravel/database/factories.html",
    "revision": "cd583794bb16a5c3fc2ed462c234cdc8"
  },
  {
    "url": "php/laravel/database/index.html",
    "revision": "0e55497f4b9dfeb4ed753ccc5b57d7e0"
  },
  {
    "url": "php/laravel/database/migrations.html",
    "revision": "0d456a47e58f86103e6c37cfe4b1b79e"
  },
  {
    "url": "php/laravel/database/model.html",
    "revision": "e1cc016fabb363d507cb6632e792278c"
  },
  {
    "url": "php/laravel/database/observer.html",
    "revision": "7737f102ccca4f747358c3c464c20750"
  },
  {
    "url": "php/laravel/database/queries.html",
    "revision": "6aa9ee977568b0e3824593355d9aaa0d"
  },
  {
    "url": "php/laravel/database/quiet-model-events.html",
    "revision": "eb2cb31f43960cd520364d26393806c3"
  },
  {
    "url": "php/laravel/database/scopes.html",
    "revision": "e44f255468a4ee40d6ca0929d44d6762"
  },
  {
    "url": "php/laravel/database/seeders.html",
    "revision": "ab87aa8f373eb34ea5635c84d5ebadf1"
  },
  {
    "url": "php/laravel/database/transactions.html",
    "revision": "973753441419557dec79ec46cb5fcca3"
  },
  {
    "url": "php/laravel/enums.html",
    "revision": "8e5a536e9970e5b5894e0a13a8ca27aa"
  },
  {
    "url": "php/laravel/index.html",
    "revision": "9e80ff51599aa661aacc9a1be097b840"
  },
  {
    "url": "php/laravel/package-development/index.html",
    "revision": "86ec6a2080ca1c509d01dc60f66e660a"
  },
  {
    "url": "php/laravel/package-development/laravel-packager.html",
    "revision": "fe18d8e6d46ad27574ac16589dd74876"
  },
  {
    "url": "php/laravel/package-development/views.html",
    "revision": "e67e3ca139f3b656861fe6da9223840d"
  },
  {
    "url": "php/laravel/packages/guides/index.html",
    "revision": "a6e62572cc1ec5c75dbc6166abf7b748"
  },
  {
    "url": "php/laravel/packages/guides/laravel-pint.html",
    "revision": "7c7a7c630ba72f801788f61b4ca014c9"
  },
  {
    "url": "php/laravel/packages/guides/spatie-activity-log.html",
    "revision": "3b4bac6508cc0f14412978b21a7872b5"
  },
  {
    "url": "php/laravel/packages/guides/spatie-comments.html",
    "revision": "d46ee0a53f27d46795d3473f4c573a20"
  },
  {
    "url": "php/laravel/packages/guides/spatie-feed.html",
    "revision": "2c8257ac58218bf571c49e83f26493f9"
  },
  {
    "url": "php/laravel/packages/guides/spatie-media-library.html",
    "revision": "342f91e22d9829e48f3025a1fa74416f"
  },
  {
    "url": "php/laravel/packages/guides/spatie-permissions.html",
    "revision": "4ea661e139608867440db1253ecca9e9"
  },
  {
    "url": "php/laravel/packages/guides/spatie-query-builder.html",
    "revision": "ff22daea3460c4e609e39f7fc65c1b45"
  },
  {
    "url": "php/laravel/packages/guides/spatie-settings.html",
    "revision": "61d56758ecf603e1f6775c6528721b7d"
  },
  {
    "url": "php/laravel/packages/index.html",
    "revision": "975bf33afa2eb8e6115ebac1c22cead7"
  },
  {
    "url": "php/laravel/pipelines.html",
    "revision": "eef665c8f6b0bed7fff8cf3bcfbfec70"
  },
  {
    "url": "php/laravel/policies.html",
    "revision": "1ae5c22072f1d3aa3766b2315090a192"
  },
  {
    "url": "php/laravel/queues.html",
    "revision": "550b829501f6afb2a1053c4305dfa06b"
  },
  {
    "url": "php/laravel/relationships/belongs-to-many.html",
    "revision": "f0852a8f6f37d78bea1e502415711af3"
  },
  {
    "url": "php/laravel/relationships/index.html",
    "revision": "242f120abd97866648471a5b1ebfa95c"
  },
  {
    "url": "php/laravel/relationships/many-to-many.html",
    "revision": "94a018723474c931753448a94f1e3ada"
  },
  {
    "url": "php/laravel/routes.html",
    "revision": "0f65a34c4bab7fb172fdcf00200a8e8f"
  },
  {
    "url": "php/laravel/task-scheduling.html",
    "revision": "8de83805312255d920587dcd27876978"
  },
  {
    "url": "php/laravel/testing/controller-methods.html",
    "revision": "5c752e6aa1a3ec8b038755dcd9d8e67e"
  },
  {
    "url": "php/laravel/testing/index.html",
    "revision": "65f007abcda3332f076cb80728f2ec28"
  },
  {
    "url": "php/laravel/tinker/index.html",
    "revision": "b97ce82d9624523355725cff95b2448b"
  },
  {
    "url": "php/laravel/traits/index.html",
    "revision": "bf416e7eec0573be55a9f3ee0cccc564"
  },
  {
    "url": "php/laravel/traits/scopes.html",
    "revision": "f3f784e51ae5bd0da723bbb5e16a3c88"
  },
  {
    "url": "php/laravel/validation/fluent-rule-builders.html",
    "revision": "829b37843f380673b4c89cecebc58240"
  },
  {
    "url": "php/laravel/validation/form-request.html",
    "revision": "16e5c43f6f8648c398bc05f67e3a6729"
  },
  {
    "url": "php/laravel/validation/index.html",
    "revision": "c03d58c5fa9360d116462172a26faf56"
  },
  {
    "url": "php/laravel/validation/validation-rules.html",
    "revision": "03825fa3d0246238d4ea5a2792bd2709"
  },
  {
    "url": "php/laravel/views.html",
    "revision": "669926bde21aab8742fc4c1bb6794cda"
  },
  {
    "url": "php/nova/fields.html",
    "revision": "1eaaa572874eff6cd5b6f3603609604a"
  },
  {
    "url": "tools/database.html",
    "revision": "2b90f6118b7d9e6635a5b18933dee446"
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
