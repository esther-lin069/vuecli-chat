<template>
  <div id="chat">
    <div id="log">
    </div>
    <div id="form">
      <form v-on:submit.prevent="sendMsg" class="form-inline">
        <select v-model="type" id="msg-type">
          <option value="N" selected>一般</option>
          <option value="A">廣播</option>
        </select>
        <input v-model="msg" class="input" type="text" id="msg" autofocus />
        <button type="submit">
          <span style="color: white">
            <i class="fas fa-paper-plane"></i>
          </span>
        </button>
      </form>
    </div>
  </div>
</template>
<script>
import global from "../gloval_var";

export default {
  name: "ChatLog",
  data: function () {
    return {
      msg: "",
      type: "N",
    };
  },
  methods: {
    sendMsg: function () {
      var content = this.msg.replaceAll("'", "&#39;");
      if (!global.CONN) {
        return false;
      }
      if (this.msg === "") {
        return false;
      }
      if (global.PRIVATION === "true") {
        this.type = "P";
      }
      var jstr = JSON.stringify({
        sender: global.USER,
        roomId: global.CHATROOM,
        recipient: global.RECIPIENT,
        type: this.type,
        content: content,
        time: Date.now(),
      });
      global.CONN.send(jstr);
      this.msg = "";
    },
  },
};
/* ws */
window.onload = function () {
  var log = document.getElementById("log");

  // WS連線：接收廣播訊息
  if (window["WebSocket"]) {
    global.CONN = new WebSocket(
      "ws://" + window.location.host + "/ws/chat/main?user=123&private=false"
    );
    global.CONN.onclose = function () {
      var item = document.createElement("div");
      item.innerHTML = "<b>Connection closed.</b>";
      appendLog(item);
    };
    global.CONN.onmessage = function (evt) {
      var messages = evt.data.split("\n");
      for (var i = 0; i < messages.length; i++) {
        HandleMessage(messages[i]);
      }
    };
  } else {
    var item = document.createElement("div");
    item.innerHTML = "<b>Your browser does not support WebSockets.</b>";
    appendLog(item);
  }

  // 處理訊息
  function HandleMessage(message) {
    var item = document.createElement("div");
    var chat = JSON.parse(message);
    var chatTime = new Date(chat.time).toLocaleString("zh-TW");
    // 判斷是否為系統訊息
    if (chat.sender === "SYS") {
      // 系統hint 使用者名單
      if (chat.type === "H") {
        var info = JSON.parse(chat.content);
        global.ONLINE = []; // 清空原來的在線人員列表

        if (global.CHATROOM !== info.room_info) {
          alert("聊天室位置出錯!" + global.CHATROOM + info.room_info);
        }

        // 在線列表
        var members = info.user_info.split(",");
        for (let i = 0; i < members.length; i++) {
          if (members[i] === global.USER) {
            continue;
          }

          let tmp = { username: members[i] };
          global.ONLINE.push(tmp);
        }
      } else {
        info = JSON.parse(chat.content);
        var rooms = JSON.parse(info.room_info); // 聊天室名單對應人數
        var users = info.user_info.split(","); // 聊天室所有在線人員

        /* 上線狀態變更 */
        for (var member of global.MEMBERS) {
          if (users.includes(member.username)) {
            member.online = true;
          } else {
            member.online = false;
          }
        }

        /* 聊天室人數變更 */
        let roomlist_states = Object.keys(rooms);

        for (global.ROOM of global.ROOMS) {
          if (roomlist_states.includes(global.ROOM.room_id)) {
            global.ROOM.len = rooms[global.ROOM.room_id];
          }
        }
      }
      // 系統訊息ex.ＸＸＸ離開聊天室
      item.innerHTML =
        `<div class="system-text"><label>` + info.text + `</label></div>`;
    } else {
      // 判別內容是否包含鏈結
      var text = isUrl(chat.content);

      // 來自其他用戶或使用者的廣播消息
      if (chat.type === "A") {
        // 是私訊的話把全域廣播擋下來
        if (global.PRIVATION === "true") {
          return;
        }

        item.innerHTML =
          `<div class="chat-text">\
                  <label class="sm-text"><span class="b-text">` +
          chat.sender +
          `</span> - ` +
          chatTime +
          ` 廣播</lable><br>\
                  <label class="bro-text">` +
          text +
          `</label>\
              </div>`;
      } else {
        item.innerHTML =
          `<div class="chat-text">\
                  <label class="sm-text"><span class="b-text">` +
          chat.sender +
          `</span> -` +
          chatTime +
          `</lable><br>\
                  <label class="md-text">` +
          text +
          `</label>\
              </div>`;
      }
    }
    // 打印訊息
    appendLog(item);
  }

  //將聊天訊息放入聊天區塊
  function appendLog(item) {
    var doScroll = log.scrollTop > log.scrollHeight - log.clientHeight - 1;
    log.appendChild(item);

    if (doScroll) {
      log.scrollTop = log.scrollHeight - log.clientHeight;
    }
  }
};
// 判斷是否為超連結
function isUrl(v) {
  var reg = /(http:\/\/|https:\/\/)((\w|=|\?|\.|\/|&|#|-)+)/g;
  v = v
    .replace(reg, `<a href='$1$2' target="_blank">$1$2</a>`)
    .replace(/\n/g, "<br />");
  return v;
}
</script>
<style>
@import "../../assets/css/chat_window.css";
</style>