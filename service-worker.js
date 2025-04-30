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
    "revision": "4435755c20499d5b964daa52eacbcd4b"
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
    "url": "assets/js/23.6ad4c302.js",
    "revision": "7fef1521d3e703bd8aba25774f768dce"
  },
  {
    "url": "assets/js/24.aae1972c.js",
    "revision": "81137ff4ec19a6eaeeb361a598ee3cb4"
  },
  {
    "url": "assets/js/25.86b0b20b.js",
    "revision": "ab3e5c78a479fceb2b31fed7d6551a0a"
  },
  {
    "url": "assets/js/26.8dd0e696.js",
    "revision": "10ddc339806b02bb77cf776359cd5a9c"
  },
  {
    "url": "assets/js/27.26da8938.js",
    "revision": "2f3edd6e9c6defd56f40bf27a3254ffa"
  },
  {
    "url": "assets/js/28.dd5db720.js",
    "revision": "590f4593cb636cb5e639ea61777e61ad"
  },
  {
    "url": "assets/js/29.4f79de59.js",
    "revision": "06ebe00844c4a5e236a129da4854488d"
  },
  {
    "url": "assets/js/3.5740590c.js",
    "revision": "395b4d6a1743218ea90c901e772361ed"
  },
  {
    "url": "assets/js/30.96ba7d88.js",
    "revision": "68ff6ec646402a85f652d1cfc351646e"
  },
  {
    "url": "assets/js/31.82814068.js",
    "revision": "575f750b8508c3f59b647f3b8952bb51"
  },
  {
    "url": "assets/js/32.4446cc7f.js",
    "revision": "6d29c5ff9c7e43e058fa2dfc51a93b01"
  },
  {
    "url": "assets/js/33.d39c97e5.js",
    "revision": "54030971bdee5e7e5e2e1b9720aeb1bb"
  },
  {
    "url": "assets/js/34.7fae4d1d.js",
    "revision": "d28f0fb078459e991ce06b3a37f2a133"
  },
  {
    "url": "assets/js/35.97156793.js",
    "revision": "62dcd30c6ace1e759e391cc70245a01a"
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
    "url": "assets/js/42.0d55b5a6.js",
    "revision": "37e5a93d3dc9f572d01e45a460b21474"
  },
  {
    "url": "assets/js/43.769c994f.js",
    "revision": "bd98265d1e8448329b4f5a2c231ef4fe"
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
    "url": "assets/js/47.9d9ea987.js",
    "revision": "ece99157be30e10ef07aa1875b49cb12"
  },
  {
    "url": "assets/js/48.55a84622.js",
    "revision": "a295ae08cccb387e4cb81b60787b4b0a"
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
    "url": "assets/js/53.04cc3ff5.js",
    "revision": "baec6d72fb3d5b50adaa78eda353c219"
  },
  {
    "url": "assets/js/54.1b040397.js",
    "revision": "83fb7f461bd6626ee612adccbca1d107"
  },
  {
    "url": "assets/js/55.d3bbbb2b.js",
    "revision": "2867c8f4cbab30aa071457f6e613bdf2"
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
    "url": "assets/js/61.bf18bf40.js",
    "revision": "f052d6cb8d418c17802432d540d1eea5"
  },
  {
    "url": "assets/js/62.786e7f11.js",
    "revision": "50a04a092582763df8e264a458d36be5"
  },
  {
    "url": "assets/js/63.671a2be5.js",
    "revision": "cf108473f40277b3f38174e03d764f6d"
  },
  {
    "url": "assets/js/64.3a80330d.js",
    "revision": "fb8644e087498bf701d42cbc1eb222f5"
  },
  {
    "url": "assets/js/65.1f34961c.js",
    "revision": "d614a5613cc5ef0d66a80329ad5027d7"
  },
  {
    "url": "assets/js/66.3a65ba73.js",
    "revision": "4aaefb6e199c56670414961944724a02"
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
    "url": "assets/js/72.140b3517.js",
    "revision": "b38c3947d2cbca0eb483d499cbb1a490"
  },
  {
    "url": "assets/js/73.550be158.js",
    "revision": "42d8890ce6783c6d2aad0ae48f9249be"
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
    "url": "assets/js/82.2aa61990.js",
    "revision": "3ba9d7a8f8e186b38e679a53bd9354cc"
  },
  {
    "url": "assets/js/83.fc943b4d.js",
    "revision": "b2dfc0a52c142c3fab7a4b3d19c74a18"
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
    "url": "assets/js/86.897b0882.js",
    "revision": "b8aec81acf3f05cefcf8299381147b03"
  },
  {
    "url": "assets/js/87.4991a852.js",
    "revision": "fc5c5b9b36216ddbd077a4cf569fae15"
  },
  {
    "url": "assets/js/88.15a607d1.js",
    "revision": "3b1b67f46388e77804dd38773b649fb5"
  },
  {
    "url": "assets/js/89.1639d8d6.js",
    "revision": "ea33b47281b1d19402bf004feba9ef37"
  },
  {
    "url": "assets/js/90.3e5e03d7.js",
    "revision": "a30a5a3dd138908ab5ee82aaa0b87da7"
  },
  {
    "url": "assets/js/91.f01ad156.js",
    "revision": "e4c9fe066fc9df967e6ac781e1311409"
  },
  {
    "url": "assets/js/92.8fdb23ef.js",
    "revision": "6446ff5bc85c4ee006a7e74c484c4767"
  },
  {
    "url": "assets/js/93.74a3220c.js",
    "revision": "155c703c77dc0844922e752db40d26d0"
  },
  {
    "url": "assets/js/app.846d96a9.js",
    "revision": "8f180bd3b0c8f9bad910bc9ff47320ab"
  },
  {
    "url": "assets/js/vendors~docsearch.6fed1ae2.js",
    "revision": "2ef16c7549a2197852a96e854981a5c7"
  },
  {
    "url": "draft/quick-notes.html",
    "revision": "91e68bb04a1cfefb7a56d87a239af71e"
  },
  {
    "url": "html/bootstrap/cards.html",
    "revision": "14f1204a380f09fd4ed05ef8c1b7d4cf"
  },
  {
    "url": "html/bootstrap/forms/checks-radios.html",
    "revision": "e89d3e5629da9a5a2f9cbcd1842445c2"
  },
  {
    "url": "html/bootstrap/forms/floating-labels.html",
    "revision": "7915bf1e2c5dcfe4d2712dd82ff661f3"
  },
  {
    "url": "html/bootstrap/forms/form-control.html",
    "revision": "cdbc2d69cab02eb5a275405ad1f789b1"
  },
  {
    "url": "html/bootstrap/forms/index.html",
    "revision": "669345b696946eecbc04fa12d077d2fd"
  },
  {
    "url": "html/bootstrap/forms/layout.html",
    "revision": "1a73f37f1952988e5bfcbbfe28bdf5c3"
  },
  {
    "url": "html/bootstrap/forms/select.html",
    "revision": "022b7d7de011533f2a24133e9fff5aa4"
  },
  {
    "url": "html/bootstrap/forms/validation.html",
    "revision": "df45c8ba111b80855e0369ae9ee74ac6"
  },
  {
    "url": "html/bootstrap/index.html",
    "revision": "dee48dd311bb14dc0720218f8eaa5b20"
  },
  {
    "url": "html/bootstrap/tables.html",
    "revision": "b2b834c689a11064339a73433d8b7af6"
  },
  {
    "url": "html/tailwind/customization/index.html",
    "revision": "f44c3c20ace2219a4cf3459a4f07f210"
  },
  {
    "url": "html/tailwind/customization/presets.html",
    "revision": "a3cb9a68fa920467f80838878f45ea00"
  },
  {
    "url": "html/tailwind/directives.html",
    "revision": "0cd7a113d86f539e787c77b19613c01b"
  },
  {
    "url": "html/tailwind/index.html",
    "revision": "6be57b58edc26977c499c6bff171dfeb"
  },
  {
    "url": "htmx/index.html",
    "revision": "3cd936dc12a2e16ec029ccc35b345e5c"
  },
  {
    "url": "index.html",
    "revision": "a83bf3328de893bdb50907e6aa49bbf2"
  },
  {
    "url": "javascript/alpinejs/index.html",
    "revision": "628e33e3d3dadfb80c922cc27d142d67"
  },
  {
    "url": "javascript/alpinejs/textarea.html",
    "revision": "85ff8360fcf3a57f80dd348cce772959"
  },
  {
    "url": "javascript/modules.html",
    "revision": "21569fb36669602387a2b48d5a880937"
  },
  {
    "url": "livewire/components/index.html",
    "revision": "1e6aea0f57fdfe7ec6be568002632211"
  },
  {
    "url": "livewire/components/pagination.html",
    "revision": "06a61dde6277788beb6eb981b38964a0"
  },
  {
    "url": "livewire/installation.html",
    "revision": "8fbc4271535107b4399fca5f2f746e9b"
  },
  {
    "url": "other/priority-levels.html",
    "revision": "8ec2f561e22b61b9c36647e2fda1bc26"
  },
  {
    "url": "other/static-site-generators.html",
    "revision": "b6eeaaafd9716385c8c0d694dda4e13b"
  },
  {
    "url": "php/arrays/sorting-arrays.html",
    "revision": "bb522d8fc0ed7adfc9cac89333a0655c"
  },
  {
    "url": "php/classes/pagination.html",
    "revision": "e288d0aedf50a0ffe5f4d42d25b8f5f1"
  },
  {
    "url": "php/classes/pdo.html",
    "revision": "172f4dbe96db0fac45b213a90343e61f"
  },
  {
    "url": "php/laravel/blade/components.html",
    "revision": "00730f80f32c833dc6304f4f742b2ea2"
  },
  {
    "url": "php/laravel/blade/directives.html",
    "revision": "41832b4e5ce92e4054ffd9a1265a1705"
  },
  {
    "url": "php/laravel/blade/index.html",
    "revision": "881ce7643f02dea2156a8d2ef6fa0b74"
  },
  {
    "url": "php/laravel/controller.html",
    "revision": "64403a6fa673080ab7b252f82ed06ab4"
  },
  {
    "url": "php/laravel/database/factories.html",
    "revision": "a8d039b85dfa38a5b4aa4142734087c4"
  },
  {
    "url": "php/laravel/database/index.html",
    "revision": "fa77d53a5e0178132d45241c05025ced"
  },
  {
    "url": "php/laravel/database/migrations.html",
    "revision": "f3090bc7ffacdc5cb6b957fc557d45a6"
  },
  {
    "url": "php/laravel/database/model.html",
    "revision": "118625dbf2c0ca674c1aea425f4ae2e5"
  },
  {
    "url": "php/laravel/database/observer.html",
    "revision": "d3935f6a00fa6d5a550578ceb236e77c"
  },
  {
    "url": "php/laravel/database/queries.html",
    "revision": "8653a001b06f657f7be47cc60f838e21"
  },
  {
    "url": "php/laravel/database/scopes.html",
    "revision": "9df043100f6ef564ba1bf54288432149"
  },
  {
    "url": "php/laravel/database/seeders.html",
    "revision": "b0431fcc52effb6999bfe77d00e9cece"
  },
  {
    "url": "php/laravel/enums.html",
    "revision": "bc0dc08e27e252625902c35b9d11127a"
  },
  {
    "url": "php/laravel/index.html",
    "revision": "bd93ddcbc15ffa985ad2b37356598609"
  },
  {
    "url": "php/laravel/package-development/index.html",
    "revision": "0c115f6cdc051481ef8c80101195afd7"
  },
  {
    "url": "php/laravel/package-development/laravel-packager.html",
    "revision": "1378499ed9bb3d11bf2273f4e04409e9"
  },
  {
    "url": "php/laravel/package-development/views.html",
    "revision": "9393414a802b6f0d75ec0360f05aadad"
  },
  {
    "url": "php/laravel/packages/guides/index.html",
    "revision": "241cc7c48925e8b7c3817ce3c537ad47"
  },
  {
    "url": "php/laravel/packages/guides/spatie-activity-log.html",
    "revision": "65bee86a6df13bd13d3daf9a0157770d"
  },
  {
    "url": "php/laravel/packages/guides/spatie-comments.html",
    "revision": "d3d532cc90bd11e582f8c81c0cd8c3a5"
  },
  {
    "url": "php/laravel/packages/guides/spatie-feed.html",
    "revision": "a5837ddb22759ec745c33661b769a45c"
  },
  {
    "url": "php/laravel/packages/guides/spatie-media-library.html",
    "revision": "01e62fa083258cdba89ebc6efc12e139"
  },
  {
    "url": "php/laravel/packages/guides/spatie-permissions.html",
    "revision": "c357d2e53338528dd710926eb840c7ca"
  },
  {
    "url": "php/laravel/packages/guides/spatie-query-builder.html",
    "revision": "eb80a6a9f1eed3f8fb1e1569ba75a2bb"
  },
  {
    "url": "php/laravel/packages/guides/spatie-settings.html",
    "revision": "92f9eef3bde13c3f946034ddd0cb8ce9"
  },
  {
    "url": "php/laravel/packages/index.html",
    "revision": "84f94feb74f1ef13e0bb6ebcf77695bd"
  },
  {
    "url": "php/laravel/policies.html",
    "revision": "87cc48008cd3997ab7dc3852bfe00291"
  },
  {
    "url": "php/laravel/relationships/belongs-to-many.html",
    "revision": "cbf266a11f675e144e1a0de26c2aa558"
  },
  {
    "url": "php/laravel/relationships/index.html",
    "revision": "150393dfc04109868ea8f5af36816286"
  },
  {
    "url": "php/laravel/relationships/many-to-many.html",
    "revision": "e57fa05859012647905f0b5674702ce2"
  },
  {
    "url": "php/laravel/routes.html",
    "revision": "0d4ff8e65ba8d280dd60ed4817694c3f"
  },
  {
    "url": "php/laravel/task-scheduling.html",
    "revision": "22927e4aa9af05ffe6b6d40cc978e56d"
  },
  {
    "url": "php/laravel/testing/controller-methods.html",
    "revision": "a680ccbb1f9d7725d63ae9ac227a5ff7"
  },
  {
    "url": "php/laravel/testing/index.html",
    "revision": "3a3df5a89f10b0a9db97b2bc6e3bade4"
  },
  {
    "url": "php/laravel/tinker/index.html",
    "revision": "7dd6109cfab537f6270ba4275e9b2bd0"
  },
  {
    "url": "php/laravel/traits/index.html",
    "revision": "21863d0b754385f3ae0ed8522f1f3ab4"
  },
  {
    "url": "php/laravel/traits/scopes.html",
    "revision": "bc8e307ec28961b732c715a7e02dc64a"
  },
  {
    "url": "php/laravel/validation/form-request.html",
    "revision": "4466aa42d8d206709f2183145c8b7087"
  },
  {
    "url": "php/laravel/validation/index.html",
    "revision": "0883147acd24b6ba5392147a0300fbc5"
  },
  {
    "url": "php/laravel/validation/validation-rules.html",
    "revision": "69c31a535e705b241b25e42ca96068bf"
  },
  {
    "url": "php/laravel/views.html",
    "revision": "06e2fe88e60e60032751eb4ba20a967d"
  },
  {
    "url": "php/nova/fields.html",
    "revision": "d73491ff7a8d4909e2cea36966838046"
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
