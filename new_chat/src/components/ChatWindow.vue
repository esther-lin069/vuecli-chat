<template>
    <div class="container">
        <button @click="WindowMode(windowlize)">
            {{ text }}
        </button>
        <div :style="frameStyle" v-show="!windowlize">
            <iframe :src="src" :style="frameStyle" frameborder="0" ref="iframe" ></iframe>
        </div>
    </div>
</template>
<script>


export default {
    name: 'ChatWindow',
    data() {
        return {
            src: "http://localhost:8083/chat_window/chat_index.html",
            frameStyle:{
                width:'100%',
                height:'100%',
            },
            text: '視窗化',
            chat_window: null,
            windowlize: false,
        }
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
.container{
    margin: 0 auto;
    padding: 2em;
    width: 25%;
    height: 25em;
    background-color: rgb(42, 117, 120);
}
</style>