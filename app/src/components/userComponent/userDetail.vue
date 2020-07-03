<template>
  <div class="userdetail">
    <div class="user-detail-mid">

      <div class="user-img">
        <img :src="userInfo.user_img" alt="" v-if="userInfo.user_img" class="user-tx">
        <span class="user-tx"></span>
      </div>
      <div class="user-detail-right">
        <div class="user-detail-right-top">
          <p>
            <span style="font-size: 3.73333vw;">222</span>
            <br />
            <span style="font-size: 2.93333vw;color: #999">粉丝</span>
          </p>
          <p>
            <span style="font-size: 3.73333vw;">222</span>
            <br />
            <span style="font-size: 2.93333vw;color: #999">关注</span>
          </p>
          <p>
            <span style="font-size: 3.73333vw;">222</span>
            <br />
            <span style="font-size: 2.93333vw;color: #999">获赞</span>
          </p>
        </div>

        <div>
          <button class="user-bjzl" @click="$router.push('/edit')">编辑资料</button>
        </div>
      </div>
    </div>
    <div class="userdetail-x">
      <div class=" user-detail-text">
         <span style="font-size: 4.8vw; color: #212121">{{userInfo.name}}</span>
        <br/>
        <span class="user-text-x" v-if="userInfo.user_desc">{{userInfo.user_desc}}</span>
        <span class="user-text-x" v-else>这个人很神秘，什么都没有写</span>
      </div>
    </div>

    <div class="userdetail-z">
      <div class="tabs">
        <span>动态</span>
        <span>视频</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:['userInfo']
};
</script>

<style lang="scss">
.userdetail {
  background-color: white;
  .user-detail-mid {
    display: flex;
    .user-tx {
      width: 22.222vw;
      height: 22.222vw;
      border-radius: 13.889vw;
      background: pink;
      margin-left: 2.778vw;
      position: relative;
      top: -4.167vw;
    }
    .user-detail-right {
      margin-left: 13vw;
      p {
        width: 19.444vw;
        text-align: center;
        margin-bottom: 1.389vw;
        margin-top: 1.389vw;
      }
      .user-detail-right-top {
        display: flex;
      }
      .user-bjzl {
        width: 58vw;
        height: 8.333vw;
        border: 0.278vw #fb7299 solid;
        color: #fb7299;
        background-color: white;
        border-radius: 2.778vw;
      }
    }
  }
  .userdetail-x{
    border-bottom: 0.1vw #aaa solid;
    .user-detail-text{
      margin-left: 4.167vw;
    }
    .user-text-x{
      font-size: 3.46667vw;
      color: #999;
      display: block;
      margin-top:2.13333vw;
      margin-bottom: 2.778vw;
    }
  }
  .userdetail-z{
    .tabs{
      margin-left: 2.778vw;
      height: 11.111vw;
      span{
        margin-left: 5.556vw;
        line-height: 11.111vw;
        color: #757575;
        font-size: 3.46667vw;
      }
      span:active{
        color: #fb7299;
      }
    }
  }
}
</style>
