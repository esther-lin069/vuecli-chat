<template>
  <div id="app">
    <chat-log :info="info" />
    <span>Room:{{ info.id }}/User:{{ info.user }}/{{ test }}</span>
  </div>
</template>

<script>
import ChatLog from './components/chat_componenet/ChatLog'

var functionOutsideVue = function(vuecomponent) {
  window.addEventListener("message", function(event){
    var data = event.data;
    switch (data.cmd){
        case 'refresh': 
          vuecomponent.SetInfo(data.params)
    }
  })
}

export default {
  name: 'App',
  components:{
    ChatLog 
  },
  data() {
    return {
      info: {},
      test: location.search
    }
  },
  created() {
    functionOutsideVue(this);    
  },
  methods: {
    SetInfo: function(obj){
      this.info = obj
    }
  },
}
</script>