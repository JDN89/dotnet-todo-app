if(!self.define){let s,e={};const i=(i,r)=>(i=new URL(i+".js",r).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(r,l)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let o={};const a=s=>i(s,n),t={module:{uri:n},exports:o,require:a};e[n]=Promise.all(r.map((s=>t[s]||a(s)))).then((s=>(l(...s),o)))}}define(["./workbox-455a0d7a"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/_...all_.af56b585.js",revision:null},{url:"assets/404.6bc6106b.js",revision:null},{url:"assets/about.4e510220.js",revision:null},{url:"assets/about.759233b6.css",revision:null},{url:"assets/app.1f964bfc.js",revision:null},{url:"assets/dashboard.5fae3e94.js",revision:null},{url:"assets/login.7aaed487.js",revision:null},{url:"assets/main.9dd7bdd9.js",revision:null},{url:"assets/main.a0f6db0b.css",revision:null},{url:"assets/myTodos.7aa04f12.js",revision:null},{url:"assets/myTodos.b8739213.css",revision:null},{url:"assets/object.01f07b72.js",revision:null},{url:"assets/README.14c8274a.js",revision:null},{url:"assets/register.63043d1e.js",revision:null},{url:"assets/vendor.8a5c162a.js",revision:null},{url:"assets/virtual_pwa-register.149c0d5d.js",revision:null},{url:"index.html",revision:"f0d406b857cff2b30765cfbdf61fdb1b"},{url:"robots.txt",revision:"5e0bd1c281a62a380d7a948085bfe2d1"},{url:"safari-pinned-tab.svg",revision:"5eaf74d1c43d30e0af743b68a3f48504"},{url:"pwa-192x192.png",revision:"65f6c00ff3d88d8371df0480c1ba0272"},{url:"pwa-512x512.png",revision:"20a2db7d5040eb315e6acf49c6983de9"},{url:"manifest.webmanifest",revision:"37e8d18026b05432f623fc5efac2b4b1"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
