<template>
    <div class="NavBer">
        <div class="logo">
            <img src="@/assets/bililogo.jpg" alt="" @click="$router.push('/home')">
        </div>
        <div class="NavMid">
            <p>
                <van-icon name="search" />
                请输入需要搜索的内容
            </p>
        </div>
        <div class="Navright">
            <div class="NavTx" @click="$router.push('/edit')">
                <img :src="imgUrl" alt="" class="NavTx" v-if="imgUrl">
                <img src="@/assets/bililogo.jpg" alt="" class="NavTx" @click="$router.push('/login')" v-else>
            </div>
            <button>下载 App</button>
        </div>
    </div>
</template>

<script>
export default {

    data() {
        return {
            imgUrl:''
        }
    },

    async mounted() {
      if (localStorage.getItem('token')) {
          const res = await this.$http.get('/user/' + localStorage.getItem('id'))
          this.imgUrl = res.data[0].user_img
      }
      
    },
}
</script>

<style lang="scss">
    .NavBer{
        display: flex;
        height: 12.5vw;
        background-color: white;
    }
    .logo{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 22.222vw;
        img{
            width: 80%; 
        }
    }
    .NavMid{
        flex:1;
        display: flex;
        align-items: center;
        width: 44vw;
        p{
            background-color: #f4f4f4;
            height: 7.222vw;
            position: relative;
            margin-left: 1vw;
            width: 80%;
            border-radius: 3.611vw;
            color: #aaa;
            font-size: 2.778vw;
            line-height: 7.778vw;
            padding-left: 6.944vw;
            .van-icon-search{
                position: absolute;
                left: 2.778vw;
                top: 50%;
                transform: translate(0,-40%);
                color: #aaa;
            }
        }
    }
    .Navright{
        display: flex;
        justify-content: center;
        align-items: center;
        .NavTx{
            width: 7.222vw;
            height: 7.222vw;
            border-radius: 50%;
            background-color: pink;
        }
        button{
            width: 22.222vw;
            height: 6.667vw;
            border: none;
            background: #Fb7299;
            font-size: 3.467vw;
            color: white;
            margin: 0 2.222vw;
            border-radius: 0.6vw;
        }
    }

</style>