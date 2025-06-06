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
    "revision": "a94da54088a0599ee4b2fa7f9ed45d74"
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
    "url": "assets/js/27.1a43afcc.js",
    "revision": "cdb05f37eadc506b980526c0ec3225ca"
  },
  {
    "url": "assets/js/28.e37c8deb.js",
    "revision": "f8b81c5c0c422263392b4bc13e15dbb7"
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
    "url": "assets/js/33.d39c97e5.js",
    "revision": "54030971bdee5e7e5e2e1b9720aeb1bb"
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
    "url": "assets/js/39.62cb3473.js",
    "revision": "b4adbad2b3edf56689044bee13346d85"
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
    "url": "assets/js/53.52838c81.js",
    "revision": "93bb63a05cc6c2ceb4b1b1df1a28cb43"
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
    "url": "assets/js/56.0c82c435.js",
    "revision": "1b7cb0aaf9e97f6d98d00abaac556782"
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
    "url": "assets/js/61.a1155aed.js",
    "revision": "376f51e6f247260474baed0b555abdd1"
  },
  {
    "url": "assets/js/62.d59bde91.js",
    "revision": "4dc479b69d7ac223f644efe44e765906"
  },
  {
    "url": "assets/js/63.671a2be5.js",
    "revision": "cf108473f40277b3f38174e03d764f6d"
  },
  {
    "url": "assets/js/64.62d98e62.js",
    "revision": "4a6170b4bc3b80968a5b80c7da9c433a"
  },
  {
    "url": "assets/js/65.ef5dcfd7.js",
    "revision": "e045e901c8a3247d30f4c4d365c2c2a0"
  },
  {
    "url": "assets/js/66.3a65ba73.js",
    "revision": "4aaefb6e199c56670414961944724a02"
  },
  {
    "url": "assets/js/67.58cc1755.js",
    "revision": "97545f9fdf5e16f911331e23f85256af"
  },
  {
    "url": "assets/js/68.c9c3d02c.js",
    "revision": "0c560e9bc746d61fdd9837a5fb62e00f"
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
    "url": "assets/js/72.8fa95042.js",
    "revision": "784f42dd49a73235d4fddf110f8a57c1"
  },
  {
    "url": "assets/js/73.484d2349.js",
    "revision": "f52be25975ff33435236e21c235dfd0a"
  },
  {
    "url": "assets/js/74.d59e6c75.js",
    "revision": "7d66726d27c5b103963f067871842b40"
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
    "url": "assets/js/77.afdeda95.js",
    "revision": "f6d13626ce2d278b2738d320fe6a2667"
  },
  {
    "url": "assets/js/78.4a5afdd3.js",
    "revision": "c5baac8cf1aaa00d165038cb204c50aa"
  },
  {
    "url": "assets/js/79.ad795c3d.js",
    "revision": "817e8ae8a8e083dc8950a52b1107ae63"
  },
  {
    "url": "assets/js/80.4b89b933.js",
    "revision": "5b792987be8b7f90b79f4715b2b915b7"
  },
  {
    "url": "assets/js/81.c974d37b.js",
    "revision": "bac9ea699222ce5a70ec12187b668109"
  },
  {
    "url": "assets/js/82.e4aa7ad0.js",
    "revision": "6a287949d5ece538d562e9e0100d4423"
  },
  {
    "url": "assets/js/83.fc943b4d.js",
    "revision": "b2dfc0a52c142c3fab7a4b3d19c74a18"
  },
  {
    "url": "assets/js/84.6b3aaf8f.js",
    "revision": "9c3d10bde4d0e9dfd6c441c0b10a2686"
  },
  {
    "url": "assets/js/85.aa60b6cc.js",
    "revision": "8096c151c4c96d087cdefd712ba67839"
  },
  {
    "url": "assets/js/86.bed579c6.js",
    "revision": "23aa0f7ebb9142458207f8318a39629b"
  },
  {
    "url": "assets/js/87.55e850bd.js",
    "revision": "3b3a9cef89cf02ca25cea56344208c75"
  },
  {
    "url": "assets/js/88.5e772136.js",
    "revision": "990d04f7ad50b31f41b63ba4b19a41d4"
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
    "url": "assets/js/91.d07e9b47.js",
    "revision": "46778bcf74c66d228629b466b51cf4f1"
  },
  {
    "url": "assets/js/92.f49ce291.js",
    "revision": "2c752a297592f8f4b977a787cf2d1d71"
  },
  {
    "url": "assets/js/93.7087c380.js",
    "revision": "552e08ccbf2896203f08e5879ccbf21c"
  },
  {
    "url": "assets/js/94.9e67d132.js",
    "revision": "23a8b4a40b8571c1ebc7b813ef06ef57"
  },
  {
    "url": "assets/js/app.8339ea8a.js",
    "revision": "32b8834c25dfd9e13cb7be2dfac54fbc"
  },
  {
    "url": "assets/js/vendors~docsearch.6fed1ae2.js",
    "revision": "2ef16c7549a2197852a96e854981a5c7"
  },
  {
    "url": "draft/quick-notes.html",
    "revision": "4fc8489c182b9941d8143dff1c5de501"
  },
  {
    "url": "html/bootstrap/cards.html",
    "revision": "c91856140001dc328e41b4d0b2f66d9d"
  },
  {
    "url": "html/bootstrap/forms/checks-radios.html",
    "revision": "c0affc228db4ce7bca7e29db719e22f9"
  },
  {
    "url": "html/bootstrap/forms/floating-labels.html",
    "revision": "5b32fe5f1134045af1c57c325462c039"
  },
  {
    "url": "html/bootstrap/forms/form-control.html",
    "revision": "5b5346d0e9ee6d2e9c0bc775788b3925"
  },
  {
    "url": "html/bootstrap/forms/index.html",
    "revision": "dbe3940eb7c8bb6d709ff99d827d1e3e"
  },
  {
    "url": "html/bootstrap/forms/layout.html",
    "revision": "9ea967f0e83a75f421e493883dcd1491"
  },
  {
    "url": "html/bootstrap/forms/select.html",
    "revision": "2e41a9d583019065b750152ccf19ac4b"
  },
  {
    "url": "html/bootstrap/forms/validation.html",
    "revision": "a12a432c8fb41062e1f5eae7663b908b"
  },
  {
    "url": "html/bootstrap/index.html",
    "revision": "9bd058bbe77cf1708c1f641fc3bf0393"
  },
  {
    "url": "html/bootstrap/tables.html",
    "revision": "b2a9dfa4eae9f4624afe8b547ec5d82b"
  },
  {
    "url": "html/tailwind/customization/index.html",
    "revision": "f55fc96935548bc0aaba27ffc20f5faa"
  },
  {
    "url": "html/tailwind/customization/presets.html",
    "revision": "22b0f621e8dd5824906dc86b74251171"
  },
  {
    "url": "html/tailwind/directives.html",
    "revision": "7198043d7c3a399fdb18b6d41fbb7221"
  },
  {
    "url": "html/tailwind/index.html",
    "revision": "3e9a8fa36489ba14f702e86e617a9395"
  },
  {
    "url": "htmx/index.html",
    "revision": "0740286b680fa367aeb14bfb5d641b8d"
  },
  {
    "url": "index.html",
    "revision": "fc404d021730aaa80bad4c85f8f2f3ce"
  },
  {
    "url": "javascript/alpinejs/index.html",
    "revision": "8a66c194d6162ca5b5f31da8d8e5030d"
  },
  {
    "url": "javascript/alpinejs/textarea.html",
    "revision": "69c214ae8ad0ff35734c5f242cb70967"
  },
  {
    "url": "javascript/modules.html",
    "revision": "308135fba1df6a0e5576fa0715d11fbe"
  },
  {
    "url": "livewire/components/index.html",
    "revision": "68823b11f0421344079bf1d0b43326b3"
  },
  {
    "url": "livewire/components/pagination.html",
    "revision": "f52dabb9f38e7b123186b2b3af194420"
  },
  {
    "url": "livewire/installation.html",
    "revision": "c49cf1dfd1f81214276cc38d7e0bde94"
  },
  {
    "url": "other/priority-levels.html",
    "revision": "288f636d1c557fda2cd6a3a9b2e2c537"
  },
  {
    "url": "other/static-site-generators.html",
    "revision": "717a767c5e0c9710ba5e9c26598e3b10"
  },
  {
    "url": "php/arrays/sorting-arrays.html",
    "revision": "d552e7be47bdcdbbdd15975b403ceece"
  },
  {
    "url": "php/classes/pagination.html",
    "revision": "4d87ad608981c3c551b759c67de27c14"
  },
  {
    "url": "php/classes/pdo.html",
    "revision": "83a09408be59f0519b15f342c412abee"
  },
  {
    "url": "php/laravel/blade/components.html",
    "revision": "decaeb30bd963795d2fa539a0db6ccdb"
  },
  {
    "url": "php/laravel/blade/directives.html",
    "revision": "d644e9c1dc83d7390428c716bd14686c"
  },
  {
    "url": "php/laravel/blade/index.html",
    "revision": "1578235bc495aec854f3a0138bf29523"
  },
  {
    "url": "php/laravel/controller.html",
    "revision": "2c8eeb40f3a3954f3002289b1d3dd680"
  },
  {
    "url": "php/laravel/database/factories.html",
    "revision": "63027c4b5d1dab9e925ff5400e6661b8"
  },
  {
    "url": "php/laravel/database/index.html",
    "revision": "cc89e6d122755d40b8cd350cc345b084"
  },
  {
    "url": "php/laravel/database/migrations.html",
    "revision": "81f8c10c54632dcee5f1ddfe5db334c0"
  },
  {
    "url": "php/laravel/database/model.html",
    "revision": "67c297d9d5e59390b22fbdd245d1042f"
  },
  {
    "url": "php/laravel/database/observer.html",
    "revision": "82a84e27624ceeab093f614211ced085"
  },
  {
    "url": "php/laravel/database/queries.html",
    "revision": "0806b4cd36ca14fc1a1c99bfc74ef548"
  },
  {
    "url": "php/laravel/database/scopes.html",
    "revision": "c19463878a648bb3ecbf8296897dab76"
  },
  {
    "url": "php/laravel/database/seeders.html",
    "revision": "a012d5bfa98d11bab66e83f8fe79e715"
  },
  {
    "url": "php/laravel/enums.html",
    "revision": "ab948c589777191965001ec9f7dc6729"
  },
  {
    "url": "php/laravel/index.html",
    "revision": "7b6fb647cb7c87f2c43e08e1a4f316f0"
  },
  {
    "url": "php/laravel/package-development/index.html",
    "revision": "f655530c68467476777ee235d6cdfb3b"
  },
  {
    "url": "php/laravel/package-development/laravel-packager.html",
    "revision": "48caddb6f4060264171c09b7c23ad458"
  },
  {
    "url": "php/laravel/package-development/views.html",
    "revision": "192aaaa75352ef51eb146bd636895bd3"
  },
  {
    "url": "php/laravel/packages/guides/index.html",
    "revision": "15ef2c23d11c15c937790867d9341bda"
  },
  {
    "url": "php/laravel/packages/guides/spatie-activity-log.html",
    "revision": "ade980d7420f7e56fd27d87c198cc454"
  },
  {
    "url": "php/laravel/packages/guides/spatie-comments.html",
    "revision": "d767ca0910714a5445ab5e58e71520ce"
  },
  {
    "url": "php/laravel/packages/guides/spatie-feed.html",
    "revision": "5e0b1da3175509b554d0490881f188f2"
  },
  {
    "url": "php/laravel/packages/guides/spatie-media-library.html",
    "revision": "f5986897705fcec43359321233b73969"
  },
  {
    "url": "php/laravel/packages/guides/spatie-permissions.html",
    "revision": "35ad65c93dfb5ef25bf43eb95132b2cf"
  },
  {
    "url": "php/laravel/packages/guides/spatie-query-builder.html",
    "revision": "c767aab26c1867c5f0c5c7936f3466c7"
  },
  {
    "url": "php/laravel/packages/guides/spatie-settings.html",
    "revision": "5c96a5a30b15fb1fe87e58ed5ed2d271"
  },
  {
    "url": "php/laravel/packages/index.html",
    "revision": "eaff345d284648e1e1d83ba39bea5102"
  },
  {
    "url": "php/laravel/policies.html",
    "revision": "506bb56cc43cb4934d03b91fc2138e03"
  },
  {
    "url": "php/laravel/relationships/belongs-to-many.html",
    "revision": "d106cc8b5462661161449dafcd4dcc97"
  },
  {
    "url": "php/laravel/relationships/index.html",
    "revision": "379481df09ef5df88ec6486a1ea1d91b"
  },
  {
    "url": "php/laravel/relationships/many-to-many.html",
    "revision": "8581a6ea0e86d0ceb8096f8b79479676"
  },
  {
    "url": "php/laravel/routes.html",
    "revision": "294da4de2198c11a068741ee197030a9"
  },
  {
    "url": "php/laravel/task-scheduling.html",
    "revision": "6f247e529da636f1b7ce2894f511ae04"
  },
  {
    "url": "php/laravel/testing/controller-methods.html",
    "revision": "70e1c9033c2e2c6a43dfb71e033c5b8f"
  },
  {
    "url": "php/laravel/testing/index.html",
    "revision": "4371988c5f02660b0bbb535bebc28b0a"
  },
  {
    "url": "php/laravel/tinker/index.html",
    "revision": "3e4b27d1f8ef2f1aefd3335f204ee1f1"
  },
  {
    "url": "php/laravel/traits/index.html",
    "revision": "838ffe765acda6dae1a3cf64b211276a"
  },
  {
    "url": "php/laravel/traits/scopes.html",
    "revision": "dd96af438e283d3aef1388096300f20a"
  },
  {
    "url": "php/laravel/validation/form-request.html",
    "revision": "a81a7407a37cd8aa8896e942c9462b7c"
  },
  {
    "url": "php/laravel/validation/index.html",
    "revision": "47dd412530fc45cf5ea17cd4c824ca65"
  },
  {
    "url": "php/laravel/validation/validation-rules.html",
    "revision": "c5203e069a42e27de5cb97e0c2f6af66"
  },
  {
    "url": "php/laravel/views.html",
    "revision": "9946384c80d84aa0c5c7be6a6ed8b204"
  },
  {
    "url": "php/nova/fields.html",
    "revision": "fee0372bbd9c069b3394b6d0eccd42f6"
  },
  {
    "url": "tools/database.html",
    "revision": "009835fcda8f0f47f8b9b1f1ce9e3b0c"
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
