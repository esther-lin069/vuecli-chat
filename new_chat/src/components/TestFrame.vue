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
                <hr>
                <iframe :src="src" :style="frameStyle" frameborder="0" ref="iframe" ></iframe>
                <input v-model="src">
            </div>
        </div>

        <div class="md-div">
            <input type="text" v-model="user">
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
export default {
    name: 'TestFrame',
    data() {
        return {
            baseSrc: "http://localhost:8083/dist/",
            src: this.baseSrc + this.room_location +"?user="+this.user,
            room_location:'main',
            user:'123',
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
        }
    },
    methods: {
        WindowMode(b){
            if(b === false){
                this.text = '回復'
                this.chat_window = window.open(this.src,'','width=600,height=600')
                this.chat_window.moveTo(500,100)
            }
            else{
                this.text = '視窗化'
                this.chat_window.close()
            }
            this.windowlize = !b            
        },
        SendInfo(id){
            this.room_location = id
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