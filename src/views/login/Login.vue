<template>
  <div class="login">
    <LoginHeader>
      <el-form
        :model="loginForm"
        :rules="loginRules"
        ref="loginForm"
        label-width="100px"
        class="demo-ruleForm"
        slot="loginContent"
      >
        <el-form-item prop="username">
          <el-input
            type="text"
            v-model="loginForm.username"
            autocomplete="off"
          >
           <i slot="prefix" class="fa fa-user-o"></i>
          </el-input>
        </el-form-item>
        <el-form-item prop="pwd">
          <el-input
            type="password"
            v-model="loginForm.pwd"
            autocomplete="off"
          >
           <i slot="prefix" class="fa fa-lock"></i>
        </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('loginForm')"
            >登录</el-button
          >
        </el-form-item>
        <div class="operation">
          <span>
             <el-checkbox v-model="loginForm.autoLogin">7天内自动登录</el-checkbox>
          </span>
          <span @click="$router.push('/retrievePassword')">
            忘记密码
          </span>
        </div>
      </el-form>
    </LoginHeader>
  </div>
</template>

<script lang="ts">
import { Component, Vue,Provide} from "vue-property-decorator";
import LoginHeader from "@/components/LoginHeader.vue";
@Component({
  components: {
    LoginHeader
  }
})
export default class Login extends Vue {
  @Provide() loginForm:{
    username:String,
    pwd:String,
    autoLogin:Boolean
  }={
    username:'',
    pwd:'',
    autoLogin:true,
  };
  @Provide() loginRules={
    username: [{ required: true, message: "请输入账号", trigger: "blur" }],
    pwd: [{ required: true, message: "请输入密码", trigger: "blur" }]
  };
  submitForm():void {
    (this.$refs['loginForm'] as any).validate((valid:boolean)=>{
      if(valid) {
        alert('ok')
      }else {
        alert('error');
        return false;
      }
    })
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_mixin.scss";
.login {
  width: 100%;
  height: 100%;
  @include bgColor();
  .el-form {
    .el-button {
      width: 100%;
    }
  }
  .demo-ruleForm >>> .el-form-item__content {
    margin-left:0px;
  }
  .operation {
    display: flex;
    justify-content: space-between;
    color: #409EFF;
    font-size: 14px;
  }
}
</style>
