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
    "revision": "802653f43791461914b36d685ba7bbe5"
  },
  {
    "url": "assets/css/0.styles.8a1431db.css",
    "revision": "e0110d1dacf070ec0658a894c29b85ec"
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
    "url": "assets/js/1.29568e93.js",
    "revision": "7964a0f9bf19401b07fcedd81b94cc43"
  },
  {
    "url": "assets/js/10.2a038f8b.js",
    "revision": "b041d7a249cabc8b48ed4c76fa4b8702"
  },
  {
    "url": "assets/js/11.39bc1a06.js",
    "revision": "c97a32d7cb1ede918e17662d42be9c1d"
  },
  {
    "url": "assets/js/12.4d01efed.js",
    "revision": "2ae10a0c768c54215852a847c520afcc"
  },
  {
    "url": "assets/js/13.ea05c3b3.js",
    "revision": "72036325d3258faf932af0b6a8729fbd"
  },
  {
    "url": "assets/js/14.942e29a7.js",
    "revision": "d38a6fae287b8d5def48c11f443742c4"
  },
  {
    "url": "assets/js/15.fe159d09.js",
    "revision": "e3a79a4211df1a46bd87713e0276159a"
  },
  {
    "url": "assets/js/16.3ec233ff.js",
    "revision": "7e83eb026b0173211cb18c722602c84f"
  },
  {
    "url": "assets/js/17.f6d0c565.js",
    "revision": "290ffc04b95ef285d852445b7b244043"
  },
  {
    "url": "assets/js/18.da5d49f9.js",
    "revision": "85bc8436852978941131ee75734c554f"
  },
  {
    "url": "assets/js/19.84343c38.js",
    "revision": "efee9bd6511186f8fe6923af03c43b66"
  },
  {
    "url": "assets/js/2.8bdb15ce.js",
    "revision": "ef2f85850faab6a2b389f93dcc9dd655"
  },
  {
    "url": "assets/js/20.59e9d206.js",
    "revision": "a490c0fe96f65bee0c8f1b6878388671"
  },
  {
    "url": "assets/js/21.aa9a2d0c.js",
    "revision": "b29fa12b926821c6e13062eeb1c085ad"
  },
  {
    "url": "assets/js/22.c78018cf.js",
    "revision": "b19572ddf3c3bbbd2d6ac6b0947d761b"
  },
  {
    "url": "assets/js/23.2eb34d5e.js",
    "revision": "85340e06a420b2f9d7f0de7983457b56"
  },
  {
    "url": "assets/js/24.e83b99ac.js",
    "revision": "478d9a4765b79e95bd96c19eeca13f59"
  },
  {
    "url": "assets/js/25.853e1ead.js",
    "revision": "784b44d0523967ad3d60ac90ef0323b5"
  },
  {
    "url": "assets/js/26.0e7c1a89.js",
    "revision": "927daecaf807b9578ef3cc61c59571f5"
  },
  {
    "url": "assets/js/27.827f2640.js",
    "revision": "919f1ed61f6202ebe83ac6c54014f7ee"
  },
  {
    "url": "assets/js/28.f0e0c9db.js",
    "revision": "43960e32e93a90386bc5c25cada6c930"
  },
  {
    "url": "assets/js/29.11f5ffa0.js",
    "revision": "49f19f944c5ef26ea19f517609dc7d78"
  },
  {
    "url": "assets/js/3.1edbf618.js",
    "revision": "ce58f7a7ac083b3bc1c3f5eac9cda666"
  },
  {
    "url": "assets/js/30.596955bd.js",
    "revision": "9a52157247b6a3f6f5b84d1dc7584715"
  },
  {
    "url": "assets/js/31.716889a0.js",
    "revision": "9391edec96c082d79c4037363d996b81"
  },
  {
    "url": "assets/js/32.de8da994.js",
    "revision": "3997ead52affa72713fb29624cd5e1f6"
  },
  {
    "url": "assets/js/33.f55f539f.js",
    "revision": "fe0e403e4ae3801885d44b71d53453fe"
  },
  {
    "url": "assets/js/34.bf97b420.js",
    "revision": "f396ba35f449ed8238bce01e8ea05210"
  },
  {
    "url": "assets/js/35.66d87cd8.js",
    "revision": "b00cb7f2d836e4c792c5477cda1e84ec"
  },
  {
    "url": "assets/js/36.5800dae2.js",
    "revision": "87ca6e2a6ff2fa2bd88b15a237837c9c"
  },
  {
    "url": "assets/js/37.7f350bea.js",
    "revision": "cd5c3ef60a2c569a60d70ea089563a03"
  },
  {
    "url": "assets/js/38.8355bc74.js",
    "revision": "7f203df0bbe31885e95ceb217b9a2884"
  },
  {
    "url": "assets/js/39.adb41faa.js",
    "revision": "99cd41cf1adc87427070d43d177564b7"
  },
  {
    "url": "assets/js/4.6a450493.js",
    "revision": "62c3013949061f68f42d555b6e1ee14a"
  },
  {
    "url": "assets/js/40.8c25fa25.js",
    "revision": "9f87ab92fc505eb0dc5474c25eb7510f"
  },
  {
    "url": "assets/js/41.42e8ce05.js",
    "revision": "cbdf13facced8f7db3cfc542d94ca27a"
  },
  {
    "url": "assets/js/42.45a337f7.js",
    "revision": "299ccde72a0614e45d01e448d3f495f3"
  },
  {
    "url": "assets/js/43.c23fd04b.js",
    "revision": "d98339c5c0e6adc839ad06f5b8418999"
  },
  {
    "url": "assets/js/44.a61b3cda.js",
    "revision": "b5db4b4859b3ca60d52841c876833e35"
  },
  {
    "url": "assets/js/45.5ad15ebf.js",
    "revision": "ac079b506ff2b5b1d868a06835421360"
  },
  {
    "url": "assets/js/46.150be486.js",
    "revision": "54cc1adaa2e691007b745c8291cd2a93"
  },
  {
    "url": "assets/js/47.5f3e75c3.js",
    "revision": "9a47878fce82f98ebf22f2eb1ae35bf5"
  },
  {
    "url": "assets/js/48.e023f06a.js",
    "revision": "5a027d3f067b48b7fa36edd473008d03"
  },
  {
    "url": "assets/js/49.aa9164c2.js",
    "revision": "6d0264f42345c99a326cda4a9fe1df8d"
  },
  {
    "url": "assets/js/5.e7954c4a.js",
    "revision": "2ccdff46f39a7d9d6eee43183ec807cb"
  },
  {
    "url": "assets/js/50.3ef4a7e9.js",
    "revision": "fdb77346fc65ad5893d62900ecf46338"
  },
  {
    "url": "assets/js/51.d429a818.js",
    "revision": "e8a1ef0d8de3f28731ad45d620700b73"
  },
  {
    "url": "assets/js/52.3cfce6c9.js",
    "revision": "e194238f80fcef12f7a80b9096aef429"
  },
  {
    "url": "assets/js/53.72bcab5c.js",
    "revision": "96d0a82abf8272327f72f0c8e79af8ba"
  },
  {
    "url": "assets/js/54.9898354c.js",
    "revision": "6a08d2071923ca2bc407c40e143d95c3"
  },
  {
    "url": "assets/js/55.c9bc1b2b.js",
    "revision": "f813a71eec57230ed90bc455e65f8972"
  },
  {
    "url": "assets/js/56.621d3803.js",
    "revision": "e357194278e78768f6e966b0484c7dad"
  },
  {
    "url": "assets/js/57.98354dad.js",
    "revision": "03920f8ce768ef877bea132817e76543"
  },
  {
    "url": "assets/js/58.9034e25d.js",
    "revision": "89cdf24aa6a1caf4f8bae00f4f5fea8b"
  },
  {
    "url": "assets/js/59.61df7db3.js",
    "revision": "395a63204239d08ad25a6512cf39e838"
  },
  {
    "url": "assets/js/6.22e60589.js",
    "revision": "b6c928d183ae1c6e79ad8c2c9e2b9de6"
  },
  {
    "url": "assets/js/60.de82c787.js",
    "revision": "0d5295a511d3be2e80d13c0c5671d839"
  },
  {
    "url": "assets/js/61.f02decc0.js",
    "revision": "7b5c64d914e6808065f3b57feaf8046f"
  },
  {
    "url": "assets/js/62.f4cb6554.js",
    "revision": "4ae3b169979b934a0f8f6c56419eb8e3"
  },
  {
    "url": "assets/js/63.362ebe3d.js",
    "revision": "8bfaf9db5758ef14df9085cc07c9159c"
  },
  {
    "url": "assets/js/64.edfaf063.js",
    "revision": "921b5886cda4e15acba2bacbefeb515a"
  },
  {
    "url": "assets/js/65.0ffa119d.js",
    "revision": "57b44c15740da6caa83eedbc62063d43"
  },
  {
    "url": "assets/js/66.34471cae.js",
    "revision": "5ed7a6aefa5dc7346541b50d5e8082fc"
  },
  {
    "url": "assets/js/67.68e8de81.js",
    "revision": "f9bd151b0dff4a7004ce3122a6e6d699"
  },
  {
    "url": "assets/js/68.228d1afe.js",
    "revision": "633a7b8639178693c5c88a02f669fc41"
  },
  {
    "url": "assets/js/69.ea94aa6c.js",
    "revision": "be7a46af01e74d6cc00f28cb2a250e9f"
  },
  {
    "url": "assets/js/7.f5b9c0e8.js",
    "revision": "6e7ba306ac6f82e8157e8969e2f7f5c7"
  },
  {
    "url": "assets/js/70.7cb5056b.js",
    "revision": "c6c4b6d29cdb5b4d44208e2e9fe0246e"
  },
  {
    "url": "assets/js/71.4f34f261.js",
    "revision": "a5faf9ec22798659f6f2b981d6ca91f1"
  },
  {
    "url": "assets/js/72.3f2dd883.js",
    "revision": "21bdaa4a1ff4121b4c083409f9c13c33"
  },
  {
    "url": "assets/js/73.436269cb.js",
    "revision": "befa77809c70c161064a0104ab9fd45d"
  },
  {
    "url": "assets/js/74.2c1fc296.js",
    "revision": "60b6a024967d6c61d549d1bcd6440bbb"
  },
  {
    "url": "assets/js/75.470e2538.js",
    "revision": "97f835376e8d02fd1bab8f438a9c2c4c"
  },
  {
    "url": "assets/js/76.a76705ec.js",
    "revision": "4320eac4e6f536a85b54b220ce0d5403"
  },
  {
    "url": "assets/js/77.55ff3644.js",
    "revision": "d904b624bf64d27bf2d37dbf60bcb16a"
  },
  {
    "url": "assets/js/78.dd6e2009.js",
    "revision": "812304835f9ce6caf2f4a41c7613cdd0"
  },
  {
    "url": "assets/js/79.32e1c4dc.js",
    "revision": "8a36ae13f3f90bf26d82ef8f2b1cb3f0"
  },
  {
    "url": "assets/js/80.4ffcd655.js",
    "revision": "5b488efc8b753ccfb8f3971214f9b36f"
  },
  {
    "url": "assets/js/81.c1975941.js",
    "revision": "9c23f1f3f7d730c7e34288e88e0f1012"
  },
  {
    "url": "assets/js/82.6a97a448.js",
    "revision": "cda7c417f67adc43a639a1eac350e541"
  },
  {
    "url": "assets/js/83.2dfb7cb3.js",
    "revision": "ef641fd472cebd93829081a7a015ff4c"
  },
  {
    "url": "assets/js/84.403166a0.js",
    "revision": "46f505c5a945e506e1e5da4e42b50f18"
  },
  {
    "url": "assets/js/85.a6c8cd61.js",
    "revision": "b9b9b789b4b7c3f309bc8246b96fe820"
  },
  {
    "url": "assets/js/86.d2707c73.js",
    "revision": "61fd638b633c851bbbd3f73c2300b9e3"
  },
  {
    "url": "assets/js/app.7782d965.js",
    "revision": "9bd1fa96c7bc53ede90c9d642d0ac856"
  },
  {
    "url": "assets/js/vendors~docsearch.d098b00c.js",
    "revision": "e4157406331de5fb593dcbd94fca7647"
  },
  {
    "url": "html/bootstrap/cards.html",
    "revision": "0877223ecc20e229bf42bd8c6fc2b1d1"
  },
  {
    "url": "html/bootstrap/forms/checks-radios.html",
    "revision": "3b6be3852c289f7ec0cf25ca151ddd56"
  },
  {
    "url": "html/bootstrap/forms/floating-labels.html",
    "revision": "0e16867c81461d8483f231089d971ed9"
  },
  {
    "url": "html/bootstrap/forms/form-control.html",
    "revision": "32458bff777d8669bb1c1966f249ea6b"
  },
  {
    "url": "html/bootstrap/forms/index.html",
    "revision": "7cbf6dd894b77b6bed90e8302d93800f"
  },
  {
    "url": "html/bootstrap/forms/layout.html",
    "revision": "7eed2350f65e5b8567a565ad743cab4e"
  },
  {
    "url": "html/bootstrap/forms/select.html",
    "revision": "e98185e40dc5e8dd260df4f79eff1bd3"
  },
  {
    "url": "html/bootstrap/forms/validation.html",
    "revision": "d25dd24e2bda516dc287042a42e03d15"
  },
  {
    "url": "html/bootstrap/index.html",
    "revision": "74af412a0aa195145749ef6ded12a7dc"
  },
  {
    "url": "html/bootstrap/tables.html",
    "revision": "c42f1df4bbc8bf6d0ddb62165cff2f0b"
  },
  {
    "url": "html/tailwind/customization/index.html",
    "revision": "12f4cf2aea7c08da8805d0f552f0d43f"
  },
  {
    "url": "html/tailwind/customization/presets.html",
    "revision": "7ff339a640e9e4b82d7b813f86ac057e"
  },
  {
    "url": "html/tailwind/directives.html",
    "revision": "3daa6b33b8265d923ebb9c6ca40e4062"
  },
  {
    "url": "html/tailwind/index.html",
    "revision": "5a90ae82fb285f4e774f34b63fb9853e"
  },
  {
    "url": "index.html",
    "revision": "60a66147645d0be7fcbd9415017cc914"
  },
  {
    "url": "javascript/alpinejs/index.html",
    "revision": "88d8d3be7a72c78defdac4ea56331a9a"
  },
  {
    "url": "javascript/alpinejs/textarea.html",
    "revision": "6fee43d4333258821ba1725359ad5d71"
  },
  {
    "url": "javascript/modules.html",
    "revision": "2ec11c955acd180063ffbc7a26c1b766"
  },
  {
    "url": "livewire/installation.html",
    "revision": "9d481d22828f41f707b8c513f6de5679"
  },
  {
    "url": "other/priority-levels.html",
    "revision": "6598b8ae4d536f03c1dbaef98d2e4984"
  },
  {
    "url": "other/static-site-generators.html",
    "revision": "c558a950ef084b381e9c534e689424c3"
  },
  {
    "url": "php/arrays/sorting-arrays.html",
    "revision": "0300cd6effaaa184f9a44bfdf6dc4572"
  },
  {
    "url": "php/classes/pagination.html",
    "revision": "44e5bcbebf9113743c3269029998782c"
  },
  {
    "url": "php/classes/pdo.html",
    "revision": "567607650589360584420b1ce10823c1"
  },
  {
    "url": "php/laravel/blade/components.html",
    "revision": "80b8bd9a984a5fa3b6b545312499003a"
  },
  {
    "url": "php/laravel/blade/directives.html",
    "revision": "0fa7d854ecc3e7afed3f749150d321c2"
  },
  {
    "url": "php/laravel/blade/index.html",
    "revision": "46b6745dff7f7a731f64d4df10120a77"
  },
  {
    "url": "php/laravel/controller.html",
    "revision": "dbd982fed8598aada82965d116f9be05"
  },
  {
    "url": "php/laravel/database/factories.html",
    "revision": "c993afc3286f64d57dc42449f9ab37b8"
  },
  {
    "url": "php/laravel/database/index.html",
    "revision": "6854fcb0c7f18f88edcbb52d76bfd647"
  },
  {
    "url": "php/laravel/database/migrations.html",
    "revision": "454fe3ba2ed806a5a8a347e200d69237"
  },
  {
    "url": "php/laravel/database/model.html",
    "revision": "9b4074bfc9da23c0c4e0c6acc9c21438"
  },
  {
    "url": "php/laravel/database/observer.html",
    "revision": "68b56e46ef79320b37ef7fece948a6bf"
  },
  {
    "url": "php/laravel/database/queries.html",
    "revision": "490c706bda5fd51dedab262ffecd2406"
  },
  {
    "url": "php/laravel/database/scopes.html",
    "revision": "690f892a7894aed11924950876089988"
  },
  {
    "url": "php/laravel/database/seeders.html",
    "revision": "1c52c4ab59b8f7d5a3b2f1a323769ac1"
  },
  {
    "url": "php/laravel/enums.html",
    "revision": "3bad8f694051cba887475f746562cbaf"
  },
  {
    "url": "php/laravel/index.html",
    "revision": "a4331041e4655aa03ebbdcd46607ab76"
  },
  {
    "url": "php/laravel/package-development/index.html",
    "revision": "629ef41b7509d2553df3333a3585a86e"
  },
  {
    "url": "php/laravel/package-development/laravel-packager.html",
    "revision": "a7938b2d602397ee5cc5d6ff6fbbb8ff"
  },
  {
    "url": "php/laravel/package-development/views.html",
    "revision": "d139cdcb6eededaf7189b423b96f92e9"
  },
  {
    "url": "php/laravel/packages/guides/index.html",
    "revision": "524b50122fffa62197713994be3d6f37"
  },
  {
    "url": "php/laravel/packages/guides/spatie-activity-log.html",
    "revision": "8783a42c247ad203b29def210810c9f2"
  },
  {
    "url": "php/laravel/packages/guides/spatie-comments.html",
    "revision": "eadc0926f5ab5724357ce7e68ab0c3c6"
  },
  {
    "url": "php/laravel/packages/guides/spatie-feed.html",
    "revision": "efc6c6beb5478a7914636eb0edf04101"
  },
  {
    "url": "php/laravel/packages/guides/spatie-media-library.html",
    "revision": "51b81a34f9e21e156154fe82149e6224"
  },
  {
    "url": "php/laravel/packages/guides/spatie-permissions.html",
    "revision": "373c8327a1b8e1ea7e4420598b91f4fb"
  },
  {
    "url": "php/laravel/packages/guides/spatie-query-builder.html",
    "revision": "0cb0238822bdc140c02baa689bd4016c"
  },
  {
    "url": "php/laravel/packages/guides/spatie-settings.html",
    "revision": "9746492239026fc838fdc1b15a70800e"
  },
  {
    "url": "php/laravel/packages/index.html",
    "revision": "00269e262b3ed6fe64a818e2021066a4"
  },
  {
    "url": "php/laravel/relationships/belongs-to-many.html",
    "revision": "0df1be71bbb0a9f11e6edd58dfcfc02b"
  },
  {
    "url": "php/laravel/relationships/index.html",
    "revision": "6dd761a67541a63be8ebfb7a072444ba"
  },
  {
    "url": "php/laravel/relationships/many-to-many.html",
    "revision": "e294152fd4b37536221941468d3095c2"
  },
  {
    "url": "php/laravel/routes.html",
    "revision": "4ae01d79627633f374276a21e35990e0"
  },
  {
    "url": "php/laravel/testing/controller-methods.html",
    "revision": "fd8df19b7b49e01333ddb6e165263286"
  },
  {
    "url": "php/laravel/testing/index.html",
    "revision": "b6e07f057bba3f1bb1e6bcd012309a79"
  },
  {
    "url": "php/laravel/tinker/index.html",
    "revision": "b7cd28629fa8e0fc7e6185aa06ae7ed1"
  },
  {
    "url": "php/laravel/traits/index.html",
    "revision": "a309dc84dee7a6bd4b0eed4eb300901c"
  },
  {
    "url": "php/laravel/traits/scopes.html",
    "revision": "6840826e624fdc6491d19eb247a62434"
  },
  {
    "url": "php/laravel/validation/form-request.html",
    "revision": "9744df22d6e5f967a18e89f19dcf9163"
  },
  {
    "url": "php/laravel/validation/index.html",
    "revision": "a5a754141834ce754d80caa552f85194"
  },
  {
    "url": "php/laravel/validation/validation-rules.html",
    "revision": "48e3fc8a4b3687cf51a5ca276b6bf4c8"
  },
  {
    "url": "php/laravel/views.html",
    "revision": "795d79083e6aa72048ace848292e03a6"
  },
  {
    "url": "php/nova/fields.html",
    "revision": "4aa3d6a71cbabdbdb23aa301a0774568"
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
