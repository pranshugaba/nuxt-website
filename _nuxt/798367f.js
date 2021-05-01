(window.webpackJsonp=window.webpackJsonp||[]).push([[25,2,3,6,7,8,9,10,11,13,14],{236:function(t,e,r){"use strict";r.r(e);var n=r(13),component=Object(n.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("h1",{staticClass:"mb-2"},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},237:function(t,e,r){var map={"./avatar.png":240,"./farm.jpg":241,"./pranshu.jpg":242};function n(t){var e=l(t);return r(e)}function l(t){if(!r.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}n.keys=function(){return Object.keys(map)},n.resolve=l,t.exports=n,n.id=237},238:function(t,e,r){"use strict";r.r(e);var n={name:"vImage",props:["src"]},l=r(13),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("img",{staticClass:"h-auto",attrs:{src:t.src}})}),[],!1,null,null,null);e.default=component.exports},239:function(t,e,r){"use strict";r.r(e);var n=r(13),component=Object(n.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("p",{staticClass:"text-xl mt-0 mb-6 text-gray-600 dark:text-gray-400 transition-colors"},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},240:function(t,e,r){t.exports=r.p+"img/avatar.1069164.png"},241:function(t,e,r){t.exports=r.p+"img/farm.6ea0cb3.jpg"},242:function(t,e,r){t.exports=r.p+"img/pranshu.95dec90.jpg"},244:function(t,e,r){"use strict";r.d(e,"a",(function(){return l})),r.d(e,"b",(function(){return o}));r(40),r(86),r(41),r(55),r(124);function n(t){return t.charAt(0).toUpperCase()+t.slice(1)}function l(t){return t.split("-").map((function(t){return n(t)})).join(" ")}function o(content){var t=JSON.stringify(content).split(" ").length;return Math.ceil(t/200)}},246:function(t,e,r){"use strict";r.r(e);var n={year:"numeric",month:"short",day:"numeric"};var l={props:{authors:{type:Array,required:!0},updatedDate:{type:String},readingTime:{type:String,default:"123"}},methods:{formatDate:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n;return new Date(t).toLocaleDateString("en",e)}}},o=r(13),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mb-8 flex items-center justify-start space-x-3"},[t._l(t.authors,(function(t){return n("div",{key:t.slug},[n("img",{staticClass:"h-12 w-12 rounded-full",attrs:{src:r(237)("./"+t.avatar),alt:"Avatar of the author"}})])})),t._v(" "),n("div",[t._l(t.authors,(function(e,r){return n("span",{key:e.slug},[n("span",{staticClass:"text-gray-700 dark:text-gray-300 transition-colors"},[n("NuxtLink",{staticClass:"text-gray-800 dark:text-gray-200 transition-colors font-medium",attrs:{to:e.path}},[t._v(t._s(e.name))]),r!=t.authors.length-1?n("span",[t._v(", ")]):t._e()],1)])})),t._v(" "),n("div",{staticClass:"text-gray-600 dark:text-gray-400 text-sm transition-colors"},[t._v("\n      "+t._s(t.formatDate(t.updatedDate))+"\n      "),"false"!==t.readingTime?n("span",[t._v("\n        · "+t._s(t.readingTime)+" min read\n      ")]):t._e()])],2)],2)}),[],!1,null,null,null);e.default=component.exports},248:function(t,e,r){"use strict";r.r(e);var n=r(13),component=Object(n.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("p",{staticClass:"mb-2 text-sm text-blue-700 dark:text-blue-300 uppercase tracking-wider"},[t._t("default",[t._v("Category")])],2)}),[],!1,null,null,null);e.default=component.exports},276:function(t,e,r){"use strict";r.r(e);var n={components:{VImage:r(238).default},props:{imgSrc:String,caption:String}},l=r(13),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("figure",[r("VImage",{attrs:{src:t.imgSrc}}),t._v(" "),r("figcaption",{staticClass:"mt-2 mb-8 text-sm text-gray-600 dark:text-gray-400 text-center transition-colors"},[t.caption?r("span",[t._v("\n      "+t._s(t.caption)+"\n    ")]):!1!==t.caption?r("span",[t._v(" Photo by Pranshu Gaba ")]):t._e()])],1)}),[],!1,null,null,null);e.default=component.exports},277:function(t,e,r){"use strict";r.r(e);var n={props:{prev:{type:Object,default:function(){return null}},next:{type:Object,default:function(){return null}},up:{type:Object,default:function(){return null}}}},l=r(13),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"grid grid-cols-3 gap-8"},[r("div",{staticClass:"py-2"},[t.prev?r("NuxtLink",{staticClass:"inline-block",attrs:{to:t.prev.path}},[r("span",{staticClass:"block font-semibold text-sm"},[t._v("prev")]),t._v(" "),r("span",{staticClass:"text-gray-700 dark:text-gray-300 transition-colors"},[t._v(t._s(t.prev.title))])]):r("span",[t._v(" ")])],1),t._v(" "),r("div",{staticClass:"py-2 text-center"},[t.up?r("NuxtLink",{staticClass:"inline-block",attrs:{to:t.up.path}},[r("span",{staticClass:"block text-sm font-semibold"},[t._v("up")]),t._v(" "),r("span",{staticClass:"text-gray-700 dark:text-gray-300 transition-colors"},[t._v(t._s(t.up.title))])]):t._e()],1),t._v(" "),r("div",{staticClass:"py-2 text-right"},[t.next?r("NuxtLink",{staticClass:"inline-block",attrs:{to:t.next.path}},[r("span",{staticClass:"block font-semibold text-sm"},[t._v("next")]),t._v(" "),r("span",{staticClass:"text-gray-700 dark:text-gray-300 transition-colors"},[t._v(t._s(t.next.title))])]):r("span",[t._v(" ")])],1)])}),[],!1,null,null,null);e.default=component.exports},278:function(t,e,r){"use strict";r.r(e);var n=r(244),l={name:"tagChips",props:{tags:{type:Array}},methods:{kebabToTitle:n.a}},o=r(13),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",{staticClass:"mt-12 mb-4 flex items-center justify-start space-x-3"},t._l(t.tags,(function(e){return r("li",{key:e,staticClass:"bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded-md text-sm"},[r("NuxtLink",{attrs:{to:{name:"tags-tag",params:{tag:e}}}},[t._v("\n      "+t._s(t.kebabToTitle(e))+"\n    ")])],1)})),0)}),[],!1,null,null,null);e.default=component.exports},279:function(t,e,r){"use strict";r.r(e);var n=r(244),l={props:{post:Object,authors:Array},methods:{readingTime:n.b}},o=r(13),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("PostCategory",[t._v(t._s(t.post.category))]),t._v(" "),r("PostTitle",[t._v(t._s(t.post.title))]),t._v(" "),r("PostSubtitle",[t._v(t._s(t.post.subtitle))]),t._v(" "),r("PostInfoChip",{attrs:{authors:t.authors,updatedDate:t.post.updatedAt,readingTime:t.readingTime(t.post)}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{PostCategory:r(248).default,PostTitle:r(236).default,PostSubtitle:r(239).default,PostInfoChip:r(246).default})},280:function(t,e,r){"use strict";r.r(e);var n={props:{authors:{type:Array}}},l=r(13),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mb-12"},[n("hr",{staticClass:"border-blue-600 dark:border-blue-400 transition-colors"}),t._v(" "),n("div",{staticClass:"mt-6 mb-3 text-gray-700 dark:text-gray-300 transition-colors uppercase tracking-wider"},[t._v("\n    Written by\n  ")]),t._v(" "),t._l(t.authors,(function(e){return n("div",{key:e.slug,staticClass:"mb-6 px-4 py-4 flex items-center justify-start space-x-4 bg-gray-200 dark:bg-gray-700 transition-colors rounded-xl"},[n("img",{staticClass:"h-20 rounded-xl",attrs:{src:r(237)("./"+e.avatar),alt:"Avatar of the author"}}),t._v(" "),n("div",[n("div",{staticClass:"text-lg font-semibold"},[n("NuxtLink",{attrs:{to:e.path}},[t._v(" "+t._s(e.name)+" ")])],1),t._v(" "),n("p",{staticClass:"my-0 leading-normal"},[t._v(t._s(e.bio))])])])}))],2)}),[],!1,null,null,null);e.default=component.exports},332:function(t,e,r){"use strict";r.r(e);var n=r(22),l=r(5),o=(r(14),r(43),r(33),r(244)),c=r(276),d=r(277),f=r(278),v=r(280),m={components:{VFigure:c.default,PrevNextUp:d.default,TagChips:f.default,PostAuthorBios:v.default},methods:{readingTime:o.b},asyncData:function(t){return Object(l.a)(regeneratorRuntime.mark((function e(){var r,l,o,c,d,f,v,m;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,l=t.params,e.next=3,r("puzzles",l.slug).fetch();case 3:return o=e.sent,e.next=6,r("authors").where({slug:{$in:o.authors}}).fetch();case 6:return c=e.sent,e.next=9,r("puzzles").only(["title","slug","path"]).sortBy("createdAt","desc").surround(l.slug).fetch();case 9:return d=e.sent,f=Object(n.a)(d,2),v=f[0],m=f[1],e.abrupt("return",{puzzle:o,prev:v,next:m,authors:c});case 14:case"end":return e.stop()}}),e)})))()},head:function(){return{title:this.puzzle.title,description:this.puzzle.description,link:[{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/katex@0.13.2/dist/katex.min.css"}]}},data:function(){return{up:{path:"/puzzles",title:"Puzzles"}}}},_=r(13),component=Object(_.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",[r("PostHeading",{attrs:{post:t.puzzle,authors:t.authors}}),t._v(" "),r("NuxtContent",{attrs:{document:t.puzzle}}),t._v(" "),r("TagChips",{attrs:{tags:t.puzzle.tags}}),t._v(" "),r("PostAuthorBios",{attrs:{authors:t.authors}}),t._v(" "),r("PrevNextUp",{attrs:{prev:t.prev,next:t.next,up:t.up}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{PostHeading:r(279).default,PostAuthorBios:r(280).default})}}]);