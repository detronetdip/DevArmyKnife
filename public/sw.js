if(!self.define){let e,s={};const i=(i,a)=>(i=new URL(i+".js",a).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(a,r)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let c={};const t=e=>i(e,n),u={module:{uri:n},exports:c,require:t};s[n]=Promise.all(a.map((e=>u[e]||t(e)))).then((e=>(r(...e),c)))}}define(["./workbox-1846d813"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/J5LuQ8vw2gKrx37L-T-Ss/_buildManifest.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/J5LuQ8vw2gKrx37L-T-Ss/_middlewareManifest.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/J5LuQ8vw2gKrx37L-T-Ss/_ssgManifest.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/chunks/1053.8980d23466279e20.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/chunks/1084.7bf8b58df212d9cf.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/chunks/1390.4a21cf9201262d66.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/chunks/1446.01438f4d6ed5ec1a.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/chunks/1650.ae829e33c5878980.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/chunks/1660.93c93b182fb25ad3.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/chunks/177.ae57ba9dd0c0a8f0.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/chunks/1770.e9d167a359425734.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/chunks/1873.41109f0df3a5f84a.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/chunks/1920.6c1fd5698f622751.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/chunks/2040.18a7225a67dd9242.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/chunks/2119.e2b6ea4c99ae0aa4.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/chunks/2136.1fa0f8f912ddc79c.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/chunks/228.adcb59f6089a5524.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/chunks/2314.830157ec3bee6cc2.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/chunks/2386.529709f45a7ec0de.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/chunks/2406.20abde46703579c1.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/chunks/2542.d87f01354fa8625b.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/chunks/2602.6749b4f967c730f0.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/chunks/2675.c188080c2b5d4a3d.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/chunks/2750-3741f8f590dae11c.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/chunks/2877.cc4bca1af4cfcc7b.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/chunks/3.55509891f45c9969.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/chunks/305.404d3739aeacfd90.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/chunks/3203.819964d24c68a313.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/chunks/3283.eda9ca4352ca06bc.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/chunks/3314.f56213a36edb41af.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/chunks/3465.2a60f3b43ba197e0.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/chunks/3482.20c0db2d3fbafbdc.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/chunks/3509.2954bdfddbf5f57c.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/chunks/3519.03af023f521516b7.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/chunks/370.e8493453a15bb7cf.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/chunks/3883.5d06d6e11015196c.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/chunks/3993.89e89ab63adb475c.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/chunks/3e7c58dd-ba8fca3868257991.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/chunks/402.d772a7ebea54a044.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/chunks/4144.37cfc2be8d0b5e33.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/chunks/4163.fff0b463b6582811.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/chunks/4212.2cc04852fed97d2c.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/chunks/4293.6d6d0acd4c5c8db8.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/chunks/4323.dc2b48b84dea1756.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/chunks/4439.0d811c45cdf10663.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/chunks/4511.c91da65cb6d5ac82.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/chunks/4732.3cf79495f0999f0d.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/chunks/4778.d1f2100a1a8f88bd.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/chunks/4796.90734f6a7f11b2bc.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/chunks/4810.1ad6e9b8b0394710.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/chunks/4812.1bbf8f840d952a94.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/chunks/4879.b082a51294b40100.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/chunks/4920.fb50afc3e98ce4ec.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/chunks/4969-5d074db9e1062fff.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/chunks/4ad82c5e-ffa60baa439b91db.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/chunks/5122.68addeb890ec23a5.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/chunks/5134.561691b7c2682c71.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/chunks/5372.ea8ad3f95450392c.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/chunks/5648.e1c37c95c8aa841d.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/chunks/5753.97f9d4f6f31f87b4.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/chunks/5815.36523c01e82ee1ca.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/chunks/5819.d24a858591bd5c3c.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/chunks/5879.3518849f252a2a9b.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/chunks/6006-99ed6ec414ac865e.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/chunks/6062.f1c802f5e315c596.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/chunks/6092.aec85bdb1835b6c2.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/chunks/6121.5aa318891fddf07a.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/chunks/617.961e5032cb94a949.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/chunks/6395.39b2ee01ec385bbc.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/chunks/6443.b92577314ec2edb9.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/chunks/6471.32e42c0b8bf25756.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/chunks/6665.8c8d397558269841.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/chunks/6692.43ff49f6f6c7136c.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/chunks/673.517d26f728f45a61.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/chunks/6732.7fe9b07b77a4b07f.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/chunks/6991.be0394b520da7022.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/chunks/7001.f1c3479524e2776f.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/chunks/7213.6f3d268e966fcbb7.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/chunks/7315.b7305739dd11b692.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/chunks/7365.e8d341b5b00b7399.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/chunks/7370.6ff41538f041ce2c.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/chunks/7421.e9036aa22c659fa0.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/chunks/7475-e988b72289b42d82.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/chunks/7525.18e51ae169a6f903.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/chunks/758.4c89c58e80d1e1fe.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/chunks/7601.e97d167b388efb39.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/chunks/7663.13fb251796cb58fe.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/chunks/7762.774900643df733b2.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/chunks/7917.11ebe7520bddd29d.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/chunks/7988.425f776eb7abe439.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/chunks/8007.a16e9723397bae3d.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/chunks/8029.7e9e7567825815fa.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/chunks/8088-98a37a6260834f0a.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/chunks/8142.d0758810dbb71d4a.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/chunks/8171.110a3fcd73f37a9c.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/chunks/8283.a30f9dedf1fa8f99.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/chunks/8393.ffa3d2ccbd0b4f96.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/chunks/8561.0af47df918013872.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/chunks/8566-b114a989f4da446b.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/chunks/870.de762e4de5e2edd3.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/chunks/8770.08b18c7fd9fa7cd5.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/chunks/889.d5af13d264ff662a.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/chunks/8910.006959bafbdd3fdb.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/chunks/8915.4f6d013956681a13.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/chunks/9071.4b0b09714fb42ef7.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/chunks/9121.75ae0ac9e84c8840.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/chunks/9188-eb3d170b0c4252ed.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/chunks/9207.ab5bf3d47a03bc57.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/chunks/9232.b6c8e1bc7900271b.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/chunks/9296.a92cd0319d71d366.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/chunks/9496-437a1e4e74524603.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/chunks/9558.81dd257c237afe53.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/chunks/9607.e9f6fa4f101a4056.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/chunks/9713.0ca649eec80739b4.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/chunks/9781.0bba559e5cd4fa2f.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/chunks/9831.fc4fd04a6faf61d4.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/chunks/9972.ee7bc96d6054aede.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/chunks/fec483df-dfb2555bbcdcc844.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/chunks/framework-7d488969745094b0.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/chunks/main-43ce4e368124602f.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/chunks/pages/_app-10ba4bd5281d5cfe.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/chunks/pages/_error-25839e52160ad85d.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/chunks/pages/code/%5Blang%5D-08c9a6f3e6629852.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/chunks/pages/code/markdown-7f06214ed8c9685a.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/chunks/pages/cryptography/hash-99c5360c35f7168e.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/chunks/pages/cryptography/hmac-2282d345ecae1861.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/chunks/pages/cryptography/keypair-3bc9ab3c45eef3ed.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/chunks/pages/cryptography/sym-decrypt-761d8590208f1f30.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/chunks/pages/cryptography/sym-encrypt-a44a299ad13d9597.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/chunks/pages/explore-087a74c0e288cfc7.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/chunks/pages/generators/barcode-83413d17958cc6f5.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/chunks/pages/generators/qrcode-47da50fad4622eba.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/chunks/pages/index-8923117a78237aa1.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/chunks/pages/misc/colorPicker-0e873e3130d70f1e.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/chunks/pages/misc/credit-card-gen-159708149df33b96.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/chunks/pages/misc/image-compressor-6556a058bb8825a0.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/chunks/pages/profile-46e89d90776a704f.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/chunks/pages/toolsWiki-b0ef7b77b4580a99.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/chunks/webpack-2ad8f661dc107fa7.js",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/css/d94ec7dc55e774a1.css",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/css/fc93472a4978cf92.css",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/_next/static/media/Anurati-Regular.e4b90104.otf",revision:"J5LuQ8vw2gKrx37L-T-Ss"},{url:"/android/android-launchericon-144-144.png",revision:"64bf55c67be9e902cc55403f4140e26f"},{url:"/android/android-launchericon-192-192.png",revision:"6429782bcaa769ab86f917177fdbaa92"},{url:"/android/android-launchericon-48-48.png",revision:"3a798dd5682279a2b755f42ffaf0b1bb"},{url:"/android/android-launchericon-512-512.png",revision:"1c1cab36771bdccbd12a1894c6fffc96"},{url:"/android/android-launchericon-72-72.png",revision:"76fe40ea58562ee2a28214374377135c"},{url:"/android/android-launchericon-96-96.png",revision:"2053ca39445ccc6e2de0026a7e9e06a4"},{url:"/appKey.pem",revision:"2ea1c9aca7a4968cf9a590fd3c771360"},{url:"/favicon.ico",revision:"1d57d0aaa081ba45e399ca2059910fe0"},{url:"/fonts/Anurati-Regular.otf",revision:"ca8632f4d0aacae4633cbfc2f1a673f1"},{url:"/images/DevArmyKnifeHeader.png",revision:"84bb3e6ae02e2036e558ce6c4ebcae04"},{url:"/images/cardLogos/american-express.svg",revision:"3a070c4727cdd6fc182ded0463c14748"},{url:"/images/cardLogos/discover.svg",revision:"67a87acb7b14cd644eb26091a56c34b1"},{url:"/images/cardLogos/mastercard.svg",revision:"5966f60b11e12eca6c0919de95891436"},{url:"/images/cardLogos/visa.svg",revision:"67f273f02358390c0349adaa8dcfec7c"},{url:"/images/thumbnails/Bar Code Generator.png",revision:"4f8932ae0e70b5b29f5a7f28cf466525"},{url:"/images/thumbnails/C++ Editor.png",revision:"9f3258c9e15e01e43d0e2fc0a0487581"},{url:"/images/thumbnails/ColorPicker.png",revision:"1a6618ec8e2e04c400b3db3eeb01fc98"},{url:"/images/thumbnails/Credit Card Generator.png",revision:"0a9b22ba18b96fe03d553f295985d5d6"},{url:"/images/thumbnails/Go Editor.png",revision:"7e2401a1f7ca92bc4924b52f660cd806"},{url:"/images/thumbnails/HMAC Generator.png",revision:"bf69e6c452120dd5f202cbafb44523c0"},{url:"/images/thumbnails/Hash Generator.png",revision:"1ae489fdbc64582e8919a40a2eb68b9c"},{url:"/images/thumbnails/Image Compressor.png",revision:"474cb448510abad1c885d8d7dbf5606d"},{url:"/images/thumbnails/JS Editor.png",revision:"f3024d0569849b0461876c6a28443494"},{url:"/images/thumbnails/Markdown Editor.png",revision:"0f60f9ee66aed8a8eb40b42d2d5892c6"},{url:"/images/thumbnails/Python Editor.png",revision:"372785ca34266594508db8f334e4690d"},{url:"/images/thumbnails/QR Code Generator.png",revision:"e59ce11d1cb7eee74c5d5b7d73b6f95b"},{url:"/images/thumbnails/RSA Keypair.png",revision:"f295a0129aba573cd4f53da02793a4eb"},{url:"/ios/100.png",revision:"ba366ddefb25ac092b78dd797221811a"},{url:"/ios/1024.png",revision:"ccb2a42d0a4462ec15ae207a59a9f8f6"},{url:"/ios/114.png",revision:"49e815f76d43339d19637da564035100"},{url:"/ios/120.png",revision:"f3739dc8b36788e02be38538969a1f74"},{url:"/ios/128.png",revision:"aea270f5c6209b6a52133931a632b5c3"},{url:"/ios/144.png",revision:"64bf55c67be9e902cc55403f4140e26f"},{url:"/ios/152.png",revision:"ba78c594b2f17f873be1052933ded9be"},{url:"/ios/16.png",revision:"26a01d81da97faecdcb0d6301adeb740"},{url:"/ios/167.png",revision:"623c8198aa9d410cedc678fafbb4c4ba"},{url:"/ios/180.png",revision:"608868f190fbea09e3b015bee6e6a0dc"},{url:"/ios/192.png",revision:"6429782bcaa769ab86f917177fdbaa92"},{url:"/ios/20.png",revision:"70c6580a7e35331a001c985b0d4bba8d"},{url:"/ios/256.png",revision:"17ea9a63fcd275aed38736728eaa03fb"},{url:"/ios/29.png",revision:"50aab22ff4cc719478c427b6b4b79065"},{url:"/ios/32.png",revision:"50b73e25604cf787f3a15b2a47ac5eb8"},{url:"/ios/40.png",revision:"58c499d7158521a6a8a4951b6c4adde9"},{url:"/ios/50.png",revision:"b5af3a9d9dbcdc9a197b7ce39036bab2"},{url:"/ios/512.png",revision:"1c1cab36771bdccbd12a1894c6fffc96"},{url:"/ios/57.png",revision:"4247de9441bc6f09b59357ab0d985d02"},{url:"/ios/58.png",revision:"5af2fa8e8e2b6d5275e1a945534a344e"},{url:"/ios/60.png",revision:"1335a4019b499b4160a691a4d3f445c0"},{url:"/ios/64.png",revision:"df0afa4ef54f003fea2e42c9ad604505"},{url:"/ios/72.png",revision:"76fe40ea58562ee2a28214374377135c"},{url:"/ios/76.png",revision:"d6501a35d0d22adf41a1c8ed4c73990e"},{url:"/ios/80.png",revision:"ca7f3ccfa668ae40f3d90b912caf0554"},{url:"/ios/87.png",revision:"7a0e99df636a72a1ce381abcf4d931be"},{url:"/logo.svg",revision:"0508779d1e0df3fa1bb383bc07ceb57e"},{url:"/manifest.json",revision:"5ad4796e606fe6b6f1abd0a801a4569b"},{url:"/windows11/LargeTile.scale-100.png",revision:"b5811f031c56fb1348d9be32fe82da18"},{url:"/windows11/LargeTile.scale-125.png",revision:"393973db5c4acdf29f1c6fc783875239"},{url:"/windows11/LargeTile.scale-150.png",revision:"3d058c4dd79993927a7a834cb583b401"},{url:"/windows11/LargeTile.scale-200.png",revision:"76a7c2432cdd321696cb97381c049edf"},{url:"/windows11/LargeTile.scale-400.png",revision:"946ee281fa35307bd443be0e680b2276"},{url:"/windows11/SmallTile.scale-100.png",revision:"bb6ba870c6724741edd667120971d25d"},{url:"/windows11/SmallTile.scale-125.png",revision:"34f9fa70a1f7b9f2c4c9b1bf0f95de5f"},{url:"/windows11/SmallTile.scale-150.png",revision:"7227ed7134f3b2aa744f6e4abac2b41e"},{url:"/windows11/SmallTile.scale-200.png",revision:"28b3dc0a0cd2e50094baccbdc6ea602e"},{url:"/windows11/SmallTile.scale-400.png",revision:"540fc50bef24cf937a461f16e86d3420"},{url:"/windows11/SplashScreen.scale-100.png",revision:"a88d21743d49d249cd74b348c30a5791"},{url:"/windows11/SplashScreen.scale-125.png",revision:"a7eeb55b35c033b5e1d5eb294051c950"},{url:"/windows11/SplashScreen.scale-150.png",revision:"172418304b71eb2b61ac6d56181c6583"},{url:"/windows11/SplashScreen.scale-200.png",revision:"af1f6fbf94d68402ae8c54857799bd5d"},{url:"/windows11/SplashScreen.scale-400.png",revision:"a1077684108ff0f6e3a33f1bebe28a00"},{url:"/windows11/Square150x150Logo.scale-100.png",revision:"c87a1cc62bdbc7352a60f5423b3a4746"},{url:"/windows11/Square150x150Logo.scale-125.png",revision:"4153fc3291a1efe764a71ea815e04407"},{url:"/windows11/Square150x150Logo.scale-150.png",revision:"e36bde7849c91763f841e97a66d66a4b"},{url:"/windows11/Square150x150Logo.scale-200.png",revision:"08c5f73555765324be020c4f8c8403d0"},{url:"/windows11/Square150x150Logo.scale-400.png",revision:"8a017af12272e4a52790c0ada689bb63"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-16.png",revision:"4a879ff6524d82531bd245fc5db53a9f"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-20.png",revision:"e5e002764ccc8b81e32f23255635ad75"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-24.png",revision:"dadbe8da5393cafccdbf7886b86d7f11"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-256.png",revision:"06da657ca0d341d08198d81a9d09d57f"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-30.png",revision:"48144ebfe32a8cedb46420d6cd9230b4"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-32.png",revision:"db76d7fd2c9612359e617eefbd4a6354"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-36.png",revision:"07d98bfd5b74dc80a463078f26d6077a"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-40.png",revision:"400b8bbc22e41e8c0a1ac28ea3136d08"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-44.png",revision:"b4f6df7a438a1e9814dafb0e6eb3c7bd"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-48.png",revision:"47e9b8815d4635471b2daca6a494b535"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-60.png",revision:"70639585c5b490b1838814e2b0449190"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-64.png",revision:"c5944abdf159e293c7311e7a4c910a81"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-72.png",revision:"aa4fc286b8aef8e90a8d8853ca48a3df"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-80.png",revision:"5b274644f22b3a71c16fc71502310252"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-96.png",revision:"29ea03ef7ac173ef2fe1f321f0cd9d0b"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-16.png",revision:"4a879ff6524d82531bd245fc5db53a9f"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-20.png",revision:"e5e002764ccc8b81e32f23255635ad75"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-24.png",revision:"dadbe8da5393cafccdbf7886b86d7f11"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-256.png",revision:"06da657ca0d341d08198d81a9d09d57f"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-30.png",revision:"48144ebfe32a8cedb46420d6cd9230b4"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-32.png",revision:"db76d7fd2c9612359e617eefbd4a6354"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-36.png",revision:"07d98bfd5b74dc80a463078f26d6077a"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-40.png",revision:"400b8bbc22e41e8c0a1ac28ea3136d08"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-44.png",revision:"b4f6df7a438a1e9814dafb0e6eb3c7bd"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-48.png",revision:"47e9b8815d4635471b2daca6a494b535"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-60.png",revision:"70639585c5b490b1838814e2b0449190"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-64.png",revision:"c5944abdf159e293c7311e7a4c910a81"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-72.png",revision:"aa4fc286b8aef8e90a8d8853ca48a3df"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-80.png",revision:"5b274644f22b3a71c16fc71502310252"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-96.png",revision:"29ea03ef7ac173ef2fe1f321f0cd9d0b"},{url:"/windows11/Square44x44Logo.scale-100.png",revision:"b4f6df7a438a1e9814dafb0e6eb3c7bd"},{url:"/windows11/Square44x44Logo.scale-125.png",revision:"9123d9d556ac573936a9fb9554592344"},{url:"/windows11/Square44x44Logo.scale-150.png",revision:"643a67e77498152281dba88470910ed7"},{url:"/windows11/Square44x44Logo.scale-200.png",revision:"16c704f4528388dc8942643c1d33026f"},{url:"/windows11/Square44x44Logo.scale-400.png",revision:"8c634e6d9fe2b69ee14f5f15956348fc"},{url:"/windows11/Square44x44Logo.targetsize-16.png",revision:"4a879ff6524d82531bd245fc5db53a9f"},{url:"/windows11/Square44x44Logo.targetsize-20.png",revision:"e5e002764ccc8b81e32f23255635ad75"},{url:"/windows11/Square44x44Logo.targetsize-24.png",revision:"dadbe8da5393cafccdbf7886b86d7f11"},{url:"/windows11/Square44x44Logo.targetsize-256.png",revision:"06da657ca0d341d08198d81a9d09d57f"},{url:"/windows11/Square44x44Logo.targetsize-30.png",revision:"48144ebfe32a8cedb46420d6cd9230b4"},{url:"/windows11/Square44x44Logo.targetsize-32.png",revision:"db76d7fd2c9612359e617eefbd4a6354"},{url:"/windows11/Square44x44Logo.targetsize-36.png",revision:"07d98bfd5b74dc80a463078f26d6077a"},{url:"/windows11/Square44x44Logo.targetsize-40.png",revision:"400b8bbc22e41e8c0a1ac28ea3136d08"},{url:"/windows11/Square44x44Logo.targetsize-44.png",revision:"b4f6df7a438a1e9814dafb0e6eb3c7bd"},{url:"/windows11/Square44x44Logo.targetsize-48.png",revision:"47e9b8815d4635471b2daca6a494b535"},{url:"/windows11/Square44x44Logo.targetsize-60.png",revision:"70639585c5b490b1838814e2b0449190"},{url:"/windows11/Square44x44Logo.targetsize-64.png",revision:"c5944abdf159e293c7311e7a4c910a81"},{url:"/windows11/Square44x44Logo.targetsize-72.png",revision:"aa4fc286b8aef8e90a8d8853ca48a3df"},{url:"/windows11/Square44x44Logo.targetsize-80.png",revision:"5b274644f22b3a71c16fc71502310252"},{url:"/windows11/Square44x44Logo.targetsize-96.png",revision:"29ea03ef7ac173ef2fe1f321f0cd9d0b"},{url:"/windows11/StoreLogo.scale-100.png",revision:"b5af3a9d9dbcdc9a197b7ce39036bab2"},{url:"/windows11/StoreLogo.scale-125.png",revision:"dfef25a4e2c38a7335216a26ebeb4338"},{url:"/windows11/StoreLogo.scale-150.png",revision:"a19fc0f9868fea232df251ce4236842e"},{url:"/windows11/StoreLogo.scale-200.png",revision:"ba366ddefb25ac092b78dd797221811a"},{url:"/windows11/StoreLogo.scale-400.png",revision:"ca3ce207a51c61a20b7ebfbc5bd47023"},{url:"/windows11/Wide310x150Logo.scale-100.png",revision:"634b89fc27b8f935d3b89354fb3b43ae"},{url:"/windows11/Wide310x150Logo.scale-125.png",revision:"3addd9f6daa0f5833624516a341701b1"},{url:"/windows11/Wide310x150Logo.scale-150.png",revision:"94e613a4731b91aca8ca10df8922f07b"},{url:"/windows11/Wide310x150Logo.scale-200.png",revision:"a88d21743d49d249cd74b348c30a5791"},{url:"/windows11/Wide310x150Logo.scale-400.png",revision:"af1f6fbf94d68402ae8c54857799bd5d"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:i,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
