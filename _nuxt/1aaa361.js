(window.webpackJsonp=window.webpackJsonp||[]).push([[39,17],{249:function(t,e,r){"use strict";r.r(e);var n=r(58),o={props:{post:Object},methods:{formatDate:n.a,getCategoryFromRoute:n.c,getThemeFromCategory:n.d},computed:{category:function(){return Object(n.c)(this.post.path)},theme:function(){return Object(n.d)(this.category)}}},c=r(14),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("span",{staticClass:"font-mono text-sm text-gray-500 dark:text-gray-400 transition-colors mr-1"},[t._v("\n    "+t._s(t.formatDate(t.post.createdAt,{day:"2-digit",month:"short",year:"numeric"}))+"\n    »\n  ")]),t._v(" "),r("NuxtLink",{class:t.theme,attrs:{to:t.post.path}},[t._t("default",[t._v(t._s(t.post.title)+" ")])],2)],1)}),[],!1,null,null,null);e.default=component.exports},345:function(t,e,r){"use strict";r.r(e);var n=r(2),o=(r(32),{asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,n=t.params,o=n.tag,e.next=4,r("/",{deep:!0}).where({tags:{$contains:o}}).only(["title","slug","path","createdAt"]).sortBy("createdAt","asc").fetch();case 4:return c=e.sent,e.abrupt("return",{params:n,posts:c,tag:o});case 6:case"end":return e.stop()}}),e)})))()},head:function(){return{title:this.tag}}}),c=r(14),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",[r("h1",[t._v(t._s(t.tag))]),t._v(" "),t.posts.length>0?r("div",[r("p",[t._v("Posts tagged with "+t._s(t.tag))]),t._v(" "),r("ul",t._l(t.posts,(function(t){return r("li",{key:t.slug},[r("PostPreviewList",{attrs:{post:t}})],1)})),0)]):r("div",[r("p",[t._v("No posts with this tag.")])]),t._v(" "),r("div",{staticClass:"text-right"},[r("NuxtLink",{attrs:{to:"/tags"}},[t._v(" See all tags ⟶")])],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{PostPreviewList:r(249).default})}}]);