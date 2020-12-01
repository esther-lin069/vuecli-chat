import Vue from 'vue'
import VueRouter from 'vue-router'
import Chat from '../components/Chat.vue'
import BaseList from '../components/BaseList.vue'
import ChatWindow from '../components/ChatWindow.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/:room',
    name: 'Chat',
    component: Chat
  },
  {
    path: '/base-list/:room',
    name: 'BaseList',
    component: BaseList
  },
  {
    path: '/chat-window/:room',
    name: 'ChatWindow',
    component: ChatWindow
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
