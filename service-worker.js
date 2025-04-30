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
    "revision": "278cf6d93116ccf86690ecb385826669"
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
    "url": "assets/js/23.81345275.js",
    "revision": "e9849da86953ad2d60415ae8be842a4e"
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
    "url": "assets/js/30.ed6f8937.js",
    "revision": "46e8307d777bd8d449f9ac19e1b26ebb"
  },
  {
    "url": "assets/js/31.568bc97d.js",
    "revision": "f54026c8c9f43d51415a778412656a9c"
  },
  {
    "url": "assets/js/32.f0806d76.js",
    "revision": "dbc4ffdc55cc6ce8c71c0aa2e7a1c265"
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
    "url": "assets/js/37.88f9b814.js",
    "revision": "573f63dac70a2c0c51afd3129c2a0b1d"
  },
  {
    "url": "assets/js/38.844b4e09.js",
    "revision": "a5682c42bd4598885e0aa51807243752"
  },
  {
    "url": "assets/js/39.fddbc394.js",
    "revision": "303ad24018a4278ea47d6698a77b5fcb"
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
    "url": "assets/js/42.0d55b5a6.js",
    "revision": "37e5a93d3dc9f572d01e45a460b21474"
  },
  {
    "url": "assets/js/43.769c994f.js",
    "revision": "bd98265d1e8448329b4f5a2c231ef4fe"
  },
  {
    "url": "assets/js/44.10ebc343.js",
    "revision": "a66a3fd616cda3b3c6cc8cfff88215dc"
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
    "url": "assets/js/47.2313d249.js",
    "revision": "88feade3f1cde6a7cbae772f0ad84fd7"
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
    "url": "assets/js/51.795e5622.js",
    "revision": "f2051fe1460207956d38f82d77583395"
  },
  {
    "url": "assets/js/52.a25ee263.js",
    "revision": "a5cfedbbcff50b9a79acb2628556fd38"
  },
  {
    "url": "assets/js/53.04cc3ff5.js",
    "revision": "baec6d72fb3d5b50adaa78eda353c219"
  },
  {
    "url": "assets/js/54.1b040397.js",
    "revision": "83fb7f461bd6626ee612adccbca1d107"
  },
  {
    "url": "assets/js/55.d3bbbb2b.js",
    "revision": "2867c8f4cbab30aa071457f6e613bdf2"
  },
  {
    "url": "assets/js/56.91966d50.js",
    "revision": "c6ed6efa35d1050bd24a5d5fbe21eccc"
  },
  {
    "url": "assets/js/57.0e97765c.js",
    "revision": "8a6fae9b84c481cfff005d44cbd76371"
  },
  {
    "url": "assets/js/58.eea2b82e.js",
    "revision": "d985b116b49350609e3418fb1069c7db"
  },
  {
    "url": "assets/js/59.7d4963a6.js",
    "revision": "13ad36cb5614ed9a755cfbc1ae3b2ebe"
  },
  {
    "url": "assets/js/6.d1e97dd3.js",
    "revision": "276aafaee8cddcfd9c1a37f4373cdee1"
  },
  {
    "url": "assets/js/60.be65ce27.js",
    "revision": "fa8e48db504feaba113fb9a58f667f40"
  },
  {
    "url": "assets/js/61.a1155aed.js",
    "revision": "376f51e6f247260474baed0b555abdd1"
  },
  {
    "url": "assets/js/62.4f12637d.js",
    "revision": "84e94cabff5a5206a0b1b178b01645db"
  },
  {
    "url": "assets/js/63.ac70f371.js",
    "revision": "8bcdf4865978fdb78b22c9653e3e8723"
  },
  {
    "url": "assets/js/64.62d98e62.js",
    "revision": "4a6170b4bc3b80968a5b80c7da9c433a"
  },
  {
    "url": "assets/js/65.1f34961c.js",
    "revision": "d614a5613cc5ef0d66a80329ad5027d7"
  },
  {
    "url": "assets/js/66.3a65ba73.js",
    "revision": "4aaefb6e199c56670414961944724a02"
  },
  {
    "url": "assets/js/67.02363025.js",
    "revision": "9dbeeddc530ab4a35cb329ee9a13f05d"
  },
  {
    "url": "assets/js/68.19b6fbd2.js",
    "revision": "9391cbc15c013855c10bcb581171a12d"
  },
  {
    "url": "assets/js/69.d931e2c3.js",
    "revision": "79a9da60fafd82b07b9ea911d48f764f"
  },
  {
    "url": "assets/js/7.b7c0f320.js",
    "revision": "9acf1f8f90fc9fdda8c7859dea8299f8"
  },
  {
    "url": "assets/js/70.62fabc4d.js",
    "revision": "2c44f8385a053f60ddd1d60dad1678ea"
  },
  {
    "url": "assets/js/71.13ceaf2e.js",
    "revision": "558bf5c037e26575ac28ba8529278aeb"
  },
  {
    "url": "assets/js/72.6020ef51.js",
    "revision": "db029b9bb7e515a2da03dcbaece3d461"
  },
  {
    "url": "assets/js/73.8b64f3aa.js",
    "revision": "9feb0e6a2f38c82b6b34484ca37072c3"
  },
  {
    "url": "assets/js/74.63699b84.js",
    "revision": "7a3089b481a067babeeeb2448e8eb064"
  },
  {
    "url": "assets/js/75.1745c293.js",
    "revision": "99eb38bea4c02c7f520d4dbecc61cd27"
  },
  {
    "url": "assets/js/76.f15ca7ae.js",
    "revision": "f786167b084b75f032d79fe52c12b9a8"
  },
  {
    "url": "assets/js/77.c7755bac.js",
    "revision": "d7d198df143d3c26ec23ea0d87319e43"
  },
  {
    "url": "assets/js/78.a68ca6d5.js",
    "revision": "86009774a0e5f8f1d7cebceb9d24d423"
  },
  {
    "url": "assets/js/79.ad795c3d.js",
    "revision": "817e8ae8a8e083dc8950a52b1107ae63"
  },
  {
    "url": "assets/js/80.4b89b933.js",
    "revision": "5b792987be8b7f90b79f4715b2b915b7"
  },
  {
    "url": "assets/js/81.eb8b6558.js",
    "revision": "0c354ebb0a93ec3671956d7cbf8b1a69"
  },
  {
    "url": "assets/js/82.319b54f7.js",
    "revision": "ac9f006ccedf290b280e86f7f5fc2776"
  },
  {
    "url": "assets/js/83.120d52b4.js",
    "revision": "9f6ba0e3d02e985a35a483f645614c11"
  },
  {
    "url": "assets/js/84.a3621771.js",
    "revision": "154abef9bc3b0a5991288eb4a03a2c3d"
  },
  {
    "url": "assets/js/85.0b19e476.js",
    "revision": "9b88157ac5220f957c7c6561aec9bb33"
  },
  {
    "url": "assets/js/86.57fc3b5c.js",
    "revision": "52f9948c40434342fa5a4004f28f09c4"
  },
  {
    "url": "assets/js/87.2fdc3e0f.js",
    "revision": "97e2ee660ed9631a167b9722f644c61e"
  },
  {
    "url": "assets/js/88.69523916.js",
    "revision": "63e8d4434fa2d69987627053ecf72277"
  },
  {
    "url": "assets/js/89.16d89f42.js",
    "revision": "93c5a00a97829e63701184a56e84d1a3"
  },
  {
    "url": "assets/js/90.ef687a2b.js",
    "revision": "846333631fdcf6430e49c876076fc132"
  },
  {
    "url": "assets/js/91.06d03eaf.js",
    "revision": "750289aacca8d46713a82b21038babd7"
  },
  {
    "url": "assets/js/92.a22c6972.js",
    "revision": "c4ebfd2309ef319f124290ee767a06d5"
  },
  {
    "url": "assets/js/app.4b5b4338.js",
    "revision": "38141480ec78958d9e8cf80b0b1ba4a1"
  },
  {
    "url": "assets/js/vendors~docsearch.6fed1ae2.js",
    "revision": "2ef16c7549a2197852a96e854981a5c7"
  },
  {
    "url": "draft/quick-notes.html",
    "revision": "50bb140759817e505a7b3336f2a5226c"
  },
  {
    "url": "html/bootstrap/cards.html",
    "revision": "27bfd6d1dbb518d2bec0ca7edc7bc642"
  },
  {
    "url": "html/bootstrap/forms/checks-radios.html",
    "revision": "a4746ee02c6f34c0511a405b56db5d63"
  },
  {
    "url": "html/bootstrap/forms/floating-labels.html",
    "revision": "533fce4c7d539fe5016ae9e9e6a813a9"
  },
  {
    "url": "html/bootstrap/forms/form-control.html",
    "revision": "bc83bda532a4183e1a6a65feaa65b299"
  },
  {
    "url": "html/bootstrap/forms/index.html",
    "revision": "a396a0caffd07ab3daffff0ee2f4d66d"
  },
  {
    "url": "html/bootstrap/forms/layout.html",
    "revision": "798844297f301dec6988726e78e3d2d8"
  },
  {
    "url": "html/bootstrap/forms/select.html",
    "revision": "9c6a33fdc01d0f22d10d50fac53df545"
  },
  {
    "url": "html/bootstrap/forms/validation.html",
    "revision": "90a16fd9e031496e77190cef3a3ac440"
  },
  {
    "url": "html/bootstrap/index.html",
    "revision": "84071f44afba5ce34757a4cbfad6d03e"
  },
  {
    "url": "html/bootstrap/tables.html",
    "revision": "cb17e17364235c58e4b53824a4e255db"
  },
  {
    "url": "html/tailwind/customization/index.html",
    "revision": "f7003e8f6ca2833deb4f3bbc5622d7f0"
  },
  {
    "url": "html/tailwind/customization/presets.html",
    "revision": "2b0f8a428fd15f1e7c7c4ef2df3dc71d"
  },
  {
    "url": "html/tailwind/directives.html",
    "revision": "eb8279f7bce0996b8998f078e670b6ba"
  },
  {
    "url": "html/tailwind/index.html",
    "revision": "f725841a573baa9e320b71cf530c5ebc"
  },
  {
    "url": "htmx/index.html",
    "revision": "1b064801ae3eb634b15886e109c1bbcf"
  },
  {
    "url": "index.html",
    "revision": "0bd60455c7e98071dfab093b34dc1c2c"
  },
  {
    "url": "javascript/alpinejs/index.html",
    "revision": "a8f987c00afa466cd514ef819fd32481"
  },
  {
    "url": "javascript/alpinejs/textarea.html",
    "revision": "b06b3a384080ae31ac42d926a9d238d1"
  },
  {
    "url": "javascript/modules.html",
    "revision": "09908072b5a912445f4c7eb14af2e667"
  },
  {
    "url": "livewire/components/index.html",
    "revision": "78d618971c7e0f19545420a36d823f40"
  },
  {
    "url": "livewire/components/pagination.html",
    "revision": "cc118318e3cc167b425cd4174ab563cb"
  },
  {
    "url": "livewire/installation.html",
    "revision": "d62ef87f1e8b908c45b0a90dd0d16bcf"
  },
  {
    "url": "other/priority-levels.html",
    "revision": "1f43553908550ad7356a5d3db105402a"
  },
  {
    "url": "other/static-site-generators.html",
    "revision": "ca3d2e8727e334782be499cc1f01c827"
  },
  {
    "url": "php/arrays/sorting-arrays.html",
    "revision": "253fd0f5a1663a705fc79e9c8a2dcb1d"
  },
  {
    "url": "php/classes/pagination.html",
    "revision": "df42d3727f24b33b1c86d8085309b376"
  },
  {
    "url": "php/classes/pdo.html",
    "revision": "55ee17f283d270d429db6242df615ea8"
  },
  {
    "url": "php/laravel/blade/components.html",
    "revision": "c8ca31c3c6cbe26178436ec04d8f7d7b"
  },
  {
    "url": "php/laravel/blade/directives.html",
    "revision": "3c0511f264f09dd356aa3f4885f9103a"
  },
  {
    "url": "php/laravel/blade/index.html",
    "revision": "d48f93ad97780b1e9aa76bc4e7112d63"
  },
  {
    "url": "php/laravel/controller.html",
    "revision": "7e929281c75681e0bf17ed0e8c85000c"
  },
  {
    "url": "php/laravel/database/factories.html",
    "revision": "c58a8708ff77f7f166e4934d79177c19"
  },
  {
    "url": "php/laravel/database/index.html",
    "revision": "d5c45af0fc529c5a751bcb839185a6dd"
  },
  {
    "url": "php/laravel/database/migrations.html",
    "revision": "e86f51f5b115474c934a7d13e00540a8"
  },
  {
    "url": "php/laravel/database/model.html",
    "revision": "151864aaf26f2402d910f0fb451ab646"
  },
  {
    "url": "php/laravel/database/observer.html",
    "revision": "f311a3a1567e0cc22404584522217313"
  },
  {
    "url": "php/laravel/database/queries.html",
    "revision": "434761911fe23bb34750510b8545071e"
  },
  {
    "url": "php/laravel/database/scopes.html",
    "revision": "4384e029f1dba04789c33886212a9eaf"
  },
  {
    "url": "php/laravel/database/seeders.html",
    "revision": "efbb9972f7dc7229477562115b6fcf2e"
  },
  {
    "url": "php/laravel/enums.html",
    "revision": "393fd6f465ad5b409800f85f18e6c367"
  },
  {
    "url": "php/laravel/index.html",
    "revision": "6db13aa0de3bf5a64bab395681ad9305"
  },
  {
    "url": "php/laravel/package-development/index.html",
    "revision": "61d23c56dadcda84d903c3bae5a367b2"
  },
  {
    "url": "php/laravel/package-development/laravel-packager.html",
    "revision": "8cd0155fa582150698dc03a282680feb"
  },
  {
    "url": "php/laravel/package-development/views.html",
    "revision": "5cfd0d58f2c96753c7c49633f1b98464"
  },
  {
    "url": "php/laravel/packages/guides/index.html",
    "revision": "59724eb4877c13a3a8e6b89292fc94db"
  },
  {
    "url": "php/laravel/packages/guides/spatie-activity-log.html",
    "revision": "5ab1bcf640738bdc1266c9d0f12027c5"
  },
  {
    "url": "php/laravel/packages/guides/spatie-comments.html",
    "revision": "df35bc2446fb5e7aa5507165de993204"
  },
  {
    "url": "php/laravel/packages/guides/spatie-feed.html",
    "revision": "2baf4b750400bf61fe0919f273e7cbd4"
  },
  {
    "url": "php/laravel/packages/guides/spatie-media-library.html",
    "revision": "fb609c9639aba75dd88a40d95358a91b"
  },
  {
    "url": "php/laravel/packages/guides/spatie-permissions.html",
    "revision": "5bb9641759c06ad51c273f95d5a027f1"
  },
  {
    "url": "php/laravel/packages/guides/spatie-query-builder.html",
    "revision": "fb2a65cc4645805069b380e162fe86d0"
  },
  {
    "url": "php/laravel/packages/guides/spatie-settings.html",
    "revision": "4be66eac9a71a1f19382b2df89c6e12e"
  },
  {
    "url": "php/laravel/packages/index.html",
    "revision": "fbde2214bf6dc82136646a12e6c1e7e2"
  },
  {
    "url": "php/laravel/policies.html",
    "revision": "be43c4a54c777300ed0acf38d725de68"
  },
  {
    "url": "php/laravel/relationships/belongs-to-many.html",
    "revision": "6fb430789d524e967448aa014cc50f8f"
  },
  {
    "url": "php/laravel/relationships/index.html",
    "revision": "e7b31297f67502bf8982d48616dd9543"
  },
  {
    "url": "php/laravel/relationships/many-to-many.html",
    "revision": "9e7f5361d780597fcbeec1787fc16b7f"
  },
  {
    "url": "php/laravel/routes.html",
    "revision": "5572eecb2c8f55d5fa084dc6c3f89fca"
  },
  {
    "url": "php/laravel/testing/controller-methods.html",
    "revision": "345ec081ace68ff7121ee7c3b3990345"
  },
  {
    "url": "php/laravel/testing/index.html",
    "revision": "ef19a453474931cc84632f40f262cc19"
  },
  {
    "url": "php/laravel/tinker/index.html",
    "revision": "1489b04bf9175c2f9a1f9ed6ca849d8a"
  },
  {
    "url": "php/laravel/traits/index.html",
    "revision": "6a310577e681011f0912475ecd1a853b"
  },
  {
    "url": "php/laravel/traits/scopes.html",
    "revision": "cf7a133e3b7a6c7db5b283a6684117cb"
  },
  {
    "url": "php/laravel/validation/form-request.html",
    "revision": "be1f3f03bc73aeee0d2419f01aed592f"
  },
  {
    "url": "php/laravel/validation/index.html",
    "revision": "fdd6ba6bdbebfed19e101f11f9cfbc90"
  },
  {
    "url": "php/laravel/validation/validation-rules.html",
    "revision": "6a6a47ac867d983169a3faf50188c213"
  },
  {
    "url": "php/laravel/views.html",
    "revision": "03e0ee316e91c4fea2de2337e665bf8c"
  },
  {
    "url": "php/nova/fields.html",
    "revision": "af59d4afed8ec397505989fa9e6a1dd1"
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
