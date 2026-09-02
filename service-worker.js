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
    "revision": "c16dbfe100235cbdad810c388f380baa"
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
    "url": "assets/js/100.03250797.js",
    "revision": "ef22e82bc4846f3555e64f80715539cb"
  },
  {
    "url": "assets/js/101.2f2239ac.js",
    "revision": "cf10721dbccea3350913f192e0de832e"
  },
  {
    "url": "assets/js/102.df09b04a.js",
    "revision": "e629919c4d15f69a745fb8e61b588d60"
  },
  {
    "url": "assets/js/103.bab2dcbf.js",
    "revision": "cba030896ac8938ca7bac4ef5c9b87c1"
  },
  {
    "url": "assets/js/104.736caca3.js",
    "revision": "cccada85467e0a87e011de6cdf5f3670"
  },
  {
    "url": "assets/js/105.1e24bf61.js",
    "revision": "1a26a651ce69c151f55b76b6b893a259"
  },
  {
    "url": "assets/js/106.2275423c.js",
    "revision": "2bc1f87c3276ac85748f970e2d53ec25"
  },
  {
    "url": "assets/js/107.66103140.js",
    "revision": "31cb80ded1b29f5a2d34bda1f1b66d8c"
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
    "url": "assets/js/24.9b2d7c7c.js",
    "revision": "bebac7664d102478d4d74596d99fd71d"
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
    "url": "assets/js/28.12089762.js",
    "revision": "b243d7d2b4d910d1055420bb2e7156fa"
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
    "url": "assets/js/30.47a3257d.js",
    "revision": "b09a82e6aadda200968f805a30d5c633"
  },
  {
    "url": "assets/js/31.5a5f6aa1.js",
    "revision": "9f6a42f45e175f537588ed777c2146ad"
  },
  {
    "url": "assets/js/32.6550a0e5.js",
    "revision": "78d97ae569ed7dac4bbb56c6aee4a01b"
  },
  {
    "url": "assets/js/33.f2fcf224.js",
    "revision": "6d30d6a6c2eb953f4a9b0f8c0ce23545"
  },
  {
    "url": "assets/js/34.461b80ea.js",
    "revision": "484bcd492d5ad1711f40804818c565ff"
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
    "url": "assets/js/39.b7a22357.js",
    "revision": "6db42df9a67d3ec971937e9ebd3bb884"
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
    "url": "assets/js/41.804b5854.js",
    "revision": "caee2a97cfd8e606b08f94ac6b344cef"
  },
  {
    "url": "assets/js/42.c47375ea.js",
    "revision": "b6b558f13389155c815cf936644682ee"
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
    "url": "assets/js/48.f71946a4.js",
    "revision": "b0b15efbab2ca2de8d6b37f1b84ec53f"
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
    "url": "assets/js/50.5307fd31.js",
    "revision": "dbdab15047f9c6e24545f12fadd63cf9"
  },
  {
    "url": "assets/js/51.5459b96a.js",
    "revision": "005bdb8fd0b11cf2249c6a173b52aba6"
  },
  {
    "url": "assets/js/52.55bed9f2.js",
    "revision": "40eed5e6e426e6175a65bfc8b0c2f683"
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
    "url": "assets/js/61.10cd84b5.js",
    "revision": "fb2629660aee95024dbe4c8317a80074"
  },
  {
    "url": "assets/js/62.86d05602.js",
    "revision": "5aef081962e93fe4a9e8beab57c4518e"
  },
  {
    "url": "assets/js/63.19fd706f.js",
    "revision": "028f1f5e71d30f800e67298bc3e8c334"
  },
  {
    "url": "assets/js/64.c668f991.js",
    "revision": "d0544235b4599d18d423ae58c10730cc"
  },
  {
    "url": "assets/js/65.c9414e02.js",
    "revision": "c0868f5e205367a971af751a7dbd6238"
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
    "url": "assets/js/68.8e91a15c.js",
    "revision": "58a420e83fd53a4fc1517b0a33da9132"
  },
  {
    "url": "assets/js/69.e6f61460.js",
    "revision": "d963920e035afb7a717bd976688b5de8"
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
    "url": "assets/js/75.beedee44.js",
    "revision": "47dc8bfd1293166e714201c5b85814f0"
  },
  {
    "url": "assets/js/76.3d399d6c.js",
    "revision": "4c0b7aa663766b0e36443d274065b375"
  },
  {
    "url": "assets/js/77.697b80e3.js",
    "revision": "ebf760b6ee5c2ae99e40da2c0f2fe641"
  },
  {
    "url": "assets/js/78.9d8036ad.js",
    "revision": "602f42dc378a4dd2f3fa50f061bcd891"
  },
  {
    "url": "assets/js/79.8f9a7afa.js",
    "revision": "93d8ed2e652414fc01ba9dc260426916"
  },
  {
    "url": "assets/js/80.665a1298.js",
    "revision": "73df31b0bc988035d7ca59f047a4bded"
  },
  {
    "url": "assets/js/81.cc9fa0cf.js",
    "revision": "2a69c529259fd0b6d5dfb89c08b85c94"
  },
  {
    "url": "assets/js/82.d3f220a3.js",
    "revision": "893c3da5d2ca7c7ee7a6e9ece61a3fd1"
  },
  {
    "url": "assets/js/83.271eb8ef.js",
    "revision": "2dd03e19bb2c58a03389cdd6b9286045"
  },
  {
    "url": "assets/js/84.c17081d3.js",
    "revision": "9601b514190cf818342ce2a064b0d5cf"
  },
  {
    "url": "assets/js/85.d2b0c1b9.js",
    "revision": "b48a552e0f3555d5e5b9c10a4d9f5082"
  },
  {
    "url": "assets/js/86.117ad058.js",
    "revision": "56c6daf0ce8234f45d222ac65c6e3d3b"
  },
  {
    "url": "assets/js/87.7ff5a4fc.js",
    "revision": "9dff4a85e15d979b1ca42e92424ef947"
  },
  {
    "url": "assets/js/88.ed01580c.js",
    "revision": "aebe01cb469a16205bb8f4031fad794b"
  },
  {
    "url": "assets/js/89.290dee2c.js",
    "revision": "e076c7f9951fb890d1f5d62638790e9f"
  },
  {
    "url": "assets/js/90.15f04bbe.js",
    "revision": "4be513cab469b45459e967c00d057ccf"
  },
  {
    "url": "assets/js/91.b24f681b.js",
    "revision": "579f9f2233fca62f99a4348c46630f3c"
  },
  {
    "url": "assets/js/92.9223f971.js",
    "revision": "2d9c61f84ab9e309a1105b9af25d6c53"
  },
  {
    "url": "assets/js/93.5a147ded.js",
    "revision": "d97714d913250193afc5ed249152e3e5"
  },
  {
    "url": "assets/js/94.afbdbb97.js",
    "revision": "9474ca90fb2481708f1dffa9cde04be6"
  },
  {
    "url": "assets/js/95.f0550954.js",
    "revision": "8380f574be6233bbf948c7fcc827523f"
  },
  {
    "url": "assets/js/96.2c376e4b.js",
    "revision": "25b919c916b30ace8f114b34c24e1f8d"
  },
  {
    "url": "assets/js/97.4f777dec.js",
    "revision": "d16f254342444a55fa7fb4e52243c133"
  },
  {
    "url": "assets/js/98.265b0888.js",
    "revision": "b6f67c8ec9d2f21cc23aebb5903a8531"
  },
  {
    "url": "assets/js/99.fe907fc2.js",
    "revision": "65550a7ee70be97617b50f21cce78c6d"
  },
  {
    "url": "assets/js/app.052057da.js",
    "revision": "5f14c28e55c354ca69ba871bd28aa249"
  },
  {
    "url": "assets/js/vendors~docsearch.0644ee0a.js",
    "revision": "b77890ee16800d927f76d8f8f61a0875"
  },
  {
    "url": "draft/quick-notes.html",
    "revision": "a23aea309ac1b910cfde569ed1809d39"
  },
  {
    "url": "flux-ui/dropdowns.html",
    "revision": "eca1bbc7b8550d9e4b0b892634658f6a"
  },
  {
    "url": "flux-ui/tables.html",
    "revision": "a52a4dd11616c5dda9c5832d06691e2f"
  },
  {
    "url": "html/bootstrap/cards.html",
    "revision": "d0ac4eded08a835ff9e767f89c467f65"
  },
  {
    "url": "html/bootstrap/forms/checks-radios.html",
    "revision": "2133091e0460d13b66faa41a51c336f3"
  },
  {
    "url": "html/bootstrap/forms/floating-labels.html",
    "revision": "01ec1094da3b92796bea68b2cd2153a5"
  },
  {
    "url": "html/bootstrap/forms/form-control.html",
    "revision": "67312c6d4a48f27668fb2163f4b5351e"
  },
  {
    "url": "html/bootstrap/forms/index.html",
    "revision": "bcb223403a6293bd722e9f78bbef5854"
  },
  {
    "url": "html/bootstrap/forms/layout.html",
    "revision": "52ad351d44952002aba262459e8e8b2c"
  },
  {
    "url": "html/bootstrap/forms/select.html",
    "revision": "c54f1f8ccee5721aca6e44914f2bad69"
  },
  {
    "url": "html/bootstrap/forms/validation.html",
    "revision": "cc2c614cb4c2462df967cb2abe6350a8"
  },
  {
    "url": "html/bootstrap/index.html",
    "revision": "04982f113d845cc9811876e916e34c9f"
  },
  {
    "url": "html/bootstrap/tables.html",
    "revision": "440e8c60ad48d582e58c94dee654fd4f"
  },
  {
    "url": "html/tailwind/customization/index.html",
    "revision": "d1f68fc0d73656d98c8305e60528e48b"
  },
  {
    "url": "html/tailwind/customization/presets.html",
    "revision": "c5cf8e8873841c8e6b0e3c716dce3fd2"
  },
  {
    "url": "html/tailwind/directives.html",
    "revision": "e18cf5f9799c38ad015f88990c6b6e4e"
  },
  {
    "url": "html/tailwind/index.html",
    "revision": "0ec8db6b3db2785cbedbcabc60182c72"
  },
  {
    "url": "htmx/index.html",
    "revision": "43c1abc7cb8dae79a70b16ca6fa7640c"
  },
  {
    "url": "index.html",
    "revision": "3e6e764092278f97ba7a0980252bbbdd"
  },
  {
    "url": "javascript/alpinejs/index.html",
    "revision": "0388e2fbda00664ad71d5cfd1f0c025b"
  },
  {
    "url": "javascript/alpinejs/textarea.html",
    "revision": "2484c034de273b1c6b328fea1e3c4b3f"
  },
  {
    "url": "javascript/modules.html",
    "revision": "3b6fd7f3afd848237013d3344f5caa27"
  },
  {
    "url": "livewire/components/index.html",
    "revision": "91a9bb1505e46bdb8e6607deb80ba647"
  },
  {
    "url": "livewire/components/pagination.html",
    "revision": "72db9f51ac89a0de86f21be44121f51d"
  },
  {
    "url": "livewire/installation.html",
    "revision": "2b457174ed18405b4ee6cd479b8d03f7"
  },
  {
    "url": "nextjs/index.html",
    "revision": "c491b5e5bde807e27aa8383c184a24ea"
  },
  {
    "url": "nextjs/laravel-sanctum-auth.html",
    "revision": "5658d6cb3cd6c7f8305ea3251d7d5005"
  },
  {
    "url": "other/priority-levels.html",
    "revision": "613568e06f89701a008d54d57aac7206"
  },
  {
    "url": "other/static-site-generators.html",
    "revision": "0246cc8eb309ca09b0eab4dac3debfe8"
  },
  {
    "url": "php/arrays/sorting-arrays.html",
    "revision": "116cdec19b7319505406c0c8811c509a"
  },
  {
    "url": "php/classes/pagination.html",
    "revision": "cfe84c52e081c1cb18682a6057686147"
  },
  {
    "url": "php/classes/pdo.html",
    "revision": "b6ca81bddb3f56cc6310f257c58051f3"
  },
  {
    "url": "php/laravel/authorization/blade-directives/can.html",
    "revision": "0ca9e3a4e1f8b5df338a919b99d2c887"
  },
  {
    "url": "php/laravel/authorization/blade-directives/canany.html",
    "revision": "2cbddf1b0528dc56ff1a9449553f153f"
  },
  {
    "url": "php/laravel/authorization/blade-directives/cannot.html",
    "revision": "74b4dd85cf475823b804281682124f2e"
  },
  {
    "url": "php/laravel/authorization/blade-directives/index.html",
    "revision": "53eb4a5efda00cc83ad31e1b264706fd"
  },
  {
    "url": "php/laravel/authorization/gates.html",
    "revision": "aed61b6398e28e7e126fcd2862fea8e0"
  },
  {
    "url": "php/laravel/authorization/index.html",
    "revision": "ecbc1c5f6a4a07986aceee073434a1b2"
  },
  {
    "url": "php/laravel/authorization/policies.html",
    "revision": "b91c65df5a74bcc44abe5946fd928fa2"
  },
  {
    "url": "php/laravel/blade/components.html",
    "revision": "92bbc01da4fa9be0f009be7104c1c692"
  },
  {
    "url": "php/laravel/blade/directives.html",
    "revision": "dc424b711980758fdadda0f654363e9a"
  },
  {
    "url": "php/laravel/blade/index.html",
    "revision": "f8d63dbff449ce9951bdf93992e9e8fe"
  },
  {
    "url": "php/laravel/controller.html",
    "revision": "afe3adbe5f05ae38895f136ff7fad461"
  },
  {
    "url": "php/laravel/database/factories.html",
    "revision": "bfd93c8d90b03c884c86651c70312e44"
  },
  {
    "url": "php/laravel/database/index.html",
    "revision": "d845323cea1bbbb582e00bd8ace3272d"
  },
  {
    "url": "php/laravel/database/migrations.html",
    "revision": "fdb69ebbf5060ce761541de84a985f3e"
  },
  {
    "url": "php/laravel/database/model.html",
    "revision": "f6e3cce54fb1ae12e2c06c265095c873"
  },
  {
    "url": "php/laravel/database/observer.html",
    "revision": "cdc461d69a824f0286664e0f11bb6df7"
  },
  {
    "url": "php/laravel/database/queries.html",
    "revision": "3cc80c2977167cb81f35b260cb2c430b"
  },
  {
    "url": "php/laravel/database/scopes.html",
    "revision": "1d7c47649fa1ed5e08a95fe3afee9a69"
  },
  {
    "url": "php/laravel/database/seeders.html",
    "revision": "56c5c2bc5d5230bc41a123aa3bfba0f3"
  },
  {
    "url": "php/laravel/database/transactions.html",
    "revision": "d50537753193a296a121fa595486f93f"
  },
  {
    "url": "php/laravel/enums.html",
    "revision": "e0473319fd7d5e604d91a23b79d99033"
  },
  {
    "url": "php/laravel/index.html",
    "revision": "0f9b00da46cc5a62805f9200d77e5532"
  },
  {
    "url": "php/laravel/package-development/index.html",
    "revision": "ecf8e795db0a94eabd7e4f1a6dd74e9d"
  },
  {
    "url": "php/laravel/package-development/laravel-packager.html",
    "revision": "5a20738497774c4343a67935ceec7db9"
  },
  {
    "url": "php/laravel/package-development/views.html",
    "revision": "be2d73e99d2bd72f4e750ac36aabe58b"
  },
  {
    "url": "php/laravel/packages/guides/index.html",
    "revision": "301eae06ad0ee9bcde30492d1aa78f50"
  },
  {
    "url": "php/laravel/packages/guides/laravel-pint.html",
    "revision": "71fe29984fa6268351925fd83eebbb69"
  },
  {
    "url": "php/laravel/packages/guides/spatie-activity-log.html",
    "revision": "27ea050345f389a5f867b24101573bf8"
  },
  {
    "url": "php/laravel/packages/guides/spatie-comments.html",
    "revision": "6c3b288d4594d2498f742244f26d71f7"
  },
  {
    "url": "php/laravel/packages/guides/spatie-feed.html",
    "revision": "6348441a6e2bf907adfef1d683640881"
  },
  {
    "url": "php/laravel/packages/guides/spatie-media-library.html",
    "revision": "ddee9fb573c3a254ce3c47b581e9d99a"
  },
  {
    "url": "php/laravel/packages/guides/spatie-permissions.html",
    "revision": "27b831e6c7e396631eac2b74174216bb"
  },
  {
    "url": "php/laravel/packages/guides/spatie-query-builder.html",
    "revision": "f147cc40abce759473e2cfb1c8948a63"
  },
  {
    "url": "php/laravel/packages/guides/spatie-settings.html",
    "revision": "4766a01698814c3a1a3fba462ad4c5a3"
  },
  {
    "url": "php/laravel/packages/index.html",
    "revision": "dbf4db14328e5098df93e3b98abf7322"
  },
  {
    "url": "php/laravel/policies.html",
    "revision": "55aac16f00e4a109ee35e7cf9d03ca49"
  },
  {
    "url": "php/laravel/relationships/belongs-to-many.html",
    "revision": "2dfe00628d83c40432630bda74e23f66"
  },
  {
    "url": "php/laravel/relationships/index.html",
    "revision": "5d725f3f83dec56da2ad45df91dcea06"
  },
  {
    "url": "php/laravel/relationships/many-to-many.html",
    "revision": "c003048c42531feadebc1835904cbc9e"
  },
  {
    "url": "php/laravel/routes.html",
    "revision": "b33db57d2f9f10c897913cf68ded1e35"
  },
  {
    "url": "php/laravel/task-scheduling.html",
    "revision": "4ccccc0683536b502de287512f1a7fa2"
  },
  {
    "url": "php/laravel/testing/controller-methods.html",
    "revision": "242fce39757f7d83970fcccb3e40bc0e"
  },
  {
    "url": "php/laravel/testing/index.html",
    "revision": "19201d9457ccfeda1f8769d7d1857fc9"
  },
  {
    "url": "php/laravel/tinker/index.html",
    "revision": "01367edb65d98d16630a30a56d5b816d"
  },
  {
    "url": "php/laravel/traits/index.html",
    "revision": "b585ded852515834e862e6e2bdaa42e6"
  },
  {
    "url": "php/laravel/traits/scopes.html",
    "revision": "fe34bed4b045bfc1e99d903b1bd1ef64"
  },
  {
    "url": "php/laravel/validation/form-request.html",
    "revision": "440fbd053dc7d6ef7192cec660bf98f3"
  },
  {
    "url": "php/laravel/validation/index.html",
    "revision": "6ba4621240a4871a29bb3b0045797158"
  },
  {
    "url": "php/laravel/validation/validation-rules.html",
    "revision": "110bfb6d649f90b144e65f66053902dd"
  },
  {
    "url": "php/laravel/views.html",
    "revision": "831060e709c02091762cab5c9651f167"
  },
  {
    "url": "php/nova/fields.html",
    "revision": "958cdcb2efeeba0b69b69c22e41e515a"
  },
  {
    "url": "tools/database.html",
    "revision": "4987d1f21c7ed3e314abc80cfaa5d658"
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
