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
    "revision": "aed93cc6a337bc8eea720cab8c1630e3"
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
    "url": "assets/js/100.963bb141.js",
    "revision": "21bb6dac07f852dc30a3d3f606bd6f7c"
  },
  {
    "url": "assets/js/101.155f6350.js",
    "revision": "8c933d8313e6aa4a0692a6b925a5e8d4"
  },
  {
    "url": "assets/js/102.8166354e.js",
    "revision": "d74d5949aafe7eaa9ae31aeccd7669ed"
  },
  {
    "url": "assets/js/103.d0117383.js",
    "revision": "533d7347a41a233b54bcdd721e86471d"
  },
  {
    "url": "assets/js/104.fdbf2e69.js",
    "revision": "32c084c13ec83fc7d17fad333d45e892"
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
    "url": "assets/js/25.f6a7b900.js",
    "revision": "9663dba03071f2ae7cc4e2f484287e50"
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
    "url": "assets/js/28.e6207b72.js",
    "revision": "85001ee7ce86ab933dd0f825f3384701"
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
    "url": "assets/js/30.e245b746.js",
    "revision": "9a59e67881d1c1986a1441fcfd132876"
  },
  {
    "url": "assets/js/31.dd97a41b.js",
    "revision": "65b46856846302f6fd4d6a8062d1da4a"
  },
  {
    "url": "assets/js/32.4446cc7f.js",
    "revision": "6d29c5ff9c7e43e058fa2dfc51a93b01"
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
    "url": "assets/js/35.493b5197.js",
    "revision": "b45c4f75d9a0ea2d090e6926a3ec2917"
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
    "url": "assets/js/39.6d8f3acf.js",
    "revision": "236a3328128990b41169f364a615bac5"
  },
  {
    "url": "assets/js/4.22a65ce5.js",
    "revision": "55028f36358f708e8f714389fcba8725"
  },
  {
    "url": "assets/js/40.d603c7ef.js",
    "revision": "155dfa89de86419ed9c8736955ead471"
  },
  {
    "url": "assets/js/41.991ac16a.js",
    "revision": "d0ca3bba24543b3f662560cb0fb3d6eb"
  },
  {
    "url": "assets/js/42.197079c4.js",
    "revision": "8dde170e35e77ed44e153ce2020fa15a"
  },
  {
    "url": "assets/js/43.5d272559.js",
    "revision": "a7b40f0638bb90d04ea73341cf48e296"
  },
  {
    "url": "assets/js/44.c1441a2e.js",
    "revision": "34a19cf54457319c40e7249b2b006e4a"
  },
  {
    "url": "assets/js/45.5920a09e.js",
    "revision": "7e6558c73704a6d7b3e506a7e2de23dd"
  },
  {
    "url": "assets/js/46.9ab8c27b.js",
    "revision": "fa9a4d64d596374e931cb7e727b38da4"
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
    "url": "assets/js/50.5a94a46d.js",
    "revision": "c71ec9a0df323c6bb21248a936dc1ba6"
  },
  {
    "url": "assets/js/51.3d2d7330.js",
    "revision": "a0d0be191409de587c35338dd04e7c5d"
  },
  {
    "url": "assets/js/52.db6c8e8b.js",
    "revision": "fa2a71fe12a2a16b8bc5e1027146272f"
  },
  {
    "url": "assets/js/53.9ef97be6.js",
    "revision": "8d9554182102a2ee6faa21ece66c222a"
  },
  {
    "url": "assets/js/54.13371812.js",
    "revision": "83fb7f461bd6626ee612adccbca1d107"
  },
  {
    "url": "assets/js/55.eea150d9.js",
    "revision": "63cbe6275f6cad3eca9e9f429d5c53f2"
  },
  {
    "url": "assets/js/56.b055ccd8.js",
    "revision": "8d6f8f01417aff0aaf642d9dac364bbd"
  },
  {
    "url": "assets/js/57.849169c0.js",
    "revision": "bdfc53585f546d8cd1dbb64e596100e5"
  },
  {
    "url": "assets/js/58.b9228878.js",
    "revision": "0900fbcb021b724b5ebc24485bd5ac3d"
  },
  {
    "url": "assets/js/59.d95f615f.js",
    "revision": "fc0f36be231a45e41f44d1b3730444ec"
  },
  {
    "url": "assets/js/6.d1e97dd3.js",
    "revision": "276aafaee8cddcfd9c1a37f4373cdee1"
  },
  {
    "url": "assets/js/60.64f5a163.js",
    "revision": "df1f80c2f3aada312b6e34fbba017876"
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
    "url": "assets/js/64.12fde341.js",
    "revision": "ccce67e27badca91447d42725addd5b1"
  },
  {
    "url": "assets/js/65.09fe6117.js",
    "revision": "00ea4dc3e0aa8b624534a2a39e6c1874"
  },
  {
    "url": "assets/js/66.8c4a3a8e.js",
    "revision": "f6178ba8ef89bcb5cde6c3da414a02aa"
  },
  {
    "url": "assets/js/67.6460b2ae.js",
    "revision": "50f5708adb7e6734c6b2236308c73510"
  },
  {
    "url": "assets/js/68.e4f7789e.js",
    "revision": "f10bae97852d8c751ea3c473432b1878"
  },
  {
    "url": "assets/js/69.bf04f22d.js",
    "revision": "34f880c5667f5612688578a2f771cd98"
  },
  {
    "url": "assets/js/7.b7c0f320.js",
    "revision": "9acf1f8f90fc9fdda8c7859dea8299f8"
  },
  {
    "url": "assets/js/70.1e57973d.js",
    "revision": "cc7b3e6e6e9e84f012d899ebe7462841"
  },
  {
    "url": "assets/js/71.acf8086f.js",
    "revision": "1637c8a6e77dc04a7114c7e24654a098"
  },
  {
    "url": "assets/js/72.2794dace.js",
    "revision": "2d72a799d2a9c24234d09fc312dc8c12"
  },
  {
    "url": "assets/js/73.5c69ea69.js",
    "revision": "2b2ca84e87cce66914eba4f3b24147e6"
  },
  {
    "url": "assets/js/74.2c1a21cd.js",
    "revision": "ae2a68dfe944486a5765e3cb80cf3bae"
  },
  {
    "url": "assets/js/75.481f653c.js",
    "revision": "d7c37e91fc50fd7989123c2ccdea5ce2"
  },
  {
    "url": "assets/js/76.986ab5a2.js",
    "revision": "4ef13518d14c2ec8edab40eb8b540ede"
  },
  {
    "url": "assets/js/77.b885d953.js",
    "revision": "77816d5fbde5451de9ba27ec31490b7e"
  },
  {
    "url": "assets/js/78.5a270740.js",
    "revision": "74494d0a90fdab8535ff3d1fb8062abb"
  },
  {
    "url": "assets/js/79.2758f60e.js",
    "revision": "c0ee238684d3319ab036bb7e8ca6bb5a"
  },
  {
    "url": "assets/js/80.bd3d4957.js",
    "revision": "9329acf72265ea5059209b448c54286d"
  },
  {
    "url": "assets/js/81.b45dcbec.js",
    "revision": "030c5be1a4e9eb5100f083f5b6366040"
  },
  {
    "url": "assets/js/82.1a630820.js",
    "revision": "0c9b8abde9cd1ed0c64691aa82e269c9"
  },
  {
    "url": "assets/js/83.4c38bd93.js",
    "revision": "5b31539fc44aadd94f63a70eb0c347e0"
  },
  {
    "url": "assets/js/84.f7a80f5d.js",
    "revision": "91a7d0f0dc1d48cce114b5d173af8e63"
  },
  {
    "url": "assets/js/85.a9b21612.js",
    "revision": "c868a7ae3b1124237776657a34266d86"
  },
  {
    "url": "assets/js/86.059914af.js",
    "revision": "6f03fa786023ab4d42b3e37ee184cdaa"
  },
  {
    "url": "assets/js/87.68b77d13.js",
    "revision": "c41c318ed75972e8e5fbe7cf70f85a7a"
  },
  {
    "url": "assets/js/88.05869ef4.js",
    "revision": "8f7cec4a9cc6193415468a9abeab2df9"
  },
  {
    "url": "assets/js/89.249a0c04.js",
    "revision": "56e3915d27e7da37a965939567677cd7"
  },
  {
    "url": "assets/js/90.135a0475.js",
    "revision": "ee9eb5c8afd220535a3001097bec7443"
  },
  {
    "url": "assets/js/91.7b88bed6.js",
    "revision": "ce48044c111a497221cc0dc85b276731"
  },
  {
    "url": "assets/js/92.235d3b73.js",
    "revision": "aeb12bc99fcc8954dcba47f952356bd3"
  },
  {
    "url": "assets/js/93.9d1c7332.js",
    "revision": "3864cf4e2cacdafaff86e1ac9911d7af"
  },
  {
    "url": "assets/js/94.4297e650.js",
    "revision": "12488a0f2a5e8785fd3e33a7186087ca"
  },
  {
    "url": "assets/js/95.befa3fde.js",
    "revision": "819ccb9a6fb8ba94c273ff50c14ee880"
  },
  {
    "url": "assets/js/96.d8fb7a0e.js",
    "revision": "849a4ea21171e3a0ae7b580cbe9e3fa5"
  },
  {
    "url": "assets/js/97.b2d37f9d.js",
    "revision": "b405c67a525987e7a53a2e14b423a0ab"
  },
  {
    "url": "assets/js/98.659ca7f2.js",
    "revision": "f89fb4ab8a0f92e016542b8e0ac32f8c"
  },
  {
    "url": "assets/js/99.5601df1b.js",
    "revision": "a5c98e83c65c7df261d3d9610d2d1bef"
  },
  {
    "url": "assets/js/app.411ce213.js",
    "revision": "ed674d3c413d29ac8a29e15f597c8d7b"
  },
  {
    "url": "assets/js/vendors~docsearch.6fed1ae2.js",
    "revision": "2ef16c7549a2197852a96e854981a5c7"
  },
  {
    "url": "draft/quick-notes.html",
    "revision": "dd8754cf780771e753b19266f3f82ed8"
  },
  {
    "url": "html/bootstrap/cards.html",
    "revision": "7a19c697cecdc9e1ecb7dd03c2a2c68f"
  },
  {
    "url": "html/bootstrap/forms/checks-radios.html",
    "revision": "32cc8181f98bd4f09bb472fd4e61338b"
  },
  {
    "url": "html/bootstrap/forms/floating-labels.html",
    "revision": "580eebab54ff352afe19e2f0799df68d"
  },
  {
    "url": "html/bootstrap/forms/form-control.html",
    "revision": "6ecc824cec42e8a6b6ec408e364c80c1"
  },
  {
    "url": "html/bootstrap/forms/index.html",
    "revision": "38a6425e8df82723a80488f802b8788f"
  },
  {
    "url": "html/bootstrap/forms/layout.html",
    "revision": "87063b2f521bbb953b6f9c1735600a7d"
  },
  {
    "url": "html/bootstrap/forms/select.html",
    "revision": "46093568924d73faf81d14fc6d3d8123"
  },
  {
    "url": "html/bootstrap/forms/validation.html",
    "revision": "475ed5a5ef201d2717f7c223726d5432"
  },
  {
    "url": "html/bootstrap/index.html",
    "revision": "4d4df6530e170247c3c88ede9a65980e"
  },
  {
    "url": "html/bootstrap/tables.html",
    "revision": "4d236f593e8ef6e2a38a9ac5b7139a2c"
  },
  {
    "url": "html/tailwind/customization/index.html",
    "revision": "69cb478815194deefd7bcf581f170e23"
  },
  {
    "url": "html/tailwind/customization/presets.html",
    "revision": "cf0ed914efb4d79792af6a81d4d74598"
  },
  {
    "url": "html/tailwind/directives.html",
    "revision": "7ae324bc0b55efcbb13ca95264906136"
  },
  {
    "url": "html/tailwind/index.html",
    "revision": "2857dd9a98cbc7c7c0e23a14729606dc"
  },
  {
    "url": "htmx/index.html",
    "revision": "b598a53537fe9dcae4b2f870925561c2"
  },
  {
    "url": "index.html",
    "revision": "a6758f47ce4cce2acd767b8ff135a5c1"
  },
  {
    "url": "javascript/alpinejs/index.html",
    "revision": "f82f7d01f681fca607ba9e2dd8e9324d"
  },
  {
    "url": "javascript/alpinejs/textarea.html",
    "revision": "e56e3e72a5748adbb5d0ea3a8b728432"
  },
  {
    "url": "javascript/modules.html",
    "revision": "7aa24f60a9065c06deefaa28831c3732"
  },
  {
    "url": "livewire/components/index.html",
    "revision": "0d641f2924c53156c0e216c04985644f"
  },
  {
    "url": "livewire/components/pagination.html",
    "revision": "e3d49925ae3ed13b20326402aebe5386"
  },
  {
    "url": "livewire/installation.html",
    "revision": "c4ee136486c39248dc9f19df68976d90"
  },
  {
    "url": "nextjs/index.html",
    "revision": "12af8c0dba6505768c6852deefdc505b"
  },
  {
    "url": "nextjs/laravel-sanctum-auth.html",
    "revision": "b31e8512e2f964370901c35e5e630aa1"
  },
  {
    "url": "other/priority-levels.html",
    "revision": "03a0e4c1d0671f50f961991b49fadeea"
  },
  {
    "url": "other/static-site-generators.html",
    "revision": "23b463e05d6f402c2ff4483bf0436264"
  },
  {
    "url": "php/arrays/sorting-arrays.html",
    "revision": "0e00267bce41ca1c16eba49f3eb9a08a"
  },
  {
    "url": "php/classes/pagination.html",
    "revision": "96ddded4504efeeda238c66c967563ee"
  },
  {
    "url": "php/classes/pdo.html",
    "revision": "5955c203ab841950f8de86d548552044"
  },
  {
    "url": "php/laravel/authorization/blade-directives/can.html",
    "revision": "14bd8fcddd09d073c911d11f78381a29"
  },
  {
    "url": "php/laravel/authorization/blade-directives/canany.html",
    "revision": "217ab745163bdcffd214b0049d9689f4"
  },
  {
    "url": "php/laravel/authorization/blade-directives/cannot.html",
    "revision": "3e4b30face8121dfb4f3431c2359e091"
  },
  {
    "url": "php/laravel/authorization/blade-directives/index.html",
    "revision": "bda730fd1ccaf0ede016ef990f6d9945"
  },
  {
    "url": "php/laravel/authorization/gates.html",
    "revision": "70f8da448fcea5a155ef13e7228cc15a"
  },
  {
    "url": "php/laravel/authorization/index.html",
    "revision": "cc3ea01273dcb5cb415eed049e7ffca0"
  },
  {
    "url": "php/laravel/authorization/policies.html",
    "revision": "491ba4d96f8f5313789ce4540bf418ec"
  },
  {
    "url": "php/laravel/blade/components.html",
    "revision": "9c277100563abd604e5a8d14fea51e65"
  },
  {
    "url": "php/laravel/blade/directives.html",
    "revision": "f9ec26de9106bbf7ca99f35f6d9eb773"
  },
  {
    "url": "php/laravel/blade/index.html",
    "revision": "35a583fe68bcdd56d92e8e256840654f"
  },
  {
    "url": "php/laravel/controller.html",
    "revision": "b6ce22ca1062e6abb39899b50a26a6ea"
  },
  {
    "url": "php/laravel/database/factories.html",
    "revision": "9facd59a2b0f24e148bbfc4c82b24c7d"
  },
  {
    "url": "php/laravel/database/index.html",
    "revision": "0846b6bc3702ad8d70bfd3ffe2b6de66"
  },
  {
    "url": "php/laravel/database/migrations.html",
    "revision": "6066d517f24e0aef878246f259f2c5e3"
  },
  {
    "url": "php/laravel/database/model.html",
    "revision": "50fd3f11a1e055a52baa2db95d5e25a9"
  },
  {
    "url": "php/laravel/database/observer.html",
    "revision": "d3676fd0a5f56940659a1b0ba1933125"
  },
  {
    "url": "php/laravel/database/queries.html",
    "revision": "904c05802b64355f20281d44e84a1a62"
  },
  {
    "url": "php/laravel/database/scopes.html",
    "revision": "9bcd5ae2f3857d2fc079994ad7d93f16"
  },
  {
    "url": "php/laravel/database/seeders.html",
    "revision": "f19cb2c67b04c5599312d5af984fa50b"
  },
  {
    "url": "php/laravel/enums.html",
    "revision": "85e9717bb0db3dff23d8c85710a7f9a3"
  },
  {
    "url": "php/laravel/index.html",
    "revision": "8d3438d039c16643de1ffcdd7356faf6"
  },
  {
    "url": "php/laravel/package-development/index.html",
    "revision": "660e6b1c796c187eeb0911b4c6998aed"
  },
  {
    "url": "php/laravel/package-development/laravel-packager.html",
    "revision": "a65365a5d132ef61b186252d0ba415cd"
  },
  {
    "url": "php/laravel/package-development/views.html",
    "revision": "70ff8abe1a2356190cdc3c3d6c764820"
  },
  {
    "url": "php/laravel/packages/guides/index.html",
    "revision": "ed42e1801be1d3ae468b2fccdc59ef38"
  },
  {
    "url": "php/laravel/packages/guides/laravel-pint.html",
    "revision": "282606b155cc960e96e4a7f1f7727dd3"
  },
  {
    "url": "php/laravel/packages/guides/spatie-activity-log.html",
    "revision": "b6f7bb9e377a42832b029dfe40b516a7"
  },
  {
    "url": "php/laravel/packages/guides/spatie-comments.html",
    "revision": "df8edac00d84dacb04b5634bb385c91e"
  },
  {
    "url": "php/laravel/packages/guides/spatie-feed.html",
    "revision": "846ccb22941163cc600b6b75d766ad5c"
  },
  {
    "url": "php/laravel/packages/guides/spatie-media-library.html",
    "revision": "6e95c2d239d1d98cae0fdd97a2c43246"
  },
  {
    "url": "php/laravel/packages/guides/spatie-permissions.html",
    "revision": "5eaadd012249d8abbf71326f3d707464"
  },
  {
    "url": "php/laravel/packages/guides/spatie-query-builder.html",
    "revision": "4edfe3858bb67574680bb92699e229a1"
  },
  {
    "url": "php/laravel/packages/guides/spatie-settings.html",
    "revision": "e78bbee154ea22c5e367697f4b8f26ce"
  },
  {
    "url": "php/laravel/packages/index.html",
    "revision": "1487a35b822fed4f96acdbc342c72968"
  },
  {
    "url": "php/laravel/policies.html",
    "revision": "7f508863ea57462dbe2ff4b03abd17a9"
  },
  {
    "url": "php/laravel/relationships/belongs-to-many.html",
    "revision": "84317735ae5fc2df49b1f0f87e89cc0a"
  },
  {
    "url": "php/laravel/relationships/index.html",
    "revision": "778257ccb596fc13b204984988af2a9f"
  },
  {
    "url": "php/laravel/relationships/many-to-many.html",
    "revision": "401a0dbc6ae58c4d909f92c478453719"
  },
  {
    "url": "php/laravel/routes.html",
    "revision": "43172669c5a4100114a71abb6a9a114f"
  },
  {
    "url": "php/laravel/task-scheduling.html",
    "revision": "6009cd1142ed9720997c2818c09e63f8"
  },
  {
    "url": "php/laravel/testing/controller-methods.html",
    "revision": "80c69d2e52c0b589d0fce5ed9d651e6d"
  },
  {
    "url": "php/laravel/testing/index.html",
    "revision": "7691cdd16822e2d15ede29e19ecf66db"
  },
  {
    "url": "php/laravel/tinker/index.html",
    "revision": "62d122758f28426f72b11cba6e4539cd"
  },
  {
    "url": "php/laravel/traits/index.html",
    "revision": "f64d5b5bdd25cb17d5f379f11fbccf4e"
  },
  {
    "url": "php/laravel/traits/scopes.html",
    "revision": "1e47300450fbe04f6f5ef4a742eaba76"
  },
  {
    "url": "php/laravel/validation/form-request.html",
    "revision": "926ded5426b6b2012efd79e7362985f5"
  },
  {
    "url": "php/laravel/validation/index.html",
    "revision": "421398cc989606e1b5a2fc24afae0994"
  },
  {
    "url": "php/laravel/validation/validation-rules.html",
    "revision": "1608744d90cb422472c9960219755be8"
  },
  {
    "url": "php/laravel/views.html",
    "revision": "0027d43d425e5ce967c7f80d8cf5abb3"
  },
  {
    "url": "php/nova/fields.html",
    "revision": "7d6d95fb4a4815ee35826a6da16b8657"
  },
  {
    "url": "tools/database.html",
    "revision": "5592ae0a966ebcb0d42fde2f1aed0463"
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
