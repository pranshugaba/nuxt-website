(window.webpackJsonp=window.webpackJsonp||[]).push([[23,3,12,13,14],{236:function(e,t,n){"use strict";n.r(t);var r=n(13),component=Object(r.a)({},(function(){var e=this,t=e.$createElement;return(e._self._c||t)("h1",{staticClass:"mb-2"},[e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports},238:function(e,t,n){"use strict";n.r(t);var r={name:"vImage",props:["src"]},o=n(13),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("img",{staticClass:"h-auto",attrs:{src:e.src}})}),[],!1,null,null,null);t.default=component.exports},239:function(e,t,n){"use strict";n.r(t);var r=n(13),component=Object(r.a)({},(function(){var e=this,t=e.$createElement;return(e._self._c||t)("p",{staticClass:"text-xl mt-0 mb-6 text-gray-600 dark:text-gray-400 transition-colors"},[e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports},249:function(e,t,n){var map={"./ambulance.webp":250,"./beads.webp":251,"./beyond.webp":252,"./crossing.webp":253,"./debris.webp":254,"./equines.webp":255,"./fire.webp":256,"./flames.webp":257,"./grey-water.webp":258,"./lightning.webp":259,"./liquefy.webp":260,"./masks.webp":261,"./mcswirl.webp":262,"./mirror-world.webp":263,"./ocean.webp":264,"./pink.webp":265,"./purple.webp":266,"./sofa.webp":267,"./spider.webp":268,"./spring.webp":269,"./streaks.webp":270,"./the-cat-named-toad.webp":271,"./the-shopping-trolley-in-the-hall.webp":272,"./tributaries.webp":273,"./two-monkeys-on-a-bicycle.webp":274,"./vines.webp":275};function r(e){var t=o(e);return n(t)}function o(e){if(!n.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}r.keys=function(){return Object.keys(map)},r.resolve=o,e.exports=r,r.id=249},250:function(e,t,n){e.exports=n.p+"img/ambulance.6bae38f.webp"},251:function(e,t,n){e.exports=n.p+"img/beads.f41b920.webp"},252:function(e,t,n){e.exports=n.p+"img/beyond.11d3e73.webp"},253:function(e,t,n){e.exports=n.p+"img/crossing.bdf2771.webp"},254:function(e,t,n){e.exports=n.p+"img/debris.7d0fe65.webp"},255:function(e,t,n){e.exports=n.p+"img/equines.ddb18fd.webp"},256:function(e,t,n){e.exports=n.p+"img/fire.faaa9c5.webp"},257:function(e,t,n){e.exports=n.p+"img/flames.f218b06.webp"},258:function(e,t,n){e.exports=n.p+"img/grey-water.42f86d0.webp"},259:function(e,t,n){e.exports=n.p+"img/lightning.ff1f944.webp"},260:function(e,t,n){e.exports=n.p+"img/liquefy.6da3df8.webp"},261:function(e,t,n){e.exports=n.p+"img/masks.cfd5246.webp"},262:function(e,t,n){e.exports=n.p+"img/mcswirl.8310442.webp"},263:function(e,t,n){e.exports=n.p+"img/mirror-world.9380c58.webp"},264:function(e,t,n){e.exports=n.p+"img/ocean.4e538b5.webp"},265:function(e,t,n){e.exports=n.p+"img/pink.26c988d.webp"},266:function(e,t,n){e.exports=n.p+"img/purple.c1114e5.webp"},267:function(e,t,n){e.exports=n.p+"img/sofa.a4ef07f.webp"},268:function(e,t,n){e.exports=n.p+"img/spider.3fb3fad.webp"},269:function(e,t,n){e.exports=n.p+"img/spring.7ca2be2.webp"},270:function(e,t,n){e.exports=n.p+"img/streaks.76ff496.webp"},271:function(e,t,n){e.exports=n.p+"img/the-cat-named-toad.08d702e.webp"},272:function(e,t,n){e.exports=n.p+"img/the-shopping-trolley-in-the-hall.bd3e16c.webp"},273:function(e,t,n){e.exports=n.p+"img/tributaries.3a0101e.webp"},274:function(e,t,n){e.exports=n.p+"img/two-monkeys-on-a-bicycle.f407ef0.webp"},275:function(e,t,n){e.exports=n.p+"img/vines.a7a1020.webp"},285:function(e,t,n){"use strict";n.r(t);var r={components:{VImage:n(238).default},props:{post:Object}},o=n(13),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("NuxtLink",{staticClass:"inline-block hover:no-underline transform transition hover:-translate-y-1.5 mb-6",attrs:{to:e.post.path}},[r("div",{staticClass:"overflow-hidden rounded-lg shadow-lg dark:bg-gray-800 group"},[r("VImage",{staticClass:"w-full",attrs:{src:n(249)("./"+e.post.featuredImage)}}),e._v(" "),r("div",{staticClass:"pl-4 pt-4"},[r("PostTitle",{staticClass:"mb-0 text-2xl text-black dark:group-hover:text-blue-400 group-hover:text-blue-600"},[e._v(e._s(e.post.title))]),e._v(" "),r("p",{staticClass:"text-gray-600 dark:text-gray-400 transition-colors"},[e._v("\n        "+e._s(e.post.description)+"\n      ")])],1)],1)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{PostTitle:n(236).default})},326:function(e,t,n){"use strict";n.r(t);var r=n(5),o=(n(33),{asyncData:function(e){return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$content,e.params,t.next=3,n("poems").only(["title","description","slug","createdAt","path","featuredImage"]).sortBy("createdAt","desc").limit(3).fetch();case 3:return r=t.sent,t.next=6,n("puzzles").only(["title","subtitle","slug","createdAt"]).sortBy("createdAt","desc").limit(5).fetch();case 6:return o=t.sent,t.abrupt("return",{poems:r,puzzles:o});case 8:case"end":return t.stop()}}),t)})))()},methods:{formatDate:function(e){return new Date(e).toLocaleDateString("en",{year:"numeric",month:"short",day:"numeric"})}},head:{title:"Posts"}}),l=n(13),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",[n("PostTitle",[e._v("Posts")]),e._v(" "),n("PostSubtitle",[e._v("Poems, puzzles and more!")]),e._v(" "),n("h2",[e._v("Poems")]),e._v(" "),n("ul",e._l(e.poems,(function(e){return n("li",{key:e.slug},[n("PostPreviewCard",{attrs:{post:e}})],1)})),0),e._v(" "),n("NuxtLink",{attrs:{to:"/poems"}},[e._v(" See all poems ")]),e._v(" "),n("h2",{staticClass:"mt-6 mb-2"},[e._v("Puzzles")]),e._v(" "),n("ul",e._l(e.puzzles,(function(t){return n("li",{key:t.slug},[e._v("\n      "+e._s(e.formatDate(t.createdAt))+" -\n      "),n("NuxtLink",{attrs:{to:{name:"puzzles-slug",params:{slug:t.slug}}}},[e._v("\n        "+e._s(t.title)+" - "+e._s(t.subtitle)+"\n      ")])],1)})),0),e._v(" "),n("NuxtLink",{attrs:{to:"/puzzles"}},[e._v(" See all puzzles ")]),e._v(" "),n("h2",[e._v("Comics")]),e._v(" "),e._m(0),e._v(" "),n("h2",[e._v("Stories")]),e._v(" "),e._m(1)],1)}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[e._v("Boo!")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[e._v("The Errand")])])}],!1,null,null,null);t.default=component.exports;installComponents(component,{PostTitle:n(236).default,PostSubtitle:n(239).default,PostPreviewCard:n(285).default})}}]);