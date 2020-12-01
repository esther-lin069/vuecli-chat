<template>
    <div>
    <!-- nav bar -->
        <div class="nav">
            <div class="nav-left">
                <span class="client-info-text">IP: {{ ipAddress }} </span>
                <span> / browser: {{ $browserDetect.meta.name + "-" + $browserDetect.meta.version }}</span>
            </div>
            <div class="nav-right">
                <span class="nav-title">
                    <i class="fa fa-fish"></i>
                    <span>Go chat！</span>
                </span>
            </div>
        </div>
        <Room />
        <chat-log />
        <Member />
    </div>

</template>

<script>
import Room from './chat_componenet/Room.vue'
import ChatLog from './chat_componenet/ChatLog.vue'
import Member from './chat_componenet/Member.vue'

export default {
  name: 'Chat',
  components: {
    Room,
    ChatLog,
    Member
  },
  data: function() {
    return {
      ipAddress: ''
    };
  },
  created() {
    fetch('https://api.ipify.org?format=json')
    .then(x => x.json())
    .then(({ ip }) => {
        this.ipAddress = ip;
    });
  }
}
</script>

<style>
@import '../assets/css/main.css';
</style>
