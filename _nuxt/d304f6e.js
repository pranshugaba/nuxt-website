(window.webpackJsonp=window.webpackJsonp||[]).push([[40,18,21,22],{249:function(t,e,r){"use strict";r.r(e);var n=r(11),component=Object(n.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("h1",{staticClass:"mb-3"},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},250:function(t,e,r){"use strict";r.r(e);var n=r(11),component=Object(n.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("p",{staticClass:"text-xl mt-0 mb-6 text-gray-600 dark:text-gray-400 transition-colors"},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},253:function(t,e,r){"use strict";r.r(e);var n=r(58),o={props:{post:Object},methods:{formatDate:n.a,getCategoryFromRoute:n.c,getThemeFromCategory:n.d},computed:{category:function(){return Object(n.c)(this.post.path)},theme:function(){return Object(n.d)(this.category)}}},l=r(11),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("span",{staticClass:"font-mono text-sm text-gray-500 dark:text-gray-400 transition-colors mr-1"},[t._v("\n    "+t._s(t.formatDate(t.post.createdAt,{day:"2-digit",month:"short",year:"numeric"}))+"\n    »\n  ")]),t._v(" "),r("NuxtLink",{class:t.theme,attrs:{to:t.post.path}},[t._t("default",[t._v(t._s(t.post.title)+" ")])],2)],1)}),[],!1,null,null,null);e.default=component.exports},350:function(t,e,r){"use strict";r.r(e);var n=r(2),o=(r(32),{methods:{kebabToTitle:r(58).e},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,n=t.params,o=n.tag,e.next=4,r("/",{deep:!0}).where({tags:{$contains:o}}).only(["title","slug","path","createdAt"]).sortBy("createdAt","desc").fetch();case 4:return l=e.sent,e.abrupt("return",{params:n,posts:l,tag:o});case 6:case"end":return e.stop()}}),e)})))()},head:function(){return{title:this.tag}}}),l=r(11),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",{staticClass:"content-width"},[r("PostTitle",[t._v(t._s(t.kebabToTitle(t.tag)))]),t._v(" "),t.posts.length>0?r("div",[r("PostSubtitle",[t._v("Posts tagged with "+t._s(t.tag))]),t._v(" "),r("ul",t._l(t.posts,(function(t){return r("li",{key:t.slug},[r("PostPreviewList",{attrs:{post:t}})],1)})),0)],1):r("div",[r("PostSubtitle",[t._v("No posts with this tag.")])],1),t._v(" "),r("div",{staticClass:"text-right"},[r("NuxtLink",{attrs:{to:"/tags"}},[t._v(" See all tags ⟶")])],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{PostTitle:r(249).default,PostSubtitle:r(250).default,PostPreviewList:r(253).default})}}]);