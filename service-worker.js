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
    "revision": "a7c918570e5e34e65b8ba7360082a636"
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
    "url": "assets/js/100.e73e9ca1.js",
    "revision": "8566e166563241751ac0972286389125"
  },
  {
    "url": "assets/js/101.6a1f1d6f.js",
    "revision": "12eebd67fb858962676e7ca110e4da62"
  },
  {
    "url": "assets/js/102.5cbbc79b.js",
    "revision": "1a564b2baad994d0c1789878d0fd6c85"
  },
  {
    "url": "assets/js/103.6dfe4a33.js",
    "revision": "f2ad520db2465f6b8b6bdceb88998fcc"
  },
  {
    "url": "assets/js/104.897ae036.js",
    "revision": "59b416f935451a3e0174c20fa417c706"
  },
  {
    "url": "assets/js/105.c4feb973.js",
    "revision": "e075b3ca310997d255d95d25c7f69de0"
  },
  {
    "url": "assets/js/106.f46052be.js",
    "revision": "5d88544ac96524fb1375fbef5ec7c2c1"
  },
  {
    "url": "assets/js/107.6ff03453.js",
    "revision": "54d2cf9b976616ad0a89ec87dfe4eee4"
  },
  {
    "url": "assets/js/108.55c34ce7.js",
    "revision": "94cb1f1df2892ea5d33d00b06dcc62c6"
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
    "url": "assets/js/24.de96783e.js",
    "revision": "5f02097016ea3d3a0484da0dff6f41fe"
  },
  {
    "url": "assets/js/25.26e6f4e5.js",
    "revision": "75d5e66dba9b50296878b7ccda877745"
  },
  {
    "url": "assets/js/26.a6866ec8.js",
    "revision": "3667a503cf45be97b5e8ed1da143e625"
  },
  {
    "url": "assets/js/27.0d1dc1c5.js",
    "revision": "88860834b5766cccb60c34a3b53c60cc"
  },
  {
    "url": "assets/js/28.2a0cb174.js",
    "revision": "eb1880dd1212ad202aae520affcc6a25"
  },
  {
    "url": "assets/js/29.3fc49d1d.js",
    "revision": "0b324e4b886f254f26f9668df17592f4"
  },
  {
    "url": "assets/js/3.5740590c.js",
    "revision": "395b4d6a1743218ea90c901e772361ed"
  },
  {
    "url": "assets/js/30.a3e42f18.js",
    "revision": "e3294e2b739fda5f9fe0986a54cd8b4d"
  },
  {
    "url": "assets/js/31.5a5f6aa1.js",
    "revision": "9f6a42f45e175f537588ed777c2146ad"
  },
  {
    "url": "assets/js/32.a0eab2e0.js",
    "revision": "1e47e679902fe7ad53cfd063a3772d57"
  },
  {
    "url": "assets/js/33.bc406b15.js",
    "revision": "304742c9fc9baee40d9b3e5fa66a2de2"
  },
  {
    "url": "assets/js/34.83e2020a.js",
    "revision": "d5902ed6e697c953c4acdd42d1a4d1a4"
  },
  {
    "url": "assets/js/35.334293c6.js",
    "revision": "da017f3d185e3f6f161b2e68a35edf40"
  },
  {
    "url": "assets/js/36.f24172ed.js",
    "revision": "9ed0c04a28b5d85b56ec0bb4a5098086"
  },
  {
    "url": "assets/js/37.017730b3.js",
    "revision": "a5d09a16a67c314c2ed0e944495a7de3"
  },
  {
    "url": "assets/js/38.4ad85e6e.js",
    "revision": "0e028a01342e4cb68a3c9a587a77a5f7"
  },
  {
    "url": "assets/js/39.1fbc5608.js",
    "revision": "30e3ac1ea0ddf835429e25a5e29b1f02"
  },
  {
    "url": "assets/js/4.26cdfca2.js",
    "revision": "f2290412901cdeaa1e3bfcb8ddb2efbd"
  },
  {
    "url": "assets/js/40.fc664589.js",
    "revision": "d99fa4e225b6f04c3e004b897d5a0bcb"
  },
  {
    "url": "assets/js/41.4bc9c4a5.js",
    "revision": "0fcfa616ec8d6c4e9cb6a2a24599d4c7"
  },
  {
    "url": "assets/js/42.6d752e5e.js",
    "revision": "9b6cd718ec3c5afdce9bf400916beed6"
  },
  {
    "url": "assets/js/43.86bda943.js",
    "revision": "34d383683917d50580fedd0a310c4980"
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
    "url": "assets/js/48.f09668d8.js",
    "revision": "5cc8d20590de792f129b100ce77628fd"
  },
  {
    "url": "assets/js/49.7afb12d7.js",
    "revision": "226583266c0a49177cb8e84f60b75094"
  },
  {
    "url": "assets/js/5.e5d1443e.js",
    "revision": "14f525e794fb3bccbca940d6b60bd359"
  },
  {
    "url": "assets/js/50.5307fd31.js",
    "revision": "dbdab15047f9c6e24545f12fadd63cf9"
  },
  {
    "url": "assets/js/51.3b06caf3.js",
    "revision": "6d7380acfcd153fbb5edf0974e0fa976"
  },
  {
    "url": "assets/js/52.2d3f6f54.js",
    "revision": "cf4c6721b0e8c82f43e72d18f506d84b"
  },
  {
    "url": "assets/js/53.8b6b4dd3.js",
    "revision": "85f0a73c0230ddef87c2cbf7510e7655"
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
    "url": "assets/js/58.40bfe748.js",
    "revision": "8da06a1ef71da1afb2527f2f75ae7ca6"
  },
  {
    "url": "assets/js/59.4260d7cd.js",
    "revision": "cf85b19ea63d1930796f3c2e0a84d759"
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
    "url": "assets/js/61.34e6f23d.js",
    "revision": "4104319088d48e5b2dfee121b083216a"
  },
  {
    "url": "assets/js/62.86d05602.js",
    "revision": "5aef081962e93fe4a9e8beab57c4518e"
  },
  {
    "url": "assets/js/63.d57ac779.js",
    "revision": "8f60d7fcd2573815db2d130ace38b5de"
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
    "url": "assets/js/66.a0d01e38.js",
    "revision": "305751073054c96b8afeb823a3bf0cd4"
  },
  {
    "url": "assets/js/67.8ac76011.js",
    "revision": "c1126f2753e25df86f0a1b989668a563"
  },
  {
    "url": "assets/js/68.0c6eca93.js",
    "revision": "07d8373cc93cc73d175f97b6688be83b"
  },
  {
    "url": "assets/js/69.cd433a2b.js",
    "revision": "3b8ddaa7f8870aa1972552bb0bf6e448"
  },
  {
    "url": "assets/js/7.ca5a7b15.js",
    "revision": "7f79cab7262ae574c3075ebbf4c1ac64"
  },
  {
    "url": "assets/js/70.09a9ce38.js",
    "revision": "3186a3ea0a9b091c0bccf551d2c6af0f"
  },
  {
    "url": "assets/js/71.6b329dd1.js",
    "revision": "43ad3cdd6220d09738d866f2dcf13418"
  },
  {
    "url": "assets/js/72.96086747.js",
    "revision": "ec9ce6f2f36dc0565c34d8b0b866b5a1"
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
    "url": "assets/js/75.145ff732.js",
    "revision": "8efe9d187c532dc8f63d6d4507fb3132"
  },
  {
    "url": "assets/js/76.3d399d6c.js",
    "revision": "4c0b7aa663766b0e36443d274065b375"
  },
  {
    "url": "assets/js/77.8d0f7c17.js",
    "revision": "82db9e4b35d2a851b970ffd2780d9803"
  },
  {
    "url": "assets/js/78.7d897b91.js",
    "revision": "3bc21b869be4f82f189bfc135c7e3712"
  },
  {
    "url": "assets/js/79.7495c12a.js",
    "revision": "554d8263db740f8efea1f80731bda8f6"
  },
  {
    "url": "assets/js/80.858f3916.js",
    "revision": "116a16b5afb8a76d78b80a13912b6fb3"
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
    "url": "assets/js/85.7693fa3e.js",
    "revision": "ecdc25c7063c52c9de740414f37818a9"
  },
  {
    "url": "assets/js/86.117ad058.js",
    "revision": "56c6daf0ce8234f45d222ac65c6e3d3b"
  },
  {
    "url": "assets/js/87.57d07eca.js",
    "revision": "5a473c27c91c71d3fa37cc86ae079f8d"
  },
  {
    "url": "assets/js/88.ed01580c.js",
    "revision": "aebe01cb469a16205bb8f4031fad794b"
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
    "url": "assets/js/91.cf704d3f.js",
    "revision": "c1fbb7e47a5a06325e22caccf255ef07"
  },
  {
    "url": "assets/js/92.6c4a31d0.js",
    "revision": "584864a7d0a7cb60f9397af248a97aba"
  },
  {
    "url": "assets/js/93.1ba61517.js",
    "revision": "02177b11741cb87111605b82bca327c1"
  },
  {
    "url": "assets/js/94.c74c1583.js",
    "revision": "8ceee981087a06b8417694123f0d9c56"
  },
  {
    "url": "assets/js/95.dae7c156.js",
    "revision": "ef578619a70681be05c38dcc846b2682"
  },
  {
    "url": "assets/js/96.e41b9761.js",
    "revision": "ec8aa7303f8709f21e16326465e903f1"
  },
  {
    "url": "assets/js/97.fc8d14b5.js",
    "revision": "d6d46d7b70372ae4d97e09cdc14216c8"
  },
  {
    "url": "assets/js/98.36cd673b.js",
    "revision": "68b5aa3302b98ead1536f93d708caa00"
  },
  {
    "url": "assets/js/99.5d194673.js",
    "revision": "bf42010f02c1764afd09dab261237a59"
  },
  {
    "url": "assets/js/app.2d0a7eb0.js",
    "revision": "19db4e522983315b3734aa2a3cb5a1f7"
  },
  {
    "url": "assets/js/vendors~docsearch.0644ee0a.js",
    "revision": "b77890ee16800d927f76d8f8f61a0875"
  },
  {
    "url": "draft/quick-notes.html",
    "revision": "41393c3f1981391110ce4e8df97fa5b7"
  },
  {
    "url": "flux-ui/dropdowns.html",
    "revision": "0cd7d944851af087f23990727bf74396"
  },
  {
    "url": "flux-ui/tables.html",
    "revision": "fb15d306055fbea31a87701f90e390e8"
  },
  {
    "url": "html/bootstrap/cards.html",
    "revision": "4704ad8c2ab7ccbf03aeb3f02d8dff93"
  },
  {
    "url": "html/bootstrap/forms/checks-radios.html",
    "revision": "636ec851b99c4b1e5e980f0e54eb8386"
  },
  {
    "url": "html/bootstrap/forms/floating-labels.html",
    "revision": "c196a388122b7470aa7d98b96b451f75"
  },
  {
    "url": "html/bootstrap/forms/form-control.html",
    "revision": "6e9ea65e9d51d37a7a5213c174a2d1e1"
  },
  {
    "url": "html/bootstrap/forms/index.html",
    "revision": "67ea244eb53619062c1fa0427bf35090"
  },
  {
    "url": "html/bootstrap/forms/layout.html",
    "revision": "a664309e5154b597f7a4b4ab33588f8b"
  },
  {
    "url": "html/bootstrap/forms/select.html",
    "revision": "04239ef40b49f30998c4a4f4bc9cc926"
  },
  {
    "url": "html/bootstrap/forms/validation.html",
    "revision": "c3091300065d01c8928597cb6117b951"
  },
  {
    "url": "html/bootstrap/index.html",
    "revision": "c02e258ebf41a0fd4b430372947dc2c2"
  },
  {
    "url": "html/bootstrap/tables.html",
    "revision": "9725ad0783a8148e97b9e769474928dd"
  },
  {
    "url": "html/tailwind/customization/index.html",
    "revision": "20ab7296768ac6a7b75526ffc5ec78de"
  },
  {
    "url": "html/tailwind/customization/presets.html",
    "revision": "191a76abf2d6391cef8106d85bc87708"
  },
  {
    "url": "html/tailwind/directives.html",
    "revision": "4d97e1a5fba4a97f094adaad1e6f459a"
  },
  {
    "url": "html/tailwind/index.html",
    "revision": "6c8c1b1e436a1bad8559a1b83cc1a3c1"
  },
  {
    "url": "htmx/index.html",
    "revision": "b47b03c0af541fed5db3a02b5343491f"
  },
  {
    "url": "index.html",
    "revision": "15aa28a5f93dfc2cd720b3d79c68ac6f"
  },
  {
    "url": "javascript/alpinejs/index.html",
    "revision": "b79d9931f4a83ff73a30ce18f0d8f800"
  },
  {
    "url": "javascript/alpinejs/textarea.html",
    "revision": "fe74a540f97d5f57206e04a28bcc3abc"
  },
  {
    "url": "javascript/modules.html",
    "revision": "d71fce8153283d741c19793c50d07af9"
  },
  {
    "url": "livewire/components/index.html",
    "revision": "c4f1c8e1b74bd81e2166bf6a08d1b126"
  },
  {
    "url": "livewire/components/pagination.html",
    "revision": "9ed9f6031e81e038f7f4922fb68661d3"
  },
  {
    "url": "livewire/installation.html",
    "revision": "64bbdff948282911cc3606ca9943f428"
  },
  {
    "url": "nextjs/index.html",
    "revision": "24fa93089494312b51baf7ca786a4864"
  },
  {
    "url": "nextjs/laravel-sanctum-auth.html",
    "revision": "6a350686fb1027b605f37b3ffb1b43ef"
  },
  {
    "url": "other/priority-levels.html",
    "revision": "63ed561eb40d654bc595879cdd21c250"
  },
  {
    "url": "other/static-site-generators.html",
    "revision": "271ddd079a4fe5966256d11cecde7f39"
  },
  {
    "url": "php/arrays/sorting-arrays.html",
    "revision": "ec32de3c016423052e8135bbff5171aa"
  },
  {
    "url": "php/classes/pagination.html",
    "revision": "362f335f8946236fbb2f77f57cf15236"
  },
  {
    "url": "php/classes/pdo.html",
    "revision": "4e588282951dc44f3e75553b80ca8acb"
  },
  {
    "url": "php/laravel/authorization/blade-directives/can.html",
    "revision": "45d535ed3640cb84ea8e21eab69be2d9"
  },
  {
    "url": "php/laravel/authorization/blade-directives/canany.html",
    "revision": "82ca1ed19f6ec25a20e2bbab33605e3e"
  },
  {
    "url": "php/laravel/authorization/blade-directives/cannot.html",
    "revision": "dcc4b03fd097be22f92bbdaebde44933"
  },
  {
    "url": "php/laravel/authorization/blade-directives/index.html",
    "revision": "7f36459041428960524862fc327ccfde"
  },
  {
    "url": "php/laravel/authorization/gates.html",
    "revision": "7b96e6fd4e9f5f694a8f631a88e85103"
  },
  {
    "url": "php/laravel/authorization/index.html",
    "revision": "12758351010391c10638cadbda23bdbb"
  },
  {
    "url": "php/laravel/authorization/policies.html",
    "revision": "e916c7e0db85fa780154d5a2d149c4fc"
  },
  {
    "url": "php/laravel/blade/components.html",
    "revision": "571f8bb6c8fe935c10c99b7eb0ad6dbe"
  },
  {
    "url": "php/laravel/blade/directives.html",
    "revision": "16e1059b4eaed89f8b390b4b4799b8a4"
  },
  {
    "url": "php/laravel/blade/index.html",
    "revision": "44110ade746a73932813a88601b9af61"
  },
  {
    "url": "php/laravel/controller.html",
    "revision": "2131ae2a9ed82e2febf9635c581f0717"
  },
  {
    "url": "php/laravel/database/factories.html",
    "revision": "b19aecb24377daa618b5384ecdb117b3"
  },
  {
    "url": "php/laravel/database/index.html",
    "revision": "f36fee7be59dfcb67718fe07cd90efb2"
  },
  {
    "url": "php/laravel/database/migrations.html",
    "revision": "f04f487589676f44a05caa1b2a168637"
  },
  {
    "url": "php/laravel/database/model.html",
    "revision": "243365c37b1c185a05907726e7042d65"
  },
  {
    "url": "php/laravel/database/observer.html",
    "revision": "d9e823aeed0ae64ced6dd99d51431d3a"
  },
  {
    "url": "php/laravel/database/queries.html",
    "revision": "18af45d5c1fdfb172e92c712003fbbe8"
  },
  {
    "url": "php/laravel/database/scopes.html",
    "revision": "dbf246e2ffeeb58998030ebaae05b23e"
  },
  {
    "url": "php/laravel/database/seeders.html",
    "revision": "63ab329f6447c3948a78e325eef85f41"
  },
  {
    "url": "php/laravel/database/transactions.html",
    "revision": "7da48ff18ee5a4e3cc266616fcfeaa3a"
  },
  {
    "url": "php/laravel/enums.html",
    "revision": "0ca7fff0ad47421a80beb454f1c148bf"
  },
  {
    "url": "php/laravel/index.html",
    "revision": "692108d2bc61409ae2304dbf28bd1163"
  },
  {
    "url": "php/laravel/package-development/index.html",
    "revision": "d1b28cdcdc1f0f2a3de7e3c69c5ad733"
  },
  {
    "url": "php/laravel/package-development/laravel-packager.html",
    "revision": "29af2cd7fb8a343bd9bceeecd76a5240"
  },
  {
    "url": "php/laravel/package-development/views.html",
    "revision": "f8e1831b2972dded40376020480fc0a6"
  },
  {
    "url": "php/laravel/packages/guides/index.html",
    "revision": "a72b6f8186b83504333a90412dee40fa"
  },
  {
    "url": "php/laravel/packages/guides/laravel-pint.html",
    "revision": "7aa9e8f3e5ef127d361de72dbd4a3117"
  },
  {
    "url": "php/laravel/packages/guides/spatie-activity-log.html",
    "revision": "be260fd11373ec5c60a515361c5f1306"
  },
  {
    "url": "php/laravel/packages/guides/spatie-comments.html",
    "revision": "ea407f681ce95bc1b18662bd2156fecb"
  },
  {
    "url": "php/laravel/packages/guides/spatie-feed.html",
    "revision": "19d07bb898d501c3fadf92dd98a22edf"
  },
  {
    "url": "php/laravel/packages/guides/spatie-media-library.html",
    "revision": "22bc614221f9a3b6f214cb1d28c7fc46"
  },
  {
    "url": "php/laravel/packages/guides/spatie-permissions.html",
    "revision": "5ca01f20aa126ddfda696f587ffcee79"
  },
  {
    "url": "php/laravel/packages/guides/spatie-query-builder.html",
    "revision": "374c2191d16f410a29b25325f3403b4a"
  },
  {
    "url": "php/laravel/packages/guides/spatie-settings.html",
    "revision": "b0a73b52f6f55c28b118af0d82f24bae"
  },
  {
    "url": "php/laravel/packages/index.html",
    "revision": "9c9e917ac8f216e0b210f6b59b9c17a6"
  },
  {
    "url": "php/laravel/pipelines.html",
    "revision": "602a05fe93101e112ccd23633969fdfc"
  },
  {
    "url": "php/laravel/policies.html",
    "revision": "a98ef128ff01f8de27bb3dd20f62581c"
  },
  {
    "url": "php/laravel/relationships/belongs-to-many.html",
    "revision": "8c4e8581797dd44e9488cbff54fccf2f"
  },
  {
    "url": "php/laravel/relationships/index.html",
    "revision": "39fcd496d2e4d416dbee7abea021646e"
  },
  {
    "url": "php/laravel/relationships/many-to-many.html",
    "revision": "9b106c37cc015bb9961f26cedab472f2"
  },
  {
    "url": "php/laravel/routes.html",
    "revision": "b061667f0735b2a89e5d53eba16105ed"
  },
  {
    "url": "php/laravel/task-scheduling.html",
    "revision": "39da445fca8bb67d881f63c226dfa91a"
  },
  {
    "url": "php/laravel/testing/controller-methods.html",
    "revision": "4626c70f6dea03fa70af85133d31bba7"
  },
  {
    "url": "php/laravel/testing/index.html",
    "revision": "089bc1d3e10512722beb8b54fd19e0f9"
  },
  {
    "url": "php/laravel/tinker/index.html",
    "revision": "60713f2551f0bb3e17590c6a2c62cb23"
  },
  {
    "url": "php/laravel/traits/index.html",
    "revision": "1320197502a58ae4441af92485ff9eb7"
  },
  {
    "url": "php/laravel/traits/scopes.html",
    "revision": "4cec1ce1728d0f7d192dda0465618902"
  },
  {
    "url": "php/laravel/validation/form-request.html",
    "revision": "e61dcae9a9bd847a0664d46dbc0c6f87"
  },
  {
    "url": "php/laravel/validation/index.html",
    "revision": "bbc6643ddd93eb1c57e3eb9b92c19d68"
  },
  {
    "url": "php/laravel/validation/validation-rules.html",
    "revision": "a45dc20392b6574709e3a720ea7aae17"
  },
  {
    "url": "php/laravel/views.html",
    "revision": "464d3c5e5b8dd193b750becf94a4d342"
  },
  {
    "url": "php/nova/fields.html",
    "revision": "b4ede8378f31a224bb83e52a1d44eb45"
  },
  {
    "url": "tools/database.html",
    "revision": "7f56a71d483a0fcdf2f9945d05ad98dc"
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
