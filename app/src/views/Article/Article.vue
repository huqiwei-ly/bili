<template>
  <div v-if="model" class="article">
    <NavBar />
    <div class="detailinfo">
      <div class="video">
        <video controls="content" :src="model.content"></video>
      </div>
      <div class="detail-info-text">
        <div class="info-text-bt">
          <span class="info-text-bt-z">{{ model.category.title }}</span>
          <span class="info-text-bt-y">{{ model.name }}</span>
        </div>
        <div class="info-text-xx">
          <span>{{ model.userinfo.name }}</span>
          <span style="color:#999;font-size: 3.2vw;">1.2万次观看</span>
          <span style="color:#999;font-size: 3.2vw;">2333弹幕</span>
          <span style="color:#999;font-size: 3.2vw;">{{ model.date }}</span>
        </div>
        <div class="info-text-icon">
          <span>
            <span>
              <van-icon name="star" />
              <span>收藏</span>
            </span>

            <span>
              <van-icon name="down" />
              <span>缓存</span>
            </span>

            <span>
              <van-icon name="share" />
              <span>分享</span>
            </span>
          </span>
        </div>
      </div>
      <div class="detail-img-w">
        <Detail
          v-for="(item, index) in commendList"
          :key="index"
          :detailitem="item"
          class="detail-img"
        />
      </div>
    </div>

    <div>
      <commentTitle />
      <commentText/>
    </div>


  </div>
</template>

<script>
import NavBar from "@/components/compone/NavBar";
import Detail from "../Detail/Detail";
import commentTitle from "@/components/article/commentTitle";
import commentText from '../../components/article/commentText'
export default {
  data() {
    return {
      model: null,
      commendList: null,
      myUser: null,
    };
  },
  components: {
    NavBar,
    Detail,
    commentTitle,
    commentText
  },
  methods: {
    async articleitemData() {
      const res = await this.$http.get("/article/" + this.$route.params.id);
      this.model = res.data[0];
    },
    async commendData() {
      const res = await this.$http.get("/commend/");
      this.commendList = res.data;
    },
  },
  

  created() {
    this.articleitemData();
    this.commendData();
  },
  watch: {
    $route() {
      this.articleitemData();
      this.commendData();
    },
  },
};
</script>

<style lang="scss">
.article{
    background-color: white;
}
.detailinfo {
  .video {
    width: 100%;
    video {
      width: 100%;
    }
  }
}
.detail-info-text {
  padding: 4.167vw;
  background-color: white;
}
.info-text-bt-z {
  padding: 0.556vw;
  border: 0.278vw pink solid;
  font-size: 1.667vw;
  margin-right: 2.222vw;
  border-radius: 1.389vw;
  color: pink;
}
.info-text-bt-y {
  font-size: 4.167vw;
}
.info-text-xx {
  margin-top: 2.778vw;
  span {
    margin-right: 3.889vw;
  }
}
.info-text-icon {
  margin-top: 4.167vw;
  span {
    margin-right: 2.778vw;
    margin-left: 1.389vw;
    color: #999;
    font-size: 3.889vw;
  }
}

.detail-img-w {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.detail-img {
  width: 45%;
  margin: 1.389vw 0;
}
</style>
