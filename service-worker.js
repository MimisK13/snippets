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
    "revision": "a81324e642e7dd80eb329d7987b6aae2"
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
    "url": "assets/js/30.96ba7d88.js",
    "revision": "68ff6ec646402a85f652d1cfc351646e"
  },
  {
    "url": "assets/js/31.c46a2fc8.js",
    "revision": "14339fb7229afdcdba99f7359b3f2929"
  },
  {
    "url": "assets/js/32.7725fd4c.js",
    "revision": "f1aedb31a123ab805ba06e40b04b5340"
  },
  {
    "url": "assets/js/33.4046b72e.js",
    "revision": "85320b88ed63d4172448a7a8f2b4c998"
  },
  {
    "url": "assets/js/34.8bf92ba1.js",
    "revision": "cbfc7d2d99162aff105191cb5aacd005"
  },
  {
    "url": "assets/js/35.c9ce00c8.js",
    "revision": "eced51661de3d42460b618e41d943450"
  },
  {
    "url": "assets/js/36.96cc433d.js",
    "revision": "9651a247ed5c5b40033d01ed2cc3fcea"
  },
  {
    "url": "assets/js/37.8feef2fa.js",
    "revision": "ab202c96fa85948698f9fabc1822eea1"
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
    "url": "assets/js/40.34d21a8f.js",
    "revision": "0a8b7bcbbf50652daebb8e999cdc446d"
  },
  {
    "url": "assets/js/41.616bde69.js",
    "revision": "e3b29517852cccd6698dcd60b18a14a6"
  },
  {
    "url": "assets/js/42.de311429.js",
    "revision": "5d7ce88c7f90fd4c7cd8e0f8b4979861"
  },
  {
    "url": "assets/js/43.63cdf4e8.js",
    "revision": "8761af7b8ed5094c7d75c4f344d177f0"
  },
  {
    "url": "assets/js/44.a856e04c.js",
    "revision": "4703fd8e933a009dd2a9b30ac52f6767"
  },
  {
    "url": "assets/js/45.5920a09e.js",
    "revision": "7e6558c73704a6d7b3e506a7e2de23dd"
  },
  {
    "url": "assets/js/46.1db3e803.js",
    "revision": "12dbe50406666e4f42a8c14f63a26316"
  },
  {
    "url": "assets/js/47.54be100f.js",
    "revision": "6d045c2e5628629d6704114c2100c904"
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
    "url": "assets/js/50.e03c7419.js",
    "revision": "4f14c93395a1edc309ac0472240feb74"
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
    "url": "assets/js/58.c4bed0eb.js",
    "revision": "d4036f865b7d26fa1c168cf27c4c0f84"
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
    "url": "assets/js/62.5b818d23.js",
    "revision": "dfe4f6c65d47f81c1d4f52e73cb58dae"
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
    "url": "assets/js/65.dddee2cf.js",
    "revision": "d581f5790ca8e7f4968b5c0256a56eef"
  },
  {
    "url": "assets/js/66.12a18594.js",
    "revision": "df1a8b421545e1aee47bda3719afb313"
  },
  {
    "url": "assets/js/67.5e5d6ea2.js",
    "revision": "b6d0abe7da0bf9227f29eb458174d121"
  },
  {
    "url": "assets/js/68.cc64132b.js",
    "revision": "3f45ef0367c8555e61f2401d031f63b3"
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
    "url": "assets/js/74.07d499f3.js",
    "revision": "a89c96fd319a5eb5a33e22b3b936e99f"
  },
  {
    "url": "assets/js/75.933ed129.js",
    "revision": "4d3a0b855cea2670af534af2aba56e1c"
  },
  {
    "url": "assets/js/76.8213f833.js",
    "revision": "28b0eb927c85f4f9d86a55149bb421cc"
  },
  {
    "url": "assets/js/77.c30cd58b.js",
    "revision": "430939a59f4de6994e1614bfbcd56a08"
  },
  {
    "url": "assets/js/78.3ddf57b6.js",
    "revision": "ce83aedb0b2935373ec45f40cd42bffe"
  },
  {
    "url": "assets/js/79.f89b0ace.js",
    "revision": "323a399be91898ea3a70127590b1d80a"
  },
  {
    "url": "assets/js/80.1588cef0.js",
    "revision": "800b63f44fada025aa300dcd318838fc"
  },
  {
    "url": "assets/js/81.e4b4fb17.js",
    "revision": "81b3e29e6075b440e3ed58849fd1a9ed"
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
    "url": "assets/js/86.28c4fa32.js",
    "revision": "5c00ad123ba5f1da2da0479f62eefef9"
  },
  {
    "url": "assets/js/87.7b0239e8.js",
    "revision": "11484c1304177acb82fbfad808c2e4d6"
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
    "url": "assets/js/90.d759fb2f.js",
    "revision": "4a9360e65e6ccad2d2fdf6ef517683e5"
  },
  {
    "url": "assets/js/91.82e915c8.js",
    "revision": "d6c7f7c4cdf5cd7ebdaa5b86ea90f859"
  },
  {
    "url": "assets/js/92.96723d67.js",
    "revision": "2359b1ba512cf1f2e7ecfb14dd4f4624"
  },
  {
    "url": "assets/js/93.0df3f2e3.js",
    "revision": "fee6cb5c16267dee1448935f7c54d8a0"
  },
  {
    "url": "assets/js/94.b5df1023.js",
    "revision": "19c20af8021b1910f54d6e8c24861748"
  },
  {
    "url": "assets/js/95.15e3b43c.js",
    "revision": "3d5175a49500e4b78995549211879ea4"
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
    "url": "assets/js/app.76d8da51.js",
    "revision": "b05b49c88bd8f210a5acba539612bddb"
  },
  {
    "url": "assets/js/vendors~docsearch.6fed1ae2.js",
    "revision": "2ef16c7549a2197852a96e854981a5c7"
  },
  {
    "url": "draft/quick-notes.html",
    "revision": "86209c6ea09955f5ba16e8a9f029793b"
  },
  {
    "url": "html/bootstrap/cards.html",
    "revision": "215c092033f36ed3ef9ad36fd675e9b1"
  },
  {
    "url": "html/bootstrap/forms/checks-radios.html",
    "revision": "1b969367c7544dc7653353f411e6fa6d"
  },
  {
    "url": "html/bootstrap/forms/floating-labels.html",
    "revision": "5fd7a8f43e772d7c2a2724c897f61f28"
  },
  {
    "url": "html/bootstrap/forms/form-control.html",
    "revision": "3b5acee0de53b093456cb46daeeb6ff2"
  },
  {
    "url": "html/bootstrap/forms/index.html",
    "revision": "540cd2792918319903c623f29fb832bd"
  },
  {
    "url": "html/bootstrap/forms/layout.html",
    "revision": "de1738ab818daa8bb21845858e90d04e"
  },
  {
    "url": "html/bootstrap/forms/select.html",
    "revision": "a53d488881844900842bc9d92a9a5bd5"
  },
  {
    "url": "html/bootstrap/forms/validation.html",
    "revision": "557d439b48c7287a2529ae9083baec08"
  },
  {
    "url": "html/bootstrap/index.html",
    "revision": "b9d4f975f8378b7a53af0330522dea88"
  },
  {
    "url": "html/bootstrap/tables.html",
    "revision": "120a7b6a8bf5715668a2d5b3c431f0c9"
  },
  {
    "url": "html/tailwind/customization/index.html",
    "revision": "8108ce0a93401a173aa8e5f04083ec5e"
  },
  {
    "url": "html/tailwind/customization/presets.html",
    "revision": "b9dd568f778874c2e0d9b5e7d69fafaf"
  },
  {
    "url": "html/tailwind/directives.html",
    "revision": "cd5dfb08a55c9eb290baa3eff60fb824"
  },
  {
    "url": "html/tailwind/index.html",
    "revision": "08d86fed85ee3c03523e533ba10866c8"
  },
  {
    "url": "htmx/index.html",
    "revision": "fafd2e9dd1929af4a7738d856789aa08"
  },
  {
    "url": "index.html",
    "revision": "20806e68dbd3974b249266142dbf4b66"
  },
  {
    "url": "javascript/alpinejs/index.html",
    "revision": "fa18d8d28e14748c51b7ddf0adab1754"
  },
  {
    "url": "javascript/alpinejs/textarea.html",
    "revision": "dac6bbc953ac0339a75ff9d28015321f"
  },
  {
    "url": "javascript/modules.html",
    "revision": "55bc79ee84ea06164e211e1fc70e41fc"
  },
  {
    "url": "livewire/components/index.html",
    "revision": "39b6b509635818e759f9dcd1077d44b7"
  },
  {
    "url": "livewire/components/pagination.html",
    "revision": "7b98e05a1e41c6cfa84fd7d8d0c85cfb"
  },
  {
    "url": "livewire/installation.html",
    "revision": "d28a664c54f4e094f4aaf188642082dd"
  },
  {
    "url": "other/priority-levels.html",
    "revision": "1d4010bef57f0a1b8d48fa5eac4321d5"
  },
  {
    "url": "other/static-site-generators.html",
    "revision": "c85e7355b2e1ee7138d438dcfffd42b9"
  },
  {
    "url": "php/arrays/sorting-arrays.html",
    "revision": "bcf5947a45411f36b6c4fbdadeb49550"
  },
  {
    "url": "php/classes/pagination.html",
    "revision": "7d8900e0f9267cefb02cdfc874d59e0d"
  },
  {
    "url": "php/classes/pdo.html",
    "revision": "dc960b83add76f42121e20f0d00c92c7"
  },
  {
    "url": "php/laravel/authorization/blade-directives/can.html",
    "revision": "b6d05395c103e070bc535a4154a3c7d7"
  },
  {
    "url": "php/laravel/authorization/blade-directives/canany.html",
    "revision": "02d8062047858cdeb71080ece0813d16"
  },
  {
    "url": "php/laravel/authorization/blade-directives/cannot.html",
    "revision": "e427a28a938dffed6581bc900c9c2e2e"
  },
  {
    "url": "php/laravel/authorization/blade-directives/index.html",
    "revision": "761c72dfd8fc537972f3438b5f60b9ab"
  },
  {
    "url": "php/laravel/authorization/gates.html",
    "revision": "8342663b5da5ae69d4dc960a8d9bdb58"
  },
  {
    "url": "php/laravel/authorization/index.html",
    "revision": "2eff6b820596754d3c6ededf60919a37"
  },
  {
    "url": "php/laravel/authorization/policies.html",
    "revision": "812e2b8fe75f2ecf10687d3209bcc599"
  },
  {
    "url": "php/laravel/blade/components.html",
    "revision": "6c36d13723540355866375e386ea0ef0"
  },
  {
    "url": "php/laravel/blade/directives.html",
    "revision": "42e0b8559985f172bcaeda00359879e1"
  },
  {
    "url": "php/laravel/blade/index.html",
    "revision": "2f76886448cddb5d02d6fe1bc45b262c"
  },
  {
    "url": "php/laravel/controller.html",
    "revision": "7c8be9c5f9d330787af05000f9880c84"
  },
  {
    "url": "php/laravel/database/factories.html",
    "revision": "1e9d60b762747e7e978aa44eecd46b6b"
  },
  {
    "url": "php/laravel/database/index.html",
    "revision": "55752c16885ff8051503651b572dd6dc"
  },
  {
    "url": "php/laravel/database/migrations.html",
    "revision": "006d9406cf98e08c62a7e191e24d56e0"
  },
  {
    "url": "php/laravel/database/model.html",
    "revision": "979c1bd18872a61de9d2af143a962ff2"
  },
  {
    "url": "php/laravel/database/observer.html",
    "revision": "ba90fe1e35faf3a8294ec64871c97be7"
  },
  {
    "url": "php/laravel/database/queries.html",
    "revision": "1777035ed65c2f8d20bae3569b38f3c6"
  },
  {
    "url": "php/laravel/database/scopes.html",
    "revision": "f8052de3e0163b39345165247889c29a"
  },
  {
    "url": "php/laravel/database/seeders.html",
    "revision": "8af9e76a9498e4c430e2af318f14e318"
  },
  {
    "url": "php/laravel/enums.html",
    "revision": "4135e5c39a812069cd1b1c43811c93ec"
  },
  {
    "url": "php/laravel/index.html",
    "revision": "c1185bf8679daa091111cc266989bde3"
  },
  {
    "url": "php/laravel/package-development/index.html",
    "revision": "ed98eec9496d30223f1880cf0fb6362e"
  },
  {
    "url": "php/laravel/package-development/laravel-packager.html",
    "revision": "edc22dde0c4dfd0d71cb423c8dc16e4b"
  },
  {
    "url": "php/laravel/package-development/views.html",
    "revision": "58f210d68b3533fc1afa24003c733712"
  },
  {
    "url": "php/laravel/packages/guides/index.html",
    "revision": "ff768621541fde95c3e30f8b5e10e16b"
  },
  {
    "url": "php/laravel/packages/guides/laravel-pint.html",
    "revision": "7177c072e0fec3d0c3829c2499e6e3b4"
  },
  {
    "url": "php/laravel/packages/guides/spatie-activity-log.html",
    "revision": "b5bb8929b4b131a324f0bda09ca86f1e"
  },
  {
    "url": "php/laravel/packages/guides/spatie-comments.html",
    "revision": "77daa3494bbcf75677cd1e071080f096"
  },
  {
    "url": "php/laravel/packages/guides/spatie-feed.html",
    "revision": "92f0f036e430ccd8e52f531bc21fced7"
  },
  {
    "url": "php/laravel/packages/guides/spatie-media-library.html",
    "revision": "9fc1380af6f70bfd2cbda54f613a91dd"
  },
  {
    "url": "php/laravel/packages/guides/spatie-permissions.html",
    "revision": "d9feca4450b9d50191fce9d1269adee2"
  },
  {
    "url": "php/laravel/packages/guides/spatie-query-builder.html",
    "revision": "2c96f4e3990e1d98f04b7c281894f472"
  },
  {
    "url": "php/laravel/packages/guides/spatie-settings.html",
    "revision": "95e2bdb31951493518f1bab803f4b7b5"
  },
  {
    "url": "php/laravel/packages/index.html",
    "revision": "e6ddff38cf99798cdde473267959d21e"
  },
  {
    "url": "php/laravel/policies.html",
    "revision": "6200ca2d1249af136978384da5ed4b5a"
  },
  {
    "url": "php/laravel/relationships/belongs-to-many.html",
    "revision": "fe4c6a077b7227bb370adbc2440156e6"
  },
  {
    "url": "php/laravel/relationships/index.html",
    "revision": "d3200c241be2f2496b103d0b30f04b9e"
  },
  {
    "url": "php/laravel/relationships/many-to-many.html",
    "revision": "afd4ce6637245abed4136c2c4ea4a558"
  },
  {
    "url": "php/laravel/routes.html",
    "revision": "d98d90054c68dcf9547f8f51215fb149"
  },
  {
    "url": "php/laravel/task-scheduling.html",
    "revision": "328261cc1677a9db3126f349b3fefce2"
  },
  {
    "url": "php/laravel/testing/controller-methods.html",
    "revision": "873cd28e64740c5f362456881fc7db88"
  },
  {
    "url": "php/laravel/testing/index.html",
    "revision": "5000c3c662fb134306fd29c7216e36a2"
  },
  {
    "url": "php/laravel/tinker/index.html",
    "revision": "f9b5f1f9904a0d97360f5446a2486980"
  },
  {
    "url": "php/laravel/traits/index.html",
    "revision": "4b89db2fb96a969a40609daf5f6aef8a"
  },
  {
    "url": "php/laravel/traits/scopes.html",
    "revision": "874fb030167c02627f51d4bad0a63362"
  },
  {
    "url": "php/laravel/validation/form-request.html",
    "revision": "c7c1b672b76c355038b357d27db4b52e"
  },
  {
    "url": "php/laravel/validation/index.html",
    "revision": "689d588ed7e7fd09d9f5f45ed5f1ea8e"
  },
  {
    "url": "php/laravel/validation/validation-rules.html",
    "revision": "5d956b5f7d6e9e1c3557bbb462db5b1c"
  },
  {
    "url": "php/laravel/views.html",
    "revision": "e776cf9825aea3f660f97e47de1a5bea"
  },
  {
    "url": "php/nova/fields.html",
    "revision": "e8cb18dc045cff9afef7495874d2bbc2"
  },
  {
    "url": "tools/database.html",
    "revision": "18d86685cb800fd0160499f871c8159b"
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
