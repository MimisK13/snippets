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
    "revision": "f62ccdf672827024db8daf53eecc59bb"
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
    "url": "assets/js/1.4bee94c0.js",
    "revision": "16cc630c7eea08f6f5fdfd225e06c9e7"
  },
  {
    "url": "assets/js/10.f6921cd1.js",
    "revision": "22d23b6a89d848d992091b7cdba57e23"
  },
  {
    "url": "assets/js/11.8b1107ef.js",
    "revision": "00e01fcd9604eb85c9a8fc32c5ad081a"
  },
  {
    "url": "assets/js/12.682de53f.js",
    "revision": "28c5fedb365261e6e090f5bc7e71b7d9"
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
    "url": "assets/js/21.298ad4a6.js",
    "revision": "02cfde2978e84591847aaa4f568e927c"
  },
  {
    "url": "assets/js/22.e9004e12.js",
    "revision": "708aa04563a0973dcaf57095ec3f1218"
  },
  {
    "url": "assets/js/23.cc711f3f.js",
    "revision": "fb173b6ce80ff1f82f076951203e1dd9"
  },
  {
    "url": "assets/js/24.75fd8ab7.js",
    "revision": "74dfcea89dbf57313824736c05f50725"
  },
  {
    "url": "assets/js/25.37c95571.js",
    "revision": "7d012ee70f078fa0b5a223e012bebaa0"
  },
  {
    "url": "assets/js/26.621bf206.js",
    "revision": "16b7a9aad40c60ba145b3f6cadbbf259"
  },
  {
    "url": "assets/js/27.affcc92f.js",
    "revision": "8c1975c55409d6a1873c5719f0d8b534"
  },
  {
    "url": "assets/js/28.2b4eec3d.js",
    "revision": "e8c7b635912e54e8bb2cb6d1ea806761"
  },
  {
    "url": "assets/js/29.72add480.js",
    "revision": "2417ee98ca099b5e0c204b985b2309b2"
  },
  {
    "url": "assets/js/3.0f93d13b.js",
    "revision": "c73ed72469e458a5cc29bbce3cd1ff34"
  },
  {
    "url": "assets/js/30.7f6a1eab.js",
    "revision": "1e52b922a1bdb38ffb49bbd79fd4fdd3"
  },
  {
    "url": "assets/js/31.6cae989c.js",
    "revision": "ebb9fc91b1a6691f0004e1f0950f5901"
  },
  {
    "url": "assets/js/32.71cbd662.js",
    "revision": "ab9ecef7d9296673703c2c18351f36e6"
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
    "url": "assets/js/37.77345358.js",
    "revision": "9268a52ae6361d4ca45cdf75ee8c5ecc"
  },
  {
    "url": "assets/js/38.5c332d77.js",
    "revision": "512f86c64f7c9635057f9beb609f09e1"
  },
  {
    "url": "assets/js/39.a9ef7d3d.js",
    "revision": "ef2b9d6f78e72a57dc404e691ffcb6e3"
  },
  {
    "url": "assets/js/4.ba20a71a.js",
    "revision": "57c71c489d53aa15ebb8e9e2f321ccda"
  },
  {
    "url": "assets/js/40.95666832.js",
    "revision": "ba5ddded8167151c89f46afa286e0238"
  },
  {
    "url": "assets/js/41.7cb6da72.js",
    "revision": "4227351bd1765532023f8d5b02ab1d10"
  },
  {
    "url": "assets/js/42.86becfb1.js",
    "revision": "aaad3905e8436c81329ce1de43d024e8"
  },
  {
    "url": "assets/js/43.069d7dcf.js",
    "revision": "66217c068a381870eb7f96fbd651fe7e"
  },
  {
    "url": "assets/js/44.3343010b.js",
    "revision": "46c040eedbccb38024c75e51012b771d"
  },
  {
    "url": "assets/js/45.6ea3c0f7.js",
    "revision": "97013c4546e1652597d4c6a997e04615"
  },
  {
    "url": "assets/js/46.f5cc9435.js",
    "revision": "2273f6965efe16456029158e24249bc9"
  },
  {
    "url": "assets/js/47.68e90b4b.js",
    "revision": "3d35d4ffe2a7a49dc9f2513df24a6249"
  },
  {
    "url": "assets/js/48.3233a1e7.js",
    "revision": "4d203446c9c2f93755b61ca577e61f3b"
  },
  {
    "url": "assets/js/49.e7078631.js",
    "revision": "b016a5640e3e6a8407786c10d3a318f1"
  },
  {
    "url": "assets/js/5.5f56e599.js",
    "revision": "cd727eea6383170f890c3718ead88269"
  },
  {
    "url": "assets/js/50.816a1017.js",
    "revision": "1365dab7ef70575e7ababa208a4e94c2"
  },
  {
    "url": "assets/js/51.4d5fa3c5.js",
    "revision": "61b43bba3cbf678a6790512789fd7dc4"
  },
  {
    "url": "assets/js/52.bc4ea352.js",
    "revision": "6b69d93b2e4375abb8eb2202ea42524c"
  },
  {
    "url": "assets/js/53.03fb540a.js",
    "revision": "7be47ac61f424ab650ea1e44999af52f"
  },
  {
    "url": "assets/js/54.6c274739.js",
    "revision": "a38f5f0c57fc1c646bd4246d4e0f3e46"
  },
  {
    "url": "assets/js/55.878158b4.js",
    "revision": "b26a59d55df351af511ed01e5f8ab37b"
  },
  {
    "url": "assets/js/56.d9aae055.js",
    "revision": "d193e70db5745944559e6bb5d2cd5094"
  },
  {
    "url": "assets/js/57.8d119aa2.js",
    "revision": "903ef363677cba95f5144b51d61d48cf"
  },
  {
    "url": "assets/js/58.be26d720.js",
    "revision": "9a8d599381e6df708256461f7279a169"
  },
  {
    "url": "assets/js/59.eef38d5e.js",
    "revision": "8f32ad184a73a2f03917de266da8d112"
  },
  {
    "url": "assets/js/6.7eac5493.js",
    "revision": "ef204e8d9470c24f49d1a5e2b003603d"
  },
  {
    "url": "assets/js/60.1b930b8d.js",
    "revision": "907b81610a443aef1f22e29f675faf31"
  },
  {
    "url": "assets/js/61.0a9c3137.js",
    "revision": "06962b4b22add26c5bc720e9c88c737b"
  },
  {
    "url": "assets/js/62.0af441dd.js",
    "revision": "c49133fdea00cebc9c899537ad20fdec"
  },
  {
    "url": "assets/js/63.d9482bbf.js",
    "revision": "81ead5c8667cdf9bcc0b62c1bdc7d805"
  },
  {
    "url": "assets/js/64.9859e11f.js",
    "revision": "97af13cb832ce773a5c9e7e9f592d926"
  },
  {
    "url": "assets/js/65.8346239b.js",
    "revision": "acf580674324918ab8db6a2eeceac5c8"
  },
  {
    "url": "assets/js/66.a9350fba.js",
    "revision": "6fef48affb5651583a78431e5d0f7ac6"
  },
  {
    "url": "assets/js/67.912fe76e.js",
    "revision": "9a9bcb1799deb2da1bae905e244fd0bf"
  },
  {
    "url": "assets/js/68.92f2f613.js",
    "revision": "328d704ed37c9e6260e19d477453fc38"
  },
  {
    "url": "assets/js/69.c52a598c.js",
    "revision": "32c07864554e52a8444a201067cbfa73"
  },
  {
    "url": "assets/js/7.a44acbec.js",
    "revision": "9ead157c5b41c494b5a7be001cc380dd"
  },
  {
    "url": "assets/js/70.7bf9c0c5.js",
    "revision": "60fdaf8184a604a1e6b70e8746481601"
  },
  {
    "url": "assets/js/71.610f9d30.js",
    "revision": "d58a76eec529b93e20aec090ade0d8c7"
  },
  {
    "url": "assets/js/72.a533b309.js",
    "revision": "f5b41f866aaee26b7c906440573c8fb6"
  },
  {
    "url": "assets/js/73.47a7017a.js",
    "revision": "000404d950f46a66b1aa8af794f4e1f8"
  },
  {
    "url": "assets/js/74.884175d4.js",
    "revision": "5ec3b19e2b5f1b1e063e238ce1515084"
  },
  {
    "url": "assets/js/75.7e90906b.js",
    "revision": "4ea804deda8e98e45c2b046f3813fafb"
  },
  {
    "url": "assets/js/76.8649163b.js",
    "revision": "daed3007fa91107888efa370104972e5"
  },
  {
    "url": "assets/js/77.7e6587b3.js",
    "revision": "03e9aa48018573249236d795ee6461e3"
  },
  {
    "url": "assets/js/78.48fe1417.js",
    "revision": "8555a3332251def8c8f801966a71aab9"
  },
  {
    "url": "assets/js/79.e023bfd2.js",
    "revision": "7c987e94f3316507e5465966e4666cb0"
  },
  {
    "url": "assets/js/80.9a1ad9d6.js",
    "revision": "55ab145680fb4a4a0ad87f78b42efb9c"
  },
  {
    "url": "assets/js/81.54ffdbea.js",
    "revision": "a4397a6859627990bae93d6f1d4c2e3a"
  },
  {
    "url": "assets/js/82.ea0fc47d.js",
    "revision": "b8f60e95be49841e797d51cfd7f1a37c"
  },
  {
    "url": "assets/js/83.38b0159b.js",
    "revision": "7ca151c07e8d1e67701c13f1a363ada3"
  },
  {
    "url": "assets/js/84.a8e634de.js",
    "revision": "1a3c1d9d7191a69069ead12836fa8f3d"
  },
  {
    "url": "assets/js/85.08e1828f.js",
    "revision": "4c1e6be19d006986ab5a2106917bc3c4"
  },
  {
    "url": "assets/js/86.e63b026c.js",
    "revision": "d5e6f4c65b2779a22d850d8022234323"
  },
  {
    "url": "assets/js/87.68f8125d.js",
    "revision": "e4088e4afda4e435a65d2b903d960a22"
  },
  {
    "url": "assets/js/88.5370b1cf.js",
    "revision": "e2d6d95d7d6c4d4eefe0f69c04f03f0a"
  },
  {
    "url": "assets/js/89.9c9cd8a1.js",
    "revision": "1295bf2f2cdd70daac82eccc89c80823"
  },
  {
    "url": "assets/js/90.b6ff9af1.js",
    "revision": "c65073d8fdece670bf3ee32a55e10d1c"
  },
  {
    "url": "assets/js/91.8adfefd2.js",
    "revision": "4c801e8ed04bf509192f18f91b8ab53f"
  },
  {
    "url": "assets/js/92.1fd67fc7.js",
    "revision": "197152907bbcb0116d94f2845bab9455"
  },
  {
    "url": "assets/js/app.b11af655.js",
    "revision": "4bb007f1cf6a001806e57220b387f0b2"
  },
  {
    "url": "assets/js/vendors~docsearch.969cea78.js",
    "revision": "263550575d0bea08c0d5156df905a730"
  },
  {
    "url": "draft/quick-notes.html",
    "revision": "6715355a7bfdbaf8e99ec975c3a7bd62"
  },
  {
    "url": "html/bootstrap/cards.html",
    "revision": "ad35273c163ae9d3124411aeb9afa6c4"
  },
  {
    "url": "html/bootstrap/forms/checks-radios.html",
    "revision": "be482436b4345e07cf1957ec48be248e"
  },
  {
    "url": "html/bootstrap/forms/floating-labels.html",
    "revision": "9debf7ecb64b735ff9109e391f1b0fc3"
  },
  {
    "url": "html/bootstrap/forms/form-control.html",
    "revision": "b4088001b4550375395463304ad64a69"
  },
  {
    "url": "html/bootstrap/forms/index.html",
    "revision": "f0a25d0aeadf908e4015a5b52cd894f2"
  },
  {
    "url": "html/bootstrap/forms/layout.html",
    "revision": "5e390da14bd04183179eeb76b63de393"
  },
  {
    "url": "html/bootstrap/forms/select.html",
    "revision": "287abe8f9a987ba59d1c22fb80e76190"
  },
  {
    "url": "html/bootstrap/forms/validation.html",
    "revision": "dd7bda5c943edfaf8b82b4f8a2a86413"
  },
  {
    "url": "html/bootstrap/index.html",
    "revision": "e1a8787cf01490cf436313c5f9193f89"
  },
  {
    "url": "html/bootstrap/tables.html",
    "revision": "db1bd8734c021bcba86cdac95dd2ddcd"
  },
  {
    "url": "html/tailwind/customization/index.html",
    "revision": "5e383d47bd5c827a0d3d7a276e43db03"
  },
  {
    "url": "html/tailwind/customization/presets.html",
    "revision": "c763f355b3fcb352a6d6884f00492c6d"
  },
  {
    "url": "html/tailwind/directives.html",
    "revision": "e0ba8a4715b580b86738def497ff69d1"
  },
  {
    "url": "html/tailwind/index.html",
    "revision": "0dd8f8d92b78031c709f5e28ad2cace6"
  },
  {
    "url": "htmx/index.html",
    "revision": "69f07ecb890c106c00f10eb81e691ed2"
  },
  {
    "url": "index.html",
    "revision": "ad68989dabc3831c7f4810f7558bb5f5"
  },
  {
    "url": "javascript/alpinejs/index.html",
    "revision": "c44b5793a1358469a843a9ae8506315d"
  },
  {
    "url": "javascript/alpinejs/textarea.html",
    "revision": "ff9e17e56d862819983aafabfb3d1bbf"
  },
  {
    "url": "javascript/modules.html",
    "revision": "2e0f5717cb0d3f26d72600b20e493db9"
  },
  {
    "url": "livewire/components/index.html",
    "revision": "5ae155488e511e099ce3c99c2ffc0625"
  },
  {
    "url": "livewire/components/pagination.html",
    "revision": "f76c258b0144717c9d8fcfcba804bb94"
  },
  {
    "url": "livewire/installation.html",
    "revision": "00fbb5581c4aa5622834403fd9091175"
  },
  {
    "url": "other/priority-levels.html",
    "revision": "af8f61f056533dc52c2e07995ffee434"
  },
  {
    "url": "other/static-site-generators.html",
    "revision": "c0ecf9be2d08e8d604e96f076e7ab8c6"
  },
  {
    "url": "php/arrays/sorting-arrays.html",
    "revision": "a8353955c790412cbd4ab1819fcaa6de"
  },
  {
    "url": "php/classes/pagination.html",
    "revision": "767d1b57c9f083c2c2c6e6dbaab0cd9f"
  },
  {
    "url": "php/classes/pdo.html",
    "revision": "d9331602e4711ed3347d0a8deb7399ed"
  },
  {
    "url": "php/laravel/blade/components.html",
    "revision": "da826306ad141a7d30987a0c1177d0f8"
  },
  {
    "url": "php/laravel/blade/directives.html",
    "revision": "8021763c2f8fca7f3da03340f7df1372"
  },
  {
    "url": "php/laravel/blade/index.html",
    "revision": "6cc0f18f19491d088d04bda38187c0c5"
  },
  {
    "url": "php/laravel/controller.html",
    "revision": "1daa96aea5cc381073c681dafbfe74a6"
  },
  {
    "url": "php/laravel/database/factories.html",
    "revision": "efa40d830cfbba7988851e6d761f8241"
  },
  {
    "url": "php/laravel/database/index.html",
    "revision": "ae375f3400a2ddf1641cafa613e1cfe9"
  },
  {
    "url": "php/laravel/database/migrations.html",
    "revision": "0c700d6de6e309747849051d52cfb8f0"
  },
  {
    "url": "php/laravel/database/model.html",
    "revision": "b65bb06640edf7d33a1991282a33d8aa"
  },
  {
    "url": "php/laravel/database/observer.html",
    "revision": "b07d13287650c77761c0ac8440816c19"
  },
  {
    "url": "php/laravel/database/queries.html",
    "revision": "84e62d1ce1a58515b0799c9c8ee9e84e"
  },
  {
    "url": "php/laravel/database/scopes.html",
    "revision": "51bda05b7826e2b9288226c392ef5f43"
  },
  {
    "url": "php/laravel/database/seeders.html",
    "revision": "57eb00fb45aa13d207edd5bbbd569a8d"
  },
  {
    "url": "php/laravel/enums.html",
    "revision": "7c7c12efc981849d4798eda10c8d5fb8"
  },
  {
    "url": "php/laravel/index.html",
    "revision": "912714bbf286d1916f364c874b580fb0"
  },
  {
    "url": "php/laravel/package-development/index.html",
    "revision": "5541f09d0ea13fc7d9547742bfcd0407"
  },
  {
    "url": "php/laravel/package-development/laravel-packager.html",
    "revision": "5cf3abffc5bf1d057f071797fe4e8cef"
  },
  {
    "url": "php/laravel/package-development/views.html",
    "revision": "1fc5aae03aae03b2b07e059eaae46858"
  },
  {
    "url": "php/laravel/packages/guides/index.html",
    "revision": "e49aaf3d4a9e2f7e8df42f706ed1f247"
  },
  {
    "url": "php/laravel/packages/guides/spatie-activity-log.html",
    "revision": "dce668863dbcddff287dabf4db1ecec0"
  },
  {
    "url": "php/laravel/packages/guides/spatie-comments.html",
    "revision": "58a94b1a2c80477c65537b45000d508e"
  },
  {
    "url": "php/laravel/packages/guides/spatie-feed.html",
    "revision": "40ee19506da9079b54f394d6bf07ddeb"
  },
  {
    "url": "php/laravel/packages/guides/spatie-media-library.html",
    "revision": "2e56902809ab34bd6aa2772a3a06b891"
  },
  {
    "url": "php/laravel/packages/guides/spatie-permissions.html",
    "revision": "ae8554921ef6190462001caedc772ad6"
  },
  {
    "url": "php/laravel/packages/guides/spatie-query-builder.html",
    "revision": "f8402227dde04064816041517ca77e55"
  },
  {
    "url": "php/laravel/packages/guides/spatie-settings.html",
    "revision": "03b7fd591e6814792154d5de1daabfda"
  },
  {
    "url": "php/laravel/packages/index.html",
    "revision": "29beb54e73f837a9a441680a58e708a0"
  },
  {
    "url": "php/laravel/policies.html",
    "revision": "be1b973143c42ee8d7bd0eefe174bce6"
  },
  {
    "url": "php/laravel/relationships/belongs-to-many.html",
    "revision": "8445b0b3169e908fadbcd083e205cc68"
  },
  {
    "url": "php/laravel/relationships/index.html",
    "revision": "fb2effd26666b0a056d415864d6d5aa1"
  },
  {
    "url": "php/laravel/relationships/many-to-many.html",
    "revision": "f52bb92613ae4c8e9d449babc910c720"
  },
  {
    "url": "php/laravel/routes.html",
    "revision": "6f435ffb4baf9b14032dd5149267e491"
  },
  {
    "url": "php/laravel/testing/controller-methods.html",
    "revision": "ba0381ad4cc7ea48487f95ae149aed9e"
  },
  {
    "url": "php/laravel/testing/index.html",
    "revision": "0a6d2426f86ad4883a047c803dab99bb"
  },
  {
    "url": "php/laravel/tinker/index.html",
    "revision": "a3a5b589288805254de5cba563d67d6b"
  },
  {
    "url": "php/laravel/traits/index.html",
    "revision": "9ec46acbf5d5e19bc14696e08b7ac197"
  },
  {
    "url": "php/laravel/traits/scopes.html",
    "revision": "34b7ac234a3d74fa0e116881fbb66127"
  },
  {
    "url": "php/laravel/validation/form-request.html",
    "revision": "7f1614503d178e1d6ed6434d06411db1"
  },
  {
    "url": "php/laravel/validation/index.html",
    "revision": "650da270deb97576d119b56e892d385c"
  },
  {
    "url": "php/laravel/validation/validation-rules.html",
    "revision": "e528fe6770852cb10f7df9c044044a67"
  },
  {
    "url": "php/laravel/views.html",
    "revision": "479abaf53923b19f95929750f7c1ac42"
  },
  {
    "url": "php/nova/fields.html",
    "revision": "faee991de36291f30c75db6ef3f6dd76"
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
