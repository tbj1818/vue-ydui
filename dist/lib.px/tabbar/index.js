/*! vue-ydui v0.7.1 by YDCSS (c) 2017 Licensed MIT */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.ydui=t():e.ydui=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="/dist/",t(0)}({0:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.TabBarItem=t.TabBar=void 0;var o=n(94),i=r(o),a=n(93),s=r(a);t.TabBar=i.default,t.TabBarItem=s.default},1:function(e,t){e.exports=function(e,t,n,r){var o,i=e=e||{},a=typeof e.default;"object"!==a&&"function"!==a||(o=e,i=e.default);var s="function"==typeof i?i.options:i;if(t&&(s.render=t.render,s.staticRenderFns=t.staticRenderFns),n&&(s._scopeId=n),r){var l=s.computed||(s.computed={});Object.keys(r).forEach(function(e){var t=r[e];l[e]=function(){return t}})}return{esModule:o,exports:i,options:s}}},2:function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},3:function(e,t,n){function r(e){for(var t=0;t<e.length;t++){var n=e[t],r=u[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(i(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var a=[],o=0;o<n.parts.length;o++)a.push(i(n.parts[o]));u[n.id]={id:n.id,refs:1,parts:a}}}}function o(){var e=document.createElement("style");return e.type="text/css",d.appendChild(e),e}function i(e){var t,n,r=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(r){if(b)return m;r.parentNode.removeChild(r)}if(v){var i=p++;r=f||(f=o()),t=a.bind(null,r,i,!1),n=a.bind(null,r,i,!0)}else r=o(),t=s.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}function a(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=x(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function s(e,t){var n=t.css,r=t.media,o=t.sourceMap;if(r&&e.setAttribute("media",r),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var l="undefined"!=typeof document,c=n(4),u={},d=l&&(document.head||document.getElementsByTagName("head")[0]),f=null,p=0,b=!1,m=function(){},v="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n){b=n;var o=c(e,t);return r(o),function(t){for(var n=[],i=0;i<o.length;i++){var a=o[i],s=u[a.id];s.refs--,n.push(s)}t?(o=c(e,t),r(o)):o=[];for(var i=0;i<n.length;i++){var s=n[i];if(0===s.refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete u[s.id]}}}};var x=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},4:function(e,t){e.exports=function(e,t){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],a=i[0],s=i[1],l=i[2],c=i[3],u={id:e+":"+o,css:s,media:l,sourceMap:c};r[a]?r[a].parts.push(u):n.push(r[a]={id:a,parts:[u]})}return n}},5:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){var e=function(e){e.preventDefault(),e.stopPropagation()},t=!1;return{lock:function(){t||(t=!0,document.addEventListener("touchmove",e))},unlock:function(){t=!1,document.removeEventListener("touchmove",e)}}}(),r=function(e){var t=/^#([a-fA-F0-9]){3}(([a-fA-F0-9]){3})?$/,n=/^[rR][gG][bB][aA]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){3}\s*(\.|\d+\.)?\d+\s*\)$/,r=/^[rR][gG][bB]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){2}(25[0-5]|2[0-4]\d|1?\d{1,2})\s*\)$/;return t.test(e)||n.test(e)||r.test(e)},o=function(e){for(var t=e;t&&"HTML"!==t.tagName&&"BODY"!==t.tagName&&1===t.nodeType;){var n=document.defaultView.getComputedStyle(t).overflowY;if("scroll"===n||"auto"===n)return t;t=t.parentNode}return window},i=function(e,t){var n=e==window?document.body.offsetHeight:e.offsetHeight,r=e===window?0:e.getBoundingClientRect().top,o=t.getBoundingClientRect().top-r,i=o+t.offsetHeight;return o>=0&&o<n||i>0&&i<=n},a=function(e,t){return t=t||"",0!=t.replace(/\s/g,"").length&&new RegExp(" "+t+" ").test(" "+e.className+" ")},s=function(e,t){a(e,t)||(e.className=""==e.className?t:e.className+" "+t)},l=function(e,t){if(a(e,t)){for(var n=" "+e.className.replace(/[\t\r\n]/g,"")+" ";n.indexOf(" "+t+" ")>=0;)n=n.replace(" "+t+" "," ");e.className=n.replace(/^\s+|\s+$/g,"")}},c=function(e){function t(n,r,o){if(n!==r){var i=n+o>r?r:n+o;n>r&&(i=n-o<r?r:n-o),e===window?window.scrollTo(i,i):e.scrollTop=i,window.requestAnimationFrame(function(){return t(i,r,o)})}}var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments[2],o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:500;window.requestAnimationFrame||(window.requestAnimationFrame=window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||function(e){return window.setTimeout(e,1e3/60)});var i=Math.abs(n-r),a=Math.ceil(i/o*50);t(n,r,a)};t.pageScroll=n,t.isColor=r,t.getScrollview=o,t.checkInview=i,t.addClass=s,t.removeClass=l,t.scrollTop=c},28:function(e,t,n){t=e.exports=n(2)(),t.push([e.id,'.m-tabbar{width:100%;position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;padding:5px 0 3px;background-color:hsla(0,0%,100%,.96)}.m-tabbar:after{content:"";position:absolute;z-index:0;top:0;left:0;width:100%;height:1px;border-top:1px solid #b2b2b2;-webkit-transform:scaleY(.5);transform:scaleY(.5);-webkit-transform-origin:0 0;transform-origin:0 0}.tabbar-fixed{position:fixed;bottom:0;left:0;z-index:100}.tabbar-item{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.tabbar-active,.tabbar-active .tabbar-icon{color:inherit}.tabbar-badge{top:-1px;margin-left:-7px}.tabbar-badge,.tabbar-dot{position:absolute;left:100%;z-index:999}.tabbar-dot{display:block;width:10px;height:10px;background-color:#ef4f4f;border-radius:50%;top:1px;margin-left:-5px}.tabbar-icon{height:29px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative}.tabbar-icon img{height:70%}.tabbar-txt{display:inline-block;font-size:inherit}',""])},93:function(e,t,n){var r=n(1)(n(230),n(144),null,null);e.exports=r.exports},94:function(e,t,n){n(164);var r=n(1)(n(231),n(122),null,null);e.exports=r.exports},122:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",{staticClass:"m-tabbar tabbbar-top-line-color",class:e.classes,style:e.styles},[e._t("default")],2)},staticRenderFns:[]}},144:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("router-link",{staticClass:"tabbar-item",class:e.classes,style:e.styles,attrs:{to:e.link,exact:e.$parent.exact,"active-class":e.$parent.activeClass}},[n("span",{staticClass:"tabbar-icon"},[e._t("icon"),e._v(" "),n("span",{staticClass:"tabbar-badge"},[e._t("badge")],2),e._v(" "),e.dot?n("span",{staticClass:"tabbar-dot"}):e._e()],2),e._v(" "),n("span",{staticClass:"tabbar-txt"},[e._v(e._s(e.title))])])},staticRenderFns:[]}},164:function(e,t,n){var r=n(28);"string"==typeof r&&(r=[[e.id,r,""]]),r.locals&&(e.exports=r.locals);n(3)("e748e38c",r,!0)},230:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n(5);t.default={name:"yd-tabbar-item",props:{link:[String,Object],title:String,active:Boolean,dot:Boolean},computed:{classes:function(){return this.active?"tabbar-active":""},styles:function(){return this.active?{}:{color:this.$parent.color}}}}},231:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(5);t.default={name:"yd-tabbar",props:{fixed:Boolean,exact:{type:Boolean,default:!0},activeClass:{type:String,default:"router-link-active"},activeColor:{validator:function(e){return!e||(0,r.isColor)(e)},default:"#09BB07"},bgcolor:{validator:function(e){return!e||(0,r.isColor)(e)},default:"#FFF"},color:{validator:function(e){return!e||(0,r.isColor)(e)},default:"#979797"},fontsize:{validator:function(e){return/^(\.|\d+\.)?\d+(px|rem)$/.test(e)},default:"12px"}},computed:{classes:function(){return this.fixed?"tabbar-fixed":""},styles:function(){return{color:this.activeColor,backgroundColor:this.bgcolor,fontSize:this.fontsize}}}}}})});