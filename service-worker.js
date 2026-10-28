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
    "revision": "9ad90e08d8f58b231cd7a374ccb135ad"
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
    "url": "assets/js/100.4903fb76.js",
    "revision": "0c0590a97f16753b8a6cc44ce7ee0686"
  },
  {
    "url": "assets/js/101.f78d09b2.js",
    "revision": "71f19884528800563df7fba5b9f6a6d6"
  },
  {
    "url": "assets/js/102.8e2d6603.js",
    "revision": "7302d4966d369f8d3d29d609fc3e06f0"
  },
  {
    "url": "assets/js/103.31511702.js",
    "revision": "cb50d49fb7c7dab8b66242824b3478f9"
  },
  {
    "url": "assets/js/104.54fa9e7d.js",
    "revision": "216170dfca0bb8120febb988faea1a0c"
  },
  {
    "url": "assets/js/105.6628164a.js",
    "revision": "e93fd9632b20c426611008178b824ed5"
  },
  {
    "url": "assets/js/106.14273714.js",
    "revision": "aacad130fa65eef34b43f95902b79085"
  },
  {
    "url": "assets/js/107.ab55596c.js",
    "revision": "914949ae8463883d54daf60ed2190ce9"
  },
  {
    "url": "assets/js/108.fb80ae39.js",
    "revision": "a807efd1115a183d16e156b5963ea1b6"
  },
  {
    "url": "assets/js/109.b694a2e6.js",
    "revision": "02f6c377c10e42e45538d12dc9483d0e"
  },
  {
    "url": "assets/js/11.788742d3.js",
    "revision": "5811556242a6d81028611d4c0a27f632"
  },
  {
    "url": "assets/js/110.8b0e2a73.js",
    "revision": "8500090e2782c25cbdb2dd917d464586"
  },
  {
    "url": "assets/js/111.91c03936.js",
    "revision": "b6940a71227a8ab9ab183c24c8069a5b"
  },
  {
    "url": "assets/js/112.71597c30.js",
    "revision": "62809976beb14ecbcac3b089280e1699"
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
    "url": "assets/js/23.7f0c4b96.js",
    "revision": "e8e75cb4c2e07f8f5fdeb989160a843c"
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
    "url": "assets/js/27.ea6b2824.js",
    "revision": "302695ec4cf4a54ca7cd9f09e579365e"
  },
  {
    "url": "assets/js/28.f2463ff6.js",
    "revision": "b2a3ed333cfdeb49bafa38da9f2eb468"
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
    "url": "assets/js/30.6c01afb3.js",
    "revision": "e7f9c14286e878381e9423cd2d57f414"
  },
  {
    "url": "assets/js/31.5a5f6aa1.js",
    "revision": "9f6a42f45e175f537588ed777c2146ad"
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
    "url": "assets/js/35.6c43ce9e.js",
    "revision": "ef6f4cb933457d2602a8bf55f21a9fdb"
  },
  {
    "url": "assets/js/36.1ddc98d2.js",
    "revision": "e9d5e7a47778a70334f0304b8d0894fd"
  },
  {
    "url": "assets/js/37.017730b3.js",
    "revision": "a5d09a16a67c314c2ed0e944495a7de3"
  },
  {
    "url": "assets/js/38.573ee1b3.js",
    "revision": "130b8b80d8a33e31ae86191855d08a7b"
  },
  {
    "url": "assets/js/39.f5362876.js",
    "revision": "84651104d47d21770564c27ed4558878"
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
    "url": "assets/js/41.4bc9c4a5.js",
    "revision": "0fcfa616ec8d6c4e9cb6a2a24599d4c7"
  },
  {
    "url": "assets/js/42.41fb8e6b.js",
    "revision": "86eddab21d5d5083c4734dd839ede1a3"
  },
  {
    "url": "assets/js/43.72bd7d81.js",
    "revision": "ef5d75d304a28a5f81f0286ba49dd595"
  },
  {
    "url": "assets/js/44.13732b62.js",
    "revision": "82f7f822390cf76e3647baf5aaa73430"
  },
  {
    "url": "assets/js/45.8cca8ab4.js",
    "revision": "12dec4562718550c0d97a5f327dde691"
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
    "url": "assets/js/48.9ad851fa.js",
    "revision": "a6703eb83dca22ae4b2affda3b2b3b64"
  },
  {
    "url": "assets/js/49.f4874167.js",
    "revision": "5eadc9edb84c773bfa6378aa77bc56de"
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
    "url": "assets/js/51.aaae567c.js",
    "revision": "c057d7afe6d08819a30a81b30745d965"
  },
  {
    "url": "assets/js/52.55bed9f2.js",
    "revision": "40eed5e6e426e6175a65bfc8b0c2f683"
  },
  {
    "url": "assets/js/53.b3e6c1fe.js",
    "revision": "442dda5dec43363432f472d7e51bc616"
  },
  {
    "url": "assets/js/54.2f7d5cb7.js",
    "revision": "548b585638bdb8e55ed0ffd09e8f724f"
  },
  {
    "url": "assets/js/55.a2d83a3d.js",
    "revision": "512548a1a15a5bb0fea7e96a0ceeb298"
  },
  {
    "url": "assets/js/56.79522979.js",
    "revision": "93bfeaf426f6e9ab9b61555ab20726e9"
  },
  {
    "url": "assets/js/57.847f03c0.js",
    "revision": "9d32022381b761382039a7c1e22ed5d5"
  },
  {
    "url": "assets/js/58.18302a13.js",
    "revision": "9eb0e6a7574aa0b0e26bdabca9d48654"
  },
  {
    "url": "assets/js/59.620212fc.js",
    "revision": "9cdd49e52977c2b84a8eeaed1a28586a"
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
    "url": "assets/js/63.f34aa605.js",
    "revision": "8706b9fe8f8f0742bbe256b52e8340a4"
  },
  {
    "url": "assets/js/64.b96f62c4.js",
    "revision": "3e215f19d2a4e1dbc25fc4006477d270"
  },
  {
    "url": "assets/js/65.83f298ed.js",
    "revision": "3586c304f750de2ae8fb8ee3ad2bd0ca"
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
    "url": "assets/js/68.5283daa2.js",
    "revision": "6cadfc3cf34cbe2e3c2ee041cff00cd2"
  },
  {
    "url": "assets/js/69.79f6d495.js",
    "revision": "d0de0bd5b16e003c813d217b88877872"
  },
  {
    "url": "assets/js/7.ca5a7b15.js",
    "revision": "7f79cab7262ae574c3075ebbf4c1ac64"
  },
  {
    "url": "assets/js/70.59cfdb1b.js",
    "revision": "dd485045aaf79923d87c671a339035db"
  },
  {
    "url": "assets/js/71.66a27359.js",
    "revision": "5d007442a86fd7b36e795e2775aa2819"
  },
  {
    "url": "assets/js/72.f370ccd0.js",
    "revision": "1698cf2ce96f5ca909428c822d388137"
  },
  {
    "url": "assets/js/73.2507c16c.js",
    "revision": "618ca12e2cbc33ecdb8ac77ea7599945"
  },
  {
    "url": "assets/js/74.c5e41fd6.js",
    "revision": "a89c96fd319a5eb5a33e22b3b936e99f"
  },
  {
    "url": "assets/js/75.b3267ef0.js",
    "revision": "d609d78ff8ecdbbd7ee379a237151ec5"
  },
  {
    "url": "assets/js/76.f35fb7e2.js",
    "revision": "893f76e7a8e4ccb4d1e856ca7d46e3b2"
  },
  {
    "url": "assets/js/77.49de554b.js",
    "revision": "823e4027b730621574a2c673582bbbc9"
  },
  {
    "url": "assets/js/78.7d7ac655.js",
    "revision": "02a3695e973a5dd66c9c58fdbf134801"
  },
  {
    "url": "assets/js/79.f530e3bd.js",
    "revision": "fd2bc3877d23d864abe254b71a90b0a2"
  },
  {
    "url": "assets/js/80.ec9bf258.js",
    "revision": "444566780951355fddb83afef7f7d096"
  },
  {
    "url": "assets/js/81.5efbcea8.js",
    "revision": "a287be2505a3986babf24f5aad17b806"
  },
  {
    "url": "assets/js/82.010d730f.js",
    "revision": "730e56dd8010d4fcfc6bf2c7c923efe0"
  },
  {
    "url": "assets/js/83.e93aa8d4.js",
    "revision": "750150ccfbb37b2db1dc4c4022e53b79"
  },
  {
    "url": "assets/js/84.1925efff.js",
    "revision": "8092def4902515a2d7634a3a9106fbdf"
  },
  {
    "url": "assets/js/85.92319acc.js",
    "revision": "588e4e5d15bcefad920da609f938c71a"
  },
  {
    "url": "assets/js/86.9339865a.js",
    "revision": "7ab4171c0e3f161c42d8d62ff1eb6d6c"
  },
  {
    "url": "assets/js/87.a2ac2c9c.js",
    "revision": "b2a35241ccb156a5e5b91d46222dd0e2"
  },
  {
    "url": "assets/js/88.3e6e46e0.js",
    "revision": "3abbc053baa4130e6412cac129c79572"
  },
  {
    "url": "assets/js/89.41be3268.js",
    "revision": "3a2f87d1a88b7d87f4886ae88dd67da7"
  },
  {
    "url": "assets/js/90.ea8880af.js",
    "revision": "701f07ab6e3b637c2993d1e16ca263fe"
  },
  {
    "url": "assets/js/91.b130cd24.js",
    "revision": "04b0533c5fdef547af5cbc18129f897a"
  },
  {
    "url": "assets/js/92.93747ed8.js",
    "revision": "fa9182d162ca05299f3d9f70f54af843"
  },
  {
    "url": "assets/js/93.fbb11865.js",
    "revision": "e48d8db759c8d441d10438830ba6d814"
  },
  {
    "url": "assets/js/94.2da0e9fc.js",
    "revision": "1970d92ec5f8f546a486aa29a4d38293"
  },
  {
    "url": "assets/js/95.88f9a5c2.js",
    "revision": "a8bdb0bc3d71a1cc65e79d16feb46987"
  },
  {
    "url": "assets/js/96.1cdf82e3.js",
    "revision": "b3df8745f90fb86446cefb612476ce4a"
  },
  {
    "url": "assets/js/97.72403144.js",
    "revision": "afad1856d7406b7957804d299f61aaa1"
  },
  {
    "url": "assets/js/98.2e1bf8ec.js",
    "revision": "7146796986ae7a04864a2437bfcdfffb"
  },
  {
    "url": "assets/js/99.9e0875e6.js",
    "revision": "46c78734420dbd333345b5bd55582971"
  },
  {
    "url": "assets/js/app.314e8ef1.js",
    "revision": "f4b052e5439bb750aa3a0116c103931c"
  },
  {
    "url": "assets/js/vendors~docsearch.0644ee0a.js",
    "revision": "b77890ee16800d927f76d8f8f61a0875"
  },
  {
    "url": "draft/quick-notes.html",
    "revision": "e55c4a9c1ed84b33ea3904b51a8447b6"
  },
  {
    "url": "flux-ui/dropdowns.html",
    "revision": "ddb829a4cdf19411c461bfc220c00ab7"
  },
  {
    "url": "flux-ui/tables.html",
    "revision": "b94702ccb605777f72f41ce5402d4181"
  },
  {
    "url": "html/bootstrap/cards.html",
    "revision": "27d323bcbbdececcf736b8c57d2096d2"
  },
  {
    "url": "html/bootstrap/forms/checks-radios.html",
    "revision": "04d01a6ea852e8216fe11295b455a5d7"
  },
  {
    "url": "html/bootstrap/forms/floating-labels.html",
    "revision": "592b394c9b66270fe45b077556be180d"
  },
  {
    "url": "html/bootstrap/forms/form-control.html",
    "revision": "dcda535a9c7a44644dce4286eb9c2c8a"
  },
  {
    "url": "html/bootstrap/forms/index.html",
    "revision": "7840bd67331b93c3ca9329cc8ac511a1"
  },
  {
    "url": "html/bootstrap/forms/layout.html",
    "revision": "9c26f2b29935e31e4d2b5955f327b79a"
  },
  {
    "url": "html/bootstrap/forms/select.html",
    "revision": "b170a0dfb4498525cfbe1237ae28db00"
  },
  {
    "url": "html/bootstrap/forms/validation.html",
    "revision": "8e1a50064f47b14f1443c8b57afcc8a9"
  },
  {
    "url": "html/bootstrap/index.html",
    "revision": "8eab0bf75e117b9961f3129885e628ab"
  },
  {
    "url": "html/bootstrap/tables.html",
    "revision": "ca4606fc3a542b01aa9fb760a578cfc0"
  },
  {
    "url": "html/tailwind/customization/index.html",
    "revision": "233aa5e3ba8d599bf853f02f9a5e3a1f"
  },
  {
    "url": "html/tailwind/customization/presets.html",
    "revision": "b532248732a0afcb7bf8fcbc46a34849"
  },
  {
    "url": "html/tailwind/directives.html",
    "revision": "0ebfdbff4bb851f46524241d364f7999"
  },
  {
    "url": "html/tailwind/index.html",
    "revision": "6235a54925840decba5ff0681435ef3c"
  },
  {
    "url": "htmx/index.html",
    "revision": "c511f5804c50dfbd23442bd3865ea5ae"
  },
  {
    "url": "index.html",
    "revision": "f2fa6db8527cfd29c27cbb6f67a5ed11"
  },
  {
    "url": "javascript/alpinejs/index.html",
    "revision": "09411b63d43ff7bc36a2e9e83b8eafef"
  },
  {
    "url": "javascript/alpinejs/textarea.html",
    "revision": "32bc348d6395d4167510685856520f81"
  },
  {
    "url": "javascript/modules.html",
    "revision": "4663c897c555b28dc8a746ae7918c6c0"
  },
  {
    "url": "livewire/components/index.html",
    "revision": "5ab318e110462ea12e6a5f388e78c525"
  },
  {
    "url": "livewire/components/pagination.html",
    "revision": "dd5f86b97cf64ce79c6e226f6bf548a7"
  },
  {
    "url": "livewire/installation.html",
    "revision": "f602fadf6ac84c8c4bcb5df085e3cdd6"
  },
  {
    "url": "nextjs/index.html",
    "revision": "4db6be4f0ff9a522a6689f9d0a3e887c"
  },
  {
    "url": "nextjs/laravel-sanctum-auth.html",
    "revision": "5f8bd5330252be2fee771423d78da475"
  },
  {
    "url": "other/priority-levels.html",
    "revision": "4c893a4c26f1981faeb9294edf36bf55"
  },
  {
    "url": "other/static-site-generators.html",
    "revision": "3df6fc0102c577268a80066020e6cabb"
  },
  {
    "url": "php/arrays/sorting-arrays.html",
    "revision": "c524c6b29fa830298c8170876e490b17"
  },
  {
    "url": "php/classes/pagination.html",
    "revision": "7f0f2103dd899c0f889ba1662014a622"
  },
  {
    "url": "php/classes/pdo.html",
    "revision": "b097bfd1e5a73902235030a36025d805"
  },
  {
    "url": "php/laravel/authorization/blade-directives/can.html",
    "revision": "73910769e068ac2e6f2cd0abc3e49946"
  },
  {
    "url": "php/laravel/authorization/blade-directives/canany.html",
    "revision": "e246695fb3a514d648c64a4d648cf23b"
  },
  {
    "url": "php/laravel/authorization/blade-directives/cannot.html",
    "revision": "1edc98a8843f028466c36e3a069732b7"
  },
  {
    "url": "php/laravel/authorization/blade-directives/index.html",
    "revision": "af58b4e48a7a275a2657ea9cf1b5cbfa"
  },
  {
    "url": "php/laravel/authorization/gates.html",
    "revision": "ca31edaa994413b8b57ace292b23c851"
  },
  {
    "url": "php/laravel/authorization/index.html",
    "revision": "3d81ffd5ec97abe5e56b1633cc21bd5a"
  },
  {
    "url": "php/laravel/authorization/policies.html",
    "revision": "374811df9c28fb7ca448c4e70a59f2c6"
  },
  {
    "url": "php/laravel/blade/components.html",
    "revision": "d6ca77c7d81adbc8f2aa463d8ecd55a3"
  },
  {
    "url": "php/laravel/blade/directives.html",
    "revision": "6424ac7a13e1606d79f2b3aef3f1317a"
  },
  {
    "url": "php/laravel/blade/index.html",
    "revision": "b03d874f7f9e0ff533b5ad35c5bd6129"
  },
  {
    "url": "php/laravel/controller.html",
    "revision": "003908d37a642651a36e664c19108128"
  },
  {
    "url": "php/laravel/database/factories.html",
    "revision": "734ea9a94168a88a4515156cd117c87e"
  },
  {
    "url": "php/laravel/database/index.html",
    "revision": "121b31e72c73505194a6521dbc7cd06f"
  },
  {
    "url": "php/laravel/database/migrations.html",
    "revision": "237acb896fb54e23092f9949ab68d6e7"
  },
  {
    "url": "php/laravel/database/model.html",
    "revision": "5bf6cafce2d0ad08c044e201c6e92600"
  },
  {
    "url": "php/laravel/database/observer.html",
    "revision": "f10a9fe86f3a1e2880b17e8a32adfad0"
  },
  {
    "url": "php/laravel/database/queries.html",
    "revision": "4c5a531491a2709b61f2f8f1387750a8"
  },
  {
    "url": "php/laravel/database/quiet-model-events.html",
    "revision": "1a49e383b9976112209e769fb9002b78"
  },
  {
    "url": "php/laravel/database/read-replicas.html",
    "revision": "60f6a7165070d9af9c58e96f3b07f2b2"
  },
  {
    "url": "php/laravel/database/scopes.html",
    "revision": "e0db58b8a010790042ef398a6a6d1672"
  },
  {
    "url": "php/laravel/database/seeders.html",
    "revision": "b035af98c8b8d3bfe7102b19c9c7f9d0"
  },
  {
    "url": "php/laravel/database/transactions.html",
    "revision": "adbbbab93f4b9a324fcd19a8c8dba86a"
  },
  {
    "url": "php/laravel/enums.html",
    "revision": "0bb6d86e6500888ce83a371de9c70881"
  },
  {
    "url": "php/laravel/index.html",
    "revision": "fef4affae4a058d7dd0cac709d4e7bd5"
  },
  {
    "url": "php/laravel/package-development/index.html",
    "revision": "08014c7a0ed21a06450091d23007a078"
  },
  {
    "url": "php/laravel/package-development/laravel-packager.html",
    "revision": "07ea14b971a611c18880930aa8604f79"
  },
  {
    "url": "php/laravel/package-development/views.html",
    "revision": "9f0f59eb0cdc94830f74c70356c6ce24"
  },
  {
    "url": "php/laravel/packages/guides/index.html",
    "revision": "5c8413cd9c2d45452a7d5546ea1a487c"
  },
  {
    "url": "php/laravel/packages/guides/laravel-pint.html",
    "revision": "f6e815858d865afc5e9937f27fa13565"
  },
  {
    "url": "php/laravel/packages/guides/spatie-activity-log.html",
    "revision": "b914d18deb01d2b66a0a36164b298ca4"
  },
  {
    "url": "php/laravel/packages/guides/spatie-comments.html",
    "revision": "3fbd18407a74864f1e944bf70976bcd5"
  },
  {
    "url": "php/laravel/packages/guides/spatie-feed.html",
    "revision": "af2e3d3a657ee06b51e03e3cfe0811ff"
  },
  {
    "url": "php/laravel/packages/guides/spatie-media-library.html",
    "revision": "aac16157563dc003471b23d3c2374816"
  },
  {
    "url": "php/laravel/packages/guides/spatie-permissions.html",
    "revision": "f3efd5ae7bb6ca4a42084915529b9ead"
  },
  {
    "url": "php/laravel/packages/guides/spatie-query-builder.html",
    "revision": "2323d569345cc7bd5bb47220c575ab37"
  },
  {
    "url": "php/laravel/packages/guides/spatie-settings.html",
    "revision": "eb93dd434e60bfcb7954c799813a2c43"
  },
  {
    "url": "php/laravel/packages/index.html",
    "revision": "2232f54c271bce9c6add72de5240e9bd"
  },
  {
    "url": "php/laravel/pipelines.html",
    "revision": "ef424b31aac410324690d1b160c1ed57"
  },
  {
    "url": "php/laravel/policies.html",
    "revision": "1f77c9ddd227ca012bc43cd76daa991f"
  },
  {
    "url": "php/laravel/queues.html",
    "revision": "0fb10aa21dd18f6114d38422fe2537c8"
  },
  {
    "url": "php/laravel/relationships/belongs-to-many.html",
    "revision": "18ba4df12056b8a8376a82b525de9228"
  },
  {
    "url": "php/laravel/relationships/index.html",
    "revision": "4d627c0cf181c0b09c29af3460adaa60"
  },
  {
    "url": "php/laravel/relationships/many-to-many.html",
    "revision": "b2ffc7f3e5c4b834f4a935bf9b85d19b"
  },
  {
    "url": "php/laravel/routes.html",
    "revision": "ad89493fdeb857852f2a6c0356ce8878"
  },
  {
    "url": "php/laravel/task-scheduling.html",
    "revision": "688fc1114439bad3674c0058227d24de"
  },
  {
    "url": "php/laravel/testing/controller-methods.html",
    "revision": "e91a95d1f57990e27494470aff88d058"
  },
  {
    "url": "php/laravel/testing/index.html",
    "revision": "61f3e2a01f5f55fcb843ddfdd8003d7d"
  },
  {
    "url": "php/laravel/tinker/index.html",
    "revision": "7f4b5d39fc410318d5a2c6629c179981"
  },
  {
    "url": "php/laravel/traits/index.html",
    "revision": "d7b4ae42986ebf9dbb49c6bf2b075618"
  },
  {
    "url": "php/laravel/traits/scopes.html",
    "revision": "25cad898e98e6c9ec909e8369f649cfd"
  },
  {
    "url": "php/laravel/validation/fluent-rule-builders.html",
    "revision": "b91b7b519839d93793f2ec4abe47ec3e"
  },
  {
    "url": "php/laravel/validation/form-request.html",
    "revision": "2c44fa48349d64e552e16b7bc3373d5b"
  },
  {
    "url": "php/laravel/validation/index.html",
    "revision": "3eb4a6ea37a7d98c978e0c58ffa4ff5a"
  },
  {
    "url": "php/laravel/validation/validation-rules.html",
    "revision": "67a5082ccc67f239b527b3f64c67641b"
  },
  {
    "url": "php/laravel/views.html",
    "revision": "12b2e3a021d390afcae0aea66218585a"
  },
  {
    "url": "php/nova/fields.html",
    "revision": "c0f2c9c609b44d7e7a53ac35e674105f"
  },
  {
    "url": "tools/database.html",
    "revision": "97ee49a91c0bd8cf62cf72305a6e486a"
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
