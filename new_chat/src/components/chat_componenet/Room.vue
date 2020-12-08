<template>
    <div>
        <div id="room">
        <div id="room-title">
            <div class="room-title">
                <!-- 聊天室名稱 -->
                <h1 class="title-text div-ell"><span v-html="is_private"></span>{{ title }}</h1>
                <div v-if="title !== 'main'">
                  <!-- 刪除聊天室按鈕 -->
                  <button class="exit-btn" v-show="seen_del" @click="DeleteRoom">刪除房間</button>
                  <!-- 離開聊天室按鈕 -->
                  <button class="exit-btn" v-show="seen_leave" @click="LeaveRoom">退出房間</button>
                </div>
            </div>
            <h5 class="title-text">聊天室列表
                <button @click="NewRoom" class="new-room-btn">
                    <svg viewBox="0 0 16 16" fill="#00798F" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                    </svg>
                </button>
            </h5>
        </div>

        <div id="rooms">
            <!-- 聊天室列表 -->
            <div id="roomList">
                <button @click="goToRoom('main')" class="mh20 room-box-text room-btn" value="main">大廳</button>
                <dl>
                    <!-- 大廳除外的聊天室列表 -->
                    <dt v-for="(room, index) in rooms" :room="room" :key="index">
                      <button @click="goToRoom(room.room_id)" class="mh20 room-box-text room-btn">
                        <span v-html="inRoom(room.room_id)"></span>
                        {{ room.room_id }} ({{ room.len }})
                      </button>
                    </dt>
                </dl>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
import Vue from 'vue'
import global from '../gloval_var'
// import member_compo from './Member'

// 替換參數
function replaceQueryParam (param, newval, search) {
  var regex = new RegExp('([?;&])' + param + '[^&;]*[;&]?')
  var query = search.replace(regex, '$1').replace(/&$/, '')

  return (query.length > 2 ? query + '&' : '?') + (newval ? param + '=' + newval : '')
}

export default {
  name: 'Room',
  data: function () {
    return {
      rooms: global.ROOMS,
      title: global.CHATROOM,
      seen_leave: true,
      seen_del: true,
      is_private: ''
    }
  },
  created() {
    //判斷是否為大廳和私聊
    if (global.PRIVATION == "true" || global.CHATROOM == "main") {
        if (global.PRIVATION == "true") {
            // 調整標題
            this.is_private = "<p style='font-size:12pt; color:#00798F'>私聊</p>"
            this.title = this.title.replace(global.USER, '').replace('-', '')

            // 取出收話人
            let members = global.CHATROOM.split("-")
            if (members[0] == global.USER) {
                global.RECIPIENT = members[1]
            }
            else {
                global.RECIPIENT = members[0]
            }
        }
        // 隱藏刪除與離開按鈕
        this.seen_leave = false
        this.seen_del = false
    }
  },
  methods: {
    goToRoom (room_id) {
      let search = replaceQueryParam('private', 'false', location.search)
      window.location.href = global.HOST + '/chat/' + room_id + search
    },
    inRoom(room){
      return (room === global.CHATROOM) ? inRoomSymb : ''
    },
    DeleteRoom: function () {
      swalDelRoom(this.title)
    },
    LeaveRoom: function () {
      leaveRoom(this.title)
    },
    NewRoom: function () {
      Vue.swal({
        title: '建立/前往 聊天室',
        text: '聊天室id:',
        input: 'text',
      }).then(function (inputValue) {
        if (inputValue === null) return false
        if (inputValue === '') {
          Vue.swal('哎呦……', '請輸入聊天室id', 'error')
          return false
        }
        if (inputValue.length > 30) {
          Vue.swal('太…長……啦', '聊天室id為30字元內', 'warning')
          return false
        }

        Vue.axios({
          method: 'post',
          url: global.API + '/normalroom',
          data: {
            'user': global.USER,
            'roomName': inputValue.value,
            'with': ''
          }
        }).then((res) => {
            window.location.href = res.request.responseURL
        })
      })
    }
  },
  mounted () {
    this.axios
      .get(global.API + '/roomlist' + location.search)
      .then(function (e) {
        let list = e.data.rooms.split(',')
        for (let i = 0; i < list.length; i++) {
          let tmp = { 'id': i, 'room_id': list[i], 'len': 0 }
          global.ROOMS.push(tmp)
        }
      })
  }
}

var inRoomSymb = `<i class="fas fa-fish" style="margin-right:0.5em;color:#00798F"></i>`
// 刪除房間中介點
function swalDelRoom (room_id) {
  Vue.swal({
    title: '刪除該聊天室？',
    text: '該聊天室資料與聊天記錄會全部消失',
    showCancelButton : true,
    confirmButtonText: '確定',
    cancelButtonText: '取消'
  }).then((result) => {
    if (result.isConfirmed) {
      delRoom(room_id)
    }
  })
}

// 刪除房間（資料庫）
function delRoom (id) {
  Vue.axios.get(global.API + '/delete/'+ id + '?user=' + global.USER)
  .then((res) => {
    Vue.swal('成功刪除', id + '聊天室含淚跟你說再見', 'success')
    setTimeout(() => { window.location = res.request.responseURL }, 1500)
  }).catch((err) => {
    Vue.swal(err + '出錯了！刪除失敗！', id + '聊天室陰魂不散～', 'error')
  })
}

// 離開房間（刪除房間與自己的關聯＿資料庫）
function leaveRoom (id) {
  Vue.axios({
    method: 'get',
    url: global.API + '/leave/' + id + '?user=' + global.USER
  }).then((res) => {
    Vue.swal('您已退出聊天室', id + '裡的朋友們會想念你的', 'success')
    setTimeout(() => { window.location.href = res.request.responseURL }, 1500)
  }).catch(() => {
    Vue.swal('出錯了！', id + '聊天室不想與你分開～', 'error')
  })
}

</script>
