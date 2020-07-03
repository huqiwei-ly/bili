
<template>
  <div v-if="model" class="editView">
      <NavBar class="bootm"></NavBar>
      <div class="uploader">
          <van-uploader class="uploader_img" :after-read="afterRead" preview-size="100vw" />
           <editBanner left="头像">
            <img :src="model.user_img" slot="right" alt="" v-if="model.user_img" class="edit-img-y">
            <img src="@/assets/bililogo.jpg" slot="right" alt="" v-else class="edit-img-y">
            </editBanner>
      </div>
      
    <editBanner left="昵称" @bannerClick='show =true'>
        <a href="JavaScript:;" slot="right">{{model.name}}</a>
    </editBanner>
    <editBanner left="账号">
        <a href="JavaScript:;" slot="right">{{model.username}}</a>
    </editBanner>
    <editBanner left="性别" @bannerClick='gendershow =true'>
        <a href="JavaScript:;" slot="right">{{model.gender == 1?'男':'女'}}</a>
    </editBanner>
    <editBanner left="个性签名" @bannerClick='textshow =true'>
        <a href="JavaScript:;" slot="right">{{model.user_desc}}</a>
    </editBanner>

  
    <van-dialog 
        v-model="show" 
        title="昵称" 
        show-cancel-button 
        @confirm="confirmClick"
        @cancel = "content = ''"
        >
        <van-field v-model="content" autofocus />
    </van-dialog>

 
    <van-dialog 
        v-model="textshow" 
        title="个性签名" 
        show-cancel-button 
        @confirm="confirmSign"
        @cancel = "content = ''"
        >
        <van-field v-model="content" autofocus />
    </van-dialog>

   
    <van-action-sheet 
        v-model="gendershow" 
        :actions="actions" 
        @select="selectGender"
        cancel-text="取消"/>

    <div class="back">
        <div @click="$router.push('/userinfo')">返回个人中心</div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/compone/NavBar";
import editBanner from "@/components/compone/editBanner";
export default {
    data(){
        return{
            model:{},
            show:false,
            textshow:false,
            content:'',
            gendershow:false,
             actions: [
                        { name: '男',val:1 }, 
                        { name: '女',val:0 }, 
                      ],
        }
    },

    components:{
        NavBar,editBanner
    },
    created(){
        this.Redactget()
    },
    methods:{
       async Redactget(){
            const res = await this.$http.get('/user/'+ localStorage.getItem('id'))
            this.model = res.data[0]
        },
        
       async afterRead(file){
            console.log(file);
            const fromdata = new FormData()
            fromdata.append('file',file.file)
            const res = await this.$http.post('/upload',fromdata)
            this.model.user_img = res.data.url
            this.UserUpdate()
        },
        
        async UserUpdate(){
            const res = await this.$http.post('/update/'+ localStorage.getItem('id'),this.model)
            console.log(res);
            if(res.data.code == 200){
                this.$msg.fail('修改成功')
            }
        },
        
        confirmClick(){
            this.model.name = this.content
            this.UserUpdate()
            this.content = ''
        },
        
        confirmSign(){
            this.model.user_desc = this.content
            this.UserUpdate()
            this.content = ''
        },
       
        selectGender(data){
            this.model.gender = data.val
            this.UserUpdate()
        }
    }
}
</script>

<style lang="scss">
    .bootm{
        margin-bottom:2.778vw;
    }
    .editView{
        a{
            color: #999;
        }
        
    }
    .edit-img-y{
        border-radius: 50%;
        height: 12.778vw;
        width: 12.778vw;
    }
    .uploader{
        position: relative;
        overflow: hidden;
        .uploader_img{
            position: absolute;
            opacity: 0;
        }
    }
    .back{
        background-color: #fff;
        margin-top: 2.778vw;
        div:nth-child(1){
            border-bottom: 0.278vw solid #eee;;
        }
        div{
            padding: 2.66667vw;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 3.73333vw;
            color: #505050;
        }
    }
</style>