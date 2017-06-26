/*! vue-ydui v0.7.1 by YDCSS (c) 2017 Licensed MIT */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.ydui=e():t.ydui=e()}(this,function(){return function(t){function e(i){if(n[i])return n[i].exports;var o=n[i]={exports:{},id:i,loaded:!1};return t[i].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="/dist/",e(0)}({0:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.InfiniteScroll=void 0;var o=n(64),s=i(o);e.InfiniteScroll=s.default},1:function(t,e){t.exports=function(t,e,n,i){var o,s=t=t||{},r=typeof t.default;"object"!==r&&"function"!==r||(o=t,s=t.default);var a="function"==typeof s?s.options:s;if(e&&(a.render=e.render,a.staticRenderFns=e.staticRenderFns),n&&(a._scopeId=n),i){var d=a.computed||(a.computed={});Object.keys(i).forEach(function(t){var e=i[t];d[t]=function(){return e}})}return{esModule:o,exports:s,options:a}}},5:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){var t=function(t){t.preventDefault(),t.stopPropagation()},e=!1;return{lock:function(){e||(e=!0,document.addEventListener("touchmove",t))},unlock:function(){e=!1,document.removeEventListener("touchmove",t)}}}(),i=function(t){var e=/^#([a-fA-F0-9]){3}(([a-fA-F0-9]){3})?$/,n=/^[rR][gG][bB][aA]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){3}\s*(\.|\d+\.)?\d+\s*\)$/,i=/^[rR][gG][bB]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){2}(25[0-5]|2[0-4]\d|1?\d{1,2})\s*\)$/;return e.test(t)||n.test(t)||i.test(t)},o=function(t){for(var e=t;e&&"HTML"!==e.tagName&&"BODY"!==e.tagName&&1===e.nodeType;){var n=document.defaultView.getComputedStyle(e).overflowY;if("scroll"===n||"auto"===n)return e;e=e.parentNode}return window},s=function(t,e){var n=t==window?document.body.offsetHeight:t.offsetHeight,i=t===window?0:t.getBoundingClientRect().top,o=e.getBoundingClientRect().top-i,s=o+e.offsetHeight;return o>=0&&o<n||s>0&&s<=n},r=function(t,e){return e=e||"",0!=e.replace(/\s/g,"").length&&new RegExp(" "+e+" ").test(" "+t.className+" ")},a=function(t,e){r(t,e)||(t.className=""==t.className?e:t.className+" "+e)},d=function(t,e){if(r(t,e)){for(var n=" "+t.className.replace(/[\t\r\n]/g,"")+" ";n.indexOf(" "+e+" ")>=0;)n=n.replace(" "+e+" "," ");t.className=n.replace(/^\s+|\s+$/g,"")}},c=function(t){function e(n,i,o){if(n!==i){var s=n+o>i?i:n+o;n>i&&(s=n-o<i?i:n-o),t===window?window.scrollTo(s,s):t.scrollTop=s,window.requestAnimationFrame(function(){return e(s,i,o)})}}var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments[2],o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:500;window.requestAnimationFrame||(window.requestAnimationFrame=window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||function(t){return window.setTimeout(t,1e3/60)});var s=Math.abs(n-i),r=Math.ceil(s/o*50);e(n,i,r)};e.pageScroll=n,e.isColor=i,e.getScrollview=o,e.checkInview=s,e.addClass=a,e.removeClass=d,e.scrollTop=c},64:function(t,e,n){var i=n(1)(n(198),n(130),null,null);t.exports=i.exports},130:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._t("list"),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.isLoading&&t.isDone,expression:"!isLoading && isDone"}],staticClass:"list-donetip"},[t._t("doneTip",[t._v("没有更多数据了")])],2),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.isLoading,expression:"isLoading"}],staticClass:"list-loading"},[t._t("loadingTip",[t._v("加载中")])],2),t._v(" "),n("div",{ref:"tag",staticStyle:{height:"1px"}})],2)},staticRenderFns:[]}},198:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(5);e.default={name:"yd-infinitescroll",data:function(){return{isLoading:!1,isDone:!1,num:1}},props:{onInfinite:{type:Function,required:!0},distance:{default:0,validator:function(t){return/^\d*$/.test(t)}}},methods:{init:function(){var t=this;this.scrollview=(0,i.getScrollview)(this.$el),this.scrollview.addEventListener("scroll",this.throttledCheck,!1),this.$on("ydui.infinitescroll.loadedDone",function(){t.isLoading=!1,t.isDone=!0}),this.$on("ydui.infinitescroll.finishLoad",function(){t.isLoading=!1}),this.$on("ydui.infinitescroll.reInit",function(){t.isLoading=!1,t.isDone=!1})},scrollHandler:function(){if(!this.isLoading&&!this.isDone){var t=this.scrollview,e=document.body.offsetHeight,n=t==window?0:t.getBoundingClientRect().top;if(!t)return void console.warn("Can't find the scrollview!");if(!this.$refs.tag)return void console.warn("Can't find the refs.tag!");var i=Math.floor(this.$refs.tag.getBoundingClientRect().top)-1,o=this.distance&&this.distance>0?~~this.distance:Math.floor(e/10);i>n&&i-(o+n)*this.num<=e&&(this.isLoading=!0,this.onInfinite(),this.num++)}},throttle:function(t,e){clearTimeout(t.tId),t.tId=setTimeout(function(){t.call(e)},50)},throttledCheck:function(){this.throttle(this.scrollHandler)}},mounted:function(){this.$nextTick(this.init)},destroyed:function(){this.scrollview.removeEventListener("scroll",this.throttledCheck)}}}})});