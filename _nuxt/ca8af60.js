(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{237:function(t,n,e){"use strict";e.d(n,"a",(function(){return o}));var r={year:"numeric",month:"short",day:"numeric"};function o(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r;return new Date(t).toLocaleDateString("en",n)}},247:function(t,n,e){"use strict";e.r(n);var r=e(237),o={props:{post:Object},methods:{formatDate:r.a}},c=e(13),component=Object(c.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("span",{staticClass:"font-mono text-sm text-gray-500 dark:text-gray-400 transition-colors mr-1"},[t._v("\n    "+t._s(t.formatDate(t.post.createdAt,{day:"2-digit",month:"short",year:"numeric"}))+"\n    »\n  ")]),t._v(" "),e("NuxtLink",{attrs:{to:t.post.path}},[t._t("default",[t._v(t._s(t.post.title)+" ")])],2)],1)}),[],!1,null,null,null);n.default=component.exports}}]);