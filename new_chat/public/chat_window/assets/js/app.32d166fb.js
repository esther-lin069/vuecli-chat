(function(t){function e(e){for(var s,r,i=e[0],l=e[1],c=e[2],d=0,f=[];d<i.length;d++)r=i[d],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&f.push(n[r][0]),n[r]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);u&&u(e);while(f.length)f.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],s=!0,i=1;i<a.length;i++){var l=a[i];0!==n[l]&&(s=!1)}s&&(o.splice(e--,1),t=r(r.s=a[0]))}return t}var s={},n={app:0},o=[];function r(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=s,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(a,s,function(e){return t[e]}.bind(null,s));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var u=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"1e3e":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s,n=a("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"chat"}},[t._m(0),a("div",{attrs:{id:"form"}},[a("form",{staticClass:"form-inline",on:{submit:function(e){return e.preventDefault(),t.sendMsg(e)}}},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.type,expression:"type"}],attrs:{id:"msg-type"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.type=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"N",selected:""}},[t._v("一般")]),a("option",{attrs:{value:"A"}},[t._v("廣播")])]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.msg,expression:"msg"}],staticClass:"input",attrs:{type:"text",id:"msg",autofocus:""},domProps:{value:t.msg},on:{input:function(e){e.target.composing||(t.msg=e.target.value)}}}),t._m(1)])])])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"log"}},[a("div",[a("div",{staticClass:"chat-text"},[a("label",{staticClass:"sm-text"},[a("span",{staticClass:"b-text"},[t._v("123")]),t._v(" -2020/12/2 下午6:27:46"),a("br"),a("label",{staticClass:"md-text"},[t._v("這是一則測試")])])])]),a("div",[a("div",{staticClass:"chat-text"},[a("label",{staticClass:"sm-text"},[a("span",{staticClass:"b-text"},[t._v("123")]),t._v(" -2020/12/2 下午6:27:46"),a("br"),a("label",{staticClass:"bro-text"},[t._v("這是一則測試")])])])]),a("div",[a("div",{staticClass:"chat-text"},[a("label",{staticClass:"sm-text"},[a("span",{staticClass:"b-text"},[t._v("123")]),t._v(" -2020/12/2 下午6:27:46"),a("br"),a("label",{staticClass:"md-text"},[t._v("這是一則測試")])])])]),a("div",[a("div",{staticClass:"chat-text"},[a("label",{staticClass:"sm-text"},[a("span",{staticClass:"b-text"},[t._v("123")]),t._v(" -2020/12/2 下午6:27:46"),a("br"),a("label",{staticClass:"md-text"},[t._v("這是一則測試")])])])]),a("div",[a("div",{staticClass:"chat-text"},[a("label",{staticClass:"sm-text"},[a("span",{staticClass:"b-text"},[t._v("123")]),t._v(" -2020/12/2 下午6:27:46"),a("br"),a("label",{staticClass:"md-text"},[t._v("這是一則測試")])])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{attrs:{type:"submit"}},[a("span",{staticStyle:{color:"white"}},[a("i",{staticClass:"fas fa-paper-plane"})])])}],i=(a("caad"),a("b64b"),a("ac1f"),a("2532"),a("5319"),a("1276"),a("b85c")),l="http://localhost:8080",c="http://localhost:8080",u=[],d=[],f=[],v="",m="test",p="123",h="false";m="main";var b,_,C={API:l,HOST:c,ROOMS:u,MEMBERS:d,ONLINE:f,RECIPIENT:v,CHATROOM:m,USER:p,PRIVATION:h,CONN:s},O=C,x=a("2877"),R=Object(x["a"])(O,b,_,!1,null,null,null),g=R.exports,w={name:"ChatLog",data:function(){return{msg:"",type:"N"}},methods:{sendMsg:function(){var t=this.msg.replaceAll("'","&#39;");if(!g.CONN)return!1;if(""===this.msg)return!1;"true"===g.PRIVATION&&(this.type="P");var e=JSON.stringify({sender:g.USER,roomId:g.CHATROOM,recipient:g.RECIPIENT,type:this.type,content:t,time:Date.now()});g.CONN.send(e),this.msg=""}}};function y(t){var e=/(http:\/\/|https:\/\/)((\w|=|\?|\.|\/|&|#|-)+)/g;return t=t.replace(e,"<a href='$1$2' target=\"_blank\">$1$2</a>").replace(/\n/g,"<br />"),t}window.onload=function(){var t=document.getElementById("log");if(t.scrollTop=t.scrollHeight,window["WebSocket"])g.CONN=new WebSocket("ws://"+window.location.host+"/ws/chat/main?user=123&private=false"),g.CONN.onclose=function(){var t=document.createElement("div");t.innerHTML="<b>Connection closed.</b>",s(t)},g.CONN.onmessage=function(t){for(var e=t.data.split("\n"),s=0;s<e.length;s++)a(e[s])};else{var e=document.createElement("div");e.innerHTML="<b>Your browser does not support WebSockets.</b>",s(e)}function a(t){var e=document.createElement("div"),a=JSON.parse(t),n=new Date(a.time).toLocaleString("zh-TW");if("SYS"===a.sender){if("H"===a.type){var o=JSON.parse(a.content);g.ONLINE=[],g.CHATROOM!==o.room_info&&alert("聊天室位置出錯!"+g.CHATROOM+o.room_info);for(var r=o.user_info.split(","),l=0;l<r.length;l++)if(r[l]!==g.USER){var c={username:r[l]};g.ONLINE.push(c)}}else{o=JSON.parse(a.content);var u,d=JSON.parse(o.room_info),f=o.user_info.split(","),v=Object(i["a"])(g.MEMBERS);try{for(v.s();!(u=v.n()).done;){var m=u.value;f.includes(m.username)?m.online=!0:m.online=!1}}catch(C){v.e(C)}finally{v.f()}var p,h=Object.keys(d),b=Object(i["a"])(g.ROOMS);try{for(b.s();!(p=b.n()).done;)g.ROOM=p.value,h.includes(g.ROOM.room_id)&&(g.ROOM.len=d[g.ROOM.room_id])}catch(C){b.e(C)}finally{b.f()}}e.innerHTML='<div class="system-text"><label>'+o.text+"</label></div>"}else{var _=y(a.content);if("A"===a.type){if("true"===g.PRIVATION)return;e.innerHTML='<div class="chat-text">                  <label class="sm-text"><span class="b-text">'+a.sender+"</span> - "+n+' 廣播</lable><br>                  <label class="bro-text">'+_+"</label>              </div>"}else e.innerHTML='<div class="chat-text">                  <label class="sm-text"><span class="b-text">'+a.sender+"</span> -"+n+'</lable><br>                  <label class="md-text">'+_+"</label>              </div>"}s(e)}function s(e){var a=t.scrollTop>t.scrollHeight-t.clientHeight-1;t.appendChild(e),a&&(t.scrollTop=t.scrollHeight-t.clientHeight)}};var E=w,N=(a("a25b"),Object(x["a"])(E,o,r,!1,null,null,null)),S=N.exports,M=a("bc3a"),T=a.n(M),I=a("2106"),A=a.n(I),P=a("5886"),k=a("d0be"),L=a.n(k),H=a("8c4f"),j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"nav"},[a("div",{staticClass:"nav-left"},[a("span",{staticClass:"client-info-text"},[t._v("IP: "+t._s(t.ipAddress)+" ")]),a("span",[t._v(" / browser: "+t._s(t.$browserDetect.meta.name+"-"+t.$browserDetect.meta.version))])]),t._m(0)]),a("Room"),a("chat-log"),a("Member")],1)},U=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"nav-right"},[a("span",{staticClass:"nav-title"},[a("i",{staticClass:"fa fa-fish"}),a("span",[t._v("Go chat！")])])])}],$=(a("d3b7"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{attrs:{id:"room"}},[a("div",{attrs:{id:"room-title"}},[a("div",{staticClass:"room-title"},[a("h1",{staticClass:"title-text div-ell"},[a("span",{domProps:{innerHTML:t._s(t.is_private)}}),t._v(t._s(t.title))]),"main"!==t.title?a("div",[a("button",{directives:[{name:"show",rawName:"v-show",value:t.seen_del,expression:"seen_del"}],staticClass:"exit-btn",on:{click:t.DeleteRoom}},[t._v("刪除房間")]),a("button",{directives:[{name:"show",rawName:"v-show",value:t.seen_leave,expression:"seen_leave"}],staticClass:"exit-btn",on:{click:t.LeaveRoom}},[t._v("退出房間")])]):t._e()]),a("h5",{staticClass:"title-text"},[t._v("聊天室列表 "),a("button",{staticClass:"new-room-btn",on:{click:t.NewRoom}},[a("svg",{attrs:{viewBox:"0 0 16 16",fill:"#00798F",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{"fill-rule":"evenodd",d:"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"}})])])])]),a("div",{attrs:{id:"rooms"}},[a("div",{attrs:{id:"roomList"}},[a("button",{staticClass:"mh20 room-box-text room-btn",attrs:{value:"main"},on:{click:function(e){return t.goToRoom("main")}}},[t._v("大廳")]),a("dl",t._l(t.rooms,(function(e,s){return a("dt",{key:s,attrs:{room:e}},[a("button",{staticClass:"mh20 room-box-text room-btn",on:{click:function(a){return t.goToRoom(e.room_id)}}},[a("span",{domProps:{innerHTML:t._s(t.inRoom(e.room_id))}}),t._v(" "+t._s(e.room_id)+" ("+t._s(e.len)+") ")])])})),0)])])])])}),B=[];a("4d63"),a("25f0"),a("841c");function J(t,e,a){var s=new RegExp("([?;&])"+t+"[^&;]*[;&]?"),n=a.replace(s,"$1").replace(/&$/,"");return(n.length>2?n+"&":"?")+(e?t+"="+e:"")}var D={name:"Room",data:function(){return{rooms:g.ROOMS,title:g.CHATROOM,seen_leave:!0,seen_del:!0,is_private:""}},created:function(){if("true"==g.PRIVATION||"main"==g.CHATROOM){if("true"==g.PRIVATION){this.is_private="<p style='font-size:12pt; color:#00798F'>私聊</p>",this.title=this.title.replace(g.USER,"").replace("-","");var t=g.CHATROOM.split("-");t[0]==g.USER?g.RECIPIENT=t[1]:g.RECIPIENT=t[0]}this.seen_leave=!1,this.seen_del=!1}},methods:{goToRoom:function(t){var e=J("private","false",location.search);window.location.href=g.HOST+"/chat/"+t+e},inRoom:function(t){return t===g.CHATROOM?V:""},DeleteRoom:function(){q(this.title)},LeaveRoom:function(){W(this.title)},NewRoom:function(){n["a"].swal({title:"建立/前往 聊天室",text:"聊天室id:",input:"text"}).then((function(t){return null!==t&&(""===t?(n["a"].swal("哎呦……","請輸入聊天室id","error"),!1):t.length>30?(n["a"].swal("太…長……啦","聊天室id為30字元內","warning"),!1):void n["a"].axios({method:"post",url:g.API+"/normalroom",data:{user:g.USER,roomName:t.value,with:""}}).then((function(t){window.location.href=t.request.responseURL})))}))}},mounted:function(){this.axios.get(g.API+"/roomlist"+location.search).then((function(t){for(var e=t.data.rooms.split(","),a=0;a<e.length;a++){var s={id:a,room_id:e[a],len:0};g.ROOMS.push(s)}}))}},V='<i class="fas fa-fish" style="margin-right:0.5em;color:#00798F"></i>';function q(t){n["a"].swal({title:"刪除該聊天室？",text:"該聊天室資料與聊天記錄會全部消失",showCancelButton:!0,confirmButtonText:"確定",cancelButtonText:"取消"}).then((function(e){e.isConfirmed&&z(t)}))}function z(t){n["a"].axios.get(g.API+"/delete/"+t+"?user="+g.USER).then((function(e){n["a"].swal("成功刪除",t+"聊天室含淚跟你說再見","success"),setTimeout((function(){window.location=e.request.responseURL}),1500)})).catch((function(e){n["a"].swal(e+"出錯了！刪除失敗！",t+"聊天室陰魂不散～","error")}))}function W(t){n["a"].axios({method:"get",url:g.API+"/leave/"+t+"?user="+g.USER}).then((function(e){n["a"].swal("您已退出聊天室",t+"裡的朋友們會想念你的","success"),setTimeout((function(){window.location.href=e.request.responseURL}),1500)})).catch((function(){n["a"].swal("出錯了！",t+"聊天室不想與你分開～","error")}))}var F=D,Y=Object(x["a"])(F,$,B,!1,null,null,null),G=Y.exports,K=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{attrs:{id:"member"}},[a("h5",{staticClass:"title-text"},[a("button",{staticClass:"list-btn",style:{color:t.seen?t.Colors.activeColor:t.Colors.inactiveColor},on:{click:function(e){t.seen=!t.seen}}},[t._v(" 在線列表 ")]),a("span",[t._v(" |")]),a("button",{staticClass:"list-btn",style:{color:t.seen?t.Colors.inactiveColor:t.Colors.activeColor},on:{click:function(e){t.seen=!t.seen}}},[t._v(" 所有使用者 ")])]),a("div",{staticClass:"card",attrs:{id:"myUserBlock"}},[a("div",{staticClass:"div-ell"},[t._m(0),a("span",{staticClass:"box-text"},[t._v(t._s(t.username))])])]),a("transition",{attrs:{name:"slide-fade",mode:"out-in"}},[t.seen?a("div",{key:"online"},[a("dl",t._l(t.o_members,(function(e,s){return a("dt",{key:s,attrs:{id:e.username}},[a("div",{staticClass:"card"},[a("div",{staticClass:"div-ell"},[a("span",{staticStyle:{color:"#00798f","margin-right":"8px"}},[a("i",{staticClass:"fa fa-user"})]),a("span",{staticClass:"box-text"},[t._v(t._s(e.username))])])])])})),0)]):a("div",{key:"all",staticClass:"all-users"},[a("label",{staticStyle:{"margin-left":"10%"}},[t._v("搜尋")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"user-search w3-input w3-border w3-round",attrs:{type:"text"},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}}),a("button",{staticClass:"status-h",on:{click:t.RefreshRead}},[t._v("刷新")]),a("a",{staticClass:"status-a",on:{click:t.setAutoRefresh}},[t._v("自動更新："+t._s(1==t.auto?"on":"off"))]),a("dl",{staticStyle:{"margin-top":"2.5em"}},t._l(t.filterd,(function(e,s){return a("dt",{key:s,attrs:{id:e.username}},[a("div",{staticClass:"card",attrs:{title:e.username}},[a("div",{staticClass:"div-ell"},[a("span",{class:1!=e.online?"user-fa-on":"user-fa-off"},[a("i",{staticClass:"fa fa-user"})]),a("a",{class:"0"==e.read?"pchat-btn-r":"pchat-btn-w",attrs:{title:"私聊",role:"button"},on:{click:function(a){return t.privateChat(e.username)}}},[a("i",{staticClass:"fa fa-comment-dots"})]),a("span",{staticClass:"box-text"},[t._v(t._s(e.username))])])])])})),0)])])],1)])},Q=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticStyle:{color:"#f4e868","margin-right":"8px"}},[a("i",{staticClass:"fa fa-user"})])}],X=(a("4de4"),a("c975"),a("498a"),{name:"Member",data:function(){return{username:g.USER,a_members:g.MEMBERS,o_members:[],seen:!0,search:"",auto:!1,interval:null,Colors:{activeColor:"#413636",inactiveColor:"#acacac"}}},methods:{privateChat:function(t){var e=[g.USER,t].sort();Z(e,t)},setAutoRefresh:function(){this.auto=!this.auto},RefreshRead:function(){tt(g.USER)},AutoRefreshRead:function(){var t=this;this.interval=setInterval((function(){t.RefreshRead()}),3e3)}},computed:{filterd:function(){var t=this.search.toLowerCase();return""!==t.trim()?this.a_members.filter((function(e){return e.username.toLowerCase().indexOf(t)>-1})):this.a_members}},created:function(){this.axios.get(g.API+"/userlist").then((function(t){for(var e=t.data.users.split(","),a=0;a<e.length;a++)if(e[a]!==g.USER){var s={read:"1",username:e[a],online:!1};g.MEMBERS.push(s)}}))},beforeUpdate:function(){this.o_members=g.ONLINE},updated:function(){!0===this.auto?this.AutoRefreshRead():clearInterval(this.interval)}});function Z(t,e){n["a"].axios({method:"post",baseURL:g.API,url:"/privateroom",data:{user:g.USER,roomName:t[0]+"-"+t[1],with:e}}).then((function(t){window.location.href=t.request.responseURL}))}function tt(t){var e;n["a"].axios({method:"get",url:g.API+"/readstatus/"+t}).then((function(t){var a,s=JSON.parse(t.data.readstatus),n=Object(i["a"])(g.MEMBERS);try{for(n.s();!(a=n.n()).done;)e=a.value,Object.keys(s).includes(e.username)&&"0"===s[e.username]&&(e.read="0")}catch(o){n.e(o)}finally{n.f()}}))}var et=X,at=Object(x["a"])(et,K,Q,!1,null,null,null),st=at.exports,nt={name:"Chat",components:{Room:G,ChatLog:S,Member:st},data:function(){return{ipAddress:""}},created:function(){var t=this;fetch("https://api.ipify.org?format=json").then((function(t){return t.json()})).then((function(e){var a=e.ip;t.ipAddress=a}))}},ot=nt,rt=(a("f196"),Object(x["a"])(ot,j,U,!1,null,null,null)),it=rt.exports;n["a"].use(H["a"]);var lt=[{path:"/chat/:room",name:"Chat",component:it}],ct=new H["a"]({mode:"history",base:"/",routes:lt}),ut=ct,dt=a("2f62");n["a"].use(dt["a"]);var ft=new dt["a"].Store({state:{API:"http://localhost:8080",ROOMS:[],MEMBERS:[],ONLINE:[],RECIPIENT:"",CHATROOM:"test",USER:"123",PRIVATION:"false",CONN:null},mutations:{},actions:{},modules:{}});a("4413");n["a"].use(P["default"]),n["a"].use(L.a),n["a"].use(A.a,T.a),n["a"].config.productionTip=!1,new n["a"]({router:ut,store:ft,render:function(t){return t(S)}}).$mount("#app")},a25b:function(t,e,a){"use strict";a("f53f")},f196:function(t,e,a){"use strict";a("1e3e")},f53f:function(t,e,a){}});
//# sourceMappingURL=app.32d166fb.js.map