<template>
  <div @click="pathPush" v-if="detailitem">
    <div class="detailItem">
      <div class="imgparent">
        <img :src="detailitem.img" alt="" style="width:100%" />
        <div class="bottom">
          <span class="video"><van-icon name="play-circle-o" />1111</span>
          <span class="comment">
            <van-icon name="chat-o" />
            {{ detailitem.commentlen }}</span
          >
        </div>
      </div>

      <p>{{ detailitem.name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["detailitem"],
  methods: {
      pathPush(){
          console.log(this.$route);
          if(this.$route.path != `/article/${this.detailitem.id}`) {
                this.$router.push(`/article/${this.detailitem.id}`)
            }
          
      }
  },
};
</script>

<style lang="scss">
.detailItem {
  p {
    font-size: 3.333vw;
  }
}
.imgparent {
  position: relative;

  .video {
    position: absolute;
    left: 1.389vw;
    bottom: 0;
    color: pink;
  }
  .comment {
    position: absolute;
    right: 2vw;
    bottom: 0;
    color: pink;
  }
  .van-icon-play-circle-o {
    margin-right: 5px;
  }
}
</style>
