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
    "revision": "7f1d71245b9e43ead7252cd66f5e9229"
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
    "url": "assets/js/100.54455b79.js",
    "revision": "3cfa9534111cdd8bdf747defe554f34c"
  },
  {
    "url": "assets/js/101.d583d5eb.js",
    "revision": "48bc3a36c351352a21af0f5e1f8d7292"
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
    "url": "assets/js/23.f81a2552.js",
    "revision": "2cecec5ec47ab76b46726b871feb0ce2"
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
    "url": "assets/js/31.568bc97d.js",
    "revision": "f54026c8c9f43d51415a778412656a9c"
  },
  {
    "url": "assets/js/32.4446cc7f.js",
    "revision": "6d29c5ff9c7e43e058fa2dfc51a93b01"
  },
  {
    "url": "assets/js/33.48fc36fb.js",
    "revision": "ed9563a858d489317a98a5e1915a4267"
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
    "url": "assets/js/42.394c60f7.js",
    "revision": "44d345120de6a49882177449ea401ee1"
  },
  {
    "url": "assets/js/43.52021c9b.js",
    "revision": "0698df39f280e33b10a0eb86f992af68"
  },
  {
    "url": "assets/js/44.c1441a2e.js",
    "revision": "34a19cf54457319c40e7249b2b006e4a"
  },
  {
    "url": "assets/js/45.f582bec9.js",
    "revision": "0625eb903e4f1254de49b2bea4f3d0c4"
  },
  {
    "url": "assets/js/46.9ab8c27b.js",
    "revision": "fa9a4d64d596374e931cb7e727b38da4"
  },
  {
    "url": "assets/js/47.56a6ffb5.js",
    "revision": "3add7cc398b47b0bb2cd4715a963e1b4"
  },
  {
    "url": "assets/js/48.55a84622.js",
    "revision": "a295ae08cccb387e4cb81b60787b4b0a"
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
    "url": "assets/js/51.b2573257.js",
    "revision": "41a1573bbf0a5c9f8ae31313496bf3eb"
  },
  {
    "url": "assets/js/52.4f0655ed.js",
    "revision": "53dfd185971de8b9f36b8b863575a505"
  },
  {
    "url": "assets/js/53.ca1c16ba.js",
    "revision": "f6dacb21c6f21acbd655cebd4661f59f"
  },
  {
    "url": "assets/js/54.5ae10ddf.js",
    "revision": "abfae2fd34c00847e36b172da97491f4"
  },
  {
    "url": "assets/js/55.5b4e3e16.js",
    "revision": "5fb434a8a1ffe1d12d86add946d24f4b"
  },
  {
    "url": "assets/js/56.1b40986a.js",
    "revision": "8ca6ca66cd3f5005f983a3ff956ea3cf"
  },
  {
    "url": "assets/js/57.5ae9c837.js",
    "revision": "17f073615fe45951a58e85d97ee45906"
  },
  {
    "url": "assets/js/58.c97f2b2e.js",
    "revision": "8e8a1fc113dd3a456cc76666e97043d0"
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
    "url": "assets/js/61.33977931.js",
    "revision": "699aa4278646b4e4989fed75a3f5e62a"
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
    "url": "assets/js/64.79ed6cbf.js",
    "revision": "c95edd6b087a52185ac56e8370680d92"
  },
  {
    "url": "assets/js/65.0c38598c.js",
    "revision": "ccc754e8d016dd017745cd26944b28f0"
  },
  {
    "url": "assets/js/66.e3d15670.js",
    "revision": "e11ab18401a511c40dba5c5616905956"
  },
  {
    "url": "assets/js/67.c1e7fe85.js",
    "revision": "bfd6f0d9bfa629f585b9cb48d740695d"
  },
  {
    "url": "assets/js/68.a0f703eb.js",
    "revision": "d255e754c6b6e65c75d647dcb600fad6"
  },
  {
    "url": "assets/js/69.0b76c878.js",
    "revision": "8bf69d613caaed8ba8eaf085b4afc24d"
  },
  {
    "url": "assets/js/7.b7c0f320.js",
    "revision": "9acf1f8f90fc9fdda8c7859dea8299f8"
  },
  {
    "url": "assets/js/70.ddb6ee1e.js",
    "revision": "f64c4b27aa7256077d9cc42fc4e6ee6a"
  },
  {
    "url": "assets/js/71.7d71e441.js",
    "revision": "b6987c8aa4d6e6cbab247fb1f3852249"
  },
  {
    "url": "assets/js/72.722a1ce8.js",
    "revision": "88aa6a5d8ff2488d9ec7ff952a69ce8a"
  },
  {
    "url": "assets/js/73.a1e81240.js",
    "revision": "6be969350ba302cbdb755579d2d4514a"
  },
  {
    "url": "assets/js/74.a215ae38.js",
    "revision": "cd9f1e4e31c272d5de5d5567ed0f78d9"
  },
  {
    "url": "assets/js/75.99686eaf.js",
    "revision": "2a73315ebabe434f11dd9f7c07d88022"
  },
  {
    "url": "assets/js/76.8213f833.js",
    "revision": "28b0eb927c85f4f9d86a55149bb421cc"
  },
  {
    "url": "assets/js/77.cb2c7320.js",
    "revision": "1135db5d127a63980799c6f8ed6229d3"
  },
  {
    "url": "assets/js/78.ad3422bb.js",
    "revision": "6a40e33342676d9babf9f6ca664655a1"
  },
  {
    "url": "assets/js/79.cec9e3f7.js",
    "revision": "b7a61d8ace47aedadbc379d55006a6c3"
  },
  {
    "url": "assets/js/80.c509feed.js",
    "revision": "5cd692530a81cbf610c7899339ab0f84"
  },
  {
    "url": "assets/js/81.8ab2c464.js",
    "revision": "d2e4f79396755d2d1df6331940b196dc"
  },
  {
    "url": "assets/js/82.f34c5473.js",
    "revision": "8117b9d7083c4f1cd0d8ec0066b2a624"
  },
  {
    "url": "assets/js/83.e4bf4053.js",
    "revision": "e43a1a8feda74b406551819131efa1d1"
  },
  {
    "url": "assets/js/84.ccc68ca5.js",
    "revision": "1aa20a42bc11d74922af89a9b813024d"
  },
  {
    "url": "assets/js/85.cd73f234.js",
    "revision": "2d2e6d2971512a692cf3ef5a39bfcb0e"
  },
  {
    "url": "assets/js/86.3e121b00.js",
    "revision": "e47d312d8f6b285eb9f731d9b54647aa"
  },
  {
    "url": "assets/js/87.6b3fab9a.js",
    "revision": "31f792e18bdfe66467057f40597fb46f"
  },
  {
    "url": "assets/js/88.f357f2ba.js",
    "revision": "958ba140e638ad3801d8211452ba56c3"
  },
  {
    "url": "assets/js/89.37ddf544.js",
    "revision": "6f2b2d741b23e0c672b95e6a6552cfe5"
  },
  {
    "url": "assets/js/90.d759fb2f.js",
    "revision": "4a9360e65e6ccad2d2fdf6ef517683e5"
  },
  {
    "url": "assets/js/91.d679764e.js",
    "revision": "ca2c96b046af456beef5dc3c3f6a049d"
  },
  {
    "url": "assets/js/92.494156fd.js",
    "revision": "68a5d80fed8b6e666ef4214fa75b8add"
  },
  {
    "url": "assets/js/93.a0bf8fe9.js",
    "revision": "a124c249c127c909cd065d973f37afc7"
  },
  {
    "url": "assets/js/94.6aaf5596.js",
    "revision": "71cb360b4512461c16515846acbcbe62"
  },
  {
    "url": "assets/js/95.68b3d011.js",
    "revision": "0f2e1fdde2c8628979075ef2e02fc19a"
  },
  {
    "url": "assets/js/96.58cae3bf.js",
    "revision": "c5c1637b3174aa48b217f91deda5fbf6"
  },
  {
    "url": "assets/js/97.3bc7c3a2.js",
    "revision": "bc5ca9c731fb6fc0e487cdcf0f6adf40"
  },
  {
    "url": "assets/js/98.345867bc.js",
    "revision": "c2601de1bd6b56a4a7cdaec3db30e73f"
  },
  {
    "url": "assets/js/99.65c39556.js",
    "revision": "4df8b7e42c76e1f72d4e1aae401448c7"
  },
  {
    "url": "assets/js/app.13989876.js",
    "revision": "81e2448999aebc15c12458198bc92c5c"
  },
  {
    "url": "assets/js/vendors~docsearch.6fed1ae2.js",
    "revision": "2ef16c7549a2197852a96e854981a5c7"
  },
  {
    "url": "draft/quick-notes.html",
    "revision": "1fc9a85c45339645deeaef64d8d909f9"
  },
  {
    "url": "html/bootstrap/cards.html",
    "revision": "6f0df4a8172b73165e9f5829e398a5aa"
  },
  {
    "url": "html/bootstrap/forms/checks-radios.html",
    "revision": "5a0d21ac5b5887295e6762abada58beb"
  },
  {
    "url": "html/bootstrap/forms/floating-labels.html",
    "revision": "a6380a597912666c1f34bc54d9740251"
  },
  {
    "url": "html/bootstrap/forms/form-control.html",
    "revision": "67607345f7783af42cfc855e4d181557"
  },
  {
    "url": "html/bootstrap/forms/index.html",
    "revision": "bc631206b5f1e8ff8c184e464ccc2c24"
  },
  {
    "url": "html/bootstrap/forms/layout.html",
    "revision": "3c974fbed7eebcfb1e23df44f696b111"
  },
  {
    "url": "html/bootstrap/forms/select.html",
    "revision": "df0775a1760b5255616615d918ba311c"
  },
  {
    "url": "html/bootstrap/forms/validation.html",
    "revision": "b0d4b99d8aa7797a6312c35ccd47fa26"
  },
  {
    "url": "html/bootstrap/index.html",
    "revision": "8a1b84eb74ac8c5a7f2976fdaad9eb5e"
  },
  {
    "url": "html/bootstrap/tables.html",
    "revision": "d84c5def42910f1539cd536ee30b4b99"
  },
  {
    "url": "html/tailwind/customization/index.html",
    "revision": "5f9bff2389fe73ea3669475b1b717a41"
  },
  {
    "url": "html/tailwind/customization/presets.html",
    "revision": "68cb828ddcdd1e0469047feedc3bff2c"
  },
  {
    "url": "html/tailwind/directives.html",
    "revision": "d82fe2f7b731fb1eaad7be75ca353451"
  },
  {
    "url": "html/tailwind/index.html",
    "revision": "9a4d1a45e6a45c0800f58ed11866527d"
  },
  {
    "url": "htmx/index.html",
    "revision": "b73f3121824f9e77edac286c7e2a2abd"
  },
  {
    "url": "index.html",
    "revision": "e9c0268ab586e49c47de8c2f993bd5ec"
  },
  {
    "url": "javascript/alpinejs/index.html",
    "revision": "4d8447c1869b36938439f922b29ab849"
  },
  {
    "url": "javascript/alpinejs/textarea.html",
    "revision": "b6777a70d911d2c7ff20229be00cadce"
  },
  {
    "url": "javascript/modules.html",
    "revision": "481ca74f2fda7aba09a07fbfc8694bc5"
  },
  {
    "url": "livewire/components/index.html",
    "revision": "c7785f173a034471623e4b1aa9ef2668"
  },
  {
    "url": "livewire/components/pagination.html",
    "revision": "1798af23b16676be091448378faa3cde"
  },
  {
    "url": "livewire/installation.html",
    "revision": "563f8ac64da5c61e21e2d45407469b0c"
  },
  {
    "url": "other/priority-levels.html",
    "revision": "f9da1d125ff9d89c9d221766c540767c"
  },
  {
    "url": "other/static-site-generators.html",
    "revision": "32a42334e4960c7b6a03b74cfd57e4bc"
  },
  {
    "url": "php/arrays/sorting-arrays.html",
    "revision": "1b84aed697572a7560f3b624a140f953"
  },
  {
    "url": "php/classes/pagination.html",
    "revision": "a24d8fff61f6a5b859c8079e69e68606"
  },
  {
    "url": "php/classes/pdo.html",
    "revision": "1d702693845c8edd0e878c06d7c8b27d"
  },
  {
    "url": "php/laravel/authorization/blade-directives/can.html",
    "revision": "4f869ac4fbd062a6f0d277bdaea5c0e1"
  },
  {
    "url": "php/laravel/authorization/blade-directives/canany.html",
    "revision": "0c40f2b85fe62f53e45b40d51d299215"
  },
  {
    "url": "php/laravel/authorization/blade-directives/cannot.html",
    "revision": "86fe2adea1e8257a6fe53e4a9e54d0f8"
  },
  {
    "url": "php/laravel/authorization/blade-directives/index.html",
    "revision": "91e9c73a7806ad0c20173ae5d9327ebf"
  },
  {
    "url": "php/laravel/authorization/gates.html",
    "revision": "f2ea38202aac687f2cde064f96c25056"
  },
  {
    "url": "php/laravel/authorization/index.html",
    "revision": "b6abf016f4cd6aa753adba1903e62ebe"
  },
  {
    "url": "php/laravel/authorization/policies.html",
    "revision": "5485274d360032aab99aed8061ecd8d1"
  },
  {
    "url": "php/laravel/blade/components.html",
    "revision": "d851f4699f199cfc38fbf2567ea619a6"
  },
  {
    "url": "php/laravel/blade/directives.html",
    "revision": "944fb6f5343fe6e186875f6a50c23247"
  },
  {
    "url": "php/laravel/blade/index.html",
    "revision": "67efefaa446b591915eb90c94e29862e"
  },
  {
    "url": "php/laravel/controller.html",
    "revision": "b4848bf0c2322138523730c2c0ef2f2e"
  },
  {
    "url": "php/laravel/database/factories.html",
    "revision": "430ab1972160fbeba4a05d05c2b8e238"
  },
  {
    "url": "php/laravel/database/index.html",
    "revision": "24a80cd4039f77361b78306fd23a7949"
  },
  {
    "url": "php/laravel/database/migrations.html",
    "revision": "3a74fac34cc4a42c8203d8346fd136df"
  },
  {
    "url": "php/laravel/database/model.html",
    "revision": "22ab1b18fb1a6bf394d8b48ca61fbf60"
  },
  {
    "url": "php/laravel/database/observer.html",
    "revision": "de65df8e46c15820a16217a47f6a9b89"
  },
  {
    "url": "php/laravel/database/queries.html",
    "revision": "55eb8fd26eba283fed6677772b48bbd5"
  },
  {
    "url": "php/laravel/database/scopes.html",
    "revision": "67e3574164471e755d225b4fffad9d44"
  },
  {
    "url": "php/laravel/database/seeders.html",
    "revision": "0f819e4e37d85da7f43451f07128f35f"
  },
  {
    "url": "php/laravel/enums.html",
    "revision": "a67aba95563e16cb43038703bc7ec04c"
  },
  {
    "url": "php/laravel/index.html",
    "revision": "91110e2718d39779adde9ec4d10d6f40"
  },
  {
    "url": "php/laravel/package-development/index.html",
    "revision": "d687e8f3dbeeef063cc63ecb00a53524"
  },
  {
    "url": "php/laravel/package-development/laravel-packager.html",
    "revision": "3cf1f3aad65e3746904cfc03b5ca2b0b"
  },
  {
    "url": "php/laravel/package-development/views.html",
    "revision": "5de956b5678106623a483e2942078cb2"
  },
  {
    "url": "php/laravel/packages/guides/index.html",
    "revision": "78758ec389ace1d66e52bb1d66211506"
  },
  {
    "url": "php/laravel/packages/guides/laravel-pint.html",
    "revision": "c62d94b761a37156c2cd28f82272820d"
  },
  {
    "url": "php/laravel/packages/guides/spatie-activity-log.html",
    "revision": "c9058ba02e883ce843b7a3080f170b02"
  },
  {
    "url": "php/laravel/packages/guides/spatie-comments.html",
    "revision": "bfb475584a92e1beb321d40c4e2838fa"
  },
  {
    "url": "php/laravel/packages/guides/spatie-feed.html",
    "revision": "eb07354155ac286110082f75fd9d0cb7"
  },
  {
    "url": "php/laravel/packages/guides/spatie-media-library.html",
    "revision": "04612bb2bbc05947e0b946164c0f7c7b"
  },
  {
    "url": "php/laravel/packages/guides/spatie-permissions.html",
    "revision": "18002aadde3dd68ea44d7fb3ce206b99"
  },
  {
    "url": "php/laravel/packages/guides/spatie-query-builder.html",
    "revision": "5c2cbba4bce1e89407afc5c35c40c160"
  },
  {
    "url": "php/laravel/packages/guides/spatie-settings.html",
    "revision": "7089d554d020894bbfe671cf2dd4b913"
  },
  {
    "url": "php/laravel/packages/index.html",
    "revision": "64704e5706430bc19d1623f9037e9029"
  },
  {
    "url": "php/laravel/policies.html",
    "revision": "bcf67da1ae4a8d586feb7f680a28e55c"
  },
  {
    "url": "php/laravel/relationships/belongs-to-many.html",
    "revision": "cf0a01eb164d55c4a0a0f88647afa918"
  },
  {
    "url": "php/laravel/relationships/index.html",
    "revision": "7f2816d5d51b785f022835cf5ec8cea3"
  },
  {
    "url": "php/laravel/relationships/many-to-many.html",
    "revision": "e1b006fa1e975f98c2801e810348df6e"
  },
  {
    "url": "php/laravel/routes.html",
    "revision": "2ec0aa14dba7899e641b5aaceb593f86"
  },
  {
    "url": "php/laravel/task-scheduling.html",
    "revision": "c196c311ba12b7a9b5fa64d3d854aaab"
  },
  {
    "url": "php/laravel/testing/controller-methods.html",
    "revision": "2719a2a028beb0d1726acceff5beae89"
  },
  {
    "url": "php/laravel/testing/index.html",
    "revision": "9929a423da5bfb281083721950e659a2"
  },
  {
    "url": "php/laravel/tinker/index.html",
    "revision": "55085bef48da1c8dda2e19b41d949cd3"
  },
  {
    "url": "php/laravel/traits/index.html",
    "revision": "70074a8cc910280976c51a4ac212af38"
  },
  {
    "url": "php/laravel/traits/scopes.html",
    "revision": "3196e2ba752a63d8078ca033db8ec4d8"
  },
  {
    "url": "php/laravel/validation/form-request.html",
    "revision": "a47ae6c50ed28ae29131c7b4de952cc2"
  },
  {
    "url": "php/laravel/validation/index.html",
    "revision": "f719a7e494ebb8664abb566679962751"
  },
  {
    "url": "php/laravel/validation/validation-rules.html",
    "revision": "6d810ad8d2adacf336582aa18053c70e"
  },
  {
    "url": "php/laravel/views.html",
    "revision": "ab4cd296645a953e76a2a09f7a21187b"
  },
  {
    "url": "php/nova/fields.html",
    "revision": "b5e50ea7272ee6ec6087fa1e56ae7a1c"
  },
  {
    "url": "tools/database.html",
    "revision": "2da8f2716cac1f2eddbfe32044eabc9e"
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
