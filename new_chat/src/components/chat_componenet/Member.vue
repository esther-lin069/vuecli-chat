<template>
  <div>
    <div id="member">
      <h5 class="title-text">
        <button
          class="list-btn"
          @click="seen = !seen"
          :style="{ color: seen ? '#FFF' : '#000' }"
        >
          在線列表
        </button>
      </h5>

      <transition name="slide-fade" mode="out-in">
        <!-- 線上使用者區塊 -->
        <div v-if="seen" key="online">
          <div id="myUserBlock" class="card">
          <div class="div-ell">
            <span style="color: #f4e868; margin-right: 8px">
              <i class="fa fa-user"></i>
            </span>
            <span class="box-text">{{ username }}</span>
          </div>
        </div>
          <!-- 清單 -->
          <dl>
            <dt
              v-for="(member, index) in o_members"
              :id="member.username"
              :key="index"
            >
              <div class="card">
                <div class="div-ell">
                  <span style="color: #00798f; margin-right: 8px">
                    <i class="fa fa-user"></i>
                  </span>
                  <span class="box-text">{{ member.username }}</span>
                </div>
              </div>
            </dt>
          </dl>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import global from '../gloval_var'


export default {
  name: 'Member',
  data: function () {
    return {
      username: global.USER,
      o_members: [],
      seen: true, // 預設開啟在線列表
      search: '',
    }
  },
  methods: {
    
  },
  beforeUpdate (){
    this.o_members = global.ONLINE
  }
}

</script>
<style>
#member {
    overflow: auto;
    background-color:#007a8f;
    border-radius: .3em;
    height: 25vh;
    width: 30%;
}
</style>