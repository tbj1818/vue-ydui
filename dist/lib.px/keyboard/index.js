/*! vue-ydui v0.7.1 by YDCSS (c) 2017 Licensed MIT */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.ydui=t():e.ydui=t()}(this,function(){return function(e){function t(r){if(o[r])return o[r].exports;var n=o[r]={exports:{},id:r,loaded:!1};return e[r].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var o={};return t.m=e,t.c=o,t.p="/dist/",t(0)}({0:function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.KeyBoard=void 0;var n=o(67),i=r(n);t.KeyBoard=i.default},1:function(e,t){e.exports=function(e,t,o,r){var n,i=e=e||{},s=typeof e.default;"object"!==s&&"function"!==s||(n=e,i=e.default);var a="function"==typeof i?i.options:i;if(t&&(a.render=t.render,a.staticRenderFns=t.staticRenderFns),o&&(a._scopeId=o),r){var l=a.computed||(a.computed={});Object.keys(r).forEach(function(e){var t=r[e];l[e]=function(){return t}})}return{esModule:n,exports:i,options:a}}},2:function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var o=this[t];o[2]?e.push("@media "+o[2]+"{"+o[1]+"}"):e.push(o[1])}return e.join("")},e.i=function(t,o){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},n=0;n<this.length;n++){var i=this[n][0];"number"==typeof i&&(r[i]=!0)}for(n=0;n<t.length;n++){var s=t[n];"number"==typeof s[0]&&r[s[0]]||(o&&!s[2]?s[2]=o:o&&(s[2]="("+s[2]+") and ("+o+")"),e.push(s))}},e}},3:function(e,t,o){function r(e){for(var t=0;t<e.length;t++){var o=e[t],r=d[o.id];if(r){r.refs++;for(var n=0;n<r.parts.length;n++)r.parts[n](o.parts[n]);for(;n<o.parts.length;n++)r.parts.push(i(o.parts[n]));r.parts.length>o.parts.length&&(r.parts.length=o.parts.length)}else{for(var s=[],n=0;n<o.parts.length;n++)s.push(i(o.parts[n]));d[o.id]={id:o.id,refs:1,parts:s}}}}function n(){var e=document.createElement("style");return e.type="text/css",f.appendChild(e),e}function i(e){var t,o,r=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(r){if(b)return m;r.parentNode.removeChild(r)}if(h){var i=p++;r=u||(u=n()),t=s.bind(null,r,i,!1),o=s.bind(null,r,i,!0)}else r=n(),t=a.bind(null,r),o=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else o()}}function s(e,t,o,r){var n=o?"":r.css;if(e.styleSheet)e.styleSheet.cssText=g(t,n);else{var i=document.createTextNode(n),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(i,s[t]):e.appendChild(i)}}function a(e,t){var o=t.css,r=t.media,n=t.sourceMap;if(r&&e.setAttribute("media",r),n&&(o+="\n/*# sourceURL="+n.sources[0]+" */",o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var l="undefined"!=typeof document,c=o(4),d={},f=l&&(document.head||document.getElementsByTagName("head")[0]),u=null,p=0,b=!1,m=function(){},h="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,o){b=o;var n=c(e,t);return r(n),function(t){for(var o=[],i=0;i<n.length;i++){var s=n[i],a=d[s.id];a.refs--,o.push(a)}t?(n=c(e,t),r(n)):n=[];for(var i=0;i<o.length;i++){var a=o[i];if(0===a.refs){for(var l=0;l<a.parts.length;l++)a.parts[l]();delete d[a.id]}}}};var g=function(){var e=[];return function(t,o){return e[t]=o,e.filter(Boolean).join("\n")}}()},4:function(e,t){e.exports=function(e,t){for(var o=[],r={},n=0;n<t.length;n++){var i=t[n],s=i[0],a=i[1],l=i[2],c=i[3],d={id:e+":"+n,css:a,media:l,sourceMap:c};r[s]?r[s].parts.push(d):o.push(r[s]={id:s,parts:[d]})}return o}},5:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){var e=function(e){e.preventDefault(),e.stopPropagation()},t=!1;return{lock:function(){t||(t=!0,document.addEventListener("touchmove",e))},unlock:function(){t=!1,document.removeEventListener("touchmove",e)}}}(),r=function(e){var t=/^#([a-fA-F0-9]){3}(([a-fA-F0-9]){3})?$/,o=/^[rR][gG][bB][aA]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){3}\s*(\.|\d+\.)?\d+\s*\)$/,r=/^[rR][gG][bB]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){2}(25[0-5]|2[0-4]\d|1?\d{1,2})\s*\)$/;return t.test(e)||o.test(e)||r.test(e)},n=function(e){for(var t=e;t&&"HTML"!==t.tagName&&"BODY"!==t.tagName&&1===t.nodeType;){var o=document.defaultView.getComputedStyle(t).overflowY;if("scroll"===o||"auto"===o)return t;t=t.parentNode}return window},i=function(e,t){var o=e==window?document.body.offsetHeight:e.offsetHeight,r=e===window?0:e.getBoundingClientRect().top,n=t.getBoundingClientRect().top-r,i=n+t.offsetHeight;return n>=0&&n<o||i>0&&i<=o},s=function(e,t){return t=t||"",0!=t.replace(/\s/g,"").length&&new RegExp(" "+t+" ").test(" "+e.className+" ")},a=function(e,t){s(e,t)||(e.className=""==e.className?t:e.className+" "+t)},l=function(e,t){if(s(e,t)){for(var o=" "+e.className.replace(/[\t\r\n]/g,"")+" ";o.indexOf(" "+t+" ")>=0;)o=o.replace(" "+t+" "," ");e.className=o.replace(/^\s+|\s+$/g,"")}},c=function(e){function t(o,r,n){if(o!==r){var i=o+n>r?r:o+n;o>r&&(i=o-n<r?r:o-n),e===window?window.scrollTo(i,i):e.scrollTop=i,window.requestAnimationFrame(function(){return t(i,r,n)})}}var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments[2],n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:500;window.requestAnimationFrame||(window.requestAnimationFrame=window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||function(e){return window.setTimeout(e,1e3/60)});var i=Math.abs(o-r),s=Math.ceil(i/n*50);t(o,r,s)};t.pageScroll=o,t.isColor=r,t.getScrollview=n,t.checkInview=i,t.addClass=a,t.removeClass=l,t.scrollTop=c},39:function(e,t,o){t=e.exports=o(2)(),t.push([e.id,'.mask-keyboard{background-color:rgba(0,0,0,.4);right:0;top:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.m-keyboard,.mask-keyboard{position:fixed;z-index:500;bottom:0;left:0}.m-keyboard{width:100%;-webkit-transform:translateY(100%);transform:translateY(100%);-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s;background-color:#f7f7f7}.m-keyboard.keyboard-active{-webkit-transform:translate(0);transform:translate(0)}.keyboard-content{background-color:#fff;margin-top:15px;position:relative}.keyboard-content:before{content:"";position:absolute;z-index:0;top:0;left:0;width:100%;height:1px;border-top:1px solid #d9d9d9;-webkit-transform:scaleY(.5);transform:scaleY(.5);-webkit-transform-origin:0 0;transform-origin:0 0}.keyboard-title{overflow:hidden;padding:10px 0 6px;color:#222;margin-bottom:1px;font-size:12px;text-align:center;background-color:#fff}.keyboard-title:before{font-family:YDUI-INLAY;content:"\\E60A";font-size:13px;color:#ff2424;line-height:1;margin-right:3px}.keyboard-numbers{font-size:24px;background-color:#fff}.keyboard-numbers>li{width:100%}.keyboard-numbers>li,.keyboard-numbers>li>a{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.keyboard-numbers>li>a{width:1%;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;color:#222;height:50px;position:relative;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;background-color:#fff}.keyboard-numbers>li>a:active{background-color:#f7f7f7}.keyboard-numbers>li>a:not(:last-child):after{content:"";position:absolute;z-index:0;top:0;right:0;height:100%;border-right:1px solid #d9d9d9;-webkit-transform:scaleX(.5);transform:scaleX(.5);-webkit-transform-origin:0 0;transform-origin:0 0}.keyboard-numbers>li>a:before{content:"";position:absolute;z-index:0;top:0;left:0;width:100%;height:1px;border-top:1px solid #d9d9d9;-webkit-transform:scaleY(.5);transform:scaleY(.5);-webkit-transform-origin:0 0;transform-origin:0 0}.keyboard-numbers>li:last-child>a:last-child,.keyboard-numbers>li:last-child>a:nth-last-child(3){background-color:#f7f7f7;font-size:15px;color:#686868}.keyboard-numbers>li:last-child>a:last-child:after{font-family:YDUI-INLAY;content:"\\E609";font-size:30px}.keyboard-head{height:40px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;color:#1f2324;font-size:15px;position:relative}.keyboard-head:after{content:"";position:absolute;z-index:0;bottom:0;left:0;width:100%;height:1px;border-bottom:1px solid #d9d9d9;-webkit-transform:scaleY(.5);transform:scaleY(.5);-webkit-transform-origin:0 0;transform-origin:0 0}.keyboard-password{margin:0 40px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative;background-color:#fff}.keyboard-password:after{content:"";width:200%;height:200%;-webkit-transform:scale(.5);transform:scale(.5);position:absolute;border:1px solid #d9d9d9;top:0;left:0;-webkit-transform-origin:0 0;transform-origin:0 0;border-radius:4px}.keyboard-password li{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;height:50px}.keyboard-password li:not(:last-child):after{content:"";width:1px;height:50%;position:absolute;right:0;top:25%;background-color:#d9d9d9;-webkit-transform:scaleX(.5);transform:scaleX(.5)}.keyboard-password li i{width:6px;height:6px;border-radius:50%;background-color:#000}.keyboard-error{padding:2px 40px;color:red;overflow:hidden;height:25px;line-height:25px;font-size:12px;text-align:left}',""])},67:function(e,t,o){o(175);var r=o(1)(o(204),o(141),null,null);e.exports=r.exports},141:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"mask-keyboard",on:{click:function(t){t.stopPropagation(),e.close(t)}}}),e._v(" "),o("div",{staticClass:"m-keyboard",class:e.show?"keyboard-active":""},[e._m(0),e._v(" "),o("div",{staticClass:"keyboard-error"},[e._v(e._s(e.error))]),e._v(" "),o("ul",{staticClass:"keyboard-password"},e._l(6,function(t){return o("li",[o("i",{directives:[{name:"show",rawName:"v-show",value:e.nums.length>=t,expression:"nums.length >= n"}]})])})),e._v(" "),o("div",{staticClass:"keyboard-content"},[o("div",{staticClass:"keyboard-title"},[e._v(e._s(e.title))]),e._v(" "),o("ul",{staticClass:"keyboard-numbers"},e._l(4,function(t){return o("li",[4==t?o("a",{attrs:{href:"javascript:;"},on:{click:function(t){t.stopPropagation(),e.close(t)}}},[e._v("取消")]):e._e(),e._v(" "),e.isMobile?e._l(e.numsArr.slice(3*(t-1),3*t),function(t){return o("a",{attrs:{href:"javascript:;"},on:{touchstart:function(o){o.stopPropagation(),e.numclick(t)}}},[e._v(e._s(t))])}):e._l(e.numsArr.slice(3*(t-1),3*t),function(t){return o("a",{attrs:{href:"javascript:;"},on:{click:function(o){o.stopPropagation(),e.numclick(t)}}},[e._v(e._s(t))])}),e._v(" "),4==t?o("a",{attrs:{href:"javascript:;"},on:{click:function(t){t.stopPropagation(),e.backspace(t)}}}):e._e()],2)}))])])])},staticRenderFns:[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"keyboard-head"},[o("strong",[e._v("输入数字密码")])])}]}},175:function(e,t,o){var r=o(39);"string"==typeof r&&(r=[[e.id,r,""]]),r.locals&&(e.exports=r.locals);o(3)("2df1c744",r,!0)},204:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=o(5);t.default={name:"yd-keyboard",data:function(){return{nums:"",show:this.value,error:"",numsArr:[1,2,3,4,5,6,7,8,9,0]}},props:{inputDone:{type:Function},disorder:{type:Boolean,default:!1},value:{type:Boolean,default:!1},title:{type:String,default:"YDUI安全键盘"}},watch:{value:function(e){this.isIOS&&(e?(r.pageScroll.lock(),(0,r.addClass)(this.scrollView,"g-fix-ios-overflow-scrolling-bug")):(r.pageScroll.unlock(),(0,r.removeClass)(this.scrollView,"g-fix-ios-overflow-scrolling-bug"))),this.nums="",this.error="",this.show=e,this.show&&this.disorder&&(this.numsArr=this.upsetOrder(this.numsArr))},nums:function(e){e.length>=6&&this.inputDone&&"function"==typeof this.inputDone&&this.inputDone(e)}},methods:{init:function(){var e=this;this.scrollView=(0,r.getScrollview)(this.$el);var t=window.navigator&&window.navigator.userAgent||"";this.isIOS=!!t.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),this.isMobile=!!t.match(/AppleWebKit.*Mobile.*/)||"ontouchstart"in document.documentElement,this.$on("ydui.keyboard.error",function(t){e.setError(t)}),this.$on("ydui.keyboard.close",this.close)},numclick:function(e){this.error="",this.nums.length>=6||(this.nums+=e)},backspace:function(){var e=this.nums;e&&(this.nums=e.substr(0,e.length-1))},upsetOrder:function(e){for(var t=Math.floor,o=Math.random,r=e.length,n=void 0,i=void 0,s=void 0,a=t(r/2)+1;a--;)n=t(o()*r),i=t(o()*r),n!==i&&(s=e[n],e[n]=e[i],e[i]=s);return e},close:function(){this.isIOS&&(0,r.removeClass)(this.scrollView,"g-fix-ios-overflow-scrolling-bug"),this.$emit("input",!1)},setError:function(e){this.error=e,this.nums=""}},created:function(){this.init()},destroyed:function(){this.close()}}}})});