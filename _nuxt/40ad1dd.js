(window.webpackJsonp=window.webpackJsonp||[]).push([[39,18,21,23],{249:function(t,e,n){"use strict";n.r(e);var r=n(11),component=Object(r.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("h1",{staticClass:"mb-3"},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},250:function(t,e,n){"use strict";n.r(e);var r=n(11),component=Object(r.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("p",{staticClass:"text-xl mt-0 mb-6 text-gray-600 dark:text-gray-400 transition-colors"},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},253:function(t,e,n){"use strict";n.r(e);var r=n(58),l={props:{post:Object},methods:{formatDate:r.a,getCategoryFromRoute:r.c,getThemeFromCategory:r.d},computed:{category:function(){return Object(r.c)(this.post.path)},theme:function(){return Object(r.d)(this.category)}}},o=n(11),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("span",{staticClass:"font-mono text-sm text-gray-500 dark:text-gray-400 transition-colors mr-1"},[t._v("\n    "+t._s(t.formatDate(t.post.createdAt,{day:"2-digit",month:"short",year:"numeric"}))+"\n    »\n  ")]),t._v(" "),n("NuxtLink",{class:t.theme,attrs:{to:t.post.path}},[t._t("default",[t._v(t._s(t.post.title)+" ")])],2)],1)}),[],!1,null,null,null);e.default=component.exports},345:function(t,e,n){"use strict";n.r(e);var r=n(2),l=(n(32),{asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,e.next=3,n("puzzles").only(["title","slug","createdAt","path"]).sortBy("createdAt","desc").fetch();case 3:return r=e.sent,e.abrupt("return",{puzzles:r});case 5:case"end":return e.stop()}}),e)})))()},methods:{formatDate:n(58).a},head:{title:"Puzzles"}}),o=n(11),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"content-width"},[n("PostTitle",[t._v("Puzzles")]),t._v(" "),n("PostSubtitle",[t._v("Thought-provoking, mind-bending puzzles")]),t._v(" "),n("ul",t._l(t.puzzles,(function(e){return n("li",{key:e.slug},[n("PostPreviewList",{attrs:{post:e}},[t._v("#"+t._s(e.slug)+" - "+t._s(e.title)+"\n      ")])],1)})),0)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{PostTitle:n(249).default,PostSubtitle:n(250).default,PostPreviewList:n(253).default})}}]);