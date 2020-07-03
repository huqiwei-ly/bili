<template>
        <div>
        <LoginTop middleTop='登录bilibili'>
            <div slot="right" style="font-size:4.444vw;color:pink" @click="$router.push('/register')">注册</div>
        </LoginTop>

        <LoginText lable='账号' 
        placeholder="请输入6-12位的账号"
        style="margin:4.167vw 0"
        @inputval='res => model.username = res'
        />

        <LoginText lable='密码' 
        placeholder="请输入6-12位的密码"
        type='password'
        @inputval='res => model.password = res'
        />

        <login-btn btntext='登录' @registerSubmit='registerSubmit'></login-btn>
    </div>
</template>

<script>
import LoginTop from '@/components/compone/LoginTop'
import LoginText from '@/components/compone/LoginText'
import LoginBtn from '@/components/compone/LoginBtn'
export default {
   data() {
        return {
            model:{
                username:'',
                password:''
            }
        }
    },
    components:{
        LoginTop,LoginText,LoginBtn
    },
    methods: {
       async registerSubmit(){
           let zhmmrulg = /^.{6,12}$/
            if(zhmmrulg.test(this.model.username) && zhmmrulg.test(this.model.password)){
              const res = await this.$http.post('/login',this.model)
                this.$msg.fail(res.data.msg)
                if(res.data.code== 301 || res.data.code == 302){
                    return
                }
                localStorage.setItem('token',res.data.token)
                localStorage.setItem('id',res.data.id)
                console.log(res);
                
                setTimeout(()=>{
                    this.$router.push('/userinfo')
                },1000)
                console.log(res);
                
                
            }else{
                this.$msg.fail('格式不正确！请重新输入！')
            }
            
        }
    },
}
</script>

<style lang="">
    
</style>