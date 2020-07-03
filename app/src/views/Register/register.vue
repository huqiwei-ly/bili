<template >
    <div>
        <LoginTop middleTop='注册bilibili'>
            <div slot="right" style="font-size:4.444vw;color:pink" @click="$router.push('/login')">登录</div>
        </LoginTop>

        <LoginText lable='昵称' 
        style="margin:4.167vw 0"
        placeholder="请输入2-6位的昵称"
        @inputval='res => model.name = res'
        />

        <LoginText lable='账号' 
        placeholder="请输入6-12位的账号"
        @inputval='res => model.username = res'
        />

        <LoginText lable='密码' 
        placeholder="请输入6-12位的密码"
        type='password'
        @inputval='res => model.password = res'
        />

        <login-btn btntext='注册' @registerSubmit='registerSubmit'></login-btn>
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
                name:'',
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
           let ncrulg = /^.{2,6}$/
           let zhmmrulg = /^.{6,12}$/
            if(ncrulg.test(this.model.name) && zhmmrulg.test(this.model.username) && zhmmrulg.test(this.model.password)){
              const res = await this.$http.post('/register',this.model)
                this.$msg.fail(res.data.msg)
                localStorage.setItem('id',res.data.id)
                localStorage.setItem('token',res.data.objtoken)
                setTimeout(()=>{
                    this.$router.push('/login')
                },1000)
            }else{
                this.$msg.fail('格式不正确！请重新输入！')
            }
            
        }
    },
}
</script>