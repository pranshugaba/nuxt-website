(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{236:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var n={year:"numeric",month:"short",day:"numeric"};function o(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n;return new Date(t).toLocaleDateString("en",e)}},334:function(t,e,r){"use strict";r.r(e);var n=r(236),o={props:{post:Object,authors:{type:Array},showCategory:{type:Boolean,default:!0}},methods:{formatDate:n.a}},l=r(13),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("NuxtLink",{staticClass:"inline-block hover:no-underline transform transition hover:-translate-y-1 mb-6",attrs:{to:t.post.path}},[r("div",{staticClass:"flex flex-wrap items-center group"},[t.showCategory?r("p",{staticClass:"uppercase text-xs tracking-wider mb-1 text-blue-700 dark:text-blue-300 transition-colors"},[t._v("\n      "+t._s(t.post.category)+"\n    ")]):t._e(),t._v(" "),r("h2",{staticClass:"mt-0 mb-0 text-xl text-black dark:group-hover:text-blue-400 group-hover:text-blue-600"},[t._v("\n      "+t._s(t.post.title)+"\n    ")]),t._v(" "),r("p",{staticClass:"text-gray-600 dark:text-gray-400 transition-colors"},[t._v("\n      "+t._s(t.post.description)+"\n    ")]),t._v(" "),r("p",{staticClass:"text-sm text-gray-600 dark:text-gray-400 transition-colors"},[t._v("\n      By\n      "),t._l(t.authors,(function(e,n){return r("span",{key:e},[r("span",{staticClass:"text-gray-700 dark:text-gray-300 transition-colors"},[t._v("\n          "+t._s(e)),n!=t.authors.length-1?r("span",[t._v(", ")]):t._e()])])})),t._v("\n      ·\n      "+t._s(t.formatDate(t.post.updatedAt))+"\n    ")],2)])])}),[],!1,null,null,null);e.default=component.exports}}]);