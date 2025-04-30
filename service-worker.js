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
    "revision": "412d77123b6b788d76c6cf8834617026"
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
    "url": "assets/js/23.85577475.js",
    "revision": "cc44ea98fe9584ae3e4c3b26ea2e463f"
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
    "url": "assets/js/29.908bd5f1.js",
    "revision": "febb2cdb278b490394cf6f70b7c347f1"
  },
  {
    "url": "assets/js/3.5740590c.js",
    "revision": "395b4d6a1743218ea90c901e772361ed"
  },
  {
    "url": "assets/js/30.ed6f8937.js",
    "revision": "46e8307d777bd8d449f9ac19e1b26ebb"
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
    "url": "assets/js/33.d39c97e5.js",
    "revision": "54030971bdee5e7e5e2e1b9720aeb1bb"
  },
  {
    "url": "assets/js/34.1406bd15.js",
    "revision": "36ba799db984d5c9ce6ffebb35803fd2"
  },
  {
    "url": "assets/js/35.97156793.js",
    "revision": "62dcd30c6ace1e759e391cc70245a01a"
  },
  {
    "url": "assets/js/36.e33627a0.js",
    "revision": "a2c6f3c49048dce0dbce112a9e5d8856"
  },
  {
    "url": "assets/js/37.84828b6f.js",
    "revision": "b4f48c4cc348bb9e94bc4b128e8caa26"
  },
  {
    "url": "assets/js/38.7d0cf30f.js",
    "revision": "bf9331f6ad01ccaf3008876cbd8100f7"
  },
  {
    "url": "assets/js/39.62cb3473.js",
    "revision": "b4adbad2b3edf56689044bee13346d85"
  },
  {
    "url": "assets/js/4.22a65ce5.js",
    "revision": "55028f36358f708e8f714389fcba8725"
  },
  {
    "url": "assets/js/40.211087fa.js",
    "revision": "3005a6cfaed38b75d9169d7a144a022b"
  },
  {
    "url": "assets/js/41.991ac16a.js",
    "revision": "d0ca3bba24543b3f662560cb0fb3d6eb"
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
    "url": "assets/js/46.1db3e803.js",
    "revision": "12dbe50406666e4f42a8c14f63a26316"
  },
  {
    "url": "assets/js/47.00772910.js",
    "revision": "06726e609b9c4af13e5eaf31231142a3"
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
    "url": "assets/js/50.f16c163f.js",
    "revision": "6ed064b518fa6e4268701bd1b9036934"
  },
  {
    "url": "assets/js/51.795e5622.js",
    "revision": "f2051fe1460207956d38f82d77583395"
  },
  {
    "url": "assets/js/52.a25ee263.js",
    "revision": "a5cfedbbcff50b9a79acb2628556fd38"
  },
  {
    "url": "assets/js/53.9ff96860.js",
    "revision": "3f61e166d086adccef1080f89f0cb6d7"
  },
  {
    "url": "assets/js/54.c1f65874.js",
    "revision": "085f258a77845fc3033d913ebc1829f6"
  },
  {
    "url": "assets/js/55.0528ddf8.js",
    "revision": "b75e68f8890167a3e3ac84c13505005a"
  },
  {
    "url": "assets/js/56.91966d50.js",
    "revision": "c6ed6efa35d1050bd24a5d5fbe21eccc"
  },
  {
    "url": "assets/js/57.a40d7994.js",
    "revision": "a19601bea6618b9dbd619f8456974859"
  },
  {
    "url": "assets/js/58.eea2b82e.js",
    "revision": "d985b116b49350609e3418fb1069c7db"
  },
  {
    "url": "assets/js/59.aa01cf4a.js",
    "revision": "3af1f0f3aa8f959e7a66be7bcd8f5ce1"
  },
  {
    "url": "assets/js/6.d1e97dd3.js",
    "revision": "276aafaee8cddcfd9c1a37f4373cdee1"
  },
  {
    "url": "assets/js/60.3b023287.js",
    "revision": "52bf9ce2e0c1d89aa055beb0c41d9c5d"
  },
  {
    "url": "assets/js/61.90161553.js",
    "revision": "b72ebccaeb59a1b0522b4383d40cb5c3"
  },
  {
    "url": "assets/js/62.0b26f726.js",
    "revision": "695c29364c2a567b9d696878354adb82"
  },
  {
    "url": "assets/js/63.226db368.js",
    "revision": "7656d03673b1d7d2091a278c1e593dcb"
  },
  {
    "url": "assets/js/64.3a80330d.js",
    "revision": "fb8644e087498bf701d42cbc1eb222f5"
  },
  {
    "url": "assets/js/65.a96020b9.js",
    "revision": "491742b676b7f47186c2889f6478f44d"
  },
  {
    "url": "assets/js/66.ed73884b.js",
    "revision": "3f5741611d5b788433941b4c06e1e3f2"
  },
  {
    "url": "assets/js/67.02363025.js",
    "revision": "9dbeeddc530ab4a35cb329ee9a13f05d"
  },
  {
    "url": "assets/js/68.19b6fbd2.js",
    "revision": "9391cbc15c013855c10bcb581171a12d"
  },
  {
    "url": "assets/js/69.50e742c0.js",
    "revision": "fc6b47a677f75d3c95c13b5ebdf5d94f"
  },
  {
    "url": "assets/js/7.b7c0f320.js",
    "revision": "9acf1f8f90fc9fdda8c7859dea8299f8"
  },
  {
    "url": "assets/js/70.6278d3cd.js",
    "revision": "902fa2a8820c7b40d73aea78929a77e9"
  },
  {
    "url": "assets/js/71.214e9a2a.js",
    "revision": "58f069fe8c36ff7a6d688301afaccd92"
  },
  {
    "url": "assets/js/72.a4edafc9.js",
    "revision": "923021c4c85258ee935bd8dfa9311012"
  },
  {
    "url": "assets/js/73.550be158.js",
    "revision": "42d8890ce6783c6d2aad0ae48f9249be"
  },
  {
    "url": "assets/js/74.9e7b9119.js",
    "revision": "38c9fb87fb4b403d4e4012760469c052"
  },
  {
    "url": "assets/js/75.836b6a8d.js",
    "revision": "4a970577207b89ab1b5ca594d7155c50"
  },
  {
    "url": "assets/js/76.3f776b06.js",
    "revision": "15e9f98dea0739154a83330f8434d2a2"
  },
  {
    "url": "assets/js/77.82ed9344.js",
    "revision": "1a29e4def19460476fee4992997cc977"
  },
  {
    "url": "assets/js/78.2852a5d3.js",
    "revision": "2af3d92b723b85a829137333acec3546"
  },
  {
    "url": "assets/js/79.d4a87678.js",
    "revision": "91ae74a7b3b910f00c1bb83fa8e5cf77"
  },
  {
    "url": "assets/js/80.4b89b933.js",
    "revision": "5b792987be8b7f90b79f4715b2b915b7"
  },
  {
    "url": "assets/js/81.eb8b6558.js",
    "revision": "0c354ebb0a93ec3671956d7cbf8b1a69"
  },
  {
    "url": "assets/js/82.2df6c885.js",
    "revision": "65e92699f18471b877c7234a1dee6255"
  },
  {
    "url": "assets/js/83.9e16cf99.js",
    "revision": "16ebfcef5981d654ff731d6e5d63f532"
  },
  {
    "url": "assets/js/84.a3621771.js",
    "revision": "154abef9bc3b0a5991288eb4a03a2c3d"
  },
  {
    "url": "assets/js/85.57f41e4c.js",
    "revision": "9f444e7eedde94bedadfb28458192784"
  },
  {
    "url": "assets/js/86.57fc3b5c.js",
    "revision": "52f9948c40434342fa5a4004f28f09c4"
  },
  {
    "url": "assets/js/87.33f7c5a6.js",
    "revision": "1e41db74a156ebfaa74ed0a6c45bb53f"
  },
  {
    "url": "assets/js/88.faa4b37f.js",
    "revision": "b6bfa9abf1dbcda37d5c60ee4d3c3f8a"
  },
  {
    "url": "assets/js/89.0c83cf07.js",
    "revision": "13c9c4af1ca406532960012059f01330"
  },
  {
    "url": "assets/js/90.ef687a2b.js",
    "revision": "846333631fdcf6430e49c876076fc132"
  },
  {
    "url": "assets/js/91.a1e2ab1b.js",
    "revision": "5441cc8daf4b640ebc33c5eb03f80f2c"
  },
  {
    "url": "assets/js/92.a22c6972.js",
    "revision": "c4ebfd2309ef319f124290ee767a06d5"
  },
  {
    "url": "assets/js/app.41f255c0.js",
    "revision": "5f48488d9b9b147a1080d966e5e9a295"
  },
  {
    "url": "assets/js/vendors~docsearch.6fed1ae2.js",
    "revision": "2ef16c7549a2197852a96e854981a5c7"
  },
  {
    "url": "draft/quick-notes.html",
    "revision": "ac4058a7e9410c5dc4a7b571d5cc31a8"
  },
  {
    "url": "html/bootstrap/cards.html",
    "revision": "00ea3d21062e34dca3e9488bd186d534"
  },
  {
    "url": "html/bootstrap/forms/checks-radios.html",
    "revision": "a5423df4c0cc45e8d869e0c0b889ca9e"
  },
  {
    "url": "html/bootstrap/forms/floating-labels.html",
    "revision": "e89018e90200f12ad488013a54e865fe"
  },
  {
    "url": "html/bootstrap/forms/form-control.html",
    "revision": "8e0b7104c37feee00a8bf272f9299803"
  },
  {
    "url": "html/bootstrap/forms/index.html",
    "revision": "b8133fe5229389fa8ddb00fff4bbea07"
  },
  {
    "url": "html/bootstrap/forms/layout.html",
    "revision": "b2a57c86369c5f1c5759c1704b561007"
  },
  {
    "url": "html/bootstrap/forms/select.html",
    "revision": "626ba498487e2785b6b68b96edf3c08f"
  },
  {
    "url": "html/bootstrap/forms/validation.html",
    "revision": "a82371df93825c50d71dac43f0428690"
  },
  {
    "url": "html/bootstrap/index.html",
    "revision": "697641aaee4b063b31349256581a055a"
  },
  {
    "url": "html/bootstrap/tables.html",
    "revision": "c473184a1e2e7839ecfcd3d2474bf1c3"
  },
  {
    "url": "html/tailwind/customization/index.html",
    "revision": "2f73bf15607f2f69845238744ed4b1a2"
  },
  {
    "url": "html/tailwind/customization/presets.html",
    "revision": "92d9294c17b41be15a2df9e90896e85e"
  },
  {
    "url": "html/tailwind/directives.html",
    "revision": "79b9bf82720cf1960278f5ec0bff8ed6"
  },
  {
    "url": "html/tailwind/index.html",
    "revision": "a420c00b8d973644a4e250a32e754d63"
  },
  {
    "url": "htmx/index.html",
    "revision": "ec095186055d9ec7ddbdbb1ceb2f474d"
  },
  {
    "url": "index.html",
    "revision": "824392183baa878a9220b1d091fbd899"
  },
  {
    "url": "javascript/alpinejs/index.html",
    "revision": "3aac088ae4c305045576c6cc37226e80"
  },
  {
    "url": "javascript/alpinejs/textarea.html",
    "revision": "f38433923950ed72c9643a2cfa6f0a3f"
  },
  {
    "url": "javascript/modules.html",
    "revision": "4d3db233ece79ffd521b49a15e8d21b9"
  },
  {
    "url": "livewire/components/index.html",
    "revision": "c42bb8b5e6a47a29afcb1ef7172a97e5"
  },
  {
    "url": "livewire/components/pagination.html",
    "revision": "32952af6d6b37e08d42f46a9626702fb"
  },
  {
    "url": "livewire/installation.html",
    "revision": "b07ae3ae761f062aa0f79fda8147405d"
  },
  {
    "url": "other/priority-levels.html",
    "revision": "912b0610af65b685e44ab07fde179e6f"
  },
  {
    "url": "other/static-site-generators.html",
    "revision": "c238af3dfcb5c5caabf007ca4a26f734"
  },
  {
    "url": "php/arrays/sorting-arrays.html",
    "revision": "1c7530d6913bbfcc1397231f4ea7574c"
  },
  {
    "url": "php/classes/pagination.html",
    "revision": "df689dd4f4d65ef6fa67e113581be768"
  },
  {
    "url": "php/classes/pdo.html",
    "revision": "f3d74a6ed1ca831bc9b082f9d928a7a4"
  },
  {
    "url": "php/laravel/blade/components.html",
    "revision": "e6e0c8a549fbe167e8f7bd1d14649502"
  },
  {
    "url": "php/laravel/blade/directives.html",
    "revision": "5fae8194636419b96e576667d064e966"
  },
  {
    "url": "php/laravel/blade/index.html",
    "revision": "3197adcd6e017a2217a86ad20c6375ca"
  },
  {
    "url": "php/laravel/controller.html",
    "revision": "310b02cc31225dd1be651be51d89d23e"
  },
  {
    "url": "php/laravel/database/factories.html",
    "revision": "d51db476ccc791189b32c0b5c19220a5"
  },
  {
    "url": "php/laravel/database/index.html",
    "revision": "0103c51476e4d12b4e7f07c55a8d896c"
  },
  {
    "url": "php/laravel/database/migrations.html",
    "revision": "9438fbc90ea49735eec156bf0016bedf"
  },
  {
    "url": "php/laravel/database/model.html",
    "revision": "d261cdc4ec9f596e811e43ebe1151481"
  },
  {
    "url": "php/laravel/database/observer.html",
    "revision": "6fdc1649f68f91581731d6d7663a2232"
  },
  {
    "url": "php/laravel/database/queries.html",
    "revision": "2600f00a18a8247b0fc158e8a7137773"
  },
  {
    "url": "php/laravel/database/scopes.html",
    "revision": "987987037b35babb0a15ebd06ef5c678"
  },
  {
    "url": "php/laravel/database/seeders.html",
    "revision": "655cb70f2957752805ce71dfc1cc54fd"
  },
  {
    "url": "php/laravel/enums.html",
    "revision": "081d5fd9c017b2b6eb75804147313ffb"
  },
  {
    "url": "php/laravel/index.html",
    "revision": "347300cd97ce531f57b61ccdcaea4fbf"
  },
  {
    "url": "php/laravel/package-development/index.html",
    "revision": "425f3eaf2402c7c2643cc1256e91c6ef"
  },
  {
    "url": "php/laravel/package-development/laravel-packager.html",
    "revision": "2b887c93fce090050c1db768e7d27239"
  },
  {
    "url": "php/laravel/package-development/views.html",
    "revision": "eb44858d961d24762735aa19bbe08d83"
  },
  {
    "url": "php/laravel/packages/guides/index.html",
    "revision": "d6397988987635230199952818eb7ac8"
  },
  {
    "url": "php/laravel/packages/guides/spatie-activity-log.html",
    "revision": "2798553efa3b6dbc86f86a2b91aaec1c"
  },
  {
    "url": "php/laravel/packages/guides/spatie-comments.html",
    "revision": "a2e6f189cc92a9271298e484db5de55b"
  },
  {
    "url": "php/laravel/packages/guides/spatie-feed.html",
    "revision": "babcc6810e084674a359fccb42c7c57f"
  },
  {
    "url": "php/laravel/packages/guides/spatie-media-library.html",
    "revision": "2b11a6dfc0644a8283ba9906887c727a"
  },
  {
    "url": "php/laravel/packages/guides/spatie-permissions.html",
    "revision": "3e8300ddc019dce0210bcfdd7511d736"
  },
  {
    "url": "php/laravel/packages/guides/spatie-query-builder.html",
    "revision": "bf3e01c18403849a4df5f83fe6690847"
  },
  {
    "url": "php/laravel/packages/guides/spatie-settings.html",
    "revision": "dae898db46310184c5714181b86b13a2"
  },
  {
    "url": "php/laravel/packages/index.html",
    "revision": "8c72cf93d7ba23b5456b0b31f16aec6a"
  },
  {
    "url": "php/laravel/policies.html",
    "revision": "5726bab0c28b54ae0cb6a91d2c6a5471"
  },
  {
    "url": "php/laravel/relationships/belongs-to-many.html",
    "revision": "e8d2ccf651760b3f560f4bc2a8f9b339"
  },
  {
    "url": "php/laravel/relationships/index.html",
    "revision": "6c7fa8a9c90f3ffb52c5cc559dbee209"
  },
  {
    "url": "php/laravel/relationships/many-to-many.html",
    "revision": "54ce260bc3388080c1acec304f24de7d"
  },
  {
    "url": "php/laravel/routes.html",
    "revision": "022a7a518d4ee46e487cd79341564a58"
  },
  {
    "url": "php/laravel/testing/controller-methods.html",
    "revision": "258092e58753aace1e1cc01ae138e99e"
  },
  {
    "url": "php/laravel/testing/index.html",
    "revision": "754d78d9fcbe4adce2fbf9ea9233708a"
  },
  {
    "url": "php/laravel/tinker/index.html",
    "revision": "0a7fd44cbe849b8e2b17cfd2bb1ab789"
  },
  {
    "url": "php/laravel/traits/index.html",
    "revision": "055b994c383508a3662c05d88d75dafc"
  },
  {
    "url": "php/laravel/traits/scopes.html",
    "revision": "b4ceb8b713c27756aa4acc0805c4d461"
  },
  {
    "url": "php/laravel/validation/form-request.html",
    "revision": "a187bae1252e18e15336c36fe134be29"
  },
  {
    "url": "php/laravel/validation/index.html",
    "revision": "53e88a34f60c6b7a66ba10f5e0094791"
  },
  {
    "url": "php/laravel/validation/validation-rules.html",
    "revision": "b07da3e3900a688e1e3c42caafe89b6e"
  },
  {
    "url": "php/laravel/views.html",
    "revision": "f08d822278570741583ac2bc2ff16310"
  },
  {
    "url": "php/nova/fields.html",
    "revision": "b48970a124e9cf9d8cbb058156ba24b9"
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
