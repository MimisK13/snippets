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
    "revision": "e77e5b926a4c2da380cdef1b0fd00a14"
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
    "url": "assets/js/100.29f1b47a.js",
    "revision": "3ab79a6db07b85c2a3625e1c9c709814"
  },
  {
    "url": "assets/js/101.a4422767.js",
    "revision": "cf173c108a3511d9f7a3fd9f4639564c"
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
    "url": "assets/js/23.0d17cae6.js",
    "revision": "ba72d4eafb1012a0db5717643a63b9eb"
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
    "url": "assets/js/28.d268cd1c.js",
    "revision": "ef750f94ff3a9ddcc1dac8bfb24c3576"
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
    "url": "assets/js/30.ed6f8937.js",
    "revision": "46e8307d777bd8d449f9ac19e1b26ebb"
  },
  {
    "url": "assets/js/31.dd97a41b.js",
    "revision": "65b46856846302f6fd4d6a8062d1da4a"
  },
  {
    "url": "assets/js/32.a8d7d729.js",
    "revision": "010f47e47fac6ce3ae2597d20b33f9fc"
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
    "url": "assets/js/39.22a07813.js",
    "revision": "dfa054bf2cbb8b145e7579de91b0fcaa"
  },
  {
    "url": "assets/js/4.22a65ce5.js",
    "revision": "55028f36358f708e8f714389fcba8725"
  },
  {
    "url": "assets/js/40.3ecb252c.js",
    "revision": "a9164fef6357d79c583e71d77f457c8e"
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
    "url": "assets/js/51.f99e0239.js",
    "revision": "8b67821ba6f8f89f28bd54e1b7af08df"
  },
  {
    "url": "assets/js/52.86311b45.js",
    "revision": "de7fb1c89491d7a0ad693654f68b98e0"
  },
  {
    "url": "assets/js/53.b0272264.js",
    "revision": "29b214f98fe8dfdce948aa4854a226b5"
  },
  {
    "url": "assets/js/54.93640610.js",
    "revision": "5aaeb1b9f4dde4d6ef56bccca8dcffa5"
  },
  {
    "url": "assets/js/55.95c7a5d7.js",
    "revision": "9fa02ad11871472c70a5c258d3ff5dcb"
  },
  {
    "url": "assets/js/56.0f84c3b1.js",
    "revision": "37a436800c481dd62ddc49ed4debd711"
  },
  {
    "url": "assets/js/57.a35cb870.js",
    "revision": "2d6f52d661010b41a94b510f2215cb64"
  },
  {
    "url": "assets/js/58.2bfb7cf7.js",
    "revision": "0cc800b26787779382f88406d5574cd9"
  },
  {
    "url": "assets/js/59.d2e2ec5c.js",
    "revision": "72a1ea60b7f1877c4fd82acbb2caea11"
  },
  {
    "url": "assets/js/6.d1e97dd3.js",
    "revision": "276aafaee8cddcfd9c1a37f4373cdee1"
  },
  {
    "url": "assets/js/60.72f7253f.js",
    "revision": "36f0afc723979642822d8a821341c37d"
  },
  {
    "url": "assets/js/61.155ebe9a.js",
    "revision": "f052d6cb8d418c17802432d540d1eea5"
  },
  {
    "url": "assets/js/62.a3b15482.js",
    "revision": "e8763f37b7431b5af9aec05cd970133b"
  },
  {
    "url": "assets/js/63.0264474f.js",
    "revision": "9a3f79badb46135a0161efa5e9e4d378"
  },
  {
    "url": "assets/js/64.c21c09fe.js",
    "revision": "1c6511c809bcd62b8158c98976ce7b34"
  },
  {
    "url": "assets/js/65.dddee2cf.js",
    "revision": "d581f5790ca8e7f4968b5c0256a56eef"
  },
  {
    "url": "assets/js/66.12a18594.js",
    "revision": "df1a8b421545e1aee47bda3719afb313"
  },
  {
    "url": "assets/js/67.eb8dbc5f.js",
    "revision": "933d3cc406185a883e13a43ae01e70c4"
  },
  {
    "url": "assets/js/68.6046b9b3.js",
    "revision": "9f5c3293eff84b5c2ef8417241c776b1"
  },
  {
    "url": "assets/js/69.b1ba2641.js",
    "revision": "73bd6d46443b5d3140697c8fa3c45447"
  },
  {
    "url": "assets/js/7.b7c0f320.js",
    "revision": "9acf1f8f90fc9fdda8c7859dea8299f8"
  },
  {
    "url": "assets/js/70.841de1b4.js",
    "revision": "33580e70b238fc5ea4872f95fb1a9cc9"
  },
  {
    "url": "assets/js/71.815fdff2.js",
    "revision": "f4b5180a09f5d622478941e08ac255e3"
  },
  {
    "url": "assets/js/72.f5c979a9.js",
    "revision": "d02e7f4b24b5644734bd6c6867c955ca"
  },
  {
    "url": "assets/js/73.6fbd5c1f.js",
    "revision": "f58f4e5a62d94ba2df766cba6e5fedd8"
  },
  {
    "url": "assets/js/74.07d499f3.js",
    "revision": "a89c96fd319a5eb5a33e22b3b936e99f"
  },
  {
    "url": "assets/js/75.b0601ba8.js",
    "revision": "1f423e22b01569a8383d22a1d63f468f"
  },
  {
    "url": "assets/js/76.d244bbb9.js",
    "revision": "dfdb1f45205363bd49f26b27ae138894"
  },
  {
    "url": "assets/js/77.0e9d6894.js",
    "revision": "b586fd753ab26966ffa20955bb70d5c9"
  },
  {
    "url": "assets/js/78.cbed16ac.js",
    "revision": "6bb183c70a76bc6a9e5fb715fb7eaa51"
  },
  {
    "url": "assets/js/79.77c2e2b2.js",
    "revision": "ae0289d695b2d4bdf259d6f5998cabab"
  },
  {
    "url": "assets/js/80.5979b950.js",
    "revision": "762124c609105a6b0f1a811b682e2c75"
  },
  {
    "url": "assets/js/81.77e37838.js",
    "revision": "c92f1ac50e92896b49d3d3f513842edc"
  },
  {
    "url": "assets/js/82.e42ec77b.js",
    "revision": "cbc51d6f1f98c1543b1accd8456e859c"
  },
  {
    "url": "assets/js/83.bcbd619f.js",
    "revision": "8c1b9ac7eda0f4d4e12c0ed1ee6d71d1"
  },
  {
    "url": "assets/js/84.0140ea6c.js",
    "revision": "e9012d5f18a8d69482d9371837e3d2df"
  },
  {
    "url": "assets/js/85.515869ab.js",
    "revision": "49ac4d0b4ec74180eefa8a5611e20b3f"
  },
  {
    "url": "assets/js/86.2c5ad1ef.js",
    "revision": "e28086dfe1a14ef5133007e018081801"
  },
  {
    "url": "assets/js/87.75a26862.js",
    "revision": "e4c1d6762f413fd9ae65da444a15cad1"
  },
  {
    "url": "assets/js/88.ab5029e6.js",
    "revision": "6366c2edc8a6184a928f2cb181ad5b66"
  },
  {
    "url": "assets/js/89.20783ec5.js",
    "revision": "a003240292091dc36c7129054bcb7ae0"
  },
  {
    "url": "assets/js/90.39df194f.js",
    "revision": "7a9eca6ffeae8331c1744d67050db2e6"
  },
  {
    "url": "assets/js/91.a3544881.js",
    "revision": "1c93b2271b8a9eb7aa4e6fc501a6ceac"
  },
  {
    "url": "assets/js/92.630c68a1.js",
    "revision": "72d17ec8b586745cd09865c4a87e0b5a"
  },
  {
    "url": "assets/js/93.aa05b371.js",
    "revision": "48ea5da3741ee1b54155db1f8cee01ff"
  },
  {
    "url": "assets/js/94.5996f52f.js",
    "revision": "b8fe6445468d8155066324d266260388"
  },
  {
    "url": "assets/js/95.4666a399.js",
    "revision": "4c226f8faab36345e614722603e28b4b"
  },
  {
    "url": "assets/js/96.7c94eb64.js",
    "revision": "044e86534bbb5bb73ad01880157b3de8"
  },
  {
    "url": "assets/js/97.5b905172.js",
    "revision": "0d5409ca0b9f10c5f96d6a5b5585ceb1"
  },
  {
    "url": "assets/js/98.c7e5bdb4.js",
    "revision": "dd9c2d74ca02b0e4a5f010d1af807026"
  },
  {
    "url": "assets/js/99.4dbe56d3.js",
    "revision": "0786e49b32fdd27974cb04c68f1cc5d3"
  },
  {
    "url": "assets/js/app.219385d4.js",
    "revision": "a46c68a6e42c4481e85fdee9ddbbf7bd"
  },
  {
    "url": "assets/js/vendors~docsearch.6fed1ae2.js",
    "revision": "2ef16c7549a2197852a96e854981a5c7"
  },
  {
    "url": "draft/quick-notes.html",
    "revision": "32238cd729c7890e210da677e704a992"
  },
  {
    "url": "html/bootstrap/cards.html",
    "revision": "3dd0b5e83c7612cfda9d946644634789"
  },
  {
    "url": "html/bootstrap/forms/checks-radios.html",
    "revision": "5366820ac72287ff037c779bf22337af"
  },
  {
    "url": "html/bootstrap/forms/floating-labels.html",
    "revision": "caf260419cb55d8cfd9003c5ea0dfc83"
  },
  {
    "url": "html/bootstrap/forms/form-control.html",
    "revision": "f9f208bc2ef7b46a0479dce553f8c078"
  },
  {
    "url": "html/bootstrap/forms/index.html",
    "revision": "9667840edc19129ee6f27a2ff6d5cc1a"
  },
  {
    "url": "html/bootstrap/forms/layout.html",
    "revision": "d59d4c7f67d86906451cc9229a4bba59"
  },
  {
    "url": "html/bootstrap/forms/select.html",
    "revision": "de90c82bc4cf4274f0ff433986e77a65"
  },
  {
    "url": "html/bootstrap/forms/validation.html",
    "revision": "93e63b1264d3578f8182d4991b5d0495"
  },
  {
    "url": "html/bootstrap/index.html",
    "revision": "4e537d17d6a9f3a9bda02b55734a94a6"
  },
  {
    "url": "html/bootstrap/tables.html",
    "revision": "147cde1d08a936e878b26efbf82e63e7"
  },
  {
    "url": "html/tailwind/customization/index.html",
    "revision": "a9b51a123c6c94e73c3a68e2bad80b2a"
  },
  {
    "url": "html/tailwind/customization/presets.html",
    "revision": "b1f7da95ca092a050a04b5a79ca0e62f"
  },
  {
    "url": "html/tailwind/directives.html",
    "revision": "d1b580319695dfe107c439e13a5042d9"
  },
  {
    "url": "html/tailwind/index.html",
    "revision": "d28881a82801f8e7e2836db78b89b2b2"
  },
  {
    "url": "htmx/index.html",
    "revision": "74872a89f8ecf8617719c9f417fad0de"
  },
  {
    "url": "index.html",
    "revision": "46ad553c6c15d5288ae958d7acb5f98c"
  },
  {
    "url": "javascript/alpinejs/index.html",
    "revision": "6c9ee0055eec7413a05bc45de343690d"
  },
  {
    "url": "javascript/alpinejs/textarea.html",
    "revision": "e43767f8862a1ed773bc70ede984783c"
  },
  {
    "url": "javascript/modules.html",
    "revision": "e01ff0e08f6fbbc3376d39c7faea51c1"
  },
  {
    "url": "livewire/components/index.html",
    "revision": "0d7b27a67a15df72891d7fdab1f62b21"
  },
  {
    "url": "livewire/components/pagination.html",
    "revision": "53a1ff6c36d29e9cececab227d10880f"
  },
  {
    "url": "livewire/installation.html",
    "revision": "4e50a352a2f707f37cfc103043ae5b34"
  },
  {
    "url": "other/priority-levels.html",
    "revision": "25a2d6b5fa4d3fbcd3347313201285ee"
  },
  {
    "url": "other/static-site-generators.html",
    "revision": "251c47dbe736225e1ffd677553637dc7"
  },
  {
    "url": "php/arrays/sorting-arrays.html",
    "revision": "d822d90dfdbd1cefdcb674abddcf72fc"
  },
  {
    "url": "php/classes/pagination.html",
    "revision": "51d028272aa6eecc4829fddf049bcf87"
  },
  {
    "url": "php/classes/pdo.html",
    "revision": "e60adf0efb478627f75a91b2eda59f3e"
  },
  {
    "url": "php/laravel/authorization/blade-directives/can.html",
    "revision": "9509aaf1f6991418ad59673d601ab390"
  },
  {
    "url": "php/laravel/authorization/blade-directives/canany.html",
    "revision": "2a4021820b17e7449c99235654b3bb5f"
  },
  {
    "url": "php/laravel/authorization/blade-directives/cannot.html",
    "revision": "e35af60da68a6504060cdc8130600a04"
  },
  {
    "url": "php/laravel/authorization/blade-directives/index.html",
    "revision": "81271eac21faeea8c38413c595d7b956"
  },
  {
    "url": "php/laravel/authorization/gates.html",
    "revision": "22f25a0bc25c6e946f537ffb5d178bf2"
  },
  {
    "url": "php/laravel/authorization/index.html",
    "revision": "695b831765b16875cbc485701a09f949"
  },
  {
    "url": "php/laravel/authorization/policies.html",
    "revision": "a97638a344b1be1e858fc1819afbc02c"
  },
  {
    "url": "php/laravel/blade/components.html",
    "revision": "d4a8c461dc5bc47c5a82dc1b22d72f65"
  },
  {
    "url": "php/laravel/blade/directives.html",
    "revision": "a610beb58e0d913cd30eb24db712ec64"
  },
  {
    "url": "php/laravel/blade/index.html",
    "revision": "60edc90347376b01ea534a61d76d5a59"
  },
  {
    "url": "php/laravel/controller.html",
    "revision": "f39799724c619275ceaa606a8f7fa8a4"
  },
  {
    "url": "php/laravel/database/factories.html",
    "revision": "4509b3fc995ff41944696d1105c09523"
  },
  {
    "url": "php/laravel/database/index.html",
    "revision": "e3bc212355635e0b8e66c00ed93f7370"
  },
  {
    "url": "php/laravel/database/migrations.html",
    "revision": "86b11ac6056c2b4e1096c9bb06f9208b"
  },
  {
    "url": "php/laravel/database/model.html",
    "revision": "e6d9fd41f411a57e0f2539db30a01931"
  },
  {
    "url": "php/laravel/database/observer.html",
    "revision": "5ef406f1e4e0a8a83984f0a06a5b0e41"
  },
  {
    "url": "php/laravel/database/queries.html",
    "revision": "08e1b5760ed5600328fcaf914132d6e1"
  },
  {
    "url": "php/laravel/database/scopes.html",
    "revision": "97560f0c1ca647a53fc0a031141fecbb"
  },
  {
    "url": "php/laravel/database/seeders.html",
    "revision": "1bdb536f4198575719cc59faaec41c19"
  },
  {
    "url": "php/laravel/enums.html",
    "revision": "eed61ca1f5673e63c459953a20a93809"
  },
  {
    "url": "php/laravel/index.html",
    "revision": "00c7aeb303abf028607ddd8e745d107b"
  },
  {
    "url": "php/laravel/package-development/index.html",
    "revision": "9f200837140aaa95f27a8c4a17875cef"
  },
  {
    "url": "php/laravel/package-development/laravel-packager.html",
    "revision": "c95d06ad901fd755851796db4f0ba484"
  },
  {
    "url": "php/laravel/package-development/views.html",
    "revision": "f624f9ffec661e0daed71630bd00de23"
  },
  {
    "url": "php/laravel/packages/guides/index.html",
    "revision": "37737cd0901fcd6bef22399f5bb0de0f"
  },
  {
    "url": "php/laravel/packages/guides/spatie-activity-log.html",
    "revision": "cd169ee719a802ce9698f5d41ed9fa9a"
  },
  {
    "url": "php/laravel/packages/guides/spatie-comments.html",
    "revision": "142fd5d6c896c8f7b557ecc4aacf6e4a"
  },
  {
    "url": "php/laravel/packages/guides/spatie-feed.html",
    "revision": "26defa29b916ee591d7070712d69d776"
  },
  {
    "url": "php/laravel/packages/guides/spatie-media-library.html",
    "revision": "89050d1ef887e395322fec6fd4c70061"
  },
  {
    "url": "php/laravel/packages/guides/spatie-permissions.html",
    "revision": "96de66beba763f161dcc92e0e0d8c621"
  },
  {
    "url": "php/laravel/packages/guides/spatie-query-builder.html",
    "revision": "0cdd48127837a6e0d3f0f9c5e73d839a"
  },
  {
    "url": "php/laravel/packages/guides/spatie-settings.html",
    "revision": "cbda2bc8f32984fc923fac85f5edc3d4"
  },
  {
    "url": "php/laravel/packages/index.html",
    "revision": "fac2e9d34e74ccfc11b12d3ac46df4fe"
  },
  {
    "url": "php/laravel/policies.html",
    "revision": "a5f3a655f063f408e23e67eab1549cbf"
  },
  {
    "url": "php/laravel/relationships/belongs-to-many.html",
    "revision": "8219bb56dce428f85709605d8033d622"
  },
  {
    "url": "php/laravel/relationships/index.html",
    "revision": "888e6127a10f5094d1b44935fc4a5905"
  },
  {
    "url": "php/laravel/relationships/many-to-many.html",
    "revision": "3eab790a66e9aff94684f3af6e048a59"
  },
  {
    "url": "php/laravel/routes.html",
    "revision": "a36a3505ae822b4a6a32f298dd9f56e0"
  },
  {
    "url": "php/laravel/task-scheduling.html",
    "revision": "edc7a7fde228f18981b2ff4d45d1838e"
  },
  {
    "url": "php/laravel/testing/controller-methods.html",
    "revision": "f9bd0db7fb0f6f220d6ac919ff8101a4"
  },
  {
    "url": "php/laravel/testing/index.html",
    "revision": "13136a1cd63073aec9a61fb80142ab9e"
  },
  {
    "url": "php/laravel/tinker/index.html",
    "revision": "d0dd0b81b3548d7b94ff6487a39d8fe8"
  },
  {
    "url": "php/laravel/traits/index.html",
    "revision": "9ea5a33ee5a43773df3a857cd8d6a082"
  },
  {
    "url": "php/laravel/traits/scopes.html",
    "revision": "f837d5fcbbe31f8c1214495b828d7df9"
  },
  {
    "url": "php/laravel/validation/form-request.html",
    "revision": "1b8e102f51bc4bda579c67f9331bd872"
  },
  {
    "url": "php/laravel/validation/index.html",
    "revision": "d02da3b3936f66df43db89d978f028e3"
  },
  {
    "url": "php/laravel/validation/validation-rules.html",
    "revision": "f4ed02bcd42004f3f493d657a8c28b3c"
  },
  {
    "url": "php/laravel/views.html",
    "revision": "6d7eb72c6d4c3c42c42fc6f99b25a7da"
  },
  {
    "url": "php/nova/fields.html",
    "revision": "1887f97c764ef6f657e02fcd3b14d7a4"
  },
  {
    "url": "tools/database.html",
    "revision": "927bd0920f7a264fc6a76eb4f85543bc"
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
