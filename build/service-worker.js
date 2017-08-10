"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","d0ce1c60b2a1d7726fdb0d072c2fbb02"],["/static/css/main.6bc1657d.css","e2a0a301cc201053b9c9afe50b567405"],["/static/js/main.c4819d4e.js","8200caded6f11b4fef87a38221380dbe"],["/static/media/board.9f0d4016.png","9f0d4016689d1220af7e1c936137a7f4"],["/static/media/exercise.3982b931.jpeg","3982b9313303e32dda27ea2d21e1c60e"],["/static/media/fire.d08aa044.png","d08aa044ef26d0804e5f389f56558196"],["/static/media/forest.52311a71.png","52311a71670e79a8228d040cf8c2fc0f"],["/static/media/fruitVeggies.7923a6a3.png","7923a6a3841cad324893c86d57d4b7c5"],["/static/media/kaphaSingle.f6ff16fa.png","f6ff16fa7cd878643ba9e19a845f1ed5"],["/static/media/largeImageFront.fe5455bc.png","fe5455bc7c315f7bca489e32b1c7fd00"],["/static/media/pittaSingle.e0484a85.png","e0484a85234968eb5d3a6514dcb85675"],["/static/media/sky.066fef7c.png","066fef7c13aff62a03d2baa92aca93de"],["/static/media/spoons.d93b792e.jpeg","d93b792e73e300845f65d39e3ad63a5b"],["/static/media/umbrella.7516d67b.jpeg","7516d67b709a161298dc1a36e51dde70"],["/static/media/vataSingle.72396c6b.png","72396c6b26d57f57e34bf41a9e0d45f2"],["/static/media/veggiesSmall.0e1c449b.png","0e1c449bd9df8e6245d014c8a9e119b6"],["/static/media/water.7fe6bc49.png","7fe6bc49f5a32ca257c57e861be60a7c"],["/static/media/wood.d0576c29.png","d0576c29001dfad4040570ac6f15b0b2"],["/static/media/wood2.912da01d.png","912da01d4808c28b1e7ca65ec3d5d890"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});