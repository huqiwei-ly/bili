<template>
    <div class="userinfo">
        <NavBar></NavBar>
        <img src="@/assets/bannerTop_new.png" alt="" class="backImg">
        <userDetail :userInfo='model' />
    </div>
</template>

<script>
import NavBar from '@/components/compone/NavBar'
import userDetail from '@/components/userComponent/userDetail'
export default {
    data() {
        return {
            model:{}
        }
    },
    components:{
        NavBar,userDetail
    },
     methods:{
        async userData() {
            const res =  await this.$http.get('/user/' + localStorage.getItem('id'))
            this.model = res.data[0]
            console.log(res);
        }
    },
        created() {
            this.userData()
        }
}
</script>

<style lang="scss">
    .userinfo{
        .backImg{
                width: 100%;
                height: 24vw;
        }
    }
</style>