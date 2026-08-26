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
    "revision": "a8ad51b0fef9726e78fa03834df30c90"
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
    "url": "assets/js/100.bdd0d440.js",
    "revision": "aee769cc8fcd89dabbb93387439e4d89"
  },
  {
    "url": "assets/js/101.4acf2d3a.js",
    "revision": "4e376eaec715dcd300d6290ae0b07750"
  },
  {
    "url": "assets/js/102.4e13340d.js",
    "revision": "bf9e65993c16882370e4525aaf4f1585"
  },
  {
    "url": "assets/js/103.b9f305a6.js",
    "revision": "57a685aaf74f6c2115d4c38349a7f86f"
  },
  {
    "url": "assets/js/104.99568d45.js",
    "revision": "cb51cc445d4a447f9a501d08c3169e3f"
  },
  {
    "url": "assets/js/105.134e5e42.js",
    "revision": "261d271ec8d8854b80d434ddc1b9af68"
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
    "url": "assets/js/23.917bb4bd.js",
    "revision": "131c3921af7e73b62fb96e6eaa198e0e"
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
    "url": "assets/js/26.dbf1bfa5.js",
    "revision": "a3bdb4e86cd6ae251ecbd813e0b56eef"
  },
  {
    "url": "assets/js/27.1a43afcc.js",
    "revision": "cdb05f37eadc506b980526c0ec3225ca"
  },
  {
    "url": "assets/js/28.dd5db720.js",
    "revision": "590f4593cb636cb5e639ea61777e61ad"
  },
  {
    "url": "assets/js/29.e63ec27a.js",
    "revision": "53b9cefb1b82f586ae864995d0d450f2"
  },
  {
    "url": "assets/js/3.5740590c.js",
    "revision": "395b4d6a1743218ea90c901e772361ed"
  },
  {
    "url": "assets/js/30.6eb85a88.js",
    "revision": "f3b69e79d0200f78679f7c187b0a5306"
  },
  {
    "url": "assets/js/31.82814068.js",
    "revision": "575f750b8508c3f59b647f3b8952bb51"
  },
  {
    "url": "assets/js/32.f0806d76.js",
    "revision": "dbc4ffdc55cc6ce8c71c0aa2e7a1c265"
  },
  {
    "url": "assets/js/33.4046b72e.js",
    "revision": "85320b88ed63d4172448a7a8f2b4c998"
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
    "url": "assets/js/36.96cc433d.js",
    "revision": "9651a247ed5c5b40033d01ed2cc3fcea"
  },
  {
    "url": "assets/js/37.6104da66.js",
    "revision": "1c7ff7d1322c662dea72769f0de46e83"
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
    "url": "assets/js/40.3ecb252c.js",
    "revision": "a9164fef6357d79c583e71d77f457c8e"
  },
  {
    "url": "assets/js/41.616bde69.js",
    "revision": "e3b29517852cccd6698dcd60b18a14a6"
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
    "url": "assets/js/44.dfbd4de2.js",
    "revision": "bc0607a6b3c8c9c2a2b6e589f0195f21"
  },
  {
    "url": "assets/js/45.0310d460.js",
    "revision": "e308e45c988ca99fa1585d8b2eb5fa1e"
  },
  {
    "url": "assets/js/46.cb7f8a63.js",
    "revision": "f255dfca4324160d8ec46b0233f50c41"
  },
  {
    "url": "assets/js/47.11367389.js",
    "revision": "6b2766be576b5d318ec3cbefd178e54e"
  },
  {
    "url": "assets/js/48.5ad109a3.js",
    "revision": "35af8e40121c3a4ecf2243ad4da9869f"
  },
  {
    "url": "assets/js/49.42326858.js",
    "revision": "487b35089c14906141d2777a444fd1be"
  },
  {
    "url": "assets/js/5.775b6552.js",
    "revision": "4df5e0148d5eaf03a8dd0c9a42e63adf"
  },
  {
    "url": "assets/js/50.d5baaebd.js",
    "revision": "4f02a40b9573f212841dbc6bfc1d2510"
  },
  {
    "url": "assets/js/51.617d4383.js",
    "revision": "fbca6666a73a91aa22368b5281e46aea"
  },
  {
    "url": "assets/js/52.565a7379.js",
    "revision": "08e7e7b4eee7a433828c66088a59b84e"
  },
  {
    "url": "assets/js/53.c033323f.js",
    "revision": "5d5c148db18c03541f5512d6fed38e6d"
  },
  {
    "url": "assets/js/54.a8f73ed1.js",
    "revision": "12783ecbdf3541f1eb2bd64ecc7cc63c"
  },
  {
    "url": "assets/js/55.a3a5131d.js",
    "revision": "527c6b0ca89f0631ca0e28da154415b5"
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
    "url": "assets/js/61.908f45fd.js",
    "revision": "00dd46175777e1e9b7e6579889f62b7c"
  },
  {
    "url": "assets/js/62.7639d2ca.js",
    "revision": "c420a04f39557cf80288f64c639230b7"
  },
  {
    "url": "assets/js/63.a0f8c2ae.js",
    "revision": "96e0f0db42f0ddaf07027e642a2f54de"
  },
  {
    "url": "assets/js/64.a43342f3.js",
    "revision": "ada13b40a613d7dbc9649a259841e0dd"
  },
  {
    "url": "assets/js/65.2c157bac.js",
    "revision": "cb9134383c0d477f5e62f03991f06f70"
  },
  {
    "url": "assets/js/66.ce074119.js",
    "revision": "836ebb2b2cb773ea571e95c5dc764db7"
  },
  {
    "url": "assets/js/67.23d37286.js",
    "revision": "4d71c3bc02af7e70db75073134e96b4d"
  },
  {
    "url": "assets/js/68.86478454.js",
    "revision": "ddea30553a256559dace9e87185f0e51"
  },
  {
    "url": "assets/js/69.82466038.js",
    "revision": "225d76946460ede05074e51b1d912b36"
  },
  {
    "url": "assets/js/7.b7c0f320.js",
    "revision": "9acf1f8f90fc9fdda8c7859dea8299f8"
  },
  {
    "url": "assets/js/70.5b4a7024.js",
    "revision": "c6530f1044cc39a48f2602d9dd6980ad"
  },
  {
    "url": "assets/js/71.acf8086f.js",
    "revision": "1637c8a6e77dc04a7114c7e24654a098"
  },
  {
    "url": "assets/js/72.185f9369.js",
    "revision": "3270e3368f38bba9f8a5d174e1ce0d88"
  },
  {
    "url": "assets/js/73.c9c37806.js",
    "revision": "c60c90fa24efccb6049688a65a84168c"
  },
  {
    "url": "assets/js/74.5facfb9b.js",
    "revision": "e9607214f6368d978d370d8cd3bfba27"
  },
  {
    "url": "assets/js/75.995afd0e.js",
    "revision": "97fc6e566c23ad37101b8749e67334fa"
  },
  {
    "url": "assets/js/76.3c6c5a68.js",
    "revision": "894f25d5e38b61217bb90ed1bc7850de"
  },
  {
    "url": "assets/js/77.cf380576.js",
    "revision": "6feffb997fda69a223da1d67686b9d5c"
  },
  {
    "url": "assets/js/78.e2ef6685.js",
    "revision": "7fcd65578f9de3a8931e8dc2f5f77c38"
  },
  {
    "url": "assets/js/79.4899233f.js",
    "revision": "fe6bca31cf8b1c67feeb1dbdf71cf8b1"
  },
  {
    "url": "assets/js/80.7122857b.js",
    "revision": "46905b930fe3b6a3d0012c77045f99dd"
  },
  {
    "url": "assets/js/81.b5733721.js",
    "revision": "1920ccd131aa6e7a6cd291f82219e7a2"
  },
  {
    "url": "assets/js/82.58752989.js",
    "revision": "8e9deb48aefb6046c00a393a71e5e777"
  },
  {
    "url": "assets/js/83.af1d2446.js",
    "revision": "6baf6a52c30f9cbd6964c3d8c62fa926"
  },
  {
    "url": "assets/js/84.98ed0df1.js",
    "revision": "6491abfaf67d5a70af123f8e7d123318"
  },
  {
    "url": "assets/js/85.38333c30.js",
    "revision": "efce7ee47340f04843454e805729635a"
  },
  {
    "url": "assets/js/86.d718f101.js",
    "revision": "b16ebec100e3f6f3277b288a617646d8"
  },
  {
    "url": "assets/js/87.695aff83.js",
    "revision": "03f344508e1001dfd2bc8911310ef905"
  },
  {
    "url": "assets/js/88.772c3f9f.js",
    "revision": "7b0a7bd8247d5b5acaa79f6e3a1d508b"
  },
  {
    "url": "assets/js/89.b158c4b9.js",
    "revision": "e22af2d6c7de759531beae3322797295"
  },
  {
    "url": "assets/js/90.3556d395.js",
    "revision": "2b6d5f022f414ac931327d7f317da2a1"
  },
  {
    "url": "assets/js/91.c34d15e3.js",
    "revision": "543d9ba334de58c6877eb26a5f9d132e"
  },
  {
    "url": "assets/js/92.5e49aff7.js",
    "revision": "ca0cb070e0cddce667f62532cfed5846"
  },
  {
    "url": "assets/js/93.37086cd2.js",
    "revision": "3867ad02ebd25c00fbe5fb9c82171e46"
  },
  {
    "url": "assets/js/94.cefbb5b7.js",
    "revision": "8f20fbb1663f67808c5282e7e293d083"
  },
  {
    "url": "assets/js/95.8e2e53e4.js",
    "revision": "ffbb9a939b2d524be413b0c6bcecd57c"
  },
  {
    "url": "assets/js/96.fc506654.js",
    "revision": "e299b7b35d83e885ee21c9d8e4c4e44f"
  },
  {
    "url": "assets/js/97.0b8b14a8.js",
    "revision": "d8107748f7261bbb2486568922d7e466"
  },
  {
    "url": "assets/js/98.cdc2a574.js",
    "revision": "8ba8b153f9f86b33cdbac67635c256b5"
  },
  {
    "url": "assets/js/99.1ec95b47.js",
    "revision": "6dc07f67d274f373a30fb330a8fbb22c"
  },
  {
    "url": "assets/js/app.5b314112.js",
    "revision": "14ff3dfa11affb332dfa88815659689f"
  },
  {
    "url": "assets/js/vendors~docsearch.6fed1ae2.js",
    "revision": "2ef16c7549a2197852a96e854981a5c7"
  },
  {
    "url": "draft/quick-notes.html",
    "revision": "b33112eeb3aa1b59b6dfe037cc5edb9d"
  },
  {
    "url": "html/bootstrap/cards.html",
    "revision": "c6a80566cc24fb6458fd367609327b58"
  },
  {
    "url": "html/bootstrap/forms/checks-radios.html",
    "revision": "a43d31b581c02c0dcd393c0614271718"
  },
  {
    "url": "html/bootstrap/forms/floating-labels.html",
    "revision": "2468935f9b6529e0d2e2a24c66456248"
  },
  {
    "url": "html/bootstrap/forms/form-control.html",
    "revision": "1ee893973b55da78d1e5344b91cbb118"
  },
  {
    "url": "html/bootstrap/forms/index.html",
    "revision": "c61d37be8ebbfb1609411c08e1a8983f"
  },
  {
    "url": "html/bootstrap/forms/layout.html",
    "revision": "61bb98fb44f81854fbba548d195c193c"
  },
  {
    "url": "html/bootstrap/forms/select.html",
    "revision": "9a530ec3f1d7814bacc29e333e1524eb"
  },
  {
    "url": "html/bootstrap/forms/validation.html",
    "revision": "252dfb7adfe14887a486b36f59274898"
  },
  {
    "url": "html/bootstrap/index.html",
    "revision": "423fa4d768331f4ce3a33dbe586ff09d"
  },
  {
    "url": "html/bootstrap/tables.html",
    "revision": "6b540af73df7efdb55ea0ce900e0eeb3"
  },
  {
    "url": "html/tailwind/customization/index.html",
    "revision": "6c3321f9f6ca046505f5637290238d4e"
  },
  {
    "url": "html/tailwind/customization/presets.html",
    "revision": "aa74888afb0d0b3ad70de77891a02c6a"
  },
  {
    "url": "html/tailwind/directives.html",
    "revision": "1fd6c2edc646d0e47e43535350374562"
  },
  {
    "url": "html/tailwind/index.html",
    "revision": "35ef77e3bd65c67876b33970c63955c1"
  },
  {
    "url": "htmx/index.html",
    "revision": "b16c58145dcd5b8b41bc4fe30a3a2da2"
  },
  {
    "url": "index.html",
    "revision": "d388b7fc8a0653834d0f9b795ad0d509"
  },
  {
    "url": "javascript/alpinejs/index.html",
    "revision": "a94dd01fe7b0a3488e6bd732dfe51efc"
  },
  {
    "url": "javascript/alpinejs/textarea.html",
    "revision": "243c2a8884b0ec66a86ca9c4c846e4a9"
  },
  {
    "url": "javascript/modules.html",
    "revision": "cc98168a756181606c6ca9bac7625bea"
  },
  {
    "url": "livewire/components/index.html",
    "revision": "9617c0656f7d5919bfd8484bbfcbdc72"
  },
  {
    "url": "livewire/components/pagination.html",
    "revision": "a9dc193d7361e38e3b835d00c1ece825"
  },
  {
    "url": "livewire/installation.html",
    "revision": "599ed9ed6c97f7a1af7659c53ad4bf8b"
  },
  {
    "url": "nextjs/index.html",
    "revision": "c78d17521495c90740a520e5a3e0a44b"
  },
  {
    "url": "nextjs/laravel-sanctum-auth.html",
    "revision": "d615085af6f0ba84ab1587bbeeb52e30"
  },
  {
    "url": "other/priority-levels.html",
    "revision": "eec4b0c74bca69dbbd9c20eb462f0475"
  },
  {
    "url": "other/static-site-generators.html",
    "revision": "20ef222d50a7395a78eb0506df6450be"
  },
  {
    "url": "php/arrays/sorting-arrays.html",
    "revision": "2a643e9766556aa5f210925fc6c96d6a"
  },
  {
    "url": "php/classes/pagination.html",
    "revision": "a897a00b286589a6019658fde624d43e"
  },
  {
    "url": "php/classes/pdo.html",
    "revision": "22ccf74d1d1541cfd24cccaa4d50da47"
  },
  {
    "url": "php/laravel/authorization/blade-directives/can.html",
    "revision": "ed03ce12d6e64b531321ffb8849ba26a"
  },
  {
    "url": "php/laravel/authorization/blade-directives/canany.html",
    "revision": "291da9b6311fbec8ac2217a1c9512f2b"
  },
  {
    "url": "php/laravel/authorization/blade-directives/cannot.html",
    "revision": "48ec7ad1666f393928487283c70e9c4a"
  },
  {
    "url": "php/laravel/authorization/blade-directives/index.html",
    "revision": "e0897db83d854f990eb36a2c67dcdfaa"
  },
  {
    "url": "php/laravel/authorization/gates.html",
    "revision": "1602999969d76fcc48e02ae68f8353c4"
  },
  {
    "url": "php/laravel/authorization/index.html",
    "revision": "161e2657509df7d7c3ccff04eedb3521"
  },
  {
    "url": "php/laravel/authorization/policies.html",
    "revision": "5e32d0504594cad68aab2c95bbe06453"
  },
  {
    "url": "php/laravel/blade/components.html",
    "revision": "d81912c4b08b22e39fc0c6ae1a3473e5"
  },
  {
    "url": "php/laravel/blade/directives.html",
    "revision": "2eaa07dd538da20cc6ddfaee6712da7a"
  },
  {
    "url": "php/laravel/blade/index.html",
    "revision": "2dbd0ff9c9ca3058761f991af15845fe"
  },
  {
    "url": "php/laravel/controller.html",
    "revision": "d6aa017cd716a921298355824a01cc13"
  },
  {
    "url": "php/laravel/database/factories.html",
    "revision": "ec12aed680695f60e584b37a6bc40e53"
  },
  {
    "url": "php/laravel/database/index.html",
    "revision": "7ff8ffa7ea6b21f96ae3b2568d35c0a7"
  },
  {
    "url": "php/laravel/database/migrations.html",
    "revision": "01ec7630349d60554a47fa7464330edb"
  },
  {
    "url": "php/laravel/database/model.html",
    "revision": "905266eb51f360623d7f78f5fba70519"
  },
  {
    "url": "php/laravel/database/observer.html",
    "revision": "edd5a3e220d14199e0a3c3f62049f74b"
  },
  {
    "url": "php/laravel/database/queries.html",
    "revision": "44bbf54e35a25063748d06703d2c91db"
  },
  {
    "url": "php/laravel/database/scopes.html",
    "revision": "adeb661fdfb73282b4ae742cad451cc8"
  },
  {
    "url": "php/laravel/database/seeders.html",
    "revision": "b935e43930c7af6d686c5847aaa70a62"
  },
  {
    "url": "php/laravel/database/transactions.html",
    "revision": "93c33f0b3ea3180ebf34b58f8fe8b0d5"
  },
  {
    "url": "php/laravel/enums.html",
    "revision": "975d650d39a3bbd1d8f84c6c7d85ffcf"
  },
  {
    "url": "php/laravel/index.html",
    "revision": "f6bc07a162d43516ff0f765edabcd5c3"
  },
  {
    "url": "php/laravel/package-development/index.html",
    "revision": "1136f33d765ab131dbda9d82bae9a319"
  },
  {
    "url": "php/laravel/package-development/laravel-packager.html",
    "revision": "3448864d0703e7c1dcbd9fe49fe24998"
  },
  {
    "url": "php/laravel/package-development/views.html",
    "revision": "8eb8657231e274b05133bf11c3147844"
  },
  {
    "url": "php/laravel/packages/guides/index.html",
    "revision": "edeffce097e327c974a5f7e175688c41"
  },
  {
    "url": "php/laravel/packages/guides/laravel-pint.html",
    "revision": "5c7d357ffeaf999f0394084990072166"
  },
  {
    "url": "php/laravel/packages/guides/spatie-activity-log.html",
    "revision": "e141e82bcd7590bb5e498a685445e585"
  },
  {
    "url": "php/laravel/packages/guides/spatie-comments.html",
    "revision": "ab25e1ba5aa2eb751dc50972ee0841c3"
  },
  {
    "url": "php/laravel/packages/guides/spatie-feed.html",
    "revision": "045effdd48d44259ec235cce9684d4b1"
  },
  {
    "url": "php/laravel/packages/guides/spatie-media-library.html",
    "revision": "9234e469d0edc1aebc20bb7c6a04947c"
  },
  {
    "url": "php/laravel/packages/guides/spatie-permissions.html",
    "revision": "be5e8897b358b99306aab73e69f3d8ff"
  },
  {
    "url": "php/laravel/packages/guides/spatie-query-builder.html",
    "revision": "a3b178e0179756cfd3941b61953f5a88"
  },
  {
    "url": "php/laravel/packages/guides/spatie-settings.html",
    "revision": "3d58f1c4c1b6b62c8128f62759b7e1f8"
  },
  {
    "url": "php/laravel/packages/index.html",
    "revision": "9eb444d14838ce6991b295a4918abcc6"
  },
  {
    "url": "php/laravel/policies.html",
    "revision": "4a41a8beddeb39e0f5bbab311146ce4a"
  },
  {
    "url": "php/laravel/relationships/belongs-to-many.html",
    "revision": "13aaf8f721b90cae091c3a7d121ea81a"
  },
  {
    "url": "php/laravel/relationships/index.html",
    "revision": "2162cceb02c2c55df932110ee9c32104"
  },
  {
    "url": "php/laravel/relationships/many-to-many.html",
    "revision": "a5678162a3bbd6be541cf339eb3e125f"
  },
  {
    "url": "php/laravel/routes.html",
    "revision": "2c758b55c8701afcfb7900da00ba30a0"
  },
  {
    "url": "php/laravel/task-scheduling.html",
    "revision": "105225eebcd6aead0c3727338723cf2e"
  },
  {
    "url": "php/laravel/testing/controller-methods.html",
    "revision": "19bff876a376151a7b91479be1a971ee"
  },
  {
    "url": "php/laravel/testing/index.html",
    "revision": "8b77ed7543f588c4db09f109d999aa39"
  },
  {
    "url": "php/laravel/tinker/index.html",
    "revision": "4ee50bbb74f9bfbbf1d5acc7be2015e8"
  },
  {
    "url": "php/laravel/traits/index.html",
    "revision": "e7835714079c4e1a9912d46eb39c650a"
  },
  {
    "url": "php/laravel/traits/scopes.html",
    "revision": "c1055eb0af7b26c8145aeb28d04002e0"
  },
  {
    "url": "php/laravel/validation/form-request.html",
    "revision": "16d626a475c4bd9ce06e7f14a960648f"
  },
  {
    "url": "php/laravel/validation/index.html",
    "revision": "9fb119628c5a59b89317666305099a83"
  },
  {
    "url": "php/laravel/validation/validation-rules.html",
    "revision": "aa56f16d6763c41f74bf4cc02271a9e2"
  },
  {
    "url": "php/laravel/views.html",
    "revision": "db2efae75198edf86b38943e3c1c73be"
  },
  {
    "url": "php/nova/fields.html",
    "revision": "c5fe519df6e6845471003cb3876f6109"
  },
  {
    "url": "tools/database.html",
    "revision": "7e3e02264a98a57418fda852ed76e618"
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
