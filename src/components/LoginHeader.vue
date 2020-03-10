<template>
  <div class="login-wrapper">
    <div class="login-page">
      <div class="login-header-top">
        <div class="logo">
          <img src="@/assets/images/logo.png" alt="" />
          <h2>有道系统</h2>
        </div>
        <p>成功不是将来才有的，而是从决定去做的那一刻起，持续累积而成</p>
      </div>
      <el-card  class="box-card">
        <slot name="loginContent"></slot>
      </el-card>
    </div>
  </div>
</template>

<script lang="ts">
import { Component,Vue } from 'vue-property-decorator'
@Component({})
export default class LoginHeader extends Vue {}
</script>

<style lang="scss" scoped>
.login-wrapper {
  overflow: hidden;
}
.login-page {
  width: 480px;
  margin: 200px auto;
  text-align: center;
  overflow: hidden;
  .login-header-top {
    .logo {
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 100px;
      }
      h2 {
        font-size: 40px;
        color: #fff;
      }
    }
    p {
      color: #fff;
    }
  }
  .login-content {
    width:100%;
    background-color: #fff;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    margin-top: 20px;
  }
  .box-card {
    margin-top: 20px;
  }
}
</style>
