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
    "revision": "0dd9ce87b25463a0de783229eaf80b3c"
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
    "url": "assets/js/100.f11b5a5d.js",
    "revision": "130333d4ef12b25ee9c62ff4ab34ecf6"
  },
  {
    "url": "assets/js/101.cc9a3d43.js",
    "revision": "d1c828401041b38b980d59f866deeefe"
  },
  {
    "url": "assets/js/102.65793f3b.js",
    "revision": "03dee1059ea5b5b3f0931d145092a048"
  },
  {
    "url": "assets/js/103.af0d1fee.js",
    "revision": "7cb51335b165527e3d8786c23d2953aa"
  },
  {
    "url": "assets/js/104.8db6175a.js",
    "revision": "6b1086451f8c60ced6b6f0a133ad455e"
  },
  {
    "url": "assets/js/105.134e5e42.js",
    "revision": "261d271ec8d8854b80d434ddc1b9af68"
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
    "url": "assets/js/23.917bb4bd.js",
    "revision": "131c3921af7e73b62fb96e6eaa198e0e"
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
    "url": "assets/js/26.dbf1bfa5.js",
    "revision": "a3bdb4e86cd6ae251ecbd813e0b56eef"
  },
  {
    "url": "assets/js/27.264e6f26.js",
    "revision": "90fb3a3f9ca7612db9eaac2baaa12d1a"
  },
  {
    "url": "assets/js/28.9e2aad5c.js",
    "revision": "ec1018994503d0c9a823a9e7b634a6f6"
  },
  {
    "url": "assets/js/29.e63ec27a.js",
    "revision": "53b9cefb1b82f586ae864995d0d450f2"
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
    "url": "assets/js/31.dd97a41b.js",
    "revision": "65b46856846302f6fd4d6a8062d1da4a"
  },
  {
    "url": "assets/js/32.f294b4ea.js",
    "revision": "d1ae4a020f0be6aee8d2b0a54b43b115"
  },
  {
    "url": "assets/js/33.4046b72e.js",
    "revision": "85320b88ed63d4172448a7a8f2b4c998"
  },
  {
    "url": "assets/js/34.63aabd63.js",
    "revision": "3667cbbf1376267b9f7ac99dcb21bb89"
  },
  {
    "url": "assets/js/35.80e7328d.js",
    "revision": "8f1e5cfe519f70dd4458d09a924d7ec5"
  },
  {
    "url": "assets/js/36.e33627a0.js",
    "revision": "a2c6f3c49048dce0dbce112a9e5d8856"
  },
  {
    "url": "assets/js/37.456c7e62.js",
    "revision": "653af86c36e37fb1e951de66fdc6ecce"
  },
  {
    "url": "assets/js/38.8e58bda2.js",
    "revision": "f8e3e152a2e4f1da520bd6ccd660a223"
  },
  {
    "url": "assets/js/39.ed7e3f70.js",
    "revision": "ca41c1455ae20e9781d4459ebc57708e"
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
    "url": "assets/js/43.648871ac.js",
    "revision": "7007b57e7bc7eead5dc894afb9db063f"
  },
  {
    "url": "assets/js/44.a856e04c.js",
    "revision": "4703fd8e933a009dd2a9b30ac52f6767"
  },
  {
    "url": "assets/js/45.5920a09e.js",
    "revision": "7e6558c73704a6d7b3e506a7e2de23dd"
  },
  {
    "url": "assets/js/46.1db3e803.js",
    "revision": "12dbe50406666e4f42a8c14f63a26316"
  },
  {
    "url": "assets/js/47.d03b7db7.js",
    "revision": "1cda125036a48785aded40ffb3504dbb"
  },
  {
    "url": "assets/js/48.21f6d347.js",
    "revision": "00b1e8b87c7586694413f932b44aef16"
  },
  {
    "url": "assets/js/49.a7b18162.js",
    "revision": "1dea446a4401dfd9643804443ffb37a4"
  },
  {
    "url": "assets/js/5.775b6552.js",
    "revision": "4df5e0148d5eaf03a8dd0c9a42e63adf"
  },
  {
    "url": "assets/js/50.5a94a46d.js",
    "revision": "c71ec9a0df323c6bb21248a936dc1ba6"
  },
  {
    "url": "assets/js/51.20b8920c.js",
    "revision": "cf257d30a097abfbb3373f23411254bc"
  },
  {
    "url": "assets/js/52.db6c8e8b.js",
    "revision": "fa2a71fe12a2a16b8bc5e1027146272f"
  },
  {
    "url": "assets/js/53.3949417f.js",
    "revision": "c0b5cd9c41301feae20bc9a3914f79e7"
  },
  {
    "url": "assets/js/54.ecf9abcd.js",
    "revision": "085f258a77845fc3033d913ebc1829f6"
  },
  {
    "url": "assets/js/55.eea150d9.js",
    "revision": "63cbe6275f6cad3eca9e9f429d5c53f2"
  },
  {
    "url": "assets/js/56.ae561679.js",
    "revision": "0eeaf2637cfc605f51a20af0de789f0b"
  },
  {
    "url": "assets/js/57.8416ac8e.js",
    "revision": "bbf67f13bbdbeb2b67461b29d94af7a5"
  },
  {
    "url": "assets/js/58.b9228878.js",
    "revision": "0900fbcb021b724b5ebc24485bd5ac3d"
  },
  {
    "url": "assets/js/59.d95f615f.js",
    "revision": "fc0f36be231a45e41f44d1b3730444ec"
  },
  {
    "url": "assets/js/6.d1e97dd3.js",
    "revision": "276aafaee8cddcfd9c1a37f4373cdee1"
  },
  {
    "url": "assets/js/60.64f5a163.js",
    "revision": "df1f80c2f3aada312b6e34fbba017876"
  },
  {
    "url": "assets/js/61.d86269ca.js",
    "revision": "754890f3f4003b3c0b847c8e6c3abb7e"
  },
  {
    "url": "assets/js/62.c1dcb5c3.js",
    "revision": "3bd1265f0dc021d322dc6fb06a2a2c57"
  },
  {
    "url": "assets/js/63.cc310bd3.js",
    "revision": "01f8076c07d5784538ca59126948b7d4"
  },
  {
    "url": "assets/js/64.50ae128f.js",
    "revision": "87a8d8e0674206f1ed2fd34f2cbd8e19"
  },
  {
    "url": "assets/js/65.3c75e575.js",
    "revision": "35d0155938188a7a5b3f9578c18ec471"
  },
  {
    "url": "assets/js/66.421f2292.js",
    "revision": "cfd43010904b4ed28fb709b9704b27b1"
  },
  {
    "url": "assets/js/67.6460b2ae.js",
    "revision": "50f5708adb7e6734c6b2236308c73510"
  },
  {
    "url": "assets/js/68.e4f7789e.js",
    "revision": "f10bae97852d8c751ea3c473432b1878"
  },
  {
    "url": "assets/js/69.14058922.js",
    "revision": "7b5f492724b40347e0504d6069879e98"
  },
  {
    "url": "assets/js/7.b7c0f320.js",
    "revision": "9acf1f8f90fc9fdda8c7859dea8299f8"
  },
  {
    "url": "assets/js/70.697b18d1.js",
    "revision": "c0ac7250a5e6df14e30de211ae3dc16b"
  },
  {
    "url": "assets/js/71.acf8086f.js",
    "revision": "1637c8a6e77dc04a7114c7e24654a098"
  },
  {
    "url": "assets/js/72.2794dace.js",
    "revision": "2d72a799d2a9c24234d09fc312dc8c12"
  },
  {
    "url": "assets/js/73.956dd99d.js",
    "revision": "8799b3bb15bb141d1fd9edc2908dde15"
  },
  {
    "url": "assets/js/74.5facfb9b.js",
    "revision": "e9607214f6368d978d370d8cd3bfba27"
  },
  {
    "url": "assets/js/75.995afd0e.js",
    "revision": "97fc6e566c23ad37101b8749e67334fa"
  },
  {
    "url": "assets/js/76.6f7e6dda.js",
    "revision": "4976e34ad62487a412930fcce4aedf19"
  },
  {
    "url": "assets/js/77.cf380576.js",
    "revision": "6feffb997fda69a223da1d67686b9d5c"
  },
  {
    "url": "assets/js/78.290f36a4.js",
    "revision": "c06ed77d44ce9ade2495b61229798911"
  },
  {
    "url": "assets/js/79.269cf490.js",
    "revision": "6a5467a1bb008e4349dc8cdcc2e88d27"
  },
  {
    "url": "assets/js/80.b10add82.js",
    "revision": "a29df122305423512dbe949c2122e0c3"
  },
  {
    "url": "assets/js/81.6dd22995.js",
    "revision": "386a1643a71eab0f413fe1ad1bcdc886"
  },
  {
    "url": "assets/js/82.a233b45a.js",
    "revision": "261348c85cd631dedcf1405d6d2cf3f9"
  },
  {
    "url": "assets/js/83.af1d2446.js",
    "revision": "6baf6a52c30f9cbd6964c3d8c62fa926"
  },
  {
    "url": "assets/js/84.98ed0df1.js",
    "revision": "6491abfaf67d5a70af123f8e7d123318"
  },
  {
    "url": "assets/js/85.38333c30.js",
    "revision": "efce7ee47340f04843454e805729635a"
  },
  {
    "url": "assets/js/86.3ed0faf9.js",
    "revision": "b223bd593fb8531505b533a486284509"
  },
  {
    "url": "assets/js/87.695aff83.js",
    "revision": "03f344508e1001dfd2bc8911310ef905"
  },
  {
    "url": "assets/js/88.ae351ef9.js",
    "revision": "d8b7e75698166730c67bf19d1cabf97f"
  },
  {
    "url": "assets/js/89.b158c4b9.js",
    "revision": "e22af2d6c7de759531beae3322797295"
  },
  {
    "url": "assets/js/90.7c4f9876.js",
    "revision": "a4d8d1321719c8febbadbf150e4d5aea"
  },
  {
    "url": "assets/js/91.6cf1dd31.js",
    "revision": "39359dacab0e3b936d563861b6a20a56"
  },
  {
    "url": "assets/js/92.f680c7e9.js",
    "revision": "3f71cae3715253255f013cad7946e35f"
  },
  {
    "url": "assets/js/93.2a11177d.js",
    "revision": "052095cbc6bb05a83b284d593ee1dabb"
  },
  {
    "url": "assets/js/94.df2d32a8.js",
    "revision": "3ac29ef83052da3d353e0a88a94e6e93"
  },
  {
    "url": "assets/js/95.543380ce.js",
    "revision": "ed64e4a0ecf84e27daeeea447122784b"
  },
  {
    "url": "assets/js/96.2bc9ef58.js",
    "revision": "997c5e10617dc3534e4f8c53a6949ac8"
  },
  {
    "url": "assets/js/97.b129e5e5.js",
    "revision": "86fd37b4d4e31edaeae60ef05bca305e"
  },
  {
    "url": "assets/js/98.aab852d6.js",
    "revision": "e52ef481b9a7d208b552daa0c4060ebe"
  },
  {
    "url": "assets/js/99.1ec95b47.js",
    "revision": "6dc07f67d274f373a30fb330a8fbb22c"
  },
  {
    "url": "assets/js/app.e7509c23.js",
    "revision": "2a843218c1e60e884348c339bbc73003"
  },
  {
    "url": "assets/js/vendors~docsearch.6fed1ae2.js",
    "revision": "2ef16c7549a2197852a96e854981a5c7"
  },
  {
    "url": "draft/quick-notes.html",
    "revision": "b8d0a10a5be4280de6c8d1879f8596cc"
  },
  {
    "url": "html/bootstrap/cards.html",
    "revision": "d3bc712b5ae85ce4e8484dcded2f0958"
  },
  {
    "url": "html/bootstrap/forms/checks-radios.html",
    "revision": "ffc332401103dc67fd25e44f43a57999"
  },
  {
    "url": "html/bootstrap/forms/floating-labels.html",
    "revision": "f5f5ca3bef0c0ac618452701a651daf2"
  },
  {
    "url": "html/bootstrap/forms/form-control.html",
    "revision": "2d4629dde2df36e1b003c35214921485"
  },
  {
    "url": "html/bootstrap/forms/index.html",
    "revision": "882b2f61adb4786cc8df28fedc8d6de4"
  },
  {
    "url": "html/bootstrap/forms/layout.html",
    "revision": "c6b0f7537dbf0b34998554ed9a9316c3"
  },
  {
    "url": "html/bootstrap/forms/select.html",
    "revision": "f1a2adad1c06d60b9b6160ceaa92ca5d"
  },
  {
    "url": "html/bootstrap/forms/validation.html",
    "revision": "5a7613007149f1e735a377b739a29216"
  },
  {
    "url": "html/bootstrap/index.html",
    "revision": "dc0ad38ad225096054bf519559e39122"
  },
  {
    "url": "html/bootstrap/tables.html",
    "revision": "abeec6223688f36ffe3bdb779ccfbd81"
  },
  {
    "url": "html/tailwind/customization/index.html",
    "revision": "d1d08f7f65b4d268a9c9f20031e34599"
  },
  {
    "url": "html/tailwind/customization/presets.html",
    "revision": "3e45737fecb7c9c04c09b9d5ba5e8312"
  },
  {
    "url": "html/tailwind/directives.html",
    "revision": "d2bf5a75234fcd8f5fda1c0f3016299d"
  },
  {
    "url": "html/tailwind/index.html",
    "revision": "f3f6064a9178ae3d9f1cfbd38342250d"
  },
  {
    "url": "htmx/index.html",
    "revision": "43a2bc925c3c904be56d6dcbc927ea5a"
  },
  {
    "url": "index.html",
    "revision": "18a774cd75c2de9711b50a054ddb2fff"
  },
  {
    "url": "javascript/alpinejs/index.html",
    "revision": "f871a13b3c046a51eeee62ab65919b90"
  },
  {
    "url": "javascript/alpinejs/textarea.html",
    "revision": "e47729c25328ed8e97cffb147d48b180"
  },
  {
    "url": "javascript/modules.html",
    "revision": "0fc826ab8b5f2ea1731e0f43bd810103"
  },
  {
    "url": "livewire/components/index.html",
    "revision": "2d564deb0ee91782e43e0813327eb4b4"
  },
  {
    "url": "livewire/components/pagination.html",
    "revision": "579cd6b88bf0760a9bbc8be6433921e6"
  },
  {
    "url": "livewire/installation.html",
    "revision": "fcaa3e0235a1d975af1e5ff80342f4ae"
  },
  {
    "url": "nextjs/index.html",
    "revision": "2877097b7c59cbbfa2ed53634030ffaf"
  },
  {
    "url": "nextjs/laravel-sanctum-auth.html",
    "revision": "79637f36f5c3e3738d28998a49e6329e"
  },
  {
    "url": "other/priority-levels.html",
    "revision": "5589aa58413ab7da7c9a456d6b02095f"
  },
  {
    "url": "other/static-site-generators.html",
    "revision": "dee1e87ab660c7adf66d47963f01960f"
  },
  {
    "url": "php/arrays/sorting-arrays.html",
    "revision": "4d08fbcf502313574a5eeff40e0136af"
  },
  {
    "url": "php/classes/pagination.html",
    "revision": "e6c65f5abd9ccd2f19a3654b902aa31a"
  },
  {
    "url": "php/classes/pdo.html",
    "revision": "f1c83ab89c85201ceaf5c2fae3673e6f"
  },
  {
    "url": "php/laravel/authorization/blade-directives/can.html",
    "revision": "33bbf9f80c770b911cb710873e31e631"
  },
  {
    "url": "php/laravel/authorization/blade-directives/canany.html",
    "revision": "d2d79a9c8ab8a4289d6f7825eacef04a"
  },
  {
    "url": "php/laravel/authorization/blade-directives/cannot.html",
    "revision": "a0570bb9440c77e9bbe9dd2bfa7c31a2"
  },
  {
    "url": "php/laravel/authorization/blade-directives/index.html",
    "revision": "b079efc55f6e01a55364f2b07d6c9620"
  },
  {
    "url": "php/laravel/authorization/gates.html",
    "revision": "d1a0badf3d5c7a8586da66b89fa4725b"
  },
  {
    "url": "php/laravel/authorization/index.html",
    "revision": "cfc60c665887e98676c896fdfbfa43a7"
  },
  {
    "url": "php/laravel/authorization/policies.html",
    "revision": "4512d1fd2816b92a73578412a951f460"
  },
  {
    "url": "php/laravel/blade/components.html",
    "revision": "8d426532379d2c086ae102bff9307a0c"
  },
  {
    "url": "php/laravel/blade/directives.html",
    "revision": "d72ccb709870b99bb37762766dcb5445"
  },
  {
    "url": "php/laravel/blade/index.html",
    "revision": "25b2d5e9f6b5fbb87eb071c1d6b00393"
  },
  {
    "url": "php/laravel/controller.html",
    "revision": "53e83917d3d6c0749003ff32ead1951d"
  },
  {
    "url": "php/laravel/database/factories.html",
    "revision": "7a06e7aaaa90bcdd21116f82a01fb1dc"
  },
  {
    "url": "php/laravel/database/index.html",
    "revision": "35d5c4e2288d6abbc7dc08c32cef2ba7"
  },
  {
    "url": "php/laravel/database/migrations.html",
    "revision": "1c5e837918ee127c3eadbe864cd446d0"
  },
  {
    "url": "php/laravel/database/model.html",
    "revision": "4a8294817da141a866bcfff788a629a3"
  },
  {
    "url": "php/laravel/database/observer.html",
    "revision": "b32438e5a0876fa27e2eb008a5a6f56e"
  },
  {
    "url": "php/laravel/database/queries.html",
    "revision": "c07387c5393d67e890ed3be64a69e5c2"
  },
  {
    "url": "php/laravel/database/scopes.html",
    "revision": "3b8bc1dac1687ca81ee7c5126ce3a639"
  },
  {
    "url": "php/laravel/database/seeders.html",
    "revision": "1e9fa17a877cd5cb24f6e1d8979b0993"
  },
  {
    "url": "php/laravel/database/transactions.html",
    "revision": "860a6fed81ed7ff87b440e1c331a0369"
  },
  {
    "url": "php/laravel/enums.html",
    "revision": "faf6af767b2fe85f948c6c3d37a37523"
  },
  {
    "url": "php/laravel/index.html",
    "revision": "0ebe37585db4236318d36b686354560f"
  },
  {
    "url": "php/laravel/package-development/index.html",
    "revision": "fe421892e97dfad82cada5b59acf97ed"
  },
  {
    "url": "php/laravel/package-development/laravel-packager.html",
    "revision": "e47705a33fc14a4c489a44ccbb910ca3"
  },
  {
    "url": "php/laravel/package-development/views.html",
    "revision": "2535d0be47cef2ffaac73c58af7571e6"
  },
  {
    "url": "php/laravel/packages/guides/index.html",
    "revision": "4fd7bb275403ac51d39d924d135ac30b"
  },
  {
    "url": "php/laravel/packages/guides/laravel-pint.html",
    "revision": "9936fab765196850eeeac2a6d7a70bb7"
  },
  {
    "url": "php/laravel/packages/guides/spatie-activity-log.html",
    "revision": "fe093f7c63eadc374a5a1271d9b81e63"
  },
  {
    "url": "php/laravel/packages/guides/spatie-comments.html",
    "revision": "1a76a19684b71057f2ccc86cd4cc27a8"
  },
  {
    "url": "php/laravel/packages/guides/spatie-feed.html",
    "revision": "0b5b429466f220734d828385f51126f6"
  },
  {
    "url": "php/laravel/packages/guides/spatie-media-library.html",
    "revision": "286dd58eacb08ebfaf9618a5f3da8384"
  },
  {
    "url": "php/laravel/packages/guides/spatie-permissions.html",
    "revision": "bd2159cf384b3eacada062380794e7ac"
  },
  {
    "url": "php/laravel/packages/guides/spatie-query-builder.html",
    "revision": "ec1e2671abe89162c480db62bc529897"
  },
  {
    "url": "php/laravel/packages/guides/spatie-settings.html",
    "revision": "620bea9ba7dbf6b42e1777806611cb30"
  },
  {
    "url": "php/laravel/packages/index.html",
    "revision": "7e045d07582cbb1218782b8152e1eda6"
  },
  {
    "url": "php/laravel/policies.html",
    "revision": "a87984c746b138e5772f742d242527ae"
  },
  {
    "url": "php/laravel/relationships/belongs-to-many.html",
    "revision": "d8f0c762b5bb8e7dc2cfcd3d258300d1"
  },
  {
    "url": "php/laravel/relationships/index.html",
    "revision": "9eeb5e0b0436187e627d3326d1aa677a"
  },
  {
    "url": "php/laravel/relationships/many-to-many.html",
    "revision": "c593aa255c88d2d7a7315e0c21b9b2ae"
  },
  {
    "url": "php/laravel/routes.html",
    "revision": "c69f0d7b913a2d2f92777ee63b8972fb"
  },
  {
    "url": "php/laravel/task-scheduling.html",
    "revision": "3a83fa65de6fff53e4794b19e13ec337"
  },
  {
    "url": "php/laravel/testing/controller-methods.html",
    "revision": "1d51871c53a461748f1cc40cb91f7838"
  },
  {
    "url": "php/laravel/testing/index.html",
    "revision": "cd617d4178a3b8393a860c3f9a065fb9"
  },
  {
    "url": "php/laravel/tinker/index.html",
    "revision": "a80960b37ab02a36f2de25437abcce77"
  },
  {
    "url": "php/laravel/traits/index.html",
    "revision": "eb1b96484a24723a630218378aca5286"
  },
  {
    "url": "php/laravel/traits/scopes.html",
    "revision": "670cf85821fcb75336294d45ae833883"
  },
  {
    "url": "php/laravel/validation/form-request.html",
    "revision": "e70b81b6c45a932bb1567e0d5d8fe514"
  },
  {
    "url": "php/laravel/validation/index.html",
    "revision": "7569fa7afade0370f59f3964cf654efe"
  },
  {
    "url": "php/laravel/validation/validation-rules.html",
    "revision": "f0c8e71e9333e4229573a92f9bf38f7b"
  },
  {
    "url": "php/laravel/views.html",
    "revision": "c196119efb39f08b3ee2a271506a088f"
  },
  {
    "url": "php/nova/fields.html",
    "revision": "8a0638aee971448ad707ff2ac0d7b1e2"
  },
  {
    "url": "tools/database.html",
    "revision": "65820276329ea85b9151fcd2dd1b601a"
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
