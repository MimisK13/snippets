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
    "revision": "b50c7ca508a2d1812e3f8fc71712a522"
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
    "url": "assets/js/100.bdd0d440.js",
    "revision": "aee769cc8fcd89dabbb93387439e4d89"
  },
  {
    "url": "assets/js/101.cc9a3d43.js",
    "revision": "d1c828401041b38b980d59f866deeefe"
  },
  {
    "url": "assets/js/102.97908b3d.js",
    "revision": "0840f342c7e8d0fc7fc86cf1f260d59f"
  },
  {
    "url": "assets/js/103.dee224e6.js",
    "revision": "7c5ccab5cb5542fb100b536e0b0a67a7"
  },
  {
    "url": "assets/js/104.99568d45.js",
    "revision": "cb51cc445d4a447f9a501d08c3169e3f"
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
    "url": "assets/js/23.0cc985ea.js",
    "revision": "bec02b99a799331ca383dddc82132504"
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
    "url": "assets/js/27.26da8938.js",
    "revision": "2f3edd6e9c6defd56f40bf27a3254ffa"
  },
  {
    "url": "assets/js/28.9e2aad5c.js",
    "revision": "ec1018994503d0c9a823a9e7b634a6f6"
  },
  {
    "url": "assets/js/29.43e78406.js",
    "revision": "006daed5eae8f4f41ab6aee1e656209c"
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
    "url": "assets/js/37.88f9b814.js",
    "revision": "573f63dac70a2c0c51afd3129c2a0b1d"
  },
  {
    "url": "assets/js/38.844b4e09.js",
    "revision": "a5682c42bd4598885e0aa51807243752"
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
    "url": "assets/js/40.34d21a8f.js",
    "revision": "0a8b7bcbbf50652daebb8e999cdc446d"
  },
  {
    "url": "assets/js/41.616bde69.js",
    "revision": "e3b29517852cccd6698dcd60b18a14a6"
  },
  {
    "url": "assets/js/42.197079c4.js",
    "revision": "8dde170e35e77ed44e153ce2020fa15a"
  },
  {
    "url": "assets/js/43.769c994f.js",
    "revision": "bd98265d1e8448329b4f5a2c231ef4fe"
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
    "url": "assets/js/50.f916dbd5.js",
    "revision": "ad4d9ac63d593a373f2a3978b99b4439"
  },
  {
    "url": "assets/js/51.617d4383.js",
    "revision": "fbca6666a73a91aa22368b5281e46aea"
  },
  {
    "url": "assets/js/52.e10bf13d.js",
    "revision": "63cacd22bc9598a01cffdd6c709b1ffa"
  },
  {
    "url": "assets/js/53.4d602740.js",
    "revision": "8ff213a6e5b7c2d9f9b600a89f4ac630"
  },
  {
    "url": "assets/js/54.13371812.js",
    "revision": "83fb7f461bd6626ee612adccbca1d107"
  },
  {
    "url": "assets/js/55.a3a5131d.js",
    "revision": "527c6b0ca89f0631ca0e28da154415b5"
  },
  {
    "url": "assets/js/56.b0c3dc3a.js",
    "revision": "d879ada091ae6f39cddb9904d2d9fa34"
  },
  {
    "url": "assets/js/57.00603b59.js",
    "revision": "31975f862bfc95362d5cfd43d9f59741"
  },
  {
    "url": "assets/js/58.ad3b3ae7.js",
    "revision": "969443990b64961b8bc6ff726e458e0e"
  },
  {
    "url": "assets/js/59.84c381ea.js",
    "revision": "f5865a9f57e819f81b9b55454bd3ad3b"
  },
  {
    "url": "assets/js/6.d1e97dd3.js",
    "revision": "276aafaee8cddcfd9c1a37f4373cdee1"
  },
  {
    "url": "assets/js/60.78c749c3.js",
    "revision": "310dade88e9fa0fe6bf89a1f0b8d9236"
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
    "url": "assets/js/65.fa81d5a9.js",
    "revision": "7c873d8f16ce008a3fb478c49b54a6e2"
  },
  {
    "url": "assets/js/66.ce074119.js",
    "revision": "836ebb2b2cb773ea571e95c5dc764db7"
  },
  {
    "url": "assets/js/67.23d37286.js",
    "revision": "4d71c3bc02af7e70db75073134e96b4d"
  },
  {
    "url": "assets/js/68.6aec28a3.js",
    "revision": "97527e195229a24619553ab0942846b4"
  },
  {
    "url": "assets/js/69.074c68c0.js",
    "revision": "ef0d8bfbd6f1a953b057b962ee9c6ed6"
  },
  {
    "url": "assets/js/7.b7c0f320.js",
    "revision": "9acf1f8f90fc9fdda8c7859dea8299f8"
  },
  {
    "url": "assets/js/70.f65d7d01.js",
    "revision": "5261ddae8a494a4be3af61d8b998c904"
  },
  {
    "url": "assets/js/71.864910fd.js",
    "revision": "d51522cfe94ec53487149d50b57079a4"
  },
  {
    "url": "assets/js/72.f9e24368.js",
    "revision": "1291c3be615e3393dcfba97dac596f03"
  },
  {
    "url": "assets/js/73.c12283cb.js",
    "revision": "e5dfa4cdf1b958088f9068a5ee52630e"
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
    "url": "assets/js/76.3c6c5a68.js",
    "revision": "894f25d5e38b61217bb90ed1bc7850de"
  },
  {
    "url": "assets/js/77.fcea8157.js",
    "revision": "ba26d98e813618f5260b634ffe802977"
  },
  {
    "url": "assets/js/78.290f36a4.js",
    "revision": "c06ed77d44ce9ade2495b61229798911"
  },
  {
    "url": "assets/js/79.af9e5ba4.js",
    "revision": "e3256921ce77b1d6e74edcde72a714ec"
  },
  {
    "url": "assets/js/80.7122857b.js",
    "revision": "46905b930fe3b6a3d0012c77045f99dd"
  },
  {
    "url": "assets/js/81.b5733721.js",
    "revision": "1920ccd131aa6e7a6cd291f82219e7a2"
  },
  {
    "url": "assets/js/82.a233b45a.js",
    "revision": "261348c85cd631dedcf1405d6d2cf3f9"
  },
  {
    "url": "assets/js/83.af7986ad.js",
    "revision": "50e4d07bcda5810bb3d3764fb35937bc"
  },
  {
    "url": "assets/js/84.9ddc48f3.js",
    "revision": "7163239ccec78e69c7c5dc2f3c84e7f8"
  },
  {
    "url": "assets/js/85.38333c30.js",
    "revision": "efce7ee47340f04843454e805729635a"
  },
  {
    "url": "assets/js/86.8505f3b9.js",
    "revision": "ffa1c393681bb023cdf085f34ae99467"
  },
  {
    "url": "assets/js/87.bb876533.js",
    "revision": "7bbba92c7a59c5564de691d0c01fe38f"
  },
  {
    "url": "assets/js/88.2fc9fc38.js",
    "revision": "6b5eb6671277f70e63ff39c47755b15d"
  },
  {
    "url": "assets/js/89.c1a1d07a.js",
    "revision": "e1489f57a423b4d578754e1e6974fe74"
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
    "url": "assets/js/92.23df8e09.js",
    "revision": "f21172f9f387ced4d9ed88d715a2edf2"
  },
  {
    "url": "assets/js/93.085847f8.js",
    "revision": "44cbb4a2814d839f65fdf7f9bc5e1efd"
  },
  {
    "url": "assets/js/94.df2d32a8.js",
    "revision": "3ac29ef83052da3d353e0a88a94e6e93"
  },
  {
    "url": "assets/js/95.8e2e53e4.js",
    "revision": "ffbb9a939b2d524be413b0c6bcecd57c"
  },
  {
    "url": "assets/js/96.2c209bbe.js",
    "revision": "87aeaed28895c0801d590b61d18acb46"
  },
  {
    "url": "assets/js/97.c4131478.js",
    "revision": "b89ea4f488607e40035c4d9c4d558bda"
  },
  {
    "url": "assets/js/98.2cdaf2b0.js",
    "revision": "62ed5569b5d809f1bda87b00bd1c1e26"
  },
  {
    "url": "assets/js/99.b2e69d35.js",
    "revision": "bc82902a560ffd11ba293c2d31eb2463"
  },
  {
    "url": "assets/js/app.befbfbf5.js",
    "revision": "e9f199ff21fe0913587cd245df1a6335"
  },
  {
    "url": "assets/js/vendors~docsearch.6fed1ae2.js",
    "revision": "2ef16c7549a2197852a96e854981a5c7"
  },
  {
    "url": "draft/quick-notes.html",
    "revision": "1bedee6c324f4d26ab8fffea86d04a0e"
  },
  {
    "url": "html/bootstrap/cards.html",
    "revision": "008a3d95f6806903d0e6c734f4a9a9e4"
  },
  {
    "url": "html/bootstrap/forms/checks-radios.html",
    "revision": "2047da13d580519ad2f5c00780fc5d2f"
  },
  {
    "url": "html/bootstrap/forms/floating-labels.html",
    "revision": "7f4e19624e89e79e6f56e0522231e2d9"
  },
  {
    "url": "html/bootstrap/forms/form-control.html",
    "revision": "d7a4aa3cc4c8a9bf8e443b3b9de2c1e3"
  },
  {
    "url": "html/bootstrap/forms/index.html",
    "revision": "c2b43aab893ca3bacd68615ad8eb853f"
  },
  {
    "url": "html/bootstrap/forms/layout.html",
    "revision": "5cc830523b2155d61f89d959ce1466aa"
  },
  {
    "url": "html/bootstrap/forms/select.html",
    "revision": "5f27d273d94680a1513ddd814cf8a369"
  },
  {
    "url": "html/bootstrap/forms/validation.html",
    "revision": "35e5c680284ed44e3de4a38a86ba3146"
  },
  {
    "url": "html/bootstrap/index.html",
    "revision": "2e7ea9b22e2a1316e9356b243485e131"
  },
  {
    "url": "html/bootstrap/tables.html",
    "revision": "910b931077bfcbddf7d0d457bea9fc87"
  },
  {
    "url": "html/tailwind/customization/index.html",
    "revision": "0c1fcbf6a92ebda1b556976597413f72"
  },
  {
    "url": "html/tailwind/customization/presets.html",
    "revision": "a9ef157e233985778ee9d954dcec6bab"
  },
  {
    "url": "html/tailwind/directives.html",
    "revision": "2a9ae17f2e43f6388a9f25c96d30c98f"
  },
  {
    "url": "html/tailwind/index.html",
    "revision": "961dc90451c8b47496a8daa37a1cf124"
  },
  {
    "url": "htmx/index.html",
    "revision": "ced98348085459b378f75c3e0495e667"
  },
  {
    "url": "index.html",
    "revision": "4a6e64199d1a77542f2f6d1ad1d18713"
  },
  {
    "url": "javascript/alpinejs/index.html",
    "revision": "1e8b6b40251e923b1b8a0a417103fc1f"
  },
  {
    "url": "javascript/alpinejs/textarea.html",
    "revision": "e29e720b46a2169b561f34f36d3c92dd"
  },
  {
    "url": "javascript/modules.html",
    "revision": "a2ccd0d5352208f6f6a90d496727158c"
  },
  {
    "url": "livewire/components/index.html",
    "revision": "bac073d4b97cf45d9be1f5cd969155e8"
  },
  {
    "url": "livewire/components/pagination.html",
    "revision": "09af727aaa18da830e020e912aaa65bc"
  },
  {
    "url": "livewire/installation.html",
    "revision": "c2b84546d0941c31234ad562146b69bc"
  },
  {
    "url": "nextjs/index.html",
    "revision": "158f8afc33b32a0fea41687989097dc3"
  },
  {
    "url": "nextjs/laravel-sanctum-auth.html",
    "revision": "d9bde377adf4d98cfc9a55f2d407d346"
  },
  {
    "url": "other/priority-levels.html",
    "revision": "1088fc119c0058f1d238fae1ef1296fb"
  },
  {
    "url": "other/static-site-generators.html",
    "revision": "1cc47cc6b8228bf54c105017c4d14e55"
  },
  {
    "url": "php/arrays/sorting-arrays.html",
    "revision": "26a84f3e8344a944c984286467dba088"
  },
  {
    "url": "php/classes/pagination.html",
    "revision": "4844bbe3bea221f7874036eb33f38f10"
  },
  {
    "url": "php/classes/pdo.html",
    "revision": "69ef51a62e3bbbdc4fa975e6e6bccd35"
  },
  {
    "url": "php/laravel/authorization/blade-directives/can.html",
    "revision": "b5bcb0933152341976208c6526479769"
  },
  {
    "url": "php/laravel/authorization/blade-directives/canany.html",
    "revision": "a7cd8482afc3691274eb926e2c66ebef"
  },
  {
    "url": "php/laravel/authorization/blade-directives/cannot.html",
    "revision": "edecbf0074beb8a24c884c9489497994"
  },
  {
    "url": "php/laravel/authorization/blade-directives/index.html",
    "revision": "df53e84c03d7ca8071ad7251c110061f"
  },
  {
    "url": "php/laravel/authorization/gates.html",
    "revision": "23e98a308c2128a94e7ca967d05fbb1e"
  },
  {
    "url": "php/laravel/authorization/index.html",
    "revision": "1dc0aae80674ad00062ee64fede2315e"
  },
  {
    "url": "php/laravel/authorization/policies.html",
    "revision": "7b40b061c40b0497adf1923f1a948ab8"
  },
  {
    "url": "php/laravel/blade/components.html",
    "revision": "95b3220bcf1f9bc837157f85621dab07"
  },
  {
    "url": "php/laravel/blade/directives.html",
    "revision": "8478591db94555c4edea0dd6f23cd38c"
  },
  {
    "url": "php/laravel/blade/index.html",
    "revision": "470f7dd7a141bc4778ff37e08d3deb3b"
  },
  {
    "url": "php/laravel/controller.html",
    "revision": "7d03c0a58a4de020db0b6243a7551545"
  },
  {
    "url": "php/laravel/database/factories.html",
    "revision": "be67825ae519eb4381365f702cd00b8c"
  },
  {
    "url": "php/laravel/database/index.html",
    "revision": "659cdbb16006c71dc787204c963d027f"
  },
  {
    "url": "php/laravel/database/migrations.html",
    "revision": "3ff70991e7c1a5cbcf0419f7d9a7a0fb"
  },
  {
    "url": "php/laravel/database/model.html",
    "revision": "4bf491ef1449ded74fdeb935a0d64996"
  },
  {
    "url": "php/laravel/database/observer.html",
    "revision": "518dda0b1fc7cfe6f0cbf4fdb6168e6f"
  },
  {
    "url": "php/laravel/database/queries.html",
    "revision": "f56cfce3598ed295bd6f875f79c0ddca"
  },
  {
    "url": "php/laravel/database/scopes.html",
    "revision": "044a80810fc51e3b2c5d7c71a6dc3a8c"
  },
  {
    "url": "php/laravel/database/seeders.html",
    "revision": "2e59ca3ba42c62150a0323e62a03d2a6"
  },
  {
    "url": "php/laravel/database/transactions.html",
    "revision": "86e9dedb11b839006002e9b0213700a4"
  },
  {
    "url": "php/laravel/enums.html",
    "revision": "4286936d5433fe50885057247049e0b9"
  },
  {
    "url": "php/laravel/index.html",
    "revision": "c63a00eff0baafdc54a272c108c49a37"
  },
  {
    "url": "php/laravel/package-development/index.html",
    "revision": "3e9ecf0bfeaa01d0360209f8cabad23d"
  },
  {
    "url": "php/laravel/package-development/laravel-packager.html",
    "revision": "f6463e58358196de89fa47b5faf4d7ec"
  },
  {
    "url": "php/laravel/package-development/views.html",
    "revision": "cab475bb454a64357206ce7c81a4af7b"
  },
  {
    "url": "php/laravel/packages/guides/index.html",
    "revision": "9e650484d7cc9a6d837a250fab715c39"
  },
  {
    "url": "php/laravel/packages/guides/laravel-pint.html",
    "revision": "0ba152f9d2ac8e773f3ae7a71623a597"
  },
  {
    "url": "php/laravel/packages/guides/spatie-activity-log.html",
    "revision": "a6e4ff7d35be9790cfc63dd8be1abf11"
  },
  {
    "url": "php/laravel/packages/guides/spatie-comments.html",
    "revision": "e27078029bee3405ed170262c98d80a1"
  },
  {
    "url": "php/laravel/packages/guides/spatie-feed.html",
    "revision": "61a936746cbde791227c93c82e459055"
  },
  {
    "url": "php/laravel/packages/guides/spatie-media-library.html",
    "revision": "cd88eb254ad6dbdc1aa0bfe2d45af45e"
  },
  {
    "url": "php/laravel/packages/guides/spatie-permissions.html",
    "revision": "8e4eb2afaa3fc09ef5b024b519916d88"
  },
  {
    "url": "php/laravel/packages/guides/spatie-query-builder.html",
    "revision": "35e887277e6c005246cfa1bd265754c9"
  },
  {
    "url": "php/laravel/packages/guides/spatie-settings.html",
    "revision": "af13e75c66aca6d486e8ff611eb7ad71"
  },
  {
    "url": "php/laravel/packages/index.html",
    "revision": "61c193862782cacb892203b9be30049f"
  },
  {
    "url": "php/laravel/policies.html",
    "revision": "1ca7440b15aba514db19e187f330d113"
  },
  {
    "url": "php/laravel/relationships/belongs-to-many.html",
    "revision": "7de7f53b4e8068d7250cec82e4a9782b"
  },
  {
    "url": "php/laravel/relationships/index.html",
    "revision": "bf6d4c41a7fa5d5863acc78b8d288f71"
  },
  {
    "url": "php/laravel/relationships/many-to-many.html",
    "revision": "5c05ac6b746f61da0e6f6fde89a27a0a"
  },
  {
    "url": "php/laravel/routes.html",
    "revision": "dc731922b5d013cfcf35f8a76e153f9b"
  },
  {
    "url": "php/laravel/task-scheduling.html",
    "revision": "6e91a2b82a989db3f1ed766e1a349d96"
  },
  {
    "url": "php/laravel/testing/controller-methods.html",
    "revision": "c29da865d1c4a4f53b44caf87d59ba20"
  },
  {
    "url": "php/laravel/testing/index.html",
    "revision": "bbafbfa7ff31e3a346332161176a2039"
  },
  {
    "url": "php/laravel/tinker/index.html",
    "revision": "89ebefaac41bb803be4fe1d9d1501c8a"
  },
  {
    "url": "php/laravel/traits/index.html",
    "revision": "87e99c7306a183876632ed3d0d9a7408"
  },
  {
    "url": "php/laravel/traits/scopes.html",
    "revision": "b69849c009739323caf2d23df029689a"
  },
  {
    "url": "php/laravel/validation/form-request.html",
    "revision": "f81a7544f3c31b455b482b22c8f27715"
  },
  {
    "url": "php/laravel/validation/index.html",
    "revision": "ddb7f419c3860e361e0a2c64383f4dba"
  },
  {
    "url": "php/laravel/validation/validation-rules.html",
    "revision": "22eef802ce58885e1540cc853794ee3b"
  },
  {
    "url": "php/laravel/views.html",
    "revision": "a03c8bf453112ae2fec4ba666f08c9b2"
  },
  {
    "url": "php/nova/fields.html",
    "revision": "f064150f8934ddc8ee57d1eabe6374e1"
  },
  {
    "url": "tools/database.html",
    "revision": "b96131e1af4c1ad8691eafa5f712d065"
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
