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
    "revision": "479b7e5e47b5b2bb6879b78d87d7c687"
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
    "url": "assets/js/26.41ebd130.js",
    "revision": "e8a29b23648ba749ca0ae69f27731b8c"
  },
  {
    "url": "assets/js/27.264e6f26.js",
    "revision": "90fb3a3f9ca7612db9eaac2baaa12d1a"
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
    "url": "assets/js/30.ed6f8937.js",
    "revision": "46e8307d777bd8d449f9ac19e1b26ebb"
  },
  {
    "url": "assets/js/31.568bc97d.js",
    "revision": "f54026c8c9f43d51415a778412656a9c"
  },
  {
    "url": "assets/js/32.f0806d76.js",
    "revision": "dbc4ffdc55cc6ce8c71c0aa2e7a1c265"
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
    "url": "assets/js/35.4c848b46.js",
    "revision": "ebd6668aec7d354efa5a616a4e6b50e1"
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
    "url": "assets/js/44.cf805a0d.js",
    "revision": "4e61ba4bc22decf8c9f0832c16e0d887"
  },
  {
    "url": "assets/js/45.ae10fa82.js",
    "revision": "94554f23016e8e8834bb5dea042d1c52"
  },
  {
    "url": "assets/js/46.cb7f8a63.js",
    "revision": "f255dfca4324160d8ec46b0233f50c41"
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
    "url": "assets/js/49.e8e2539a.js",
    "revision": "6c9aa2e477e0cd60e52cd5969567951a"
  },
  {
    "url": "assets/js/5.775b6552.js",
    "revision": "4df5e0148d5eaf03a8dd0c9a42e63adf"
  },
  {
    "url": "assets/js/50.2b431fe1.js",
    "revision": "d642636c290882a90b6b970a98edf898"
  },
  {
    "url": "assets/js/51.f99e0239.js",
    "revision": "8b67821ba6f8f89f28bd54e1b7af08df"
  },
  {
    "url": "assets/js/52.a25ee263.js",
    "revision": "a5cfedbbcff50b9a79acb2628556fd38"
  },
  {
    "url": "assets/js/53.71acbdd1.js",
    "revision": "4520d160026a5d6a0df5a9dc5df99933"
  },
  {
    "url": "assets/js/54.c1f65874.js",
    "revision": "085f258a77845fc3033d913ebc1829f6"
  },
  {
    "url": "assets/js/55.9c404881.js",
    "revision": "65bb275d4a1e88e251bbbccde0458c23"
  },
  {
    "url": "assets/js/56.0c82c435.js",
    "revision": "1b7cb0aaf9e97f6d98d00abaac556782"
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
    "url": "assets/js/59.aa01cf4a.js",
    "revision": "3af1f0f3aa8f959e7a66be7bcd8f5ce1"
  },
  {
    "url": "assets/js/6.d1e97dd3.js",
    "revision": "276aafaee8cddcfd9c1a37f4373cdee1"
  },
  {
    "url": "assets/js/60.ee225241.js",
    "revision": "ae8091622bd625bef10b1bf8ad64f1a8"
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
    "url": "assets/js/67.02363025.js",
    "revision": "9dbeeddc530ab4a35cb329ee9a13f05d"
  },
  {
    "url": "assets/js/68.19b6fbd2.js",
    "revision": "9391cbc15c013855c10bcb581171a12d"
  },
  {
    "url": "assets/js/69.a5369b27.js",
    "revision": "b5304808d3fcc0b759ce3901e1f273ea"
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
    "url": "assets/js/71.13ceaf2e.js",
    "revision": "558bf5c037e26575ac28ba8529278aeb"
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
    "url": "assets/js/78.2852a5d3.js",
    "revision": "2af3d92b723b85a829137333acec3546"
  },
  {
    "url": "assets/js/79.d4a87678.js",
    "revision": "91ae74a7b3b910f00c1bb83fa8e5cf77"
  },
  {
    "url": "assets/js/80.21071e87.js",
    "revision": "4e0acc756db33cd985a0f20ebd1d484f"
  },
  {
    "url": "assets/js/81.918947b0.js",
    "revision": "a287be2505a3986babf24f5aad17b806"
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
    "url": "assets/js/app.33e65b88.js",
    "revision": "2b47040b38dedb801f2756239148eaf3"
  },
  {
    "url": "assets/js/vendors~docsearch.6fed1ae2.js",
    "revision": "2ef16c7549a2197852a96e854981a5c7"
  },
  {
    "url": "draft/quick-notes.html",
    "revision": "9ca5d429a869b0095b91dc2f86eaa73d"
  },
  {
    "url": "html/bootstrap/cards.html",
    "revision": "87637136d898443c2b0ccbf58fcd8b32"
  },
  {
    "url": "html/bootstrap/forms/checks-radios.html",
    "revision": "d0be2f5c8c6c5236bdf15a6e42657af0"
  },
  {
    "url": "html/bootstrap/forms/floating-labels.html",
    "revision": "4a74e8dc945d16a168ca0c0e88541070"
  },
  {
    "url": "html/bootstrap/forms/form-control.html",
    "revision": "3aacf102e5d9f5623182a3a80bde4f47"
  },
  {
    "url": "html/bootstrap/forms/index.html",
    "revision": "5ff64b380814126450db078a974485a2"
  },
  {
    "url": "html/bootstrap/forms/layout.html",
    "revision": "c2d27a85680f2192fc46ce15b4ca3e58"
  },
  {
    "url": "html/bootstrap/forms/select.html",
    "revision": "cac91722a9405c8b2a925c643c5dd0a4"
  },
  {
    "url": "html/bootstrap/forms/validation.html",
    "revision": "3f508549d49f43314fdbb802ac396533"
  },
  {
    "url": "html/bootstrap/index.html",
    "revision": "484a8263923f1748999cb6b1ea6329e2"
  },
  {
    "url": "html/bootstrap/tables.html",
    "revision": "3fddc459e6602310c08af5ca1db39b6d"
  },
  {
    "url": "html/tailwind/customization/index.html",
    "revision": "c1adcaa1d58e055865a36ebf912949f4"
  },
  {
    "url": "html/tailwind/customization/presets.html",
    "revision": "e38ba3b8ddef60d8be8f006a9ac393f1"
  },
  {
    "url": "html/tailwind/directives.html",
    "revision": "8b2a6bea47fc4e8563e17a5f0f0863a4"
  },
  {
    "url": "html/tailwind/index.html",
    "revision": "38991294a27ebedb68db3468751524d1"
  },
  {
    "url": "htmx/index.html",
    "revision": "603d828dd17b8c607c32482686a28c32"
  },
  {
    "url": "index.html",
    "revision": "08b1773e2cb3efa2644b4f98fbd4f30e"
  },
  {
    "url": "javascript/alpinejs/index.html",
    "revision": "3eb789929579c1c420b14a4f4433bb01"
  },
  {
    "url": "javascript/alpinejs/textarea.html",
    "revision": "a181ed1b4940de44f7b52d0019f7f382"
  },
  {
    "url": "javascript/modules.html",
    "revision": "8f3afa95126198cc45788d153686a3ec"
  },
  {
    "url": "livewire/components/index.html",
    "revision": "db96e7a058aa485ac2b6ecb1e245811b"
  },
  {
    "url": "livewire/components/pagination.html",
    "revision": "1e7de0428125076fe6576229d63a9a21"
  },
  {
    "url": "livewire/installation.html",
    "revision": "a2e36353bafb6e02f4c87618a780fa18"
  },
  {
    "url": "other/priority-levels.html",
    "revision": "142d2be94f169d42071067d31c6695a0"
  },
  {
    "url": "other/static-site-generators.html",
    "revision": "287a3b223f99631eeff9195605175ca2"
  },
  {
    "url": "php/arrays/sorting-arrays.html",
    "revision": "38a1342416f8e2aaf08d07f6b6d297bc"
  },
  {
    "url": "php/classes/pagination.html",
    "revision": "30f9c21099810785a32e8011cd6e51b7"
  },
  {
    "url": "php/classes/pdo.html",
    "revision": "8355c4b2fa5c904518aa33fe274ef6c2"
  },
  {
    "url": "php/laravel/blade/components.html",
    "revision": "bffb1abc41d15e95b995e69ab6861eff"
  },
  {
    "url": "php/laravel/blade/directives.html",
    "revision": "a8e495af11782608e1832edfae01acf2"
  },
  {
    "url": "php/laravel/blade/index.html",
    "revision": "19aafbe191510930c4128dad9b8d9b98"
  },
  {
    "url": "php/laravel/controller.html",
    "revision": "c5e4155b7e50ec1dc465dd3fa6ae7007"
  },
  {
    "url": "php/laravel/database/factories.html",
    "revision": "61ea0a8184fe58216a8a64e856db27e5"
  },
  {
    "url": "php/laravel/database/index.html",
    "revision": "622978c788e9158e989bd46ad0239d47"
  },
  {
    "url": "php/laravel/database/migrations.html",
    "revision": "01de099f1a2250fad18ff161dc2d81c8"
  },
  {
    "url": "php/laravel/database/model.html",
    "revision": "e4ab70a0b5e7293c291b394818f1827e"
  },
  {
    "url": "php/laravel/database/observer.html",
    "revision": "7aba4ca7c211ece62cd8d6b6ab3a70e4"
  },
  {
    "url": "php/laravel/database/queries.html",
    "revision": "1cba021c4a3b6a58fe707795aa00400d"
  },
  {
    "url": "php/laravel/database/scopes.html",
    "revision": "eaf2ba5dd00f5b32255f04a29460589a"
  },
  {
    "url": "php/laravel/database/seeders.html",
    "revision": "69f94260fe95a6045c50c4fa82a463db"
  },
  {
    "url": "php/laravel/enums.html",
    "revision": "d9f1de567db4b8e333a47a132686f482"
  },
  {
    "url": "php/laravel/index.html",
    "revision": "f4a841850d522b8c29b3e411253b33b8"
  },
  {
    "url": "php/laravel/package-development/index.html",
    "revision": "290caa9c2bae8c41b983cf7ff2bd8aec"
  },
  {
    "url": "php/laravel/package-development/laravel-packager.html",
    "revision": "3f2f5e267e6c3f68e512b1bd00385039"
  },
  {
    "url": "php/laravel/package-development/views.html",
    "revision": "669a178f1f1d59747f913bcf218fde74"
  },
  {
    "url": "php/laravel/packages/guides/index.html",
    "revision": "6f8353b0e7adc3cf3694b12b8259737e"
  },
  {
    "url": "php/laravel/packages/guides/spatie-activity-log.html",
    "revision": "1ca669d1acb6accb67d5f0df49423133"
  },
  {
    "url": "php/laravel/packages/guides/spatie-comments.html",
    "revision": "56f553402196d50544e7fc984efdd287"
  },
  {
    "url": "php/laravel/packages/guides/spatie-feed.html",
    "revision": "3d82b79e7b1bb95c55224da9c8535522"
  },
  {
    "url": "php/laravel/packages/guides/spatie-media-library.html",
    "revision": "e7953bf981092a375962aa3c3b6f7ec1"
  },
  {
    "url": "php/laravel/packages/guides/spatie-permissions.html",
    "revision": "3787f3a05f4dfec7c43b8e850e0b110a"
  },
  {
    "url": "php/laravel/packages/guides/spatie-query-builder.html",
    "revision": "4e0d253e8bbacdda338c111c3c885e66"
  },
  {
    "url": "php/laravel/packages/guides/spatie-settings.html",
    "revision": "ce2e9c89957e681770260498e75f1fd2"
  },
  {
    "url": "php/laravel/packages/index.html",
    "revision": "63adef1a032fc11a15b6c4784373c6b0"
  },
  {
    "url": "php/laravel/policies.html",
    "revision": "cd4a42687215c302a03f9d43fbf86844"
  },
  {
    "url": "php/laravel/relationships/belongs-to-many.html",
    "revision": "e95e2e2af001864289e733ed65dd89a1"
  },
  {
    "url": "php/laravel/relationships/index.html",
    "revision": "8f90ccd25bb7075cda3f3047ce497039"
  },
  {
    "url": "php/laravel/relationships/many-to-many.html",
    "revision": "4a6eb9d0e5e95c7053fce3edc2f253bd"
  },
  {
    "url": "php/laravel/routes.html",
    "revision": "72cbaf64b4c7a15558a00bf439ca5256"
  },
  {
    "url": "php/laravel/task-scheduling.html",
    "revision": "5264a31bde5e50da6bee7eede7705d03"
  },
  {
    "url": "php/laravel/testing/controller-methods.html",
    "revision": "7be50d24e467577fcd712c5b100b395c"
  },
  {
    "url": "php/laravel/testing/index.html",
    "revision": "36e6f3bc4917eb2e3d1c229853f860b8"
  },
  {
    "url": "php/laravel/tinker/index.html",
    "revision": "9abec713f78cf3cfb9a5334358cf971c"
  },
  {
    "url": "php/laravel/traits/index.html",
    "revision": "50ac49c5941a2c5a4305e7d83b44338d"
  },
  {
    "url": "php/laravel/traits/scopes.html",
    "revision": "815353e8a6288c991cf67d74b790e2c8"
  },
  {
    "url": "php/laravel/validation/form-request.html",
    "revision": "dd58a2f32ca1826041d491429b02cd33"
  },
  {
    "url": "php/laravel/validation/index.html",
    "revision": "5c4572c789fe2797eb36771a06839796"
  },
  {
    "url": "php/laravel/validation/validation-rules.html",
    "revision": "23e0eb0937a9c6b4634b73cdde74527a"
  },
  {
    "url": "php/laravel/views.html",
    "revision": "4772452b7184c6970adfa7ac7d6dc64b"
  },
  {
    "url": "php/nova/fields.html",
    "revision": "6213c056fbd0b760969c5d11f14ba057"
  },
  {
    "url": "tools/database.html",
    "revision": "3078b8b4edad88d7ce0fc02ae7ce4c35"
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
