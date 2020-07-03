<template>
  <div class="Home">
    <NavBar />
    <van-tabs v-model="active" swipeable sticky>
      <van-tab
        v-for="(item, index) in category"
        :key="index"
        :title="item.title"
      >
        <div class="detail-img-w">
          <Detail
            class="detail-img"
            :detailitem="categoryitem"
            v-for="(categoryitem, categoryindex) in item.list"
            :key="categoryindex"
          />
        </div>

        <van-list
          v-model="item.loading"
          :immediate-check="false"
          :finished="item.finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
        </van-list>

      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import NavBar from "@/components/compone/NavBar";
import Detail from "@/views/Detail/Detail";
export default {
  data() {
    return {
      category: [],
      active: 0,
    };
  },
  components: {
    NavBar,
    Detail,
  },
  methods: {
    async selectCategory() {
      const res = await this.$http.get("/category");
      this.changeCategory(res.data);
    },
    changeCategory(data) {
      const category1 = data.map((item) => {
        item.list = [];
        item.page = 0;
        item.finished = false;
        item.loading = false;
        item.pagesize = 10;
        return item;
      });
      this.category = category1;
      this.selectArticle();
      console.log(category1);
    },
    async selectArticle() {
      const categoryitem = this.categoryItem();
      const res = await this.$http.get("/detail/" + categoryitem._id, {
        params: {
          page: categoryitem.page,
          pagesize: categoryitem.pagesize,
        },
      });
      categoryitem.list.push(...res.data);
      categoryitem.loading = false;
      if(res.data.length<categoryitem.pagesize){
          categoryitem.finished = false
      }
    },
    onLoad(){
        const categoryitem = this.categoryItem()
        categoryitem.page += 1
        this.selectArticle()
        
    },
    categoryItem() {
      const categoryItem = this.category[this.active];
      return categoryItem;
    },
  },
  watch: {
    active() {
      this.selectArticle();
    },
  },
  created() {
    this.selectCategory();
  },
};
</script>

<style lang="scss">
.detail-img-w {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.detail-img {
  width: 45%;
  margin: 1.389vw 0;
}
.Home {
  background-color: white;
}
</style>
