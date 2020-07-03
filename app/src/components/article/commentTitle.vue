<template>
  <div class="comment-text">
    <p class='comment-title'>
        <span class="conmment-title-span-1">评论</span>
        <span class="comment-title-span-2">(4070)</span>
    </p>
  <div class="comment-img">
      <img :src="myUser.user_img" alt="" v-if="myUser.user_img">
      <img src="@/assets/bililogo.jpg" alt="" v-else>
      <input v-model="comcomment" type="text" placeholder="说点什么吧">
      <button @click="focusInput">发布</button>
  </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            myUser:{},
            comcomment:'',
        }
    },
  methods: {
    async myUserinfo() {
      const res = await this.$http.get("/user/" + localStorage.getItem("id"));
      this.myUser = res.data[0];
    },
    focusInput(){
      if (!this.myUser && !localStorage.getItem('token')&& !localStorage.getItem('id')) {
        this.$msg.fail('请先登录')
        return
      }
    }
  },
  created() {
    if(localStorage.getItem('token')){
      this.myUserinfo();
    }
  },
};
</script>

<style lang="scss">
    .comment-text{
        padding: 8.333vw 2.778vw 0 2.778vw;
        background: white;
    }
    .comment-title-span-2{
        color: #999;
        font-size: 4.26667vw;
        margin-left: 2.222vw;
    }
    .comment-img{
      padding: 2.778vw 0;
      display: flex;
      justify-content: space-around;
      img{
        width: 8vw;
        height: 8vw;
        border-radius: 50%;
      }
      input{
        outline: none;
        border: none;
        background: #f4f4f4;
        border-radius: 8.333vw;
        font-size: 3.333vw;
        color: #c0c0c0;
        margin-left: 15px;
        padding: 2.778vw;
      }
      button{
        outline: none;
        background-color: pink;
        color: white;
        border: none;
        font-size: 3.333vw;
        padding: 0 4.167vw;
        border-radius: 8.333vw;
      }
    }
</style>
