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
    "revision": "d702673ce2cab37ce679a02e9c344d47"
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
    "url": "assets/js/23.f6f82d17.js",
    "revision": "156ea0984bd5a5efa603e8addc156b7e"
  },
  {
    "url": "assets/js/24.7680bedb.js",
    "revision": "c08c5a533e596f442a8ad82a3284bedf"
  },
  {
    "url": "assets/js/25.853e1ead.js",
    "revision": "784b44d0523967ad3d60ac90ef0323b5"
  },
  {
    "url": "assets/js/26.30d120bc.js",
    "revision": "0e2db455beba98b02218ba2cfe7b4dd2"
  },
  {
    "url": "assets/js/27.03c9a19f.js",
    "revision": "7a0f5c10eba7562c2d05043db5127b74"
  },
  {
    "url": "assets/js/28.4261d84f.js",
    "revision": "2a2bbcec3700a81a7aea16482f8c56af"
  },
  {
    "url": "assets/js/29.88e8a919.js",
    "revision": "b167787784127594b0e3e9c8feb6ed89"
  },
  {
    "url": "assets/js/3.1edbf618.js",
    "revision": "ce58f7a7ac083b3bc1c3f5eac9cda666"
  },
  {
    "url": "assets/js/30.f538ca0b.js",
    "revision": "5617fbca0a23f2f17ecaf25e36569769"
  },
  {
    "url": "assets/js/31.464b47b2.js",
    "revision": "75c2afa393c385dc56c01bb097e72267"
  },
  {
    "url": "assets/js/32.d17bc3ad.js",
    "revision": "5ff828c92db33cf3c6f74f551918af91"
  },
  {
    "url": "assets/js/33.5d34278f.js",
    "revision": "c29ff80159c8469c115661cbf506a824"
  },
  {
    "url": "assets/js/34.75f1efef.js",
    "revision": "d185131e7368aa3201b9621e58d521b0"
  },
  {
    "url": "assets/js/35.88fb63b5.js",
    "revision": "a6efd23a09552c18bdba24672e156da2"
  },
  {
    "url": "assets/js/36.7bbe586c.js",
    "revision": "9c214f4faa4b55af646207a73970eb24"
  },
  {
    "url": "assets/js/37.bcf0a649.js",
    "revision": "6d292209fa0acbf3c0640636792903ae"
  },
  {
    "url": "assets/js/38.e515be6e.js",
    "revision": "969e9fed4f297f0a0358a1f16f7148f6"
  },
  {
    "url": "assets/js/39.ce1e9fc0.js",
    "revision": "32d631d6ab63c0f8ce061e5cd992dfd4"
  },
  {
    "url": "assets/js/4.6a450493.js",
    "revision": "62c3013949061f68f42d555b6e1ee14a"
  },
  {
    "url": "assets/js/40.d4638b77.js",
    "revision": "36190b4232ddcf93724b70b952fdf673"
  },
  {
    "url": "assets/js/41.42e8ce05.js",
    "revision": "cbdf13facced8f7db3cfc542d94ca27a"
  },
  {
    "url": "assets/js/42.b8bc5df8.js",
    "revision": "1dec03e7db78352665427fffda1025d7"
  },
  {
    "url": "assets/js/43.1f943592.js",
    "revision": "865ca598c5e8625ac1ed5554a3478b20"
  },
  {
    "url": "assets/js/44.2e741d76.js",
    "revision": "24980e3414e337bfef590880120fe4e6"
  },
  {
    "url": "assets/js/45.ad031343.js",
    "revision": "20907d4d9476033df4e9c469be226ce7"
  },
  {
    "url": "assets/js/46.6eeab5d9.js",
    "revision": "58f4bfa15dba12a778e8b1c12e281236"
  },
  {
    "url": "assets/js/47.3d79d73e.js",
    "revision": "a6781c5086beaeda8f61a1a55bd57862"
  },
  {
    "url": "assets/js/48.f09c19e8.js",
    "revision": "e31f3607fae3549dfebf4852335d50be"
  },
  {
    "url": "assets/js/49.97ac7b27.js",
    "revision": "53fe31777364d4c380d8f2c8d106481d"
  },
  {
    "url": "assets/js/5.e7954c4a.js",
    "revision": "2ccdff46f39a7d9d6eee43183ec807cb"
  },
  {
    "url": "assets/js/50.89b1e41d.js",
    "revision": "33563f5be24d4289e13539594e6ae018"
  },
  {
    "url": "assets/js/51.9f6cf18f.js",
    "revision": "ae531a3fa55acb945e1a951d90ada289"
  },
  {
    "url": "assets/js/52.ae872ba2.js",
    "revision": "d178a64977cedce9efe50a03c185e25c"
  },
  {
    "url": "assets/js/53.05daf162.js",
    "revision": "0cdc0a3f3e181fb5db37214f0961b211"
  },
  {
    "url": "assets/js/54.f1fd7d8c.js",
    "revision": "786c95e9be72dfedebc57b67ac4888c0"
  },
  {
    "url": "assets/js/55.653ab761.js",
    "revision": "7f617a8b269d3657fc43df87faa2db19"
  },
  {
    "url": "assets/js/56.1bce3ae4.js",
    "revision": "007685e4a2a95a7942923c353b641966"
  },
  {
    "url": "assets/js/57.79b95fc6.js",
    "revision": "6035c1b89bea8e2c725bc38ee8b87e3f"
  },
  {
    "url": "assets/js/58.7227f48d.js",
    "revision": "4b3aa85ac0eebd85e455f4e404d9ce93"
  },
  {
    "url": "assets/js/59.46c027f3.js",
    "revision": "e2a52b11ef5a845279c959129d1d25bd"
  },
  {
    "url": "assets/js/6.22e60589.js",
    "revision": "b6c928d183ae1c6e79ad8c2c9e2b9de6"
  },
  {
    "url": "assets/js/60.748dae1f.js",
    "revision": "d5bc60517d2eaa0a86fd0d0143f2c46a"
  },
  {
    "url": "assets/js/61.ee8301ce.js",
    "revision": "baecc7b1d6c6ba304e7f3a4cdfc9a06a"
  },
  {
    "url": "assets/js/62.ad49cfcf.js",
    "revision": "10ed045bc2d2fb241bee5ee9cbc4aa26"
  },
  {
    "url": "assets/js/63.084bd869.js",
    "revision": "aefe817acb242463ec0394b24956a709"
  },
  {
    "url": "assets/js/64.aeaf61ee.js",
    "revision": "0bb2834c60f3dc48647e338a8647f164"
  },
  {
    "url": "assets/js/65.527658a0.js",
    "revision": "226b8524c096079e5ddf352cb3f31872"
  },
  {
    "url": "assets/js/66.94cb67a6.js",
    "revision": "156dd6ee992755efb124e975b2f426fe"
  },
  {
    "url": "assets/js/67.66ea41a7.js",
    "revision": "67a3c0f3c07daa1cf3945d35f45ac7c7"
  },
  {
    "url": "assets/js/68.597762ed.js",
    "revision": "6455ef73b3540db1f0214cb96d8ee0b1"
  },
  {
    "url": "assets/js/69.bb5fb2b0.js",
    "revision": "3d1b7a2e6a36fb2cb3d00d49748d8ea5"
  },
  {
    "url": "assets/js/7.f5b9c0e8.js",
    "revision": "6e7ba306ac6f82e8157e8969e2f7f5c7"
  },
  {
    "url": "assets/js/70.4346ae12.js",
    "revision": "3352927dbdc062fea8694a7dd4661c49"
  },
  {
    "url": "assets/js/71.77e66c92.js",
    "revision": "b1741b6a3c8390df67dbc82920c5b84c"
  },
  {
    "url": "assets/js/72.e86c834d.js",
    "revision": "ece1b87f12fe3a17691e716fe4f0c82e"
  },
  {
    "url": "assets/js/73.65105ab9.js",
    "revision": "64e8c5c4e80bb181ea934732b09d2ded"
  },
  {
    "url": "assets/js/74.5b2c1803.js",
    "revision": "b4cf929980ac204edb27cffd8edeab06"
  },
  {
    "url": "assets/js/75.5b73d8fb.js",
    "revision": "c3165ae6a6663d859d1f4319fc171a37"
  },
  {
    "url": "assets/js/76.c3700553.js",
    "revision": "82ca67fdb904101fb9677e67d8b37ba5"
  },
  {
    "url": "assets/js/77.651bfcf6.js",
    "revision": "c552323e44013898800b81a6f4ed4c6a"
  },
  {
    "url": "assets/js/78.57bf5534.js",
    "revision": "d21f07007ed01c7d3684bc8eba15b495"
  },
  {
    "url": "assets/js/79.a8a7903c.js",
    "revision": "a0b7da350719c7589214365bba1e3635"
  },
  {
    "url": "assets/js/80.a80c7b0a.js",
    "revision": "f6fef12b9cb3b71d9afdefad4dae2145"
  },
  {
    "url": "assets/js/81.df57894c.js",
    "revision": "e9603969613092fcf1213c82cb5f249b"
  },
  {
    "url": "assets/js/82.3aa6178a.js",
    "revision": "12e5116575d5b7ca59ec3a806551aa42"
  },
  {
    "url": "assets/js/83.26f94d00.js",
    "revision": "094096fbcb90ecb9947c2006c655c226"
  },
  {
    "url": "assets/js/84.1c5abb55.js",
    "revision": "e09b93cdb66b8ed8a71a90406fd4efc5"
  },
  {
    "url": "assets/js/85.ddbb5b8d.js",
    "revision": "df39a4f7ddb7783991fb41c83bb9ecc8"
  },
  {
    "url": "assets/js/app.d7ed57e7.js",
    "revision": "5e2b9b7e67440d2d7a50037a30be409c"
  },
  {
    "url": "assets/js/vendors~docsearch.d098b00c.js",
    "revision": "e4157406331de5fb593dcbd94fca7647"
  },
  {
    "url": "html/bootstrap/cards.html",
    "revision": "005ea22224f4fe1cc70c4355e2f42aee"
  },
  {
    "url": "html/bootstrap/forms/checks-radios.html",
    "revision": "33cf087bcd1392f4c22eee320f4a4520"
  },
  {
    "url": "html/bootstrap/forms/floating-labels.html",
    "revision": "3c0735fee953d80746f982771f27e8ff"
  },
  {
    "url": "html/bootstrap/forms/form-control.html",
    "revision": "37b7e4330458f0719e832f25218dd0c5"
  },
  {
    "url": "html/bootstrap/forms/index.html",
    "revision": "d1c3b98aba04065b1a78faad9abae6ad"
  },
  {
    "url": "html/bootstrap/forms/layout.html",
    "revision": "f625806731fda6aac0870c4d85e5f6ea"
  },
  {
    "url": "html/bootstrap/forms/select.html",
    "revision": "71be0b37c955b84fe778a4aec109bfeb"
  },
  {
    "url": "html/bootstrap/forms/validation.html",
    "revision": "d268db965a633962de61e98826c5849b"
  },
  {
    "url": "html/bootstrap/index.html",
    "revision": "707768a36a056da289ccb849cf2c0ee8"
  },
  {
    "url": "html/bootstrap/tables.html",
    "revision": "d659edbd2ee243576fff92502cfc8148"
  },
  {
    "url": "html/tailwind/customization/index.html",
    "revision": "95dd876f7e594b47ff3e808c05815635"
  },
  {
    "url": "html/tailwind/customization/presets.html",
    "revision": "fc68a470e4731fe654bba08e55f4ee6b"
  },
  {
    "url": "html/tailwind/directives.html",
    "revision": "7df8ff68d759b83df32bd888b932b78f"
  },
  {
    "url": "html/tailwind/index.html",
    "revision": "b0d850315c5b8cb0641d2a0927c9b4f3"
  },
  {
    "url": "index.html",
    "revision": "fb3d85a9dfad3a4bd63543cfac8d1c6e"
  },
  {
    "url": "javascript/alpinejs/index.html",
    "revision": "2b9d5d0d6fd7b154b99dabb782888283"
  },
  {
    "url": "javascript/alpinejs/textarea.html",
    "revision": "d62cb0ca9c0d6f48195a6dde6ac4ae4a"
  },
  {
    "url": "javascript/modules.html",
    "revision": "37d310e68cef027c1de7e594be12d35e"
  },
  {
    "url": "livewire/installation.html",
    "revision": "f84639ff481e0d8a0d5e42180831569b"
  },
  {
    "url": "other/priority-levels.html",
    "revision": "3dd36e53f23dd112de001fae51057c86"
  },
  {
    "url": "other/static-site-generators.html",
    "revision": "df1a30ae5ecbc629762b3b82ae1d983b"
  },
  {
    "url": "php/classes/pagination.html",
    "revision": "1833c85af779819ab67a41f9981774c4"
  },
  {
    "url": "php/classes/pdo.html",
    "revision": "604523326e127fb57c40c2fd232b3a1c"
  },
  {
    "url": "php/laravel/blade/components.html",
    "revision": "0fbf1c70af08ea63e0b5757c9dda953b"
  },
  {
    "url": "php/laravel/blade/directives.html",
    "revision": "d84726fccd053df798a67d80e3a206ae"
  },
  {
    "url": "php/laravel/blade/index.html",
    "revision": "3048bbe7f878221aaec039249a432027"
  },
  {
    "url": "php/laravel/controller.html",
    "revision": "cf36da6b7bc3bb6408ad0723afca5bf6"
  },
  {
    "url": "php/laravel/database/factories.html",
    "revision": "8e3f19c4558a988f9f61ff7109c0df18"
  },
  {
    "url": "php/laravel/database/index.html",
    "revision": "1db68917ef1c60b38008cf12b624c689"
  },
  {
    "url": "php/laravel/database/migrations.html",
    "revision": "a30d26d9e3cb4a6a3a670b00032dffae"
  },
  {
    "url": "php/laravel/database/model.html",
    "revision": "24df3172a4ebe66281a4ba27e89dcaa5"
  },
  {
    "url": "php/laravel/database/observer.html",
    "revision": "ef68c07efa5425417d095313c64ab20c"
  },
  {
    "url": "php/laravel/database/queries.html",
    "revision": "ad18cf011b90ce2bcd7f20755de82686"
  },
  {
    "url": "php/laravel/database/scopes.html",
    "revision": "9f1e7617a75b67b3f93637cf35b5efb4"
  },
  {
    "url": "php/laravel/database/seeders.html",
    "revision": "e7e4aebf7168a9a05f1c5465263834eb"
  },
  {
    "url": "php/laravel/enums.html",
    "revision": "5b5da2c4fa1f735c6064ebef248c4a7d"
  },
  {
    "url": "php/laravel/index.html",
    "revision": "3ef4777da2c5f38829cd64bab3a5548b"
  },
  {
    "url": "php/laravel/package-development/index.html",
    "revision": "8253406d23698a60a27a20619dc84e7f"
  },
  {
    "url": "php/laravel/package-development/laravel-packager.html",
    "revision": "2fe1d41bb5cfcfdfa5369eb0cef37278"
  },
  {
    "url": "php/laravel/package-development/views.html",
    "revision": "4eee68228a420e0440e59093e629d36b"
  },
  {
    "url": "php/laravel/packages/guides/index.html",
    "revision": "a63b2f89ea6b58b46d1bce17d13a9edd"
  },
  {
    "url": "php/laravel/packages/guides/spatie-activity-log.html",
    "revision": "2ccc9b29009995e211ce9212ddf91fcd"
  },
  {
    "url": "php/laravel/packages/guides/spatie-comments.html",
    "revision": "aa6b456ac8354a9af9097a03d7c195c6"
  },
  {
    "url": "php/laravel/packages/guides/spatie-feed.html",
    "revision": "79d835835a1908a912303bf0d3f9fadb"
  },
  {
    "url": "php/laravel/packages/guides/spatie-media-library.html",
    "revision": "1e468d7fdb00decfb2d66bd3d50dda64"
  },
  {
    "url": "php/laravel/packages/guides/spatie-permissions.html",
    "revision": "25acabc9dbe5684665e61981c872fc2f"
  },
  {
    "url": "php/laravel/packages/guides/spatie-query-builder.html",
    "revision": "a845916b5fc867e9400fd8fc304ab12a"
  },
  {
    "url": "php/laravel/packages/guides/spatie-settings.html",
    "revision": "7266e6c70856cc382dfbb5f9dd86507d"
  },
  {
    "url": "php/laravel/packages/index.html",
    "revision": "31d567f86a1064cef8958e2dec1f901d"
  },
  {
    "url": "php/laravel/relationships/belongs-to-many.html",
    "revision": "7eea9ef1ef9182d74be70d1a2e4efc3a"
  },
  {
    "url": "php/laravel/relationships/index.html",
    "revision": "14a9e2a308d07f5fd4c4f4bf1432d616"
  },
  {
    "url": "php/laravel/relationships/many-to-many.html",
    "revision": "f9221892ea77649287dfcac6a8d29f65"
  },
  {
    "url": "php/laravel/routes.html",
    "revision": "bdae030f72d255e2cec76221e1b7da68"
  },
  {
    "url": "php/laravel/testing/controller-methods.html",
    "revision": "98983e7ed7f7427e8adfd05b6a621bcd"
  },
  {
    "url": "php/laravel/testing/index.html",
    "revision": "29b9e72a732b3776aabc4fb75065fbb9"
  },
  {
    "url": "php/laravel/tinker/index.html",
    "revision": "6bd518980a8f350396ca4a03d8283019"
  },
  {
    "url": "php/laravel/traits/index.html",
    "revision": "4910a1e3bf36d63ac1a74ef05f4ca31e"
  },
  {
    "url": "php/laravel/traits/scopes.html",
    "revision": "8ff8439f5246abde9b3f8a3151ccc77d"
  },
  {
    "url": "php/laravel/validation/form-request.html",
    "revision": "4d8937aa6d2a5d01da5f688f9116ce40"
  },
  {
    "url": "php/laravel/validation/index.html",
    "revision": "3fc089a5b8650897956a3b9061cce72d"
  },
  {
    "url": "php/laravel/validation/validation-rules.html",
    "revision": "b76d3f3944cf92ec7276a92c8c06ab98"
  },
  {
    "url": "php/laravel/views.html",
    "revision": "48c1754d5581eae85820404b04798665"
  },
  {
    "url": "php/nova/fields.html",
    "revision": "6227bc68bda2612c55fe8ff508f9adc8"
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
