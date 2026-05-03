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
    "revision": "f8c504aa32b9bb77926ad7daadaa0840"
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
    "url": "assets/js/100.2434ffa7.js",
    "revision": "9322afb01a072aa773f2689d520b3fae"
  },
  {
    "url": "assets/js/101.a306c6e7.js",
    "revision": "61087bd5ff4435ec54c9bb6730f22c2b"
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
    "url": "assets/js/23.0d17cae6.js",
    "revision": "ba72d4eafb1012a0db5717643a63b9eb"
  },
  {
    "url": "assets/js/24.b6a6194a.js",
    "revision": "9536e6cfb528820412d890a6827aa204"
  },
  {
    "url": "assets/js/25.0d2bd9a5.js",
    "revision": "02890eea90742e356bf3a825b351a73e"
  },
  {
    "url": "assets/js/26.c2ee6027.js",
    "revision": "17bd3851dea1075c71535ca1a94e5456"
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
    "url": "assets/js/33.dd1a21a7.js",
    "revision": "fd19e7e77d30449a50c8b5a68a48244c"
  },
  {
    "url": "assets/js/34.63aabd63.js",
    "revision": "3667cbbf1376267b9f7ac99dcb21bb89"
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
    "url": "assets/js/39.3629e0fd.js",
    "revision": "86a462b1a775f44ecb746d42c9e1adca"
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
    "url": "assets/js/42.e359dea9.js",
    "revision": "3a1a2e9ccf759bcaefbc41f3c98e94a5"
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
    "url": "assets/js/52.86311b45.js",
    "revision": "de7fb1c89491d7a0ad693654f68b98e0"
  },
  {
    "url": "assets/js/53.b1a51038.js",
    "revision": "c3017ffc2a3bd22eb2c6a230c7309832"
  },
  {
    "url": "assets/js/54.5ae10ddf.js",
    "revision": "abfae2fd34c00847e36b172da97491f4"
  },
  {
    "url": "assets/js/55.9c7ae4dc.js",
    "revision": "38225fcf6e84661c20b52b18924d39ba"
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
    "url": "assets/js/61.edf5576f.js",
    "revision": "5f19c891502b70a9d2dd4876bd0d2c75"
  },
  {
    "url": "assets/js/62.98539977.js",
    "revision": "83d5f990ae9d0923747af43262080ad0"
  },
  {
    "url": "assets/js/63.82b590c8.js",
    "revision": "5cb4b344f264bdbdb70edfd6efebad0e"
  },
  {
    "url": "assets/js/64.c5d54903.js",
    "revision": "c5a68cd37efa147676b0ef2894e19790"
  },
  {
    "url": "assets/js/65.0c38598c.js",
    "revision": "ccc754e8d016dd017745cd26944b28f0"
  },
  {
    "url": "assets/js/66.8d97416a.js",
    "revision": "b57cdef65e54ce134a6002b734795c0f"
  },
  {
    "url": "assets/js/67.bfba53bc.js",
    "revision": "21a84bf029c9faf67f89f2624e26b9b6"
  },
  {
    "url": "assets/js/68.6046b9b3.js",
    "revision": "9f5c3293eff84b5c2ef8417241c776b1"
  },
  {
    "url": "assets/js/69.eccabaeb.js",
    "revision": "3edbc564c16a178b33c7df3fa3246f94"
  },
  {
    "url": "assets/js/7.b7c0f320.js",
    "revision": "9acf1f8f90fc9fdda8c7859dea8299f8"
  },
  {
    "url": "assets/js/70.8901bfb9.js",
    "revision": "66b3a0f050cb51512345798f419224b6"
  },
  {
    "url": "assets/js/71.9dad32c3.js",
    "revision": "0eb7521cf9f63a888bc76e9306746ddb"
  },
  {
    "url": "assets/js/72.fea0d1da.js",
    "revision": "cd82167c1c135f038d2298393f4b8600"
  },
  {
    "url": "assets/js/73.92ef1685.js",
    "revision": "c35d8bab755366b74f239d4855caa0bf"
  },
  {
    "url": "assets/js/74.7c0eb8a5.js",
    "revision": "420acab8806e1df7d11bae9d95bf2b33"
  },
  {
    "url": "assets/js/75.f4a604e5.js",
    "revision": "7d107d0cffb8e72d63171adbe0a5d69f"
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
    "url": "assets/js/79.204897ec.js",
    "revision": "c70b47275632600b8d47e37e13a8d937"
  },
  {
    "url": "assets/js/80.3a4483c1.js",
    "revision": "89952d1b2e37390f67ca453d069f9647"
  },
  {
    "url": "assets/js/81.f9276c2f.js",
    "revision": "bfabb5d20ab36eba1ad880155ce1aff2"
  },
  {
    "url": "assets/js/82.f34c5473.js",
    "revision": "8117b9d7083c4f1cd0d8ec0066b2a624"
  },
  {
    "url": "assets/js/83.e5854362.js",
    "revision": "a1449014d98e5351327e229fee5f8cdc"
  },
  {
    "url": "assets/js/84.7759e8c5.js",
    "revision": "c8a88f7e88ea0e60f46433eac63df439"
  },
  {
    "url": "assets/js/85.67b67c29.js",
    "revision": "1f20a0ef5461fc86c269748ba11de7e2"
  },
  {
    "url": "assets/js/86.3e121b00.js",
    "revision": "e47d312d8f6b285eb9f731d9b54647aa"
  },
  {
    "url": "assets/js/87.a28f808f.js",
    "revision": "8e5392f211f146c6cb8f2e23e581ff9b"
  },
  {
    "url": "assets/js/88.422849c3.js",
    "revision": "5498f99693afe24543752c200ec5ffbb"
  },
  {
    "url": "assets/js/89.c7351f14.js",
    "revision": "c8dbaac61e817d570dff38075740005a"
  },
  {
    "url": "assets/js/90.d759fb2f.js",
    "revision": "4a9360e65e6ccad2d2fdf6ef517683e5"
  },
  {
    "url": "assets/js/91.cbd13be8.js",
    "revision": "c27af374f8cf154c46b4daa694791292"
  },
  {
    "url": "assets/js/92.500fb9da.js",
    "revision": "e11c6b4eb6a9182072807331bc8b170b"
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
    "url": "assets/js/95.0571ef56.js",
    "revision": "7f1daf509f6164bbbb4c0c5ccd0bf580"
  },
  {
    "url": "assets/js/96.46ee60c7.js",
    "revision": "c5770eea878befcf623a12571de92aba"
  },
  {
    "url": "assets/js/97.dff946bf.js",
    "revision": "61722c0682eb0d130b161bd2cdd4713f"
  },
  {
    "url": "assets/js/98.1e26b544.js",
    "revision": "e86bdb8e72095ad7515eb15e81372381"
  },
  {
    "url": "assets/js/99.bd1976df.js",
    "revision": "45cfe2f7333b2634898153575a450924"
  },
  {
    "url": "assets/js/app.3da1e15d.js",
    "revision": "67951114d7434b1ffb51d8598e5a73b8"
  },
  {
    "url": "assets/js/vendors~docsearch.6fed1ae2.js",
    "revision": "2ef16c7549a2197852a96e854981a5c7"
  },
  {
    "url": "draft/quick-notes.html",
    "revision": "8a1ae89b0f4e97d61781d84fe88ed339"
  },
  {
    "url": "html/bootstrap/cards.html",
    "revision": "ad2862a5b775e2fe2a39fc7cadf5d374"
  },
  {
    "url": "html/bootstrap/forms/checks-radios.html",
    "revision": "61fb1ab2c65a8dcb605cc4c7df79d43b"
  },
  {
    "url": "html/bootstrap/forms/floating-labels.html",
    "revision": "e8b844d78c041b939e951856a40786f3"
  },
  {
    "url": "html/bootstrap/forms/form-control.html",
    "revision": "13d6dd52ad0aa026186da1a74c70c648"
  },
  {
    "url": "html/bootstrap/forms/index.html",
    "revision": "dde7770525fd30737a4112b79caabe36"
  },
  {
    "url": "html/bootstrap/forms/layout.html",
    "revision": "2355c9177d2d4c34f1fe1b598f7e42f9"
  },
  {
    "url": "html/bootstrap/forms/select.html",
    "revision": "eade2a393354285c10c99e15e02e9abb"
  },
  {
    "url": "html/bootstrap/forms/validation.html",
    "revision": "0574028c2234a1d032f627f6b350cd17"
  },
  {
    "url": "html/bootstrap/index.html",
    "revision": "e2834813de620baaf5824eb1f8d2a15b"
  },
  {
    "url": "html/bootstrap/tables.html",
    "revision": "bc90ca06a531de709404776b906b0d91"
  },
  {
    "url": "html/tailwind/customization/index.html",
    "revision": "54e1dd5484384e2ff3dc16f91cef14be"
  },
  {
    "url": "html/tailwind/customization/presets.html",
    "revision": "d56f9ce6528f4102748c7add0a625726"
  },
  {
    "url": "html/tailwind/directives.html",
    "revision": "1f48a9714f2b8f3027f5a21e144be513"
  },
  {
    "url": "html/tailwind/index.html",
    "revision": "6bbe0ce1f50c563cabc907a2ead5b03d"
  },
  {
    "url": "htmx/index.html",
    "revision": "0d0cd082c90fdb6e99816356f574da13"
  },
  {
    "url": "index.html",
    "revision": "ceccc8fe8210934b014908f20da0a908"
  },
  {
    "url": "javascript/alpinejs/index.html",
    "revision": "2c35eba134a8b35beef154ad43758494"
  },
  {
    "url": "javascript/alpinejs/textarea.html",
    "revision": "7038c1a3cc835d0628d304b03b8530df"
  },
  {
    "url": "javascript/modules.html",
    "revision": "1ba79979da89d24bc9421ce07d9522de"
  },
  {
    "url": "livewire/components/index.html",
    "revision": "20a4dfa80739d035b4eb29812d3c7d20"
  },
  {
    "url": "livewire/components/pagination.html",
    "revision": "1ea3af801b0af70403dc47b1ee69c2fb"
  },
  {
    "url": "livewire/installation.html",
    "revision": "62059df9d323c4511a10116340ebddde"
  },
  {
    "url": "other/priority-levels.html",
    "revision": "cc3153f30a13636533a5f998bc2bfc5e"
  },
  {
    "url": "other/static-site-generators.html",
    "revision": "3fd5659ddfdb5bfb58d476723e1122be"
  },
  {
    "url": "php/arrays/sorting-arrays.html",
    "revision": "fd4f178e4b053ee4fcf1cc6f4e3abf43"
  },
  {
    "url": "php/classes/pagination.html",
    "revision": "e2b5aa3d5c2bc445502a67ab8c4e9d3b"
  },
  {
    "url": "php/classes/pdo.html",
    "revision": "70bdc66b26641f91b955975b5e1cb71f"
  },
  {
    "url": "php/laravel/authorization/blade-directives/can.html",
    "revision": "42df013b8ac4030e38ad039cf362466b"
  },
  {
    "url": "php/laravel/authorization/blade-directives/canany.html",
    "revision": "0783a8381b602b7066f387163b71ca64"
  },
  {
    "url": "php/laravel/authorization/blade-directives/cannot.html",
    "revision": "6474c3d615093a86b522160d64c4e51b"
  },
  {
    "url": "php/laravel/authorization/blade-directives/index.html",
    "revision": "448887016180049cbb601328e08e95d9"
  },
  {
    "url": "php/laravel/authorization/gates.html",
    "revision": "b85726c406c1019bc0433a893f429f61"
  },
  {
    "url": "php/laravel/authorization/index.html",
    "revision": "c5abd9209e3e1057194521ac2674ec60"
  },
  {
    "url": "php/laravel/authorization/policies.html",
    "revision": "87d7872f224deea9f6d9156d6fd9223f"
  },
  {
    "url": "php/laravel/blade/components.html",
    "revision": "aed19a675079989abc5a00ca28538d48"
  },
  {
    "url": "php/laravel/blade/directives.html",
    "revision": "bbd8575bb6b5203dc29dfacb24fecff4"
  },
  {
    "url": "php/laravel/blade/index.html",
    "revision": "6b8fe3f1a6a35f7e6467f68076615d50"
  },
  {
    "url": "php/laravel/controller.html",
    "revision": "c7d57714aaba22c9a9aaaae7ab6311a5"
  },
  {
    "url": "php/laravel/database/factories.html",
    "revision": "eed733a6a2d3fdd2daff16b6fcb81af0"
  },
  {
    "url": "php/laravel/database/index.html",
    "revision": "e99149b62b11dfdf326e01ba71ad7cbb"
  },
  {
    "url": "php/laravel/database/migrations.html",
    "revision": "916d5a9016d9a1593f4748b8ba0a92af"
  },
  {
    "url": "php/laravel/database/model.html",
    "revision": "123fb91a7ee606c6a9ff0da327e0bc9c"
  },
  {
    "url": "php/laravel/database/observer.html",
    "revision": "3f42af9a5a26cf7481bd85584c62c8ba"
  },
  {
    "url": "php/laravel/database/queries.html",
    "revision": "35ecce4b96e7197bab3047061a80d79b"
  },
  {
    "url": "php/laravel/database/scopes.html",
    "revision": "485a5b068514a88a899c772de9f3bede"
  },
  {
    "url": "php/laravel/database/seeders.html",
    "revision": "7c4852d83abe7b403ad33394ef019d23"
  },
  {
    "url": "php/laravel/enums.html",
    "revision": "2b6fbb0aa492b0f63190c2bfc7a91431"
  },
  {
    "url": "php/laravel/index.html",
    "revision": "166753c75532fe13feaa273fefc08e40"
  },
  {
    "url": "php/laravel/package-development/index.html",
    "revision": "9104b45c50867d8461c2c5712c86e9d9"
  },
  {
    "url": "php/laravel/package-development/laravel-packager.html",
    "revision": "f5dee493846c5608edda6db9e4921231"
  },
  {
    "url": "php/laravel/package-development/views.html",
    "revision": "60e72dd9e26b212755218fee26e0ebf3"
  },
  {
    "url": "php/laravel/packages/guides/index.html",
    "revision": "74b51d45cbacb80ac661cc2fa2524f2a"
  },
  {
    "url": "php/laravel/packages/guides/laravel-pint.html",
    "revision": "d4b94649f37501d1dc4dde1fd9e49dc9"
  },
  {
    "url": "php/laravel/packages/guides/spatie-activity-log.html",
    "revision": "f412e9035f188506d73f96544ff2255b"
  },
  {
    "url": "php/laravel/packages/guides/spatie-comments.html",
    "revision": "a36a49a0b43479106d0f74a55680f36c"
  },
  {
    "url": "php/laravel/packages/guides/spatie-feed.html",
    "revision": "78a237c10f7e4c8805ff42f8f7aba1d8"
  },
  {
    "url": "php/laravel/packages/guides/spatie-media-library.html",
    "revision": "1c2db2ce277ef9744e0a08dbb544f09c"
  },
  {
    "url": "php/laravel/packages/guides/spatie-permissions.html",
    "revision": "85022f9e73b026d018c0d5a5e32b8d91"
  },
  {
    "url": "php/laravel/packages/guides/spatie-query-builder.html",
    "revision": "8a45c6830553d900aee64c96eb0babcb"
  },
  {
    "url": "php/laravel/packages/guides/spatie-settings.html",
    "revision": "e7905422e393733905b0bff4f7beb8bd"
  },
  {
    "url": "php/laravel/packages/index.html",
    "revision": "c769d300f9dc00b13d12364ce7d55e32"
  },
  {
    "url": "php/laravel/policies.html",
    "revision": "c7229e62c3d8de207edfaa4b98a70266"
  },
  {
    "url": "php/laravel/relationships/belongs-to-many.html",
    "revision": "97e70345c7a8b6da656fefa9aebd73cc"
  },
  {
    "url": "php/laravel/relationships/index.html",
    "revision": "9029a6a07e9b4d4a6d87a413b206a711"
  },
  {
    "url": "php/laravel/relationships/many-to-many.html",
    "revision": "35637e907e3c03dcbbdffd1ed33df6cc"
  },
  {
    "url": "php/laravel/routes.html",
    "revision": "e0093dbf2e82d67dd3bd31351e1cce44"
  },
  {
    "url": "php/laravel/task-scheduling.html",
    "revision": "0282567f0777ad4c6605d9d59b84bc59"
  },
  {
    "url": "php/laravel/testing/controller-methods.html",
    "revision": "904ef93e877a8e9b7397c4d16974885c"
  },
  {
    "url": "php/laravel/testing/index.html",
    "revision": "67f226a98652ca46834df91fced280db"
  },
  {
    "url": "php/laravel/tinker/index.html",
    "revision": "32949bfeaad2a895af94f4a4e157b3d7"
  },
  {
    "url": "php/laravel/traits/index.html",
    "revision": "5f9f041b153c9a2081df7bf06b08f3a9"
  },
  {
    "url": "php/laravel/traits/scopes.html",
    "revision": "7b1ae613a56c034922f26280fa4e7bad"
  },
  {
    "url": "php/laravel/validation/form-request.html",
    "revision": "27fad82c3f3ccd0d0d7516d4d246b79a"
  },
  {
    "url": "php/laravel/validation/index.html",
    "revision": "756edac364b45d16ccdc50f132276443"
  },
  {
    "url": "php/laravel/validation/validation-rules.html",
    "revision": "5aaa86a9986684f4a081a116f6132ca3"
  },
  {
    "url": "php/laravel/views.html",
    "revision": "6abf166fc66794100e3b8046aad0efc4"
  },
  {
    "url": "php/nova/fields.html",
    "revision": "d70929fcfa387683b7609a9eec90946f"
  },
  {
    "url": "tools/database.html",
    "revision": "8a421ccfd11e5a54992ba2c3309c59cc"
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
