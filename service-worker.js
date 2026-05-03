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
    "revision": "40edb6aaaf651b6798d74e97ee902d61"
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
    "url": "assets/js/24.6729704d.js",
    "revision": "edd694a60f08e7940386d67f9e1cd68c"
  },
  {
    "url": "assets/js/25.7ec0cd5d.js",
    "revision": "d6bdfb264d49d29fdf0b4e2e0baac30c"
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
    "url": "assets/js/29.0f4e7d26.js",
    "revision": "e9341b84ae3a352109d50048f78513c1"
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
    "url": "assets/js/32.7725fd4c.js",
    "revision": "f1aedb31a123ab805ba06e40b04b5340"
  },
  {
    "url": "assets/js/33.78f29df7.js",
    "revision": "6c845e3b3cdb40bd2a7c2f2f93554c54"
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
    "url": "assets/js/36.f95725e3.js",
    "revision": "da7c3741d2ab791ed49365cd4ee39760"
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
    "url": "assets/js/40.11511c33.js",
    "revision": "6895a13fa5a6450e107c103a1758954f"
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
    "url": "assets/js/44.dfbd4de2.js",
    "revision": "bc0607a6b3c8c9c2a2b6e589f0195f21"
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
    "url": "assets/js/51.f99e0239.js",
    "revision": "8b67821ba6f8f89f28bd54e1b7af08df"
  },
  {
    "url": "assets/js/52.65a687ff.js",
    "revision": "68fd418c8de85cf7634e731fc43a5fb8"
  },
  {
    "url": "assets/js/53.0208396d.js",
    "revision": "a987ef2c82049af095717095260c1f8d"
  },
  {
    "url": "assets/js/54.93640610.js",
    "revision": "5aaeb1b9f4dde4d6ef56bccca8dcffa5"
  },
  {
    "url": "assets/js/55.d06c2fa6.js",
    "revision": "6b04c4852452e9b85641bfe40b9fff62"
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
    "url": "assets/js/58.bc1021b7.js",
    "revision": "f86719f3476e3ca781e4316704ba675f"
  },
  {
    "url": "assets/js/59.bf863dbc.js",
    "revision": "2189e99b2c4fdad7e9bd79ddf1f27d9f"
  },
  {
    "url": "assets/js/6.d1e97dd3.js",
    "revision": "276aafaee8cddcfd9c1a37f4373cdee1"
  },
  {
    "url": "assets/js/60.51b826f0.js",
    "revision": "a4c0aadb0870990156d862b60150b35e"
  },
  {
    "url": "assets/js/61.52215065.js",
    "revision": "376f51e6f247260474baed0b555abdd1"
  },
  {
    "url": "assets/js/62.cff028ec.js",
    "revision": "b1cb943f5d1a297e7a3b6da0adc4d893"
  },
  {
    "url": "assets/js/63.82b590c8.js",
    "revision": "5cb4b344f264bdbdb70edfd6efebad0e"
  },
  {
    "url": "assets/js/64.da474ea8.js",
    "revision": "4e69655df98d4e74ee264eac82a73eca"
  },
  {
    "url": "assets/js/65.0c38598c.js",
    "revision": "ccc754e8d016dd017745cd26944b28f0"
  },
  {
    "url": "assets/js/66.12a18594.js",
    "revision": "df1a8b421545e1aee47bda3719afb313"
  },
  {
    "url": "assets/js/67.81750733.js",
    "revision": "6b1432338b7cbfa2cb29a1fdedf0985b"
  },
  {
    "url": "assets/js/68.3ed94a4c.js",
    "revision": "13135fb13a9c5e4dc3bd8108744f3018"
  },
  {
    "url": "assets/js/69.afa2ce0a.js",
    "revision": "fbdafea47032b6096226268d37b4b8c8"
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
    "url": "assets/js/72.d65f80d7.js",
    "revision": "71cb9001cd8917f92008ac9873e4d1e7"
  },
  {
    "url": "assets/js/73.8e3b5aa8.js",
    "revision": "d344c9257669da733423cfc9f375bfe6"
  },
  {
    "url": "assets/js/74.bd9dbe73.js",
    "revision": "393e93e0f415a6158d305855174583f5"
  },
  {
    "url": "assets/js/75.933ed129.js",
    "revision": "4d3a0b855cea2670af534af2aba56e1c"
  },
  {
    "url": "assets/js/76.e4d3a02d.js",
    "revision": "5aca13c373ba54220867dfe52e4aa736"
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
    "url": "assets/js/79.a312bff0.js",
    "revision": "a9dceb7bf5f9cbefdd21cdea09d6baef"
  },
  {
    "url": "assets/js/80.c509feed.js",
    "revision": "5cd692530a81cbf610c7899339ab0f84"
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
    "url": "assets/js/83.cfd76a97.js",
    "revision": "af62802b903da39f262318ac43b4279f"
  },
  {
    "url": "assets/js/84.61a0198b.js",
    "revision": "21213ff18891550d8ec795faa5349501"
  },
  {
    "url": "assets/js/85.88547a72.js",
    "revision": "47eefef47743ee2a0bb90c9446fb83d6"
  },
  {
    "url": "assets/js/86.6ba36840.js",
    "revision": "4cb3e85e52957f00db672d7e633c3a57"
  },
  {
    "url": "assets/js/87.a28f808f.js",
    "revision": "8e5392f211f146c6cb8f2e23e581ff9b"
  },
  {
    "url": "assets/js/88.3dec0870.js",
    "revision": "796cf34a3c3e874d8765a8343f095d10"
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
    "url": "assets/js/92.229a0acf.js",
    "revision": "3d57c33517a944a9e2bae6281ea23c42"
  },
  {
    "url": "assets/js/93.3dbf7184.js",
    "revision": "242381167536e7fe1dee1a2b93b33ad1"
  },
  {
    "url": "assets/js/94.b7219e36.js",
    "revision": "25f2fb85c14fe8b8e417b3f28ef02c2c"
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
    "url": "assets/js/97.b542c46a.js",
    "revision": "0590778cf4e68b3cf81d63145d8f10ef"
  },
  {
    "url": "assets/js/98.1e26b544.js",
    "revision": "e86bdb8e72095ad7515eb15e81372381"
  },
  {
    "url": "assets/js/99.fdba6c39.js",
    "revision": "3b9ad2fa80452ee031a0b3e18469a3ab"
  },
  {
    "url": "assets/js/app.fa0198b6.js",
    "revision": "ac230a263142429617df8f41f28ed271"
  },
  {
    "url": "assets/js/vendors~docsearch.6fed1ae2.js",
    "revision": "2ef16c7549a2197852a96e854981a5c7"
  },
  {
    "url": "draft/quick-notes.html",
    "revision": "e9b0d9060cc736be957c8eb9dd744d51"
  },
  {
    "url": "html/bootstrap/cards.html",
    "revision": "b72237ec655dc0ab5e567b477fc065b5"
  },
  {
    "url": "html/bootstrap/forms/checks-radios.html",
    "revision": "08ae7cfd324dd4bb70f39561be582838"
  },
  {
    "url": "html/bootstrap/forms/floating-labels.html",
    "revision": "aba85d41d3dc6c72158179e0a9b75d31"
  },
  {
    "url": "html/bootstrap/forms/form-control.html",
    "revision": "0f8cb248073974d197c69499dca3c3fa"
  },
  {
    "url": "html/bootstrap/forms/index.html",
    "revision": "380c90ac30c235e3c24a2e50bd119055"
  },
  {
    "url": "html/bootstrap/forms/layout.html",
    "revision": "b34df65a3db8432d560b48a066e3a86a"
  },
  {
    "url": "html/bootstrap/forms/select.html",
    "revision": "7a11510d5604653e92aecf4e50dccd43"
  },
  {
    "url": "html/bootstrap/forms/validation.html",
    "revision": "f627c31f3eb701cc65ee9f26f2c7050a"
  },
  {
    "url": "html/bootstrap/index.html",
    "revision": "829f2ad63369fb4b14bc3fe57fb2ad72"
  },
  {
    "url": "html/bootstrap/tables.html",
    "revision": "92cd55279e9864cacd7c4f1a004360fb"
  },
  {
    "url": "html/tailwind/customization/index.html",
    "revision": "12e3d8a0fb104b3a6aa1debf06baf1d0"
  },
  {
    "url": "html/tailwind/customization/presets.html",
    "revision": "44aafc8bb6287f50477d08690b957b07"
  },
  {
    "url": "html/tailwind/directives.html",
    "revision": "fcb810f019eabf3363895111287a62ad"
  },
  {
    "url": "html/tailwind/index.html",
    "revision": "cdf46107fa0177ea18529ef8589e1733"
  },
  {
    "url": "htmx/index.html",
    "revision": "668228f603ecb573649989d63ea56eec"
  },
  {
    "url": "index.html",
    "revision": "2d461e3410d74a05b6e6db7d00572cda"
  },
  {
    "url": "javascript/alpinejs/index.html",
    "revision": "3616c9beda669f4707cb845ca27a98de"
  },
  {
    "url": "javascript/alpinejs/textarea.html",
    "revision": "80a2bd923e86fac7018352c646318650"
  },
  {
    "url": "javascript/modules.html",
    "revision": "4636a6496f9a016e939a22f80e873911"
  },
  {
    "url": "livewire/components/index.html",
    "revision": "c5662fab702812475e909435d8d6061c"
  },
  {
    "url": "livewire/components/pagination.html",
    "revision": "83dee5e8640f5f84a97dbfc05b789cfd"
  },
  {
    "url": "livewire/installation.html",
    "revision": "2f06ca66443589b42b74fcd35074d171"
  },
  {
    "url": "other/priority-levels.html",
    "revision": "8b6545ddddd992b33dcc6c0f167e9489"
  },
  {
    "url": "other/static-site-generators.html",
    "revision": "34b9bd3d295e6246328873daadb66313"
  },
  {
    "url": "php/arrays/sorting-arrays.html",
    "revision": "e1ac71f20c281a4d9f9229a75d177b3c"
  },
  {
    "url": "php/classes/pagination.html",
    "revision": "9a13505d78f16ad4f15edc53aeaa77b1"
  },
  {
    "url": "php/classes/pdo.html",
    "revision": "8845448785670de4df518d0bfe635497"
  },
  {
    "url": "php/laravel/authorization/blade-directives/can.html",
    "revision": "f681b70073c066b8edca9a0b0e631c24"
  },
  {
    "url": "php/laravel/authorization/blade-directives/canany.html",
    "revision": "2f2430ab4ba453f0334e8ed924c19ba8"
  },
  {
    "url": "php/laravel/authorization/blade-directives/cannot.html",
    "revision": "502df40f5988cdccc06cef19993961bb"
  },
  {
    "url": "php/laravel/authorization/blade-directives/index.html",
    "revision": "decf8b094d08ea6cfd69d5c0cd1cc661"
  },
  {
    "url": "php/laravel/authorization/gates.html",
    "revision": "d7e1ba4058092bf818afd08d20dae07d"
  },
  {
    "url": "php/laravel/authorization/index.html",
    "revision": "cebc23c5b861c9a126d8da5c92d449e8"
  },
  {
    "url": "php/laravel/authorization/policies.html",
    "revision": "bbfb734a56314b228ccd3c3339c4aae5"
  },
  {
    "url": "php/laravel/blade/components.html",
    "revision": "c3304a2eeacc5e9497ea377cb8334bf1"
  },
  {
    "url": "php/laravel/blade/directives.html",
    "revision": "f06b6222e36fb5153390c31be869ffa4"
  },
  {
    "url": "php/laravel/blade/index.html",
    "revision": "2a561bc86f48aede12abe6c8568484a9"
  },
  {
    "url": "php/laravel/controller.html",
    "revision": "e55486b4d52ac27682c8fe4f39a9f921"
  },
  {
    "url": "php/laravel/database/factories.html",
    "revision": "8c297a43fc70606b51656947aabe95e9"
  },
  {
    "url": "php/laravel/database/index.html",
    "revision": "cedf09f0b46715050527545836047ee8"
  },
  {
    "url": "php/laravel/database/migrations.html",
    "revision": "baa370da783fbda472bcb5e91450f358"
  },
  {
    "url": "php/laravel/database/model.html",
    "revision": "3bcb0c7057e3295da3d715c5e3904707"
  },
  {
    "url": "php/laravel/database/observer.html",
    "revision": "fccdcaddf021538db4f0472583ce49f9"
  },
  {
    "url": "php/laravel/database/queries.html",
    "revision": "13c483aca0cea84c0b33aa15a96faa89"
  },
  {
    "url": "php/laravel/database/scopes.html",
    "revision": "511a84c9a3020459a8a9a30ba1f0699c"
  },
  {
    "url": "php/laravel/database/seeders.html",
    "revision": "a25f8c4851a6012396d73bcb9a7d9bb0"
  },
  {
    "url": "php/laravel/enums.html",
    "revision": "ba8a70e9cdfffdfa53b8d2180ce103b3"
  },
  {
    "url": "php/laravel/index.html",
    "revision": "0d766977b48b0609b367a1a27886abd0"
  },
  {
    "url": "php/laravel/package-development/index.html",
    "revision": "4d1f96c204866927e2699334f21fe8a9"
  },
  {
    "url": "php/laravel/package-development/laravel-packager.html",
    "revision": "0e27f26a9ae5f7eac026bcb653b90c17"
  },
  {
    "url": "php/laravel/package-development/views.html",
    "revision": "ee82e83428657df193c9ab722f29f447"
  },
  {
    "url": "php/laravel/packages/guides/index.html",
    "revision": "9f850a4354d2aa91a7a522a3dba27990"
  },
  {
    "url": "php/laravel/packages/guides/laravel-pint.html",
    "revision": "c1edb21eb61e0960e4afa9f29d391470"
  },
  {
    "url": "php/laravel/packages/guides/spatie-activity-log.html",
    "revision": "1a45fe5d049181163a017e3f18e24aea"
  },
  {
    "url": "php/laravel/packages/guides/spatie-comments.html",
    "revision": "1959750d2dd4c8aa3dd7bd2cddfeaead"
  },
  {
    "url": "php/laravel/packages/guides/spatie-feed.html",
    "revision": "624360428d3136ec7d2617a3e48ac0b4"
  },
  {
    "url": "php/laravel/packages/guides/spatie-media-library.html",
    "revision": "80c33a50965945eecc461f73a1116bae"
  },
  {
    "url": "php/laravel/packages/guides/spatie-permissions.html",
    "revision": "0b2a27f3e1d15388f0f3c91bd6fc14ca"
  },
  {
    "url": "php/laravel/packages/guides/spatie-query-builder.html",
    "revision": "b3b4fb7dafb53899daf71d7736d1513d"
  },
  {
    "url": "php/laravel/packages/guides/spatie-settings.html",
    "revision": "c8e6cb026305f2dcb586cdc91c513f1c"
  },
  {
    "url": "php/laravel/packages/index.html",
    "revision": "5dff2f03315b608be4899da894f5a655"
  },
  {
    "url": "php/laravel/policies.html",
    "revision": "89f6823b6bfe1ef1d246a0663598237c"
  },
  {
    "url": "php/laravel/relationships/belongs-to-many.html",
    "revision": "487dacd68d3c978b1a270e3d6196819f"
  },
  {
    "url": "php/laravel/relationships/index.html",
    "revision": "eb1e04e9ee400a3d7678dbc98cea08a2"
  },
  {
    "url": "php/laravel/relationships/many-to-many.html",
    "revision": "aebb7cbca88015b0480f633843574f30"
  },
  {
    "url": "php/laravel/routes.html",
    "revision": "f0d8348f52ca30b3b54f4f67590014de"
  },
  {
    "url": "php/laravel/task-scheduling.html",
    "revision": "31957ec44fb7e90131149e71b612143e"
  },
  {
    "url": "php/laravel/testing/controller-methods.html",
    "revision": "c47b5b0d2fbefb57adf92919c53596cf"
  },
  {
    "url": "php/laravel/testing/index.html",
    "revision": "4816f69920edf2bb03c01e78ba5769c3"
  },
  {
    "url": "php/laravel/tinker/index.html",
    "revision": "468c3c09013db8a5c2870d56fa7c2551"
  },
  {
    "url": "php/laravel/traits/index.html",
    "revision": "1a35d91595a43295686d799c8a37823e"
  },
  {
    "url": "php/laravel/traits/scopes.html",
    "revision": "45b5a7cca004819016829ecbc2e3daae"
  },
  {
    "url": "php/laravel/validation/form-request.html",
    "revision": "d90c48b3ddc4c5a094d09953c5bbd822"
  },
  {
    "url": "php/laravel/validation/index.html",
    "revision": "4c0e0388c7ca8a335729efc9bc8de7ff"
  },
  {
    "url": "php/laravel/validation/validation-rules.html",
    "revision": "e59947e0275d2b82657aec901357365c"
  },
  {
    "url": "php/laravel/views.html",
    "revision": "5f9b4f9c9270492ed79a6c1970253075"
  },
  {
    "url": "php/nova/fields.html",
    "revision": "56d51ebf315adee04371b58cff95b43f"
  },
  {
    "url": "tools/database.html",
    "revision": "97426cb9907755c97d78f3e06c45bae8"
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
