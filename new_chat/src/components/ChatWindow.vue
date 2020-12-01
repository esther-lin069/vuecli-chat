<template>
    <div>
        <chat-log />
        <Member />
    </div>

</template>

<script>
import ChatLog from './chat_componenet/ChatLog.vue'
import Member from './chat_componenet/Member.vue'

export default {
  name: 'Chat',
  components: {
    ChatLog,
    Member
  }
}
</script>

<style>
@import '../assets/css/main.css';
</style>
