(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{289:function(t,e,r){"use strict";r.r(e);r(188);var n={props:{totalPosts:{type:Number,default:26},postsPerPage:{type:Number,default:5}},computed:{totalPages:function(){return Math.ceil(this.totalPosts/this.postsPerPage)},prevPage:function(){return this.currentPage>1?this.currentPage-1:1},currentPage:function(){return parseInt(this.$route.params.page)||1},nextPage:function(){return this.currentPage<this.totalPages?this.currentPage+1:this.totalPages}}},o=r(13),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"grid grid-cols-2"},[r("NuxtLink",{attrs:{to:{name:"poems-page-page",params:{page:t.prevPage}}}},[t._v("\n    prev page\n  ")]),t._v(" "),r("NuxtLink",{staticClass:"text-right",attrs:{to:{name:"poems-page-page",params:{page:t.nextPage}}}},[t._v("\n    next page\n  ")])],1)}),[],!1,null,null,null);e.default=component.exports}}]);