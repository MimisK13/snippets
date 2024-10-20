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
    "revision": "73a3d3f9c1b6580594bce4ddcac39ce3"
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
    "url": "assets/js/23.bb96a07b.js",
    "revision": "f98bcd2dab82370e37eaf10665674248"
  },
  {
    "url": "assets/js/24.d1015dbc.js",
    "revision": "e4ce5c7be034852faf27674c4f01a7b2"
  },
  {
    "url": "assets/js/25.bb9dad64.js",
    "revision": "86eda2076cb23c765420e23b50e2478d"
  },
  {
    "url": "assets/js/26.e12e8262.js",
    "revision": "8ec9b8081b478ecd36207c34092cc1cc"
  },
  {
    "url": "assets/js/27.13ca9391.js",
    "revision": "16e02e9191eedc08e83fa5e8b7c3ffa5"
  },
  {
    "url": "assets/js/28.89976fd7.js",
    "revision": "e76c2f96fd10cedb41a51031dae8708f"
  },
  {
    "url": "assets/js/29.4d0d8f43.js",
    "revision": "ae2ef7b510f66805d00ad697ccc60a83"
  },
  {
    "url": "assets/js/3.0f93d13b.js",
    "revision": "c73ed72469e458a5cc29bbce3cd1ff34"
  },
  {
    "url": "assets/js/30.9033762a.js",
    "revision": "c7aa41b89e99f42ce795a761ccbd8555"
  },
  {
    "url": "assets/js/31.b5d67ae7.js",
    "revision": "8a5c7c13a6e4849af58908f6156380bf"
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
    "url": "assets/js/35.b2eba713.js",
    "revision": "e92eb8dccc6f96873bc0a73d4e0de6f1"
  },
  {
    "url": "assets/js/36.16f1b8d5.js",
    "revision": "ff079137d3203d855747e28e48ac1b5e"
  },
  {
    "url": "assets/js/37.9ab6d392.js",
    "revision": "b49ebe34af9d064d8238a71d0c82c148"
  },
  {
    "url": "assets/js/38.dc4c38ab.js",
    "revision": "ec4b5693ca08c8550b11c6857f7648b7"
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
    "url": "assets/js/40.7317c921.js",
    "revision": "3082810a8fde7884f05845b01e78e971"
  },
  {
    "url": "assets/js/41.1c8175b8.js",
    "revision": "51bc873302872b9a9b591836d3e55ed0"
  },
  {
    "url": "assets/js/42.a798d788.js",
    "revision": "7ac1a943f5b29c40b7164e693cacd361"
  },
  {
    "url": "assets/js/43.6fe6c67d.js",
    "revision": "c81af9da22654fc8e966a5dc0f3d7824"
  },
  {
    "url": "assets/js/44.4ec6093b.js",
    "revision": "520673435bb3fe8b3dc011143b91d71c"
  },
  {
    "url": "assets/js/45.c29f7cb4.js",
    "revision": "3366c4b9b3ef2a917082446a77c799d0"
  },
  {
    "url": "assets/js/46.a2b8f037.js",
    "revision": "bf924e51575f4c285918b7739e9aff9f"
  },
  {
    "url": "assets/js/47.9b5ab7bb.js",
    "revision": "353ab011c6988443ed4d70d3198fc592"
  },
  {
    "url": "assets/js/48.53a97c2e.js",
    "revision": "efbef2e2b718747c12cf8c94c15de333"
  },
  {
    "url": "assets/js/49.9b1f1d79.js",
    "revision": "af8c7af73ca0c7f25e92bcbd83af4bce"
  },
  {
    "url": "assets/js/5.5f56e599.js",
    "revision": "cd727eea6383170f890c3718ead88269"
  },
  {
    "url": "assets/js/50.38ade15b.js",
    "revision": "c98d70eb7c4072ea0f7f7e897cee3093"
  },
  {
    "url": "assets/js/51.40b4952d.js",
    "revision": "f772aac14fd6bc9ac56a0f0a9c3b31ef"
  },
  {
    "url": "assets/js/52.bce4ddaf.js",
    "revision": "df641390c1a3ed027db7224ab5fcf290"
  },
  {
    "url": "assets/js/53.a5007c3c.js",
    "revision": "85efcfe2a8280f55ad4ca80bfd464850"
  },
  {
    "url": "assets/js/54.517e28b3.js",
    "revision": "0437d2a25df85c596872c41abbd2763c"
  },
  {
    "url": "assets/js/55.a4b1afb1.js",
    "revision": "c891c7b259d7ecf97ab677a1e2a3553c"
  },
  {
    "url": "assets/js/56.cd523e6d.js",
    "revision": "b0daf6a2c2c2501df2680ea9fc40e6c0"
  },
  {
    "url": "assets/js/57.373d95ac.js",
    "revision": "40dd7030ea570e84e886991c8307357f"
  },
  {
    "url": "assets/js/58.b137df79.js",
    "revision": "fa1f17d45b8fa78fe251f4a3fcced05c"
  },
  {
    "url": "assets/js/59.143cee5f.js",
    "revision": "00324e5fe7e319e97b8d315695a4aa16"
  },
  {
    "url": "assets/js/6.7eac5493.js",
    "revision": "ef204e8d9470c24f49d1a5e2b003603d"
  },
  {
    "url": "assets/js/60.a2ff16a3.js",
    "revision": "ffb626492de2ab012f0ea9650367bf98"
  },
  {
    "url": "assets/js/61.49d2f816.js",
    "revision": "27e5ebaf2f835fc24fca254958995328"
  },
  {
    "url": "assets/js/62.fb9367be.js",
    "revision": "7cdd5fbfd94e95b2a0435e26295f9b09"
  },
  {
    "url": "assets/js/63.4762f889.js",
    "revision": "73123eb7b2c3698eb205800e14ee2f1e"
  },
  {
    "url": "assets/js/64.64ad970f.js",
    "revision": "08903d8c9985bc3f46510303937bd089"
  },
  {
    "url": "assets/js/65.de78b607.js",
    "revision": "c30738e27052c7f98b20a2f9ca821945"
  },
  {
    "url": "assets/js/66.f6f40516.js",
    "revision": "40bb06c2e802baa54f9bfaa30ef2d088"
  },
  {
    "url": "assets/js/67.24f90ff1.js",
    "revision": "936995f327a96910c66afcfb785eda2d"
  },
  {
    "url": "assets/js/68.506208ee.js",
    "revision": "e8266c3a8686ae73704d48db006b85d2"
  },
  {
    "url": "assets/js/69.7a69e1a9.js",
    "revision": "c0b3625e86d090dc3b6cee001911c8d8"
  },
  {
    "url": "assets/js/7.a44acbec.js",
    "revision": "9ead157c5b41c494b5a7be001cc380dd"
  },
  {
    "url": "assets/js/70.e0293e9e.js",
    "revision": "738fc369becc063bb9711be2e9d75d25"
  },
  {
    "url": "assets/js/71.6b7a499a.js",
    "revision": "1fb399fa1f6758e6e8adc443264906c7"
  },
  {
    "url": "assets/js/72.a775e1c7.js",
    "revision": "dd19445b585a3e438be34d12bb9c0cc5"
  },
  {
    "url": "assets/js/73.9aac2178.js",
    "revision": "e2b6c80f6fee77b9e7fc406fd7a05790"
  },
  {
    "url": "assets/js/74.e848f975.js",
    "revision": "44c8735b7f1bfffe8dc650bc57c783f1"
  },
  {
    "url": "assets/js/75.e3c9f466.js",
    "revision": "f8900053b6396c26e1690e1882e7e866"
  },
  {
    "url": "assets/js/76.41b08cc0.js",
    "revision": "dd2460354604faa2155ed42ab8082a40"
  },
  {
    "url": "assets/js/77.aa62317a.js",
    "revision": "93e9a389d5f45d879c15206f1c8b304c"
  },
  {
    "url": "assets/js/78.d8728e16.js",
    "revision": "eaa85e3ce835de1a008214802a5d6bef"
  },
  {
    "url": "assets/js/79.3ffd39fd.js",
    "revision": "185fdf37a77d580405e70fd5dbb2c8b4"
  },
  {
    "url": "assets/js/80.29c2a855.js",
    "revision": "76f915ddd7f8a3bbb59dfad4d7af5740"
  },
  {
    "url": "assets/js/81.9a7d6961.js",
    "revision": "9a5e34e71574e6684b1657d64a29c16e"
  },
  {
    "url": "assets/js/82.a5c3e397.js",
    "revision": "b2cc1e61a011a75a76f00acc2252ebfb"
  },
  {
    "url": "assets/js/83.1a4bbd29.js",
    "revision": "686102b2869867937f70bee0b446a16b"
  },
  {
    "url": "assets/js/84.bedbaff7.js",
    "revision": "2666fca383fde98d3bdfb74f3c4de7a7"
  },
  {
    "url": "assets/js/85.7208d006.js",
    "revision": "5b9be0c463b661e85578fb0fcc78cc6a"
  },
  {
    "url": "assets/js/86.04d73061.js",
    "revision": "1569e8b12d32e576655ad4d6f7ab9e33"
  },
  {
    "url": "assets/js/87.83f7dc7d.js",
    "revision": "094e1ca565167235294fba1672d69896"
  },
  {
    "url": "assets/js/88.afe65280.js",
    "revision": "72c3b1a05229dfa85db936021b5e32b2"
  },
  {
    "url": "assets/js/89.a84c612a.js",
    "revision": "b16464b107dcdba82a843e5e6bf0b759"
  },
  {
    "url": "assets/js/90.fb8f6f40.js",
    "revision": "8be5eec49a7bc2bb90a237749f9777e4"
  },
  {
    "url": "assets/js/app.d0864954.js",
    "revision": "1253166e5f827aee16f42c3b6ab1c10a"
  },
  {
    "url": "assets/js/vendors~docsearch.969cea78.js",
    "revision": "263550575d0bea08c0d5156df905a730"
  },
  {
    "url": "html/bootstrap/cards.html",
    "revision": "0a6c435d681c0d34006bde99ab07833c"
  },
  {
    "url": "html/bootstrap/forms/checks-radios.html",
    "revision": "1de38099708e7b36e2ac344e12ad82a6"
  },
  {
    "url": "html/bootstrap/forms/floating-labels.html",
    "revision": "b703d263b1e3818626bd60c74350f6d1"
  },
  {
    "url": "html/bootstrap/forms/form-control.html",
    "revision": "561c8773a3b841a3d5fb51bc8c503341"
  },
  {
    "url": "html/bootstrap/forms/index.html",
    "revision": "9d738a94569f54db9b4904029d955374"
  },
  {
    "url": "html/bootstrap/forms/layout.html",
    "revision": "4951a8a84bd5e2a8a579f4d35c4eaef1"
  },
  {
    "url": "html/bootstrap/forms/select.html",
    "revision": "6c7bd9884a6eb5392f0daf972db82754"
  },
  {
    "url": "html/bootstrap/forms/validation.html",
    "revision": "dd1d7454727fb68f06fd92ce403d356a"
  },
  {
    "url": "html/bootstrap/index.html",
    "revision": "2c6f3e5456955de7bc630c585290f75c"
  },
  {
    "url": "html/bootstrap/tables.html",
    "revision": "ba0854e851257b8f49d71cb14a54c8a7"
  },
  {
    "url": "html/tailwind/customization/index.html",
    "revision": "f1cf43bad9eb6116200ad17159d61236"
  },
  {
    "url": "html/tailwind/customization/presets.html",
    "revision": "0a962aad675b11da76aa0cf00af27e16"
  },
  {
    "url": "html/tailwind/directives.html",
    "revision": "2ad339ad885bcfdbe4e7e82ee779b3c3"
  },
  {
    "url": "html/tailwind/index.html",
    "revision": "b484073defaad7c29338b182f4e2580b"
  },
  {
    "url": "index.html",
    "revision": "12e38c3e12bf376c03b1cdb2a992a7e5"
  },
  {
    "url": "javascript/alpinejs/index.html",
    "revision": "bfe2f956a5314132a1502a8a15570972"
  },
  {
    "url": "javascript/alpinejs/textarea.html",
    "revision": "5405af2f32f71f3aee4a191140d16ab3"
  },
  {
    "url": "javascript/modules.html",
    "revision": "93e4e6ff40ccca16d3b299d21851cd49"
  },
  {
    "url": "livewire/components/index.html",
    "revision": "335a8dda2fc2107feee383209554af76"
  },
  {
    "url": "livewire/components/pagination.html",
    "revision": "963dd5e6ad37cb5be21dd84e9fae6fe7"
  },
  {
    "url": "livewire/installation.html",
    "revision": "25f1394a1be3b6ac145f752cb834a25b"
  },
  {
    "url": "other/priority-levels.html",
    "revision": "9c3c518c958416e31ab89d66472a21d7"
  },
  {
    "url": "other/static-site-generators.html",
    "revision": "9c42d1d08c0ed419e4d124d7e56efe1d"
  },
  {
    "url": "php/arrays/sorting-arrays.html",
    "revision": "795fd70aad217e53071d826af65ad51b"
  },
  {
    "url": "php/classes/pagination.html",
    "revision": "b552964ada8eb474ea52f1ad812aedb8"
  },
  {
    "url": "php/classes/pdo.html",
    "revision": "90c79a00a12b5ad16af78242b3510aba"
  },
  {
    "url": "php/laravel/blade/components.html",
    "revision": "7d7648806866c6dc788f043890ade42c"
  },
  {
    "url": "php/laravel/blade/directives.html",
    "revision": "7dced41f4ffd377f475b4d6ddb3af4ec"
  },
  {
    "url": "php/laravel/blade/index.html",
    "revision": "4d5989f6752af206e3e11ae758dfcd10"
  },
  {
    "url": "php/laravel/controller.html",
    "revision": "b8efc93a774b669f3ae39c5ab5212bca"
  },
  {
    "url": "php/laravel/database/factories.html",
    "revision": "854a2b7e8c20a8952b0f76aec93fd524"
  },
  {
    "url": "php/laravel/database/index.html",
    "revision": "c483c8f8299efbff445104aee860bd46"
  },
  {
    "url": "php/laravel/database/migrations.html",
    "revision": "1fc9edfc12eea75c176979f45835c43b"
  },
  {
    "url": "php/laravel/database/model.html",
    "revision": "7b0b1646533046ff3473b49b84ccae33"
  },
  {
    "url": "php/laravel/database/observer.html",
    "revision": "1b591196d7b43e5be85d61a4b3b0500c"
  },
  {
    "url": "php/laravel/database/queries.html",
    "revision": "94ae8519ffbaf0970220d2f59503e45b"
  },
  {
    "url": "php/laravel/database/scopes.html",
    "revision": "1f219955b65a226720ebfe45ba7f2f37"
  },
  {
    "url": "php/laravel/database/seeders.html",
    "revision": "a9faaeff0c590a1ad43e4a420218f951"
  },
  {
    "url": "php/laravel/enums.html",
    "revision": "dea95f21f5292f8f9073740aee868ad0"
  },
  {
    "url": "php/laravel/index.html",
    "revision": "c1bd845630a9f36c92ff8b0f5deacb2e"
  },
  {
    "url": "php/laravel/package-development/index.html",
    "revision": "f55eaaa968047a7794c46d5ebdb44d3e"
  },
  {
    "url": "php/laravel/package-development/laravel-packager.html",
    "revision": "3b65cffe6c7ccfba072ff2c2cce2c01b"
  },
  {
    "url": "php/laravel/package-development/views.html",
    "revision": "59aa8ca6e2dcba5a8842dc8e5c1c8de8"
  },
  {
    "url": "php/laravel/packages/guides/index.html",
    "revision": "c582511c81af251e6c21f08fd96282b5"
  },
  {
    "url": "php/laravel/packages/guides/spatie-activity-log.html",
    "revision": "f121d7c6ced5dc59bcae4a7aaaf64491"
  },
  {
    "url": "php/laravel/packages/guides/spatie-comments.html",
    "revision": "fb906fd6e635eb3dfacb09b2290d9a14"
  },
  {
    "url": "php/laravel/packages/guides/spatie-feed.html",
    "revision": "939bceba546f17dc366338c9ce59066f"
  },
  {
    "url": "php/laravel/packages/guides/spatie-media-library.html",
    "revision": "db9f5e7463ea7795b656644bb039fa6f"
  },
  {
    "url": "php/laravel/packages/guides/spatie-permissions.html",
    "revision": "82da2818aa769f1b23e0ff4c17c7309b"
  },
  {
    "url": "php/laravel/packages/guides/spatie-query-builder.html",
    "revision": "c514e689d94becb5671b92f187ec20db"
  },
  {
    "url": "php/laravel/packages/guides/spatie-settings.html",
    "revision": "634a4ce1e05361ae38edc866f27b8dee"
  },
  {
    "url": "php/laravel/packages/index.html",
    "revision": "c517693c6448f727a0493226b594a36d"
  },
  {
    "url": "php/laravel/policies.html",
    "revision": "77f356e7d50ed79bd87405afe3f53f46"
  },
  {
    "url": "php/laravel/relationships/belongs-to-many.html",
    "revision": "28195e67f8569636de8b9ad9bf059450"
  },
  {
    "url": "php/laravel/relationships/index.html",
    "revision": "6d592ce558e710d3fa109be0c3034dbf"
  },
  {
    "url": "php/laravel/relationships/many-to-many.html",
    "revision": "e60552ca4da7f7575529b31abadf57d8"
  },
  {
    "url": "php/laravel/routes.html",
    "revision": "3388e08239b55ee0ebffae49ab37b80b"
  },
  {
    "url": "php/laravel/testing/controller-methods.html",
    "revision": "7a3273543efafe641f29d8fa2f4699de"
  },
  {
    "url": "php/laravel/testing/index.html",
    "revision": "093bdc8a49e66bd34d5d1655f065c3fa"
  },
  {
    "url": "php/laravel/tinker/index.html",
    "revision": "d90172c3326a0f010cd3c8af46482bed"
  },
  {
    "url": "php/laravel/traits/index.html",
    "revision": "c4d868c224dab2e357c4b20f0da8cecd"
  },
  {
    "url": "php/laravel/traits/scopes.html",
    "revision": "a3206700efc990b8a401421723aee74f"
  },
  {
    "url": "php/laravel/validation/form-request.html",
    "revision": "6bf2342daf85192e52a3bb5670a4eb21"
  },
  {
    "url": "php/laravel/validation/index.html",
    "revision": "b0c3afc79edd407153b888a0f36ee8dd"
  },
  {
    "url": "php/laravel/validation/validation-rules.html",
    "revision": "0bb3dd925d80d3332016e05a9e93fd09"
  },
  {
    "url": "php/laravel/views.html",
    "revision": "8874d58cdeb7fc4d0a5cc7898dd15610"
  },
  {
    "url": "php/nova/fields.html",
    "revision": "2f56695f52e401729578f306a2b4590b"
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
