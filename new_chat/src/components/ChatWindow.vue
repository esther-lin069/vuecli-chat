<template>
    <div>
        <div class="sm-div">
            <button class="w-btn" @click="WindowMode(windowlize)">
                <span>
                    <i :class="[istyle.i, !windowlize ? istyle.open:istyle.recover]"></i>
                </span>
            </button>
            <h5 v-show="windowlize" style="color:white">再點一次按鈕我就回來囉！</h5>
            <div :style="frameStyle" v-show="!windowlize">
                <chat-log />
                <!-- <iframe :src="src" :style="frameStyle" frameborder="0" ref="iframe" ></iframe> -->
            </div>
        </div>
        
        <div class="md-div">
            <chat-log />
        </div>
    </div>
</template>
<script>
import ChatLog from './chat_componenet/ChatLog'

export default {
    name: 'ChatWindow',
    data() {
        return {
            src: "http://localhost:8083/chat_window/chat_index.html",
            frameStyle:{
                width:'100%',
                height:'100%',
            },
            istyle: {
                i: 'fas',
                open: 'fa-external-link-alt',
                recover: 'fa-window-maximize'
            },
            chat_window: null,
            windowlize: false,
        }
    },
    components: {
        ChatLog
    },
    methods: {
        WindowMode(b){
            if(b === false){
                this.text = '回復'
                this.chat_window = window.open('http://localhost:8083/chat_window/chat_index.html','','width=600,height=600')
                this.chat_window.moveTo(500,100)
            }
            else{
                this.text = '視窗化'
                this.chat_window.close()
            }
            this.windowlize = !b            
        }
    },
}
</script>
<style>
body{
    background-color: cadetblue;
}
.sm-div{
    margin: 0 auto;
    width: 325px;
    height: 25em;
    background-color: rgb(42, 117, 120);
    position: relative;
}
.w-btn{
    background-color: rgba(0, 0, 0, 0.646);
    border: 0;
    border-radius: 0 0 0 .3em ;
    width: 2em;
    height: 2em;
    position: absolute;
    right: 0;
    top: 0;
    color: white;
}
.md-div{
    width: 600px;
    height: 500px;
}
</style>