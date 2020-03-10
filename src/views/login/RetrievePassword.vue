<template>
  <div class="retrieve-password">
    <LoginHeader>
      <el-form
        :model="retrivePsdForm"
        :rules="retrivePsdRules"
        ref="retrivePsdForm"
        label-width="100px"
        class="demo-ruleForm"
        slot="loginContent"
      >
        <div class="form-title">
          <h2>找回密码</h2>
        </div>
        <el-form-item prop="username">
          <el-input
            type="text"
            v-model="retrivePsdForm.username"
            autocomplete="off"
            clearable
          >
            <i slot="prefix" class="fa fa-user-o"></i>
          </el-input>
        </el-form-item>
        <el-form-item prop="email">
          <el-input v-model="retrivePsdForm.email" autocomplete="off" clearable>
            <i slot="prefix" class="fa fa-envelope-o"></i>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            :loading="loading"
            type="primary"
            @click="submitForm('loginForm')"
            >确定</el-button
          >
        </el-form-item>
      </el-form>
    </LoginHeader>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from "vue-property-decorator";
import LoginHeader from "@/components/LoginHeader.vue";
@Component({
  components: {
    LoginHeader
  }
})
export default class RetrievePassword extends Vue {
  private loading: boolean = false;
  @Provide() retrivePsdForm: {
    username: string;
    email: string;
  } = {
    username: "",
    email: ""
  };
  @Provide() retrivePsdRules = {
    username: [{ required: true, message: "请输入账号", trigger: "blur" }],
    email: [
      { required: true, message: "请输入邮箱", trigger: "blur" },
      { type: "email", message: "请输入正确的邮箱", trigger: "blur" }
    ]
  };
  submitForm(): void {
    this.loading = true;
    (this.$refs["retrivePsdForm"] as any).validate((valide: any) => {
      if (valide) {
        (this as any).$axios
          .post("/api/users/findPwd", this.retrivePsdForm)
          .then((res: any) => {
            console.log("找回密码", res);
            if (res.status == "200") {
              this.loading = false;
              this.$router.push("/login");
              this.$message({
                message: res.data.msg,
                type: "success"
              });
            }else {
              this.loading = false;this.$message({
                message: res.data.msg,
                type: "error"
              });

            }
          })
          .catch((err: any) => {
            this.loading = false;
            console.log(err);
          });
      } else {
        this.loading = false;
      }
    });
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_mixin.scss";
.retrieve-password {
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
}
</style>
