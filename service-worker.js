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
    "revision": "ea1cc3405e906c27da8acf7e0ebb5eae"
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
    "url": "assets/js/100.4ecdb2ac.js",
    "revision": "759511441889553febc6770a70b5cef1"
  },
  {
    "url": "assets/js/101.ad5b0bed.js",
    "revision": "af8831fc687bd711e38bc5fe3074c190"
  },
  {
    "url": "assets/js/102.5260b4ed.js",
    "revision": "d40013f66cade42f71681797d8f4815b"
  },
  {
    "url": "assets/js/103.8fd2a368.js",
    "revision": "7b2fb9c3b20e056615feb3cb90f7bd02"
  },
  {
    "url": "assets/js/104.b9881137.js",
    "revision": "c451f32373c6b9ddcdec411cca5e76fd"
  },
  {
    "url": "assets/js/105.6f10d19b.js",
    "revision": "941dae35bfb6188b17e6c0c66929613a"
  },
  {
    "url": "assets/js/106.4a1affb2.js",
    "revision": "665c25ee8e28b2407fb27dd4fc949537"
  },
  {
    "url": "assets/js/107.41149d9b.js",
    "revision": "36da92115c66262526d54b115ba73702"
  },
  {
    "url": "assets/js/108.c08e8c56.js",
    "revision": "41a471deef2305cd504754ad8bbffd99"
  },
  {
    "url": "assets/js/109.68f71597.js",
    "revision": "c6495fd82c471e49bf58516c94a6973a"
  },
  {
    "url": "assets/js/11.788742d3.js",
    "revision": "5811556242a6d81028611d4c0a27f632"
  },
  {
    "url": "assets/js/110.f6a709a0.js",
    "revision": "8ba241151a450e72c02c5040c51df34b"
  },
  {
    "url": "assets/js/111.5e1b9b5f.js",
    "revision": "95c1c982121485881b8291113eb43a85"
  },
  {
    "url": "assets/js/112.65e000d8.js",
    "revision": "5958ebae6860978ad0d2c12203224655"
  },
  {
    "url": "assets/js/113.d870bc45.js",
    "revision": "39d5c9d65368abeebf637ab25a8c1669"
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
    "url": "assets/js/23.257e494f.js",
    "revision": "891a64a4f6cef4e3831842f4a4282a0e"
  },
  {
    "url": "assets/js/24.79829e0b.js",
    "revision": "ec288133ea2b28a960af7891a66ff0b9"
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
    "url": "assets/js/28.2a0cb174.js",
    "revision": "eb1880dd1212ad202aae520affcc6a25"
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
    "url": "assets/js/31.3a34ff92.js",
    "revision": "3aeb05f02e715a65683612c76b3055fe"
  },
  {
    "url": "assets/js/32.6550a0e5.js",
    "revision": "78d97ae569ed7dac4bbb56c6aee4a01b"
  },
  {
    "url": "assets/js/33.3edfd5e6.js",
    "revision": "83956226ddbe400fde3a96eebba3f54e"
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
    "url": "assets/js/41.4e55642b.js",
    "revision": "bb24e7d770d25d920799769c59b296a1"
  },
  {
    "url": "assets/js/42.51f1c80f.js",
    "revision": "815ed5e26292e9ee0d58d91693026dc2"
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
    "url": "assets/js/49.4ed58945.js",
    "revision": "3c24fe86b0aa043c3344e2951abc3d09"
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
    "url": "assets/js/53.e37008e0.js",
    "revision": "dee59242fadf5e59080d39c6d3e01996"
  },
  {
    "url": "assets/js/54.2ff39a2f.js",
    "revision": "cc3507ab23e38c93046c2ccefe5ad34e"
  },
  {
    "url": "assets/js/55.576c06c2.js",
    "revision": "ae410808e1e146aaa151427f86acce7a"
  },
  {
    "url": "assets/js/56.d5a1bf42.js",
    "revision": "1d827c9a9eac2634a4159b25340b51d1"
  },
  {
    "url": "assets/js/57.1f02be9c.js",
    "revision": "f5d8f46653cb1f0edd07feb81e9cfde8"
  },
  {
    "url": "assets/js/58.588da123.js",
    "revision": "56027b53620202c1fed9827c61d61d4a"
  },
  {
    "url": "assets/js/59.db14f2fc.js",
    "revision": "0bf56523a18d16665b592c742e74ff43"
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
    "url": "assets/js/61.f8daec73.js",
    "revision": "a6a4f0a4430cbb553a93fdca1eb1da30"
  },
  {
    "url": "assets/js/62.f801536d.js",
    "revision": "111e0ddf7e21ff9a9a48b604f28e13d5"
  },
  {
    "url": "assets/js/63.05dcd96a.js",
    "revision": "e27d82e2ac4e1713cd83d03a2abee56e"
  },
  {
    "url": "assets/js/64.44470cbf.js",
    "revision": "11fab34c630c7abdd401d6267db57dd3"
  },
  {
    "url": "assets/js/65.262f31e4.js",
    "revision": "6f225d7a9ec8f59daca6dd7eaf8ec733"
  },
  {
    "url": "assets/js/66.ed816ed5.js",
    "revision": "757957af3fe6d700d0ee1efaeeee62de"
  },
  {
    "url": "assets/js/67.c47039a4.js",
    "revision": "e3586748dee56e8714bad45301b5e599"
  },
  {
    "url": "assets/js/68.31915362.js",
    "revision": "c17a22ab668e25491bee05cfd1bc1d96"
  },
  {
    "url": "assets/js/69.7b730a3e.js",
    "revision": "ef9c6dda764d0826a6b54bb09e31af6d"
  },
  {
    "url": "assets/js/7.ca5a7b15.js",
    "revision": "7f79cab7262ae574c3075ebbf4c1ac64"
  },
  {
    "url": "assets/js/70.b0a7b67a.js",
    "revision": "3ff95fa953030289a8bd44d45891c926"
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
    "url": "assets/js/79.ecf40a36.js",
    "revision": "8935db7a8b0d5b93e834d8ba1311dac0"
  },
  {
    "url": "assets/js/80.58ce35f8.js",
    "revision": "a88daeea3126f9730429522216be298d"
  },
  {
    "url": "assets/js/81.b849f470.js",
    "revision": "8677bd5d1d231a51d54a100c5729810f"
  },
  {
    "url": "assets/js/82.0d6d6c3e.js",
    "revision": "e1254ba9934034b47cb7f6a69b0ac758"
  },
  {
    "url": "assets/js/83.81b5f9a9.js",
    "revision": "dfbb19ee6f962043cb269dfa40d35ee4"
  },
  {
    "url": "assets/js/84.dbd770a8.js",
    "revision": "43ce8b8f24844060ab5713174d04ddce"
  },
  {
    "url": "assets/js/85.783ca701.js",
    "revision": "72e48633e7c36a7cdf48aaeeb8669075"
  },
  {
    "url": "assets/js/86.170f762b.js",
    "revision": "6aaacb57c6c8cbe4f79200b001f5e8a5"
  },
  {
    "url": "assets/js/87.0e5fe84f.js",
    "revision": "97be356e8b382b95502ddb54dc886f3a"
  },
  {
    "url": "assets/js/88.f951293e.js",
    "revision": "09456a4a5dbd65d5e22f9138cc18f3b9"
  },
  {
    "url": "assets/js/89.5f9ef7fb.js",
    "revision": "265e9b023cac6c628b7e54bda2fc4158"
  },
  {
    "url": "assets/js/90.e2ec683e.js",
    "revision": "8617cd6abc30baf15f04c1e887846d49"
  },
  {
    "url": "assets/js/91.bda8f8e0.js",
    "revision": "2affe6416fa1dcabd84da7735ef9b57b"
  },
  {
    "url": "assets/js/92.3f320e62.js",
    "revision": "220435a3b9ff793994ff6612c91a23f2"
  },
  {
    "url": "assets/js/93.42079a84.js",
    "revision": "8fc97ad20d107a63d1b80e0d63c1bf7e"
  },
  {
    "url": "assets/js/94.cbb78954.js",
    "revision": "55d61c38e7ace169b9fa916b932bcf87"
  },
  {
    "url": "assets/js/95.f7b86fb8.js",
    "revision": "d8ef19f8a607a58c90f01f83b06906c8"
  },
  {
    "url": "assets/js/96.2a2cd8fe.js",
    "revision": "25556dac051d119befc58a6e99d88d8a"
  },
  {
    "url": "assets/js/97.a97a5ba2.js",
    "revision": "f0b3bb478c45b3cec5a04087f2972817"
  },
  {
    "url": "assets/js/98.5a6cdcc7.js",
    "revision": "1890c12bb444a9f0c0d716c5da0770b7"
  },
  {
    "url": "assets/js/99.0062fa6b.js",
    "revision": "8d1d009bf0e490faab1dfd25e2e64caf"
  },
  {
    "url": "assets/js/app.e6f546d8.js",
    "revision": "89f6519bbc5b1e8ea5165f85bfd5c579"
  },
  {
    "url": "assets/js/vendors~docsearch.0644ee0a.js",
    "revision": "b77890ee16800d927f76d8f8f61a0875"
  },
  {
    "url": "draft/quick-notes.html",
    "revision": "5e464041a7adb551089ad71325b5a809"
  },
  {
    "url": "flux-ui/dropdowns.html",
    "revision": "95521070ba4ae39942f188204f3dd340"
  },
  {
    "url": "flux-ui/tables.html",
    "revision": "168a1d880678003c841ee156eae623c4"
  },
  {
    "url": "html/bootstrap/cards.html",
    "revision": "9ba8c178243c43453be863ae423a25ce"
  },
  {
    "url": "html/bootstrap/forms/checks-radios.html",
    "revision": "72a9d303063dfbd28631a19544db5543"
  },
  {
    "url": "html/bootstrap/forms/floating-labels.html",
    "revision": "db8fa17354313bd2c59d7e2b993d0509"
  },
  {
    "url": "html/bootstrap/forms/form-control.html",
    "revision": "8b75f669d5bd7df0f79f7fb1542c4465"
  },
  {
    "url": "html/bootstrap/forms/index.html",
    "revision": "d3af7344656d33b10afdee005ca28467"
  },
  {
    "url": "html/bootstrap/forms/layout.html",
    "revision": "b2b2f1ea0a9d6b986749a3bc170ea517"
  },
  {
    "url": "html/bootstrap/forms/select.html",
    "revision": "bf037447e7fe05c3aad7e5702935191c"
  },
  {
    "url": "html/bootstrap/forms/validation.html",
    "revision": "8449b3b0538c863411fe80ee0127fb2a"
  },
  {
    "url": "html/bootstrap/index.html",
    "revision": "f2d70912e32febdebb1d9803fb9b6bec"
  },
  {
    "url": "html/bootstrap/tables.html",
    "revision": "c3f379e0b71a6977cc4eacbf0a09b7be"
  },
  {
    "url": "html/tailwind/customization/index.html",
    "revision": "336dda84364a4f6953b76581d6b28457"
  },
  {
    "url": "html/tailwind/customization/presets.html",
    "revision": "5926cd362d58bc1d3f856c9abd552d97"
  },
  {
    "url": "html/tailwind/directives.html",
    "revision": "035365c17486559ff4b7bb8365253acc"
  },
  {
    "url": "html/tailwind/index.html",
    "revision": "10f42bce3f56af7109d930f592806df0"
  },
  {
    "url": "htmx/index.html",
    "revision": "bd59bfd5eb1409615ab7167805adc30a"
  },
  {
    "url": "index.html",
    "revision": "15d88a06c4d609d5165edb6fb5d570cb"
  },
  {
    "url": "inertia/live-props.html",
    "revision": "3feaa1118852f30b31bcc6eb523ce525"
  },
  {
    "url": "javascript/alpinejs/index.html",
    "revision": "ba1f802fcd46bdffe987597e9f24f170"
  },
  {
    "url": "javascript/alpinejs/textarea.html",
    "revision": "bed752a2fa95e0167b8fc513780b5771"
  },
  {
    "url": "javascript/modules.html",
    "revision": "f42db46dbbf61f5fef0631baa214af0d"
  },
  {
    "url": "livewire/components/index.html",
    "revision": "869fef995e5a3ae6af794f53245cc81a"
  },
  {
    "url": "livewire/components/pagination.html",
    "revision": "225372373e4b64e1fa804b2694186ea4"
  },
  {
    "url": "livewire/installation.html",
    "revision": "dc2bd4bf5110bb86ef8a41bcb001769b"
  },
  {
    "url": "nextjs/index.html",
    "revision": "2d8845ef4b4d7aa4ffa04da870ee23fa"
  },
  {
    "url": "nextjs/laravel-sanctum-auth.html",
    "revision": "1fc2231590580d3723ea108be0f15062"
  },
  {
    "url": "other/priority-levels.html",
    "revision": "07ef137a4a64f7c2de3d6697482ab1d0"
  },
  {
    "url": "other/static-site-generators.html",
    "revision": "8cdb5f2b2cb8391144c40399d9838981"
  },
  {
    "url": "php/arrays/sorting-arrays.html",
    "revision": "90f0a71717cc58048c8bd68f5f1a6f64"
  },
  {
    "url": "php/classes/pagination.html",
    "revision": "3deeee092a43904a8513252374439028"
  },
  {
    "url": "php/classes/pdo.html",
    "revision": "ec300133d15b9a8c1c8ca5c18b863b6f"
  },
  {
    "url": "php/laravel/authorization/blade-directives/can.html",
    "revision": "78402c6ea8ae1107800cd35d7a9c68ad"
  },
  {
    "url": "php/laravel/authorization/blade-directives/canany.html",
    "revision": "171f31d32292a0e449ba2a215b4edabd"
  },
  {
    "url": "php/laravel/authorization/blade-directives/cannot.html",
    "revision": "da5ff3b275289972f6d9db537e5ce388"
  },
  {
    "url": "php/laravel/authorization/blade-directives/index.html",
    "revision": "61b28ecbebe4281164f8c4bbc070481c"
  },
  {
    "url": "php/laravel/authorization/gates.html",
    "revision": "a4986d5d5c56c6e894e142c32ca91eed"
  },
  {
    "url": "php/laravel/authorization/index.html",
    "revision": "7f977f3152f968381f6920e724f6b51e"
  },
  {
    "url": "php/laravel/authorization/policies.html",
    "revision": "d82f421f29ecbb13d6fdc3cd3a94f676"
  },
  {
    "url": "php/laravel/blade/components.html",
    "revision": "0a2fd0c823abc8352ef21acda4019615"
  },
  {
    "url": "php/laravel/blade/directives.html",
    "revision": "24ed2564116de894a687018a58fefda5"
  },
  {
    "url": "php/laravel/blade/index.html",
    "revision": "5dada2cc837120d035c6abdab68cbcca"
  },
  {
    "url": "php/laravel/controller.html",
    "revision": "05381f77514bc3228e85f93eec8af556"
  },
  {
    "url": "php/laravel/database/factories.html",
    "revision": "383226554e57df5106d3c0a68a5b0535"
  },
  {
    "url": "php/laravel/database/index.html",
    "revision": "e7b9b31c09321b89117439004a836604"
  },
  {
    "url": "php/laravel/database/migrations.html",
    "revision": "d1ed13c7c8e46ded9022221587dee1f3"
  },
  {
    "url": "php/laravel/database/model.html",
    "revision": "a331ebc55d57f9610cea3b6965b3d1a2"
  },
  {
    "url": "php/laravel/database/observer.html",
    "revision": "85fd95a23b5f007689f951b688e86375"
  },
  {
    "url": "php/laravel/database/queries.html",
    "revision": "8bba901e29ff3d1d6130b1e13b55d595"
  },
  {
    "url": "php/laravel/database/quiet-model-events.html",
    "revision": "ab1000bb20b68b745168747ae9b06be2"
  },
  {
    "url": "php/laravel/database/read-replicas.html",
    "revision": "e7e33313f793fd4110542a8e1ebc0c3b"
  },
  {
    "url": "php/laravel/database/scopes.html",
    "revision": "4cc85fcee4495f961c30c0a801dc57cf"
  },
  {
    "url": "php/laravel/database/seeders.html",
    "revision": "f4f95800467782a5eacbe776030c6c73"
  },
  {
    "url": "php/laravel/database/transactions.html",
    "revision": "eed8ffe42c2bb570e3f4fc07610d3db7"
  },
  {
    "url": "php/laravel/enums.html",
    "revision": "6d1068a3b1b3bff4fc3547e9e275ab4c"
  },
  {
    "url": "php/laravel/index.html",
    "revision": "f82e07d5ab07be61c91a864770c9e3fb"
  },
  {
    "url": "php/laravel/package-development/index.html",
    "revision": "029f13c9b1f393b928adda14bade9553"
  },
  {
    "url": "php/laravel/package-development/laravel-packager.html",
    "revision": "803cf5730227c6c361ff1f38ed35a58c"
  },
  {
    "url": "php/laravel/package-development/views.html",
    "revision": "05a59146f873fcc4a0ade139ccc3a223"
  },
  {
    "url": "php/laravel/packages/guides/index.html",
    "revision": "8bdc759a8df772d25f7ab1e29482f2b7"
  },
  {
    "url": "php/laravel/packages/guides/laravel-pint.html",
    "revision": "6f9117978db6517828ddb0ac9d334957"
  },
  {
    "url": "php/laravel/packages/guides/spatie-activity-log.html",
    "revision": "1276eed50db1df9c0605da8288aee8a3"
  },
  {
    "url": "php/laravel/packages/guides/spatie-comments.html",
    "revision": "89ed1088d8b745b51d1e7410304ec81a"
  },
  {
    "url": "php/laravel/packages/guides/spatie-feed.html",
    "revision": "21b644e9df09293b67055405ba69d76e"
  },
  {
    "url": "php/laravel/packages/guides/spatie-media-library.html",
    "revision": "a73dd24b60d03c7948e4a58fa03f01e1"
  },
  {
    "url": "php/laravel/packages/guides/spatie-permissions.html",
    "revision": "4a5b232cc94611aa3d6cda02a0daba31"
  },
  {
    "url": "php/laravel/packages/guides/spatie-query-builder.html",
    "revision": "f06f10bab9b0e53976da28aa07d1224b"
  },
  {
    "url": "php/laravel/packages/guides/spatie-settings.html",
    "revision": "e8d9d4c72d5b08a7e543feefa94c1188"
  },
  {
    "url": "php/laravel/packages/index.html",
    "revision": "4e9cf2f7339f000b1feefca421814b67"
  },
  {
    "url": "php/laravel/pipelines.html",
    "revision": "fae2f5f52ffcc9129bae5761a76794e1"
  },
  {
    "url": "php/laravel/policies.html",
    "revision": "ef8441fc1c3af56ca87f9a095cb2f380"
  },
  {
    "url": "php/laravel/queues.html",
    "revision": "edfba87526981c6a81eceb3045e73d9b"
  },
  {
    "url": "php/laravel/relationships/belongs-to-many.html",
    "revision": "eec668b8ef70fd1d825d60f371039362"
  },
  {
    "url": "php/laravel/relationships/index.html",
    "revision": "5e54b8ac737663c7d92380593f8ede38"
  },
  {
    "url": "php/laravel/relationships/many-to-many.html",
    "revision": "9b919d9a075d25c7b47f7d0324fc29ed"
  },
  {
    "url": "php/laravel/routes.html",
    "revision": "aa71c3b74cd12ce56ec0081f6a16f8fd"
  },
  {
    "url": "php/laravel/task-scheduling.html",
    "revision": "8183629fca48c8765da4f7a7f9ba84ee"
  },
  {
    "url": "php/laravel/testing/controller-methods.html",
    "revision": "4a838db8e3c0e42c1c9320a8e7146273"
  },
  {
    "url": "php/laravel/testing/index.html",
    "revision": "bab0cc31dcbee3e3c74b1e2eeb7ff566"
  },
  {
    "url": "php/laravel/tinker/index.html",
    "revision": "41f9cfcbfcf24604b1aaad98450fa057"
  },
  {
    "url": "php/laravel/traits/index.html",
    "revision": "4bf5c64a620b243b4f220415e60ec064"
  },
  {
    "url": "php/laravel/traits/scopes.html",
    "revision": "1185d7669f6a3e74b6301999e0022789"
  },
  {
    "url": "php/laravel/validation/fluent-rule-builders.html",
    "revision": "7b1c09fe37d7454a6b69861ac91a80c3"
  },
  {
    "url": "php/laravel/validation/form-request.html",
    "revision": "2389083e2faeec4d7887257b991ecfe4"
  },
  {
    "url": "php/laravel/validation/index.html",
    "revision": "c8c34a03a3a5ae3ceae1bbfeefae6d8a"
  },
  {
    "url": "php/laravel/validation/validation-rules.html",
    "revision": "b495a53a8b8d9ae15d5d8c73ce15d1cd"
  },
  {
    "url": "php/laravel/views.html",
    "revision": "3a8ee9c5731f6f8629aaa07cb772c415"
  },
  {
    "url": "php/nova/fields.html",
    "revision": "5a80bb6ef327771e35d2ec4044b0a28a"
  },
  {
    "url": "tools/database.html",
    "revision": "f41c83c09636797579fe554bb267f598"
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
