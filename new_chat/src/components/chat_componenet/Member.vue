<template>
  <div>
    <div id="member">
      <h5 class="title-text">
        <button
          class="list-btn"
          @click="seen = !seen"
          :style="{ color: seen ? Colors.activeColor : Colors.inactiveColor }"
        >
          在線列表
        </button>
        <span> |</span>
        <button
          class="list-btn"
          @click="seen = !seen"
          :style="{ color: !seen ? Colors.activeColor : Colors.inactiveColor }"
        >
          所有使用者
        </button>
      </h5>

      <div id="myUserBlock" class="card">
        <div class="div-ell">
          <span style="color: #f4e868; margin-right: 8px">
            <i class="fa fa-user"></i>
          </span>
          <span class="box-text">{{ username }}</span>
        </div>
      </div>

      <transition name="slide-fade" mode="out-in">
        <!-- 線上使用者區塊 -->
        <div v-if="seen" key="online">
          <!-- 清單 -->
          <dl>
            <dt
              v-for="(member, index) in o_members"
              :id="member.username"
              :key="index"
            >
              <div class="card">
                <div class="div-ell">
                  <span style="color: #00798f; margin-right: 8px">
                    <i class="fa fa-user"></i>
                  </span>
                  <span class="box-text">{{ member.username }}</span>
                </div>
              </div>
            </dt>
          </dl>
        </div>

        <!-- 所有使用者區塊 -->
        <div v-else class="all-users" key="all">
          <label style="margin-left: 10%">搜尋</label>
          <input
            v-model="search"
            type="text"
            class="user-search w3-input w3-border w3-round"
          />
          <button @click="RefreshRead" class="status-h">刷新</button>
          <a class="status-a" @click="setAutoRefresh"
            >自動更新：{{ auto == true ? "on" : "off" }}</a
          >

          <!-- 清單 -->
          <dl style="margin-top: 2.5em">
            <dt
              v-for="(member, index) in filterd"
              :id="member.username"
              :key="index"
            >
              <div class="card" :title="member.username">
                <div class="div-ell">
                  <span
                    :class="
                      member.online != true ? 'user-fa-on' : 'user-fa-off'
                    "
                  >
                    <i class="fa fa-user"></i>
                  </span>
                  <a
                    title="私聊"
                    @click="privateChat(member.username)"
                    :class="member.read == '0' ? 'pchat-btn-r' : 'pchat-btn-w'"
                    role="button"
                  >
                    <i class="fa fa-comment-dots"></i>
                  </a>
                  <span class="box-text">{{ member.username }}</span>
                </div>
              </div>
            </dt>
          </dl>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import global from '../gloval_var'
import Vue from 'vue'

export default {
  name: 'Member',
  data: function () {
    return {
      username: global.USER,
      a_members: global.MEMBERS,
      o_members: [],
      seen: true, // 預設開啟在線列表
      search: '',
      auto: false,
      interval: null,
      Colors: {
        activeColor: '#413636',
        inactiveColor: '#acacac'
      }
    }
  },
  methods: {
    privateChat (toWho) {
      let sort_users = [global.USER, toWho].sort()
      makePrivateRoom(sort_users, toWho)
    },
    setAutoRefresh: function () {
      this.auto = !this.auto
    },
    RefreshRead: function () {
      getReadStatus(global.USER)
    },
    AutoRefreshRead: function () {
      this.interval = setInterval(() => {
        this.RefreshRead()
      }, 3000)
    }
  },
  computed: {
    // 搜尋並返回結果
    filterd: function () {
      var s = this.search.toLowerCase()
      return (s.trim() !== '')
        ? this.a_members.filter(function (d) { return d.username.toLowerCase().indexOf(s) > -1 })
        : this.a_members
    }
  },
  created () {
    this.axios
      .get(global.API + '/userlist')
      .then(function (e) {
        let list = e.data.users.split(',')
        for (let i = 0; i < list.length; i++) {
          if (list[i] === global.USER) { continue }

          let tmp = { 'read': '1', 'username': list[i], 'online': false }
          global.MEMBERS.push(tmp)
        }
      })
  },
  beforeUpdate (){
    this.o_members = global.ONLINE
  },
  updated () {
    if (this.auto === true) {
      // 每隔秒自動刷新私訊狀態
      this.AutoRefreshRead()
    } else {
      clearInterval(this.interval)
    }
  }
}

// 建立私聊連結
function makePrivateRoom (s, toWho) {
  Vue.axios({
    method: 'post',
    baseURL: global.API,
    url: '/privateroom',
    data: {
      'user': global.USER,
      'roomName': s[0] + '-' + s[1],
      'with': toWho
    }
  }).then((res) => {
    window.location.href = res.request.responseURL
  })
}

// 拿取私訊已讀與否的資料
function getReadStatus (user) {
  let member
  Vue.axios({
    method: 'get',
    url: global.API + '/readstatus/' + user
  }).then((e) => {
    var obj = JSON.parse(e.data.readstatus)
    // 接收到未讀標記，更改名單內容
    // eslint-disable-next-line no-undef
    for (member of global.MEMBERS) {
      if (Object.keys(obj).includes(member.username)) {
        if (obj[member.username] === '0') { member.read = '0' }
      }
    }
  })
}
</script>
