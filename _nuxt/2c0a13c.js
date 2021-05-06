(window.webpackJsonp=window.webpackJsonp||[]).push([[13,3],{236:function(e,t,n){"use strict";n.r(t);var r={name:"vImage",props:["src"]},o=n(13),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("img",{staticClass:"h-auto object-cover",attrs:{src:e.src}})}),[],!1,null,null,null);t.default=component.exports},237:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r={year:"numeric",month:"short",day:"numeric"};function o(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r;return new Date(e).toLocaleDateString("en",t)}},246:function(e,t,n){var map={"./ambulance.webp":247,"./beads.webp":248,"./beyond.webp":249,"./crossing.webp":250,"./debris.webp":251,"./equines.webp":252,"./fire.webp":253,"./flames.webp":254,"./grey-water.webp":255,"./lightning.webp":256,"./liquefy.webp":257,"./masks.webp":258,"./mcswirl.webp":259,"./mirror-world.webp":260,"./ocean.webp":261,"./pink.webp":262,"./purple.webp":263,"./sofa.webp":264,"./spider.webp":265,"./spring.webp":266,"./streaks.webp":267,"./the-cat-named-toad.webp":268,"./the-shopping-trolley-in-the-hall.webp":269,"./tributaries.webp":270,"./two-monkeys-on-a-bicycle.webp":271,"./vines.webp":272};function r(e){var t=o(e);return n(t)}function o(e){if(!n.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}r.keys=function(){return Object.keys(map)},r.resolve=o,e.exports=r,r.id=246},247:function(e,t,n){e.exports=n.p+"img/ambulance.6bae38f.webp"},248:function(e,t,n){e.exports=n.p+"img/beads.f41b920.webp"},249:function(e,t,n){e.exports=n.p+"img/beyond.11d3e73.webp"},250:function(e,t,n){e.exports=n.p+"img/crossing.bdf2771.webp"},251:function(e,t,n){e.exports=n.p+"img/debris.7d0fe65.webp"},252:function(e,t,n){e.exports=n.p+"img/equines.ddb18fd.webp"},253:function(e,t,n){e.exports=n.p+"img/fire.faaa9c5.webp"},254:function(e,t,n){e.exports=n.p+"img/flames.f218b06.webp"},255:function(e,t,n){e.exports=n.p+"img/grey-water.42f86d0.webp"},256:function(e,t,n){e.exports=n.p+"img/lightning.ff1f944.webp"},257:function(e,t,n){e.exports=n.p+"img/liquefy.6da3df8.webp"},258:function(e,t,n){e.exports=n.p+"img/masks.cfd5246.webp"},259:function(e,t,n){e.exports=n.p+"img/mcswirl.8310442.webp"},260:function(e,t,n){e.exports=n.p+"img/mirror-world.9380c58.webp"},261:function(e,t,n){e.exports=n.p+"img/ocean.4e538b5.webp"},262:function(e,t,n){e.exports=n.p+"img/pink.26c988d.webp"},263:function(e,t,n){e.exports=n.p+"img/purple.c1114e5.webp"},264:function(e,t,n){e.exports=n.p+"img/sofa.a4ef07f.webp"},265:function(e,t,n){e.exports=n.p+"img/spider.3fb3fad.webp"},266:function(e,t,n){e.exports=n.p+"img/spring.7ca2be2.webp"},267:function(e,t,n){e.exports=n.p+"img/streaks.76ff496.webp"},268:function(e,t,n){e.exports=n.p+"img/the-cat-named-toad.08d702e.webp"},269:function(e,t,n){e.exports=n.p+"img/the-shopping-trolley-in-the-hall.bd3e16c.webp"},270:function(e,t,n){e.exports=n.p+"img/tributaries.3a0101e.webp"},271:function(e,t,n){e.exports=n.p+"img/two-monkeys-on-a-bicycle.f407ef0.webp"},272:function(e,t,n){e.exports=n.p+"img/vines.a7a1020.webp"},277:function(e,t,n){"use strict";n.r(t);var r=n(236),o=n(237),c={components:{VImage:r.default},props:{post:Object,authors:{type:Array},showCategory:{type:Boolean,default:!0}},methods:{formatDate:o.a}},l=n(13),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("NuxtLink",{staticClass:"inline-block hover:no-underline transform transition hover:-translate-y-1 mb-6",attrs:{to:e.post.path}},[r("div",{staticClass:"flex flex-wrap items-center  group"},[r("div",{staticClass:"w-1/3"},[r("VImage",{staticClass:"rounded-lg h-full shadow-lg",attrs:{src:n(246)("./"+e.post.featuredImage)}})],1),e._v(" "),r("div",{staticClass:"w-2/3 pl-4 pt-4"},[e.showCategory?r("p",{staticClass:"uppercase text-xs tracking-wider mb-1 text-blue-700 dark:text-blue-300 transition-colors"},[e._v("\n        "+e._s(e.post.category)+"\n      ")]):e._e(),e._v(" "),r("h2",{staticClass:"mt-0 mb-0 text-2xl text-black dark:group-hover:text-blue-400 group-hover:text-blue-600"},[e._v("\n        "+e._s(e.post.title)+"\n      ")]),e._v(" "),r("p",{staticClass:"text-gray-600 dark:text-gray-400 transition-colors"},[e._v("\n        "+e._s(e.post.description)+"\n      ")]),e._v(" "),r("p",{staticClass:"text-sm text-gray-600 dark:text-gray-400 transition-colors"},[e._v("\n        By\n        "),e._l(e.authors,(function(t,n){return r("span",{key:t},[r("span",{staticClass:"text-gray-700 dark:text-gray-300 transition-colors"},[e._v("\n            "+e._s(t)),n!=e.authors.length-1?r("span",[e._v(", ")]):e._e()])])})),e._v("\n        ·\n        "+e._s(e.formatDate(e.post.updatedAt))+"\n      ")],2)])])])}),[],!1,null,null,null);t.default=component.exports}}]);