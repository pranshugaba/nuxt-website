(window.webpackJsonp=window.webpackJsonp||[]).push([[17,4],{251:function(e,t,n){"use strict";n.r(t);var r={name:"vImage",props:["src"]},o=n(11),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("img",{staticClass:"object-cover rounded-lg max-h-[90vh] mx-auto shadow-md",attrs:{src:e.src}})}),[],!1,null,null,null);t.default=component.exports},258:function(e,t,n){var map={"./ambulance.webp":259,"./beads.webp":260,"./beyond.webp":261,"./crossing.webp":262,"./debris.webp":263,"./equines.webp":264,"./fire.webp":265,"./flames.webp":266,"./grey-water.webp":267,"./lightning.webp":268,"./liquefy.webp":269,"./masks.webp":270,"./mcswirl.webp":271,"./mirror-world.webp":272,"./ocean.webp":273,"./pink.webp":274,"./purple.webp":275,"./sofa.webp":276,"./spider.webp":277,"./spring.webp":278,"./streaks.webp":279,"./the-cat-named-toad.webp":280,"./the-shopping-trolley-in-the-hall.webp":281,"./torrent.webp":282,"./tributaries.webp":283,"./two-monkeys-on-a-bicycle.webp":284,"./vines.webp":285};function r(e){var t=o(e);return n(t)}function o(e){if(!n.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}r.keys=function(){return Object.keys(map)},r.resolve=o,e.exports=r,r.id=258},259:function(e,t,n){e.exports=n.p+"img/ambulance.6bae38f.webp"},260:function(e,t,n){e.exports=n.p+"img/beads.f41b920.webp"},261:function(e,t,n){e.exports=n.p+"img/beyond.11d3e73.webp"},262:function(e,t,n){e.exports=n.p+"img/crossing.bdf2771.webp"},263:function(e,t,n){e.exports=n.p+"img/debris.7d0fe65.webp"},264:function(e,t,n){e.exports=n.p+"img/equines.ddb18fd.webp"},265:function(e,t,n){e.exports=n.p+"img/fire.faaa9c5.webp"},266:function(e,t,n){e.exports=n.p+"img/flames.f218b06.webp"},267:function(e,t,n){e.exports=n.p+"img/grey-water.42f86d0.webp"},268:function(e,t,n){e.exports=n.p+"img/lightning.ff1f944.webp"},269:function(e,t,n){e.exports=n.p+"img/liquefy.6da3df8.webp"},270:function(e,t,n){e.exports=n.p+"img/masks.cfd5246.webp"},271:function(e,t,n){e.exports=n.p+"img/mcswirl.8310442.webp"},272:function(e,t,n){e.exports=n.p+"img/mirror-world.9380c58.webp"},273:function(e,t,n){e.exports=n.p+"img/ocean.4e538b5.webp"},274:function(e,t,n){e.exports=n.p+"img/pink.26c988d.webp"},275:function(e,t,n){e.exports=n.p+"img/purple.c1114e5.webp"},276:function(e,t,n){e.exports=n.p+"img/sofa.a4ef07f.webp"},277:function(e,t,n){e.exports=n.p+"img/spider.3fb3fad.webp"},278:function(e,t,n){e.exports=n.p+"img/spring.7ca2be2.webp"},279:function(e,t,n){e.exports=n.p+"img/streaks.76ff496.webp"},280:function(e,t,n){e.exports=n.p+"img/the-cat-named-toad.08d702e.webp"},281:function(e,t,n){e.exports=n.p+"img/the-shopping-trolley-in-the-hall.bd3e16c.webp"},282:function(e,t,n){e.exports=n.p+"img/torrent.62ed9ca.webp"},283:function(e,t,n){e.exports=n.p+"img/tributaries.3a0101e.webp"},284:function(e,t,n){e.exports=n.p+"img/two-monkeys-on-a-bicycle.f407ef0.webp"},285:function(e,t,n){e.exports=n.p+"img/vines.a7a1020.webp"},354:function(e,t,n){"use strict";n.r(t);var r=n(251),o=n(58),c={components:{VImage:r.default},props:{post:Object,authors:{type:Array},showCategory:{type:Boolean,default:!0}},methods:{formatDate:o.a}},f=n(11),component=Object(f.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("NuxtLink",{staticClass:"inline-block hover:no-underline transform transition hover:-translate-y-1 mb-6",attrs:{to:e.post.path}},[r("div",{staticClass:"overflow-hidden rounded-lg shadow-lg dark:bg-gray-800 transition-colors group"},[r("VImage",{staticClass:"w-full",attrs:{src:n(258)("./"+e.post.featuredImage)}}),e._v(" "),r("div",{staticClass:"px-4 pt-4"},[e.showCategory?r("p",{staticClass:"uppercase text-xs tracking-wider mb-1 text-primary-light dark:text-primary-dark transition-colors"},[e._v("\n        "+e._s(e.post.category)+"\n      ")]):e._e(),e._v(" "),r("h2",{staticClass:"mt-0 mb-0 text-2xl text-black dark:group-hover:text-primary-dark group-hover:text-primary-light"},[e._v("\n        "+e._s(e.post.title)+"\n      ")]),e._v(" "),r("p",{staticClass:"text-gray-600 dark:text-gray-400 transition-colors"},[e._v("\n        "+e._s(e.post.description)+"\n      ")]),e._v(" "),r("p",{staticClass:"text-sm text-gray-600 dark:text-gray-400 transition-colors"},[e._v("\n        By\n        "),e._l(e.authors,(function(t,n){return r("span",{key:t},[r("span",{staticClass:"text-gray-700 dark:text-gray-300 transition-colors"},[e._v("\n            "+e._s(t)),n!=e.authors.length-1?r("span",[e._v(", ")]):e._e()])])})),e._v("\n        ·\n        "+e._s(e.formatDate(e.post.updatedAt))+"\n      ")],2)])],1)])}),[],!1,null,null,null);t.default=component.exports}}]);