(function(t){function e(e){for(var a,r,i=e[0],l=e[1],c=e[2],d=0,f=[];d<i.length;d++)r=i[d],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&f.push(s[r][0]),s[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(f.length)f.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,i=1;i<n.length;i++){var l=n[i];0!==s[l]&&(a=!1)}a&&(o.splice(e--,1),t=r(r.s=n[0]))}return t}var a={},s={app:0},o=[];function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var u=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"1e3e":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a,s=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"chat"}},[n("div",{attrs:{id:"log"}}),n("div",{attrs:{id:"form"}},[n("form",{staticClass:"us-form form-inline",on:{submit:function(e){return e.preventDefault(),t.sendMsg(e)}}},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.type,expression:"type"}],attrs:{id:"msg-type"},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.type=e.target.multiple?n:n[0]}}},[n("option",{attrs:{value:"N",selected:""}},[t._v("一般")]),n("option",{attrs:{value:"A"}},[t._v("廣播")])]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.msg,expression:"msg"}],staticClass:"w3-input w3-border w3-round",attrs:{type:"text",id:"msg",autofocus:""},domProps:{value:t.msg},on:{input:function(e){e.target.composing||(t.msg=e.target.value)}}}),n("button",{attrs:{type:"submit"}},[t._v("Send")])])])])},r=[],i=(n("caad"),n("b64b"),n("ac1f"),n("2532"),n("5319"),n("841c"),n("1276"),n("b85c")),l=(n("d3b7"),n("3ca3"),n("ddb0"),n("2b3d"),"http://localhost:8080"),c="http://localhost:8080",u=[],d=[],f=[],m="",v="test",p="123",h="false",b=new URL(location.href);v="main",p=b.searchParams.get("user"),h=b.searchParams.get("private");var _,O,R={API:l,HOST:c,ROOMS:u,MEMBERS:d,ONLINE:f,RECIPIENT:m,CHATROOM:v,USER:p,PRIVATION:h,CONN:a},g=R,C=n("2877"),w=Object(C["a"])(g,_,O,!1,null,null,null),x=w.exports;function y(t){var e=/(http:\/\/|https:\/\/)((\w|=|\?|\.|\/|&|#|-)+)/g;return t=t.replace(e,"<a href='$1$2' target=\"_blank\">$1$2</a>").replace(/\n/g,"<br />"),t}window.onload=function(){var t=document.getElementById("log");if(window["WebSocket"])x.CONN=new WebSocket("ws://"+window.location.host+"/ws/chat/main"+location.search),x.CONN.onclose=function(){var t=document.createElement("div");t.innerHTML="<b>Connection closed.</b>",a(t)},x.CONN.onmessage=function(t){for(var e=t.data.split("\n"),a=0;a<e.length;a++)n(e[a])};else{var e=document.createElement("div");e.innerHTML="<b>Your browser does not support WebSockets.</b>",a(e)}function n(t){var e=document.createElement("div"),n=JSON.parse(t),s=new Date(n.time).toLocaleString("zh-TW");if("SYS"===n.sender){if("H"===n.type){var o=JSON.parse(n.content);x.ONLINE=[],x.CHATROOM!==o.room_info&&alert("聊天室位置出錯!"+x.CHATROOM+o.room_info);for(var r=o.user_info.split(","),l=0;l<r.length;l++)if(r[l]!==x.USER){var c={username:r[l]};x.ONLINE.push(c)}}else{o=JSON.parse(n.content);var u,d=JSON.parse(o.room_info),f=o.user_info.split(","),m=Object(i["a"])(x.MEMBERS);try{for(m.s();!(u=m.n()).done;){var v=u.value;f.includes(v.username)?v.online=!0:v.online=!1}}catch(O){m.e(O)}finally{m.f()}var p,h=Object.keys(d),b=Object(i["a"])(x.ROOMS);try{for(b.s();!(p=b.n()).done;)x.ROOM=p.value,h.includes(x.ROOM.room_id)&&(x.ROOM.len=d[x.ROOM.room_id])}catch(O){b.e(O)}finally{b.f()}}e.innerHTML='<div class="system-text"><label>'+o.text+"</label></div>"}else{var _=y(n.content);if("A"===n.type){if("true"===x.PRIVATION)return;e.innerHTML='<div class="chat-text">                  <label class="sm-text"><span class="b-text">'+n.sender+"</span> - "+s+' 廣播</lable><br>                  <label class="bro-text">'+_+"</label>              </div>"}else e.innerHTML='<div class="chat-text">                  <label class="sm-text"><span class="b-text">'+n.sender+"</span> -"+s+'</lable><br>                  <label class="md-text">'+_+"</label>              </div>"}a(e)}function a(e){var n=t.scrollTop>t.scrollHeight-t.clientHeight-1;t.appendChild(e),n&&(t.scrollTop=t.scrollHeight-t.clientHeight)}};var E={name:"ChatLog",data:function(){return{msg:"",type:"N"}},methods:{sendMsg:function(){var t=this.msg.replaceAll("'","&#39;");if(!x.CONN)return!1;if(""===this.msg)return!1;"true"===x.PRIVATION&&(this.type="P");var e=JSON.stringify({sender:x.USER,roomId:x.CHATROOM,recipient:x.RECIPIENT,type:this.type,content:t,time:Date.now()});x.CONN.send(e),this.msg=""}}},N=E,S=Object(C["a"])(N,o,r,!1,null,null,null),M=S.exports,T=n("bc3a"),I=n.n(T),A=n("2106"),P=n.n(A),L=n("5886"),k=n("d0be"),H=n.n(k),U=n("8c4f"),j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"nav"},[n("div",{staticClass:"nav-left"},[n("span",{staticClass:"client-info-text"},[t._v("IP: "+t._s(t.ipAddress)+" ")]),n("span",[t._v(" / browser: "+t._s(t.$browserDetect.meta.name+"-"+t.$browserDetect.meta.version))])]),t._m(0)]),n("Room"),n("chat-log"),n("Member")],1)},$=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"nav-right"},[n("span",{staticClass:"nav-title"},[n("i",{staticClass:"fa fa-fish"}),n("span",[t._v("Go chat！")])])])}],B=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{attrs:{id:"room"}},[n("div",{attrs:{id:"room-title"}},[n("div",{staticClass:"room-title"},[n("h1",{staticClass:"title-text div-ell"},[n("span",{domProps:{innerHTML:t._s(t.is_private)}}),t._v(t._s(t.title))]),"main"!==t.title?n("div",[n("button",{directives:[{name:"show",rawName:"v-show",value:t.seen_del,expression:"seen_del"}],staticClass:"exit-btn",on:{click:t.DeleteRoom}},[t._v("刪除房間")]),n("button",{directives:[{name:"show",rawName:"v-show",value:t.seen_leave,expression:"seen_leave"}],staticClass:"exit-btn",on:{click:t.LeaveRoom}},[t._v("退出房間")])]):t._e()]),n("h5",{staticClass:"title-text"},[t._v("聊天室列表 "),n("button",{staticClass:"new-room-btn",on:{click:t.NewRoom}},[n("svg",{attrs:{viewBox:"0 0 16 16",fill:"#00798F",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"}})])])])]),n("div",{attrs:{id:"rooms"}},[n("div",{attrs:{id:"roomList"}},[n("button",{staticClass:"mh20 room-box-text room-btn",attrs:{value:"main"},on:{click:function(e){return t.goToRoom("main")}}},[t._v("大廳")]),n("dl",t._l(t.rooms,(function(e,a){return n("dt",{key:a,attrs:{room:e}},[n("button",{staticClass:"mh20 room-box-text room-btn",on:{click:function(n){return t.goToRoom(e.room_id)}}},[n("span",{domProps:{innerHTML:t._s(t.inRoom(e.room_id))}}),t._v(" "+t._s(e.room_id)+" ("+t._s(e.len)+") ")])])})),0)])])])])},J=[];n("4d63"),n("25f0");function D(t,e,n){var a=new RegExp("([?;&])"+t+"[^&;]*[;&]?"),s=n.replace(a,"$1").replace(/&$/,"");return(s.length>2?s+"&":"?")+(e?t+"="+e:"")}var V={name:"Room",data:function(){return{rooms:x.ROOMS,title:x.CHATROOM,seen_leave:!0,seen_del:!0,is_private:""}},created:function(){if("true"==x.PRIVATION||"main"==x.CHATROOM){if("true"==x.PRIVATION){this.is_private="<p style='font-size:12pt; color:#00798F'>私聊</p>",this.title=this.title.replace(x.USER,"").replace("-","");var t=x.CHATROOM.split("-");t[0]==x.USER?x.RECIPIENT=t[1]:x.RECIPIENT=t[0]}this.seen_leave=!1,this.seen_del=!1}},methods:{goToRoom:function(t){var e=D("private","false",location.search);window.location.href=x.HOST+"/chat/"+t+e},inRoom:function(t){return t===x.CHATROOM?q:""},DeleteRoom:function(){z(this.title)},LeaveRoom:function(){F(this.title)},NewRoom:function(){s["a"].swal({title:"建立/前往 聊天室",text:"聊天室id:",input:"text"}).then((function(t){return null!==t&&(""===t?(s["a"].swal("哎呦……","請輸入聊天室id","error"),!1):t.length>30?(s["a"].swal("太…長……啦","聊天室id為30字元內","warning"),!1):void s["a"].axios({method:"post",url:x.API+"/normalroom",data:{user:x.USER,roomName:t.value,with:""}}).then((function(t){window.location.href=t.request.responseURL})))}))}},mounted:function(){this.axios.get(x.API+"/roomlist"+location.search).then((function(t){for(var e=t.data.rooms.split(","),n=0;n<e.length;n++){var a={id:n,room_id:e[n],len:0};x.ROOMS.push(a)}}))}},q='<i class="fas fa-fish" style="margin-right:0.5em;color:#00798F"></i>';function z(t){s["a"].swal({title:"刪除該聊天室？",text:"該聊天室資料與聊天記錄會全部消失",showCancelButton:!0,confirmButtonText:"確定",cancelButtonText:"取消"}).then((function(e){e.isConfirmed&&W(t)}))}function W(t){s["a"].axios.get(x.API+"/delete/"+t+"?user="+x.USER).then((function(e){s["a"].swal("成功刪除",t+"聊天室含淚跟你說再見","success"),setTimeout((function(){window.location=e.request.responseURL}),1500)})).catch((function(e){s["a"].swal(e+"出錯了！刪除失敗！",t+"聊天室陰魂不散～","error")}))}function F(t){s["a"].axios({method:"get",url:x.API+"/leave/"+t+"?user="+x.USER}).then((function(e){s["a"].swal("您已退出聊天室",t+"裡的朋友們會想念你的","success"),setTimeout((function(){window.location.href=e.request.responseURL}),1500)})).catch((function(){s["a"].swal("出錯了！",t+"聊天室不想與你分開～","error")}))}var Y=V,G=Object(C["a"])(Y,B,J,!1,null,null,null),K=G.exports,Q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{attrs:{id:"member"}},[n("h5",{staticClass:"title-text"},[n("button",{staticClass:"list-btn",style:{color:t.seen?t.Colors.activeColor:t.Colors.inactiveColor},on:{click:function(e){t.seen=!t.seen}}},[t._v(" 在線列表 ")]),n("span",[t._v(" |")]),n("button",{staticClass:"list-btn",style:{color:t.seen?t.Colors.inactiveColor:t.Colors.activeColor},on:{click:function(e){t.seen=!t.seen}}},[t._v(" 所有使用者 ")])]),n("div",{staticClass:"card",attrs:{id:"myUserBlock"}},[n("div",{staticClass:"div-ell"},[t._m(0),n("span",{staticClass:"box-text"},[t._v(t._s(t.username))])])]),n("transition",{attrs:{name:"slide-fade",mode:"out-in"}},[t.seen?n("div",{key:"online"},[n("dl",t._l(t.o_members,(function(e,a){return n("dt",{key:a,attrs:{id:e.username}},[n("div",{staticClass:"card"},[n("div",{staticClass:"div-ell"},[n("span",{staticStyle:{color:"#00798f","margin-right":"8px"}},[n("i",{staticClass:"fa fa-user"})]),n("span",{staticClass:"box-text"},[t._v(t._s(e.username))])])])])})),0)]):n("div",{key:"all",staticClass:"all-users"},[n("label",{staticStyle:{"margin-left":"10%"}},[t._v("搜尋")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"user-search w3-input w3-border w3-round",attrs:{type:"text"},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}}),n("button",{staticClass:"status-h",on:{click:t.RefreshRead}},[t._v("刷新")]),n("a",{staticClass:"status-a",on:{click:t.setAutoRefresh}},[t._v("自動更新："+t._s(1==t.auto?"on":"off"))]),n("dl",{staticStyle:{"margin-top":"2.5em"}},t._l(t.filterd,(function(e,a){return n("dt",{key:a,attrs:{id:e.username}},[n("div",{staticClass:"card",attrs:{title:e.username}},[n("div",{staticClass:"div-ell"},[n("span",{class:1!=e.online?"user-fa-on":"user-fa-off"},[n("i",{staticClass:"fa fa-user"})]),n("a",{class:"0"==e.read?"pchat-btn-r":"pchat-btn-w",attrs:{title:"私聊",role:"button"},on:{click:function(n){return t.privateChat(e.username)}}},[n("i",{staticClass:"fa fa-comment-dots"})]),n("span",{staticClass:"box-text"},[t._v(t._s(e.username))])])])])})),0)])])],1)])},X=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticStyle:{color:"#f4e868","margin-right":"8px"}},[n("i",{staticClass:"fa fa-user"})])}],Z=(n("4de4"),n("c975"),n("498a"),{name:"Member",data:function(){return{username:x.USER,a_members:x.MEMBERS,o_members:[],seen:!0,search:"",auto:!1,interval:null,Colors:{activeColor:"#413636",inactiveColor:"#acacac"}}},methods:{privateChat:function(t){var e=[x.USER,t].sort();tt(e,t)},setAutoRefresh:function(){this.auto=!this.auto},RefreshRead:function(){et(x.USER)},AutoRefreshRead:function(){var t=this;this.interval=setInterval((function(){t.RefreshRead()}),3e3)}},computed:{filterd:function(){var t=this.search.toLowerCase();return""!==t.trim()?this.a_members.filter((function(e){return e.username.toLowerCase().indexOf(t)>-1})):this.a_members}},created:function(){this.axios.get(x.API+"/userlist").then((function(t){for(var e=t.data.users.split(","),n=0;n<e.length;n++)if(e[n]!==x.USER){var a={read:"1",username:e[n],online:!1};x.MEMBERS.push(a)}}))},beforeUpdate:function(){this.o_members=x.ONLINE},updated:function(){!0===this.auto?this.AutoRefreshRead():clearInterval(this.interval)}});function tt(t,e){s["a"].axios({method:"post",baseURL:x.API,url:"/privateroom",data:{user:x.USER,roomName:t[0]+"-"+t[1],with:e}}).then((function(t){window.location.href=t.request.responseURL}))}function et(t){var e;s["a"].axios({method:"get",url:x.API+"/readstatus/"+t}).then((function(t){var n,a=JSON.parse(t.data.readstatus),s=Object(i["a"])(x.MEMBERS);try{for(s.s();!(n=s.n()).done;)e=n.value,Object.keys(a).includes(e.username)&&"0"===a[e.username]&&(e.read="0")}catch(o){s.e(o)}finally{s.f()}}))}var nt=Z,at=Object(C["a"])(nt,Q,X,!1,null,null,null),st=at.exports,ot={name:"Chat",components:{Room:K,ChatLog:M,Member:st},data:function(){return{ipAddress:""}},created:function(){var t=this;fetch("https://api.ipify.org?format=json").then((function(t){return t.json()})).then((function(e){var n=e.ip;t.ipAddress=n}))}},rt=ot,it=(n("f196"),Object(C["a"])(rt,j,$,!1,null,null,null)),lt=it.exports;s["a"].use(U["a"]);var ct=[{path:"/chat/:room",name:"Chat",component:lt}],ut=new U["a"]({mode:"history",base:"/",routes:ct}),dt=ut,ft=n("2f62");s["a"].use(ft["a"]);var mt=new ft["a"].Store({state:{API:"http://localhost:8080",ROOMS:[],MEMBERS:[],ONLINE:[],RECIPIENT:"",CHATROOM:"test",USER:"123",PRIVATION:"false",CONN:null},mutations:{},actions:{},modules:{}});n("4413");s["a"].use(L["default"]),s["a"].use(H.a),s["a"].use(P.a,I.a),s["a"].config.productionTip=!1,new s["a"]({router:dt,store:mt,render:function(t){return t(M)}}).$mount("#app")},f196:function(t,e,n){"use strict";n("1e3e")}});
//# sourceMappingURL=app.713d9661.js.map