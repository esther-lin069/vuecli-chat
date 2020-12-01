<template>
    <div>
        <chat-log />
    </div>

</template>

<script>
import ChatLog from './chat_componenet/ChatLog.vue'


export default {
  name: 'Chat',
  components: {
    ChatLog
  }
}
</script>

<style>
@import '../assets/css/main.css';
</style>
