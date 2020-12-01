import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    API : (process.env.NODE_ENV === 'production') ? 'http://localhost:8080' : '/api',
    ROOMS : [],                      // 該使用者的聊天室名單
    MEMBERS : [],                    // 所有使用者名單
    ONLINE : [],                     // 在線使用者名單
    RECIPIENT : '',                  // 私聊接收者
    CHATROOM : 'test',
    USER : '123',
    PRIVATION : 'false',
    CONN : null
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
