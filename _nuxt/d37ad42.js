(window.webpackJsonp=window.webpackJsonp||[]).push([[15,3],{237:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var o={year:"numeric",month:"short",day:"numeric"};function r(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o;return new Date(e).toLocaleDateString("en",t)}},238:function(e,t,n){"use strict";n.r(t);var o={name:"vImage",props:["src"]},r=n(12),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("img",{staticClass:"h-auto object-cover",attrs:{src:e.src}})}),[],!1,null,null,null);t.default=component.exports},248:function(e,t,n){var map={"./ambulance.webp":249,"./beads.webp":250,"./beyond.webp":251,"./crossing.webp":252,"./debris.webp":253,"./equines.webp":254,"./fire.webp":255,"./flames.webp":256,"./grey-water.webp":257,"./lightning.webp":258,"./liquefy.webp":259,"./masks.webp":260,"./mcswirl.webp":261,"./mirror-world.webp":262,"./ocean.webp":263,"./pink.webp":264,"./purple.webp":265,"./sofa.webp":266,"./spider.webp":267,"./spring.webp":268,"./streaks.webp":269,"./the-cat-named-toad.webp":270,"./the-shopping-trolley-in-the-hall.webp":271,"./tributaries.webp":272,"./two-monkeys-on-a-bicycle.webp":273,"./vines.webp":274};function o(e){var t=r(e);return n(t)}function r(e){if(!n.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}o.keys=function(){return Object.keys(map)},o.resolve=r,e.exports=o,o.id=248},249:function(e,t,n){e.exports=n.p+"img/ambulance.6bae38f.webp"},250:function(e,t,n){e.exports=n.p+"img/beads.f41b920.webp"},251:function(e,t,n){e.exports=n.p+"img/beyond.11d3e73.webp"},252:function(e,t,n){e.exports=n.p+"img/crossing.bdf2771.webp"},253:function(e,t,n){e.exports=n.p+"img/debris.7d0fe65.webp"},254:function(e,t,n){e.exports=n.p+"img/equines.ddb18fd.webp"},255:function(e,t,n){e.exports=n.p+"img/fire.faaa9c5.webp"},256:function(e,t,n){e.exports=n.p+"img/flames.f218b06.webp"},257:function(e,t,n){e.exports=n.p+"img/grey-water.42f86d0.webp"},258:function(e,t,n){e.exports=n.p+"img/lightning.ff1f944.webp"},259:function(e,t,n){e.exports=n.p+"img/liquefy.6da3df8.webp"},260:function(e,t,n){e.exports=n.p+"img/masks.cfd5246.webp"},261:function(e,t,n){e.exports=n.p+"img/mcswirl.8310442.webp"},262:function(e,t,n){e.exports=n.p+"img/mirror-world.9380c58.webp"},263:function(e,t,n){e.exports=n.p+"img/ocean.4e538b5.webp"},264:function(e,t,n){e.exports=n.p+"img/pink.26c988d.webp"},265:function(e,t,n){e.exports=n.p+"img/purple.c1114e5.webp"},266:function(e,t,n){e.exports=n.p+"img/sofa.a4ef07f.webp"},267:function(e,t,n){e.exports=n.p+"img/spider.3fb3fad.webp"},268:function(e,t,n){e.exports=n.p+"img/spring.7ca2be2.webp"},269:function(e,t,n){e.exports=n.p+"img/streaks.76ff496.webp"},270:function(e,t,n){e.exports=n.p+"img/the-cat-named-toad.08d702e.webp"},271:function(e,t,n){e.exports=n.p+"img/the-shopping-trolley-in-the-hall.bd3e16c.webp"},272:function(e,t,n){e.exports=n.p+"img/tributaries.3a0101e.webp"},273:function(e,t,n){e.exports=n.p+"img/two-monkeys-on-a-bicycle.f407ef0.webp"},274:function(e,t,n){e.exports=n.p+"img/vines.a7a1020.webp"},278:function(e,t,n){"use strict";n.r(t);var o=n(238),r=n(237),c={components:{VImage:o.default},props:{post:Object,showCategory:{type:Boolean,default:!0},authors:Array},methods:{formatDate:r.a}},l=n(12),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("NuxtLink",{staticClass:"inline-block hover:no-underline mb-6",attrs:{to:e.post.path}},[o("div",{staticClass:"flex flex-wrap items-center group"},[o("div",{staticClass:"w-1/3"},[o("VImage",{staticClass:"rounded-lg shadow-lg",attrs:{src:n(248)("./"+e.post.featuredImage)}})],1),e._v(" "),o("div",{staticClass:"w-2/3 pl-4 pt-4"},[e.showCategory?o("p",{staticClass:"uppercase text-xs tracking-wider mb-1 text-blue-700 dark:text-blue-300 transition-colors"},[e._v("\n        "+e._s(e.post.category)+"\n      ")]):e._e(),e._v(" "),o("h2",{staticClass:"mt-0 mb-0 text-xl text-black dark:group-hover:text-blue-400 group-hover:text-blue-600"},[e._v("\n        "+e._s(e.post.title)+"\n      ")]),e._v(" "),o("p",{staticClass:"text-gray-600 dark:text-gray-400 transition-colors"},[e._v("\n        "+e._s(e.post.description)+"\n      ")]),e._v(" "),o("p",{staticClass:"text-sm text-gray-600 dark:text-gray-400 transition-colors"},[e._v("\n        By\n        "),e._l(e.authors,(function(t,n){return o("span",{key:t.slug},[o("span",{staticClass:"text-gray-700 dark:text-gray-300 transition-colors"},[o("NuxtLink",{attrs:{to:t.path}},[e._v(" "+e._s(t.name))]),n!=e.post.authors.length-1?o("span",[e._v(", ")]):e._e()],1)])})),e._v("\n        ·\n        "+e._s(e.formatDate(e.post.updatedAt))+"\n      ")],2)])])])}),[],!1,null,null,null);t.default=component.exports}}]);