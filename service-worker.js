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
    "revision": "428673280e59d284ebd173c3c47825db"
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
    "url": "assets/js/23.15f3dbd6.js",
    "revision": "35669b2e5e1e8c624faa8017acf8f556"
  },
  {
    "url": "assets/js/24.aae1972c.js",
    "revision": "81137ff4ec19a6eaeeb361a598ee3cb4"
  },
  {
    "url": "assets/js/25.0d2bd9a5.js",
    "revision": "02890eea90742e356bf3a825b351a73e"
  },
  {
    "url": "assets/js/26.8dd0e696.js",
    "revision": "10ddc339806b02bb77cf776359cd5a9c"
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
    "url": "assets/js/30.96ba7d88.js",
    "revision": "68ff6ec646402a85f652d1cfc351646e"
  },
  {
    "url": "assets/js/31.c46a2fc8.js",
    "revision": "14339fb7229afdcdba99f7359b3f2929"
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
    "url": "assets/js/37.38cf2ddd.js",
    "revision": "5cfff2d697d7470ff583554f51dffb2f"
  },
  {
    "url": "assets/js/38.844b4e09.js",
    "revision": "a5682c42bd4598885e0aa51807243752"
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
    "url": "assets/js/42.bccc8e49.js",
    "revision": "209ec4f1cf9257037dcff53f27372dee"
  },
  {
    "url": "assets/js/43.49b3fa8f.js",
    "revision": "0373110ee9b9b2925a4632534a0ac6ac"
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
    "url": "assets/js/49.cb98072b.js",
    "revision": "6442a84e579cbd8a1ef763484077ecfb"
  },
  {
    "url": "assets/js/5.775b6552.js",
    "revision": "4df5e0148d5eaf03a8dd0c9a42e63adf"
  },
  {
    "url": "assets/js/50.82ba102f.js",
    "revision": "9e04b3c9bd1ef4ea32b98e75f2f93abd"
  },
  {
    "url": "assets/js/51.f99e0239.js",
    "revision": "8b67821ba6f8f89f28bd54e1b7af08df"
  },
  {
    "url": "assets/js/52.65a687ff.js",
    "revision": "68fd418c8de85cf7634e731fc43a5fb8"
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
    "url": "assets/js/55.2c9735e1.js",
    "revision": "1288da5163df943975ee02671e7bf7a1"
  },
  {
    "url": "assets/js/56.0f84c3b1.js",
    "revision": "37a436800c481dd62ddc49ed4debd711"
  },
  {
    "url": "assets/js/57.8a411719.js",
    "revision": "10f37f86f9b534e31dcdcbd31035f06f"
  },
  {
    "url": "assets/js/58.c97f2b2e.js",
    "revision": "8e8a1fc113dd3a456cc76666e97043d0"
  },
  {
    "url": "assets/js/59.2d8c668d.js",
    "revision": "591d6b178d9498d8fdd88c6e9b5211f2"
  },
  {
    "url": "assets/js/6.d1e97dd3.js",
    "revision": "276aafaee8cddcfd9c1a37f4373cdee1"
  },
  {
    "url": "assets/js/60.17a2fba0.js",
    "revision": "7585d7024a03efc800e1b95e2d79a3d1"
  },
  {
    "url": "assets/js/61.aedd1341.js",
    "revision": "53c6651d740004e56d0ed674b0252d89"
  },
  {
    "url": "assets/js/62.2254895e.js",
    "revision": "e601b3b9040bce31c0a361bb705eaa39"
  },
  {
    "url": "assets/js/63.82b590c8.js",
    "revision": "5cb4b344f264bdbdb70edfd6efebad0e"
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
    "url": "assets/js/67.816da68e.js",
    "revision": "f4f730607e4252bcb838339371f4bd0c"
  },
  {
    "url": "assets/js/68.cc64132b.js",
    "revision": "3f45ef0367c8555e61f2401d031f63b3"
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
    "url": "assets/js/70.841de1b4.js",
    "revision": "33580e70b238fc5ea4872f95fb1a9cc9"
  },
  {
    "url": "assets/js/71.815fdff2.js",
    "revision": "f4b5180a09f5d622478941e08ac255e3"
  },
  {
    "url": "assets/js/72.a723e4dd.js",
    "revision": "0a2bdd7cb4ee451dd220c50a06722c7c"
  },
  {
    "url": "assets/js/73.da5c7ddc.js",
    "revision": "c5fc9a5a844ce771453d81cd0be1a923"
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
    "url": "assets/js/78.4c189ce6.js",
    "revision": "68d27e2d1518b47a7e2a9ef826924bbd"
  },
  {
    "url": "assets/js/79.f89b0ace.js",
    "revision": "323a399be91898ea3a70127590b1d80a"
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
    "url": "assets/js/82.d37da28b.js",
    "revision": "eef587cbf23bbd455dadc1dcc53d5d08"
  },
  {
    "url": "assets/js/83.cfd76a97.js",
    "revision": "af62802b903da39f262318ac43b4279f"
  },
  {
    "url": "assets/js/84.6f75fae4.js",
    "revision": "55d97e4c39c69bcf568db36773bae1ba"
  },
  {
    "url": "assets/js/85.5e52bdc6.js",
    "revision": "6a6e1e6236917127b1aadae37e5334c4"
  },
  {
    "url": "assets/js/86.6ba36840.js",
    "revision": "4cb3e85e52957f00db672d7e633c3a57"
  },
  {
    "url": "assets/js/87.77e7470c.js",
    "revision": "e01d5d479207f4b3a881841e0c986a8a"
  },
  {
    "url": "assets/js/88.f357f2ba.js",
    "revision": "958ba140e638ad3801d8211452ba56c3"
  },
  {
    "url": "assets/js/89.c7351f14.js",
    "revision": "c8dbaac61e817d570dff38075740005a"
  },
  {
    "url": "assets/js/90.bcb0e8ac.js",
    "revision": "0d4eb0faaf18cfb0d3b0ff5ed325e514"
  },
  {
    "url": "assets/js/91.c026de30.js",
    "revision": "70bbdd6a88a5dda0a63762fd3e582cab"
  },
  {
    "url": "assets/js/92.96723d67.js",
    "revision": "2359b1ba512cf1f2e7ecfb14dd4f4624"
  },
  {
    "url": "assets/js/93.3dbf7184.js",
    "revision": "242381167536e7fe1dee1a2b93b33ad1"
  },
  {
    "url": "assets/js/94.36be776b.js",
    "revision": "645d793eedd00f1e050cdc0ee3538b0c"
  },
  {
    "url": "assets/js/95.15e3b43c.js",
    "revision": "3d5175a49500e4b78995549211879ea4"
  },
  {
    "url": "assets/js/96.d0180f4a.js",
    "revision": "31a3ae9932c66c5b794c5d4eea50bdd8"
  },
  {
    "url": "assets/js/97.3bc7c3a2.js",
    "revision": "bc5ca9c731fb6fc0e487cdcf0f6adf40"
  },
  {
    "url": "assets/js/98.e652bfa3.js",
    "revision": "7f686203c0618905a153fe3d8beea19c"
  },
  {
    "url": "assets/js/99.65c39556.js",
    "revision": "4df8b7e42c76e1f72d4e1aae401448c7"
  },
  {
    "url": "assets/js/app.b1a1ecb1.js",
    "revision": "f170e82e3315a10a3d29290c537c7ba4"
  },
  {
    "url": "assets/js/vendors~docsearch.6fed1ae2.js",
    "revision": "2ef16c7549a2197852a96e854981a5c7"
  },
  {
    "url": "draft/quick-notes.html",
    "revision": "1cb73c60f8eaea126c13ef8ee1e277df"
  },
  {
    "url": "html/bootstrap/cards.html",
    "revision": "2a3e2a19e74dd62946ddbf9f69d23029"
  },
  {
    "url": "html/bootstrap/forms/checks-radios.html",
    "revision": "c3ac2203c883ea68c76f27168e57cded"
  },
  {
    "url": "html/bootstrap/forms/floating-labels.html",
    "revision": "08c890065548a4a69906af8a3cdd9df6"
  },
  {
    "url": "html/bootstrap/forms/form-control.html",
    "revision": "396c0bfe35bcf0ed4185e627fd1d4537"
  },
  {
    "url": "html/bootstrap/forms/index.html",
    "revision": "583053156c212883b323bfb73962e7e4"
  },
  {
    "url": "html/bootstrap/forms/layout.html",
    "revision": "d5cd66db7611f336d94cb422dd0b9c89"
  },
  {
    "url": "html/bootstrap/forms/select.html",
    "revision": "bb948045b8e321c7c642248f19d10c54"
  },
  {
    "url": "html/bootstrap/forms/validation.html",
    "revision": "8394b2bcd4df6ef05b2558bbe6c0dd3c"
  },
  {
    "url": "html/bootstrap/index.html",
    "revision": "81cf57a9e9ffc6ad984dc898ff57c1ab"
  },
  {
    "url": "html/bootstrap/tables.html",
    "revision": "255f8913746c9a4307144df93163999d"
  },
  {
    "url": "html/tailwind/customization/index.html",
    "revision": "e12323f02b782d7ef5b6e3a0541d5af0"
  },
  {
    "url": "html/tailwind/customization/presets.html",
    "revision": "7529be840fe6c0ee50a38967d91fb119"
  },
  {
    "url": "html/tailwind/directives.html",
    "revision": "574810095cd346a01dca6216b8eb1970"
  },
  {
    "url": "html/tailwind/index.html",
    "revision": "6cc622562dff3985e02fc96dd6042b33"
  },
  {
    "url": "htmx/index.html",
    "revision": "42d24f10bf3f123511ebd1547e5bc5cc"
  },
  {
    "url": "index.html",
    "revision": "4fa76b7814ceefa28d698f6488189b2f"
  },
  {
    "url": "javascript/alpinejs/index.html",
    "revision": "349b5d6ccc034126b9aeedf18d6acebb"
  },
  {
    "url": "javascript/alpinejs/textarea.html",
    "revision": "134e88f48f81b7fa49cc9a4eac4d5348"
  },
  {
    "url": "javascript/modules.html",
    "revision": "c10351005eb5969f93c012c54b84fe83"
  },
  {
    "url": "livewire/components/index.html",
    "revision": "2fa7b5528a62712b8ea814f3952121a6"
  },
  {
    "url": "livewire/components/pagination.html",
    "revision": "2d9a40cd3a2a240119cd860ab96283d3"
  },
  {
    "url": "livewire/installation.html",
    "revision": "86c95ea9d0201608b7c3d1e1dc109324"
  },
  {
    "url": "other/priority-levels.html",
    "revision": "4cc46760405c89656110abbc02c733ab"
  },
  {
    "url": "other/static-site-generators.html",
    "revision": "b8e1fc5406ea898cc7dddf983ee8e365"
  },
  {
    "url": "php/arrays/sorting-arrays.html",
    "revision": "47077488dc79fd0429c25e1510df66db"
  },
  {
    "url": "php/classes/pagination.html",
    "revision": "c5547e46d811d1ec2438740c22718bd4"
  },
  {
    "url": "php/classes/pdo.html",
    "revision": "48d4220d579d1b0d8a2a5e31f5d8d368"
  },
  {
    "url": "php/laravel/authorization/blade-directives/can.html",
    "revision": "1310369210b1384136fe0fef331b21a6"
  },
  {
    "url": "php/laravel/authorization/blade-directives/canany.html",
    "revision": "6087f7c1b52709c26ab01910aae875a1"
  },
  {
    "url": "php/laravel/authorization/blade-directives/cannot.html",
    "revision": "3e51bf49d8ecb90525870464b24b01ec"
  },
  {
    "url": "php/laravel/authorization/blade-directives/index.html",
    "revision": "8757ed2c303cbf6b36aae116af38dbc1"
  },
  {
    "url": "php/laravel/authorization/gates.html",
    "revision": "a555ea2ec900b23f25be0a82fe7a9301"
  },
  {
    "url": "php/laravel/authorization/index.html",
    "revision": "fd9872f8d08597ed8bccb914fa19be22"
  },
  {
    "url": "php/laravel/authorization/policies.html",
    "revision": "3001bab989869aa1f5e3e06a121f4231"
  },
  {
    "url": "php/laravel/blade/components.html",
    "revision": "a8cf7d64b1e40304b79f6fe87c6efbcc"
  },
  {
    "url": "php/laravel/blade/directives.html",
    "revision": "236d17f40cf546cce86fe434b35d019c"
  },
  {
    "url": "php/laravel/blade/index.html",
    "revision": "6ac6346a52b45e88de32fb53c5fc513b"
  },
  {
    "url": "php/laravel/controller.html",
    "revision": "861a142370a055fb3b7d6fa3e6377a07"
  },
  {
    "url": "php/laravel/database/factories.html",
    "revision": "824899379cd3f8c2ac93f34ebdbac531"
  },
  {
    "url": "php/laravel/database/index.html",
    "revision": "fd93f47964c85e64044b100e5b627a21"
  },
  {
    "url": "php/laravel/database/migrations.html",
    "revision": "d9c5b5d3f72bd7fcfb2af7df762ee723"
  },
  {
    "url": "php/laravel/database/model.html",
    "revision": "28ad4c384992d93985e3a0c10ab055ac"
  },
  {
    "url": "php/laravel/database/observer.html",
    "revision": "5a6b243dea218684740af5d456f6cef9"
  },
  {
    "url": "php/laravel/database/queries.html",
    "revision": "d1542af6aa5761759b786e1cb62471ed"
  },
  {
    "url": "php/laravel/database/scopes.html",
    "revision": "9778649b6aa70844641cbc3efa4cc67f"
  },
  {
    "url": "php/laravel/database/seeders.html",
    "revision": "f7315e85993297ae84e81d91cd1d9a17"
  },
  {
    "url": "php/laravel/enums.html",
    "revision": "2e28d52e2ed4afb5a36a54eb72d12dc5"
  },
  {
    "url": "php/laravel/index.html",
    "revision": "703ad3030df0e276872ea6436418c6de"
  },
  {
    "url": "php/laravel/package-development/index.html",
    "revision": "c0eabf5c44e334ab1b2949741f683ff3"
  },
  {
    "url": "php/laravel/package-development/laravel-packager.html",
    "revision": "f76ebc83db2eff92c7b363b14654dfa0"
  },
  {
    "url": "php/laravel/package-development/views.html",
    "revision": "1440347c582afaa8ea9088efbef8966c"
  },
  {
    "url": "php/laravel/packages/guides/index.html",
    "revision": "b013124f1fcc879c890fff7474c54e6c"
  },
  {
    "url": "php/laravel/packages/guides/laravel-pint.html",
    "revision": "298faaad93a97027d6e4b41a8080fd80"
  },
  {
    "url": "php/laravel/packages/guides/spatie-activity-log.html",
    "revision": "373f320af63c0d770681793b697f99d1"
  },
  {
    "url": "php/laravel/packages/guides/spatie-comments.html",
    "revision": "61e5d39b08b8638ea7749ee9a5aef778"
  },
  {
    "url": "php/laravel/packages/guides/spatie-feed.html",
    "revision": "d500a16d2b05fdf852396bfe056ad156"
  },
  {
    "url": "php/laravel/packages/guides/spatie-media-library.html",
    "revision": "ef7f8b19e753a589420af9a8d00a931f"
  },
  {
    "url": "php/laravel/packages/guides/spatie-permissions.html",
    "revision": "5cb61abbdbdff4975ea33c57285f0ddd"
  },
  {
    "url": "php/laravel/packages/guides/spatie-query-builder.html",
    "revision": "e9787f41b21638bc9aaac3cbf5ca14f8"
  },
  {
    "url": "php/laravel/packages/guides/spatie-settings.html",
    "revision": "0a4bcd46424f19d997382f86b2704c77"
  },
  {
    "url": "php/laravel/packages/index.html",
    "revision": "4585fb199abd6f95196264c879dd9c45"
  },
  {
    "url": "php/laravel/policies.html",
    "revision": "375063d863a455b4b079a22086239f07"
  },
  {
    "url": "php/laravel/relationships/belongs-to-many.html",
    "revision": "351cc3395396a779c125b5f29abbb632"
  },
  {
    "url": "php/laravel/relationships/index.html",
    "revision": "4dc9ac9665e008d4f34f4514966a5867"
  },
  {
    "url": "php/laravel/relationships/many-to-many.html",
    "revision": "110ddcbf6375fd116f3b1eeca132ddd9"
  },
  {
    "url": "php/laravel/routes.html",
    "revision": "68c90a89a21e8bce7c2c760034fc4460"
  },
  {
    "url": "php/laravel/task-scheduling.html",
    "revision": "e13d962de9a1ff840bd8d0c6ab684147"
  },
  {
    "url": "php/laravel/testing/controller-methods.html",
    "revision": "30966aef2ee16b6c0ff2719b74109d57"
  },
  {
    "url": "php/laravel/testing/index.html",
    "revision": "d0ac5d2acf658ccbf884650c8a160a6c"
  },
  {
    "url": "php/laravel/tinker/index.html",
    "revision": "b1715b309f305df1f018b711afbafaee"
  },
  {
    "url": "php/laravel/traits/index.html",
    "revision": "5e023029c7f29201a44a180b80589a9b"
  },
  {
    "url": "php/laravel/traits/scopes.html",
    "revision": "27d303ecc0b77b8c1be33b36eaeaa0b0"
  },
  {
    "url": "php/laravel/validation/form-request.html",
    "revision": "f9e225b2624ebd7ba4f68a27f4c3c3ef"
  },
  {
    "url": "php/laravel/validation/index.html",
    "revision": "208e83ecdea54e0f4eeaa8da8ece82db"
  },
  {
    "url": "php/laravel/validation/validation-rules.html",
    "revision": "5269e9f8abbbadae7e969bd08b3dc107"
  },
  {
    "url": "php/laravel/views.html",
    "revision": "41ee1e2d11267f5ce525b0dff370850e"
  },
  {
    "url": "php/nova/fields.html",
    "revision": "c2be3ed04e588d48c809aed7d6b1a9e7"
  },
  {
    "url": "tools/database.html",
    "revision": "65cde9d98d7cb7317a983e4bda7cb587"
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
