(window.webpackJsonp=window.webpackJsonp||[]).push([[32,6],{260:function(t,e,n){n(15),n(12),n(13),n(22),n(14),n(23);var r=n(127),o=n(128);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}n(33),t.exports={functional:!0,render:function(t,e){var n=e._c,data=(e._v,e.data),l=e.children,v=void 0===l?[]:l,f=data.class,h=data.staticClass,style=data.style,_=data.staticStyle,d=data.attrs,y=void 0===d?{}:d,k=o(data,["class","staticClass","style","staticStyle","attrs"]);return n("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){r(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({class:["feather feather-external-link",f,h],style:[style,_],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},y)},k),v.concat([n("path",{attrs:{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}}),n("polyline",{attrs:{points:"15 3 21 3 21 9"}}),n("line",{attrs:{x1:"10",y1:"14",x2:"21",y2:"3"}})]))}}},289:function(t,e,n){"use strict";n.r(e);var r=n(260),o={props:{to:{type:String},linkText:{type:String,default:"ExternalLink"}},components:{ExternalIcon:n.n(r).a}},c=n(11),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",[n("a",{attrs:{href:t.to,target:"_blank",rel:"noopener"}},[t._t("default")],2),t._v(" "),n("ExternalIcon",{staticClass:"inline h-4 mb-1 text-gray-600 dark:text-gray-400 transition-colors"})],1)}),[],!1,null,null,null);e.default=component.exports},342:function(t,e,n){"use strict";n.r(e);var r={head:{title:"Licence"}},o=n(11),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content-width"},[n("h1",[t._v("Licence")]),t._v(" "),n("h2",[t._v("CC-BY-SA 4.0")]),t._v(" "),n("p",[t._v("\n    Unless otherwise stated, all content on this website is licensed under a\n    "),n("NavExtLink",{attrs:{to:"https://creativecommons.org/licenses/by-sa/4.0/"}},[t._v("\n      Commons Attribution-ShareAlike 4.0 International License ")]),t._v(".\n  ")],1),t._v(" "),n("h3",[t._v("Attributions")]),t._v(" "),n("ul",[n("li",[n("NavExtLink",{attrs:{to:"https://freeicons.io/free-space-icons/external-link-icon-icon"}},[t._v("External link ")]),t._v(",\n      "),n("NavExtLink",{attrs:{to:"https://freeicons.io/free-space-icons/sun-icon-icon"}},[t._v("Sun ")]),t._v(", and\n      "),n("NavExtLink",{attrs:{to:"https://freeicons.io/free-space-icons/moon-icon-icon"}},[t._v("Moon")]),t._v("\n      icons by\n      "),n("NavExtLink",{attrs:{to:"https://freeicons.io/profile/714",target:"_blank"}},[t._v("Raj Dev")]),t._v("\n      are licensed under\n      "),n("NavExtLink",{attrs:{to:"https://creativecommons.org/licenses/by-sa/3.0/"}},[t._v("CC BY-SA 3.0")]),t._v(".\n    ")],1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{NavExtLink:n(289).default})}}]);