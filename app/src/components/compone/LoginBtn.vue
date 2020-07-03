<template>
    <div class="btn" @click="registerClick">
        <div class="loginbtn">{{btntext}}</div>
    </div>
</template> 

<script>
export default {
    props:['btntext'],
    methods: {
        registerClick(){
            this.$emit('registerSubmit')
        }
    },
}
</script>

<style lang="scss">
    .btn{
        padding: 4.167vw 10.001px;
    }
    .loginbtn{
        height: 12.5vw;
        color: white;
        font-size: 4.444vw;
        background-color: pink;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 6.944vw;
    }
</style>