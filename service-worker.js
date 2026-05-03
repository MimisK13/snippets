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
    "revision": "34c716cea72349f5acd4c57c38080729"
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
    "url": "assets/js/100.c545d129.js",
    "revision": "afde137ab4300dc4cac70c6085293d98"
  },
  {
    "url": "assets/js/101.6791d0f1.js",
    "revision": "fb796c028eb7fe508c7bdd363ec4625a"
  },
  {
    "url": "assets/js/102.06f5d83a.js",
    "revision": "49a18c4e294657c2a93fc1f90d752632"
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
    "url": "assets/js/23.5cbd6e2f.js",
    "revision": "ba72d4eafb1012a0db5717643a63b9eb"
  },
  {
    "url": "assets/js/24.aae1972c.js",
    "revision": "81137ff4ec19a6eaeeb361a598ee3cb4"
  },
  {
    "url": "assets/js/25.4e816aa1.js",
    "revision": "e2213c76e3003a0c4f3fa58e8f708ffc"
  },
  {
    "url": "assets/js/26.b1ad437c.js",
    "revision": "73544fcbd0c2f169661d8f332cfa5185"
  },
  {
    "url": "assets/js/27.fb736152.js",
    "revision": "f6410a4780fd53e5a7f765bd0d824be2"
  },
  {
    "url": "assets/js/28.700c7d96.js",
    "revision": "6ce83008fb149674dcf7b98ef23f8674"
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
    "url": "assets/js/32.6550a0e5.js",
    "revision": "78d97ae569ed7dac4bbb56c6aee4a01b"
  },
  {
    "url": "assets/js/33.5defc1af.js",
    "revision": "fab7ee9ba00adc94d30daedc4d2c0393"
  },
  {
    "url": "assets/js/34.50487bbf.js",
    "revision": "6476673f4195af84c579c5e76172f5e3"
  },
  {
    "url": "assets/js/35.493b5197.js",
    "revision": "b45c4f75d9a0ea2d090e6926a3ec2917"
  },
  {
    "url": "assets/js/36.2a6a488a.js",
    "revision": "2fcc3f2e8b73026191c5fa5ba1378b7b"
  },
  {
    "url": "assets/js/37.a7e1d3d8.js",
    "revision": "653af86c36e37fb1e951de66fdc6ecce"
  },
  {
    "url": "assets/js/38.8853d7fc.js",
    "revision": "ee17ae58227641ff88a88e5bb489b049"
  },
  {
    "url": "assets/js/39.e4fe07c7.js",
    "revision": "97c5bee4fb29d520d308e264555e9a26"
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
    "url": "assets/js/41.223fd997.js",
    "revision": "dbf48ee66da7bce3bc3b3c17a5449a34"
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
    "url": "assets/js/44.bd1b7afc.js",
    "revision": "8bc536c20a8b0dc9356de9fc6cfc5921"
  },
  {
    "url": "assets/js/45.1222e3ce.js",
    "revision": "552da2234418f9cf775357cc925a0f56"
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
    "url": "assets/js/48.230bf471.js",
    "revision": "25aaaf2af5a8fb910710888fe3770d2d"
  },
  {
    "url": "assets/js/49.aebf5d74.js",
    "revision": "5c1de2952d2b5734cf3f6267c97c024a"
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
    "url": "assets/js/52.537898f4.js",
    "revision": "66174064910fce49d85722fced3fd412"
  },
  {
    "url": "assets/js/53.503f2b9b.js",
    "revision": "f68dedabfa7c77f05f34e195a385d76e"
  },
  {
    "url": "assets/js/54.9add7f07.js",
    "revision": "149b1bd2bd7a5766acca9cf4d42fc465"
  },
  {
    "url": "assets/js/55.ecae2fe6.js",
    "revision": "bbb23f1c09a147b1dde752aef3de23d4"
  },
  {
    "url": "assets/js/56.8966d2d1.js",
    "revision": "c70af09f6d3328a56bfb96b14f6cddc2"
  },
  {
    "url": "assets/js/57.02822268.js",
    "revision": "ba22981600a72ad0df9cac778dec63c5"
  },
  {
    "url": "assets/js/58.fdfdc490.js",
    "revision": "37608580438757459c1b10af2951f048"
  },
  {
    "url": "assets/js/59.78f4b417.js",
    "revision": "01b1ce84c5461ca5d797f7a11b4e69da"
  },
  {
    "url": "assets/js/6.d1e97dd3.js",
    "revision": "276aafaee8cddcfd9c1a37f4373cdee1"
  },
  {
    "url": "assets/js/60.6c7e8f0b.js",
    "revision": "a24b0d74809171fb4c810450de7dc46b"
  },
  {
    "url": "assets/js/61.0ad67981.js",
    "revision": "63a6ea160fbaeba69823419a7254c2ff"
  },
  {
    "url": "assets/js/62.7639d2ca.js",
    "revision": "c420a04f39557cf80288f64c639230b7"
  },
  {
    "url": "assets/js/63.dadd6a30.js",
    "revision": "6f8cadacf72b5e012ef9780f61658774"
  },
  {
    "url": "assets/js/64.a7954d42.js",
    "revision": "04cf655bef933d538729c3b745d1952f"
  },
  {
    "url": "assets/js/65.09fe6117.js",
    "revision": "00ea4dc3e0aa8b624534a2a39e6c1874"
  },
  {
    "url": "assets/js/66.537866a3.js",
    "revision": "7c640b241447c08e5ef555e11069e6bb"
  },
  {
    "url": "assets/js/67.5cb829ed.js",
    "revision": "3b1714b25ae113b5eb91f4e6ab7da1a4"
  },
  {
    "url": "assets/js/68.e4f7789e.js",
    "revision": "f10bae97852d8c751ea3c473432b1878"
  },
  {
    "url": "assets/js/69.897edc03.js",
    "revision": "fe28736ec039b2e00df02b16ee31a70e"
  },
  {
    "url": "assets/js/7.b7c0f320.js",
    "revision": "9acf1f8f90fc9fdda8c7859dea8299f8"
  },
  {
    "url": "assets/js/70.54e71a61.js",
    "revision": "7d180398ba20998069104e3cf084f003"
  },
  {
    "url": "assets/js/71.2fd519f9.js",
    "revision": "10f869415c85568e4c1eefa9e97c3583"
  },
  {
    "url": "assets/js/72.8ee23451.js",
    "revision": "7de843ef29f92b2da7d1b77c26c713fe"
  },
  {
    "url": "assets/js/73.53911f12.js",
    "revision": "c5fc9a5a844ce771453d81cd0be1a923"
  },
  {
    "url": "assets/js/74.2c1a21cd.js",
    "revision": "ae2a68dfe944486a5765e3cb80cf3bae"
  },
  {
    "url": "assets/js/75.c5602aed.js",
    "revision": "9aa80656214cf4eedc28dd7c5bf8f9d5"
  },
  {
    "url": "assets/js/76.a10ed896.js",
    "revision": "5f6b0e441ab09c24a961071b9d846b72"
  },
  {
    "url": "assets/js/77.7925f1a5.js",
    "revision": "9d7d00207ca683d2336b86424ba85b80"
  },
  {
    "url": "assets/js/78.290f36a4.js",
    "revision": "c06ed77d44ce9ade2495b61229798911"
  },
  {
    "url": "assets/js/79.2758f60e.js",
    "revision": "c0ee238684d3319ab036bb7e8ca6bb5a"
  },
  {
    "url": "assets/js/80.d0194662.js",
    "revision": "c746df031f593310b70468ff9713f487"
  },
  {
    "url": "assets/js/81.1d614cf5.js",
    "revision": "e7f560fe72e6b1d2206700d380d77552"
  },
  {
    "url": "assets/js/82.73d27aa5.js",
    "revision": "6cb674a46d9ac52fbc38ba42315fe0ae"
  },
  {
    "url": "assets/js/83.c8885882.js",
    "revision": "4eb667f4303b965172c23f4c548d3730"
  },
  {
    "url": "assets/js/84.7eef7803.js",
    "revision": "dfade8a853e4523817668d8dabf96adf"
  },
  {
    "url": "assets/js/85.7d513c98.js",
    "revision": "2c4e8ff2367b6b09b9a6cb844fd0933b"
  },
  {
    "url": "assets/js/86.4a5bc96b.js",
    "revision": "7a1b740a47cb89d244dc0a5d39c73b5b"
  },
  {
    "url": "assets/js/87.e69be3ad.js",
    "revision": "b8533c0051ea69a62242755579dd8ad9"
  },
  {
    "url": "assets/js/88.27515c7c.js",
    "revision": "81d8e3217b2583b7f093d0344f459ea2"
  },
  {
    "url": "assets/js/89.4fcd2f2f.js",
    "revision": "d8ad667a114e6350765c743c8365d573"
  },
  {
    "url": "assets/js/90.c669ba06.js",
    "revision": "4bce8f1037455ed70f3eee1c0814fa80"
  },
  {
    "url": "assets/js/91.cbd13be8.js",
    "revision": "c27af374f8cf154c46b4daa694791292"
  },
  {
    "url": "assets/js/92.0c98f481.js",
    "revision": "059351943bbc0d442b4e941f971728ca"
  },
  {
    "url": "assets/js/93.f1bd63b5.js",
    "revision": "242381167536e7fe1dee1a2b93b33ad1"
  },
  {
    "url": "assets/js/94.55c7eea5.js",
    "revision": "19c20af8021b1910f54d6e8c24861748"
  },
  {
    "url": "assets/js/95.a9184f80.js",
    "revision": "19ce37fad6594d06c8aad7461999f1e1"
  },
  {
    "url": "assets/js/96.657ad455.js",
    "revision": "21dcd733244b330ee0a373668fb82119"
  },
  {
    "url": "assets/js/97.0b331821.js",
    "revision": "62e1856ab0520ec0d559e5ede874e254"
  },
  {
    "url": "assets/js/98.4f4abb99.js",
    "revision": "a4fd4fe96986a19ebdbab8abaa816f81"
  },
  {
    "url": "assets/js/99.fdba6c39.js",
    "revision": "3b9ad2fa80452ee031a0b3e18469a3ab"
  },
  {
    "url": "assets/js/app.274bfea0.js",
    "revision": "ca641cb847fadb0000aff87ce8a1960b"
  },
  {
    "url": "assets/js/vendors~docsearch.6fed1ae2.js",
    "revision": "2ef16c7549a2197852a96e854981a5c7"
  },
  {
    "url": "draft/quick-notes.html",
    "revision": "8682878bab43a687d72598bd24644703"
  },
  {
    "url": "html/bootstrap/cards.html",
    "revision": "911b80548aa267978bbdefb28e7a2ac9"
  },
  {
    "url": "html/bootstrap/forms/checks-radios.html",
    "revision": "2af8d3fc027da87276b83010bda11595"
  },
  {
    "url": "html/bootstrap/forms/floating-labels.html",
    "revision": "35dae6fb91fa8beb74bae67d99cff24c"
  },
  {
    "url": "html/bootstrap/forms/form-control.html",
    "revision": "ff5ae019dac2ffbfa0e5651d8388effe"
  },
  {
    "url": "html/bootstrap/forms/index.html",
    "revision": "181b674d1f7103a91f57d2a43e4eac26"
  },
  {
    "url": "html/bootstrap/forms/layout.html",
    "revision": "efe86a68060998243d3f700279cf95a6"
  },
  {
    "url": "html/bootstrap/forms/select.html",
    "revision": "a785228dfec4461f2f843dbb6479cb19"
  },
  {
    "url": "html/bootstrap/forms/validation.html",
    "revision": "90d18b10f138b43cffc9b42b8efd4df4"
  },
  {
    "url": "html/bootstrap/index.html",
    "revision": "869ab16816a298ddb49f587198c5446b"
  },
  {
    "url": "html/bootstrap/tables.html",
    "revision": "598966312a1befbe02143085eae18079"
  },
  {
    "url": "html/tailwind/customization/index.html",
    "revision": "a44d62075fee08f88148ab38f3590906"
  },
  {
    "url": "html/tailwind/customization/presets.html",
    "revision": "9a7ea57c303a58ada0459cb0c209d098"
  },
  {
    "url": "html/tailwind/directives.html",
    "revision": "7b7f32685cdad356b0ee5c215c63065e"
  },
  {
    "url": "html/tailwind/index.html",
    "revision": "18ac3df7bd90cb0f92e0e1d789b32ab9"
  },
  {
    "url": "htmx/index.html",
    "revision": "7467e041aa2a28569e7dfcaed6c174ad"
  },
  {
    "url": "index.html",
    "revision": "98d71c793ad317ac3830e8f2f97255f7"
  },
  {
    "url": "javascript/alpinejs/index.html",
    "revision": "71b1fec15ec319fcf5ca328374a1fd8d"
  },
  {
    "url": "javascript/alpinejs/textarea.html",
    "revision": "6c62a55970fb18a1d21c6b0de247fd0e"
  },
  {
    "url": "javascript/modules.html",
    "revision": "21af954a5e3e9010d046597c1c80e426"
  },
  {
    "url": "livewire/components/index.html",
    "revision": "76510c08310c6c9fcaeedb91db6678f4"
  },
  {
    "url": "livewire/components/pagination.html",
    "revision": "8c68cadd83ba9222c919e3077f20e374"
  },
  {
    "url": "livewire/installation.html",
    "revision": "ed0b40298bc1a2cbc9caf0169bdadcd5"
  },
  {
    "url": "other/priority-levels.html",
    "revision": "c58d1293a9a768ef938694cc20a54483"
  },
  {
    "url": "other/static-site-generators.html",
    "revision": "d6c0dc5bf6b00bdb6454cb24a88a6cf0"
  },
  {
    "url": "php/arrays/sorting-arrays.html",
    "revision": "8e08a39bbba998b3097bc643525f9670"
  },
  {
    "url": "php/classes/pagination.html",
    "revision": "0fd66487e933c2d7eacf5a9c78fefa9c"
  },
  {
    "url": "php/classes/pdo.html",
    "revision": "7f39464f26434264160a928b5c39f43b"
  },
  {
    "url": "php/laravel/authorization/blade-directives/can.html",
    "revision": "0f28dbd3fe44e2acb60d7d6abd5bc5e2"
  },
  {
    "url": "php/laravel/authorization/blade-directives/canany.html",
    "revision": "608f416f8c633a67fbd297379e361e39"
  },
  {
    "url": "php/laravel/authorization/blade-directives/cannot.html",
    "revision": "d3314083ec7ddfa8cdac9ca74e7d9104"
  },
  {
    "url": "php/laravel/authorization/blade-directives/index.html",
    "revision": "5d314de20c1d4e1bf66339c4b7c9baf4"
  },
  {
    "url": "php/laravel/authorization/gates.html",
    "revision": "a7de1c7d301ace1d19744e040475d1a9"
  },
  {
    "url": "php/laravel/authorization/index.html",
    "revision": "d6afb684c10144cad2bf72f654f5b58b"
  },
  {
    "url": "php/laravel/authorization/policies.html",
    "revision": "7df711cfab847dfc91d9771d38f3ec41"
  },
  {
    "url": "php/laravel/blade/components.html",
    "revision": "fe62cc5d0b3326f156e5f2ebb5062004"
  },
  {
    "url": "php/laravel/blade/directives.html",
    "revision": "d8967350740e2a47a81e86e39390d2c7"
  },
  {
    "url": "php/laravel/blade/index.html",
    "revision": "491b94cc846a591756903bbd4dde58d3"
  },
  {
    "url": "php/laravel/controller.html",
    "revision": "e61a8094844574ca8c38ee53c55415cb"
  },
  {
    "url": "php/laravel/database/factories.html",
    "revision": "2db5dcfd9b2ac80282b790aa617ed5a7"
  },
  {
    "url": "php/laravel/database/index.html",
    "revision": "002c4dbc14d78dbe074ff9da1e274c8d"
  },
  {
    "url": "php/laravel/database/migrations.html",
    "revision": "e370cd323c4d04e4f01e88d48bc58904"
  },
  {
    "url": "php/laravel/database/model.html",
    "revision": "02d579e9a93d55ab7d09ffb5563822b3"
  },
  {
    "url": "php/laravel/database/observer.html",
    "revision": "24824174b4c50478f991ccb93acfe80a"
  },
  {
    "url": "php/laravel/database/queries.html",
    "revision": "3157cd7e59d0dd823b0787dc0f3cb1e0"
  },
  {
    "url": "php/laravel/database/scopes.html",
    "revision": "6fe05071aca3ca52dc5586d0bc26c164"
  },
  {
    "url": "php/laravel/database/seeders.html",
    "revision": "2eeb2ef3c46973a142723e1762014e43"
  },
  {
    "url": "php/laravel/enums.html",
    "revision": "e4dbfda21eede646ab98583c617e4a66"
  },
  {
    "url": "php/laravel/index.html",
    "revision": "675a73a9c53d65ccd0fe88422ec4a010"
  },
  {
    "url": "php/laravel/package-development/index.html",
    "revision": "7c9bfcd4de3a8fc2883e283b779ebd9c"
  },
  {
    "url": "php/laravel/package-development/laravel-packager.html",
    "revision": "a569051dae9c7f7cdd19fc5994ea1d7c"
  },
  {
    "url": "php/laravel/package-development/views.html",
    "revision": "a833e0d826013f050a31c8436ab3c2a4"
  },
  {
    "url": "php/laravel/packages/guides/index.html",
    "revision": "ea5848a4f515645d4cc15622748f97f2"
  },
  {
    "url": "php/laravel/packages/guides/laravel-pint.html",
    "revision": "c8942237d8dbfe238b3b89a7b35c091a"
  },
  {
    "url": "php/laravel/packages/guides/spatie-activity-log.html",
    "revision": "277eb5997e5dbe3522c2a204ffc29496"
  },
  {
    "url": "php/laravel/packages/guides/spatie-comments.html",
    "revision": "3677c034a7409d263ff1bbc283baac52"
  },
  {
    "url": "php/laravel/packages/guides/spatie-feed.html",
    "revision": "809dbd4ba5c9658bb6a1cf8025a097f2"
  },
  {
    "url": "php/laravel/packages/guides/spatie-media-library.html",
    "revision": "b1482f62514121c5c67ac13e8a589c96"
  },
  {
    "url": "php/laravel/packages/guides/spatie-permissions.html",
    "revision": "750002c18d77fb50eaced1dc4c8476c7"
  },
  {
    "url": "php/laravel/packages/guides/spatie-query-builder.html",
    "revision": "e9faf81c58d2f3d1a427e8f3cdbe4af7"
  },
  {
    "url": "php/laravel/packages/guides/spatie-settings.html",
    "revision": "a7c322c1a66a7b845bfc1a09209abcb3"
  },
  {
    "url": "php/laravel/packages/index.html",
    "revision": "b9854d1424d8049a5323bd920efad32f"
  },
  {
    "url": "php/laravel/policies.html",
    "revision": "0868082b92611412e4cec974c6396f1e"
  },
  {
    "url": "php/laravel/relationships/belongs-to-many.html",
    "revision": "f42d37ebc2bb4eb01fb9c2f2029be57a"
  },
  {
    "url": "php/laravel/relationships/index.html",
    "revision": "811c12d6c75b9cedb7b29f032f497ed6"
  },
  {
    "url": "php/laravel/relationships/many-to-many.html",
    "revision": "e206c97f747dd32b8be91de100ceb8fa"
  },
  {
    "url": "php/laravel/routes.html",
    "revision": "a519d551e58fcb466b455d65e117d64b"
  },
  {
    "url": "php/laravel/task-scheduling.html",
    "revision": "51d1de407ab089597cdd9485a1f333af"
  },
  {
    "url": "php/laravel/testing/controller-methods.html",
    "revision": "cca4985d67522608839b4d7cc3c32f05"
  },
  {
    "url": "php/laravel/testing/index.html",
    "revision": "68b15a31f8446b7e3cfc51fbcf1b8335"
  },
  {
    "url": "php/laravel/tinker/index.html",
    "revision": "94d514b1e86c587b09437e63c7ed2b4c"
  },
  {
    "url": "php/laravel/traits/index.html",
    "revision": "b26547f8aa7dfbd3dfb87da00496d3af"
  },
  {
    "url": "php/laravel/traits/scopes.html",
    "revision": "3cd69136ceb23ed19599e996dbeff3e2"
  },
  {
    "url": "php/laravel/validation/form-request.html",
    "revision": "bc9f5951928bb972c0c774ef08ffe377"
  },
  {
    "url": "php/laravel/validation/index.html",
    "revision": "266d599528520c61d55de90bde54a775"
  },
  {
    "url": "php/laravel/validation/validation-rules.html",
    "revision": "c37273114ea6abcf1bb203056b945c1c"
  },
  {
    "url": "php/laravel/views.html",
    "revision": "c5f55a31a4fa608ca2fe02ab3e35e5f6"
  },
  {
    "url": "php/nova/fields.html",
    "revision": "ee9a9d546ecc6c9be290deed87177ff1"
  },
  {
    "url": "tools/database.html",
    "revision": "b887c23b0878bd8b48b3a234abee880f"
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
