(window.webpackJsonp=window.webpackJsonp||[]).push([[20,2,3,8,9,10,11,12,13,17,18],{242:function(t,e,r){"use strict";r.d(e,"a",(function(){return l}));var n={year:"numeric",month:"short",day:"numeric"};function l(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n;return new Date(t).toLocaleDateString("en",e)}},243:function(t,e,r){"use strict";r.r(e);var n=r(13),component=Object(n.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("h1",{staticClass:"mb-3"},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},244:function(t,e,r){"use strict";r.r(e);var n=r(13),component=Object(n.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("p",{staticClass:"text-xl mt-0 mb-6 text-gray-600 dark:text-gray-400 transition-colors"},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},245:function(t,e,r){"use strict";r.d(e,"a",(function(){return l})),r.d(e,"b",(function(){return o}));r(37),r(58),r(32),r(44),r(71),r(14),r(43),r(56);function n(t){return t.charAt(0).toUpperCase()+t.slice(1)}function l(t){return t.split("-").map((function(t){return n(t)})).join(" ")}function o(content){var t=JSON.stringify(content).split(" ").length;return Math.ceil(t/200)}},246:function(t,e,r){"use strict";r.r(e);var n={name:"vImage",props:["src"]},l=r(13),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("img",{staticClass:"h-auto object-cover rounded-lg shadow-md",attrs:{src:t.src}})}),[],!1,null,null,null);e.default=component.exports},247:function(t,e,r){var map={"./farm.webp":248,"./pranshu.webp":249};function n(t){var e=l(t);return r(e)}function l(t){if(!r.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}n.keys=function(){return Object.keys(map)},n.resolve=l,t.exports=n,n.id=247},248:function(t,e,r){t.exports=r.p+"img/farm.f74f09a.webp"},249:function(t,e,r){t.exports=r.p+"img/pranshu.817abef.webp"},252:function(t,e,r){"use strict";r.r(e);var n=r(242),l=r(245),o={props:{authors:{type:Array,required:!0},post:{type:Object}},methods:{formatDate:n.a,readingTime:l.b}},c=r(13),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mt-8 mb-10 flex items-center justify-start space-x-3"},[t._l(t.authors,(function(t){return n("div",{key:t.slug},[n("img",{staticClass:"h-12 w-12 rounded-full",attrs:{src:r(247)("./"+t.avatar),alt:"Avatar of the author"}})])})),t._v(" "),n("div",[t._l(t.authors,(function(e,r){return n("span",{key:e.slug},[n("span",{staticClass:"text-gray-700 dark:text-gray-300 transition-colors"},[n("NuxtLink",{staticClass:"text-gray-800 dark:text-gray-200 transition-colors font-medium",attrs:{to:e.path}},[t._v(t._s(e.name))]),r!=t.authors.length-1?n("span",[t._v(", ")]):t._e()],1)])})),t._v(" "),n("div",{staticClass:"text-gray-600 dark:text-gray-400 text-sm transition-colors"},[t._v("\n      "+t._s(t.formatDate(t.post.updatedAt))+"\n      "),t.post.showReadingTime?n("span",[t._v("\n        · "+t._s(t.readingTime(t.post))+" min read\n      ")]):t._e()])],2)],2)}),[],!1,null,null,null);e.default=component.exports},253:function(t,e,r){"use strict";r.r(e);var n=r(13),component=Object(n.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("p",{staticClass:"mb-3 text-sm text-blue-700 font-medium dark:text-blue-300 uppercase tracking-wider"},[t._t("default",[t._v("Category")])],2)}),[],!1,null,null,null);e.default=component.exports},283:function(t,e,r){"use strict";r.r(e);var n={components:{VImage:r(246).default},props:{imgSrc:String,caption:String}},l=r(13),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("figure",[r("VImage",{attrs:{src:t.imgSrc}}),t._v(" "),r("figcaption",{staticClass:"mt-2 mb-2 text-xs text-gray-600 dark:text-gray-400 text-center transition-colors"},[t.caption?r("span",[t._v("\n      "+t._s(t.caption)+"\n    ")]):!1!==t.caption?r("span",[t._v(" Photo by Pranshu Gaba ")]):t._e()])],1)}),[],!1,null,null,null);e.default=component.exports},284:function(t,e,r){"use strict";r.r(e);var n={props:{prev:{type:Object,default:function(){return null}},next:{type:Object,default:function(){return null}},up:{type:Object,default:function(){return null}}}},l=r(13),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"grid grid-cols-3 gap-8"},[r("div",{staticClass:"py-2"},[t.prev?r("NuxtLink",{staticClass:"inline-block",attrs:{to:t.prev.path}},[r("span",{staticClass:"block font-semibold text-sm"},[t._v("prev")]),t._v(" "),r("span",{staticClass:"text-gray-700 dark:text-gray-300 transition-colors"},[t._v(t._s(t.prev.title))])]):r("span",[t._v(" ")])],1),t._v(" "),r("div",{staticClass:"py-2 text-center"},[t.up?r("NuxtLink",{staticClass:"inline-block",attrs:{to:t.up.path}},[r("span",{staticClass:"block text-sm font-semibold"},[t._v("up")]),t._v(" "),r("span",{staticClass:"text-gray-700 dark:text-gray-300 transition-colors"},[t._v(t._s(t.up.title))])]):t._e()],1),t._v(" "),r("div",{staticClass:"py-2 text-right"},[t.next?r("NuxtLink",{staticClass:"inline-block",attrs:{to:t.next.path}},[r("span",{staticClass:"block font-semibold text-sm"},[t._v("next")]),t._v(" "),r("span",{staticClass:"text-gray-700 dark:text-gray-300 transition-colors"},[t._v(t._s(t.next.title))])]):r("span",[t._v(" ")])],1)])}),[],!1,null,null,null);e.default=component.exports},285:function(t,e,r){"use strict";r.r(e);var n=r(245),l={name:"tagChips",props:{tags:{type:Array}},methods:{kebabToTitle:n.a}},o=r(13),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",{staticClass:"mt-12 mb-4 flex items-center justify-start space-x-3"},t._l(t.tags,(function(e){return r("li",{key:e,staticClass:"bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded-md text-sm"},[r("NuxtLink",{staticClass:"text-gray-800 dark:text-gray-200 transition-colors",attrs:{to:{name:"tags-tag",params:{tag:e}}}},[t._v("\n      "+t._s(t.kebabToTitle(e))+"\n    ")])],1)})),0)}),[],!1,null,null,null);e.default=component.exports},286:function(t,e,r){"use strict";r.r(e);var n={props:{authors:{type:Array}}},l=r(13),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mb-12"},[n("hr",{staticClass:"border-blue-600 dark:border-blue-400 transition-colors"}),t._v(" "),n("div",{staticClass:"mt-4 mb-4 text-gray-700 dark:text-gray-300 transition-colors uppercase tracking-wider"},[t._v("\n    Written by\n  ")]),t._v(" "),t._l(t.authors,(function(e){return n("div",{key:e.slug,staticClass:"mb-6 px-4 py-4 flex items-center justify-start space-x-4 bg-gray-200 dark:bg-gray-700 transition-colors rounded-xl"},[n("img",{staticClass:"h-20 rounded-xl",attrs:{src:r(247)("./"+e.avatar),alt:"Avatar of the author"}}),t._v(" "),n("div",[n("div",{staticClass:"text-lg font-semibold"},[n("NuxtLink",{attrs:{to:e.path}},[t._v(" "+t._s(e.name)+" ")])],1),t._v(" "),n("p",{staticClass:"my-0 leading-normal"},[t._v(t._s(e.bio))])])])}))],2)}),[],!1,null,null,null);e.default=component.exports},287:function(t,e,r){"use strict";r.r(e);var n=r(245),l={props:{post:Object,authors:Array},methods:{readingTime:n.b}},o=r(13),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("PostCategory",[t._v(t._s(t.post.category))]),t._v(" "),r("PostTitle",[t._v(t._s(t.post.title))]),t._v(" "),r("PostSubtitle",[t._v(t._s(t.post.subtitle))]),t._v(" "),r("PostInfoChip",{attrs:{authors:t.authors,post:t.post}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{PostCategory:r(253).default,PostTitle:r(243).default,PostSubtitle:r(244).default,PostInfoChip:r(252).default})},335:function(t,e,r){"use strict";r.r(e);var n=r(18),l=r(3),o=(r(11),r(38),r(31),r(283)),c=r(284),f=r(285),d=r(286),v={components:{VFigure:o.default,PrevNextUp:c.default,TagChips:f.default,PostAuthorBios:d.default},asyncData:function(t){return Object(l.a)(regeneratorRuntime.mark((function e(){var r,l,article,o,c,f,d,v;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,l=t.params,e.next=3,r("articles",l.slug).fetch();case 3:return article=e.sent,e.next=6,r("authors").where({slug:{$in:article.authors}}).fetch();case 6:return o=e.sent,e.next=9,r("puzzles").only(["title","slug","path","createdAt"]).sortBy("createdAt","desc").surround(l.slug).fetch();case 9:return c=e.sent,f=Object(n.a)(c,2),d=f[0],v=f[1],e.abrupt("return",{article:article,prev:d,next:v,authors:o});case 14:case"end":return e.stop()}}),e)})))()},head:function(){return{title:this.article.title,description:this.article.description,link:[{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/katex@0.13.2/dist/katex.min.css"}]}},data:function(){return{up:{path:"/articles",title:"Articles"}}}},m=r(13),component=Object(m.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",[r("PostHeading",{attrs:{post:t.article,authors:t.authors}}),t._v(" "),r("NuxtContent",{attrs:{document:t.article}}),t._v(" "),r("TagChips",{attrs:{tags:t.article.tags}}),t._v(" "),r("PostAuthorBios",{attrs:{authors:t.authors}}),t._v(" "),r("PrevNextUp",{attrs:{prev:t.prev,next:t.next,up:t.up}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{PostHeading:r(287).default,PostAuthorBios:r(286).default})}}]);