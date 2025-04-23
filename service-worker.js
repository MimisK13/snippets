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
    "revision": "bc01cc57fc7b4263faac20f85b4a1e4a"
  },
  {
    "url": "assets/css/0.styles.edec117a.css",
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
    "url": "assets/js/1.f7d42f4b.js",
    "revision": "4d47a5a15e1dc79ffbbd43f9adca1f77"
  },
  {
    "url": "assets/js/10.79c10aeb.js",
    "revision": "24bebb1329573b0d9bbdc18678e831f4"
  },
  {
    "url": "assets/js/11.8b1107ef.js",
    "revision": "00e01fcd9604eb85c9a8fc32c5ad081a"
  },
  {
    "url": "assets/js/12.37886d90.js",
    "revision": "2142eb8d77d8e689df97826c45c0f7fe"
  },
  {
    "url": "assets/js/13.3dee2393.js",
    "revision": "0df2ebee42c173ffa6637090533d7586"
  },
  {
    "url": "assets/js/14.04a3dffe.js",
    "revision": "3e42da4cc1fea125b4dec0ff108bc4f1"
  },
  {
    "url": "assets/js/15.2afa183f.js",
    "revision": "36328a2df284e94a1a54221155f2bb4e"
  },
  {
    "url": "assets/js/16.1fb096cd.js",
    "revision": "038261013face4343f66e8aa8b105c90"
  },
  {
    "url": "assets/js/17.51642933.js",
    "revision": "92ba6f639d528640b2b9374ddb959622"
  },
  {
    "url": "assets/js/18.75b95481.js",
    "revision": "f4c3846bf1dee6714d1e8c1fcbbf51ae"
  },
  {
    "url": "assets/js/19.b3b0e005.js",
    "revision": "ab3b600f46dae1d1ca3386a57b7b282c"
  },
  {
    "url": "assets/js/2.95ae72b9.js",
    "revision": "b0471e08a67d2226d3efe7537febabff"
  },
  {
    "url": "assets/js/20.319f7984.js",
    "revision": "9eb062c0820e0e36539093231dccc1e9"
  },
  {
    "url": "assets/js/21.dc41a338.js",
    "revision": "d8205a517248a936932a56702ee854d1"
  },
  {
    "url": "assets/js/22.e9004e12.js",
    "revision": "708aa04563a0973dcaf57095ec3f1218"
  },
  {
    "url": "assets/js/23.07e99d52.js",
    "revision": "474886b8b4c9e86cf7b337f714bfa3da"
  },
  {
    "url": "assets/js/24.d1015dbc.js",
    "revision": "e4ce5c7be034852faf27674c4f01a7b2"
  },
  {
    "url": "assets/js/25.c57fc350.js",
    "revision": "493cd42b2d29d1fa635eeade48af33fb"
  },
  {
    "url": "assets/js/26.6f3e6feb.js",
    "revision": "25ccb239beac7d0299c12a60390a3400"
  },
  {
    "url": "assets/js/27.6dcd8e74.js",
    "revision": "fa731e7c32eec8780ec46477a56d43b1"
  },
  {
    "url": "assets/js/28.7946d4e9.js",
    "revision": "4b0c8b87a042a131492d1b358796782d"
  },
  {
    "url": "assets/js/29.0db6832b.js",
    "revision": "3cdda7710b265658216c27b0553e656d"
  },
  {
    "url": "assets/js/3.0f93d13b.js",
    "revision": "c73ed72469e458a5cc29bbce3cd1ff34"
  },
  {
    "url": "assets/js/30.49839bcf.js",
    "revision": "22966c89ea1ef169d50c4a63cdfcec62"
  },
  {
    "url": "assets/js/31.5e767e3e.js",
    "revision": "cb9b3a69b325bed4103dfcb49f630a83"
  },
  {
    "url": "assets/js/32.5c1b796b.js",
    "revision": "b2319597e9b9038a04e68244590ffe30"
  },
  {
    "url": "assets/js/33.25961b77.js",
    "revision": "7bf84861932db63e481887a625c331a6"
  },
  {
    "url": "assets/js/34.a6995060.js",
    "revision": "88d388dd05b8594fe5463f0b6350515c"
  },
  {
    "url": "assets/js/35.704bd094.js",
    "revision": "91e0b049acd0a8630a9130a955ab75d5"
  },
  {
    "url": "assets/js/36.647b2e69.js",
    "revision": "25224ac1efe1ef1099f268f389a4dfec"
  },
  {
    "url": "assets/js/37.cc87a98e.js",
    "revision": "8a3cb0b5245a0b1a607df5ba620413a8"
  },
  {
    "url": "assets/js/38.9d68dd08.js",
    "revision": "26fad6cf1c0cc4ac90612df2080c0798"
  },
  {
    "url": "assets/js/39.679fb3b0.js",
    "revision": "9e50f2dbfd6c7a9f035c8e6bf39ca652"
  },
  {
    "url": "assets/js/4.ba20a71a.js",
    "revision": "57c71c489d53aa15ebb8e9e2f321ccda"
  },
  {
    "url": "assets/js/40.8dd3577a.js",
    "revision": "c172e1adffd4be91707a7bac6d78c74b"
  },
  {
    "url": "assets/js/41.d0685363.js",
    "revision": "994a98eca39d13d15ec2956bfa6b0421"
  },
  {
    "url": "assets/js/42.fda084ea.js",
    "revision": "a72e2b03466dc998ec50a315fa451808"
  },
  {
    "url": "assets/js/43.5ee207fa.js",
    "revision": "93eccfb58273786ff6fa2f557347ca09"
  },
  {
    "url": "assets/js/44.c46f9414.js",
    "revision": "108bbf752b9fbd0ad9fd8507f1c9444c"
  },
  {
    "url": "assets/js/45.126a6569.js",
    "revision": "3392bc00adb9af9c6d62783460846239"
  },
  {
    "url": "assets/js/46.f1d2228e.js",
    "revision": "a47216b6e553d191f06ec88863d048bb"
  },
  {
    "url": "assets/js/47.9624954c.js",
    "revision": "c72d6053a8ecaa727f462b2c2670cdf8"
  },
  {
    "url": "assets/js/48.7e9b5231.js",
    "revision": "1a2e4dfeb134d51798d273794861e217"
  },
  {
    "url": "assets/js/49.0af2afef.js",
    "revision": "24e257e3ec8113c3b27da943b1aa91d5"
  },
  {
    "url": "assets/js/5.5f56e599.js",
    "revision": "cd727eea6383170f890c3718ead88269"
  },
  {
    "url": "assets/js/50.fb9b9cb3.js",
    "revision": "2162e32344f4f29f6336608e05b91614"
  },
  {
    "url": "assets/js/51.fa2df048.js",
    "revision": "946e765039b9a20f4839147106b9050c"
  },
  {
    "url": "assets/js/52.639ec4c2.js",
    "revision": "de42de55cb1f4fab0d0d1d8f06ef9700"
  },
  {
    "url": "assets/js/53.b4a3f396.js",
    "revision": "f885feace2bbeb778a545f2387517f66"
  },
  {
    "url": "assets/js/54.5e77814f.js",
    "revision": "c2dee7bf652e4fd1785db8d172b3e25c"
  },
  {
    "url": "assets/js/55.5779c848.js",
    "revision": "e20ff332b19aeaa27d1d791f2d859599"
  },
  {
    "url": "assets/js/56.ff1d9a58.js",
    "revision": "a9914c31e31a9f44792cf357582d0829"
  },
  {
    "url": "assets/js/57.4c3ee90e.js",
    "revision": "9f4d07666d1fb22281ddb66c704e5af4"
  },
  {
    "url": "assets/js/58.0ad5befe.js",
    "revision": "2321fc2a8040f398ae3226a7c3d42f1b"
  },
  {
    "url": "assets/js/59.d83b64cc.js",
    "revision": "3b839f456b49bcff884448c62f817c68"
  },
  {
    "url": "assets/js/6.7eac5493.js",
    "revision": "ef204e8d9470c24f49d1a5e2b003603d"
  },
  {
    "url": "assets/js/60.8477269d.js",
    "revision": "49d865c044c23c5f45847b724675c376"
  },
  {
    "url": "assets/js/61.3fb28e9a.js",
    "revision": "7069d63bb237cf5acd538b595790f3a8"
  },
  {
    "url": "assets/js/62.4bf3d807.js",
    "revision": "1ac272593f8f975797c020c5edc1bb41"
  },
  {
    "url": "assets/js/63.1a5b8ee4.js",
    "revision": "1151be0e63ee012aa2e1afc014a27cf6"
  },
  {
    "url": "assets/js/64.3bf66017.js",
    "revision": "b73ea0c7de354422f730b19286c39d40"
  },
  {
    "url": "assets/js/65.387316f4.js",
    "revision": "47cddf9fd1e1b37e5b8ebbe094c91621"
  },
  {
    "url": "assets/js/66.af688b41.js",
    "revision": "00ba4cedfc206251fcbccac03c9fedaa"
  },
  {
    "url": "assets/js/67.01a30c55.js",
    "revision": "3c84001bee278f474d03995210351bcb"
  },
  {
    "url": "assets/js/68.7cbeddbc.js",
    "revision": "57edc9ec22f7877fb762bf879f1dc187"
  },
  {
    "url": "assets/js/69.54f69a19.js",
    "revision": "1c9ccf2bb4b3e7ca3995b536c5c66c5d"
  },
  {
    "url": "assets/js/7.a44acbec.js",
    "revision": "9ead157c5b41c494b5a7be001cc380dd"
  },
  {
    "url": "assets/js/70.d4719d07.js",
    "revision": "1e62f4f5e16c5ffd940b7081502a3b53"
  },
  {
    "url": "assets/js/71.d9e36a4d.js",
    "revision": "abebd7a20c59f12627eb440f80d6cade"
  },
  {
    "url": "assets/js/72.ba79a55a.js",
    "revision": "2d40425c44841117f5de655a150863af"
  },
  {
    "url": "assets/js/73.c3892810.js",
    "revision": "7822268c1420f832788e6fd438733617"
  },
  {
    "url": "assets/js/74.23c4945d.js",
    "revision": "c1da4985d5f5d4298c4b55aee8f08b14"
  },
  {
    "url": "assets/js/75.224dcc86.js",
    "revision": "0382b10c4287bd506a5f97afe860619c"
  },
  {
    "url": "assets/js/76.efc42946.js",
    "revision": "174f5cf249709fe85146fd2fbd851f8c"
  },
  {
    "url": "assets/js/77.42205ef4.js",
    "revision": "59b4a84558112191ef5246a9ac63853f"
  },
  {
    "url": "assets/js/78.b8606ce0.js",
    "revision": "e2a80725fd4530bb430258148ccb4ef3"
  },
  {
    "url": "assets/js/79.6d59e856.js",
    "revision": "3c726789bf7a9d1da8c5192a0301b13a"
  },
  {
    "url": "assets/js/80.dfa6f81c.js",
    "revision": "ea97c3a4acefb78bac033e78f9b7ddfd"
  },
  {
    "url": "assets/js/81.56b373af.js",
    "revision": "e23f468a816e68f7890c265f2351b0de"
  },
  {
    "url": "assets/js/82.9764bea4.js",
    "revision": "8eb41ffe77438b3175465fe7468a15e9"
  },
  {
    "url": "assets/js/83.8f4bdc2d.js",
    "revision": "90abd8c853e6e3fe3b5318f2a6ff1d75"
  },
  {
    "url": "assets/js/84.039b7f00.js",
    "revision": "c07568207aabc38d997c32eaf148352d"
  },
  {
    "url": "assets/js/85.4ba376d9.js",
    "revision": "e1ae5332187e2ffec58a24128913a2d3"
  },
  {
    "url": "assets/js/86.31a3b9ab.js",
    "revision": "df28f15feee08f00ee4f9c6b7eaae817"
  },
  {
    "url": "assets/js/87.75b76140.js",
    "revision": "d3add38a12f9479df1ef5d7538c5e788"
  },
  {
    "url": "assets/js/88.5a809b6a.js",
    "revision": "d8d262e93915b338ca1491ea98716006"
  },
  {
    "url": "assets/js/89.a34d2ffa.js",
    "revision": "18bda7bd343b2e1de0291fbc69410843"
  },
  {
    "url": "assets/js/90.1a70c5f1.js",
    "revision": "b30275d80e5f8fd8b3e26a2c2316a23c"
  },
  {
    "url": "assets/js/91.b6df39ce.js",
    "revision": "e2b3744b0b5ffaf234d2aeab9228171c"
  },
  {
    "url": "assets/js/app.c702d816.js",
    "revision": "b16375ff1fe94b698ae167a46fb1e0a3"
  },
  {
    "url": "assets/js/vendors~docsearch.969cea78.js",
    "revision": "263550575d0bea08c0d5156df905a730"
  },
  {
    "url": "draft/quick-notes.html",
    "revision": "bcbb4044e3bf868a80c8d7ab06f4af99"
  },
  {
    "url": "html/bootstrap/cards.html",
    "revision": "1464186b01e05c3294ba3d578a0e7cc8"
  },
  {
    "url": "html/bootstrap/forms/checks-radios.html",
    "revision": "db5a7774b664cce9719ffa9911a99d38"
  },
  {
    "url": "html/bootstrap/forms/floating-labels.html",
    "revision": "5585bab3982218276e5083eafb47a758"
  },
  {
    "url": "html/bootstrap/forms/form-control.html",
    "revision": "038ef57ef20cfacb1a44a779f13d30ff"
  },
  {
    "url": "html/bootstrap/forms/index.html",
    "revision": "256de63840a7b5e1031201dbe0263cb9"
  },
  {
    "url": "html/bootstrap/forms/layout.html",
    "revision": "4e66879e9b6a4c28343eedd91066afcc"
  },
  {
    "url": "html/bootstrap/forms/select.html",
    "revision": "cb1a80618a56df211dfa234bf4dfba19"
  },
  {
    "url": "html/bootstrap/forms/validation.html",
    "revision": "d0a98018253cfa9b45444f933d030f84"
  },
  {
    "url": "html/bootstrap/index.html",
    "revision": "007c410758ba99f7fb3494127f2ba227"
  },
  {
    "url": "html/bootstrap/tables.html",
    "revision": "cb1f0246c2a446a6b76c4ffae86af5e5"
  },
  {
    "url": "html/tailwind/customization/index.html",
    "revision": "0cfeba3e3eac1176f28a47f02211d2d2"
  },
  {
    "url": "html/tailwind/customization/presets.html",
    "revision": "35b42263a90c664ddeb554a03598e96d"
  },
  {
    "url": "html/tailwind/directives.html",
    "revision": "195e1f448ba934ffaeaa50d0189c6706"
  },
  {
    "url": "html/tailwind/index.html",
    "revision": "554ec2131236d45f0d6988b0fc44f81b"
  },
  {
    "url": "index.html",
    "revision": "683ca9372e6edf6bba2ba9968e84bf28"
  },
  {
    "url": "javascript/alpinejs/index.html",
    "revision": "c615c0cd0f25babcfbb61a4a98c72f85"
  },
  {
    "url": "javascript/alpinejs/textarea.html",
    "revision": "e367b8b83ad235de4fd763a166103187"
  },
  {
    "url": "javascript/modules.html",
    "revision": "174e799877433ee188391aa0705ad21a"
  },
  {
    "url": "livewire/components/index.html",
    "revision": "c934a646c5298f95219d6a65c4496572"
  },
  {
    "url": "livewire/components/pagination.html",
    "revision": "f257d20e6d805d8ec1209d48e0d35db3"
  },
  {
    "url": "livewire/installation.html",
    "revision": "7e39a9d01c89c93a3541356e54998363"
  },
  {
    "url": "other/priority-levels.html",
    "revision": "d66756e1e87b185f1bf8876fba400f8c"
  },
  {
    "url": "other/static-site-generators.html",
    "revision": "98fa2b393f6edfa1702645d555785a42"
  },
  {
    "url": "php/arrays/sorting-arrays.html",
    "revision": "bcfb0c738c3d7f0fc89bc42cf43eea14"
  },
  {
    "url": "php/classes/pagination.html",
    "revision": "8a9d9c4ed94a398a2ad157474dc940fc"
  },
  {
    "url": "php/classes/pdo.html",
    "revision": "45fa5f66f4c28c96b55957b8ced379cc"
  },
  {
    "url": "php/laravel/blade/components.html",
    "revision": "283b696932da207926cf312817e1100b"
  },
  {
    "url": "php/laravel/blade/directives.html",
    "revision": "a38e4f669a3e99f6cf9079450187629f"
  },
  {
    "url": "php/laravel/blade/index.html",
    "revision": "4c79cbcdd0f9c62d62341b8191691086"
  },
  {
    "url": "php/laravel/controller.html",
    "revision": "0a6b97b7484f3971fc362a56e172d486"
  },
  {
    "url": "php/laravel/database/factories.html",
    "revision": "c353bb601b71b6da17a2d27add8b8073"
  },
  {
    "url": "php/laravel/database/index.html",
    "revision": "d0d27e8cf0615c31ed2fd81166838d16"
  },
  {
    "url": "php/laravel/database/migrations.html",
    "revision": "b3e42ad5451d12cd977d56d0fba9914a"
  },
  {
    "url": "php/laravel/database/model.html",
    "revision": "2cb30469bc1f7186b50d281366246813"
  },
  {
    "url": "php/laravel/database/observer.html",
    "revision": "5478dc02921cdf9f0bad2023bb558d9a"
  },
  {
    "url": "php/laravel/database/queries.html",
    "revision": "8a6e01673cae54da43f1dacbf177b7bf"
  },
  {
    "url": "php/laravel/database/scopes.html",
    "revision": "7bdf231b5c34133e647ceaf98c0f02a9"
  },
  {
    "url": "php/laravel/database/seeders.html",
    "revision": "07905f57e2d26e7b62e3f54278f4e872"
  },
  {
    "url": "php/laravel/enums.html",
    "revision": "179c7ad9306f180fafe9c0b7cef76280"
  },
  {
    "url": "php/laravel/index.html",
    "revision": "f303661b8dc5091106a8d60f3613ebcb"
  },
  {
    "url": "php/laravel/package-development/index.html",
    "revision": "ffa090ac8a1ed064fec08d27d5582758"
  },
  {
    "url": "php/laravel/package-development/laravel-packager.html",
    "revision": "ef9a019327133927b5b7bcdad3aafc2b"
  },
  {
    "url": "php/laravel/package-development/views.html",
    "revision": "4ce2ad716ff073efadda8902e3083124"
  },
  {
    "url": "php/laravel/packages/guides/index.html",
    "revision": "996c04089bde43165166dd98b5f9e9b1"
  },
  {
    "url": "php/laravel/packages/guides/spatie-activity-log.html",
    "revision": "10b4c47f296cd52beb4fe0be601f5861"
  },
  {
    "url": "php/laravel/packages/guides/spatie-comments.html",
    "revision": "0cbfbabeab5bd866f88e42588bef16dd"
  },
  {
    "url": "php/laravel/packages/guides/spatie-feed.html",
    "revision": "888c385e68bc0a2f8cb52e77570806b9"
  },
  {
    "url": "php/laravel/packages/guides/spatie-media-library.html",
    "revision": "4926eea11793b4f48e9647e57fec90f4"
  },
  {
    "url": "php/laravel/packages/guides/spatie-permissions.html",
    "revision": "2fe97aea848b59bf181fab7dcff628dc"
  },
  {
    "url": "php/laravel/packages/guides/spatie-query-builder.html",
    "revision": "72a48b7fb770ee86f0bffce04ebe3a65"
  },
  {
    "url": "php/laravel/packages/guides/spatie-settings.html",
    "revision": "97fa9c021c906cf731621099a83092db"
  },
  {
    "url": "php/laravel/packages/index.html",
    "revision": "0db5241275017251503245bf837cfd29"
  },
  {
    "url": "php/laravel/policies.html",
    "revision": "2d4173f1d13a80456d648bb502ee515c"
  },
  {
    "url": "php/laravel/relationships/belongs-to-many.html",
    "revision": "1fb30b1a04fae0b68aea8f04b162e8f1"
  },
  {
    "url": "php/laravel/relationships/index.html",
    "revision": "ad6d2378596e26212bd8d9375b786332"
  },
  {
    "url": "php/laravel/relationships/many-to-many.html",
    "revision": "378de2d747ee68f569957c7a22a8a84c"
  },
  {
    "url": "php/laravel/routes.html",
    "revision": "f791acec32f1706f95e196adf747b44b"
  },
  {
    "url": "php/laravel/testing/controller-methods.html",
    "revision": "4fbad1ae2af1255e3d2288817eb8e0d7"
  },
  {
    "url": "php/laravel/testing/index.html",
    "revision": "cf25a72c49c9715646389b927701d5cb"
  },
  {
    "url": "php/laravel/tinker/index.html",
    "revision": "0c971eef2664b140bb5fbabf56e11320"
  },
  {
    "url": "php/laravel/traits/index.html",
    "revision": "25ab554f9932cd3cb86456c9c1fb9616"
  },
  {
    "url": "php/laravel/traits/scopes.html",
    "revision": "fcf3e5310e86c68d29e96c6d0f1c3594"
  },
  {
    "url": "php/laravel/validation/form-request.html",
    "revision": "d0e6effd487520cda6cb26cee32453c7"
  },
  {
    "url": "php/laravel/validation/index.html",
    "revision": "5c1804df17debc7062323b54be81e6c3"
  },
  {
    "url": "php/laravel/validation/validation-rules.html",
    "revision": "50b005790ffb02c30dbb470a0058838f"
  },
  {
    "url": "php/laravel/views.html",
    "revision": "d3b72ffac2b48b605790ceab47aff940"
  },
  {
    "url": "php/nova/fields.html",
    "revision": "868954b770b26eccbde267d1b032da75"
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
