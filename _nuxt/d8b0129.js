(window.webpackJsonp=window.webpackJsonp||[]).push([[29,18],{334:function(t,e,r){"use strict";r.r(e);r(219);var n=r(61),o={props:{post:Object,descriptionLength:{type:Number,default:280}},methods:{formatDate:n.a,getCategoryFromRoute:n.c,getThemeFromCategory:n.d,trimString:n.g},computed:{category:function(){return Object(n.c)(this.post.path)},theme:function(){return Object(n.d)(this.category)}}},c=r(8),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mt-6 mb-6"},[r("NuxtLink",{staticClass:"text-lg font-medium",class:t.theme,attrs:{to:t.post.path}},[t._t("default",(function(){return[t._v(t._s(t.post.title)+" ")]}))],2),t._v(" "),r("div",{staticClass:"mt-0.5 mb-1.5 text-gray-900 dark:text-gray-200 transition-colors"},[t._v("\n    "+t._s(t.trimString(t.post.description,t.descriptionLength))+"\n  ")]),t._v(" "),r("div",{staticClass:"text-sm text-gray-500 dark:text-gray-400 transition-colors"},[t._v("\n    "+t._s(t.formatDate(t.post.createdAt,{day:"numeric",month:"short",year:"numeric"}))+"\n  ")])],1)}),[],!1,null,null,null);e.default=component.exports},387:function(t,e,r){"use strict";r.r(e);var n=r(3),o=(r(34),{asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,e.next=3,r("articles").only(["title","slug","createdAt","path","description"]).sortBy("createdAt","desc").fetch();case 3:return n=e.sent,e.abrupt("return",{articles:n});case 5:case"end":return e.stop()}}),e)})))()},methods:{formatDate:r(61).a},head:{title:"Puzzles"}}),c=r(8),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",{staticClass:"content-width"},[r("PostTitle",[t._v("Articles")]),t._v(" "),r("PostSubtitle",[t._v("About GameDev and WebDev")]),t._v(" "),r("ul",t._l(t.articles,(function(article){return r("li",{key:article.slug},[r("PostPreviewFancyList",{attrs:{post:article}})],1)})),0)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{PostTitle:r(216).default,PostSubtitle:r(217).default,PostPreviewFancyList:r(334).default})}}]);