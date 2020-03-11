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
        <div class="form-title">
          <h2>登录</h2>
        </div>
        <el-form-item prop="username">
          <el-input type="text" v-model="loginForm.username" autocomplete="off" clearable="">
            <i slot="prefix" class="fa fa-user-o"></i>
          </el-input>
        </el-form-item>
        <el-form-item prop="pwd">
          <el-input type="password" v-model="loginForm.pwd" autocomplete="off" show-password>
            <i slot="prefix" class="fa fa-lock"></i>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            :loading="isLogin"
            type="primary"
            @click="submitForm('loginForm')"
            >登录</el-button
          >
        </el-form-item>
        <div class="operation">
          <span>
            <el-checkbox v-model="loginForm.autoLogin"
              >7天内自动登录</el-checkbox
            >
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
import { Component, Vue, Provide} from "vue-property-decorator";
import { State,Getter,Mutation,Action }  from 'vuex-class'
import LoginHeader from "@/components/LoginHeader.vue";
@Component({
  components: {
    LoginHeader
  }
})
export default class Login extends Vue {
  // 存储用户信息
  @Action('setUser') setUser:any;
  private isLogin: boolean = false;
  @Provide() loginForm: {
    username: String;
    pwd: String;
    autoLogin: Boolean;
  } = {
    username: "",
    pwd: "",
    autoLogin: true
  };
  @Provide() loginRules = {
    username: [{ required: true, message: "请输入账号", trigger: "blur" }],
    pwd: [{ required: true, message: "请输入密码", trigger: "blur" }]
  };
  submitForm(): void {
    this.isLogin = true;
    (this.$refs["loginForm"] as any).validate((valid: boolean) => {
      if (valid) {
        (this as any).$axios
          .post("/api/users/login", this.loginForm)
          .then((res: any) => {
            console.log(res.data);
            if (res.status=='200') {
              this.isLogin = false;
              sessionStorage.setItem('loginToken',res.data.token); 
              this.setUser(res.data.token);
              this.$router.push('/');
              this.$message({
                message:res.data.msg,
                type: 'success'
              });
            }
          })
          .catch((err: any) => {
            this.isLogin = false;
          });
      } else {
        alert("error");
        return false;
      }
    });
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
    .form-title {
      margin-bottom: 20px;
      font-size: 35px;
    }
    .el-button {
      width: 100%;
    }
  }
  .demo-ruleForm >>> .el-form-item__content {
    margin-left: 0px;
  }
  .operation {
    display: flex;
    justify-content: space-between;
    color: #409eff;
    font-size: 14px;
  }
}
</style>
