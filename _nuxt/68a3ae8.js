(window.webpackJsonp=window.webpackJsonp||[]).push([[19,4],{251:function(e,t,r){"use strict";r.r(t);var n={props:{src:String,alt:String}},o=r(11),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("img",{staticClass:"object-cover rounded-lg max-h-[90vh] mx-auto shadow-md",attrs:{src:e.src,alt:e.alt}})}),[],!1,null,null,null);t.default=component.exports},261:function(e,t,r){var map={"./ambulance.webp":262,"./beads.webp":263,"./beyond.webp":264,"./crossing.webp":265,"./debris.webp":266,"./equines.webp":267,"./fire.webp":268,"./flames.webp":269,"./grey-water.webp":270,"./lightning.webp":271,"./liquefy.webp":272,"./masks.webp":273,"./mcswirl.webp":274,"./mirror-world.webp":275,"./ocean.webp":276,"./pink.webp":277,"./purple.webp":278,"./sofa.webp":279,"./spider.webp":280,"./spring.webp":281,"./streaks.webp":282,"./the-cat-named-toad.webp":283,"./the-shopping-trolley-in-the-hall.webp":284,"./torrent.webp":285,"./tributaries.webp":286,"./two-monkeys-on-a-bicycle.webp":287,"./vines.webp":288};function n(e){var t=o(e);return r(t)}function o(e){if(!r.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}n.keys=function(){return Object.keys(map)},n.resolve=o,e.exports=n,n.id=261},262:function(e,t,r){e.exports=r.p+"img/ambulance.6bae38f.webp"},263:function(e,t,r){e.exports=r.p+"img/beads.f41b920.webp"},264:function(e,t,r){e.exports=r.p+"img/beyond.11d3e73.webp"},265:function(e,t,r){e.exports=r.p+"img/crossing.bdf2771.webp"},266:function(e,t,r){e.exports=r.p+"img/debris.7d0fe65.webp"},267:function(e,t,r){e.exports=r.p+"img/equines.ddb18fd.webp"},268:function(e,t,r){e.exports=r.p+"img/fire.faaa9c5.webp"},269:function(e,t,r){e.exports=r.p+"img/flames.f218b06.webp"},270:function(e,t,r){e.exports=r.p+"img/grey-water.42f86d0.webp"},271:function(e,t,r){e.exports=r.p+"img/lightning.ff1f944.webp"},272:function(e,t,r){e.exports=r.p+"img/liquefy.6da3df8.webp"},273:function(e,t,r){e.exports=r.p+"img/masks.cfd5246.webp"},274:function(e,t,r){e.exports=r.p+"img/mcswirl.8310442.webp"},275:function(e,t,r){e.exports=r.p+"img/mirror-world.9380c58.webp"},276:function(e,t,r){e.exports=r.p+"img/ocean.4e538b5.webp"},277:function(e,t,r){e.exports=r.p+"img/pink.26c988d.webp"},278:function(e,t,r){e.exports=r.p+"img/purple.c1114e5.webp"},279:function(e,t,r){e.exports=r.p+"img/sofa.a4ef07f.webp"},280:function(e,t,r){e.exports=r.p+"img/spider.3fb3fad.webp"},281:function(e,t,r){e.exports=r.p+"img/spring.7ca2be2.webp"},282:function(e,t,r){e.exports=r.p+"img/streaks.76ff496.webp"},283:function(e,t,r){e.exports=r.p+"img/the-cat-named-toad.08d702e.webp"},284:function(e,t,r){e.exports=r.p+"img/the-shopping-trolley-in-the-hall.bd3e16c.webp"},285:function(e,t,r){e.exports=r.p+"img/torrent.62ed9ca.webp"},286:function(e,t,r){e.exports=r.p+"img/tributaries.3a0101e.webp"},287:function(e,t,r){e.exports=r.p+"img/two-monkeys-on-a-bicycle.f407ef0.webp"},288:function(e,t,r){e.exports=r.p+"img/vines.a7a1020.webp"},299:function(e,t,r){"use strict";r.r(t);var n=r(58),o={props:{post:Object,showCategory:{type:Boolean,default:!0},authors:Array},methods:{formatDate:n.a}},c=r(11),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("NuxtLink",{staticClass:"inline-block hover:no-underline mb-6",attrs:{to:e.post.path}},[n("div",{staticClass:"flex flex-wrap items-center group"},[n("div",{staticClass:"w-[40%]"},[n("BaseImage",{attrs:{src:r(261)("./"+e.post.featuredImage)}})],1),e._v(" "),n("div",{staticClass:"w-[60%] pl-4"},[e.showCategory?n("p",{staticClass:"uppercase text-xs tracking-wider mb-1 text-primary-light dark:text-primary-dark transition-colors"},[e._v("\n        "+e._s(e.post.category)+"\n      ")]):e._e(),e._v(" "),n("h2",{staticClass:"mt-0 mb-0 text-xl text-black group-hover:text-primary-light dark:group-hover:text-primary-dark"},[e._v("\n        "+e._s(e.post.title)+"\n      ")]),e._v(" "),n("p",{staticClass:"text-gray-600 dark:text-gray-400 transition-colors my-1"},[e._v("\n        "+e._s(e.post.description)+"\n      ")]),e._v(" "),n("p",{staticClass:"text-sm text-gray-600 dark:text-gray-400 transition-colors mt-4 mb-1"},[e._v("\n        "+e._s(e.formatDate(e.post.updatedAt))+"\n      ")])])])])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{BaseImage:r(251).default})}}]);