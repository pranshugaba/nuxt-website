(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{255:function(t,e,r){"use strict";r.r(e);var n=r(58),o={props:{authors:{type:Array,required:!0},post:{type:Object}},methods:{formatDate:n.a,readingTime:n.f}},l=r(11),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mt-8 mb-10 flex items-center justify-start space-x-3"},[t._l(t.authors,(function(t){return r("div",{key:t.slug},[r("NuxtLink",{attrs:{to:t.path}},[r("NuxtImg",{staticClass:"h-12 w-12 rounded-full",attrs:{src:"/img/authors/"+t.avatar,alt:"Avatar of the author"}})],1)],1)})),t._v(" "),r("div",[t._l(t.authors,(function(e,n){return r("span",{key:e.slug},[r("span",{staticClass:"text-gray-700 dark:text-gray-300 transition-colors"},[r("NuxtLink",{staticClass:"text-gray-800 dark:text-gray-200 transition-colors font-medium",attrs:{to:e.path}},[t._v(t._s(e.name))]),n!=t.authors.length-1?r("span",[t._v(", ")]):t._e()],1)])})),t._v(" "),r("div",{staticClass:"text-gray-600 dark:text-gray-400 text-sm transition-colors"},[t._v("\n      "+t._s(t.formatDate(t.post.createdAt))+"\n      "),t.post.showReadingTime?r("span",[r("span",{staticClass:"pl-1"},[t._v(" · ")]),t._v(" "),r("span",{staticClass:"pl-1"},[t._v(t._s(t.readingTime(t.post))+" min read")])]):t._e()]),t._v(" "),t.post.updatedAt>t.post.createdAt?r("div",{staticClass:"mt-0.5 text-gray-600 dark:text-gray-400 text-sm transition-colors"},[t._v("\n      Last updated on "+t._s(t.formatDate(t.post.updatedAt))+"\n    ")]):t._e()],2)],2)}),[],!1,null,null,null);e.default=component.exports}}]);