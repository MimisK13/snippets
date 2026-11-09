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
    "revision": "605655941198f327f7ec73684fedf3a9"
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
    "url": "assets/js/101.f676c934.js",
    "revision": "0cc7bbd6325da95052d0baafce77b047"
  },
  {
    "url": "assets/js/102.c2ae828c.js",
    "revision": "cc168ff17e6efcb7881f2b274dc61824"
  },
  {
    "url": "assets/js/103.a92672fd.js",
    "revision": "a44d9e9f27419599073f0956ad9b5625"
  },
  {
    "url": "assets/js/104.de144ff0.js",
    "revision": "c3967ec6b6911cde34d404fd0c596a79"
  },
  {
    "url": "assets/js/105.322689f8.js",
    "revision": "bcc0edd0a6060e8346755ee4941edfb4"
  },
  {
    "url": "assets/js/106.c52b3263.js",
    "revision": "0a120940059febb1e905431baeb4ee39"
  },
  {
    "url": "assets/js/107.5632237b.js",
    "revision": "d82ed6f69bd495070a71b388984539d5"
  },
  {
    "url": "assets/js/108.7e53f07b.js",
    "revision": "aa12580c998fd08dbd540a9a83d61a5b"
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
    "url": "assets/js/111.2951eea3.js",
    "revision": "6d9f63de5075a8c68e4e8000781c50c3"
  },
  {
    "url": "assets/js/112.dde51df2.js",
    "revision": "5c30d1fb1378e75835e111b185c422d6"
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
    "url": "assets/js/24.2ec32c58.js",
    "revision": "6ea578a533dc7f7260032c7df15e7d91"
  },
  {
    "url": "assets/js/25.b598904c.js",
    "revision": "ea28929e8bbf9cd04f1897428b7d649a"
  },
  {
    "url": "assets/js/26.a2182789.js",
    "revision": "5c0f45d67e28de823bdbe3edece26ee0"
  },
  {
    "url": "assets/js/27.76c39260.js",
    "revision": "d7b2f1454f1181863c7f9397cc4e3f3e"
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
    "url": "assets/js/41.804b5854.js",
    "revision": "caee2a97cfd8e606b08f94ac6b344cef"
  },
  {
    "url": "assets/js/42.c47375ea.js",
    "revision": "b6b558f13389155c815cf936644682ee"
  },
  {
    "url": "assets/js/43.76bb6a61.js",
    "revision": "a72b91fe76082283f3096c0794132acf"
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
    "url": "assets/js/48.4e9a70bf.js",
    "revision": "d3edfd08a336dd3a932247bd4a360af8"
  },
  {
    "url": "assets/js/49.315fca57.js",
    "revision": "97c95e2e2351901b2c96e5dfc12aa120"
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
    "url": "assets/js/52.2a914ee1.js",
    "revision": "fd7fd4ddfdb7bf3c358f0ec52357b57c"
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
    "url": "assets/js/55.2793d654.js",
    "revision": "fa74ffef9fe142deb144d08a0837bdee"
  },
  {
    "url": "assets/js/56.85b6147c.js",
    "revision": "d1ccf56dffdf53cf4497282cf5bafa10"
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
    "url": "assets/js/61.ae4f4cac.js",
    "revision": "fd603e595148a96ffacf4828c324e8bf"
  },
  {
    "url": "assets/js/62.9e5958e6.js",
    "revision": "db9ed2a5ac8f8d94f026a3c8b3b592ff"
  },
  {
    "url": "assets/js/63.65e65f9d.js",
    "revision": "0ff5133b5220cf6f90c4b77d69075068"
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
    "url": "assets/js/66.43b9c986.js",
    "revision": "5ba8d263c65451172bd4b6ac511aa359"
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
    "url": "assets/js/69.a949264a.js",
    "revision": "119cf7d0be763c64ddc8ddd73b42b402"
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
    "url": "assets/js/71.d69d603c.js",
    "revision": "c83498cbf489dfe3ed90908ef3fd8d9a"
  },
  {
    "url": "assets/js/72.2589f95e.js",
    "revision": "03f11eeea6f720552627d12f7dde8111"
  },
  {
    "url": "assets/js/73.7b0d8c47.js",
    "revision": "b5fb86d33271b04a3aa78a25c50b92f8"
  },
  {
    "url": "assets/js/74.330dfa41.js",
    "revision": "7118f8f2b8b92b00e2897b63bdc508f1"
  },
  {
    "url": "assets/js/75.c8affeaf.js",
    "revision": "461613ff374d689d3b54b4e906491703"
  },
  {
    "url": "assets/js/76.9abf4f6c.js",
    "revision": "de08f7fb67186a6a197ab1b70ec099ec"
  },
  {
    "url": "assets/js/77.a7411da6.js",
    "revision": "b1f76d2a5907c9aeb248af70c8ffccc8"
  },
  {
    "url": "assets/js/78.e12c9443.js",
    "revision": "e55029a21e7f2ac3c8bb9399ec4cba3d"
  },
  {
    "url": "assets/js/79.6381da42.js",
    "revision": "5c564ee5a7d1d18b0e300a380ee94d53"
  },
  {
    "url": "assets/js/80.b4701dd6.js",
    "revision": "24bf3c351d0a2cf7febcb2916f5142ec"
  },
  {
    "url": "assets/js/81.9dbb0f93.js",
    "revision": "2cca9975aca8e54dd495c46aa7f0efce"
  },
  {
    "url": "assets/js/82.01a336fd.js",
    "revision": "75e6ef5072144d947e6da2e0aa8457da"
  },
  {
    "url": "assets/js/83.64f050cb.js",
    "revision": "d432675eb312e492a8ab1110ba72a631"
  },
  {
    "url": "assets/js/84.a66c0e5b.js",
    "revision": "f9f2d91e13d8b287003036f2f88e4770"
  },
  {
    "url": "assets/js/85.987211d6.js",
    "revision": "0ca7ebd91a7e5faf4c1596a3fc020040"
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
    "url": "assets/js/88.39d1eb56.js",
    "revision": "c5c048c284fffa3269d3ddda68aabf14"
  },
  {
    "url": "assets/js/89.7623fc32.js",
    "revision": "102c953f2e2e8b69a4fdb71df9fd440b"
  },
  {
    "url": "assets/js/90.f39c866a.js",
    "revision": "08d20d6117a1487120e97775ec1abf44"
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
    "url": "assets/js/94.5cbb33bf.js",
    "revision": "2e9697e871c153201dc9dbd22d1e8c5e"
  },
  {
    "url": "assets/js/95.34760411.js",
    "revision": "9aea39dad3586adf2dfd58ba86bb41e2"
  },
  {
    "url": "assets/js/96.a7ed9955.js",
    "revision": "3dbc9d7c0d3fa76c067c60161da0a818"
  },
  {
    "url": "assets/js/97.04f786cd.js",
    "revision": "735572f6ae2e5b6826bb00aa2c150e33"
  },
  {
    "url": "assets/js/98.e699e2bc.js",
    "revision": "7c739f13b97cac9536420758db2c5b45"
  },
  {
    "url": "assets/js/99.b4d4d61c.js",
    "revision": "b5dc44d573dd7cec74920e75710164cd"
  },
  {
    "url": "assets/js/app.0321d5a1.js",
    "revision": "d11eb80c4e566413980cce2d9e317870"
  },
  {
    "url": "assets/js/vendors~docsearch.0644ee0a.js",
    "revision": "b77890ee16800d927f76d8f8f61a0875"
  },
  {
    "url": "draft/quick-notes.html",
    "revision": "ba9ed330970ba07b5ae2b682b2063639"
  },
  {
    "url": "flux-ui/dropdowns.html",
    "revision": "629e722713d7aca75ff79cb70e9c4ca9"
  },
  {
    "url": "flux-ui/tables.html",
    "revision": "e34342c2007275e73e5349b64e54dc21"
  },
  {
    "url": "html/bootstrap/cards.html",
    "revision": "94984181163e422afe80e381ee11a460"
  },
  {
    "url": "html/bootstrap/forms/checks-radios.html",
    "revision": "1241233d0cd220b4ff88f7e7429413a7"
  },
  {
    "url": "html/bootstrap/forms/floating-labels.html",
    "revision": "fccf87fa69c8b72d542f6010b3d92218"
  },
  {
    "url": "html/bootstrap/forms/form-control.html",
    "revision": "d8eefab8b2c36745760e74176617f9c3"
  },
  {
    "url": "html/bootstrap/forms/index.html",
    "revision": "12a7fafb845705fcadc8570b7a70d03d"
  },
  {
    "url": "html/bootstrap/forms/layout.html",
    "revision": "da8326b25a74165cdc9752b56dcab1b4"
  },
  {
    "url": "html/bootstrap/forms/select.html",
    "revision": "eff7e893d7da2466105b4441cd863154"
  },
  {
    "url": "html/bootstrap/forms/validation.html",
    "revision": "a2f04bd192b481d952e96b600bec8234"
  },
  {
    "url": "html/bootstrap/index.html",
    "revision": "de2e0e515fbe793e4aa03c322433534c"
  },
  {
    "url": "html/bootstrap/tables.html",
    "revision": "c8a8dfe6f139e878773ec6acc3c3a4ab"
  },
  {
    "url": "html/tailwind/customization/index.html",
    "revision": "085b83886db849c906654830b57dfda4"
  },
  {
    "url": "html/tailwind/customization/presets.html",
    "revision": "bd0a1f1650761ea4c13e7de224109ffe"
  },
  {
    "url": "html/tailwind/directives.html",
    "revision": "7db7436a66550de03a69bd3b109fbe1a"
  },
  {
    "url": "html/tailwind/index.html",
    "revision": "fcf4cad3b33e4a18e0a0ac54953a3566"
  },
  {
    "url": "htmx/index.html",
    "revision": "14d0e22c5eed17a99fc57134f5675a95"
  },
  {
    "url": "index.html",
    "revision": "2c2bb28c9f527754ae51a33f09872dc0"
  },
  {
    "url": "inertia/live-props.html",
    "revision": "a9692a6bac3b8a1a772dba6fbfead022"
  },
  {
    "url": "javascript/alpinejs/index.html",
    "revision": "3203db5ac7830f8908f3aad3b1547d85"
  },
  {
    "url": "javascript/alpinejs/textarea.html",
    "revision": "ffdd6fe51f5439ecea4513358f7e52ee"
  },
  {
    "url": "javascript/modules.html",
    "revision": "98518accbdda0710ec2e38cc0c73606e"
  },
  {
    "url": "livewire/components/index.html",
    "revision": "7e87f89dfa1ca62a6170833cee7d9d4f"
  },
  {
    "url": "livewire/components/pagination.html",
    "revision": "91af074f20204a1ff7b4090bb90d528f"
  },
  {
    "url": "livewire/installation.html",
    "revision": "ffdc5d04583870c62ff562f9628890df"
  },
  {
    "url": "nextjs/index.html",
    "revision": "5ab376a1f84cb2d2809c886c69fc3424"
  },
  {
    "url": "nextjs/laravel-sanctum-auth.html",
    "revision": "4aa9dd1bcf453fab6dc05cdd1db66268"
  },
  {
    "url": "other/priority-levels.html",
    "revision": "fd4a34d6d3ecfc424855af5fe39614ed"
  },
  {
    "url": "other/static-site-generators.html",
    "revision": "f5d1eb2a89da8ecf2fb5c636ac715fc0"
  },
  {
    "url": "php/arrays/sorting-arrays.html",
    "revision": "a062f18f7eb2baf90df49bfc05c11a8d"
  },
  {
    "url": "php/classes/pagination.html",
    "revision": "b9c6f12b2f2339d7a84a72b84f2aa241"
  },
  {
    "url": "php/classes/pdo.html",
    "revision": "87e4c731d24aae64c6a97a67400fe7de"
  },
  {
    "url": "php/laravel/authorization/blade-directives/can.html",
    "revision": "3715693df4415838df81b1d393277117"
  },
  {
    "url": "php/laravel/authorization/blade-directives/canany.html",
    "revision": "8071309b97a26105cd18d052ea0bd402"
  },
  {
    "url": "php/laravel/authorization/blade-directives/cannot.html",
    "revision": "1bf04af4b885c6b75ee9a1a41b094fdc"
  },
  {
    "url": "php/laravel/authorization/blade-directives/index.html",
    "revision": "899c2a2f17fe7c737a0598fe70a2c134"
  },
  {
    "url": "php/laravel/authorization/gates.html",
    "revision": "9779b5b63ef0305c9eadd4626ee45be4"
  },
  {
    "url": "php/laravel/authorization/index.html",
    "revision": "c1265fa2a0e12bdf0189ab1c450ef510"
  },
  {
    "url": "php/laravel/authorization/policies.html",
    "revision": "8433db5c24aa3903f6c08147120aa23c"
  },
  {
    "url": "php/laravel/blade/components.html",
    "revision": "ce8ac78ed0448c32093f7902a8a7bdb0"
  },
  {
    "url": "php/laravel/blade/directives.html",
    "revision": "7166e21545a018f004e1e02bf28cc07f"
  },
  {
    "url": "php/laravel/blade/index.html",
    "revision": "bd4523ed393a7487c957bfd4b48ecd16"
  },
  {
    "url": "php/laravel/controller.html",
    "revision": "497d6d51f55b0e77a96e00da3e4eba2e"
  },
  {
    "url": "php/laravel/database/factories.html",
    "revision": "d8e4a281829ec338bb518126a0d4b430"
  },
  {
    "url": "php/laravel/database/index.html",
    "revision": "b870fc7b36e4783302d62b3bebd85e1d"
  },
  {
    "url": "php/laravel/database/migrations.html",
    "revision": "276ecd46bfdfa5d7e3fc54bd71e7dbd6"
  },
  {
    "url": "php/laravel/database/model.html",
    "revision": "825889548bf47c8b9afa40649af3d218"
  },
  {
    "url": "php/laravel/database/observer.html",
    "revision": "72e1e6481ab83b41d56a0d8a9509d2dd"
  },
  {
    "url": "php/laravel/database/queries.html",
    "revision": "d885b76e262c73806de6e945add36e82"
  },
  {
    "url": "php/laravel/database/quiet-model-events.html",
    "revision": "ed36bfd0947424580f9903a61818a76b"
  },
  {
    "url": "php/laravel/database/read-replicas.html",
    "revision": "b8350b9bca2adb39d74f805505df569e"
  },
  {
    "url": "php/laravel/database/scopes.html",
    "revision": "5e648464f0ee7c4fec6084cd1e64fa7e"
  },
  {
    "url": "php/laravel/database/seeders.html",
    "revision": "81552415d4b9682e2959e9d965918d02"
  },
  {
    "url": "php/laravel/database/transactions.html",
    "revision": "2ce7f085c6eebbef362c6bdb0eea96aa"
  },
  {
    "url": "php/laravel/enums.html",
    "revision": "0cb3942a6555af001892645440f88d0c"
  },
  {
    "url": "php/laravel/index.html",
    "revision": "27792eea34eb20437ec7aaa20fee318a"
  },
  {
    "url": "php/laravel/middleware.html",
    "revision": "3ed54ea13c0a3420ad190efceeaad631"
  },
  {
    "url": "php/laravel/package-development/index.html",
    "revision": "4fdeb6592c81e4cc81ed3607cfd77b6a"
  },
  {
    "url": "php/laravel/package-development/laravel-packager.html",
    "revision": "2c3ba9ffc7b5de84e243e5510e3458b6"
  },
  {
    "url": "php/laravel/package-development/views.html",
    "revision": "e0e6bfdf20ea9a0ed03464d1dfe53662"
  },
  {
    "url": "php/laravel/packages/guides/index.html",
    "revision": "89b9348ad798066b4fa9f7c90016664e"
  },
  {
    "url": "php/laravel/packages/guides/laravel-pint.html",
    "revision": "6670062faaa6c7fc5bd74364f248707e"
  },
  {
    "url": "php/laravel/packages/guides/spatie-activity-log.html",
    "revision": "6dcb879b0db9dad132f365b7c3e6a99a"
  },
  {
    "url": "php/laravel/packages/guides/spatie-comments.html",
    "revision": "ec28419febb91de3cea226b976d2323e"
  },
  {
    "url": "php/laravel/packages/guides/spatie-feed.html",
    "revision": "a0d71f5b716f4192190d28c5d7d83f86"
  },
  {
    "url": "php/laravel/packages/guides/spatie-media-library.html",
    "revision": "6a5b3a42f69b97827a50134a5b054106"
  },
  {
    "url": "php/laravel/packages/guides/spatie-permissions.html",
    "revision": "c81315a9edf58eeb305349f540f1d79f"
  },
  {
    "url": "php/laravel/packages/guides/spatie-query-builder.html",
    "revision": "43e9ffdb3291f103620152cc2f03ab3f"
  },
  {
    "url": "php/laravel/packages/guides/spatie-settings.html",
    "revision": "f0b5fb7bc23a25b360419528aef6b02f"
  },
  {
    "url": "php/laravel/packages/index.html",
    "revision": "14e8c1ea17f14fa90b366822b845c304"
  },
  {
    "url": "php/laravel/pipelines.html",
    "revision": "b075bb7393ac900d95f18fb90dee51b6"
  },
  {
    "url": "php/laravel/policies.html",
    "revision": "c1e294ed4beb815f0071b75fbd9dc62c"
  },
  {
    "url": "php/laravel/queues.html",
    "revision": "235e476c4923de227d23e7808dd08240"
  },
  {
    "url": "php/laravel/relationships/belongs-to-many.html",
    "revision": "9cc887b5765b4614cadba6f58cc40c4b"
  },
  {
    "url": "php/laravel/relationships/index.html",
    "revision": "e5f58699eecdd687b3a8adb9ae52e20d"
  },
  {
    "url": "php/laravel/relationships/many-to-many.html",
    "revision": "f4a003185fdddda92bff23dd12ae27ee"
  },
  {
    "url": "php/laravel/request-input.html",
    "revision": "53f253ca5294b97ecc7310887b2a6b23"
  },
  {
    "url": "php/laravel/routes.html",
    "revision": "7a754cabf10e23382337910dd9fde9b7"
  },
  {
    "url": "php/laravel/task-scheduling.html",
    "revision": "0df91004d9bbb7d0f79e5b66388450fb"
  },
  {
    "url": "php/laravel/testing/controller-methods.html",
    "revision": "34fdf2dbe76fa0df1a3644b48b969e3e"
  },
  {
    "url": "php/laravel/testing/index.html",
    "revision": "ff391e801661ef27502669c0b1b84706"
  },
  {
    "url": "php/laravel/tinker/index.html",
    "revision": "e0b0892fd450293c3b84a85e811a0e1c"
  },
  {
    "url": "php/laravel/traits/index.html",
    "revision": "ab0565be5df944dfae181cebc2236d91"
  },
  {
    "url": "php/laravel/traits/scopes.html",
    "revision": "fdaf4a36fe2d002e58cfbf9b6f464615"
  },
  {
    "url": "php/laravel/validation/fluent-rule-builders.html",
    "revision": "011a32ef41d4dedb5e79532e6f038e6b"
  },
  {
    "url": "php/laravel/validation/form-request.html",
    "revision": "4f4fd36bd5c8c5e9f646ce8a5b7b709f"
  },
  {
    "url": "php/laravel/validation/index.html",
    "revision": "d4c3e75e4a8400498114f7aa884e8697"
  },
  {
    "url": "php/laravel/validation/validation-rules.html",
    "revision": "0b89af2493c0c26e739d14826a1ee971"
  },
  {
    "url": "php/laravel/views.html",
    "revision": "deaa45bb8e01ae51d255b2fa8778df5f"
  },
  {
    "url": "php/nova/fields.html",
    "revision": "f9bcfdaa24cb2d3f6dd205c471027479"
  },
  {
    "url": "tools/database.html",
    "revision": "b059f587d020a9328de8a3f7e34af88e"
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
