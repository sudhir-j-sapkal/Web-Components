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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "assets/icon/favicon.ico",
    "revision": "d2f619d796fbe8bed6200da2691aa5b6"
  },
  {
    "url": "assets/img/icon.png",
    "revision": "b96ad6e1e0b755c8cd45e6aec40bca25"
  },
  {
    "url": "build/app.js",
    "revision": "0e857085d2637fd9b88646a8f3ab7bf2"
  },
  {
    "url": "build/app/app.oe1ftwqb.js",
    "revision": "39ed45b7041bc94ec43429cc387d0772"
  },
  {
    "url": "build/app/app.twzpjp06.js",
    "revision": "4f0f99a633f4e94811f5fdc37a319175"
  },
  {
    "url": "build/app/iehtxpyo.entry.js",
    "revision": "89e1ed5cfc8e3fc799163d0958ad62bd"
  },
  {
    "url": "build/app/iehtxpyo.es5.entry.js",
    "revision": "93ad371511dce1facec9e8eb38889c8a"
  },
  {
    "url": "build/app/iehtxpyo.sc.entry.js",
    "revision": "89e1ed5cfc8e3fc799163d0958ad62bd"
  },
  {
    "url": "build/app/iehtxpyo.sc.es5.entry.js",
    "revision": "93ad371511dce1facec9e8eb38889c8a"
  },
  {
    "url": "index.html",
    "revision": "78cae804642a8e5bfca8744e45307710"
  },
  {
    "url": "manifest.json",
    "revision": "2a184e97fcded4850709730575c65e19"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
