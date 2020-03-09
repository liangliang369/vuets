<template>
  <div class="retrieve-password">
    <LoginHeader>
      <el-form
        :model="retrivePsdForm"
        :rules="retrivePsdRules"
        ref="loginForm"
        label-width="100px"
        class="demo-ruleForm"
        slot="loginContent"
      >
        <el-form-item prop="username">
          <el-input
            type="text"
            v-model="retrivePsdForm.username"
            autocomplete="off"
          >
           <i slot="prefix" class="fa fa-user-o"></i>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            type="password"
            v-model="retrivePsdForm.email"
            autocomplete="off"
          >
           <i slot="prefix" class="fa fa-envelope-o"></i>
        </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('loginForm')"
            >确定</el-button
          >
        </el-form-item>
      </el-form>
    </LoginHeader>
  </div>
</template>

<script lang="ts">
import { Component,Vue, Provide} from 'vue-property-decorator';
import LoginHeader from '@/components/LoginHeader.vue';
@Component ({
  components: {
    LoginHeader
  }
})
export default class RetrievePassword extends Vue{
  @Provide() retrivePsdForm:{
    username:string,
    email:string
  }={
    username:'',
    email:''
  };
  @Provide() retrivePsdRules={
    username: [{ required: true, message: "请输入账号", trigger: "blur" }],
    email: [{ required: true, message: "请输入邮箱", trigger: "blur" }]
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
    .el-button {
      width: 100%;
    }
  }
}
</style>