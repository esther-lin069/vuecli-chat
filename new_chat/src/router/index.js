import Vue from 'vue'
import VueRouter from 'vue-router'
import Chat from '../components/Chat.vue'
import ChatLog from '../components/chat_componenet/ChatLog.vue'
import TestFrame from '../components/TestFrame.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/chat/:room',
    name: 'Chat',
    component: Chat
  },
  {
    path: '/dist/:room',
    name: 'ChatLog',
    component: ChatLog
  },
  {
    path: '/test',
    name: 'Test',
    component: TestFrame
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
