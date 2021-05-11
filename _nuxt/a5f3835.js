(window.webpackJsonp=window.webpackJsonp||[]).push([[19,5],{242:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r={year:"numeric",month:"short",day:"numeric"};function o(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r;return new Date(t).toLocaleDateString("en",e)}},254:function(t,e,n){n(15),n(11),n(14),n(24),n(12),n(25);var r=n(126),o=n(127);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}n(33),t.exports={functional:!0,render:function(t,e){var n=e._c,data=(e._v,e.data),l=e.children,v=void 0===l?[]:l,_=data.class,h=data.staticClass,style=data.style,d=data.staticStyle,m=data.attrs,f=void 0===m?{}:m,x=o(data,["class","staticClass","style","staticStyle","attrs"]);return n("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){r(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({class:["feather feather-external-link",_,h],style:[style,d],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},f)},x),v.concat([n("path",{attrs:{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}}),n("polyline",{attrs:{points:"15 3 21 3 21 9"}}),n("line",{attrs:{x1:"10",y1:"14",x2:"21",y2:"3"}})]))}}},282:function(t,e,n){"use strict";n.r(e);var r=n(254),o={props:{to:{type:String},linkText:{type:String,default:"ExternalLink"}},components:{ExternalIcon:n.n(r).a}},c=n(13),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",[n("a",{attrs:{href:t.to,target:"_blank",rel:"noopener"}},[t._t("default")],2),t._v(" "),n("ExternalIcon",{staticClass:"inline h-4 mb-1 text-gray-600 dark:text-gray-400 transition-colors"})],1)}),[],!1,null,null,null);e.default=component.exports},325:function(t,e,n){"use strict";n.r(e);var r=n(3),o=(n(31),n(242)),c={head:{title:"About Me"},methods:{formatDate:o.a,getBuildDate:function(){return Object(o.a)("2021-05-11T13:51:06",{year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric"})},getBuildEnv:function(){return"2021-05-11T13:51:06"}},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o,c,l,v,_;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,e.next=3,n("poems").fetch();case 3:return r=e.sent,o=r.length,e.next=7,n("puzzles").fetch();case 7:return c=e.sent,l=c.length,e.next=11,n("articles").fetch();case 11:return v=e.sent,_=v.length,e.abrupt("return",{totalPoems:o,totalPuzzles:l,totalArticles:_});case 14:case"end":return e.stop()}}),e)})))()}},l=n(13),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[n("h1",[t._v("About Me")]),t._v(" "),n("p",[t._v("\n    I am a PhD student in Theoretical Computer Science at\n    "),n("NavigationExtLink",{attrs:{to:"https://www.tifr.res.in/"}},[t._v("TIFR, Mumbai")]),t._v(". I did my undergraduate studies in Maths at\n    "),n("NavigationExtLink",{attrs:{to:"https://iisc.ac.in/"}},[t._v("IISc, Bangalore")]),t._v(".\n  ")],1),t._v(" "),n("p",[t._v("\n    My research interests include (but are not limited to) Automata Theory,\n    Logic, Discrete Maths, and Algorithms.\n  ")]),t._v(" "),n("p",[t._v("\n    I click pictures, write poetry, create puzzles, draw comics, develop apps\n    and games, and write stories.\n  ")]),t._v(" "),n("p",[t._v("\n    I also love playing chess, solving puzzles, swimming and cycling but not\n    both at once.\n  ")]),t._v(" "),n("h2",[t._v("Reading")]),t._v(" "),n("p",[t._v("I am currently reading The Hobbit, or There and Back again.")]),t._v(" "),n("div",{staticClass:"text-right"},[n("NuxtLink",{attrs:{to:"/reading-list"}},[t._v("See my reading list ⟶")])],1),t._v(" "),n("h2",[t._v("Projects")]),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"text-right"},[n("NuxtLink",{attrs:{to:"/projects"}},[t._v("See what I have been working on ⟶")])],1),t._v(" "),n("h2",[t._v("Uses")]),t._v(" "),t._m(1),t._v(" "),n("div",{staticClass:"text-right"},[n("NuxtLink",{attrs:{to:"/uses"}},[t._v("See what I use ⟶")])],1),t._v(" "),n("h1",{staticClass:"mt-16"},[t._v("About this site")]),t._v(" "),n("p",[t._v("\n    This site is built using\n    "),n("NavigationExtLink",{attrs:{to:"https://nuxtjs.org/"}},[t._v("Nuxt.js")]),t._v("\n    and "),n("NavigationExtLink",{attrs:{to:"https://vuejs.org/"}},[t._v("Vue.js")]),t._v(".\n    You can find the source code on\n    "),n("NavigationExtLink",{attrs:{to:"https://github.com/pranshugaba/nuxt-website"}},[t._v("GitHub")]),t._v(".\n  ")],1),t._v(" "),n("h2",[t._v("Statistics")]),t._v(" "),n("p",[t._v("There are currently")]),t._v(" "),n("ul",{staticClass:"list-disc list-inside"},[n("li",[n("NuxtLink",{attrs:{to:"/poems"}},[t._v(" "+t._s(t.totalPoems)+" poems")]),t._v(",\n    ")],1),t._v(" "),n("li",[n("NuxtLink",{attrs:{to:"/puzzles"}},[t._v(" "+t._s(t.totalPuzzles)+" puzzles")]),t._v(",\n    ")],1),t._v(" "),n("li",[t._v("\n      and "),n("NuxtLink",{attrs:{to:"/articles"}},[t._v(" "+t._s(t.totalArticles)+" article")])],1)]),t._v(" "),n("p",[t._v("on this website.")]),t._v(" "),n("p",[t._v("Last Updated on "+t._s(t.getBuildDate()))]),t._v(" "),n("h2",[t._v("Tags")]),t._v(" "),n("p",[t._v("Common tags used:")])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[t._v("Decimal Clock")]),t._v(" "),n("li",[t._v("Maths Wiki")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[t._v("Arch Linux")]),t._v(" "),n("li",[t._v("VSCodium")]),t._v(" "),n("li",[t._v("Godot")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{NavigationExtLink:n(282).default})}}]);