(function(t){function e(e){for(var n,i,a=e[0],u=e[1],p=e[2],c=0,d=[];c<a.length;c++)i=a[c],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);l&&l(e);while(d.length)d.shift()();return s.push.apply(s,p||[]),r()}function r(){for(var t,e=0;e<s.length;e++){for(var r=s[e],n=!0,a=1;a<r.length;a++){var u=r[a];0!==o[u]&&(n=!1)}n&&(s.splice(e--,1),t=i(i.s=r[0]))}return t}var n={},o={app:0},s=[];function i(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=n,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=e,a=a.slice();for(var p=0;p<a.length;p++)e(a[p]);var l=u;s.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"56d7":function(t,e,r){"use strict";r.r(e);var n=r("2b0e"),o=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[t._v(" "+t._s(t.loc)+" "),e("a",{attrs:{href:this.url+this.s_a}},[e("button",{on:{click:function(e){return t.page_run(t.s_a)}}},[t._v("1")])]),e("a",{attrs:{href:this.url+this.s_b}},[e("button",{on:{click:function(e){return t.page_run(t.s_b)}}},[t._v("2")])]),e("a",{attrs:{href:this.url+this.s_c}},[e("button",{on:{click:function(e){return t.page_run(t.s_c)}}},[t._v("3")])]),e("a",{attrs:{href:this.url+this.s_d}},[e("button",{on:{click:function(e){return t.page_run(t.s_d)}}},[t._v("4")])]),e("a",{attrs:{href:this.url+this.s_e}},[e("button",{on:{click:function(e){return t.page_run(t.s_e)}}},[t._v("5")])]),e("hooper",{attrs:{settings:t.hooperSettings}},[t._l(t.products,(function(r,n){return e("slide",{key:r},[e("img",{attrs:{src:"/manga/"+n+".png"}}),e("div",{staticClass:"page_n"},[t._v(t._s(r))])])})),e("hooper-navigation",{attrs:{slot:"hooper-addons"},slot:"hooper-addons"}),e("hooper-pagination",{attrs:{slot:"hooper-addons"},slot:"hooper-addons"}),e("hooper-progress",{attrs:{slot:"hooper-addons"},slot:"hooper-addons"})],2)],1)},s=[],i=r("7e04"),a=(r("955f"),107),u=window.location.pathname.split("/").slice(-1)[0],p={name:"App",components:{Hooper:i["a"],Slide:i["e"],HooperProgress:i["d"],HooperPagination:i["c"],HooperNavigation:i["b"]},data(){return{url:"/",s_a:0,s_b:17,s_c:41,s_d:51,s_e:60,products:[...Array(Number(a)).keys()],hooperSettings:{itemsToShow:1,centerMode:!0,initialSlide:u}}},methods:{page_run(t){this.loc=t,this.hooperSettings.initialSlide=t}}},l=p,c=(r("8eb8"),r("2877")),d=Object(c["a"])(l,o,s,!1,null,null,null),f=d.exports;n["a"].config.productionTip=!1,new n["a"]({render:t=>t(f)}).$mount("#app")},"8eb8":function(t,e,r){"use strict";r("d002")},d002:function(t,e,r){}});
//# sourceMappingURL=app.js.map