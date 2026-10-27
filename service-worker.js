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
    "revision": "7de29cbc3aac8a81df91ac19b3ca2cd6"
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
    "url": "assets/img/transactions-table.66d5c67f.png",
    "revision": "66d5c67fa2f03098bd477d5e94b88fc8"
  },
  {
    "url": "assets/js/1.d0c882ce.js",
    "revision": "ae1ff4243243118ffb0b222d3a7ff07c"
  },
  {
    "url": "assets/js/10.5889962b.js",
    "revision": "6aa716cac111d56749bafbca2b09fb79"
  },
  {
    "url": "assets/js/100.b6f71f12.js",
    "revision": "4d7fb8fae7a6b061e83b6fdf61fa6aab"
  },
  {
    "url": "assets/js/101.2600c61d.js",
    "revision": "692a4974cac0ac86834b9d5d90dd15b2"
  },
  {
    "url": "assets/js/102.305c1697.js",
    "revision": "23aa6e1c8f50dc83af27db3db52a4a31"
  },
  {
    "url": "assets/js/103.a333016e.js",
    "revision": "9435c31464e91d1067f20403348f8e55"
  },
  {
    "url": "assets/js/104.a249a81e.js",
    "revision": "bab9b9c8e7a7edce5c9d0f0b072ad0ab"
  },
  {
    "url": "assets/js/105.617a745e.js",
    "revision": "b4e21fe5b2a741219bc7b80e91a7f8be"
  },
  {
    "url": "assets/js/106.ae70239f.js",
    "revision": "c43e617761599eb7a6d0979fefd364ab"
  },
  {
    "url": "assets/js/107.b5c00d26.js",
    "revision": "df2ffa280f5c41e7acbcc5b061b2820a"
  },
  {
    "url": "assets/js/108.571b078b.js",
    "revision": "6a31f5a8a7691cde3711ae4c5931ce69"
  },
  {
    "url": "assets/js/109.b807177c.js",
    "revision": "41d477014795b91350ee2f28057dc3a7"
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
    "url": "assets/js/14.d4aa4c66.js",
    "revision": "348ec95d26cf3af5dbbf03839720c599"
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
    "url": "assets/js/19.4d37c360.js",
    "revision": "9d0480bf6a61137d1579403c78a05845"
  },
  {
    "url": "assets/js/2.73ee6c6a.js",
    "revision": "40429183581e86d7be08b6aa67437677"
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
    "url": "assets/js/23.794bad80.js",
    "revision": "dac281693d61b3ccc09b2c7db73e9344"
  },
  {
    "url": "assets/js/24.2719c0e5.js",
    "revision": "5ba1b0914bf3889cf4372b05a37ba1d4"
  },
  {
    "url": "assets/js/25.b598904c.js",
    "revision": "ea28929e8bbf9cd04f1897428b7d649a"
  },
  {
    "url": "assets/js/26.adc70daf.js",
    "revision": "9eb77346e4bebc6037ba1b44bbb9b536"
  },
  {
    "url": "assets/js/27.039941d1.js",
    "revision": "d587def272d1402490b4742ca5aaca9d"
  },
  {
    "url": "assets/js/28.3cf20172.js",
    "revision": "e594fda0350ab22ae0b140af33f77e45"
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
    "url": "assets/js/30.8117193b.js",
    "revision": "78b163dabbae07af2977782e9adc44f8"
  },
  {
    "url": "assets/js/31.3a34ff92.js",
    "revision": "3aeb05f02e715a65683612c76b3055fe"
  },
  {
    "url": "assets/js/32.6550a0e5.js",
    "revision": "78d97ae569ed7dac4bbb56c6aee4a01b"
  },
  {
    "url": "assets/js/33.3edfd5e6.js",
    "revision": "83956226ddbe400fde3a96eebba3f54e"
  },
  {
    "url": "assets/js/34.461b80ea.js",
    "revision": "484bcd492d5ad1711f40804818c565ff"
  },
  {
    "url": "assets/js/35.1f3e308f.js",
    "revision": "bc8663e6b21a225c705f1c7226562671"
  },
  {
    "url": "assets/js/36.f24172ed.js",
    "revision": "9ed0c04a28b5d85b56ec0bb4a5098086"
  },
  {
    "url": "assets/js/37.4bbbcec8.js",
    "revision": "58d7ba417cab4cf07c5caea4904465d4"
  },
  {
    "url": "assets/js/38.8853d7fc.js",
    "revision": "ee17ae58227641ff88a88e5bb489b049"
  },
  {
    "url": "assets/js/39.f5362876.js",
    "revision": "84651104d47d21770564c27ed4558878"
  },
  {
    "url": "assets/js/4.26cdfca2.js",
    "revision": "f2290412901cdeaa1e3bfcb8ddb2efbd"
  },
  {
    "url": "assets/js/40.2ab651f0.js",
    "revision": "2cdba5d3380dd45c1e4b130c9d0fd932"
  },
  {
    "url": "assets/js/41.4e55642b.js",
    "revision": "bb24e7d770d25d920799769c59b296a1"
  },
  {
    "url": "assets/js/42.51f1c80f.js",
    "revision": "815ed5e26292e9ee0d58d91693026dc2"
  },
  {
    "url": "assets/js/43.90d76bf4.js",
    "revision": "377a9a17e473c170fcec00d843ce8fa0"
  },
  {
    "url": "assets/js/44.1b976a95.js",
    "revision": "a405a5ae9ce98b9ca7b7859901d47f81"
  },
  {
    "url": "assets/js/45.0a9a958b.js",
    "revision": "344cb2e101c39362a9502f6685d04d17"
  },
  {
    "url": "assets/js/46.81c6419c.js",
    "revision": "30e4ca488021261aad936d9b0d295079"
  },
  {
    "url": "assets/js/47.6e437947.js",
    "revision": "8b938a1c52344c9c1ce75af641674370"
  },
  {
    "url": "assets/js/48.9ad851fa.js",
    "revision": "a6703eb83dca22ae4b2affda3b2b3b64"
  },
  {
    "url": "assets/js/49.2e41d837.js",
    "revision": "c5a977e23563979d015b00e254e53eca"
  },
  {
    "url": "assets/js/5.e5d1443e.js",
    "revision": "14f525e794fb3bccbca940d6b60bd359"
  },
  {
    "url": "assets/js/50.619b472b.js",
    "revision": "1d8793c3032e91afb95cae77b59ea798"
  },
  {
    "url": "assets/js/51.3b06caf3.js",
    "revision": "6d7380acfcd153fbb5edf0974e0fa976"
  },
  {
    "url": "assets/js/52.968766a8.js",
    "revision": "740b3a3ca8e2a346dd627064405fc508"
  },
  {
    "url": "assets/js/53.68859953.js",
    "revision": "e8cae047d87b01a7a0a8956ddbaa9ee8"
  },
  {
    "url": "assets/js/54.f4c0aafb.js",
    "revision": "be35cefc483cefdfa99f1e7c016e6828"
  },
  {
    "url": "assets/js/55.f1d96e2e.js",
    "revision": "0297a455c9760dcc4b89441121f93900"
  },
  {
    "url": "assets/js/56.79522979.js",
    "revision": "93bfeaf426f6e9ab9b61555ab20726e9"
  },
  {
    "url": "assets/js/57.43626f0d.js",
    "revision": "fc6ef046e2d9e9f577c1c226962609b4"
  },
  {
    "url": "assets/js/58.fab70428.js",
    "revision": "a0924ff4dc5892510d25588fcc4d196d"
  },
  {
    "url": "assets/js/59.a95f6868.js",
    "revision": "b2fe2025143a9f98f2351a54c9f4d005"
  },
  {
    "url": "assets/js/6.bb1af159.js",
    "revision": "5ecaf1476e687aadb45fde0e5fdfc1b6"
  },
  {
    "url": "assets/js/60.353d028b.js",
    "revision": "0ec1d69ab8901f7cf26b84f853463cc8"
  },
  {
    "url": "assets/js/61.73841b56.js",
    "revision": "b8a3a38b01a74f2a97d6398431d29846"
  },
  {
    "url": "assets/js/62.3ff01bc2.js",
    "revision": "c3dd7e810f3b92fec7b2bc2b9c73c45c"
  },
  {
    "url": "assets/js/63.76573f28.js",
    "revision": "cf49304abd5f4be35b04cb6c5cb9aa14"
  },
  {
    "url": "assets/js/64.9b311ef4.js",
    "revision": "1db871d4d2601192b793d8f075d83c08"
  },
  {
    "url": "assets/js/65.fd85a720.js",
    "revision": "2f415bd81832cbc5157f80c635f52fb1"
  },
  {
    "url": "assets/js/66.554bec38.js",
    "revision": "2cbd5d3e082ce396bbf92c99c91bab8a"
  },
  {
    "url": "assets/js/67.100bfd10.js",
    "revision": "766a9d23b565689f14fcd12bd974f379"
  },
  {
    "url": "assets/js/68.546d84a0.js",
    "revision": "e23cab1acfc110a1663c5e02e5aba9eb"
  },
  {
    "url": "assets/js/69.afc79a1c.js",
    "revision": "70e86b8e09c04fe75e79688bc409d71b"
  },
  {
    "url": "assets/js/7.ca5a7b15.js",
    "revision": "7f79cab7262ae574c3075ebbf4c1ac64"
  },
  {
    "url": "assets/js/70.1f9dbef9.js",
    "revision": "5bd486e677d8e931fcd54c463743428b"
  },
  {
    "url": "assets/js/71.faa17539.js",
    "revision": "3c5a2e775a9c031f091d48476506f395"
  },
  {
    "url": "assets/js/72.fce569b1.js",
    "revision": "20a08b67b0bbcbfbf839d47fc4c25357"
  },
  {
    "url": "assets/js/73.9b8e5483.js",
    "revision": "0ecc73382566f920e378c144d8367499"
  },
  {
    "url": "assets/js/74.9d08c670.js",
    "revision": "d3cf28c33025801b7372e25e5010a488"
  },
  {
    "url": "assets/js/75.19288424.js",
    "revision": "5ea4a80fe7f14d680157ddc2d09cc54a"
  },
  {
    "url": "assets/js/76.c9f84457.js",
    "revision": "f8b56e9c766d1f7e3e2de58e235e32a5"
  },
  {
    "url": "assets/js/77.11e00275.js",
    "revision": "aea4d4ba412eb24dd952c91fe698eb92"
  },
  {
    "url": "assets/js/78.dee9c727.js",
    "revision": "8099616f3c6608fa50d0605b719cf62d"
  },
  {
    "url": "assets/js/79.a0387611.js",
    "revision": "6f51ec2e20921b1774ca9437c33c193e"
  },
  {
    "url": "assets/js/80.f41c2599.js",
    "revision": "1235f2e824f9a9cabf7573ca1294d3b6"
  },
  {
    "url": "assets/js/81.b826cb8b.js",
    "revision": "0ae6297325d96199f489b6c9c1bc67ba"
  },
  {
    "url": "assets/js/82.1fa9790b.js",
    "revision": "b5838afb77d172a507ced35b7783f4a5"
  },
  {
    "url": "assets/js/83.dc9e7ece.js",
    "revision": "685384401fabefab925420bf4107b6c2"
  },
  {
    "url": "assets/js/84.fdbc1b86.js",
    "revision": "4bf66d30905d9035c920556807641734"
  },
  {
    "url": "assets/js/85.ccb38b8b.js",
    "revision": "3c3884f9b648bbe5919f07e65d34b947"
  },
  {
    "url": "assets/js/86.cbdb7609.js",
    "revision": "f164f1fb1cc4b07ddc6755592b59da7a"
  },
  {
    "url": "assets/js/87.17538ece.js",
    "revision": "a64490708455dad514670eb97081c5aa"
  },
  {
    "url": "assets/js/88.3f31258d.js",
    "revision": "043109fd01ce229a2adacc3303f993fe"
  },
  {
    "url": "assets/js/89.38c9cf6c.js",
    "revision": "3daf090af05174a8f083fdf3d3df42b5"
  },
  {
    "url": "assets/js/90.17b2b56b.js",
    "revision": "dd718c6c5dac7b162b91d38bb2da44a8"
  },
  {
    "url": "assets/js/91.c6f71370.js",
    "revision": "372dbded19f8184b1ee4cbbc7216701b"
  },
  {
    "url": "assets/js/92.b21630e2.js",
    "revision": "fd8ca9af757dea89018b10fe802a3892"
  },
  {
    "url": "assets/js/93.653481ee.js",
    "revision": "fde1462bfb535472b2f116342117d7c7"
  },
  {
    "url": "assets/js/94.49d76fd9.js",
    "revision": "d4d03104addf75f4217b4da14abcbcca"
  },
  {
    "url": "assets/js/95.2025fa5a.js",
    "revision": "e0f2d8065baf7d30e4dbe12828fb107f"
  },
  {
    "url": "assets/js/96.87eb0924.js",
    "revision": "cc62b0191f8f25bc10a9d5789181494f"
  },
  {
    "url": "assets/js/97.3c88c70b.js",
    "revision": "bfab8e15445b13b5a3fdf48fcbe436f3"
  },
  {
    "url": "assets/js/98.bbbfc8a8.js",
    "revision": "e1cc713e0a3606cd55b29c2a34fd366b"
  },
  {
    "url": "assets/js/99.0f616340.js",
    "revision": "815dfde5815c8ffc4ef59d95a1ae7b1c"
  },
  {
    "url": "assets/js/app.0fbc49ea.js",
    "revision": "4aaf0d349484802b8137fa38461f6af1"
  },
  {
    "url": "assets/js/vendors~docsearch.0644ee0a.js",
    "revision": "b77890ee16800d927f76d8f8f61a0875"
  },
  {
    "url": "draft/quick-notes.html",
    "revision": "9d70118b1ef58af5f41c19c93d3c9d0e"
  },
  {
    "url": "flux-ui/dropdowns.html",
    "revision": "fa488047205ffcf7756e7a96ad43d5b8"
  },
  {
    "url": "flux-ui/tables.html",
    "revision": "80966b1367a3cd7ece4094fe9bf7df1f"
  },
  {
    "url": "html/bootstrap/cards.html",
    "revision": "da121e4d3e32204d5453dffd0822352f"
  },
  {
    "url": "html/bootstrap/forms/checks-radios.html",
    "revision": "4827fc0452a4b5cf8a4e47e05d7e8156"
  },
  {
    "url": "html/bootstrap/forms/floating-labels.html",
    "revision": "befbbcbcd686ebc3a8e14959f10fa73d"
  },
  {
    "url": "html/bootstrap/forms/form-control.html",
    "revision": "3b2c1b5527e409325ac1f6f03e98c211"
  },
  {
    "url": "html/bootstrap/forms/index.html",
    "revision": "7bf4f8a402e84c7e31bc3ef7088e78e7"
  },
  {
    "url": "html/bootstrap/forms/layout.html",
    "revision": "2309ba0e038b5db47d38690af1763de1"
  },
  {
    "url": "html/bootstrap/forms/select.html",
    "revision": "e11a5fe55731a5b14cd0e92e26ee16b4"
  },
  {
    "url": "html/bootstrap/forms/validation.html",
    "revision": "6c730af3e0131ae0e97a109bd6898301"
  },
  {
    "url": "html/bootstrap/index.html",
    "revision": "25674cfcbfce3fbc353f4dc82e787ac9"
  },
  {
    "url": "html/bootstrap/tables.html",
    "revision": "6783020b6c246310c71923704bb456be"
  },
  {
    "url": "html/tailwind/customization/index.html",
    "revision": "2940b94e175d75239a39898f4876046d"
  },
  {
    "url": "html/tailwind/customization/presets.html",
    "revision": "20256d8c3185a61b4398141fa67bacf9"
  },
  {
    "url": "html/tailwind/directives.html",
    "revision": "f97900fbd1906103ab26190f61ea1305"
  },
  {
    "url": "html/tailwind/index.html",
    "revision": "4716f93d00e900f22647ffbbfc8cada6"
  },
  {
    "url": "htmx/index.html",
    "revision": "2bfed5dd5f8d1005f18ff5ecb8fdbcc0"
  },
  {
    "url": "index.html",
    "revision": "403b9ea79e1fcd49bb89816f1b9d91eb"
  },
  {
    "url": "javascript/alpinejs/index.html",
    "revision": "9263974136f9cfa1fc3155b98be6c699"
  },
  {
    "url": "javascript/alpinejs/textarea.html",
    "revision": "bf7a988e46017f935fcc4d0e7d23151f"
  },
  {
    "url": "javascript/modules.html",
    "revision": "d24e4133a839132edcd782e7e74ffa9c"
  },
  {
    "url": "livewire/components/index.html",
    "revision": "6c3644c1b91b7c3aeed3a819e3ea12ad"
  },
  {
    "url": "livewire/components/pagination.html",
    "revision": "6d560e89ef0d96f073e18e79a63b59ef"
  },
  {
    "url": "livewire/installation.html",
    "revision": "cb11afaa1add13763fe1f91969e3073d"
  },
  {
    "url": "nextjs/index.html",
    "revision": "3057f6d979d783a76f8d942f09c52f5c"
  },
  {
    "url": "nextjs/laravel-sanctum-auth.html",
    "revision": "307e0a063b78c8d0351daf813ce36e9c"
  },
  {
    "url": "other/priority-levels.html",
    "revision": "376740e64c4fc37bc7c9cda5acc016f5"
  },
  {
    "url": "other/static-site-generators.html",
    "revision": "7bfe817e62c53d98860a8be52c5de643"
  },
  {
    "url": "php/arrays/sorting-arrays.html",
    "revision": "b83aa8bcb3f550d5c98fddf5ccd6b714"
  },
  {
    "url": "php/classes/pagination.html",
    "revision": "73a2b61f8725297f8e3ca4195adbb343"
  },
  {
    "url": "php/classes/pdo.html",
    "revision": "f31e341288b2b13d0753932f7cda12ea"
  },
  {
    "url": "php/laravel/authorization/blade-directives/can.html",
    "revision": "bed00eeb1afbc408e81f789ca7141552"
  },
  {
    "url": "php/laravel/authorization/blade-directives/canany.html",
    "revision": "b1d73112d563fd0436e32225d7e70560"
  },
  {
    "url": "php/laravel/authorization/blade-directives/cannot.html",
    "revision": "e83979476b9b5816112686160e2d10f3"
  },
  {
    "url": "php/laravel/authorization/blade-directives/index.html",
    "revision": "812ce34437ca8e17aba0875c93b6443e"
  },
  {
    "url": "php/laravel/authorization/gates.html",
    "revision": "c492fd5b2122a90e21825688a3f89588"
  },
  {
    "url": "php/laravel/authorization/index.html",
    "revision": "c37129dab7ce3f671d1955a40c931aa3"
  },
  {
    "url": "php/laravel/authorization/policies.html",
    "revision": "d21b3a06f75bdf41159076fb193c2d4c"
  },
  {
    "url": "php/laravel/blade/components.html",
    "revision": "7881a89b42610a203a826c33ec3bb4a2"
  },
  {
    "url": "php/laravel/blade/directives.html",
    "revision": "8ff8e1a4fd47520633aeac1a80066978"
  },
  {
    "url": "php/laravel/blade/index.html",
    "revision": "c9fb61047e75e52037613c2a30bffd93"
  },
  {
    "url": "php/laravel/controller.html",
    "revision": "3ae2a76bb8f5fa9c9f263c89454f8586"
  },
  {
    "url": "php/laravel/database/factories.html",
    "revision": "704fb1cd55f9a25497a8df7e6729c3fe"
  },
  {
    "url": "php/laravel/database/index.html",
    "revision": "f5c38a2c9ec9ebcf1ac34c503992eea0"
  },
  {
    "url": "php/laravel/database/migrations.html",
    "revision": "f1de354469c36e48ab63b8c4d0bdb986"
  },
  {
    "url": "php/laravel/database/model.html",
    "revision": "ee02d10f42e5175aa534fa088e6738af"
  },
  {
    "url": "php/laravel/database/observer.html",
    "revision": "8de471e2e7aa915aed9a84ec44b6e316"
  },
  {
    "url": "php/laravel/database/queries.html",
    "revision": "487e50cd4762a2d3131d101abfacab01"
  },
  {
    "url": "php/laravel/database/scopes.html",
    "revision": "cff66074b6f1d312f51d16e8b0d2b902"
  },
  {
    "url": "php/laravel/database/seeders.html",
    "revision": "c9dd2873f5f43aedd69e67c3d687dc25"
  },
  {
    "url": "php/laravel/database/transactions.html",
    "revision": "48f3153f79faab5c512da6db40795b01"
  },
  {
    "url": "php/laravel/enums.html",
    "revision": "0ed3b4c1af72a1964bde9a48c1fa84fe"
  },
  {
    "url": "php/laravel/index.html",
    "revision": "a16633a6e305642f17fb1e10d2446e7d"
  },
  {
    "url": "php/laravel/package-development/index.html",
    "revision": "2d330fe6f78a86ac786e2e5b288b96bb"
  },
  {
    "url": "php/laravel/package-development/laravel-packager.html",
    "revision": "3666da775baa356ca2137b044abc62d6"
  },
  {
    "url": "php/laravel/package-development/views.html",
    "revision": "24fa927bc2932760bb126312e7f5e520"
  },
  {
    "url": "php/laravel/packages/guides/index.html",
    "revision": "3cc2119d49892bf82655aace23f7a3ea"
  },
  {
    "url": "php/laravel/packages/guides/laravel-pint.html",
    "revision": "886d6632f6e1cbaa96be1b24fca303cb"
  },
  {
    "url": "php/laravel/packages/guides/spatie-activity-log.html",
    "revision": "46927ef96d8e46c061ca456d8fefa7b2"
  },
  {
    "url": "php/laravel/packages/guides/spatie-comments.html",
    "revision": "5537177bba2e6c1900e8747b8a913540"
  },
  {
    "url": "php/laravel/packages/guides/spatie-feed.html",
    "revision": "047619163f9a5e9edf126ad260d32c4e"
  },
  {
    "url": "php/laravel/packages/guides/spatie-media-library.html",
    "revision": "172d6d9b8341b6e63e93b7fc652c5b99"
  },
  {
    "url": "php/laravel/packages/guides/spatie-permissions.html",
    "revision": "b3d930e5f911a1b61ff4a3e447c8c807"
  },
  {
    "url": "php/laravel/packages/guides/spatie-query-builder.html",
    "revision": "d61152897f4a47439184b52d239e4cf3"
  },
  {
    "url": "php/laravel/packages/guides/spatie-settings.html",
    "revision": "1a3b8ef370c2b9d154b8768157d0d57c"
  },
  {
    "url": "php/laravel/packages/index.html",
    "revision": "e6049b4e44f3337b59eccf11808b10da"
  },
  {
    "url": "php/laravel/pipelines.html",
    "revision": "a0545d4e729ed66fbf9f9cfa9c75c1e7"
  },
  {
    "url": "php/laravel/policies.html",
    "revision": "6d7d0f324f2b2f913ef382a8f539dcf1"
  },
  {
    "url": "php/laravel/queues.html",
    "revision": "b1286f7a9e06b32352d6247483635a6b"
  },
  {
    "url": "php/laravel/relationships/belongs-to-many.html",
    "revision": "6e30fbabab99f38d8a8b2d6963409465"
  },
  {
    "url": "php/laravel/relationships/index.html",
    "revision": "e18022ec7e4d97a460f0d05fc0ae306a"
  },
  {
    "url": "php/laravel/relationships/many-to-many.html",
    "revision": "79a4310c04d754e19695d82b738b2885"
  },
  {
    "url": "php/laravel/routes.html",
    "revision": "8efc648c3bd67228262cec8b4d3c21f6"
  },
  {
    "url": "php/laravel/task-scheduling.html",
    "revision": "7074ff48921e4403cc41702b584856c8"
  },
  {
    "url": "php/laravel/testing/controller-methods.html",
    "revision": "732a372a3d70ae941fa3de4f723ceb92"
  },
  {
    "url": "php/laravel/testing/index.html",
    "revision": "a00c01fc852c66f965f40ad64a433e7d"
  },
  {
    "url": "php/laravel/tinker/index.html",
    "revision": "376bec7b2f9072b252d4ffb28fce62cd"
  },
  {
    "url": "php/laravel/traits/index.html",
    "revision": "20760c1a88836e4785598ddf452adeb6"
  },
  {
    "url": "php/laravel/traits/scopes.html",
    "revision": "6a58c2b5f3885375e67242d921c857ef"
  },
  {
    "url": "php/laravel/validation/form-request.html",
    "revision": "fcca6f21d8e048845aaaeb0323366a52"
  },
  {
    "url": "php/laravel/validation/index.html",
    "revision": "440ac683045082ca2c1a032c69331394"
  },
  {
    "url": "php/laravel/validation/validation-rules.html",
    "revision": "c375a223bc30108993e97d0e7a0ebbd7"
  },
  {
    "url": "php/laravel/views.html",
    "revision": "a48e1293ce62677c61f3d8b1414826ee"
  },
  {
    "url": "php/nova/fields.html",
    "revision": "18925a93e7d4718e35d82ec65a666759"
  },
  {
    "url": "tools/database.html",
    "revision": "6e22b9edfd6af094df549ef3e07f68fc"
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
