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
                <!-- <chat-log :info="info" /> -->
                <!-- <hr> -->
                <iframe :src="src" :style="frameStyle" frameborder="0" ref="iframe" ></iframe>
            </div>
        </div>
        
        <div class="md-div" v-if="show">
            <chat-log />
        </div>

        <div class="md-div">
            <dl>
                <dt 
                v-for="(room, index) in rooms"
                :key="index">
                    <button @click="SendInfo(room.id)">{{ room.name }}</button>
                </dt> 
            </dl>
        </div>
    </div>
</template>
<script>
import ChatLog from './chat_componenet/ChatLog'

export default {
    name: 'ChatWindow',
    data() {
        return {
            src: "http://localhost:8083/dist/index.html",
            frameStyle:{
                width:'100%',
                height:'100%',
            },
            istyle: {
                i: 'fas',
                open: 'fa-external-link-alt',
                recover: 'fa-window-maximize'
            },
            iframe: null,
            chat_window: null,
            windowlize: false,
            show: false,
            rooms: [
                {
                    id: 1,
                    name: 'Room1'
                },
                {
                    id: 2,
                    name: 'Room2'
                },
                {
                    id: 3,
                    name: 'Room3'
                },
                {
                    id: 4,
                    name: 'Room4'
                },
            ],
            // info: {id:'test'},
        }
    },
    components: {
        ChatLog
    },
    mounted() {
        this.iframe = this.$refs.iframe.contentWindow
    },
    methods: {
        WindowMode(b){
            if(b === false){
                this.text = '回復'
                this.chat_window = window.open('http://localhost:8083/dist/index.html','','width=600,height=600')
                this.chat_window.moveTo(500,100)
            }
            else{
                this.text = '視窗化'
                this.chat_window.close()
            }
            this.windowlize = !b            
        },
        SendInfo(id){
            this.iframe.postMessage({
                cmd: 'refresh',
                params: {
                    id: id,
                    user: '123'
                }
            }, '*')
            // this.info = {
            //     id: id,
            //     user: '123'
            // }
        },
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