(function(e){function t(t){for(var o,i,s=t[0],l=t[1],c=t[2],d=0,f=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);u&&u(t);while(f.length)f.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,s=1;s<n.length;s++){var l=n[s];0!==r[l]&&(o=!1)}o&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},r={app:0},a=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var u=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o,r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},i=[],s=n("2877"),l={},c=Object(s["a"])(l,a,i,!1,null,null,null),u=c.exports,d=n("bc3a"),f=n.n(d),p=n("2106"),m=n.n(p),v=n("5886"),h=n("d0be"),b=n.n(h),w=n("8c4f"),O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"chat"}},[n("div",{ref:"log",attrs:{id:"log"}},[e._v(" log ")]),n("div",{attrs:{id:"form"}},[n("form",{staticClass:"form-inline",on:{submit:function(t){return t.preventDefault(),e.sendMsg(t)}}},[n("select",{directives:[{name:"model",rawName:"v-model",value:e.type,expression:"type"}],attrs:{id:"msg-type"},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.type=t.target.multiple?n:n[0]}}},[n("option",{attrs:{value:"N",selected:""}},[e._v("一般")]),n("option",{attrs:{value:"A"}},[e._v("廣播")])]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.msg,expression:"msg"}],staticClass:"input",attrs:{type:"text",id:"msg",autofocus:""},domProps:{value:e.msg},on:{input:function(t){t.target.composing||(e.msg=t.target.value)}}}),e._m(0)])])])},g=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{attrs:{type:"submit"}},[n("span",{staticStyle:{color:"white"}},[n("i",{staticClass:"fas fa-paper-plane"})])])}],y=(n("caad"),n("b64b"),n("d3b7"),n("ac1f"),n("2532"),n("3ca3"),n("5319"),n("1276"),n("ddb0"),n("2b3d"),n("b85c")),N="http://localhost:8080",S="http://localhost:8080",_=[],R=[],M=[],E="",x="test",T="123",C="false";x="main";var I,P,H={API:N,HOST:S,ROOMS:_,MEMBERS:R,ONLINE:M,RECIPIENT:E,CHATROOM:x,USER:T,PRIVATION:C,CONN:o},A=H,j=Object(s["a"])(A,I,P,!1,null,null,null),L=j.exports,k={name:"ChatLog",data:function(){return{msg:"",type:"N",log:null}},methods:{sendMsg:function(){var e=this.msg.replaceAll("'","&#39;");if(!L.CONN)return!1;if(""===this.msg)return!1;"true"===L.PRIVATION&&(this.type="P");var t=JSON.stringify({sender:L.USER,roomId:L.CHATROOM,recipient:L.RECIPIENT,type:this.type,content:e,time:Date.now()});L.CONN.send(t),this.msg=""}},mounted:function(){var e=new URL(location.href);if(L.CHATROOM=location.pathname.replace("/dist/",""),L.USER=e.searchParams.get("user"),this.log=document.getElementById("log"),console.log(L.CHATROOM+":"+L.USER),window["WebSocket"])L.CONN=new WebSocket("ws://"+window.location.host+"/ws/chat/"+L.CHATROOM+"?user="+L.USER+"&private=false"),L.CONN.onclose=function(){var e=document.createElement("div");e.innerHTML="<b>Connection closed.</b>",$(e)},L.CONN.onmessage=function(e){for(var t=e.data.split("\n"),n=0;n<t.length;n++)z(t[n])};else{var t=document.createElement("div");t.innerHTML="<b>Your browser does not support WebSockets.</b>",$(t)}}};function z(e){var t=document.createElement("div"),n=JSON.parse(e),o=new Date(n.time).toLocaleString("zh-TW");if("SYS"===n.sender){if("H"===n.type){var r=JSON.parse(n.content);L.ONLINE=[],L.CHATROOM!==r.room_info&&alert("聊天室位置出錯!"+L.CHATROOM+r.room_info);for(var a=r.user_info.split(","),i=0;i<a.length;i++)if(a[i]!==L.USER){var s={username:a[i]};L.ONLINE.push(s)}}else{r=JSON.parse(n.content);var l,c=JSON.parse(r.room_info),u=r.user_info.split(","),d=Object(y["a"])(L.MEMBERS);try{for(d.s();!(l=d.n()).done;){var f=l.value;u.includes(f.username)?f.online=!0:f.online=!1}}catch(b){d.e(b)}finally{d.f()}var p,m=Object.keys(c),v=Object(y["a"])(L.ROOMS);try{for(v.s();!(p=v.n()).done;)L.ROOM=p.value,m.includes(L.ROOM.room_id)&&(L.ROOM.len=c[L.ROOM.room_id])}catch(b){v.e(b)}finally{v.f()}}t.innerHTML='<div class="system-text"><label>'+r.text+"</label></div>"}else{var h=U(n.content);if("A"===n.type){if("true"===L.PRIVATION)return;t.innerHTML='<div class="chat-text">                  <label class="sm-text"><span class="b-text">'+n.sender+"</span> - "+o+' 廣播</lable><br>                  <label class="bro-text">'+h+"</label>              </div>"}else t.innerHTML='<div class="chat-text">                  <label class="sm-text"><span class="b-text">'+n.sender+"</span> -"+o+'</lable><br>                  <label class="md-text">'+h+"</label>              </div>"}$(t)}function $(e){var t=document.getElementById("log"),n=t.scrollTop>t.scrollHeight-t.clientHeight-1;t.appendChild(e),n&&(t.scrollTop=t.scrollHeight-t.clientHeight)}function U(e){var t=/(http:\/\/|https:\/\/)((\w|=|\?|\.|\/|&|#|-)+)/g;return e=e.replace(t,"<a href='$1$2' target=\"_blank\">$1$2</a>").replace(/\n/g,"<br />"),e}var J=k,W=(n("a25b"),Object(s["a"])(J,O,g,!1,null,null,null)),B=W.exports,V=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"sm-div"},[n("button",{staticClass:"w-btn",on:{click:function(t){return e.WindowMode(e.windowlize)}}},[n("span",[n("i",{class:[e.istyle.i,e.windowlize?e.istyle.recover:e.istyle.open]})])]),n("h5",{directives:[{name:"show",rawName:"v-show",value:e.windowlize,expression:"windowlize"}],staticStyle:{color:"white"}},[e._v("再點一次按鈕我就回來囉！")]),n("div",{directives:[{name:"show",rawName:"v-show",value:!e.windowlize,expression:"!windowlize"}],style:e.frameStyle},[n("hr"),n("iframe",{ref:"iframe",style:e.frameStyle,attrs:{src:e.src,frameborder:"0"}})])]),n("div",{staticClass:"md-div"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.user,expression:"user"}],attrs:{type:"text"},domProps:{value:e.user},on:{input:function(t){t.target.composing||(e.user=t.target.value)}}}),n("dl",e._l(e.rooms,(function(t,o){return n("dt",{key:o},[n("button",{on:{click:function(n){return e.SendInfo(t.id)}}},[e._v(e._s(t.name))])])})),0)])])},D=[],Y={name:"TestFrame",data:function(){return{baseSrc:"http://localhost:8083/dist/",src:this.baseSrc+this.room_location+"?user="+this.user,room_location:"main",user:"123",frameStyle:{width:"100%",height:"100%"},istyle:{i:"fas",open:"fa-external-link-alt",recover:"fa-window-maximize"},iframe:null,chat_window:null,windowlize:!1,show:!1,rooms:[{id:1,name:"Room1"},{id:2,name:"Room2"},{id:3,name:"Room3"},{id:4,name:"Room4"}]}},methods:{WindowMode:function(e){!1===e?(this.text="回復",this.chat_window=window.open(this.src,"","width=600,height=600"),this.chat_window.moveTo(500,100)):(this.text="視窗化",this.chat_window.close()),this.windowlize=!e},SendInfo:function(e){this.room_location=e}}},F=Y,q=(n("f07f"),Object(s["a"])(F,V,D,!1,null,null,null)),G=q.exports;r["a"].use(w["a"]);var K=[{path:"/dist/:room",name:"ChatLog",component:B},{path:"/test",name:"Test",component:G}],Q=new w["a"]({mode:"history",base:"/",routes:K}),X=Q,Z=n("2f62");r["a"].use(Z["a"]);var ee=new Z["a"].Store({state:{API:"http://localhost:8080",ROOMS:[],MEMBERS:[],ONLINE:[],RECIPIENT:"",CHATROOM:"test",USER:"123",PRIVATION:"false",CONN:null},mutations:{},actions:{},modules:{}});n("4413");r["a"].use(v["default"]),r["a"].use(b.a),r["a"].use(m.a,f.a),r["a"].config.productionTip=!1,new r["a"]({router:X,store:ee,render:function(e){return e(u)}}).$mount("#app")},"98a1":function(e,t,n){},a25b:function(e,t,n){"use strict";n("f53f")},f07f:function(e,t,n){"use strict";n("98a1")},f53f:function(e,t,n){}});
//# sourceMappingURL=app.8d77406a.js.map