(window.webpackJsonp=window.webpackJsonp||[]).push([[40,21,23,24],{249:function(t,e,n){"use strict";n.r(e);var r=n(11),component=Object(r.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("h1",{staticClass:"mb-3"},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},250:function(t,e,n){"use strict";n.r(e);var r=n(11),component=Object(r.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("p",{staticClass:"text-xl mt-0 mb-6 text-gray-600 dark:text-gray-400 transition-colors"},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},298:function(t,e,n){"use strict";n.r(e);var r={props:{book:Object}},l=n(11),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex items-center mb-10"},[n("div",{staticClass:"w-1/3"},[n("NuxtImg",{staticClass:"rounded-sm shadow-md",attrs:{src:"/img/reading-list/"+t.book.cover}})],1),t._v(" "),n("div",{staticClass:"w-2/3 pl-4"},[n("h3",{staticClass:"mb-0"},[t._v(t._s(t.book.title))]),t._v(" "),n("p",{staticClass:"my-2"},[t._v(t._s(t.book.author))])])])}),[],!1,null,null,null);e.default=component.exports},346:function(t,e,n){"use strict";n.r(e);var r=n(2),l=(n(32),{components:{ReadingListBook:n(298).default},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,e.next=3,n("reading-list").fetch();case 3:return r=e.sent,e.abrupt("return",{books:r});case 5:case"end":return e.stop()}}),e)})))()},head:{title:"Reading List"}}),o=n(11),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content-width"},[n("PostTitle",[t._v("My Reading List")]),t._v(" "),n("PostSubtitle",[t._v("Some books that I have read recently")]),t._v(" "),n("ul",t._l(t.books,(function(t){return n("li",{key:t.slug},[n("ReadingListBook",{attrs:{book:t}})],1)})),0)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{PostTitle:n(249).default,PostSubtitle:n(250).default})}}]);