(function(e){function t(t){for(var a,i,o=t[0],l=t[1],u=t[2],d=0,m=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&m.push(n[i][0]),n[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);c&&c(t);while(m.length)m.shift()();return s.push.apply(s,u||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],a=!0,o=1;o<r.length;o++){var l=r[o];0!==n[l]&&(a=!1)}a&&(s.splice(t--,1),e=i(i.s=r[0]))}return e}var a={},n={app:0},s=[];function i(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=a,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(r,a,function(t){return e[t]}.bind(null,a));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/vue-shop-admin/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var c=l;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"1dce":function(e,t,r){"use strict";var a=r("2a7f"),n=r.n(a);n.a},"2a7f":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},s=[],i={name:"app"},o=i,l=r("2877"),u=Object(l["a"])(o,n,s,!1,null,null,null),c=u.exports,d=r("8c4f"),m=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"login-container"}},[a("div",{attrs:{id:"login-box"}},[a("img",{attrs:{src:r("915e"),alt:"logo",id:"avatar"}}),a("el-form",{ref:"loginFormRef",staticClass:"login-form",attrs:{model:e.loginForm,rules:e.loginFormRules}},[a("el-form-item",{attrs:{prop:"username"}},[a("el-input",{attrs:{"prefix-icon":"el-icon-user"},model:{value:e.loginForm.username,callback:function(t){e.$set(e.loginForm,"username",t)},expression:"loginForm.username"}})],1),a("el-form-item",{attrs:{prop:"password"}},[a("el-input",{attrs:{"prefix-icon":"el-icon-lock",type:"password"},model:{value:e.loginForm.password,callback:function(t){e.$set(e.loginForm,"password",t)},expression:"loginForm.password"}})],1),a("el-form-item",{staticClass:"form-btn"},[a("el-button",{attrs:{type:"primary"},on:{click:e.login}},[e._v("登录")]),a("el-button",{on:{click:e.resetLoginForm}},[e._v("重置")])],1)],1)],1)])},p=[],f=(r("96cf"),r("1da1")),g={data:function(){return{loginForm:{username:"admin",password:"123456"},loginFormRules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"},{min:3,max:10,message:"长度在 3 到 10 个字符",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{min:6,max:15,message:"长度在 6 到 15 个字符",trigger:"blur"}]}}},methods:{resetLoginForm:function(){this.$refs.loginFormRef.resetFields()},login:function(){var e=this;this.$refs.loginFormRef.validate(function(){var t=Object(f["a"])(regeneratorRuntime.mark((function t(r){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,r){t.next=3;break}return t.abrupt("return");case 3:e.$http.post("login",e.loginForm,{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then((function(t){var r=t.data;if(console.log(r),200!==r.code)return e.$message.error("登录失败！");e.$message.success("登录成功！"),window.sessionStorage.setItem("token",r.data.token),e.$router.push("/home")})),t.next=10;break;case 6:t.prev=6,t.t0=t["catch"](0),console.log(t.t0.message),e.$message.error("接口请求错误，稍后再试");case 10:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}())}}},b=g,h=(r("1dce"),Object(l["a"])(b,m,p,!1,null,"3c0977cc",null)),v=h.exports,w=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-container",{staticClass:"home-container"},[a("el-header",[a("div",{staticClass:"header-title"},[e._v("电商后台管理系统")]),a("el-dropdown",{staticStyle:{float:"right"}},[a("span",[a("img",{staticClass:"header-logo",attrs:{src:r("915e"),alt:"logo"}})]),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",[a("span",{on:{click:e.logout}},[e._v("退出")])])],1)],1)],1),a("el-container",[a("el-aside",{attrs:{width:e.isCollapse?"64px":"200px"}},[a("i",{class:e.isCollapse?"el-icon-caret-right":"el-icon-caret-left",staticStyle:{color:"#fff",width:"100%","line-height":"30px","text-align":"center"},on:{click:e.toggleCollapse}}),a("el-menu",{staticStyle:{"border-right":"none"},attrs:{"text-color":"#fff","background-color":"#333744","active-text-color":"#ffd04b","unique-opened":!0,collapse:e.isCollapse,router:!0,"default-active":e.activePath}},e._l(e.menuList,(function(t){return a("el-submenu",{key:t.id,attrs:{index:t.id+""}},[a("template",{slot:"title"},[a("i",{class:e.menuIcon[t.id]}),a("span",[e._v(e._s(t.authName))])]),e._l(t.children,(function(t){return a("el-menu-item",{key:t.id,attrs:{index:"/"+t.path},on:{click:function(r){return e.saveNavState("/"+t.path)}}},[a("template",{slot:"title"},[a("i",{staticClass:"el-icon-menu"}),a("span",[e._v(" "+e._s(t.authName))])])],2)}))],2)})),1)],1),a("el-main",[a("router-view")],1)],1)],1)},x=[],y={data:function(){return{menuList:[],menuIcon:{101:"el-icon-s-goods",102:"el-icon-s-order",103:"el-icon-s-promotion",104:"el-icon-user-solid",105:"el-icon-s-data"},isCollapse:!1,activePath:""}},created:function(){this.getMenuList(),this.activePath=window.sessionStorage.getItem("activePath")},methods:{logout:function(){window.sessionStorage.clear(),this.$router.push("/login")},getMenuList:function(){var e=Object(f["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$http.get("menus");case 2:if(t=e.sent,r=t.data,200===r.meta.status){e.next=6;break}return e.abrupt("return",this.$message.error("菜单列表获取失败"));case 6:this.menuList=r.data;case 7:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),toggleCollapse:function(){this.isCollapse=!this.isCollapse},saveNavState:function(e){window.sessionStorage.setItem("activePath",e),this.activePath=e}}},F=y,_=(r("8e7d"),Object(l["a"])(F,w,x,!1,null,"ef7b3ccc",null)),k=_.exports,$=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e._v(" welcome ")])},S=[],R={},C=R,U=Object(l["a"])(C,$,S,!1,null,"2551aa4c",null),j=U.exports,O=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[r("el-breadcrumb-item",{attrs:{to:{path:"/home"}}},[e._v("首页")]),r("el-breadcrumb-item",[e._v("用户管理")]),r("el-breadcrumb-item",{attrs:{to:{path:"/users-list"}}},[e._v("用户列表")])],1),r("el-card",{staticStyle:{"margin-top":"15px"}},[r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:8}},[r("el-input",{attrs:{placeholder:"请输入内容",clearable:""},model:{value:e.searchValue,callback:function(t){e.searchValue=t},expression:"searchValue"}},[r("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:e.getUserList},slot:"append"})],1)],1),r("el-col",{attrs:{span:8}},[r("el-button",{attrs:{type:"primary"},on:{click:function(t){e.addUserVisible=!0}}},[e._v(" 添加用户 ")])],1)],1),r("el-table",{staticStyle:{width:"100%","margin-top":"15px"},attrs:{data:e.userlist,border:!0,stripe:""}},[r("el-table-column",{attrs:{type:"index",width:"50",label:"序号"}}),r("el-table-column",{attrs:{prop:"username",label:"姓名"}}),r("el-table-column",{attrs:{prop:"email",label:"邮箱"}}),r("el-table-column",{attrs:{prop:"mobile",label:"电话"}}),r("el-table-column",{attrs:{prop:"role_name",label:"角色"}}),r("el-table-column",{attrs:{prop:"my_state",label:"状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-switch",{attrs:{"active-color":"#13ce66"},on:{change:function(t){return e.userStateChange()}},model:{value:t.row.my_state,callback:function(r){e.$set(t.row,"my_state",r)},expression:"scope.row.my_state"}})]}}])}),r("el-table-column",{attrs:{label:"操作","min-width":"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"primary",icon:"el-icon-edit",size:"mini"},on:{click:function(r){return e.showEditDialog(t.row)}}}),r("el-button",{attrs:{type:"danger",icon:"el-icon-delete",size:"mini"},on:{click:function(r){return e.deleteUserInfo(t.row)}}}),r("el-tooltip",{attrs:{effect:"dark",content:"分配角色",placement:"top",enterable:!1}},[r("el-button",{attrs:{type:"warning",icon:"el-icon-setting",size:"mini"}})],1)]}}])})],1),r("el-pagination",{staticStyle:{"margin-top":"15px"},attrs:{"current-page":e.params.currentpage,"page-sizes":e.pageSizes,"page-size":e.params.pagesize,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),r("el-dialog",{attrs:{title:"添加用户",visible:e.addUserVisible,width:"30%"},on:{"update:visible":function(t){e.addUserVisible=t},close:e.closeUserDialog}},[r("el-form",{ref:"addFormRef",attrs:{model:e.addForm,rules:e.addFormRules,"label-width":"70px"}},[r("el-form-item",{attrs:{label:"用户名",prop:"username"}},[r("el-input",{model:{value:e.addForm.username,callback:function(t){e.$set(e.addForm,"username",t)},expression:"addForm.username"}})],1),r("el-form-item",{attrs:{label:"密码",prop:"password"}},[r("el-input",{model:{value:e.addForm.password,callback:function(t){e.$set(e.addForm,"password",t)},expression:"addForm.password"}})],1),r("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[r("el-input",{model:{value:e.addForm.email,callback:function(t){e.$set(e.addForm,"email",t)},expression:"addForm.email"}})],1),r("el-form-item",{attrs:{label:"手机",prop:"mobile"}},[r("el-input",{model:{value:e.addForm.mobile,callback:function(t){e.$set(e.addForm,"mobile",t)},expression:"addForm.mobile"}})],1)],1),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:e.closeUserDialog}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:function(t){e.addUserVisible=!1}}},[e._v("确 定")])],1)],1),r("el-dialog",{attrs:{title:"修改用户",visible:e.editUserVisible,width:"50%"},on:{"update:visible":function(t){e.editUserVisible=t},close:e.editDialogClose}},[r("el-form",{ref:"editFormRef",attrs:{model:e.editForm,rules:e.editFormRules,"label-width":"70px"}},[r("el-form-item",{attrs:{label:"用户名"}},[r("el-input",{attrs:{disabled:""},model:{value:e.editForm.username,callback:function(t){e.$set(e.editForm,"username",t)},expression:"editForm.username"}})],1),r("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[r("el-input",{model:{value:e.editForm.email,callback:function(t){e.$set(e.editForm,"email",t)},expression:"editForm.email"}})],1),r("el-form-item",{attrs:{label:"手机",prop:"mobile"}},[r("el-input",{model:{value:e.editForm.mobile,callback:function(t){e.$set(e.editForm,"mobile",t)},expression:"editForm.mobile"}})],1)],1),r("span",{attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.editUserVisible=!1}}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.saveUserInfo}},[e._v("确 定")])],1)],1)],1)},L=[],z=(r("a434"),r("159b"),{data:function(){var e=function(e,t,r){var a=/^([A-Za-z0-9_])+@([A-Za-z0-9_-])+\.([A-Za-z]{2,4})$/;if(a.test(t))return r();r(new Error("请输入合法邮箱"))},t=function(e,t,r){var a=/^[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8,9]))[0-9]{8}$/;if(a.test(t))return r();r(new Error("请输入合法手机号"))};return{userlist:[],total:0,pageSizes:[1,2,5,10],params:{pagesize:5,currentpage:1},searchValue:"",addUserVisible:!1,addForm:{username:"",password:"",email:"",mobile:""},editFormRules:{email:[{required:!0,message:"请输入邮箱",trigger:"blur"},{validator:e,trigger:"blur"}],mobile:[{required:!0,message:"请输入手机号",trigger:"blur"},{validator:t,trigger:"blur"}]},addFormRules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"},{min:3,max:10,mesaage:"长度在 3 到 10 个字符",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{min:6,max:15,mesaage:"长度在 6 到 15 个字符",trigger:"blur"}],email:[{required:!0,message:"请输入邮箱",trigger:"blur"},{validator:e,trigger:"blur"}],mobile:[{required:!0,message:"请输入手机号",trigger:"blur"},{validator:t,trigger:"blur"}]},editUserVisible:!1,editForm:{id:0,username:"",email:"",mobile:""}}},created:function(){this.getUserList()},methods:{getUserList:function(){var e=Object(f["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$http.get("users",{params:this.params});case 2:if(t=e.sent,r=t.data,200===r.meta.status){e.next=6;break}return e.abrupt("return",this.$message.error("获取用户列表失败！"));case 6:this.userlist=r.data.users,this.total=r.data.total;case 8:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),handleSizeChange:function(e){this.params.pagesize=e,this.getUserList()},handleCurrentChange:function(e){this.params.currentpage=e,this.getUserList()},userStateChange:function(){this.$message.success("用户状态更新成功")},closeUserDialog:function(){this.addUserVisible=!1,this.$refs.addFormRef.resetFields()},showEditDialog:function(){var e=Object(f["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.editUserVisible=!0,this.editForm={id:t.id,username:t.username,email:t.email,mobile:t.mobile};case 2:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),saveUserInfo:function(){var e=this;this.$refs.editFormRef.validate((function(t){if(t){var r=0;e.userlist.forEach((function(t,a){t.id!=e.editForm.id||(r=a)})),e.userlist[r].email=e.editForm.email,e.userlist[r].mobile=e.editForm.mobile,e.editUserVisible=!1,e.$message.success("用户信息修改成功")}}))},editDialogClose:function(){this.$refs.editFormRef.resetFields()},deleteUserInfo:function(e){var t=this;this.$confirm("确定删除用户信息?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var r=0;t.userlist.forEach((function(t,a){t.id!==e.id||(r=a)})),t.userlist.splice(r,1),t.$message({type:"success",message:"删除成功!"})})).catch((function(){t.$message({type:"info",message:"已取消删除"})}))}}}),V=z,E=Object(l["a"])(V,O,L,!1,null,"703a7ed9",null),P=E.exports,q=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[r("el-breadcrumb-item",{attrs:{to:{path:"/home"}}},[e._v("首页")]),r("el-breadcrumb-item",[e._v("权限管理")]),r("el-breadcrumb-item",[e._v("权限列表")])],1),r("el-card",{staticStyle:{"margin-top":"15px"}},[r("el-table",{attrs:{data:e.rightsList,border:"",stripe:""}},[r("el-table-column",{attrs:{type:"index",label:"序号",width:"50"}}),r("el-table-column",{attrs:{label:"权限名称",prop:"authName"}}),r("el-table-column",{attrs:{label:"路径",prop:"path"}}),r("el-table-column",{attrs:{label:"权限等级",prop:"level"},scopedSlots:e._u([{key:"default",fn:function(t){return["0"===t.row.level?r("el-tag",[e._v("一级")]):"1"===t.row.level?r("el-tag",{attrs:{type:"success"}},[e._v("二级")]):r("el-tag",{attrs:{type:"warning"}},[e._v("三级")])]}}])})],1)],1)],1)},I=[],D={data:function(){return{rightsList:[]}},created:function(){this.getRightsList()},methods:{getRightsList:function(){var e=Object(f["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$http.get("rights");case 2:if(t=e.sent,r=t.data,200===r.meta.status){e.next=6;break}return e.abrupt("return",this.$message.error("获取权限列表失败"));case 6:this.rightsList=r.data,console.log(this.rightsList);case 8:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}},M=D,T=Object(l["a"])(M,q,I,!1,null,"d35d4a42",null),N=T.exports,A=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e._v("sadfgsda")])},Z=[],B={},J=B,G=Object(l["a"])(J,A,Z,!1,null,"4b5c2328",null),H=G.exports;a["default"].use(d["a"]);var K=new d["a"]({routes:[{path:"/",redirect:"/login"},{path:"/login",component:v},{path:"/home",component:k,redirect:"/welcome",children:[{path:"/welcome",component:j},{path:"/users-list",component:P},{path:"/rights-list1",component:H},{path:"/rights-list2",component:N}]}]});K.beforeEach((function(e,t,r){if("/login"===e.path)return r();var a=window.sessionStorage.getItem("token");if(!a)return r("/login");r()}));var Q=K,W=(r("9e1f"),r("450d"),r("6ed5")),X=r.n(W),Y=(r("0fb7"),r("f529")),ee=r.n(Y),te=(r("cbb5"),r("8bbc")),re=r.n(te),ae=(r("a7cc"),r("df33")),ne=r.n(ae),se=(r("672e"),r("101e")),ie=r.n(se),oe=(r("0c67"),r("299c")),le=r.n(oe),ue=(r("e960"),r("b35b")),ce=r.n(ue),de=(r("5466"),r("ecdf")),me=r.n(de),pe=(r("38a0"),r("ad41")),fe=r.n(pe),ge=(r("7a0f"),r("0f6c")),be=r.n(ge),he=(r("f4f9"),r("c2cc")),ve=r.n(he),we=(r("b8e0"),r("a4c4")),xe=r.n(we),ye=(r("b84d"),r("c216")),Fe=r.n(ye),_e=(r("8f24"),r("76b9")),ke=r.n(_e),$e=(r("bd49"),r("18ff")),Se=r.n($e),Re=(r("960d"),r("defb")),Ce=r.n(Re),Ue=(r("cb70"),r("b370")),je=r.n(Ue),Oe=(r("8bd8"),r("4cb2")),Le=r.n(Oe),ze=(r("ce18"),r("f58e")),Ve=r.n(ze),Ee=(r("4ca3"),r("443e")),Pe=r.n(Ee),qe=(r("a673"),r("7b31")),Ie=r.n(qe),De=(r("de31"),r("c69e")),Me=r.n(De),Te=(r("a769"),r("5cc3")),Ne=r.n(Te),Ae=(r("adec"),r("3d2d")),Ze=r.n(Ae),Be=(r("10cb"),r("f3ad")),Je=r.n(Be),Ge=(r("eca7"),r("3787")),He=r.n(Ge),Ke=(r("425f"),r("4105")),Qe=r.n(Ke),We=(r("1951"),r("eedf")),Xe=r.n(We);a["default"].use(Xe.a),a["default"].use(Qe.a),a["default"].use(He.a),a["default"].use(Je.a),a["default"].use(Ze.a),a["default"].use(Ne.a),a["default"].use(Me.a),a["default"].use(Ie.a),a["default"].use(Pe.a),a["default"].use(Ve.a),a["default"].use(Le.a),a["default"].use(je.a),a["default"].use(Ce.a),a["default"].use(Se.a),a["default"].use(ke.a),a["default"].use(Fe.a),a["default"].use(xe.a),a["default"].use(ve.a),a["default"].use(be.a),a["default"].use(fe.a),a["default"].use(me.a),a["default"].use(ce.a),a["default"].use(le.a),a["default"].use(ie.a),a["default"].use(ne.a),a["default"].use(re.a),a["default"].prototype.$message=ee.a,a["default"].prototype.$confirm=X.a;r("aede");var Ye=r("bc3a"),et=r.n(Ye);et.a.defaults.baseURL="http://yapi.demo.qunar.com/mock/67364",a["default"].prototype.$http=et.a,a["default"].config.productionTip=!1,new a["default"]({router:Q,render:function(e){return e(c)}}).$mount("#app")},"8e7d":function(e,t,r){"use strict";var a=r("9ef6"),n=r.n(a);n.a},"915e":function(e,t,r){e.exports=r.p+"img/avatar.5f35a67c.jpg"},"9ef6":function(e,t,r){},aede:function(e,t,r){}});
//# sourceMappingURL=app.c2f80a18.js.map