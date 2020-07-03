<template>
    <div>
        <van-field
        :label="lable" 
        :type='type' 
        :placeholder="placeholder" 
        v-model="content"
        
        />
    </div>
</template>

<script>
export default {
    data(){
        return{
            content:''
        }
    },
    props:['lable','type','placeholder','rule'],
    methods: {
        handlerulg(){
            const rue = new RegExp(this.rule)
            if(rue.test(this.content)){
                this.$emit('inputval',this.content)
            }        
        }
    },

    watch: {
        content(){
            this.handlerulg()
        }
    },
}
</script>

<style lang="">
    
</style>