<template>
  <div class="comment-item">
    <div class="comment-text-t" v-for="(item, index) in commentChild" :key="index">
        <div class="userImg">
            <div class="comment-text-img">
                <img v-if="item.userinfo && item.userinfo.user_img" :src="item.userinfo.user_img" alt="" />
                <img v-else src="@/assets/bililogo.jpg" alt="">
            </div>

        <div class="comment-text-content">
            <p>
            <span v-if="item.userinfo">{{item.userinfo.name}}</span>
            <span v-else>匿名评论</span>
            <span>{{item.comment_date}}</span>
            </p>
            <br/>
          <div v-if="!temp">
              {{item.comment_content}}
            </div>
            <div v-else>
              {{item.comment_content}}
            </div>
      </div>
    </div>

      <commentchildItem :commentChild='item.child' temp></commentchildItem>
    </div>
  </div>
</template>

<script>
export default {
    name:'commentchildItem',
    props: ["commentChild","temp"],
};
</script>

<style lang="scss">
.comment-item{
.comment-text-t{
    display: flex;
    flex-direction: column;
   .userImg{
          display: flex;
          margin-bottom: 2.778vw;
          img{
              margin: 0 1.389vw 2.778vw 0;
          }
          p{
              flex: 1;
              font-size: 3.611vw;
              color: #555;
              display: flex;
              justify-content: space-between;
              margin-bottom: 1.389vw;
          }
      }
}
}
</style>
