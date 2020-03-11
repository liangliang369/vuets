<template>
  <div class="layout-header">
    <div class="left">
      <img src="@/assets/images/logo.png" alt="" />
      <span>淘票票管理系统</span>
    </div>
    <div class="right">
      <el-dropdown @command="handleCommand">
        <img src="@/assets/images/admin.jpg" alt="" />
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="user">个人中心</el-dropdown-item>
          <el-dropdown-item command="loginut">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script lang="ts">
import { Component,Vue } from 'vue-property-decorator'
@Component
export default class LayoutHeader extends Vue{
  handleCommand(command:any) {
    if(command == 'user') {
      console.log('个人中心')
    }else {
      console.log('退出')
      sessionStorage.removeItem('loginToken');
      this.$router.push('/login');
    }
  }
}
</script>

<style lang="scss" scoped>
  .layout-header {
    position: fixed;
    top:0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 60px;
    padding:0 10px;
    box-sizing: border-box;
    background-color: darkgray;
    .left {
      display: flex;
      align-items: center;
      img {
        height: 32px;
      }
    }
    .right {
      display: flex;
      align-items: center;
      img {
        height:28px;
        border-radius: 50%;
      }
    }
  }
</style>
