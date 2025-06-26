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
    "revision": "c3c8cf0595a14b6192c398fe665c591a"
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
    "url": "assets/js/1.10a56a70.js",
    "revision": "ae4b96b417cc5b9e771ef96490afff1a"
  },
  {
    "url": "assets/js/10.5889962b.js",
    "revision": "6aa716cac111d56749bafbca2b09fb79"
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
    "url": "assets/js/14.bdbc2e20.js",
    "revision": "02436902ddc5faf1eae83f409f75ab40"
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
    "url": "assets/js/19.771421a5.js",
    "revision": "aed2141e3fd004bfd4f0d7bef6b9b000"
  },
  {
    "url": "assets/js/2.db5ec1e0.js",
    "revision": "33b125bdcd13c653f7e4be6261e66a37"
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
    "url": "assets/js/23.5975fb9e.js",
    "revision": "cb90e0c4c54ac75c6ed2354a253b729b"
  },
  {
    "url": "assets/js/24.aae1972c.js",
    "revision": "81137ff4ec19a6eaeeb361a598ee3cb4"
  },
  {
    "url": "assets/js/25.c511d000.js",
    "revision": "e82d4410a9784d4f84d434f341a200d6"
  },
  {
    "url": "assets/js/26.4bea8228.js",
    "revision": "a4e7d267e28a89315004300df33b44a7"
  },
  {
    "url": "assets/js/27.e9b64c22.js",
    "revision": "3fe6cc1bd410be3a7e2a1dad996f76c4"
  },
  {
    "url": "assets/js/28.e37c8deb.js",
    "revision": "f8b81c5c0c422263392b4bc13e15dbb7"
  },
  {
    "url": "assets/js/29.d9af9cab.js",
    "revision": "3a8644ccd23885d35b1657652bdb30da"
  },
  {
    "url": "assets/js/3.5740590c.js",
    "revision": "395b4d6a1743218ea90c901e772361ed"
  },
  {
    "url": "assets/js/30.3a01e3c9.js",
    "revision": "15067070a9910e7a39a1705f1a3d010f"
  },
  {
    "url": "assets/js/31.c46a2fc8.js",
    "revision": "14339fb7229afdcdba99f7359b3f2929"
  },
  {
    "url": "assets/js/32.f0806d76.js",
    "revision": "dbc4ffdc55cc6ce8c71c0aa2e7a1c265"
  },
  {
    "url": "assets/js/33.78f29df7.js",
    "revision": "6c845e3b3cdb40bd2a7c2f2f93554c54"
  },
  {
    "url": "assets/js/34.0116ccd7.js",
    "revision": "92435bda30f6402ffc7faee948cce456"
  },
  {
    "url": "assets/js/35.493b5197.js",
    "revision": "b45c4f75d9a0ea2d090e6926a3ec2917"
  },
  {
    "url": "assets/js/36.96cc433d.js",
    "revision": "9651a247ed5c5b40033d01ed2cc3fcea"
  },
  {
    "url": "assets/js/37.456c7e62.js",
    "revision": "653af86c36e37fb1e951de66fdc6ecce"
  },
  {
    "url": "assets/js/38.7d0cf30f.js",
    "revision": "bf9331f6ad01ccaf3008876cbd8100f7"
  },
  {
    "url": "assets/js/39.6678e59f.js",
    "revision": "b27299ad6fbe57c2dcafaf990317a4d4"
  },
  {
    "url": "assets/js/4.22a65ce5.js",
    "revision": "55028f36358f708e8f714389fcba8725"
  },
  {
    "url": "assets/js/40.85a0ba97.js",
    "revision": "0094f7bbd928d669bffc88a5b4c4233d"
  },
  {
    "url": "assets/js/41.1cb95957.js",
    "revision": "0e50a79cef4860734e45fff793add0ad"
  },
  {
    "url": "assets/js/42.44666e2d.js",
    "revision": "f82d3fb4932bae6e86ede5cec2297260"
  },
  {
    "url": "assets/js/43.fd07ff72.js",
    "revision": "cd6c22df1b38b0e772cf39c7f670adb0"
  },
  {
    "url": "assets/js/44.10ebc343.js",
    "revision": "a66a3fd616cda3b3c6cc8cfff88215dc"
  },
  {
    "url": "assets/js/45.ae10fa82.js",
    "revision": "94554f23016e8e8834bb5dea042d1c52"
  },
  {
    "url": "assets/js/46.a9fd5e57.js",
    "revision": "a785e3919f3d70280edaac9786a45fd5"
  },
  {
    "url": "assets/js/47.56a6ffb5.js",
    "revision": "3add7cc398b47b0bb2cd4715a963e1b4"
  },
  {
    "url": "assets/js/48.8addab4d.js",
    "revision": "7616433c3dd4fb69756b08ff0f29e0a7"
  },
  {
    "url": "assets/js/49.cb98072b.js",
    "revision": "6442a84e579cbd8a1ef763484077ecfb"
  },
  {
    "url": "assets/js/5.775b6552.js",
    "revision": "4df5e0148d5eaf03a8dd0c9a42e63adf"
  },
  {
    "url": "assets/js/50.0206aaef.js",
    "revision": "49280f708e81557f883b00cc424e01bc"
  },
  {
    "url": "assets/js/51.f34b9d08.js",
    "revision": "b43ee9443d128ef3cd22d936ea46e4ed"
  },
  {
    "url": "assets/js/52.13e0bcc5.js",
    "revision": "d315dd68397162dcce9e50ae91b85201"
  },
  {
    "url": "assets/js/53.e6ad0832.js",
    "revision": "b2f75cd65899779e64546b847ad365fe"
  },
  {
    "url": "assets/js/54.1b040397.js",
    "revision": "83fb7f461bd6626ee612adccbca1d107"
  },
  {
    "url": "assets/js/55.7a391ea2.js",
    "revision": "91cdf6c88caca50d5dd2af09d0b304cf"
  },
  {
    "url": "assets/js/56.c910678e.js",
    "revision": "33f7a6a5bbdef5f6d414420dab531d62"
  },
  {
    "url": "assets/js/57.89d2ce79.js",
    "revision": "bfe80786e2544f4a1f9b3ec49366fb98"
  },
  {
    "url": "assets/js/58.eea2b82e.js",
    "revision": "d985b116b49350609e3418fb1069c7db"
  },
  {
    "url": "assets/js/59.03c3a0af.js",
    "revision": "e0bd7e3ba9fef279f2850e3843e53daf"
  },
  {
    "url": "assets/js/6.d1e97dd3.js",
    "revision": "276aafaee8cddcfd9c1a37f4373cdee1"
  },
  {
    "url": "assets/js/60.be65ce27.js",
    "revision": "fa8e48db504feaba113fb9a58f667f40"
  },
  {
    "url": "assets/js/61.90161553.js",
    "revision": "b72ebccaeb59a1b0522b4383d40cb5c3"
  },
  {
    "url": "assets/js/62.9c689ccd.js",
    "revision": "ed55eff5b5644e865a52ef2c28372017"
  },
  {
    "url": "assets/js/63.ac70f371.js",
    "revision": "8bcdf4865978fdb78b22c9653e3e8723"
  },
  {
    "url": "assets/js/64.62d98e62.js",
    "revision": "4a6170b4bc3b80968a5b80c7da9c433a"
  },
  {
    "url": "assets/js/65.b1debff2.js",
    "revision": "6c52d3a7412049b3d191ab476e734368"
  },
  {
    "url": "assets/js/66.b82200ba.js",
    "revision": "8ee0cb85e57720ba446f3444b3ed8c73"
  },
  {
    "url": "assets/js/67.5869b555.js",
    "revision": "00aca1bb125ec43244f16fc6022015d7"
  },
  {
    "url": "assets/js/68.19b6fbd2.js",
    "revision": "9391cbc15c013855c10bcb581171a12d"
  },
  {
    "url": "assets/js/69.89b6d08c.js",
    "revision": "ac7106b23ccd37770663a7ead4d03f9f"
  },
  {
    "url": "assets/js/7.b7c0f320.js",
    "revision": "9acf1f8f90fc9fdda8c7859dea8299f8"
  },
  {
    "url": "assets/js/70.62fabc4d.js",
    "revision": "2c44f8385a053f60ddd1d60dad1678ea"
  },
  {
    "url": "assets/js/71.214e9a2a.js",
    "revision": "58f069fe8c36ff7a6d688301afaccd92"
  },
  {
    "url": "assets/js/72.8fa95042.js",
    "revision": "784f42dd49a73235d4fddf110f8a57c1"
  },
  {
    "url": "assets/js/73.8b64f3aa.js",
    "revision": "9feb0e6a2f38c82b6b34484ca37072c3"
  },
  {
    "url": "assets/js/74.da2842ac.js",
    "revision": "b86ad7d92a054e66b51199d731610dc0"
  },
  {
    "url": "assets/js/75.1745c293.js",
    "revision": "99eb38bea4c02c7f520d4dbecc61cd27"
  },
  {
    "url": "assets/js/76.4283f7c8.js",
    "revision": "5f6b0e441ab09c24a961071b9d846b72"
  },
  {
    "url": "assets/js/77.ac448410.js",
    "revision": "02dcc947b81b47917ee4647b41fe7c1a"
  },
  {
    "url": "assets/js/78.116dc355.js",
    "revision": "1024705c3fbce391e272cf589231232c"
  },
  {
    "url": "assets/js/79.ad795c3d.js",
    "revision": "817e8ae8a8e083dc8950a52b1107ae63"
  },
  {
    "url": "assets/js/80.fe7c6873.js",
    "revision": "c89d89a0044f2702db986c650304d601"
  },
  {
    "url": "assets/js/81.918947b0.js",
    "revision": "a287be2505a3986babf24f5aad17b806"
  },
  {
    "url": "assets/js/82.319b54f7.js",
    "revision": "ac9f006ccedf290b280e86f7f5fc2776"
  },
  {
    "url": "assets/js/83.b21b67b3.js",
    "revision": "c0a9d3d3bbf9e772c387a339d9fd21be"
  },
  {
    "url": "assets/js/84.3823dfca.js",
    "revision": "d7e9f6bd8484cda6952cfacc747840a1"
  },
  {
    "url": "assets/js/85.c8f6f683.js",
    "revision": "1cb0c1c22c55b99df31714691e1a1e77"
  },
  {
    "url": "assets/js/86.4e217230.js",
    "revision": "25a1e38d84aa6cd7bb65f1fe0e33eae1"
  },
  {
    "url": "assets/js/87.55e850bd.js",
    "revision": "3b3a9cef89cf02ca25cea56344208c75"
  },
  {
    "url": "assets/js/88.9fffb2ac.js",
    "revision": "501fa347302926e39268ecd810a35ca0"
  },
  {
    "url": "assets/js/89.370e7f18.js",
    "revision": "645e6d3aa72502dd59913f195c9b407d"
  },
  {
    "url": "assets/js/90.d33d7ee0.js",
    "revision": "7206a59c7f9a5fed1c46e0c0371d5d99"
  },
  {
    "url": "assets/js/91.30473fa5.js",
    "revision": "2535a1a45c352630ba92ab06ec141910"
  },
  {
    "url": "assets/js/92.cb0e70f3.js",
    "revision": "be83dfa4a9cfde40895fbbd118eaafbf"
  },
  {
    "url": "assets/js/93.fdaf5bb7.js",
    "revision": "f2a0ddda50c31657d053f78fe3d71e4e"
  },
  {
    "url": "assets/js/94.9e67d132.js",
    "revision": "23a8b4a40b8571c1ebc7b813ef06ef57"
  },
  {
    "url": "assets/js/app.5de4d45d.js",
    "revision": "f99edf078370d7d05b04ca2b4b7a1790"
  },
  {
    "url": "assets/js/vendors~docsearch.6fed1ae2.js",
    "revision": "2ef16c7549a2197852a96e854981a5c7"
  },
  {
    "url": "draft/quick-notes.html",
    "revision": "cb9e887618c97f94f176f49f0a1ba930"
  },
  {
    "url": "html/bootstrap/cards.html",
    "revision": "c27a165b76c2caec97296cc5ed9a90ed"
  },
  {
    "url": "html/bootstrap/forms/checks-radios.html",
    "revision": "2e7de51643ac32e19c588b93bb8cf8e6"
  },
  {
    "url": "html/bootstrap/forms/floating-labels.html",
    "revision": "456afe96cf4fef165eba96759fcbfe44"
  },
  {
    "url": "html/bootstrap/forms/form-control.html",
    "revision": "9b998c96369bc03888240fbd0a31c59b"
  },
  {
    "url": "html/bootstrap/forms/index.html",
    "revision": "a3be4c48b6fbca339a4309f721d937bb"
  },
  {
    "url": "html/bootstrap/forms/layout.html",
    "revision": "09afdaa8f8ed469622a80cdb4fbaea3e"
  },
  {
    "url": "html/bootstrap/forms/select.html",
    "revision": "9a52cf2333b6407db16b2e47a3c27d43"
  },
  {
    "url": "html/bootstrap/forms/validation.html",
    "revision": "cbc1e0e981b72963431e80c3f94400c3"
  },
  {
    "url": "html/bootstrap/index.html",
    "revision": "f91484959a48c36ba28059581569566d"
  },
  {
    "url": "html/bootstrap/tables.html",
    "revision": "4cf22ec1f183286dcc1038763c01d6e9"
  },
  {
    "url": "html/tailwind/customization/index.html",
    "revision": "7148fc01dd8e5a66035911c935028387"
  },
  {
    "url": "html/tailwind/customization/presets.html",
    "revision": "b01717609221639aa4c727da94a21ae6"
  },
  {
    "url": "html/tailwind/directives.html",
    "revision": "3a38398f37e372b03ae6e21bd8a1e2c1"
  },
  {
    "url": "html/tailwind/index.html",
    "revision": "63999a734807ce49dc8e18825c2c3bb8"
  },
  {
    "url": "htmx/index.html",
    "revision": "87ac0f63069358fddec765296a06acac"
  },
  {
    "url": "index.html",
    "revision": "53c44ffb254c1611863305093275693d"
  },
  {
    "url": "javascript/alpinejs/index.html",
    "revision": "120743c974940248b0010eab2a46d647"
  },
  {
    "url": "javascript/alpinejs/textarea.html",
    "revision": "93f18d9581d2990fb62c282b5f410f2a"
  },
  {
    "url": "javascript/modules.html",
    "revision": "bfc4bfadf4ea45cc322571f824af8556"
  },
  {
    "url": "livewire/components/index.html",
    "revision": "3b50cc62993f3d496ee844e9c8cabab3"
  },
  {
    "url": "livewire/components/pagination.html",
    "revision": "10eeec8c7e41ca4cf057dc0d02ab45ec"
  },
  {
    "url": "livewire/installation.html",
    "revision": "59c239c84fe61132243cfaf681b8c2d3"
  },
  {
    "url": "other/priority-levels.html",
    "revision": "c0d9f554878f89742f79232154d1acac"
  },
  {
    "url": "other/static-site-generators.html",
    "revision": "67ea76251aa9f0054049e9f2308ca68b"
  },
  {
    "url": "php/arrays/sorting-arrays.html",
    "revision": "6af8dbdd726cb1bebdb86e1af38b07f6"
  },
  {
    "url": "php/classes/pagination.html",
    "revision": "0e1333498017b709a529ea523fd25e6d"
  },
  {
    "url": "php/classes/pdo.html",
    "revision": "2a52e07523a43c06472fce9bdaa286fb"
  },
  {
    "url": "php/laravel/blade/components.html",
    "revision": "1795a6d360de140f375bc37c14b9e0bb"
  },
  {
    "url": "php/laravel/blade/directives.html",
    "revision": "068720a55da4758cf3e8ba7e9f007b89"
  },
  {
    "url": "php/laravel/blade/index.html",
    "revision": "be90c1eac264efea9720f41193b68896"
  },
  {
    "url": "php/laravel/controller.html",
    "revision": "f8aa2b4a1b0e15faca6494103898ee62"
  },
  {
    "url": "php/laravel/database/factories.html",
    "revision": "abd80bd76f3f488de2e6f5dfe8ab953b"
  },
  {
    "url": "php/laravel/database/index.html",
    "revision": "85f072e1c54883e1eba078e1510ef39b"
  },
  {
    "url": "php/laravel/database/migrations.html",
    "revision": "dc4945ce05e8aaf3f244fa93e6f8524e"
  },
  {
    "url": "php/laravel/database/model.html",
    "revision": "711235db43409931467b06ec447dfe15"
  },
  {
    "url": "php/laravel/database/observer.html",
    "revision": "4e9967ea74074068cd33afc7aea849d4"
  },
  {
    "url": "php/laravel/database/queries.html",
    "revision": "d0941c0e755e51f3b99c5d3875926d27"
  },
  {
    "url": "php/laravel/database/scopes.html",
    "revision": "048bc555f39daf204fa36acb83b02582"
  },
  {
    "url": "php/laravel/database/seeders.html",
    "revision": "25538da2f4b0df60c688da9341a4d381"
  },
  {
    "url": "php/laravel/enums.html",
    "revision": "980983e99b82973eb604ebd89efb5ef1"
  },
  {
    "url": "php/laravel/index.html",
    "revision": "ac976b061d901539777056a000becc7d"
  },
  {
    "url": "php/laravel/package-development/index.html",
    "revision": "f7ce46e223c810e199560aca99ea75aa"
  },
  {
    "url": "php/laravel/package-development/laravel-packager.html",
    "revision": "0331ccccc43171dac0f4691799465834"
  },
  {
    "url": "php/laravel/package-development/views.html",
    "revision": "e63a851092618d1492ff9072e8c7218f"
  },
  {
    "url": "php/laravel/packages/guides/index.html",
    "revision": "131d65fb4ea53322334a3dabf8ae2a75"
  },
  {
    "url": "php/laravel/packages/guides/spatie-activity-log.html",
    "revision": "3017a0a22cdb02490c0c61e347c0b116"
  },
  {
    "url": "php/laravel/packages/guides/spatie-comments.html",
    "revision": "acef694e7c1bf1e519e5c0ec4510b0ed"
  },
  {
    "url": "php/laravel/packages/guides/spatie-feed.html",
    "revision": "1550d8669fb5012e794101a9f41bd17c"
  },
  {
    "url": "php/laravel/packages/guides/spatie-media-library.html",
    "revision": "0ae1cd2044467f1d7bb2b395f15fde86"
  },
  {
    "url": "php/laravel/packages/guides/spatie-permissions.html",
    "revision": "3b1a26a552419b69fd24bb3507271953"
  },
  {
    "url": "php/laravel/packages/guides/spatie-query-builder.html",
    "revision": "2cdb52f3a0dd1e458c22dd5af7507310"
  },
  {
    "url": "php/laravel/packages/guides/spatie-settings.html",
    "revision": "5d2127f15a5d578d81761c9d88e31a90"
  },
  {
    "url": "php/laravel/packages/index.html",
    "revision": "16f2277abc9d5d778590184689443d80"
  },
  {
    "url": "php/laravel/policies.html",
    "revision": "b38591edac8d27dbc86e123531634d0d"
  },
  {
    "url": "php/laravel/relationships/belongs-to-many.html",
    "revision": "f29bba68ae0b88153844d13041800079"
  },
  {
    "url": "php/laravel/relationships/index.html",
    "revision": "cb36f02d411cdee975d5a50e68636032"
  },
  {
    "url": "php/laravel/relationships/many-to-many.html",
    "revision": "f2db875bfd4803c9cf4d3b486c84294d"
  },
  {
    "url": "php/laravel/routes.html",
    "revision": "50be888a33fc750836873700059c0445"
  },
  {
    "url": "php/laravel/task-scheduling.html",
    "revision": "059959c2234ba6a23100daf120d20ed2"
  },
  {
    "url": "php/laravel/testing/controller-methods.html",
    "revision": "d6c937b45f49f4369c3519116ac31942"
  },
  {
    "url": "php/laravel/testing/index.html",
    "revision": "a7a4adcef141ec14278fc47ece7e5afd"
  },
  {
    "url": "php/laravel/tinker/index.html",
    "revision": "4984020a9ea5a0a220d8e0d0b6a3af07"
  },
  {
    "url": "php/laravel/traits/index.html",
    "revision": "545ee8fef8b304986014ea6f31dc3e07"
  },
  {
    "url": "php/laravel/traits/scopes.html",
    "revision": "f286e3b239216cd64e20cddc6ad57a5c"
  },
  {
    "url": "php/laravel/validation/form-request.html",
    "revision": "e46bd8ee55e039a06dfef170c293c457"
  },
  {
    "url": "php/laravel/validation/index.html",
    "revision": "c97247f6e632e06114545d76f0374ef6"
  },
  {
    "url": "php/laravel/validation/validation-rules.html",
    "revision": "858f76c28296d78b12699009bd2b1e0f"
  },
  {
    "url": "php/laravel/views.html",
    "revision": "26f6e0663e767ec08693e29055d53554"
  },
  {
    "url": "php/nova/fields.html",
    "revision": "2c9c244d7acb541010d3311b7e249de5"
  },
  {
    "url": "tools/database.html",
    "revision": "33056a9c031809c4b754c2dd23a5cab3"
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
