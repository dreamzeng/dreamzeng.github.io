webpackJsonp([5],{283:function(t,e,a){function i(t){a(324)}var r=a(2)(a(302),a(337),i,"data-v-1e9346e9",null);t.exports=r.exports},302:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(331),r=a.n(i);e.default={data:function(){return{errGif:r.a+"?"+ +new Date,ewizardClap:"https://wpimg.wallstcn.com/007ef517-bafd-4066-aae4-6883632d9646",dialogVisible:!1}},methods:{back:function(){this.$route.query.noGoBack?this.$router.push({path:"/dashboard"}):this.$router.go(-1)}}}},316:function(t,e,a){e=t.exports=a(276)(!1),e.push([t.i,".errPage-container[data-v-1e9346e9]{width:800px;margin:100px auto}.errPage-container .pan-back-btn[data-v-1e9346e9]{background:#008489;color:#fff}.errPage-container .pan-gif[data-v-1e9346e9],.errPage-container .pan-img[data-v-1e9346e9]{margin:0 auto;display:block}.errPage-container .text-jumbo[data-v-1e9346e9]{font-size:60px;font-weight:700;color:#484848}.errPage-container .list-unstyled[data-v-1e9346e9]{font-size:14px}.errPage-container .list-unstyled li[data-v-1e9346e9]{padding-bottom:5px}.errPage-container .list-unstyled a[data-v-1e9346e9]{color:#008489;text-decoration:none}.errPage-container .list-unstyled a[data-v-1e9346e9]:hover{text-decoration:underline}",""])},324:function(t,e,a){var i=a(316);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a(277)("4516c330",i,!0)},331:function(t,e,a){t.exports=a.p+"static/img/401.089007e.gif"},337:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"errPage-container"},[a("el-button",{staticClass:"pan-back-btn",attrs:{icon:"arrow-left"},on:{click:t.back}},[t._v("返回")]),t._v(" "),a("el-row",[a("el-col",{attrs:{span:12}},[a("h1",{staticClass:"text-jumbo text-ginormous"},[t._v("Oops!")]),t._v("\n      gif来源"),a("a",{attrs:{href:"https://zh.airbnb.com/",target:"_blank"}},[t._v("airbnb")]),t._v(" 页面\n      "),a("h2",[t._v("你没有权限去该页面")]),t._v(" "),a("h6",[t._v("如有不满请联系你领导")]),t._v(" "),a("ul",{staticClass:"list-unstyled"},[a("li",[t._v("或者你可以去:")]),t._v(" "),a("li",{staticClass:"link-type"},[a("router-link",{attrs:{to:"/dashboard"}},[t._v("回首页")])],1),t._v(" "),a("li",{staticClass:"link-type"},[a("a",{attrs:{href:"https://www.taobao.com/"}},[t._v("随便看看")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.dialogVisible=!0}}},[t._v("点我看图")])])])]),t._v(" "),a("el-col",{attrs:{span:12}},[a("img",{attrs:{src:t.errGif,width:"313",height:"428",alt:"Girl has dropped her ice cream."}})])],1),t._v(" "),a("el-dialog",{attrs:{title:"随便看",visible:t.dialogVisible,size:"large"},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("img",{staticClass:"pan-img",attrs:{src:t.ewizardClap}})])],1)},staticRenderFns:[]}}});