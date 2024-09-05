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
    "revision": "7f5454aca4293d5507a5d6cac424b13f"
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
    "url": "assets/js/23.e53e6116.js",
    "revision": "07ecea10f8a92456eda11577e712c0e1"
  },
  {
    "url": "assets/js/24.d1015dbc.js",
    "revision": "e4ce5c7be034852faf27674c4f01a7b2"
  },
  {
    "url": "assets/js/25.4a4db53e.js",
    "revision": "6b18e09fa3c1b6b84c64560930d3486b"
  },
  {
    "url": "assets/js/26.08551644.js",
    "revision": "42c77c1ef9fd15ec63692de6e39d403b"
  },
  {
    "url": "assets/js/27.c4b5d858.js",
    "revision": "f2ad3223b2a25e1da1da9d85e14c9528"
  },
  {
    "url": "assets/js/28.d8965b17.js",
    "revision": "105ef5e683aa82e641158037f1603dd1"
  },
  {
    "url": "assets/js/29.93d249db.js",
    "revision": "edd8b9a7bdbf349d73c4ea55be10b547"
  },
  {
    "url": "assets/js/3.0f93d13b.js",
    "revision": "c73ed72469e458a5cc29bbce3cd1ff34"
  },
  {
    "url": "assets/js/30.0ee70d03.js",
    "revision": "a03db978dce693c0e5799165bd7a8fc8"
  },
  {
    "url": "assets/js/31.51335095.js",
    "revision": "625fa5454a316147a7385d3eccf58d04"
  },
  {
    "url": "assets/js/32.05b086ea.js",
    "revision": "74eb630cc77f166a983262288efedd67"
  },
  {
    "url": "assets/js/33.66f12b07.js",
    "revision": "6b62a2ff4c9d3d5c605823a2395faa0d"
  },
  {
    "url": "assets/js/34.b76134d7.js",
    "revision": "905636159da1f466c18ea927c5fb4394"
  },
  {
    "url": "assets/js/35.25b3e9ca.js",
    "revision": "daf607ca81709eb3e2a3a759992f1e7c"
  },
  {
    "url": "assets/js/36.16f1b8d5.js",
    "revision": "ff079137d3203d855747e28e48ac1b5e"
  },
  {
    "url": "assets/js/37.02145f75.js",
    "revision": "f518ab7f71ec24e451bfe411ecbdb388"
  },
  {
    "url": "assets/js/38.fd0d106a.js",
    "revision": "a7d20456f71ca441edbc61ca25e8393b"
  },
  {
    "url": "assets/js/39.54f56add.js",
    "revision": "6f0896ebba2878d180f3d083a4091920"
  },
  {
    "url": "assets/js/4.ba20a71a.js",
    "revision": "57c71c489d53aa15ebb8e9e2f321ccda"
  },
  {
    "url": "assets/js/40.cb0d70bc.js",
    "revision": "0fd00ffbe02ba04909375b983acddd36"
  },
  {
    "url": "assets/js/41.40f6b7a9.js",
    "revision": "6b6f4d2f54eef9f85a1fb294c88afe50"
  },
  {
    "url": "assets/js/42.01fb7cae.js",
    "revision": "7b997624acff384212bfd962783a2d8f"
  },
  {
    "url": "assets/js/43.4d9758df.js",
    "revision": "e1d6fa2a40d7969d04b2a5d4491361dc"
  },
  {
    "url": "assets/js/44.455224ee.js",
    "revision": "d7fd2fd780c5d9677adb2b19e1ed30cc"
  },
  {
    "url": "assets/js/45.70cdb86c.js",
    "revision": "76cfb8b3197ae2bdc25c45d3f1b7ede8"
  },
  {
    "url": "assets/js/46.0a1fdec7.js",
    "revision": "79c6564cd165c5a49314dd74813358bf"
  },
  {
    "url": "assets/js/47.3a56c3f1.js",
    "revision": "f6f10f9267f2603fe59c626f4f7a3a0f"
  },
  {
    "url": "assets/js/48.b4fad5d3.js",
    "revision": "71a015dcb30606891b972ab0898a6c63"
  },
  {
    "url": "assets/js/49.a6e483be.js",
    "revision": "d2ab9d7e98ac73dc4ab2aa98614654cd"
  },
  {
    "url": "assets/js/5.5f56e599.js",
    "revision": "cd727eea6383170f890c3718ead88269"
  },
  {
    "url": "assets/js/50.673ff68a.js",
    "revision": "79c035d88ee84db261b25d16beee7c87"
  },
  {
    "url": "assets/js/51.5fce86c2.js",
    "revision": "fb2dda97d994de050ec1c98a42fe76de"
  },
  {
    "url": "assets/js/52.1ac83632.js",
    "revision": "a888a780e1319f0b92400faf70216fd6"
  },
  {
    "url": "assets/js/53.f6af2b6d.js",
    "revision": "59390e81bb3ea7f0c03528d1ceb81482"
  },
  {
    "url": "assets/js/54.3fdf21f1.js",
    "revision": "a6b3930c5e4f4d27f03131ad111deb1b"
  },
  {
    "url": "assets/js/55.7562ad6a.js",
    "revision": "1bccad6d1a3f5d87c0f8a9f706d0239d"
  },
  {
    "url": "assets/js/56.b137e5d4.js",
    "revision": "dae65a0ea9a84b5b8e45de35d003ccde"
  },
  {
    "url": "assets/js/57.ec30b519.js",
    "revision": "520dd85255915994c79bf1c2f9f26a56"
  },
  {
    "url": "assets/js/58.f3e8d461.js",
    "revision": "b996b280586ad5de84ca7d404aab7d2e"
  },
  {
    "url": "assets/js/59.4e43ccc0.js",
    "revision": "9347f300c8293bbd3b287d7f36013bc7"
  },
  {
    "url": "assets/js/6.7eac5493.js",
    "revision": "ef204e8d9470c24f49d1a5e2b003603d"
  },
  {
    "url": "assets/js/60.699c6c9c.js",
    "revision": "4c07acf25096008f97c5f3401d36dde3"
  },
  {
    "url": "assets/js/61.f3529be1.js",
    "revision": "30b22318be2f501ff871f360d6559d97"
  },
  {
    "url": "assets/js/62.c57da7e7.js",
    "revision": "15c769652f4e477c59c9b06b754ed683"
  },
  {
    "url": "assets/js/63.bbb49504.js",
    "revision": "af38620e54a74521c42173e40d58f75f"
  },
  {
    "url": "assets/js/64.d3238d43.js",
    "revision": "6a8a5b8ba7ff6edee3aeda3c6e680838"
  },
  {
    "url": "assets/js/65.ece92d05.js",
    "revision": "501fcfe67c9570d7711958c7efd43994"
  },
  {
    "url": "assets/js/66.809899af.js",
    "revision": "ee370bd936b2aa8350268f35b0734e1b"
  },
  {
    "url": "assets/js/67.6f816e21.js",
    "revision": "ff78008d83b44a99f62978bd2e588999"
  },
  {
    "url": "assets/js/68.827a5b3d.js",
    "revision": "1c8651f1323e80a9ed6f45964a7e081f"
  },
  {
    "url": "assets/js/69.b20c6072.js",
    "revision": "c28bfadca7e9050cb540dd3c07030ca3"
  },
  {
    "url": "assets/js/7.a44acbec.js",
    "revision": "9ead157c5b41c494b5a7be001cc380dd"
  },
  {
    "url": "assets/js/70.4d7967c5.js",
    "revision": "f0e2abce86072fb4b53743f3b1d56e09"
  },
  {
    "url": "assets/js/71.3ea8bb35.js",
    "revision": "76fbc7758aec1618a4520ab4e68661f8"
  },
  {
    "url": "assets/js/72.c9d1fb88.js",
    "revision": "1c959188ecc12133661dbdb0d6575e7d"
  },
  {
    "url": "assets/js/73.b04c40bf.js",
    "revision": "9ccdf5077a67815b49baf2968e1c0a61"
  },
  {
    "url": "assets/js/74.69dba3bb.js",
    "revision": "cbeacd53e5341fcf0b56f98512dce240"
  },
  {
    "url": "assets/js/75.b2b04a5b.js",
    "revision": "474203d59dbfe0073a4e309220413095"
  },
  {
    "url": "assets/js/76.b805f671.js",
    "revision": "ff2ec9007d65869429ca398c4119c537"
  },
  {
    "url": "assets/js/77.79165762.js",
    "revision": "06fe7fff5469d209fb83aa87379c69f6"
  },
  {
    "url": "assets/js/78.fe640dfb.js",
    "revision": "2623f8dcd35ec6d0400a589a49d6d4de"
  },
  {
    "url": "assets/js/79.98679f5f.js",
    "revision": "0ae36d6bdf08c3c6db76e245b46d3659"
  },
  {
    "url": "assets/js/80.8e8387e2.js",
    "revision": "bddebaf606df58051fb4551a6a6e5ccb"
  },
  {
    "url": "assets/js/81.cbcf49de.js",
    "revision": "51637ab2df8003121158e34b7b59568a"
  },
  {
    "url": "assets/js/82.552df113.js",
    "revision": "fe9a2266b22a99a6caaf0a6025e77ec9"
  },
  {
    "url": "assets/js/83.2d8bdef1.js",
    "revision": "6e22fea3d85f051a75861fe7b6e4ef2f"
  },
  {
    "url": "assets/js/84.ad9b2ee2.js",
    "revision": "60cc4545195814160d2ac9525c47f7da"
  },
  {
    "url": "assets/js/85.22262af0.js",
    "revision": "81b8b365f0482f0744b184067f9512f7"
  },
  {
    "url": "assets/js/86.7ef89d47.js",
    "revision": "c939a69935873bd075ce74a01833f630"
  },
  {
    "url": "assets/js/87.3090bab0.js",
    "revision": "d3632c36e08d74f9ebf336619e1931f6"
  },
  {
    "url": "assets/js/app.8ca97100.js",
    "revision": "535a200eb52011a113c4e98f745c2904"
  },
  {
    "url": "assets/js/vendors~docsearch.969cea78.js",
    "revision": "263550575d0bea08c0d5156df905a730"
  },
  {
    "url": "html/bootstrap/cards.html",
    "revision": "54ae28d7268e0b3f023f7a472bae9d42"
  },
  {
    "url": "html/bootstrap/forms/checks-radios.html",
    "revision": "9b90922e03cc7d7bdce95c08cd8a2cb6"
  },
  {
    "url": "html/bootstrap/forms/floating-labels.html",
    "revision": "db73b79c2cdffd6efd4e7ff6ccb7e065"
  },
  {
    "url": "html/bootstrap/forms/form-control.html",
    "revision": "5397f122a0970930b66c9c7937f58dcf"
  },
  {
    "url": "html/bootstrap/forms/index.html",
    "revision": "ec47d1dc161a64937985d1d5bbadd26c"
  },
  {
    "url": "html/bootstrap/forms/layout.html",
    "revision": "2479d4ab927bff1b3bc53ac678336bf1"
  },
  {
    "url": "html/bootstrap/forms/select.html",
    "revision": "e31fc493a9520f058002a72a1325aec4"
  },
  {
    "url": "html/bootstrap/forms/validation.html",
    "revision": "5cd5360b4258009a28e9cdd5d81a545b"
  },
  {
    "url": "html/bootstrap/index.html",
    "revision": "75206811b2b998813afc6f0a03f9eccf"
  },
  {
    "url": "html/bootstrap/tables.html",
    "revision": "ba621fc8321cd73d07ed107d6bcd062a"
  },
  {
    "url": "html/tailwind/customization/index.html",
    "revision": "86afa981122e8a9b367791adbbd42cad"
  },
  {
    "url": "html/tailwind/customization/presets.html",
    "revision": "4b5c699cc238db05b24282cf94e6ac3a"
  },
  {
    "url": "html/tailwind/directives.html",
    "revision": "8458a8233842d561bf5da34ba55e9dd0"
  },
  {
    "url": "html/tailwind/index.html",
    "revision": "91f0681ab5aa2f3918432f57813bbab3"
  },
  {
    "url": "index.html",
    "revision": "204e27f53aed948e6f0ce3a65445385d"
  },
  {
    "url": "javascript/alpinejs/index.html",
    "revision": "31ba4580b85ff25324e088b73726da98"
  },
  {
    "url": "javascript/alpinejs/textarea.html",
    "revision": "729f1de9e95bd6dd9924640117c56b09"
  },
  {
    "url": "javascript/modules.html",
    "revision": "dfdeaa846d0386f7437a5491b8f8fb33"
  },
  {
    "url": "livewire/installation.html",
    "revision": "2be5898b7e494ce7a346465458c4c456"
  },
  {
    "url": "other/priority-levels.html",
    "revision": "3fd29486a4bbd39dc07dd5c5b2a91e08"
  },
  {
    "url": "other/static-site-generators.html",
    "revision": "40e511d76c99fc82496aa982e591a05a"
  },
  {
    "url": "php/arrays/sorting-arrays.html",
    "revision": "ec9003871980a490a29efe684c1dae91"
  },
  {
    "url": "php/classes/pagination.html",
    "revision": "667fc6bb255042e23fd88769bd1dcd45"
  },
  {
    "url": "php/classes/pdo.html",
    "revision": "e8c507427b605d53668eddf762023658"
  },
  {
    "url": "php/laravel/blade/components.html",
    "revision": "bc93eda6872bb8202d7a1739f3137e3b"
  },
  {
    "url": "php/laravel/blade/directives.html",
    "revision": "6e4cf03eea522b7013bb6cae368005a5"
  },
  {
    "url": "php/laravel/blade/index.html",
    "revision": "f07f8c115e97347ba709f930b6b7d78a"
  },
  {
    "url": "php/laravel/controller.html",
    "revision": "166a050919cfc19fb717abdf9fddfff9"
  },
  {
    "url": "php/laravel/database/factories.html",
    "revision": "9a4943e2044fa2606621f189ccabaff1"
  },
  {
    "url": "php/laravel/database/index.html",
    "revision": "bd03854e69e8b9b67e3de36e2420fc21"
  },
  {
    "url": "php/laravel/database/migrations.html",
    "revision": "eda1ec382b2ca73ad547549a8559bcda"
  },
  {
    "url": "php/laravel/database/model.html",
    "revision": "3c374e354ed04f720db5abde02f54836"
  },
  {
    "url": "php/laravel/database/observer.html",
    "revision": "ad2355b426be3fb71bd0f0c8379129d9"
  },
  {
    "url": "php/laravel/database/queries.html",
    "revision": "9bc1113642617a69a0c7e53fb2aa079f"
  },
  {
    "url": "php/laravel/database/scopes.html",
    "revision": "eb0736b8c07d10dabd85f9e933356d66"
  },
  {
    "url": "php/laravel/database/seeders.html",
    "revision": "af6f10541e530b4cb1b91313dbc8a728"
  },
  {
    "url": "php/laravel/enums.html",
    "revision": "babf1d06ff05ab19eadb632fa9d0b9bc"
  },
  {
    "url": "php/laravel/index.html",
    "revision": "07fab667a7d9a44dc83869c06982435b"
  },
  {
    "url": "php/laravel/package-development/index.html",
    "revision": "0dcc85a4009e4d0688739d834f4acd31"
  },
  {
    "url": "php/laravel/package-development/laravel-packager.html",
    "revision": "71e924a352539f88f3d9a39b9fcba35c"
  },
  {
    "url": "php/laravel/package-development/views.html",
    "revision": "85b0201a139a88905c2832dcc2f2c1c6"
  },
  {
    "url": "php/laravel/packages/guides/index.html",
    "revision": "7e0524511c7f34bed01ec270f9bc7963"
  },
  {
    "url": "php/laravel/packages/guides/spatie-activity-log.html",
    "revision": "3bde4edc68367701a778bc0e608eb5d0"
  },
  {
    "url": "php/laravel/packages/guides/spatie-comments.html",
    "revision": "da1b7569ae14e643a94bed855f95acbe"
  },
  {
    "url": "php/laravel/packages/guides/spatie-feed.html",
    "revision": "bdf07c97c99fa2a50c4a6644f3a13731"
  },
  {
    "url": "php/laravel/packages/guides/spatie-media-library.html",
    "revision": "2d9276c7e71fdb97a6d64f41cbd8cca1"
  },
  {
    "url": "php/laravel/packages/guides/spatie-permissions.html",
    "revision": "2dec4fc7d5885cc9cb415f1c9a8e571e"
  },
  {
    "url": "php/laravel/packages/guides/spatie-query-builder.html",
    "revision": "afac2b32b8f13b6bc733f53717d91495"
  },
  {
    "url": "php/laravel/packages/guides/spatie-settings.html",
    "revision": "ffa7f5f8b2d187fd67fbd19de9df97e3"
  },
  {
    "url": "php/laravel/packages/index.html",
    "revision": "d8fe4f7912f9cd1fc13df74ef8d4e0a2"
  },
  {
    "url": "php/laravel/relationships/belongs-to-many.html",
    "revision": "a6bde172157ab5a30492e819001b5730"
  },
  {
    "url": "php/laravel/relationships/index.html",
    "revision": "b1fc92f221ccbb98d5a9577b13e64dcb"
  },
  {
    "url": "php/laravel/relationships/many-to-many.html",
    "revision": "16484d23e52cd2ecf8adfb16ab411461"
  },
  {
    "url": "php/laravel/routes.html",
    "revision": "31fe7e7b00a765c9a6473b83c94cccb5"
  },
  {
    "url": "php/laravel/testing/controller-methods.html",
    "revision": "92f12f9c8b8078a6dd2043c0a5686302"
  },
  {
    "url": "php/laravel/testing/index.html",
    "revision": "78458610433599d217fc7800470d0458"
  },
  {
    "url": "php/laravel/tinker/index.html",
    "revision": "a0ac02df01880498ae61501f5dc20827"
  },
  {
    "url": "php/laravel/traits/index.html",
    "revision": "afc0c95e390be8554bac6645ceece8aa"
  },
  {
    "url": "php/laravel/traits/scopes.html",
    "revision": "2c9d7a06ba3361f8071b3c9b8a685a75"
  },
  {
    "url": "php/laravel/validation/form-request.html",
    "revision": "4800726e7c70d3b950bb40f47d242ac9"
  },
  {
    "url": "php/laravel/validation/index.html",
    "revision": "4e198d11eb0c3ec52d5af3b53c9114b3"
  },
  {
    "url": "php/laravel/validation/validation-rules.html",
    "revision": "ccb606d7cd7c1420f2069251c64155b2"
  },
  {
    "url": "php/laravel/views.html",
    "revision": "03028390a2999f65bbe9867c708f8db3"
  },
  {
    "url": "php/nova/fields.html",
    "revision": "e3e57b3127c73a880850050cc5c3143a"
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
