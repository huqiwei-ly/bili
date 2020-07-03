<template>
  <div class="comment-text">
    <div class="comment-text-d" v-for="(item, index) in commentList" :key="index">
        <div class="comment-text-t">
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
        <div>
            {{item.comment_content}}
        </div>
      </div>
        </div>
        <commentItem :commentChild='item.child'> </commentItem>
    </div>
  </div>
</template>

<script>
import commentItem from './commentItem'
export default {
    
  data() {
      return {
          commentList:null,
      }
  },
  components: {
    commentItem
  },
  methods: {
    async commentData() {
      const res = await this.$http.get("/comment/" + this.$route.params.id); 
      if(res.data){
        this.$emit('lengthselect',res.data.length)
      }
      this.commentList = this.changeCommentData(res.data)
    },
    changeCommentData(data) {
      function fn(temp) {
        let arr1 = [];
        for (var i = 0; i < data.length; i++) {
          if (data[i].parent_id == temp) {
            arr1.push(data[i]);
            data[i].child = fn(data[i].comment_id);
          }
        }
        return arr1;
      }
       return fn(null);
    },
    publishClick(id) {
     this.$emit('publishClick',id)
    }
  },
  created() {
    this.commentData();
  }
};
</script>

<style lang="scss">
.comment-text {
  padding: 2.778vw 2.778vw;
  .comment-text-d{
    border-bottom: 0.278vw solid #e7e7e7;
  }
  .comment-text-t {
    display: flex;
    padding: 2.778vw;
    .comment-text-img {
      margin-right: 4.167vw;
      img {
        width: 9.722vw;
        height: 9.722vw;
        border-radius: 50%;
      }
    }
  }
  .comment-text-content {
    flex: 1;
    p {
      display: flex;
      justify-content: space-between;
      font-size: 3.46667vw;
      color: #757575;
      margin-bottom: 2.778vw ;
    }
    div{
        font-size: 3.611vw;
    }
  }
}
</style>
